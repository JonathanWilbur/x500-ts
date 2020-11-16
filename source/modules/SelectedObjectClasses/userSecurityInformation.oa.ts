/* eslint-disable */
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
import { id_oc_userSecurityInformation } from "../SelectedObjectClasses/id-oc-userSecurityInformation.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_userSecurityInformation } from "../SelectedObjectClasses/id-oc-userSecurityInformation.va";

/* START_OF_SYMBOL_DEFINITION userSecurityInformation */
/**
 * @summary userSecurityInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userSecurityInformation OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   KIND          auxiliary
 *   MAY CONTAIN   {supportedAlgorithms}
 *   LDAP-NAME     {"userSecurityInformation"} -- RFC 4523
 *   LDAP-DESC     {"X.521 user security information"}
 *   ID            id-oc-userSecurityInformation }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const userSecurityInformation: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&ldapName": undefined,
    "&ldapDesc": undefined,
    "&id": id_oc_userSecurityInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION userSecurityInformation */

/* eslint-enable */
