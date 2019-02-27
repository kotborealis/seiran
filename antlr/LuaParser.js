// Generated from ./antlr/Lua.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LuaVisitor = require('./LuaVisitor').LuaVisitor;

var grammarFileName = "Lua.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003.\u00f6\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0007\u00037\n\u0003\f\u0003\u000e\u0003:\u000b\u0003\u0003",
    "\u0003\u0005\u0003=\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004D\n\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004d\n\u0004\f\u0004",
    "\u000e\u0004g\u000b\u0004\u0003\u0004\u0003\u0004\u0005\u0004k\n\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004w\n\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004}\n\u0004",
    "\u0003\u0005\u0003\u0005\u0005\u0005\u0081\n\u0005\u0003\u0005\u0005",
    "\u0005\u0084\n\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0007\u0007\u008b\n\u0007\f\u0007\u000e\u0007\u008e\u000b",
    "\u0007\u0003\b\u0003\b\u0003\b\u0007\b\u0093\n\b\f\b\u000e\b\u0096\u000b",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0005\t\u00a2\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00c0\n\t\f\t\u000e",
    "\t\u00c3\u000b\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00ce\n\u000b",
    "\u0003\f\u0003\f\u0003\r\u0003\r\u0005\r\u00d4\n\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0005\u000e\u00da\n\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0002\u0003\u0010\u001a\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.0\u0002\u0006\u0003",
    "\u0002\u0019\u001e\u0003\u0002 !\u0003\u0002\"$\u0004\u0002!!%&\u0002",
    "\u0101\u00022\u0003\u0002\u0002\u0002\u00048\u0003\u0002\u0002\u0002",
    "\u0006|\u0003\u0002\u0002\u0002\b~\u0003\u0002\u0002\u0002\n\u0085\u0003",
    "\u0002\u0002\u0002\f\u0087\u0003\u0002\u0002\u0002\u000e\u008f\u0003",
    "\u0002\u0002\u0002\u0010\u00a1\u0003\u0002\u0002\u0002\u0012\u00c4\u0003",
    "\u0002\u0002\u0002\u0014\u00cd\u0003\u0002\u0002\u0002\u0016\u00cf\u0003",
    "\u0002\u0002\u0002\u0018\u00d1\u0003\u0002\u0002\u0002\u001a\u00d7\u0003",
    "\u0002\u0002\u0002\u001c\u00df\u0003\u0002\u0002\u0002\u001e\u00e1\u0003",
    "\u0002\u0002\u0002 \u00e3\u0003\u0002\u0002\u0002\"\u00e5\u0003\u0002",
    "\u0002\u0002$\u00e7\u0003\u0002\u0002\u0002&\u00e9\u0003\u0002\u0002",
    "\u0002(\u00eb\u0003\u0002\u0002\u0002*\u00ed\u0003\u0002\u0002\u0002",
    ",\u00ef\u0003\u0002\u0002\u0002.\u00f1\u0003\u0002\u0002\u00020\u00f3",
    "\u0003\u0002\u0002\u000223\u0005\u0004\u0003\u000234\u0007\u0002\u0002",
    "\u00034\u0003\u0003\u0002\u0002\u000257\u0005\u0006\u0004\u000265\u0003",
    "\u0002\u0002\u00027:\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u0002",
    "89\u0003\u0002\u0002\u00029<\u0003\u0002\u0002\u0002:8\u0003\u0002\u0002",
    "\u0002;=\u0005\b\u0005\u0002<;\u0003\u0002\u0002\u0002<=\u0003\u0002",
    "\u0002\u0002=\u0005\u0003\u0002\u0002\u0002>}\u0007\u0003\u0002\u0002",
    "?@\u0007\u0004\u0002\u0002@C\u0005\u0016\f\u0002AB\u0007\u0005\u0002",
    "\u0002BD\u0005\u0010\t\u0002CA\u0003\u0002\u0002\u0002CD\u0003\u0002",
    "\u0002\u0002D}\u0003\u0002\u0002\u0002EF\u0005\u0016\f\u0002FG\u0007",
    "\u0005\u0002\u0002GH\u0005\u0010\t\u0002H}\u0003\u0002\u0002\u0002I",
    "J\u0007\u0006\u0002\u0002JK\u0005\n\u0006\u0002KL\u0005\u001a\u000e",
    "\u0002L}\u0003\u0002\u0002\u0002MN\u0007\u0004\u0002\u0002NO\u0007\u0006",
    "\u0002\u0002OP\u0005\n\u0006\u0002PQ\u0005\u001a\u000e\u0002Q}\u0003",
    "\u0002\u0002\u0002R}\u0005\u0012\n\u0002S}\u0007\u0007\u0002\u0002T",
    "U\u0007\b\u0002\u0002UV\u0005\u0010\t\u0002VW\u0007\t\u0002\u0002WX",
    "\u0005\u0004\u0003\u0002XY\u0007\n\u0002\u0002Y}\u0003\u0002\u0002\u0002",
    "Z[\u0007\u000b\u0002\u0002[\\\u0005\u0010\t\u0002\\]\u0007\f\u0002\u0002",
    "]e\u0005\u0004\u0003\u0002^_\u0007\r\u0002\u0002_`\u0005\u0010\t\u0002",
    "`a\u0007\f\u0002\u0002ab\u0005\u0004\u0003\u0002bd\u0003\u0002\u0002",
    "\u0002c^\u0003\u0002\u0002\u0002dg\u0003\u0002\u0002\u0002ec\u0003\u0002",
    "\u0002\u0002ef\u0003\u0002\u0002\u0002fj\u0003\u0002\u0002\u0002ge\u0003",
    "\u0002\u0002\u0002hi\u0007\u000e\u0002\u0002ik\u0005\u0004\u0003\u0002",
    "jh\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002",
    "\u0002lm\u0007\n\u0002\u0002m}\u0003\u0002\u0002\u0002no\u0007\u000f",
    "\u0002\u0002op\u0007(\u0002\u0002pq\u0007\u0005\u0002\u0002qr\u0005",
    "\u0010\t\u0002rs\u0007\u0010\u0002\u0002sv\u0005\u0010\t\u0002tu\u0007",
    "\u0010\u0002\u0002uw\u0005\u0010\t\u0002vt\u0003\u0002\u0002\u0002v",
    "w\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002\u0002xy\u0007\t\u0002",
    "\u0002yz\u0005\u0004\u0003\u0002z{\u0007\n\u0002\u0002{}\u0003\u0002",
    "\u0002\u0002|>\u0003\u0002\u0002\u0002|?\u0003\u0002\u0002\u0002|E\u0003",
    "\u0002\u0002\u0002|I\u0003\u0002\u0002\u0002|M\u0003\u0002\u0002\u0002",
    "|R\u0003\u0002\u0002\u0002|S\u0003\u0002\u0002\u0002|T\u0003\u0002\u0002",
    "\u0002|Z\u0003\u0002\u0002\u0002|n\u0003\u0002\u0002\u0002}\u0007\u0003",
    "\u0002\u0002\u0002~\u0080\u0007\u0011\u0002\u0002\u007f\u0081\u0005",
    "\u0010\t\u0002\u0080\u007f\u0003\u0002\u0002\u0002\u0080\u0081\u0003",
    "\u0002\u0002\u0002\u0081\u0083\u0003\u0002\u0002\u0002\u0082\u0084\u0007",
    "\u0003\u0002\u0002\u0083\u0082\u0003\u0002\u0002\u0002\u0083\u0084\u0003",
    "\u0002\u0002\u0002\u0084\t\u0003\u0002\u0002\u0002\u0085\u0086\u0007",
    "(\u0002\u0002\u0086\u000b\u0003\u0002\u0002\u0002\u0087\u008c\u0007",
    "(\u0002\u0002\u0088\u0089\u0007\u0010\u0002\u0002\u0089\u008b\u0007",
    "(\u0002\u0002\u008a\u0088\u0003\u0002\u0002\u0002\u008b\u008e\u0003",
    "\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008c\u008d\u0003",
    "\u0002\u0002\u0002\u008d\r\u0003\u0002\u0002\u0002\u008e\u008c\u0003",
    "\u0002\u0002\u0002\u008f\u0094\u0005\u0010\t\u0002\u0090\u0091\u0007",
    "\u0010\u0002\u0002\u0091\u0093\u0005\u0010\t\u0002\u0092\u0090\u0003",
    "\u0002\u0002\u0002\u0093\u0096\u0003\u0002\u0002\u0002\u0094\u0092\u0003",
    "\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u000f\u0003",
    "\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0097\u0098\b",
    "\t\u0001\u0002\u0098\u00a2\u0007\u0012\u0002\u0002\u0099\u00a2\u0007",
    "\u0013\u0002\u0002\u009a\u00a2\u0007\u0014\u0002\u0002\u009b\u00a2\u0005",
    ".\u0018\u0002\u009c\u00a2\u00050\u0019\u0002\u009d\u00a2\u0005\u0014",
    "\u000b\u0002\u009e\u009f\u0005*\u0016\u0002\u009f\u00a0\u0005\u0010",
    "\t\t\u00a0\u00a2\u0003\u0002\u0002\u0002\u00a1\u0097\u0003\u0002\u0002",
    "\u0002\u00a1\u0099\u0003\u0002\u0002\u0002\u00a1\u009a\u0003\u0002\u0002",
    "\u0002\u00a1\u009b\u0003\u0002\u0002\u0002\u00a1\u009c\u0003\u0002\u0002",
    "\u0002\u00a1\u009d\u0003\u0002\u0002\u0002\u00a1\u009e\u0003\u0002\u0002",
    "\u0002\u00a2\u00c1\u0003\u0002\u0002\u0002\u00a3\u00a4\f\n\u0002\u0002",
    "\u00a4\u00a5\u0005,\u0017\u0002\u00a5\u00a6\u0005\u0010\t\n\u00a6\u00c0",
    "\u0003\u0002\u0002\u0002\u00a7\u00a8\f\b\u0002\u0002\u00a8\u00a9\u0005",
    "(\u0015\u0002\u00a9\u00aa\u0005\u0010\t\t\u00aa\u00c0\u0003\u0002\u0002",
    "\u0002\u00ab\u00ac\f\u0007\u0002\u0002\u00ac\u00ad\u0005&\u0014\u0002",
    "\u00ad\u00ae\u0005\u0010\t\b\u00ae\u00c0\u0003\u0002\u0002\u0002\u00af",
    "\u00b0\f\u0006\u0002\u0002\u00b0\u00b1\u0005$\u0013\u0002\u00b1\u00b2",
    "\u0005\u0010\t\u0006\u00b2\u00c0\u0003\u0002\u0002\u0002\u00b3\u00b4",
    "\f\u0005\u0002\u0002\u00b4\u00b5\u0005\"\u0012\u0002\u00b5\u00b6\u0005",
    "\u0010\t\u0006\u00b6\u00c0\u0003\u0002\u0002\u0002\u00b7\u00b8\f\u0004",
    "\u0002\u0002\u00b8\u00b9\u0005 \u0011\u0002\u00b9\u00ba\u0005\u0010",
    "\t\u0005\u00ba\u00c0\u0003\u0002\u0002\u0002\u00bb\u00bc\f\u0003\u0002",
    "\u0002\u00bc\u00bd\u0005\u001e\u0010\u0002\u00bd\u00be\u0005\u0010\t",
    "\u0004\u00be\u00c0\u0003\u0002\u0002\u0002\u00bf\u00a3\u0003\u0002\u0002",
    "\u0002\u00bf\u00a7\u0003\u0002\u0002\u0002\u00bf\u00ab\u0003\u0002\u0002",
    "\u0002\u00bf\u00af\u0003\u0002\u0002\u0002\u00bf\u00b3\u0003\u0002\u0002",
    "\u0002\u00bf\u00b7\u0003\u0002\u0002\u0002\u00bf\u00bb\u0003\u0002\u0002",
    "\u0002\u00c0\u00c3\u0003\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002",
    "\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c2\u0011\u0003\u0002\u0002",
    "\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002\u00c4\u00c5\u0005\u0016\f",
    "\u0002\u00c5\u00c6\u0005\u0018\r\u0002\u00c6\u0013\u0003\u0002\u0002",
    "\u0002\u00c7\u00ce\u0005\u0016\f\u0002\u00c8\u00ce\u0005\u0012\n\u0002",
    "\u00c9\u00ca\u0007\u0015\u0002\u0002\u00ca\u00cb\u0005\u0010\t\u0002",
    "\u00cb\u00cc\u0007\u0016\u0002\u0002\u00cc\u00ce\u0003\u0002\u0002\u0002",
    "\u00cd\u00c7\u0003\u0002\u0002\u0002\u00cd\u00c8\u0003\u0002\u0002\u0002",
    "\u00cd\u00c9\u0003\u0002\u0002\u0002\u00ce\u0015\u0003\u0002\u0002\u0002",
    "\u00cf\u00d0\u0007(\u0002\u0002\u00d0\u0017\u0003\u0002\u0002\u0002",
    "\u00d1\u00d3\u0007\u0015\u0002\u0002\u00d2\u00d4\u0005\u000e\b\u0002",
    "\u00d3\u00d2\u0003\u0002\u0002\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002",
    "\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5\u00d6\u0007\u0016\u0002\u0002",
    "\u00d6\u0019\u0003\u0002\u0002\u0002\u00d7\u00d9\u0007\u0015\u0002\u0002",
    "\u00d8\u00da\u0005\u001c\u000f\u0002\u00d9\u00d8\u0003\u0002\u0002\u0002",
    "\u00d9\u00da\u0003\u0002\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002",
    "\u00db\u00dc\u0007\u0016\u0002\u0002\u00dc\u00dd\u0005\u0004\u0003\u0002",
    "\u00dd\u00de\u0007\n\u0002\u0002\u00de\u001b\u0003\u0002\u0002\u0002",
    "\u00df\u00e0\u0005\f\u0007\u0002\u00e0\u001d\u0003\u0002\u0002\u0002",
    "\u00e1\u00e2\u0007\u0017\u0002\u0002\u00e2\u001f\u0003\u0002\u0002\u0002",
    "\u00e3\u00e4\u0007\u0018\u0002\u0002\u00e4!\u0003\u0002\u0002\u0002",
    "\u00e5\u00e6\t\u0002\u0002\u0002\u00e6#\u0003\u0002\u0002\u0002\u00e7",
    "\u00e8\u0007\u001f\u0002\u0002\u00e8%\u0003\u0002\u0002\u0002\u00e9",
    "\u00ea\t\u0003\u0002\u0002\u00ea\'\u0003\u0002\u0002\u0002\u00eb\u00ec",
    "\t\u0004\u0002\u0002\u00ec)\u0003\u0002\u0002\u0002\u00ed\u00ee\t\u0005",
    "\u0002\u0002\u00ee+\u0003\u0002\u0002\u0002\u00ef\u00f0\u0007\'\u0002",
    "\u0002\u00f0-\u0003\u0002\u0002\u0002\u00f1\u00f2\u0007*\u0002\u0002",
    "\u00f2/\u0003\u0002\u0002\u0002\u00f3\u00f4\u0007)\u0002\u0002\u00f4",
    "1\u0003\u0002\u0002\u0002\u00138<Cejv|\u0080\u0083\u008c\u0094\u00a1",
    "\u00bf\u00c1\u00cd\u00d3\u00d9"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'local'", "'='", "'function'", "'break'", 
                     "'while'", "'do'", "'end'", "'if'", "'then'", "'elseif'", 
                     "'else'", "'for'", "','", "'return'", "'nil'", "'false'", 
                     "'true'", "'('", "')'", "'or'", "'and'", "'<'", "'>'", 
                     "'<='", "'>='", "'~='", "'=='", "'..'", "'+'", "'-'", 
                     "'*'", "'/'", "'%'", "'not'", "'#'", "'^'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, "NAME", "NORMALSTRING", "FLOAT", "COMMENT", 
                      "LINE_COMMENT", "WS", "SHEBANG" ];

