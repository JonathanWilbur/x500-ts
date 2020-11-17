/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ProtectionRequest */
/**
 * @summary ProtectionRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionRequest  ::=  INTEGER {none(0), signed(1)}
 * ```
 */
export type ProtectionRequest = INTEGER;
/* END_OF_SYMBOL_DEFINITION ProtectionRequest */

/* START_OF_SYMBOL_DEFINITION ProtectionRequest_none */
/**
 * @summary ProtectionRequest_none
 * @constant
 * @type {number}
 */
export const ProtectionRequest_none: ProtectionRequest = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionRequest_none */

/* START_OF_SYMBOL_DEFINITION none */
/**
 * @summary ProtectionRequest_none
 * @constant
 * @type {number}
 */
export const none: ProtectionRequest = ProtectionRequest_none; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION none */

/* START_OF_SYMBOL_DEFINITION ProtectionRequest_signed */
/**
 * @summary ProtectionRequest_signed
 * @constant
 * @type {number}
 */
export const ProtectionRequest_signed: ProtectionRequest = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ProtectionRequest_signed */

/* START_OF_SYMBOL_DEFINITION signed */
/**
 * @summary ProtectionRequest_signed
 * @constant
 * @type {number}
 */
export const signed: ProtectionRequest = ProtectionRequest_signed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION signed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionRequest */
let _cached_decoder_for_ProtectionRequest: $.ASN1Decoder<
    ProtectionRequest
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectionRequest */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectionRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionRequest} The decoded data structure.
 */
export function _decode_ProtectionRequest(el: _Element) {
    if (!_cached_decoder_for_ProtectionRequest) {
        _cached_decoder_for_ProtectionRequest = $._decodeInteger;
    }
    return _cached_decoder_for_ProtectionRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtectionRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionRequest */
let _cached_encoder_for_ProtectionRequest: $.ASN1Encoder<
    ProtectionRequest
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectionRequest */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectionRequest */
/**
 * @summary Encodes a(n) ProtectionRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionRequest, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionRequest(
    value: ProtectionRequest,
    elGetter: $.ASN1Encoder<ProtectionRequest>
) {
    if (!_cached_encoder_for_ProtectionRequest) {
        _cached_encoder_for_ProtectionRequest = $._encodeInteger;
    }
    return _cached_encoder_for_ProtectionRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectionRequest */

/* eslint-enable */
