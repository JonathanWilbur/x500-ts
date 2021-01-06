/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AssertionValue */
/**
 * @summary AssertionValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssertionValue  ::=  OCTET STRING
 * ```
 */
export type AssertionValue = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION AssertionValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssertionValue */
let _cached_decoder_for_AssertionValue: $.ASN1Decoder<AssertionValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssertionValue */

/* START_OF_SYMBOL_DEFINITION _decode_AssertionValue */
/**
 * @summary Decodes an ASN.1 element into a(n) AssertionValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssertionValue} The decoded data structure.
 */
export function _decode_AssertionValue(el: _Element) {
    if (!_cached_decoder_for_AssertionValue) {
        _cached_decoder_for_AssertionValue = $._decodeOctetString;
    }
    return _cached_decoder_for_AssertionValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AssertionValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssertionValue */
let _cached_encoder_for_AssertionValue: $.ASN1Encoder<AssertionValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssertionValue */

/* START_OF_SYMBOL_DEFINITION _encode_AssertionValue */
/**
 * @summary Encodes a(n) AssertionValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssertionValue, encoded as an ASN.1 Element.
 */
export function _encode_AssertionValue(
    value: AssertionValue,
    elGetter: $.ASN1Encoder<AssertionValue>
) {
    if (!_cached_encoder_for_AssertionValue) {
        _cached_encoder_for_AssertionValue = $._encodeOctetString;
    }
    return _cached_encoder_for_AssertionValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AssertionValue */

/* eslint-enable */
