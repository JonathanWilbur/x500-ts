/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { id_oc_dmd } from "../SelectedObjectClasses/id-oc-dmd.va";
import { OrganizationalAttributeSet } from "../SelectedObjectClasses/OrganizationalAttributeSet.osa";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_dmd } from "../SelectedObjectClasses/id-oc-dmd.va";
export { OrganizationalAttributeSet } from "../SelectedObjectClasses/OrganizationalAttributeSet.osa";

/* START_OF_SYMBOL_DEFINITION dMD */
/**
 * @summary dMD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dMD OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {dmdName}
 *   MAY CONTAIN   {OrganizationalAttributeSet}
 *   LDAP-NAME     {"dmd"} -- RFC 2256
 *   ID            id-oc-dmd }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const dMD: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        ...OrganizationalAttributeSet,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_dmd /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dMD */

/* eslint-enable */
