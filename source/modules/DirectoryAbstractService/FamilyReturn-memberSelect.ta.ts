/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_FamilyReturn_memberSelect */
export enum _enum_for_FamilyReturn_memberSelect {
    contributingEntriesOnly = 1,
    participatingEntriesOnly = 2,
    compoundEntry = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_FamilyReturn_memberSelect */

/* START_OF_SYMBOL_DEFINITION FamilyReturn_memberSelect */
/**
 * @summary FamilyReturn_memberSelect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FamilyReturn-memberSelect ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type FamilyReturn_memberSelect =
    | _enum_for_FamilyReturn_memberSelect
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION FamilyReturn_memberSelect */

/* START_OF_SYMBOL_DEFINITION FamilyReturn_memberSelect_contributingEntriesOnly */
/**
 * @summary FamilyReturn_memberSelect_contributingEntriesOnly
 * @constant
 * @type {number}
 */
export const FamilyReturn_memberSelect_contributingEntriesOnly: FamilyReturn_memberSelect = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FamilyReturn_memberSelect_contributingEntriesOnly */

/* START_OF_SYMBOL_DEFINITION contributingEntriesOnly */
/**
 * @summary contributingEntriesOnly
 * @constant
 * @type {number}
 */
export const contributingEntriesOnly: FamilyReturn_memberSelect = FamilyReturn_memberSelect_contributingEntriesOnly; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION contributingEntriesOnly */

/* START_OF_SYMBOL_DEFINITION FamilyReturn_memberSelect_participatingEntriesOnly */
/**
 * @summary FamilyReturn_memberSelect_participatingEntriesOnly
 * @constant
 * @type {number}
 */
export const FamilyReturn_memberSelect_participatingEntriesOnly: FamilyReturn_memberSelect = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FamilyReturn_memberSelect_participatingEntriesOnly */

/* START_OF_SYMBOL_DEFINITION participatingEntriesOnly */
/**
 * @summary participatingEntriesOnly
 * @constant
 * @type {number}
 */
export const participatingEntriesOnly: FamilyReturn_memberSelect = FamilyReturn_memberSelect_participatingEntriesOnly; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION participatingEntriesOnly */

/* START_OF_SYMBOL_DEFINITION FamilyReturn_memberSelect_compoundEntry */
/**
 * @summary FamilyReturn_memberSelect_compoundEntry
 * @constant
 * @type {number}
 */
export const FamilyReturn_memberSelect_compoundEntry: FamilyReturn_memberSelect = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION FamilyReturn_memberSelect_compoundEntry */

/* START_OF_SYMBOL_DEFINITION compoundEntry */
/**
 * @summary compoundEntry
 * @constant
 * @type {number}
 */
export const compoundEntry: FamilyReturn_memberSelect = FamilyReturn_memberSelect_compoundEntry; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION compoundEntry */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FamilyReturn_memberSelect */
let _cached_decoder_for_FamilyReturn_memberSelect: $.ASN1Decoder<FamilyReturn_memberSelect> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FamilyReturn_memberSelect */

/* START_OF_SYMBOL_DEFINITION _decode_FamilyReturn_memberSelect */
/**
 * @summary Decodes an ASN.1 element into a(n) FamilyReturn_memberSelect
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FamilyReturn_memberSelect} The decoded data structure.
 */
export function _decode_FamilyReturn_memberSelect(el: _Element) {
    if (!_cached_decoder_for_FamilyReturn_memberSelect) {
        _cached_decoder_for_FamilyReturn_memberSelect = $._decodeEnumerated;
    }
    return _cached_decoder_for_FamilyReturn_memberSelect(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FamilyReturn_memberSelect */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FamilyReturn_memberSelect */
let _cached_encoder_for_FamilyReturn_memberSelect: $.ASN1Encoder<FamilyReturn_memberSelect> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FamilyReturn_memberSelect */

/* START_OF_SYMBOL_DEFINITION _encode_FamilyReturn_memberSelect */
/**
 * @summary Encodes a(n) FamilyReturn_memberSelect into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FamilyReturn_memberSelect, encoded as an ASN.1 Element.
 */
export function _encode_FamilyReturn_memberSelect(
    value: FamilyReturn_memberSelect,
    elGetter: $.ASN1Encoder<FamilyReturn_memberSelect>
) {
    if (!_cached_encoder_for_FamilyReturn_memberSelect) {
        _cached_encoder_for_FamilyReturn_memberSelect = $._encodeEnumerated;
    }
    return _cached_encoder_for_FamilyReturn_memberSelect(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FamilyReturn_memberSelect */

/* eslint-enable */
