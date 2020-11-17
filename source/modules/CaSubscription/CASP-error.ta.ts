/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_CASP_error */
export enum _enum_for_CASP_error {
    noReason = 0,
    unknownContentType = 1,
    unsupportedWLMPversion = 2,
    missingContent = 3,
    missingContentComponent = 4,
    invalidContentComponent = 5,
    sequenceError = 6,
    unknownSubject = 7,
    unknownCert = 8,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CASP_error */

/* START_OF_SYMBOL_DEFINITION CASP_error */
/**
 * @summary CASP_error
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASP-error  ::=  ENUMERATED {
 *   noReason                      (0),
 *   unknownContentType            (1),
 *   unsupportedWLMPversion        (2),
 *   missingContent                (3),
 *   missingContentComponent       (4),
 *   invalidContentComponent       (5),
 *   sequenceError                 (6),
 *   unknownSubject                (7),
 *   unknownCert                   (8),
 *   ... }
 * ```@enum {number}
 */
export type CASP_error = _enum_for_CASP_error | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION CASP_error */

/* START_OF_SYMBOL_DEFINITION CASP_error_noReason */
/**
 * @summary CASP_error_noReason
 * @constant
 * @type {number}
 */
export const CASP_error_noReason: CASP_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASP_error_noReason */

/* START_OF_SYMBOL_DEFINITION noReason */
/**
 * @summary noReason
 * @constant
 * @type {number}
 */
export const noReason: CASP_error = CASP_error_noReason; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION noReason */

/* START_OF_SYMBOL_DEFINITION CASP_error_unknownContentType */
/**
 * @summary CASP_error_unknownContentType
 * @constant
 * @type {number}
 */
export const CASP_error_unknownContentType: CASP_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASP_error_unknownContentType */

/* START_OF_SYMBOL_DEFINITION unknownContentType */
/**
 * @summary unknownContentType
 * @constant
 * @type {number}
 */
export const unknownContentType: CASP_error = CASP_error_unknownContentType; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownContentType */

/* START_OF_SYMBOL_DEFINITION CASP_error_unsupportedWLMPversion */
/**
 * @summary CASP_error_unsupportedWLMPversion
 * @constant
 * @type {number}
 */
export const CASP_error_unsupportedWLMPversion: CASP_error = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASP_error_unsupportedWLMPversion */

/* START_OF_SYMBOL_DEFINITION unsupportedWLMPversion */
/**
 * @summary unsupportedWLMPversion
 * @constant
 * @type {number}
 */
export const unsupportedWLMPversion: CASP_error = CASP_error_unsupportedWLMPversion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedWLMPversion */

/* START_OF_SYMBOL_DEFINITION CASP_error_missingContent */
/**
 * @summary CASP_error_missingContent
 * @constant
 * @type {number}
 */
export const CASP_error_missingContent: CASP_error = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASP_error_missingContent */

/* START_OF_SYMBOL_DEFINITION missingContent */
/**
 * @summary missingContent
 * @constant
 * @type {number}
 */
export const missingContent: CASP_error = CASP_error_missingContent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION missingContent */

/* START_OF_SYMBOL_DEFINITION CASP_error_missingContentComponent */
/**
 * @summary CASP_error_missingContentComponent
 * @constant
 * @type {number}
 */
export const CASP_error_missingContentComponent: CASP_error = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASP_error_missingContentComponent */

/* START_OF_SYMBOL_DEFINITION missingContentComponent */
/**
 * @summary missingContentComponent
 * @constant
 * @type {number}
 */
export const missingContentComponent: CASP_error = CASP_error_missingContentComponent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION missingContentComponent */

/* START_OF_SYMBOL_DEFINITION CASP_error_invalidContentComponent */
/**
 * @summary CASP_error_invalidContentComponent
 * @constant
 * @type {number}
 */
export const CASP_error_invalidContentComponent: CASP_error = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASP_error_invalidContentComponent */

/* START_OF_SYMBOL_DEFINITION invalidContentComponent */
/**
 * @summary invalidContentComponent
 * @constant
 * @type {number}
 */
export const invalidContentComponent: CASP_error = CASP_error_invalidContentComponent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidContentComponent */

/* START_OF_SYMBOL_DEFINITION CASP_error_sequenceError */
/**
 * @summary CASP_error_sequenceError
 * @constant
 * @type {number}
 */
export const CASP_error_sequenceError: CASP_error = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASP_error_sequenceError */

/* START_OF_SYMBOL_DEFINITION sequenceError */
/**
 * @summary sequenceError
 * @constant
 * @type {number}
 */
export const sequenceError: CASP_error = CASP_error_sequenceError; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sequenceError */

/* START_OF_SYMBOL_DEFINITION CASP_error_unknownSubject */
/**
 * @summary CASP_error_unknownSubject
 * @constant
 * @type {number}
 */
export const CASP_error_unknownSubject: CASP_error = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASP_error_unknownSubject */

/* START_OF_SYMBOL_DEFINITION unknownSubject */
/**
 * @summary unknownSubject
 * @constant
 * @type {number}
 */
export const unknownSubject: CASP_error = CASP_error_unknownSubject; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownSubject */

/* START_OF_SYMBOL_DEFINITION CASP_error_unknownCert */
/**
 * @summary CASP_error_unknownCert
 * @constant
 * @type {number}
 */
export const CASP_error_unknownCert: CASP_error = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASP_error_unknownCert */

/* START_OF_SYMBOL_DEFINITION unknownCert */
/**
 * @summary unknownCert
 * @constant
 * @type {number}
 */
export const unknownCert: CASP_error = CASP_error_unknownCert; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownCert */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CASP_error */
let _cached_decoder_for_CASP_error: $.ASN1Decoder<CASP_error> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CASP_error */

/* START_OF_SYMBOL_DEFINITION _decode_CASP_error */
/**
 * @summary Decodes an ASN.1 element into a(n) CASP_error
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CASP_error} The decoded data structure.
 */
export function _decode_CASP_error(el: _Element) {
    if (!_cached_decoder_for_CASP_error) {
        _cached_decoder_for_CASP_error = $._decodeEnumerated;
    }
    return _cached_decoder_for_CASP_error(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CASP_error */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CASP_error */
let _cached_encoder_for_CASP_error: $.ASN1Encoder<CASP_error> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CASP_error */

/* START_OF_SYMBOL_DEFINITION _encode_CASP_error */
/**
 * @summary Encodes a(n) CASP_error into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CASP_error, encoded as an ASN.1 Element.
 */
export function _encode_CASP_error(
    value: CASP_error,
    elGetter: $.ASN1Encoder<CASP_error>
) {
    if (!_cached_encoder_for_CASP_error) {
        _cached_encoder_for_CASP_error = $._encodeEnumerated;
    }
    return _cached_encoder_for_CASP_error(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CASP_error */

/* eslint-enable */
