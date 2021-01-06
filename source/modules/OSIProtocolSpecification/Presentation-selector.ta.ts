/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Presentation_selector */
/**
 * @summary Presentation_selector
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-selector  ::=  OCTET STRING(SIZE (1..4, ..., 5..MAX))
 * ```
 */
export type Presentation_selector = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION Presentation_selector */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_selector */
let _cached_decoder_for_Presentation_selector: $.ASN1Decoder<Presentation_selector> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Presentation_selector */

/* START_OF_SYMBOL_DEFINITION _decode_Presentation_selector */
/**
 * @summary Decodes an ASN.1 element into a(n) Presentation_selector
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Presentation_selector} The decoded data structure.
 */
export function _decode_Presentation_selector(el: _Element) {
    if (!_cached_decoder_for_Presentation_selector) {
        _cached_decoder_for_Presentation_selector = $._decodeOctetString;
    }
    return _cached_decoder_for_Presentation_selector(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Presentation_selector */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_selector */
let _cached_encoder_for_Presentation_selector: $.ASN1Encoder<Presentation_selector> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Presentation_selector */

/* START_OF_SYMBOL_DEFINITION _encode_Presentation_selector */
/**
 * @summary Encodes a(n) Presentation_selector into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Presentation_selector, encoded as an ASN.1 Element.
 */
export function _encode_Presentation_selector(
    value: Presentation_selector,
    elGetter: $.ASN1Encoder<Presentation_selector>
) {
    if (!_cached_encoder_for_Presentation_selector) {
        _cached_encoder_for_Presentation_selector = $._encodeOctetString;
    }
    return _cached_encoder_for_Presentation_selector(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Presentation_selector */

/* eslint-enable */
