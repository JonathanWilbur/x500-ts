/* eslint-disable */
import { id_kmr_accessPointMatch } from "../DSAOperationalAttributeTypes/id-kmr-accessPointMatch.va";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
import { _decode_Name, _encode_Name } from "../InformationFramework/Name.ta";
export { id_kmr_accessPointMatch } from "../DSAOperationalAttributeTypes/id-kmr-accessPointMatch.va";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";

/* START_OF_SYMBOL_DEFINITION accessPointMatch */
/**
 * @summary accessPointMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * accessPointMatch MATCHING-RULE ::= {
 *   SYNTAX  Name
 *   ID      id-kmr-accessPointMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const accessPointMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_Name,
    },
    encoderFor: {
        "&AssertionType": _encode_Name,
    },
    "&id": id_kmr_accessPointMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION accessPointMatch */

/* eslint-enable */