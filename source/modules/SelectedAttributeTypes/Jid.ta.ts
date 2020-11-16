/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Jid */
/**
 * @summary Jid
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Jid  ::=  UTF8String (CONSTRAINED BY { / * Conforms to the format of a jabber identifier. * / })
 * ```
 */
export type Jid = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION Jid */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Jid */
let _cached_decoder_for_Jid: $.ASN1Decoder<Jid> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Jid */

/* START_OF_SYMBOL_DEFINITION _decode_Jid */
/**
 * @summary Decodes an ASN.1 element into a(n) Jid
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Jid} The decoded data structure.
 */
export function _decode_Jid(el: _Element) {
    if (!_cached_decoder_for_Jid) {
        _cached_decoder_for_Jid = $._decodeUTF8String;
    }
    return _cached_decoder_for_Jid(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Jid */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Jid */
let _cached_encoder_for_Jid: $.ASN1Encoder<Jid> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Jid */

/* START_OF_SYMBOL_DEFINITION _encode_Jid */
/**
 * @summary Encodes a(n) Jid into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Jid, encoded as an ASN.1 Element.
 */
export function _encode_Jid(value: Jid, elGetter: $.ASN1Encoder<Jid>) {
    if (!_cached_encoder_for_Jid) {
        _cached_encoder_for_Jid = $._encodeUTF8String;
    }
    return _cached_encoder_for_Jid(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Jid */

/* eslint-enable */
