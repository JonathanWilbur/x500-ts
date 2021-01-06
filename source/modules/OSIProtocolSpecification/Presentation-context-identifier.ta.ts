/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Presentation_context_identifier */
/**
 * @summary Presentation_context_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-context-identifier  ::=  INTEGER(1..127, ..., 128..MAX)
 * ```
 */
export type Presentation_context_identifier = INTEGER;
/* END_OF_SYMBOL_DEFINITION Presentation_context_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_context_identifier */
let _cached_decoder_for_Presentation_context_identifier: $.ASN1Decoder<Presentation_context_identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_context_identifier */

/* START_OF_SYMBOL_DEFINITION _decode_Presentation_context_identifier */
/**
 * @summary Decodes an ASN.1 element into a(n) Presentation_context_identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Presentation_context_identifier} The decoded data structure.
 */
export function _decode_Presentation_context_identifier(el: _Element) {
    if (!_cached_decoder_for_Presentation_context_identifier) {
        _cached_decoder_for_Presentation_context_identifier = $._decodeInteger;
    }
    return _cached_decoder_for_Presentation_context_identifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Presentation_context_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_context_identifier */
let _cached_encoder_for_Presentation_context_identifier: $.ASN1Encoder<Presentation_context_identifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_context_identifier */

/* START_OF_SYMBOL_DEFINITION _encode_Presentation_context_identifier */
/**
 * @summary Encodes a(n) Presentation_context_identifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Presentation_context_identifier, encoded as an ASN.1 Element.
 */
export function _encode_Presentation_context_identifier(
    value: Presentation_context_identifier,
    elGetter: $.ASN1Encoder<Presentation_context_identifier>
) {
    if (!_cached_encoder_for_Presentation_context_identifier) {
        _cached_encoder_for_Presentation_context_identifier = $._encodeInteger;
    }
    return _cached_encoder_for_Presentation_context_identifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Presentation_context_identifier */

/* eslint-enable */
