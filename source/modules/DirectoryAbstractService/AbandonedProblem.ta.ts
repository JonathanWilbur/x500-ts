/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_AbandonedProblem */
/**
 * @summary AbandonedProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbandonedProblem   ::=  ENUMERATED {
 *   pagingAbandoned (0) }
 * ```@enum {number}
 */
export enum _enum_for_AbandonedProblem {
    pagingAbandoned = 0,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AbandonedProblem */

/* START_OF_SYMBOL_DEFINITION AbandonedProblem */
/**
 * @summary AbandonedProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbandonedProblem   ::=  ENUMERATED {
 *   pagingAbandoned (0) }
 * ```@enum {number}
 */
export type AbandonedProblem = _enum_for_AbandonedProblem;
/* END_OF_SYMBOL_DEFINITION AbandonedProblem */

/* START_OF_SYMBOL_DEFINITION AbandonedProblem */
/**
 * @summary AbandonedProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbandonedProblem   ::=  ENUMERATED {
 *   pagingAbandoned (0) }
 * ```@enum {number}
 */
export const AbandonedProblem = _enum_for_AbandonedProblem;
/* END_OF_SYMBOL_DEFINITION AbandonedProblem */

/* START_OF_SYMBOL_DEFINITION AbandonedProblem_pagingAbandoned */
/**
 * @summary AbandonedProblem_pagingAbandoned
 * @constant
 * @type {number}
 */
export const AbandonedProblem_pagingAbandoned: AbandonedProblem =
    AbandonedProblem.pagingAbandoned; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AbandonedProblem_pagingAbandoned */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AbandonedProblem */
let _cached_decoder_for_AbandonedProblem: $.ASN1Decoder<
    AbandonedProblem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AbandonedProblem */

/* START_OF_SYMBOL_DEFINITION _decode_AbandonedProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) AbandonedProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AbandonedProblem} The decoded data structure.
 */
export function _decode_AbandonedProblem(el: _Element) {
    if (!_cached_decoder_for_AbandonedProblem) {
        _cached_decoder_for_AbandonedProblem = $._decodeEnumerated;
    }
    return _cached_decoder_for_AbandonedProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AbandonedProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AbandonedProblem */
let _cached_encoder_for_AbandonedProblem: $.ASN1Encoder<
    AbandonedProblem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AbandonedProblem */

/* START_OF_SYMBOL_DEFINITION _encode_AbandonedProblem */
/**
 * @summary Encodes a(n) AbandonedProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbandonedProblem, encoded as an ASN.1 Element.
 */
export function _encode_AbandonedProblem(
    value: AbandonedProblem,
    elGetter: $.ASN1Encoder<AbandonedProblem>
) {
    if (!_cached_encoder_for_AbandonedProblem) {
        _cached_encoder_for_AbandonedProblem = $._encodeEnumerated;
    }
    return _cached_encoder_for_AbandonedProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AbandonedProblem */

/* eslint-enable */
