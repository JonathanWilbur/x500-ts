/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { id_oc_oidC1obj } from "../SelectedObjectClasses/id-oc-oidC1obj.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_oidC1obj } from "../SelectedObjectClasses/id-oc-oidC1obj.va";

/* START_OF_SYMBOL_DEFINITION oidC1obj */
/**
 * @summary oidC1obj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oidC1obj OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {oidC}
 *   LDAP-NAME     {"oidC1obj"}
 *   ID            id-oc-oidC1obj }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const oidC1obj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_oc_oidC1obj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION oidC1obj */

/* eslint-enable */
