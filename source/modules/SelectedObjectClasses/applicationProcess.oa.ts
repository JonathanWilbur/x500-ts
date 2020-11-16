/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { description } from "../SelectedAttributeTypes/description.oa";
import { localityName } from "../SelectedAttributeTypes/localityName.oa";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa";
import { id_oc_applicationProcess } from "../SelectedObjectClasses/id-oc-applicationProcess.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { description } from "../SelectedAttributeTypes/description.oa";
export { localityName } from "../SelectedAttributeTypes/localityName.oa";
export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";
export { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa";
export { id_oc_applicationProcess } from "../SelectedObjectClasses/id-oc-applicationProcess.va";

/* START_OF_SYMBOL_DEFINITION applicationProcess */
/**
 * @summary applicationProcess
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applicationProcess OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName}
 *   MAY CONTAIN   {description |
 *                  localityName |
 *                  organizationalUnitName |
 *                  seeAlso}
 *   LDAP-NAME     {"applicationProcess"}   -- RFC 4519
 *   ID            id-oc-applicationProcess }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const applicationProcess: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        description,
        localityName,
        organizationalUnitName,
        seeAlso,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_applicationProcess /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION applicationProcess */

/* eslint-enable */
