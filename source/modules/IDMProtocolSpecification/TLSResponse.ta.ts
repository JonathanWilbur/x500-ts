/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_TLSResponse */
export enum _enum_for_TLSResponse {
    success = 0,
    operationsError = 1,
    protocolError = 2,
    unavailable = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_TLSResponse */

/* START_OF_SYMBOL_DEFINITION TLSResponse */
/**
 * @summary TLSResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TLSResponse  ::=  ENUMERATED {
 *   success         (0),
 *   operationsError (1),
 *   protocolError   (2),
 *   unavailable     (3),
 *   ...}
 * ```@enum {number}
 */
export type TLSResponse = _enum_for_TLSResponse | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION TLSResponse */

/* START_OF_SYMBOL_DEFINITION TLSResponse_success */
/**
 * @summary TLSResponse_success
 * @constant
 * @type {number}
 */
export const TLSResponse_success: TLSResponse = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TLSResponse_success */

/* START_OF_SYMBOL_DEFINITION success */
/**
 * @summary success
 * @constant
 * @type {number}
 */
export const success: TLSResponse = TLSResponse_success; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION success */

/* START_OF_SYMBOL_DEFINITION TLSResponse_operationsError */
/**
 * @summary TLSResponse_operationsError
 * @constant
 * @type {number}
 */
export const TLSResponse_operationsError: TLSResponse = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TLSResponse_operationsError */

/* START_OF_SYMBOL_DEFINITION operationsError */
/**
 * @summary operationsError
 * @constant
 * @type {number}
 */
export const operationsError: TLSResponse = TLSResponse_operationsError; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION operationsError */

/* START_OF_SYMBOL_DEFINITION TLSResponse_protocolError */
/**
 * @summary TLSResponse_protocolError
 * @constant
 * @type {number}
 */
export const TLSResponse_protocolError: TLSResponse = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TLSResponse_protocolError */

/* START_OF_SYMBOL_DEFINITION protocolError */
/**
 * @summary protocolError
 * @constant
 * @type {number}
 */
export const protocolError: TLSResponse = TLSResponse_protocolError; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION protocolError */

/* START_OF_SYMBOL_DEFINITION TLSResponse_unavailable */
/**
 * @summary TLSResponse_unavailable
 * @constant
 * @type {number}
 */
export const TLSResponse_unavailable: TLSResponse = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TLSResponse_unavailable */

/* START_OF_SYMBOL_DEFINITION unavailable */
/**
 * @summary unavailable
 * @constant
 * @type {number}
 */
export const unavailable: TLSResponse = TLSResponse_unavailable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unavailable */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TLSResponse */
let _cached_decoder_for_TLSResponse: $.ASN1Decoder<TLSResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TLSResponse */

/* START_OF_SYMBOL_DEFINITION _decode_TLSResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) TLSResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TLSResponse} The decoded data structure.
 */
export function _decode_TLSResponse(el: _Element) {
    if (!_cached_decoder_for_TLSResponse) {
        _cached_decoder_for_TLSResponse = $._decodeEnumerated;
    }
    return _cached_decoder_for_TLSResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TLSResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TLSResponse */
let _cached_encoder_for_TLSResponse: $.ASN1Encoder<TLSResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TLSResponse */

/* START_OF_SYMBOL_DEFINITION _encode_TLSResponse */
/**
 * @summary Encodes a(n) TLSResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLSResponse, encoded as an ASN.1 Element.
 */
export function _encode_TLSResponse(
    value: TLSResponse,
    elGetter: $.ASN1Encoder<TLSResponse>
) {
    if (!_cached_encoder_for_TLSResponse) {
        _cached_encoder_for_TLSResponse = $._encodeEnumerated;
    }
    return _cached_encoder_for_TLSResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TLSResponse */

/* eslint-enable */
