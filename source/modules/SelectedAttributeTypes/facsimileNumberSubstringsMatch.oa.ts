/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_facsimileNumberSubstringsMatch } from "../SelectedAttributeTypes/id-mr-facsimileNumberSubstringsMatch.va";
import {
    _decode_SubstringAssertion,
    _encode_SubstringAssertion,
} from "../SelectedAttributeTypes/SubstringAssertion.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { id_mr_facsimileNumberSubstringsMatch } from "../SelectedAttributeTypes/id-mr-facsimileNumberSubstringsMatch.va";
export {
    SubstringAssertion,
    _decode_SubstringAssertion,
    _encode_SubstringAssertion,
} from "../SelectedAttributeTypes/SubstringAssertion.ta";

/* START_OF_SYMBOL_DEFINITION facsimileNumberSubstringsMatch */
/**
 * @summary facsimileNumberSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * facsimileNumberSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX       SubstringAssertion
 *   ID           id-mr-facsimileNumberSubstringsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const facsimileNumberSubstringsMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_SubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_SubstringAssertion,
    },
    "&id": id_mr_facsimileNumberSubstringsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION facsimileNumberSubstringsMatch */

/* eslint-enable */
