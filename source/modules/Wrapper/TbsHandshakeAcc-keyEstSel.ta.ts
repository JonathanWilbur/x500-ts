/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmWithInvoke,
    _decode_AlgorithmWithInvoke,
    _encode_AlgorithmWithInvoke,
} from "../PKI_Stub/AlgorithmWithInvoke.ta";
export {
    AlgorithmWithInvoke,
    _decode_AlgorithmWithInvoke,
    _encode_AlgorithmWithInvoke,
} from "../PKI_Stub/AlgorithmWithInvoke.ta";

/* START_OF_SYMBOL_DEFINITION TbsHandshakeAcc_keyEstSel */
/**
 * @summary TbsHandshakeAcc_keyEstSel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbsHandshakeAcc-keyEstSel ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TbsHandshakeAcc_keyEstSel =
    | { keyEst: AlgorithmWithInvoke } /* CHOICE_ALT_ROOT */
    | { altKeyEst: AlgorithmWithInvoke } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION TbsHandshakeAcc_keyEstSel */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeAcc_keyEstSel */
let _cached_decoder_for_TbsHandshakeAcc_keyEstSel: $.ASN1Decoder<
    TbsHandshakeAcc_keyEstSel
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TbsHandshakeAcc_keyEstSel */

/* START_OF_SYMBOL_DEFINITION _decode_TbsHandshakeAcc_keyEstSel */
/**
 * @summary Decodes an ASN.1 element into a(n) TbsHandshakeAcc_keyEstSel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbsHandshakeAcc_keyEstSel} The decoded data structure.
 */
export function _decode_TbsHandshakeAcc_keyEstSel(el: _Element) {
    if (!_cached_decoder_for_TbsHandshakeAcc_keyEstSel) {
        _cached_decoder_for_TbsHandshakeAcc_keyEstSel = $._decode_inextensible_choice<
            TbsHandshakeAcc_keyEstSel
        >({
            "UNIVERSAL 16": ["keyEst", _decode_AlgorithmWithInvoke],
            "CONTEXT 1": [
                "altKeyEst",
                $._decode_implicit<AlgorithmWithInvoke>(
                    () => _decode_AlgorithmWithInvoke
                ),
            ],
        });
    }
    return _cached_decoder_for_TbsHandshakeAcc_keyEstSel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TbsHandshakeAcc_keyEstSel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeAcc_keyEstSel */
let _cached_encoder_for_TbsHandshakeAcc_keyEstSel: $.ASN1Encoder<
    TbsHandshakeAcc_keyEstSel
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TbsHandshakeAcc_keyEstSel */

/* START_OF_SYMBOL_DEFINITION _encode_TbsHandshakeAcc_keyEstSel */
/**
 * @summary Encodes a(n) TbsHandshakeAcc_keyEstSel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbsHandshakeAcc_keyEstSel, encoded as an ASN.1 Element.
 */
export function _encode_TbsHandshakeAcc_keyEstSel(
    value: TbsHandshakeAcc_keyEstSel,
    elGetter: $.ASN1Encoder<TbsHandshakeAcc_keyEstSel>
) {
    if (!_cached_encoder_for_TbsHandshakeAcc_keyEstSel) {
        _cached_encoder_for_TbsHandshakeAcc_keyEstSel = $._encode_choice<
            TbsHandshakeAcc_keyEstSel
        >(
            {
                keyEst: _encode_AlgorithmWithInvoke,
                altKeyEst: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AlgorithmWithInvoke,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TbsHandshakeAcc_keyEstSel(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TbsHandshakeAcc_keyEstSel */

/* eslint-enable */
