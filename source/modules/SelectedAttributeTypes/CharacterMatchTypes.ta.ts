/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_CharacterMatchTypes */
export enum _enum_for_CharacterMatchTypes {
    characterExact = 0,
    characterCaseIgnore = 1,
    characterMapped = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CharacterMatchTypes */

/* START_OF_SYMBOL_DEFINITION CharacterMatchTypes */
/**
 * @summary CharacterMatchTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CharacterMatchTypes  ::=  ENUMERATED {
 *   characterExact      (0),
 *   characterCaseIgnore (1),
 *   characterMapped     (2),
 *   ... }
 * ```@enum {number}
 */
export type CharacterMatchTypes = _enum_for_CharacterMatchTypes | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION CharacterMatchTypes */

/* START_OF_SYMBOL_DEFINITION CharacterMatchTypes_characterExact */
/**
 * @summary CharacterMatchTypes_characterExact
 * @constant
 * @type {number}
 */
export const CharacterMatchTypes_characterExact: CharacterMatchTypes = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CharacterMatchTypes_characterExact */

/* START_OF_SYMBOL_DEFINITION characterExact */
/**
 * @summary characterExact
 * @constant
 * @type {number}
 */
export const characterExact: CharacterMatchTypes = CharacterMatchTypes_characterExact; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION characterExact */

/* START_OF_SYMBOL_DEFINITION CharacterMatchTypes_characterCaseIgnore */
/**
 * @summary CharacterMatchTypes_characterCaseIgnore
 * @constant
 * @type {number}
 */
export const CharacterMatchTypes_characterCaseIgnore: CharacterMatchTypes = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CharacterMatchTypes_characterCaseIgnore */

/* START_OF_SYMBOL_DEFINITION characterCaseIgnore */
/**
 * @summary characterCaseIgnore
 * @constant
 * @type {number}
 */
export const characterCaseIgnore: CharacterMatchTypes = CharacterMatchTypes_characterCaseIgnore; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION characterCaseIgnore */

/* START_OF_SYMBOL_DEFINITION CharacterMatchTypes_characterMapped */
/**
 * @summary CharacterMatchTypes_characterMapped
 * @constant
 * @type {number}
 */
export const CharacterMatchTypes_characterMapped: CharacterMatchTypes = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CharacterMatchTypes_characterMapped */

/* START_OF_SYMBOL_DEFINITION characterMapped */
/**
 * @summary characterMapped
 * @constant
 * @type {number}
 */
export const characterMapped: CharacterMatchTypes = CharacterMatchTypes_characterMapped; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION characterMapped */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CharacterMatchTypes */
let _cached_decoder_for_CharacterMatchTypes: $.ASN1Decoder<
    CharacterMatchTypes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CharacterMatchTypes */

/* START_OF_SYMBOL_DEFINITION _decode_CharacterMatchTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) CharacterMatchTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CharacterMatchTypes} The decoded data structure.
 */
export function _decode_CharacterMatchTypes(el: _Element) {
    if (!_cached_decoder_for_CharacterMatchTypes) {
        _cached_decoder_for_CharacterMatchTypes = $._decodeEnumerated;
    }
    return _cached_decoder_for_CharacterMatchTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CharacterMatchTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CharacterMatchTypes */
let _cached_encoder_for_CharacterMatchTypes: $.ASN1Encoder<
    CharacterMatchTypes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CharacterMatchTypes */

/* START_OF_SYMBOL_DEFINITION _encode_CharacterMatchTypes */
/**
 * @summary Encodes a(n) CharacterMatchTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CharacterMatchTypes, encoded as an ASN.1 Element.
 */
export function _encode_CharacterMatchTypes(
    value: CharacterMatchTypes,
    elGetter: $.ASN1Encoder<CharacterMatchTypes>
) {
    if (!_cached_encoder_for_CharacterMatchTypes) {
        _cached_encoder_for_CharacterMatchTypes = $._encodeEnumerated;
    }
    return _cached_encoder_for_CharacterMatchTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CharacterMatchTypes */

/* eslint-enable */
