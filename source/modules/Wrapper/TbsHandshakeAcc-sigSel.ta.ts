/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI-Stub/AlgorithmIdentifier.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI-Stub/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION TbsHandshakeAcc_sigSel */
/**
 * @summary TbsHandshakeAcc_sigSel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeAcc-sigSel ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TbsHandshakeAcc_sigSel =
    | { sigAlg: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */
    | { altSigAlg: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TbsHandshakeAcc_sigSel */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeAcc_sigSel */
let _cached_decoder_for_TbsHandshakeAcc_sigSel: $.ASN1Decoder<TbsHandshakeAcc_sigSel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeAcc_sigSel */

/* START_OF_SYMBOL_DEFINITION _decode_TbsHandshakeAcc_sigSel */
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeAcc_sigSel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeAcc_sigSel} The decoded data structure.
 */
export function _decode_TbsHandshakeAcc_sigSel(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeAcc_sigSel) {
        _cached_decoder_for_TbsHandshakeAcc_sigSel = $._decode_inextensible_choice<TbsHandshakeAcc_sigSel>(
            {
                "UNIVERSAL 16": ["sigAlg", _decode_AlgorithmIdentifier],
                "CONTEXT 0": [
                    "altSigAlg",
                    $._decode_implicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TbsHandshakeAcc_sigSel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TbsHandshakeAcc_sigSel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeAcc_sigSel */
let _cached_encoder_for_TbsHandshakeAcc_sigSel: $.ASN1Encoder<TbsHandshakeAcc_sigSel> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeAcc_sigSel */

/* START_OF_SYMBOL_DEFINITION _encode_TbsHandshakeAcc_sigSel */
/**
 * @summary Encodes a(n) TbsHandshakeAcc_sigSel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeAcc_sigSel, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeAcc_sigSel(
    value: TbsHandshakeAcc_sigSel,
    elGetter: $.ASN1Encoder<TbsHandshakeAcc_sigSel>
) {
    if (!_cached_encoder_for_TbsHandshakeAcc_sigSel) {
        _cached_encoder_for_TbsHandshakeAcc_sigSel = $._encode_choice<TbsHandshakeAcc_sigSel>(
            {
                sigAlg: _encode_AlgorithmIdentifier,
                altSigAlg: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AlgorithmIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TbsHandshakeAcc_sigSel(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TbsHandshakeAcc_sigSel */

/* eslint-enable */
