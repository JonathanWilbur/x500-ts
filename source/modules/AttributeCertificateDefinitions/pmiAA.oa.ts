/* eslint-disable */
import { aACertificate } from "../AttributeCertificateDefinitions/aACertificate.oa";
import { attributeAuthorityRevocationList } from "../AttributeCertificateDefinitions/attributeAuthorityRevocationList.oa";
import { attributeCertificateRevocationList } from "../AttributeCertificateDefinitions/attributeCertificateRevocationList.oa";
import { eeAttrCertificateRevocationList } from "../AttributeCertificateDefinitions/eeAttrCertificateRevocationList.oa";
import { id_oc_pmiAA } from "../AttributeCertificateDefinitions/id-oc-pmiAA.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { aACertificate } from "../AttributeCertificateDefinitions/aACertificate.oa";
export { attributeAuthorityRevocationList } from "../AttributeCertificateDefinitions/attributeAuthorityRevocationList.oa";
export { attributeCertificateRevocationList } from "../AttributeCertificateDefinitions/attributeCertificateRevocationList.oa";
export { eeAttrCertificateRevocationList } from "../AttributeCertificateDefinitions/eeAttrCertificateRevocationList.oa";
export { id_oc_pmiAA } from "../AttributeCertificateDefinitions/id-oc-pmiAA.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION pmiAA */
/**
 * @summary pmiAA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pmiAA OBJECT-CLASS ::= { -- a PMI AA
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {aACertificate |
 *                 attributeCertificateRevocationList |
 *                 eeAttrCertificateRevocationList |
 *                 attributeAuthorityRevocationList}
 *   ID           id-oc-pmiAA }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pmiAA: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        aACertificate,
        attributeCertificateRevocationList,
        eeAttrCertificateRevocationList,
        attributeAuthorityRevocationList,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pmiAA /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pmiAA */

/* eslint-enable */
