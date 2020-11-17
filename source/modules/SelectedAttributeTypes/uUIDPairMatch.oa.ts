/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_uuidpairmatch } from "../SelectedAttributeTypes/id-mr-uuidpairmatch.va";
import {
    _decode_UUIDPair,
    _encode_UUIDPair,
} from "../SelectedAttributeTypes/UUIDPair.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_mr_uuidpairmatch } from "../SelectedAttributeTypes/id-mr-uuidpairmatch.va";
export {
    UUIDPair,
    _decode_UUIDPair,
    _encode_UUIDPair,
} from "../SelectedAttributeTypes/UUIDPair.ta";

/* START_OF_SYMBOL_DEFINITION uUIDPairMatch */
/**
 * @summary uUIDPairMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uUIDPairMatch MATCHING-RULE ::= {
 *   SYNTAX       UUIDPair
 *   ID           id-mr-uuidpairmatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const uUIDPairMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UUIDPair,
    },
    encoderFor: {
        "&AssertionType": _encode_UUIDPair,
    },
    "&id": id_mr_uuidpairmatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uUIDPairMatch */

/* eslint-enable */
