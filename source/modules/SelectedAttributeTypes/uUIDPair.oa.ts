/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_uuidpair } from "../SelectedAttributeTypes/id-at-uuidpair.va";
import {
    _decode_UUIDPair,
    _encode_UUIDPair,
} from "../SelectedAttributeTypes/UUIDPair.ta";
import { uUIDPairMatch } from "../SelectedAttributeTypes/uUIDPairMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_uuidpair } from "../SelectedAttributeTypes/id-at-uuidpair.va";
export {
    UUIDPair,
    _decode_UUIDPair,
    _encode_UUIDPair,
} from "../SelectedAttributeTypes/UUIDPair.ta";
export { uUIDPairMatch } from "../SelectedAttributeTypes/uUIDPairMatch.oa";

/* START_OF_SYMBOL_DEFINITION uUIDPair */
/**
 * @summary uUIDPair
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uUIDPair ATTRIBUTE ::= {
 *   WITH SYNTAX             UUIDPair
 *   EQUALITY MATCHING RULE  uUIDPairMatch
 *   ID                      id-at-uuidpair }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const uUIDPair: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UUIDPair,
    },
    encoderFor: {
        "&Type": _encode_UUIDPair,
    },
    "&equality-match": uUIDPairMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_uuidpair /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uUIDPair */

/* eslint-enable */
