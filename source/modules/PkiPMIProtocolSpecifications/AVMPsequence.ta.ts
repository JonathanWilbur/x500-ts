/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AVMPsequence */
/**
 * @summary AVMPsequence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AVMPsequence  ::=  INTEGER (1..MAX)
 * ```
 */
export type AVMPsequence = INTEGER;
/* END_OF_SYMBOL_DEFINITION AVMPsequence */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AVMPsequence */
let _cached_decoder_for_AVMPsequence: $.ASN1Decoder<AVMPsequence> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AVMPsequence */

/* START_OF_SYMBOL_DEFINITION _decode_AVMPsequence */
/**
 * @summary Decodes an ASN.1 element into a(n) AVMPsequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AVMPsequence} The decoded data structure.
 */
export function _decode_AVMPsequence(el: _Element) {
    if (!_cached_decoder_for_AVMPsequence) {
        _cached_decoder_for_AVMPsequence = $._decodeInteger;
    }
    return _cached_decoder_for_AVMPsequence(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AVMPsequence */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AVMPsequence */
let _cached_encoder_for_AVMPsequence: $.ASN1Encoder<AVMPsequence> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AVMPsequence */

/* START_OF_SYMBOL_DEFINITION _encode_AVMPsequence */
/**
 * @summary Encodes a(n) AVMPsequence into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AVMPsequence, encoded as an ASN.1 Element.
 */
export function _encode_AVMPsequence(
    value: AVMPsequence,
    elGetter: $.ASN1Encoder<AVMPsequence>
) {
    if (!_cached_encoder_for_AVMPsequence) {
        _cached_encoder_for_AVMPsequence = $._encodeInteger;
    }
    return _cached_encoder_for_AVMPsequence(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AVMPsequence */

/* eslint-enable */
