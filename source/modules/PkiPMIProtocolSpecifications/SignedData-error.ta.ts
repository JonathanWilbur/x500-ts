/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_SignedData_error */
export enum _enum_for_SignedData_error {
    noReason = 0,
    signedDataContectTypeExpected = 1,
    wrongSignedDataVersion = 2,
    missingContent = 3,
    missingContentComponent = 4,
    invalidContentComponent = 5,
    unsupportedHashAlgorithm = 6,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SignedData_error */

/* START_OF_SYMBOL_DEFINITION SignedData_error */
/**
 * @summary SignedData_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedData-error  ::=  ENUMERATED {
 *   noReason                           (0),
 *   signedDataContectTypeExpected      (1),
 *   wrongSignedDataVersion             (2),
 *   missingContent                     (3),
 *   missingContentComponent            (4),
 *   invalidContentComponent            (5),
 *   unsupportedHashAlgorithm           (6),
 *   ... }
 * ```@enum {number}
 */
export type SignedData_error = _enum_for_SignedData_error | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION SignedData_error */

/* START_OF_SYMBOL_DEFINITION SignedData_error_noReason */
/**
 * @summary SignedData_error_noReason
 * @constant
 * @type {number}
 */
export const SignedData_error_noReason: SignedData_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SignedData_error_noReason */

/* START_OF_SYMBOL_DEFINITION SignedData_error_signedDataContectTypeExpected */
/**
 * @summary SignedData_error_signedDataContectTypeExpected
 * @constant
 * @type {number}
 */
export const SignedData_error_signedDataContectTypeExpected: SignedData_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SignedData_error_signedDataContectTypeExpected */

/* START_OF_SYMBOL_DEFINITION SignedData_error_wrongSignedDataVersion */
/**
 * @summary SignedData_error_wrongSignedDataVersion
 * @constant
 * @type {number}
 */
export const SignedData_error_wrongSignedDataVersion: SignedData_error = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SignedData_error_wrongSignedDataVersion */

/* START_OF_SYMBOL_DEFINITION SignedData_error_missingContent */
/**
 * @summary SignedData_error_missingContent
 * @constant
 * @type {number}
 */
export const SignedData_error_missingContent: SignedData_error = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SignedData_error_missingContent */

/* START_OF_SYMBOL_DEFINITION SignedData_error_missingContentComponent */
/**
 * @summary SignedData_error_missingContentComponent
 * @constant
 * @type {number}
 */
export const SignedData_error_missingContentComponent: SignedData_error = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SignedData_error_missingContentComponent */

/* START_OF_SYMBOL_DEFINITION SignedData_error_invalidContentComponent */
/**
 * @summary SignedData_error_invalidContentComponent
 * @constant
 * @type {number}
 */
export const SignedData_error_invalidContentComponent: SignedData_error = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SignedData_error_invalidContentComponent */

/* START_OF_SYMBOL_DEFINITION SignedData_error_unsupportedHashAlgorithm */
/**
 * @summary SignedData_error_unsupportedHashAlgorithm
 * @constant
 * @type {number}
 */
export const SignedData_error_unsupportedHashAlgorithm: SignedData_error = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SignedData_error_unsupportedHashAlgorithm */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedData_error */
let _cached_decoder_for_SignedData_error: $.ASN1Decoder<
    SignedData_error
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignedData_error */

/* START_OF_SYMBOL_DEFINITION _decode_SignedData_error */
/**
 * @summary Decodes an ASN.1 element into a(n) SignedData_error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedData_error} The decoded data structure.
 */
export function _decode_SignedData_error(el: _Element) {
    if (!_cached_decoder_for_SignedData_error) {
        _cached_decoder_for_SignedData_error = $._decodeEnumerated;
    }
    return _cached_decoder_for_SignedData_error(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignedData_error */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedData_error */
let _cached_encoder_for_SignedData_error: $.ASN1Encoder<
    SignedData_error
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignedData_error */

/* START_OF_SYMBOL_DEFINITION _encode_SignedData_error */
/**
 * @summary Encodes a(n) SignedData_error into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedData_error, encoded as an ASN.1 Element.
 */
export function _encode_SignedData_error(
    value: SignedData_error,
    elGetter: $.ASN1Encoder<SignedData_error>
) {
    if (!_cached_encoder_for_SignedData_error) {
        _cached_encoder_for_SignedData_error = $._encodeEnumerated;
    }
    return _cached_encoder_for_SignedData_error(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignedData_error */

/* eslint-enable */
