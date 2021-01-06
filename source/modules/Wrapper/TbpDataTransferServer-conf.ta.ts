/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ENCIPHERED,
    _get_decoder_for_ENCIPHERED,
    _get_encoder_for_ENCIPHERED,
} from "../CryptoTools/ENCIPHERED.ta";
import {
    WrappedProt,
    _decode_WrappedProt,
    _encode_WrappedProt,
} from "../Wrapper/WrappedProt.ta";
export {
    ENCIPHERED,
    _get_decoder_for_ENCIPHERED,
    _get_encoder_for_ENCIPHERED,
} from "../CryptoTools/ENCIPHERED.ta";
export { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca";
export {
    WrappedProt,
    _decode_WrappedProt,
    _encode_WrappedProt,
} from "../Wrapper/WrappedProt.ta";

/* START_OF_SYMBOL_DEFINITION TbpDataTransferServer_conf */
/**
 * @summary TbpDataTransferServer_conf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TbpDataTransferServer-conf ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TbpDataTransferServer_conf =
    | { clear: WrappedProt } /* CHOICE_ALT_ROOT */
    | { protected_: ENCIPHERED<_Element> } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION TbpDataTransferServer_conf */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TbpDataTransferServer_conf */
let _cached_decoder_for_TbpDataTransferServer_conf: $.ASN1Decoder<TbpDataTransferServer_conf> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TbpDataTransferServer_conf */

/* START_OF_SYMBOL_DEFINITION _decode_TbpDataTransferServer_conf */
/**
 * @summary Decodes an ASN.1 element into a(n) TbpDataTransferServer_conf
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TbpDataTransferServer_conf} The decoded data structure.
 */
export function _decode_TbpDataTransferServer_conf(el: _Element) {
    if (!_cached_decoder_for_TbpDataTransferServer_conf) {
        _cached_decoder_for_TbpDataTransferServer_conf = $._decode_extensible_choice<TbpDataTransferServer_conf>(
            {
                "CONTEXT 4": [
                    "clear",
                    $._decode_implicit<WrappedProt>(() => _decode_WrappedProt),
                ],
                "CONTEXT 5": [
                    "protected_",
                    $._decode_implicit<ENCIPHERED<_Element>>(() =>
                        _get_decoder_for_ENCIPHERED<_Element>($._decodeAny)
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TbpDataTransferServer_conf(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TbpDataTransferServer_conf */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TbpDataTransferServer_conf */
let _cached_encoder_for_TbpDataTransferServer_conf: $.ASN1Encoder<TbpDataTransferServer_conf> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TbpDataTransferServer_conf */

/* START_OF_SYMBOL_DEFINITION _encode_TbpDataTransferServer_conf */
/**
 * @summary Encodes a(n) TbpDataTransferServer_conf into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TbpDataTransferServer_conf, encoded as an ASN.1 Element.
 */
export function _encode_TbpDataTransferServer_conf(
    value: TbpDataTransferServer_conf,
    elGetter: $.ASN1Encoder<TbpDataTransferServer_conf>
) {
    if (!_cached_encoder_for_TbpDataTransferServer_conf) {
        _cached_encoder_for_TbpDataTransferServer_conf = $._encode_choice<TbpDataTransferServer_conf>(
            {
                clear: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_WrappedProt,
                    $.BER
                ),
                protected_: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _get_encoder_for_ENCIPHERED<_Element>($._encodeAny),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TbpDataTransferServer_conf(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TbpDataTransferServer_conf */

/* eslint-enable */
