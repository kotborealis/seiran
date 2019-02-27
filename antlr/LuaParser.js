// Generated from ./antlr/Lua.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LuaVisitor = require('./LuaVisitor').LuaVisitor;

var grammarFileName = "Lua.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00033\u0133\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0007\u0003A\n\u0003\f\u0003",
    "\u000e\u0003D\u000b\u0003\u0003\u0003\u0005\u0003G\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004N\n\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0007\u0004n\n\u0004\f\u0004\u000e\u0004q\u000b\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004u\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004\u0081\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004\u0087\n\u0004\u0003\u0005\u0003\u0005\u0005",
    "\u0005\u008b\n\u0005\u0003\u0005\u0005\u0005\u008e\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u0095\n",
    "\u0007\f\u0007\u000e\u0007\u0098\u000b\u0007\u0003\b\u0003\b\u0003\b",
    "\u0007\b\u009d\n\b\f\b\u000e\b\u00a0\u000b\b\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0005\t\u00ae\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00cc\n\t\f\t\u000e\t\u00cf",
    "\u000b\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00dd\n\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0007\r\u00ea\n\r\f\r\u000e\r\u00ed\u000b\r\u0003\u000e\u0003",
    "\u000e\u0005\u000e\u00f1\n\u000e\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u00f7\n\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0005",
    "\u0011\u0101\n\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0007\u0012\u0109\n\u0012\f\u0012\u000e\u0012",
    "\u010c\u000b\u0012\u0003\u0012\u0005\u0012\u010f\n\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u011b\n\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0002\u0004\u0010",
    "\u0018\u001f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02468:\u0002\u0007\u0004\u0002\u0003\u0003",
    "\u0010\u0010\u0003\u0002\u001e#\u0003\u0002%&\u0003\u0002\')\u0004\u0002",
    "&&*+\u0002\u0142\u0002<\u0003\u0002\u0002\u0002\u0004B\u0003\u0002\u0002",
    "\u0002\u0006\u0086\u0003\u0002\u0002\u0002\b\u0088\u0003\u0002\u0002",
    "\u0002\n\u008f\u0003\u0002\u0002\u0002\f\u0091\u0003\u0002\u0002\u0002",
    "\u000e\u0099\u0003\u0002\u0002\u0002\u0010\u00ad\u0003\u0002\u0002\u0002",
    "\u0012\u00d0\u0003\u0002\u0002\u0002\u0014\u00d3\u0003\u0002\u0002\u0002",
    "\u0016\u00dc\u0003\u0002\u0002\u0002\u0018\u00de\u0003\u0002\u0002\u0002",
    "\u001a\u00ee\u0003\u0002\u0002\u0002\u001c\u00f4\u0003\u0002\u0002\u0002",
    "\u001e\u00fc\u0003\u0002\u0002\u0002 \u00fe\u0003\u0002\u0002\u0002",
    "\"\u0104\u0003\u0002\u0002\u0002$\u011a\u0003\u0002\u0002\u0002&\u011c",
    "\u0003\u0002\u0002\u0002(\u011e\u0003\u0002\u0002\u0002*\u0120\u0003",
    "\u0002\u0002\u0002,\u0122\u0003\u0002\u0002\u0002.\u0124\u0003\u0002",
    "\u0002\u00020\u0126\u0003\u0002\u0002\u00022\u0128\u0003\u0002\u0002",
    "\u00024\u012a\u0003\u0002\u0002\u00026\u012c\u0003\u0002\u0002\u0002",
    "8\u012e\u0003\u0002\u0002\u0002:\u0130\u0003\u0002\u0002\u0002<=\u0005",
    "\u0004\u0003\u0002=>\u0007\u0002\u0002\u0003>\u0003\u0003\u0002\u0002",
    "\u0002?A\u0005\u0006\u0004\u0002@?\u0003\u0002\u0002\u0002AD\u0003\u0002",
    "\u0002\u0002B@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002CF\u0003",
    "\u0002\u0002\u0002DB\u0003\u0002\u0002\u0002EG\u0005\b\u0005\u0002F",
    "E\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002G\u0005\u0003\u0002",
    "\u0002\u0002H\u0087\u0007\u0003\u0002\u0002IJ\u0007\u0004\u0002\u0002",
    "JM\u0007-\u0002\u0002KL\u0007\u0005\u0002\u0002LN\u0005\u0010\t\u0002",
    "MK\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002N\u0087\u0003\u0002",
    "\u0002\u0002OP\u0005\u0018\r\u0002PQ\u0007\u0005\u0002\u0002QR\u0005",
    "\u0010\t\u0002R\u0087\u0003\u0002\u0002\u0002ST\u0007\u0006\u0002\u0002",
    "TU\u0005\n\u0006\u0002UV\u0005\u001c\u000f\u0002V\u0087\u0003\u0002",
    "\u0002\u0002WX\u0007\u0004\u0002\u0002XY\u0007\u0006\u0002\u0002YZ\u0005",
    "\n\u0006\u0002Z[\u0005\u001c\u000f\u0002[\u0087\u0003\u0002\u0002\u0002",
    "\\\u0087\u0005\u0012\n\u0002]\u0087\u0007\u0007\u0002\u0002^_\u0007",
    "\b\u0002\u0002_`\u0005\u0010\t\u0002`a\u0007\t\u0002\u0002ab\u0005\u0004",
    "\u0003\u0002bc\u0007\n\u0002\u0002c\u0087\u0003\u0002\u0002\u0002de",
    "\u0007\u000b\u0002\u0002ef\u0005\u0010\t\u0002fg\u0007\f\u0002\u0002",
    "go\u0005\u0004\u0003\u0002hi\u0007\r\u0002\u0002ij\u0005\u0010\t\u0002",
    "jk\u0007\f\u0002\u0002kl\u0005\u0004\u0003\u0002ln\u0003\u0002\u0002",
    "\u0002mh\u0003\u0002\u0002\u0002nq\u0003\u0002\u0002\u0002om\u0003\u0002",
    "\u0002\u0002op\u0003\u0002\u0002\u0002pt\u0003\u0002\u0002\u0002qo\u0003",
    "\u0002\u0002\u0002rs\u0007\u000e\u0002\u0002su\u0005\u0004\u0003\u0002",
    "tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uv\u0003\u0002\u0002",
    "\u0002vw\u0007\n\u0002\u0002w\u0087\u0003\u0002\u0002\u0002xy\u0007",
    "\u000f\u0002\u0002yz\u0007-\u0002\u0002z{\u0007\u0005\u0002\u0002{|",
    "\u0005\u0010\t\u0002|}\u0007\u0010\u0002\u0002}\u0080\u0005\u0010\t",
    "\u0002~\u007f\u0007\u0010\u0002\u0002\u007f\u0081\u0005\u0010\t\u0002",
    "\u0080~\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002",
    "\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0083\u0007\t\u0002\u0002",
    "\u0083\u0084\u0005\u0004\u0003\u0002\u0084\u0085\u0007\n\u0002\u0002",
    "\u0085\u0087\u0003\u0002\u0002\u0002\u0086H\u0003\u0002\u0002\u0002",
    "\u0086I\u0003\u0002\u0002\u0002\u0086O\u0003\u0002\u0002\u0002\u0086",
    "S\u0003\u0002\u0002\u0002\u0086W\u0003\u0002\u0002\u0002\u0086\\\u0003",
    "\u0002\u0002\u0002\u0086]\u0003\u0002\u0002\u0002\u0086^\u0003\u0002",
    "\u0002\u0002\u0086d\u0003\u0002\u0002\u0002\u0086x\u0003\u0002\u0002",
    "\u0002\u0087\u0007\u0003\u0002\u0002\u0002\u0088\u008a\u0007\u0011\u0002",
    "\u0002\u0089\u008b\u0005\u0010\t\u0002\u008a\u0089\u0003\u0002\u0002",
    "\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u008d\u0003\u0002\u0002",
    "\u0002\u008c\u008e\u0007\u0003\u0002\u0002\u008d\u008c\u0003\u0002\u0002",
    "\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\t\u0003\u0002\u0002",
    "\u0002\u008f\u0090\u0007-\u0002\u0002\u0090\u000b\u0003\u0002\u0002",
    "\u0002\u0091\u0096\u0007-\u0002\u0002\u0092\u0093\u0007\u0010\u0002",
    "\u0002\u0093\u0095\u0007-\u0002\u0002\u0094\u0092\u0003\u0002\u0002",
    "\u0002\u0095\u0098\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002",
    "\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\r\u0003\u0002\u0002",
    "\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0099\u009e\u0005\u0010\t",
    "\u0002\u009a\u009b\u0007\u0010\u0002\u0002\u009b\u009d\u0005\u0010\t",
    "\u0002\u009c\u009a\u0003\u0002\u0002\u0002\u009d\u00a0\u0003\u0002\u0002",
    "\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002",
    "\u0002\u009f\u000f\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002\u0002",
    "\u0002\u00a1\u00a2\b\t\u0001\u0002\u00a2\u00ae\u0007\u0012\u0002\u0002",
    "\u00a3\u00ae\u0007\u0013\u0002\u0002\u00a4\u00ae\u0007\u0014\u0002\u0002",
    "\u00a5\u00ae\u00058\u001d\u0002\u00a6\u00ae\u0005:\u001e\u0002\u00a7",
    "\u00ae\u0005\u0014\u000b\u0002\u00a8\u00ae\u0005\u0016\f\u0002\u00a9",
    "\u00ae\u0005 \u0011\u0002\u00aa\u00ab\u00054\u001b\u0002\u00ab\u00ac",
    "\u0005\u0010\t\t\u00ac\u00ae\u0003\u0002\u0002\u0002\u00ad\u00a1\u0003",
    "\u0002\u0002\u0002\u00ad\u00a3\u0003\u0002\u0002\u0002\u00ad\u00a4\u0003",
    "\u0002\u0002\u0002\u00ad\u00a5\u0003\u0002\u0002\u0002\u00ad\u00a6\u0003",
    "\u0002\u0002\u0002\u00ad\u00a7\u0003\u0002\u0002\u0002\u00ad\u00a8\u0003",
    "\u0002\u0002\u0002\u00ad\u00a9\u0003\u0002\u0002\u0002\u00ad\u00aa\u0003",
    "\u0002\u0002\u0002\u00ae\u00cd\u0003\u0002\u0002\u0002\u00af\u00b0\f",
    "\n\u0002\u0002\u00b0\u00b1\u00056\u001c\u0002\u00b1\u00b2\u0005\u0010",
    "\t\n\u00b2\u00cc\u0003\u0002\u0002\u0002\u00b3\u00b4\f\b\u0002\u0002",
    "\u00b4\u00b5\u00052\u001a\u0002\u00b5\u00b6\u0005\u0010\t\t\u00b6\u00cc",
    "\u0003\u0002\u0002\u0002\u00b7\u00b8\f\u0007\u0002\u0002\u00b8\u00b9",
    "\u00050\u0019\u0002\u00b9\u00ba\u0005\u0010\t\b\u00ba\u00cc\u0003\u0002",
    "\u0002\u0002\u00bb\u00bc\f\u0006\u0002\u0002\u00bc\u00bd\u0005.\u0018",
    "\u0002\u00bd\u00be\u0005\u0010\t\u0006\u00be\u00cc\u0003\u0002\u0002",
    "\u0002\u00bf\u00c0\f\u0005\u0002\u0002\u00c0\u00c1\u0005,\u0017\u0002",
    "\u00c1\u00c2\u0005\u0010\t\u0006\u00c2\u00cc\u0003\u0002\u0002\u0002",
    "\u00c3\u00c4\f\u0004\u0002\u0002\u00c4\u00c5\u0005*\u0016\u0002\u00c5",
    "\u00c6\u0005\u0010\t\u0005\u00c6\u00cc\u0003\u0002\u0002\u0002\u00c7",
    "\u00c8\f\u0003\u0002\u0002\u00c8\u00c9\u0005(\u0015\u0002\u00c9\u00ca",
    "\u0005\u0010\t\u0004\u00ca\u00cc\u0003\u0002\u0002\u0002\u00cb\u00af",
    "\u0003\u0002\u0002\u0002\u00cb\u00b3\u0003\u0002\u0002\u0002\u00cb\u00b7",
    "\u0003\u0002\u0002\u0002\u00cb\u00bb\u0003\u0002\u0002\u0002\u00cb\u00bf",
    "\u0003\u0002\u0002\u0002\u00cb\u00c3\u0003\u0002\u0002\u0002\u00cb\u00c7",
    "\u0003\u0002\u0002\u0002\u00cc\u00cf\u0003\u0002\u0002\u0002\u00cd\u00cb",
    "\u0003\u0002\u0002\u0002\u00cd\u00ce\u0003\u0002\u0002\u0002\u00ce\u0011",
    "\u0003\u0002\u0002\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002\u00d0\u00d1",
    "\u0005\u0018\r\u0002\u00d1\u00d2\u0005\u001a\u000e\u0002\u00d2\u0013",
    "\u0003\u0002\u0002\u0002\u00d3\u00d4\u0007\u0006\u0002\u0002\u00d4\u00d5",
    "\u0005\u001c\u000f\u0002\u00d5\u0015\u0003\u0002\u0002\u0002\u00d6\u00dd",
    "\u0005\u0018\r\u0002\u00d7\u00dd\u0005\u0012\n\u0002\u00d8\u00d9\u0007",
    "\u0015\u0002\u0002\u00d9\u00da\u0005\u0010\t\u0002\u00da\u00db\u0007",
    "\u0016\u0002\u0002\u00db\u00dd\u0003\u0002\u0002\u0002\u00dc\u00d6\u0003",
    "\u0002\u0002\u0002\u00dc\u00d7\u0003\u0002\u0002\u0002\u00dc\u00d8\u0003",
    "\u0002\u0002\u0002\u00dd\u0017\u0003\u0002\u0002\u0002\u00de\u00df\b",
    "\r\u0001\u0002\u00df\u00e0\u0007-\u0002\u0002\u00e0\u00eb\u0003\u0002",
    "\u0002\u0002\u00e1\u00e2\f\u0004\u0002\u0002\u00e2\u00e3\u0007\u0017",
    "\u0002\u0002\u00e3\u00e4\u0005\u0010\t\u0002\u00e4\u00e5\u0007\u0018",
    "\u0002\u0002\u00e5\u00ea\u0003\u0002\u0002\u0002\u00e6\u00e7\f\u0003",
    "\u0002\u0002\u00e7\u00e8\u0007\u0019\u0002\u0002\u00e8\u00ea\u0007-",
    "\u0002\u0002\u00e9\u00e1\u0003\u0002\u0002\u0002\u00e9\u00e6\u0003\u0002",
    "\u0002\u0002\u00ea\u00ed\u0003\u0002\u0002\u0002\u00eb\u00e9\u0003\u0002",
    "\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec\u0019\u0003\u0002",
    "\u0002\u0002\u00ed\u00eb\u0003\u0002\u0002\u0002\u00ee\u00f0\u0007\u0015",
    "\u0002\u0002\u00ef\u00f1\u0005\u000e\b\u0002\u00f0\u00ef\u0003\u0002",
    "\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002",
    "\u0002\u0002\u00f2\u00f3\u0007\u0016\u0002\u0002\u00f3\u001b\u0003\u0002",
    "\u0002\u0002\u00f4\u00f6\u0007\u0015\u0002\u0002\u00f5\u00f7\u0005\u001e",
    "\u0010\u0002\u00f6\u00f5\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003\u0002",
    "\u0002\u0002\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8\u00f9\u0007\u0016",
    "\u0002\u0002\u00f9\u00fa\u0005\u0004\u0003\u0002\u00fa\u00fb\u0007\n",
    "\u0002\u0002\u00fb\u001d\u0003\u0002\u0002\u0002\u00fc\u00fd\u0005\f",
    "\u0007\u0002\u00fd\u001f\u0003\u0002\u0002\u0002\u00fe\u0100\u0007\u001a",
    "\u0002\u0002\u00ff\u0101\u0005\"\u0012\u0002\u0100\u00ff\u0003\u0002",
    "\u0002\u0002\u0100\u0101\u0003\u0002\u0002\u0002\u0101\u0102\u0003\u0002",
    "\u0002\u0002\u0102\u0103\u0007\u001b\u0002\u0002\u0103!\u0003\u0002",
    "\u0002\u0002\u0104\u010a\u0005$\u0013\u0002\u0105\u0106\u0005&\u0014",
    "\u0002\u0106\u0107\u0005$\u0013\u0002\u0107\u0109\u0003\u0002\u0002",
    "\u0002\u0108\u0105\u0003\u0002\u0002\u0002\u0109\u010c\u0003\u0002\u0002",
    "\u0002\u010a\u0108\u0003\u0002\u0002\u0002\u010a\u010b\u0003\u0002\u0002",
    "\u0002\u010b\u010e\u0003\u0002\u0002\u0002\u010c\u010a\u0003\u0002\u0002",
    "\u0002\u010d\u010f\u0005&\u0014\u0002\u010e\u010d\u0003\u0002\u0002",
    "\u0002\u010e\u010f\u0003\u0002\u0002\u0002\u010f#\u0003\u0002\u0002",
    "\u0002\u0110\u0111\u0007\u0017\u0002\u0002\u0111\u0112\u0005\u0010\t",
    "\u0002\u0112\u0113\u0007\u0018\u0002\u0002\u0113\u0114\u0007\u0005\u0002",
    "\u0002\u0114\u0115\u0005\u0010\t\u0002\u0115\u011b\u0003\u0002\u0002",
    "\u0002\u0116\u0117\u0007-\u0002\u0002\u0117\u0118\u0007\u0005\u0002",
    "\u0002\u0118\u011b\u0005\u0010\t\u0002\u0119\u011b\u0005\u0010\t\u0002",
    "\u011a\u0110\u0003\u0002\u0002\u0002\u011a\u0116\u0003\u0002\u0002\u0002",
    "\u011a\u0119\u0003\u0002\u0002\u0002\u011b%\u0003\u0002\u0002\u0002",
    "\u011c\u011d\t\u0002\u0002\u0002\u011d\'\u0003\u0002\u0002\u0002\u011e",
    "\u011f\u0007\u001c\u0002\u0002\u011f)\u0003\u0002\u0002\u0002\u0120",
    "\u0121\u0007\u001d\u0002\u0002\u0121+\u0003\u0002\u0002\u0002\u0122",
    "\u0123\t\u0003\u0002\u0002\u0123-\u0003\u0002\u0002\u0002\u0124\u0125",
    "\u0007$\u0002\u0002\u0125/\u0003\u0002\u0002\u0002\u0126\u0127\t\u0004",
    "\u0002\u0002\u01271\u0003\u0002\u0002\u0002\u0128\u0129\t\u0005\u0002",
    "\u0002\u01293\u0003\u0002\u0002\u0002\u012a\u012b\t\u0006\u0002\u0002",
    "\u012b5\u0003\u0002\u0002\u0002\u012c\u012d\u0007,\u0002\u0002\u012d",
    "7\u0003\u0002\u0002\u0002\u012e\u012f\u0007/\u0002\u0002\u012f9\u0003",
    "\u0002\u0002\u0002\u0130\u0131\u0007.\u0002\u0002\u0131;\u0003\u0002",
    "\u0002\u0002\u0019BFMot\u0080\u0086\u008a\u008d\u0096\u009e\u00ad\u00cb",
    "\u00cd\u00dc\u00e9\u00eb\u00f0\u00f6\u0100\u010a\u010e\u011a"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'local'", "'='", "'function'", "'break'", 
                     "'while'", "'do'", "'end'", "'if'", "'then'", "'elseif'", 
                     "'else'", "'for'", "','", "'return'", "'nil'", "'false'", 
                     "'true'", "'('", "')'", "'['", "']'", "'.'", "'{'", 
                     "'}'", "'or'", "'and'", "'<'", "'>'", "'<='", "'>='", 
                     "'~='", "'=='", "'..'", "'+'", "'-'", "'*'", "'/'", 
                     "'%'", "'not'", "'#'", "'^'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, "NAME", 
                      "NORMALSTRING", "FLOAT", "COMMENT", "LINE_COMMENT", 
                      "WS", "SHEBANG" ];

