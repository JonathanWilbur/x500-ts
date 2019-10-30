/**
 * `SecurityProblem ::= INTEGER {
 *   inappropriateAuthentication     (1),
 *   invalidCredentials              (2),
 *   insufficientAccessRights        (3),
 *   invalidSignature                (4),
 *   protectionRequired              (5),
 *   noInformation                   (6),
 *   blockedCredentials              (7),
 *   -- invalidQOPMatch              (8), obsolete
 *   spkmError                       (9),
 *   unsupportedAuthenticationMethod (10),
 *   passwordExpired                 (11),
 *   inappropriateAlgorithms         (12) }`
 */
enum SecurityProblem {
    inappropriateAuthentication     = 1,
    invalidCredentials              = 2,
    insufficientAccessRights        = 3,
    invalidSignature                = 4,
    protectionRequired              = 5,
    noInformation                   = 6,
    blockedCredentials              = 7,
    // invalidQOPMatch              = 8, obsolete
    spkmError                       = 9,
    unsupportedAuthenticationMethod = 10,
    passwordExpired                 = 11,
    inappropriateAlgorithms         = 12,
}

export default SecurityProblem;
