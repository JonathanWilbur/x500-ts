/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ServiceProblem */
/**
 * @summary ServiceProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceProblem  ::=  INTEGER {
 *   busy                         (1),
 *   unavailable                  (2),
 *   unwillingToPerform           (3),
 *   chainingRequired             (4),
 *   unableToProceed              (5),
 *   invalidReference             (6),
 *   timeLimitExceeded            (7),
 *   administrativeLimitExceeded  (8),
 *   loopDetected                 (9),
 *   unavailableCriticalExtension (10),
 *   outOfScope                   (11),
 *   ditError                     (12),
 *   invalidQueryReference        (13),
 *   requestedServiceNotAvailable (14),
 *   unsupportedMatchingUse       (15),
 *   ambiguousKeyAttributes       (16),
 *   saslBindInProgress           (17),
 *   notSupportedByLDAP           (18) }
 * ```
 */
export type ServiceProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION ServiceProblem */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_busy */
/**
 * @summary ServiceProblem_busy
 * @constant
 * @type {number}
 */
export const ServiceProblem_busy: ServiceProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_busy */

/* START_OF_SYMBOL_DEFINITION busy */
/**
 * @summary ServiceProblem_busy
 * @constant
 * @type {number}
 */
export const busy: ServiceProblem = ServiceProblem_busy; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION busy */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_unavailable */
/**
 * @summary ServiceProblem_unavailable
 * @constant
 * @type {number}
 */
export const ServiceProblem_unavailable: ServiceProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_unavailable */

/* START_OF_SYMBOL_DEFINITION unavailable */
/**
 * @summary ServiceProblem_unavailable
 * @constant
 * @type {number}
 */
export const unavailable: ServiceProblem = ServiceProblem_unavailable; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unavailable */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_unwillingToPerform */
/**
 * @summary ServiceProblem_unwillingToPerform
 * @constant
 * @type {number}
 */
export const ServiceProblem_unwillingToPerform: ServiceProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_unwillingToPerform */

/* START_OF_SYMBOL_DEFINITION unwillingToPerform */
/**
 * @summary ServiceProblem_unwillingToPerform
 * @constant
 * @type {number}
 */
export const unwillingToPerform: ServiceProblem = ServiceProblem_unwillingToPerform; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unwillingToPerform */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_chainingRequired */
/**
 * @summary ServiceProblem_chainingRequired
 * @constant
 * @type {number}
 */
export const ServiceProblem_chainingRequired: ServiceProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_chainingRequired */

/* START_OF_SYMBOL_DEFINITION chainingRequired */
/**
 * @summary ServiceProblem_chainingRequired
 * @constant
 * @type {number}
 */
export const chainingRequired: ServiceProblem = ServiceProblem_chainingRequired; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION chainingRequired */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_unableToProceed */
/**
 * @summary ServiceProblem_unableToProceed
 * @constant
 * @type {number}
 */
export const ServiceProblem_unableToProceed: ServiceProblem = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_unableToProceed */

/* START_OF_SYMBOL_DEFINITION unableToProceed */
/**
 * @summary ServiceProblem_unableToProceed
 * @constant
 * @type {number}
 */
export const unableToProceed: ServiceProblem = ServiceProblem_unableToProceed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unableToProceed */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_invalidReference */
/**
 * @summary ServiceProblem_invalidReference
 * @constant
 * @type {number}
 */
export const ServiceProblem_invalidReference: ServiceProblem = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_invalidReference */

/* START_OF_SYMBOL_DEFINITION invalidReference */
/**
 * @summary ServiceProblem_invalidReference
 * @constant
 * @type {number}
 */
export const invalidReference: ServiceProblem = ServiceProblem_invalidReference; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidReference */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_timeLimitExceeded */
/**
 * @summary ServiceProblem_timeLimitExceeded
 * @constant
 * @type {number}
 */
export const ServiceProblem_timeLimitExceeded: ServiceProblem = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_timeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION timeLimitExceeded */
/**
 * @summary ServiceProblem_timeLimitExceeded
 * @constant
 * @type {number}
 */
export const timeLimitExceeded: ServiceProblem = ServiceProblem_timeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION timeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_administrativeLimitExceeded */
/**
 * @summary ServiceProblem_administrativeLimitExceeded
 * @constant
 * @type {number}
 */
export const ServiceProblem_administrativeLimitExceeded: ServiceProblem = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_administrativeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION administrativeLimitExceeded */
/**
 * @summary ServiceProblem_administrativeLimitExceeded
 * @constant
 * @type {number}
 */
export const administrativeLimitExceeded: ServiceProblem = ServiceProblem_administrativeLimitExceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION administrativeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_loopDetected */
/**
 * @summary ServiceProblem_loopDetected
 * @constant
 * @type {number}
 */
export const ServiceProblem_loopDetected: ServiceProblem = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_loopDetected */

/* START_OF_SYMBOL_DEFINITION loopDetected */
/**
 * @summary ServiceProblem_loopDetected
 * @constant
 * @type {number}
 */
export const loopDetected: ServiceProblem = ServiceProblem_loopDetected; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION loopDetected */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_unavailableCriticalExtension */
/**
 * @summary ServiceProblem_unavailableCriticalExtension
 * @constant
 * @type {number}
 */
export const ServiceProblem_unavailableCriticalExtension: ServiceProblem = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_unavailableCriticalExtension */

/* START_OF_SYMBOL_DEFINITION unavailableCriticalExtension */
/**
 * @summary ServiceProblem_unavailableCriticalExtension
 * @constant
 * @type {number}
 */
