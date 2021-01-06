/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION LanguageContextSyntax */
/**
 * @summary LanguageContextSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LanguageContextSyntax  ::=  PrintableString(SIZE (2..3))
 * ```
 */
export type LanguageContextSyntax = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION LanguageContextSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LanguageContextSyntax */
let _cached_decoder_for_LanguageContextSyntax: $.ASN1Decoder<LanguageContextSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LanguageContextSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_LanguageContextSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) LanguageContextSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LanguageContextSyntax} The decoded data structure.
 */
export function _decode_LanguageContextSyntax(el: _Element) {
    if (!_cached_decoder_for_LanguageContextSyntax) {
        _cached_decoder_for_LanguageContextSyntax = $._decodePrintableString;
    }
    return _cached_decoder_for_LanguageContextSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LanguageContextSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LanguageContextSyntax */
let _cached_encoder_for_LanguageContextSyntax: $.ASN1Encoder<LanguageContextSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LanguageContextSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_LanguageContextSyntax */
/**
 * @summary Encodes a(n) LanguageContextSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LanguageContextSyntax, encoded as an ASN.1 Element.
 */
export function _encode_LanguageContextSyntax(
    value: LanguageContextSyntax,
    elGetter: $.ASN1Encoder<LanguageContextSyntax>
) {
    if (!_cached_encoder_for_LanguageContextSyntax) {
        _cached_encoder_for_LanguageContextSyntax = $._encodePrintableString;
    }
    return _cached_encoder_for_LanguageContextSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LanguageContextSyntax */

/* eslint-enable */
