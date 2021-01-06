/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_SearchArgumentData_joinType */
/**
 * @summary SearchArgumentData_joinType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchArgumentData-joinType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_SearchArgumentData_joinType {
    innerJoin = 0,
    leftOuterJoin = 1,
    fullOuterJoin = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SearchArgumentData_joinType */

/* START_OF_SYMBOL_DEFINITION SearchArgumentData_joinType */
/**
 * @summary SearchArgumentData_joinType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchArgumentData-joinType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type SearchArgumentData_joinType = _enum_for_SearchArgumentData_joinType;
/* END_OF_SYMBOL_DEFINITION SearchArgumentData_joinType */

/* START_OF_SYMBOL_DEFINITION SearchArgumentData_joinType */
/**
 * @summary SearchArgumentData_joinType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchArgumentData-joinType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const SearchArgumentData_joinType = _enum_for_SearchArgumentData_joinType;
/* END_OF_SYMBOL_DEFINITION SearchArgumentData_joinType */

/* START_OF_SYMBOL_DEFINITION SearchArgumentData_joinType_innerJoin */
/**
 * @summary SearchArgumentData_joinType_innerJoin
 * @constant
 * @type {number}
 */
export const SearchArgumentData_joinType_innerJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.innerJoin; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchArgumentData_joinType_innerJoin */

/* START_OF_SYMBOL_DEFINITION innerJoin */
/**
 * @summary innerJoin
 * @constant
 * @type {number}
 */
export const innerJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.innerJoin; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION innerJoin */

/* START_OF_SYMBOL_DEFINITION SearchArgumentData_joinType_leftOuterJoin */
/**
 * @summary SearchArgumentData_joinType_leftOuterJoin
 * @constant
 * @type {number}
 */
export const SearchArgumentData_joinType_leftOuterJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.leftOuterJoin; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchArgumentData_joinType_leftOuterJoin */

/* START_OF_SYMBOL_DEFINITION leftOuterJoin */
/**
 * @summary leftOuterJoin
 * @constant
 * @type {number}
 */
export const leftOuterJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.leftOuterJoin; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION leftOuterJoin */

/* START_OF_SYMBOL_DEFINITION SearchArgumentData_joinType_fullOuterJoin */
/**
 * @summary SearchArgumentData_joinType_fullOuterJoin
 * @constant
 * @type {number}
 */
export const SearchArgumentData_joinType_fullOuterJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.fullOuterJoin; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SearchArgumentData_joinType_fullOuterJoin */

/* START_OF_SYMBOL_DEFINITION fullOuterJoin */
/**
 * @summary fullOuterJoin
 * @constant
 * @type {number}
 */
export const fullOuterJoin: SearchArgumentData_joinType =
    SearchArgumentData_joinType.fullOuterJoin; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION fullOuterJoin */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchArgumentData_joinType */
let _cached_decoder_for_SearchArgumentData_joinType: $.ASN1Decoder<SearchArgumentData_joinType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchArgumentData_joinType */

/* START_OF_SYMBOL_DEFINITION _decode_SearchArgumentData_joinType */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchArgumentData_joinType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchArgumentData_joinType} The decoded data structure.
 */
export function _decode_SearchArgumentData_joinType(el: _Element) {
    if (!_cached_decoder_for_SearchArgumentData_joinType) {
        _cached_decoder_for_SearchArgumentData_joinType = $._decodeEnumerated;
    }
    return _cached_decoder_for_SearchArgumentData_joinType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchArgumentData_joinType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchArgumentData_joinType */
let _cached_encoder_for_SearchArgumentData_joinType: $.ASN1Encoder<SearchArgumentData_joinType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchArgumentData_joinType */

/* START_OF_SYMBOL_DEFINITION _encode_SearchArgumentData_joinType */
/**
 * @summary Encodes a(n) SearchArgumentData_joinType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchArgumentData_joinType, encoded as an ASN.1 Element.
 */
export function _encode_SearchArgumentData_joinType(
    value: SearchArgumentData_joinType,
    elGetter: $.ASN1Encoder<SearchArgumentData_joinType>
) {
    if (!_cached_encoder_for_SearchArgumentData_joinType) {
        _cached_encoder_for_SearchArgumentData_joinType = $._encodeEnumerated;
    }
    return _cached_encoder_for_SearchArgumentData_joinType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchArgumentData_joinType */

/* eslint-enable */
