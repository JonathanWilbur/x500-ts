/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_RequestShadowUpdateArgumentData_requestedStrategy_standard */
export enum _enum_for_RequestShadowUpdateArgumentData_requestedStrategy_standard {
    incremental = 1,
    total = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_RequestShadowUpdateArgumentData_requestedStrategy_standard */

/* START_OF_SYMBOL_DEFINITION RequestShadowUpdateArgumentData_requestedStrategy_standard */
/**
 * @summary RequestShadowUpdateArgumentData_requestedStrategy_standard
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestShadowUpdateArgumentData-requestedStrategy-standard ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type RequestShadowUpdateArgumentData_requestedStrategy_standard =
    | _enum_for_RequestShadowUpdateArgumentData_requestedStrategy_standard
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION RequestShadowUpdateArgumentData_requestedStrategy_standard */

/* START_OF_SYMBOL_DEFINITION RequestShadowUpdateArgumentData_requestedStrategy_standard_incremental */
/**
 * @summary RequestShadowUpdateArgumentData_requestedStrategy_standard_incremental
 * @constant
 * @type {number}
 */
export const RequestShadowUpdateArgumentData_requestedStrategy_standard_incremental: RequestShadowUpdateArgumentData_requestedStrategy_standard = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestShadowUpdateArgumentData_requestedStrategy_standard_incremental */

/* START_OF_SYMBOL_DEFINITION incremental */
/**
 * @summary incremental
 * @constant
 * @type {number}
 */
export const incremental: RequestShadowUpdateArgumentData_requestedStrategy_standard = RequestShadowUpdateArgumentData_requestedStrategy_standard_incremental; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION incremental */

/* START_OF_SYMBOL_DEFINITION RequestShadowUpdateArgumentData_requestedStrategy_standard_total */
/**
 * @summary RequestShadowUpdateArgumentData_requestedStrategy_standard_total
 * @constant
 * @type {number}
 */
export const RequestShadowUpdateArgumentData_requestedStrategy_standard_total: RequestShadowUpdateArgumentData_requestedStrategy_standard = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestShadowUpdateArgumentData_requestedStrategy_standard_total */

/* START_OF_SYMBOL_DEFINITION total */
/**
 * @summary total
 * @constant
 * @type {number}
 */
export const total: RequestShadowUpdateArgumentData_requestedStrategy_standard = RequestShadowUpdateArgumentData_requestedStrategy_standard_total; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION total */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard */
let _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard: $.ASN1Decoder<
    RequestShadowUpdateArgumentData_requestedStrategy_standard
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard */

/* START_OF_SYMBOL_DEFINITION _decode_RequestShadowUpdateArgumentData_requestedStrategy_standard */
/**
 * @summary Decodes an ASN.1 element into a(n) RequestShadowUpdateArgumentData_requestedStrategy_standard
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestShadowUpdateArgumentData_requestedStrategy_standard} The decoded data structure.
 */
export function _decode_RequestShadowUpdateArgumentData_requestedStrategy_standard(
    el: _Element
) {
    if (
        !_cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard
    ) {
        _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_RequestShadowUpdateArgumentData_requestedStrategy_standard */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard */
let _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard: $.ASN1Encoder<
    RequestShadowUpdateArgumentData_requestedStrategy_standard
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard */

/* START_OF_SYMBOL_DEFINITION _encode_RequestShadowUpdateArgumentData_requestedStrategy_standard */
/**
 * @summary Encodes a(n) RequestShadowUpdateArgumentData_requestedStrategy_standard into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestShadowUpdateArgumentData_requestedStrategy_standard, encoded as an ASN.1 Element.
 */
export function _encode_RequestShadowUpdateArgumentData_requestedStrategy_standard(
    value: RequestShadowUpdateArgumentData_requestedStrategy_standard,
    elGetter: $.ASN1Encoder<
        RequestShadowUpdateArgumentData_requestedStrategy_standard
    >
) {
    if (
        !_cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard
    ) {
        _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_RequestShadowUpdateArgumentData_requestedStrategy_standard */

/* eslint-enable */
