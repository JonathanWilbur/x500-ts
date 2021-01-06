/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PwdResponse_warning */
/**
 * @summary PwdResponse_warning
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PwdResponse-warning ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PwdResponse_warning =
    | { timeleft: INTEGER } /* CHOICE_ALT_ROOT */
    | { graceRemaining: INTEGER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION PwdResponse_warning */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdResponse_warning */
let _cached_decoder_for_PwdResponse_warning: $.ASN1Decoder<PwdResponse_warning> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PwdResponse_warning */

/* START_OF_SYMBOL_DEFINITION _decode_PwdResponse_warning */
/**
 * @summary Decodes an ASN.1 element into a(n) PwdResponse_warning
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PwdResponse_warning} The decoded data structure.
 */
export function _decode_PwdResponse_warning(el: _Element) {
    if (!_cached_decoder_for_PwdResponse_warning) {
        _cached_decoder_for_PwdResponse_warning = $._decode_extensible_choice<PwdResponse_warning>(
            {
                "CONTEXT 0": [
                    "timeleft",
                    $._decode_explicit<INTEGER>(() => $._decodeInteger),
                ],
                "CONTEXT 1": [
                    "graceRemaining",
                    $._decode_explicit<INTEGER>(() => $._decodeInteger),
                ],
            }
        );
    }
    return _cached_decoder_for_PwdResponse_warning(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PwdResponse_warning */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdResponse_warning */
let _cached_encoder_for_PwdResponse_warning: $.ASN1Encoder<PwdResponse_warning> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PwdResponse_warning */

/* START_OF_SYMBOL_DEFINITION _encode_PwdResponse_warning */
/**
 * @summary Encodes a(n) PwdResponse_warning into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PwdResponse_warning, encoded as an ASN.1 Element.
 */
export function _encode_PwdResponse_warning(
    value: PwdResponse_warning,
    elGetter: $.ASN1Encoder<PwdResponse_warning>
) {
    if (!_cached_encoder_for_PwdResponse_warning) {
        _cached_encoder_for_PwdResponse_warning = $._encode_choice<PwdResponse_warning>(
            {
                timeleft: $._encode_explicit(
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
    return _cached_encoder_for_PwdResponse_warning(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PwdResponse_warning */

/* eslint-enable */
