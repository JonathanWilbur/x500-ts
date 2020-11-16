/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION LinkId */
/**
 * @summary LinkId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkId  ::=  INTEGER
 * ```
 */
export type LinkId = INTEGER;
/* END_OF_SYMBOL_DEFINITION LinkId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LinkId */
let _cached_decoder_for_LinkId: $.ASN1Decoder<LinkId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LinkId */

/* START_OF_SYMBOL_DEFINITION _decode_LinkId */
/**
 * @summary Decodes an ASN.1 element into a(n) LinkId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LinkId} The decoded data structure.
 */
export function _decode_LinkId(el: _Element) {
    if (!_cached_decoder_for_LinkId) {
        _cached_decoder_for_LinkId = $._decodeInteger;
    }
    return _cached_decoder_for_LinkId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LinkId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LinkId */
let _cached_encoder_for_LinkId: $.ASN1Encoder<LinkId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LinkId */

/* START_OF_SYMBOL_DEFINITION _encode_LinkId */
/**
 * @summary Encodes a(n) LinkId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LinkId, encoded as an ASN.1 Element.
 */
export function _encode_LinkId(value: LinkId, elGetter: $.ASN1Encoder<LinkId>) {
    if (!_cached_encoder_for_LinkId) {
        _cached_encoder_for_LinkId = $._encodeInteger;
    }
    return _cached_encoder_for_LinkId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LinkId */

/* eslint-enable */
