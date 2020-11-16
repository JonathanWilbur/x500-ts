/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AttributeProblem */
/**
 * @summary AttributeProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeProblem  ::=  INTEGER {
 *   noSuchAttributeOrValue        (1),
 *   invalidAttributeSyntax        (2),
 *   undefinedAttributeType        (3),
 *   inappropriateMatching         (4),
 *   constraintViolation           (5),
 *   attributeOrValueAlreadyExists (6),
 *   contextViolation              (7) }
 * ```
 */
export type AttributeProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION AttributeProblem */

/* START_OF_SYMBOL_DEFINITION AttributeProblem_noSuchAttributeOrValue */
/**
 * @summary AttributeProblem_noSuchAttributeOrValue
 * @constant
 * @type {number}
 */
export const AttributeProblem_noSuchAttributeOrValue: AttributeProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeProblem_noSuchAttributeOrValue */

/* START_OF_SYMBOL_DEFINITION AttributeProblem_invalidAttributeSyntax */
/**
 * @summary AttributeProblem_invalidAttributeSyntax
 * @constant
 * @type {number}
 */
export const AttributeProblem_invalidAttributeSyntax: AttributeProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeProblem_invalidAttributeSyntax */

/* START_OF_SYMBOL_DEFINITION AttributeProblem_undefinedAttributeType */
/**
 * @summary AttributeProblem_undefinedAttributeType
 * @constant
 * @type {number}
 */
export const AttributeProblem_undefinedAttributeType: AttributeProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeProblem_undefinedAttributeType */

/* START_OF_SYMBOL_DEFINITION AttributeProblem_inappropriateMatching */
/**
 * @summary AttributeProblem_inappropriateMatching
 * @constant
 * @type {number}
 */
export const AttributeProblem_inappropriateMatching: AttributeProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeProblem_inappropriateMatching */

/* START_OF_SYMBOL_DEFINITION AttributeProblem_constraintViolation */
/**
 * @summary AttributeProblem_constraintViolation
 * @constant
 * @type {number}
 */
export const AttributeProblem_constraintViolation: AttributeProblem = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeProblem_constraintViolation */

/* START_OF_SYMBOL_DEFINITION AttributeProblem_attributeOrValueAlreadyExists */
/**
 * @summary AttributeProblem_attributeOrValueAlreadyExists
 * @constant
 * @type {number}
 */
export const AttributeProblem_attributeOrValueAlreadyExists: AttributeProblem = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeProblem_attributeOrValueAlreadyExists */

/* START_OF_SYMBOL_DEFINITION AttributeProblem_contextViolation */
/**
 * @summary AttributeProblem_contextViolation
 * @constant
 * @type {number}
 */
export const AttributeProblem_contextViolation: AttributeProblem = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AttributeProblem_contextViolation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeProblem */
let _cached_decoder_for_AttributeProblem: $.ASN1Decoder<
    AttributeProblem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeProblem */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeProblem} The decoded data structure.
 */
export function _decode_AttributeProblem(el: _Element) {
    if (!_cached_decoder_for_AttributeProblem) {
        _cached_decoder_for_AttributeProblem = $._decodeInteger;
    }
    return _cached_decoder_for_AttributeProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeProblem */
let _cached_encoder_for_AttributeProblem: $.ASN1Encoder<
    AttributeProblem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeProblem */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeProblem */
/**
 * @summary Encodes a(n) AttributeProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeProblem, encoded as an ASN.1 Element.
 */
export function _encode_AttributeProblem(
    value: AttributeProblem,
    elGetter: $.ASN1Encoder<AttributeProblem>
) {
    if (!_cached_encoder_for_AttributeProblem) {
        _cached_encoder_for_AttributeProblem = $._encodeInteger;
    }
    return _cached_encoder_for_AttributeProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeProblem */

/* eslint-enable */
