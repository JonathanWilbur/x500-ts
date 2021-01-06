/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Associate_source_diagnostic_acse_service_provider,
    _decode_Associate_source_diagnostic_acse_service_provider,
    _encode_Associate_source_diagnostic_acse_service_provider,
} from "../OSIProtocolSpecification/Associate-source-diagnostic-acse-service-provider.ta";
import {
    Associate_source_diagnostic_acse_service_user,
    _decode_Associate_source_diagnostic_acse_service_user,
    _encode_Associate_source_diagnostic_acse_service_user,
} from "../OSIProtocolSpecification/Associate-source-diagnostic-acse-service-user.ta";
export {
    Associate_source_diagnostic_acse_service_provider,
    Associate_source_diagnostic_acse_service_provider_no_common_acse_version /* IMPORTED_LONG_NAMED_INTEGER */,
    Associate_source_diagnostic_acse_service_provider_no_reason_given /* IMPORTED_LONG_NAMED_INTEGER */,
    Associate_source_diagnostic_acse_service_provider_null_ /* IMPORTED_LONG_NAMED_INTEGER */,
    no_common_acse_version /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_Associate_source_diagnostic_acse_service_provider,
    _encode_Associate_source_diagnostic_acse_service_provider,
} from "../OSIProtocolSpecification/Associate-source-diagnostic-acse-service-provider.ta";
export {
    application_context_name_not_supported /* IMPORTED_SHORT_NAMED_INTEGER */,
    Associate_source_diagnostic_acse_service_user,
    Associate_source_diagnostic_acse_service_user_application_context_name_not_supported /* IMPORTED_LONG_NAMED_INTEGER */,
    Associate_source_diagnostic_acse_service_user_called_AE_invocation_identifier_not_recognized /* IMPORTED_LONG_NAMED_INTEGER */,
    Associate_source_diagnostic_acse_service_user_called_AE_qualifier_not_recognized /* IMPORTED_LONG_NAMED_INTEGER */,
    Associate_source_diagnostic_acse_service_user_called_AP_invocation_identifier_not_recognized /* IMPORTED_LONG_NAMED_INTEGER */,
    Associate_source_diagnostic_acse_service_user_called_AP_title_not_recognized /* IMPORTED_LONG_NAMED_INTEGER */,
    Associate_source_diagnostic_acse_service_user_calling_AE_invocation_identifier_not_recognized /* IMPORTED_LONG_NAMED_INTEGER */,
    Associate_source_diagnostic_acse_service_user_calling_AE_qualifier_not_recognized /* IMPORTED_LONG_NAMED_INTEGER */,
    Associate_source_diagnostic_acse_service_user_calling_AP_invocation_identifier_not_recognized /* IMPORTED_LONG_NAMED_INTEGER */,
    Associate_source_diagnostic_acse_service_user_calling_AP_title_not_recognized /* IMPORTED_LONG_NAMED_INTEGER */,
    Associate_source_diagnostic_acse_service_user_no_reason_given /* IMPORTED_LONG_NAMED_INTEGER */,
    Associate_source_diagnostic_acse_service_user_null_ /* IMPORTED_LONG_NAMED_INTEGER */,
    called_AE_invocation_identifier_not_recognized /* IMPORTED_SHORT_NAMED_INTEGER */,
    called_AE_qualifier_not_recognized /* IMPORTED_SHORT_NAMED_INTEGER */,
    called_AP_invocation_identifier_not_recognized /* IMPORTED_SHORT_NAMED_INTEGER */,
    called_AP_title_not_recognized /* IMPORTED_SHORT_NAMED_INTEGER */,
    calling_AE_invocation_identifier_not_recognized /* IMPORTED_SHORT_NAMED_INTEGER */,
    calling_AE_qualifier_not_recognized /* IMPORTED_SHORT_NAMED_INTEGER */,
    calling_AP_invocation_identifier_not_recognized /* IMPORTED_SHORT_NAMED_INTEGER */,
    calling_AP_title_not_recognized /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_Associate_source_diagnostic_acse_service_user,
    _encode_Associate_source_diagnostic_acse_service_user,
} from "../OSIProtocolSpecification/Associate-source-diagnostic-acse-service-user.ta";

