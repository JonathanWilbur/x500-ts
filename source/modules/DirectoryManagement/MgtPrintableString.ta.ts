/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION MgtPrintableString */
/**
 * @summary MgtPrintableString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtPrintableString  ::=  PrintableString
 * ```
 */
export type MgtPrintableString = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION MgtPrintableString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtPrintableString */
let _cached_decoder_for_MgtPrintableString: $.ASN1Decoder<MgtPrintableString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtPrintableString */

/* START_OF_SYMBOL_DEFINITION _decode_MgtPrintableString */
/**
 * @summary Decodes an ASN.1 element into a(n) MgtPrintableString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtPrintableString} The decoded data structure.
 */
export function _decode_MgtPrintableString(el: _Element) {
    if (!_cached_decoder_for_MgtPrintableString) {
        _cached_decoder_for_MgtPrintableString = $._decodePrintableString;
    }
    return _cached_decoder_for_MgtPrintableString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MgtPrintableString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtPrintableString */
let _cached_encoder_for_MgtPrintableString: $.ASN1Encoder<MgtPrintableString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtPrintableString */

/* START_OF_SYMBOL_DEFINITION _encode_MgtPrintableString */
/**
 * @summary Encodes a(n) MgtPrintableString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtPrintableString, encoded as an ASN.1 Element.
 */
export function _encode_MgtPrintableString(
    value: MgtPrintableString,
    elGetter: $.ASN1Encoder<MgtPrintableString>
) {
    if (!_cached_encoder_for_MgtPrintableString) {
        _cached_encoder_for_MgtPrintableString = $._encodePrintableString;
    }
    return _cached_encoder_for_MgtPrintableString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MgtPrintableString */

/* eslint-enable */
