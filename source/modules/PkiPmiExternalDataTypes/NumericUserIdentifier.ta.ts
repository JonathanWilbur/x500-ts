/* eslint-disable */
import { ASN1Element as _Element, NumericString } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION NumericUserIdentifier */
/**
 * @summary NumericUserIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumericUserIdentifier  ::=  NumericString(SIZE (1..ub-numeric-user-id-length))
 * ```
 */
export type NumericUserIdentifier = NumericString; // NumericString
/* END_OF_SYMBOL_DEFINITION NumericUserIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NumericUserIdentifier */
let _cached_decoder_for_NumericUserIdentifier: $.ASN1Decoder<NumericUserIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NumericUserIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_NumericUserIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) NumericUserIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumericUserIdentifier} The decoded data structure.
 */
export function _decode_NumericUserIdentifier(el: _Element) {
    if (!_cached_decoder_for_NumericUserIdentifier) {
        _cached_decoder_for_NumericUserIdentifier = $._decodeNumericString;
    }
    return _cached_decoder_for_NumericUserIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NumericUserIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NumericUserIdentifier */
let _cached_encoder_for_NumericUserIdentifier: $.ASN1Encoder<NumericUserIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NumericUserIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_NumericUserIdentifier */
/**
 * @summary Encodes a(n) NumericUserIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumericUserIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_NumericUserIdentifier(
    value: NumericUserIdentifier,
    elGetter: $.ASN1Encoder<NumericUserIdentifier>
) {
    if (!_cached_encoder_for_NumericUserIdentifier) {
        _cached_encoder_for_NumericUserIdentifier = $._encodeNumericString;
    }
    return _cached_encoder_for_NumericUserIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NumericUserIdentifier */

/* eslint-enable */
