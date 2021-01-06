/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AvlSerialNumber */
/**
 * @summary AvlSerialNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AvlSerialNumber  ::=  INTEGER (0..MAX)
 * ```
 */
export type AvlSerialNumber = INTEGER;
/* END_OF_SYMBOL_DEFINITION AvlSerialNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AvlSerialNumber */
let _cached_decoder_for_AvlSerialNumber: $.ASN1Decoder<AvlSerialNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AvlSerialNumber */

/* START_OF_SYMBOL_DEFINITION _decode_AvlSerialNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) AvlSerialNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AvlSerialNumber} The decoded data structure.
 */
export function _decode_AvlSerialNumber(el: _Element) {
    if (!_cached_decoder_for_AvlSerialNumber) {
        _cached_decoder_for_AvlSerialNumber = $._decodeInteger;
    }
    return _cached_decoder_for_AvlSerialNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AvlSerialNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AvlSerialNumber */
let _cached_encoder_for_AvlSerialNumber: $.ASN1Encoder<AvlSerialNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AvlSerialNumber */

/* START_OF_SYMBOL_DEFINITION _encode_AvlSerialNumber */
/**
 * @summary Encodes a(n) AvlSerialNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AvlSerialNumber, encoded as an ASN.1 Element.
 */
export function _encode_AvlSerialNumber(
    value: AvlSerialNumber,
    elGetter: $.ASN1Encoder<AvlSerialNumber>
) {
    if (!_cached_encoder_for_AvlSerialNumber) {
        _cached_encoder_for_AvlSerialNumber = $._encodeInteger;
    }
    return _cached_encoder_for_AvlSerialNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AvlSerialNumber */

/* eslint-enable */
