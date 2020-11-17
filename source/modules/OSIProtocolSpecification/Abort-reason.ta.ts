/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Abort_reason */
/**
 * @summary Abort_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abort-reason  ::=  INTEGER {
 *   reason-not-specified                 (0),
 *   unrecognized-ppdu                    (1),
 *   unexpected-ppdu                      (2),
 *   unexpected-session-service-primitive (3),
 *   unrecognized-ppdu-parameter          (4),
 *   unexpected-ppdu-parameter            (5),
 *   invalid-ppdu-parameter-value         (6)}
 * ```
 */
export type Abort_reason = INTEGER;
/* END_OF_SYMBOL_DEFINITION Abort_reason */

/* START_OF_SYMBOL_DEFINITION Abort_reason_reason_not_specified */
/**
 * @summary Abort_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const Abort_reason_reason_not_specified: Abort_reason = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_reason_reason_not_specified */

/* START_OF_SYMBOL_DEFINITION reason_not_specified */
/**
 * @summary Abort_reason_reason_not_specified
 * @constant
 * @type {number}
 */
export const reason_not_specified: Abort_reason = Abort_reason_reason_not_specified; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reason_not_specified */

/* START_OF_SYMBOL_DEFINITION Abort_reason_unrecognized_ppdu */
/**
 * @summary Abort_reason_unrecognized_ppdu
 * @constant
 * @type {number}
 */
export const Abort_reason_unrecognized_ppdu: Abort_reason = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_reason_unrecognized_ppdu */

/* START_OF_SYMBOL_DEFINITION unrecognized_ppdu */
/**
 * @summary Abort_reason_unrecognized_ppdu
 * @constant
 * @type {number}
 */
export const unrecognized_ppdu: Abort_reason = Abort_reason_unrecognized_ppdu; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognized_ppdu */

/* START_OF_SYMBOL_DEFINITION Abort_reason_unexpected_ppdu */
/**
 * @summary Abort_reason_unexpected_ppdu
 * @constant
 * @type {number}
 */
export const Abort_reason_unexpected_ppdu: Abort_reason = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_reason_unexpected_ppdu */

/* START_OF_SYMBOL_DEFINITION unexpected_ppdu */
/**
 * @summary Abort_reason_unexpected_ppdu
 * @constant
 * @type {number}
 */
export const unexpected_ppdu: Abort_reason = Abort_reason_unexpected_ppdu; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unexpected_ppdu */

/* START_OF_SYMBOL_DEFINITION Abort_reason_unexpected_session_service_primitive */
/**
 * @summary Abort_reason_unexpected_session_service_primitive
 * @constant
 * @type {number}
 */
export const Abort_reason_unexpected_session_service_primitive: Abort_reason = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_reason_unexpected_session_service_primitive */

/* START_OF_SYMBOL_DEFINITION unexpected_session_service_primitive */
/**
 * @summary Abort_reason_unexpected_session_service_primitive
 * @constant
 * @type {number}
 */
export const unexpected_session_service_primitive: Abort_reason = Abort_reason_unexpected_session_service_primitive; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unexpected_session_service_primitive */

/* START_OF_SYMBOL_DEFINITION Abort_reason_unrecognized_ppdu_parameter */
/**
 * @summary Abort_reason_unrecognized_ppdu_parameter
 * @constant
 * @type {number}
 */
export const Abort_reason_unrecognized_ppdu_parameter: Abort_reason = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_reason_unrecognized_ppdu_parameter */

/* START_OF_SYMBOL_DEFINITION unrecognized_ppdu_parameter */
/**
 * @summary Abort_reason_unrecognized_ppdu_parameter
 * @constant
 * @type {number}
 */
export const unrecognized_ppdu_parameter: Abort_reason = Abort_reason_unrecognized_ppdu_parameter; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unrecognized_ppdu_parameter */

/* START_OF_SYMBOL_DEFINITION Abort_reason_unexpected_ppdu_parameter */
/**
 * @summary Abort_reason_unexpected_ppdu_parameter
 * @constant
 * @type {number}
 */
export const Abort_reason_unexpected_ppdu_parameter: Abort_reason = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_reason_unexpected_ppdu_parameter */

/* START_OF_SYMBOL_DEFINITION unexpected_ppdu_parameter */
/**
 * @summary Abort_reason_unexpected_ppdu_parameter
 * @constant
 * @type {number}
 */
export const unexpected_ppdu_parameter: Abort_reason = Abort_reason_unexpected_ppdu_parameter; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unexpected_ppdu_parameter */

/* START_OF_SYMBOL_DEFINITION Abort_reason_invalid_ppdu_parameter_value */
/**
 * @summary Abort_reason_invalid_ppdu_parameter_value
 * @constant
 * @type {number}
 */
export const Abort_reason_invalid_ppdu_parameter_value: Abort_reason = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Abort_reason_invalid_ppdu_parameter_value */

/* START_OF_SYMBOL_DEFINITION invalid_ppdu_parameter_value */
/**
 * @summary Abort_reason_invalid_ppdu_parameter_value
 * @constant
 * @type {number}
 */
export const invalid_ppdu_parameter_value: Abort_reason = Abort_reason_invalid_ppdu_parameter_value; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalid_ppdu_parameter_value */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Abort_reason */
let _cached_decoder_for_Abort_reason: $.ASN1Decoder<Abort_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Abort_reason */

/* START_OF_SYMBOL_DEFINITION _decode_Abort_reason */
/**
 * @summary Decodes an ASN.1 element into a(n) Abort_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Abort_reason} The decoded data structure.
 */
export function _decode_Abort_reason(el: _Element) {
    if (!_cached_decoder_for_Abort_reason) {
        _cached_decoder_for_Abort_reason = $._decodeInteger;
    }
    return _cached_decoder_for_Abort_reason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Abort_reason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Abort_reason */
let _cached_encoder_for_Abort_reason: $.ASN1Encoder<Abort_reason> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Abort_reason */

/* START_OF_SYMBOL_DEFINITION _encode_Abort_reason */
/**
 * @summary Encodes a(n) Abort_reason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Abort_reason, encoded as an ASN.1 Element.
 */
export function _encode_Abort_reason(
    value: Abort_reason,
    elGetter: $.ASN1Encoder<Abort_reason>
) {
    if (!_cached_encoder_for_Abort_reason) {
        _cached_encoder_for_Abort_reason = $._encodeInteger;
    }
    return _cached_encoder_for_Abort_reason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Abort_reason */

/* eslint-enable */
