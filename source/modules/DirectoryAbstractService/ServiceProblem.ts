/**
 * `ServiceProblem ::= INTEGER {
 *   busy                         (1),
 *   unavailable                  (2),
 *   unwillingToPerform           (3),
 *   chainingRequired             (4),
 *   unableToProceed              (5),
 *   invalidReference             (6),
 *   timeLimitExceeded            (7),
 *   administrativeLimitExceeded  (8),
 *   loopDetected                 (9),
 *   unavailableCriticalExtension (10),
 *   outOfScope                   (11),
 *   ditError                     (12),
 *   invalidQueryReference        (13),
 *   requestedServiceNotAvailable (14),
 *   unsupportedMatchingUse       (15),
 *   ambiguousKeyAttributes       (16),
 *   saslBindInProgress           (17),
 *   notSupportedByLDAP           (18) }`
 */
enum ServiceProblem {
    busy                         = 1,
    unavailable                  = 2,
    unwillingToPerform           = 3,
    chainingRequired             = 4,
    unableToProceed              = 5,
    invalidReference             = 6,
    timeLimitExceeded            = 7,
    administrativeLimitExceeded  = 8,
    loopDetected                 = 9,
    unavailableCriticalExtension = 10,
    outOfScope                   = 11,
    ditError                     = 12,
    invalidQueryReference        = 13,
    requestedServiceNotAvailable = 14,
    unsupportedMatchingUse       = 15,
    ambiguousKeyAttributes       = 16,
    saslBindInProgress           = 17,
    notSupportedByLDAP           = 18,
}

export default ServiceProblem;
