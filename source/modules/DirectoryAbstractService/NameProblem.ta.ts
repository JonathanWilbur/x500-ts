/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION NameProblem */
/**
 * @summary NameProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameProblem  ::=  INTEGER {
 *   noSuchObject              (1),
 *   aliasProblem              (2),
 *   invalidAttributeSyntax    (3),
 *   aliasDereferencingProblem (4)
 *   -- not to be used         (5)-- }
 * ```
 */
export type NameProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION NameProblem */

/* START_OF_SYMBOL_DEFINITION NameProblem_noSuchObject */
/**
 * @summary NameProblem_noSuchObject
 * @constant
 * @type {number}
 */
export const NameProblem_noSuchObject: NameProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NameProblem_noSuchObject */

/* START_OF_SYMBOL_DEFINITION NameProblem_aliasProblem */
/**
 * @summary NameProblem_aliasProblem
 * @constant
 * @type {number}
 */
export const NameProblem_aliasProblem: NameProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NameProblem_aliasProblem */

/* START_OF_SYMBOL_DEFINITION NameProblem_invalidAttributeSyntax */
/**
 * @summary NameProblem_invalidAttributeSyntax
 * @constant
 * @type {number}
 */
export const NameProblem_invalidAttributeSyntax: NameProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NameProblem_invalidAttributeSyntax */

/* START_OF_SYMBOL_DEFINITION NameProblem_aliasDereferencingProblem */
/**
 * @summary NameProblem_aliasDereferencingProblem
 * @constant
 * @type {number}
 */
export const NameProblem_aliasDereferencingProblem: NameProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION NameProblem_aliasDereferencingProblem */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NameProblem */
let _cached_decoder_for_NameProblem: $.ASN1Decoder<NameProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NameProblem */

/* START_OF_SYMBOL_DEFINITION _decode_NameProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) NameProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameProblem} The decoded data structure.
 */
export function _decode_NameProblem(el: _Element) {
    if (!_cached_decoder_for_NameProblem) {
        _cached_decoder_for_NameProblem = $._decodeInteger;
    }
    return _cached_decoder_for_NameProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NameProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NameProblem */
let _cached_encoder_for_NameProblem: $.ASN1Encoder<NameProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NameProblem */

/* START_OF_SYMBOL_DEFINITION _encode_NameProblem */
/**
 * @summary Encodes a(n) NameProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameProblem, encoded as an ASN.1 Element.
 */
export function _encode_NameProblem(
    value: NameProblem,
    elGetter: $.ASN1Encoder<NameProblem>
) {
    if (!_cached_encoder_for_NameProblem) {
        _cached_encoder_for_NameProblem = $._encodeInteger;
    }
    return _cached_encoder_for_NameProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NameProblem */

/* eslint-enable */
