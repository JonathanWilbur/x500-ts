/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { ABSTRACT_SYNTAX } from "../OSIProtocolSpecification/ABSTRACT-SYNTAX.oca";

/* START_OF_SYMBOL_DEFINITION ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values */
/**
 * @summary ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ARU-PPDU-normal-mode-parameters-user-data-fully-encoded-data-Item-presentation-data-values ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = {
    single_ASN1_type: _Element;
} /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values */
let _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: $.ASN1Decoder<
    ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values */

/* START_OF_SYMBOL_DEFINITION _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values */
/**
 * @summary Decodes an ASN.1 element into a(n) ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values} The decoded data structure.
 */
export function _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    el: _Element
) {
    if (
        !_cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = $._decode_inextensible_choice<
            ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >({
            "CONTEXT 0": [
                "single_ASN1_type",
                $._decode_explicit<_Element>(() => $._decodeAny),
            ],
        });
    }
    return _cached_decoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values */
let _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values: $.ASN1Encoder<
    ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values */

/* START_OF_SYMBOL_DEFINITION _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values */
/**
 * @summary Encodes a(n) ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values, encoded as an ASN.1 Element.
 */
export function _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
    value: ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values,
    elGetter: $.ASN1Encoder<
        ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    >
) {
    if (
        !_cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {
        _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values = $._encode_choice<
            ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
        >(
            {
                single_ASN1_type: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeAny,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ARU_PPDU_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values */

/* eslint-enable */
