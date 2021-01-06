/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_InitializationRej_diag */
export enum _enum_for_InitializationRej_diag {
    unsupportedVersion = 0,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_InitializationRej_diag */

/* START_OF_SYMBOL_DEFINITION InitializationRej_diag */
/**
 * @summary InitializationRej_diag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationRej-diag ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type InitializationRej_diag =
    | _enum_for_InitializationRej_diag
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION InitializationRej_diag */

/* START_OF_SYMBOL_DEFINITION InitializationRej_diag_unsupportedVersion */
/**
 * @summary InitializationRej_diag_unsupportedVersion
 * @constant
 * @type {number}
 */
export const InitializationRej_diag_unsupportedVersion: InitializationRej_diag = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InitializationRej_diag_unsupportedVersion */

/* START_OF_SYMBOL_DEFINITION unsupportedVersion */
/**
 * @summary unsupportedVersion
 * @constant
 * @type {number}
 */
export const unsupportedVersion: InitializationRej_diag = InitializationRej_diag_unsupportedVersion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedVersion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InitializationRej_diag */
let _cached_decoder_for_InitializationRej_diag: $.ASN1Decoder<InitializationRej_diag> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InitializationRej_diag */

/* START_OF_SYMBOL_DEFINITION _decode_InitializationRej_diag */
/**
 * @summary Decodes an ASN.1 element into a(n) InitializationRej_diag
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitializationRej_diag} The decoded data structure.
 */
export function _decode_InitializationRej_diag(el: _Element) {
    if (!_cached_decoder_for_InitializationRej_diag) {
        _cached_decoder_for_InitializationRej_diag = $._decodeEnumerated;
    }
    return _cached_decoder_for_InitializationRej_diag(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InitializationRej_diag */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InitializationRej_diag */
let _cached_encoder_for_InitializationRej_diag: $.ASN1Encoder<InitializationRej_diag> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InitializationRej_diag */

/* START_OF_SYMBOL_DEFINITION _encode_InitializationRej_diag */
/**
 * @summary Encodes a(n) InitializationRej_diag into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializationRej_diag, encoded as an ASN.1 Element.
 */
export function _encode_InitializationRej_diag(
    value: InitializationRej_diag,
    elGetter: $.ASN1Encoder<InitializationRej_diag>
) {
    if (!_cached_encoder_for_InitializationRej_diag) {
        _cached_encoder_for_InitializationRej_diag = $._encodeEnumerated;
    }
    return _cached_encoder_for_InitializationRej_diag(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InitializationRej_diag */

/* eslint-enable */
