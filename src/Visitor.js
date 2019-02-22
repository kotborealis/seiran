const BaseVisitor = require('../antlr_build/LuaVisitor').LuaVisitor;
const symbols = require('./symbols');

class Visitor extends BaseVisitor{
    constructor(...args){
        super(...args);

        this.memory_stack = [];
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

    visitChunk(ctx){
        return this.visitChildren(ctx);
    }

    visitBlock(ctx){
        this.memoryStackPush();

        const val = this.visitChildren(ctx);

        this.memoryStackPop();

        return val;
    }

    visitStatAssignment(ctx){
        const id = ctx.variable().getText();
        const val = this.visit(ctx.exp());

        this.memoryStack().set(id, val);

        return val;
    }

    visitExpNil(ctx){
        return null;
    }

    visitExpFalse(ctx){
        return false;
    }

    visitExpTrue(ctx){
        return true;
    }

    visitExpNumber(ctx){
        return Number.parseFloat(ctx.getText());
    }

    visitExpString(ctx){
        return ctx.getText();
    }

    visitExpVarArgs(ctx){
        return symbols.rest;
    }

    visitExpPow(ctx){
        const [lh, rh] = this.getLeftRightHandExp(ctx).map(Number);
        return lh ** rh;
    }

    visitExpUnaryOp(ctx){
        const value = this.visit(ctx.exp());

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
        const [lh, rh] = this.getLeftRightHandExp(ctx).map(Number);

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