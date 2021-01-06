/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_AttributeUsage */
export enum _enum_for_AttributeUsage {
    userApplications = 0,
    directoryOperation = 1,
    distributedOperation = 2,
    dSAOperation = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AttributeUsage */

/* START_OF_SYMBOL_DEFINITION AttributeUsage */
/**
 * @summary AttributeUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeUsage  ::=  ENUMERATED {
 *   userApplications     (0),
 *   directoryOperation   (1),
 *   distributedOperation (2),
 *   dSAOperation         (3),
 *   ... }
 * ```@enum {number}
 */
export type AttributeUsage = _enum_for_AttributeUsage | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION AttributeUsage */

/* START_OF_SYMBOL_DEFINITION AttributeUsage_userApplications */
/**
 * @summary AttributeUsage_userApplications
 * @constant
 * @type {number}
 */
export const AttributeUsage_userApplications: AttributeUsage = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeUsage_userApplications */

/* START_OF_SYMBOL_DEFINITION userApplications */
/**
 * @summary userApplications
 * @constant
 * @type {number}
 */
export const userApplications: AttributeUsage = AttributeUsage_userApplications; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION userApplications */

/* START_OF_SYMBOL_DEFINITION AttributeUsage_directoryOperation */
/**
 * @summary AttributeUsage_directoryOperation
 * @constant
 * @type {number}
 */
export const AttributeUsage_directoryOperation: AttributeUsage = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeUsage_directoryOperation */

/* START_OF_SYMBOL_DEFINITION directoryOperation */
/**
 * @summary directoryOperation
 * @constant
 * @type {number}
 */
export const directoryOperation: AttributeUsage = AttributeUsage_directoryOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION directoryOperation */

/* START_OF_SYMBOL_DEFINITION AttributeUsage_distributedOperation */
/**
 * @summary AttributeUsage_distributedOperation
 * @constant
 * @type {number}
 */
export const AttributeUsage_distributedOperation: AttributeUsage = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeUsage_distributedOperation */

/* START_OF_SYMBOL_DEFINITION distributedOperation */
/**
 * @summary distributedOperation
 * @constant
 * @type {number}
 */
export const distributedOperation: AttributeUsage = AttributeUsage_distributedOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION distributedOperation */

/* START_OF_SYMBOL_DEFINITION AttributeUsage_dSAOperation */
/**
 * @summary AttributeUsage_dSAOperation
 * @constant
 * @type {number}
 */
export const AttributeUsage_dSAOperation: AttributeUsage = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeUsage_dSAOperation */

/* START_OF_SYMBOL_DEFINITION dSAOperation */
/**
 * @summary dSAOperation
 * @constant
 * @type {number}
 */
export const dSAOperation: AttributeUsage = AttributeUsage_dSAOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dSAOperation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeUsage */
let _cached_decoder_for_AttributeUsage: $.ASN1Decoder<AttributeUsage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeUsage */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeUsage */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeUsage
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeUsage} The decoded data structure.
 */
export function _decode_AttributeUsage(el: _Element) {
    if (!_cached_decoder_for_AttributeUsage) {
        _cached_decoder_for_AttributeUsage = $._decodeEnumerated;
    }
    return _cached_decoder_for_AttributeUsage(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeUsage */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeUsage */
let _cached_encoder_for_AttributeUsage: $.ASN1Encoder<AttributeUsage> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeUsage */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeUsage */
/**
 * @summary Encodes a(n) AttributeUsage into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeUsage, encoded as an ASN.1 Element.
 */
export function _encode_AttributeUsage(
    value: AttributeUsage,
    elGetter: $.ASN1Encoder<AttributeUsage>
) {
    if (!_cached_encoder_for_AttributeUsage) {
        _cached_encoder_for_AttributeUsage = $._encodeEnumerated;
    }
    return _cached_encoder_for_AttributeUsage(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeUsage */

/* eslint-enable */
