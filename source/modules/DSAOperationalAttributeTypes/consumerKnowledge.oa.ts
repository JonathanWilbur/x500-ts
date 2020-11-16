/* eslint-disable */
import {
    _decode_ConsumerInformation,
    _encode_ConsumerInformation,
} from "../DSAOperationalAttributeTypes/ConsumerInformation.ta";
import { id_doa_consumerKnowledge } from "../DSAOperationalAttributeTypes/id-doa-consumerKnowledge.va";
import { supplierOrConsumerInformationMatch } from "../DSAOperationalAttributeTypes/supplierOrConsumerInformationMatch.oa";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    ConsumerInformation,
    _decode_ConsumerInformation,
    _encode_ConsumerInformation,
} from "../DSAOperationalAttributeTypes/ConsumerInformation.ta";
export { id_doa_consumerKnowledge } from "../DSAOperationalAttributeTypes/id-doa-consumerKnowledge.va";
export { supplierOrConsumerInformationMatch } from "../DSAOperationalAttributeTypes/supplierOrConsumerInformationMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION consumerKnowledge */
/**
 * @summary consumerKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * consumerKnowledge ATTRIBUTE ::= {
 *   WITH SYNTAX             ConsumerInformation
 *   EQUALITY MATCHING RULE  supplierOrConsumerInformationMatch
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-consumerKnowledge }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const consumerKnowledge: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ConsumerInformation,
    },
    encoderFor: {
        "&Type": _encode_ConsumerInformation,
    },
    "&equality-match": supplierOrConsumerInformationMatch /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_consumerKnowledge /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION consumerKnowledge */

/* eslint-enable */
