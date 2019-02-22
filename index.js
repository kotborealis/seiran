const fs = require('fs');
const chen = require('chen.js');
const antlr4 = require('antlr4');

const selfish = require('./src/selfish');

const Lexer = require('./antlr_build/LuaLexer').LuaLexer;
const Parser = require('./antlr_build/LuaParser').LuaParser;
const Visitor = require('./src/Visitor');

const args = chen.args();

let input = 0;
if(args.file) input = args.file;
else if(args._[0]) input = args._[0];

const stdin = fs.readFileSync(input, "utf-8");

const chars = new antlr4.InputStream(stdin);
const lexer = new Lexer(chars);
const tokens  = new antlr4.CommonTokenStream(lexer);
const parser = new Parser(tokens);
parser.buildParseTrees = true;
const tree = parser.chunk();

const visitor = new Visitor();

visitor.visitChunk(tree);