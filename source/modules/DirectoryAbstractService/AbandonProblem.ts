/**
 * `AbandonProblem ::= INTEGER {
 *   noSuchOperation (1),
 *   tooLate         (2),
 *   cannotAbandon   (3) }`
 */
enum AbandonProblem {
    noSuchOperation = 1,
    tooLate = 2,
    cannotAbandon = 3,
}

export default AbandonProblem;
