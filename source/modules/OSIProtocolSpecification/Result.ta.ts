/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Result */
/**
 * @summary Result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Result  ::=  INTEGER {
 *   acceptance         (0),
 *   user-rejection     (1),
 *   provider-rejection (2)}
 * ```
 */
export type Result = INTEGER;
/* END_OF_SYMBOL_DEFINITION Result */

/* START_OF_SYMBOL_DEFINITION Result_acceptance */
/**
 * @summary Result_acceptance
 * @constant
 * @type {number}
 */
export const Result_acceptance: Result = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Result_acceptance */

/* START_OF_SYMBOL_DEFINITION Result_user_rejection */
/**
 * @summary Result_user_rejection
 * @constant
 * @type {number}
 */
export const Result_user_rejection: Result = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Result_user_rejection */

/* START_OF_SYMBOL_DEFINITION Result_provider_rejection */
/**
 * @summary Result_provider_rejection
 * @constant
 * @type {number}
 */
export const Result_provider_rejection: Result = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Result_provider_rejection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Result */
let _cached_decoder_for_Result: $.ASN1Decoder<Result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Result */

/* START_OF_SYMBOL_DEFINITION _decode_Result */
/**
 * @summary Decodes an ASN.1 element into a(n) Result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Result} The decoded data structure.
 */
export function _decode_Result(el: _Element) {
    if (!_cached_decoder_for_Result) {
        _cached_decoder_for_Result = $._decodeInteger;
    }
    return _cached_decoder_for_Result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Result */
let _cached_encoder_for_Result: $.ASN1Encoder<Result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Result */

/* START_OF_SYMBOL_DEFINITION _encode_Result */
/**
 * @summary Encodes a(n) Result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Result, encoded as an ASN.1 Element.
 */
export function _encode_Result(value: Result, elGetter: $.ASN1Encoder<Result>) {
    if (!_cached_encoder_for_Result) {
        _cached_encoder_for_Result = $._encodeInteger;
    }
    return _cached_encoder_for_Result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Result */

/* eslint-enable */
