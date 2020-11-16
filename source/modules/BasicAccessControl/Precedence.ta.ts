/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Precedence */
/**
 * @summary Precedence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Precedence  ::=  INTEGER(0..255,...)
 * ```
 */
export type Precedence = INTEGER;
/* END_OF_SYMBOL_DEFINITION Precedence */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Precedence */
let _cached_decoder_for_Precedence: $.ASN1Decoder<Precedence> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Precedence */

/* START_OF_SYMBOL_DEFINITION _decode_Precedence */
/**
 * @summary Decodes an ASN.1 element into a(n) Precedence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Precedence} The decoded data structure.
 */
export function _decode_Precedence(el: _Element) {
    if (!_cached_decoder_for_Precedence) {
        _cached_decoder_for_Precedence = $._decodeInteger;
    }
    return _cached_decoder_for_Precedence(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Precedence */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Precedence */
let _cached_encoder_for_Precedence: $.ASN1Encoder<Precedence> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Precedence */

/* START_OF_SYMBOL_DEFINITION _encode_Precedence */
/**
 * @summary Encodes a(n) Precedence into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Precedence, encoded as an ASN.1 Element.
 */
export function _encode_Precedence(
    value: Precedence,
    elGetter: $.ASN1Encoder<Precedence>
) {
    if (!_cached_encoder_for_Precedence) {
        _cached_encoder_for_Precedence = $._encodeInteger;
    }
    return _cached_encoder_for_Precedence(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Precedence */

/* eslint-enable */
