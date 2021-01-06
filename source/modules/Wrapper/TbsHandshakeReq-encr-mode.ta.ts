/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI-Stub/AlgorithmIdentifier.ta";
import {
    TbsHandshakeReq_encr_mode_non_aead,
    _decode_TbsHandshakeReq_encr_mode_non_aead,
    _encode_TbsHandshakeReq_encr_mode_non_aead,
} from "../Wrapper/TbsHandshakeReq-encr-mode-non-aead.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI-Stub/AlgorithmIdentifier.ta";
export {
    TbsHandshakeReq_encr_mode_non_aead,
    _decode_TbsHandshakeReq_encr_mode_non_aead,
    _encode_TbsHandshakeReq_encr_mode_non_aead,
} from "../Wrapper/TbsHandshakeReq-encr-mode-non-aead.ta";

/* START_OF_SYMBOL_DEFINITION TbsHandshakeReq_encr_mode */
/**
 * @summary TbsHandshakeReq_encr_mode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeReq-encr-mode ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TbsHandshakeReq_encr_mode =
    | { aead: AlgorithmIdentifier[] } /* CHOICE_ALT_ROOT */
    | { non_aead: TbsHandshakeReq_encr_mode_non_aead } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION TbsHandshakeReq_encr_mode */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeReq_encr_mode */
let _cached_decoder_for_TbsHandshakeReq_encr_mode: $.ASN1Decoder<TbsHandshakeReq_encr_mode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeReq_encr_mode */

/* START_OF_SYMBOL_DEFINITION _decode_TbsHandshakeReq_encr_mode */
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeReq_encr_mode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeReq_encr_mode} The decoded data structure.
 */
export function _decode_TbsHandshakeReq_encr_mode(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeReq_encr_mode) {
        _cached_decoder_for_TbsHandshakeReq_encr_mode = $._decode_extensible_choice<TbsHandshakeReq_encr_mode>(
            {
                "CONTEXT 2": [
                    "aead",
                    $._decode_implicit<AlgorithmIdentifier[]>(() =>
                        $._decodeSequenceOf<AlgorithmIdentifier>(
                            () => _decode_AlgorithmIdentifier
                        )
                    ),
                ],
                "CONTEXT 3": [
                    "non_aead",
                    $._decode_implicit<TbsHandshakeReq_encr_mode_non_aead>(
                        () => _decode_TbsHandshakeReq_encr_mode_non_aead
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TbsHandshakeReq_encr_mode(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TbsHandshakeReq_encr_mode */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeReq_encr_mode */
let _cached_encoder_for_TbsHandshakeReq_encr_mode: $.ASN1Encoder<TbsHandshakeReq_encr_mode> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeReq_encr_mode */

/* START_OF_SYMBOL_DEFINITION _encode_TbsHandshakeReq_encr_mode */
/**
 * @summary Encodes a(n) TbsHandshakeReq_encr_mode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeReq_encr_mode, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeReq_encr_mode(
    value: TbsHandshakeReq_encr_mode,
    elGetter: $.ASN1Encoder<TbsHandshakeReq_encr_mode>
) {
    if (!_cached_encoder_for_TbsHandshakeReq_encr_mode) {
        _cached_encoder_for_TbsHandshakeReq_encr_mode = $._encode_choice<TbsHandshakeReq_encr_mode>(
            {
                aead: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSequenceOf<AlgorithmIdentifier>(
                            () => _encode_AlgorithmIdentifier,
                            $.BER
                        ),
                    $.BER
                ),
                non_aead: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_TbsHandshakeReq_encr_mode_non_aead,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TbsHandshakeReq_encr_mode(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TbsHandshakeReq_encr_mode */

/* eslint-enable */
