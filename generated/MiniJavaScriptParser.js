// Generated from grammar/MiniJavaScript.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import MiniJavaScriptListener from './MiniJavaScriptListener.js';
const serializedATN = [4,1,10,35,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,4,0,12,8,0,11,0,12,0,13,1,0,1,0,1,1,1,1,3,1,20,8,1,1,2,1,2,1,2,1,2,1,
2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,1,1,0,6,7,31,0,11,
1,0,0,0,2,19,1,0,0,0,4,21,1,0,0,0,6,26,1,0,0,0,8,32,1,0,0,0,10,12,3,2,1,
0,11,10,1,0,0,0,12,13,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,15,1,0,0,0,
15,16,5,0,0,1,16,1,1,0,0,0,17,20,3,4,2,0,18,20,3,6,3,0,19,17,1,0,0,0,19,
18,1,0,0,0,20,3,1,0,0,0,21,22,5,8,0,0,22,23,5,1,0,0,23,24,3,8,4,0,24,25,
5,2,0,0,25,5,1,0,0,0,26,27,5,3,0,0,27,28,5,4,0,0,28,29,5,8,0,0,29,30,5,5,
0,0,30,31,5,2,0,0,31,7,1,0,0,0,32,33,7,0,0,0,33,9,1,0,0,0,2,13,19];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiniJavaScriptParser extends antlr4.Parser {

    static grammarFileName = "MiniJavaScript.g4";
    static literalNames = [ null, "'='", "';'", "'output'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, "TextLiteral", 
                             "Number", "Identifier", "NEWLINE", "WS" ];
    static ruleNames = [ "program", "simpleStatement", "assignmentStatement", 
                         "outputStatement", "constant" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiniJavaScriptParser.ruleNames;
        this.literalNames = MiniJavaScriptParser.literalNames;
        this.symbolicNames = MiniJavaScriptParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiniJavaScriptParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.simpleStatement();
	            this.state = 13; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3 || _la===8);
	        this.state = 15;
	        this.match(MiniJavaScriptParser.EOF);
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



	simpleStatement() {
	    let localctx = new SimpleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiniJavaScriptParser.RULE_simpleStatement);
	    try {
	        this.state = 19;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 17;
	            this.assignmentStatement();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 18;
	            this.outputStatement();
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



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiniJavaScriptParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(MiniJavaScriptParser.Identifier);
	        this.state = 22;
	        this.match(MiniJavaScriptParser.T__0);
	        this.state = 23;
	        this.constant();
	        this.state = 24;
	        this.match(MiniJavaScriptParser.T__1);
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



	outputStatement() {
	    let localctx = new OutputStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiniJavaScriptParser.RULE_outputStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(MiniJavaScriptParser.T__2);
	        this.state = 27;
	        this.match(MiniJavaScriptParser.T__3);
	        this.state = 28;
	        this.match(MiniJavaScriptParser.Identifier);
	        this.state = 29;
	        this.match(MiniJavaScriptParser.T__4);
	        this.state = 30;
	        this.match(MiniJavaScriptParser.T__1);
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



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiniJavaScriptParser.RULE_constant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===7)) {
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
	}


}

MiniJavaScriptParser.EOF = antlr4.Token.EOF;
MiniJavaScriptParser.T__0 = 1;
MiniJavaScriptParser.T__1 = 2;
MiniJavaScriptParser.T__2 = 3;
MiniJavaScriptParser.T__3 = 4;
MiniJavaScriptParser.T__4 = 5;
MiniJavaScriptParser.TextLiteral = 6;
MiniJavaScriptParser.Number = 7;
MiniJavaScriptParser.Identifier = 8;
MiniJavaScriptParser.NEWLINE = 9;
MiniJavaScriptParser.WS = 10;

MiniJavaScriptParser.RULE_program = 0;
MiniJavaScriptParser.RULE_simpleStatement = 1;
MiniJavaScriptParser.RULE_assignmentStatement = 2;
MiniJavaScriptParser.RULE_outputStatement = 3;
MiniJavaScriptParser.RULE_constant = 4;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_program;
    }

	EOF() {
	    return this.getToken(MiniJavaScriptParser.EOF, 0);
	};

	simpleStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleStatementContext);
	    } else {
	        return this.getTypedRuleContext(SimpleStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitProgram(this);
		}
	}


}



class SimpleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_simpleStatement;
    }

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	outputStatement() {
	    return this.getTypedRuleContext(OutputStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterSimpleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitSimpleStatement(this);
		}
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_assignmentStatement;
    }

	Identifier() {
	    return this.getToken(MiniJavaScriptParser.Identifier, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}


}



class OutputStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_outputStatement;
    }

	Identifier() {
	    return this.getToken(MiniJavaScriptParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterOutputStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitOutputStatement(this);
		}
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiniJavaScriptParser.RULE_constant;
    }

	Number() {
	    return this.getToken(MiniJavaScriptParser.Number, 0);
	};

	TextLiteral() {
	    return this.getToken(MiniJavaScriptParser.TextLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiniJavaScriptListener ) {
	        listener.exitConstant(this);
		}
	}


}




MiniJavaScriptParser.ProgramContext = ProgramContext; 
MiniJavaScriptParser.SimpleStatementContext = SimpleStatementContext; 
MiniJavaScriptParser.AssignmentStatementContext = AssignmentStatementContext; 
MiniJavaScriptParser.OutputStatementContext = OutputStatementContext; 
MiniJavaScriptParser.ConstantContext = ConstantContext; 
