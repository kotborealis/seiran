const LuaVisitor = require('../antlr/LuaVisitor').LuaVisitor;
const LuaParser = require('../antlr/LuaParser').LuaParser;
const symbols = require('./symbols');
const RuntimeError = require('./RuntimeError');
const ReturnManager = require('./ReturnManager');
const Globals = require('./Globals');

class Visitor extends LuaVisitor{
    constructor({mem}){
        super();

        this.mem = mem;
        this.return = new ReturnManager;
    }

    getLeftRightHandExp(ctx){
        return [0, 1]
            .map(ctx.exp.bind(ctx))
            .map(this.visit.bind(this));
    }


    visitChunk(ctx){
        this.visitChildren(ctx);
    }

    visitBlock(ctx){
        this.mem.push();

        let i = 0;
        let stat;
        while((stat = ctx.stat(i++)) !== null){
            if(stat instanceof LuaParser.StatBreakContext){
                if(this.return.insideLoop()){
                    this.return.breakLoopPush();
                    break;
                }
            }

            stat.accept(this);

            if(this.return.return()){
                this.mem.pop();
                return;
            }
        }

        if(ctx.retstat()){
            const value = ctx.retstat().accept(this);

            if(this.return.insideFn())
                this.return.returnPush(value);
        }

        this.mem.pop();
    }

    visitRetstat(ctx){
        return ctx.exp() ? ctx.exp().accept(this) : undefined;
    }

    //noinspection JSMethodCanBeStatic
    visitStatBreak(ctx){
        return symbols.break;
    }

    visitStatIf(ctx){
        let i = 0;
        for(let exp = ctx.exp(i); exp; exp = ctx.exp(++i))
            if(exp.accept(this)){
                ctx.block(i).accept(this);
                return;
            }

        if(ctx.block(i))
            ctx.block(i).accept(this);
    }

    visitStatWhile(ctx){
        const cond = ctx.exp(0);
        const block = ctx.block(0);

        this.return.insideLoopPush();

        while(cond.accept(this)){
            block.accept(this);

            if(this.return.breakLoop()){
                this.return.breakLoopPop();
                break;
            }
        }

        this.return.insideLoopPop();
    }

    visitStatFor(ctx){
        this.mem.push();

        const name = ctx.NAME(0).getText();
        this.mem.declareVar(name);

        const from = ctx.exp(0).accept(this);
        const to = ctx.exp(1).accept(this);
        const step = ctx.exp(2) ? ctx.exp(2).accept(this) : (from < to ? 1 : -1);

        this.return.insideLoopPush();

        const loop_body = (counter) => {
            this.mem.setVar(name, counter);
            ctx.block(0).accept(this);

            if(this.return.breakLoop()){
                this.return.breakLoopPop();
                return true;
            }
            return false;
        };

        if(step > 0){
            for(let counter = from; counter <= to; counter += step)
                if(loop_body(counter))
                    break;
        }
        else{
            for(let counter = from; counter >= to; counter += step)
                if(loop_body(counter))
                    break;
        }

        this.return.insideLoopPop();

        this.mem.pop();
    }

    visitStatVarDeclaration(ctx){
        const name = ctx.variable().accept(this);

        if(this.mem.hasLocalVar(name))
            throw new RuntimeError(`Local variable "${name}" already exists`);

        this.mem.declareVar(name);

        if(ctx.exp(0))
            this.mem.setVar(name, ctx.exp(0).accept(this));
    }

    visitStatAssignment(ctx){
        const id = ctx.variable().accept(this);
        const val = ctx.exp(0).accept(this);

        this.mem.setVar(id, val);

        return val;
    }

    visitStatFunction(ctx){
        const name = ctx.funcname().accept(this);

        const fn = (args) => {
            const [params, block] = ctx.funcbody().accept(this);

            this.return.insideFnPush();

            this.mem.push();

            for(let i = 0; i < Math.min(args.length, params.length); i++){
                this.mem.declareVar(params[i], args[i]);
                this.mem.setVar(params[i], args[i]);
            }

            block.accept(this);

            this.mem.pop();

            this.return.insideFnPop();

            if(this.return.return())
                return this.return.returnPop();
        };

        this.mem.setVar(name, fn);
        return fn;
    }

