/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_EpcFormat_fields_Item_result */
/**
 * @summary EpcFormat_fields_Item_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EpcFormat-fields-Item-result ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_EpcFormat_fields_Item_result {
    numericPad = 0,
    numeric = 1,
    alpha7bits = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_EpcFormat_fields_Item_result */

/* START_OF_SYMBOL_DEFINITION EpcFormat_fields_Item_result */
/**
 * @summary EpcFormat_fields_Item_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EpcFormat-fields-Item-result ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type EpcFormat_fields_Item_result = _enum_for_EpcFormat_fields_Item_result;
/* END_OF_SYMBOL_DEFINITION EpcFormat_fields_Item_result */

/* START_OF_SYMBOL_DEFINITION EpcFormat_fields_Item_result */
/**
 * @summary EpcFormat_fields_Item_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EpcFormat-fields-Item-result ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const EpcFormat_fields_Item_result = _enum_for_EpcFormat_fields_Item_result;
/* END_OF_SYMBOL_DEFINITION EpcFormat_fields_Item_result */

/* START_OF_SYMBOL_DEFINITION EpcFormat_fields_Item_result_numericPad */
/**
 * @summary EpcFormat_fields_Item_result_numericPad
 * @constant
 * @type {number}
 */
export const EpcFormat_fields_Item_result_numericPad: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.numericPad; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EpcFormat_fields_Item_result_numericPad */

/* START_OF_SYMBOL_DEFINITION numericPad */
/**
 * @summary numericPad
 * @constant
 * @type {number}
 */
export const numericPad: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.numericPad; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION numericPad */

/* START_OF_SYMBOL_DEFINITION EpcFormat_fields_Item_result_numeric */
/**
 * @summary EpcFormat_fields_Item_result_numeric
 * @constant
 * @type {number}
 */
export const EpcFormat_fields_Item_result_numeric: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.numeric; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EpcFormat_fields_Item_result_numeric */

/* START_OF_SYMBOL_DEFINITION numeric */
/**
 * @summary numeric
 * @constant
 * @type {number}
 */
export const numeric: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.numeric; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION numeric */

/* START_OF_SYMBOL_DEFINITION EpcFormat_fields_Item_result_alpha7bits */
/**
 * @summary EpcFormat_fields_Item_result_alpha7bits
 * @constant
 * @type {number}
 */
export const EpcFormat_fields_Item_result_alpha7bits: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.alpha7bits; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EpcFormat_fields_Item_result_alpha7bits */

/* START_OF_SYMBOL_DEFINITION alpha7bits */
/**
 * @summary alpha7bits
 * @constant
 * @type {number}
 */
export const alpha7bits: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.alpha7bits; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION alpha7bits */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EpcFormat_fields_Item_result */
let _cached_decoder_for_EpcFormat_fields_Item_result: $.ASN1Decoder<EpcFormat_fields_Item_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EpcFormat_fields_Item_result */

/* START_OF_SYMBOL_DEFINITION _decode_EpcFormat_fields_Item_result */
/**
 * @summary Decodes an ASN.1 element into a(n) EpcFormat_fields_Item_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EpcFormat_fields_Item_result} The decoded data structure.
 */
export function _decode_EpcFormat_fields_Item_result(el: _Element) {
    if (!_cached_decoder_for_EpcFormat_fields_Item_result) {
        _cached_decoder_for_EpcFormat_fields_Item_result = $._decodeEnumerated;
    }
    return _cached_decoder_for_EpcFormat_fields_Item_result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EpcFormat_fields_Item_result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EpcFormat_fields_Item_result */
let _cached_encoder_for_EpcFormat_fields_Item_result: $.ASN1Encoder<EpcFormat_fields_Item_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EpcFormat_fields_Item_result */

/* START_OF_SYMBOL_DEFINITION _encode_EpcFormat_fields_Item_result */
/**
 * @summary Encodes a(n) EpcFormat_fields_Item_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EpcFormat_fields_Item_result, encoded as an ASN.1 Element.
 */
export function _encode_EpcFormat_fields_Item_result(
    value: EpcFormat_fields_Item_result,
    elGetter: $.ASN1Encoder<EpcFormat_fields_Item_result>
) {
    if (!_cached_encoder_for_EpcFormat_fields_Item_result) {
        _cached_encoder_for_EpcFormat_fields_Item_result = $._encodeEnumerated;
    }
    return _cached_encoder_for_EpcFormat_fields_Item_result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EpcFormat_fields_Item_result */

/* eslint-enable */
