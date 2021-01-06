/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
export { SupportedAttributes } from "../InformationFramework/SupportedAttributes.osa";

/* START_OF_SYMBOL_DEFINITION FilterItem_substrings_strings_Item */
/**
 * @summary FilterItem_substrings_strings_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterItem-substrings-strings-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type FilterItem_substrings_strings_Item =
    | { initial: _Element } /* CHOICE_ALT_ROOT */
    | { any_: _Element } /* CHOICE_ALT_ROOT */
    | { final: _Element } /* CHOICE_ALT_ROOT */
    | { control: Attribute } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION FilterItem_substrings_strings_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterItem_substrings_strings_Item */
let _cached_decoder_for_FilterItem_substrings_strings_Item: $.ASN1Decoder<FilterItem_substrings_strings_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterItem_substrings_strings_Item */

/* START_OF_SYMBOL_DEFINITION _decode_FilterItem_substrings_strings_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) FilterItem_substrings_strings_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FilterItem_substrings_strings_Item} The decoded data structure.
 */
export function _decode_FilterItem_substrings_strings_Item(el: _Element) {
    if (!_cached_decoder_for_FilterItem_substrings_strings_Item) {
        _cached_decoder_for_FilterItem_substrings_strings_Item = $._decode_extensible_choice<FilterItem_substrings_strings_Item>(
            {
                "CONTEXT 0": [
                    "initial",
                    $._decode_explicit<_Element>(() => $._decodeAny),
                ],
                "CONTEXT 1": [
                    "any_",
                    $._decode_explicit<_Element>(() => $._decodeAny),
                ],
                "CONTEXT 2": [
                    "final",
                    $._decode_explicit<_Element>(() => $._decodeAny),
                ],
                "UNIVERSAL 16": ["control", _decode_Attribute],
            }
        );
    }
    return _cached_decoder_for_FilterItem_substrings_strings_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FilterItem_substrings_strings_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterItem_substrings_strings_Item */
let _cached_encoder_for_FilterItem_substrings_strings_Item: $.ASN1Encoder<FilterItem_substrings_strings_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterItem_substrings_strings_Item */

/* START_OF_SYMBOL_DEFINITION _encode_FilterItem_substrings_strings_Item */
/**
 * @summary Encodes a(n) FilterItem_substrings_strings_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterItem_substrings_strings_Item, encoded as an ASN.1 Element.
 */
export function _encode_FilterItem_substrings_strings_Item(
    value: FilterItem_substrings_strings_Item,
    elGetter: $.ASN1Encoder<FilterItem_substrings_strings_Item>
) {
    if (!_cached_encoder_for_FilterItem_substrings_strings_Item) {
        _cached_encoder_for_FilterItem_substrings_strings_Item = $._encode_choice<FilterItem_substrings_strings_Item>(
            {
                initial: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeAny,
                    $.BER
                ),
                any_: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => $._encodeAny,
                    $.BER
                ),
                final: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => $._encodeAny,
                    $.BER
                ),
                control: _encode_Attribute,
            },
            $.BER
        );
    }
    return _cached_encoder_for_FilterItem_substrings_strings_Item(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_FilterItem_substrings_strings_Item */

/* eslint-enable */
