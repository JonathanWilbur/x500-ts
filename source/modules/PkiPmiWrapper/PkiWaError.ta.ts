/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_PkiWaError */
export enum _enum_for_PkiWaError {
    unsupportedWrapperVersion = 0,
    unsupportedSignatureAlgorithm = 1,
    incompleteCertPath = 2,
    certificationPathFailure = 3,
    invalidSignature = 4,
    missingMandatoryAttributes = 5,
    unwantedAttribute = 6,
    unsupportedPduType = 7,
    unexpectedPduType = 8,
    invalidPduSyntax = 9,
    unknownDHpkCetificate = 10,
    invalidKeyingMaterial = 11,
    dhAlgorithmMismatch = 12,
    invalideDhPublickey = 13,
    unsupportedKeyWrappingAlgorithm = 14,
    keyEncAlgorithmParametersMissing = 15,
    keyEncAlgorithmParametersNotAllowed = 16,
    invalidParmsForSymEncryptAlgorithms = 17,
    decryptionFailed = 18,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_PkiWaError */

/* START_OF_SYMBOL_DEFINITION PkiWaError */
/**
 * @summary PkiWaError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PkiWaError  ::=  ENUMERATED {
 *   unsupportedWrapperVersion           (0),
 *   unsupportedSignatureAlgorithm       (1),
 *   incompleteCertPath                  (2),
 *   certificationPathFailure            (3),
 *   invalidSignature                    (4),
 *   missingMandatoryAttributes          (5),
 *   unwantedAttribute                   (6),
 *   unsupportedPduType                  (7),
 *   unexpectedPduType                   (8),
 *   invalidPduSyntax                    (9),
 *   unknownDHpkCetificate               (10),
 *   invalidKeyingMaterial               (11),
 *   dhAlgorithmMismatch                 (12),
 *   invalideDhPublickey                 (13),
 *   unsupportedKeyWrappingAlgorithm     (14),
 *   keyEncAlgorithmParametersMissing    (15),
 *   keyEncAlgorithmParametersNotAllowed (16),
 *   invalidParmsForSymEncryptAlgorithms (17),
 *   decryptionFailed                    (18),
 *   ... }
 * ```@enum {number}
 */
export type PkiWaError = _enum_for_PkiWaError | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION PkiWaError */

/* START_OF_SYMBOL_DEFINITION PkiWaError_unsupportedWrapperVersion */
/**
 * @summary PkiWaError_unsupportedWrapperVersion
 * @constant
 * @type {number}
 */
export const PkiWaError_unsupportedWrapperVersion: PkiWaError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_unsupportedWrapperVersion */

/* START_OF_SYMBOL_DEFINITION unsupportedWrapperVersion */
/**
 * @summary unsupportedWrapperVersion
 * @constant
 * @type {number}
 */
export const unsupportedWrapperVersion: PkiWaError = PkiWaError_unsupportedWrapperVersion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedWrapperVersion */

/* START_OF_SYMBOL_DEFINITION PkiWaError_unsupportedSignatureAlgorithm */
/**
 * @summary PkiWaError_unsupportedSignatureAlgorithm
 * @constant
 * @type {number}
 */
export const PkiWaError_unsupportedSignatureAlgorithm: PkiWaError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_unsupportedSignatureAlgorithm */

/* START_OF_SYMBOL_DEFINITION unsupportedSignatureAlgorithm */
/**
 * @summary unsupportedSignatureAlgorithm
 * @constant
 * @type {number}
 */
export const unsupportedSignatureAlgorithm: PkiWaError = PkiWaError_unsupportedSignatureAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedSignatureAlgorithm */

/* START_OF_SYMBOL_DEFINITION PkiWaError_incompleteCertPath */
/**
 * @summary PkiWaError_incompleteCertPath
 * @constant
 * @type {number}
 */
export const PkiWaError_incompleteCertPath: PkiWaError = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_incompleteCertPath */

/* START_OF_SYMBOL_DEFINITION incompleteCertPath */
/**
 * @summary incompleteCertPath
 * @constant
 * @type {number}
 */
export const incompleteCertPath: PkiWaError = PkiWaError_incompleteCertPath; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION incompleteCertPath */

/* START_OF_SYMBOL_DEFINITION PkiWaError_certificationPathFailure */
/**
 * @summary PkiWaError_certificationPathFailure
 * @constant
 * @type {number}
 */
export const PkiWaError_certificationPathFailure: PkiWaError = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_certificationPathFailure */

/* START_OF_SYMBOL_DEFINITION certificationPathFailure */
/**
 * @summary certificationPathFailure
 * @constant
 * @type {number}
 */
export const certificationPathFailure: PkiWaError = PkiWaError_certificationPathFailure; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION certificationPathFailure */

/* START_OF_SYMBOL_DEFINITION PkiWaError_invalidSignature */
/**
 * @summary PkiWaError_invalidSignature
 * @constant
 * @type {number}
 */
export const PkiWaError_invalidSignature: PkiWaError = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_invalidSignature */

/* START_OF_SYMBOL_DEFINITION invalidSignature */
/**
 * @summary invalidSignature
 * @constant
 * @type {number}
 */
export const invalidSignature: PkiWaError = PkiWaError_invalidSignature; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidSignature */

/* START_OF_SYMBOL_DEFINITION PkiWaError_missingMandatoryAttributes */
/**
 * @summary PkiWaError_missingMandatoryAttributes
 * @constant
 * @type {number}
 */
export const PkiWaError_missingMandatoryAttributes: PkiWaError = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_missingMandatoryAttributes */

/* START_OF_SYMBOL_DEFINITION missingMandatoryAttributes */
/**
 * @summary missingMandatoryAttributes
 * @constant
 * @type {number}
 */
export const missingMandatoryAttributes: PkiWaError = PkiWaError_missingMandatoryAttributes; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION missingMandatoryAttributes */

/* START_OF_SYMBOL_DEFINITION PkiWaError_unwantedAttribute */
/**
 * @summary PkiWaError_unwantedAttribute
 * @constant
 * @type {number}
 */
export const PkiWaError_unwantedAttribute: PkiWaError = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_unwantedAttribute */

/* START_OF_SYMBOL_DEFINITION unwantedAttribute */
/**
 * @summary unwantedAttribute
 * @constant
 * @type {number}
 */
export const unwantedAttribute: PkiWaError = PkiWaError_unwantedAttribute; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unwantedAttribute */

/* START_OF_SYMBOL_DEFINITION PkiWaError_unsupportedPduType */
/**
 * @summary PkiWaError_unsupportedPduType
 * @constant
 * @type {number}
 */
export const PkiWaError_unsupportedPduType: PkiWaError = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_unsupportedPduType */

/* START_OF_SYMBOL_DEFINITION unsupportedPduType */
/**
 * @summary unsupportedPduType
 * @constant
 * @type {number}
 */
export const unsupportedPduType: PkiWaError = PkiWaError_unsupportedPduType; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedPduType */

/* START_OF_SYMBOL_DEFINITION PkiWaError_unexpectedPduType */
/**
 * @summary PkiWaError_unexpectedPduType
 * @constant
 * @type {number}
 */
export const PkiWaError_unexpectedPduType: PkiWaError = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_unexpectedPduType */

/* START_OF_SYMBOL_DEFINITION unexpectedPduType */
/**
 * @summary unexpectedPduType
 * @constant
 * @type {number}
 */
export const unexpectedPduType: PkiWaError = PkiWaError_unexpectedPduType; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unexpectedPduType */

/* START_OF_SYMBOL_DEFINITION PkiWaError_invalidPduSyntax */
/**
 * @summary PkiWaError_invalidPduSyntax
 * @constant
 * @type {number}
 */
export const PkiWaError_invalidPduSyntax: PkiWaError = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_invalidPduSyntax */

/* START_OF_SYMBOL_DEFINITION invalidPduSyntax */
/**
 * @summary invalidPduSyntax
 * @constant
 * @type {number}
 */
export const invalidPduSyntax: PkiWaError = PkiWaError_invalidPduSyntax; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidPduSyntax */

/* START_OF_SYMBOL_DEFINITION PkiWaError_unknownDHpkCetificate */
/**
 * @summary PkiWaError_unknownDHpkCetificate
 * @constant
 * @type {number}
 */
export const PkiWaError_unknownDHpkCetificate: PkiWaError = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_unknownDHpkCetificate */

/* START_OF_SYMBOL_DEFINITION unknownDHpkCetificate */
/**
 * @summary unknownDHpkCetificate
 * @constant
 * @type {number}
 */
export const unknownDHpkCetificate: PkiWaError = PkiWaError_unknownDHpkCetificate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownDHpkCetificate */

/* START_OF_SYMBOL_DEFINITION PkiWaError_invalidKeyingMaterial */
/**
 * @summary PkiWaError_invalidKeyingMaterial
 * @constant
 * @type {number}
 */
export const PkiWaError_invalidKeyingMaterial: PkiWaError = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_invalidKeyingMaterial */

/* START_OF_SYMBOL_DEFINITION invalidKeyingMaterial */
/**
 * @summary invalidKeyingMaterial
 * @constant
 * @type {number}
 */
export const invalidKeyingMaterial: PkiWaError = PkiWaError_invalidKeyingMaterial; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidKeyingMaterial */

/* START_OF_SYMBOL_DEFINITION PkiWaError_dhAlgorithmMismatch */
/**
 * @summary PkiWaError_dhAlgorithmMismatch
 * @constant
 * @type {number}
 */
export const PkiWaError_dhAlgorithmMismatch: PkiWaError = 12; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_dhAlgorithmMismatch */

/* START_OF_SYMBOL_DEFINITION dhAlgorithmMismatch */
/**
 * @summary dhAlgorithmMismatch
 * @constant
 * @type {number}
 */
export const dhAlgorithmMismatch: PkiWaError = PkiWaError_dhAlgorithmMismatch; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dhAlgorithmMismatch */

/* START_OF_SYMBOL_DEFINITION PkiWaError_invalideDhPublickey */
/**
 * @summary PkiWaError_invalideDhPublickey
 * @constant
 * @type {number}
 */
export const PkiWaError_invalideDhPublickey: PkiWaError = 13; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_invalideDhPublickey */

/* START_OF_SYMBOL_DEFINITION invalideDhPublickey */
/**
 * @summary invalideDhPublickey
 * @constant
 * @type {number}
 */
export const invalideDhPublickey: PkiWaError = PkiWaError_invalideDhPublickey; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalideDhPublickey */

/* START_OF_SYMBOL_DEFINITION PkiWaError_unsupportedKeyWrappingAlgorithm */
/**
 * @summary PkiWaError_unsupportedKeyWrappingAlgorithm
 * @constant
 * @type {number}
 */
export const PkiWaError_unsupportedKeyWrappingAlgorithm: PkiWaError = 14; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_unsupportedKeyWrappingAlgorithm */

/* START_OF_SYMBOL_DEFINITION unsupportedKeyWrappingAlgorithm */
/**
 * @summary unsupportedKeyWrappingAlgorithm
 * @constant
 * @type {number}
 */
export const unsupportedKeyWrappingAlgorithm: PkiWaError = PkiWaError_unsupportedKeyWrappingAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedKeyWrappingAlgorithm */

/* START_OF_SYMBOL_DEFINITION PkiWaError_keyEncAlgorithmParametersMissing */
/**
 * @summary PkiWaError_keyEncAlgorithmParametersMissing
 * @constant
 * @type {number}
 */
export const PkiWaError_keyEncAlgorithmParametersMissing: PkiWaError = 15; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_keyEncAlgorithmParametersMissing */

/* START_OF_SYMBOL_DEFINITION keyEncAlgorithmParametersMissing */
/**
 * @summary keyEncAlgorithmParametersMissing
 * @constant
 * @type {number}
 */
export const keyEncAlgorithmParametersMissing: PkiWaError = PkiWaError_keyEncAlgorithmParametersMissing; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION keyEncAlgorithmParametersMissing */

/* START_OF_SYMBOL_DEFINITION PkiWaError_keyEncAlgorithmParametersNotAllowed */
/**
 * @summary PkiWaError_keyEncAlgorithmParametersNotAllowed
 * @constant
 * @type {number}
 */
export const PkiWaError_keyEncAlgorithmParametersNotAllowed: PkiWaError = 16; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_keyEncAlgorithmParametersNotAllowed */

/* START_OF_SYMBOL_DEFINITION keyEncAlgorithmParametersNotAllowed */
/**
 * @summary keyEncAlgorithmParametersNotAllowed
 * @constant
 * @type {number}
 */
export const keyEncAlgorithmParametersNotAllowed: PkiWaError = PkiWaError_keyEncAlgorithmParametersNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION keyEncAlgorithmParametersNotAllowed */

/* START_OF_SYMBOL_DEFINITION PkiWaError_invalidParmsForSymEncryptAlgorithms */
/**
 * @summary PkiWaError_invalidParmsForSymEncryptAlgorithms
 * @constant
 * @type {number}
 */
export const PkiWaError_invalidParmsForSymEncryptAlgorithms: PkiWaError = 17; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_invalidParmsForSymEncryptAlgorithms */

/* START_OF_SYMBOL_DEFINITION invalidParmsForSymEncryptAlgorithms */
/**
 * @summary invalidParmsForSymEncryptAlgorithms
 * @constant
 * @type {number}
 */
export const invalidParmsForSymEncryptAlgorithms: PkiWaError = PkiWaError_invalidParmsForSymEncryptAlgorithms; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidParmsForSymEncryptAlgorithms */

/* START_OF_SYMBOL_DEFINITION PkiWaError_decryptionFailed */
/**
 * @summary PkiWaError_decryptionFailed
 * @constant
 * @type {number}
 */
export const PkiWaError_decryptionFailed: PkiWaError = 18; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION PkiWaError_decryptionFailed */

/* START_OF_SYMBOL_DEFINITION decryptionFailed */
/**
 * @summary decryptionFailed
 * @constant
 * @type {number}
 */
export const decryptionFailed: PkiWaError = PkiWaError_decryptionFailed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION decryptionFailed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PkiWaError */
let _cached_decoder_for_PkiWaError: $.ASN1Decoder<PkiWaError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PkiWaError */

/* START_OF_SYMBOL_DEFINITION _decode_PkiWaError */
/**
 * @summary Decodes an ASN.1 element into a(n) PkiWaError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PkiWaError} The decoded data structure.
 */
export function _decode_PkiWaError(el: _Element) {
    if (!_cached_decoder_for_PkiWaError) {
        _cached_decoder_for_PkiWaError = $._decodeEnumerated;
    }
    return _cached_decoder_for_PkiWaError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PkiWaError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PkiWaError */
let _cached_encoder_for_PkiWaError: $.ASN1Encoder<PkiWaError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PkiWaError */

/* START_OF_SYMBOL_DEFINITION _encode_PkiWaError */
/**
 * @summary Encodes a(n) PkiWaError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PkiWaError, encoded as an ASN.1 Element.
 */
export function _encode_PkiWaError(
    value: PkiWaError,
    elGetter: $.ASN1Encoder<PkiWaError>
) {
    if (!_cached_encoder_for_PkiWaError) {
        _cached_encoder_for_PkiWaError = $._encodeEnumerated;
    }
    return _cached_encoder_for_PkiWaError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PkiWaError */

/* eslint-enable */
