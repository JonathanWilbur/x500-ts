/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Context,
    _decode_Context,
    _encode_Context,
} from "../InformationFramework/Context.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    Context,
    _decode_Context,
    _encode_Context,
} from "../InformationFramework/Context.ta";
export { SupportedAttributes } from "../InformationFramework/SupportedAttributes.osa";

/* START_OF_SYMBOL_DEFINITION AttributeTypeValueContexts */
/**
 * @summary AttributeTypeValueContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeTypeValueContexts ::= SEQUENCE {
 *   type         ATTRIBUTE.&id({SupportedAttributes}),
 *   value        ATTRIBUTE.&Type({SupportedAttributes}{@type}),
 *   contextList  SET SIZE (1..MAX) OF Context OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeTypeValueContexts {
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
        readonly value: _Element,
        /**
         * @summary `contextList`.
         * @public
         * @readonly
         */
        readonly contextList: OPTIONAL<Context[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeTypeValueContexts
     * @description
     *
     * This takes an `object` and converts it to a `AttributeTypeValueContexts`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeTypeValueContexts`.
     * @returns {AttributeTypeValueContexts}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeTypeValueContexts]: AttributeTypeValueContexts[_K];
            }
        >
    ): AttributeTypeValueContexts {
        return new AttributeTypeValueContexts(
            _o.type_,
            _o.value,
            _o.contextList,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AttributeTypeValueContexts */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeTypeValueContexts */
/**
 * @summary The Leading Root Component Types of AttributeTypeValueContexts
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeTypeValueContexts: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "type",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("value", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "contextList",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeTypeValueContexts */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeTypeValueContexts */
/**
 * @summary The Trailing Root Component Types of AttributeTypeValueContexts
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeTypeValueContexts: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeTypeValueContexts */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeTypeValueContexts */
/**
 * @summary The Extension Addition Component Types of AttributeTypeValueContexts
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeTypeValueContexts: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeTypeValueContexts */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeTypeValueContexts */
let _cached_decoder_for_AttributeTypeValueContexts: $.ASN1Decoder<
    AttributeTypeValueContexts
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeTypeValueContexts */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeTypeValueContexts */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypeValueContexts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeTypeValueContexts} The decoded data structure.
 */
export function _decode_AttributeTypeValueContexts(el: _Element) {
    if (!_cached_decoder_for_AttributeTypeValueContexts) {
        _cached_decoder_for_AttributeTypeValueContexts = function (
            el: _Element
        ): AttributeTypeValueContexts {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let type_!: OBJECT_IDENTIFIER;
            let value!: _Element;
            let contextList: OPTIONAL<Context[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                type: (_el: _Element): void => {
                    type_ = $._decodeObjectIdentifier(_el);
                },
                value: (_el: _Element): void => {
                    value = $._decodeAny(_el);
                },
                contextList: (_el: _Element): void => {
                    contextList = $._decodeSetOf<Context>(
                        () => _decode_Context
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeTypeValueContexts,
                _extension_additions_list_spec_for_AttributeTypeValueContexts,
                _root_component_type_list_2_spec_for_AttributeTypeValueContexts,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeTypeValueContexts /* SEQUENCE_CONSTRUCTOR_CALL */(
                type_,
                value,
                contextList,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeTypeValueContexts(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeTypeValueContexts */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeTypeValueContexts */
let _cached_encoder_for_AttributeTypeValueContexts: $.ASN1Encoder<
    AttributeTypeValueContexts
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeTypeValueContexts */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeTypeValueContexts */
/**
 * @summary Encodes a(n) AttributeTypeValueContexts into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypeValueContexts, encoded as an ASN.1 Element.
 */
export function _encode_AttributeTypeValueContexts(
    value: AttributeTypeValueContexts,
    elGetter: $.ASN1Encoder<AttributeTypeValueContexts>
) {
    if (!_cached_encoder_for_AttributeTypeValueContexts) {
        _cached_encoder_for_AttributeTypeValueContexts = function (
            value: AttributeTypeValueContexts,
            elGetter: $.ASN1Encoder<AttributeTypeValueContexts>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.type_,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(value.value, $.BER),
                            /* IF_ABSENT  */ value.contextList === undefined
                                ? undefined
                                : $._encodeSetOf<Context>(
                                      () => _encode_Context,
                                      $.BER
                                  )(value.contextList, $.BER),
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
    return _cached_encoder_for_AttributeTypeValueContexts(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeTypeValueContexts */

/* eslint-enable */
