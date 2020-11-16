/* eslint-disable */
import { id_oc_pmiDelegationPath } from "../AttributeCertificateDefinitions/id-oc-pmiDelegationPath.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_pmiDelegationPath } from "../AttributeCertificateDefinitions/id-oc-pmiDelegationPath.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION pmiDelegationPath */
/**
 * @summary pmiDelegationPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pmiDelegationPath OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {delegationPath}
 *   ID           id-oc-pmiDelegationPath }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pmiDelegationPath: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&id": id_oc_pmiDelegationPath /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pmiDelegationPath */

/* eslint-enable */
