/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Period_months_bitMonth */
/**
 * @summary Period_months_bitMonth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Period-months-bitMonth ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Period_months_bitMonth = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Period_months_bitMonth */

/* START_OF_SYMBOL_DEFINITION Period_months_bitMonth_january */
/**
 * @summary Period_months_bitMonth_january
 * @constant
 */
export const Period_months_bitMonth_january: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_months_bitMonth_january */

/* START_OF_SYMBOL_DEFINITION Period_months_bitMonth_february */
/**
 * @summary Period_months_bitMonth_february
 * @constant
 */
export const Period_months_bitMonth_february: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_months_bitMonth_february */

/* START_OF_SYMBOL_DEFINITION Period_months_bitMonth_march */
/**
 * @summary Period_months_bitMonth_march
 * @constant
 */
export const Period_months_bitMonth_march: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_months_bitMonth_march */

/* START_OF_SYMBOL_DEFINITION Period_months_bitMonth_april */
/**
 * @summary Period_months_bitMonth_april
 * @constant
 */
export const Period_months_bitMonth_april: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_months_bitMonth_april */

/* START_OF_SYMBOL_DEFINITION Period_months_bitMonth_may */
/**
 * @summary Period_months_bitMonth_may
 * @constant
 */
export const Period_months_bitMonth_may: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_months_bitMonth_may */

/* START_OF_SYMBOL_DEFINITION Period_months_bitMonth_june */
/**
 * @summary Period_months_bitMonth_june
 * @constant
 */
export const Period_months_bitMonth_june: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_months_bitMonth_june */

/* START_OF_SYMBOL_DEFINITION Period_months_bitMonth_july */
/**
 * @summary Period_months_bitMonth_july
 * @constant
 */
export const Period_months_bitMonth_july: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_months_bitMonth_july */

/* START_OF_SYMBOL_DEFINITION Period_months_bitMonth_august */
/**
 * @summary Period_months_bitMonth_august
 * @constant
 */
export const Period_months_bitMonth_august: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_months_bitMonth_august */

/* START_OF_SYMBOL_DEFINITION Period_months_bitMonth_september */
/**
 * @summary Period_months_bitMonth_september
 * @constant
 */
export const Period_months_bitMonth_september: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_months_bitMonth_september */

/* START_OF_SYMBOL_DEFINITION Period_months_bitMonth_october */
/**
 * @summary Period_months_bitMonth_october
 * @constant
 */
export const Period_months_bitMonth_october: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_months_bitMonth_october */

/* START_OF_SYMBOL_DEFINITION Period_months_bitMonth_november */
/**
 * @summary Period_months_bitMonth_november
 * @constant
 */
export const Period_months_bitMonth_november: number = 10; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_months_bitMonth_november */

/* START_OF_SYMBOL_DEFINITION Period_months_bitMonth_december */
/**
 * @summary Period_months_bitMonth_december
 * @constant
 */
export const Period_months_bitMonth_december: number = 11; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Period_months_bitMonth_december */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Period_months_bitMonth */
let _cached_decoder_for_Period_months_bitMonth: $.ASN1Decoder<
    Period_months_bitMonth
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Period_months_bitMonth */

/* START_OF_SYMBOL_DEFINITION _decode_Period_months_bitMonth */
/**
 * @summary Decodes an ASN.1 element into a(n) Period_months_bitMonth
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Period_months_bitMonth} The decoded data structure.
 */
export function _decode_Period_months_bitMonth(el: _Element) {
    if (!_cached_decoder_for_Period_months_bitMonth) {
        _cached_decoder_for_Period_months_bitMonth = $._decodeBitString;
    }
    return _cached_decoder_for_Period_months_bitMonth(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Period_months_bitMonth */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Period_months_bitMonth */
let _cached_encoder_for_Period_months_bitMonth: $.ASN1Encoder<
    Period_months_bitMonth
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Period_months_bitMonth */

/* START_OF_SYMBOL_DEFINITION _encode_Period_months_bitMonth */
/**
 * @summary Encodes a(n) Period_months_bitMonth into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_months_bitMonth, encoded as an ASN.1 Element.
 */
export function _encode_Period_months_bitMonth(
    value: Period_months_bitMonth,
    elGetter: $.ASN1Encoder<Period_months_bitMonth>
) {
    if (!_cached_encoder_for_Period_months_bitMonth) {
        _cached_encoder_for_Period_months_bitMonth = $._encodeBitString;
    }
    return _cached_encoder_for_Period_months_bitMonth(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Period_months_bitMonth */

/* eslint-enable */
