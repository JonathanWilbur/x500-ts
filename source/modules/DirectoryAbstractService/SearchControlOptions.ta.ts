/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION SearchControlOptions */
/**
 * @summary SearchControlOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchControlOptions  ::=  BIT STRING {
 *   searchAliases         (0),
 *   matchedValuesOnly     (1),
 *   checkOverspecified    (2),
 *   performExactly        (3),
 *   includeAllAreas       (4),
 *   noSystemRelaxation    (5),
 *   dnAttribute           (6),
 *   matchOnResidualName   (7),
 *   entryCount            (8),
 *   useSubset             (9),
 *   separateFamilyMembers (10),
 *   searchFamily          (11) }
 * ```
 */
export type SearchControlOptions = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION SearchControlOptions */

/* START_OF_SYMBOL_DEFINITION SearchControlOptions_searchAliases */
/**
 * @summary SearchControlOptions_searchAliases
 * @constant
 */
export const SearchControlOptions_searchAliases: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SearchControlOptions_searchAliases */

/* START_OF_SYMBOL_DEFINITION SearchControlOptions_matchedValuesOnly */
/**
 * @summary SearchControlOptions_matchedValuesOnly
 * @constant
 */
export const SearchControlOptions_matchedValuesOnly: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SearchControlOptions_matchedValuesOnly */

/* START_OF_SYMBOL_DEFINITION SearchControlOptions_checkOverspecified */
/**
 * @summary SearchControlOptions_checkOverspecified
 * @constant
 */
export const SearchControlOptions_checkOverspecified: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SearchControlOptions_checkOverspecified */

/* START_OF_SYMBOL_DEFINITION SearchControlOptions_performExactly */
/**
 * @summary SearchControlOptions_performExactly
 * @constant
 */
export const SearchControlOptions_performExactly: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SearchControlOptions_performExactly */

/* START_OF_SYMBOL_DEFINITION SearchControlOptions_includeAllAreas */
/**
 * @summary SearchControlOptions_includeAllAreas
 * @constant
 */
export const SearchControlOptions_includeAllAreas: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SearchControlOptions_includeAllAreas */

/* START_OF_SYMBOL_DEFINITION SearchControlOptions_noSystemRelaxation */
/**
 * @summary SearchControlOptions_noSystemRelaxation
 * @constant
 */
export const SearchControlOptions_noSystemRelaxation: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SearchControlOptions_noSystemRelaxation */

/* START_OF_SYMBOL_DEFINITION SearchControlOptions_dnAttribute */
/**
 * @summary SearchControlOptions_dnAttribute
 * @constant
 */
export const SearchControlOptions_dnAttribute: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SearchControlOptions_dnAttribute */

/* START_OF_SYMBOL_DEFINITION SearchControlOptions_matchOnResidualName */
/**
 * @summary SearchControlOptions_matchOnResidualName
 * @constant
 */
export const SearchControlOptions_matchOnResidualName: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SearchControlOptions_matchOnResidualName */

/* START_OF_SYMBOL_DEFINITION SearchControlOptions_entryCount */
/**
 * @summary SearchControlOptions_entryCount
 * @constant
 */
export const SearchControlOptions_entryCount: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SearchControlOptions_entryCount */

/* START_OF_SYMBOL_DEFINITION SearchControlOptions_useSubset */
/**
 * @summary SearchControlOptions_useSubset
 * @constant
 */
export const SearchControlOptions_useSubset: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SearchControlOptions_useSubset */

/* START_OF_SYMBOL_DEFINITION SearchControlOptions_separateFamilyMembers */
/**
 * @summary SearchControlOptions_separateFamilyMembers
 * @constant
 */
export const SearchControlOptions_separateFamilyMembers: number = 10; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SearchControlOptions_separateFamilyMembers */

/* START_OF_SYMBOL_DEFINITION SearchControlOptions_searchFamily */
/**
 * @summary SearchControlOptions_searchFamily
 * @constant
 */
export const SearchControlOptions_searchFamily: number = 11; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION SearchControlOptions_searchFamily */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchControlOptions */
let _cached_decoder_for_SearchControlOptions: $.ASN1Decoder<
    SearchControlOptions
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchControlOptions */

/* START_OF_SYMBOL_DEFINITION _decode_SearchControlOptions */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchControlOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchControlOptions} The decoded data structure.
 */
export function _decode_SearchControlOptions(el: _Element) {
    if (!_cached_decoder_for_SearchControlOptions) {
        _cached_decoder_for_SearchControlOptions = $._decodeBitString;
    }
    return _cached_decoder_for_SearchControlOptions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchControlOptions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchControlOptions */
let _cached_encoder_for_SearchControlOptions: $.ASN1Encoder<
    SearchControlOptions
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchControlOptions */

/* START_OF_SYMBOL_DEFINITION _encode_SearchControlOptions */
/**
 * @summary Encodes a(n) SearchControlOptions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchControlOptions, encoded as an ASN.1 Element.
 */
export function _encode_SearchControlOptions(
    value: SearchControlOptions,
    elGetter: $.ASN1Encoder<SearchControlOptions>
) {
    if (!_cached_encoder_for_SearchControlOptions) {
        _cached_encoder_for_SearchControlOptions = $._encodeBitString;
    }
    return _cached_encoder_for_SearchControlOptions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchControlOptions */

/* eslint-enable */
