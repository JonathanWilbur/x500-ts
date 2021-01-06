/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AltSignatureValue */
/**
 * @summary AltSignatureValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AltSignatureValue  ::=  BIT STRING
 * ```
 */
export type AltSignatureValue = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION AltSignatureValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AltSignatureValue */
let _cached_decoder_for_AltSignatureValue: $.ASN1Decoder<AltSignatureValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AltSignatureValue */

/* START_OF_SYMBOL_DEFINITION _decode_AltSignatureValue */
/**
 * @summary Decodes an ASN.1 element into a(n) AltSignatureValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AltSignatureValue} The decoded data structure.
 */
export function _decode_AltSignatureValue(el: _Element) {
    if (!_cached_decoder_for_AltSignatureValue) {
        _cached_decoder_for_AltSignatureValue = $._decodeBitString;
    }
    return _cached_decoder_for_AltSignatureValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AltSignatureValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AltSignatureValue */
let _cached_encoder_for_AltSignatureValue: $.ASN1Encoder<AltSignatureValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AltSignatureValue */

/* START_OF_SYMBOL_DEFINITION _encode_AltSignatureValue */
/**
 * @summary Encodes a(n) AltSignatureValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AltSignatureValue, encoded as an ASN.1 Element.
 */
export function _encode_AltSignatureValue(
    value: AltSignatureValue,
    elGetter: $.ASN1Encoder<AltSignatureValue>
) {
    if (!_cached_encoder_for_AltSignatureValue) {
        _cached_encoder_for_AltSignatureValue = $._encodeBitString;
    }
    return _cached_encoder_for_AltSignatureValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AltSignatureValue */

/* eslint-enable */
