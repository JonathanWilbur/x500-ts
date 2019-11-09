/**
 * `TBerror ::= SEQUENCE {
 *   code        ENUMERATED {
 *     caCertInvalid        (1),
 *     unknownCert          (2),
 *     unknownCertStatus    (3),
 *     subjectCertRevoked   (4),
 *     incorrectCert        (5),
 *     contractExpired      (6),
 *     pathValidationFailed (7),
 *     timeOut              (8),
 *     other                (99),
 *     ... },
 *   diagnostic  UTF8String OPTIONAL,
 *   ... }`
 */
