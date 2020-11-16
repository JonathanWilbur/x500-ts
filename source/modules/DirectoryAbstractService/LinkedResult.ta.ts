/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION LinkedResult */
/**
 * @summary LinkedResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkedResult  ::=  NULL
 * ```
 */
export type LinkedResult = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION LinkedResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LinkedResult */
let _cached_decoder_for_LinkedResult: $.ASN1Decoder<LinkedResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LinkedResult */

/* START_OF_SYMBOL_DEFINITION _decode_LinkedResult */
/**
 * @summary Decodes an ASN.1 element into a(n) LinkedResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LinkedResult} The decoded data structure.
 */
export function _decode_LinkedResult(el: _Element) {
    if (!_cached_decoder_for_LinkedResult) {
        _cached_decoder_for_LinkedResult = $._decodeNull;
    }
    return _cached_decoder_for_LinkedResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LinkedResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LinkedResult */
let _cached_encoder_for_LinkedResult: $.ASN1Encoder<LinkedResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LinkedResult */

/* START_OF_SYMBOL_DEFINITION _encode_LinkedResult */
/**
 * @summary Encodes a(n) LinkedResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LinkedResult, encoded as an ASN.1 Element.
 */
export function _encode_LinkedResult(
    value: LinkedResult,
    elGetter: $.ASN1Encoder<LinkedResult>
) {
    if (!_cached_encoder_for_LinkedResult) {
        _cached_encoder_for_LinkedResult = $._encodeNull;
    }
    return _cached_encoder_for_LinkedResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LinkedResult */

/* eslint-enable */
