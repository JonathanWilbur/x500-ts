/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION MgtGeneralizedTime */
/**
 * @summary MgtGeneralizedTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtGeneralizedTime  ::=  GeneralizedTime
 * ```
 */
export type MgtGeneralizedTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION MgtGeneralizedTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtGeneralizedTime */
let _cached_decoder_for_MgtGeneralizedTime: $.ASN1Decoder<
    MgtGeneralizedTime
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtGeneralizedTime */

/* START_OF_SYMBOL_DEFINITION _decode_MgtGeneralizedTime */
/**
 * @summary Decodes an ASN.1 element into a(n) MgtGeneralizedTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtGeneralizedTime} The decoded data structure.
 */
export function _decode_MgtGeneralizedTime(el: _Element) {
    if (!_cached_decoder_for_MgtGeneralizedTime) {
        _cached_decoder_for_MgtGeneralizedTime = $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_MgtGeneralizedTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MgtGeneralizedTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtGeneralizedTime */
let _cached_encoder_for_MgtGeneralizedTime: $.ASN1Encoder<
    MgtGeneralizedTime
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtGeneralizedTime */

/* START_OF_SYMBOL_DEFINITION _encode_MgtGeneralizedTime */
/**
 * @summary Encodes a(n) MgtGeneralizedTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtGeneralizedTime, encoded as an ASN.1 Element.
 */
export function _encode_MgtGeneralizedTime(
    value: MgtGeneralizedTime,
    elGetter: $.ASN1Encoder<MgtGeneralizedTime>
) {
    if (!_cached_encoder_for_MgtGeneralizedTime) {
        _cached_encoder_for_MgtGeneralizedTime = $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_MgtGeneralizedTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MgtGeneralizedTime */

/* eslint-enable */
