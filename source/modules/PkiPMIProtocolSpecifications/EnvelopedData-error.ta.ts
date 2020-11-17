/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_EnvelopedData_error */
export enum _enum_for_EnvelopedData_error {
    noReason = 0,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_EnvelopedData_error */

/* START_OF_SYMBOL_DEFINITION EnvelopedData_error */
/**
 * @summary EnvelopedData_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnvelopedData-error  ::=  ENUMERATED {
 *   noReason                           (0),
 *   ... }
 * ```@enum {number}
 */
export type EnvelopedData_error = _enum_for_EnvelopedData_error | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION EnvelopedData_error */

/* START_OF_SYMBOL_DEFINITION EnvelopedData_error_noReason */
/**
 * @summary EnvelopedData_error_noReason
 * @constant
 * @type {number}
 */
export const EnvelopedData_error_noReason: EnvelopedData_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EnvelopedData_error_noReason */

/* START_OF_SYMBOL_DEFINITION noReason */
/**
 * @summary noReason
 * @constant
 * @type {number}
 */
export const noReason: EnvelopedData_error = EnvelopedData_error_noReason; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noReason */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EnvelopedData_error */
let _cached_decoder_for_EnvelopedData_error: $.ASN1Decoder<
    EnvelopedData_error
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EnvelopedData_error */

/* START_OF_SYMBOL_DEFINITION _decode_EnvelopedData_error */
/**
 * @summary Decodes an ASN.1 element into a(n) EnvelopedData_error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnvelopedData_error} The decoded data structure.
 */
export function _decode_EnvelopedData_error(el: _Element) {
    if (!_cached_decoder_for_EnvelopedData_error) {
        _cached_decoder_for_EnvelopedData_error = $._decodeEnumerated;
    }
    return _cached_decoder_for_EnvelopedData_error(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EnvelopedData_error */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EnvelopedData_error */
let _cached_encoder_for_EnvelopedData_error: $.ASN1Encoder<
    EnvelopedData_error
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EnvelopedData_error */

/* START_OF_SYMBOL_DEFINITION _encode_EnvelopedData_error */
/**
 * @summary Encodes a(n) EnvelopedData_error into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnvelopedData_error, encoded as an ASN.1 Element.
 */
export function _encode_EnvelopedData_error(
    value: EnvelopedData_error,
    elGetter: $.ASN1Encoder<EnvelopedData_error>
) {
    if (!_cached_encoder_for_EnvelopedData_error) {
        _cached_encoder_for_EnvelopedData_error = $._encodeEnumerated;
    }
    return _cached_encoder_for_EnvelopedData_error(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EnvelopedData_error */

/* eslint-enable */
