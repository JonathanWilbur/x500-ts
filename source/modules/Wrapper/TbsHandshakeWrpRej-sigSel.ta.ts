/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI_Stub/AlgorithmIdentifier.ta";
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI_Stub/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION TbsHandshakeWrpRej_sigSel */
/**
 * @summary TbsHandshakeWrpRej_sigSel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeWrpRej-sigSel ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TbsHandshakeWrpRej_sigSel =
    | { sigAlg: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */
    | { altSigAlg: AlgorithmIdentifier } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TbsHandshakeWrpRej_sigSel */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeWrpRej_sigSel */
let _cached_decoder_for_TbsHandshakeWrpRej_sigSel: $.ASN1Decoder<
    TbsHandshakeWrpRej_sigSel
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeWrpRej_sigSel */

/* START_OF_SYMBOL_DEFINITION _decode_TbsHandshakeWrpRej_sigSel */
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeWrpRej_sigSel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeWrpRej_sigSel} The decoded data structure.
 */
export function _decode_TbsHandshakeWrpRej_sigSel(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeWrpRej_sigSel) {
        _cached_decoder_for_TbsHandshakeWrpRej_sigSel = $._decode_inextensible_choice<
            TbsHandshakeWrpRej_sigSel
        >({
            "UNIVERSAL 16": ["sigAlg", _decode_AlgorithmIdentifier],
            "CONTEXT 0": [
                "altSigAlg",
                $._decode_implicit<AlgorithmIdentifier>(
                    () => _decode_AlgorithmIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_TbsHandshakeWrpRej_sigSel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TbsHandshakeWrpRej_sigSel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeWrpRej_sigSel */
let _cached_encoder_for_TbsHandshakeWrpRej_sigSel: $.ASN1Encoder<
    TbsHandshakeWrpRej_sigSel
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeWrpRej_sigSel */

/* START_OF_SYMBOL_DEFINITION _encode_TbsHandshakeWrpRej_sigSel */
/**
 * @summary Encodes a(n) TbsHandshakeWrpRej_sigSel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeWrpRej_sigSel, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeWrpRej_sigSel(
    value: TbsHandshakeWrpRej_sigSel,
    elGetter: $.ASN1Encoder<TbsHandshakeWrpRej_sigSel>
) {
    if (!_cached_encoder_for_TbsHandshakeWrpRej_sigSel) {
        _cached_encoder_for_TbsHandshakeWrpRej_sigSel = $._encode_choice<
            TbsHandshakeWrpRej_sigSel
        >(
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
    return _cached_encoder_for_TbsHandshakeWrpRej_sigSel(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TbsHandshakeWrpRej_sigSel */

/* eslint-enable */
