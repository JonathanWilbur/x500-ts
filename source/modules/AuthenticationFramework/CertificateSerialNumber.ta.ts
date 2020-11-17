/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CertificateSerialNumber */
/**
 * @summary CertificateSerialNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateSerialNumber  ::=  INTEGER
 * ```
 */
export type CertificateSerialNumber = OCTET_STRING;
/* END_OF_SYMBOL_DEFINITION CertificateSerialNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateSerialNumber */
let _cached_decoder_for_CertificateSerialNumber: $.ASN1Decoder<
    CertificateSerialNumber
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateSerialNumber */

/* START_OF_SYMBOL_DEFINITION _decode_CertificateSerialNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateSerialNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateSerialNumber} The decoded data structure.
 */
export function _decode_CertificateSerialNumber(el: _Element) {
    if (!_cached_decoder_for_CertificateSerialNumber) {
        _cached_decoder_for_CertificateSerialNumber = $._decodeBigInt;
    }
    return _cached_decoder_for_CertificateSerialNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificateSerialNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateSerialNumber */
let _cached_encoder_for_CertificateSerialNumber: $.ASN1Encoder<
    CertificateSerialNumber
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateSerialNumber */

/* START_OF_SYMBOL_DEFINITION _encode_CertificateSerialNumber */
/**
 * @summary Encodes a(n) CertificateSerialNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateSerialNumber, encoded as an ASN.1 Element.
 */
export function _encode_CertificateSerialNumber(
    value: CertificateSerialNumber,
    elGetter: $.ASN1Encoder<CertificateSerialNumber>
) {
    if (!_cached_encoder_for_CertificateSerialNumber) {
        _cached_encoder_for_CertificateSerialNumber = $._encodeBigInt;
    }
    return _cached_encoder_for_CertificateSerialNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificateSerialNumber */

/* eslint-enable */
