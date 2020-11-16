/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AssertionValue,
    _decode_AssertionValue,
    _encode_AssertionValue,
} from "../Lightweight_Directory_Access_Protocol_V3/AssertionValue.ta";
import {
    AttributeDescription,
    _decode_AttributeDescription,
    _encode_AttributeDescription,
} from "../Lightweight_Directory_Access_Protocol_V3/AttributeDescription.ta";
export {
    AssertionValue,
    _decode_AssertionValue,
    _encode_AssertionValue,
} from "../Lightweight_Directory_Access_Protocol_V3/AssertionValue.ta";
export {
    AttributeDescription,
    _decode_AttributeDescription,
    _encode_AttributeDescription,
} from "../Lightweight_Directory_Access_Protocol_V3/AttributeDescription.ta";

/* START_OF_SYMBOL_DEFINITION AttributeValueAssertion */
/**
 * @summary AttributeValueAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeValueAssertion ::= SEQUENCE {
 *   attributeDesc   AttributeDescription,
 *   assertionValue  AssertionValue
 * }
 * ```
 *
 * @class
 */
export class AttributeValueAssertion {
    constructor(
        /**
         * @summary `attributeDesc`.
         * @public
         * @readonly
         */
        readonly attributeDesc: AttributeDescription,
        /**
         * @summary `assertionValue`.
         * @public
         * @readonly
         */
        readonly assertionValue: AssertionValue,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeValueAssertion
     * @description
     *
     * This takes an `object` and converts it to a `AttributeValueAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeValueAssertion`.
     * @returns {AttributeValueAssertion}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeValueAssertion]: AttributeValueAssertion[_K];
            }
        >
    ): AttributeValueAssertion {
        return new AttributeValueAssertion(
            _o.attributeDesc,
            _o.assertionValue,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AttributeValueAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeValueAssertion */
/**
 * @summary The Leading Root Component Types of AttributeValueAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "attributeDesc",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assertionValue",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeValueAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeValueAssertion */
/**
 * @summary The Trailing Root Component Types of AttributeValueAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeValueAssertion */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeValueAssertion */
/**
 * @summary The Extension Addition Component Types of AttributeValueAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeValueAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeValueAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValueAssertion */
let _cached_decoder_for_AttributeValueAssertion: $.ASN1Decoder<
    AttributeValueAssertion
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValueAssertion */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeValueAssertion */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValueAssertion} The decoded data structure.
 */
export function _decode_AttributeValueAssertion(el: _Element) {
    if (!_cached_decoder_for_AttributeValueAssertion) {
        _cached_decoder_for_AttributeValueAssertion = function (
            el: _Element
        ): AttributeValueAssertion {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AttributeValueAssertion contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "attributeDesc";
            sequence[1].name = "assertionValue";
            let attributeDesc!: AttributeDescription;
            let assertionValue!: AssertionValue;
            attributeDesc = _decode_AttributeDescription(sequence[0]);
            assertionValue = _decode_AssertionValue(sequence[1]);
            return new AttributeValueAssertion(
                attributeDesc,
                assertionValue,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_AttributeValueAssertion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeValueAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValueAssertion */
let _cached_encoder_for_AttributeValueAssertion: $.ASN1Encoder<
    AttributeValueAssertion
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValueAssertion */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeValueAssertion */
/**
 * @summary Encodes a(n) AttributeValueAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueAssertion, encoded as an ASN.1 Element.
 */
export function _encode_AttributeValueAssertion(
    value: AttributeValueAssertion,
    elGetter: $.ASN1Encoder<AttributeValueAssertion>
) {
    if (!_cached_encoder_for_AttributeValueAssertion) {
        _cached_encoder_for_AttributeValueAssertion = function (
            value: AttributeValueAssertion,
            elGetter: $.ASN1Encoder<AttributeValueAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeDescription(
                                value.attributeDesc,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AssertionValue(
                                value.assertionValue,
                                $.BER
                            ),
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
    return _cached_encoder_for_AttributeValueAssertion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeValueAssertion */

/* eslint-enable */
