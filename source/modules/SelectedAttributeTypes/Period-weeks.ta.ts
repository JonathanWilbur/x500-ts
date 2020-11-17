/* eslint-disable */
import { ASN1Element as _Element, INTEGER, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Period_weeks_bitWeek,
    _decode_Period_weeks_bitWeek,
    _encode_Period_weeks_bitWeek,
} from "../SelectedAttributeTypes/Period-weeks-bitWeek.ta";
export {
    Period_weeks_bitWeek,
    Period_weeks_bitWeek_week1 /* IMPORTED_LONG_NAMED_BIT */,
    Period_weeks_bitWeek_week2 /* IMPORTED_LONG_NAMED_BIT */,
    Period_weeks_bitWeek_week3 /* IMPORTED_LONG_NAMED_BIT */,
    Period_weeks_bitWeek_week4 /* IMPORTED_LONG_NAMED_BIT */,
    Period_weeks_bitWeek_week5 /* IMPORTED_LONG_NAMED_BIT */,
    week1 /* IMPORTED_SHORT_NAMED_BIT */,
    week2 /* IMPORTED_SHORT_NAMED_BIT */,
    week3 /* IMPORTED_SHORT_NAMED_BIT */,
    week4 /* IMPORTED_SHORT_NAMED_BIT */,
    week5 /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Period_weeks_bitWeek,
    _encode_Period_weeks_bitWeek,
} from "../SelectedAttributeTypes/Period-weeks-bitWeek.ta";

/* START_OF_SYMBOL_DEFINITION Period_weeks */
/**
 * @summary Period_weeks
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Period-weeks ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Period_weeks =
    | { allWeeks: NULL } /* CHOICE_ALT_ROOT */
    | { intWeek: INTEGER[] } /* CHOICE_ALT_ROOT */
    | { bitWeek: Period_weeks_bitWeek } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION Period_weeks */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Period_weeks */
let _cached_decoder_for_Period_weeks: $.ASN1Decoder<Period_weeks> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Period_weeks */

/* START_OF_SYMBOL_DEFINITION _decode_Period_weeks */
/**
 * @summary Decodes an ASN.1 element into a(n) Period_weeks
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Period_weeks} The decoded data structure.
 */
export function _decode_Period_weeks(el: _Element) {
    if (!_cached_decoder_for_Period_weeks) {
        _cached_decoder_for_Period_weeks = $._decode_extensible_choice<
            Period_weeks
        >({
            "UNIVERSAL 5": ["allWeeks", $._decodeNull],
            "UNIVERSAL 17": [
                "intWeek",
                $._decodeSetOf<INTEGER>(() => $._decodeInteger),
            ],
            "UNIVERSAL 3": ["bitWeek", _decode_Period_weeks_bitWeek],
        });
    }
    return _cached_decoder_for_Period_weeks(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Period_weeks */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Period_weeks */
let _cached_encoder_for_Period_weeks: $.ASN1Encoder<Period_weeks> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Period_weeks */

/* START_OF_SYMBOL_DEFINITION _encode_Period_weeks */
/**
 * @summary Encodes a(n) Period_weeks into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_weeks, encoded as an ASN.1 Element.
 */
export function _encode_Period_weeks(
    value: Period_weeks,
    elGetter: $.ASN1Encoder<Period_weeks>
) {
    if (!_cached_encoder_for_Period_weeks) {
        _cached_encoder_for_Period_weeks = $._encode_choice<Period_weeks>(
            {
                allWeeks: $._encodeNull,
                intWeek: $._encodeSetOf<INTEGER>(() => $._encodeInteger, $.BER),
                bitWeek: _encode_Period_weeks_bitWeek,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Period_weeks(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Period_weeks */

/* eslint-enable */
