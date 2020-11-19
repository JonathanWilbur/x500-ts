/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
import { id_at_uuidpair } from "../SelectedAttributeTypes/id-at-uuidpair.va";
import {
    UUIDPair,
    _decode_UUIDPair,
    _encode_UUIDPair,
} from "../SelectedAttributeTypes/UUIDPair.ta";
import { uUIDPairMatch } from "../SelectedAttributeTypes/uUIDPairMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
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
 * @type {ATTRIBUTE<UUIDPair>}
 * @implements {ATTRIBUTE<UUIDPair>}
 */
export const uUIDPair: ATTRIBUTE<UUIDPair> = {
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
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uUIDPair */

/* eslint-enable */
