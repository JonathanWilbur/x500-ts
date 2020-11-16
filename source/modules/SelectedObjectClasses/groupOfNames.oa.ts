/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa";
import { commonName } from "../SelectedAttributeTypes/commonName.oa";
import { description } from "../SelectedAttributeTypes/description.oa";
import { member } from "../SelectedAttributeTypes/member.oa";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa";
import { owner } from "../SelectedAttributeTypes/owner.oa";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa";
import { id_oc_groupOfNames } from "../SelectedObjectClasses/id-oc-groupOfNames.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa";
export { commonName } from "../SelectedAttributeTypes/commonName.oa";
export { description } from "../SelectedAttributeTypes/description.oa";
export { member } from "../SelectedAttributeTypes/member.oa";
export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";
export { organizationName } from "../SelectedAttributeTypes/organizationName.oa";
export { owner } from "../SelectedAttributeTypes/owner.oa";
export { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa";
export { id_oc_groupOfNames } from "../SelectedObjectClasses/id-oc-groupOfNames.va";

/* START_OF_SYMBOL_DEFINITION groupOfNames */
/**
 * @summary groupOfNames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * groupOfNames OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName | member}
 *   MAY CONTAIN   {description |
 *                  organizationName |
 *                  organizationalUnitName |
 *                  owner |
 *                  seeAlso |
 *                  businessCategory}
 *   LDAP-NAME     {"groupOfNames"}  -- RFC 4519
 *   ID            id-oc-groupOfNames }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const groupOfNames: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": [commonName, member] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        description,
        organizationName,
        organizationalUnitName,
        owner,
        seeAlso,
        businessCategory,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_groupOfNames /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION groupOfNames */

/* eslint-enable */
