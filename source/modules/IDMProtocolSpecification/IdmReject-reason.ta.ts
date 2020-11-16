/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_IdmReject_reason */
export enum _enum_for_IdmReject_reason {
    mistypedPDU = 0,
    duplicateInvokeIDRequest = 1,
    unsupportedOperationRequest = 2,
    unknownOperationRequest = 3,
    mistypedArgumentRequest = 4,
    resourceLimitationRequest = 5,
    unknownInvokeIDResult = 6,
    mistypedResultRequest = 7,
    unknownInvokeIDError = 8,
    unknownError = 9,
    mistypedParameterError = 10,
    unsupportedIdmVersion = 11,
    unsuitableIdmVersion = 12,
    invalidIdmVersion = 13,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_IdmReject_reason */

/* START_OF_SYMBOL_DEFINITION IdmReject_reason */
/**
 * @summary IdmReject_reason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmReject-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type IdmReject_reason = _enum_for_IdmReject_reason | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION IdmReject_reason */

/* START_OF_SYMBOL_DEFINITION IdmReject_reason_mistypedPDU */
/**
 * @summary IdmReject_reason_mistypedPDU
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedPDU: IdmReject_reason = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdmReject_reason_mistypedPDU */

/* START_OF_SYMBOL_DEFINITION IdmReject_reason_duplicateInvokeIDRequest */
/**
 * @summary IdmReject_reason_duplicateInvokeIDRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_duplicateInvokeIDRequest: IdmReject_reason = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdmReject_reason_duplicateInvokeIDRequest */

/* START_OF_SYMBOL_DEFINITION IdmReject_reason_unsupportedOperationRequest */
/**
 * @summary IdmReject_reason_unsupportedOperationRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unsupportedOperationRequest: IdmReject_reason = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdmReject_reason_unsupportedOperationRequest */

/* START_OF_SYMBOL_DEFINITION IdmReject_reason_unknownOperationRequest */
/**
 * @summary IdmReject_reason_unknownOperationRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownOperationRequest: IdmReject_reason = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdmReject_reason_unknownOperationRequest */

/* START_OF_SYMBOL_DEFINITION IdmReject_reason_mistypedArgumentRequest */
/**
 * @summary IdmReject_reason_mistypedArgumentRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedArgumentRequest: IdmReject_reason = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdmReject_reason_mistypedArgumentRequest */

/* START_OF_SYMBOL_DEFINITION IdmReject_reason_resourceLimitationRequest */
/**
 * @summary IdmReject_reason_resourceLimitationRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_resourceLimitationRequest: IdmReject_reason = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdmReject_reason_resourceLimitationRequest */

/* START_OF_SYMBOL_DEFINITION IdmReject_reason_unknownInvokeIDResult */
/**
 * @summary IdmReject_reason_unknownInvokeIDResult
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownInvokeIDResult: IdmReject_reason = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdmReject_reason_unknownInvokeIDResult */

/* START_OF_SYMBOL_DEFINITION IdmReject_reason_mistypedResultRequest */
/**
 * @summary IdmReject_reason_mistypedResultRequest
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedResultRequest: IdmReject_reason = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdmReject_reason_mistypedResultRequest */

/* START_OF_SYMBOL_DEFINITION IdmReject_reason_unknownInvokeIDError */
/**
 * @summary IdmReject_reason_unknownInvokeIDError
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownInvokeIDError: IdmReject_reason = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdmReject_reason_unknownInvokeIDError */

/* START_OF_SYMBOL_DEFINITION IdmReject_reason_unknownError */
/**
 * @summary IdmReject_reason_unknownError
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unknownError: IdmReject_reason = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdmReject_reason_unknownError */

/* START_OF_SYMBOL_DEFINITION IdmReject_reason_mistypedParameterError */
/**
 * @summary IdmReject_reason_mistypedParameterError
 * @constant
 * @type {number}
 */
export const IdmReject_reason_mistypedParameterError: IdmReject_reason = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdmReject_reason_mistypedParameterError */

/* START_OF_SYMBOL_DEFINITION IdmReject_reason_unsupportedIdmVersion */
/**
 * @summary IdmReject_reason_unsupportedIdmVersion
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unsupportedIdmVersion: IdmReject_reason = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdmReject_reason_unsupportedIdmVersion */

/* START_OF_SYMBOL_DEFINITION IdmReject_reason_unsuitableIdmVersion */
/**
 * @summary IdmReject_reason_unsuitableIdmVersion
 * @constant
 * @type {number}
 */
export const IdmReject_reason_unsuitableIdmVersion: IdmReject_reason = 12; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdmReject_reason_unsuitableIdmVersion */

/* START_OF_SYMBOL_DEFINITION IdmReject_reason_invalidIdmVersion */
/**
 * @summary IdmReject_reason_invalidIdmVersion
 * @constant
 * @type {number}
 */
export const IdmReject_reason_invalidIdmVersion: IdmReject_reason = 13; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdmReject_reason_invalidIdmVersion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IdmReject_reason */
let _cached_decoder_for_IdmReject_reason: $.ASN1Decoder<
    IdmReject_reason
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IdmReject_reason */

/* START_OF_SYMBOL_DEFINITION _decode_IdmReject_reason */
/**
 * @summary Decodes an ASN.1 element into a(n) IdmReject_reason
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdmReject_reason} The decoded data structure.
 */
export function _decode_IdmReject_reason(el: _Element) {
    if (!_cached_decoder_for_IdmReject_reason) {
        _cached_decoder_for_IdmReject_reason = $._decodeEnumerated;
    }
    return _cached_decoder_for_IdmReject_reason(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IdmReject_reason */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IdmReject_reason */
let _cached_encoder_for_IdmReject_reason: $.ASN1Encoder<
    IdmReject_reason
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IdmReject_reason */

/* START_OF_SYMBOL_DEFINITION _encode_IdmReject_reason */
/**
 * @summary Encodes a(n) IdmReject_reason into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdmReject_reason, encoded as an ASN.1 Element.
 */
export function _encode_IdmReject_reason(
    value: IdmReject_reason,
    elGetter: $.ASN1Encoder<IdmReject_reason>
) {
    if (!_cached_encoder_for_IdmReject_reason) {
        _cached_encoder_for_IdmReject_reason = $._encodeEnumerated;
    }
    return _cached_encoder_for_IdmReject_reason(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IdmReject_reason */

/* eslint-enable */
