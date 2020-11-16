/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CountryCode3c */
/**
 * @summary CountryCode3c
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CountryCode3c  ::=  PrintableString(SIZE (3)) (CONSTRAINED BY { -- ISO 3166 alpha-3 codes only -- })
 * ```
 */
export type CountryCode3c = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION CountryCode3c */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CountryCode3c */
let _cached_decoder_for_CountryCode3c: $.ASN1Decoder<
    CountryCode3c
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CountryCode3c */

/* START_OF_SYMBOL_DEFINITION _decode_CountryCode3c */
/**
 * @summary Decodes an ASN.1 element into a(n) CountryCode3c
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CountryCode3c} The decoded data structure.
 */
export function _decode_CountryCode3c(el: _Element) {
    if (!_cached_decoder_for_CountryCode3c) {
        _cached_decoder_for_CountryCode3c = $._decodePrintableString;
    }
    return _cached_decoder_for_CountryCode3c(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CountryCode3c */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CountryCode3c */
let _cached_encoder_for_CountryCode3c: $.ASN1Encoder<
    CountryCode3c
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CountryCode3c */

/* START_OF_SYMBOL_DEFINITION _encode_CountryCode3c */
/**
 * @summary Encodes a(n) CountryCode3c into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CountryCode3c, encoded as an ASN.1 Element.
 */
export function _encode_CountryCode3c(
    value: CountryCode3c,
    elGetter: $.ASN1Encoder<CountryCode3c>
) {
    if (!_cached_encoder_for_CountryCode3c) {
        _cached_encoder_for_CountryCode3c = $._encodePrintableString;
    }
    return _cached_encoder_for_CountryCode3c(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CountryCode3c */

/* eslint-enable */
