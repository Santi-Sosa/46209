// Generated from c:\Santi\Proyectos\sslVariar\Variar.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import VariarListener from './VariarListener.js';
import VariarVisitor from './VariarVisitor.js';

const serializedATN = [4,1,19,81,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,4,0,22,8,0,11,0,12,0,23,1,1,
1,1,1,1,3,1,29,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,39,8,2,1,2,1,2,1,
2,1,2,1,3,1,3,5,3,47,8,3,10,3,12,3,50,9,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,
5,1,5,1,6,1,6,1,6,5,6,64,8,6,10,6,12,6,67,9,6,1,7,1,7,1,7,1,7,1,7,1,7,3,
7,75,8,7,1,8,1,8,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,1,1,0,11,
14,78,0,21,1,0,0,0,2,28,1,0,0,0,4,30,1,0,0,0,6,44,1,0,0,0,8,53,1,0,0,0,10,
57,1,0,0,0,12,60,1,0,0,0,14,74,1,0,0,0,16,76,1,0,0,0,18,78,1,0,0,0,20,22,
3,2,1,0,21,20,1,0,0,0,22,23,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,1,1,0,
0,0,25,29,3,4,2,0,26,29,3,8,4,0,27,29,3,10,5,0,28,25,1,0,0,0,28,26,1,0,0,
0,28,27,1,0,0,0,29,3,1,0,0,0,30,31,5,1,0,0,31,32,3,16,8,0,32,33,5,2,0,0,
33,34,3,12,6,0,34,35,5,3,0,0,35,38,3,12,6,0,36,37,5,4,0,0,37,39,3,12,6,0,
38,36,1,0,0,0,38,39,1,0,0,0,39,40,1,0,0,0,40,41,5,5,0,0,41,42,3,6,3,0,42,
43,5,6,0,0,43,5,1,0,0,0,44,48,5,7,0,0,45,47,3,2,1,0,46,45,1,0,0,0,47,50,
1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,51,1,0,0,0,50,48,1,0,0,0,51,52,5,
8,0,0,52,7,1,0,0,0,53,54,3,16,8,0,54,55,5,9,0,0,55,56,3,12,6,0,56,9,1,0,
0,0,57,58,5,10,0,0,58,59,3,12,6,0,59,11,1,0,0,0,60,65,3,14,7,0,61,62,7,0,
0,0,62,64,3,14,7,0,63,61,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,
0,66,13,1,0,0,0,67,65,1,0,0,0,68,75,3,18,9,0,69,75,3,16,8,0,70,71,5,15,0,
0,71,72,3,12,6,0,72,73,5,16,0,0,73,75,1,0,0,0,74,68,1,0,0,0,74,69,1,0,0,
0,74,70,1,0,0,0,75,15,1,0,0,0,76,77,5,17,0,0,77,17,1,0,0,0,78,79,5,18,0,
0,79,19,1,0,0,0,6,23,28,38,48,65,74];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class VariarParser extends antlr4.Parser {

    static grammarFileName = "Variar.g4";
    static literalNames = [ null, "'variar'", "'desde'", "'hasta'", "'con paso'", 
                            "'hacer'", "'fin_variar'", "'{'", "'}'", "'<-'", 
                            "'escribir'", "'+'", "'-'", "'*'", "'/'", "'('", 
                            "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "IDENTIFICADOR", "NUMERO", "WS" ];
    static ruleNames = [ "programa", "instruccion", "variarf", "bloque", 
                         "asignacion", "salida", "expresion", "termino", 
                         "variable", "numero" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = VariarParser.ruleNames;
        this.literalNames = VariarParser.literalNames;
        this.symbolicNames = VariarParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, VariarParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.instruccion();
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 132098) !== 0));
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
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, VariarParser.RULE_instruccion);
	    try {
	        this.state = 28;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.variarf();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.asignacion();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 27;
	            this.salida();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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
	}



	variarf() {
	    let localctx = new VariarfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, VariarParser.RULE_variarf);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(VariarParser.T__0);
	        this.state = 31;
	        this.variable();
	        this.state = 32;
	        this.match(VariarParser.T__1);
	        this.state = 33;
	        this.expresion();
	        this.state = 34;
	        this.match(VariarParser.T__2);
	        this.state = 35;
	        this.expresion();
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 36;
	            this.match(VariarParser.T__3);
	            this.state = 37;
	            this.expresion();
	        }

	        this.state = 40;
	        this.match(VariarParser.T__4);
	        this.state = 41;
	        this.bloque();
	        this.state = 42;
	        this.match(VariarParser.T__5);
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
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, VariarParser.RULE_bloque);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(VariarParser.T__6);
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 132098) !== 0)) {
	            this.state = 45;
	            this.instruccion();
	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 51;
	        this.match(VariarParser.T__7);
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
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, VariarParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.variable();
	        this.state = 54;
	        this.match(VariarParser.T__8);
	        this.state = 55;
	        this.expresion();
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
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, VariarParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(VariarParser.T__9);
	        this.state = 58;
	        this.expresion();
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
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, VariarParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.termino();
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 30720) !== 0)) {
	            this.state = 61;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 30720) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 62;
	            this.termino();
	            this.state = 67;
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
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, VariarParser.RULE_termino);
	    try {
	        this.state = 74;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.numero();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
	            this.variable();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 70;
	            this.match(VariarParser.T__14);
	            this.state = 71;
	            this.expresion();
	            this.state = 72;
	            this.match(VariarParser.T__15);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, VariarParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(VariarParser.IDENTIFICADOR);
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
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, VariarParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(VariarParser.NUMERO);
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
	}


}

