/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "../AttributeCertificateDefinitions/AttributeCertificate.ta";
export {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "../AttributeCertificateDefinitions/AttributeCertificate.ta";

/* START_OF_SYMBOL_DEFINITION AttCertPath */
/**
 * @summary AttCertPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttCertPath  ::=  SEQUENCE OF AttributeCertificate
 * ```
 */
export type AttCertPath = AttributeCertificate[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AttCertPath */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttCertPath */
let _cached_decoder_for_AttCertPath: $.ASN1Decoder<AttCertPath> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttCertPath */

/* START_OF_SYMBOL_DEFINITION _decode_AttCertPath */
/**
 * @summary Decodes an ASN.1 element into a(n) AttCertPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttCertPath} The decoded data structure.
 */
export function _decode_AttCertPath(el: _Element) {
    if (!_cached_decoder_for_AttCertPath) {
        _cached_decoder_for_AttCertPath = $._decodeSequenceOf<
            AttributeCertificate
        >(() => _decode_AttributeCertificate);
    }
    return _cached_decoder_for_AttCertPath(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttCertPath */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttCertPath */
let _cached_encoder_for_AttCertPath: $.ASN1Encoder<AttCertPath> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttCertPath */

/* START_OF_SYMBOL_DEFINITION _encode_AttCertPath */
/**
 * @summary Encodes a(n) AttCertPath into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttCertPath, encoded as an ASN.1 Element.
 */
export function _encode_AttCertPath(
    value: AttCertPath,
    elGetter: $.ASN1Encoder<AttCertPath>
) {
    if (!_cached_encoder_for_AttCertPath) {
        _cached_encoder_for_AttCertPath = $._encodeSequenceOf<
            AttributeCertificate
        >(() => _encode_AttributeCertificate, $.BER);
    }
    return _cached_encoder_for_AttCertPath(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttCertPath */

/* eslint-enable */
