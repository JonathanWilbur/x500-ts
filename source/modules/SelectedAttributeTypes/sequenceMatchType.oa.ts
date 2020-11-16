/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_cat_sequenceMatchType } from "../SelectedAttributeTypes/id-cat-sequenceMatchType.va";
import {
    _decode_SequenceMatchType,
    _encode_SequenceMatchType,
} from "../SelectedAttributeTypes/SequenceMatchType.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_cat_sequenceMatchType } from "../SelectedAttributeTypes/id-cat-sequenceMatchType.va";
export {
    SequenceMatchType,
    SequenceMatchType_sequenceDeletion /* IMPORTED_ENUMERATION_ITEM */,
    SequenceMatchType_sequenceExact /* IMPORTED_ENUMERATION_ITEM */,
    SequenceMatchType_sequencePermutation /* IMPORTED_ENUMERATION_ITEM */,
    SequenceMatchType_sequencePermutationAndDeletion /* IMPORTED_ENUMERATION_ITEM */,
    SequenceMatchType_sequenceProviderDefined /* IMPORTED_ENUMERATION_ITEM */,
    SequenceMatchType_sequenceRestrictedDeletion /* IMPORTED_ENUMERATION_ITEM */,
    _decode_SequenceMatchType,
    _encode_SequenceMatchType,
    _enum_for_SequenceMatchType,
} from "../SelectedAttributeTypes/SequenceMatchType.ta";

/* START_OF_SYMBOL_DEFINITION sequenceMatchType */
/**
 * @summary sequenceMatchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sequenceMatchType ATTRIBUTE ::= {
 *   WITH SYNTAX   SequenceMatchType
 *   SINGLE VALUE  TRUE
 *   ID            id-cat-sequenceMatchType }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const sequenceMatchType: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_SequenceMatchType,
    },
    encoderFor: {
        "&Type": _encode_SequenceMatchType,
    },
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_cat_sequenceMatchType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sequenceMatchType */

/* eslint-enable */
