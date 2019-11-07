/**
 * `OsiErr{OPERATION:Operations} ::= [3] IMPLICIT SEQUENCE {
 *   invokeID  InvokeId,
 *   errcode   OPERATION.&Errors.&errorCode({Operations}),
 *   error     OPERATION.&Errors.&ParameterType({Operations}{@.errcode}) }`
 */
