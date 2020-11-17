/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ErrorProtectionRequest */
/**
 * @summary ErrorProtectionRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorProtectionRequest  ::=  INTEGER {none(0), signed(1)}
 * ```
 */
export type ErrorProtectionRequest = INTEGER;
/* END_OF_SYMBOL_DEFINITION ErrorProtectionRequest */

/* START_OF_SYMBOL_DEFINITION ErrorProtectionRequest_none */
/**
 * @summary ErrorProtectionRequest_none
 * @constant
 * @type {number}
 */
export const ErrorProtectionRequest_none: ErrorProtectionRequest = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ErrorProtectionRequest_none */

/* START_OF_SYMBOL_DEFINITION none */
/**
 * @summary ErrorProtectionRequest_none
 * @constant
 * @type {number}
 */
export const none: ErrorProtectionRequest = ErrorProtectionRequest_none; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION none */

/* START_OF_SYMBOL_DEFINITION ErrorProtectionRequest_signed */
/**
 * @summary ErrorProtectionRequest_signed
 * @constant
 * @type {number}
 */
export const ErrorProtectionRequest_signed: ErrorProtectionRequest = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ErrorProtectionRequest_signed */

/* START_OF_SYMBOL_DEFINITION signed */
/**
 * @summary ErrorProtectionRequest_signed
 * @constant
 * @type {number}
 */
export const signed: ErrorProtectionRequest = ErrorProtectionRequest_signed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION signed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorProtectionRequest */
let _cached_decoder_for_ErrorProtectionRequest: $.ASN1Decoder<
    ErrorProtectionRequest
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorProtectionRequest */

/* START_OF_SYMBOL_DEFINITION _decode_ErrorProtectionRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) ErrorProtectionRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ErrorProtectionRequest} The decoded data structure.
 */
export function _decode_ErrorProtectionRequest(el: _Element) {
    if (!_cached_decoder_for_ErrorProtectionRequest) {
        _cached_decoder_for_ErrorProtectionRequest = $._decodeInteger;
    }
    return _cached_decoder_for_ErrorProtectionRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ErrorProtectionRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorProtectionRequest */
let _cached_encoder_for_ErrorProtectionRequest: $.ASN1Encoder<
    ErrorProtectionRequest
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorProtectionRequest */

/* START_OF_SYMBOL_DEFINITION _encode_ErrorProtectionRequest */
/**
 * @summary Encodes a(n) ErrorProtectionRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorProtectionRequest, encoded as an ASN.1 Element.
 */
export function _encode_ErrorProtectionRequest(
    value: ErrorProtectionRequest,
    elGetter: $.ASN1Encoder<ErrorProtectionRequest>
) {
    if (!_cached_encoder_for_ErrorProtectionRequest) {
        _cached_encoder_for_ErrorProtectionRequest = $._encodeInteger;
    }
    return _cached_encoder_for_ErrorProtectionRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ErrorProtectionRequest */

/* eslint-enable */
