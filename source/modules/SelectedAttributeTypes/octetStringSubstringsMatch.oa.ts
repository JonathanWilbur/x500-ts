/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_octetStringSubstringsMatch } from "../SelectedAttributeTypes/id-mr-octetStringSubstringsMatch.va";
import {
    OctetSubstringAssertion,
    _decode_OctetSubstringAssertion,
    _encode_OctetSubstringAssertion,
} from "../SelectedAttributeTypes/OctetSubstringAssertion.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_mr_octetStringSubstringsMatch } from "../SelectedAttributeTypes/id-mr-octetStringSubstringsMatch.va";
export {
    OctetSubstringAssertion,
    _decode_OctetSubstringAssertion,
    _encode_OctetSubstringAssertion,
} from "../SelectedAttributeTypes/OctetSubstringAssertion.ta";

/* START_OF_SYMBOL_DEFINITION octetStringSubstringsMatch */
/**
 * @summary octetStringSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * octetStringSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX  OctetSubstringAssertion
 *   ID      id-mr-octetStringSubstringsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<OctetSubstringAssertion>}
 * @implements {MATCHING_RULE<OctetSubstringAssertion>}
 */
export const octetStringSubstringsMatch: MATCHING_RULE<OctetSubstringAssertion> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_OctetSubstringAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_OctetSubstringAssertion,
    },
    "&id": id_mr_octetStringSubstringsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION octetStringSubstringsMatch */

/* eslint-enable */
