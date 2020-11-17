/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_JoinArgument_joinSubset */
export enum _enum_for_JoinArgument_joinSubset {
    baseObject = 0,
    oneLevel = 1,
    wholeSubtree = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_JoinArgument_joinSubset */

/* START_OF_SYMBOL_DEFINITION JoinArgument_joinSubset */
/**
 * @summary JoinArgument_joinSubset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * JoinArgument-joinSubset ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type JoinArgument_joinSubset =
    | _enum_for_JoinArgument_joinSubset
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION JoinArgument_joinSubset */

/* START_OF_SYMBOL_DEFINITION JoinArgument_joinSubset_baseObject */
/**
 * @summary JoinArgument_joinSubset_baseObject
 * @constant
 * @type {number}
 */
export const JoinArgument_joinSubset_baseObject: JoinArgument_joinSubset = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION JoinArgument_joinSubset_baseObject */

/* START_OF_SYMBOL_DEFINITION baseObject */
/**
 * @summary baseObject
 * @constant
 * @type {number}
 */
export const baseObject: JoinArgument_joinSubset = JoinArgument_joinSubset_baseObject; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION baseObject */

/* START_OF_SYMBOL_DEFINITION JoinArgument_joinSubset_oneLevel */
/**
 * @summary JoinArgument_joinSubset_oneLevel
 * @constant
 * @type {number}
 */
export const JoinArgument_joinSubset_oneLevel: JoinArgument_joinSubset = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION JoinArgument_joinSubset_oneLevel */

/* START_OF_SYMBOL_DEFINITION oneLevel */
/**
 * @summary oneLevel
 * @constant
 * @type {number}
 */
export const oneLevel: JoinArgument_joinSubset = JoinArgument_joinSubset_oneLevel; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION oneLevel */

/* START_OF_SYMBOL_DEFINITION JoinArgument_joinSubset_wholeSubtree */
/**
 * @summary JoinArgument_joinSubset_wholeSubtree
 * @constant
 * @type {number}
 */
export const JoinArgument_joinSubset_wholeSubtree: JoinArgument_joinSubset = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION JoinArgument_joinSubset_wholeSubtree */

/* START_OF_SYMBOL_DEFINITION wholeSubtree */
/**
 * @summary wholeSubtree
 * @constant
 * @type {number}
 */
export const wholeSubtree: JoinArgument_joinSubset = JoinArgument_joinSubset_wholeSubtree; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION wholeSubtree */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_JoinArgument_joinSubset */
let _cached_decoder_for_JoinArgument_joinSubset: $.ASN1Decoder<
    JoinArgument_joinSubset
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_JoinArgument_joinSubset */

/* START_OF_SYMBOL_DEFINITION _decode_JoinArgument_joinSubset */
/**
 * @summary Decodes an ASN.1 element into a(n) JoinArgument_joinSubset
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {JoinArgument_joinSubset} The decoded data structure.
 */
export function _decode_JoinArgument_joinSubset(el: _Element) {
    if (!_cached_decoder_for_JoinArgument_joinSubset) {
        _cached_decoder_for_JoinArgument_joinSubset = $._decodeEnumerated;
    }
    return _cached_decoder_for_JoinArgument_joinSubset(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_JoinArgument_joinSubset */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_JoinArgument_joinSubset */
let _cached_encoder_for_JoinArgument_joinSubset: $.ASN1Encoder<
    JoinArgument_joinSubset
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_JoinArgument_joinSubset */

/* START_OF_SYMBOL_DEFINITION _encode_JoinArgument_joinSubset */
/**
 * @summary Encodes a(n) JoinArgument_joinSubset into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JoinArgument_joinSubset, encoded as an ASN.1 Element.
 */
export function _encode_JoinArgument_joinSubset(
    value: JoinArgument_joinSubset,
    elGetter: $.ASN1Encoder<JoinArgument_joinSubset>
) {
    if (!_cached_encoder_for_JoinArgument_joinSubset) {
        _cached_encoder_for_JoinArgument_joinSubset = $._encodeEnumerated;
    }
    return _cached_encoder_for_JoinArgument_joinSubset(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_JoinArgument_joinSubset */

/* eslint-enable */
