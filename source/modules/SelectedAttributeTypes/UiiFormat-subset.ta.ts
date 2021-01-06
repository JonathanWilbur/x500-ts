/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_UiiFormat_subset */
/**
 * @summary UiiFormat_subset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFormat-subset ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_UiiFormat_subset {
    baseObject = 0,
    oneLevel = 1,
    wholeSubtree = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_UiiFormat_subset */

/* START_OF_SYMBOL_DEFINITION UiiFormat_subset */
/**
 * @summary UiiFormat_subset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFormat-subset ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type UiiFormat_subset = _enum_for_UiiFormat_subset;
/* END_OF_SYMBOL_DEFINITION UiiFormat_subset */

/* START_OF_SYMBOL_DEFINITION UiiFormat_subset */
/**
 * @summary UiiFormat_subset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFormat-subset ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const UiiFormat_subset = _enum_for_UiiFormat_subset;
/* END_OF_SYMBOL_DEFINITION UiiFormat_subset */

/* START_OF_SYMBOL_DEFINITION UiiFormat_subset_baseObject */
/**
 * @summary UiiFormat_subset_baseObject
 * @constant
 * @type {number}
 */
export const UiiFormat_subset_baseObject: UiiFormat_subset =
    UiiFormat_subset.baseObject; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION UiiFormat_subset_baseObject */

/* START_OF_SYMBOL_DEFINITION baseObject */
/**
 * @summary baseObject
 * @constant
 * @type {number}
 */
export const baseObject: UiiFormat_subset =
    UiiFormat_subset.baseObject; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION baseObject */

/* START_OF_SYMBOL_DEFINITION UiiFormat_subset_oneLevel */
/**
 * @summary UiiFormat_subset_oneLevel
 * @constant
 * @type {number}
 */
export const UiiFormat_subset_oneLevel: UiiFormat_subset =
    UiiFormat_subset.oneLevel; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION UiiFormat_subset_oneLevel */

/* START_OF_SYMBOL_DEFINITION oneLevel */
/**
 * @summary oneLevel
 * @constant
 * @type {number}
 */
export const oneLevel: UiiFormat_subset =
    UiiFormat_subset.oneLevel; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION oneLevel */

/* START_OF_SYMBOL_DEFINITION UiiFormat_subset_wholeSubtree */
/**
 * @summary UiiFormat_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export const UiiFormat_subset_wholeSubtree: UiiFormat_subset =
    UiiFormat_subset.wholeSubtree; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION UiiFormat_subset_wholeSubtree */

/* START_OF_SYMBOL_DEFINITION wholeSubtree */
/**
 * @summary wholeSubtree
 * @constant
 * @type {number}
 */
export const wholeSubtree: UiiFormat_subset =
    UiiFormat_subset.wholeSubtree; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION wholeSubtree */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UiiFormat_subset */
let _cached_decoder_for_UiiFormat_subset: $.ASN1Decoder<UiiFormat_subset> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UiiFormat_subset */

/* START_OF_SYMBOL_DEFINITION _decode_UiiFormat_subset */
/**
 * @summary Decodes an ASN.1 element into a(n) UiiFormat_subset
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UiiFormat_subset} The decoded data structure.
 */
export function _decode_UiiFormat_subset(el: _Element) {
    if (!_cached_decoder_for_UiiFormat_subset) {
        _cached_decoder_for_UiiFormat_subset = $._decodeEnumerated;
    }
    return _cached_decoder_for_UiiFormat_subset(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UiiFormat_subset */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UiiFormat_subset */
let _cached_encoder_for_UiiFormat_subset: $.ASN1Encoder<UiiFormat_subset> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UiiFormat_subset */

/* START_OF_SYMBOL_DEFINITION _encode_UiiFormat_subset */
/**
 * @summary Encodes a(n) UiiFormat_subset into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UiiFormat_subset, encoded as an ASN.1 Element.
 */
export function _encode_UiiFormat_subset(
    value: UiiFormat_subset,
    elGetter: $.ASN1Encoder<UiiFormat_subset>
) {
    if (!_cached_encoder_for_UiiFormat_subset) {
        _cached_encoder_for_UiiFormat_subset = $._encodeEnumerated;
    }
    return _cached_encoder_for_UiiFormat_subset(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UiiFormat_subset */

/* eslint-enable */
