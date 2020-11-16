/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_not_proposedRelaxation } from "../SelectedAttributeTypes/id-not-proposedRelaxation.va";
import {
    _decode_MRMappings,
    _encode_MRMappings,
} from "../SelectedAttributeTypes/MRMappings.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_not_proposedRelaxation } from "../SelectedAttributeTypes/id-not-proposedRelaxation.va";
export {
    MRMappings,
    _decode_MRMappings,
    _encode_MRMappings,
} from "../SelectedAttributeTypes/MRMappings.ta";

/* START_OF_SYMBOL_DEFINITION proposedRelaxation */
/**
 * @summary proposedRelaxation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * proposedRelaxation ATTRIBUTE ::= {
 *   WITH SYNTAX              MRMappings
 *   ID                       id-not-proposedRelaxation }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const proposedRelaxation: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_MRMappings,
    },
    encoderFor: {
        "&Type": _encode_MRMappings,
    },
    "&id": id_not_proposedRelaxation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION proposedRelaxation */

/* eslint-enable */
