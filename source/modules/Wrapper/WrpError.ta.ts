/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_WrpError */
export enum _enum_for_WrpError {
    protocol_error = 0,
    invalid_signatureAlgorithm = 1,
    unexpected_version = 2,
    protected_protocol_not_supported = 3,
    duplicate_assoID = 4,
    invalid_time_value = 5,
    key_estab_algorithm_not_supported = 6,
    encr_mode_aead_not_supported = 7,
    encryption_not_supported = 8,
    encryption_required = 9,
    aead_algorithms_not_supported = 10,
    aead_is_required = 11,
    symmetricKey_algorithms_not_supported = 12,
    icv_algorithms_not_supported = 13,
    invalid_attribute_certificate = 14,
    alt_signature_not_allowed = 15,
    only_one_version = 16,
    invalid_key_estab_algorithm = 17,
    invalid_alt_key_estab_algorithm = 18,
    invalid_aead_algorithm = 19,
    aead_not_allowed = 20,
    invalid_symmetricKey_algorithm = 21,
    invalid_icv_algorithm = 22,
    dynamic_aead_algo_parms_required = 23,
    invalid_dynamic_aead_algo_parms = 24,
    dynamic_aead_algo_parms_not_required = 25,
    dynamic_symKey_algo_parms_required = 26,
    invalid_dynamic_symKey_algo_parms = 27,
    dynamic_symKey_algo_parms_not_required = 28,
    dynamic_icv_algo_parms_required = 29,
    invalid_dynamic_icv_algo_parms = 30,
    dynamic_icv_algo_parms_not_required = 31,
    unexpected_invokeID_received = 32,
    rekey_out_of_sequence = 33,
    invalid_dynamic_keyEst_algo_parms = 34,
    changedKey_out_of_sequence = 35,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_WrpError */

/* START_OF_SYMBOL_DEFINITION WrpError */
/**
 * @summary WrpError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WrpError  ::=  ENUMERATED {
 *   protocol-error                         (0),
 *   invalid-signatureAlgorithm             (1),
 *   unexpected-version                     (2),
 *   protected-protocol-not-supported       (3),
 *   duplicate-assoID                       (4),
 *   invalid-time-value                     (5),
 *   key-estab-algorithm-not-supported      (6),
 *   encr-mode-aead-not-supported           (7),
 *   encryption-not-supported               (8),
 *   encryption-required                    (9),
 *   aead-algorithms-not-supported          (10),
 *   aead-is-required                       (11),
 *   symmetricKey-algorithms-not-supported  (12),
 *   icv-algorithms-not-supported           (13),
 *   invalid-attribute-certificate          (14),
 *   alt-signature-not-allowed              (15),
 *   only-one-version                       (16),
 *   invalid-key-estab-algorithm            (17),
 *   invalid-alt-key-estab-algorithm        (18),
 *   invalid-aead-algorithm                 (19),
 *   aead-not-allowed                       (20),
 *   invalid-symmetricKey-algorithm         (21),
 *   invalid-icv-algorithm                  (22),
 *   dynamic-aead-algo-parms-required       (23),
 *   invalid-dynamic-aead-algo-parms        (24),
 *   dynamic-aead-algo-parms-not-required   (25),
 *   dynamic-symKey-algo-parms-required     (26),
 *   invalid-dynamic-symKey-algo-parms      (27),
 *   dynamic-symKey-algo-parms-not-required (28),
 *   dynamic-icv-algo-parms-required        (29),
 *   invalid-dynamic-icv-algo-parms         (30),
 *   dynamic-icv-algo-parms-not-required    (31),
 *   unexpected-invokeID-received           (32),
 *   rekey-out-of-sequence                  (33),
 *   invalid-dynamic-keyEst-algo-parms      (34),
 *   changedKey-out-of-sequence             (35),
 *   ... }
 * ```@enum {number}
 */
export type WrpError = _enum_for_WrpError | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION WrpError */

/* START_OF_SYMBOL_DEFINITION WrpError_protocol_error */
/**
 * @summary WrpError_protocol_error
 * @constant
 * @type {number}
 */
export const WrpError_protocol_error: WrpError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_protocol_error */

/* START_OF_SYMBOL_DEFINITION WrpError_invalid_signatureAlgorithm */
/**
 * @summary WrpError_invalid_signatureAlgorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_signatureAlgorithm: WrpError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_invalid_signatureAlgorithm */

/* START_OF_SYMBOL_DEFINITION WrpError_unexpected_version */
/**
 * @summary WrpError_unexpected_version
 * @constant
 * @type {number}
 */
export const WrpError_unexpected_version: WrpError = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_unexpected_version */

/* START_OF_SYMBOL_DEFINITION WrpError_protected_protocol_not_supported */
/**
 * @summary WrpError_protected_protocol_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_protected_protocol_not_supported: WrpError = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_protected_protocol_not_supported */

/* START_OF_SYMBOL_DEFINITION WrpError_duplicate_assoID */
/**
 * @summary WrpError_duplicate_assoID
 * @constant
 * @type {number}
 */
export const WrpError_duplicate_assoID: WrpError = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_duplicate_assoID */

/* START_OF_SYMBOL_DEFINITION WrpError_invalid_time_value */
/**
 * @summary WrpError_invalid_time_value
 * @constant
 * @type {number}
 */
export const WrpError_invalid_time_value: WrpError = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_invalid_time_value */

/* START_OF_SYMBOL_DEFINITION WrpError_key_estab_algorithm_not_supported */
/**
 * @summary WrpError_key_estab_algorithm_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_key_estab_algorithm_not_supported: WrpError = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_key_estab_algorithm_not_supported */

/* START_OF_SYMBOL_DEFINITION WrpError_encr_mode_aead_not_supported */
/**
 * @summary WrpError_encr_mode_aead_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_encr_mode_aead_not_supported: WrpError = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_encr_mode_aead_not_supported */

/* START_OF_SYMBOL_DEFINITION WrpError_encryption_not_supported */
/**
 * @summary WrpError_encryption_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_encryption_not_supported: WrpError = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_encryption_not_supported */

/* START_OF_SYMBOL_DEFINITION WrpError_encryption_required */
/**
 * @summary WrpError_encryption_required
 * @constant
 * @type {number}
 */
export const WrpError_encryption_required: WrpError = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_encryption_required */

/* START_OF_SYMBOL_DEFINITION WrpError_aead_algorithms_not_supported */
/**
 * @summary WrpError_aead_algorithms_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_aead_algorithms_not_supported: WrpError = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_aead_algorithms_not_supported */

/* START_OF_SYMBOL_DEFINITION WrpError_aead_is_required */
/**
 * @summary WrpError_aead_is_required
 * @constant
 * @type {number}
 */
export const WrpError_aead_is_required: WrpError = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_aead_is_required */

/* START_OF_SYMBOL_DEFINITION WrpError_symmetricKey_algorithms_not_supported */
/**
 * @summary WrpError_symmetricKey_algorithms_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_symmetricKey_algorithms_not_supported: WrpError = 12; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_symmetricKey_algorithms_not_supported */

/* START_OF_SYMBOL_DEFINITION WrpError_icv_algorithms_not_supported */
/**
 * @summary WrpError_icv_algorithms_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_icv_algorithms_not_supported: WrpError = 13; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_icv_algorithms_not_supported */

/* START_OF_SYMBOL_DEFINITION WrpError_invalid_attribute_certificate */
/**
 * @summary WrpError_invalid_attribute_certificate
 * @constant
 * @type {number}
 */
export const WrpError_invalid_attribute_certificate: WrpError = 14; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_invalid_attribute_certificate */

/* START_OF_SYMBOL_DEFINITION WrpError_alt_signature_not_allowed */
/**
 * @summary WrpError_alt_signature_not_allowed
 * @constant
 * @type {number}
 */
export const WrpError_alt_signature_not_allowed: WrpError = 15; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_alt_signature_not_allowed */

/* START_OF_SYMBOL_DEFINITION WrpError_only_one_version */
/**
 * @summary WrpError_only_one_version
 * @constant
 * @type {number}
 */
export const WrpError_only_one_version: WrpError = 16; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_only_one_version */

/* START_OF_SYMBOL_DEFINITION WrpError_invalid_key_estab_algorithm */
/**
 * @summary WrpError_invalid_key_estab_algorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_key_estab_algorithm: WrpError = 17; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_invalid_key_estab_algorithm */

/* START_OF_SYMBOL_DEFINITION WrpError_invalid_alt_key_estab_algorithm */
/**
 * @summary WrpError_invalid_alt_key_estab_algorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_alt_key_estab_algorithm: WrpError = 18; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_invalid_alt_key_estab_algorithm */

/* START_OF_SYMBOL_DEFINITION WrpError_invalid_aead_algorithm */
/**
 * @summary WrpError_invalid_aead_algorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_aead_algorithm: WrpError = 19; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_invalid_aead_algorithm */

/* START_OF_SYMBOL_DEFINITION WrpError_aead_not_allowed */
/**
 * @summary WrpError_aead_not_allowed
 * @constant
 * @type {number}
 */
export const WrpError_aead_not_allowed: WrpError = 20; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_aead_not_allowed */

/* START_OF_SYMBOL_DEFINITION WrpError_invalid_symmetricKey_algorithm */
/**
 * @summary WrpError_invalid_symmetricKey_algorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_symmetricKey_algorithm: WrpError = 21; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_invalid_symmetricKey_algorithm */

/* START_OF_SYMBOL_DEFINITION WrpError_invalid_icv_algorithm */
/**
 * @summary WrpError_invalid_icv_algorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_icv_algorithm: WrpError = 22; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_invalid_icv_algorithm */

/* START_OF_SYMBOL_DEFINITION WrpError_dynamic_aead_algo_parms_required */
/**
 * @summary WrpError_dynamic_aead_algo_parms_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_aead_algo_parms_required: WrpError = 23; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_dynamic_aead_algo_parms_required */

/* START_OF_SYMBOL_DEFINITION WrpError_invalid_dynamic_aead_algo_parms */
/**
 * @summary WrpError_invalid_dynamic_aead_algo_parms
 * @constant
 * @type {number}
 */
export const WrpError_invalid_dynamic_aead_algo_parms: WrpError = 24; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_invalid_dynamic_aead_algo_parms */

/* START_OF_SYMBOL_DEFINITION WrpError_dynamic_aead_algo_parms_not_required */
/**
 * @summary WrpError_dynamic_aead_algo_parms_not_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_aead_algo_parms_not_required: WrpError = 25; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_dynamic_aead_algo_parms_not_required */

/* START_OF_SYMBOL_DEFINITION WrpError_dynamic_symKey_algo_parms_required */
/**
 * @summary WrpError_dynamic_symKey_algo_parms_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_symKey_algo_parms_required: WrpError = 26; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_dynamic_symKey_algo_parms_required */

/* START_OF_SYMBOL_DEFINITION WrpError_invalid_dynamic_symKey_algo_parms */
/**
 * @summary WrpError_invalid_dynamic_symKey_algo_parms
 * @constant
 * @type {number}
 */
export const WrpError_invalid_dynamic_symKey_algo_parms: WrpError = 27; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_invalid_dynamic_symKey_algo_parms */

/* START_OF_SYMBOL_DEFINITION WrpError_dynamic_symKey_algo_parms_not_required */
/**
 * @summary WrpError_dynamic_symKey_algo_parms_not_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_symKey_algo_parms_not_required: WrpError = 28; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_dynamic_symKey_algo_parms_not_required */

/* START_OF_SYMBOL_DEFINITION WrpError_dynamic_icv_algo_parms_required */
/**
 * @summary WrpError_dynamic_icv_algo_parms_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_icv_algo_parms_required: WrpError = 29; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_dynamic_icv_algo_parms_required */

/* START_OF_SYMBOL_DEFINITION WrpError_invalid_dynamic_icv_algo_parms */
/**
 * @summary WrpError_invalid_dynamic_icv_algo_parms
 * @constant
 * @type {number}
 */
export const WrpError_invalid_dynamic_icv_algo_parms: WrpError = 30; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_invalid_dynamic_icv_algo_parms */

/* START_OF_SYMBOL_DEFINITION WrpError_dynamic_icv_algo_parms_not_required */
/**
 * @summary WrpError_dynamic_icv_algo_parms_not_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_icv_algo_parms_not_required: WrpError = 31; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_dynamic_icv_algo_parms_not_required */

/* START_OF_SYMBOL_DEFINITION WrpError_unexpected_invokeID_received */
/**
 * @summary WrpError_unexpected_invokeID_received
 * @constant
 * @type {number}
 */
export const WrpError_unexpected_invokeID_received: WrpError = 32; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_unexpected_invokeID_received */

/* START_OF_SYMBOL_DEFINITION WrpError_rekey_out_of_sequence */
/**
 * @summary WrpError_rekey_out_of_sequence
 * @constant
 * @type {number}
 */
export const WrpError_rekey_out_of_sequence: WrpError = 33; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_rekey_out_of_sequence */

/* START_OF_SYMBOL_DEFINITION WrpError_invalid_dynamic_keyEst_algo_parms */
/**
 * @summary WrpError_invalid_dynamic_keyEst_algo_parms
 * @constant
 * @type {number}
 */
export const WrpError_invalid_dynamic_keyEst_algo_parms: WrpError = 34; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_invalid_dynamic_keyEst_algo_parms */

/* START_OF_SYMBOL_DEFINITION WrpError_changedKey_out_of_sequence */
/**
 * @summary WrpError_changedKey_out_of_sequence
 * @constant
 * @type {number}
 */
export const WrpError_changedKey_out_of_sequence: WrpError = 35; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION WrpError_changedKey_out_of_sequence */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WrpError */
let _cached_decoder_for_WrpError: $.ASN1Decoder<WrpError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WrpError */

/* START_OF_SYMBOL_DEFINITION _decode_WrpError */
/**
 * @summary Decodes an ASN.1 element into a(n) WrpError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WrpError} The decoded data structure.
 */
export function _decode_WrpError(el: _Element) {
    if (!_cached_decoder_for_WrpError) {
        _cached_decoder_for_WrpError = $._decodeEnumerated;
    }
    return _cached_decoder_for_WrpError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WrpError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WrpError */
let _cached_encoder_for_WrpError: $.ASN1Encoder<WrpError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WrpError */

/* START_OF_SYMBOL_DEFINITION _encode_WrpError */
/**
 * @summary Encodes a(n) WrpError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WrpError, encoded as an ASN.1 Element.
 */
export function _encode_WrpError(
    value: WrpError,
    elGetter: $.ASN1Encoder<WrpError>
) {
    if (!_cached_encoder_for_WrpError) {
        _cached_encoder_for_WrpError = $._encodeEnumerated;
    }
    return _cached_encoder_for_WrpError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WrpError */

/* eslint-enable */
