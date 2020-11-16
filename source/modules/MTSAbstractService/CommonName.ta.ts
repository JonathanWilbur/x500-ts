/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CommonName */
/**
 * @summary CommonName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonName  ::=  PrintableString(SIZE (1..ub-common-name-length))
 * ```
 */
export type CommonName = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION CommonName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonName */
let _cached_decoder_for_CommonName: $.ASN1Decoder<CommonName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommonName */

/* START_OF_SYMBOL_DEFINITION _decode_CommonName */
/**
 * @summary Decodes an ASN.1 element into a(n) CommonName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommonName} The decoded data structure.
 */
export function _decode_CommonName(el: _Element) {
    if (!_cached_decoder_for_CommonName) {
        _cached_decoder_for_CommonName = $._decodePrintableString;
    }
    return _cached_decoder_for_CommonName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommonName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonName */
let _cached_encoder_for_CommonName: $.ASN1Encoder<CommonName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommonName */

/* START_OF_SYMBOL_DEFINITION _encode_CommonName */
/**
 * @summary Encodes a(n) CommonName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonName, encoded as an ASN.1 Element.
 */
export function _encode_CommonName(
    value: CommonName,
    elGetter: $.ASN1Encoder<CommonName>
) {
    if (!_cached_encoder_for_CommonName) {
        _cached_encoder_for_CommonName = $._encodePrintableString;
    }
    return _cached_encoder_for_CommonName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommonName */

/* eslint-enable */
