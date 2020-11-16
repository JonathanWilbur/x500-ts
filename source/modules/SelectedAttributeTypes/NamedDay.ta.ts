/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    NamedDay_bitNamedDays,
    _decode_NamedDay_bitNamedDays,
    _encode_NamedDay_bitNamedDays,
} from "../SelectedAttributeTypes/NamedDay-bitNamedDays.ta";
import {
    NamedDay_intNamedDays,
    _decode_NamedDay_intNamedDays,
    _encode_NamedDay_intNamedDays,
} from "../SelectedAttributeTypes/NamedDay-intNamedDays.ta";
export {
    NamedDay_bitNamedDays,
    NamedDay_bitNamedDays_friday /* IMPORTED_BIT */,
    NamedDay_bitNamedDays_monday /* IMPORTED_BIT */,
    NamedDay_bitNamedDays_saturday /* IMPORTED_BIT */,
    NamedDay_bitNamedDays_sunday /* IMPORTED_BIT */,
    NamedDay_bitNamedDays_thursday /* IMPORTED_BIT */,
    NamedDay_bitNamedDays_tuesday /* IMPORTED_BIT */,
    NamedDay_bitNamedDays_wednesday /* IMPORTED_BIT */,
    _decode_NamedDay_bitNamedDays,
    _encode_NamedDay_bitNamedDays,
} from "../SelectedAttributeTypes/NamedDay-bitNamedDays.ta";
export {
    NamedDay_intNamedDays,
    NamedDay_intNamedDays_friday /* IMPORTED_ENUMERATION_ITEM */,
    NamedDay_intNamedDays_monday /* IMPORTED_ENUMERATION_ITEM */,
    NamedDay_intNamedDays_saturday /* IMPORTED_ENUMERATION_ITEM */,
    NamedDay_intNamedDays_sunday /* IMPORTED_ENUMERATION_ITEM */,
    NamedDay_intNamedDays_thursday /* IMPORTED_ENUMERATION_ITEM */,
    NamedDay_intNamedDays_tuesday /* IMPORTED_ENUMERATION_ITEM */,
    NamedDay_intNamedDays_wednesday /* IMPORTED_ENUMERATION_ITEM */,
    _decode_NamedDay_intNamedDays,
    _encode_NamedDay_intNamedDays,
    _enum_for_NamedDay_intNamedDays,
} from "../SelectedAttributeTypes/NamedDay-intNamedDays.ta";

/* START_OF_SYMBOL_DEFINITION NamedDay */
/**
 * @summary NamedDay
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NamedDay  ::=  CHOICE {
 *   intNamedDays ENUMERATED {
 *     sunday      (1),
 *     monday      (2),
 *     tuesday     (3),
 *     wednesday   (4),
 *     thursday    (5),
 *     friday      (6),
 *     saturday    (7)},
 *   bitNamedDays BIT STRING {
 *     sunday      (0),
 *     monday      (1),
 *     tuesday     (2),
 *     wednesday   (3),
 *     thursday    (4),
 *     friday      (5),
 *     saturday    (6)} }
 * ```
 */
export type NamedDay =
    | { intNamedDays: NamedDay_intNamedDays } /* CHOICE_ALT_ROOT */
    | { bitNamedDays: NamedDay_bitNamedDays } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION NamedDay */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NamedDay */
let _cached_decoder_for_NamedDay: $.ASN1Decoder<NamedDay> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NamedDay */

/* START_OF_SYMBOL_DEFINITION _decode_NamedDay */
/**
 * @summary Decodes an ASN.1 element into a(n) NamedDay
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NamedDay} The decoded data structure.
 */
export function _decode_NamedDay(el: _Element) {
    if (!_cached_decoder_for_NamedDay) {
        _cached_decoder_for_NamedDay = $._decode_inextensible_choice<NamedDay>({
            "UNIVERSAL 10": ["intNamedDays", _decode_NamedDay_intNamedDays],
            "UNIVERSAL 3": ["bitNamedDays", _decode_NamedDay_bitNamedDays],
        });
    }
    return _cached_decoder_for_NamedDay(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NamedDay */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NamedDay */
let _cached_encoder_for_NamedDay: $.ASN1Encoder<NamedDay> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NamedDay */

/* START_OF_SYMBOL_DEFINITION _encode_NamedDay */
/**
 * @summary Encodes a(n) NamedDay into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NamedDay, encoded as an ASN.1 Element.
 */
export function _encode_NamedDay(
    value: NamedDay,
    elGetter: $.ASN1Encoder<NamedDay>
) {
    if (!_cached_encoder_for_NamedDay) {
        _cached_encoder_for_NamedDay = $._encode_choice<NamedDay>(
            {
                intNamedDays: _encode_NamedDay_intNamedDays,
                bitNamedDays: _encode_NamedDay_bitNamedDays,
            },
            $.BER
        );
    }
    return _cached_encoder_for_NamedDay(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NamedDay */

/* eslint-enable */
