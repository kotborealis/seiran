const BaseVisitor = require('../antlr_build/LuaVisitor').LuaVisitor;

class Visitor extends BaseVisitor{
    constructor(...args){
        super(...args);

        this.memory_stack = [];
    }

    visitChunk(ctx){
        return this.visitChildren(ctx);
    }

    visitBlock(ctx){
        return this.visitChildren(ctx);
    }


}

module.exports = Visitor;