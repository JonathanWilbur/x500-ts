/**
 * `ReturnErrorProblem ::= INTEGER {
 *   unrecognizedInvocation   (0),
 *   errorResponseUnexpected  (1),
 *   unrecognizedError        (2),
 *   unexpectedError          (3),
 *   mistypedParameter        (4)}`
 */
enum ReturnErrorProblem {
    unrecognizedInvocation   = 0,
    errorResponseUnexpected  = 1,
    unrecognizedError        = 2,
    unexpectedError          = 3,
    mistypedParameter        = 4,
}

export default ReturnErrorProblem;
