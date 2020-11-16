/* eslint-disable */
import { authorityRevocationList } from "../AuthenticationFramework/authorityRevocationList.oa";
import { cACertificate } from "../AuthenticationFramework/cACertificate.oa";
import { certificateRevocationList } from "../AuthenticationFramework/certificateRevocationList.oa";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { id_oc_certificationAuthority } from "../SelectedObjectClasses/id-oc-certificationAuthority.va";
export { authorityRevocationList } from "../AuthenticationFramework/authorityRevocationList.oa";
export { cACertificate } from "../AuthenticationFramework/cACertificate.oa";
export { certificateRevocationList } from "../AuthenticationFramework/certificateRevocationList.oa";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_certificationAuthority } from "../SelectedObjectClasses/id-oc-certificationAuthority.va";

/* START_OF_SYMBOL_DEFINITION certificationAuthority */
/**
 * @summary certificationAuthority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificationAuthority OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   KIND          auxiliary
 *   MUST CONTAIN  {cACertificate |
 *                  certificateRevocationList |
 *                  authorityRevocationList}
 *   MAY CONTAIN   {crossCertificatePair}
 *   LDAP-NAME     {"certificationAuthority"} -- RFC 4523
 *   LDAP-DESC     {"X.509 certificate authority"}
 *   ID            id-oc-certificationAuthority }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const certificationAuthority: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [
        cACertificate,
        certificateRevocationList,
        authorityRevocationList,
    ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&ldapName": undefined,
    "&ldapDesc": undefined,
    "&id": id_oc_certificationAuthority /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certificationAuthority */

/* eslint-enable */
