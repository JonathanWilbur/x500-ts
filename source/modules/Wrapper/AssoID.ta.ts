/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AssoID */
/**
 * @summary AssoID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssoID  ::=  INTEGER (0..32767)
 * ```
 */
export type AssoID = INTEGER;
/* END_OF_SYMBOL_DEFINITION AssoID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssoID */
let _cached_decoder_for_AssoID: $.ASN1Decoder<AssoID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssoID */

/* START_OF_SYMBOL_DEFINITION _decode_AssoID */
/**
 * @summary Decodes an ASN.1 element into a(n) AssoID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssoID} The decoded data structure.
 */
export function _decode_AssoID(el: _Element) {
    if (!_cached_decoder_for_AssoID) {
        _cached_decoder_for_AssoID = $._decodeInteger;
    }
    return _cached_decoder_for_AssoID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AssoID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssoID */
let _cached_encoder_for_AssoID: $.ASN1Encoder<AssoID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssoID */

/* START_OF_SYMBOL_DEFINITION _encode_AssoID */
/**
 * @summary Encodes a(n) AssoID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssoID, encoded as an ASN.1 Element.
 */
export function _encode_AssoID(value: AssoID, elGetter: $.ASN1Encoder<AssoID>) {
    if (!_cached_encoder_for_AssoID) {
        _cached_encoder_for_AssoID = $._encodeInteger;
    }
    return _cached_encoder_for_AssoID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AssoID */

/* eslint-enable */
