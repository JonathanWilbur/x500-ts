/* eslint-disable */
import {
    AttributeValueIntegrityInfo,
    _decode_AttributeValueIntegrityInfo,
    _encode_AttributeValueIntegrityInfo,
} from "../EnhancedSecurity/AttributeValueIntegrityInfo.ta";
import { id_avc_attributeValueIntegrityInfoContext } from "../EnhancedSecurity/id-avc-attributeValueIntegrityInfoContext.va";
import { CONTEXT } from "../InformationFramework/CONTEXT.oca";
export {
    AttributeValueIntegrityInfo,
    _decode_AttributeValueIntegrityInfo,
    _encode_AttributeValueIntegrityInfo,
} from "../EnhancedSecurity/AttributeValueIntegrityInfo.ta";
export { id_avc_attributeValueIntegrityInfoContext } from "../EnhancedSecurity/id-avc-attributeValueIntegrityInfoContext.va";
export { CONTEXT } from "../InformationFramework/CONTEXT.oca";

/* START_OF_SYMBOL_DEFINITION attributeValueIntegrityInfoContext */
/**
 * @summary attributeValueIntegrityInfoContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeValueIntegrityInfoContext CONTEXT ::= {
 *   WITH SYNTAX  AttributeValueIntegrityInfo
 *   ID           id-avc-attributeValueIntegrityInfoContext }
 * ```
 *
 * @constant
 * @type {CONTEXT<AttributeValueIntegrityInfo>}
 * @implements {CONTEXT<AttributeValueIntegrityInfo>}
 */
export const attributeValueIntegrityInfoContext: CONTEXT<AttributeValueIntegrityInfo> = {
    class: "CONTEXT",
    decoderFor: {
        "&Type": _decode_AttributeValueIntegrityInfo,
        "&Assertion": undefined,
    },
    encoderFor: {
        "&Type": _encode_AttributeValueIntegrityInfo,
        "&Assertion": undefined,
    },
    "&id": id_avc_attributeValueIntegrityInfoContext /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Assertion": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&absentMatch": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attributeValueIntegrityInfoContext */

/* eslint-enable */
