/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { pwdHistory } from "../InformationFramework/pwdHistory.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { pwdHistory } from "../InformationFramework/pwdHistory.oa";

/* START_OF_SYMBOL_DEFINITION userPwdHistory */
/**
 * @summary userPwdHistory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdHistory ATTRIBUTE ::= pwdHistory{userPwd,userPwdHistoryMatch,id-oa-userPwdHistory}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const userPwdHistory: ATTRIBUTE = pwdHistory;
/* END_OF_SYMBOL_DEFINITION userPwdHistory */

/* eslint-enable */
