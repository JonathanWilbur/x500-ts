/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION SecurityProblem */
/**
 * @summary SecurityProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityProblem  ::=  INTEGER {
 *   inappropriateAuthentication     (1),
 *   invalidCredentials              (2),
 *   insufficientAccessRights        (3),
 *   invalidSignature                (4),
 *   protectionRequired              (5),
 *   noInformation                   (6),
 *   blockedCredentials              (7),
 *   -- invalidQOPMatch              (8), obsolete
 *   spkmError                       (9),
 *   unsupportedAuthenticationMethod (10),
 *   passwordExpired                 (11),
 *   inappropriateAlgorithms         (12) }
 * ```
 */
export type SecurityProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION SecurityProblem */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_inappropriateAuthentication */
/**
 * @summary SecurityProblem_inappropriateAuthentication
 * @constant
 * @type {number}
 */
export const SecurityProblem_inappropriateAuthentication: SecurityProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_inappropriateAuthentication */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_invalidCredentials */
/**
 * @summary SecurityProblem_invalidCredentials
 * @constant
 * @type {number}
 */
export const SecurityProblem_invalidCredentials: SecurityProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_invalidCredentials */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_insufficientAccessRights */
/**
 * @summary SecurityProblem_insufficientAccessRights
 * @constant
 * @type {number}
 */
export const SecurityProblem_insufficientAccessRights: SecurityProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_insufficientAccessRights */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_invalidSignature */
/**
 * @summary SecurityProblem_invalidSignature
 * @constant
 * @type {number}
 */
export const SecurityProblem_invalidSignature: SecurityProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_invalidSignature */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_protectionRequired */
/**
 * @summary SecurityProblem_protectionRequired
 * @constant
 * @type {number}
 */
export const SecurityProblem_protectionRequired: SecurityProblem = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_protectionRequired */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_noInformation */
/**
 * @summary SecurityProblem_noInformation
 * @constant
 * @type {number}
 */
export const SecurityProblem_noInformation: SecurityProblem = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_noInformation */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_blockedCredentials */
/**
 * @summary SecurityProblem_blockedCredentials
 * @constant
 * @type {number}
 */
export const SecurityProblem_blockedCredentials: SecurityProblem = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_blockedCredentials */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_spkmError */
/**
 * @summary SecurityProblem_spkmError
 * @constant
 * @type {number}
 */
export const SecurityProblem_spkmError: SecurityProblem = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_spkmError */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_unsupportedAuthenticationMethod */
/**
 * @summary SecurityProblem_unsupportedAuthenticationMethod
 * @constant
 * @type {number}
 */
export const SecurityProblem_unsupportedAuthenticationMethod: SecurityProblem = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_unsupportedAuthenticationMethod */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_passwordExpired */
/**
 * @summary SecurityProblem_passwordExpired
 * @constant
 * @type {number}
 */
export const SecurityProblem_passwordExpired: SecurityProblem = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_passwordExpired */

/* START_OF_SYMBOL_DEFINITION SecurityProblem_inappropriateAlgorithms */
/**
 * @summary SecurityProblem_inappropriateAlgorithms
 * @constant
 * @type {number}
 */
export const SecurityProblem_inappropriateAlgorithms: SecurityProblem = 12; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SecurityProblem_inappropriateAlgorithms */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityProblem */
let _cached_decoder_for_SecurityProblem: $.ASN1Decoder<
    SecurityProblem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityProblem */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityProblem} The decoded data structure.
 */
export function _decode_SecurityProblem(el: _Element) {
    if (!_cached_decoder_for_SecurityProblem) {
        _cached_decoder_for_SecurityProblem = $._decodeInteger;
    }
    return _cached_decoder_for_SecurityProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityProblem */
let _cached_encoder_for_SecurityProblem: $.ASN1Encoder<
    SecurityProblem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityProblem */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityProblem */
/**
 * @summary Encodes a(n) SecurityProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityProblem, encoded as an ASN.1 Element.
 */
export function _encode_SecurityProblem(
    value: SecurityProblem,
    elGetter: $.ASN1Encoder<SecurityProblem>
) {
    if (!_cached_encoder_for_SecurityProblem) {
        _cached_encoder_for_SecurityProblem = $._encodeInteger;
    }
    return _cached_encoder_for_SecurityProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityProblem */

/* eslint-enable */
