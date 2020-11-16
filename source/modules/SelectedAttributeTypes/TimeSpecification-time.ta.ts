/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Period,
    _decode_Period,
    _encode_Period,
} from "../SelectedAttributeTypes/Period.ta";
import {
    TimeSpecification_time_absolute,
    _decode_TimeSpecification_time_absolute,
    _encode_TimeSpecification_time_absolute,
} from "../SelectedAttributeTypes/TimeSpecification-time-absolute.ta";
export {
    Period,
    _decode_Period,
    _encode_Period,
} from "../SelectedAttributeTypes/Period.ta";
export {
    TimeSpecification_time_absolute,
    _decode_TimeSpecification_time_absolute,
    _encode_TimeSpecification_time_absolute,
} from "../SelectedAttributeTypes/TimeSpecification-time-absolute.ta";

/* START_OF_SYMBOL_DEFINITION TimeSpecification_time */
/**
 * @summary TimeSpecification_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeSpecification-time ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TimeSpecification_time =
    | { absolute: TimeSpecification_time_absolute } /* CHOICE_ALT_ROOT */
    | { periodic: Period[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TimeSpecification_time */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeSpecification_time */
let _cached_decoder_for_TimeSpecification_time: $.ASN1Decoder<
    TimeSpecification_time
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeSpecification_time */

/* START_OF_SYMBOL_DEFINITION _decode_TimeSpecification_time */
/**
 * @summary Decodes an ASN.1 element into a(n) TimeSpecification_time
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeSpecification_time} The decoded data structure.
 */
export function _decode_TimeSpecification_time(el: _Element) {
    if (!_cached_decoder_for_TimeSpecification_time) {
        _cached_decoder_for_TimeSpecification_time = $._decode_inextensible_choice<
            TimeSpecification_time
        >({
            "UNIVERSAL 16": [
                "absolute",
                _decode_TimeSpecification_time_absolute,
            ],
            "UNIVERSAL 17": [
                "periodic",
                $._decodeSetOf<Period>(() => _decode_Period),
            ],
        });
    }
    return _cached_decoder_for_TimeSpecification_time(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TimeSpecification_time */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeSpecification_time */
let _cached_encoder_for_TimeSpecification_time: $.ASN1Encoder<
    TimeSpecification_time
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeSpecification_time */

/* START_OF_SYMBOL_DEFINITION _encode_TimeSpecification_time */
/**
 * @summary Encodes a(n) TimeSpecification_time into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeSpecification_time, encoded as an ASN.1 Element.
 */
export function _encode_TimeSpecification_time(
    value: TimeSpecification_time,
    elGetter: $.ASN1Encoder<TimeSpecification_time>
) {
    if (!_cached_encoder_for_TimeSpecification_time) {
        _cached_encoder_for_TimeSpecification_time = $._encode_choice<
            TimeSpecification_time
        >(
            {
                absolute: _encode_TimeSpecification_time_absolute,
                periodic: $._encodeSetOf<Period>(() => _encode_Period, $.BER),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TimeSpecification_time(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TimeSpecification_time */

/* eslint-enable */
