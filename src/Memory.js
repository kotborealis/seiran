const RuntimeError = require('./RuntimeError');

module.exports = class{
    constructor(){
        this.memory_stack = [new Map];

        this.global = this.memory_stack[0];
    }

    push(){
        this.memory_stack.push(new Map);
    }

    pop(){
        this.memory_stack.pop();
    }

    top(){
        return this.memory_stack.length
            ? this.memory_stack[this.memory_stack.length - 1]
            : false;
    }

    getVar(name){
        for(let i = this.memory_stack.length - 1; i >= 0; i--)
            if(this.memory_stack[i].has(name))
                return this.memory_stack[i].get(name);

        return undefined;
    }

    declareVar(name){
        this.top().set(name, undefined);
    }

    setVar(name, value){
        for(let i = this.memory_stack.length - 1; i >= 0; i--)
            if(this.memory_stack[i].has(name))
                return this.memory_stack[i].set(name, value);

        this.global.set(name, value);
    }

    hasLocalVar(name){
        return this.top().has(name);
    }
};