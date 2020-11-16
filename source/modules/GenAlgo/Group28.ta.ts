/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Group28 */
/**
 * @summary Group28
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Group28  ::=  INTEGER (28)
 * ```
 */
export type Group28 = INTEGER;
/* END_OF_SYMBOL_DEFINITION Group28 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Group28 */
let _cached_decoder_for_Group28: $.ASN1Decoder<Group28> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Group28 */

/* START_OF_SYMBOL_DEFINITION _decode_Group28 */
/**
 * @summary Decodes an ASN.1 element into a(n) Group28
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Group28} The decoded data structure.
 */
export function _decode_Group28(el: _Element) {
    if (!_cached_decoder_for_Group28) {
        _cached_decoder_for_Group28 = $._decodeInteger;
    }
    return _cached_decoder_for_Group28(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Group28 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Group28 */
let _cached_encoder_for_Group28: $.ASN1Encoder<Group28> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Group28 */

/* START_OF_SYMBOL_DEFINITION _encode_Group28 */
/**
 * @summary Encodes a(n) Group28 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Group28, encoded as an ASN.1 Element.
 */
export function _encode_Group28(
    value: Group28,
    elGetter: $.ASN1Encoder<Group28>
) {
    if (!_cached_encoder_for_Group28) {
        _cached_encoder_for_Group28 = $._encodeInteger;
    }
    return _cached_encoder_for_Group28(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Group28 */

/* eslint-enable */
