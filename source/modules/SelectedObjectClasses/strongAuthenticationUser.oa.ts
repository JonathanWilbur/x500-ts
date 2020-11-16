/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { id_oc_strongAuthenticationUser } from "../SelectedObjectClasses/id-oc-strongAuthenticationUser.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_strongAuthenticationUser } from "../SelectedObjectClasses/id-oc-strongAuthenticationUser.va";

/* START_OF_SYMBOL_DEFINITION strongAuthenticationUser */
/**
 * @summary strongAuthenticationUser
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * strongAuthenticationUser OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   KIND          auxiliary
 *   MUST CONTAIN  {userCertificate}
 *   LDAP-NAME     {"strongAuthenticationUser"} -- RFC 4523
 *   LDAP-DESC     {"X.521 strong authentication user"}
 *   ID            id-oc-strongAuthenticationUser }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const strongAuthenticationUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&ldapName": undefined,
    "&ldapDesc": undefined,
    "&id": id_oc_strongAuthenticationUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION strongAuthenticationUser */

/* eslint-enable */
