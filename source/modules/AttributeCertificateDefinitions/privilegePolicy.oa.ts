/* eslint-disable */
import { id_oc_privilegePolicy } from "../AttributeCertificateDefinitions/id-oc-privilegePolicy.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_privilegePolicy } from "../AttributeCertificateDefinitions/id-oc-privilegePolicy.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION privilegePolicy */
/**
 * @summary privilegePolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * privilegePolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {privPolicy}
 *   ID           id-oc-privilegePolicy }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const privilegePolicy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&id": id_oc_privilegePolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION privilegePolicy */

/* eslint-enable */
