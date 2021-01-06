/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AbandonProblem */
/**
 * @summary AbandonProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbandonProblem  ::=  INTEGER {
 *   noSuchOperation (1),
 *   tooLate         (2),
 *   cannotAbandon   (3) }
 * ```
 */
export type AbandonProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION AbandonProblem */

/* START_OF_SYMBOL_DEFINITION AbandonProblem_noSuchOperation */
/**
 * @summary AbandonProblem_noSuchOperation
 * @constant
 * @type {number}
 */
export const AbandonProblem_noSuchOperation: AbandonProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AbandonProblem_noSuchOperation */

/* START_OF_SYMBOL_DEFINITION noSuchOperation */
/**
 * @summary AbandonProblem_noSuchOperation
 * @constant
 * @type {number}
 */
export const noSuchOperation: AbandonProblem = AbandonProblem_noSuchOperation; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION noSuchOperation */

/* START_OF_SYMBOL_DEFINITION AbandonProblem_tooLate */
/**
 * @summary AbandonProblem_tooLate
 * @constant
 * @type {number}
 */
export const AbandonProblem_tooLate: AbandonProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AbandonProblem_tooLate */

/* START_OF_SYMBOL_DEFINITION tooLate */
/**
 * @summary AbandonProblem_tooLate
 * @constant
 * @type {number}
 */
export const tooLate: AbandonProblem = AbandonProblem_tooLate; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION tooLate */

/* START_OF_SYMBOL_DEFINITION AbandonProblem_cannotAbandon */
/**
 * @summary AbandonProblem_cannotAbandon
 * @constant
 * @type {number}
 */
export const AbandonProblem_cannotAbandon: AbandonProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION AbandonProblem_cannotAbandon */

/* START_OF_SYMBOL_DEFINITION cannotAbandon */
/**
 * @summary AbandonProblem_cannotAbandon
 * @constant
 * @type {number}
 */
export const cannotAbandon: AbandonProblem = AbandonProblem_cannotAbandon; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cannotAbandon */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AbandonProblem */
let _cached_decoder_for_AbandonProblem: $.ASN1Decoder<AbandonProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AbandonProblem */

/* START_OF_SYMBOL_DEFINITION _decode_AbandonProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) AbandonProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AbandonProblem} The decoded data structure.
 */
export function _decode_AbandonProblem(el: _Element) {
    if (!_cached_decoder_for_AbandonProblem) {
        _cached_decoder_for_AbandonProblem = $._decodeInteger;
    }
    return _cached_decoder_for_AbandonProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AbandonProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AbandonProblem */
let _cached_encoder_for_AbandonProblem: $.ASN1Encoder<AbandonProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AbandonProblem */

/* START_OF_SYMBOL_DEFINITION _encode_AbandonProblem */
/**
 * @summary Encodes a(n) AbandonProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbandonProblem, encoded as an ASN.1 Element.
 */
export function _encode_AbandonProblem(
    value: AbandonProblem,
    elGetter: $.ASN1Encoder<AbandonProblem>
) {
    if (!_cached_encoder_for_AbandonProblem) {
        _cached_encoder_for_AbandonProblem = $._encodeInteger;
    }
    return _cached_encoder_for_AbandonProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AbandonProblem */

/* eslint-enable */
