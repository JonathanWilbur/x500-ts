/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { id_oc_organizationalUnit } from "../SelectedObjectClasses/id-oc-organizationalUnit.va";
import { OrganizationalAttributeSet } from "../SelectedObjectClasses/OrganizationalAttributeSet.osa";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_organizationalUnit } from "../SelectedObjectClasses/id-oc-organizationalUnit.va";
export { OrganizationalAttributeSet } from "../SelectedObjectClasses/OrganizationalAttributeSet.osa";

/* START_OF_SYMBOL_DEFINITION organizationalUnit */
/**
 * @summary organizationalUnit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * organizationalUnit OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {organizationalUnitName}
 *   MAY CONTAIN   {OrganizationalAttributeSet}
 *   LDAP-NAME     {"organizationalUnit"}  -- RFC 4519
 *   ID            id-oc-organizationalUnit }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const organizationalUnit: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        ...OrganizationalAttributeSet,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_organizationalUnit /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION organizationalUnit */

/* eslint-enable */
