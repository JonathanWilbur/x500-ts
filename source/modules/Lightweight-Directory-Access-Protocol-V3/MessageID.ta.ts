/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION MessageID */
/**
 * @summary MessageID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageID  ::=  INTEGER(0..maxInt)
 * ```
 */
export type MessageID = INTEGER;
/* END_OF_SYMBOL_DEFINITION MessageID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageID */
let _cached_decoder_for_MessageID: $.ASN1Decoder<MessageID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageID */

/* START_OF_SYMBOL_DEFINITION _decode_MessageID */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageID} The decoded data structure.
 */
export function _decode_MessageID(el: _Element) {
    if (!_cached_decoder_for_MessageID) {
        _cached_decoder_for_MessageID = $._decodeInteger;
    }
    return _cached_decoder_for_MessageID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageID */
let _cached_encoder_for_MessageID: $.ASN1Encoder<MessageID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageID */

/* START_OF_SYMBOL_DEFINITION _encode_MessageID */
/**
 * @summary Encodes a(n) MessageID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageID, encoded as an ASN.1 Element.
 */
export function _encode_MessageID(
    value: MessageID,
    elGetter: $.ASN1Encoder<MessageID>
) {
    if (!_cached_encoder_for_MessageID) {
        _cached_encoder_for_MessageID = $._encodeInteger;
    }
    return _cached_encoder_for_MessageID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageID */

/* eslint-enable */
