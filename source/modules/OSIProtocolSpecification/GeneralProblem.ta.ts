/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION GeneralProblem */
/**
 * @summary GeneralProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralProblem  ::=  INTEGER {
 *   unrecognizedPDU          (0),
 *   mistypedPDU              (1),
 *   badlyStructuredPDU       (2) }
 * ```
 */
export type GeneralProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION GeneralProblem */

/* START_OF_SYMBOL_DEFINITION GeneralProblem_unrecognizedPDU */
/**
 * @summary GeneralProblem_unrecognizedPDU
 * @constant
 * @type {number}
 */
export const GeneralProblem_unrecognizedPDU: GeneralProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION GeneralProblem_unrecognizedPDU */

/* START_OF_SYMBOL_DEFINITION GeneralProblem_mistypedPDU */
/**
 * @summary GeneralProblem_mistypedPDU
 * @constant
 * @type {number}
 */
export const GeneralProblem_mistypedPDU: GeneralProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION GeneralProblem_mistypedPDU */

/* START_OF_SYMBOL_DEFINITION GeneralProblem_badlyStructuredPDU */
/**
 * @summary GeneralProblem_badlyStructuredPDU
 * @constant
 * @type {number}
 */
export const GeneralProblem_badlyStructuredPDU: GeneralProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION GeneralProblem_badlyStructuredPDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralProblem */
let _cached_decoder_for_GeneralProblem: $.ASN1Decoder<
    GeneralProblem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralProblem */

/* START_OF_SYMBOL_DEFINITION _decode_GeneralProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralProblem} The decoded data structure.
 */
export function _decode_GeneralProblem(el: _Element) {
    if (!_cached_decoder_for_GeneralProblem) {
        _cached_decoder_for_GeneralProblem = $._decodeInteger;
    }
    return _cached_decoder_for_GeneralProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GeneralProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralProblem */
let _cached_encoder_for_GeneralProblem: $.ASN1Encoder<
    GeneralProblem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralProblem */

/* START_OF_SYMBOL_DEFINITION _encode_GeneralProblem */
/**
 * @summary Encodes a(n) GeneralProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralProblem, encoded as an ASN.1 Element.
 */
export function _encode_GeneralProblem(
    value: GeneralProblem,
    elGetter: $.ASN1Encoder<GeneralProblem>
) {
    if (!_cached_encoder_for_GeneralProblem) {
        _cached_encoder_for_GeneralProblem = $._encodeInteger;
    }
    return _cached_encoder_for_GeneralProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GeneralProblem */

/* eslint-enable */