/* START_OF_SYMBOL_DEFINITION Associate_source_diagnostic */
/**
 * @summary Associate_source_diagnostic
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Associate-source-diagnostic  ::=  CHOICE {
 *   acse-service-user     [1]  INTEGER {
 *     null                                            (0),
 *     no-reason-given                                 (1),
 *     application-context-name-not-supported          (2),
 *     calling-AP-title-not-recognized                 (3),
 *     calling-AP-invocation-identifier-not-recognized (4),
 *     calling-AE-qualifier-not-recognized             (5),
 *     calling-AE-invocation-identifier-not-recognized (6),
 *     called-AP-title-not-recognized                  (7),
 *     called-AP-invocation-identifier-not-recognized  (8),
 *     called-AE-qualifier-not-recognized              (9),
 *     called-AE-invocation-identifier-not-recognized  (10)}(0..10, ...),
 *   acse-service-provider [2]  INTEGER {
 *     null                                            (0),
 *     no-reason-given                                 (1),
 *     no-common-acse-version                          (2)}(0..2, ...)}
 * ```
 */
export type Associate_source_diagnostic =
    | {
          acse_service_user: Associate_source_diagnostic_acse_service_user;
      } /* CHOICE_ALT_ROOT */
    | {
          acse_service_provider: Associate_source_diagnostic_acse_service_provider;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION Associate_source_diagnostic */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_source_diagnostic */
let _cached_decoder_for_Associate_source_diagnostic: $.ASN1Decoder<Associate_source_diagnostic> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_source_diagnostic */

/* START_OF_SYMBOL_DEFINITION _decode_Associate_source_diagnostic */
/**
 * @summary Decodes an ASN.1 element into a(n) Associate_source_diagnostic
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Associate_source_diagnostic} The decoded data structure.
 */
export function _decode_Associate_source_diagnostic(el: _Element) {
    if (!_cached_decoder_for_Associate_source_diagnostic) {
        _cached_decoder_for_Associate_source_diagnostic = $._decode_inextensible_choice<Associate_source_diagnostic>(
            {
                "CONTEXT 1": [
                    "acse_service_user",
                    $._decode_explicit<Associate_source_diagnostic_acse_service_user>(
                        () =>
                            _decode_Associate_source_diagnostic_acse_service_user
                    ),
                ],
                "CONTEXT 2": [
                    "acse_service_provider",
                    $._decode_explicit<Associate_source_diagnostic_acse_service_provider>(
                        () =>
                            _decode_Associate_source_diagnostic_acse_service_provider
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_Associate_source_diagnostic(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Associate_source_diagnostic */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_source_diagnostic */
let _cached_encoder_for_Associate_source_diagnostic: $.ASN1Encoder<Associate_source_diagnostic> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_source_diagnostic */

/* START_OF_SYMBOL_DEFINITION _encode_Associate_source_diagnostic */
/**
 * @summary Encodes a(n) Associate_source_diagnostic into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_source_diagnostic, encoded as an ASN.1 Element.
 */
export function _encode_Associate_source_diagnostic(
    value: Associate_source_diagnostic,
    elGetter: $.ASN1Encoder<Associate_source_diagnostic>
) {
    if (!_cached_encoder_for_Associate_source_diagnostic) {
        _cached_encoder_for_Associate_source_diagnostic = $._encode_choice<Associate_source_diagnostic>(
            {
                acse_service_user: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_Associate_source_diagnostic_acse_service_user,
                    $.BER
                ),
                acse_service_provider: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () =>
                        _encode_Associate_source_diagnostic_acse_service_provider,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Associate_source_diagnostic(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Associate_source_diagnostic */

/* eslint-enable */
