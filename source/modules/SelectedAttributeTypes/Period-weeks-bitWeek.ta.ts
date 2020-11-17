/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Period_weeks_bitWeek */
/**
 * @summary Period_weeks_bitWeek
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Period-weeks-bitWeek ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Period_weeks_bitWeek = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Period_weeks_bitWeek */

/* START_OF_SYMBOL_DEFINITION Period_weeks_bitWeek_week1 */
/**
 * @summary Period_weeks_bitWeek_week1
 * @constant
 */
export const Period_weeks_bitWeek_week1: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_weeks_bitWeek_week1 */

/* START_OF_SYMBOL_DEFINITION week1 */
/**
 * @summary week1
 * @constant
 */
export const week1: number = Period_weeks_bitWeek_week1; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION week1 */

/* START_OF_SYMBOL_DEFINITION Period_weeks_bitWeek_week2 */
/**
 * @summary Period_weeks_bitWeek_week2
 * @constant
 */
export const Period_weeks_bitWeek_week2: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_weeks_bitWeek_week2 */

/* START_OF_SYMBOL_DEFINITION week2 */
/**
 * @summary week2
 * @constant
 */
export const week2: number = Period_weeks_bitWeek_week2; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION week2 */

/* START_OF_SYMBOL_DEFINITION Period_weeks_bitWeek_week3 */
/**
 * @summary Period_weeks_bitWeek_week3
 * @constant
 */
export const Period_weeks_bitWeek_week3: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_weeks_bitWeek_week3 */

/* START_OF_SYMBOL_DEFINITION week3 */
/**
 * @summary week3
 * @constant
 */
export const week3: number = Period_weeks_bitWeek_week3; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION week3 */

/* START_OF_SYMBOL_DEFINITION Period_weeks_bitWeek_week4 */
/**
 * @summary Period_weeks_bitWeek_week4
 * @constant
 */
export const Period_weeks_bitWeek_week4: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_weeks_bitWeek_week4 */

/* START_OF_SYMBOL_DEFINITION week4 */
/**
 * @summary week4
 * @constant
 */
export const week4: number = Period_weeks_bitWeek_week4; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION week4 */

/* START_OF_SYMBOL_DEFINITION Period_weeks_bitWeek_week5 */
/**
 * @summary Period_weeks_bitWeek_week5
 * @constant
 */
export const Period_weeks_bitWeek_week5: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_weeks_bitWeek_week5 */

/* START_OF_SYMBOL_DEFINITION week5 */
/**
 * @summary week5
 * @constant
 */
export const week5: number = Period_weeks_bitWeek_week5; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION week5 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Period_weeks_bitWeek */
let _cached_decoder_for_Period_weeks_bitWeek: $.ASN1Decoder<
    Period_weeks_bitWeek
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Period_weeks_bitWeek */

/* START_OF_SYMBOL_DEFINITION _decode_Period_weeks_bitWeek */
/**
 * @summary Decodes an ASN.1 element into a(n) Period_weeks_bitWeek
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Period_weeks_bitWeek} The decoded data structure.
 */
export function _decode_Period_weeks_bitWeek(el: _Element) {
    if (!_cached_decoder_for_Period_weeks_bitWeek) {
        _cached_decoder_for_Period_weeks_bitWeek = $._decodeBitString;
    }
    return _cached_decoder_for_Period_weeks_bitWeek(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Period_weeks_bitWeek */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Period_weeks_bitWeek */
let _cached_encoder_for_Period_weeks_bitWeek: $.ASN1Encoder<
    Period_weeks_bitWeek
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Period_weeks_bitWeek */

/* START_OF_SYMBOL_DEFINITION _encode_Period_weeks_bitWeek */
/**
 * @summary Encodes a(n) Period_weeks_bitWeek into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_weeks_bitWeek, encoded as an ASN.1 Element.
 */
export function _encode_Period_weeks_bitWeek(
    value: Period_weeks_bitWeek,
    elGetter: $.ASN1Encoder<Period_weeks_bitWeek>
) {
    if (!_cached_encoder_for_Period_weeks_bitWeek) {
        _cached_encoder_for_Period_weeks_bitWeek = $._encodeBitString;
    }
    return _cached_encoder_for_Period_weeks_bitWeek(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Period_weeks_bitWeek */

/* eslint-enable */
