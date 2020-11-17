/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_AVMP_error */
export enum _enum_for_AVMP_error {
    noReason = 0,
    protocolError = 1,
    duplicateAVL = 2,
    missingAvlComponent = 3,
    invalidAvlVersion = 4,
    notAllowedForConstrainedAVLEntity = 5,
    constrainedRequired = 6,
    nonConstrainedRequired = 7,
    unsupportedCriticalEntryExtenssion = 8,
    unsupportedCriticalExtenssion = 9,
    maxAVLsExceeded = 10,
    unknownAVL = 11,
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
 *   protocolError                      (1),
 *   duplicateAVL                       (2),
 *   missingAvlComponent                (3),
 *   invalidAvlVersion                  (4),
 *   notAllowedForConstrainedAVLEntity  (5),
 *   constrainedRequired                (6),
 *   nonConstrainedRequired             (7),
 *   unsupportedCriticalEntryExtenssion (8),
 *   unsupportedCriticalExtenssion      (9),
 *   maxAVLsExceeded                    (10),
 *   unknownAVL                         (11),
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

/* START_OF_SYMBOL_DEFINITION AVMP_error_protocolError */
/**
 * @summary AVMP_error_protocolError
 * @constant
 * @type {number}
 */
export const AVMP_error_protocolError: AVMP_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_protocolError */

/* START_OF_SYMBOL_DEFINITION protocolError */
/**
 * @summary protocolError
 * @constant
 * @type {number}
 */
export const protocolError: AVMP_error = AVMP_error_protocolError; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION protocolError */

/* START_OF_SYMBOL_DEFINITION AVMP_error_duplicateAVL */
/**
 * @summary AVMP_error_duplicateAVL
 * @constant
 * @type {number}
 */
export const AVMP_error_duplicateAVL: AVMP_error = 2; /* LONG_NAMED_ENUMERATED_VALUE */
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
export const AVMP_error_missingAvlComponent: AVMP_error = 3; /* LONG_NAMED_ENUMERATED_VALUE */
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
export const AVMP_error_invalidAvlVersion: AVMP_error = 4; /* LONG_NAMED_ENUMERATED_VALUE */
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
export const AVMP_error_notAllowedForConstrainedAVLEntity: AVMP_error = 5; /* LONG_NAMED_ENUMERATED_VALUE */
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
export const AVMP_error_constrainedRequired: AVMP_error = 6; /* LONG_NAMED_ENUMERATED_VALUE */
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
export const AVMP_error_nonConstrainedRequired: AVMP_error = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_nonConstrainedRequired */

/* START_OF_SYMBOL_DEFINITION nonConstrainedRequired */
/**
 * @summary nonConstrainedRequired
 * @constant
 * @type {number}
 */
export const nonConstrainedRequired: AVMP_error = AVMP_error_nonConstrainedRequired; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nonConstrainedRequired */

/* START_OF_SYMBOL_DEFINITION AVMP_error_unsupportedCriticalEntryExtenssion */
/**
 * @summary AVMP_error_unsupportedCriticalEntryExtenssion
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedCriticalEntryExtenssion: AVMP_error = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_unsupportedCriticalEntryExtenssion */

/* START_OF_SYMBOL_DEFINITION unsupportedCriticalEntryExtenssion */
/**
 * @summary unsupportedCriticalEntryExtenssion
 * @constant
 * @type {number}
 */
export const unsupportedCriticalEntryExtenssion: AVMP_error = AVMP_error_unsupportedCriticalEntryExtenssion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedCriticalEntryExtenssion */

/* START_OF_SYMBOL_DEFINITION AVMP_error_unsupportedCriticalExtenssion */
/**
 * @summary AVMP_error_unsupportedCriticalExtenssion
 * @constant
 * @type {number}
 */
export const AVMP_error_unsupportedCriticalExtenssion: AVMP_error = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_unsupportedCriticalExtenssion */

/* START_OF_SYMBOL_DEFINITION unsupportedCriticalExtenssion */
/**
 * @summary unsupportedCriticalExtenssion
 * @constant
 * @type {number}
 */
export const unsupportedCriticalExtenssion: AVMP_error = AVMP_error_unsupportedCriticalExtenssion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedCriticalExtenssion */

/* START_OF_SYMBOL_DEFINITION AVMP_error_maxAVLsExceeded */
/**
 * @summary AVMP_error_maxAVLsExceeded
 * @constant
 * @type {number}
 */
export const AVMP_error_maxAVLsExceeded: AVMP_error = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_maxAVLsExceeded */

/* START_OF_SYMBOL_DEFINITION maxAVLsExceeded */
/**
 * @summary maxAVLsExceeded
 * @constant
 * @type {number}
 */
export const maxAVLsExceeded: AVMP_error = AVMP_error_maxAVLsExceeded; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION maxAVLsExceeded */

/* START_OF_SYMBOL_DEFINITION AVMP_error_unknownAVL */
/**
 * @summary AVMP_error_unknownAVL
 * @constant
 * @type {number}
 */
export const AVMP_error_unknownAVL: AVMP_error = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMP_error_unknownAVL */

/* START_OF_SYMBOL_DEFINITION unknownAVL */
/**
 * @summary unknownAVL
 * @constant
 * @type {number}
 */
export const unknownAVL: AVMP_error = AVMP_error_unknownAVL; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownAVL */

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
