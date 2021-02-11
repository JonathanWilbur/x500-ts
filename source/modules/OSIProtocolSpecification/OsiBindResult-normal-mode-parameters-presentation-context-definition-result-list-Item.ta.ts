/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Result,
    _decode_Result,
    _encode_Result,
} from "../OSIProtocolSpecification/Result.ta";
import {
    Transfer_syntax_name,
    _decode_Transfer_syntax_name,
    _encode_Transfer_syntax_name,
} from "../OSIProtocolSpecification/Transfer-syntax-name.ta";
export {
    acceptance /* IMPORTED_SHORT_NAMED_INTEGER */,
    provider_rejection /* IMPORTED_SHORT_NAMED_INTEGER */,
    Result,
    Result_acceptance /* IMPORTED_LONG_NAMED_INTEGER */,
    Result_provider_rejection /* IMPORTED_LONG_NAMED_INTEGER */,
    Result_user_rejection /* IMPORTED_LONG_NAMED_INTEGER */,
    user_rejection /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_Result,
    _encode_Result,
} from "../OSIProtocolSpecification/Result.ta";
export {
    Transfer_syntax_name,
    _decode_Transfer_syntax_name,
    _encode_Transfer_syntax_name,
} from "../OSIProtocolSpecification/Transfer-syntax-name.ta";

/* START_OF_SYMBOL_DEFINITION OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item */
/**
 * @summary OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiBindResult-normal-mode-parameters-presentation-context-definition-result-list-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item {
    constructor(
        /**
         * @summary `result`.
         * @public
         * @readonly
         */
        readonly result: Result,
        /**
         * @summary `transfer_syntax_name`.
         * @public
         * @readonly
         */
        readonly transfer_syntax_name: Transfer_syntax_name
    ) {}

    /**
     * @summary Restructures an object into a OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
     * @description
     *
     * This takes an `object` and converts it to a `OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item`.
     * @returns {OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item]: OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item[_K];
        }
    ): OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item {
        return new OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
            _o.result,
            _o.transfer_syntax_name
        );
    }
}
/* END_OF_SYMBOL_DEFINITION OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item */
/**
 * @summary The Leading Root Component Types of OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "result",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "transfer-syntax-name",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item */
/**
 * @summary The Trailing Root Component Types of OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item */
/**
 * @summary The Extension Addition Component Types of OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item */
let _cached_decoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: $.ASN1Decoder<OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item */

/* START_OF_SYMBOL_DEFINITION _decode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item} The decoded data structure.
 */
export function _decode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
    el: _Element
) {
    if (
        !_cached_decoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
    ) {
        _cached_decoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item = function (
            el: _Element
        ): OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "OsiBindResult-normal-mode-parameters-presentation-context-definition-result-list-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "result";
            sequence[1].name = "transfer-syntax-name";
            let result!: Result;
            let transfer_syntax_name!: Transfer_syntax_name;
            result = $._decode_implicit<Result>(() => _decode_Result)(
                sequence[0]
            );
            transfer_syntax_name = $._decode_implicit<Transfer_syntax_name>(
                () => _decode_Transfer_syntax_name
            )(sequence[1]);
            return new OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
                result,
                transfer_syntax_name
            );
        };
    }
    return _cached_decoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item */
let _cached_encoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item: $.ASN1Encoder<OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item */

/* START_OF_SYMBOL_DEFINITION _encode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item */
/**
 * @summary Encodes a(n) OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item, encoded as an ASN.1 Element.
 */
export function _encode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
    value: OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item,
    elGetter: $.ASN1Encoder<OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item>
) {
    if (
        !_cached_encoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item
    ) {
        _cached_encoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item = function (
            value: OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item,
            elGetter: $.ASN1Encoder<OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_Result,
                            $.BER
                        )(value.result, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_Transfer_syntax_name,
                            $.BER
                        )(value.transfer_syntax_name, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_OsiBindResult_normal_mode_parameters_presentation_context_definition_result_list_Item */

/* eslint-enable */
