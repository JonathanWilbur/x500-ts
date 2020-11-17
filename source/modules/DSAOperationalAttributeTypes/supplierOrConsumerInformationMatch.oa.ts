/* eslint-disable */
import { id_kmr_supplierConsumerMatch } from "../DSAOperationalAttributeTypes/id-kmr-supplierConsumerMatch.va";
import {
    _decode_supplierOrConsumerInformationMatch_AssertionType,
    _encode_supplierOrConsumerInformationMatch_AssertionType,
} from "../DSAOperationalAttributeTypes/supplierOrConsumerInformationMatch-AssertionType.ta";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { id_kmr_supplierConsumerMatch } from "../DSAOperationalAttributeTypes/id-kmr-supplierConsumerMatch.va";
export {
    supplierOrConsumerInformationMatch_AssertionType,
    _decode_supplierOrConsumerInformationMatch_AssertionType,
    _encode_supplierOrConsumerInformationMatch_AssertionType,
} from "../DSAOperationalAttributeTypes/supplierOrConsumerInformationMatch-AssertionType.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION supplierOrConsumerInformationMatch */
/**
 * @summary supplierOrConsumerInformationMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supplierOrConsumerInformationMatch MATCHING-RULE ::= {
 *   SYNTAX SET {
 *     ae-title              [0]  Name,
 *     agreement-identifier  [2]  INTEGER}
 *   ID      id-kmr-supplierConsumerMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const supplierOrConsumerInformationMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_supplierOrConsumerInformationMatch_AssertionType,
    },
    encoderFor: {
        "&AssertionType": _encode_supplierOrConsumerInformationMatch_AssertionType,
    },
    "&id": id_kmr_supplierConsumerMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION supplierOrConsumerInformationMatch */

/* eslint-enable */
