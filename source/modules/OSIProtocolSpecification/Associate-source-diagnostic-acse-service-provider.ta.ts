/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_provider */
/**
 * @summary Associate_source_diagnostic_acse_service_provider
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Associate-source-diagnostic-acse-service-provider ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Associate_source_diagnostic_acse_service_provider = INTEGER;
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_provider */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_provider_null_ */
/**
 * @summary Associate_source_diagnostic_acse_service_provider_null_
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_provider_null_: Associate_source_diagnostic_acse_service_provider = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_provider_null_ */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_provider_no_reason_given */
/**
 * @summary Associate_source_diagnostic_acse_service_provider_no_reason_given
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_provider_no_reason_given: Associate_source_diagnostic_acse_service_provider = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_provider_no_reason_given */

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_provider_no_common_acse_version */
/**
 * @summary Associate_source_diagnostic_acse_service_provider_no_common_acse_version
 * @constant
 * @type {number}
 */
export const Associate_source_diagnostic_acse_service_provider_no_common_acse_version: Associate_source_diagnostic_acse_service_provider = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic_acse_service_provider_no_common_acse_version */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_source_diagnostic_acse_service_provider */
let _cached_decoder_for_Associate_source_diagnostic_acse_service_provider: $.ASN1Decoder<
    Associate_source_diagnostic_acse_service_provider
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_source_diagnostic_acse_service_provider */

/* START_OF_SYMBOL_DEFINITION _decode_Associate_source_diagnostic_acse_service_provider */
/**
 * @summary Decodes an ASN.1 element into a(n) Associate_source_diagnostic_acse_service_provider
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Associate_source_diagnostic_acse_service_provider} The decoded data structure.
 */
export function _decode_Associate_source_diagnostic_acse_service_provider(
    el: _Element
) {
    if (
        !_cached_decoder_for_Associate_source_diagnostic_acse_service_provider
    ) {
        _cached_decoder_for_Associate_source_diagnostic_acse_service_provider =
            $._decodeInteger;
    }
    return _cached_decoder_for_Associate_source_diagnostic_acse_service_provider(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_Associate_source_diagnostic_acse_service_provider */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_source_diagnostic_acse_service_provider */
let _cached_encoder_for_Associate_source_diagnostic_acse_service_provider: $.ASN1Encoder<
    Associate_source_diagnostic_acse_service_provider
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_source_diagnostic_acse_service_provider */

/* START_OF_SYMBOL_DEFINITION _encode_Associate_source_diagnostic_acse_service_provider */
/**
 * @summary Encodes a(n) Associate_source_diagnostic_acse_service_provider into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_source_diagnostic_acse_service_provider, encoded as an ASN.1 Element.
 */
export function _encode_Associate_source_diagnostic_acse_service_provider(
    value: Associate_source_diagnostic_acse_service_provider,
    elGetter: $.ASN1Encoder<Associate_source_diagnostic_acse_service_provider>
) {
    if (
        !_cached_encoder_for_Associate_source_diagnostic_acse_service_provider
    ) {
        _cached_encoder_for_Associate_source_diagnostic_acse_service_provider =
            $._encodeInteger;
    }
    return _cached_encoder_for_Associate_source_diagnostic_acse_service_provider(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_Associate_source_diagnostic_acse_service_provider */

/* eslint-enable */
