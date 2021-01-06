/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RepAvlErr,
    _decode_RepAvlErr,
    _encode_RepAvlErr,
} from "../AVL-management/RepAvlErr.ta";
import {
    RepAvlOK,
    _decode_RepAvlOK,
    _encode_RepAvlOK,
} from "../AVL-management/RepAvlOK.ta";
export {
    RepAvlErr,
    _decode_RepAvlErr,
    _encode_RepAvlErr,
} from "../AVL-management/RepAvlErr.ta";
export {
    RepAvlOK,
    _decode_RepAvlOK,
    _encode_RepAvlOK,
} from "../AVL-management/RepAvlOK.ta";

/* START_OF_SYMBOL_DEFINITION ReplaceAvlRsp_result */
/**
 * @summary ReplaceAvlRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplaceAvlRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ReplaceAvlRsp_result =
    | { success: RepAvlOK } /* CHOICE_ALT_ROOT */
    | { failure: RepAvlErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ReplaceAvlRsp_result */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplaceAvlRsp_result */
let _cached_decoder_for_ReplaceAvlRsp_result: $.ASN1Decoder<ReplaceAvlRsp_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplaceAvlRsp_result */

/* START_OF_SYMBOL_DEFINITION _decode_ReplaceAvlRsp_result */
/**
 * @summary Decodes an ASN.1 element into a(n) ReplaceAvlRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplaceAvlRsp_result} The decoded data structure.
 */
export function _decode_ReplaceAvlRsp_result(el: _Element) {
    if (!_cached_decoder_for_ReplaceAvlRsp_result) {
        _cached_decoder_for_ReplaceAvlRsp_result = $._decode_extensible_choice<ReplaceAvlRsp_result>(
            {
                "CONTEXT 0": [
                    "success",
                    $._decode_implicit<RepAvlOK>(() => _decode_RepAvlOK),
                ],
                "CONTEXT 1": [
                    "failure",
                    $._decode_implicit<RepAvlErr>(() => _decode_RepAvlErr),
                ],
            }
        );
    }
    return _cached_decoder_for_ReplaceAvlRsp_result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReplaceAvlRsp_result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplaceAvlRsp_result */
let _cached_encoder_for_ReplaceAvlRsp_result: $.ASN1Encoder<ReplaceAvlRsp_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplaceAvlRsp_result */

/* START_OF_SYMBOL_DEFINITION _encode_ReplaceAvlRsp_result */
/**
 * @summary Encodes a(n) ReplaceAvlRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplaceAvlRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_ReplaceAvlRsp_result(
    value: ReplaceAvlRsp_result,
    elGetter: $.ASN1Encoder<ReplaceAvlRsp_result>
) {
    if (!_cached_encoder_for_ReplaceAvlRsp_result) {
        _cached_encoder_for_ReplaceAvlRsp_result = $._encode_choice<ReplaceAvlRsp_result>(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_RepAvlOK,
                    $.BER
                ),
                failure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_RepAvlErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ReplaceAvlRsp_result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReplaceAvlRsp_result */

/* eslint-enable */
