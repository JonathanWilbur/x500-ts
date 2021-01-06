/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Provider_reason */
/**
 * @summary Provider_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Provider-reason  ::=  INTEGER {
 *   reason-not-specified                (0),
 *   temporary-congestion                (1),
 *   local-limit-exceeded                (2),
 *   called-presentation-address-unknown (3),
 *   protocol-version-not-supported      (4),
 *   default-context-not-supported       (5),
 *   user-data-not-readable              (6),
 *   no-PSAP-available                   (7)}
 * ```
 */
export type Provider_reason = INTEGER;
/* END_OF_SYMBOL_DEFINITION Provider_reason */

/* START_OF_SYMBOL_DEFINITION Provider_reason_reason_not_specified */
/**
 * @summary Provider_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const Provider_reason_reason_not_specified: Provider_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Provider_reason_reason_not_specified */

/* START_OF_SYMBOL_DEFINITION reason_not_specified */
/**
 * @summary Provider_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const reason_not_specified: Provider_reason = Provider_reason_reason_not_specified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reason_not_specified */

/* START_OF_SYMBOL_DEFINITION Provider_reason_temporary_congestion */
/**
 * @summary Provider_reason_temporary_congestion
 * @constant
 * @type {number}
 */
export const Provider_reason_temporary_congestion: Provider_reason = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Provider_reason_temporary_congestion */

/* START_OF_SYMBOL_DEFINITION temporary_congestion */
/**
 * @summary Provider_reason_temporary_congestion
 * @constant
 * @type {number}
 */
export const temporary_congestion: Provider_reason = Provider_reason_temporary_congestion; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION temporary_congestion */

/* START_OF_SYMBOL_DEFINITION Provider_reason_local_limit_exceeded */
/**
 * @summary Provider_reason_local_limit_exceeded
 * @constant
 * @type {number}
 */
export const Provider_reason_local_limit_exceeded: Provider_reason = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Provider_reason_local_limit_exceeded */

/* START_OF_SYMBOL_DEFINITION local_limit_exceeded */
/**
 * @summary Provider_reason_local_limit_exceeded
 * @constant
 * @type {number}
 */
export const local_limit_exceeded: Provider_reason = Provider_reason_local_limit_exceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION local_limit_exceeded */

/* START_OF_SYMBOL_DEFINITION Provider_reason_called_presentation_address_unknown */
/**
 * @summary Provider_reason_called_presentation_address_unknown
 * @constant
 * @type {number}
 */
export const Provider_reason_called_presentation_address_unknown: Provider_reason = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Provider_reason_called_presentation_address_unknown */

/* START_OF_SYMBOL_DEFINITION called_presentation_address_unknown */
/**
 * @summary Provider_reason_called_presentation_address_unknown
 * @constant
 * @type {number}
 */
export const called_presentation_address_unknown: Provider_reason = Provider_reason_called_presentation_address_unknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION called_presentation_address_unknown */

/* START_OF_SYMBOL_DEFINITION Provider_reason_protocol_version_not_supported */
/**
 * @summary Provider_reason_protocol_version_not_supported
 * @constant
 * @type {number}
 */
export const Provider_reason_protocol_version_not_supported: Provider_reason = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Provider_reason_protocol_version_not_supported */

/* START_OF_SYMBOL_DEFINITION protocol_version_not_supported */
/**
 * @summary Provider_reason_protocol_version_not_supported
 * @constant
 * @type {number}
 */
export const protocol_version_not_supported: Provider_reason = Provider_reason_protocol_version_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION protocol_version_not_supported */

/* START_OF_SYMBOL_DEFINITION Provider_reason_default_context_not_supported */
/**
 * @summary Provider_reason_default_context_not_supported
 * @constant
 * @type {number}
 */
export const Provider_reason_default_context_not_supported: Provider_reason = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Provider_reason_default_context_not_supported */

/* START_OF_SYMBOL_DEFINITION default_context_not_supported */
/**
 * @summary Provider_reason_default_context_not_supported
 * @constant
 * @type {number}
 */
export const default_context_not_supported: Provider_reason = Provider_reason_default_context_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION default_context_not_supported */

/* START_OF_SYMBOL_DEFINITION Provider_reason_user_data_not_readable */
/**
 * @summary Provider_reason_user_data_not_readable
 * @constant
 * @type {number}
 */
export const Provider_reason_user_data_not_readable: Provider_reason = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Provider_reason_user_data_not_readable */

/* START_OF_SYMBOL_DEFINITION user_data_not_readable */
/**
 * @summary Provider_reason_user_data_not_readable
 * @constant
 * @type {number}
 */
export const user_data_not_readable: Provider_reason = Provider_reason_user_data_not_readable; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION user_data_not_readable */

/* START_OF_SYMBOL_DEFINITION Provider_reason_no_PSAP_available */
/**
 * @summary Provider_reason_no_PSAP_available
 * @constant
 * @type {number}
 */
export const Provider_reason_no_PSAP_available: Provider_reason = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Provider_reason_no_PSAP_available */

/* START_OF_SYMBOL_DEFINITION no_PSAP_available */
/**
 * @summary Provider_reason_no_PSAP_available
 * @constant
 * @type {number}
 */
export const no_PSAP_available: Provider_reason = Provider_reason_no_PSAP_available; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_PSAP_available */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Provider_reason */
let _cached_decoder_for_Provider_reason: $.ASN1Decoder<Provider_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Provider_reason */

/* START_OF_SYMBOL_DEFINITION _decode_Provider_reason */
/**
 * @summary Decodes an ASN.1 element into a(n) Provider_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Provider_reason} The decoded data structure.
 */
export function _decode_Provider_reason(el: _Element) {
    if (!_cached_decoder_for_Provider_reason) {
        _cached_decoder_for_Provider_reason = $._decodeInteger;
    }
    return _cached_decoder_for_Provider_reason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Provider_reason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Provider_reason */
let _cached_encoder_for_Provider_reason: $.ASN1Encoder<Provider_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Provider_reason */

/* START_OF_SYMBOL_DEFINITION _encode_Provider_reason */
/**
 * @summary Encodes a(n) Provider_reason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Provider_reason, encoded as an ASN.1 Element.
 */
export function _encode_Provider_reason(
    value: Provider_reason,
    elGetter: $.ASN1Encoder<Provider_reason>
) {
    if (!_cached_encoder_for_Provider_reason) {
        _cached_encoder_for_Provider_reason = $._encodeInteger;
    }
    return _cached_encoder_for_Provider_reason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Provider_reason */

/* eslint-enable */