var ruleNames =  [ "chunk", "block", "stat", "retstat", "funcname", "namelist", 
                   "explist", "exp", "functioncall", "varexp", "variable", 
                   "args", "funcbody", "parlist", "operatorOr", "operatorAnd", 
                   "operatorComparison", "operatorStrcat", "operatorAddSub", 
                   "operatorMulDivMod", "operatorUnary", "operatorPower", 
                   "number", "string" ];

function LuaParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

LuaParser.prototype = Object.create(antlr4.Parser.prototype);
LuaParser.prototype.constructor = LuaParser;

Object.defineProperty(LuaParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

LuaParser.EOF = antlr4.Token.EOF;
LuaParser.T__0 = 1;
LuaParser.T__1 = 2;
LuaParser.T__2 = 3;
LuaParser.T__3 = 4;
LuaParser.T__4 = 5;
LuaParser.T__5 = 6;
LuaParser.T__6 = 7;
LuaParser.T__7 = 8;
LuaParser.T__8 = 9;
LuaParser.T__9 = 10;
LuaParser.T__10 = 11;
LuaParser.T__11 = 12;
LuaParser.T__12 = 13;
LuaParser.T__13 = 14;
LuaParser.T__14 = 15;
LuaParser.T__15 = 16;
LuaParser.T__16 = 17;
LuaParser.T__17 = 18;
LuaParser.T__18 = 19;
LuaParser.T__19 = 20;
LuaParser.T__20 = 21;
LuaParser.T__21 = 22;
LuaParser.T__22 = 23;
LuaParser.T__23 = 24;
LuaParser.T__24 = 25;
LuaParser.T__25 = 26;
LuaParser.T__26 = 27;
LuaParser.T__27 = 28;
LuaParser.T__28 = 29;
LuaParser.T__29 = 30;
LuaParser.T__30 = 31;
LuaParser.T__31 = 32;
LuaParser.T__32 = 33;
LuaParser.T__33 = 34;
LuaParser.T__34 = 35;
LuaParser.T__35 = 36;
LuaParser.T__36 = 37;
LuaParser.NAME = 38;
LuaParser.NORMALSTRING = 39;
LuaParser.FLOAT = 40;
LuaParser.COMMENT = 41;
LuaParser.LINE_COMMENT = 42;
LuaParser.WS = 43;
LuaParser.SHEBANG = 44;

LuaParser.RULE_chunk = 0;
LuaParser.RULE_block = 1;
LuaParser.RULE_stat = 2;
LuaParser.RULE_retstat = 3;
LuaParser.RULE_funcname = 4;
LuaParser.RULE_namelist = 5;
LuaParser.RULE_explist = 6;
LuaParser.RULE_exp = 7;
LuaParser.RULE_functioncall = 8;
LuaParser.RULE_varexp = 9;
LuaParser.RULE_variable = 10;
LuaParser.RULE_args = 11;
LuaParser.RULE_funcbody = 12;
LuaParser.RULE_parlist = 13;
LuaParser.RULE_operatorOr = 14;
LuaParser.RULE_operatorAnd = 15;
LuaParser.RULE_operatorComparison = 16;
LuaParser.RULE_operatorStrcat = 17;
LuaParser.RULE_operatorAddSub = 18;
LuaParser.RULE_operatorMulDivMod = 19;
LuaParser.RULE_operatorUnary = 20;
LuaParser.RULE_operatorPower = 21;
LuaParser.RULE_number = 22;
LuaParser.RULE_string = 23;


function ChunkContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_chunk;
    return this;
}

ChunkContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChunkContext.prototype.constructor = ChunkContext;

ChunkContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ChunkContext.prototype.EOF = function() {
    return this.getToken(LuaParser.EOF, 0);
};

ChunkContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitChunk(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.ChunkContext = ChunkContext;

LuaParser.prototype.chunk = function() {

    var localctx = new ChunkContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LuaParser.RULE_chunk);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.block();
        this.state = 49;
        this.match(LuaParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

BlockContext.prototype.retstat = function() {
    return this.getTypedRuleContext(RetstatContext,0);
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.BlockContext = BlockContext;

LuaParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LuaParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__0) | (1 << LuaParser.T__1) | (1 << LuaParser.T__3) | (1 << LuaParser.T__4) | (1 << LuaParser.T__5) | (1 << LuaParser.T__8) | (1 << LuaParser.T__12))) !== 0) || _la===LuaParser.NAME) {
            this.state = 51;
            this.stat();
            this.state = 56;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 58;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuaParser.T__14) {
            this.state = 57;
            this.retstat();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;


 
StatContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function StatVarDeclarationContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatVarDeclarationContext.prototype = Object.create(StatContext.prototype);
StatVarDeclarationContext.prototype.constructor = StatVarDeclarationContext;

LuaParser.StatVarDeclarationContext = StatVarDeclarationContext;

StatVarDeclarationContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

StatVarDeclarationContext.prototype.exp = function() {
    return this.getTypedRuleContext(ExpContext,0);
};
StatVarDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitStatVarDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatFunctionContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatFunctionContext.prototype = Object.create(StatContext.prototype);
StatFunctionContext.prototype.constructor = StatFunctionContext;

LuaParser.StatFunctionContext = StatFunctionContext;

StatFunctionContext.prototype.funcname = function() {
    return this.getTypedRuleContext(FuncnameContext,0);
};

StatFunctionContext.prototype.funcbody = function() {
    return this.getTypedRuleContext(FuncbodyContext,0);
};
StatFunctionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitStatFunction(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatWhileContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatWhileContext.prototype = Object.create(StatContext.prototype);
StatWhileContext.prototype.constructor = StatWhileContext;

LuaParser.StatWhileContext = StatWhileContext;

StatWhileContext.prototype.exp = function() {
    return this.getTypedRuleContext(ExpContext,0);
};

StatWhileContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};
StatWhileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitStatWhile(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatSemicolonContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatSemicolonContext.prototype = Object.create(StatContext.prototype);
StatSemicolonContext.prototype.constructor = StatSemicolonContext;

LuaParser.StatSemicolonContext = StatSemicolonContext;

StatSemicolonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitStatSemicolon(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatBreakContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatBreakContext.prototype = Object.create(StatContext.prototype);
StatBreakContext.prototype.constructor = StatBreakContext;

LuaParser.StatBreakContext = StatBreakContext;

StatBreakContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitStatBreak(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatLocalFunctionContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatLocalFunctionContext.prototype = Object.create(StatContext.prototype);
StatLocalFunctionContext.prototype.constructor = StatLocalFunctionContext;

LuaParser.StatLocalFunctionContext = StatLocalFunctionContext;

StatLocalFunctionContext.prototype.funcname = function() {
    return this.getTypedRuleContext(FuncnameContext,0);
};

StatLocalFunctionContext.prototype.funcbody = function() {
    return this.getTypedRuleContext(FuncbodyContext,0);
};
StatLocalFunctionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitStatLocalFunction(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatFunctioncallContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatFunctioncallContext.prototype = Object.create(StatContext.prototype);
StatFunctioncallContext.prototype.constructor = StatFunctioncallContext;

LuaParser.StatFunctioncallContext = StatFunctioncallContext;

StatFunctioncallContext.prototype.functioncall = function() {
    return this.getTypedRuleContext(FunctioncallContext,0);
};
StatFunctioncallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitStatFunctioncall(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatIfContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatIfContext.prototype = Object.create(StatContext.prototype);
StatIfContext.prototype.constructor = StatIfContext;

LuaParser.StatIfContext = StatIfContext;

StatIfContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

StatIfContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};
StatIfContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitStatIf(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatForContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatForContext.prototype = Object.create(StatContext.prototype);
StatForContext.prototype.constructor = StatForContext;

LuaParser.StatForContext = StatForContext;

StatForContext.prototype.NAME = function() {
    return this.getToken(LuaParser.NAME, 0);
};

StatForContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

StatForContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};
StatForContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitStatFor(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatAssignmentContext(parser, ctx) {
	StatContext.call(this, parser);
    StatContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatAssignmentContext.prototype = Object.create(StatContext.prototype);
StatAssignmentContext.prototype.constructor = StatAssignmentContext;

LuaParser.StatAssignmentContext = StatAssignmentContext;

StatAssignmentContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

StatAssignmentContext.prototype.exp = function() {
    return this.getTypedRuleContext(ExpContext,0);
};
StatAssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitStatAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};



LuaParser.StatContext = StatContext;

LuaParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LuaParser.RULE_stat);
    var _la = 0; // Token type
    try {
        this.state = 122;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            localctx = new StatSemicolonContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 60;
            this.match(LuaParser.T__0);
            break;

        case 2:
            localctx = new StatVarDeclarationContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 61;
            this.match(LuaParser.T__1);
            this.state = 62;
            this.variable();
            this.state = 65;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LuaParser.T__2) {
                this.state = 63;
                this.match(LuaParser.T__2);
                this.state = 64;
                this.exp(0);
            }

            break;

        case 3:
            localctx = new StatAssignmentContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 67;
            this.variable();
            this.state = 68;
            this.match(LuaParser.T__2);
            this.state = 69;
            this.exp(0);
            break;

        case 4:
            localctx = new StatFunctionContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 71;
            this.match(LuaParser.T__3);
            this.state = 72;
            this.funcname();
            this.state = 73;
            this.funcbody();
            break;

        case 5:
            localctx = new StatLocalFunctionContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 75;
            this.match(LuaParser.T__1);
            this.state = 76;
            this.match(LuaParser.T__3);
            this.state = 77;
            this.funcname();
            this.state = 78;
            this.funcbody();
            break;

        case 6:
            localctx = new StatFunctioncallContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 80;
            this.functioncall();
            break;

        case 7:
            localctx = new StatBreakContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 81;
            this.match(LuaParser.T__4);
            break;

        case 8:
            localctx = new StatWhileContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 82;
            this.match(LuaParser.T__5);
            this.state = 83;
            this.exp(0);
            this.state = 84;
            this.match(LuaParser.T__6);
            this.state = 85;
            this.block();
            this.state = 86;
            this.match(LuaParser.T__7);
            break;

        case 9:
            localctx = new StatIfContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 88;
            this.match(LuaParser.T__8);
            this.state = 89;
            this.exp(0);
            this.state = 90;
            this.match(LuaParser.T__9);
            this.state = 91;
            this.block();
            this.state = 99;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LuaParser.T__10) {
                this.state = 92;
                this.match(LuaParser.T__10);
                this.state = 93;
                this.exp(0);
                this.state = 94;
                this.match(LuaParser.T__9);
                this.state = 95;
                this.block();
                this.state = 101;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 104;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LuaParser.T__11) {
                this.state = 102;
                this.match(LuaParser.T__11);
                this.state = 103;
                this.block();
            }

            this.state = 106;
            this.match(LuaParser.T__7);
            break;

        case 10:
            localctx = new StatForContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 108;
            this.match(LuaParser.T__12);
            this.state = 109;
            this.match(LuaParser.NAME);
            this.state = 110;
            this.match(LuaParser.T__2);
            this.state = 111;
            this.exp(0);
            this.state = 112;
            this.match(LuaParser.T__13);
            this.state = 113;
            this.exp(0);
            this.state = 116;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LuaParser.T__13) {
                this.state = 114;
                this.match(LuaParser.T__13);
                this.state = 115;
                this.exp(0);
            }

            this.state = 118;
            this.match(LuaParser.T__6);
            this.state = 119;
            this.block();
            this.state = 120;
            this.match(LuaParser.T__7);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RetstatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_retstat;
    return this;
}

RetstatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RetstatContext.prototype.constructor = RetstatContext;

RetstatContext.prototype.exp = function() {
    return this.getTypedRuleContext(ExpContext,0);
};

RetstatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitRetstat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.RetstatContext = RetstatContext;

LuaParser.prototype.retstat = function() {

    var localctx = new RetstatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LuaParser.RULE_retstat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.match(LuaParser.T__14);
        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 16)) & ~0x1f) == 0 && ((1 << (_la - 16)) & ((1 << (LuaParser.T__15 - 16)) | (1 << (LuaParser.T__16 - 16)) | (1 << (LuaParser.T__17 - 16)) | (1 << (LuaParser.T__18 - 16)) | (1 << (LuaParser.T__30 - 16)) | (1 << (LuaParser.T__34 - 16)) | (1 << (LuaParser.T__35 - 16)) | (1 << (LuaParser.NAME - 16)) | (1 << (LuaParser.NORMALSTRING - 16)) | (1 << (LuaParser.FLOAT - 16)))) !== 0)) {
            this.state = 125;
            this.exp(0);
        }

        this.state = 129;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuaParser.T__0) {
            this.state = 128;
            this.match(LuaParser.T__0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FuncnameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_funcname;
    return this;
}

FuncnameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncnameContext.prototype.constructor = FuncnameContext;

FuncnameContext.prototype.NAME = function() {
    return this.getToken(LuaParser.NAME, 0);
};

FuncnameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitFuncname(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.FuncnameContext = FuncnameContext;

LuaParser.prototype.funcname = function() {

    var localctx = new FuncnameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LuaParser.RULE_funcname);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.match(LuaParser.NAME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NamelistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_namelist;
    return this;
}

NamelistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamelistContext.prototype.constructor = NamelistContext;

NamelistContext.prototype.NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LuaParser.NAME);
    } else {
        return this.getToken(LuaParser.NAME, i);
    }
};


NamelistContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitNamelist(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.NamelistContext = NamelistContext;

LuaParser.prototype.namelist = function() {

    var localctx = new NamelistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, LuaParser.RULE_namelist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.match(LuaParser.NAME);
        this.state = 138;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LuaParser.T__13) {
            this.state = 134;
            this.match(LuaParser.T__13);
            this.state = 135;
            this.match(LuaParser.NAME);
            this.state = 140;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExplistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_explist;
    return this;
}

ExplistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExplistContext.prototype.constructor = ExplistContext;

ExplistContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

ExplistContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitExplist(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.ExplistContext = ExplistContext;

LuaParser.prototype.explist = function() {

    var localctx = new ExplistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, LuaParser.RULE_explist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.exp(0);
        this.state = 146;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LuaParser.T__13) {
            this.state = 142;
            this.match(LuaParser.T__13);
            this.state = 143;
            this.exp(0);
            this.state = 148;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_exp;
    return this;
}

ExpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpContext.prototype.constructor = ExpContext;


 
ExpContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ExpVarexpContext(parser, ctx) {
	ExpContext.call(this, parser);
    ExpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpVarexpContext.prototype = Object.create(ExpContext.prototype);
ExpVarexpContext.prototype.constructor = ExpVarexpContext;

LuaParser.ExpVarexpContext = ExpVarexpContext;

ExpVarexpContext.prototype.varexp = function() {
    return this.getTypedRuleContext(VarexpContext,0);
};
ExpVarexpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitExpVarexp(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpNumberContext(parser, ctx) {
	ExpContext.call(this, parser);
    ExpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpNumberContext.prototype = Object.create(ExpContext.prototype);
ExpNumberContext.prototype.constructor = ExpNumberContext;

LuaParser.ExpNumberContext = ExpNumberContext;

ExpNumberContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};
ExpNumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitExpNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpStrcatContext(parser, ctx) {
	ExpContext.call(this, parser);
    ExpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpStrcatContext.prototype = Object.create(ExpContext.prototype);
ExpStrcatContext.prototype.constructor = ExpStrcatContext;

LuaParser.ExpStrcatContext = ExpStrcatContext;

ExpStrcatContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

ExpStrcatContext.prototype.operatorStrcat = function() {
    return this.getTypedRuleContext(OperatorStrcatContext,0);
};
ExpStrcatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitExpStrcat(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpTrueContext(parser, ctx) {
	ExpContext.call(this, parser);
    ExpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpTrueContext.prototype = Object.create(ExpContext.prototype);
ExpTrueContext.prototype.constructor = ExpTrueContext;

LuaParser.ExpTrueContext = ExpTrueContext;

ExpTrueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitExpTrue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpOrOpContext(parser, ctx) {
	ExpContext.call(this, parser);
    ExpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpOrOpContext.prototype = Object.create(ExpContext.prototype);
ExpOrOpContext.prototype.constructor = ExpOrOpContext;

LuaParser.ExpOrOpContext = ExpOrOpContext;

ExpOrOpContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

ExpOrOpContext.prototype.operatorOr = function() {
    return this.getTypedRuleContext(OperatorOrContext,0);
};
ExpOrOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitExpOrOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpMulDivOpContext(parser, ctx) {
	ExpContext.call(this, parser);
    ExpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpMulDivOpContext.prototype = Object.create(ExpContext.prototype);
ExpMulDivOpContext.prototype.constructor = ExpMulDivOpContext;

LuaParser.ExpMulDivOpContext = ExpMulDivOpContext;

ExpMulDivOpContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

ExpMulDivOpContext.prototype.operatorMulDivMod = function() {
    return this.getTypedRuleContext(OperatorMulDivModContext,0);
};
ExpMulDivOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitExpMulDivOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpFalseContext(parser, ctx) {
	ExpContext.call(this, parser);
    ExpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpFalseContext.prototype = Object.create(ExpContext.prototype);
ExpFalseContext.prototype.constructor = ExpFalseContext;

LuaParser.ExpFalseContext = ExpFalseContext;

ExpFalseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitExpFalse(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpStringContext(parser, ctx) {
	ExpContext.call(this, parser);
    ExpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpStringContext.prototype = Object.create(ExpContext.prototype);
ExpStringContext.prototype.constructor = ExpStringContext;

LuaParser.ExpStringContext = ExpStringContext;

ExpStringContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};
ExpStringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitExpString(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpPowContext(parser, ctx) {
	ExpContext.call(this, parser);
    ExpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpPowContext.prototype = Object.create(ExpContext.prototype);
ExpPowContext.prototype.constructor = ExpPowContext;

LuaParser.ExpPowContext = ExpPowContext;

ExpPowContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

ExpPowContext.prototype.operatorPower = function() {
    return this.getTypedRuleContext(OperatorPowerContext,0);
};
ExpPowContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitExpPow(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpAndOpContext(parser, ctx) {
	ExpContext.call(this, parser);
    ExpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpAndOpContext.prototype = Object.create(ExpContext.prototype);
ExpAndOpContext.prototype.constructor = ExpAndOpContext;

LuaParser.ExpAndOpContext = ExpAndOpContext;

ExpAndOpContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

ExpAndOpContext.prototype.operatorAnd = function() {
    return this.getTypedRuleContext(OperatorAndContext,0);
};
ExpAndOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitExpAndOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpUnaryOpContext(parser, ctx) {
	ExpContext.call(this, parser);
    ExpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpUnaryOpContext.prototype = Object.create(ExpContext.prototype);
ExpUnaryOpContext.prototype.constructor = ExpUnaryOpContext;

LuaParser.ExpUnaryOpContext = ExpUnaryOpContext;

ExpUnaryOpContext.prototype.operatorUnary = function() {
    return this.getTypedRuleContext(OperatorUnaryContext,0);
};

ExpUnaryOpContext.prototype.exp = function() {
    return this.getTypedRuleContext(ExpContext,0);
};
ExpUnaryOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitExpUnaryOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpComparsionOpContext(parser, ctx) {
	ExpContext.call(this, parser);
    ExpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpComparsionOpContext.prototype = Object.create(ExpContext.prototype);
ExpComparsionOpContext.prototype.constructor = ExpComparsionOpContext;

LuaParser.ExpComparsionOpContext = ExpComparsionOpContext;

ExpComparsionOpContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

ExpComparsionOpContext.prototype.operatorComparison = function() {
    return this.getTypedRuleContext(OperatorComparisonContext,0);
};
ExpComparsionOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitExpComparsionOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpNilContext(parser, ctx) {
	ExpContext.call(this, parser);
    ExpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpNilContext.prototype = Object.create(ExpContext.prototype);
ExpNilContext.prototype.constructor = ExpNilContext;

LuaParser.ExpNilContext = ExpNilContext;

ExpNilContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitExpNil(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ExpAddSubOpContext(parser, ctx) {
	ExpContext.call(this, parser);
    ExpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpAddSubOpContext.prototype = Object.create(ExpContext.prototype);
ExpAddSubOpContext.prototype.constructor = ExpAddSubOpContext;

LuaParser.ExpAddSubOpContext = ExpAddSubOpContext;

ExpAddSubOpContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

ExpAddSubOpContext.prototype.operatorAddSub = function() {
    return this.getTypedRuleContext(OperatorAddSubContext,0);
};
ExpAddSubOpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitExpAddSubOp(this);
    } else {
        return visitor.visitChildren(this);
    }
};



LuaParser.prototype.exp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 14;
    this.enterRecursionRule(localctx, 14, LuaParser.RULE_exp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LuaParser.T__15:
            localctx = new ExpNilContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 150;
            this.match(LuaParser.T__15);
            break;
        case LuaParser.T__16:
            localctx = new ExpFalseContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 151;
            this.match(LuaParser.T__16);
            break;
        case LuaParser.T__17:
            localctx = new ExpTrueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 152;
            this.match(LuaParser.T__17);
            break;
        case LuaParser.FLOAT:
            localctx = new ExpNumberContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 153;
            this.number();
            break;
        case LuaParser.NORMALSTRING:
            localctx = new ExpStringContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 154;
            this.string();
            break;
        case LuaParser.T__18:
        case LuaParser.NAME:
            localctx = new ExpVarexpContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 155;
            this.varexp();
            break;
        case LuaParser.T__30:
        case LuaParser.T__34:
        case LuaParser.T__35:
            localctx = new ExpUnaryOpContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 156;
            this.operatorUnary();
            this.state = 157;
            this.exp(7);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 191;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 189;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpPowContext(this, new ExpContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 161;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 162;
                    this.operatorPower();
                    this.state = 163;
                    this.exp(8);
                    break;

                case 2:
                    localctx = new ExpMulDivOpContext(this, new ExpContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 165;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 166;
                    this.operatorMulDivMod();
                    this.state = 167;
                    this.exp(7);
                    break;

                case 3:
                    localctx = new ExpAddSubOpContext(this, new ExpContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 169;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 170;
                    this.operatorAddSub();
                    this.state = 171;
                    this.exp(6);
                    break;

                case 4:
                    localctx = new ExpStrcatContext(this, new ExpContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 173;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 174;
                    this.operatorStrcat();
                    this.state = 175;
                    this.exp(4);
                    break;

                case 5:
                    localctx = new ExpComparsionOpContext(this, new ExpContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 177;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 178;
                    this.operatorComparison();
                    this.state = 179;
                    this.exp(4);
                    break;

                case 6:
                    localctx = new ExpAndOpContext(this, new ExpContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 181;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 182;
                    this.operatorAnd();
                    this.state = 183;
                    this.exp(3);
                    break;

                case 7:
                    localctx = new ExpOrOpContext(this, new ExpContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 185;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 186;
                    this.operatorOr();
                    this.state = 187;
                    this.exp(2);
                    break;

                } 
            }
            this.state = 193;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function FunctioncallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_functioncall;
    return this;
}

FunctioncallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctioncallContext.prototype.constructor = FunctioncallContext;

FunctioncallContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

FunctioncallContext.prototype.args = function() {
    return this.getTypedRuleContext(ArgsContext,0);
};

FunctioncallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitFunctioncall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.FunctioncallContext = FunctioncallContext;

LuaParser.prototype.functioncall = function() {

    var localctx = new FunctioncallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, LuaParser.RULE_functioncall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this.variable();
        this.state = 195;
        this.args();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VarexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_varexp;
    return this;
}

VarexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarexpContext.prototype.constructor = VarexpContext;

VarexpContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

VarexpContext.prototype.functioncall = function() {
    return this.getTypedRuleContext(FunctioncallContext,0);
};

VarexpContext.prototype.exp = function() {
    return this.getTypedRuleContext(ExpContext,0);
};

VarexpContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitVarexp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.VarexpContext = VarexpContext;

LuaParser.prototype.varexp = function() {

    var localctx = new VarexpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, LuaParser.RULE_varexp);
    try {
        this.state = 203;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 197;
            this.variable();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 198;
            this.functioncall();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 199;
            this.match(LuaParser.T__18);
            this.state = 200;
            this.exp(0);
            this.state = 201;
            this.match(LuaParser.T__19);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.NAME = function() {
    return this.getToken(LuaParser.NAME, 0);
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.VariableContext = VariableContext;

LuaParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, LuaParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this.match(LuaParser.NAME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArgsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_args;
    return this;
}

ArgsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgsContext.prototype.constructor = ArgsContext;

ArgsContext.prototype.explist = function() {
    return this.getTypedRuleContext(ExplistContext,0);
};

ArgsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitArgs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.ArgsContext = ArgsContext;

LuaParser.prototype.args = function() {

    var localctx = new ArgsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, LuaParser.RULE_args);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        this.match(LuaParser.T__18);
        this.state = 209;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 16)) & ~0x1f) == 0 && ((1 << (_la - 16)) & ((1 << (LuaParser.T__15 - 16)) | (1 << (LuaParser.T__16 - 16)) | (1 << (LuaParser.T__17 - 16)) | (1 << (LuaParser.T__18 - 16)) | (1 << (LuaParser.T__30 - 16)) | (1 << (LuaParser.T__34 - 16)) | (1 << (LuaParser.T__35 - 16)) | (1 << (LuaParser.NAME - 16)) | (1 << (LuaParser.NORMALSTRING - 16)) | (1 << (LuaParser.FLOAT - 16)))) !== 0)) {
            this.state = 208;
            this.explist();
        }

        this.state = 211;
        this.match(LuaParser.T__19);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FuncbodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_funcbody;
    return this;
}

FuncbodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncbodyContext.prototype.constructor = FuncbodyContext;

FuncbodyContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FuncbodyContext.prototype.parlist = function() {
    return this.getTypedRuleContext(ParlistContext,0);
};

FuncbodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitFuncbody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.FuncbodyContext = FuncbodyContext;

LuaParser.prototype.funcbody = function() {

    var localctx = new FuncbodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, LuaParser.RULE_funcbody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        this.match(LuaParser.T__18);
        this.state = 215;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuaParser.NAME) {
            this.state = 214;
            this.parlist();
        }

        this.state = 217;
        this.match(LuaParser.T__19);
        this.state = 218;
        this.block();
        this.state = 219;
        this.match(LuaParser.T__7);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_parlist;
    return this;
}

ParlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParlistContext.prototype.constructor = ParlistContext;

ParlistContext.prototype.namelist = function() {
    return this.getTypedRuleContext(NamelistContext,0);
};

ParlistContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitParlist(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.ParlistContext = ParlistContext;

LuaParser.prototype.parlist = function() {

    var localctx = new ParlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, LuaParser.RULE_parlist);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        this.namelist();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorOrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_operatorOr;
    return this;
}

OperatorOrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorOrContext.prototype.constructor = OperatorOrContext;


OperatorOrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitOperatorOr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.OperatorOrContext = OperatorOrContext;

LuaParser.prototype.operatorOr = function() {

    var localctx = new OperatorOrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, LuaParser.RULE_operatorOr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        this.match(LuaParser.T__20);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorAndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_operatorAnd;
    return this;
}

OperatorAndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorAndContext.prototype.constructor = OperatorAndContext;


OperatorAndContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitOperatorAnd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.OperatorAndContext = OperatorAndContext;

LuaParser.prototype.operatorAnd = function() {

    var localctx = new OperatorAndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, LuaParser.RULE_operatorAnd);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this.match(LuaParser.T__21);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorComparisonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_operatorComparison;
    return this;
}

OperatorComparisonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorComparisonContext.prototype.constructor = OperatorComparisonContext;


OperatorComparisonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitOperatorComparison(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.OperatorComparisonContext = OperatorComparisonContext;

LuaParser.prototype.operatorComparison = function() {

    var localctx = new OperatorComparisonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, LuaParser.RULE_operatorComparison);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__22) | (1 << LuaParser.T__23) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__27))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorStrcatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_operatorStrcat;
    return this;
}

OperatorStrcatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorStrcatContext.prototype.constructor = OperatorStrcatContext;


OperatorStrcatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitOperatorStrcat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.OperatorStrcatContext = OperatorStrcatContext;

LuaParser.prototype.operatorStrcat = function() {

    var localctx = new OperatorStrcatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, LuaParser.RULE_operatorStrcat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this.match(LuaParser.T__28);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorAddSubContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_operatorAddSub;
    return this;
}

OperatorAddSubContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorAddSubContext.prototype.constructor = OperatorAddSubContext;


OperatorAddSubContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitOperatorAddSub(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.OperatorAddSubContext = OperatorAddSubContext;

LuaParser.prototype.operatorAddSub = function() {

    var localctx = new OperatorAddSubContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, LuaParser.RULE_operatorAddSub);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 231;
        _la = this._input.LA(1);
        if(!(_la===LuaParser.T__29 || _la===LuaParser.T__30)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorMulDivModContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_operatorMulDivMod;
    return this;
}

OperatorMulDivModContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorMulDivModContext.prototype.constructor = OperatorMulDivModContext;


OperatorMulDivModContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitOperatorMulDivMod(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.OperatorMulDivModContext = OperatorMulDivModContext;

LuaParser.prototype.operatorMulDivMod = function() {

    var localctx = new OperatorMulDivModContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, LuaParser.RULE_operatorMulDivMod);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        _la = this._input.LA(1);
        if(!(((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (LuaParser.T__31 - 32)) | (1 << (LuaParser.T__32 - 32)) | (1 << (LuaParser.T__33 - 32)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorUnaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_operatorUnary;
    return this;
}

OperatorUnaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorUnaryContext.prototype.constructor = OperatorUnaryContext;


OperatorUnaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitOperatorUnary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.OperatorUnaryContext = OperatorUnaryContext;

LuaParser.prototype.operatorUnary = function() {

    var localctx = new OperatorUnaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, LuaParser.RULE_operatorUnary);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        _la = this._input.LA(1);
        if(!(((((_la - 31)) & ~0x1f) == 0 && ((1 << (_la - 31)) & ((1 << (LuaParser.T__30 - 31)) | (1 << (LuaParser.T__34 - 31)) | (1 << (LuaParser.T__35 - 31)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorPowerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_operatorPower;
    return this;
}

OperatorPowerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorPowerContext.prototype.constructor = OperatorPowerContext;


OperatorPowerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitOperatorPower(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.OperatorPowerContext = OperatorPowerContext;

LuaParser.prototype.operatorPower = function() {

    var localctx = new OperatorPowerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, LuaParser.RULE_operatorPower);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        this.match(LuaParser.T__36);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.FLOAT = function() {
    return this.getToken(LuaParser.FLOAT, 0);
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.NumberContext = NumberContext;

LuaParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, LuaParser.RULE_number);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 239;
        this.match(LuaParser.FLOAT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.NORMALSTRING = function() {
    return this.getToken(LuaParser.NORMALSTRING, 0);
};

StringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitString(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.StringContext = StringContext;

LuaParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, LuaParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
        this.match(LuaParser.NORMALSTRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


LuaParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 7:
			return this.exp_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

LuaParser.prototype.exp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 6);
		case 2:
			return this.precpred(this._ctx, 5);
		case 3:
			return this.precpred(this._ctx, 4);
		case 4:
			return this.precpred(this._ctx, 3);
		case 5:
			return this.precpred(this._ctx, 2);
		case 6:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.LuaParser = LuaParser;
