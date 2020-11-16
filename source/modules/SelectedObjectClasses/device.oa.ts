/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { description } from "../SelectedAttributeTypes/description.oa";
import { localityName } from "../SelectedAttributeTypes/localityName.oa";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa";
import { owner } from "../SelectedAttributeTypes/owner.oa";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa";
import { serialNumber } from "../SelectedAttributeTypes/serialNumber.oa";
import { id_oc_device } from "../SelectedObjectClasses/id-oc-device.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { description } from "../SelectedAttributeTypes/description.oa";
export { localityName } from "../SelectedAttributeTypes/localityName.oa";
export { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa";
export { organizationName } from "../SelectedAttributeTypes/organizationName.oa";
export { owner } from "../SelectedAttributeTypes/owner.oa";
export { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa";
export { serialNumber } from "../SelectedAttributeTypes/serialNumber.oa";
export { id_oc_device } from "../SelectedObjectClasses/id-oc-device.va";

/* START_OF_SYMBOL_DEFINITION device */
/**
 * @summary device
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * device OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {commonName}
 *   MAY CONTAIN   {description |
 *                  localityName |
 *                  organizationName |
 *                  organizationalUnitName |
 *                  owner |
 *                  seeAlso |
 *                  serialNumber}
 *   LDAP-NAME      {"device"}  -- RFC 4519
 *   ID            id-oc-device }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const device: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        description,
        localityName,
        organizationName,
        organizationalUnitName,
        owner,
        seeAlso,
        serialNumber,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_oc_device /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION device */

/* eslint-enable */
