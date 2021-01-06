/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_IdmBindError_aETitleError */
export enum _enum_for_IdmBindError_aETitleError {
    callingAETitleNotAccepted = 0,
    calledAETitleNotRecognized = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_IdmBindError_aETitleError */

/* START_OF_SYMBOL_DEFINITION IdmBindError_aETitleError */
/**
 * @summary IdmBindError_aETitleError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdmBindError-aETitleError ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type IdmBindError_aETitleError =
    | _enum_for_IdmBindError_aETitleError
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION IdmBindError_aETitleError */

/* START_OF_SYMBOL_DEFINITION IdmBindError_aETitleError_callingAETitleNotAccepted */
/**
 * @summary IdmBindError_aETitleError_callingAETitleNotAccepted
 * @constant
 * @type {number}
 */
export const IdmBindError_aETitleError_callingAETitleNotAccepted: IdmBindError_aETitleError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdmBindError_aETitleError_callingAETitleNotAccepted */

/* START_OF_SYMBOL_DEFINITION callingAETitleNotAccepted */
/**
 * @summary callingAETitleNotAccepted
 * @constant
 * @type {number}
 */
export const callingAETitleNotAccepted: IdmBindError_aETitleError = IdmBindError_aETitleError_callingAETitleNotAccepted; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION callingAETitleNotAccepted */

/* START_OF_SYMBOL_DEFINITION IdmBindError_aETitleError_calledAETitleNotRecognized */
/**
 * @summary IdmBindError_aETitleError_calledAETitleNotRecognized
 * @constant
 * @type {number}
 */
export const IdmBindError_aETitleError_calledAETitleNotRecognized: IdmBindError_aETitleError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdmBindError_aETitleError_calledAETitleNotRecognized */

/* START_OF_SYMBOL_DEFINITION calledAETitleNotRecognized */
/**
 * @summary calledAETitleNotRecognized
 * @constant
 * @type {number}
 */
export const calledAETitleNotRecognized: IdmBindError_aETitleError = IdmBindError_aETitleError_calledAETitleNotRecognized; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION calledAETitleNotRecognized */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IdmBindError_aETitleError */
let _cached_decoder_for_IdmBindError_aETitleError: $.ASN1Decoder<IdmBindError_aETitleError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IdmBindError_aETitleError */

/* START_OF_SYMBOL_DEFINITION _decode_IdmBindError_aETitleError */
/**
 * @summary Decodes an ASN.1 element into a(n) IdmBindError_aETitleError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdmBindError_aETitleError} The decoded data structure.
 */
export function _decode_IdmBindError_aETitleError(el: _Element) {
    if (!_cached_decoder_for_IdmBindError_aETitleError) {
        _cached_decoder_for_IdmBindError_aETitleError = $._decodeEnumerated;
    }
    return _cached_decoder_for_IdmBindError_aETitleError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IdmBindError_aETitleError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IdmBindError_aETitleError */
let _cached_encoder_for_IdmBindError_aETitleError: $.ASN1Encoder<IdmBindError_aETitleError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IdmBindError_aETitleError */

/* START_OF_SYMBOL_DEFINITION _encode_IdmBindError_aETitleError */
/**
 * @summary Encodes a(n) IdmBindError_aETitleError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdmBindError_aETitleError, encoded as an ASN.1 Element.
 */
export function _encode_IdmBindError_aETitleError(
    value: IdmBindError_aETitleError,
    elGetter: $.ASN1Encoder<IdmBindError_aETitleError>
) {
    if (!_cached_encoder_for_IdmBindError_aETitleError) {
        _cached_encoder_for_IdmBindError_aETitleError = $._encodeEnumerated;
    }
    return _cached_encoder_for_IdmBindError_aETitleError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IdmBindError_aETitleError */

/* eslint-enable */
