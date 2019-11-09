/**
 * `Mic-Header ::= SEQUENCE {
 *   tok-id      INTEGER(257), -- shall contain 0101 (hex)
 *   context-id  Random-Integer,
 *   int-alg     [0]  AlgorithmIdentifier{{SupportedAlgorithms}} OPTIONAL,
 *   snd-seq     [1]  SeqNum OPTIONAL
 * }`
 */
