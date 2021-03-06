/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_facsimileNumberMatch } from "../SelectedAttributeTypes/id-mr-facsimileNumberMatch.va";
import {
    TelephoneNumber,
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from "../SelectedAttributeTypes/TelephoneNumber.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_mr_facsimileNumberMatch } from "../SelectedAttributeTypes/id-mr-facsimileNumberMatch.va";
export {
    TelephoneNumber,
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from "../SelectedAttributeTypes/TelephoneNumber.ta";

/* START_OF_SYMBOL_DEFINITION facsimileNumberMatch */
/**
 * @summary facsimileNumberMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * facsimileNumberMatch MATCHING-RULE ::= {
 *   SYNTAX       TelephoneNumber
 *   ID           id-mr-facsimileNumberMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<TelephoneNumber>}
 * @implements {MATCHING_RULE<TelephoneNumber>}
 */
export const facsimileNumberMatch: MATCHING_RULE<TelephoneNumber> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_TelephoneNumber,
    },
    encoderFor: {
        "&AssertionType": _encode_TelephoneNumber,
    },
    "&id": id_mr_facsimileNumberMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION facsimileNumberMatch */

/* eslint-enable */
