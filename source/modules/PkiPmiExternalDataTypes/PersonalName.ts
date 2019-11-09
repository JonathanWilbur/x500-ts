/**
 * `PersonalName ::= SET {
 *   surname               [0]  PrintableString(SIZE (1..ub-surname-length)),
 *   given-name
 *     [1]  PrintableString(SIZE (1..ub-given-name-length)) OPTIONAL,
 *   initials
 *     [2]  PrintableString(SIZE (1..ub-initials-length)) OPTIONAL,
 *   generation-qualifier
 *     [3]  PrintableString(SIZE (1..ub-generation-qualifier-length)) OPTIONAL }`
 */
