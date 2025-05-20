// Variar.g4
grammar Variar;

programa: instruccion+;

instruccion
    : variarf
    | asignacion
    | salida
    ;

variarf
    : 'variar' variable 'desde' expresion 'hasta' expresion ('con paso' expresion)? 'hacer' bloque 'fin_variar'
    ;

bloque
    : '{' instruccion* '}'
    ;

asignacion
    : variable '<-' expresion
    ;

salida
    : 'escribir' expresion
    ;

expresion
    : termino (('+' | '-' | '*' | '/') termino)*
    ;

termino
    : numero
    | variable
    | '(' expresion ')'
    ;

variable
    : IDENTIFICADOR
    ;

numero
    : NUMERO
    ;

// LÉXICO
IDENTIFICADOR: LETRA (LETRA | DIGITO | '_')*;

fragment LETRA: [a-zA-Z];
fragment DIGITO : [0-9] ;

NUMERO : DIGITO+ ;

WS: [ \t\r\n]+ -> skip;
