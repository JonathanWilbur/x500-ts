/* eslint-disable */
import { authorityRevocationList } from "../AuthenticationFramework/authorityRevocationList.oa";
import { certificateRevocationList } from "../AuthenticationFramework/certificateRevocationList.oa";
import { deltaRevocationList } from "../AuthenticationFramework/deltaRevocationList.oa";
import { eepkCertificateRevocationList } from "../AuthenticationFramework/eepkCertificateRevocationList.oa";
import { id_oc_cRLDistributionPoint } from "../AuthenticationFramework/id-oc-cRLDistributionPoint.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { authorityRevocationList } from "../AuthenticationFramework/authorityRevocationList.oa";
export { certificateRevocationList } from "../AuthenticationFramework/certificateRevocationList.oa";
export { deltaRevocationList } from "../AuthenticationFramework/deltaRevocationList.oa";
export { eepkCertificateRevocationList } from "../AuthenticationFramework/eepkCertificateRevocationList.oa";
export { id_oc_cRLDistributionPoint } from "../AuthenticationFramework/id-oc-cRLDistributionPoint.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION cRLDistributionPoint */
/**
 * @summary cRLDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cRLDistributionPoint OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                structural
 *   MUST CONTAIN        {commonName}
 *   MAY CONTAIN         {certificateRevocationList |
 *                        eepkCertificateRevocationList |
 *                        authorityRevocationList |
 *                        deltaRevocationList}
 *   LDAP-NAME           {"cRLDistributionPoint"}
 *   LDAP-DESC           "X.509 CRL distribution point"
 *   ID                  id-oc-cRLDistributionPoint }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const cRLDistributionPoint: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&OptionalAttributes": [
        certificateRevocationList,
        eepkCertificateRevocationList,
        authorityRevocationList,
        deltaRevocationList,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 CRL distribution point" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_cRLDistributionPoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION cRLDistributionPoint */

/* eslint-enable */
