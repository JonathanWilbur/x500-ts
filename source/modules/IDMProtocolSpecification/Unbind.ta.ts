/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Unbind */
/**
 * @summary Unbind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Unbind  ::=  NULL
 * ```
 */
export type Unbind = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION Unbind */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Unbind */
let _cached_decoder_for_Unbind: $.ASN1Decoder<Unbind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Unbind */

/* START_OF_SYMBOL_DEFINITION _decode_Unbind */
/**
 * @summary Decodes an ASN.1 element into a(n) Unbind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Unbind} The decoded data structure.
 */
export function _decode_Unbind(el: _Element) {
    if (!_cached_decoder_for_Unbind) {
        _cached_decoder_for_Unbind = $._decodeNull;
    }
    return _cached_decoder_for_Unbind(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Unbind */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Unbind */
let _cached_encoder_for_Unbind: $.ASN1Encoder<Unbind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Unbind */

/* START_OF_SYMBOL_DEFINITION _encode_Unbind */
/**
 * @summary Encodes a(n) Unbind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Unbind, encoded as an ASN.1 Element.
 */
export function _encode_Unbind(value: Unbind, elGetter: $.ASN1Encoder<Unbind>) {
    if (!_cached_encoder_for_Unbind) {
        _cached_encoder_for_Unbind = $._encodeNull;
    }
    return _cached_encoder_for_Unbind(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Unbind */

/* eslint-enable */
