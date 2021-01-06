/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AE_invocation_identifier */
/**
 * @summary AE_invocation_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AE-invocation-identifier  ::=  INTEGER
 * ```
 */
export type AE_invocation_identifier = INTEGER;
/* END_OF_SYMBOL_DEFINITION AE_invocation_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AE_invocation_identifier */
let _cached_decoder_for_AE_invocation_identifier: $.ASN1Decoder<AE_invocation_identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AE_invocation_identifier */

/* START_OF_SYMBOL_DEFINITION _decode_AE_invocation_identifier */
/**
 * @summary Decodes an ASN.1 element into a(n) AE_invocation_identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AE_invocation_identifier} The decoded data structure.
 */
export function _decode_AE_invocation_identifier(el: _Element) {
    if (!_cached_decoder_for_AE_invocation_identifier) {
        _cached_decoder_for_AE_invocation_identifier = $._decodeInteger;
    }
    return _cached_decoder_for_AE_invocation_identifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AE_invocation_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AE_invocation_identifier */
let _cached_encoder_for_AE_invocation_identifier: $.ASN1Encoder<AE_invocation_identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AE_invocation_identifier */

/* START_OF_SYMBOL_DEFINITION _encode_AE_invocation_identifier */
/**
 * @summary Encodes a(n) AE_invocation_identifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AE_invocation_identifier, encoded as an ASN.1 Element.
 */
export function _encode_AE_invocation_identifier(
    value: AE_invocation_identifier,
    elGetter: $.ASN1Encoder<AE_invocation_identifier>
) {
    if (!_cached_encoder_for_AE_invocation_identifier) {
        _cached_encoder_for_AE_invocation_identifier = $._encodeInteger;
    }
    return _cached_encoder_for_AE_invocation_identifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AE_invocation_identifier */

/* eslint-enable */
