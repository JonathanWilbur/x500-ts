/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ServiceControls_scopeOfReferral */
/**
 * @summary ServiceControls_scopeOfReferral
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceControls-scopeOfReferral ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ServiceControls_scopeOfReferral = INTEGER;
/* END_OF_SYMBOL_DEFINITION ServiceControls_scopeOfReferral */

/* START_OF_SYMBOL_DEFINITION ServiceControls_scopeOfReferral_dmd */
/**
 * @summary ServiceControls_scopeOfReferral_dmd
 * @constant
 * @type {number}
 */
export const ServiceControls_scopeOfReferral_dmd: ServiceControls_scopeOfReferral = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceControls_scopeOfReferral_dmd */

/* START_OF_SYMBOL_DEFINITION dmd */
/**
 * @summary ServiceControls_scopeOfReferral_dmd
 * @constant
 * @type {number}
 */
export const dmd: ServiceControls_scopeOfReferral = ServiceControls_scopeOfReferral_dmd; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION dmd */

/* START_OF_SYMBOL_DEFINITION ServiceControls_scopeOfReferral_country */
/**
 * @summary ServiceControls_scopeOfReferral_country
 * @constant
 * @type {number}
 */
export const ServiceControls_scopeOfReferral_country: ServiceControls_scopeOfReferral = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceControls_scopeOfReferral_country */

/* START_OF_SYMBOL_DEFINITION country */
/**
 * @summary ServiceControls_scopeOfReferral_country
 * @constant
 * @type {number}
 */
export const country: ServiceControls_scopeOfReferral = ServiceControls_scopeOfReferral_country; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION country */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceControls_scopeOfReferral */
let _cached_decoder_for_ServiceControls_scopeOfReferral: $.ASN1Decoder<
    ServiceControls_scopeOfReferral
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceControls_scopeOfReferral */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceControls_scopeOfReferral */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceControls_scopeOfReferral
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceControls_scopeOfReferral} The decoded data structure.
 */
export function _decode_ServiceControls_scopeOfReferral(el: _Element) {
    if (!_cached_decoder_for_ServiceControls_scopeOfReferral) {
        _cached_decoder_for_ServiceControls_scopeOfReferral = $._decodeInteger;
    }
    return _cached_decoder_for_ServiceControls_scopeOfReferral(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceControls_scopeOfReferral */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceControls_scopeOfReferral */
let _cached_encoder_for_ServiceControls_scopeOfReferral: $.ASN1Encoder<
    ServiceControls_scopeOfReferral
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceControls_scopeOfReferral */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceControls_scopeOfReferral */
/**
 * @summary Encodes a(n) ServiceControls_scopeOfReferral into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceControls_scopeOfReferral, encoded as an ASN.1 Element.
 */
export function _encode_ServiceControls_scopeOfReferral(
    value: ServiceControls_scopeOfReferral,
    elGetter: $.ASN1Encoder<ServiceControls_scopeOfReferral>
) {
    if (!_cached_encoder_for_ServiceControls_scopeOfReferral) {
        _cached_encoder_for_ServiceControls_scopeOfReferral = $._encodeInteger;
    }
    return _cached_encoder_for_ServiceControls_scopeOfReferral(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceControls_scopeOfReferral */

/* eslint-enable */