export const unavailableCriticalExtension: ServiceProblem = ServiceProblem_unavailableCriticalExtension; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unavailableCriticalExtension */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_outOfScope */
/**
 * @summary ServiceProblem_outOfScope
 * @constant
 * @type {number}
 */
export const ServiceProblem_outOfScope: ServiceProblem = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_outOfScope */

/* START_OF_SYMBOL_DEFINITION outOfScope */
/**
 * @summary ServiceProblem_outOfScope
 * @constant
 * @type {number}
 */
export const outOfScope: ServiceProblem = ServiceProblem_outOfScope; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION outOfScope */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_ditError */
/**
 * @summary ServiceProblem_ditError
 * @constant
 * @type {number}
 */
export const ServiceProblem_ditError: ServiceProblem = 12; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_ditError */

/* START_OF_SYMBOL_DEFINITION ditError */
/**
 * @summary ServiceProblem_ditError
 * @constant
 * @type {number}
 */
export const ditError: ServiceProblem = ServiceProblem_ditError; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ditError */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_invalidQueryReference */
/**
 * @summary ServiceProblem_invalidQueryReference
 * @constant
 * @type {number}
 */
export const ServiceProblem_invalidQueryReference: ServiceProblem = 13; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_invalidQueryReference */

/* START_OF_SYMBOL_DEFINITION invalidQueryReference */
/**
 * @summary ServiceProblem_invalidQueryReference
 * @constant
 * @type {number}
 */
export const invalidQueryReference: ServiceProblem = ServiceProblem_invalidQueryReference; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidQueryReference */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_requestedServiceNotAvailable */
/**
 * @summary ServiceProblem_requestedServiceNotAvailable
 * @constant
 * @type {number}
 */
export const ServiceProblem_requestedServiceNotAvailable: ServiceProblem = 14; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_requestedServiceNotAvailable */

/* START_OF_SYMBOL_DEFINITION requestedServiceNotAvailable */
/**
 * @summary ServiceProblem_requestedServiceNotAvailable
 * @constant
 * @type {number}
 */
export const requestedServiceNotAvailable: ServiceProblem = ServiceProblem_requestedServiceNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION requestedServiceNotAvailable */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_unsupportedMatchingUse */
/**
 * @summary ServiceProblem_unsupportedMatchingUse
 * @constant
 * @type {number}
 */
export const ServiceProblem_unsupportedMatchingUse: ServiceProblem = 15; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_unsupportedMatchingUse */

/* START_OF_SYMBOL_DEFINITION unsupportedMatchingUse */
/**
 * @summary ServiceProblem_unsupportedMatchingUse
 * @constant
 * @type {number}
 */
export const unsupportedMatchingUse: ServiceProblem = ServiceProblem_unsupportedMatchingUse; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unsupportedMatchingUse */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_ambiguousKeyAttributes */
/**
 * @summary ServiceProblem_ambiguousKeyAttributes
 * @constant
 * @type {number}
 */
export const ServiceProblem_ambiguousKeyAttributes: ServiceProblem = 16; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_ambiguousKeyAttributes */

/* START_OF_SYMBOL_DEFINITION ambiguousKeyAttributes */
/**
 * @summary ServiceProblem_ambiguousKeyAttributes
 * @constant
 * @type {number}
 */
export const ambiguousKeyAttributes: ServiceProblem = ServiceProblem_ambiguousKeyAttributes; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ambiguousKeyAttributes */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_saslBindInProgress */
/**
 * @summary ServiceProblem_saslBindInProgress
 * @constant
 * @type {number}
 */
export const ServiceProblem_saslBindInProgress: ServiceProblem = 17; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_saslBindInProgress */

/* START_OF_SYMBOL_DEFINITION saslBindInProgress */
/**
 * @summary ServiceProblem_saslBindInProgress
 * @constant
 * @type {number}
 */
export const saslBindInProgress: ServiceProblem = ServiceProblem_saslBindInProgress; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION saslBindInProgress */

/* START_OF_SYMBOL_DEFINITION ServiceProblem_notSupportedByLDAP */
/**
 * @summary ServiceProblem_notSupportedByLDAP
 * @constant
 * @type {number}
 */
export const ServiceProblem_notSupportedByLDAP: ServiceProblem = 18; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ServiceProblem_notSupportedByLDAP */

/* START_OF_SYMBOL_DEFINITION notSupportedByLDAP */
/**
 * @summary ServiceProblem_notSupportedByLDAP
 * @constant
 * @type {number}
 */
export const notSupportedByLDAP: ServiceProblem = ServiceProblem_notSupportedByLDAP; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION notSupportedByLDAP */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceProblem */
let _cached_decoder_for_ServiceProblem: $.ASN1Decoder<
    ServiceProblem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceProblem */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceProblem} The decoded data structure.
 */
export function _decode_ServiceProblem(el: _Element) {
    if (!_cached_decoder_for_ServiceProblem) {
        _cached_decoder_for_ServiceProblem = $._decodeInteger;
    }
    return _cached_decoder_for_ServiceProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceProblem */
let _cached_encoder_for_ServiceProblem: $.ASN1Encoder<
    ServiceProblem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceProblem */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceProblem */
/**
 * @summary Encodes a(n) ServiceProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceProblem, encoded as an ASN.1 Element.
 */
export function _encode_ServiceProblem(
    value: ServiceProblem,
    elGetter: $.ASN1Encoder<ServiceProblem>
) {
    if (!_cached_encoder_for_ServiceProblem) {
        _cached_encoder_for_ServiceProblem = $._encodeInteger;
    }
    return _cached_encoder_for_ServiceProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceProblem */

/* eslint-enable */
