/**
 * `G3FacsimileNonBasicParameters ::= BIT STRING {
 *   two-dimensional(8), -- As defined in ITU-T Recommendation T.30
 *   fine-resolution(9),
 *   unlimited-length(20), -- These bit values are chosen such that when
 *   b4-length(21), -- encoded using ASN.1 Basic Encoding Rules
 *   a3-width(22), -- the resulting octets have the same values
 *   b4-width(23), -- as for T.30 encoding
 *   t6-coding(25),
 *   uncompressed(30), -- Trailing zero bits are not significant
 *   width-middle-864-of-1728(37), -- It is recommended that implementations
 *   width-middle-1216-of-1728(38), -- should not encode more than 32 bits unless
 *   resolution-type(44), -- higher numbered bits are non-zero
 *   resolution-400x400(45), resolution-300x300(46), resolution-8x15(47),
 *   edi(49), dtm(50), bft(51), mixed-mode(58), character-mode(60),
 *   twelve-bits(65), preferred-huffmann(66), full-colour(67), jpeg(68),
 *   processable-mode-26(71)}`
 */
type G3FacsimileNonBasicParameters = boolean[];
export default G3FacsimileNonBasicParameters;
