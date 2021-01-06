/* eslint-disable */
import { ASN1Element as _Element, NumericString } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CountryCode3n */
/**
 * @summary CountryCode3n
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CountryCode3n  ::=  NumericString(SIZE (3)) (CONSTRAINED BY { -- ISO 3166 numeric-3 codes only -- })
 * ```
 */
export type CountryCode3n = NumericString; // NumericString
/* END_OF_SYMBOL_DEFINITION CountryCode3n */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CountryCode3n */
let _cached_decoder_for_CountryCode3n: $.ASN1Decoder<CountryCode3n> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CountryCode3n */

/* START_OF_SYMBOL_DEFINITION _decode_CountryCode3n */
/**
 * @summary Decodes an ASN.1 element into a(n) CountryCode3n
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CountryCode3n} The decoded data structure.
 */
export function _decode_CountryCode3n(el: _Element) {
    if (!_cached_decoder_for_CountryCode3n) {
        _cached_decoder_for_CountryCode3n = $._decodeNumericString;
    }
    return _cached_decoder_for_CountryCode3n(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CountryCode3n */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CountryCode3n */
let _cached_encoder_for_CountryCode3n: $.ASN1Encoder<CountryCode3n> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CountryCode3n */

/* START_OF_SYMBOL_DEFINITION _encode_CountryCode3n */
/**
 * @summary Encodes a(n) CountryCode3n into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CountryCode3n, encoded as an ASN.1 Element.
 */
export function _encode_CountryCode3n(
    value: CountryCode3n,
    elGetter: $.ASN1Encoder<CountryCode3n>
) {
    if (!_cached_encoder_for_CountryCode3n) {
        _cached_encoder_for_CountryCode3n = $._encodeNumericString;
    }
    return _cached_encoder_for_CountryCode3n(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CountryCode3n */

/* eslint-enable */
