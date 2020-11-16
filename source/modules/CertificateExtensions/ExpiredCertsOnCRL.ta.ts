/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ExpiredCertsOnCRL */
/**
 * @summary ExpiredCertsOnCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExpiredCertsOnCRL  ::=  GeneralizedTime
 * ```
 */
export type ExpiredCertsOnCRL = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION ExpiredCertsOnCRL */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExpiredCertsOnCRL */
let _cached_decoder_for_ExpiredCertsOnCRL: $.ASN1Decoder<
    ExpiredCertsOnCRL
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExpiredCertsOnCRL */

/* START_OF_SYMBOL_DEFINITION _decode_ExpiredCertsOnCRL */
/**
 * @summary Decodes an ASN.1 element into a(n) ExpiredCertsOnCRL
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExpiredCertsOnCRL} The decoded data structure.
 */
export function _decode_ExpiredCertsOnCRL(el: _Element) {
    if (!_cached_decoder_for_ExpiredCertsOnCRL) {
        _cached_decoder_for_ExpiredCertsOnCRL = $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_ExpiredCertsOnCRL(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExpiredCertsOnCRL */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExpiredCertsOnCRL */
let _cached_encoder_for_ExpiredCertsOnCRL: $.ASN1Encoder<
    ExpiredCertsOnCRL
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExpiredCertsOnCRL */

/* START_OF_SYMBOL_DEFINITION _encode_ExpiredCertsOnCRL */
/**
 * @summary Encodes a(n) ExpiredCertsOnCRL into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExpiredCertsOnCRL, encoded as an ASN.1 Element.
 */
export function _encode_ExpiredCertsOnCRL(
    value: ExpiredCertsOnCRL,
    elGetter: $.ASN1Encoder<ExpiredCertsOnCRL>
) {
    if (!_cached_encoder_for_ExpiredCertsOnCRL) {
        _cached_encoder_for_ExpiredCertsOnCRL = $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_ExpiredCertsOnCRL(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExpiredCertsOnCRL */

/* eslint-enable */
