/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ChannelId */
/**
 * @summary ChannelId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChannelId  ::=  OCTET STRING
 * ```
 */
export type ChannelId = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION ChannelId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ChannelId */
let _cached_decoder_for_ChannelId: $.ASN1Decoder<ChannelId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ChannelId */

/* START_OF_SYMBOL_DEFINITION _decode_ChannelId */
/**
 * @summary Decodes an ASN.1 element into a(n) ChannelId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChannelId} The decoded data structure.
 */
export function _decode_ChannelId(el: _Element) {
    if (!_cached_decoder_for_ChannelId) {
        _cached_decoder_for_ChannelId = $._decodeOctetString;
    }
    return _cached_decoder_for_ChannelId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ChannelId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ChannelId */
let _cached_encoder_for_ChannelId: $.ASN1Encoder<ChannelId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ChannelId */

/* START_OF_SYMBOL_DEFINITION _encode_ChannelId */
/**
 * @summary Encodes a(n) ChannelId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChannelId, encoded as an ASN.1 Element.
 */
export function _encode_ChannelId(
    value: ChannelId,
    elGetter: $.ASN1Encoder<ChannelId>
) {
    if (!_cached_encoder_for_ChannelId) {
        _cached_encoder_for_ChannelId = $._encodeOctetString;
    }
    return _cached_encoder_for_ChannelId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ChannelId */

/* eslint-enable */
