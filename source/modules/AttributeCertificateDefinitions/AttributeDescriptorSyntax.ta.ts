/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeDescription,
    _decode_AttributeDescription,
    _encode_AttributeDescription,
} from "../AttributeCertificateDefinitions/AttributeDescription.ta";
import {
    AttributeIdentifier,
    _decode_AttributeIdentifier,
    _encode_AttributeIdentifier,
} from "../AttributeCertificateDefinitions/AttributeIdentifier.ta";
import {
    AttributeName,
    _decode_AttributeName,
    _encode_AttributeName,
} from "../AttributeCertificateDefinitions/AttributeName.ta";
import {
    PrivilegePolicyIdentifier,
    _decode_PrivilegePolicyIdentifier,
    _encode_PrivilegePolicyIdentifier,
} from "../AttributeCertificateDefinitions/PrivilegePolicyIdentifier.ta";
export {
    AttributeDescription,
    _decode_AttributeDescription,
    _encode_AttributeDescription,
} from "../AttributeCertificateDefinitions/AttributeDescription.ta";
export {
    AttributeIdentifier,
    _decode_AttributeIdentifier,
    _encode_AttributeIdentifier,
} from "../AttributeCertificateDefinitions/AttributeIdentifier.ta";
export {
    AttributeName,
    _decode_AttributeName,
    _encode_AttributeName,
} from "../AttributeCertificateDefinitions/AttributeName.ta";
export {
    PrivilegePolicyIdentifier,
    _decode_PrivilegePolicyIdentifier,
    _encode_PrivilegePolicyIdentifier,
} from "../AttributeCertificateDefinitions/PrivilegePolicyIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION AttributeDescriptorSyntax */
/**
 * @summary AttributeDescriptorSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeDescriptorSyntax ::= SEQUENCE {
 *   identifier             AttributeIdentifier,
 *   attributeSyntax        OCTET STRING(SIZE (1..MAX)),
 *   name              [0]  AttributeName OPTIONAL,
 *   description       [1]  AttributeDescription OPTIONAL,
 *   dominationRule         PrivilegePolicyIdentifier,
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeDescriptorSyntax {
    constructor(
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: AttributeIdentifier,
        /**
         * @summary `attributeSyntax`.
         * @public
         * @readonly
         */
        readonly attributeSyntax: OCTET_STRING,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<AttributeName>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<AttributeDescription>,
        /**
         * @summary `dominationRule`.
         * @public
         * @readonly
         */
        readonly dominationRule: PrivilegePolicyIdentifier,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeDescriptorSyntax
     * @description
     *
     * This takes an `object` and converts it to a `AttributeDescriptorSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeDescriptorSyntax`.
     * @returns {AttributeDescriptorSyntax}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeDescriptorSyntax]: AttributeDescriptorSyntax[_K];
            }
        >
    ): AttributeDescriptorSyntax {
        return new AttributeDescriptorSyntax(
            _o.identifier,
            _o.attributeSyntax,
            _o.name,
            _o.description,
            _o.dominationRule,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION AttributeDescriptorSyntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeDescriptorSyntax */
/**
 * @summary The Leading Root Component Types of AttributeDescriptorSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeDescriptorSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "identifier",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeSyntax",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "description",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "dominationRule",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AttributeDescriptorSyntax */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeDescriptorSyntax */
/**
 * @summary The Trailing Root Component Types of AttributeDescriptorSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeDescriptorSyntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AttributeDescriptorSyntax */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeDescriptorSyntax */
/**
 * @summary The Extension Addition Component Types of AttributeDescriptorSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeDescriptorSyntax: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AttributeDescriptorSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeDescriptorSyntax */
let _cached_decoder_for_AttributeDescriptorSyntax: $.ASN1Decoder<AttributeDescriptorSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeDescriptorSyntax */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeDescriptorSyntax */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeDescriptorSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeDescriptorSyntax} The decoded data structure.
 */
export function _decode_AttributeDescriptorSyntax(el: _Element) {
    if (!_cached_decoder_for_AttributeDescriptorSyntax) {
        _cached_decoder_for_AttributeDescriptorSyntax = function (
            el: _Element
        ): AttributeDescriptorSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let identifier!: AttributeIdentifier;
            let attributeSyntax!: OCTET_STRING;
            let name: OPTIONAL<AttributeName>;
            let description: OPTIONAL<AttributeDescription>;
            let dominationRule!: PrivilegePolicyIdentifier;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                identifier: (_el: _Element): void => {
                    identifier = _decode_AttributeIdentifier(_el);
                },
                attributeSyntax: (_el: _Element): void => {
                    attributeSyntax = $._decodeOctetString(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decode_implicit<AttributeName>(
                        () => _decode_AttributeName
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = $._decode_implicit<AttributeDescription>(
                        () => _decode_AttributeDescription
                    )(_el);
                },
                dominationRule: (_el: _Element): void => {
                    dominationRule = _decode_PrivilegePolicyIdentifier(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeDescriptorSyntax,
                _extension_additions_list_spec_for_AttributeDescriptorSyntax,
                _root_component_type_list_2_spec_for_AttributeDescriptorSyntax,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeDescriptorSyntax(
                /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
                attributeSyntax,
                name,
                description,
                dominationRule,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeDescriptorSyntax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeDescriptorSyntax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeDescriptorSyntax */
let _cached_encoder_for_AttributeDescriptorSyntax: $.ASN1Encoder<AttributeDescriptorSyntax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeDescriptorSyntax */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeDescriptorSyntax */
/**
 * @summary Encodes a(n) AttributeDescriptorSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeDescriptorSyntax, encoded as an ASN.1 Element.
 */
export function _encode_AttributeDescriptorSyntax(
    value: AttributeDescriptorSyntax,
    elGetter: $.ASN1Encoder<AttributeDescriptorSyntax>
) {
    if (!_cached_encoder_for_AttributeDescriptorSyntax) {
        _cached_encoder_for_AttributeDescriptorSyntax = function (
            value: AttributeDescriptorSyntax,
            elGetter: $.ASN1Encoder<AttributeDescriptorSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeIdentifier(
                                value.identifier,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeOctetString(
                                value.attributeSyntax,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_AttributeName,
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_AttributeDescription,
                                      $.BER
                                  )(value.description, $.BER),
                            /* REQUIRED   */ _encode_PrivilegePolicyIdentifier(
                                value.dominationRule,
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
    return _cached_encoder_for_AttributeDescriptorSyntax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeDescriptorSyntax */

/* eslint-enable */
