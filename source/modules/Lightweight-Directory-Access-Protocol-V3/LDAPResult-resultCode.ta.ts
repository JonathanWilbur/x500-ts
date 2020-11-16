/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_LDAPResult_resultCode */
export enum _enum_for_LDAPResult_resultCode {
    success = 0,
    operationsError = 1,
    protocolError = 2,
    timeLimitExceeded = 3,
    sizeLimitExceeded = 4,
    compareFalse = 5,
    compareTrue = 6,
    authMethodNotSupported = 7,
    strongerAuthRequired = 8,
    referral = 10,
    adminLimitExceeded = 11,
    unavailableCriticalExtension = 12,
    confidentialityRequired = 13,
    saslBindInProgress = 14,
    noSuchAttribute = 16,
    undefinedAttributeType = 17,
    inappropriateMatching = 18,
    constraintViolation = 19,
    attributeOrValueExists = 20,
    invalidAttributeSyntax = 21,
    noSuchObject = 32,
    aliasProblem = 33,
    invalidDNSyntax = 34,
    aliasDereferencingProblem = 36,
    inappropriateAuthentication = 48,
    invalidCredentials = 49,
    insufficientAccessRights = 50,
    busy = 51,
    unavailable = 52,
    unwillingToPerform = 53,
    loopDetect = 54,
    namingViolation = 64,
    objectClassViolation = 65,
    notAllowedOnNonLeaf = 66,
    notAllowedOnRDN = 67,
    entryAlreadyExists = 68,
    objectClassModsProhibited = 69,
    affectsMultipleDSAs = 71,
    other = 80,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_LDAPResult_resultCode */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode */
/**
 * @summary LDAPResult_resultCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPResult-resultCode ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type LDAPResult_resultCode =
    | _enum_for_LDAPResult_resultCode
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_success */
/**
 * @summary LDAPResult_resultCode_success
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_success: LDAPResult_resultCode = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_success */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_operationsError */
/**
 * @summary LDAPResult_resultCode_operationsError
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_operationsError: LDAPResult_resultCode = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_operationsError */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_protocolError */
/**
 * @summary LDAPResult_resultCode_protocolError
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_protocolError: LDAPResult_resultCode = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_protocolError */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_timeLimitExceeded */
/**
 * @summary LDAPResult_resultCode_timeLimitExceeded
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_timeLimitExceeded: LDAPResult_resultCode = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_timeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_sizeLimitExceeded */
/**
 * @summary LDAPResult_resultCode_sizeLimitExceeded
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_sizeLimitExceeded: LDAPResult_resultCode = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_sizeLimitExceeded */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_compareFalse */
/**
 * @summary LDAPResult_resultCode_compareFalse
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_compareFalse: LDAPResult_resultCode = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_compareFalse */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_compareTrue */
/**
 * @summary LDAPResult_resultCode_compareTrue
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_compareTrue: LDAPResult_resultCode = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_compareTrue */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_authMethodNotSupported */
/**
 * @summary LDAPResult_resultCode_authMethodNotSupported
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_authMethodNotSupported: LDAPResult_resultCode = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_authMethodNotSupported */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_strongerAuthRequired */
/**
 * @summary LDAPResult_resultCode_strongerAuthRequired
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_strongerAuthRequired: LDAPResult_resultCode = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_strongerAuthRequired */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_referral */
/**
 * @summary LDAPResult_resultCode_referral
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_referral: LDAPResult_resultCode = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_referral */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_adminLimitExceeded */
/**
 * @summary LDAPResult_resultCode_adminLimitExceeded
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_adminLimitExceeded: LDAPResult_resultCode = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_adminLimitExceeded */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_unavailableCriticalExtension */
/**
 * @summary LDAPResult_resultCode_unavailableCriticalExtension
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unavailableCriticalExtension: LDAPResult_resultCode = 12; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_unavailableCriticalExtension */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_confidentialityRequired */
/**
 * @summary LDAPResult_resultCode_confidentialityRequired
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_confidentialityRequired: LDAPResult_resultCode = 13; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_confidentialityRequired */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_saslBindInProgress */
/**
 * @summary LDAPResult_resultCode_saslBindInProgress
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_saslBindInProgress: LDAPResult_resultCode = 14; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_saslBindInProgress */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_noSuchAttribute */
/**
 * @summary LDAPResult_resultCode_noSuchAttribute
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_noSuchAttribute: LDAPResult_resultCode = 16; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_noSuchAttribute */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_undefinedAttributeType */
/**
 * @summary LDAPResult_resultCode_undefinedAttributeType
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_undefinedAttributeType: LDAPResult_resultCode = 17; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_undefinedAttributeType */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_inappropriateMatching */
/**
 * @summary LDAPResult_resultCode_inappropriateMatching
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_inappropriateMatching: LDAPResult_resultCode = 18; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_inappropriateMatching */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_constraintViolation */
/**
 * @summary LDAPResult_resultCode_constraintViolation
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_constraintViolation: LDAPResult_resultCode = 19; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_constraintViolation */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_attributeOrValueExists */
/**
 * @summary LDAPResult_resultCode_attributeOrValueExists
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_attributeOrValueExists: LDAPResult_resultCode = 20; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_attributeOrValueExists */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_invalidAttributeSyntax */
/**
 * @summary LDAPResult_resultCode_invalidAttributeSyntax
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_invalidAttributeSyntax: LDAPResult_resultCode = 21; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_invalidAttributeSyntax */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_noSuchObject */
/**
 * @summary LDAPResult_resultCode_noSuchObject
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_noSuchObject: LDAPResult_resultCode = 32; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_noSuchObject */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_aliasProblem */
/**
 * @summary LDAPResult_resultCode_aliasProblem
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_aliasProblem: LDAPResult_resultCode = 33; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_aliasProblem */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_invalidDNSyntax */
/**
 * @summary LDAPResult_resultCode_invalidDNSyntax
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_invalidDNSyntax: LDAPResult_resultCode = 34; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_invalidDNSyntax */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_aliasDereferencingProblem */
/**
 * @summary LDAPResult_resultCode_aliasDereferencingProblem
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_aliasDereferencingProblem: LDAPResult_resultCode = 36; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_aliasDereferencingProblem */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_inappropriateAuthentication */
/**
 * @summary LDAPResult_resultCode_inappropriateAuthentication
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_inappropriateAuthentication: LDAPResult_resultCode = 48; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_inappropriateAuthentication */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_invalidCredentials */
/**
 * @summary LDAPResult_resultCode_invalidCredentials
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_invalidCredentials: LDAPResult_resultCode = 49; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_invalidCredentials */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_insufficientAccessRights */
/**
 * @summary LDAPResult_resultCode_insufficientAccessRights
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_insufficientAccessRights: LDAPResult_resultCode = 50; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_insufficientAccessRights */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_busy */
/**
 * @summary LDAPResult_resultCode_busy
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_busy: LDAPResult_resultCode = 51; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_busy */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_unavailable */
/**
 * @summary LDAPResult_resultCode_unavailable
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unavailable: LDAPResult_resultCode = 52; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_unavailable */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_unwillingToPerform */
/**
 * @summary LDAPResult_resultCode_unwillingToPerform
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_unwillingToPerform: LDAPResult_resultCode = 53; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_unwillingToPerform */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_loopDetect */
/**
 * @summary LDAPResult_resultCode_loopDetect
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_loopDetect: LDAPResult_resultCode = 54; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_loopDetect */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_namingViolation */
/**
 * @summary LDAPResult_resultCode_namingViolation
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_namingViolation: LDAPResult_resultCode = 64; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_namingViolation */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_objectClassViolation */
/**
 * @summary LDAPResult_resultCode_objectClassViolation
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_objectClassViolation: LDAPResult_resultCode = 65; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_objectClassViolation */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_notAllowedOnNonLeaf */
/**
 * @summary LDAPResult_resultCode_notAllowedOnNonLeaf
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_notAllowedOnNonLeaf: LDAPResult_resultCode = 66; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_notAllowedOnNonLeaf */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_notAllowedOnRDN */
/**
 * @summary LDAPResult_resultCode_notAllowedOnRDN
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_notAllowedOnRDN: LDAPResult_resultCode = 67; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_notAllowedOnRDN */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_entryAlreadyExists */
/**
 * @summary LDAPResult_resultCode_entryAlreadyExists
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_entryAlreadyExists: LDAPResult_resultCode = 68; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_entryAlreadyExists */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_objectClassModsProhibited */
/**
 * @summary LDAPResult_resultCode_objectClassModsProhibited
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_objectClassModsProhibited: LDAPResult_resultCode = 69; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_objectClassModsProhibited */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_affectsMultipleDSAs */
/**
 * @summary LDAPResult_resultCode_affectsMultipleDSAs
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_affectsMultipleDSAs: LDAPResult_resultCode = 71; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_affectsMultipleDSAs */

/* START_OF_SYMBOL_DEFINITION LDAPResult_resultCode_other */
/**
 * @summary LDAPResult_resultCode_other
 * @constant
 * @type {number}
 */
export const LDAPResult_resultCode_other: LDAPResult_resultCode = 80; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LDAPResult_resultCode_other */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LDAPResult_resultCode */
let _cached_decoder_for_LDAPResult_resultCode: $.ASN1Decoder<
    LDAPResult_resultCode
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LDAPResult_resultCode */

/* START_OF_SYMBOL_DEFINITION _decode_LDAPResult_resultCode */
/**
 * @summary Decodes an ASN.1 element into a(n) LDAPResult_resultCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPResult_resultCode} The decoded data structure.
 */
export function _decode_LDAPResult_resultCode(el: _Element) {
    if (!_cached_decoder_for_LDAPResult_resultCode) {
        _cached_decoder_for_LDAPResult_resultCode = $._decodeEnumerated;
    }
    return _cached_decoder_for_LDAPResult_resultCode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LDAPResult_resultCode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LDAPResult_resultCode */
let _cached_encoder_for_LDAPResult_resultCode: $.ASN1Encoder<
    LDAPResult_resultCode
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LDAPResult_resultCode */

/* START_OF_SYMBOL_DEFINITION _encode_LDAPResult_resultCode */
/**
 * @summary Encodes a(n) LDAPResult_resultCode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPResult_resultCode, encoded as an ASN.1 Element.
 */
export function _encode_LDAPResult_resultCode(
    value: LDAPResult_resultCode,
    elGetter: $.ASN1Encoder<LDAPResult_resultCode>
) {
    if (!_cached_encoder_for_LDAPResult_resultCode) {
        _cached_encoder_for_LDAPResult_resultCode = $._encodeEnumerated;
    }
    return _cached_encoder_for_LDAPResult_resultCode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LDAPResult_resultCode */

/* eslint-enable */
