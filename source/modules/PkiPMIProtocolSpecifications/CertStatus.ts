/**
 * `CertStatus ::= ENUMERATED {
 *   good    (0),
 *   revoked (1),
 *   on-hold (2),
 *   expired (3),
 *   ... }`
 */
enum CertStatus {
    good    = 0,
    revoked = 1,
    onHold  = 2,
    expired = 3,
}

export default CertStatus;
