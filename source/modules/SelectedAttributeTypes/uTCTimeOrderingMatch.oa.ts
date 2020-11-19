/* eslint-disable */
import { UTCTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_uTCTimeOrderingMatch } from "../SelectedAttributeTypes/id-mr-uTCTimeOrderingMatch.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
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
 * @type {MATCHING_RULE<UTCTime>}
 * @implements {MATCHING_RULE<UTCTime>}
 */
export const uTCTimeOrderingMatch: MATCHING_RULE<UTCTime> = {
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
