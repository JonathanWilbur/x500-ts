/**
 * `InvokeProblem ::= INTEGER {
 *   duplicateInvocation      (0),
 *   unrecognizedOperation    (1),
 *   mistypedArgument         (2),
 *   resourceLimitation       (3),
 *   releaseInProgress        (4)}`
 */
enum InvokeProblem {
    duplicateInvocation   = 0,
    unrecognizedOperation = 1,
    mistypedArgument      = 2,
    resourceLimitation    = 3,
    releaseInProgress     = 4,
}

export default InvokeProblem;
