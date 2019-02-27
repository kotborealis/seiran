// Generated from ./antlr/Lua.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by LuaParser.

function LuaVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

LuaVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
LuaVisitor.prototype.constructor = LuaVisitor;

// Visit a parse tree produced by LuaParser#chunk.
LuaVisitor.prototype.visitChunk = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#block.
LuaVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#statSemicolon.
LuaVisitor.prototype.visitStatSemicolon = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#statVarDeclaration.
LuaVisitor.prototype.visitStatVarDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#statAssignment.
LuaVisitor.prototype.visitStatAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#statFunction.
LuaVisitor.prototype.visitStatFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#statLocalFunction.
LuaVisitor.prototype.visitStatLocalFunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#statFunctioncall.
LuaVisitor.prototype.visitStatFunctioncall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#statBreak.
LuaVisitor.prototype.visitStatBreak = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#statWhile.
LuaVisitor.prototype.visitStatWhile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#statIf.
LuaVisitor.prototype.visitStatIf = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#statFor.
LuaVisitor.prototype.visitStatFor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#retstat.
LuaVisitor.prototype.visitRetstat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#funcname.
LuaVisitor.prototype.visitFuncname = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#namelist.
LuaVisitor.prototype.visitNamelist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#explist.
LuaVisitor.prototype.visitExplist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#expVarexp.
LuaVisitor.prototype.visitExpVarexp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#expNumber.
LuaVisitor.prototype.visitExpNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#expStrcat.
LuaVisitor.prototype.visitExpStrcat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#expTrue.
LuaVisitor.prototype.visitExpTrue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#expTableconstruct.
LuaVisitor.prototype.visitExpTableconstruct = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#expOrOp.
LuaVisitor.prototype.visitExpOrOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#expMulDivOp.
LuaVisitor.prototype.visitExpMulDivOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#expFalse.
LuaVisitor.prototype.visitExpFalse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#expString.
LuaVisitor.prototype.visitExpString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#expPow.
LuaVisitor.prototype.visitExpPow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#expAndOp.
LuaVisitor.prototype.visitExpAndOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#expUnaryOp.
LuaVisitor.prototype.visitExpUnaryOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#expFunctiondef.
LuaVisitor.prototype.visitExpFunctiondef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#expComparsionOp.
LuaVisitor.prototype.visitExpComparsionOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#expNil.
LuaVisitor.prototype.visitExpNil = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#expAddSubOp.
LuaVisitor.prototype.visitExpAddSubOp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#functioncall.
LuaVisitor.prototype.visitFunctioncall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#functiondef.
LuaVisitor.prototype.visitFunctiondef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#varexp.
LuaVisitor.prototype.visitVarexp = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#variable.
LuaVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#args.
LuaVisitor.prototype.visitArgs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#funcbody.
LuaVisitor.prototype.visitFuncbody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#parlist.
LuaVisitor.prototype.visitParlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#tableconstructor.
LuaVisitor.prototype.visitTableconstructor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#fieldlist.
LuaVisitor.prototype.visitFieldlist = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#field.
LuaVisitor.prototype.visitField = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#fieldsep.
LuaVisitor.prototype.visitFieldsep = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#operatorOr.
LuaVisitor.prototype.visitOperatorOr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#operatorAnd.
LuaVisitor.prototype.visitOperatorAnd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#operatorComparison.
LuaVisitor.prototype.visitOperatorComparison = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#operatorStrcat.
LuaVisitor.prototype.visitOperatorStrcat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#operatorAddSub.
LuaVisitor.prototype.visitOperatorAddSub = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#operatorMulDivMod.
LuaVisitor.prototype.visitOperatorMulDivMod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#operatorUnary.
LuaVisitor.prototype.visitOperatorUnary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#operatorPower.
LuaVisitor.prototype.visitOperatorPower = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#number.
LuaVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LuaParser#string.
LuaVisitor.prototype.visitString = function(ctx) {
  return this.visitChildren(ctx);
};



exports.LuaVisitor = LuaVisitor;