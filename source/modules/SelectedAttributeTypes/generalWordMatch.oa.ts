/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_generalWordMatch } from "../SelectedAttributeTypes/id-mr-generalWordMatch.va";
import {
    _decode_SubstringAssertion,
    _encode_SubstringAssertion,
} from "../SelectedAttributeTypes/SubstringAssertion.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { id_mr_generalWordMatch } from "../SelectedAttributeTypes/id-mr-generalWordMatch.va";
export {
    SubstringAssertion,
    _decode_SubstringAssertion,
    _encode_SubstringAssertion,
} from "../SelectedAttributeTypes/SubstringAssertion.ta";

/* START_OF_SYMBOL_DEFINITION generalWordMatch */
/**
 * @summary generalWordMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * generalWordMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion
 *   ID           id-mr-generalWordMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const generalWordMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_SubstringAssertion,
    },
    "&id": id_mr_generalWordMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION generalWordMatch */

/* eslint-enable */
