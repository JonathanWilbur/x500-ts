/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { id_oc_organization } from "../SelectedObjectClasses/id-oc-organization.va";
import { OrganizationalAttributeSet } from "../SelectedObjectClasses/OrganizationalAttributeSet.osa";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_organization } from "../SelectedObjectClasses/id-oc-organization.va";
export { OrganizationalAttributeSet } from "../SelectedObjectClasses/OrganizationalAttributeSet.osa";

/* START_OF_SYMBOL_DEFINITION organization */
/**
 * @summary organization
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * organization OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {organizationName}
 *   MAY CONTAIN   {OrganizationalAttributeSet}
 *   LDAP-NAME     {"organization"}  -- RFC 4519
 *   ID            id-oc-organization }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const organization: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        ...OrganizationalAttributeSet,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_organization /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION organization */

/* eslint-enable */
