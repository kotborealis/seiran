const fs = require('fs');
const antlr4 = require('antlr4');

const selfish = require('./src/selfish');

const Lexer = require('./antlr_build/LuaLexer').LuaLexer;
const Parser = require('./antlr_build/LuaParser').LuaParser;
const Visitor = require('./src/Visitor');

const input = process.argv[2] || 0;

const stdin = fs.readFileSync(input, "utf-8");

const chars = new antlr4.InputStream(stdin);
const lexer = new Lexer(chars);
const tokens  = new antlr4.CommonTokenStream(lexer);
const parser = new Parser(tokens);
parser.buildParseTrees = true;
const tree = parser.chunk();

const visitor = new Visitor();

visitor.visitChunk(tree);