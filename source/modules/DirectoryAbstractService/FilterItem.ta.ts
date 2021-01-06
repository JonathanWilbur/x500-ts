/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    FilterItem_substrings,
    _decode_FilterItem_substrings,
    _encode_FilterItem_substrings,
} from "../DirectoryAbstractService/FilterItem-substrings.ta";
import {
    MatchingRuleAssertion,
    _decode_MatchingRuleAssertion,
    _encode_MatchingRuleAssertion,
} from "../DirectoryAbstractService/MatchingRuleAssertion.ta";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
import {
    AttributeTypeAssertion,
    _decode_AttributeTypeAssertion,
    _encode_AttributeTypeAssertion,
} from "../InformationFramework/AttributeTypeAssertion.ta";
import {
    AttributeValueAssertion,
    _decode_AttributeValueAssertion,
    _encode_AttributeValueAssertion,
} from "../InformationFramework/AttributeValueAssertion.ta";
export {
    FilterItem_substrings,
    _decode_FilterItem_substrings,
    _encode_FilterItem_substrings,
} from "../DirectoryAbstractService/FilterItem-substrings.ta";
export {
    MatchingRuleAssertion,
    _decode_MatchingRuleAssertion,
    _encode_MatchingRuleAssertion,
} from "../DirectoryAbstractService/MatchingRuleAssertion.ta";
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
export {
    AttributeTypeAssertion,
    _decode_AttributeTypeAssertion,
    _encode_AttributeTypeAssertion,
} from "../InformationFramework/AttributeTypeAssertion.ta";
export {
    AttributeValueAssertion,
    _decode_AttributeValueAssertion,
    _encode_AttributeValueAssertion,
} from "../InformationFramework/AttributeValueAssertion.ta";

/* START_OF_SYMBOL_DEFINITION FilterItem */
/**
 * @summary FilterItem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterItem  ::=  CHOICE {
 *   equality          [0]  AttributeValueAssertion,
 *   substrings        [1]  SEQUENCE {
 *     type                   ATTRIBUTE.&id({SupportedAttributes}),
 *     strings                SEQUENCE OF CHOICE {
 *       initial           [0]  ATTRIBUTE.&Type
 *                               ({SupportedAttributes}{@substrings.type}),
 *       any               [1]  ATTRIBUTE.&Type
 *                               ({SupportedAttributes}{@substrings.type}),
 *       final             [2]  ATTRIBUTE.&Type
 *                               ({SupportedAttributes}{@substrings.type}),
 *       control                Attribute{{SupportedAttributes}},
 *                     -- Used to specify interpretation of following items
 *       ... },
 *     ... },
 *   greaterOrEqual    [2]  AttributeValueAssertion,
 *   lessOrEqual       [3]  AttributeValueAssertion,
 *   present           [4]  AttributeType,
 *   approximateMatch  [5]  AttributeValueAssertion,
 *   extensibleMatch   [6]  MatchingRuleAssertion,
 *   contextPresent    [7]  AttributeTypeAssertion,
 *   ... }
 * ```
 */
export type FilterItem =
    | { equality: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | { substrings: FilterItem_substrings } /* CHOICE_ALT_ROOT */
    | { greaterOrEqual: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | { lessOrEqual: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | { present: AttributeType } /* CHOICE_ALT_ROOT */
    | { approximateMatch: AttributeValueAssertion } /* CHOICE_ALT_ROOT */
    | { extensibleMatch: MatchingRuleAssertion } /* CHOICE_ALT_ROOT */
    | { contextPresent: AttributeTypeAssertion } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION FilterItem */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterItem */
let _cached_decoder_for_FilterItem: $.ASN1Decoder<FilterItem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterItem */

/* START_OF_SYMBOL_DEFINITION _decode_FilterItem */
/**
 * @summary Decodes an ASN.1 element into a(n) FilterItem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FilterItem} The decoded data structure.
 */
export function _decode_FilterItem(el: _Element) {
    if (!_cached_decoder_for_FilterItem) {
        _cached_decoder_for_FilterItem = $._decode_extensible_choice<FilterItem>(
            {
                "CONTEXT 0": [
                    "equality",
                    $._decode_explicit<AttributeValueAssertion>(
                        () => _decode_AttributeValueAssertion
                    ),
                ],
                "CONTEXT 1": [
                    "substrings",
                    $._decode_explicit<FilterItem_substrings>(
                        () => _decode_FilterItem_substrings
                    ),
                ],
                "CONTEXT 2": [
                    "greaterOrEqual",
                    $._decode_explicit<AttributeValueAssertion>(
                        () => _decode_AttributeValueAssertion
                    ),
                ],
                "CONTEXT 3": [
                    "lessOrEqual",
                    $._decode_explicit<AttributeValueAssertion>(
                        () => _decode_AttributeValueAssertion
                    ),
                ],
                "CONTEXT 4": [
                    "present",
                    $._decode_explicit<AttributeType>(
                        () => _decode_AttributeType
                    ),
                ],
                "CONTEXT 5": [
                    "approximateMatch",
                    $._decode_explicit<AttributeValueAssertion>(
                        () => _decode_AttributeValueAssertion
                    ),
                ],
                "CONTEXT 6": [
                    "extensibleMatch",
                    $._decode_explicit<MatchingRuleAssertion>(
                        () => _decode_MatchingRuleAssertion
                    ),
                ],
                "CONTEXT 7": [
                    "contextPresent",
                    $._decode_explicit<AttributeTypeAssertion>(
                        () => _decode_AttributeTypeAssertion
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_FilterItem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FilterItem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterItem */
let _cached_encoder_for_FilterItem: $.ASN1Encoder<FilterItem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterItem */

/* START_OF_SYMBOL_DEFINITION _encode_FilterItem */
/**
 * @summary Encodes a(n) FilterItem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterItem, encoded as an ASN.1 Element.
 */
export function _encode_FilterItem(
    value: FilterItem,
    elGetter: $.ASN1Encoder<FilterItem>
) {
    if (!_cached_encoder_for_FilterItem) {
        _cached_encoder_for_FilterItem = $._encode_choice<FilterItem>(
            {
                equality: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_AttributeValueAssertion,
                    $.BER
                ),
                substrings: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_FilterItem_substrings,
                    $.BER
                ),
                greaterOrEqual: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_AttributeValueAssertion,
                    $.BER
                ),
                lessOrEqual: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_AttributeValueAssertion,
                    $.BER
                ),
                present: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => _encode_AttributeType,
                    $.BER
                ),
                approximateMatch: $._encode_explicit(
                    _TagClass.context,
                    5,
                    () => _encode_AttributeValueAssertion,
                    $.BER
                ),
                extensibleMatch: $._encode_explicit(
                    _TagClass.context,
                    6,
                    () => _encode_MatchingRuleAssertion,
                    $.BER
                ),
                contextPresent: $._encode_explicit(
                    _TagClass.context,
                    7,
                    () => _encode_AttributeTypeAssertion,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_FilterItem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FilterItem */

/* eslint-enable */
