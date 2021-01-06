/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../OperationalBindingManagement/Time.ta";
export {
    Time,
    _decode_Time,
    _encode_Time,
} from "../OperationalBindingManagement/Time.ta";

/* START_OF_SYMBOL_DEFINITION Validity_validFrom */
/**
 * @summary Validity_validFrom
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Validity-validFrom ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Validity_validFrom =
    | { now: NULL } /* CHOICE_ALT_ROOT */
    | { time: Time } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION Validity_validFrom */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Validity_validFrom */
let _cached_decoder_for_Validity_validFrom: $.ASN1Decoder<Validity_validFrom> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Validity_validFrom */

/* START_OF_SYMBOL_DEFINITION _decode_Validity_validFrom */
/**
 * @summary Decodes an ASN.1 element into a(n) Validity_validFrom
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Validity_validFrom} The decoded data structure.
 */
export function _decode_Validity_validFrom(el: _Element) {
    if (!_cached_decoder_for_Validity_validFrom) {
        _cached_decoder_for_Validity_validFrom = $._decode_extensible_choice<Validity_validFrom>(
            {
                "CONTEXT 0": [
                    "now",
                    $._decode_explicit<NULL>(() => $._decodeNull),
                ],
                "CONTEXT 1": [
                    "time",
                    $._decode_explicit<Time>(() => _decode_Time),
                ],
            }
        );
    }
    return _cached_decoder_for_Validity_validFrom(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Validity_validFrom */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Validity_validFrom */
let _cached_encoder_for_Validity_validFrom: $.ASN1Encoder<Validity_validFrom> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Validity_validFrom */

/* START_OF_SYMBOL_DEFINITION _encode_Validity_validFrom */
/**
 * @summary Encodes a(n) Validity_validFrom into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Validity_validFrom, encoded as an ASN.1 Element.
 */
export function _encode_Validity_validFrom(
    value: Validity_validFrom,
    elGetter: $.ASN1Encoder<Validity_validFrom>
) {
    if (!_cached_encoder_for_Validity_validFrom) {
        _cached_encoder_for_Validity_validFrom = $._encode_choice<Validity_validFrom>(
            {
                now: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                time: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_Time,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Validity_validFrom(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Validity_validFrom */

/* eslint-enable */
