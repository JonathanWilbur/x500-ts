/**
 * `Wrap-Header ::= SEQUENCE {
 *   tok-id      INTEGER(513), -- shall contain 0201 (hex)
 *   context-id  Random-Integer,
 *   int-alg     [0]  AlgorithmIdentifier{{SupportedAlgorithms}} OPTIONAL,
 *   conf-alg    [1]  Conf-Alg OPTIONAL,
 *   snd-seq     [2]  SeqNum OPTIONAL
 * }`
 */
