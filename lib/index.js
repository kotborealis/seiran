const antlr4 = require('antlr4');

const Lexer = require('../antlr/LuaLexer').LuaLexer;
const Parser = require('../antlr/LuaParser').LuaParser;
const Visitor = require('../src/Visitor');

module.exports = (chunk, visitorParams = {}) => {
    const chars = new antlr4.InputStream(chunk);
    const lexer = new Lexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new Parser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.chunk();
    const visitor = new Visitor(visitorParams);
    visitor.visitChunk(tree);
};