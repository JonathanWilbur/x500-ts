/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertReplaceErr,
    _decode_CertReplaceErr,
    _encode_CertReplaceErr,
} from "../CaSubscription/CertReplaceErr.ta";
import {
    CertReplaceOK,
    _decode_CertReplaceOK,
    _encode_CertReplaceOK,
} from "../CaSubscription/CertReplaceOK.ta";
export {
    CertReplaceErr,
    _decode_CertReplaceErr,
    _encode_CertReplaceErr,
} from "../CaSubscription/CertReplaceErr.ta";
export {
    CertReplaceOK,
    _decode_CertReplaceOK,
    _encode_CertReplaceOK,
} from "../CaSubscription/CertReplaceOK.ta";

/* START_OF_SYMBOL_DEFINITION CertReplaceRsp_result */
/**
 * @summary CertReplaceRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertReplaceRsp_result =
    | { success: CertReplaceOK } /* CHOICE_ALT_ROOT */
    | { failure: CertReplaceErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CertReplaceRsp_result */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReplaceRsp_result */
let _cached_decoder_for_CertReplaceRsp_result: $.ASN1Decoder<
    CertReplaceRsp_result
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReplaceRsp_result */

/* START_OF_SYMBOL_DEFINITION _decode_CertReplaceRsp_result */
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceRsp_result} The decoded data structure.
 */
export function _decode_CertReplaceRsp_result(el: _Element) {
    if (!_cached_decoder_for_CertReplaceRsp_result) {
        _cached_decoder_for_CertReplaceRsp_result = $._decode_extensible_choice<
            CertReplaceRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_implicit<CertReplaceOK>(() => _decode_CertReplaceOK),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_implicit<CertReplaceErr>(
                    () => _decode_CertReplaceErr
                ),
            ],
        });
    }
    return _cached_decoder_for_CertReplaceRsp_result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertReplaceRsp_result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReplaceRsp_result */
let _cached_encoder_for_CertReplaceRsp_result: $.ASN1Encoder<
    CertReplaceRsp_result
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReplaceRsp_result */

/* START_OF_SYMBOL_DEFINITION _encode_CertReplaceRsp_result */
/**
 * @summary Encodes a(n) CertReplaceRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceRsp_result(
    value: CertReplaceRsp_result,
    elGetter: $.ASN1Encoder<CertReplaceRsp_result>
) {
    if (!_cached_encoder_for_CertReplaceRsp_result) {
        _cached_encoder_for_CertReplaceRsp_result = $._encode_choice<
            CertReplaceRsp_result
        >(
            {
                success: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertReplaceOK,
                    $.BER
                ),
                failure: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertReplaceErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertReplaceRsp_result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertReplaceRsp_result */

/* eslint-enable */
