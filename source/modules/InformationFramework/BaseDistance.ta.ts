/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION BaseDistance */
/**
 * @summary BaseDistance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BaseDistance  ::=  INTEGER(0..MAX)
 * ```
 */
export type BaseDistance = INTEGER;
/* END_OF_SYMBOL_DEFINITION BaseDistance */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BaseDistance */
let _cached_decoder_for_BaseDistance: $.ASN1Decoder<BaseDistance> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BaseDistance */

/* START_OF_SYMBOL_DEFINITION _decode_BaseDistance */
/**
 * @summary Decodes an ASN.1 element into a(n) BaseDistance
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BaseDistance} The decoded data structure.
 */
export function _decode_BaseDistance(el: _Element) {
    if (!_cached_decoder_for_BaseDistance) {
        _cached_decoder_for_BaseDistance = $._decodeInteger;
    }
    return _cached_decoder_for_BaseDistance(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BaseDistance */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BaseDistance */
let _cached_encoder_for_BaseDistance: $.ASN1Encoder<BaseDistance> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BaseDistance */

/* START_OF_SYMBOL_DEFINITION _encode_BaseDistance */
/**
 * @summary Encodes a(n) BaseDistance into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BaseDistance, encoded as an ASN.1 Element.
 */
export function _encode_BaseDistance(
    value: BaseDistance,
    elGetter: $.ASN1Encoder<BaseDistance>
) {
    if (!_cached_encoder_for_BaseDistance) {
        _cached_encoder_for_BaseDistance = $._encodeInteger;
    }
    return _cached_encoder_for_BaseDistance(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BaseDistance */

/* eslint-enable */
