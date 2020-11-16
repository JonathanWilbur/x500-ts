/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    _decode_CharacterMatchTypes,
    _encode_CharacterMatchTypes,
} from "../SelectedAttributeTypes/CharacterMatchTypes.ta";
import { id_cat_characterMatchTypes } from "../SelectedAttributeTypes/id-cat-characterMatchTypes.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    CharacterMatchTypes,
    CharacterMatchTypes_characterCaseIgnore /* IMPORTED_ENUMERATION_ITEM */,
    CharacterMatchTypes_characterExact /* IMPORTED_ENUMERATION_ITEM */,
    CharacterMatchTypes_characterMapped /* IMPORTED_ENUMERATION_ITEM */,
    _decode_CharacterMatchTypes,
    _encode_CharacterMatchTypes,
    _enum_for_CharacterMatchTypes,
} from "../SelectedAttributeTypes/CharacterMatchTypes.ta";
export { id_cat_characterMatchTypes } from "../SelectedAttributeTypes/id-cat-characterMatchTypes.va";

/* START_OF_SYMBOL_DEFINITION characterMatchTypes */
/**
 * @summary characterMatchTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * characterMatchTypes ATTRIBUTE ::= {
 *   WITH SYNTAX   CharacterMatchTypes
 *   SINGLE VALUE  TRUE
 *   ID            id-cat-characterMatchTypes }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const characterMatchTypes: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CharacterMatchTypes,
    },
    encoderFor: {
        "&Type": _encode_CharacterMatchTypes,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_cat_characterMatchTypes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION characterMatchTypes */

/* eslint-enable */
