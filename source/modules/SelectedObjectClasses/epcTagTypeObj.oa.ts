/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { id_oc_epcTagTypeObj } from "../SelectedObjectClasses/id-oc-epcTagTypeObj.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_epcTagTypeObj } from "../SelectedObjectClasses/id-oc-epcTagTypeObj.va";

/* START_OF_SYMBOL_DEFINITION epcTagTypeObj */
/**
 * @summary epcTagTypeObj
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * epcTagTypeObj OBJECT-CLASS ::= {
 *   SUBCLASS OF  { top }
 *   KIND         auxiliary
 *   MAY CONTAIN  { uiiFormat }
 *   LDAP-NAME    {"epcTagTypeObj"}
 *   ID           id-oc-epcTagTypeObj }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const epcTagTypeObj: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&ldapName": undefined,
    "&id": id_oc_epcTagTypeObj /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION epcTagTypeObj */

/* eslint-enable */
