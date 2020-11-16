/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";
import { title } from "../SelectedAttributeTypes/title.oa";
import { id_oc_organizationalPerson } from "../SelectedObjectClasses/id-oc-organizationalPerson.va";
import { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa";
import { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa";
import { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";
export { title } from "../SelectedAttributeTypes/title.oa";
export { id_oc_organizationalPerson } from "../SelectedObjectClasses/id-oc-organizationalPerson.va";
export { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa";
export { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa";
export { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa";

/* START_OF_SYMBOL_DEFINITION organizationalPerson */
/**
 * @summary organizationalPerson
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * organizationalPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF  {person}
 *   MAY CONTAIN  {LocaleAttributeSet |
 *                 PostalAttributeSet |
 *                 TelecommunicationAttributeSet |
 *                 organizationalUnitName |
 *                 title}
 *   LDAP-NAME    {"organizationalPerson"}  -- RFC 4519
 *   ID           id-oc-organizationalPerson }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const organizationalPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&OptionalAttributes": [
        ...LocaleAttributeSet,
        ...PostalAttributeSet,
        ...TelecommunicationAttributeSet,
        organizationalUnitName,
        title,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_organizationalPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION organizationalPerson */

/* eslint-enable */