var ruleNames =  [ "chunk", "block", "stat", "retstat", "funcname", "namelist", 
                   "explist", "exp", "functioncall", "functiondef", "varexp", 
                   "variable", "args", "funcbody", "parlist", "tableconstructor", 
                   "fieldlist", "field", "fieldsep", "operatorOr", "operatorAnd", 
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
LuaParser.T__37 = 38;
LuaParser.T__38 = 39;
LuaParser.T__39 = 40;
LuaParser.T__40 = 41;
LuaParser.T__41 = 42;
LuaParser.NAME = 43;
LuaParser.NORMALSTRING = 44;
LuaParser.FLOAT = 45;
LuaParser.COMMENT = 46;
LuaParser.LINE_COMMENT = 47;
LuaParser.WS = 48;
LuaParser.SHEBANG = 49;

LuaParser.RULE_chunk = 0;
LuaParser.RULE_block = 1;
LuaParser.RULE_stat = 2;
LuaParser.RULE_retstat = 3;
LuaParser.RULE_funcname = 4;
LuaParser.RULE_namelist = 5;
LuaParser.RULE_explist = 6;
LuaParser.RULE_exp = 7;
LuaParser.RULE_functioncall = 8;
LuaParser.RULE_functiondef = 9;
LuaParser.RULE_varexp = 10;
LuaParser.RULE_variable = 11;
LuaParser.RULE_args = 12;
LuaParser.RULE_funcbody = 13;
LuaParser.RULE_parlist = 14;
LuaParser.RULE_tableconstructor = 15;
LuaParser.RULE_fieldlist = 16;
LuaParser.RULE_field = 17;
LuaParser.RULE_fieldsep = 18;
LuaParser.RULE_operatorOr = 19;
LuaParser.RULE_operatorAnd = 20;
LuaParser.RULE_operatorComparison = 21;
LuaParser.RULE_operatorStrcat = 22;
LuaParser.RULE_operatorAddSub = 23;
LuaParser.RULE_operatorMulDivMod = 24;
LuaParser.RULE_operatorUnary = 25;
LuaParser.RULE_operatorPower = 26;
LuaParser.RULE_number = 27;
LuaParser.RULE_string = 28;


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
        this.state = 58;
        this.block();
        this.state = 59;
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
        this.state = 64;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__0) | (1 << LuaParser.T__1) | (1 << LuaParser.T__3) | (1 << LuaParser.T__4) | (1 << LuaParser.T__5) | (1 << LuaParser.T__8) | (1 << LuaParser.T__12))) !== 0) || _la===LuaParser.NAME) {
            this.state = 61;
            this.stat();
            this.state = 66;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 68;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuaParser.T__14) {
            this.state = 67;
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

StatVarDeclarationContext.prototype.NAME = function() {
    return this.getToken(LuaParser.NAME, 0);
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
        this.state = 132;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            localctx = new StatSemicolonContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 70;
            this.match(LuaParser.T__0);
            break;

        case 2:
            localctx = new StatVarDeclarationContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 71;
            this.match(LuaParser.T__1);
            this.state = 72;
            this.match(LuaParser.NAME);
            this.state = 75;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LuaParser.T__2) {
                this.state = 73;
                this.match(LuaParser.T__2);
                this.state = 74;
                this.exp(0);
            }

            break;

        case 3:
            localctx = new StatAssignmentContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 77;
            this.variable(0);
            this.state = 78;
            this.match(LuaParser.T__2);
            this.state = 79;
            this.exp(0);
            break;

        case 4:
            localctx = new StatFunctionContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 81;
            this.match(LuaParser.T__3);
            this.state = 82;
            this.funcname();
            this.state = 83;
            this.funcbody();
            break;

        case 5:
            localctx = new StatLocalFunctionContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 85;
            this.match(LuaParser.T__1);
            this.state = 86;
            this.match(LuaParser.T__3);
            this.state = 87;
            this.funcname();
            this.state = 88;
            this.funcbody();
            break;

        case 6:
            localctx = new StatFunctioncallContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 90;
            this.functioncall();
            break;

        case 7:
            localctx = new StatBreakContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 91;
            this.match(LuaParser.T__4);
            break;

        case 8:
            localctx = new StatWhileContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 92;
            this.match(LuaParser.T__5);
            this.state = 93;
            this.exp(0);
            this.state = 94;
            this.match(LuaParser.T__6);
            this.state = 95;
            this.block();
            this.state = 96;
            this.match(LuaParser.T__7);
            break;

        case 9:
            localctx = new StatIfContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 98;
            this.match(LuaParser.T__8);
            this.state = 99;
            this.exp(0);
            this.state = 100;
            this.match(LuaParser.T__9);
            this.state = 101;
            this.block();
            this.state = 109;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LuaParser.T__10) {
                this.state = 102;
                this.match(LuaParser.T__10);
                this.state = 103;
                this.exp(0);
                this.state = 104;
                this.match(LuaParser.T__9);
                this.state = 105;
                this.block();
                this.state = 111;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 114;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LuaParser.T__11) {
                this.state = 112;
                this.match(LuaParser.T__11);
                this.state = 113;
                this.block();
            }

            this.state = 116;
            this.match(LuaParser.T__7);
            break;

        case 10:
            localctx = new StatForContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 118;
            this.match(LuaParser.T__12);
            this.state = 119;
            this.match(LuaParser.NAME);
            this.state = 120;
            this.match(LuaParser.T__2);
            this.state = 121;
            this.exp(0);
            this.state = 122;
            this.match(LuaParser.T__13);
            this.state = 123;
            this.exp(0);
            this.state = 126;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LuaParser.T__13) {
                this.state = 124;
                this.match(LuaParser.T__13);
                this.state = 125;
                this.exp(0);
            }

            this.state = 128;
            this.match(LuaParser.T__6);
            this.state = 129;
            this.block();
            this.state = 130;
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
        this.state = 134;
        this.match(LuaParser.T__14);
        this.state = 136;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__3) | (1 << LuaParser.T__15) | (1 << LuaParser.T__16) | (1 << LuaParser.T__17) | (1 << LuaParser.T__18) | (1 << LuaParser.T__23))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (LuaParser.T__35 - 36)) | (1 << (LuaParser.T__39 - 36)) | (1 << (LuaParser.T__40 - 36)) | (1 << (LuaParser.NAME - 36)) | (1 << (LuaParser.NORMALSTRING - 36)) | (1 << (LuaParser.FLOAT - 36)))) !== 0)) {
            this.state = 135;
            this.exp(0);
        }

        this.state = 139;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuaParser.T__0) {
            this.state = 138;
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
        this.state = 141;
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
        this.state = 143;
        this.match(LuaParser.NAME);
        this.state = 148;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LuaParser.T__13) {
            this.state = 144;
            this.match(LuaParser.T__13);
            this.state = 145;
            this.match(LuaParser.NAME);
            this.state = 150;
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
        this.state = 151;
        this.exp(0);
        this.state = 156;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LuaParser.T__13) {
            this.state = 152;
            this.match(LuaParser.T__13);
            this.state = 153;
            this.exp(0);
            this.state = 158;
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


function ExpTableconstructContext(parser, ctx) {
	ExpContext.call(this, parser);
    ExpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpTableconstructContext.prototype = Object.create(ExpContext.prototype);
ExpTableconstructContext.prototype.constructor = ExpTableconstructContext;

LuaParser.ExpTableconstructContext = ExpTableconstructContext;

ExpTableconstructContext.prototype.tableconstructor = function() {
    return this.getTypedRuleContext(TableconstructorContext,0);
};
ExpTableconstructContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitExpTableconstruct(this);
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


function ExpFunctiondefContext(parser, ctx) {
	ExpContext.call(this, parser);
    ExpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExpFunctiondefContext.prototype = Object.create(ExpContext.prototype);
ExpFunctiondefContext.prototype.constructor = ExpFunctiondefContext;

LuaParser.ExpFunctiondefContext = ExpFunctiondefContext;

ExpFunctiondefContext.prototype.functiondef = function() {
    return this.getTypedRuleContext(FunctiondefContext,0);
};
ExpFunctiondefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitExpFunctiondef(this);
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
        this.state = 171;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LuaParser.T__15:
            localctx = new ExpNilContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 160;
            this.match(LuaParser.T__15);
            break;
        case LuaParser.T__16:
            localctx = new ExpFalseContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 161;
            this.match(LuaParser.T__16);
            break;
        case LuaParser.T__17:
            localctx = new ExpTrueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 162;
            this.match(LuaParser.T__17);
            break;
        case LuaParser.FLOAT:
            localctx = new ExpNumberContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 163;
            this.number();
            break;
        case LuaParser.NORMALSTRING:
            localctx = new ExpStringContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 164;
            this.string();
            break;
        case LuaParser.T__3:
            localctx = new ExpFunctiondefContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 165;
            this.functiondef();
            break;
        case LuaParser.T__18:
        case LuaParser.NAME:
            localctx = new ExpVarexpContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 166;
            this.varexp();
            break;
        case LuaParser.T__23:
            localctx = new ExpTableconstructContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 167;
            this.tableconstructor();
            break;
        case LuaParser.T__35:
        case LuaParser.T__39:
        case LuaParser.T__40:
            localctx = new ExpUnaryOpContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 168;
            this.operatorUnary();
            this.state = 169;
            this.exp(7);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 203;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 201;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpPowContext(this, new ExpContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 173;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 174;
                    this.operatorPower();
                    this.state = 175;
                    this.exp(8);
                    break;

                case 2:
                    localctx = new ExpMulDivOpContext(this, new ExpContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 177;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 178;
                    this.operatorMulDivMod();
                    this.state = 179;
                    this.exp(7);
                    break;

                case 3:
                    localctx = new ExpAddSubOpContext(this, new ExpContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 181;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 182;
                    this.operatorAddSub();
                    this.state = 183;
                    this.exp(6);
                    break;

                case 4:
                    localctx = new ExpStrcatContext(this, new ExpContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 185;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 186;
                    this.operatorStrcat();
                    this.state = 187;
                    this.exp(4);
                    break;

                case 5:
                    localctx = new ExpComparsionOpContext(this, new ExpContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 189;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 190;
                    this.operatorComparison();
                    this.state = 191;
                    this.exp(4);
                    break;

                case 6:
                    localctx = new ExpAndOpContext(this, new ExpContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 193;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 194;
                    this.operatorAnd();
                    this.state = 195;
                    this.exp(3);
                    break;

                case 7:
                    localctx = new ExpOrOpContext(this, new ExpContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 197;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 198;
                    this.operatorOr();
                    this.state = 199;
                    this.exp(2);
                    break;

                } 
            }
            this.state = 205;
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
        this.state = 206;
        this.variable(0);
        this.state = 207;
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


function FunctiondefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_functiondef;
    return this;
}

FunctiondefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctiondefContext.prototype.constructor = FunctiondefContext;

FunctiondefContext.prototype.funcbody = function() {
    return this.getTypedRuleContext(FuncbodyContext,0);
};

FunctiondefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitFunctiondef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.FunctiondefContext = FunctiondefContext;

LuaParser.prototype.functiondef = function() {

    var localctx = new FunctiondefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, LuaParser.RULE_functiondef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        this.match(LuaParser.T__3);
        this.state = 210;
        this.funcbody();
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
    this.enterRule(localctx, 20, LuaParser.RULE_varexp);
    try {
        this.state = 218;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 212;
            this.variable(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 213;
            this.functioncall();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 214;
            this.match(LuaParser.T__18);
            this.state = 215;
            this.exp(0);
            this.state = 216;
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

VariableContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

VariableContext.prototype.exp = function() {
    return this.getTypedRuleContext(ExpContext,0);
};

VariableContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitVariable(this);
    } else {
        return visitor.visitChildren(this);
    }
};



LuaParser.prototype.variable = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new VariableContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 22;
    this.enterRecursionRule(localctx, 22, LuaParser.RULE_variable, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        this.match(LuaParser.NAME);
        this._ctx.stop = this._input.LT(-1);
        this.state = 233;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 231;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new VariableContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_variable);
                    this.state = 223;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 224;
                    this.match(LuaParser.T__20);
                    this.state = 225;
                    this.exp(0);
                    this.state = 226;
                    this.match(LuaParser.T__21);
                    break;

                case 2:
                    localctx = new VariableContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_variable);
                    this.state = 228;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 229;
                    this.match(LuaParser.T__22);
                    this.state = 230;
                    this.match(LuaParser.NAME);
                    break;

                } 
            }
            this.state = 235;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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
    this.enterRule(localctx, 24, LuaParser.RULE_args);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        this.match(LuaParser.T__18);
        this.state = 238;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__3) | (1 << LuaParser.T__15) | (1 << LuaParser.T__16) | (1 << LuaParser.T__17) | (1 << LuaParser.T__18) | (1 << LuaParser.T__23))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (LuaParser.T__35 - 36)) | (1 << (LuaParser.T__39 - 36)) | (1 << (LuaParser.T__40 - 36)) | (1 << (LuaParser.NAME - 36)) | (1 << (LuaParser.NORMALSTRING - 36)) | (1 << (LuaParser.FLOAT - 36)))) !== 0)) {
            this.state = 237;
            this.explist();
        }

        this.state = 240;
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
    this.enterRule(localctx, 26, LuaParser.RULE_funcbody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 242;
        this.match(LuaParser.T__18);
        this.state = 244;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuaParser.NAME) {
            this.state = 243;
            this.parlist();
        }

        this.state = 246;
        this.match(LuaParser.T__19);
        this.state = 247;
        this.block();
        this.state = 248;
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
    this.enterRule(localctx, 28, LuaParser.RULE_parlist);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 250;
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


function TableconstructorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_tableconstructor;
    return this;
}

TableconstructorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TableconstructorContext.prototype.constructor = TableconstructorContext;

TableconstructorContext.prototype.fieldlist = function() {
    return this.getTypedRuleContext(FieldlistContext,0);
};

TableconstructorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitTableconstructor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.TableconstructorContext = TableconstructorContext;

LuaParser.prototype.tableconstructor = function() {

    var localctx = new TableconstructorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, LuaParser.RULE_tableconstructor);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
        this.match(LuaParser.T__23);
        this.state = 254;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__3) | (1 << LuaParser.T__15) | (1 << LuaParser.T__16) | (1 << LuaParser.T__17) | (1 << LuaParser.T__18) | (1 << LuaParser.T__20) | (1 << LuaParser.T__23))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (LuaParser.T__35 - 36)) | (1 << (LuaParser.T__39 - 36)) | (1 << (LuaParser.T__40 - 36)) | (1 << (LuaParser.NAME - 36)) | (1 << (LuaParser.NORMALSTRING - 36)) | (1 << (LuaParser.FLOAT - 36)))) !== 0)) {
            this.state = 253;
            this.fieldlist();
        }

        this.state = 256;
        this.match(LuaParser.T__24);
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


function FieldlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_fieldlist;
    return this;
}

FieldlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldlistContext.prototype.constructor = FieldlistContext;

FieldlistContext.prototype.field = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldContext);
    } else {
        return this.getTypedRuleContext(FieldContext,i);
    }
};

FieldlistContext.prototype.fieldsep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldsepContext);
    } else {
        return this.getTypedRuleContext(FieldsepContext,i);
    }
};

FieldlistContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitFieldlist(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.FieldlistContext = FieldlistContext;

LuaParser.prototype.fieldlist = function() {

    var localctx = new FieldlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, LuaParser.RULE_fieldlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this.field();
        this.state = 264;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 259;
                this.fieldsep();
                this.state = 260;
                this.field(); 
            }
            this.state = 266;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
        }

        this.state = 268;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuaParser.T__0 || _la===LuaParser.T__13) {
            this.state = 267;
            this.fieldsep();
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


function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

FieldContext.prototype.NAME = function() {
    return this.getToken(LuaParser.NAME, 0);
};

FieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.FieldContext = FieldContext;

LuaParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, LuaParser.RULE_field);
    try {
        this.state = 280;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 270;
            this.match(LuaParser.T__20);
            this.state = 271;
            this.exp(0);
            this.state = 272;
            this.match(LuaParser.T__21);
            this.state = 273;
            this.match(LuaParser.T__2);
            this.state = 274;
            this.exp(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 276;
            this.match(LuaParser.NAME);
            this.state = 277;
            this.match(LuaParser.T__2);
            this.state = 278;
            this.exp(0);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 279;
            this.exp(0);
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


function FieldsepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_fieldsep;
    return this;
}

FieldsepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldsepContext.prototype.constructor = FieldsepContext;


FieldsepContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LuaVisitor ) {
        return visitor.visitFieldsep(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LuaParser.FieldsepContext = FieldsepContext;

LuaParser.prototype.fieldsep = function() {

    var localctx = new FieldsepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, LuaParser.RULE_fieldsep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
        _la = this._input.LA(1);
        if(!(_la===LuaParser.T__0 || _la===LuaParser.T__13)) {
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
    this.enterRule(localctx, 38, LuaParser.RULE_operatorOr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        this.match(LuaParser.T__25);
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
    this.enterRule(localctx, 40, LuaParser.RULE_operatorAnd);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        this.match(LuaParser.T__26);
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
    this.enterRule(localctx, 42, LuaParser.RULE_operatorComparison);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 288;
        _la = this._input.LA(1);
        if(!(((((_la - 28)) & ~0x1f) == 0 && ((1 << (_la - 28)) & ((1 << (LuaParser.T__27 - 28)) | (1 << (LuaParser.T__28 - 28)) | (1 << (LuaParser.T__29 - 28)) | (1 << (LuaParser.T__30 - 28)) | (1 << (LuaParser.T__31 - 28)) | (1 << (LuaParser.T__32 - 28)))) !== 0))) {
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
    this.enterRule(localctx, 44, LuaParser.RULE_operatorStrcat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        this.match(LuaParser.T__33);
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
    this.enterRule(localctx, 46, LuaParser.RULE_operatorAddSub);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
        _la = this._input.LA(1);
        if(!(_la===LuaParser.T__34 || _la===LuaParser.T__35)) {
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
    this.enterRule(localctx, 48, LuaParser.RULE_operatorMulDivMod);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 294;
        _la = this._input.LA(1);
        if(!(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (LuaParser.T__36 - 37)) | (1 << (LuaParser.T__37 - 37)) | (1 << (LuaParser.T__38 - 37)))) !== 0))) {
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
    this.enterRule(localctx, 50, LuaParser.RULE_operatorUnary);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 296;
        _la = this._input.LA(1);
        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (LuaParser.T__35 - 36)) | (1 << (LuaParser.T__39 - 36)) | (1 << (LuaParser.T__40 - 36)))) !== 0))) {
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
    this.enterRule(localctx, 52, LuaParser.RULE_operatorPower);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 298;
        this.match(LuaParser.T__41);
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
    this.enterRule(localctx, 54, LuaParser.RULE_number);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 300;
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
    this.enterRule(localctx, 56, LuaParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 302;
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
	case 11:
			return this.variable_sempred(localctx, predIndex);
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

LuaParser.prototype.variable_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 7:
			return this.precpred(this._ctx, 2);
		case 8:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.LuaParser = LuaParser;
