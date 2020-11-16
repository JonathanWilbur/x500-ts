/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa";
import { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa";
import { id_oc_residentialPerson } from "../SelectedObjectClasses/id-oc-residentialPerson.va";
import { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa";
import { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa";
import { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa";
export { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa";
export { id_oc_residentialPerson } from "../SelectedObjectClasses/id-oc-residentialPerson.va";
export { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa";
export { PostalAttributeSet } from "../SelectedObjectClasses/PostalAttributeSet.osa";
export { TelecommunicationAttributeSet } from "../SelectedObjectClasses/TelecommunicationAttributeSet.osa";

/* START_OF_SYMBOL_DEFINITION residentialPerson */
/**
 * @summary residentialPerson
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * residentialPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF   {person}
 *   MUST CONTAIN  {localityName}
 *   MAY CONTAIN   {LocaleAttributeSet |
 *                  PostalAttributeSet |
 *                  preferredDeliveryMethod |
 *                  TelecommunicationAttributeSet |
 *                  businessCategory}
 *   LDAP-NAME     {"residentialPerson"}  -- RFC 4519
 *   ID            id-oc-residentialPerson }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const residentialPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        ...LocaleAttributeSet,
        ...PostalAttributeSet,
        preferredDeliveryMethod,
        ...TelecommunicationAttributeSet,
        businessCategory,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_residentialPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION residentialPerson */

/* eslint-enable */
