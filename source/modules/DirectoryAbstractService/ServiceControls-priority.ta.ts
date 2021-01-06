/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ServiceControls_priority */
/**
 * @summary ServiceControls_priority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceControls-priority ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ServiceControls_priority = INTEGER;
/* END_OF_SYMBOL_DEFINITION ServiceControls_priority */

/* START_OF_SYMBOL_DEFINITION ServiceControls_priority_low */
/**
 * @summary ServiceControls_priority_low
 * @constant
 * @type {number}
 */
export const ServiceControls_priority_low: ServiceControls_priority = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceControls_priority_low */

/* START_OF_SYMBOL_DEFINITION low */
/**
 * @summary ServiceControls_priority_low
 * @constant
 * @type {number}
 */
export const low: ServiceControls_priority = ServiceControls_priority_low; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION low */

/* START_OF_SYMBOL_DEFINITION ServiceControls_priority_medium */
/**
 * @summary ServiceControls_priority_medium
 * @constant
 * @type {number}
 */
export const ServiceControls_priority_medium: ServiceControls_priority = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceControls_priority_medium */

/* START_OF_SYMBOL_DEFINITION medium */
/**
 * @summary ServiceControls_priority_medium
 * @constant
 * @type {number}
 */
export const medium: ServiceControls_priority = ServiceControls_priority_medium; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION medium */

/* START_OF_SYMBOL_DEFINITION ServiceControls_priority_high */
/**
 * @summary ServiceControls_priority_high
 * @constant
 * @type {number}
 */
export const ServiceControls_priority_high: ServiceControls_priority = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceControls_priority_high */

/* START_OF_SYMBOL_DEFINITION high */
/**
 * @summary ServiceControls_priority_high
 * @constant
 * @type {number}
 */
export const high: ServiceControls_priority = ServiceControls_priority_high; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION high */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceControls_priority */
let _cached_decoder_for_ServiceControls_priority: $.ASN1Decoder<ServiceControls_priority> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceControls_priority */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceControls_priority */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceControls_priority
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceControls_priority} The decoded data structure.
 */
export function _decode_ServiceControls_priority(el: _Element) {
    if (!_cached_decoder_for_ServiceControls_priority) {
        _cached_decoder_for_ServiceControls_priority = $._decodeInteger;
    }
    return _cached_decoder_for_ServiceControls_priority(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceControls_priority */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceControls_priority */
let _cached_encoder_for_ServiceControls_priority: $.ASN1Encoder<ServiceControls_priority> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceControls_priority */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceControls_priority */
/**
 * @summary Encodes a(n) ServiceControls_priority into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceControls_priority, encoded as an ASN.1 Element.
 */
export function _encode_ServiceControls_priority(
    value: ServiceControls_priority,
    elGetter: $.ASN1Encoder<ServiceControls_priority>
) {
    if (!_cached_encoder_for_ServiceControls_priority) {
        _cached_encoder_for_ServiceControls_priority = $._encodeInteger;
    }
    return _cached_encoder_for_ServiceControls_priority(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceControls_priority */

/* eslint-enable */
