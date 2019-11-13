/**
 * `CASP-error ::= ENUMERATED {
 *   noReason                      (0),
 *   unknownContentType            (1),
 *   unsupportedWLMPversion        (2),
 *   missingContent                (3),
 *   missingContentComponent       (4),
 *   invalidContentComponent       (5),
 *   sequenceError                 (6),
 *   unknownSubject                (7),
 *   unknownCert                   (8),
 *   ... }`
 */
enum CASP_error {
    noReason                      = 0,
    unknownContentType            = 1,
    unsupportedWLMPversion        = 2,
    missingContent                = 3,
    missingContentComponent       = 4,
    invalidContentComponent       = 5,
    sequenceError                 = 6,
    unknownSubject                = 7,
    unknownCert                   = 8,
}

export default CASP_error;
