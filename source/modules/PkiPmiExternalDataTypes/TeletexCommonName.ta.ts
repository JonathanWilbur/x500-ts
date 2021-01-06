/* eslint-disable */
import { ASN1Element as _Element, TeletexString } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION TeletexCommonName */
/**
 * @summary TeletexCommonName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexCommonName  ::=  TeletexString(SIZE (1..ub-common-name-length))
 * ```
 */
export type TeletexCommonName = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION TeletexCommonName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TeletexCommonName */
let _cached_decoder_for_TeletexCommonName: $.ASN1Decoder<TeletexCommonName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TeletexCommonName */

/* START_OF_SYMBOL_DEFINITION _decode_TeletexCommonName */
/**
 * @summary Decodes an ASN.1 element into a(n) TeletexCommonName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexCommonName} The decoded data structure.
 */
export function _decode_TeletexCommonName(el: _Element) {
    if (!_cached_decoder_for_TeletexCommonName) {
        _cached_decoder_for_TeletexCommonName = $._decodeTeletexString;
    }
    return _cached_decoder_for_TeletexCommonName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TeletexCommonName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TeletexCommonName */
let _cached_encoder_for_TeletexCommonName: $.ASN1Encoder<TeletexCommonName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TeletexCommonName */

/* START_OF_SYMBOL_DEFINITION _encode_TeletexCommonName */
/**
 * @summary Encodes a(n) TeletexCommonName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexCommonName, encoded as an ASN.1 Element.
 */
export function _encode_TeletexCommonName(
    value: TeletexCommonName,
    elGetter: $.ASN1Encoder<TeletexCommonName>
) {
    if (!_cached_encoder_for_TeletexCommonName) {
        _cached_encoder_for_TeletexCommonName = $._encodeTeletexString;
    }
    return _cached_encoder_for_TeletexCommonName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TeletexCommonName */

/* eslint-enable */
