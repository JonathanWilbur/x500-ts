/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PwdAlphabet */
/**
 * @summary PwdAlphabet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdAlphabet  ::=  SEQUENCE OF UTF8String
 * ```
 */
export type PwdAlphabet = UTF8String[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION PwdAlphabet */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdAlphabet */
let _cached_decoder_for_PwdAlphabet: $.ASN1Decoder<PwdAlphabet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdAlphabet */

/* START_OF_SYMBOL_DEFINITION _decode_PwdAlphabet */
/**
 * @summary Decodes an ASN.1 element into a(n) PwdAlphabet
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdAlphabet} The decoded data structure.
 */
export function _decode_PwdAlphabet(el: _Element) {
    if (!_cached_decoder_for_PwdAlphabet) {
        _cached_decoder_for_PwdAlphabet = $._decodeSequenceOf<UTF8String>(
            () => $._decodeUTF8String
        );
    }
    return _cached_decoder_for_PwdAlphabet(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PwdAlphabet */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdAlphabet */
let _cached_encoder_for_PwdAlphabet: $.ASN1Encoder<PwdAlphabet> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdAlphabet */

/* START_OF_SYMBOL_DEFINITION _encode_PwdAlphabet */
/**
 * @summary Encodes a(n) PwdAlphabet into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdAlphabet, encoded as an ASN.1 Element.
 */
export function _encode_PwdAlphabet(
    value: PwdAlphabet,
    elGetter: $.ASN1Encoder<PwdAlphabet>
) {
    if (!_cached_encoder_for_PwdAlphabet) {
        _cached_encoder_for_PwdAlphabet = $._encodeSequenceOf<UTF8String>(
            () => $._encodeUTF8String,
            $.BER
        );
    }
    return _cached_encoder_for_PwdAlphabet(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PwdAlphabet */

/* eslint-enable */
