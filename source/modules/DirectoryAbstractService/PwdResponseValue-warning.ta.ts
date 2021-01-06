/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PwdResponseValue_warning */
/**
 * @summary PwdResponseValue_warning
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdResponseValue-warning ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PwdResponseValue_warning =
    | { timeLeft: INTEGER } /* CHOICE_ALT_ROOT */
    | { graceRemaining: INTEGER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION PwdResponseValue_warning */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdResponseValue_warning */
let _cached_decoder_for_PwdResponseValue_warning: $.ASN1Decoder<PwdResponseValue_warning> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdResponseValue_warning */

/* START_OF_SYMBOL_DEFINITION _decode_PwdResponseValue_warning */
/**
 * @summary Decodes an ASN.1 element into a(n) PwdResponseValue_warning
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdResponseValue_warning} The decoded data structure.
 */
export function _decode_PwdResponseValue_warning(el: _Element) {
    if (!_cached_decoder_for_PwdResponseValue_warning) {
        _cached_decoder_for_PwdResponseValue_warning = $._decode_extensible_choice<PwdResponseValue_warning>(
            {
                "CONTEXT 0": [
                    "timeLeft",
                    $._decode_explicit<INTEGER>(() => $._decodeInteger),
                ],
                "CONTEXT 1": [
                    "graceRemaining",
                    $._decode_explicit<INTEGER>(() => $._decodeInteger),
                ],
            }
        );
    }
    return _cached_decoder_for_PwdResponseValue_warning(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PwdResponseValue_warning */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdResponseValue_warning */
let _cached_encoder_for_PwdResponseValue_warning: $.ASN1Encoder<PwdResponseValue_warning> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdResponseValue_warning */

/* START_OF_SYMBOL_DEFINITION _encode_PwdResponseValue_warning */
/**
 * @summary Encodes a(n) PwdResponseValue_warning into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdResponseValue_warning, encoded as an ASN.1 Element.
 */
export function _encode_PwdResponseValue_warning(
    value: PwdResponseValue_warning,
    elGetter: $.ASN1Encoder<PwdResponseValue_warning>
) {
    if (!_cached_encoder_for_PwdResponseValue_warning) {
        _cached_encoder_for_PwdResponseValue_warning = $._encode_choice<PwdResponseValue_warning>(
            {
                timeLeft: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInteger,
                    $.BER
                ),
                graceRemaining: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => $._encodeInteger,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_PwdResponseValue_warning(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PwdResponseValue_warning */

/* eslint-enable */
