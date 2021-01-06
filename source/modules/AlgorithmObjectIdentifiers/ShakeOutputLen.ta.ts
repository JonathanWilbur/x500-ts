/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ShakeOutputLen */
/**
 * @summary ShakeOutputLen
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ShakeOutputLen  ::=  INTEGER
 * ```
 */
export type ShakeOutputLen = INTEGER;
/* END_OF_SYMBOL_DEFINITION ShakeOutputLen */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ShakeOutputLen */
let _cached_decoder_for_ShakeOutputLen: $.ASN1Decoder<ShakeOutputLen> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ShakeOutputLen */

/* START_OF_SYMBOL_DEFINITION _decode_ShakeOutputLen */
/**
 * @summary Decodes an ASN.1 element into a(n) ShakeOutputLen
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ShakeOutputLen} The decoded data structure.
 */
export function _decode_ShakeOutputLen(el: _Element) {
    if (!_cached_decoder_for_ShakeOutputLen) {
        _cached_decoder_for_ShakeOutputLen = $._decodeInteger;
    }
    return _cached_decoder_for_ShakeOutputLen(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ShakeOutputLen */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ShakeOutputLen */
let _cached_encoder_for_ShakeOutputLen: $.ASN1Encoder<ShakeOutputLen> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ShakeOutputLen */

/* START_OF_SYMBOL_DEFINITION _encode_ShakeOutputLen */
/**
 * @summary Encodes a(n) ShakeOutputLen into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShakeOutputLen, encoded as an ASN.1 Element.
 */
export function _encode_ShakeOutputLen(
    value: ShakeOutputLen,
    elGetter: $.ASN1Encoder<ShakeOutputLen>
) {
    if (!_cached_encoder_for_ShakeOutputLen) {
        _cached_encoder_for_ShakeOutputLen = $._encodeInteger;
    }
    return _cached_encoder_for_ShakeOutputLen(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ShakeOutputLen */

/* eslint-enable */
