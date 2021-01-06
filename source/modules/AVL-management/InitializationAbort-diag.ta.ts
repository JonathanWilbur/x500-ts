/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_InitializationAbort_diag */
export enum _enum_for_InitializationAbort_diag {
    unsupportedVersion = 0,
    onlySingleVersionAllowed = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_InitializationAbort_diag */

/* START_OF_SYMBOL_DEFINITION InitializationAbort_diag */
/**
 * @summary InitializationAbort_diag
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializationAbort-diag ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type InitializationAbort_diag =
    | _enum_for_InitializationAbort_diag
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION InitializationAbort_diag */

/* START_OF_SYMBOL_DEFINITION InitializationAbort_diag_unsupportedVersion */
/**
 * @summary InitializationAbort_diag_unsupportedVersion
 * @constant
 * @type {number}
 */
export const InitializationAbort_diag_unsupportedVersion: InitializationAbort_diag = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InitializationAbort_diag_unsupportedVersion */

/* START_OF_SYMBOL_DEFINITION unsupportedVersion */
/**
 * @summary unsupportedVersion
 * @constant
 * @type {number}
 */
export const unsupportedVersion: InitializationAbort_diag = InitializationAbort_diag_unsupportedVersion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedVersion */

/* START_OF_SYMBOL_DEFINITION InitializationAbort_diag_onlySingleVersionAllowed */
/**
 * @summary InitializationAbort_diag_onlySingleVersionAllowed
 * @constant
 * @type {number}
 */
export const InitializationAbort_diag_onlySingleVersionAllowed: InitializationAbort_diag = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION InitializationAbort_diag_onlySingleVersionAllowed */

/* START_OF_SYMBOL_DEFINITION onlySingleVersionAllowed */
/**
 * @summary onlySingleVersionAllowed
 * @constant
 * @type {number}
 */
export const onlySingleVersionAllowed: InitializationAbort_diag = InitializationAbort_diag_onlySingleVersionAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION onlySingleVersionAllowed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InitializationAbort_diag */
let _cached_decoder_for_InitializationAbort_diag: $.ASN1Decoder<InitializationAbort_diag> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InitializationAbort_diag */

/* START_OF_SYMBOL_DEFINITION _decode_InitializationAbort_diag */
/**
 * @summary Decodes an ASN.1 element into a(n) InitializationAbort_diag
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitializationAbort_diag} The decoded data structure.
 */
export function _decode_InitializationAbort_diag(el: _Element) {
    if (!_cached_decoder_for_InitializationAbort_diag) {
        _cached_decoder_for_InitializationAbort_diag = $._decodeEnumerated;
    }
    return _cached_decoder_for_InitializationAbort_diag(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InitializationAbort_diag */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InitializationAbort_diag */
let _cached_encoder_for_InitializationAbort_diag: $.ASN1Encoder<InitializationAbort_diag> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InitializationAbort_diag */

/* START_OF_SYMBOL_DEFINITION _encode_InitializationAbort_diag */
/**
 * @summary Encodes a(n) InitializationAbort_diag into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializationAbort_diag, encoded as an ASN.1 Element.
 */
export function _encode_InitializationAbort_diag(
    value: InitializationAbort_diag,
    elGetter: $.ASN1Encoder<InitializationAbort_diag>
) {
    if (!_cached_encoder_for_InitializationAbort_diag) {
        _cached_encoder_for_InitializationAbort_diag = $._encodeEnumerated;
    }
    return _cached_encoder_for_InitializationAbort_diag(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InitializationAbort_diag */

/* eslint-enable */
