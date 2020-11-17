/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_FamilyGrouping */
export enum _enum_for_FamilyGrouping {
    entryOnly = 1,
    compoundEntry = 2,
    strands = 3,
    multiStrand = 4,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_FamilyGrouping */

/* START_OF_SYMBOL_DEFINITION FamilyGrouping */
/**
 * @summary FamilyGrouping
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FamilyGrouping  ::=  ENUMERATED {
 *   entryOnly     (1),
 *   compoundEntry (2),
 *   strands       (3),
 *   multiStrand   (4),
 *   ... }
 * ```@enum {number}
 */
export type FamilyGrouping = _enum_for_FamilyGrouping | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION FamilyGrouping */

/* START_OF_SYMBOL_DEFINITION FamilyGrouping_entryOnly */
/**
 * @summary FamilyGrouping_entryOnly
 * @constant
 * @type {number}
 */
export const FamilyGrouping_entryOnly: FamilyGrouping = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FamilyGrouping_entryOnly */

/* START_OF_SYMBOL_DEFINITION entryOnly */
/**
 * @summary entryOnly
 * @constant
 * @type {number}
 */
export const entryOnly: FamilyGrouping = FamilyGrouping_entryOnly; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION entryOnly */

/* START_OF_SYMBOL_DEFINITION FamilyGrouping_compoundEntry */
/**
 * @summary FamilyGrouping_compoundEntry
 * @constant
 * @type {number}
 */
export const FamilyGrouping_compoundEntry: FamilyGrouping = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FamilyGrouping_compoundEntry */

/* START_OF_SYMBOL_DEFINITION compoundEntry */
/**
 * @summary compoundEntry
 * @constant
 * @type {number}
 */
export const compoundEntry: FamilyGrouping = FamilyGrouping_compoundEntry; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION compoundEntry */

/* START_OF_SYMBOL_DEFINITION FamilyGrouping_strands */
/**
 * @summary FamilyGrouping_strands
 * @constant
 * @type {number}
 */
export const FamilyGrouping_strands: FamilyGrouping = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FamilyGrouping_strands */

/* START_OF_SYMBOL_DEFINITION strands */
/**
 * @summary strands
 * @constant
 * @type {number}
 */
export const strands: FamilyGrouping = FamilyGrouping_strands; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION strands */

/* START_OF_SYMBOL_DEFINITION FamilyGrouping_multiStrand */
/**
 * @summary FamilyGrouping_multiStrand
 * @constant
 * @type {number}
 */
export const FamilyGrouping_multiStrand: FamilyGrouping = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FamilyGrouping_multiStrand */

/* START_OF_SYMBOL_DEFINITION multiStrand */
/**
 * @summary multiStrand
 * @constant
 * @type {number}
 */
export const multiStrand: FamilyGrouping = FamilyGrouping_multiStrand; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION multiStrand */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FamilyGrouping */
let _cached_decoder_for_FamilyGrouping: $.ASN1Decoder<
    FamilyGrouping
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FamilyGrouping */

/* START_OF_SYMBOL_DEFINITION _decode_FamilyGrouping */
/**
 * @summary Decodes an ASN.1 element into a(n) FamilyGrouping
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FamilyGrouping} The decoded data structure.
 */
export function _decode_FamilyGrouping(el: _Element) {
    if (!_cached_decoder_for_FamilyGrouping) {
        _cached_decoder_for_FamilyGrouping = $._decodeEnumerated;
    }
    return _cached_decoder_for_FamilyGrouping(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FamilyGrouping */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FamilyGrouping */
let _cached_encoder_for_FamilyGrouping: $.ASN1Encoder<
    FamilyGrouping
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FamilyGrouping */

/* START_OF_SYMBOL_DEFINITION _encode_FamilyGrouping */
/**
 * @summary Encodes a(n) FamilyGrouping into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FamilyGrouping, encoded as an ASN.1 Element.
 */
export function _encode_FamilyGrouping(
    value: FamilyGrouping,
    elGetter: $.ASN1Encoder<FamilyGrouping>
) {
    if (!_cached_encoder_for_FamilyGrouping) {
        _cached_encoder_for_FamilyGrouping = $._encodeEnumerated;
    }
    return _cached_encoder_for_FamilyGrouping(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FamilyGrouping */

/* eslint-enable */
