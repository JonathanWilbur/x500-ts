/* eslint-disable */
import {
    _decode_HierarchySelections,
    _encode_HierarchySelections,
} from "../DirectoryAbstractService/HierarchySelections.ta";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
import { id_not_hierarchySelectList } from "../SelectedAttributeTypes/id-not-hierarchySelectList.va";
export {
    all /* IMPORTED_SHORT_NAMED_BIT */,
    children /* IMPORTED_SHORT_NAMED_BIT */,
    hierarchy /* IMPORTED_SHORT_NAMED_BIT */,
    HierarchySelections,
    HierarchySelections_all /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_children /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_hierarchy /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_parent /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_self /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_siblingChildren /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_siblings /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_siblingSubtree /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_subtree /* IMPORTED_LONG_NAMED_BIT */,
    HierarchySelections_top /* IMPORTED_LONG_NAMED_BIT */,
    parent /* IMPORTED_SHORT_NAMED_BIT */,
    self /* IMPORTED_SHORT_NAMED_BIT */,
    siblingChildren /* IMPORTED_SHORT_NAMED_BIT */,
    siblings /* IMPORTED_SHORT_NAMED_BIT */,
    siblingSubtree /* IMPORTED_SHORT_NAMED_BIT */,
    subtree /* IMPORTED_SHORT_NAMED_BIT */,
    top /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_HierarchySelections,
    _encode_HierarchySelections,
} from "../DirectoryAbstractService/HierarchySelections.ta";
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
export { id_not_hierarchySelectList } from "../SelectedAttributeTypes/id-not-hierarchySelectList.va";

/* START_OF_SYMBOL_DEFINITION hierarchySelectList */
/**
 * @summary hierarchySelectList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchySelectList ATTRIBUTE ::= {
 *   WITH SYNTAX              HierarchySelections
 *   SINGLE VALUE             TRUE
 *   ID                       id-not-hierarchySelectList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const hierarchySelectList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_HierarchySelections,
    },
    encoderFor: {
        "&Type": _encode_HierarchySelections,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_not_hierarchySelectList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION hierarchySelectList */

/* eslint-enable */
