/**
 * `ReturnResultProblem ::= INTEGER {
 *   unrecognizedInvocation   (0),
 *   resultResponseUnexpected (1),
 *   mistypedResult           (2)}`
 */
enum ReturnResultProblem {
    unrecognizedInvocation   = 0,
    resultResponseUnexpected = 1,
    mistypedResult           = 2,
}

export default ReturnResultProblem;
