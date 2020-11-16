/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { id_oc_urnCobj } from "../SelectedObjectClasses/id-oc-urnCobj.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_urnCobj } from "../SelectedObjectClasses/id-oc-urnCobj.va";

/* START_OF_SYMBOL_DEFINITION urnCobj */
/**
 * @summary urnCobj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * urnCobj OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  { urnC }
 *   LDAP-NAME     {"urnCobj"}
 *   ID            id-oc-urnCobj }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const urnCobj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_oc_urnCobj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION urnCobj */

/* eslint-enable */
