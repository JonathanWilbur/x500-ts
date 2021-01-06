/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_PwdResponse_error */
export enum _enum_for_PwdResponse_error {
    passwordExpired = 0,
    changeAfterReset = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_PwdResponse_error */

/* START_OF_SYMBOL_DEFINITION PwdResponse_error */
/**
 * @summary PwdResponse_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdResponse-error ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type PwdResponse_error = _enum_for_PwdResponse_error | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION PwdResponse_error */

/* START_OF_SYMBOL_DEFINITION PwdResponse_error_passwordExpired */
/**
 * @summary PwdResponse_error_passwordExpired
 * @constant
 * @type {number}
 */
export const PwdResponse_error_passwordExpired: PwdResponse_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PwdResponse_error_passwordExpired */

/* START_OF_SYMBOL_DEFINITION passwordExpired */
/**
 * @summary passwordExpired
 * @constant
 * @type {number}
 */
export const passwordExpired: PwdResponse_error = PwdResponse_error_passwordExpired; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION passwordExpired */

/* START_OF_SYMBOL_DEFINITION PwdResponse_error_changeAfterReset */
/**
 * @summary PwdResponse_error_changeAfterReset
 * @constant
 * @type {number}
 */
export const PwdResponse_error_changeAfterReset: PwdResponse_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PwdResponse_error_changeAfterReset */

/* START_OF_SYMBOL_DEFINITION changeAfterReset */
/**
 * @summary changeAfterReset
 * @constant
 * @type {number}
 */
export const changeAfterReset: PwdResponse_error = PwdResponse_error_changeAfterReset; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION changeAfterReset */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdResponse_error */
let _cached_decoder_for_PwdResponse_error: $.ASN1Decoder<PwdResponse_error> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdResponse_error */

/* START_OF_SYMBOL_DEFINITION _decode_PwdResponse_error */
/**
 * @summary Decodes an ASN.1 element into a(n) PwdResponse_error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdResponse_error} The decoded data structure.
 */
export function _decode_PwdResponse_error(el: _Element) {
    if (!_cached_decoder_for_PwdResponse_error) {
        _cached_decoder_for_PwdResponse_error = $._decodeEnumerated;
    }
    return _cached_decoder_for_PwdResponse_error(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PwdResponse_error */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdResponse_error */
let _cached_encoder_for_PwdResponse_error: $.ASN1Encoder<PwdResponse_error> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdResponse_error */

/* START_OF_SYMBOL_DEFINITION _encode_PwdResponse_error */
/**
 * @summary Encodes a(n) PwdResponse_error into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdResponse_error, encoded as an ASN.1 Element.
 */
export function _encode_PwdResponse_error(
    value: PwdResponse_error,
    elGetter: $.ASN1Encoder<PwdResponse_error>
) {
    if (!_cached_encoder_for_PwdResponse_error) {
        _cached_encoder_for_PwdResponse_error = $._encodeEnumerated;
    }
    return _cached_encoder_for_PwdResponse_error(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PwdResponse_error */

/* eslint-enable */
