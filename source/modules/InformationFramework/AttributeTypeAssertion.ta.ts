/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ContextAssertion,
    _decode_ContextAssertion,
    _encode_ContextAssertion,
} from "../InformationFramework/ContextAssertion.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    ContextAssertion,
    _decode_ContextAssertion,
    _encode_ContextAssertion,
} from "../InformationFramework/ContextAssertion.ta";
export { SupportedAttributes } from "../InformationFramework/SupportedAttributes.osa";

/* START_OF_SYMBOL_DEFINITION AttributeTypeAssertion */
/**
 * @summary AttributeTypeAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeTypeAssertion ::= SEQUENCE {
 *   type              ATTRIBUTE.&id({SupportedAttributes}),
 *   assertedContexts  SEQUENCE SIZE (1..MAX) OF ContextAssertion OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeTypeAssertion {
    constructor(
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OBJECT_IDENTIFIER,
        /**
         * @summary `assertedContexts`.
         * @public
         * @readonly
         */
        readonly assertedContexts: OPTIONAL<ContextAssertion[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeTypeAssertion
     * @description
     *
     * This takes an `object` and converts it to a `AttributeTypeAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeTypeAssertion`.
     * @returns {AttributeTypeAssertion}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof AttributeTypeAssertion]: AttributeTypeAssertion[_K] }
        >
    ): AttributeTypeAssertion {
        return new AttributeTypeAssertion(
            _o.type_,
            _o.assertedContexts,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AttributeTypeAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeTypeAssertion */
/**
 * @summary The Leading Root Component Types of AttributeTypeAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeTypeAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "assertedContexts",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeTypeAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeTypeAssertion */
/**
 * @summary The Trailing Root Component Types of AttributeTypeAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeTypeAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeTypeAssertion */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeTypeAssertion */
/**
 * @summary The Extension Addition Component Types of AttributeTypeAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeTypeAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeTypeAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeTypeAssertion */
let _cached_decoder_for_AttributeTypeAssertion: $.ASN1Decoder<
    AttributeTypeAssertion
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeTypeAssertion */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeTypeAssertion */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeTypeAssertion} The decoded data structure.
 */
export function _decode_AttributeTypeAssertion(el: _Element) {
    if (!_cached_decoder_for_AttributeTypeAssertion) {
        _cached_decoder_for_AttributeTypeAssertion = function (
            el: _Element
        ): AttributeTypeAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let type_!: OBJECT_IDENTIFIER;
            let assertedContexts: OPTIONAL<ContextAssertion[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                type: (_el: _Element): void => {
                    type_ = $._decodeObjectIdentifier(_el);
                },
                assertedContexts: (_el: _Element): void => {
                    assertedContexts = $._decodeSequenceOf<ContextAssertion>(
                        () => _decode_ContextAssertion
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeTypeAssertion,
                _extension_additions_list_spec_for_AttributeTypeAssertion,
                _root_component_type_list_2_spec_for_AttributeTypeAssertion,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeTypeAssertion /* SEQUENCE_CONSTRUCTOR_CALL */(
                type_,
                assertedContexts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeTypeAssertion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeTypeAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeTypeAssertion */
let _cached_encoder_for_AttributeTypeAssertion: $.ASN1Encoder<
    AttributeTypeAssertion
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeTypeAssertion */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeTypeAssertion */
/**
 * @summary Encodes a(n) AttributeTypeAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeAssertion, encoded as an ASN.1 Element.
 */
export function _encode_AttributeTypeAssertion(
    value: AttributeTypeAssertion,
    elGetter: $.ASN1Encoder<AttributeTypeAssertion>
) {
    if (!_cached_encoder_for_AttributeTypeAssertion) {
        _cached_encoder_for_AttributeTypeAssertion = function (
            value: AttributeTypeAssertion,
            elGetter: $.ASN1Encoder<AttributeTypeAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.type_,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.assertedContexts ===
                            undefined
                                ? undefined
                                : $._encodeSequenceOf<ContextAssertion>(
                                      () => _encode_ContextAssertion,
                                      $.BER
                                  )(value.assertedContexts, $.BER),
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
    return _cached_encoder_for_AttributeTypeAssertion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeTypeAssertion */

/* eslint-enable */
