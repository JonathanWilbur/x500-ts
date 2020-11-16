/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    _decode_HierarchyBelow,
    _encode_HierarchyBelow,
} from "../InformationFramework/HierarchyBelow.ta";
import { id_oa_hierarchyBelow } from "../InformationFramework/id-oa-hierarchyBelow.va";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    HierarchyBelow,
    _decode_HierarchyBelow,
    _encode_HierarchyBelow,
} from "../InformationFramework/HierarchyBelow.ta";
export { id_oa_hierarchyBelow } from "../InformationFramework/id-oa-hierarchyBelow.va";
export { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa";

/* START_OF_SYMBOL_DEFINITION hierarchyBelow */
/**
 * @summary hierarchyBelow
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hierarchyBelow ATTRIBUTE ::= {
 *   WITH SYNTAX             HierarchyBelow
 *   EQUALITY MATCHING RULE  booleanMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   ID                      id-oa-hierarchyBelow }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const hierarchyBelow: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_HierarchyBelow,
    },
    encoderFor: {
        "&Type": _encode_HierarchyBelow,
    },
    "&equality-match": booleanMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_hierarchyBelow /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION hierarchyBelow */

/* eslint-enable */
