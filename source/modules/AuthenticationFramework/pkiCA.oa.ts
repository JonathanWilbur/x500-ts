/* eslint-disable */
import { authorityRevocationList } from "../AuthenticationFramework/authorityRevocationList.oa";
import { cACertificate } from "../AuthenticationFramework/cACertificate.oa";
import { certificateRevocationList } from "../AuthenticationFramework/certificateRevocationList.oa";
import { crossCertificatePair } from "../AuthenticationFramework/crossCertificatePair.oa";
import { eepkCertificateRevocationList } from "../AuthenticationFramework/eepkCertificateRevocationList.oa";
import { id_oc_pkiCA } from "../AuthenticationFramework/id-oc-pkiCA.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { authorityRevocationList } from "../AuthenticationFramework/authorityRevocationList.oa";
export { cACertificate } from "../AuthenticationFramework/cACertificate.oa";
export { certificateRevocationList } from "../AuthenticationFramework/certificateRevocationList.oa";
export { crossCertificatePair } from "../AuthenticationFramework/crossCertificatePair.oa";
export { eepkCertificateRevocationList } from "../AuthenticationFramework/eepkCertificateRevocationList.oa";
export { id_oc_pkiCA } from "../AuthenticationFramework/id-oc-pkiCA.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION pkiCA */
/**
 * @summary pkiCA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkiCA OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {cACertificate |
 *                        certificateRevocationList |
 *                        eepkCertificateRevocationList |
 *                        authorityRevocationList |
 *                        crossCertificatePair}
 *   LDAP-NAME           {"pkiCA"}
 *   LDAP-DESC           "X.509 PKI Certificate Authority"
 *   ID                  id-oc-pkiCA }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pkiCA: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        cACertificate,
        certificateRevocationList,
        eepkCertificateRevocationList,
        authorityRevocationList,
        crossCertificatePair,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 PKI Certificate Authority" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pkiCA /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pkiCA */

/* eslint-enable */
