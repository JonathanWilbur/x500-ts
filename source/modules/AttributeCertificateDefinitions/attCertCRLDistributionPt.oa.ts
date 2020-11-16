/* eslint-disable */
import { attributeAuthorityRevocationList } from "../AttributeCertificateDefinitions/attributeAuthorityRevocationList.oa";
import { attributeCertificateRevocationList } from "../AttributeCertificateDefinitions/attributeCertificateRevocationList.oa";
import { eeAttrCertificateRevocationList } from "../AttributeCertificateDefinitions/eeAttrCertificateRevocationList.oa";
import { id_oc_attCertCRLDistributionPts } from "../AttributeCertificateDefinitions/id-oc-attCertCRLDistributionPts.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { attributeAuthorityRevocationList } from "../AttributeCertificateDefinitions/attributeAuthorityRevocationList.oa";
export { attributeCertificateRevocationList } from "../AttributeCertificateDefinitions/attributeCertificateRevocationList.oa";
export { eeAttrCertificateRevocationList } from "../AttributeCertificateDefinitions/eeAttrCertificateRevocationList.oa";
export { id_oc_attCertCRLDistributionPts } from "../AttributeCertificateDefinitions/id-oc-attCertCRLDistributionPts.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION attCertCRLDistributionPt */
/**
 * @summary attCertCRLDistributionPt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attCertCRLDistributionPt OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {attributeCertificateRevocationList |
 *                 eeAttrCertificateRevocationList |
 *                 attributeAuthorityRevocationList}
 *   ID           id-oc-attCertCRLDistributionPts }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const attCertCRLDistributionPt: OBJECT_CLASS = {
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
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_attCertCRLDistributionPts /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attCertCRLDistributionPt */

/* eslint-enable */
