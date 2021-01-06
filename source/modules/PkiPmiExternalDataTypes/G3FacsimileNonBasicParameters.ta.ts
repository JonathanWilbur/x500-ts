/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters */
/**
 * @summary G3FacsimileNonBasicParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * G3FacsimileNonBasicParameters  ::=  BIT STRING {
 *   two-dimensional(8), -- As defined in ITU-T Recommendation T.30
 *   fine-resolution(9),
 *   unlimited-length(20), -- These bit values are chosen such that when
 *   b4-length(21), -- encoded using ASN.1 Basic Encoding Rules
 *   a3-width(22), -- the resulting octets have the same values
 *   b4-width(23), -- as for T.30 encoding
 *   t6-coding(25),
 *   uncompressed(30), -- Trailing zero bits are not significant
 *   width-middle-864-of-1728(37), -- It is recommended that implementations
 *   width-middle-1216-of-1728(38), -- should not encode more than 32 bits unless
 *   resolution-type(44), -- higher numbered bits are non-zero
 *   resolution-400x400(45), resolution-300x300(46), resolution-8x15(47),
 *   edi(49), dtm(50), bft(51), mixed-mode(58), character-mode(60),
 *   twelve-bits(65), preferred-huffmann(66), full-colour(67), jpeg(68),
 *   processable-mode-26(71)}
 * ```
 */
export type G3FacsimileNonBasicParameters = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_two_dimensional */
/**
 * @summary G3FacsimileNonBasicParameters_two_dimensional
 * @constant
 */
export const G3FacsimileNonBasicParameters_two_dimensional: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_two_dimensional */

/* START_OF_SYMBOL_DEFINITION two_dimensional */
/**
 * @summary two_dimensional
 * @constant
 */
export const two_dimensional: number = G3FacsimileNonBasicParameters_two_dimensional; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION two_dimensional */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_fine_resolution */
/**
 * @summary G3FacsimileNonBasicParameters_fine_resolution
 * @constant
 */
export const G3FacsimileNonBasicParameters_fine_resolution: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_fine_resolution */

/* START_OF_SYMBOL_DEFINITION fine_resolution */
/**
 * @summary fine_resolution
 * @constant
 */
export const fine_resolution: number = G3FacsimileNonBasicParameters_fine_resolution; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION fine_resolution */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_unlimited_length */
/**
 * @summary G3FacsimileNonBasicParameters_unlimited_length
 * @constant
 */
export const G3FacsimileNonBasicParameters_unlimited_length: number = 20; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_unlimited_length */

/* START_OF_SYMBOL_DEFINITION unlimited_length */
/**
 * @summary unlimited_length
 * @constant
 */
export const unlimited_length: number = G3FacsimileNonBasicParameters_unlimited_length; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unlimited_length */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_b4_length */
/**
 * @summary G3FacsimileNonBasicParameters_b4_length
 * @constant
 */
export const G3FacsimileNonBasicParameters_b4_length: number = 21; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_b4_length */

/* START_OF_SYMBOL_DEFINITION b4_length */
/**
 * @summary b4_length
 * @constant
 */
export const b4_length: number = G3FacsimileNonBasicParameters_b4_length; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION b4_length */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_a3_width */
/**
 * @summary G3FacsimileNonBasicParameters_a3_width
 * @constant
 */
export const G3FacsimileNonBasicParameters_a3_width: number = 22; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_a3_width */

/* START_OF_SYMBOL_DEFINITION a3_width */
/**
 * @summary a3_width
 * @constant
 */
export const a3_width: number = G3FacsimileNonBasicParameters_a3_width; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION a3_width */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_b4_width */
/**
 * @summary G3FacsimileNonBasicParameters_b4_width
 * @constant
 */
export const G3FacsimileNonBasicParameters_b4_width: number = 23; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_b4_width */

/* START_OF_SYMBOL_DEFINITION b4_width */
/**
 * @summary b4_width
 * @constant
 */
export const b4_width: number = G3FacsimileNonBasicParameters_b4_width; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION b4_width */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_t6_coding */
/**
 * @summary G3FacsimileNonBasicParameters_t6_coding
 * @constant
 */
export const G3FacsimileNonBasicParameters_t6_coding: number = 25; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_t6_coding */

/* START_OF_SYMBOL_DEFINITION t6_coding */
/**
 * @summary t6_coding
 * @constant
 */
export const t6_coding: number = G3FacsimileNonBasicParameters_t6_coding; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION t6_coding */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_uncompressed */
/**
 * @summary G3FacsimileNonBasicParameters_uncompressed
 * @constant
 */
export const G3FacsimileNonBasicParameters_uncompressed: number = 30; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_uncompressed */

/* START_OF_SYMBOL_DEFINITION uncompressed */
/**
 * @summary uncompressed
 * @constant
 */
