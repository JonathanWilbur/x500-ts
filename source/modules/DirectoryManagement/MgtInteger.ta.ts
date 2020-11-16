/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION MgtInteger */
/**
 * @summary MgtInteger
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtInteger  ::=  INTEGER
 * ```
 */
export type MgtInteger = INTEGER;
/* END_OF_SYMBOL_DEFINITION MgtInteger */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtInteger */
let _cached_decoder_for_MgtInteger: $.ASN1Decoder<MgtInteger> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtInteger */

/* START_OF_SYMBOL_DEFINITION _decode_MgtInteger */
/**
 * @summary Decodes an ASN.1 element into a(n) MgtInteger
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtInteger} The decoded data structure.
 */
export function _decode_MgtInteger(el: _Element) {
    if (!_cached_decoder_for_MgtInteger) {
        _cached_decoder_for_MgtInteger = $._decodeInteger;
    }
    return _cached_decoder_for_MgtInteger(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MgtInteger */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtInteger */
let _cached_encoder_for_MgtInteger: $.ASN1Encoder<MgtInteger> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtInteger */

/* START_OF_SYMBOL_DEFINITION _encode_MgtInteger */
/**
 * @summary Encodes a(n) MgtInteger into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtInteger, encoded as an ASN.1 Element.
 */
export function _encode_MgtInteger(
    value: MgtInteger,
    elGetter: $.ASN1Encoder<MgtInteger>
) {
    if (!_cached_encoder_for_MgtInteger) {
        _cached_encoder_for_MgtInteger = $._encodeInteger;
    }
    return _cached_encoder_for_MgtInteger(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MgtInteger */

/* eslint-enable */
