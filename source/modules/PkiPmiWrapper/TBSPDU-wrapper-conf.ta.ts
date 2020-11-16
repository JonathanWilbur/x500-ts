/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    EncryptedInfo,
    _decode_EncryptedInfo,
    _encode_EncryptedInfo,
} from "../PkiPmiWrapper/EncryptedInfo.ta";
import {
    WrappedPDUInfo,
    _decode_WrappedPDUInfo,
    _encode_WrappedPDUInfo,
} from "../PkiPmiWrapper/WrappedPDUInfo.ta";
export {
    EncryptedInfo,
    _decode_EncryptedInfo,
    _encode_EncryptedInfo,
} from "../PkiPmiWrapper/EncryptedInfo.ta";
export {
    WrappedPDUInfo,
    _decode_WrappedPDUInfo,
    _encode_WrappedPDUInfo,
} from "../PkiPmiWrapper/WrappedPDUInfo.ta";

/* START_OF_SYMBOL_DEFINITION TBSPDU_wrapper_conf */
/**
 * @summary TBSPDU_wrapper_conf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSPDU-wrapper-conf ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TBSPDU_wrapper_conf =
    | { clear: WrappedPDUInfo } /* CHOICE_ALT_ROOT */
    | { protected_: EncryptedInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION TBSPDU_wrapper_conf */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSPDU_wrapper_conf */
let _cached_decoder_for_TBSPDU_wrapper_conf: $.ASN1Decoder<
    TBSPDU_wrapper_conf
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSPDU_wrapper_conf */

/* START_OF_SYMBOL_DEFINITION _decode_TBSPDU_wrapper_conf */
/**
 * @summary Decodes an ASN.1 element into a(n) TBSPDU_wrapper_conf
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSPDU_wrapper_conf} The decoded data structure.
 */
export function _decode_TBSPDU_wrapper_conf(el: _Element) {
    if (!_cached_decoder_for_TBSPDU_wrapper_conf) {
        _cached_decoder_for_TBSPDU_wrapper_conf = $._decode_extensible_choice<
            TBSPDU_wrapper_conf
        >({
            "CONTEXT 2": [
                "clear",
                $._decode_explicit<WrappedPDUInfo>(
                    () => _decode_WrappedPDUInfo
                ),
            ],
            "CONTEXT 3": [
                "protected_",
                $._decode_explicit<EncryptedInfo>(() => _decode_EncryptedInfo),
            ],
        });
    }
    return _cached_decoder_for_TBSPDU_wrapper_conf(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TBSPDU_wrapper_conf */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSPDU_wrapper_conf */
let _cached_encoder_for_TBSPDU_wrapper_conf: $.ASN1Encoder<
    TBSPDU_wrapper_conf
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSPDU_wrapper_conf */

/* START_OF_SYMBOL_DEFINITION _encode_TBSPDU_wrapper_conf */
/**
 * @summary Encodes a(n) TBSPDU_wrapper_conf into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSPDU_wrapper_conf, encoded as an ASN.1 Element.
 */
export function _encode_TBSPDU_wrapper_conf(
    value: TBSPDU_wrapper_conf,
    elGetter: $.ASN1Encoder<TBSPDU_wrapper_conf>
) {
    if (!_cached_encoder_for_TBSPDU_wrapper_conf) {
        _cached_encoder_for_TBSPDU_wrapper_conf = $._encode_choice<
            TBSPDU_wrapper_conf
        >(
            {
                clear: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_WrappedPDUInfo,
                    $.BER
                ),
                protected_: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_EncryptedInfo,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TBSPDU_wrapper_conf(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TBSPDU_wrapper_conf */

/* eslint-enable */
