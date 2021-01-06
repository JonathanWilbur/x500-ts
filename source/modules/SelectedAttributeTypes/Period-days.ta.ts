/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Period_days_bitDay,
    _decode_Period_days_bitDay,
    _encode_Period_days_bitDay,
} from "../SelectedAttributeTypes/Period-days-bitDay.ta";
import {
    XDayOf,
    _decode_XDayOf,
    _encode_XDayOf,
} from "../SelectedAttributeTypes/XDayOf.ta";
export {
    friday /* IMPORTED_SHORT_NAMED_BIT */,
    monday /* IMPORTED_SHORT_NAMED_BIT */,
    Period_days_bitDay,
    Period_days_bitDay_friday /* IMPORTED_LONG_NAMED_BIT */,
    Period_days_bitDay_monday /* IMPORTED_LONG_NAMED_BIT */,
    Period_days_bitDay_saturday /* IMPORTED_LONG_NAMED_BIT */,
    Period_days_bitDay_sunday /* IMPORTED_LONG_NAMED_BIT */,
    Period_days_bitDay_thursday /* IMPORTED_LONG_NAMED_BIT */,
    Period_days_bitDay_tuesday /* IMPORTED_LONG_NAMED_BIT */,
    Period_days_bitDay_wednesday /* IMPORTED_LONG_NAMED_BIT */,
    saturday /* IMPORTED_SHORT_NAMED_BIT */,
    sunday /* IMPORTED_SHORT_NAMED_BIT */,
    thursday /* IMPORTED_SHORT_NAMED_BIT */,
    tuesday /* IMPORTED_SHORT_NAMED_BIT */,
    wednesday /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Period_days_bitDay,
    _encode_Period_days_bitDay,
} from "../SelectedAttributeTypes/Period-days-bitDay.ta";
export {
    XDayOf,
    _decode_XDayOf,
    _encode_XDayOf,
} from "../SelectedAttributeTypes/XDayOf.ta";

/* START_OF_SYMBOL_DEFINITION Period_days */
/**
 * @summary Period_days
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Period-days ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Period_days =
    | { intDay: INTEGER[] } /* CHOICE_ALT_ROOT */
    | { bitDay: Period_days_bitDay } /* CHOICE_ALT_ROOT */
    | { dayOf: XDayOf } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION Period_days */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Period_days */
let _cached_decoder_for_Period_days: $.ASN1Decoder<Period_days> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Period_days */

/* START_OF_SYMBOL_DEFINITION _decode_Period_days */
/**
 * @summary Decodes an ASN.1 element into a(n) Period_days
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Period_days} The decoded data structure.
 */
export function _decode_Period_days(el: _Element) {
    if (!_cached_decoder_for_Period_days) {
        _cached_decoder_for_Period_days = $._decode_extensible_choice<Period_days>(
            {
                "UNIVERSAL 17": [
                    "intDay",
                    $._decodeSetOf<INTEGER>(() => $._decodeInteger),
                ],
                "UNIVERSAL 3": ["bitDay", _decode_Period_days_bitDay],
                "CONTEXT 1": ["dayOf", _decode_XDayOf],
                "CONTEXT 2": ["dayOf", _decode_XDayOf],
                "CONTEXT 3": ["dayOf", _decode_XDayOf],
                "CONTEXT 4": ["dayOf", _decode_XDayOf],
                "CONTEXT 5": ["dayOf", _decode_XDayOf],
            }
        );
    }
    return _cached_decoder_for_Period_days(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Period_days */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Period_days */
let _cached_encoder_for_Period_days: $.ASN1Encoder<Period_days> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Period_days */

/* START_OF_SYMBOL_DEFINITION _encode_Period_days */
/**
 * @summary Encodes a(n) Period_days into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_days, encoded as an ASN.1 Element.
 */
export function _encode_Period_days(
    value: Period_days,
    elGetter: $.ASN1Encoder<Period_days>
) {
    if (!_cached_encoder_for_Period_days) {
        _cached_encoder_for_Period_days = $._encode_choice<Period_days>(
            {
                intDay: $._encodeSetOf<INTEGER>(() => $._encodeInteger, $.BER),
                bitDay: _encode_Period_days_bitDay,
                dayOf: _encode_XDayOf,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Period_days(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Period_days */

/* eslint-enable */
