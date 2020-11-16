/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { commonName } from "../SelectedAttributeTypes/commonName.oa";
import { description } from "../SelectedAttributeTypes/description.oa";
import { localityName } from "../SelectedAttributeTypes/localityName.oa";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa";
import { presentationAddress } from "../SelectedAttributeTypes/presentationAddress.oa";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa";
import { supportedApplicationContext } from "../SelectedAttributeTypes/supportedApplicationContext.oa";
import { id_oc_applicationEntity } from "../SelectedObjectClasses/id-oc-applicationEntity.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { commonName } from "../SelectedAttributeTypes/commonName.oa";
export { description } from "../SelectedAttributeTypes/description.oa";
export { localityName } from "../SelectedAttributeTypes/localityName.oa";
export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";
export { organizationName } from "../SelectedAttributeTypes/organizationName.oa";
export { presentationAddress } from "../SelectedAttributeTypes/presentationAddress.oa";
export { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa";
export { supportedApplicationContext } from "../SelectedAttributeTypes/supportedApplicationContext.oa";
export { id_oc_applicationEntity } from "../SelectedObjectClasses/id-oc-applicationEntity.va";

/* START_OF_SYMBOL_DEFINITION applicationEntity */
/**
 * @summary applicationEntity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * applicationEntity OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName |
 *                  presentationAddress}
 *   MAY CONTAIN   {description |
 *                  localityName |
 *                  organizationName |
 *                  organizationalUnitName |
 *                  seeAlso |
 *                  supportedApplicationContext}
 *   LDAP-NAME     {"applicationEntity"} -- RFC 2256
 *   ID            id-oc-applicationEntity }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const applicationEntity: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": [
        commonName,
        presentationAddress,
    ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        description,
        localityName,
        organizationName,
        organizationalUnitName,
        seeAlso,
        supportedApplicationContext,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_applicationEntity /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION applicationEntity */

/* eslint-enable */
