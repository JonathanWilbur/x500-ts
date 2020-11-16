/* eslint-disable */
import {
    _decode_HierarchySelections,
    _encode_HierarchySelections,
} from "../DirectoryAbstractService/HierarchySelections.ta";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_not_hierarchySelectList } from "../SelectedAttributeTypes/id-not-hierarchySelectList.va";
export {
    HierarchySelections,
    HierarchySelections_all /* IMPORTED_BIT */,
    HierarchySelections_children /* IMPORTED_BIT */,
    HierarchySelections_hierarchy /* IMPORTED_BIT */,
    HierarchySelections_parent /* IMPORTED_BIT */,
    HierarchySelections_self /* IMPORTED_BIT */,
    HierarchySelections_siblingChildren /* IMPORTED_BIT */,
    HierarchySelections_siblings /* IMPORTED_BIT */,
    HierarchySelections_siblingSubtree /* IMPORTED_BIT */,
    HierarchySelections_subtree /* IMPORTED_BIT */,
    HierarchySelections_top /* IMPORTED_BIT */,
    _decode_HierarchySelections,
    _encode_HierarchySelections,
} from "../DirectoryAbstractService/HierarchySelections.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
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
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION hierarchySelectList */

/* eslint-enable */
