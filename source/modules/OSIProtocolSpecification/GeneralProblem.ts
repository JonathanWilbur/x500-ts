/**
 * `GeneralProblem ::= INTEGER {
 *   unrecognizedPDU          (0),
 *   mistypedPDU              (1),
 *   badlyStructuredPDU       (2) }`
 */
enum GeneralProblem {
    unrecognizedPDU          = 0,
    mistypedPDU              = 1,
    badlyStructuredPDU       = 2,
}

export default GeneralProblem;
