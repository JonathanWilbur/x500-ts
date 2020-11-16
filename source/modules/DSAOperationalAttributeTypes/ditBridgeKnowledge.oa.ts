/* eslint-disable */
import {
    _decode_DitBridgeKnowledge,
    _encode_DitBridgeKnowledge,
} from "../DistributedOperations/DitBridgeKnowledge.ta";
import { id_doa_ditBridgeKnowledge } from "../DSAOperationalAttributeTypes/id-doa-ditBridgeKnowledge.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { directoryStringFirstComponentMatch } from "../SelectedAttributeTypes/directoryStringFirstComponentMatch.oa";
export {
    DitBridgeKnowledge,
    _decode_DitBridgeKnowledge,
    _encode_DitBridgeKnowledge,
} from "../DistributedOperations/DitBridgeKnowledge.ta";
export { id_doa_ditBridgeKnowledge } from "../DSAOperationalAttributeTypes/id-doa-ditBridgeKnowledge.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { directoryStringFirstComponentMatch } from "../SelectedAttributeTypes/directoryStringFirstComponentMatch.oa";

/* START_OF_SYMBOL_DEFINITION ditBridgeKnowledge */
/**
 * @summary ditBridgeKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ditBridgeKnowledge ATTRIBUTE ::= {
 *   WITH SYNTAX             DitBridgeKnowledge
 *   EQUALITY MATCHING RULE  directoryStringFirstComponentMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-ditBridgeKnowledge }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const ditBridgeKnowledge: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DitBridgeKnowledge,
    },
    encoderFor: {
        "&Type": _encode_DitBridgeKnowledge,
    },
    "&equality-match": directoryStringFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_ditBridgeKnowledge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ditBridgeKnowledge */

/* eslint-enable */
