/* eslint-disable */
import { id_oc_alias } from "../InformationFramework/id-oc-alias.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_alias } from "../InformationFramework/id-oc-alias.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION alias */
/**
 * @summary alias
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * alias OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {aliasedEntryName}
 *   LDAP-NAME     {"alias"}
 *   ID            id-oc-alias }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const alias: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_oc_alias /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION alias */

/* eslint-enable */
