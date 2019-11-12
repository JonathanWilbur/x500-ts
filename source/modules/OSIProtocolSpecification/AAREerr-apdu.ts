import AARE_apdu from "./AARE-apdu";

/**
 * This only differs from `AARE-apdu` by the `result` code.
 *
 * `AAREerr-apdu{APPLICATION-CONTEXT:Protocols} ::=  [APPLICATION 1] IMPLICIT SEQUENCE {
 *   protocol-version                    [0]  IMPLICIT BIT STRING {version1(0)} DEFAULT {version1},
 *   application-context-name            [1]  Application-context-name,
 *   result                              [2]  Associate-result (rejected-permanent..rejected-transient),
 *   result-source-diagnostic            [3]  Associate-source-diagnostic,
 *   responding-AP-title                 [4]  Name OPTIONAL,
 *   responding-AE-qualifier             [5]  RelativeDistinguishedName OPTIONAL,
 *   responding-AP-invocation-identifier [6]  AP-invocation-identifier  OPTIONAL,
 *   responding-AE-invocation-identifier [7]  AE-invocation-identifier  OPTIONAL,
 *   implementation-information          [29] IMPLICIT Implementation-data OPTIONAL,
 *   user-information                    [30] IMPLICIT Association-informationBindErr{{Protocols}} OPTIONAL }`
 */
type AAREerr_apdu = AARE_apdu;
export default AAREerr_apdu;