    visitFuncbody(ctx) {
        let params = ctx.parlist() ? ctx.parlist().accept(this) : [];
        return [params, ctx.block()];
    }

    visitNamelist(ctx){
        const namelist = [];

        let i = 0;
        let name;

        while((name = ctx.NAME(i++)) !== null)
            namelist.push(name.getText());

        return namelist;
    }

    visitParlist(ctx){
        return ctx.namelist().accept(this);
    }

    visitFunctioncall(ctx){
        const fn_name = ctx.variable().accept(this);
        const fn = this.mem.getVar(fn_name);
        const args = ctx.args().accept(this);
        return fn(args);
    }

    visitArgs(ctx){
        return ctx.explist() ? ctx.explist().accept(this) : [];
    }

    visitExplist(ctx){
        const explist = [];

        let i = 0;
        let exp;

        while((exp = ctx.exp(i++)) !== null)
            explist.push(exp.accept(this));

        return explist;
    }

    visitStatFunctioncall(ctx){
        return this.visit(ctx.functioncall());
    }

    visitExpVarexp(ctx){
        return this.visit(ctx.varexp());
    }

    visitVarexp(ctx) {
        if(ctx.variable())
            return this.mem.getVar(ctx.variable().accept(this));
        else if(ctx.functioncall())
            return ctx.functioncall().accept(this);
        else
            return ctx.exp().accept(this);
    }

    //noinspection JSMethodCanBeStatic
    visitVariable(ctx){
        return ctx.getText();
    }

    //noinspection JSMethodCanBeStatic
    visitFuncname(ctx){
        return ctx.getText();
    }

    //noinspection JSMethodCanBeStatic
    visitExpNil(){
        return symbols.nil;
    }

    //noinspection JSMethodCanBeStatic
    visitExpFalse(){
        return false;
    }

    //noinspection JSMethodCanBeStatic
    visitExpTrue(){
        return true;
    }

    //noinspection JSMethodCanBeStatic
    visitExpNumber(ctx){
        return Number.parseFloat(ctx.getText());
    }

    //noinspection JSMethodCanBeStatic
    visitExpString(ctx){
        return ctx.getText().slice(1,-1);
    }

    visitExpPow(ctx){
        const [lh, rh] = this.getLeftRightHandExp(ctx).map(Number);
        return lh ** rh;
    }

    visitExpUnaryOp(ctx){
        const value = ctx.exp().accept(this);

        switch(ctx.operatorUnary().getText()){
            case 'not':
                return !value;
            case '#':
                return value.length;
            case '-':
                return value*-1;
        }
    }

    visitExpMulDivOp(ctx){
        const [lh, rh] = this.getLeftRightHandExp(ctx).map(Number);

        switch(ctx.operatorMulDivMod().getText()){
            case '*':
                return lh * rh;
            case '/':
                return lh / rh;
            case '%':
                return lh % rh;
        }
    }

    visitExpAddSubOp(ctx){
        const [lh, rh] = this.getLeftRightHandExp(ctx);

        switch(ctx.operatorAddSub().getText()){
            case '+':
                return lh + rh;
            case '-':
                return lh - rh;
        }
    }

    visitExpStrcat(ctx){
        const [lh, rh] = this.getLeftRightHandExp(ctx).map(_ => _.toString());
        return lh + rh;
    }

    visitExpComparsionOp(ctx){
        const [lh, rh] = this.getLeftRightHandExp(ctx);

        switch(ctx.operatorComparison().getText()){
            case '<':
                return Number(lh) < Number(rh);
            case '>':
                return (lh) > (rh);
            case '<=':
                return (lh) <= (rh);
            case '>=':
                return (lh) >= (rh);
            case '~=':
                //noinspection EqualityComparisonWithCoercionJS
                return lh != rh;
            case '==':
                //noinspection EqualityComparisonWithCoercionJS
                return lh == rh;
        }
    }

    visitExpAndOp(ctx){
        const [lh, rh] = this.getLeftRightHandExp(ctx);
        return lh && rh;
    }

    visitExpOrOp(ctx){
        const [lh, rh] = this.getLeftRightHandExp(ctx);
        return lh || rh;
    }
}

module.exports = Visitor;