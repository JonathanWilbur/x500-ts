/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION EncryptedPdu */
/**
 * @summary EncryptedPdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedPdu  ::=  OCTET STRING
 * ```
 */
export type EncryptedPdu = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION EncryptedPdu */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedPdu */
let _cached_decoder_for_EncryptedPdu: $.ASN1Decoder<EncryptedPdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedPdu */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedPdu */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedPdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedPdu} The decoded data structure.
 */
export function _decode_EncryptedPdu(el: _Element) {
    if (!_cached_decoder_for_EncryptedPdu) {
        _cached_decoder_for_EncryptedPdu = $._decodeOctetString;
    }
    return _cached_decoder_for_EncryptedPdu(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedPdu */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedPdu */
let _cached_encoder_for_EncryptedPdu: $.ASN1Encoder<EncryptedPdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedPdu */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedPdu */
/**
 * @summary Encodes a(n) EncryptedPdu into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedPdu, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedPdu(
    value: EncryptedPdu,
    elGetter: $.ASN1Encoder<EncryptedPdu>
) {
    if (!_cached_encoder_for_EncryptedPdu) {
        _cached_encoder_for_EncryptedPdu = $._encodeOctetString;
    }
    return _cached_encoder_for_EncryptedPdu(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedPdu */

/* eslint-enable */
