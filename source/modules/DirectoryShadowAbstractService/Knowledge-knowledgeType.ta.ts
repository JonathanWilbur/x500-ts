/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_Knowledge_knowledgeType */
/**
 * @summary Knowledge_knowledgeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Knowledge-knowledgeType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_Knowledge_knowledgeType {
    master = 0,
    shadow = 1,
    both = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Knowledge_knowledgeType */

/* START_OF_SYMBOL_DEFINITION Knowledge_knowledgeType */
/**
 * @summary Knowledge_knowledgeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Knowledge-knowledgeType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type Knowledge_knowledgeType = _enum_for_Knowledge_knowledgeType;
/* END_OF_SYMBOL_DEFINITION Knowledge_knowledgeType */

/* START_OF_SYMBOL_DEFINITION Knowledge_knowledgeType */
/**
 * @summary Knowledge_knowledgeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Knowledge-knowledgeType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const Knowledge_knowledgeType = _enum_for_Knowledge_knowledgeType;
/* END_OF_SYMBOL_DEFINITION Knowledge_knowledgeType */

/* START_OF_SYMBOL_DEFINITION Knowledge_knowledgeType_master */
/**
 * @summary Knowledge_knowledgeType_master
 * @constant
 * @type {number}
 */
export const Knowledge_knowledgeType_master: Knowledge_knowledgeType =
    Knowledge_knowledgeType.master; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Knowledge_knowledgeType_master */

/* START_OF_SYMBOL_DEFINITION master */
/**
 * @summary master
 * @constant
 * @type {number}
 */
export const master: Knowledge_knowledgeType =
    Knowledge_knowledgeType.master; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION master */

/* START_OF_SYMBOL_DEFINITION Knowledge_knowledgeType_shadow */
/**
 * @summary Knowledge_knowledgeType_shadow
 * @constant
 * @type {number}
 */
export const Knowledge_knowledgeType_shadow: Knowledge_knowledgeType =
    Knowledge_knowledgeType.shadow; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Knowledge_knowledgeType_shadow */

/* START_OF_SYMBOL_DEFINITION shadow */
/**
 * @summary shadow
 * @constant
 * @type {number}
 */
export const shadow: Knowledge_knowledgeType =
    Knowledge_knowledgeType.shadow; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION shadow */

/* START_OF_SYMBOL_DEFINITION Knowledge_knowledgeType_both */
/**
 * @summary Knowledge_knowledgeType_both
 * @constant
 * @type {number}
 */
export const Knowledge_knowledgeType_both: Knowledge_knowledgeType =
    Knowledge_knowledgeType.both; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Knowledge_knowledgeType_both */

/* START_OF_SYMBOL_DEFINITION both */
/**
 * @summary both
 * @constant
 * @type {number}
 */
export const both: Knowledge_knowledgeType =
    Knowledge_knowledgeType.both; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION both */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Knowledge_knowledgeType */
let _cached_decoder_for_Knowledge_knowledgeType: $.ASN1Decoder<
    Knowledge_knowledgeType
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Knowledge_knowledgeType */

/* START_OF_SYMBOL_DEFINITION _decode_Knowledge_knowledgeType */
/**
 * @summary Decodes an ASN.1 element into a(n) Knowledge_knowledgeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Knowledge_knowledgeType} The decoded data structure.
 */
export function _decode_Knowledge_knowledgeType(el: _Element) {
    if (!_cached_decoder_for_Knowledge_knowledgeType) {
        _cached_decoder_for_Knowledge_knowledgeType = $._decodeEnumerated;
    }
    return _cached_decoder_for_Knowledge_knowledgeType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Knowledge_knowledgeType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Knowledge_knowledgeType */
let _cached_encoder_for_Knowledge_knowledgeType: $.ASN1Encoder<
    Knowledge_knowledgeType
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Knowledge_knowledgeType */

/* START_OF_SYMBOL_DEFINITION _encode_Knowledge_knowledgeType */
/**
 * @summary Encodes a(n) Knowledge_knowledgeType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Knowledge_knowledgeType, encoded as an ASN.1 Element.
 */
export function _encode_Knowledge_knowledgeType(
    value: Knowledge_knowledgeType,
    elGetter: $.ASN1Encoder<Knowledge_knowledgeType>
) {
    if (!_cached_encoder_for_Knowledge_knowledgeType) {
        _cached_encoder_for_Knowledge_knowledgeType = $._encodeEnumerated;
    }
    return _cached_encoder_for_Knowledge_knowledgeType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Knowledge_knowledgeType */

/* eslint-enable */
