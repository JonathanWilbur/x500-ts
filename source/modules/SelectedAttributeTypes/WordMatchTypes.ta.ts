/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_WordMatchTypes */
export enum _enum_for_WordMatchTypes {
    wordExact = 0,
    wordTruncated = 1,
    wordPhonetic = 2,
    wordProviderDefined = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_WordMatchTypes */

/* START_OF_SYMBOL_DEFINITION WordMatchTypes */
/**
 * @summary WordMatchTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WordMatchTypes  ::=  ENUMERATED {
 *   wordExact           (0),
 *   wordTruncated       (1),
 *   wordPhonetic        (2),
 *   wordProviderDefined (3),
 *   ... }
 * ```@enum {number}
 */
export type WordMatchTypes = _enum_for_WordMatchTypes | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION WordMatchTypes */

/* START_OF_SYMBOL_DEFINITION WordMatchTypes_wordExact */
/**
 * @summary WordMatchTypes_wordExact
 * @constant
 * @type {number}
 */
export const WordMatchTypes_wordExact: WordMatchTypes = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WordMatchTypes_wordExact */

/* START_OF_SYMBOL_DEFINITION wordExact */
/**
 * @summary wordExact
 * @constant
 * @type {number}
 */
export const wordExact: WordMatchTypes = WordMatchTypes_wordExact; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION wordExact */

/* START_OF_SYMBOL_DEFINITION WordMatchTypes_wordTruncated */
/**
 * @summary WordMatchTypes_wordTruncated
 * @constant
 * @type {number}
 */
export const WordMatchTypes_wordTruncated: WordMatchTypes = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WordMatchTypes_wordTruncated */

/* START_OF_SYMBOL_DEFINITION wordTruncated */
/**
 * @summary wordTruncated
 * @constant
 * @type {number}
 */
export const wordTruncated: WordMatchTypes = WordMatchTypes_wordTruncated; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION wordTruncated */

/* START_OF_SYMBOL_DEFINITION WordMatchTypes_wordPhonetic */
/**
 * @summary WordMatchTypes_wordPhonetic
 * @constant
 * @type {number}
 */
export const WordMatchTypes_wordPhonetic: WordMatchTypes = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WordMatchTypes_wordPhonetic */

/* START_OF_SYMBOL_DEFINITION wordPhonetic */
/**
 * @summary wordPhonetic
 * @constant
 * @type {number}
 */
export const wordPhonetic: WordMatchTypes = WordMatchTypes_wordPhonetic; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION wordPhonetic */

/* START_OF_SYMBOL_DEFINITION WordMatchTypes_wordProviderDefined */
/**
 * @summary WordMatchTypes_wordProviderDefined
 * @constant
 * @type {number}
 */
export const WordMatchTypes_wordProviderDefined: WordMatchTypes = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WordMatchTypes_wordProviderDefined */

/* START_OF_SYMBOL_DEFINITION wordProviderDefined */
/**
 * @summary wordProviderDefined
 * @constant
 * @type {number}
 */
export const wordProviderDefined: WordMatchTypes = WordMatchTypes_wordProviderDefined; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION wordProviderDefined */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WordMatchTypes */
let _cached_decoder_for_WordMatchTypes: $.ASN1Decoder<
    WordMatchTypes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WordMatchTypes */

/* START_OF_SYMBOL_DEFINITION _decode_WordMatchTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) WordMatchTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WordMatchTypes} The decoded data structure.
 */
export function _decode_WordMatchTypes(el: _Element) {
    if (!_cached_decoder_for_WordMatchTypes) {
        _cached_decoder_for_WordMatchTypes = $._decodeEnumerated;
    }
    return _cached_decoder_for_WordMatchTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WordMatchTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WordMatchTypes */
let _cached_encoder_for_WordMatchTypes: $.ASN1Encoder<
    WordMatchTypes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WordMatchTypes */

/* START_OF_SYMBOL_DEFINITION _encode_WordMatchTypes */
/**
 * @summary Encodes a(n) WordMatchTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WordMatchTypes, encoded as an ASN.1 Element.
 */
export function _encode_WordMatchTypes(
    value: WordMatchTypes,
    elGetter: $.ASN1Encoder<WordMatchTypes>
) {
    if (!_cached_encoder_for_WordMatchTypes) {
        _cached_encoder_for_WordMatchTypes = $._encodeEnumerated;
    }
    return _cached_encoder_for_WordMatchTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WordMatchTypes */

/* eslint-enable */
