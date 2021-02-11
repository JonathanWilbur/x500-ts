/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    FilterItem,
    _decode_FilterItem,
    _encode_FilterItem,
} from "../DirectoryAbstractService/FilterItem.ta";
export {
    FilterItem,
    _decode_FilterItem,
    _encode_FilterItem,
} from "../DirectoryAbstractService/FilterItem.ta";

/* START_OF_SYMBOL_DEFINITION Filter */
/**
 * @summary Filter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Filter  ::=  CHOICE {
 *   item  [0]  FilterItem,
 *   and   [1]  SET OF Filter,
 *   or    [2]  SET OF Filter,
 *   not   [3]  Filter,
 *   ... }
 * ```
 */
export type Filter =
    | { item: FilterItem } /* CHOICE_ALT_ROOT */
    | { and: Filter[] } /* CHOICE_ALT_ROOT */
    | { or: Filter[] } /* CHOICE_ALT_ROOT */
    | { not: Filter } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION Filter */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Filter */
let _cached_decoder_for_Filter: $.ASN1Decoder<Filter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Filter */

/* START_OF_SYMBOL_DEFINITION _decode_Filter */
/**
 * @summary Decodes an ASN.1 element into a(n) Filter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Filter} The decoded data structure.
 */
export function _decode_Filter(el: _Element) {
    if (!_cached_decoder_for_Filter) {
        _cached_decoder_for_Filter = $._decode_extensible_choice<Filter>({
            "CONTEXT 0": [
                "item",
                $._decode_explicit<FilterItem>(() => _decode_FilterItem),
            ],
            "CONTEXT 1": [
                "and",
                $._decode_explicit<Filter[]>(() =>
                    $._decodeSetOf<Filter>(() => _decode_Filter)
                ),
            ],
            "CONTEXT 2": [
                "or",
                $._decode_explicit<Filter[]>(() =>
                    $._decodeSetOf<Filter>(() => _decode_Filter)
                ),
            ],
            "CONTEXT 3": [
                "not",
                $._decode_explicit<Filter>(() => _decode_Filter),
            ],
        });
    }
    return _cached_decoder_for_Filter(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Filter */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Filter */
let _cached_encoder_for_Filter: $.ASN1Encoder<Filter> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Filter */

/* START_OF_SYMBOL_DEFINITION _encode_Filter */
/**
 * @summary Encodes a(n) Filter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Filter, encoded as an ASN.1 Element.
 */
export function _encode_Filter(value: Filter, elGetter: $.ASN1Encoder<Filter>) {
    if (!_cached_encoder_for_Filter) {
        _cached_encoder_for_Filter = $._encode_choice<Filter>(
            {
                item: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_FilterItem,
                    $.BER
                ),
                and: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => $._encodeSetOf<Filter>(() => _encode_Filter, $.BER),
                    $.BER
                ),
                or: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => $._encodeSetOf<Filter>(() => _encode_Filter, $.BER),
                    $.BER
                ),
                not: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_Filter,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Filter(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Filter */

/* eslint-enable */
