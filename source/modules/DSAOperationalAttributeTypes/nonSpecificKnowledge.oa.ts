/* eslint-disable */
import {
    _decode_MasterAndShadowAccessPoints,
    _encode_MasterAndShadowAccessPoints,
} from "../DistributedOperations/MasterAndShadowAccessPoints.ta";
import { id_doa_nonSpecificKnowledge } from "../DSAOperationalAttributeTypes/id-doa-nonSpecificKnowledge.va";
import { masterAndShadowAccessPointsMatch } from "../DSAOperationalAttributeTypes/masterAndShadowAccessPointsMatch.oa";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    MasterAndShadowAccessPoints,
    _decode_MasterAndShadowAccessPoints,
    _encode_MasterAndShadowAccessPoints,
} from "../DistributedOperations/MasterAndShadowAccessPoints.ta";
export { id_doa_nonSpecificKnowledge } from "../DSAOperationalAttributeTypes/id-doa-nonSpecificKnowledge.va";
export { masterAndShadowAccessPointsMatch } from "../DSAOperationalAttributeTypes/masterAndShadowAccessPointsMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION nonSpecificKnowledge */
/**
 * @summary nonSpecificKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nonSpecificKnowledge ATTRIBUTE ::= {
 *   WITH SYNTAX             MasterAndShadowAccessPoints
 *   EQUALITY MATCHING RULE  masterAndShadowAccessPointsMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   distributedOperation
 *   ID                      id-doa-nonSpecificKnowledge }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const nonSpecificKnowledge: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MasterAndShadowAccessPoints,
    },
    encoderFor: {
        "&Type": _encode_MasterAndShadowAccessPoints,
    },
    "&equality-match": masterAndShadowAccessPointsMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_distributedOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_nonSpecificKnowledge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION nonSpecificKnowledge */

/* eslint-enable */