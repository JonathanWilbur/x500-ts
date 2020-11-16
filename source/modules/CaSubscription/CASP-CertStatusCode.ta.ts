/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_CASP_CertStatusCode */
export enum _enum_for_CASP_CertStatusCode {
    noReason = 1,
    unknownCert = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CASP_CertStatusCode */

/* START_OF_SYMBOL_DEFINITION CASP_CertStatusCode */
/**
 * @summary CASP_CertStatusCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASP-CertStatusCode  ::=  ENUMERATED {
 *   noReason       (1),
 *   unknownCert    (2),
 *   ... }
 * ```@enum {number}
 */
export type CASP_CertStatusCode = _enum_for_CASP_CertStatusCode | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION CASP_CertStatusCode */

/* START_OF_SYMBOL_DEFINITION CASP_CertStatusCode_noReason */
/**
 * @summary CASP_CertStatusCode_noReason
 * @constant
 * @type {number}
 */
export const CASP_CertStatusCode_noReason: CASP_CertStatusCode = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASP_CertStatusCode_noReason */

/* START_OF_SYMBOL_DEFINITION CASP_CertStatusCode_unknownCert */
/**
 * @summary CASP_CertStatusCode_unknownCert
 * @constant
 * @type {number}
 */
export const CASP_CertStatusCode_unknownCert: CASP_CertStatusCode = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASP_CertStatusCode_unknownCert */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CASP_CertStatusCode */
let _cached_decoder_for_CASP_CertStatusCode: $.ASN1Decoder<
    CASP_CertStatusCode
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CASP_CertStatusCode */

/* START_OF_SYMBOL_DEFINITION _decode_CASP_CertStatusCode */
/**
 * @summary Decodes an ASN.1 element into a(n) CASP_CertStatusCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CASP_CertStatusCode} The decoded data structure.
 */
export function _decode_CASP_CertStatusCode(el: _Element) {
    if (!_cached_decoder_for_CASP_CertStatusCode) {
        _cached_decoder_for_CASP_CertStatusCode = $._decodeEnumerated;
    }
    return _cached_decoder_for_CASP_CertStatusCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CASP_CertStatusCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CASP_CertStatusCode */
let _cached_encoder_for_CASP_CertStatusCode: $.ASN1Encoder<
    CASP_CertStatusCode
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CASP_CertStatusCode */

/* START_OF_SYMBOL_DEFINITION _encode_CASP_CertStatusCode */
/**
 * @summary Encodes a(n) CASP_CertStatusCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CASP_CertStatusCode, encoded as an ASN.1 Element.
 */
export function _encode_CASP_CertStatusCode(
    value: CASP_CertStatusCode,
    elGetter: $.ASN1Encoder<CASP_CertStatusCode>
) {
    if (!_cached_encoder_for_CASP_CertStatusCode) {
        _cached_encoder_for_CASP_CertStatusCode = $._encodeEnumerated;
    }
    return _cached_encoder_for_CASP_CertStatusCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CASP_CertStatusCode */

/* eslint-enable */
