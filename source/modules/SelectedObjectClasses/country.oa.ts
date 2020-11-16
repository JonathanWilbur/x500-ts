/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { description } from "../SelectedAttributeTypes/description.oa";
import { searchGuide } from "../SelectedAttributeTypes/searchGuide.oa";
import { id_oc_country } from "../SelectedObjectClasses/id-oc-country.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { description } from "../SelectedAttributeTypes/description.oa";
export { searchGuide } from "../SelectedAttributeTypes/searchGuide.oa";
export { id_oc_country } from "../SelectedObjectClasses/id-oc-country.va";

/* START_OF_SYMBOL_DEFINITION country */
/**
 * @summary country
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * country OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {countryName}
 *   MAY CONTAIN   {description |
 *                  searchGuide}
 *   LDAP-NAME     {"country"}  -- RFC 4519
 *   ID            id-oc-country }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const country: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        description,
        searchGuide,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_country /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION country */

/* eslint-enable */
