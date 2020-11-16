/* eslint-disable */
import { id_oc_protectedPrivilegePolicy } from "../AttributeCertificateDefinitions/id-oc-protectedPrivilegePolicy.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_protectedPrivilegePolicy } from "../AttributeCertificateDefinitions/id-oc-protectedPrivilegePolicy.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION protectedPrivilegePolicy */
/**
 * @summary protectedPrivilegePolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protectedPrivilegePolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {protPrivPolicy}
 *   ID           id-oc-protectedPrivilegePolicy }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const protectedPrivilegePolicy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&id": id_oc_protectedPrivilegePolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION protectedPrivilegePolicy */

/* eslint-enable */
