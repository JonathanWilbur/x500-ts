/**
 * `Rep-ti-contents ::= SEQUENCE {
 *   tok-id        INTEGER(512), -- shall contain 0200 (hex)
 *   context-id    Random-Integer,
 *   pvno          [0]  BIT STRING OPTIONAL,
 *   timestamp     UTCTime OPTIONAL, -- mandatory for SPKM-2
 *   randTarg      Random-Integer,
 *   src-name      [1]  Name OPTIONAL,
 *   targ-name     Name,
 *   randSrc       Random-Integer,
 *   rep-data      Context-Data,
 *   validity      [2]  Validity OPTIONAL,
 *   key-estb-id   AlgorithmIdentifier{{SupportedAlgorithms}} OPTIONAL,
 *   key-estb-str  BIT STRING OPTIONAL
 * }`
 */
