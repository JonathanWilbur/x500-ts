/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    _decode_HierarchyLevel,
    _encode_HierarchyLevel,
} from "../InformationFramework/HierarchyLevel.ta";
import { id_oa_hierarchyLevel } from "../InformationFramework/id-oa-hierarchyLevel.va";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa";
import { integerOrderingMatch } from "../SelectedAttributeTypes/integerOrderingMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    HierarchyLevel,
    _decode_HierarchyLevel,
    _encode_HierarchyLevel,
} from "../InformationFramework/HierarchyLevel.ta";
export { id_oa_hierarchyLevel } from "../InformationFramework/id-oa-hierarchyLevel.va";
export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa";
export { integerOrderingMatch } from "../SelectedAttributeTypes/integerOrderingMatch.oa";

/* START_OF_SYMBOL_DEFINITION hierarchyLevel */
/**
 * @summary hierarchyLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchyLevel ATTRIBUTE ::= {
 *   WITH SYNTAX             HierarchyLevel
 *   EQUALITY MATCHING RULE  integerMatch
 *   ORDERING MATCHING RULE  integerOrderingMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-oa-hierarchyLevel }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const hierarchyLevel: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_HierarchyLevel,
    },
    encoderFor: {
        "&Type": _encode_HierarchyLevel,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_hierarchyLevel /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION hierarchyLevel */

/* eslint-enable */
