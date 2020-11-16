/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Group14 */
/**
 * @summary Group14
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Group14  ::=  INTEGER (14)
 * ```
 */
export type Group14 = INTEGER;
/* END_OF_SYMBOL_DEFINITION Group14 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Group14 */
let _cached_decoder_for_Group14: $.ASN1Decoder<Group14> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Group14 */

/* START_OF_SYMBOL_DEFINITION _decode_Group14 */
/**
 * @summary Decodes an ASN.1 element into a(n) Group14
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Group14} The decoded data structure.
 */
export function _decode_Group14(el: _Element) {
    if (!_cached_decoder_for_Group14) {
        _cached_decoder_for_Group14 = $._decodeInteger;
    }
    return _cached_decoder_for_Group14(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Group14 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Group14 */
let _cached_encoder_for_Group14: $.ASN1Encoder<Group14> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Group14 */

/* START_OF_SYMBOL_DEFINITION _encode_Group14 */
/**
 * @summary Encodes a(n) Group14 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Group14, encoded as an ASN.1 Element.
 */
export function _encode_Group14(
    value: Group14,
    elGetter: $.ASN1Encoder<Group14>
) {
    if (!_cached_encoder_for_Group14) {
        _cached_encoder_for_Group14 = $._encodeInteger;
    }
    return _cached_encoder_for_Group14(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Group14 */

/* eslint-enable */
