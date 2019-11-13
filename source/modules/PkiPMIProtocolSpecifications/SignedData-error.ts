/**
 * `SignedData-error ::= ENUMERATED {
 *   noReason                           (0),
 *   signedDataContectTypeExpected      (1),
 *   wrongSignedDataVersion             (2),
 *   missingContent                     (3),
 *   missingContentComponent            (4),
 *   invalidContentComponent            (5),
 *   unsupportedHashAlgorithm           (6),
 *   ... }`
 */
enum SignedData_error {
    noReason                           = 0,
    signedDataContectTypeExpected      = 1,
    wrongSignedDataVersion             = 2,
    missingContent                     = 3,
    missingContentComponent            = 4,
    invalidContentComponent            = 5,
    unsupportedHashAlgorithm           = 6,
}

export default SignedData_error;
