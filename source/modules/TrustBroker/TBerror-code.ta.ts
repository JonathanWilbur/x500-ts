/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_TBerror_code */
export enum _enum_for_TBerror_code {
    caCertInvalid = 1,
    unknownCert = 2,
    unknownCertStatus = 3,
    subjectCertRevoked = 4,
    incorrectCert = 5,
    contractExpired = 6,
    pathValidationFailed = 7,
    timeOut = 8,
    other = 99,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_TBerror_code */

/* START_OF_SYMBOL_DEFINITION TBerror_code */
/**
 * @summary TBerror_code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBerror-code ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type TBerror_code = _enum_for_TBerror_code | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION TBerror_code */

/* START_OF_SYMBOL_DEFINITION TBerror_code_caCertInvalid */
/**
 * @summary TBerror_code_caCertInvalid
 * @constant
 * @type {number}
 */
export const TBerror_code_caCertInvalid: TBerror_code = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TBerror_code_caCertInvalid */

/* START_OF_SYMBOL_DEFINITION TBerror_code_unknownCert */
/**
 * @summary TBerror_code_unknownCert
 * @constant
 * @type {number}
 */
export const TBerror_code_unknownCert: TBerror_code = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TBerror_code_unknownCert */

/* START_OF_SYMBOL_DEFINITION TBerror_code_unknownCertStatus */
/**
 * @summary TBerror_code_unknownCertStatus
 * @constant
 * @type {number}
 */
export const TBerror_code_unknownCertStatus: TBerror_code = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TBerror_code_unknownCertStatus */

/* START_OF_SYMBOL_DEFINITION TBerror_code_subjectCertRevoked */
/**
 * @summary TBerror_code_subjectCertRevoked
 * @constant
 * @type {number}
 */
export const TBerror_code_subjectCertRevoked: TBerror_code = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TBerror_code_subjectCertRevoked */

/* START_OF_SYMBOL_DEFINITION TBerror_code_incorrectCert */
/**
 * @summary TBerror_code_incorrectCert
 * @constant
 * @type {number}
 */
export const TBerror_code_incorrectCert: TBerror_code = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TBerror_code_incorrectCert */

/* START_OF_SYMBOL_DEFINITION TBerror_code_contractExpired */
/**
 * @summary TBerror_code_contractExpired
 * @constant
 * @type {number}
 */
export const TBerror_code_contractExpired: TBerror_code = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TBerror_code_contractExpired */

/* START_OF_SYMBOL_DEFINITION TBerror_code_pathValidationFailed */
/**
 * @summary TBerror_code_pathValidationFailed
 * @constant
 * @type {number}
 */
export const TBerror_code_pathValidationFailed: TBerror_code = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TBerror_code_pathValidationFailed */

/* START_OF_SYMBOL_DEFINITION TBerror_code_timeOut */
/**
 * @summary TBerror_code_timeOut
 * @constant
 * @type {number}
 */
export const TBerror_code_timeOut: TBerror_code = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TBerror_code_timeOut */

/* START_OF_SYMBOL_DEFINITION TBerror_code_other */
/**
 * @summary TBerror_code_other
 * @constant
 * @type {number}
 */
export const TBerror_code_other: TBerror_code = 99; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TBerror_code_other */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TBerror_code */
let _cached_decoder_for_TBerror_code: $.ASN1Decoder<TBerror_code> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TBerror_code */

/* START_OF_SYMBOL_DEFINITION _decode_TBerror_code */
/**
 * @summary Decodes an ASN.1 element into a(n) TBerror_code
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBerror_code} The decoded data structure.
 */
export function _decode_TBerror_code(el: _Element) {
    if (!_cached_decoder_for_TBerror_code) {
        _cached_decoder_for_TBerror_code = $._decodeEnumerated;
    }
    return _cached_decoder_for_TBerror_code(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TBerror_code */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TBerror_code */
let _cached_encoder_for_TBerror_code: $.ASN1Encoder<TBerror_code> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TBerror_code */

/* START_OF_SYMBOL_DEFINITION _encode_TBerror_code */
/**
 * @summary Encodes a(n) TBerror_code into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBerror_code, encoded as an ASN.1 Element.
 */
export function _encode_TBerror_code(
    value: TBerror_code,
    elGetter: $.ASN1Encoder<TBerror_code>
) {
    if (!_cached_encoder_for_TBerror_code) {
        _cached_encoder_for_TBerror_code = $._encodeEnumerated;
    }
    return _cached_encoder_for_TBerror_code(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TBerror_code */

/* eslint-enable */
