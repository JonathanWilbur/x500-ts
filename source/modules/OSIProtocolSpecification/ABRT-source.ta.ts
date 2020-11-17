/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ABRT_source */
/**
 * @summary ABRT_source
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ABRT-source  ::=  INTEGER {
 *   acse-service-user     (0),
 *   acse-service-provider (1) }
 * ```
 */
export type ABRT_source = INTEGER;
/* END_OF_SYMBOL_DEFINITION ABRT_source */

/* START_OF_SYMBOL_DEFINITION ABRT_source_acse_service_user */
/**
 * @summary ABRT_source_acse_service_user
 * @constant
 * @type {number}
 */
export const ABRT_source_acse_service_user: ABRT_source = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ABRT_source_acse_service_user */

/* START_OF_SYMBOL_DEFINITION acse_service_user */
/**
 * @summary ABRT_source_acse_service_user
 * @constant
 * @type {number}
 */
export const acse_service_user: ABRT_source = ABRT_source_acse_service_user; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION acse_service_user */

/* START_OF_SYMBOL_DEFINITION ABRT_source_acse_service_provider */
/**
 * @summary ABRT_source_acse_service_provider
 * @constant
 * @type {number}
 */
export const ABRT_source_acse_service_provider: ABRT_source = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ABRT_source_acse_service_provider */

/* START_OF_SYMBOL_DEFINITION acse_service_provider */
/**
 * @summary ABRT_source_acse_service_provider
 * @constant
 * @type {number}
 */
export const acse_service_provider: ABRT_source = ABRT_source_acse_service_provider; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION acse_service_provider */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ABRT_source */
let _cached_decoder_for_ABRT_source: $.ASN1Decoder<ABRT_source> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ABRT_source */

/* START_OF_SYMBOL_DEFINITION _decode_ABRT_source */
/**
 * @summary Decodes an ASN.1 element into a(n) ABRT_source
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ABRT_source} The decoded data structure.
 */
export function _decode_ABRT_source(el: _Element) {
    if (!_cached_decoder_for_ABRT_source) {
        _cached_decoder_for_ABRT_source = $._decodeInteger;
    }
    return _cached_decoder_for_ABRT_source(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ABRT_source */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ABRT_source */
let _cached_encoder_for_ABRT_source: $.ASN1Encoder<ABRT_source> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ABRT_source */

/* START_OF_SYMBOL_DEFINITION _encode_ABRT_source */
/**
 * @summary Encodes a(n) ABRT_source into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ABRT_source, encoded as an ASN.1 Element.
 */
export function _encode_ABRT_source(
    value: ABRT_source,
    elGetter: $.ASN1Encoder<ABRT_source>
) {
    if (!_cached_encoder_for_ABRT_source) {
        _cached_encoder_for_ABRT_source = $._encodeInteger;
    }
    return _cached_encoder_for_ABRT_source(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ABRT_source */

/* eslint-enable */
