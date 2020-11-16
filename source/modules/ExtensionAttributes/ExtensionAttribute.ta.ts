/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ExtensionAttribute_value_Item,
    _decode_ExtensionAttribute_value_Item,
    _encode_ExtensionAttribute_value_Item,
} from "../ExtensionAttributes/ExtensionAttribute-value-Item.ta";
export {
    ExtensionAttribute_value_Item,
    _decode_ExtensionAttribute_value_Item,
    _encode_ExtensionAttribute_value_Item,
} from "../ExtensionAttributes/ExtensionAttribute-value-Item.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION ExtensionAttribute */
/**
 * @summary ExtensionAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionAttribute ::= SEQUENCE {
 *   type            ATTRIBUTE.&id,
 *   value           SET SIZE (0..1) OF SEQUENCE {
 *     mandatory  [0]  BOOLEAN DEFAULT FALSE,
 *     critical   [1]  BOOLEAN DEFAULT FALSE,
 *     ext        [2]  EXTENSION.&ExtnType,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class ExtensionAttribute {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ExtensionAttribute_value_Item[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ExtensionAttribute
     * @description
     *
     * This takes an `object` and converts it to a `ExtensionAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtensionAttribute`.
     * @returns {ExtensionAttribute}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof ExtensionAttribute]: ExtensionAttribute[_K] }
        >
    ): ExtensionAttribute {
        return new ExtensionAttribute(
            _o.type_,
            _o.value,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ExtensionAttribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExtensionAttribute */
/**
 * @summary The Leading Root Component Types of ExtensionAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExtensionAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "value",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ExtensionAttribute */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExtensionAttribute */
/**
 * @summary The Trailing Root Component Types of ExtensionAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExtensionAttribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ExtensionAttribute */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExtensionAttribute */
/**
 * @summary The Extension Addition Component Types of ExtensionAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExtensionAttribute: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ExtensionAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionAttribute */
let _cached_decoder_for_ExtensionAttribute: $.ASN1Decoder<
    ExtensionAttribute
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtensionAttribute */

/* START_OF_SYMBOL_DEFINITION _decode_ExtensionAttribute */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionAttribute} The decoded data structure.
 */
export function _decode_ExtensionAttribute(el: _Element) {
    if (!_cached_decoder_for_ExtensionAttribute) {
        _cached_decoder_for_ExtensionAttribute = function (
            el: _Element
        ): ExtensionAttribute {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ExtensionAttribute contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: OBJECT_IDENTIFIER;
            let value!: ExtensionAttribute_value_Item[];
            type_ = $._decodeObjectIdentifier(sequence[0]);
            value = $._decodeSetOf<ExtensionAttribute_value_Item>(
                () => _decode_ExtensionAttribute_value_Item
            )(sequence[1]);
            return new ExtensionAttribute(type_, value, sequence.slice(2));
        };
    }
    return _cached_decoder_for_ExtensionAttribute(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtensionAttribute */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionAttribute */
let _cached_encoder_for_ExtensionAttribute: $.ASN1Encoder<
    ExtensionAttribute
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtensionAttribute */

/* START_OF_SYMBOL_DEFINITION _encode_ExtensionAttribute */
/**
 * @summary Encodes a(n) ExtensionAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionAttribute, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionAttribute(
    value: ExtensionAttribute,
    elGetter: $.ASN1Encoder<ExtensionAttribute>
) {
    if (!_cached_encoder_for_ExtensionAttribute) {
        _cached_encoder_for_ExtensionAttribute = function (
            value: ExtensionAttribute,
            elGetter: $.ASN1Encoder<ExtensionAttribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.type_,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<
                                ExtensionAttribute_value_Item
                            >(
                                () => _encode_ExtensionAttribute_value_Item,
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
    return _cached_encoder_for_ExtensionAttribute(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtensionAttribute */

/* eslint-enable */
