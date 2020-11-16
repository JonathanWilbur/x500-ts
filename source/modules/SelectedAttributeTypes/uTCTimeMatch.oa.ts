/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_uTCTimeMatch } from "../SelectedAttributeTypes/id-mr-uTCTimeMatch.va";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { id_mr_uTCTimeMatch } from "../SelectedAttributeTypes/id-mr-uTCTimeMatch.va";

/* START_OF_SYMBOL_DEFINITION uTCTimeMatch */
/**
 * @summary uTCTimeMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uTCTimeMatch MATCHING-RULE ::= {
 *   SYNTAX       UTCTime
 *   ID           id-mr-uTCTimeMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const uTCTimeMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeUTCTime,
    },
    encoderFor: {
        "&AssertionType": $._encodeUTCTime,
    },
    "&id": id_mr_uTCTimeMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uTCTimeMatch */

/* eslint-enable */
