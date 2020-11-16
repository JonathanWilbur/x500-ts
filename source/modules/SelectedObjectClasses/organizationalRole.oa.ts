/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { description } from "../SelectedAttributeTypes/description.oa";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";
import { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa";
import { roleOccupant } from "../SelectedAttributeTypes/roleOccupant.oa";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa";
import { id_oc_organizationalRole } from "../SelectedObjectClasses/id-oc-organizationalRole.va";
import { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa";
import { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa";
import { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { description } from "../SelectedAttributeTypes/description.oa";
export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";
export { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa";
export { roleOccupant } from "../SelectedAttributeTypes/roleOccupant.oa";
export { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa";
export { id_oc_organizationalRole } from "../SelectedObjectClasses/id-oc-organizationalRole.va";
export { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa";
export { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa";
export { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa";

/* START_OF_SYMBOL_DEFINITION organizationalRole */
/**
 * @summary organizationalRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * organizationalRole OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName}
 *   MAY CONTAIN   {description |
 *                  LocaleAttributeSet |
 *                  organizationalUnitName |
 *                  PostalAttributeSet |
 *                  preferredDeliveryMethod |
 *                  roleOccupant |
 *                  seeAlso |
 *                  TelecommunicationAttributeSet}
 *   LDAP-NAME      {"organizationalRole"}  -- RFC 4519
 *   ID            id-oc-organizationalRole }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const organizationalRole: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        description,
        ...LocaleAttributeSet,
        organizationalUnitName,
        ...PostalAttributeSet,
        preferredDeliveryMethod,
        roleOccupant,
        seeAlso,
        ...TelecommunicationAttributeSet,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_organizationalRole /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION organizationalRole */

/* eslint-enable */
