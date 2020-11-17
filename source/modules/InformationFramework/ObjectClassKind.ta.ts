/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_ObjectClassKind */
/**
 * @summary ObjectClassKind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClassKind  ::=  ENUMERATED {
 *   abstract   (0),
 *   structural (1),
 *   auxiliary  (2)}
 * ```@enum {number}
 */
export enum _enum_for_ObjectClassKind {
    abstract = 0,
    structural = 1,
    auxiliary = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ObjectClassKind */

/* START_OF_SYMBOL_DEFINITION ObjectClassKind */
/**
 * @summary ObjectClassKind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClassKind  ::=  ENUMERATED {
 *   abstract   (0),
 *   structural (1),
 *   auxiliary  (2)}
 * ```@enum {number}
 */
export type ObjectClassKind = _enum_for_ObjectClassKind;
/* END_OF_SYMBOL_DEFINITION ObjectClassKind */

/* START_OF_SYMBOL_DEFINITION ObjectClassKind */
/**
 * @summary ObjectClassKind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClassKind  ::=  ENUMERATED {
 *   abstract   (0),
 *   structural (1),
 *   auxiliary  (2)}
 * ```@enum {number}
 */
export const ObjectClassKind = _enum_for_ObjectClassKind;
/* END_OF_SYMBOL_DEFINITION ObjectClassKind */

/* START_OF_SYMBOL_DEFINITION ObjectClassKind_abstract */
/**
 * @summary ObjectClassKind_abstract
 * @constant
 * @type {number}
 */
export const ObjectClassKind_abstract: ObjectClassKind =
    ObjectClassKind.abstract; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ObjectClassKind_abstract */

/* START_OF_SYMBOL_DEFINITION abstract */
/**
 * @summary abstract
 * @constant
 * @type {number}
 */
export const abstract: ObjectClassKind =
    ObjectClassKind.abstract; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION abstract */

/* START_OF_SYMBOL_DEFINITION ObjectClassKind_structural */
/**
 * @summary ObjectClassKind_structural
 * @constant
 * @type {number}
 */
export const ObjectClassKind_structural: ObjectClassKind =
    ObjectClassKind.structural; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ObjectClassKind_structural */

/* START_OF_SYMBOL_DEFINITION structural */
/**
 * @summary structural
 * @constant
 * @type {number}
 */
export const structural: ObjectClassKind =
    ObjectClassKind.structural; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION structural */

/* START_OF_SYMBOL_DEFINITION ObjectClassKind_auxiliary */
/**
 * @summary ObjectClassKind_auxiliary
 * @constant
 * @type {number}
 */
export const ObjectClassKind_auxiliary: ObjectClassKind =
    ObjectClassKind.auxiliary; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ObjectClassKind_auxiliary */

/* START_OF_SYMBOL_DEFINITION auxiliary */
/**
 * @summary auxiliary
 * @constant
 * @type {number}
 */
export const auxiliary: ObjectClassKind =
    ObjectClassKind.auxiliary; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION auxiliary */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectClassKind */
let _cached_decoder_for_ObjectClassKind: $.ASN1Decoder<
    ObjectClassKind
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectClassKind */

/* START_OF_SYMBOL_DEFINITION _decode_ObjectClassKind */
/**
 * @summary Decodes an ASN.1 element into a(n) ObjectClassKind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectClassKind} The decoded data structure.
 */
export function _decode_ObjectClassKind(el: _Element) {
    if (!_cached_decoder_for_ObjectClassKind) {
        _cached_decoder_for_ObjectClassKind = $._decodeEnumerated;
    }
    return _cached_decoder_for_ObjectClassKind(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ObjectClassKind */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectClassKind */
let _cached_encoder_for_ObjectClassKind: $.ASN1Encoder<
    ObjectClassKind
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectClassKind */

/* START_OF_SYMBOL_DEFINITION _encode_ObjectClassKind */
/**
 * @summary Encodes a(n) ObjectClassKind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectClassKind, encoded as an ASN.1 Element.
 */
export function _encode_ObjectClassKind(
    value: ObjectClassKind,
    elGetter: $.ASN1Encoder<ObjectClassKind>
) {
    if (!_cached_encoder_for_ObjectClassKind) {
        _cached_encoder_for_ObjectClassKind = $._encodeEnumerated;
    }
    return _cached_encoder_for_ObjectClassKind(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ObjectClassKind */

/* eslint-enable */
