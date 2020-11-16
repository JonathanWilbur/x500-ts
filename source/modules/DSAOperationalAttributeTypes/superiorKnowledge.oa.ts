/* eslint-disable */
import {
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta";
import { accessPointMatch } from "../DSAOperationalAttributeTypes/accessPointMatch.oa";
import { id_doa_superiorKnowledge } from "../DSAOperationalAttributeTypes/id-doa-superiorKnowledge.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta";
export { accessPointMatch } from "../DSAOperationalAttributeTypes/accessPointMatch.oa";
export { id_doa_superiorKnowledge } from "../DSAOperationalAttributeTypes/id-doa-superiorKnowledge.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION superiorKnowledge */
/**
 * @summary superiorKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * superiorKnowledge ATTRIBUTE ::= {
 *   WITH SYNTAX             AccessPoint
 *   EQUALITY MATCHING RULE  accessPointMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-superiorKnowledge }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const superiorKnowledge: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AccessPoint,
    },
    encoderFor: {
        "&Type": _encode_AccessPoint,
    },
    "&equality-match": accessPointMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_superiorKnowledge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION superiorKnowledge */

/* eslint-enable */
