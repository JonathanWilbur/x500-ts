/**
 * `TeletexPersonalName ::= SET {
 *   surname               [0]  TeletexString(SIZE (1..ub-surname-length)),
 *   given-name
 *     [1]  TeletexString(SIZE (1..ub-given-name-length)) OPTIONAL,
 *   initials
 *     [2]  TeletexString(SIZE (1..ub-initials-length)) OPTIONAL,
 *   generation-qualifier
 *     [3]  TeletexString(SIZE (1..ub-generation-qualifier-length)) OPTIONAL }`
 */
