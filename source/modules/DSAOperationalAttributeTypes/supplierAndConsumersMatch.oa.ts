/* eslint-disable */
import { id_kmr_supplierConsumersMatch } from "../DSAOperationalAttributeTypes/id-kmr-supplierConsumersMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { _decode_Name, _encode_Name } from "../InformationFramework/Name.ta";
export { id_kmr_supplierConsumersMatch } from "../DSAOperationalAttributeTypes/id-kmr-supplierConsumersMatch.va";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";

/* START_OF_SYMBOL_DEFINITION supplierAndConsumersMatch */
/**
 * @summary supplierAndConsumersMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supplierAndConsumersMatch MATCHING-RULE ::= {
 *   SYNTAX  Name
 *   ID      id-kmr-supplierConsumersMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const supplierAndConsumersMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_Name,
    },
    encoderFor: {
        "&AssertionType": _encode_Name,
    },
    "&id": id_kmr_supplierConsumersMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION supplierAndConsumersMatch */

/* eslint-enable */
