/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Random_Integer */
/**
 * @summary Random_Integer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Random-Integer  ::=  BIT STRING
 * ```
 */
export type Random_Integer = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Random_Integer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Random_Integer */
let _cached_decoder_for_Random_Integer: $.ASN1Decoder<
    Random_Integer
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Random_Integer */

/* START_OF_SYMBOL_DEFINITION _decode_Random_Integer */
/**
 * @summary Decodes an ASN.1 element into a(n) Random_Integer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Random_Integer} The decoded data structure.
 */
export function _decode_Random_Integer(el: _Element) {
    if (!_cached_decoder_for_Random_Integer) {
        _cached_decoder_for_Random_Integer = $._decodeBitString;
    }
    return _cached_decoder_for_Random_Integer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Random_Integer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Random_Integer */
let _cached_encoder_for_Random_Integer: $.ASN1Encoder<
    Random_Integer
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Random_Integer */

/* START_OF_SYMBOL_DEFINITION _encode_Random_Integer */
/**
 * @summary Encodes a(n) Random_Integer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Random_Integer, encoded as an ASN.1 Element.
 */
export function _encode_Random_Integer(
    value: Random_Integer,
    elGetter: $.ASN1Encoder<Random_Integer>
) {
    if (!_cached_encoder_for_Random_Integer) {
        _cached_encoder_for_Random_Integer = $._encodeBitString;
    }
    return _cached_encoder_for_Random_Integer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Random_Integer */

/* eslint-enable */
