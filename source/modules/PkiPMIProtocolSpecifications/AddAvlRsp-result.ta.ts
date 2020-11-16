/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AddAvlErr,
    _decode_AddAvlErr,
    _encode_AddAvlErr,
} from "../PkiPMIProtocolSpecifications/AddAvlErr.ta";
import {
    AddAvlOK,
    _decode_AddAvlOK,
    _encode_AddAvlOK,
} from "../PkiPMIProtocolSpecifications/AddAvlOK.ta";
export {
    AddAvlErr,
    _decode_AddAvlErr,
    _encode_AddAvlErr,
} from "../PkiPMIProtocolSpecifications/AddAvlErr.ta";
export {
    AddAvlOK,
    _decode_AddAvlOK,
    _encode_AddAvlOK,
} from "../PkiPMIProtocolSpecifications/AddAvlOK.ta";

/* START_OF_SYMBOL_DEFINITION AddAvlRsp_result */
/**
 * @summary AddAvlRsp_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddAvlRsp-result ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AddAvlRsp_result =
    | { success: AddAvlOK } /* CHOICE_ALT_ROOT */
    | { failure: AddAvlErr } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION AddAvlRsp_result */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddAvlRsp_result */
let _cached_decoder_for_AddAvlRsp_result: $.ASN1Decoder<
    AddAvlRsp_result
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddAvlRsp_result */

/* START_OF_SYMBOL_DEFINITION _decode_AddAvlRsp_result */
/**
 * @summary Decodes an ASN.1 element into a(n) AddAvlRsp_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddAvlRsp_result} The decoded data structure.
 */
export function _decode_AddAvlRsp_result(el: _Element) {
    if (!_cached_decoder_for_AddAvlRsp_result) {
        _cached_decoder_for_AddAvlRsp_result = $._decode_extensible_choice<
            AddAvlRsp_result
        >({
            "CONTEXT 0": [
                "success",
                $._decode_explicit<AddAvlOK>(() => _decode_AddAvlOK),
            ],
            "CONTEXT 1": [
                "failure",
                $._decode_explicit<AddAvlErr>(() => _decode_AddAvlErr),
            ],
        });
    }
    return _cached_decoder_for_AddAvlRsp_result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddAvlRsp_result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddAvlRsp_result */
let _cached_encoder_for_AddAvlRsp_result: $.ASN1Encoder<
    AddAvlRsp_result
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddAvlRsp_result */

/* START_OF_SYMBOL_DEFINITION _encode_AddAvlRsp_result */
/**
 * @summary Encodes a(n) AddAvlRsp_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddAvlRsp_result, encoded as an ASN.1 Element.
 */
export function _encode_AddAvlRsp_result(
    value: AddAvlRsp_result,
    elGetter: $.ASN1Encoder<AddAvlRsp_result>
) {
    if (!_cached_encoder_for_AddAvlRsp_result) {
        _cached_encoder_for_AddAvlRsp_result = $._encode_choice<
            AddAvlRsp_result
        >(
            {
                success: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_AddAvlOK,
                    $.BER
                ),
                failure: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_AddAvlErr,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AddAvlRsp_result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddAvlRsp_result */

/* eslint-enable */
