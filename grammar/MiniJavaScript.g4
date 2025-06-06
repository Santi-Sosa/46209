grammar MiniJavaScript;

program: simpleStatement+ EOF;

simpleStatement
    : assignmentStatement
    | outputStatement
    ;

assignmentStatement: Identifier '=' constant ';';
outputStatement: 'output' '(' Identifier ')' ';';

constant: Number | TextLiteral;

TextLiteral: '"' .*? '"';
Number: [0-9]+;

Identifier: [a-zA-Z_][a-zA-Z_0-9]*;

NEWLINE: ('\r'? '\n')+ -> skip;
WS: [ \t]+ -> skip;