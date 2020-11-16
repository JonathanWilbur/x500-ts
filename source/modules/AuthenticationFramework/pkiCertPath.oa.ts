/* eslint-disable */
import { id_oc_pkiCertPath } from "../AuthenticationFramework/id-oc-pkiCertPath.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_pkiCertPath } from "../AuthenticationFramework/id-oc-pkiCertPath.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION pkiCertPath */
/**
 * @summary pkiCertPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkiCertPath OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {pkiPath}
 *   LDAP-NAME           {"pkiCertPath"}
 *   LDAP-DESC           "PKI Certification Path"
 *   ID                  id-oc-pkiCertPath }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pkiCertPath: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&ldapName": undefined,
    "&ldapDesc": "PKI Certification Path" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pkiCertPath /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pkiCertPath */

/* eslint-enable */
