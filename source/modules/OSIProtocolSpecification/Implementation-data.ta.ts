/* eslint-disable */
import { ASN1Element as _Element, GraphicString } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Implementation_data */
/**
 * @summary Implementation_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Implementation-data  ::=  GraphicString
 * ```
 */
export type Implementation_data = GraphicString; // GraphicString
/* END_OF_SYMBOL_DEFINITION Implementation_data */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Implementation_data */
let _cached_decoder_for_Implementation_data: $.ASN1Decoder<Implementation_data> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Implementation_data */

/* START_OF_SYMBOL_DEFINITION _decode_Implementation_data */
/**
 * @summary Decodes an ASN.1 element into a(n) Implementation_data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Implementation_data} The decoded data structure.
 */
export function _decode_Implementation_data(el: _Element) {
    if (!_cached_decoder_for_Implementation_data) {
        _cached_decoder_for_Implementation_data = $._decodeGraphicString;
    }
    return _cached_decoder_for_Implementation_data(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Implementation_data */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Implementation_data */
let _cached_encoder_for_Implementation_data: $.ASN1Encoder<Implementation_data> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Implementation_data */

/* START_OF_SYMBOL_DEFINITION _encode_Implementation_data */
/**
 * @summary Encodes a(n) Implementation_data into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Implementation_data, encoded as an ASN.1 Element.
 */
export function _encode_Implementation_data(
    value: Implementation_data,
    elGetter: $.ASN1Encoder<Implementation_data>
) {
    if (!_cached_encoder_for_Implementation_data) {
        _cached_encoder_for_Implementation_data = $._encodeGraphicString;
    }
    return _cached_encoder_for_Implementation_data(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Implementation_data */

/* eslint-enable */
