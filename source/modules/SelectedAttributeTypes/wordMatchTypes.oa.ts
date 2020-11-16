/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_cat_wordMatchType } from "../SelectedAttributeTypes/id-cat-wordMatchType.va";
import {
    _decode_WordMatchTypes,
    _encode_WordMatchTypes,
} from "../SelectedAttributeTypes/WordMatchTypes.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_cat_wordMatchType } from "../SelectedAttributeTypes/id-cat-wordMatchType.va";
export {
    WordMatchTypes,
    WordMatchTypes_wordExact /* IMPORTED_ENUMERATION_ITEM */,
    WordMatchTypes_wordPhonetic /* IMPORTED_ENUMERATION_ITEM */,
    WordMatchTypes_wordProviderDefined /* IMPORTED_ENUMERATION_ITEM */,
    WordMatchTypes_wordTruncated /* IMPORTED_ENUMERATION_ITEM */,
    _decode_WordMatchTypes,
    _encode_WordMatchTypes,
    _enum_for_WordMatchTypes,
} from "../SelectedAttributeTypes/WordMatchTypes.ta";

/* START_OF_SYMBOL_DEFINITION wordMatchTypes */
/**
 * @summary wordMatchTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * wordMatchTypes ATTRIBUTE ::= {
 *   WITH SYNTAX   WordMatchTypes
 *   SINGLE VALUE  TRUE
 *   ID            id-cat-wordMatchType }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const wordMatchTypes: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_WordMatchTypes,
    },
    encoderFor: {
        "&Type": _encode_WordMatchTypes,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_cat_wordMatchType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION wordMatchTypes */

/* eslint-enable */
