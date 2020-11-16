/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AttributeDescription */
/**
 * @summary AttributeDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeDescription  ::=  UTF8String(SIZE (1..MAX))
 * ```
 */
export type AttributeDescription = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION AttributeDescription */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeDescription */
let _cached_decoder_for_AttributeDescription: $.ASN1Decoder<
    AttributeDescription
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeDescription */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeDescription */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeDescription} The decoded data structure.
 */
export function _decode_AttributeDescription(el: _Element) {
    if (!_cached_decoder_for_AttributeDescription) {
        _cached_decoder_for_AttributeDescription = $._decodeUTF8String;
    }
    return _cached_decoder_for_AttributeDescription(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeDescription */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeDescription */
let _cached_encoder_for_AttributeDescription: $.ASN1Encoder<
    AttributeDescription
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeDescription */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeDescription */
/**
 * @summary Encodes a(n) AttributeDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeDescription, encoded as an ASN.1 Element.
 */
export function _encode_AttributeDescription(
    value: AttributeDescription,
    elGetter: $.ASN1Encoder<AttributeDescription>
) {
    if (!_cached_encoder_for_AttributeDescription) {
        _cached_encoder_for_AttributeDescription = $._encodeUTF8String;
    }
    return _cached_encoder_for_AttributeDescription(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeDescription */

/* eslint-enable */
