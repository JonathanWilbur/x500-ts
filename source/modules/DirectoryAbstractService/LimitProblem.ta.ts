/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION LimitProblem */
/**
 * @summary LimitProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LimitProblem  ::=  INTEGER {
 *   timeLimitExceeded           (0),
 *   sizeLimitExceeded           (1),
 *   administrativeLimitExceeded (2) }
 * ```
 */
export type LimitProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION LimitProblem */

/* START_OF_SYMBOL_DEFINITION LimitProblem_timeLimitExceeded */
/**
 * @summary LimitProblem_timeLimitExceeded
 * @constant
 * @type {number}
 */
export const LimitProblem_timeLimitExceeded: LimitProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION LimitProblem_timeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION timeLimitExceeded */
/**
 * @summary LimitProblem_timeLimitExceeded
 * @constant
 * @type {number}
 */
export const timeLimitExceeded: LimitProblem = LimitProblem_timeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION timeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION LimitProblem_sizeLimitExceeded */
/**
 * @summary LimitProblem_sizeLimitExceeded
 * @constant
 * @type {number}
 */
export const LimitProblem_sizeLimitExceeded: LimitProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION LimitProblem_sizeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION sizeLimitExceeded */
/**
 * @summary LimitProblem_sizeLimitExceeded
 * @constant
 * @type {number}
 */
export const sizeLimitExceeded: LimitProblem = LimitProblem_sizeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION sizeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION LimitProblem_administrativeLimitExceeded */
/**
 * @summary LimitProblem_administrativeLimitExceeded
 * @constant
 * @type {number}
 */
export const LimitProblem_administrativeLimitExceeded: LimitProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION LimitProblem_administrativeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION administrativeLimitExceeded */
/**
 * @summary LimitProblem_administrativeLimitExceeded
 * @constant
 * @type {number}
 */
export const administrativeLimitExceeded: LimitProblem = LimitProblem_administrativeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION administrativeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LimitProblem */
let _cached_decoder_for_LimitProblem: $.ASN1Decoder<LimitProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LimitProblem */

/* START_OF_SYMBOL_DEFINITION _decode_LimitProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) LimitProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LimitProblem} The decoded data structure.
 */
export function _decode_LimitProblem(el: _Element) {
    if (!_cached_decoder_for_LimitProblem) {
        _cached_decoder_for_LimitProblem = $._decodeInteger;
    }
    return _cached_decoder_for_LimitProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LimitProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LimitProblem */
let _cached_encoder_for_LimitProblem: $.ASN1Encoder<LimitProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LimitProblem */

/* START_OF_SYMBOL_DEFINITION _encode_LimitProblem */
/**
 * @summary Encodes a(n) LimitProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LimitProblem, encoded as an ASN.1 Element.
 */
export function _encode_LimitProblem(
    value: LimitProblem,
    elGetter: $.ASN1Encoder<LimitProblem>
) {
    if (!_cached_encoder_for_LimitProblem) {
        _cached_encoder_for_LimitProblem = $._encodeInteger;
    }
    return _cached_encoder_for_LimitProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LimitProblem */

/* eslint-enable */
