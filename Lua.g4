grammar Lua;

chunk
    : block EOF
    ;

block
    : stat* retstat?
    ;

stat
    : ';' #statSemicolon
    | varlist '=' explist #statAssignment
    | functioncall #statFunctioncall
    | 'break' #statBreak
    | 'while' exp 'do' block 'end' #statWhile
    | 'repeat' block 'until' exp #statRepatUntil
    | 'if' exp 'then' block ('elseif' exp 'then' block)* ('else' block)? 'end' #statIf
    | 'for' NAME '=' exp ',' exp (',' exp)? 'do' block 'end' #statFor
    | 'for' namelist 'in' explist 'do' block 'end' #statForIn
    | 'function' funcname funcbody #statFunction
    ;

retstat
    : 'return' explist? ';'?
    ;

funcname
    : NAME
    ;

varlist
    : variable (',' variable)*
    ;

namelist
    : NAME (',' NAME)*
    ;

explist
    : exp (',' exp)*
    ;

exp
    : 'nil' #expNil
    | 'false' #expFalse
    | 'true' #expTrue
    | number #expNumber
    | string #expString
    | '...' #expVarArgs
    | functiondef #expFunctionDef
    | <assoc=right> exp operatorPower exp #expPow
    | operatorUnary exp #expUnaryOp
    | exp operatorMulDivMod exp #expMulDivOp
    | exp operatorAddSub exp #expAddSubOp
    | <assoc=right> exp operatorStrcat exp #expStrcat
    | exp operatorComparison exp #expComparsionOp
    | exp operatorAnd exp #expAndOp
    | exp operatorOr exp #expOrOp
    | exp operatorBitwise exp #expBitwiseOp
    ;

functioncall
    : varOrExp args
    ;

varOrExp
    : variable | '(' exp ')'
    ;

variable
    : NAME
    ;

args
    : '(' explist? ')' | string
    ;

functiondef
    : 'function' funcbody
    ;

funcbody
    : '(' parlist? ')' block 'end'
    ;

parlist
    : namelist (',' '...')? | '...'
    ;

operatorOr 
    : 'or';

operatorAnd 
    : 'and';

operatorComparison 
    : '<' | '>' | '<=' | '>=' | '~=' | '==';

operatorStrcat
    : '..';

operatorAddSub
    : '+' | '-';

operatorMulDivMod
    : '*' | '/' | '%' | '//';

operatorBitwise
    : '&' | '|' | '~' | '<<' | '>>';

operatorUnary
    : 'not' | '#' | '-' | '~';

operatorPower
    : '^';

number
    : FLOAT
    ;

string
    : NORMALSTRING
    ;

// LEXER

NAME
    : [a-zA-Z_][a-zA-Z_0-9]*
    ;

NORMALSTRING
    : '"' ( EscapeSequence | ~('\\'|'"') )* '"' 
    ;

fragment
NESTED_STR
    : '=' NESTED_STR '='
    | '[' .*? ']'
    ;

FLOAT
    : Digit+ '.' Digit* 
    | '.' Digit+ 
    | Digit+
    ;

fragment
EscapeSequence
    : '\\' [abfnrtvz"'\\]
    | '\\' '\r'? '\n'
    | DecimalEscape
    ;
    
fragment
DecimalEscape
    : '\\' Digit
    | '\\' Digit Digit
    | '\\' [0-2] Digit Digit
    ;

fragment
Digit
    : [0-9]
    ;

COMMENT
    : '--[' NESTED_STR ']' -> channel(HIDDEN)
    ;
    
LINE_COMMENT
    : '--'
    (                                               // --
    | '[' '='*                                      // --[==
    | '[' '='* ~('='|'['|'\r'|'\n') ~('\r'|'\n')*   // --[==AA
    | ~('['|'\r'|'\n') ~('\r'|'\n')*                // --AAA
    ) ('\r\n'|'\r'|'\n'|EOF)
    -> channel(HIDDEN)
    ;
    
WS  
    : [ \t\u000C\r\n]+ -> skip
    ;

SHEBANG
    : '#' '!' ~('\n'|'\r')* -> channel(HIDDEN)
    ;