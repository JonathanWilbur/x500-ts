/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { id_mr_presentationAddressMatch } from "../SelectedAttributeTypes/id-mr-presentationAddressMatch.va";
import {
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from "../SelectedAttributeTypes/PresentationAddress.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { id_mr_presentationAddressMatch } from "../SelectedAttributeTypes/id-mr-presentationAddressMatch.va";
export {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from "../SelectedAttributeTypes/PresentationAddress.ta";

/* START_OF_SYMBOL_DEFINITION presentationAddressMatch */
/**
 * @summary presentationAddressMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * presentationAddressMatch MATCHING-RULE ::= {
 *   SYNTAX       PresentationAddress
 *   ID           id-mr-presentationAddressMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const presentationAddressMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_PresentationAddress,
    },
    encoderFor: {
        "&AssertionType": _encode_PresentationAddress,
    },
    "&id": id_mr_presentationAddressMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION presentationAddressMatch */

/* eslint-enable */
