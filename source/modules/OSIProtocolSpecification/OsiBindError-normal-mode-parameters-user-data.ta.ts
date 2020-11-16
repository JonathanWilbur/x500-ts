/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
    _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
    _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
} from "../OSIProtocolSpecification/OsiBindError-normal-mode-parameters-user-data-fully-encoded-data-Item.ta";
export {
    OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
    _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
    _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
} from "../OSIProtocolSpecification/OsiBindError-normal-mode-parameters-user-data-fully-encoded-data-Item.ta";

/* START_OF_SYMBOL_DEFINITION OsiBindError_normal_mode_parameters_user_data */
/**
 * @summary OsiBindError_normal_mode_parameters_user_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindError-normal-mode-parameters-user-data ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiBindError_normal_mode_parameters_user_data = {
    fully_encoded_data: OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION OsiBindError_normal_mode_parameters_user_data */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data */
let _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data: $.ASN1Decoder<
    OsiBindError_normal_mode_parameters_user_data
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data */

/* START_OF_SYMBOL_DEFINITION _decode_OsiBindError_normal_mode_parameters_user_data */
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindError_normal_mode_parameters_user_data
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindError_normal_mode_parameters_user_data} The decoded data structure.
 */
export function _decode_OsiBindError_normal_mode_parameters_user_data(
    el: _Element
) {
    if (!_cached_decoder_for_OsiBindError_normal_mode_parameters_user_data) {
        _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data = $._decode_inextensible_choice<
            OsiBindError_normal_mode_parameters_user_data
        >({
            "APPLICATION 1": [
                "fully_encoded_data",
                $._decode_explicit<
                    OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item[]
                >(() =>
                    $._decodeSequenceOf<
                        OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
                    >(
                        () =>
                            _decode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiBindError_normal_mode_parameters_user_data(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_OsiBindError_normal_mode_parameters_user_data */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data */
let _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data: $.ASN1Encoder<
    OsiBindError_normal_mode_parameters_user_data
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data */

/* START_OF_SYMBOL_DEFINITION _encode_OsiBindError_normal_mode_parameters_user_data */
/**
 * @summary Encodes a(n) OsiBindError_normal_mode_parameters_user_data into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindError_normal_mode_parameters_user_data, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindError_normal_mode_parameters_user_data(
    value: OsiBindError_normal_mode_parameters_user_data,
    elGetter: $.ASN1Encoder<OsiBindError_normal_mode_parameters_user_data>
) {
    if (!_cached_encoder_for_OsiBindError_normal_mode_parameters_user_data) {
        _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data = $._encode_choice<
            OsiBindError_normal_mode_parameters_user_data
        >(
            {
                fully_encoded_data: $._encode_explicit(
                    _TagClass.application,
                    1,
                    () =>
                        $._encodeSequenceOf<
                            OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item
                        >(
                            () =>
                                _encode_OsiBindError_normal_mode_parameters_user_data_fully_encoded_data_Item,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiBindError_normal_mode_parameters_user_data(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_OsiBindError_normal_mode_parameters_user_data */

/* eslint-enable */
