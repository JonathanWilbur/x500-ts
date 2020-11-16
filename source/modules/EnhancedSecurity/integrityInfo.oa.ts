/* eslint-disable */
import { id_oc_integrityInfo } from "../EnhancedSecurity/id-oc-integrityInfo.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { id_oc_integrityInfo } from "../EnhancedSecurity/id-oc-integrityInfo.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION integrityInfo */
/**
 * @summary integrityInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * integrityInfo OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   KIND          auxiliary
 *   MUST CONTAIN  {attributeIntegrityInfo}
 *   ID            id-oc-integrityInfo }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const integrityInfo: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": undefined,
    "&id": id_oc_integrityInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION integrityInfo */

/* eslint-enable */
