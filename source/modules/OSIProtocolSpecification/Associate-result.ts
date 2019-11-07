/**
 * `Associate-result ::= INTEGER {
 *   accepted           (0),
 *   rejected-permanent (1),
 *   rejected-transient (2)}(0..2, ...)`
 */
enum Associate_result {
    accepted           = 0,
    rejected_permanent = 1,
    rejected_transient = 2,
}

export default Associate_result;
