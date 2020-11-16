/* eslint-disable */
import { id_oc_pkiUser } from "../AuthenticationFramework/id-oc-pkiUser.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_pkiUser } from "../AuthenticationFramework/id-oc-pkiUser.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION pkiUser */
/**
 * @summary pkiUser
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkiUser OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {userCertificate}
 *   LDAP-NAME           {"pkiUser"}
 *   LDAP-DESC           "X.509 PKI User"
 *   ID                  id-oc-pkiUser }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pkiUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&ldapName": undefined,
    "&ldapDesc": "X.509 PKI User" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pkiUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pkiUser */

/* eslint-enable */