export const uncompressed: number = G3FacsimileNonBasicParameters_uncompressed; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION uncompressed */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_width_middle_864_of_1728 */
/**
 * @summary G3FacsimileNonBasicParameters_width_middle_864_of_1728
 * @constant
 */
export const G3FacsimileNonBasicParameters_width_middle_864_of_1728: number = 37; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_width_middle_864_of_1728 */

/* START_OF_SYMBOL_DEFINITION width_middle_864_of_1728 */
/**
 * @summary width_middle_864_of_1728
 * @constant
 */
export const width_middle_864_of_1728: number = G3FacsimileNonBasicParameters_width_middle_864_of_1728; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION width_middle_864_of_1728 */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_width_middle_1216_of_1728 */
/**
 * @summary G3FacsimileNonBasicParameters_width_middle_1216_of_1728
 * @constant
 */
export const G3FacsimileNonBasicParameters_width_middle_1216_of_1728: number = 38; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_width_middle_1216_of_1728 */

/* START_OF_SYMBOL_DEFINITION width_middle_1216_of_1728 */
/**
 * @summary width_middle_1216_of_1728
 * @constant
 */
export const width_middle_1216_of_1728: number = G3FacsimileNonBasicParameters_width_middle_1216_of_1728; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION width_middle_1216_of_1728 */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_resolution_type */
/**
 * @summary G3FacsimileNonBasicParameters_resolution_type
 * @constant
 */
export const G3FacsimileNonBasicParameters_resolution_type: number = 44; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_resolution_type */

/* START_OF_SYMBOL_DEFINITION resolution_type */
/**
 * @summary resolution_type
 * @constant
 */
export const resolution_type: number = G3FacsimileNonBasicParameters_resolution_type; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION resolution_type */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_resolution_400x400 */
/**
 * @summary G3FacsimileNonBasicParameters_resolution_400x400
 * @constant
 */
export const G3FacsimileNonBasicParameters_resolution_400x400: number = 45; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_resolution_400x400 */

/* START_OF_SYMBOL_DEFINITION resolution_400x400 */
/**
 * @summary resolution_400x400
 * @constant
 */
export const resolution_400x400: number = G3FacsimileNonBasicParameters_resolution_400x400; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION resolution_400x400 */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_resolution_300x300 */
/**
 * @summary G3FacsimileNonBasicParameters_resolution_300x300
 * @constant
 */
export const G3FacsimileNonBasicParameters_resolution_300x300: number = 46; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_resolution_300x300 */

/* START_OF_SYMBOL_DEFINITION resolution_300x300 */
/**
 * @summary resolution_300x300
 * @constant
 */
export const resolution_300x300: number = G3FacsimileNonBasicParameters_resolution_300x300; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION resolution_300x300 */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_resolution_8x15 */
/**
 * @summary G3FacsimileNonBasicParameters_resolution_8x15
 * @constant
 */
export const G3FacsimileNonBasicParameters_resolution_8x15: number = 47; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_resolution_8x15 */

/* START_OF_SYMBOL_DEFINITION resolution_8x15 */
/**
 * @summary resolution_8x15
 * @constant
 */
export const resolution_8x15: number = G3FacsimileNonBasicParameters_resolution_8x15; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION resolution_8x15 */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_edi */
/**
 * @summary G3FacsimileNonBasicParameters_edi
 * @constant
 */
export const G3FacsimileNonBasicParameters_edi: number = 49; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_edi */

/* START_OF_SYMBOL_DEFINITION edi */
/**
 * @summary edi
 * @constant
 */
export const edi: number = G3FacsimileNonBasicParameters_edi; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION edi */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_dtm */
/**
 * @summary G3FacsimileNonBasicParameters_dtm
 * @constant
 */
export const G3FacsimileNonBasicParameters_dtm: number = 50; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_dtm */

/* START_OF_SYMBOL_DEFINITION dtm */
/**
 * @summary dtm
 * @constant
 */
export const dtm: number = G3FacsimileNonBasicParameters_dtm; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION dtm */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_bft */
/**
 * @summary G3FacsimileNonBasicParameters_bft
 * @constant
 */
export const G3FacsimileNonBasicParameters_bft: number = 51; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_bft */

/* START_OF_SYMBOL_DEFINITION bft */
/**
 * @summary bft
 * @constant
 */
export const bft: number = G3FacsimileNonBasicParameters_bft; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION bft */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_mixed_mode */
/**
 * @summary G3FacsimileNonBasicParameters_mixed_mode
 * @constant
 */
export const G3FacsimileNonBasicParameters_mixed_mode: number = 58; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_mixed_mode */

/* START_OF_SYMBOL_DEFINITION mixed_mode */
/**
 * @summary mixed_mode
 * @constant
 */
