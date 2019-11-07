/**
 * `OsiRes{OPERATION:Operations} ::= [2] IMPLICIT SEQUENCE {
 *   invokeId  InvokeId,
 *   result    SEQUENCE {
 *     opcode    OPERATION.&operationCode({Operations}),
 *     result    OPERATION.&ResultType({Operations}{@.opcode}) }}`
 */
