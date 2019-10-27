/**
 * `CRLReason ::= ENUMERATED {
 *   unspecified(0),
 *   keyCompromise(1),
 *   cACompromise(2),
 *   affiliationChanged(3),
 *   superseded(4),
 *   cessationOfOperation(5),
 *   certificateHold(6),
 *   removeFromCRL(8),
 *   privilegeWithdrawn(9),
 *   aACompromise(10),
 *   ...,
 *   weakAlgorithmOrKey(11) }`
 */
enum CRLReason {
    unspecified = 0,
    keyCompromise = 1,
    cACompromise = 2,
    affiliationChanged = 3,
    superseded = 4,
    cessationOfOperation = 5,
    certificateHold = 6,
    // Yes, 7 is missing.
    removeFromCRL = 8,
    privilegeWithdrawn = 9,
    aACompromise = 10,
    weakAlgorithmOrKey = 11,
}

export default CRLReason;
