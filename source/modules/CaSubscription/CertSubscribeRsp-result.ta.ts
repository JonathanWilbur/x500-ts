/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertSubscribeErr,
    _decode_CertSubscribeErr,
    _encode_CertSubscribeErr,
} from "../CaSubscription/CertSubscribeErr.ta";
import {
    CertSubscribeOK,
    _decode_CertSubscribeOK,
    _encode_CertSubscribeOK,
} from "../CaSubscription/CertSubscribeOK.ta";
export {
    CertSubscribeErr,
    _decode_CertSubscribeErr,
    _encode_CertSubscribeErr,
} from "../CaSubscription/CertSubscribeErr.ta";
export {
    CertSubscribeOK,
    _decode_CertSubscribeOK,
    _encode_CertSubscribeOK,
} from "../CaSubscription/CertSubscribeOK.ta";

/* START_OF_SYMBOL_DEFINITION CertSubscribeRsp_result */
/**
 * @summary CertSubscribeRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertSubscribeRsp_result =
    | { success: CertSubscribeOK } /* CHOICE_ALT_ROOT */
    | { failure: CertSubscribeErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CertSubscribeRsp_result */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertSubscribeRsp_result */
let _cached_decoder_for_CertSubscribeRsp_result: $.ASN1Decoder<CertSubscribeRsp_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertSubscribeRsp_result */

/* START_OF_SYMBOL_DEFINITION _decode_CertSubscribeRsp_result */
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeRsp_result} The decoded data structure.
 */
export function _decode_CertSubscribeRsp_result(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeRsp_result) {
        _cached_decoder_for_CertSubscribeRsp_result = $._decode_extensible_choice<CertSubscribeRsp_result>(
            {
                "CONTEXT 0": [
                    "success",
                    $._decode_implicit<CertSubscribeOK>(
                        () => _decode_CertSubscribeOK
                    ),
                ],
                "CONTEXT 1": [
                    "failure",
                    $._decode_implicit<CertSubscribeErr>(
                        () => _decode_CertSubscribeErr
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CertSubscribeRsp_result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertSubscribeRsp_result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertSubscribeRsp_result */
let _cached_encoder_for_CertSubscribeRsp_result: $.ASN1Encoder<CertSubscribeRsp_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertSubscribeRsp_result */

/* START_OF_SYMBOL_DEFINITION _encode_CertSubscribeRsp_result */
/**
 * @summary Encodes a(n) CertSubscribeRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeRsp_result(
    value: CertSubscribeRsp_result,
    elGetter: $.ASN1Encoder<CertSubscribeRsp_result>
) {
    if (!_cached_encoder_for_CertSubscribeRsp_result) {
        _cached_encoder_for_CertSubscribeRsp_result = $._encode_choice<CertSubscribeRsp_result>(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertSubscribeOK,
                    $.BER
                ),
                failure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertSubscribeErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertSubscribeRsp_result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertSubscribeRsp_result */

/* eslint-enable */
