/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertUpdateErr,
    _decode_CertUpdateErr,
    _encode_CertUpdateErr,
} from "../PkiPMIProtocolSpecifications/CertUpdateErr.ta";
import {
    CertUpdateOK,
    _decode_CertUpdateOK,
    _encode_CertUpdateOK,
} from "../PkiPMIProtocolSpecifications/CertUpdateOK.ta";
export {
    CertUpdateErr,
    _decode_CertUpdateErr,
    _encode_CertUpdateErr,
} from "../PkiPMIProtocolSpecifications/CertUpdateErr.ta";
export {
    CertUpdateOK,
    _decode_CertUpdateOK,
    _encode_CertUpdateOK,
} from "../PkiPMIProtocolSpecifications/CertUpdateOK.ta";

/* START_OF_SYMBOL_DEFINITION CertUpdateRsp_result */
/**
 * @summary CertUpdateRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertUpdateRsp_result =
    | { success: CertUpdateOK } /* CHOICE_ALT_ROOT */
    | { failure: CertUpdateErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CertUpdateRsp_result */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertUpdateRsp_result */
let _cached_decoder_for_CertUpdateRsp_result: $.ASN1Decoder<CertUpdateRsp_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertUpdateRsp_result */

/* START_OF_SYMBOL_DEFINITION _decode_CertUpdateRsp_result */
/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateRsp_result} The decoded data structure.
 */
export function _decode_CertUpdateRsp_result(el: _Element) {
    if (!_cached_decoder_for_CertUpdateRsp_result) {
        _cached_decoder_for_CertUpdateRsp_result = $._decode_extensible_choice<CertUpdateRsp_result>(
            {
                "CONTEXT 0": [
                    "success",
                    $._decode_explicit<CertUpdateOK>(
                        () => _decode_CertUpdateOK
                    ),
                ],
                "CONTEXT 1": [
                    "failure",
                    $._decode_explicit<CertUpdateErr>(
                        () => _decode_CertUpdateErr
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CertUpdateRsp_result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertUpdateRsp_result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertUpdateRsp_result */
let _cached_encoder_for_CertUpdateRsp_result: $.ASN1Encoder<CertUpdateRsp_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertUpdateRsp_result */

/* START_OF_SYMBOL_DEFINITION _encode_CertUpdateRsp_result */
/**
 * @summary Encodes a(n) CertUpdateRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateRsp_result(
    value: CertUpdateRsp_result,
    elGetter: $.ASN1Encoder<CertUpdateRsp_result>
) {
    if (!_cached_encoder_for_CertUpdateRsp_result) {
        _cached_encoder_for_CertUpdateRsp_result = $._encode_choice<CertUpdateRsp_result>(
            {
                success: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertUpdateOK,
                    $.BER
                ),
                failure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertUpdateErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertUpdateRsp_result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertUpdateRsp_result */

/* eslint-enable */
