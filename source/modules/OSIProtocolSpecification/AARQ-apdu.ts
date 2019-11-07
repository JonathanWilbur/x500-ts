/**
 * `AARQ-apdu{APPLICATION-CONTEXT:Protocols} ::= [APPLICATION 0] IMPLICIT SEQUENCE {
 *   protocol-version                  [0] IMPLICIT BIT STRING {version1(0)}
 *                                              DEFAULT {version1},
 *   application-context-name          [1]  Application-context-name,
 *   called-AP-title                   [2]  Name OPTIONAL,
 *   called-AE-qualifier               [3]  RelativeDistinguishedName    OPTIONAL,
 *   called-AP-invocation-identifier   [4]  AP-invocation-identifier     OPTIONAL,
 *   called-AE-invocation-identifier   [5]  AE-invocation-identifier     OPTIONAL,
 *   calling-AP-title                  [6]  Name                         OPTIONAL,
 *   calling-AE-qualifier              [7]  RelativeDistinguishedName    OPTIONAL,
 *   calling-AP-invocation-identifier  [8]  AP-invocation-identifier     OPTIONAL,
 *   calling-AE-invocation-identifier  [9]  AE-invocation-identifier     OPTIONAL,
 *   implementation-information        [29] IMPLICIT Implementation-data OPTIONAL,
 *   user-information                  [30] IMPLICIT
 *                                            Association-informationBind{{Protocols}}}`
 */
