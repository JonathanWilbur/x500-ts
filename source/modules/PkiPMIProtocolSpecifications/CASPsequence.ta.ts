/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CASPsequence */
/**
 * @summary CASPsequence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASPsequence  ::=  INTEGER (1..MAX)
 * ```
 */
export type CASPsequence = INTEGER;
/* END_OF_SYMBOL_DEFINITION CASPsequence */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CASPsequence */
let _cached_decoder_for_CASPsequence: $.ASN1Decoder<CASPsequence> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CASPsequence */

/* START_OF_SYMBOL_DEFINITION _decode_CASPsequence */
/**
 * @summary Decodes an ASN.1 element into a(n) CASPsequence
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CASPsequence} The decoded data structure.
 */
export function _decode_CASPsequence(el: _Element) {
    if (!_cached_decoder_for_CASPsequence) {
        _cached_decoder_for_CASPsequence = $._decodeInteger;
    }
    return _cached_decoder_for_CASPsequence(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CASPsequence */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CASPsequence */
let _cached_encoder_for_CASPsequence: $.ASN1Encoder<CASPsequence> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CASPsequence */

/* START_OF_SYMBOL_DEFINITION _encode_CASPsequence */
/**
 * @summary Encodes a(n) CASPsequence into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CASPsequence, encoded as an ASN.1 Element.
 */
export function _encode_CASPsequence(
    value: CASPsequence,
    elGetter: $.ASN1Encoder<CASPsequence>
) {
    if (!_cached_encoder_for_CASPsequence) {
        _cached_encoder_for_CASPsequence = $._encodeInteger;
    }
    return _cached_encoder_for_CASPsequence(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CASPsequence */

/* eslint-enable */
