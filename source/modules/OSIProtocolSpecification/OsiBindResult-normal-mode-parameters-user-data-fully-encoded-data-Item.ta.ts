/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values,
    _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values,
    _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values,
} from "../OSIProtocolSpecification/OsiBindResult-normal-mode-parameters-user-data-fully-encoded-data-Item-presentation-data-values.ta";
import {
    Presentation_context_identifier,
    _decode_Presentation_context_identifier,
    _encode_Presentation_context_identifier,
} from "../OSIProtocolSpecification/Presentation-context-identifier.ta";
import {
    Transfer_syntax_name,
    _decode_Transfer_syntax_name,
    _encode_Transfer_syntax_name,
} from "../OSIProtocolSpecification/Transfer-syntax-name.ta";
export {
    OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values,
    _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values,
    _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values,
} from "../OSIProtocolSpecification/OsiBindResult-normal-mode-parameters-user-data-fully-encoded-data-Item-presentation-data-values.ta";
export {
    Presentation_context_identifier,
    _decode_Presentation_context_identifier,
    _encode_Presentation_context_identifier,
} from "../OSIProtocolSpecification/Presentation-context-identifier.ta";
export {
    Transfer_syntax_name,
    _decode_Transfer_syntax_name,
    _encode_Transfer_syntax_name,
} from "../OSIProtocolSpecification/Transfer-syntax-name.ta";

/* START_OF_SYMBOL_DEFINITION OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item */
/**
 * @summary OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindResult-normal-mode-parameters-user-data-fully-encoded-data-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item {
    constructor(
        /**
         * @summary `transfer_syntax_name`.
         * @public
         * @readonly
         */
        readonly transfer_syntax_name: OPTIONAL<Transfer_syntax_name>,
        /**
         * @summary `presentation_context_identifier`.
         * @public
         * @readonly
         */
        readonly presentation_context_identifier: Presentation_context_identifier,
        /**
         * @summary `presentation_data_values`.
         * @public
         * @readonly
         */
        readonly presentation_data_values: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values
    ) {}

    /**
     * @summary Restructures an object into a OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
     * @description
     *
     * This takes an `object` and converts it to a `OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item`.
     * @returns {OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item]: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item[_K];
            }
        >
    ): OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item {
        return new OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item(
            _o.transfer_syntax_name,
            _o.presentation_context_identifier,
            _o.presentation_data_values
        );
    }
}
/* END_OF_SYMBOL_DEFINITION OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item */
/**
 * @summary The Leading Root Component Types of OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "transfer-syntax-name",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "presentation-context-identifier",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "presentation-data-values",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item */
/**
 * @summary The Trailing Root Component Types of OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item */
/**
 * @summary The Extension Addition Component Types of OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item */
let _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ASN1Decoder<OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item */

/* START_OF_SYMBOL_DEFINITION _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item} The decoded data structure.
 */
export function _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item(
    el: _Element
) {
    if (
        !_cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            el: _Element
        ): OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let transfer_syntax_name: OPTIONAL<Transfer_syntax_name>;
            let presentation_context_identifier!: Presentation_context_identifier;
            let presentation_data_values!: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                "transfer-syntax-name": (_el: _Element): void => {
                    transfer_syntax_name = _decode_Transfer_syntax_name(_el);
                },
                "presentation-context-identifier": (_el: _Element): void => {
                    presentation_context_identifier = _decode_Presentation_context_identifier(
                        _el
                    );
                },
                "presentation-data-values": (_el: _Element): void => {
                    presentation_data_values = _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
                _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
                _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
                undefined
            );
            return new OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ transfer_syntax_name,
                presentation_context_identifier,
                presentation_data_values
            );
        };
    }
    return _cached_decoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item */
let _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item: $.ASN1Encoder<OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item */

/* START_OF_SYMBOL_DEFINITION _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item */
/**
 * @summary Encodes a(n) OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item(
    value: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
    elGetter: $.ASN1Encoder<OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item>
) {
    if (
        !_cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item
    ) {
        _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item = function (
            value: OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item,
            elGetter: $.ASN1Encoder<OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.transfer_syntax_name ===
                        undefined
                            ? undefined
                            : _encode_Transfer_syntax_name(
                                  value.transfer_syntax_name,
                                  $.BER
                              ),
                        /* REQUIRED   */ _encode_Presentation_context_identifier(
                            value.presentation_context_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item_presentation_data_values(
                            value.presentation_data_values,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_OsiBindResult_normal_mode_parameters_user_data_fully_encoded_data_Item */

/* eslint-enable */
