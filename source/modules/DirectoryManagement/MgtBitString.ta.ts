/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION MgtBitString */
/**
 * @summary MgtBitString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtBitString  ::=  BIT STRING
 * ```
 */
export type MgtBitString = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION MgtBitString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtBitString */
let _cached_decoder_for_MgtBitString: $.ASN1Decoder<MgtBitString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtBitString */

/* START_OF_SYMBOL_DEFINITION _decode_MgtBitString */
/**
 * @summary Decodes an ASN.1 element into a(n) MgtBitString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtBitString} The decoded data structure.
 */
export function _decode_MgtBitString(el: _Element) {
    if (!_cached_decoder_for_MgtBitString) {
        _cached_decoder_for_MgtBitString = $._decodeBitString;
    }
    return _cached_decoder_for_MgtBitString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MgtBitString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtBitString */
let _cached_encoder_for_MgtBitString: $.ASN1Encoder<MgtBitString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtBitString */

/* START_OF_SYMBOL_DEFINITION _encode_MgtBitString */
/**
 * @summary Encodes a(n) MgtBitString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtBitString, encoded as an ASN.1 Element.
 */
export function _encode_MgtBitString(
    value: MgtBitString,
    elGetter: $.ASN1Encoder<MgtBitString>
) {
    if (!_cached_encoder_for_MgtBitString) {
        _cached_encoder_for_MgtBitString = $._encodeBitString;
    }
    return _cached_encoder_for_MgtBitString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MgtBitString */

/* eslint-enable */
