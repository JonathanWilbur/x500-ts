/* eslint-disable */
import {
    FamilyEntries,
    _decode_FamilyEntries,
    _encode_FamilyEntries,
} from "../DirectoryAbstractService/FamilyEntries.ta";
import { id_at_family_information } from "../DirectoryAbstractService/id-at-family-information.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export {
    FamilyEntries,
    _decode_FamilyEntries,
    _encode_FamilyEntries,
} from "../DirectoryAbstractService/FamilyEntries.ta";
export { id_at_family_information } from "../DirectoryAbstractService/id-at-family-information.va";
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

/* START_OF_SYMBOL_DEFINITION family_information */
/**
 * @summary family_information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * family-information ATTRIBUTE ::= {
 *   WITH SYNTAX  FamilyEntries
 *   USAGE        directoryOperation
 *   ID           id-at-family-information }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<FamilyEntries>}
 * @implements {ATTRIBUTE<FamilyEntries>}
 */
export const family_information: ATTRIBUTE<FamilyEntries> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_FamilyEntries,
    },
    encoderFor: {
        "&Type": _encode_FamilyEntries,
    },
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_at_family_information /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION family_information */

/* eslint-enable */
