/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta";
export {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta";

/* START_OF_SYMBOL_DEFINITION CertificateSerialNumbers */
/**
 * @summary CertificateSerialNumbers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateSerialNumbers  ::=  SEQUENCE SIZE (1..MAX) OF CertificateSerialNumber
 * ```
 */
export type CertificateSerialNumbers = CertificateSerialNumber[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION CertificateSerialNumbers */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateSerialNumbers */
let _cached_decoder_for_CertificateSerialNumbers: $.ASN1Decoder<CertificateSerialNumbers> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateSerialNumbers */

/* START_OF_SYMBOL_DEFINITION _decode_CertificateSerialNumbers */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateSerialNumbers
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateSerialNumbers} The decoded data structure.
 */
export function _decode_CertificateSerialNumbers(el: _Element) {
    if (!_cached_decoder_for_CertificateSerialNumbers) {
        _cached_decoder_for_CertificateSerialNumbers = $._decodeSequenceOf<CertificateSerialNumber>(
            () => _decode_CertificateSerialNumber
        );
    }
    return _cached_decoder_for_CertificateSerialNumbers(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificateSerialNumbers */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateSerialNumbers */
let _cached_encoder_for_CertificateSerialNumbers: $.ASN1Encoder<CertificateSerialNumbers> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateSerialNumbers */

/* START_OF_SYMBOL_DEFINITION _encode_CertificateSerialNumbers */
/**
 * @summary Encodes a(n) CertificateSerialNumbers into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateSerialNumbers, encoded as an ASN.1 Element.
 */
export function _encode_CertificateSerialNumbers(
    value: CertificateSerialNumbers,
    elGetter: $.ASN1Encoder<CertificateSerialNumbers>
) {
    if (!_cached_encoder_for_CertificateSerialNumbers) {
        _cached_encoder_for_CertificateSerialNumbers = $._encodeSequenceOf<CertificateSerialNumber>(
            () => _encode_CertificateSerialNumber,
            $.BER
        );
    }
    return _cached_encoder_for_CertificateSerialNumbers(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificateSerialNumbers */

/* eslint-enable */
