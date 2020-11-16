/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PwdVocabulary */
/**
 * @summary PwdVocabulary
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdVocabulary  ::=   BIT STRING {
 *     noDictionaryWords   (0),
 *     noPersonNames       (1),
 *     noGeographicalNames (2) }
 * ```
 */
export type PwdVocabulary = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION PwdVocabulary */

/* START_OF_SYMBOL_DEFINITION PwdVocabulary_noDictionaryWords */
/**
 * @summary PwdVocabulary_noDictionaryWords
 * @constant
 */
export const PwdVocabulary_noDictionaryWords: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PwdVocabulary_noDictionaryWords */

/* START_OF_SYMBOL_DEFINITION PwdVocabulary_noPersonNames */
/**
 * @summary PwdVocabulary_noPersonNames
 * @constant
 */
export const PwdVocabulary_noPersonNames: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PwdVocabulary_noPersonNames */

/* START_OF_SYMBOL_DEFINITION PwdVocabulary_noGeographicalNames */
/**
 * @summary PwdVocabulary_noGeographicalNames
 * @constant
 */
export const PwdVocabulary_noGeographicalNames: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PwdVocabulary_noGeographicalNames */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdVocabulary */
let _cached_decoder_for_PwdVocabulary: $.ASN1Decoder<
    PwdVocabulary
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdVocabulary */

/* START_OF_SYMBOL_DEFINITION _decode_PwdVocabulary */
/**
 * @summary Decodes an ASN.1 element into a(n) PwdVocabulary
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdVocabulary} The decoded data structure.
 */
export function _decode_PwdVocabulary(el: _Element) {
    if (!_cached_decoder_for_PwdVocabulary) {
        _cached_decoder_for_PwdVocabulary = $._decodeBitString;
    }
    return _cached_decoder_for_PwdVocabulary(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PwdVocabulary */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdVocabulary */
let _cached_encoder_for_PwdVocabulary: $.ASN1Encoder<
    PwdVocabulary
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdVocabulary */

/* START_OF_SYMBOL_DEFINITION _encode_PwdVocabulary */
/**
 * @summary Encodes a(n) PwdVocabulary into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdVocabulary, encoded as an ASN.1 Element.
 */
export function _encode_PwdVocabulary(
    value: PwdVocabulary,
    elGetter: $.ASN1Encoder<PwdVocabulary>
) {
    if (!_cached_encoder_for_PwdVocabulary) {
        _cached_encoder_for_PwdVocabulary = $._encodeBitString;
    }
    return _cached_encoder_for_PwdVocabulary(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PwdVocabulary */

/* eslint-enable */
