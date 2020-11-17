/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
import {
    _decode_CharacterMatchTypes,
    _encode_CharacterMatchTypes,
} from "../SelectedAttributeTypes/CharacterMatchTypes.ta";
import { id_cat_characterMatchTypes } from "../SelectedAttributeTypes/id-cat-characterMatchTypes.va";
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
export {
    characterCaseIgnore /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    characterExact /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    characterMapped /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    CharacterMatchTypes,
    CharacterMatchTypes_characterCaseIgnore /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CharacterMatchTypes_characterExact /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CharacterMatchTypes_characterMapped /* IMPORTED_LONG_ENUMERATION_ITEM */,
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
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION characterMatchTypes */

/* eslint-enable */
