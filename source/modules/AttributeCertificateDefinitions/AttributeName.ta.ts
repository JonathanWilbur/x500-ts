/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AttributeName */
/**
 * @summary AttributeName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeName  ::=  UTF8String(SIZE (1..MAX))
 * ```
 */
export type AttributeName = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION AttributeName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeName */
let _cached_decoder_for_AttributeName: $.ASN1Decoder<
    AttributeName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeName */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeName */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeName} The decoded data structure.
 */
export function _decode_AttributeName(el: _Element) {
    if (!_cached_decoder_for_AttributeName) {
        _cached_decoder_for_AttributeName = $._decodeUTF8String;
    }
    return _cached_decoder_for_AttributeName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeName */
let _cached_encoder_for_AttributeName: $.ASN1Encoder<
    AttributeName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeName */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeName */
/**
 * @summary Encodes a(n) AttributeName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeName, encoded as an ASN.1 Element.
 */
export function _encode_AttributeName(
    value: AttributeName,
    elGetter: $.ASN1Encoder<AttributeName>
) {
    if (!_cached_encoder_for_AttributeName) {
        _cached_encoder_for_AttributeName = $._encodeUTF8String;
    }
    return _cached_encoder_for_AttributeName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeName */

/* eslint-enable */
