/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { pwdRecentlyExpired } from "../InformationFramework/pwdRecentlyExpired.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { pwdRecentlyExpired } from "../InformationFramework/pwdRecentlyExpired.oa";

/* START_OF_SYMBOL_DEFINITION userPwdRecentlyExpired */
/**
 * @summary userPwdRecentlyExpired
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdRecentlyExpired ATTRIBUTE ::= pwdRecentlyExpired{userPwd,id-oa-userPwdRecentlyExpired}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const userPwdRecentlyExpired: ATTRIBUTE = pwdRecentlyExpired;
/* END_OF_SYMBOL_DEFINITION userPwdRecentlyExpired */

/* eslint-enable */
