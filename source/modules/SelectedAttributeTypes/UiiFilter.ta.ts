/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UiiFilter,
    _decode_UiiFilter,
    _encode_UiiFilter,
} from "../SelectedAttributeTypes/UiiFilter.ta";
import {
    UiiItem,
    _decode_UiiItem,
    _encode_UiiItem,
} from "../SelectedAttributeTypes/UiiItem.ta";
export {
    UiiFilter,
    _decode_UiiFilter,
    _encode_UiiFilter,
} from "../SelectedAttributeTypes/UiiFilter.ta";
export {
    UiiItem,
    _decode_UiiItem,
    _encode_UiiItem,
} from "../SelectedAttributeTypes/UiiItem.ta";

/* START_OF_SYMBOL_DEFINITION UiiFilter */
// TODO: CHECK_RECURSIVE_DEFINITION
/**
 * @summary UiiFilter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFilter  ::=  CHOICE {
 *   item  [0]  UiiItem,
 *   and   [1]  SET OF UiiFilter,
 *   or    [2]  SET OF UiiFilter,
 *   not   [3]  UiiFilter }
 * ```
 */
export type UiiFilter =
    | { item: UiiItem } /* CHOICE_ALT_ROOT */
    | { and: UiiFilter[] } /* CHOICE_ALT_ROOT */
    | { or: UiiFilter[] } /* CHOICE_ALT_ROOT */
    | { not: UiiFilter } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION UiiFilter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UiiFilter */
let _cached_decoder_for_UiiFilter: $.ASN1Decoder<UiiFilter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UiiFilter */

/* START_OF_SYMBOL_DEFINITION _decode_UiiFilter */
/**
 * @summary Decodes an ASN.1 element into a(n) UiiFilter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UiiFilter} The decoded data structure.
 */
export function _decode_UiiFilter(el: _Element) {
    if (!_cached_decoder_for_UiiFilter) {
        _cached_decoder_for_UiiFilter = $._decode_inextensible_choice<
            UiiFilter
        >({
            "CONTEXT 0": [
                "item",
                $._decode_explicit<UiiItem>(() => _decode_UiiItem),
            ],
            "CONTEXT 1": [
                "and",
                $._decode_explicit<UiiFilter[]>(() =>
                    $._decodeSetOf<UiiFilter>(() => _decode_UiiFilter)
                ),
            ],
            "CONTEXT 2": [
                "or",
                $._decode_explicit<UiiFilter[]>(() =>
                    $._decodeSetOf<UiiFilter>(() => _decode_UiiFilter)
                ),
            ],
            "CONTEXT 3": [
                "not",
                $._decode_explicit<UiiFilter>(() => _decode_UiiFilter),
            ],
        });
    }
    return _cached_decoder_for_UiiFilter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UiiFilter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UiiFilter */
let _cached_encoder_for_UiiFilter: $.ASN1Encoder<UiiFilter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UiiFilter */

/* START_OF_SYMBOL_DEFINITION _encode_UiiFilter */
/**
 * @summary Encodes a(n) UiiFilter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UiiFilter, encoded as an ASN.1 Element.
 */
export function _encode_UiiFilter(
    value: UiiFilter,
    elGetter: $.ASN1Encoder<UiiFilter>
) {
    if (!_cached_encoder_for_UiiFilter) {
        _cached_encoder_for_UiiFilter = $._encode_choice<UiiFilter>(
            {
                item: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_UiiItem,
                    $.BER
                ),
                and: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSetOf<UiiFilter>(
                            () => _encode_UiiFilter,
                            $.BER
                        ),
                    $.BER
                ),
                or: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSetOf<UiiFilter>(
                            () => _encode_UiiFilter,
                            $.BER
                        ),
                    $.BER
                ),
                not: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_UiiFilter,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_UiiFilter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UiiFilter */

/* eslint-enable */
