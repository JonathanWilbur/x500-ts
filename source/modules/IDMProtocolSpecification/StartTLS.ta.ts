/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION StartTLS */
/**
 * @summary StartTLS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StartTLS  ::=  NULL
 * ```
 */
export type StartTLS = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION StartTLS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StartTLS */
let _cached_decoder_for_StartTLS: $.ASN1Decoder<StartTLS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StartTLS */

/* START_OF_SYMBOL_DEFINITION _decode_StartTLS */
/**
 * @summary Decodes an ASN.1 element into a(n) StartTLS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StartTLS} The decoded data structure.
 */
export function _decode_StartTLS(el: _Element) {
    if (!_cached_decoder_for_StartTLS) {
        _cached_decoder_for_StartTLS = $._decodeNull;
    }
    return _cached_decoder_for_StartTLS(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_StartTLS */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StartTLS */
let _cached_encoder_for_StartTLS: $.ASN1Encoder<StartTLS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StartTLS */

/* START_OF_SYMBOL_DEFINITION _encode_StartTLS */
/**
 * @summary Encodes a(n) StartTLS into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartTLS, encoded as an ASN.1 Element.
 */
export function _encode_StartTLS(
    value: StartTLS,
    elGetter: $.ASN1Encoder<StartTLS>
) {
    if (!_cached_encoder_for_StartTLS) {
        _cached_encoder_for_StartTLS = $._encodeNull;
    }
    return _cached_encoder_for_StartTLS(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_StartTLS */

/* eslint-enable */
