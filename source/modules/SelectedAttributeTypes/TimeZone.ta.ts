/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION TimeZone */
/**
 * @summary TimeZone
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeZone  ::=  INTEGER(-12..12)
 * ```
 */
export type TimeZone = INTEGER;
/* END_OF_SYMBOL_DEFINITION TimeZone */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeZone */
let _cached_decoder_for_TimeZone: $.ASN1Decoder<TimeZone> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeZone */

/* START_OF_SYMBOL_DEFINITION _decode_TimeZone */
/**
 * @summary Decodes an ASN.1 element into a(n) TimeZone
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeZone} The decoded data structure.
 */
export function _decode_TimeZone(el: _Element) {
    if (!_cached_decoder_for_TimeZone) {
        _cached_decoder_for_TimeZone = $._decodeInteger;
    }
    return _cached_decoder_for_TimeZone(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TimeZone */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeZone */
let _cached_encoder_for_TimeZone: $.ASN1Encoder<TimeZone> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeZone */

/* START_OF_SYMBOL_DEFINITION _encode_TimeZone */
/**
 * @summary Encodes a(n) TimeZone into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeZone, encoded as an ASN.1 Element.
 */
export function _encode_TimeZone(
    value: TimeZone,
    elGetter: $.ASN1Encoder<TimeZone>
) {
    if (!_cached_encoder_for_TimeZone) {
        _cached_encoder_for_TimeZone = $._encodeInteger;
    }
    return _cached_encoder_for_TimeZone(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TimeZone */

/* eslint-enable */
