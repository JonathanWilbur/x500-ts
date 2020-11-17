/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
import { id_cat_sequenceMatchType } from "../SelectedAttributeTypes/id-cat-sequenceMatchType.va";
import {
    _decode_SequenceMatchType,
    _encode_SequenceMatchType,
} from "../SelectedAttributeTypes/SequenceMatchType.ta";
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
export { id_cat_sequenceMatchType } from "../SelectedAttributeTypes/id-cat-sequenceMatchType.va";
export {
    sequenceDeletion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    sequenceExact /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SequenceMatchType,
    SequenceMatchType_sequenceDeletion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SequenceMatchType_sequenceExact /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SequenceMatchType_sequencePermutation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SequenceMatchType_sequencePermutationAndDeletion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SequenceMatchType_sequenceProviderDefined /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SequenceMatchType_sequenceRestrictedDeletion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sequencePermutation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    sequencePermutationAndDeletion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    sequenceProviderDefined /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    sequenceRestrictedDeletion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
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
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sequenceMatchType */

/* eslint-enable */
