/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Release_response_reason */
/**
 * @summary Release_response_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Release-response-reason  ::=  INTEGER {normal(0)}
 * ```
 */
export type Release_response_reason = INTEGER;
/* END_OF_SYMBOL_DEFINITION Release_response_reason */

/* START_OF_SYMBOL_DEFINITION Release_response_reason_normal */
/**
 * @summary Release_response_reason_normal
 * @constant
 * @type {number}
 */
export const Release_response_reason_normal: Release_response_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Release_response_reason_normal */

/* START_OF_SYMBOL_DEFINITION normal */
/**
 * @summary Release_response_reason_normal
 * @constant
 * @type {number}
 */
export const normal: Release_response_reason = Release_response_reason_normal; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION normal */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Release_response_reason */
let _cached_decoder_for_Release_response_reason: $.ASN1Decoder<Release_response_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Release_response_reason */

/* START_OF_SYMBOL_DEFINITION _decode_Release_response_reason */
/**
 * @summary Decodes an ASN.1 element into a(n) Release_response_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Release_response_reason} The decoded data structure.
 */
export function _decode_Release_response_reason(el: _Element) {
    if (!_cached_decoder_for_Release_response_reason) {
        _cached_decoder_for_Release_response_reason = $._decodeInteger;
    }
    return _cached_decoder_for_Release_response_reason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Release_response_reason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Release_response_reason */
let _cached_encoder_for_Release_response_reason: $.ASN1Encoder<Release_response_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Release_response_reason */

/* START_OF_SYMBOL_DEFINITION _encode_Release_response_reason */
/**
 * @summary Encodes a(n) Release_response_reason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Release_response_reason, encoded as an ASN.1 Element.
 */
export function _encode_Release_response_reason(
    value: Release_response_reason,
    elGetter: $.ASN1Encoder<Release_response_reason>
) {
    if (!_cached_encoder_for_Release_response_reason) {
        _cached_encoder_for_Release_response_reason = $._encodeInteger;
    }
    return _cached_encoder_for_Release_response_reason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Release_response_reason */

/* eslint-enable */
