/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { pwdHistoryMatch } from "../InformationFramework/pwdHistoryMatch.oa";
import { id_mr_userPwdHistoryMatch } from "../PasswordPolicy/id-mr-userPwdHistoryMatch.va";
import { userPwd } from "../PasswordPolicy/userPwd.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { pwdHistoryMatch } from "../InformationFramework/pwdHistoryMatch.oa";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_mr_userPwdHistoryMatch } from "../PasswordPolicy/id-mr-userPwdHistoryMatch.va";
export { userPwd } from "../PasswordPolicy/userPwd.oa";

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
export const userPwdHistoryMatch: MATCHING_RULE = pwdHistoryMatch(
    userPwd,
    id_mr_userPwdHistoryMatch
);
/* END_OF_SYMBOL_DEFINITION userPwdHistoryMatch */

/* eslint-enable */
