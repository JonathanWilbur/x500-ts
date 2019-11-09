/**
 * `Del-Header ::= SEQUENCE {
 *   tok-id      INTEGER(769), -- shall contain 0301 (hex)
 *   context-id  Random-Integer,
 *   int-alg     [0]  AlgorithmIdentifier{{SupportedAlgorithms}} OPTIONAL,
 *   snd-seq     [1]  SeqNum OPTIONAL
 * }`
 */
