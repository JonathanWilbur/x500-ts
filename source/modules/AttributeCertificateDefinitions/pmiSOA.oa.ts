/* eslint-disable */
import { attributeAuthorityRevocationList } from "../AttributeCertificateDefinitions/attributeAuthorityRevocationList.oa";
import { attributeCertificateRevocationList } from "../AttributeCertificateDefinitions/attributeCertificateRevocationList.oa";
import { attributeDescriptorCertificate } from "../AttributeCertificateDefinitions/attributeDescriptorCertificate.oa";
import { eeAttrCertificateRevocationList } from "../AttributeCertificateDefinitions/eeAttrCertificateRevocationList.oa";
import { id_oc_pmiSOA } from "../AttributeCertificateDefinitions/id-oc-pmiSOA.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { attributeAuthorityRevocationList } from "../AttributeCertificateDefinitions/attributeAuthorityRevocationList.oa";
export { attributeCertificateRevocationList } from "../AttributeCertificateDefinitions/attributeCertificateRevocationList.oa";
export { attributeDescriptorCertificate } from "../AttributeCertificateDefinitions/attributeDescriptorCertificate.oa";
export { eeAttrCertificateRevocationList } from "../AttributeCertificateDefinitions/eeAttrCertificateRevocationList.oa";
export { id_oc_pmiSOA } from "../AttributeCertificateDefinitions/id-oc-pmiSOA.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION pmiSOA */
/**
 * @summary pmiSOA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pmiSOA OBJECT-CLASS ::= { -- a PMI Source of Authority
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {attributeCertificateRevocationList |
 *                 eeAttrCertificateRevocationList |
 *                 attributeAuthorityRevocationList |
 *                 attributeDescriptorCertificate}
 *   ID           id-oc-pmiSOA }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pmiSOA: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        attributeCertificateRevocationList,
        eeAttrCertificateRevocationList,
        attributeAuthorityRevocationList,
        attributeDescriptorCertificate,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pmiSOA /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pmiSOA */

/* eslint-enable */
