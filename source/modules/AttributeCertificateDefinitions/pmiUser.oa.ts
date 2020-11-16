/* eslint-disable */
import { id_oc_pmiUser } from "../AttributeCertificateDefinitions/id-oc-pmiUser.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_pmiUser } from "../AttributeCertificateDefinitions/id-oc-pmiUser.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION pmiUser */
/**
 * @summary pmiUser
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pmiUser OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {attributeCertificateAttribute}
 *   ID           id-oc-pmiUser }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pmiUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&id": id_oc_pmiUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pmiUser */

/* eslint-enable */
