/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CASP_error,
    _decode_CASP_error,
    _encode_CASP_error,
} from "../PkiPMIProtocolSpecifications/CASP-error.ta";
import {
    EnvelopedData_error,
    _decode_EnvelopedData_error,
    _encode_EnvelopedData_error,
} from "../PkiPMIProtocolSpecifications/EnvelopedData-error.ta";
import {
    SignedData_error,
    _decode_SignedData_error,
    _encode_SignedData_error,
} from "../PkiPMIProtocolSpecifications/SignedData-error.ta";
export {
    CASP_error,
    CASP_error_invalidContentComponent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASP_error_missingContent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASP_error_missingContentComponent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASP_error_noReason /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASP_error_sequenceError /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASP_error_unknownCert /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASP_error_unknownContentType /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASP_error_unknownSubject /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASP_error_unsupportedWLMPversion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sequenceError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unknownCert /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unknownContentType /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unknownSubject /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unsupportedWLMPversion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_CASP_error,
    _encode_CASP_error,
    _enum_for_CASP_error,
} from "../PkiPMIProtocolSpecifications/CASP-error.ta";
export {
    EnvelopedData_error,
    EnvelopedData_error_noReason /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_EnvelopedData_error,
    _encode_EnvelopedData_error,
    _enum_for_EnvelopedData_error,
} from "../PkiPMIProtocolSpecifications/EnvelopedData-error.ta";
export {
    signedDataContectTypeExpected /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SignedData_error,
    SignedData_error_invalidContentComponent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SignedData_error_missingContent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SignedData_error_missingContentComponent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SignedData_error_noReason /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SignedData_error_signedDataContectTypeExpected /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SignedData_error_unsupportedHashAlgorithm /* IMPORTED_LONG_ENUMERATION_ITEM */,
    SignedData_error_wrongSignedDataVersion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unsupportedHashAlgorithm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    wrongSignedDataVersion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SignedData_error,
    _encode_SignedData_error,
    _enum_for_SignedData_error,
} from "../PkiPMIProtocolSpecifications/SignedData-error.ta";

/* START_OF_SYMBOL_DEFINITION CertReplaceErr_code */
/**
 * @summary CertReplaceErr_code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceErr-code ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertReplaceErr_code =
    | { signedData: SignedData_error } /* CHOICE_ALT_ROOT */
    | { envelopedData: EnvelopedData_error } /* CHOICE_ALT_ROOT */
    | { casp: CASP_error } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CertReplaceErr_code */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReplaceErr_code */
let _cached_decoder_for_CertReplaceErr_code: $.ASN1Decoder<
    CertReplaceErr_code
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReplaceErr_code */

/* START_OF_SYMBOL_DEFINITION _decode_CertReplaceErr_code */
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceErr_code
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceErr_code} The decoded data structure.
 */
export function _decode_CertReplaceErr_code(el: _Element) {
    if (!_cached_decoder_for_CertReplaceErr_code) {
        _cached_decoder_for_CertReplaceErr_code = $._decode_extensible_choice<
            CertReplaceErr_code
        >({
            "CONTEXT 0": [
                "signedData",
                $._decode_explicit<SignedData_error>(
                    () => _decode_SignedData_error
                ),
            ],
            "CONTEXT 1": [
                "envelopedData",
                $._decode_explicit<EnvelopedData_error>(
                    () => _decode_EnvelopedData_error
                ),
            ],
            "CONTEXT 2": [
                "casp",
                $._decode_explicit<CASP_error>(() => _decode_CASP_error),
            ],
        });
    }
    return _cached_decoder_for_CertReplaceErr_code(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertReplaceErr_code */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReplaceErr_code */
let _cached_encoder_for_CertReplaceErr_code: $.ASN1Encoder<
    CertReplaceErr_code
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReplaceErr_code */

/* START_OF_SYMBOL_DEFINITION _encode_CertReplaceErr_code */
/**
 * @summary Encodes a(n) CertReplaceErr_code into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceErr_code, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceErr_code(
    value: CertReplaceErr_code,
    elGetter: $.ASN1Encoder<CertReplaceErr_code>
) {
    if (!_cached_encoder_for_CertReplaceErr_code) {
        _cached_encoder_for_CertReplaceErr_code = $._encode_choice<
            CertReplaceErr_code
        >(
            {
                signedData: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_SignedData_error,
                    $.BER
                ),
                envelopedData: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_EnvelopedData_error,
                    $.BER
                ),
                casp: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_CASP_error,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertReplaceErr_code(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertReplaceErr_code */

/* eslint-enable */
