/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION RequestAuthenticationPolicy */
/**
 * @summary RequestAuthenticationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestAuthenticationPolicy  ::=  BIT STRING {none(0), simpleName(1), strong(2)}
 * ```
 */
export type RequestAuthenticationPolicy = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION RequestAuthenticationPolicy */

/* START_OF_SYMBOL_DEFINITION RequestAuthenticationPolicy_none */
/**
 * @summary RequestAuthenticationPolicy_none
 * @constant
 */
export const RequestAuthenticationPolicy_none: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RequestAuthenticationPolicy_none */

/* START_OF_SYMBOL_DEFINITION none */
/**
 * @summary none
 * @constant
 */
export const none: number = RequestAuthenticationPolicy_none; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION none */

/* START_OF_SYMBOL_DEFINITION RequestAuthenticationPolicy_simpleName */
/**
 * @summary RequestAuthenticationPolicy_simpleName
 * @constant
 */
export const RequestAuthenticationPolicy_simpleName: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RequestAuthenticationPolicy_simpleName */

/* START_OF_SYMBOL_DEFINITION simpleName */
/**
 * @summary simpleName
 * @constant
 */
export const simpleName: number = RequestAuthenticationPolicy_simpleName; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION simpleName */

/* START_OF_SYMBOL_DEFINITION RequestAuthenticationPolicy_strong */
/**
 * @summary RequestAuthenticationPolicy_strong
 * @constant
 */
export const RequestAuthenticationPolicy_strong: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION RequestAuthenticationPolicy_strong */

/* START_OF_SYMBOL_DEFINITION strong */
/**
 * @summary strong
 * @constant
 */
export const strong: number = RequestAuthenticationPolicy_strong; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION strong */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestAuthenticationPolicy */
let _cached_decoder_for_RequestAuthenticationPolicy: $.ASN1Decoder<RequestAuthenticationPolicy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestAuthenticationPolicy */

/* START_OF_SYMBOL_DEFINITION _decode_RequestAuthenticationPolicy */
/**
 * @summary Decodes an ASN.1 element into a(n) RequestAuthenticationPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestAuthenticationPolicy} The decoded data structure.
 */
export function _decode_RequestAuthenticationPolicy(el: _Element) {
    if (!_cached_decoder_for_RequestAuthenticationPolicy) {
        _cached_decoder_for_RequestAuthenticationPolicy = $._decodeBitString;
    }
    return _cached_decoder_for_RequestAuthenticationPolicy(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RequestAuthenticationPolicy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestAuthenticationPolicy */
let _cached_encoder_for_RequestAuthenticationPolicy: $.ASN1Encoder<RequestAuthenticationPolicy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestAuthenticationPolicy */

/* START_OF_SYMBOL_DEFINITION _encode_RequestAuthenticationPolicy */
/**
 * @summary Encodes a(n) RequestAuthenticationPolicy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestAuthenticationPolicy, encoded as an ASN.1 Element.
 */
export function _encode_RequestAuthenticationPolicy(
    value: RequestAuthenticationPolicy,
    elGetter: $.ASN1Encoder<RequestAuthenticationPolicy>
) {
    if (!_cached_encoder_for_RequestAuthenticationPolicy) {
        _cached_encoder_for_RequestAuthenticationPolicy = $._encodeBitString;
    }
    return _cached_encoder_for_RequestAuthenticationPolicy(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RequestAuthenticationPolicy */

/* eslint-enable */
