/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION SearchArgumentData_subset */
/**
 * @summary SearchArgumentData_subset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchArgumentData-subset ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type SearchArgumentData_subset = INTEGER;
/* END_OF_SYMBOL_DEFINITION SearchArgumentData_subset */

/* START_OF_SYMBOL_DEFINITION SearchArgumentData_subset_baseObject */
/**
 * @summary SearchArgumentData_subset_baseObject
 * @constant
 * @type {number}
 */
export const SearchArgumentData_subset_baseObject: SearchArgumentData_subset = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchArgumentData_subset_baseObject */

/* START_OF_SYMBOL_DEFINITION SearchArgumentData_subset_oneLevel */
/**
 * @summary SearchArgumentData_subset_oneLevel
 * @constant
 * @type {number}
 */
export const SearchArgumentData_subset_oneLevel: SearchArgumentData_subset = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchArgumentData_subset_oneLevel */

/* START_OF_SYMBOL_DEFINITION SearchArgumentData_subset_wholeSubtree */
/**
 * @summary SearchArgumentData_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export const SearchArgumentData_subset_wholeSubtree: SearchArgumentData_subset = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchArgumentData_subset_wholeSubtree */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchArgumentData_subset */
let _cached_decoder_for_SearchArgumentData_subset: $.ASN1Decoder<
    SearchArgumentData_subset
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchArgumentData_subset */

/* START_OF_SYMBOL_DEFINITION _decode_SearchArgumentData_subset */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchArgumentData_subset
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchArgumentData_subset} The decoded data structure.
 */
export function _decode_SearchArgumentData_subset(el: _Element) {
    if (!_cached_decoder_for_SearchArgumentData_subset) {
        _cached_decoder_for_SearchArgumentData_subset = $._decodeInteger;
    }
    return _cached_decoder_for_SearchArgumentData_subset(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchArgumentData_subset */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchArgumentData_subset */
let _cached_encoder_for_SearchArgumentData_subset: $.ASN1Encoder<
    SearchArgumentData_subset
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchArgumentData_subset */

/* START_OF_SYMBOL_DEFINITION _encode_SearchArgumentData_subset */
/**
 * @summary Encodes a(n) SearchArgumentData_subset into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchArgumentData_subset, encoded as an ASN.1 Element.
 */
export function _encode_SearchArgumentData_subset(
    value: SearchArgumentData_subset,
    elGetter: $.ASN1Encoder<SearchArgumentData_subset>
) {
    if (!_cached_encoder_for_SearchArgumentData_subset) {
        _cached_encoder_for_SearchArgumentData_subset = $._encodeInteger;
    }
    return _cached_encoder_for_SearchArgumentData_subset(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchArgumentData_subset */

/* eslint-enable */
