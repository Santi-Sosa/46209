import antlr4 from 'antlr4';
import fs from 'fs';
import path from 'path';
import MiniJavaScriptLexer from './generated/MiniJavaScriptLexer.js';
import MiniJavaScriptParser from './generated/MiniJavaScriptParser.js';

const inputFiles = ['input.txt', 'input2.txt', 'inputError.txt', 'inputError2.txt'];

for (const file of inputFiles) {
    console.log(`\n📝 Archivo: ${file}`);

    const input = fs.readFileSync(file, 'utf-8');
    const chars = new antlr4.InputStream(input);
    const lexer = new MiniJavaScriptLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);

    // Mostrar tokens
    tokens.fill();
    console.log("📋 Tabla de Tokens:");
    console.log("Línea | Tipo de Token       | Valor");
    console.log("------|----------------------|-------------------------");

    const symbolicNames = MiniJavaScriptLexer.symbolicNames || [];
    for (const tok of tokens.tokens) {
        const name = symbolicNames[tok.type] || `TOKEN_${tok.type}`;
        if (name === 'WS' || name === 'NEWLINE') continue;
        const value = tok.text ? tok.text.replace(/\r?\n/g, '\\n') : "";
        const line = tok.line?.toString().padEnd(5) ?? '---  ';
        console.log(`${line} | ${name.padEnd(20)} | ${value}`);
    }

    // Parsear y ejecutar
    const parser = new MiniJavaScriptParser(tokens);
    parser.buildParseTrees = true;

    try {
        const tree = parser.program();
        console.log("\n🌳 Árbol de derivación:", tree.toStringTree(parser.ruleNames));

        // Interpretar las instrucciones
        const vars = new Map();
        const lines = input.split(/\r?\n/);

        for (const line of lines) {
            if (/^\s*[\r\n]*$/.test(line)) continue; // ignorar líneas vacías

            if (/^\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.*)\s*;\s*$/.test(line)) {
                // asignación
                const match = line.match(/^\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.*)\s*;\s*$/);
                const name = match[1];
                let val = match[2].trim();
                if (val.startsWith('"') && val.endsWith('"')) {
                    val = val.slice(1, -1); // quitar comillas
                } else if (/^\d+$/.test(val)) {
                    val = Number(val);
                } else {
                    throw new Error(`❌ Variable no válida en asignación: ${val}`);
                }
                vars.set(name, val);
            } else if (/^\s*output\s*\(\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*;\s*$/.test(line)) {
                const match = line.match(/output\s*\(\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)/);
                const name = match[1];
                const val = vars.get(name);
                console.log("\n✅ Entrada válida");
                console.log("📤 Resultado:", val ?? `❌ Variable "${name}" no definida`);
            }
        }

    } catch (e) {
        console.error("❌ Error de sintaxis:", e.message);
    }
}
