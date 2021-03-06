/* eslint-disable */
import {
    FilterItem,
    _decode_FilterItem,
    _encode_FilterItem,
} from "../DirectoryAbstractService/FilterItem.ta";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
import { id_not_filterItem } from "../SelectedAttributeTypes/id-not-filterItem.va";
export {
    FilterItem,
    _decode_FilterItem,
    _encode_FilterItem,
} from "../DirectoryAbstractService/FilterItem.ta";
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
export { id_not_filterItem } from "../SelectedAttributeTypes/id-not-filterItem.va";

/* START_OF_SYMBOL_DEFINITION filterItem */
/**
 * @summary filterItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * filterItem ATTRIBUTE ::= {
 *   WITH SYNTAX              FilterItem
 *   ID                       id-not-filterItem }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<FilterItem>}
 * @implements {ATTRIBUTE<FilterItem>}
 */
export const filterItem: ATTRIBUTE<FilterItem> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_FilterItem,
    },
    encoderFor: {
        "&Type": _encode_FilterItem,
    },
    "&id": id_not_filterItem /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION filterItem */

/* eslint-enable */
