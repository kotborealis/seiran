const BaseVisitor = require('../antlr_build/LuaVisitor').LuaVisitor;
const symbols = require('./symbols');

class Visitor extends BaseVisitor{
    constructor(...args){
        super(...args);

        this.memory_stack = [new Map];
        this.internal = this.memory_stack[0];

        this.internal.set("print", (args) => console.log(...args));

        this.inside_loop = false;
        this.break_loop = false;
    }

    memoryStackPush(){
        this.memory_stack.push(new Map);
    }

    memoryStackPop(){
        this.memory_stack.pop();
    }

    memoryStack(){
        return this.memory_stack.length
            ? this.memory_stack[this.memory_stack.length - 1]
            : false;
    }

    getLeftRightHandExp(ctx){
        return [0, 1]
            .map(ctx.exp.bind(ctx))
            .map(this.visit.bind(this));
    }

    memoryStackSearch(name){
        for(let i = this.memory_stack.length - 1; i >= 0; i--)
            if(this.memory_stack[i].has(name))
                return this.memory_stack[i].get(name);

        return undefined;
    }

    visitChunk(ctx){
        this.memoryStackPush();

        this.visitChildren(ctx);

        this.memoryStackPop();
    }

    visitBlock(ctx){
        let i = 0;
        let stat;
        let value = undefined;
        while((stat = ctx.stat(i++)) !== null){
            value = stat.accept(this);

            if(value === symbols.break){
                this.break_loop = true;
                break;
            }
        }


        if(ctx.retstat())
            value = ctx.retstat().accept(this);

        return value;
    }

    visitRetstat(ctx){
        return ctx.exp() ? ctx.exp().accept(this) : undefined;
    }

    visitStatBreak(ctx){
        return symbols.break;
    }

    visitStatIf(ctx){
        let i = 0;
        for(let exp = ctx.exp(i); exp; exp = ctx.exp(++i))
            if(exp.accept(this))
                return ctx.block(i).accept(this);

        if(ctx.block(i))
            ctx.block(i).accept(this);
    }

    visitStatWhile(ctx){
        const cond = ctx.exp(0);
        const block = ctx.block(0);

        this.inside_loop = true;

        while(cond.accept(this)){
            block.accept(this);

            if(this.break_loop)
                break;
        }

        this.inside_loop = false;
    }

    visitStatAssignment(ctx){
        const id = ctx.variable().accept(this);
        const val = ctx.exp().accept(this);

        this.memoryStack().set(id, val);

        return val;
    }

    visitStatFunction(ctx){
        const name = ctx.funcname().accept(this);

        const fn = (args) => {
            const [params, block] = ctx.funcbody().accept(this);

            this.memoryStackPush();

            for(let i = 0; i < Math.min(args.length, params.length); i++)
                this.memoryStack().set(params[i], args[i]);

            const val = block.accept(this);

            this.memoryStackPop();

            return val;
        };

        this.memoryStack().set(name, fn);
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
        const fn = this.memoryStackSearch(fn_name);
        const args = ctx.args().accept(this);
        return fn(args);
    }

    visitArgs(ctx){
        return ctx.explist().accept(this);
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
            return this.memoryStackSearch(ctx.variable().accept(this));
        else if(ctx.functioncall())
            return ctx.functioncall().accept(this);
        else
            return ctx.exp().accept(this);
    }

    visitVariable(ctx){
        return ctx.getText();
    }

    visitFuncname(ctx){
        return ctx.getText();
    }

    visitExpNil(){
        return symbols.nil;
    }

    visitExpFalse(){
        return false;
    }

    visitExpTrue(){
        return true;
    }

    visitExpNumber(ctx){
        return Number.parseFloat(ctx.getText());
    }

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