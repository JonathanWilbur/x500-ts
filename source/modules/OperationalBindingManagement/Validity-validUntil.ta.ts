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

/* START_OF_SYMBOL_DEFINITION Validity_validUntil */
/**
 * @summary Validity_validUntil
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Validity-validUntil ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Validity_validUntil =
    | { explicitTermination: NULL } /* CHOICE_ALT_ROOT */
    | { time: Time } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION Validity_validUntil */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Validity_validUntil */
let _cached_decoder_for_Validity_validUntil: $.ASN1Decoder<
    Validity_validUntil
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Validity_validUntil */

/* START_OF_SYMBOL_DEFINITION _decode_Validity_validUntil */
/**
 * @summary Decodes an ASN.1 element into a(n) Validity_validUntil
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Validity_validUntil} The decoded data structure.
 */
export function _decode_Validity_validUntil(el: _Element) {
    if (!_cached_decoder_for_Validity_validUntil) {
        _cached_decoder_for_Validity_validUntil = $._decode_extensible_choice<
            Validity_validUntil
        >({
            "CONTEXT 0": [
                "explicitTermination",
                $._decode_explicit<NULL>(() => $._decodeNull),
            ],
            "CONTEXT 1": ["time", $._decode_explicit<Time>(() => _decode_Time)],
        });
    }
    return _cached_decoder_for_Validity_validUntil(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Validity_validUntil */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Validity_validUntil */
let _cached_encoder_for_Validity_validUntil: $.ASN1Encoder<
    Validity_validUntil
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Validity_validUntil */

/* START_OF_SYMBOL_DEFINITION _encode_Validity_validUntil */
/**
 * @summary Encodes a(n) Validity_validUntil into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Validity_validUntil, encoded as an ASN.1 Element.
 */
export function _encode_Validity_validUntil(
    value: Validity_validUntil,
    elGetter: $.ASN1Encoder<Validity_validUntil>
) {
    if (!_cached_encoder_for_Validity_validUntil) {
        _cached_encoder_for_Validity_validUntil = $._encode_choice<
            Validity_validUntil
        >(
            {
                explicitTermination: $._encode_explicit(
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
    return _cached_encoder_for_Validity_validUntil(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Validity_validUntil */

/* eslint-enable */
