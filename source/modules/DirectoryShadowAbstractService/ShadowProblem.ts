/**
 * `ShadowProblem ::= INTEGER {
 *   invalidAgreementID         (1),
 *   inactiveAgreement          (2),
 *   invalidInformationReceived (3),
 *   unsupportedStrategy        (4),
 *   missedPrevious             (5),
 *   fullUpdateRequired         (6),
 *   unwillingToPerform         (7),
 *   unsuitableTiming           (8),
 *   updateAlreadyReceived      (9),
 *   invalidSequencing          (10),
 *   insufficientResources      (11) }`
 */
enum ShadowProblem {
    invalidAgreementID         = 1,
    inactiveAgreement          = 2,
    invalidInformationReceived = 3,
    unsupportedStrategy        = 4,
    missedPrevious             = 5,
    fullUpdateRequired         = 6,
    unwillingToPerform         = 7,
    unsuitableTiming           = 8,
    updateAlreadyReceived      = 9,
    invalidSequencing          = 10,
    insufficientResources      = 11,
}

export default ShadowProblem;
