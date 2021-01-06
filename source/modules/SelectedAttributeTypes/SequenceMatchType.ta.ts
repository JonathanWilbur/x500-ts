/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_SequenceMatchType */
export enum _enum_for_SequenceMatchType {
    sequenceExact = 0,
    sequenceDeletion = 1,
    sequenceRestrictedDeletion = 2,
    sequencePermutation = 3,
    sequencePermutationAndDeletion = 4,
    sequenceProviderDefined = 5,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SequenceMatchType */

/* START_OF_SYMBOL_DEFINITION SequenceMatchType */
/**
 * @summary SequenceMatchType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceMatchType  ::=  ENUMERATED {
 *   sequenceExact                  (0),
 *   sequenceDeletion               (1),
 *   sequenceRestrictedDeletion     (2),
 *   sequencePermutation            (3),
 *   sequencePermutationAndDeletion (4),
 *   sequenceProviderDefined        (5),
 *   ... }
 * ```@enum {number}
 */
export type SequenceMatchType = _enum_for_SequenceMatchType | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION SequenceMatchType */

/* START_OF_SYMBOL_DEFINITION SequenceMatchType_sequenceExact */
/**
 * @summary SequenceMatchType_sequenceExact
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceExact: SequenceMatchType = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SequenceMatchType_sequenceExact */

/* START_OF_SYMBOL_DEFINITION sequenceExact */
/**
 * @summary sequenceExact
 * @constant
 * @type {number}
 */
export const sequenceExact: SequenceMatchType = SequenceMatchType_sequenceExact; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sequenceExact */

/* START_OF_SYMBOL_DEFINITION SequenceMatchType_sequenceDeletion */
/**
 * @summary SequenceMatchType_sequenceDeletion
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceDeletion: SequenceMatchType = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SequenceMatchType_sequenceDeletion */

/* START_OF_SYMBOL_DEFINITION sequenceDeletion */
/**
 * @summary sequenceDeletion
 * @constant
 * @type {number}
 */
export const sequenceDeletion: SequenceMatchType = SequenceMatchType_sequenceDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sequenceDeletion */

/* START_OF_SYMBOL_DEFINITION SequenceMatchType_sequenceRestrictedDeletion */
/**
 * @summary SequenceMatchType_sequenceRestrictedDeletion
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceRestrictedDeletion: SequenceMatchType = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SequenceMatchType_sequenceRestrictedDeletion */

/* START_OF_SYMBOL_DEFINITION sequenceRestrictedDeletion */
/**
 * @summary sequenceRestrictedDeletion
 * @constant
 * @type {number}
 */
export const sequenceRestrictedDeletion: SequenceMatchType = SequenceMatchType_sequenceRestrictedDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sequenceRestrictedDeletion */

/* START_OF_SYMBOL_DEFINITION SequenceMatchType_sequencePermutation */
/**
 * @summary SequenceMatchType_sequencePermutation
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequencePermutation: SequenceMatchType = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SequenceMatchType_sequencePermutation */

/* START_OF_SYMBOL_DEFINITION sequencePermutation */
/**
 * @summary sequencePermutation
 * @constant
 * @type {number}
 */
export const sequencePermutation: SequenceMatchType = SequenceMatchType_sequencePermutation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sequencePermutation */

/* START_OF_SYMBOL_DEFINITION SequenceMatchType_sequencePermutationAndDeletion */
/**
 * @summary SequenceMatchType_sequencePermutationAndDeletion
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequencePermutationAndDeletion: SequenceMatchType = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SequenceMatchType_sequencePermutationAndDeletion */

/* START_OF_SYMBOL_DEFINITION sequencePermutationAndDeletion */
/**
 * @summary sequencePermutationAndDeletion
 * @constant
 * @type {number}
 */
export const sequencePermutationAndDeletion: SequenceMatchType = SequenceMatchType_sequencePermutationAndDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sequencePermutationAndDeletion */

/* START_OF_SYMBOL_DEFINITION SequenceMatchType_sequenceProviderDefined */
/**
 * @summary SequenceMatchType_sequenceProviderDefined
 * @constant
 * @type {number}
 */
export const SequenceMatchType_sequenceProviderDefined: SequenceMatchType = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SequenceMatchType_sequenceProviderDefined */

/* START_OF_SYMBOL_DEFINITION sequenceProviderDefined */
/**
 * @summary sequenceProviderDefined
 * @constant
 * @type {number}
 */
export const sequenceProviderDefined: SequenceMatchType = SequenceMatchType_sequenceProviderDefined; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sequenceProviderDefined */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceMatchType */
let _cached_decoder_for_SequenceMatchType: $.ASN1Decoder<SequenceMatchType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SequenceMatchType */

/* START_OF_SYMBOL_DEFINITION _decode_SequenceMatchType */
/**
 * @summary Decodes an ASN.1 element into a(n) SequenceMatchType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceMatchType} The decoded data structure.
 */
export function _decode_SequenceMatchType(el: _Element) {
    if (!_cached_decoder_for_SequenceMatchType) {
        _cached_decoder_for_SequenceMatchType = $._decodeEnumerated;
    }
    return _cached_decoder_for_SequenceMatchType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SequenceMatchType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceMatchType */
let _cached_encoder_for_SequenceMatchType: $.ASN1Encoder<SequenceMatchType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SequenceMatchType */

/* START_OF_SYMBOL_DEFINITION _encode_SequenceMatchType */
/**
 * @summary Encodes a(n) SequenceMatchType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceMatchType, encoded as an ASN.1 Element.
 */
export function _encode_SequenceMatchType(
    value: SequenceMatchType,
    elGetter: $.ASN1Encoder<SequenceMatchType>
) {
    if (!_cached_encoder_for_SequenceMatchType) {
        _cached_encoder_for_SequenceMatchType = $._encodeEnumerated;
    }
    return _cached_encoder_for_SequenceMatchType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SequenceMatchType */

/* eslint-enable */
