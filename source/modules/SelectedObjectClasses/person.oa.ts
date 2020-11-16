/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { commonName } from "../SelectedAttributeTypes/commonName.oa";
import { description } from "../SelectedAttributeTypes/description.oa";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa";
import { surname } from "../SelectedAttributeTypes/surname.oa";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa";
import { id_oc_person } from "../SelectedObjectClasses/id-oc-person.va";
export { userPassword } from "../AuthenticationFramework/userPassword.oa";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { commonName } from "../SelectedAttributeTypes/commonName.oa";
export { description } from "../SelectedAttributeTypes/description.oa";
export { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa";
export { surname } from "../SelectedAttributeTypes/surname.oa";
export { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa";
export { id_oc_person } from "../SelectedObjectClasses/id-oc-person.va";

/* START_OF_SYMBOL_DEFINITION person */
/**
 * @summary person
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * person OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName |
 *                  surname}
 *   MAY CONTAIN   {description |
 *                  telephoneNumber |
 *                  userPassword |
 *                  seeAlso}
 *   LDAP-NAME     {"person"}  -- RFC 4519
 *   ID            id-oc-person }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const person: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": [commonName, surname] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        description,
        telephoneNumber,
        userPassword,
        seeAlso,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_person /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION person */

/* eslint-enable */
