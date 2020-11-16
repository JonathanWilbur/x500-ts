/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    NamedDay,
    _decode_NamedDay,
    _encode_NamedDay,
} from "../SelectedAttributeTypes/NamedDay.ta";
export {
    NamedDay,
    _decode_NamedDay,
    _encode_NamedDay,
} from "../SelectedAttributeTypes/NamedDay.ta";

/* START_OF_SYMBOL_DEFINITION XDayOf */
/**
 * @summary XDayOf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * XDayOf  ::=  CHOICE {
 *   first   [1]  NamedDay,
 *   second  [2]  NamedDay,
 *   third   [3]  NamedDay,
 *   fourth  [4]  NamedDay,
 *   fifth   [5]  NamedDay }
 * ```
 */
export type XDayOf =
    | { first: NamedDay } /* CHOICE_ALT_ROOT */
    | { second: NamedDay } /* CHOICE_ALT_ROOT */
    | { third: NamedDay } /* CHOICE_ALT_ROOT */
    | { fourth: NamedDay } /* CHOICE_ALT_ROOT */
    | { fifth: NamedDay } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION XDayOf */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_XDayOf */
let _cached_decoder_for_XDayOf: $.ASN1Decoder<XDayOf> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_XDayOf */

/* START_OF_SYMBOL_DEFINITION _decode_XDayOf */
/**
 * @summary Decodes an ASN.1 element into a(n) XDayOf
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {XDayOf} The decoded data structure.
 */
export function _decode_XDayOf(el: _Element) {
    if (!_cached_decoder_for_XDayOf) {
        _cached_decoder_for_XDayOf = $._decode_inextensible_choice<XDayOf>({
            "CONTEXT 1": [
                "first",
                $._decode_explicit<NamedDay>(() => _decode_NamedDay),
            ],
            "CONTEXT 2": [
                "second",
                $._decode_explicit<NamedDay>(() => _decode_NamedDay),
            ],
            "CONTEXT 3": [
                "third",
                $._decode_explicit<NamedDay>(() => _decode_NamedDay),
            ],
            "CONTEXT 4": [
                "fourth",
                $._decode_explicit<NamedDay>(() => _decode_NamedDay),
            ],
            "CONTEXT 5": [
                "fifth",
                $._decode_explicit<NamedDay>(() => _decode_NamedDay),
            ],
        });
    }
    return _cached_decoder_for_XDayOf(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_XDayOf */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_XDayOf */
let _cached_encoder_for_XDayOf: $.ASN1Encoder<XDayOf> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_XDayOf */

/* START_OF_SYMBOL_DEFINITION _encode_XDayOf */
/**
 * @summary Encodes a(n) XDayOf into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The XDayOf, encoded as an ASN.1 Element.
 */
export function _encode_XDayOf(value: XDayOf, elGetter: $.ASN1Encoder<XDayOf>) {
    if (!_cached_encoder_for_XDayOf) {
        _cached_encoder_for_XDayOf = $._encode_choice<XDayOf>(
            {
                first: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_NamedDay,
                    $.BER
                ),
                second: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_NamedDay,
                    $.BER
                ),
                third: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_NamedDay,
                    $.BER
                ),
                fourth: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => _encode_NamedDay,
                    $.BER
                ),
                fifth: $._encode_explicit(
                    _TagClass.context,
                    5,
                    () => _encode_NamedDay,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_XDayOf(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_XDayOf */

/* eslint-enable */
