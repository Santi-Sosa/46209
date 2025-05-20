import antlr4 from 'antlr4';
import VariarLexer from './generated/VariarLexer.js';
import VariarParser from './generated/VariarParser.js';
import CustomVariarListener from './CustomVariarListener.js';
import fs from 'fs';


const input = fs.readFileSync('input.txt', 'utf8');
const chars = new antlr4.InputStream(input);
const lexer = new VariarLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new VariarParser(tokens);
parser.buildParseTrees = true;

const tree = parser.programa();
const listener = new CustomVariarListener();
antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
