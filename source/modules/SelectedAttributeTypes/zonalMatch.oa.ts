/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_zonalMatch } from "../SelectedAttributeTypes/id-mr-zonalMatch.va";
import { multipleMatchingLocalities } from "../SelectedAttributeTypes/multipleMatchingLocalities.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_mr_zonalMatch } from "../SelectedAttributeTypes/id-mr-zonalMatch.va";
export { multipleMatchingLocalities } from "../SelectedAttributeTypes/multipleMatchingLocalities.oa";

/* START_OF_SYMBOL_DEFINITION zonalMatch */
/**
 * @summary zonalMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * zonalMatch MATCHING-RULE ::= {
 *   UNIQUE-MATCH-INDICATOR  multipleMatchingLocalities
 *   ID                      id-mr-zonalMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const zonalMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": undefined,
    },
    encoderFor: {
        "&AssertionType": undefined,
    },
    "&uniqueMatchIndicator": multipleMatchingLocalities /* OBJECT_FIELD_SETTING */,
    "&id": id_mr_zonalMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION zonalMatch */

/* eslint-enable */
