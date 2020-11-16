/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ShadowProblem */
/**
 * @summary ShadowProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ShadowProblem  ::=  INTEGER {
 *   invalidAgreementID         (1),
 *   inactiveAgreement          (2),
 *   invalidInformationReceived (3),
 *   unsupportedStrategy        (4),
 *   missedPrevious             (5),
 *   fullUpdateRequired         (6),
 *   unwillingToPerform         (7),
 *   unsuitableTiming           (8),
 *   updateAlreadyReceived      (9),
 *   invalidSequencing          (10),
 *   insufficientResources      (11) }
 * ```
 */
export type ShadowProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION ShadowProblem */

/* START_OF_SYMBOL_DEFINITION ShadowProblem_invalidAgreementID */
/**
 * @summary ShadowProblem_invalidAgreementID
 * @constant
 * @type {number}
 */
export const ShadowProblem_invalidAgreementID: ShadowProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ShadowProblem_invalidAgreementID */

/* START_OF_SYMBOL_DEFINITION ShadowProblem_inactiveAgreement */
/**
 * @summary ShadowProblem_inactiveAgreement
 * @constant
 * @type {number}
 */
export const ShadowProblem_inactiveAgreement: ShadowProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ShadowProblem_inactiveAgreement */

/* START_OF_SYMBOL_DEFINITION ShadowProblem_invalidInformationReceived */
/**
 * @summary ShadowProblem_invalidInformationReceived
 * @constant
 * @type {number}
 */
export const ShadowProblem_invalidInformationReceived: ShadowProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ShadowProblem_invalidInformationReceived */

/* START_OF_SYMBOL_DEFINITION ShadowProblem_unsupportedStrategy */
/**
 * @summary ShadowProblem_unsupportedStrategy
 * @constant
 * @type {number}
 */
export const ShadowProblem_unsupportedStrategy: ShadowProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ShadowProblem_unsupportedStrategy */

/* START_OF_SYMBOL_DEFINITION ShadowProblem_missedPrevious */
/**
 * @summary ShadowProblem_missedPrevious
 * @constant
 * @type {number}
 */
export const ShadowProblem_missedPrevious: ShadowProblem = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ShadowProblem_missedPrevious */

/* START_OF_SYMBOL_DEFINITION ShadowProblem_fullUpdateRequired */
/**
 * @summary ShadowProblem_fullUpdateRequired
 * @constant
 * @type {number}
 */
export const ShadowProblem_fullUpdateRequired: ShadowProblem = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ShadowProblem_fullUpdateRequired */

/* START_OF_SYMBOL_DEFINITION ShadowProblem_unwillingToPerform */
/**
 * @summary ShadowProblem_unwillingToPerform
 * @constant
 * @type {number}
 */
export const ShadowProblem_unwillingToPerform: ShadowProblem = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ShadowProblem_unwillingToPerform */

/* START_OF_SYMBOL_DEFINITION ShadowProblem_unsuitableTiming */
/**
 * @summary ShadowProblem_unsuitableTiming
 * @constant
 * @type {number}
 */
export const ShadowProblem_unsuitableTiming: ShadowProblem = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ShadowProblem_unsuitableTiming */

/* START_OF_SYMBOL_DEFINITION ShadowProblem_updateAlreadyReceived */
/**
 * @summary ShadowProblem_updateAlreadyReceived
 * @constant
 * @type {number}
 */
export const ShadowProblem_updateAlreadyReceived: ShadowProblem = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ShadowProblem_updateAlreadyReceived */

/* START_OF_SYMBOL_DEFINITION ShadowProblem_invalidSequencing */
/**
 * @summary ShadowProblem_invalidSequencing
 * @constant
 * @type {number}
 */
export const ShadowProblem_invalidSequencing: ShadowProblem = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ShadowProblem_invalidSequencing */

/* START_OF_SYMBOL_DEFINITION ShadowProblem_insufficientResources */
/**
 * @summary ShadowProblem_insufficientResources
 * @constant
 * @type {number}
 */
export const ShadowProblem_insufficientResources: ShadowProblem = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ShadowProblem_insufficientResources */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ShadowProblem */
let _cached_decoder_for_ShadowProblem: $.ASN1Decoder<
    ShadowProblem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ShadowProblem */

/* START_OF_SYMBOL_DEFINITION _decode_ShadowProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) ShadowProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ShadowProblem} The decoded data structure.
 */
export function _decode_ShadowProblem(el: _Element) {
    if (!_cached_decoder_for_ShadowProblem) {
        _cached_decoder_for_ShadowProblem = $._decodeInteger;
    }
    return _cached_decoder_for_ShadowProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ShadowProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ShadowProblem */
let _cached_encoder_for_ShadowProblem: $.ASN1Encoder<
    ShadowProblem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ShadowProblem */

/* START_OF_SYMBOL_DEFINITION _encode_ShadowProblem */
/**
 * @summary Encodes a(n) ShadowProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShadowProblem, encoded as an ASN.1 Element.
 */
export function _encode_ShadowProblem(
    value: ShadowProblem,
    elGetter: $.ASN1Encoder<ShadowProblem>
) {
    if (!_cached_encoder_for_ShadowProblem) {
        _cached_encoder_for_ShadowProblem = $._encodeInteger;
    }
    return _cached_encoder_for_ShadowProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ShadowProblem */

/* eslint-enable */
