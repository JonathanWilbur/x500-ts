/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Period_days_bitDay */
/**
 * @summary Period_days_bitDay
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Period-days-bitDay ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Period_days_bitDay = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Period_days_bitDay */

/* START_OF_SYMBOL_DEFINITION Period_days_bitDay_sunday */
/**
 * @summary Period_days_bitDay_sunday
 * @constant
 */
export const Period_days_bitDay_sunday: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_days_bitDay_sunday */

/* START_OF_SYMBOL_DEFINITION sunday */
/**
 * @summary sunday
 * @constant
 */
export const sunday: number = Period_days_bitDay_sunday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION sunday */

/* START_OF_SYMBOL_DEFINITION Period_days_bitDay_monday */
/**
 * @summary Period_days_bitDay_monday
 * @constant
 */
export const Period_days_bitDay_monday: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_days_bitDay_monday */

/* START_OF_SYMBOL_DEFINITION monday */
/**
 * @summary monday
 * @constant
 */
export const monday: number = Period_days_bitDay_monday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION monday */

/* START_OF_SYMBOL_DEFINITION Period_days_bitDay_tuesday */
/**
 * @summary Period_days_bitDay_tuesday
 * @constant
 */
export const Period_days_bitDay_tuesday: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_days_bitDay_tuesday */

/* START_OF_SYMBOL_DEFINITION tuesday */
/**
 * @summary tuesday
 * @constant
 */
export const tuesday: number = Period_days_bitDay_tuesday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION tuesday */

/* START_OF_SYMBOL_DEFINITION Period_days_bitDay_wednesday */
/**
 * @summary Period_days_bitDay_wednesday
 * @constant
 */
export const Period_days_bitDay_wednesday: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_days_bitDay_wednesday */

/* START_OF_SYMBOL_DEFINITION wednesday */
/**
 * @summary wednesday
 * @constant
 */
export const wednesday: number = Period_days_bitDay_wednesday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION wednesday */

/* START_OF_SYMBOL_DEFINITION Period_days_bitDay_thursday */
/**
 * @summary Period_days_bitDay_thursday
 * @constant
 */
export const Period_days_bitDay_thursday: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_days_bitDay_thursday */

/* START_OF_SYMBOL_DEFINITION thursday */
/**
 * @summary thursday
 * @constant
 */
export const thursday: number = Period_days_bitDay_thursday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION thursday */

/* START_OF_SYMBOL_DEFINITION Period_days_bitDay_friday */
/**
 * @summary Period_days_bitDay_friday
 * @constant
 */
export const Period_days_bitDay_friday: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_days_bitDay_friday */

/* START_OF_SYMBOL_DEFINITION friday */
/**
 * @summary friday
 * @constant
 */
export const friday: number = Period_days_bitDay_friday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION friday */

/* START_OF_SYMBOL_DEFINITION Period_days_bitDay_saturday */
/**
 * @summary Period_days_bitDay_saturday
 * @constant
 */
export const Period_days_bitDay_saturday: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_days_bitDay_saturday */

/* START_OF_SYMBOL_DEFINITION saturday */
/**
 * @summary saturday
 * @constant
 */
export const saturday: number = Period_days_bitDay_saturday; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION saturday */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Period_days_bitDay */
let _cached_decoder_for_Period_days_bitDay: $.ASN1Decoder<Period_days_bitDay> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Period_days_bitDay */

/* START_OF_SYMBOL_DEFINITION _decode_Period_days_bitDay */
/**
 * @summary Decodes an ASN.1 element into a(n) Period_days_bitDay
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Period_days_bitDay} The decoded data structure.
 */
export function _decode_Period_days_bitDay(el: _Element) {
    if (!_cached_decoder_for_Period_days_bitDay) {
        _cached_decoder_for_Period_days_bitDay = $._decodeBitString;
    }
    return _cached_decoder_for_Period_days_bitDay(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Period_days_bitDay */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Period_days_bitDay */
let _cached_encoder_for_Period_days_bitDay: $.ASN1Encoder<Period_days_bitDay> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Period_days_bitDay */

/* START_OF_SYMBOL_DEFINITION _encode_Period_days_bitDay */
/**
 * @summary Encodes a(n) Period_days_bitDay into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_days_bitDay, encoded as an ASN.1 Element.
 */
export function _encode_Period_days_bitDay(
    value: Period_days_bitDay,
    elGetter: $.ASN1Encoder<Period_days_bitDay>
) {
    if (!_cached_encoder_for_Period_days_bitDay) {
        _cached_encoder_for_Period_days_bitDay = $._encodeBitString;
    }
    return _cached_encoder_for_Period_days_bitDay(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Period_days_bitDay */

/* eslint-enable */
