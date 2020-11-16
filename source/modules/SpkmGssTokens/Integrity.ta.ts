/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Integrity */
/**
 * @summary Integrity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Integrity  ::=  BIT STRING
 * ```
 */
export type Integrity = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Integrity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Integrity */
let _cached_decoder_for_Integrity: $.ASN1Decoder<Integrity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Integrity */

/* START_OF_SYMBOL_DEFINITION _decode_Integrity */
/**
 * @summary Decodes an ASN.1 element into a(n) Integrity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Integrity} The decoded data structure.
 */
export function _decode_Integrity(el: _Element) {
    if (!_cached_decoder_for_Integrity) {
        _cached_decoder_for_Integrity = $._decodeBitString;
    }
    return _cached_decoder_for_Integrity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Integrity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Integrity */
let _cached_encoder_for_Integrity: $.ASN1Encoder<Integrity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Integrity */

/* START_OF_SYMBOL_DEFINITION _encode_Integrity */
/**
 * @summary Encodes a(n) Integrity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Integrity, encoded as an ASN.1 Element.
 */
export function _encode_Integrity(
    value: Integrity,
    elGetter: $.ASN1Encoder<Integrity>
) {
    if (!_cached_encoder_for_Integrity) {
        _cached_encoder_for_Integrity = $._encodeBitString;
    }
    return _cached_encoder_for_Integrity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Integrity */

/* eslint-enable */
