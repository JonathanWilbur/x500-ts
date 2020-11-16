/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AVMP_error,
    _decode_AVMP_error,
    _encode_AVMP_error,
} from "../PkiPMIProtocolSpecifications/AVMP-error.ta";
import {
    PkiWaError,
    _decode_PkiWaError,
    _encode_PkiWaError,
} from "../PkiPmiWrapper/PkiWaError.ta";
export {
    AVMP_error,
    AVMP_error_constrainedRequired /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_duplicateAVL /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_invalidAvlSignature /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_invalidAvlVersion /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_invalidContentComponent /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_maxAVLsExceeded /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_missingAvlComponent /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_missingContent /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_missingContentComponent /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_nonConstrainedRequired /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_noReason /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_notAllowedForConstrainedAVLEntity /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_protocolError /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_sequenceError /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_unknownAVL /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_unknownAvlEntity /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_unknownCert /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_unknownContentType /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_unsupportedAVMPversion /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_unsupportedCriticalEntryExtension /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_unsupportedCriticalExtension /* IMPORTED_ENUMERATION_ITEM */,
    AVMP_error_unsupportedScopeRestriction /* IMPORTED_ENUMERATION_ITEM */,
    _decode_AVMP_error,
    _encode_AVMP_error,
    _enum_for_AVMP_error,
} from "../PkiPMIProtocolSpecifications/AVMP-error.ta";
export {
    PkiWaError,
    PkiWaError_certificationPathFailure /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_decryptionFailed /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_dhAlgorithmMismatch /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_incompleteCertPath /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_invalideDhPublickey /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_invalidKeyingMaterial /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_invalidParmsForSymEncryptAlgorithms /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_invalidPduSyntax /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_invalidSignature /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_keyEncAlgorithmParametersMissing /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_keyEncAlgorithmParametersNotAllowed /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_missingMandatoryAttributes /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unexpectedPduType /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unknownDHpkCetificate /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unsupportedKeyWrappingAlgorithm /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unsupportedPduType /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unsupportedSignatureAlgorithm /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unsupportedWrapperVersion /* IMPORTED_ENUMERATION_ITEM */,
    PkiWaError_unwantedAttribute /* IMPORTED_ENUMERATION_ITEM */,
    _decode_PkiWaError,
    _encode_PkiWaError,
    _enum_for_PkiWaError,
} from "../PkiPmiWrapper/PkiWaError.ta";

/* START_OF_SYMBOL_DEFINITION CertErr_notOK */
/**
 * @summary CertErr_notOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertErr-notOK ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertErr_notOK =
    | { wrErr: PkiWaError } /* CHOICE_ALT_ROOT */
    | { avmpErr: AVMP_error } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CertErr_notOK */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertErr_notOK */
let _cached_decoder_for_CertErr_notOK: $.ASN1Decoder<
    CertErr_notOK
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertErr_notOK */

/* START_OF_SYMBOL_DEFINITION _decode_CertErr_notOK */
/**
 * @summary Decodes an ASN.1 element into a(n) CertErr_notOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertErr_notOK} The decoded data structure.
 */
export function _decode_CertErr_notOK(el: _Element) {
    if (!_cached_decoder_for_CertErr_notOK) {
        _cached_decoder_for_CertErr_notOK = $._decode_extensible_choice<
            CertErr_notOK
        >({
            "CONTEXT 0": [
                "wrErr",
                $._decode_explicit<PkiWaError>(() => _decode_PkiWaError),
            ],
            "CONTEXT 1": [
                "avmpErr",
                $._decode_explicit<AVMP_error>(() => _decode_AVMP_error),
            ],
        });
    }
    return _cached_decoder_for_CertErr_notOK(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertErr_notOK */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertErr_notOK */
let _cached_encoder_for_CertErr_notOK: $.ASN1Encoder<
    CertErr_notOK
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertErr_notOK */

/* START_OF_SYMBOL_DEFINITION _encode_CertErr_notOK */
/**
 * @summary Encodes a(n) CertErr_notOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertErr_notOK, encoded as an ASN.1 Element.
 */
export function _encode_CertErr_notOK(
    value: CertErr_notOK,
    elGetter: $.ASN1Encoder<CertErr_notOK>
) {
    if (!_cached_encoder_for_CertErr_notOK) {
        _cached_encoder_for_CertErr_notOK = $._encode_choice<CertErr_notOK>(
            {
                wrErr: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_PkiWaError,
                    $.BER
                ),
                avmpErr: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_AVMP_error,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertErr_notOK(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertErr_notOK */

/* eslint-enable */
