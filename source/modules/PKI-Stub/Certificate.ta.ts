/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../PKI-Stub/SIGNED.ta";
import {
    TBSCertificate,
    _decode_TBSCertificate,
    _encode_TBSCertificate,
} from "../PKI-Stub/TBSCertificate.ta";
export {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../PKI-Stub/SIGNED.ta";
export {
    TBSCertificate,
    _decode_TBSCertificate,
    _encode_TBSCertificate,
} from "../PKI-Stub/TBSCertificate.ta";

/* START_OF_SYMBOL_DEFINITION Certificate */
/**
 * @summary Certificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Certificate  ::=  SIGNED{TBSCertificate}
 * ```
 */
export type Certificate = SIGNED<TBSCertificate>; // DefinedType
/* END_OF_SYMBOL_DEFINITION Certificate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Certificate */
let _cached_decoder_for_Certificate: $.ASN1Decoder<Certificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Certificate */

/* START_OF_SYMBOL_DEFINITION _decode_Certificate */
/**
 * @summary Decodes an ASN.1 element into a(n) Certificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Certificate} The decoded data structure.
 */
export function _decode_Certificate(el: _Element) {
    if (!_cached_decoder_for_Certificate) {
        _cached_decoder_for_Certificate = _get_decoder_for_SIGNED<
            TBSCertificate
        >(_decode_TBSCertificate);
    }
    return _cached_decoder_for_Certificate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Certificate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Certificate */
let _cached_encoder_for_Certificate: $.ASN1Encoder<Certificate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Certificate */

/* START_OF_SYMBOL_DEFINITION _encode_Certificate */
/**
 * @summary Encodes a(n) Certificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Certificate, encoded as an ASN.1 Element.
 */
export function _encode_Certificate(
    value: Certificate,
    elGetter: $.ASN1Encoder<Certificate>
) {
    if (!_cached_encoder_for_Certificate) {
        _cached_encoder_for_Certificate = _get_encoder_for_SIGNED<
            TBSCertificate
        >(_encode_TBSCertificate);
    }
    return _cached_encoder_for_Certificate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Certificate */

/* eslint-enable */
