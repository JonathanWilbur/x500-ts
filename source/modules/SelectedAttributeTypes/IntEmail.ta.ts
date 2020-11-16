/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION IntEmail */
/**
 * @summary IntEmail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntEmail  ::=  UTF8String (CONSTRAINED BY { -- Conforms to the format of an (internationalized) email address. -- })
 * ```
 */
export type IntEmail = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION IntEmail */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IntEmail */
let _cached_decoder_for_IntEmail: $.ASN1Decoder<IntEmail> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IntEmail */

/* START_OF_SYMBOL_DEFINITION _decode_IntEmail */
/**
 * @summary Decodes an ASN.1 element into a(n) IntEmail
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IntEmail} The decoded data structure.
 */
export function _decode_IntEmail(el: _Element) {
    if (!_cached_decoder_for_IntEmail) {
        _cached_decoder_for_IntEmail = $._decodeUTF8String;
    }
    return _cached_decoder_for_IntEmail(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IntEmail */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IntEmail */
let _cached_encoder_for_IntEmail: $.ASN1Encoder<IntEmail> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IntEmail */

/* START_OF_SYMBOL_DEFINITION _encode_IntEmail */
/**
 * @summary Encodes a(n) IntEmail into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntEmail, encoded as an ASN.1 Element.
 */
export function _encode_IntEmail(
    value: IntEmail,
    elGetter: $.ASN1Encoder<IntEmail>
) {
    if (!_cached_encoder_for_IntEmail) {
        _cached_encoder_for_IntEmail = $._encodeUTF8String;
    }
    return _cached_encoder_for_IntEmail(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IntEmail */

/* eslint-enable */
