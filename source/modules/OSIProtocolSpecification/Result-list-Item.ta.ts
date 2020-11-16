/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Result_list_Item_provider_reason,
    _decode_Result_list_Item_provider_reason,
    _encode_Result_list_Item_provider_reason,
} from "../OSIProtocolSpecification/Result-list-Item-provider-reason.ta";
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
    Result_list_Item_provider_reason,
    Result_list_Item_provider_reason_abstract_syntax_not_supported /* IMPORTED_NAMED_INTEGER */,
    Result_list_Item_provider_reason_proposed_transfer_syntaxes_not_supported /* IMPORTED_NAMED_INTEGER */,
    Result_list_Item_provider_reason_reason_not_specified /* IMPORTED_NAMED_INTEGER */,
    _decode_Result_list_Item_provider_reason,
    _encode_Result_list_Item_provider_reason,
} from "../OSIProtocolSpecification/Result-list-Item-provider-reason.ta";
export {
    Result,
    Result_acceptance /* IMPORTED_NAMED_INTEGER */,
    Result_provider_rejection /* IMPORTED_NAMED_INTEGER */,
    Result_user_rejection /* IMPORTED_NAMED_INTEGER */,
    _decode_Result,
    _encode_Result,
} from "../OSIProtocolSpecification/Result.ta";
export {
    Transfer_syntax_name,
    _decode_Transfer_syntax_name,
    _encode_Transfer_syntax_name,
} from "../OSIProtocolSpecification/Transfer-syntax-name.ta";

/* START_OF_SYMBOL_DEFINITION Result_list_Item */
/**
 * @summary Result_list_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Result-list-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class Result_list_Item {
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
        readonly transfer_syntax_name: OPTIONAL<Transfer_syntax_name>,
        /**
         * @summary `provider_reason`.
         * @public
         * @readonly
         */
        readonly provider_reason: OPTIONAL<Result_list_Item_provider_reason>
    ) {}

    /**
     * @summary Restructures an object into a Result_list_Item
     * @description
     *
     * This takes an `object` and converts it to a `Result_list_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Result_list_Item`.
     * @returns {Result_list_Item}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Result_list_Item]: Result_list_Item[_K] }>
    ): Result_list_Item {
        return new Result_list_Item(
            _o.result,
            _o.transfer_syntax_name,
            _o.provider_reason
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Result_list_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Result_list_Item */
/**
 * @summary The Leading Root Component Types of Result_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Result_list_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "result",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "transfer-syntax-name",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "provider-reason",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Result_list_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Result_list_Item */
/**
 * @summary The Trailing Root Component Types of Result_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Result_list_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Result_list_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Result_list_Item */
/**
 * @summary The Extension Addition Component Types of Result_list_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Result_list_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Result_list_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Result_list_Item */
let _cached_decoder_for_Result_list_Item: $.ASN1Decoder<
    Result_list_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Result_list_Item */

/* START_OF_SYMBOL_DEFINITION _decode_Result_list_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) Result_list_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Result_list_Item} The decoded data structure.
 */
export function _decode_Result_list_Item(el: _Element) {
    if (!_cached_decoder_for_Result_list_Item) {
        _cached_decoder_for_Result_list_Item = function (
            el: _Element
        ): Result_list_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let result!: Result;
            let transfer_syntax_name: OPTIONAL<Transfer_syntax_name>;
            let provider_reason: OPTIONAL<Result_list_Item_provider_reason>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                result: (_el: _Element): void => {
                    result = $._decode_explicit<Result>(() => _decode_Result)(
                        _el
                    );
                },
                "transfer-syntax-name": (_el: _Element): void => {
                    transfer_syntax_name = $._decode_explicit<
                        Transfer_syntax_name
                    >(() => _decode_Transfer_syntax_name)(_el);
                },
                "provider-reason": (_el: _Element): void => {
                    provider_reason = $._decode_explicit<
                        Result_list_Item_provider_reason
                    >(() => _decode_Result_list_Item_provider_reason)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Result_list_Item,
                _extension_additions_list_spec_for_Result_list_Item,
                _root_component_type_list_2_spec_for_Result_list_Item,
                undefined
            );
            return new Result_list_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                result,
                transfer_syntax_name,
                provider_reason
            );
        };
    }
    return _cached_decoder_for_Result_list_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Result_list_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Result_list_Item */
let _cached_encoder_for_Result_list_Item: $.ASN1Encoder<
    Result_list_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Result_list_Item */

/* START_OF_SYMBOL_DEFINITION _encode_Result_list_Item */
/**
 * @summary Encodes a(n) Result_list_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Result_list_Item, encoded as an ASN.1 Element.
 */
export function _encode_Result_list_Item(
    value: Result_list_Item,
    elGetter: $.ASN1Encoder<Result_list_Item>
) {
    if (!_cached_encoder_for_Result_list_Item) {
        _cached_encoder_for_Result_list_Item = function (
            value: Result_list_Item,
            elGetter: $.ASN1Encoder<Result_list_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_Result,
                            $.BER
                        )(value.result, $.BER),
                        /* IF_ABSENT  */ value.transfer_syntax_name ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Transfer_syntax_name,
                                  $.BER
                              )(value.transfer_syntax_name, $.BER),
                        /* IF_ABSENT  */ value.provider_reason === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      _encode_Result_list_Item_provider_reason,
                                  $.BER
                              )(value.provider_reason, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Result_list_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Result_list_Item */

/* eslint-enable */
