module.exports = class{
    constructor() {
        this.inside_loop = [];
        this.break_loop = [];

        this.inside_fn = [];
        this.return_ = [];
    }

    insideLoopPush(){
        return this.inside_loop.push(true);
    }

    insideLoopPop(){
        return this.inside_loop.pop();
    }

    insideLoop(){
        return !!this.inside_loop[this.inside_loop.length - 1];
    }


    breakLoopPush(){
        return this.break_loop.push(true);
    }

    breakLoopPop(){
        return this.break_loop.pop();
    }

    breakLoop(){
        return !!this.break_loop[this.break_loop.length - 1];
    }

    insideFnPush(){
        return this.inside_fn.push(true);
    }

    insideFnPop(){
        return this.inside_fn.pop();
    }

    insideFn(){
        return !!this.inside_fn[this.inside_fn.length - 1];
    }

    returnPush(value){
        return this.return_.push(value);
    }

    returnPop(){
        return this.return_.pop();
    }

    return(){
        return !!this.return_[this.return_.length - 1];
    }
};