/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_AVMP_error */
export enum _enum_for_AVMP_error {
    noReason = 0,
    unknownAvlEntity = 1,
    unknownContentType = 2,
    unsupportedAVMPversion = 3,
    missingContent = 4,
    missingContentComponent = 5,
    invalidContentComponent = 6,
    sequenceError = 7,
    protocolError = 8,
    invalidAvlSignature = 9,
    duplicateAVL = 10,
    missingAvlComponent = 11,
    invalidAvlVersion = 12,
    notAllowedForConstrainedAVLEntity = 13,
    constrainedRequired = 14,
    nonConstrainedRequired = 15,
    unsupportedCriticalEntryExtension = 16,
    unsupportedCriticalExtension = 17,
    maxAVLsExceeded = 18,
    unknownCert = 19,
    unknownAVL = 20,
    unsupportedScopeRestriction = 21,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AVMP_error */

/* START_OF_SYMBOL_DEFINITION AVMP_error */
/**
 * @summary AVMP_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AVMP-error  ::=  ENUMERATED {
 *   noReason                           (0),
 *   unknownAvlEntity                   (1),
 *   unknownContentType                 (2),
 *   unsupportedAVMPversion             (3),
 *   missingContent                     (4),
 *   missingContentComponent            (5),
 *   invalidContentComponent            (6),
 *   sequenceError                      (7),
 *   protocolError                      (8),
 *   invalidAvlSignature                (9),
 *   duplicateAVL                       (10),
 *   missingAvlComponent                (11),
 *   invalidAvlVersion                  (12),
 *   notAllowedForConstrainedAVLEntity  (13),
 *   constrainedRequired                (14),
 *   nonConstrainedRequired             (15),
 *   unsupportedCriticalEntryExtension  (16),
 *   unsupportedCriticalExtension       (17),
 *   maxAVLsExceeded                    (18),
 *   unknownCert                        (19),
 *   unknownAVL                         (20),
 *   unsupportedScopeRestriction        (21),
 *   ... }
 * ```@enum {number}
 */
export type AVMP_error = _enum_for_AVMP_error | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION AVMP_error */

/* START_OF_SYMBOL_DEFINITION AVMP_error_noReason */
/**
 * @summary AVMP_error_noReason
 * @constant
 * @type {number}
 */
export const AVMP_error_noReason: AVMP_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_noReason */

/* START_OF_SYMBOL_DEFINITION noReason */
/**
 * @summary noReason
 * @constant
 * @type {number}
 */
export const noReason: AVMP_error = AVMP_error_noReason; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noReason */

/* START_OF_SYMBOL_DEFINITION AVMP_error_unknownAvlEntity */
/**
 * @summary AVMP_error_unknownAvlEntity
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownAvlEntity: AVMP_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_unknownAvlEntity */

/* START_OF_SYMBOL_DEFINITION unknownAvlEntity */
/**
 * @summary unknownAvlEntity
 * @constant
 * @type {number}
 */
export const unknownAvlEntity: AVMP_error = AVMP_error_unknownAvlEntity; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownAvlEntity */

/* START_OF_SYMBOL_DEFINITION AVMP_error_unknownContentType */
/**
 * @summary AVMP_error_unknownContentType
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownContentType: AVMP_error = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_unknownContentType */

/* START_OF_SYMBOL_DEFINITION unknownContentType */
/**
 * @summary unknownContentType
 * @constant
 * @type {number}
 */
export const unknownContentType: AVMP_error = AVMP_error_unknownContentType; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownContentType */

/* START_OF_SYMBOL_DEFINITION AVMP_error_unsupportedAVMPversion */
/**
 * @summary AVMP_error_unsupportedAVMPversion
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedAVMPversion: AVMP_error = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_unsupportedAVMPversion */

/* START_OF_SYMBOL_DEFINITION unsupportedAVMPversion */
/**
 * @summary unsupportedAVMPversion
 * @constant
 * @type {number}
 */
export const unsupportedAVMPversion: AVMP_error = AVMP_error_unsupportedAVMPversion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedAVMPversion */

/* START_OF_SYMBOL_DEFINITION AVMP_error_missingContent */
/**
 * @summary AVMP_error_missingContent
 * @constant
 * @type {number}
 */
export const AVMP_error_missingContent: AVMP_error = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_missingContent */

/* START_OF_SYMBOL_DEFINITION missingContent */
/**
 * @summary missingContent
 * @constant
 * @type {number}
 */
export const missingContent: AVMP_error = AVMP_error_missingContent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION missingContent */

/* START_OF_SYMBOL_DEFINITION AVMP_error_missingContentComponent */
/**
 * @summary AVMP_error_missingContentComponent
 * @constant
 * @type {number}
 */
export const AVMP_error_missingContentComponent: AVMP_error = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_missingContentComponent */

/* START_OF_SYMBOL_DEFINITION missingContentComponent */
/**
 * @summary missingContentComponent
 * @constant
 * @type {number}
 */
export const missingContentComponent: AVMP_error = AVMP_error_missingContentComponent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION missingContentComponent */

/* START_OF_SYMBOL_DEFINITION AVMP_error_invalidContentComponent */
/**
 * @summary AVMP_error_invalidContentComponent
 * @constant
 * @type {number}
 */
export const AVMP_error_invalidContentComponent: AVMP_error = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_invalidContentComponent */

/* START_OF_SYMBOL_DEFINITION invalidContentComponent */
/**
 * @summary invalidContentComponent
 * @constant
 * @type {number}
 */
export const invalidContentComponent: AVMP_error = AVMP_error_invalidContentComponent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidContentComponent */

/* START_OF_SYMBOL_DEFINITION AVMP_error_sequenceError */
/**
 * @summary AVMP_error_sequenceError
 * @constant
 * @type {number}
 */
export const AVMP_error_sequenceError: AVMP_error = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_sequenceError */

/* START_OF_SYMBOL_DEFINITION sequenceError */
/**
 * @summary sequenceError
 * @constant
 * @type {number}
 */
export const sequenceError: AVMP_error = AVMP_error_sequenceError; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sequenceError */

/* START_OF_SYMBOL_DEFINITION AVMP_error_protocolError */
/**
 * @summary AVMP_error_protocolError
 * @constant
 * @type {number}
 */
export const AVMP_error_protocolError: AVMP_error = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_protocolError */

/* START_OF_SYMBOL_DEFINITION protocolError */
/**
 * @summary protocolError
 * @constant
 * @type {number}
 */
export const protocolError: AVMP_error = AVMP_error_protocolError; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION protocolError */

/* START_OF_SYMBOL_DEFINITION AVMP_error_invalidAvlSignature */
/**
 * @summary AVMP_error_invalidAvlSignature
 * @constant
 * @type {number}
 */
export const AVMP_error_invalidAvlSignature: AVMP_error = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_invalidAvlSignature */

/* START_OF_SYMBOL_DEFINITION invalidAvlSignature */
/**
 * @summary invalidAvlSignature
 * @constant
 * @type {number}
 */
export const invalidAvlSignature: AVMP_error = AVMP_error_invalidAvlSignature; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidAvlSignature */

/* START_OF_SYMBOL_DEFINITION AVMP_error_duplicateAVL */
/**
 * @summary AVMP_error_duplicateAVL
 * @constant
 * @type {number}
 */
export const AVMP_error_duplicateAVL: AVMP_error = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_duplicateAVL */

/* START_OF_SYMBOL_DEFINITION duplicateAVL */
/**
 * @summary duplicateAVL
 * @constant
 * @type {number}
 */
export const duplicateAVL: AVMP_error = AVMP_error_duplicateAVL; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION duplicateAVL */

/* START_OF_SYMBOL_DEFINITION AVMP_error_missingAvlComponent */
/**
 * @summary AVMP_error_missingAvlComponent
 * @constant
 * @type {number}
 */
export const AVMP_error_missingAvlComponent: AVMP_error = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_missingAvlComponent */

/* START_OF_SYMBOL_DEFINITION missingAvlComponent */
/**
 * @summary missingAvlComponent
 * @constant
 * @type {number}
 */
export const missingAvlComponent: AVMP_error = AVMP_error_missingAvlComponent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION missingAvlComponent */

/* START_OF_SYMBOL_DEFINITION AVMP_error_invalidAvlVersion */
/**
 * @summary AVMP_error_invalidAvlVersion
 * @constant
 * @type {number}
 */
export const AVMP_error_invalidAvlVersion: AVMP_error = 12; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_invalidAvlVersion */

/* START_OF_SYMBOL_DEFINITION invalidAvlVersion */
/**
 * @summary invalidAvlVersion
 * @constant
 * @type {number}
 */
export const invalidAvlVersion: AVMP_error = AVMP_error_invalidAvlVersion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidAvlVersion */

/* START_OF_SYMBOL_DEFINITION AVMP_error_notAllowedForConstrainedAVLEntity */
/**
 * @summary AVMP_error_notAllowedForConstrainedAVLEntity
 * @constant
 * @type {number}
 */
export const AVMP_error_notAllowedForConstrainedAVLEntity: AVMP_error = 13; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_notAllowedForConstrainedAVLEntity */

/* START_OF_SYMBOL_DEFINITION notAllowedForConstrainedAVLEntity */
/**
 * @summary notAllowedForConstrainedAVLEntity
 * @constant
 * @type {number}
 */
export const notAllowedForConstrainedAVLEntity: AVMP_error = AVMP_error_notAllowedForConstrainedAVLEntity; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION notAllowedForConstrainedAVLEntity */

/* START_OF_SYMBOL_DEFINITION AVMP_error_constrainedRequired */
/**
 * @summary AVMP_error_constrainedRequired
 * @constant
 * @type {number}
 */
export const AVMP_error_constrainedRequired: AVMP_error = 14; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_constrainedRequired */

/* START_OF_SYMBOL_DEFINITION constrainedRequired */
/**
 * @summary constrainedRequired
 * @constant
 * @type {number}
 */
export const constrainedRequired: AVMP_error = AVMP_error_constrainedRequired; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION constrainedRequired */

/* START_OF_SYMBOL_DEFINITION AVMP_error_nonConstrainedRequired */
/**
 * @summary AVMP_error_nonConstrainedRequired
 * @constant
 * @type {number}
 */
export const AVMP_error_nonConstrainedRequired: AVMP_error = 15; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_nonConstrainedRequired */

/* START_OF_SYMBOL_DEFINITION nonConstrainedRequired */
/**
 * @summary nonConstrainedRequired
 * @constant
 * @type {number}
 */
export const nonConstrainedRequired: AVMP_error = AVMP_error_nonConstrainedRequired; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nonConstrainedRequired */

/* START_OF_SYMBOL_DEFINITION AVMP_error_unsupportedCriticalEntryExtension */
/**
 * @summary AVMP_error_unsupportedCriticalEntryExtension
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedCriticalEntryExtension: AVMP_error = 16; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_unsupportedCriticalEntryExtension */

/* START_OF_SYMBOL_DEFINITION unsupportedCriticalEntryExtension */
/**
 * @summary unsupportedCriticalEntryExtension
 * @constant
 * @type {number}
 */
export const unsupportedCriticalEntryExtension: AVMP_error = AVMP_error_unsupportedCriticalEntryExtension; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedCriticalEntryExtension */

/* START_OF_SYMBOL_DEFINITION AVMP_error_unsupportedCriticalExtension */
/**
 * @summary AVMP_error_unsupportedCriticalExtension
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedCriticalExtension: AVMP_error = 17; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_unsupportedCriticalExtension */

/* START_OF_SYMBOL_DEFINITION unsupportedCriticalExtension */
/**
 * @summary unsupportedCriticalExtension
 * @constant
 * @type {number}
 */
export const unsupportedCriticalExtension: AVMP_error = AVMP_error_unsupportedCriticalExtension; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedCriticalExtension */

/* START_OF_SYMBOL_DEFINITION AVMP_error_maxAVLsExceeded */
/**
 * @summary AVMP_error_maxAVLsExceeded
 * @constant
 * @type {number}
 */
export const AVMP_error_maxAVLsExceeded: AVMP_error = 18; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_maxAVLsExceeded */

/* START_OF_SYMBOL_DEFINITION maxAVLsExceeded */
/**
 * @summary maxAVLsExceeded
 * @constant
 * @type {number}
 */
export const maxAVLsExceeded: AVMP_error = AVMP_error_maxAVLsExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION maxAVLsExceeded */

/* START_OF_SYMBOL_DEFINITION AVMP_error_unknownCert */
/**
 * @summary AVMP_error_unknownCert
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownCert: AVMP_error = 19; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_unknownCert */

/* START_OF_SYMBOL_DEFINITION unknownCert */
/**
 * @summary unknownCert
 * @constant
 * @type {number}
 */
export const unknownCert: AVMP_error = AVMP_error_unknownCert; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownCert */

/* START_OF_SYMBOL_DEFINITION AVMP_error_unknownAVL */
/**
 * @summary AVMP_error_unknownAVL
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownAVL: AVMP_error = 20; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_unknownAVL */

/* START_OF_SYMBOL_DEFINITION unknownAVL */
/**
 * @summary unknownAVL
 * @constant
 * @type {number}
 */
export const unknownAVL: AVMP_error = AVMP_error_unknownAVL; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownAVL */

/* START_OF_SYMBOL_DEFINITION AVMP_error_unsupportedScopeRestriction */
/**
 * @summary AVMP_error_unsupportedScopeRestriction
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedScopeRestriction: AVMP_error = 21; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_unsupportedScopeRestriction */

/* START_OF_SYMBOL_DEFINITION unsupportedScopeRestriction */
/**
 * @summary unsupportedScopeRestriction
 * @constant
 * @type {number}
 */
export const unsupportedScopeRestriction: AVMP_error = AVMP_error_unsupportedScopeRestriction; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedScopeRestriction */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AVMP_error */
let _cached_decoder_for_AVMP_error: $.ASN1Decoder<AVMP_error> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AVMP_error */

/* START_OF_SYMBOL_DEFINITION _decode_AVMP_error */
/**
 * @summary Decodes an ASN.1 element into a(n) AVMP_error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AVMP_error} The decoded data structure.
 */
export function _decode_AVMP_error(el: _Element) {
    if (!_cached_decoder_for_AVMP_error) {
        _cached_decoder_for_AVMP_error = $._decodeEnumerated;
    }
    return _cached_decoder_for_AVMP_error(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AVMP_error */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AVMP_error */
let _cached_encoder_for_AVMP_error: $.ASN1Encoder<AVMP_error> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AVMP_error */

/* START_OF_SYMBOL_DEFINITION _encode_AVMP_error */
/**
 * @summary Encodes a(n) AVMP_error into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AVMP_error, encoded as an ASN.1 Element.
 */
export function _encode_AVMP_error(
    value: AVMP_error,
    elGetter: $.ASN1Encoder<AVMP_error>
) {
    if (!_cached_encoder_for_AVMP_error) {
        _cached_encoder_for_AVMP_error = $._encodeEnumerated;
    }
    return _cached_encoder_for_AVMP_error(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AVMP_error */

/* eslint-enable */
