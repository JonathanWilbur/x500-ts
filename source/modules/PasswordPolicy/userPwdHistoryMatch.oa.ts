/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { pwdHistoryMatch } from "../InformationFramework/pwdHistoryMatch.oa";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { pwdHistoryMatch } from "../InformationFramework/pwdHistoryMatch.oa";

/* START_OF_SYMBOL_DEFINITION userPwdHistoryMatch */
/**
 * @summary userPwdHistoryMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdHistoryMatch MATCHING-RULE ::= pwdHistoryMatch{userPwd,id-mr-userPwdHistoryMatch}
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const userPwdHistoryMatch: MATCHING_RULE = pwdHistoryMatch;
/* END_OF_SYMBOL_DEFINITION userPwdHistoryMatch */

/* eslint-enable */
