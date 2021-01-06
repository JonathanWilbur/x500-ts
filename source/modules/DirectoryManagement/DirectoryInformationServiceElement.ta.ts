/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DirectoryInformationServiceElement_operationType,
    _decode_DirectoryInformationServiceElement_operationType,
    _encode_DirectoryInformationServiceElement_operationType,
} from "../DirectoryManagement/DirectoryInformationServiceElement-operationType.ta";
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
    abandon /* IMPORTED_SHORT_NAMED_BIT */,
    addEntry /* IMPORTED_SHORT_NAMED_BIT */,
    compare /* IMPORTED_SHORT_NAMED_BIT */,
    DirectoryInformationServiceElement_operationType,
    DirectoryInformationServiceElement_operationType_abandon /* IMPORTED_LONG_NAMED_BIT */,
    DirectoryInformationServiceElement_operationType_addEntry /* IMPORTED_LONG_NAMED_BIT */,
    DirectoryInformationServiceElement_operationType_compare /* IMPORTED_LONG_NAMED_BIT */,
    DirectoryInformationServiceElement_operationType_list /* IMPORTED_LONG_NAMED_BIT */,
    DirectoryInformationServiceElement_operationType_modifyDN /* IMPORTED_LONG_NAMED_BIT */,
    DirectoryInformationServiceElement_operationType_modifyEntry /* IMPORTED_LONG_NAMED_BIT */,
    DirectoryInformationServiceElement_operationType_read /* IMPORTED_LONG_NAMED_BIT */,
    DirectoryInformationServiceElement_operationType_removeEntry /* IMPORTED_LONG_NAMED_BIT */,
    DirectoryInformationServiceElement_operationType_search /* IMPORTED_LONG_NAMED_BIT */,
    list /* IMPORTED_SHORT_NAMED_BIT */,
    modifyDN /* IMPORTED_SHORT_NAMED_BIT */,
    modifyEntry /* IMPORTED_SHORT_NAMED_BIT */,
    read /* IMPORTED_SHORT_NAMED_BIT */,
    removeEntry /* IMPORTED_SHORT_NAMED_BIT */,
    search /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_DirectoryInformationServiceElement_operationType,
    _encode_DirectoryInformationServiceElement_operationType,
} from "../DirectoryManagement/DirectoryInformationServiceElement-operationType.ta";
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

/* START_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement */
/**
 * @summary DirectoryInformationServiceElement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DirectoryInformationServiceElement ::= SEQUENCE {
 *   operationType
 *     BIT STRING {read(0), compare(1), abandon(2), list(3), search(4),
 *                 addEntry(5), removeEntry(6), modifyEntry(7), modifyDN(8)}
 *       OPTIONAL,
 *   attributeType   AttributeType OPTIONAL,
 *   attributeValue  [0]  AttributeValue OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class DirectoryInformationServiceElement {
    constructor(
        /**
         * @summary `operationType`.
         * @public
         * @readonly
         */
        readonly operationType: OPTIONAL<DirectoryInformationServiceElement_operationType>,
        /**
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType: OPTIONAL<AttributeType>,
        /**
         * @summary `attributeValue`.
         * @public
         * @readonly
         */
        readonly attributeValue: OPTIONAL<AttributeValue>
    ) {}

    /**
     * @summary Restructures an object into a DirectoryInformationServiceElement
     * @description
     *
     * This takes an `object` and converts it to a `DirectoryInformationServiceElement`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DirectoryInformationServiceElement`.
     * @returns {DirectoryInformationServiceElement}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof DirectoryInformationServiceElement]: DirectoryInformationServiceElement[_K];
            }
        >
    ): DirectoryInformationServiceElement {
        return new DirectoryInformationServiceElement(
            _o.operationType,
            _o.attributeType,
            _o.attributeValue
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DirectoryInformationServiceElement */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DirectoryInformationServiceElement */
/**
 * @summary The Leading Root Component Types of DirectoryInformationServiceElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DirectoryInformationServiceElement: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "operationType",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeType",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeValue",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DirectoryInformationServiceElement */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DirectoryInformationServiceElement */
/**
 * @summary The Trailing Root Component Types of DirectoryInformationServiceElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DirectoryInformationServiceElement: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DirectoryInformationServiceElement */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DirectoryInformationServiceElement */
/**
 * @summary The Extension Addition Component Types of DirectoryInformationServiceElement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DirectoryInformationServiceElement: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DirectoryInformationServiceElement */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DirectoryInformationServiceElement */
let _cached_decoder_for_DirectoryInformationServiceElement: $.ASN1Decoder<DirectoryInformationServiceElement> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DirectoryInformationServiceElement */

/* START_OF_SYMBOL_DEFINITION _decode_DirectoryInformationServiceElement */
/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryInformationServiceElement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DirectoryInformationServiceElement} The decoded data structure.
 */
export function _decode_DirectoryInformationServiceElement(el: _Element) {
    if (!_cached_decoder_for_DirectoryInformationServiceElement) {
        _cached_decoder_for_DirectoryInformationServiceElement = function (
            el: _Element
        ): DirectoryInformationServiceElement {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let operationType: OPTIONAL<DirectoryInformationServiceElement_operationType>;
            let attributeType: OPTIONAL<AttributeType>;
            let attributeValue: OPTIONAL<AttributeValue>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                operationType: (_el: _Element): void => {
                    operationType = _decode_DirectoryInformationServiceElement_operationType(
                        _el
                    );
                },
                attributeType: (_el: _Element): void => {
                    attributeType = _decode_AttributeType(_el);
                },
                attributeValue: (_el: _Element): void => {
                    attributeValue = $._decode_explicit<AttributeValue>(
                        () => _decode_AttributeValue
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DirectoryInformationServiceElement,
                _extension_additions_list_spec_for_DirectoryInformationServiceElement,
                _root_component_type_list_2_spec_for_DirectoryInformationServiceElement,
                undefined
            );
            return new DirectoryInformationServiceElement(
                /* SEQUENCE_CONSTRUCTOR_CALL */ operationType,
                attributeType,
                attributeValue
            );
        };
    }
    return _cached_decoder_for_DirectoryInformationServiceElement(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DirectoryInformationServiceElement */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DirectoryInformationServiceElement */
let _cached_encoder_for_DirectoryInformationServiceElement: $.ASN1Encoder<DirectoryInformationServiceElement> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DirectoryInformationServiceElement */

/* START_OF_SYMBOL_DEFINITION _encode_DirectoryInformationServiceElement */
/**
 * @summary Encodes a(n) DirectoryInformationServiceElement into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryInformationServiceElement, encoded as an ASN.1 Element.
 */
export function _encode_DirectoryInformationServiceElement(
    value: DirectoryInformationServiceElement,
    elGetter: $.ASN1Encoder<DirectoryInformationServiceElement>
) {
    if (!_cached_encoder_for_DirectoryInformationServiceElement) {
        _cached_encoder_for_DirectoryInformationServiceElement = function (
            value: DirectoryInformationServiceElement,
            elGetter: $.ASN1Encoder<DirectoryInformationServiceElement>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.operationType === undefined
                            ? undefined
                            : _encode_DirectoryInformationServiceElement_operationType(
                                  value.operationType,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.attributeType === undefined
                            ? undefined
                            : _encode_AttributeType(value.attributeType, $.BER),
                        /* IF_ABSENT  */ value.attributeValue === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_AttributeValue,
                                  $.BER
                              )(value.attributeValue, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DirectoryInformationServiceElement(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_DirectoryInformationServiceElement */

/* eslint-enable */
