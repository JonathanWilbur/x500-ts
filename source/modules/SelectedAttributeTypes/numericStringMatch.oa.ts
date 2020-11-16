/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_numericStringMatch } from "../SelectedAttributeTypes/id-mr-numericStringMatch.va";
import { numericString } from "../SelectedAttributeTypes/numericString.oa";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { id_mr_numericStringMatch } from "../SelectedAttributeTypes/id-mr-numericStringMatch.va";
export { numericString } from "../SelectedAttributeTypes/numericString.oa";

/* START_OF_SYMBOL_DEFINITION numericStringMatch */
/**
 * @summary numericStringMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * numericStringMatch MATCHING-RULE ::= {
 *   SYNTAX       NumericString
 *   LDAP-SYNTAX  numericString.&id
 *   LDAP-NAME    {"numericStringMatch"}
 *   ID           id-mr-numericStringMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const numericStringMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeNumericString,
    },
    encoderFor: {
        "&AssertionType": $._encodeNumericString,
    },
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_mr_numericStringMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION numericStringMatch */

/* eslint-enable */
