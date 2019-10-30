/**
 * `LimitProblem ::= INTEGER {
 *   timeLimitExceeded           (0),
 *   sizeLimitExceeded           (1),
 *   administrativeLimitExceeded (2) }`
 */
enum LimitProblem {
    timeLimitExceeded = 0,
    sizeLimitExceeded = 1,
    administrativeLimitExceeded = 2,
}

export default LimitProblem;
