/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Group23 */
/**
 * @summary Group23
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Group23  ::=  INTEGER (23)
 * ```
 */
export type Group23 = INTEGER;
/* END_OF_SYMBOL_DEFINITION Group23 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Group23 */
let _cached_decoder_for_Group23: $.ASN1Decoder<Group23> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Group23 */

/* START_OF_SYMBOL_DEFINITION _decode_Group23 */
/**
 * @summary Decodes an ASN.1 element into a(n) Group23
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Group23} The decoded data structure.
 */
export function _decode_Group23(el: _Element) {
    if (!_cached_decoder_for_Group23) {
        _cached_decoder_for_Group23 = $._decodeInteger;
    }
    return _cached_decoder_for_Group23(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Group23 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Group23 */
let _cached_encoder_for_Group23: $.ASN1Encoder<Group23> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Group23 */

/* START_OF_SYMBOL_DEFINITION _encode_Group23 */
/**
 * @summary Encodes a(n) Group23 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Group23, encoded as an ASN.1 Element.
 */
export function _encode_Group23(
    value: Group23,
    elGetter: $.ASN1Encoder<Group23>
) {
    if (!_cached_encoder_for_Group23) {
        _cached_encoder_for_Group23 = $._encodeInteger;
    }
    return _cached_encoder_for_Group23(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Group23 */

/* eslint-enable */
