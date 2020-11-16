/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PDSName */
/**
 * @summary PDSName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDSName  ::=  PrintableString(SIZE (1..ub-pds-name-length))
 * ```
 */
export type PDSName = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION PDSName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PDSName */
let _cached_decoder_for_PDSName: $.ASN1Decoder<PDSName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PDSName */

/* START_OF_SYMBOL_DEFINITION _decode_PDSName */
/**
 * @summary Decodes an ASN.1 element into a(n) PDSName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDSName} The decoded data structure.
 */
export function _decode_PDSName(el: _Element) {
    if (!_cached_decoder_for_PDSName) {
        _cached_decoder_for_PDSName = $._decodePrintableString;
    }
    return _cached_decoder_for_PDSName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PDSName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PDSName */
let _cached_encoder_for_PDSName: $.ASN1Encoder<PDSName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PDSName */

/* START_OF_SYMBOL_DEFINITION _encode_PDSName */
/**
 * @summary Encodes a(n) PDSName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDSName, encoded as an ASN.1 Element.
 */
export function _encode_PDSName(
    value: PDSName,
    elGetter: $.ASN1Encoder<PDSName>
) {
    if (!_cached_encoder_for_PDSName) {
        _cached_encoder_for_PDSName = $._encodePrintableString;
    }
    return _cached_encoder_for_PDSName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PDSName */

/* eslint-enable */
