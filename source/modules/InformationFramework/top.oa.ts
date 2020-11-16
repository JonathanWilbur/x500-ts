/* eslint-disable */
import { id_oc_top } from "../InformationFramework/id-oc-top.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_top } from "../InformationFramework/id-oc-top.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION top */
/**
 * @summary top
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * top OBJECT-CLASS ::= {
 *   KIND          abstract
 *   MUST CONTAIN  {objectClass}
 *   LDAP-NAME     {"top"}
 *   ID            id-oc-top }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const top: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": ObjectClassKind_abstract /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_oc_top /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION top */

/* eslint-enable */
