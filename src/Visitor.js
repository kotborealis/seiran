const BaseVisitor = require('../antlr_build/LuaVisitor').LuaVisitor;
const symbols = require('./symbols');
const RuntimeError = require('./RuntimeError');

class Visitor extends BaseVisitor{
    constructor(...args){
        super(...args);

        this.memory_stack = [new Map];
        this.internal = this.memory_stack[0];

        this.internal.set("print", (args) => console.log(...args));

        this.inside_loop = [];
        this.break_loop = [];
    }


    insideLoopPush(){
        this.inside_loop.push(true);
    }

    insideLoopPop(){
        this.inside_loop.pop();
    }

    insideLoop(){
        return !!this.inside_loop[this.inside_loop.length - 1];
    }


    breakLoopPush(){
        this.break_loop.push(true);
    }

    breakLoopPop(){
        this.break_loop.pop();
    }

    breakLoop(){
        return !!this.break_loop[this.break_loop.length - 1];
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

    memoryStackGet(name){
        for(let i = this.memory_stack.length - 1; i >= 0; i--)
            if(this.memory_stack[i].has(name))
                return this.memory_stack[i].get(name);

        return undefined;
    }

    memoryStackDeclare(name){
        this.memoryStack().set(name, undefined);
    }

    memoryStackSet(name, value){
        for(let i = this.memory_stack.length - 1; i >= 0; i--)
            if(this.memory_stack[i].has(name))
                return this.memory_stack[i].set(name, value);
    }

    memoryStackLocalHas(name){
        return this.memoryStack().has(name);
    }

    checkVarExists(name){
        if(this.memoryStackGet(name) === undefined)
            throw new RuntimeError(`Variable "${name}" does not exists`);
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
        this.memoryStackPush();

        let i = 0;
        let stat;
        let value = undefined;
        while((stat = ctx.stat(i++)) !== null){
            value = stat.accept(this);

            if(value === symbols.break){
                this.breakLoopPush();
                break;
            }
        }


        if(ctx.retstat())
            value = ctx.retstat().accept(this);

        this.memoryStackPop();

        return value;
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

        this.insideLoopPush();

        while(cond.accept(this)){
            block.accept(this);

            if(this.breakLoop()){
                this.breakLoopPop();
                break;
            }
        }

        this.insideLoopPop();
    }

    visitStatVarDeclaration(ctx){
        const name = ctx.variable().accept(this);

        if(this.memoryStackLocalHas(name))
            throw new RuntimeError(`Local variable "${name}" already exists`);

        this.memoryStackDeclare(name);

        if(ctx.exp(0))
            this.memoryStackSet(name, ctx.exp(0).accept(this));
    }

    visitStatAssignment(ctx){
        const id = ctx.variable().accept(this);

        this.checkVarExists(id);

        const val = ctx.exp(0).accept(this);

        this.memoryStackSet(id, val);

        return val;
    }

    visitStatFunction(ctx){
        const name = ctx.funcname().accept(this);

        const fn = (args) => {
            const [params, block] = ctx.funcbody().accept(this);

            this.memoryStackPush();

            for(let i = 0; i < Math.min(args.length, params.length); i++)
                this.memoryStackSet(params[i], args[i]);

            const val = block.accept(this);

            this.memoryStackPop();

            return val;
        };

        this.memoryStackDeclare(name);
        this.memoryStackSet(name, fn);
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
        const fn = this.memoryStackGet(fn_name);
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
            return this.memoryStackGet(ctx.variable().accept(this));
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