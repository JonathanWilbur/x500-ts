/* eslint-disable */
import {
    _decode_AttributeDescriptorSyntax,
    _encode_AttributeDescriptorSyntax,
} from "../AttributeCertificateDefinitions/AttributeDescriptorSyntax.ta";
import { id_mr_attDescriptorMatch } from "../AttributeCertificateDefinitions/id-mr-attDescriptorMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export {
    AttributeDescriptorSyntax,
    _decode_AttributeDescriptorSyntax,
    _encode_AttributeDescriptorSyntax,
} from "../AttributeCertificateDefinitions/AttributeDescriptorSyntax.ta";
export { id_mr_attDescriptorMatch } from "../AttributeCertificateDefinitions/id-mr-attDescriptorMatch.va";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";

/* START_OF_SYMBOL_DEFINITION attDescriptor */
/**
 * @summary attDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attDescriptor MATCHING-RULE ::= {
 *   SYNTAX  AttributeDescriptorSyntax
 *   ID      id-mr-attDescriptorMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const attDescriptor: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_AttributeDescriptorSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_AttributeDescriptorSyntax,
    },
    "&id": id_mr_attDescriptorMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION attDescriptor */

/* eslint-enable */
