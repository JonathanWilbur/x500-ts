/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION NamedDay_bitNamedDays */
/**
 * @summary NamedDay_bitNamedDays
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedDay-bitNamedDays ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type NamedDay_bitNamedDays = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION NamedDay_bitNamedDays */

/* START_OF_SYMBOL_DEFINITION NamedDay_bitNamedDays_sunday */
/**
 * @summary NamedDay_bitNamedDays_sunday
 * @constant
 */
export const NamedDay_bitNamedDays_sunday: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION NamedDay_bitNamedDays_sunday */

/* START_OF_SYMBOL_DEFINITION NamedDay_bitNamedDays_monday */
/**
 * @summary NamedDay_bitNamedDays_monday
 * @constant
 */
export const NamedDay_bitNamedDays_monday: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION NamedDay_bitNamedDays_monday */

/* START_OF_SYMBOL_DEFINITION NamedDay_bitNamedDays_tuesday */
/**
 * @summary NamedDay_bitNamedDays_tuesday
 * @constant
 */
export const NamedDay_bitNamedDays_tuesday: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION NamedDay_bitNamedDays_tuesday */

/* START_OF_SYMBOL_DEFINITION NamedDay_bitNamedDays_wednesday */
/**
 * @summary NamedDay_bitNamedDays_wednesday
 * @constant
 */
export const NamedDay_bitNamedDays_wednesday: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION NamedDay_bitNamedDays_wednesday */

/* START_OF_SYMBOL_DEFINITION NamedDay_bitNamedDays_thursday */
/**
 * @summary NamedDay_bitNamedDays_thursday
 * @constant
 */
export const NamedDay_bitNamedDays_thursday: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION NamedDay_bitNamedDays_thursday */

/* START_OF_SYMBOL_DEFINITION NamedDay_bitNamedDays_friday */
/**
 * @summary NamedDay_bitNamedDays_friday
 * @constant
 */
export const NamedDay_bitNamedDays_friday: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION NamedDay_bitNamedDays_friday */

/* START_OF_SYMBOL_DEFINITION NamedDay_bitNamedDays_saturday */
/**
 * @summary NamedDay_bitNamedDays_saturday
 * @constant
 */
export const NamedDay_bitNamedDays_saturday: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION NamedDay_bitNamedDays_saturday */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NamedDay_bitNamedDays */
let _cached_decoder_for_NamedDay_bitNamedDays: $.ASN1Decoder<
    NamedDay_bitNamedDays
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NamedDay_bitNamedDays */

/* START_OF_SYMBOL_DEFINITION _decode_NamedDay_bitNamedDays */
/**
 * @summary Decodes an ASN.1 element into a(n) NamedDay_bitNamedDays
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NamedDay_bitNamedDays} The decoded data structure.
 */
export function _decode_NamedDay_bitNamedDays(el: _Element) {
    if (!_cached_decoder_for_NamedDay_bitNamedDays) {
        _cached_decoder_for_NamedDay_bitNamedDays = $._decodeBitString;
    }
    return _cached_decoder_for_NamedDay_bitNamedDays(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NamedDay_bitNamedDays */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NamedDay_bitNamedDays */
let _cached_encoder_for_NamedDay_bitNamedDays: $.ASN1Encoder<
    NamedDay_bitNamedDays
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NamedDay_bitNamedDays */

/* START_OF_SYMBOL_DEFINITION _encode_NamedDay_bitNamedDays */
/**
 * @summary Encodes a(n) NamedDay_bitNamedDays into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamedDay_bitNamedDays, encoded as an ASN.1 Element.
 */
export function _encode_NamedDay_bitNamedDays(
    value: NamedDay_bitNamedDays,
    elGetter: $.ASN1Encoder<NamedDay_bitNamedDays>
) {
    if (!_cached_encoder_for_NamedDay_bitNamedDays) {
        _cached_encoder_for_NamedDay_bitNamedDays = $._encodeBitString;
    }
    return _cached_encoder_for_NamedDay_bitNamedDays(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NamedDay_bitNamedDays */

/* eslint-enable */
