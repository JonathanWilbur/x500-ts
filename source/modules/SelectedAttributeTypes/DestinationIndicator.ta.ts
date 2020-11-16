/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION DestinationIndicator */
/**
 * @summary DestinationIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DestinationIndicator  ::=  PrintableString(SIZE (1..MAX))
 * ```
 */
export type DestinationIndicator = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION DestinationIndicator */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DestinationIndicator */
let _cached_decoder_for_DestinationIndicator: $.ASN1Decoder<
    DestinationIndicator
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DestinationIndicator */

/* START_OF_SYMBOL_DEFINITION _decode_DestinationIndicator */
/**
 * @summary Decodes an ASN.1 element into a(n) DestinationIndicator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DestinationIndicator} The decoded data structure.
 */
export function _decode_DestinationIndicator(el: _Element) {
    if (!_cached_decoder_for_DestinationIndicator) {
        _cached_decoder_for_DestinationIndicator = $._decodePrintableString;
    }
    return _cached_decoder_for_DestinationIndicator(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DestinationIndicator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DestinationIndicator */
let _cached_encoder_for_DestinationIndicator: $.ASN1Encoder<
    DestinationIndicator
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DestinationIndicator */

/* START_OF_SYMBOL_DEFINITION _encode_DestinationIndicator */
/**
 * @summary Encodes a(n) DestinationIndicator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationIndicator, encoded as an ASN.1 Element.
 */
export function _encode_DestinationIndicator(
    value: DestinationIndicator,
    elGetter: $.ASN1Encoder<DestinationIndicator>
) {
    if (!_cached_encoder_for_DestinationIndicator) {
        _cached_encoder_for_DestinationIndicator = $._encodePrintableString;
    }
    return _cached_encoder_for_DestinationIndicator(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DestinationIndicator */

/* eslint-enable */
