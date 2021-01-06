/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_SearchRequest_derefAliases */
/**
 * @summary SearchRequest_derefAliases
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest-derefAliases ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_SearchRequest_derefAliases {
    neverDerefAliases = 0,
    derefInSearching = 1,
    derefFindingBaseObj = 2,
    derefAlways = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SearchRequest_derefAliases */

/* START_OF_SYMBOL_DEFINITION SearchRequest_derefAliases */
/**
 * @summary SearchRequest_derefAliases
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest-derefAliases ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type SearchRequest_derefAliases = _enum_for_SearchRequest_derefAliases;
/* END_OF_SYMBOL_DEFINITION SearchRequest_derefAliases */

/* START_OF_SYMBOL_DEFINITION SearchRequest_derefAliases */
/**
 * @summary SearchRequest_derefAliases
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRequest-derefAliases ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const SearchRequest_derefAliases = _enum_for_SearchRequest_derefAliases;
/* END_OF_SYMBOL_DEFINITION SearchRequest_derefAliases */

/* START_OF_SYMBOL_DEFINITION SearchRequest_derefAliases_neverDerefAliases */
/**
 * @summary SearchRequest_derefAliases_neverDerefAliases
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_neverDerefAliases: SearchRequest_derefAliases =
    SearchRequest_derefAliases.neverDerefAliases; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchRequest_derefAliases_neverDerefAliases */

/* START_OF_SYMBOL_DEFINITION neverDerefAliases */
/**
 * @summary neverDerefAliases
 * @constant
 * @type {number}
 */
export const neverDerefAliases: SearchRequest_derefAliases =
    SearchRequest_derefAliases.neverDerefAliases; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION neverDerefAliases */

/* START_OF_SYMBOL_DEFINITION SearchRequest_derefAliases_derefInSearching */
/**
 * @summary SearchRequest_derefAliases_derefInSearching
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_derefInSearching: SearchRequest_derefAliases =
    SearchRequest_derefAliases.derefInSearching; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchRequest_derefAliases_derefInSearching */

/* START_OF_SYMBOL_DEFINITION derefInSearching */
/**
 * @summary derefInSearching
 * @constant
 * @type {number}
 */
export const derefInSearching: SearchRequest_derefAliases =
    SearchRequest_derefAliases.derefInSearching; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION derefInSearching */

/* START_OF_SYMBOL_DEFINITION SearchRequest_derefAliases_derefFindingBaseObj */
/**
 * @summary SearchRequest_derefAliases_derefFindingBaseObj
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_derefFindingBaseObj: SearchRequest_derefAliases =
    SearchRequest_derefAliases.derefFindingBaseObj; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchRequest_derefAliases_derefFindingBaseObj */

/* START_OF_SYMBOL_DEFINITION derefFindingBaseObj */
/**
 * @summary derefFindingBaseObj
 * @constant
 * @type {number}
 */
export const derefFindingBaseObj: SearchRequest_derefAliases =
    SearchRequest_derefAliases.derefFindingBaseObj; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION derefFindingBaseObj */

/* START_OF_SYMBOL_DEFINITION SearchRequest_derefAliases_derefAlways */
/**
 * @summary SearchRequest_derefAliases_derefAlways
 * @constant
 * @type {number}
 */
export const SearchRequest_derefAliases_derefAlways: SearchRequest_derefAliases =
    SearchRequest_derefAliases.derefAlways; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchRequest_derefAliases_derefAlways */

/* START_OF_SYMBOL_DEFINITION derefAlways */
/**
 * @summary derefAlways
 * @constant
 * @type {number}
 */
export const derefAlways: SearchRequest_derefAliases =
    SearchRequest_derefAliases.derefAlways; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION derefAlways */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchRequest_derefAliases */
let _cached_decoder_for_SearchRequest_derefAliases: $.ASN1Decoder<SearchRequest_derefAliases> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchRequest_derefAliases */

/* START_OF_SYMBOL_DEFINITION _decode_SearchRequest_derefAliases */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchRequest_derefAliases
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchRequest_derefAliases} The decoded data structure.
 */
export function _decode_SearchRequest_derefAliases(el: _Element) {
    if (!_cached_decoder_for_SearchRequest_derefAliases) {
        _cached_decoder_for_SearchRequest_derefAliases = $._decodeEnumerated;
    }
    return _cached_decoder_for_SearchRequest_derefAliases(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchRequest_derefAliases */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchRequest_derefAliases */
let _cached_encoder_for_SearchRequest_derefAliases: $.ASN1Encoder<SearchRequest_derefAliases> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchRequest_derefAliases */

/* START_OF_SYMBOL_DEFINITION _encode_SearchRequest_derefAliases */
/**
 * @summary Encodes a(n) SearchRequest_derefAliases into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRequest_derefAliases, encoded as an ASN.1 Element.
 */
export function _encode_SearchRequest_derefAliases(
    value: SearchRequest_derefAliases,
    elGetter: $.ASN1Encoder<SearchRequest_derefAliases>
) {
    if (!_cached_encoder_for_SearchRequest_derefAliases) {
        _cached_encoder_for_SearchRequest_derefAliases = $._encodeEnumerated;
    }
    return _cached_encoder_for_SearchRequest_derefAliases(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchRequest_derefAliases */

/* eslint-enable */
