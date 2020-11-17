/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_PwdResponseValue_error */
export enum _enum_for_PwdResponseValue_error {
    passwordExpired = 0,
    changeAfterReset = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_PwdResponseValue_error */

/* START_OF_SYMBOL_DEFINITION PwdResponseValue_error */
/**
 * @summary PwdResponseValue_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdResponseValue-error ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type PwdResponseValue_error =
    | _enum_for_PwdResponseValue_error
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION PwdResponseValue_error */

/* START_OF_SYMBOL_DEFINITION PwdResponseValue_error_passwordExpired */
/**
 * @summary PwdResponseValue_error_passwordExpired
 * @constant
 * @type {number}
 */
export const PwdResponseValue_error_passwordExpired: PwdResponseValue_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PwdResponseValue_error_passwordExpired */

/* START_OF_SYMBOL_DEFINITION passwordExpired */
/**
 * @summary passwordExpired
 * @constant
 * @type {number}
 */
export const passwordExpired: PwdResponseValue_error = PwdResponseValue_error_passwordExpired; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION passwordExpired */

/* START_OF_SYMBOL_DEFINITION PwdResponseValue_error_changeAfterReset */
/**
 * @summary PwdResponseValue_error_changeAfterReset
 * @constant
 * @type {number}
 */
export const PwdResponseValue_error_changeAfterReset: PwdResponseValue_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PwdResponseValue_error_changeAfterReset */

/* START_OF_SYMBOL_DEFINITION changeAfterReset */
/**
 * @summary changeAfterReset
 * @constant
 * @type {number}
 */
export const changeAfterReset: PwdResponseValue_error = PwdResponseValue_error_changeAfterReset; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION changeAfterReset */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdResponseValue_error */
let _cached_decoder_for_PwdResponseValue_error: $.ASN1Decoder<
    PwdResponseValue_error
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdResponseValue_error */

/* START_OF_SYMBOL_DEFINITION _decode_PwdResponseValue_error */
/**
 * @summary Decodes an ASN.1 element into a(n) PwdResponseValue_error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdResponseValue_error} The decoded data structure.
 */
export function _decode_PwdResponseValue_error(el: _Element) {
    if (!_cached_decoder_for_PwdResponseValue_error) {
        _cached_decoder_for_PwdResponseValue_error = $._decodeEnumerated;
    }
    return _cached_decoder_for_PwdResponseValue_error(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PwdResponseValue_error */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdResponseValue_error */
let _cached_encoder_for_PwdResponseValue_error: $.ASN1Encoder<
    PwdResponseValue_error
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdResponseValue_error */

/* START_OF_SYMBOL_DEFINITION _encode_PwdResponseValue_error */
/**
 * @summary Encodes a(n) PwdResponseValue_error into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdResponseValue_error, encoded as an ASN.1 Element.
 */
export function _encode_PwdResponseValue_error(
    value: PwdResponseValue_error,
    elGetter: $.ASN1Encoder<PwdResponseValue_error>
) {
    if (!_cached_encoder_for_PwdResponseValue_error) {
        _cached_encoder_for_PwdResponseValue_error = $._encodeEnumerated;
    }
    return _cached_encoder_for_PwdResponseValue_error(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PwdResponseValue_error */

/* eslint-enable */
