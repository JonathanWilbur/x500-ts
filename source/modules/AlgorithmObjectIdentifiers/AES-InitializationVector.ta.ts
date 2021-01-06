/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AES_InitializationVector */
/**
 * @summary AES_InitializationVector
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AES-InitializationVector  ::=  OCTET STRING (SIZE (16))
 * ```
 */
export type AES_InitializationVector = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION AES_InitializationVector */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AES_InitializationVector */
let _cached_decoder_for_AES_InitializationVector: $.ASN1Decoder<AES_InitializationVector> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AES_InitializationVector */

/* START_OF_SYMBOL_DEFINITION _decode_AES_InitializationVector */
/**
 * @summary Decodes an ASN.1 element into a(n) AES_InitializationVector
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AES_InitializationVector} The decoded data structure.
 */
export function _decode_AES_InitializationVector(el: _Element) {
    if (!_cached_decoder_for_AES_InitializationVector) {
        _cached_decoder_for_AES_InitializationVector = $._decodeOctetString;
    }
    return _cached_decoder_for_AES_InitializationVector(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AES_InitializationVector */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AES_InitializationVector */
let _cached_encoder_for_AES_InitializationVector: $.ASN1Encoder<AES_InitializationVector> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AES_InitializationVector */

/* START_OF_SYMBOL_DEFINITION _encode_AES_InitializationVector */
/**
 * @summary Encodes a(n) AES_InitializationVector into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AES_InitializationVector, encoded as an ASN.1 Element.
 */
export function _encode_AES_InitializationVector(
    value: AES_InitializationVector,
    elGetter: $.ASN1Encoder<AES_InitializationVector>
) {
    if (!_cached_encoder_for_AES_InitializationVector) {
        _cached_encoder_for_AES_InitializationVector = $._encodeOctetString;
    }
    return _cached_encoder_for_AES_InitializationVector(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AES_InitializationVector */

/* eslint-enable */
