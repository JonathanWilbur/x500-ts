/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION TimeStamp */
/**
 * @summary TimeStamp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStamp  ::=  GeneralizedTime
 * ```
 */
export type TimeStamp = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION TimeStamp */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeStamp */
let _cached_decoder_for_TimeStamp: $.ASN1Decoder<TimeStamp> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeStamp */

/* START_OF_SYMBOL_DEFINITION _decode_TimeStamp */
/**
 * @summary Decodes an ASN.1 element into a(n) TimeStamp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeStamp} The decoded data structure.
 */
export function _decode_TimeStamp(el: _Element) {
    if (!_cached_decoder_for_TimeStamp) {
        _cached_decoder_for_TimeStamp = $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_TimeStamp(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TimeStamp */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeStamp */
let _cached_encoder_for_TimeStamp: $.ASN1Encoder<TimeStamp> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeStamp */

/* START_OF_SYMBOL_DEFINITION _encode_TimeStamp */
/**
 * @summary Encodes a(n) TimeStamp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeStamp, encoded as an ASN.1 Element.
 */
export function _encode_TimeStamp(
    value: TimeStamp,
    elGetter: $.ASN1Encoder<TimeStamp>
) {
    if (!_cached_encoder_for_TimeStamp) {
        _cached_encoder_for_TimeStamp = $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_TimeStamp(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TimeStamp */

/* eslint-enable */
