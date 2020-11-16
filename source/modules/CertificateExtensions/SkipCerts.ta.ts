/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION SkipCerts */
/**
 * @summary SkipCerts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SkipCerts  ::=  INTEGER(0..MAX)
 * ```
 */
export type SkipCerts = INTEGER;
/* END_OF_SYMBOL_DEFINITION SkipCerts */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SkipCerts */
let _cached_decoder_for_SkipCerts: $.ASN1Decoder<SkipCerts> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SkipCerts */

/* START_OF_SYMBOL_DEFINITION _decode_SkipCerts */
/**
 * @summary Decodes an ASN.1 element into a(n) SkipCerts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SkipCerts} The decoded data structure.
 */
export function _decode_SkipCerts(el: _Element) {
    if (!_cached_decoder_for_SkipCerts) {
        _cached_decoder_for_SkipCerts = $._decodeInteger;
    }
    return _cached_decoder_for_SkipCerts(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SkipCerts */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SkipCerts */
let _cached_encoder_for_SkipCerts: $.ASN1Encoder<SkipCerts> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SkipCerts */

/* START_OF_SYMBOL_DEFINITION _encode_SkipCerts */
/**
 * @summary Encodes a(n) SkipCerts into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SkipCerts, encoded as an ASN.1 Element.
 */
export function _encode_SkipCerts(
    value: SkipCerts,
    elGetter: $.ASN1Encoder<SkipCerts>
) {
    if (!_cached_encoder_for_SkipCerts) {
        _cached_encoder_for_SkipCerts = $._encodeInteger;
    }
    return _cached_encoder_for_SkipCerts(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SkipCerts */

/* eslint-enable */
