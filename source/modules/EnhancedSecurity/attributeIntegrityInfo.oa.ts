/* eslint-disable */
import { id_at_attributeIntegrityInfo } from "../EnhancedSecurity/id-at-attributeIntegrityInfo.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AttributeIntegrityInfo,
    _get_decoder_for_AttributeIntegrityInfo,
    _get_encoder_for_AttributeIntegrityInfo,
} from "../EnhancedSecurity/AttributeIntegrityInfo.ta";
export { id_at_attributeIntegrityInfo } from "../EnhancedSecurity/id-at-attributeIntegrityInfo.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION attributeIntegrityInfo */
/**
 * @summary attributeIntegrityInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeIntegrityInfo ATTRIBUTE ::= {
 *   WITH SYNTAX   AttributeIntegrityInfo
 *   SINGLE VALUE  TRUE
 *   ID            id-at-attributeIntegrityInfo }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const attributeIntegrityInfo: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttributeIntegrityInfo,
    },
    encoderFor: {
        "&Type": _encode_AttributeIntegrityInfo,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_at_attributeIntegrityInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attributeIntegrityInfo */

/* eslint-enable */
