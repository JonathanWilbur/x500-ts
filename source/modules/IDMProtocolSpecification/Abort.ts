/**
 * `Abort ::= ENUMERATED {
 *   mistypedPDU         (0),
 *   unboundRequest      (1),
 *   invalidPDU          (2),
 *   resourceLimitation  (3),
 *   connectionFailed    (4),
 *   invalidProtocol     (5),
 *   reasonNotSpecified  (6),
 *   ...}`
 */
enum Abort {
    mistypedPDU         = 0,
    unboundRequest      = 1,
    invalidPDU          = 2,
    resourceLimitation  = 3,
    connectionFailed    = 4,
    invalidProtocol     = 5,
    reasonNotSpecified  = 6,
}

export default Abort;
