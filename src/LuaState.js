const antlr4 = require('antlr4');

const Lexer = require('../antlr/LuaLexer').LuaLexer;
const Parser = require('../antlr/LuaParser').LuaParser;

const Visitor = require('./Visitor');

const Globals = require('./Globals');
const Memory = require('./Memory');

module.exports = class{
    constructor({print_fn} = {}){
        this.mem = new Memory;

        const globals = Globals({print_fn});
        Object.entries(globals).forEach(fn => this.mem.global.set(...fn));
    }

    compile(chunk, removeErrorListeners = false){
        const chars = new antlr4.InputStream(chunk);
        const lexer = new Lexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);

        const parser = new Parser(tokens);
        parser.buildParseTrees = true;
        if(removeErrorListeners)
            parser.removeErrorListeners();

        const tree = parser.chunk();

        if(parser._syntaxErrors > 0){
            throw new Error(`Syntax errors while parsing: ${parser._syntaxErrors}`)
        }

        return tree;
    }

    evaluate(chunk, tree = null){
        try{
            if(tree === null)
                tree = this.compile(chunk);

            const visitor = new Visitor({mem: this.mem});
            visitor.visitChunk(tree);
        }
        catch(e){
            throw e;
        }
    }
};