export const mixed_mode: number = G3FacsimileNonBasicParameters_mixed_mode; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION mixed_mode */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_character_mode */
/**
 * @summary G3FacsimileNonBasicParameters_character_mode
 * @constant
 */
export const G3FacsimileNonBasicParameters_character_mode: number = 60; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_character_mode */

/* START_OF_SYMBOL_DEFINITION character_mode */
/**
 * @summary character_mode
 * @constant
 */
export const character_mode: number = G3FacsimileNonBasicParameters_character_mode; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION character_mode */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_twelve_bits */
/**
 * @summary G3FacsimileNonBasicParameters_twelve_bits
 * @constant
 */
export const G3FacsimileNonBasicParameters_twelve_bits: number = 65; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_twelve_bits */

/* START_OF_SYMBOL_DEFINITION twelve_bits */
/**
 * @summary twelve_bits
 * @constant
 */
export const twelve_bits: number = G3FacsimileNonBasicParameters_twelve_bits; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION twelve_bits */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_preferred_huffmann */
/**
 * @summary G3FacsimileNonBasicParameters_preferred_huffmann
 * @constant
 */
export const G3FacsimileNonBasicParameters_preferred_huffmann: number = 66; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_preferred_huffmann */

/* START_OF_SYMBOL_DEFINITION preferred_huffmann */
/**
 * @summary preferred_huffmann
 * @constant
 */
export const preferred_huffmann: number = G3FacsimileNonBasicParameters_preferred_huffmann; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION preferred_huffmann */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_full_colour */
/**
 * @summary G3FacsimileNonBasicParameters_full_colour
 * @constant
 */
export const G3FacsimileNonBasicParameters_full_colour: number = 67; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_full_colour */

/* START_OF_SYMBOL_DEFINITION full_colour */
/**
 * @summary full_colour
 * @constant
 */
export const full_colour: number = G3FacsimileNonBasicParameters_full_colour; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION full_colour */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_jpeg */
/**
 * @summary G3FacsimileNonBasicParameters_jpeg
 * @constant
 */
export const G3FacsimileNonBasicParameters_jpeg: number = 68; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_jpeg */

/* START_OF_SYMBOL_DEFINITION jpeg */
/**
 * @summary jpeg
 * @constant
 */
export const jpeg: number = G3FacsimileNonBasicParameters_jpeg; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION jpeg */

/* START_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_processable_mode_26 */
/**
 * @summary G3FacsimileNonBasicParameters_processable_mode_26
 * @constant
 */
export const G3FacsimileNonBasicParameters_processable_mode_26: number = 71; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION G3FacsimileNonBasicParameters_processable_mode_26 */

/* START_OF_SYMBOL_DEFINITION processable_mode_26 */
/**
 * @summary processable_mode_26
 * @constant
 */
export const processable_mode_26: number = G3FacsimileNonBasicParameters_processable_mode_26; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION processable_mode_26 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_G3FacsimileNonBasicParameters */
let _cached_decoder_for_G3FacsimileNonBasicParameters: $.ASN1Decoder<G3FacsimileNonBasicParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_G3FacsimileNonBasicParameters */

/* START_OF_SYMBOL_DEFINITION _decode_G3FacsimileNonBasicParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) G3FacsimileNonBasicParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {G3FacsimileNonBasicParameters} The decoded data structure.
 */
export function _decode_G3FacsimileNonBasicParameters(el: _Element) {
    if (!_cached_decoder_for_G3FacsimileNonBasicParameters) {
        _cached_decoder_for_G3FacsimileNonBasicParameters = $._decodeBitString;
    }
    return _cached_decoder_for_G3FacsimileNonBasicParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_G3FacsimileNonBasicParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_G3FacsimileNonBasicParameters */
let _cached_encoder_for_G3FacsimileNonBasicParameters: $.ASN1Encoder<G3FacsimileNonBasicParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_G3FacsimileNonBasicParameters */

/* START_OF_SYMBOL_DEFINITION _encode_G3FacsimileNonBasicParameters */
/**
 * @summary Encodes a(n) G3FacsimileNonBasicParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The G3FacsimileNonBasicParameters, encoded as an ASN.1 Element.
 */
export function _encode_G3FacsimileNonBasicParameters(
    value: G3FacsimileNonBasicParameters,
    elGetter: $.ASN1Encoder<G3FacsimileNonBasicParameters>
) {
    if (!_cached_encoder_for_G3FacsimileNonBasicParameters) {
        _cached_encoder_for_G3FacsimileNonBasicParameters = $._encodeBitString;
    }
    return _cached_encoder_for_G3FacsimileNonBasicParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_G3FacsimileNonBasicParameters */

/* eslint-enable */
