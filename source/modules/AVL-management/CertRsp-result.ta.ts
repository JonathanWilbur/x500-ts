/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertErr,
    _decode_CertErr,
    _encode_CertErr,
} from "../AVL-management/CertErr.ta";
import {
    CertOK,
    _decode_CertOK,
    _encode_CertOK,
} from "../AVL-management/CertOK.ta";
export {
    CertErr,
    _decode_CertErr,
    _encode_CertErr,
} from "../AVL-management/CertErr.ta";
export {
    CertOK,
    _decode_CertOK,
    _encode_CertOK,
} from "../AVL-management/CertOK.ta";

/* START_OF_SYMBOL_DEFINITION CertRsp_result */
/**
 * @summary CertRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertRsp_result =
    | { success: CertOK } /* CHOICE_ALT_ROOT */
    | { failure: CertErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CertRsp_result */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertRsp_result */
let _cached_decoder_for_CertRsp_result: $.ASN1Decoder<CertRsp_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertRsp_result */

/* START_OF_SYMBOL_DEFINITION _decode_CertRsp_result */
/**
 * @summary Decodes an ASN.1 element into a(n) CertRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertRsp_result} The decoded data structure.
 */
export function _decode_CertRsp_result(el: _Element) {
    if (!_cached_decoder_for_CertRsp_result) {
        _cached_decoder_for_CertRsp_result = $._decode_extensible_choice<CertRsp_result>(
            {
                "CONTEXT 0": [
                    "success",
                    $._decode_implicit<CertOK>(() => _decode_CertOK),
                ],
                "CONTEXT 1": [
                    "failure",
                    $._decode_implicit<CertErr>(() => _decode_CertErr),
                ],
            }
        );
    }
    return _cached_decoder_for_CertRsp_result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertRsp_result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertRsp_result */
let _cached_encoder_for_CertRsp_result: $.ASN1Encoder<CertRsp_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertRsp_result */

/* START_OF_SYMBOL_DEFINITION _encode_CertRsp_result */
/**
 * @summary Encodes a(n) CertRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_CertRsp_result(
    value: CertRsp_result,
    elGetter: $.ASN1Encoder<CertRsp_result>
) {
    if (!_cached_encoder_for_CertRsp_result) {
        _cached_encoder_for_CertRsp_result = $._encode_choice<CertRsp_result>(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertOK,
                    $.BER
                ),
                failure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertRsp_result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertRsp_result */

/* eslint-enable */
