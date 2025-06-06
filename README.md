# MiniJavaScript Parser

Este proyecto implementa un analizador sintáctico para una versión reducida de JavaScript.

## Requisitos
- Node.js
- ANTLR4
- VS Code con la extensión ANTLR4

## Uso

1. Generar los archivos con ANTLR4:

```bash
java -jar antlr-4.13.0-complete.jar -Dlanguage=JavaScript -o ./generated grammar/MiniJavaScript.g4
```

2. Instalar dependencias y correr:

```bash
npm install
npm start
```

## Archivos de entrada

- `input.txt`: caso válido
- `input2.txt`: otro caso válido
- `inputError.txt`: caso inválido
- `inputError2.txt`: otro caso inválido