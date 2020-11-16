/* eslint-disable */
import { id_sc_pwdAdminSubentry } from "../InformationFramework/id-sc-pwdAdminSubentry.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_sc_pwdAdminSubentry } from "../InformationFramework/id-sc-pwdAdminSubentry.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION pwdAdminSubentry */
/**
 * @summary pwdAdminSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdAdminSubentry OBJECT-CLASS ::= {
 *   KIND           auxiliary
 *   MUST CONTAIN   { pwdAttribute }
 *   LDAP-NAME      {"pwdAdminSubentry"}
 *   ID             id-sc-pwdAdminSubentry }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pwdAdminSubentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_sc_pwdAdminSubentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdAdminSubentry */

/* eslint-enable */
