/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_ZonalResult */
export enum _enum_for_ZonalResult {
    cannot_select_mapping = 0,
    zero_mappings = 2,
    multiple_mappings = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ZonalResult */

/* START_OF_SYMBOL_DEFINITION ZonalResult */
/**
 * @summary ZonalResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ZonalResult  ::=  ENUMERATED {
 *   cannot-select-mapping (0),
 *   zero-mappings         (2),
 *   multiple-mappings     (3),
 *    ... }
 * ```@enum {number}
 */
export type ZonalResult = _enum_for_ZonalResult | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION ZonalResult */

/* START_OF_SYMBOL_DEFINITION ZonalResult_cannot_select_mapping */
/**
 * @summary ZonalResult_cannot_select_mapping
 * @constant
 * @type {number}
 */
export const ZonalResult_cannot_select_mapping: ZonalResult = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ZonalResult_cannot_select_mapping */

/* START_OF_SYMBOL_DEFINITION ZonalResult_zero_mappings */
/**
 * @summary ZonalResult_zero_mappings
 * @constant
 * @type {number}
 */
export const ZonalResult_zero_mappings: ZonalResult = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ZonalResult_zero_mappings */

/* START_OF_SYMBOL_DEFINITION ZonalResult_multiple_mappings */
/**
 * @summary ZonalResult_multiple_mappings
 * @constant
 * @type {number}
 */
export const ZonalResult_multiple_mappings: ZonalResult = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ZonalResult_multiple_mappings */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ZonalResult */
let _cached_decoder_for_ZonalResult: $.ASN1Decoder<ZonalResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ZonalResult */

/* START_OF_SYMBOL_DEFINITION _decode_ZonalResult */
/**
 * @summary Decodes an ASN.1 element into a(n) ZonalResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ZonalResult} The decoded data structure.
 */
export function _decode_ZonalResult(el: _Element) {
    if (!_cached_decoder_for_ZonalResult) {
        _cached_decoder_for_ZonalResult = $._decodeEnumerated;
    }
    return _cached_decoder_for_ZonalResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ZonalResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ZonalResult */
let _cached_encoder_for_ZonalResult: $.ASN1Encoder<ZonalResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ZonalResult */

/* START_OF_SYMBOL_DEFINITION _encode_ZonalResult */
/**
 * @summary Encodes a(n) ZonalResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ZonalResult, encoded as an ASN.1 Element.
 */
export function _encode_ZonalResult(
    value: ZonalResult,
    elGetter: $.ASN1Encoder<ZonalResult>
) {
    if (!_cached_encoder_for_ZonalResult) {
        _cached_encoder_for_ZonalResult = $._encodeEnumerated;
    }
    return _cached_encoder_for_ZonalResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ZonalResult */

/* eslint-enable */
