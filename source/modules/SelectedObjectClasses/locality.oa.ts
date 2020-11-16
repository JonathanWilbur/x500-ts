/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { description } from "../SelectedAttributeTypes/description.oa";
import { searchGuide } from "../SelectedAttributeTypes/searchGuide.oa";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa";
import { id_oc_locality } from "../SelectedObjectClasses/id-oc-locality.va";
import { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { description } from "../SelectedAttributeTypes/description.oa";
export { searchGuide } from "../SelectedAttributeTypes/searchGuide.oa";
export { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa";
export { id_oc_locality } from "../SelectedObjectClasses/id-oc-locality.va";
export { LocaleAttributeSet } from "../SelectedObjectClasses/LocaleAttributeSet.osa";

/* START_OF_SYMBOL_DEFINITION locality */
/**
 * @summary locality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * locality OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   MAY CONTAIN  {description |
 *                 searchGuide |
 *                 LocaleAttributeSet |
 *                 seeAlso}
 *   LDAP-NAME    {"locality"}  -- RFC 4519
 *   ID           id-oc-locality }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const locality: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&OptionalAttributes": [
        description,
        searchGuide,
        ...LocaleAttributeSet,
        seeAlso,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_locality /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION locality */

/* eslint-enable */
