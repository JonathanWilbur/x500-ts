/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_uTCTimeOrderingMatch } from "../SelectedAttributeTypes/id-mr-uTCTimeOrderingMatch.va";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { id_mr_uTCTimeOrderingMatch } from "../SelectedAttributeTypes/id-mr-uTCTimeOrderingMatch.va";

/* START_OF_SYMBOL_DEFINITION uTCTimeOrderingMatch */
/**
 * @summary uTCTimeOrderingMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uTCTimeOrderingMatch MATCHING-RULE ::= {
 *   SYNTAX       UTCTime
 *   ID           id-mr-uTCTimeOrderingMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const uTCTimeOrderingMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeUTCTime,
    },
    encoderFor: {
        "&AssertionType": $._encodeUTCTime,
    },
    "&id": id_mr_uTCTimeOrderingMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uTCTimeOrderingMatch */

/* eslint-enable */
