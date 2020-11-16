/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SecurityProblem,
    _decode_SecurityProblem,
    _encode_SecurityProblem,
} from "../DirectoryAbstractService/SecurityProblem.ta";
import {
    ServiceProblem,
    _decode_ServiceProblem,
    _encode_ServiceProblem,
} from "../DirectoryAbstractService/ServiceProblem.ta";
export {
    SecurityProblem,
    SecurityProblem_blockedCredentials /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_inappropriateAlgorithms /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_inappropriateAuthentication /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_insufficientAccessRights /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_invalidCredentials /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_invalidSignature /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_noInformation /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_passwordExpired /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_protectionRequired /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_spkmError /* IMPORTED_NAMED_INTEGER */,
    SecurityProblem_unsupportedAuthenticationMethod /* IMPORTED_NAMED_INTEGER */,
    _decode_SecurityProblem,
    _encode_SecurityProblem,
} from "../DirectoryAbstractService/SecurityProblem.ta";
export {
    ServiceProblem,
    ServiceProblem_administrativeLimitExceeded /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_ambiguousKeyAttributes /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_busy /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_chainingRequired /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_ditError /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_invalidQueryReference /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_invalidReference /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_loopDetected /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_notSupportedByLDAP /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_outOfScope /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_requestedServiceNotAvailable /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_saslBindInProgress /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_timeLimitExceeded /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_unableToProceed /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_unavailable /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_unavailableCriticalExtension /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_unsupportedMatchingUse /* IMPORTED_NAMED_INTEGER */,
    ServiceProblem_unwillingToPerform /* IMPORTED_NAMED_INTEGER */,
    _decode_ServiceProblem,
    _encode_ServiceProblem,
} from "../DirectoryAbstractService/ServiceProblem.ta";

/* START_OF_SYMBOL_DEFINITION DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error */
/**
 * @summary DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DirectoryBindError-OPTIONALLY-PROTECTED-Parameter1-error ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error =
    | { serviceError: ServiceProblem } /* CHOICE_ALT_ROOT */
    | { securityError: SecurityProblem } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error */
let _cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error: $.ASN1Decoder<
    DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error */

/* START_OF_SYMBOL_DEFINITION _decode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error */
/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error} The decoded data structure.
 */
export function _decode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error(
    el: _Element
) {
    if (
        !_cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error
    ) {
        _cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error = $._decode_extensible_choice<
            DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error
        >({
            "CONTEXT 1": [
                "serviceError",
                $._decode_explicit<ServiceProblem>(
                    () => _decode_ServiceProblem
                ),
            ],
            "CONTEXT 2": [
                "securityError",
                $._decode_explicit<SecurityProblem>(
                    () => _decode_SecurityProblem
                ),
            ],
        });
    }
    return _cached_decoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error */
let _cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error: $.ASN1Encoder<
    DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error */

/* START_OF_SYMBOL_DEFINITION _encode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error */
/**
 * @summary Encodes a(n) DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error, encoded as an ASN.1 Element.
 */
export function _encode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error(
    value: DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error,
    elGetter: $.ASN1Encoder<
        DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error
    >
) {
    if (
        !_cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error
    ) {
        _cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error = $._encode_choice<
            DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error
        >(
            {
                serviceError: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_ServiceProblem,
                    $.BER
                ),
                securityError: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_SecurityProblem,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_DirectoryBindError_OPTIONALLY_PROTECTED_Parameter1_error */

/* eslint-enable */
