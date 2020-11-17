/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Release_request_reason */
/**
 * @summary Release_request_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Release-request-reason  ::=  INTEGER {normal(0)}
 * ```
 */
export type Release_request_reason = INTEGER;
/* END_OF_SYMBOL_DEFINITION Release_request_reason */

/* START_OF_SYMBOL_DEFINITION Release_request_reason_normal */
/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export const Release_request_reason_normal: Release_request_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Release_request_reason_normal */

/* START_OF_SYMBOL_DEFINITION normal */
/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export const normal: Release_request_reason = Release_request_reason_normal; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION normal */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Release_request_reason */
let _cached_decoder_for_Release_request_reason: $.ASN1Decoder<
    Release_request_reason
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Release_request_reason */

/* START_OF_SYMBOL_DEFINITION _decode_Release_request_reason */
/**
 * @summary Decodes an ASN.1 element into a(n) Release_request_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Release_request_reason} The decoded data structure.
 */
export function _decode_Release_request_reason(el: _Element) {
    if (!_cached_decoder_for_Release_request_reason) {
        _cached_decoder_for_Release_request_reason = $._decodeInteger;
    }
    return _cached_decoder_for_Release_request_reason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Release_request_reason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Release_request_reason */
let _cached_encoder_for_Release_request_reason: $.ASN1Encoder<
    Release_request_reason
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Release_request_reason */

/* START_OF_SYMBOL_DEFINITION _encode_Release_request_reason */
/**
 * @summary Encodes a(n) Release_request_reason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Release_request_reason, encoded as an ASN.1 Element.
 */
export function _encode_Release_request_reason(
    value: Release_request_reason,
    elGetter: $.ASN1Encoder<Release_request_reason>
) {
    if (!_cached_encoder_for_Release_request_reason) {
        _cached_encoder_for_Release_request_reason = $._encodeInteger;
    }
    return _cached_encoder_for_Release_request_reason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Release_request_reason */

/* eslint-enable */
