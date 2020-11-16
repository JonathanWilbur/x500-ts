/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { id_oc_oidCobj } from "../SelectedObjectClasses/id-oc-oidCobj.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_oidCobj } from "../SelectedObjectClasses/id-oc-oidCobj.va";

/* START_OF_SYMBOL_DEFINITION oidCobj */
/**
 * @summary oidCobj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidCobj OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {oidC}
 *   LDAP-NAME     {"oidCobj"}
 *   ID            id-oc-oidCobj }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const oidCobj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_oc_oidCobj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION oidCobj */

/* eslint-enable */
