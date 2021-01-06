/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeProblem,
    _decode_AttributeProblem,
    _encode_AttributeProblem,
} from "../DirectoryAbstractService/AttributeProblem.ta";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
import {
    AttributeValue,
    _decode_AttributeValue,
    _encode_AttributeValue,
} from "../InformationFramework/AttributeValue.ta";
export {
    attributeOrValueAlreadyExists /* IMPORTED_SHORT_NAMED_INTEGER */,
    AttributeProblem,
    AttributeProblem_attributeOrValueAlreadyExists /* IMPORTED_LONG_NAMED_INTEGER */,
    AttributeProblem_constraintViolation /* IMPORTED_LONG_NAMED_INTEGER */,
    AttributeProblem_contextViolation /* IMPORTED_LONG_NAMED_INTEGER */,
    AttributeProblem_inappropriateMatching /* IMPORTED_LONG_NAMED_INTEGER */,
    AttributeProblem_invalidAttributeSyntax /* IMPORTED_LONG_NAMED_INTEGER */,
    AttributeProblem_noSuchAttributeOrValue /* IMPORTED_LONG_NAMED_INTEGER */,
    AttributeProblem_undefinedAttributeType /* IMPORTED_LONG_NAMED_INTEGER */,
    constraintViolation /* IMPORTED_SHORT_NAMED_INTEGER */,
    contextViolation /* IMPORTED_SHORT_NAMED_INTEGER */,
    inappropriateMatching /* IMPORTED_SHORT_NAMED_INTEGER */,
    invalidAttributeSyntax /* IMPORTED_SHORT_NAMED_INTEGER */,
    noSuchAttributeOrValue /* IMPORTED_SHORT_NAMED_INTEGER */,
    undefinedAttributeType /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_AttributeProblem,
    _encode_AttributeProblem,
} from "../DirectoryAbstractService/AttributeProblem.ta";
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
export {
    AttributeValue,
    _decode_AttributeValue,
    _encode_AttributeValue,
} from "../InformationFramework/AttributeValue.ta";

/* START_OF_SYMBOL_DEFINITION AttributeErrorData_problems_Item */
/**
 * @summary AttributeErrorData_problems_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeErrorData-problems-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AttributeErrorData_problems_Item {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: AttributeProblem,
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AttributeType,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: OPTIONAL<AttributeValue>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeErrorData_problems_Item
     * @description
     *
     * This takes an `object` and converts it to a `AttributeErrorData_problems_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeErrorData_problems_Item`.
     * @returns {AttributeErrorData_problems_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeErrorData_problems_Item]: AttributeErrorData_problems_Item[_K];
            }
        >
    ): AttributeErrorData_problems_Item {
        return new AttributeErrorData_problems_Item(
            _o.problem,
            _o.type_,
            _o.value,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AttributeErrorData_problems_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeErrorData_problems_Item */
/**
 * @summary The Leading Root Component Types of AttributeErrorData_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeErrorData_problems_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "problem",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "value",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeErrorData_problems_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeErrorData_problems_Item */
/**
 * @summary The Trailing Root Component Types of AttributeErrorData_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeErrorData_problems_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeErrorData_problems_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeErrorData_problems_Item */
/**
 * @summary The Extension Addition Component Types of AttributeErrorData_problems_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeErrorData_problems_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeErrorData_problems_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeErrorData_problems_Item */
let _cached_decoder_for_AttributeErrorData_problems_Item: $.ASN1Decoder<AttributeErrorData_problems_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeErrorData_problems_Item */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeErrorData_problems_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeErrorData_problems_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeErrorData_problems_Item} The decoded data structure.
 */
export function _decode_AttributeErrorData_problems_Item(el: _Element) {
    if (!_cached_decoder_for_AttributeErrorData_problems_Item) {
        _cached_decoder_for_AttributeErrorData_problems_Item = function (
            el: _Element
        ): AttributeErrorData_problems_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let problem!: AttributeProblem;
            let type_!: AttributeType;
            let value: OPTIONAL<AttributeValue>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<AttributeProblem>(
                        () => _decode_AttributeProblem
                    )(_el);
                },
                type: (_el: _Element): void => {
                    type_ = $._decode_explicit<AttributeType>(
                        () => _decode_AttributeType
                    )(_el);
                },
                value: (_el: _Element): void => {
                    value = $._decode_explicit<AttributeValue>(
                        () => _decode_AttributeValue
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeErrorData_problems_Item,
                _extension_additions_list_spec_for_AttributeErrorData_problems_Item,
                _root_component_type_list_2_spec_for_AttributeErrorData_problems_Item,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeErrorData_problems_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ problem,
                type_,
                value,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeErrorData_problems_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeErrorData_problems_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeErrorData_problems_Item */
let _cached_encoder_for_AttributeErrorData_problems_Item: $.ASN1Encoder<AttributeErrorData_problems_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeErrorData_problems_Item */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeErrorData_problems_Item */
/**
 * @summary Encodes a(n) AttributeErrorData_problems_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeErrorData_problems_Item, encoded as an ASN.1 Element.
 */
export function _encode_AttributeErrorData_problems_Item(
    value: AttributeErrorData_problems_Item,
    elGetter: $.ASN1Encoder<AttributeErrorData_problems_Item>
) {
    if (!_cached_encoder_for_AttributeErrorData_problems_Item) {
        _cached_encoder_for_AttributeErrorData_problems_Item = function (
            value: AttributeErrorData_problems_Item,
            elGetter: $.ASN1Encoder<AttributeErrorData_problems_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_AttributeProblem,
                                $.BER
                            )(value.problem, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_AttributeType,
                                $.BER
                            )(value.type_, $.BER),
                            /* IF_ABSENT  */ value.value === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_AttributeValue,
                                      $.BER
                                  )(value.value, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AttributeErrorData_problems_Item(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeErrorData_problems_Item */

/* eslint-enable */