VariarParser.EOF = antlr4.Token.EOF;
VariarParser.T__0 = 1;
VariarParser.T__1 = 2;
VariarParser.T__2 = 3;
VariarParser.T__3 = 4;
VariarParser.T__4 = 5;
VariarParser.T__5 = 6;
VariarParser.T__6 = 7;
VariarParser.T__7 = 8;
VariarParser.T__8 = 9;
VariarParser.T__9 = 10;
VariarParser.T__10 = 11;
VariarParser.T__11 = 12;
VariarParser.T__12 = 13;
VariarParser.T__13 = 14;
VariarParser.T__14 = 15;
VariarParser.T__15 = 16;
VariarParser.IDENTIFICADOR = 17;
VariarParser.NUMERO = 18;
VariarParser.WS = 19;

VariarParser.RULE_programa = 0;
VariarParser.RULE_instruccion = 1;
VariarParser.RULE_variarf = 2;
VariarParser.RULE_bloque = 3;
VariarParser.RULE_asignacion = 4;
VariarParser.RULE_salida = 5;
VariarParser.RULE_expresion = 6;
VariarParser.RULE_termino = 7;
VariarParser.RULE_variable = 8;
VariarParser.RULE_numero = 9;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VariarParser.RULE_programa;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VariarVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VariarParser.RULE_instruccion;
    }

	variarf() {
	    return this.getTypedRuleContext(VariarfContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VariarVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariarfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VariarParser.RULE_variarf;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.enterVariarf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.exitVariarf(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VariarVisitor ) {
	        return visitor.visitVariarf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VariarParser.RULE_bloque;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.exitBloque(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VariarVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VariarParser.RULE_asignacion;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VariarVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VariarParser.RULE_salida;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VariarVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VariarParser.RULE_expresion;
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VariarVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VariarParser.RULE_termino;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VariarVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VariarParser.RULE_variable;
    }

	IDENTIFICADOR() {
	    return this.getToken(VariarParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VariarVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = VariarParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(VariarParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof VariarListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof VariarVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




VariarParser.ProgramaContext = ProgramaContext; 
VariarParser.InstruccionContext = InstruccionContext; 
VariarParser.VariarfContext = VariarfContext; 
VariarParser.BloqueContext = BloqueContext; 
VariarParser.AsignacionContext = AsignacionContext; 
VariarParser.SalidaContext = SalidaContext; 
VariarParser.ExpresionContext = ExpresionContext; 
VariarParser.TerminoContext = TerminoContext; 
VariarParser.VariableContext = VariableContext; 
VariarParser.NumeroContext = NumeroContext; 
