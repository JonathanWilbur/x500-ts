/**
 * @module ExtensionAttributes
 * @summary The ASN.1 module `ExtensionAttributes`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.extensionAttributes.9
 * IRI: undefined
 * EXTENSIBLE: false
 * ENCODINGREF: undefined
 * FILE: undefined
 *
 * This file was compiled by Wildboar Software's ASN.1 Compiler.
 *
 * @see {@link https://wildboarsoftware.com|Wildboar Software's Website}
 * /


/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    acceptableCertPolicies,
    acceptablePrivilegePolicies,
    allowedAttributeAssignments,
    attributeDescriptor,
    attributeMappings,
    authorityAttributeIdentifier,
    basicAttConstraints,
    delegatedNameConstraints,
    groupAC,
    holderNameConstraints,
    indirectIssuer,
    issuedOnBehalfOf,
    noAssertion,
    noRevAvail,
    roleSpecCertIdentifier,
    singleUse,
    sOAIdentifier,
    targetingInformation,
    timeSpecification,
    userNotice,
} from "./AttributeCertificateDefinitions";
import {
    aAissuingDistributionPoint,
    altSignatureAlgorithm,
    altSignatureValue,
    authorityKeyIdentifier,
    authorizationValidation,
    baseUpdateTime,
    basicConstraints,
    certificateIssuer,
    certificatePolicies,
    cRLDistributionPoints,
    cRLNumber,
    cRLStreamIdentifier,
    deltaCRLIndicator,
    deltaInfo,
    expiredCertsOnCRL,
    extKeyUsage,
    freshestCRL,
    holdInstructionCode,
    invalidityDate,
    issuerAltName,
    issuingDistributionPoint,
    keyUsage,
    orderedList,
    policyConstraints,
    policyMappings,
    privateKeyUsagePeriod,
    protRestrict,
    reasonCode,
    revokedGroups,
    statusReferrals,
    subjectAltName,
    subjectAltPublicKeyInfo,
    subjectDirectoryAttributes,
    toBeRevoked,
} from "./CertificateExtensions";
import * as InformationFramework from "./InformationFramework";
import { ATTRIBUTE } from "./InformationFramework";
import { id_ce } from "./UsefulDefinitions";
export {
    acceptableCertPolicies,
    acceptablePrivilegePolicies,
    allowedAttributeAssignments,
    attributeDescriptor,
    attributeMappings,
    authorityAttributeIdentifier,
    basicAttConstraints,
    delegatedNameConstraints,
    groupAC,
    holderNameConstraints,
    issuedOnBehalfOf,
    noAssertion,
    noRevAvail,
    roleSpecCertIdentifier,
    singleUse,
    sOAIdentifier,
    targetingInformation,
    timeSpecification,
    userNotice,
} from "./AttributeCertificateDefinitions";
export { EXTENSION } from "./AuthenticationFramework";
export {
    aAissuingDistributionPoint,
    altSignatureAlgorithm,
    altSignatureValue,
    authorityKeyIdentifier,
    authorizationValidation,
    baseUpdateTime,
    basicConstraints,
    certificateIssuer,
    certificatePolicies,
    cRLDistributionPoints,
    cRLNumber,
    cRLStreamIdentifier,
    deltaCRLIndicator,
    deltaInfo,
    expiredCertsOnCRL,
    extKeyUsage,
    freshestCRL,
    holdInstructionCode,
    invalidityDate,
    issuerAltName,
    issuingDistributionPoint,
    keyUsage,
    nameConstraints,
    orderedList,
    policyConstraints,
    policyMappings,
    privateKeyUsagePeriod,
    protRestrict,
    reasonCode,
    revokedGroups,
    statusReferrals,
    subjectAltName,
    subjectAltPublicKeyInfo,
    subjectDirectoryAttributes,
    subjectKeyIdentifier,
    toBeRevoked,
} from "./CertificateExtensions";
export { ATTRIBUTE, SYNTAX_NAME } from "./InformationFramework";
export { id_ce } from "./UsefulDefinitions";

/**
 * @summary ExtensionAttribute_value_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionAttribute-value-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ExtensionAttribute_value_Item {
    constructor(
        /**
         * @summary `mandatory`.
         * @public
         * @readonly
         */
        readonly mandatory: OPTIONAL<BOOLEAN>,
        /**
         * @summary `critical`.
         * @public
         * @readonly
         */
        readonly critical: OPTIONAL<BOOLEAN>,
        /**
         * @summary `ext`.
         * @public
         * @readonly
         */
        readonly ext: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ExtensionAttribute_value_Item
     * @description
     *
     * This takes an `object` and converts it to a `ExtensionAttribute_value_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtensionAttribute_value_Item`.
     * @returns {ExtensionAttribute_value_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ExtensionAttribute_value_Item]: ExtensionAttribute_value_Item[_K];
            }
        >
    ): ExtensionAttribute_value_Item {
        return new ExtensionAttribute_value_Item(
            _o.mandatory,
            _o.critical,
            _o.ext,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `mandatory`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_mandatory() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `critical`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_critical() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of ExtensionAttribute_value_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExtensionAttribute_value_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mandatory",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "critical",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "ext",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ExtensionAttribute_value_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExtensionAttribute_value_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ExtensionAttribute_value_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExtensionAttribute_value_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_ExtensionAttribute_value_Item: $.ASN1Decoder<
    ExtensionAttribute_value_Item
> | null = null;
let _cached_encoder_for_ExtensionAttribute_value_Item: $.ASN1Encoder<
    ExtensionAttribute_value_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionAttribute_value_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtensionAttribute_value_Item} The decoded data structure.
 */
export function _decode_ExtensionAttribute_value_Item(el: _Element) {
    if (!_cached_decoder_for_ExtensionAttribute_value_Item) {
        _cached_decoder_for_ExtensionAttribute_value_Item = function (
            el: _Element
        ): ExtensionAttribute_value_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mandatory: OPTIONAL<BOOLEAN> =
                ExtensionAttribute_value_Item._default_value_for_mandatory;
            let critical: OPTIONAL<BOOLEAN> =
                ExtensionAttribute_value_Item._default_value_for_critical;
            let ext!: _Element;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                mandatory: (_el: _Element): void => {
                    mandatory = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                critical: (_el: _Element): void => {
                    critical = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                ext: (_el: _Element): void => {
                    ext = $._decode_explicit<_Element>(() => $._decodeAny)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ExtensionAttribute_value_Item,
                _extension_additions_list_spec_for_ExtensionAttribute_value_Item,
                _root_component_type_list_2_spec_for_ExtensionAttribute_value_Item,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ExtensionAttribute_value_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ mandatory,
                critical,
                ext,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ExtensionAttribute_value_Item(el);
}
/**
 * @summary Encodes a(n) ExtensionAttribute_value_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionAttribute_value_Item, encoded as an ASN.1 Element.
 */
export function _encode_ExtensionAttribute_value_Item(
    value: ExtensionAttribute_value_Item,
    elGetter: $.ASN1Encoder<ExtensionAttribute_value_Item>
) {
    if (!_cached_encoder_for_ExtensionAttribute_value_Item) {
        _cached_encoder_for_ExtensionAttribute_value_Item = function (
            value: ExtensionAttribute_value_Item,
            elGetter: $.ASN1Encoder<ExtensionAttribute_value_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.mandatory === undefined ||
                            $.deepEq(
                                value.mandatory,
                                ExtensionAttribute_value_Item._default_value_for_mandatory
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.mandatory, $.BER),
                            /* IF_DEFAULT */ value.critical === undefined ||
                            $.deepEq(
                                value.critical,
                                ExtensionAttribute_value_Item._default_value_for_critical
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.critical, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => $._encodeAny,
                                $.BER
                            )(value.ext, $.BER),
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
    return _cached_encoder_for_ExtensionAttribute_value_Item(value, elGetter);
}

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
/**
 * @summary The Trailing Root Component Types of ExtensionAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExtensionAttribute: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ExtensionAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExtensionAttribute: $.ComponentSpec[] = [];
let _cached_decoder_for_ExtensionAttribute: $.ASN1Decoder<
    ExtensionAttribute
> | null = null;
let _cached_encoder_for_ExtensionAttribute: $.ASN1Encoder<
    ExtensionAttribute
> | null = null;
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

/**
 * @summary extensionSyntax_Type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extensionSyntax-Type ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class extensionSyntax_Type {
    constructor(
        /**
         * @summary `mandatory`.
         * @public
         * @readonly
         */
        readonly mandatory: OPTIONAL<BOOLEAN>,
        /**
         * @summary `critical`.
         * @public
         * @readonly
         */
        readonly critical: OPTIONAL<BOOLEAN>,
        /**
         * @summary `ext`.
         * @public
         * @readonly
         */
        readonly ext: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a extensionSyntax_Type
     * @description
     *
     * This takes an `object` and converts it to a `extensionSyntax_Type`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `extensionSyntax_Type`.
     * @returns {extensionSyntax_Type}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof extensionSyntax_Type]: extensionSyntax_Type[_K] }
        >
    ): extensionSyntax_Type {
        return new extensionSyntax_Type(
            _o.mandatory,
            _o.critical,
            _o.ext,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `mandatory`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_mandatory() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `critical`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_critical() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of extensionSyntax_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_extensionSyntax_Type: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mandatory",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "critical",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "ext",
        false,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of extensionSyntax_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_extensionSyntax_Type: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of extensionSyntax_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_extensionSyntax_Type: $.ComponentSpec[] = [];
let _cached_decoder_for_extensionSyntax_Type: $.ASN1Decoder<
    extensionSyntax_Type
> | null = null;
let _cached_encoder_for_extensionSyntax_Type: $.ASN1Encoder<
    extensionSyntax_Type
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) extensionSyntax_Type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {extensionSyntax_Type} The decoded data structure.
 */
export function _decode_extensionSyntax_Type(el: _Element) {
    if (!_cached_decoder_for_extensionSyntax_Type) {
        _cached_decoder_for_extensionSyntax_Type = function (
            el: _Element
        ): extensionSyntax_Type {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mandatory: OPTIONAL<BOOLEAN> =
                extensionSyntax_Type._default_value_for_mandatory;
            let critical: OPTIONAL<BOOLEAN> =
                extensionSyntax_Type._default_value_for_critical;
            let ext!: _Element;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                mandatory: (_el: _Element): void => {
                    mandatory = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                critical: (_el: _Element): void => {
                    critical = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                ext: (_el: _Element): void => {
                    ext = $._decode_explicit(() => $._decodeAny)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_extensionSyntax_Type,
                _extension_additions_list_spec_for_extensionSyntax_Type,
                _root_component_type_list_2_spec_for_extensionSyntax_Type,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new extensionSyntax_Type(
                /* SEQUENCE_CONSTRUCTOR_CALL */ mandatory,
                critical,
                ext,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_extensionSyntax_Type(el);
}
/**
 * @summary Encodes a(n) extensionSyntax_Type into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The extensionSyntax_Type, encoded as an ASN.1 Element.
 */
export function _encode_extensionSyntax_Type(
    value: extensionSyntax_Type,
    elGetter: $.ASN1Encoder<extensionSyntax_Type>
) {
    if (!_cached_encoder_for_extensionSyntax_Type) {
        _cached_encoder_for_extensionSyntax_Type = function (
            value: extensionSyntax_Type,
            elGetter: $.ASN1Encoder<extensionSyntax_Type>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.mandatory === undefined ||
                            $.deepEq(
                                value.mandatory,
                                extensionSyntax_Type._default_value_for_mandatory
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.mandatory, $.BER),
                            /* IF_DEFAULT */ value.critical === undefined ||
                            $.deepEq(
                                value.critical,
                                extensionSyntax_Type._default_value_for_critical
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.critical, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => $._encodeAny,
                                $.BER
                            )(value.ext, $.BER),
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
    return _cached_encoder_for_extensionSyntax_Type(value, elGetter);
}

// FIXME: PARAMETERIZATION_UNSUPPORTED extensionSyntax

/**
 * @summary id_asx_authorityKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-authorityKeyIdentifier              OBJECT IDENTIFIER ::= {id-ce 35 2}
 * ```
 *
 * @constant
 */
export const id_asx_authorityKeyIdentifier: OBJECT_IDENTIFIER = new _OID(
    [35, 2],
    id_ce
);

/**
 * @summary id_ce_a_authorityKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-authorityKeyIdentifier             OBJECT IDENTIFIER ::= {id-ce 35 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_authorityKeyIdentifier: OBJECT_IDENTIFIER = new _OID(
    [35, 1],
    id_ce
);

/**
 * @summary a_authorityKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-authorityKeyIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX       authorityKeyIdentifier.&ExtnType
 *   LDAP-SYNTAX       id-asx-authorityKeyIdentifier
 *   LDAP-NAME         {"Authority Key Identifier"}
 *   ID                id-ce-a-authorityKeyIdentifier }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_authorityKeyIdentifier: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": authorityKeyIdentifier.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": authorityKeyIdentifier.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_authorityKeyIdentifier /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_authorityKeyIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_keyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-keyUsage                            OBJECT IDENTIFIER ::= {id-ce 15 2}
 * ```
 *
 * @constant
 */
export const id_asx_keyUsage: OBJECT_IDENTIFIER = new _OID([15, 2], id_ce);

/**
 * @summary id_ce_a_keyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-keyUsage                           OBJECT IDENTIFIER ::= {id-ce 15 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_keyUsage: OBJECT_IDENTIFIER = new _OID([15, 1], id_ce);

/**
 * @summary a_keyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-keyUsage ATTRIBUTE ::= {
 *   WITH SYNTAX       keyUsage.&ExtnType
 *   LDAP-SYNTAX       id-asx-keyUsage
 *   LDAP-NAME         {"Key Usage"}
 *   ID                id-ce-a-keyUsage }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_keyUsage: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": keyUsage.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": keyUsage.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_keyUsage /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_keyUsage /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_extKeyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-extKeyUsage                         OBJECT IDENTIFIER ::= {id-ce 37 2}
 * ```
 *
 * @constant
 */
export const id_asx_extKeyUsage: OBJECT_IDENTIFIER = new _OID([37, 2], id_ce);

/**
 * @summary id_ce_a_extKeyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-extKeyUsage                        OBJECT IDENTIFIER ::= {id-ce 37 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_extKeyUsage: OBJECT_IDENTIFIER = new _OID([37, 1], id_ce);

/**
 * @summary a_extKeyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-extKeyUsage ATTRIBUTE ::= {
 *   WITH SYNTAX       extKeyUsage.&ExtnType
 *   LDAP-SYNTAX       id-asx-extKeyUsage
 *   LDAP-NAME         {"Extended Key Usage"}
 *   ID                id-ce-a-extKeyUsage }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_extKeyUsage: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": extKeyUsage.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": extKeyUsage.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_extKeyUsage /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_extKeyUsage /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_privateKeyUsagePeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-privateKeyUsagePeriod               OBJECT IDENTIFIER ::= {id-ce 16 2}
 * ```
 *
 * @constant
 */
export const id_asx_privateKeyUsagePeriod: OBJECT_IDENTIFIER = new _OID(
    [16, 2],
    id_ce
);

/**
 * @summary id_ce_a_privateKeyUsagePeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-privateKeyUsagePeriod              OBJECT IDENTIFIER ::= {id-ce 16 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_privateKeyUsagePeriod: OBJECT_IDENTIFIER = new _OID(
    [16, 1],
    id_ce
);

/**
 * @summary a_privateKeyUsagePeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-privateKeyUsagePeriod ATTRIBUTE ::= {
 *   WITH SYNTAX       privateKeyUsagePeriod.&ExtnType
 *   LDAP-SYNTAX       id-asx-privateKeyUsagePeriod
 *   LDAP-NAME         {"Private Key Usage Period"}
 *   ID                id-ce-a-privateKeyUsagePeriod }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_privateKeyUsagePeriod: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": privateKeyUsagePeriod.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": privateKeyUsagePeriod.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_privateKeyUsagePeriod /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_privateKeyUsagePeriod /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_certificatePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-certificatePolicies                 OBJECT IDENTIFIER ::= {id-ce 32 2}
 * ```
 *
 * @constant
 */
export const id_asx_certificatePolicies: OBJECT_IDENTIFIER = new _OID(
    [32, 2],
    id_ce
);

/**
 * @summary id_ce_a_certificatePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-certificatePolicies                OBJECT IDENTIFIER ::= {id-ce 32 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_certificatePolicies: OBJECT_IDENTIFIER = new _OID(
    [32, 1],
    id_ce
);

/**
 * @summary a_certificatePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-certificatePolicies ATTRIBUTE ::= {
 *   WITH SYNTAX       certificatePolicies.&ExtnType
 *   LDAP-SYNTAX       id-asx-certificatePolicies
 *   LDAP-NAME         {"Certificate Policies"}
 *   ID                id-ce-a-certificatePolicies }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_certificatePolicies: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": certificatePolicies.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": certificatePolicies.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_certificatePolicies /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_certificatePolicies /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_policyMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-policyMappings                      OBJECT IDENTIFIER ::= {id-ce 33 2}
 * ```
 *
 * @constant
 */
export const id_asx_policyMappings: OBJECT_IDENTIFIER = new _OID(
    [33, 2],
    id_ce
);

/**
 * @summary id_ce_a_policyMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-policyMappings                     OBJECT IDENTIFIER ::= {id-ce 33 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_policyMappings: OBJECT_IDENTIFIER = new _OID(
    [33, 1],
    id_ce
);

/**
 * @summary a_policyMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-policyMappings ATTRIBUTE ::= {
 *   WITH SYNTAX       policyMappings.&ExtnType
 *   LDAP-SYNTAX       id-asx-policyMappings
 *   LDAP-NAME         {"Policy Mappings"}
 *   ID                id-ce-a-policyMappings }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_policyMappings: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": policyMappings.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": policyMappings.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_policyMappings /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_policyMappings /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_authorizationValidation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-authorizationValidation             OBJECT IDENTIFIER ::= {id-ce 70 2}
 * ```
 *
 * @constant
 */
export const id_asx_authorizationValidation: OBJECT_IDENTIFIER = new _OID(
    [70, 2],
    id_ce
);

/**
 * @summary id_ce_a_authorizationValidation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-authorizationValidation            OBJECT IDENTIFIER ::= {id-ce 70 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_authorizationValidation: OBJECT_IDENTIFIER = new _OID(
    [70, 1],
    id_ce
);

/**
 * @summary a_authorizationValidation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-authorizationValidation ATTRIBUTE ::= {
 *   WITH SYNTAX       authorizationValidation.&ExtnType
 *   LDAP-SYNTAX       id-asx-authorizationValidation
 *   LDAP-NAME         {"Authorization Validation"}
 *   ID                id-ce-a-authorizationValidation }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_authorizationValidation: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": authorizationValidation.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": authorizationValidation.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_authorizationValidation /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_authorizationValidation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_subjectAltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-subjectAltName                      OBJECT IDENTIFIER ::= {id-ce 17 2}
 * ```
 *
 * @constant
 */
export const id_asx_subjectAltName: OBJECT_IDENTIFIER = new _OID(
    [17, 2],
    id_ce
);

/**
 * @summary id_ce_a_subjectAltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-subjectAltName                     OBJECT IDENTIFIER ::= {id-ce 17 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_subjectAltName: OBJECT_IDENTIFIER = new _OID(
    [17, 1],
    id_ce
);

/**
 * @summary a_subjectAltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-subjectAltName ATTRIBUTE ::= {
 *   WITH SYNTAX       subjectAltName.&ExtnType
 *   LDAP-SYNTAX       id-asx-subjectAltName
 *   LDAP-NAME         {"Subject Alternative Name"}
 *   ID                id-ce-a-subjectAltName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_subjectAltName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": subjectAltName.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": subjectAltName.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_subjectAltName /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_subjectAltName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_issuerAltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-issuerAltName                       OBJECT IDENTIFIER ::= {id-ce 18 2}
 * ```
 *
 * @constant
 */
export const id_asx_issuerAltName: OBJECT_IDENTIFIER = new _OID([18, 2], id_ce);

/**
 * @summary id_ce_a_issuerAltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-issuerAltName                      OBJECT IDENTIFIER ::= {id-ce 18 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_issuerAltName: OBJECT_IDENTIFIER = new _OID(
    [18, 1],
    id_ce
);

/**
 * @summary a_issuerAltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-issuerAltName ATTRIBUTE ::= {
 *   WITH SYNTAX       issuerAltName.&ExtnType
 *   LDAP-SYNTAX       id-asx-issuerAltName
 *   LDAP-NAME         {"Issuer Alternative Name"}
 *   ID                id-ce-a-issuerAltName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_issuerAltName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": issuerAltName.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": issuerAltName.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_issuerAltName /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_issuerAltName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_subjectDirectoryAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-subjectDirectoryAttributes          OBJECT IDENTIFIER ::= {id-ce 9 2}
 * ```
 *
 * @constant
 */
export const id_asx_subjectDirectoryAttributes: OBJECT_IDENTIFIER = new _OID(
    [9, 2],
    id_ce
);

/**
 * @summary id_ce_a_subjectDirectoryAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-subjectDirectoryAttributes         OBJECT IDENTIFIER ::= {id-ce 9 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_subjectDirectoryAttributes: OBJECT_IDENTIFIER = new _OID(
    [9, 1],
    id_ce
);

/**
 * @summary a_subjectDirectoryAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-subjectDirectoryAttributes ATTRIBUTE ::= {
 *   WITH SYNTAX       subjectDirectoryAttributes.&ExtnType
 *   LDAP-SYNTAX       id-asx-subjectDirectoryAttributes
 *   LDAP-NAME         {"Subject Directory Attributes"}
 *   ID                id-ce-a-subjectDirectoryAttributes }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_subjectDirectoryAttributes: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": subjectDirectoryAttributes.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": subjectDirectoryAttributes.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_subjectDirectoryAttributes /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_subjectDirectoryAttributes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_basicConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-basicConstraints                    OBJECT IDENTIFIER ::= {id-ce 19 2}
 * ```
 *
 * @constant
 */
export const id_asx_basicConstraints: OBJECT_IDENTIFIER = new _OID(
    [19, 2],
    id_ce
);

/**
 * @summary id_ce_a_basicConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-basicConstraints                   OBJECT IDENTIFIER ::= {id-ce 19 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_basicConstraints: OBJECT_IDENTIFIER = new _OID(
    [19, 1],
    id_ce
);

/**
 * @summary a_basicConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-basicConstraints ATTRIBUTE ::= {
 *   WITH SYNTAX       basicConstraints.&ExtnType
 *   LDAP-SYNTAX       id-asx-basicConstraints
 *   LDAP-NAME         {"Basic Constraints"}
 *   ID                id-ce-a-basicConstraints }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_basicConstraints: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": basicConstraints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": basicConstraints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_basicConstraints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_basicConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_nameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-nameConstraints                     OBJECT IDENTIFIER ::= {id-ce 30 2}
 * ```
 *
 * @constant
 */
export const id_asx_nameConstraints: OBJECT_IDENTIFIER = new _OID(
    [30, 2],
    id_ce
);

/**
 * @summary id_ce_a_nameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-nameConstraints                    OBJECT IDENTIFIER ::= {id-ce 30 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_nameConstraints: OBJECT_IDENTIFIER = new _OID(
    [30, 1],
    id_ce
);

/**
 * @summary a_nameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-nameConstraints ATTRIBUTE ::= {
 *   WITH SYNTAX       policyConstraints.&ExtnType
 *   LDAP-SYNTAX       id-asx-nameConstraints
 *   LDAP-NAME         {"Name Constraints"}
 *   ID                id-ce-a-nameConstraints }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_nameConstraints: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": policyConstraints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": policyConstraints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_nameConstraints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_nameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_policyConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-policyConstraints                   OBJECT IDENTIFIER ::= {id-ce 36 2}
 * ```
 *
 * @constant
 */
export const id_asx_policyConstraints: OBJECT_IDENTIFIER = new _OID(
    [36, 2],
    id_ce
);

/**
 * @summary id_ce_a_policyConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-policyConstraints                  OBJECT IDENTIFIER ::= {id-ce 36 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_policyConstraints: OBJECT_IDENTIFIER = new _OID(
    [36, 1],
    id_ce
);

/**
 * @summary a_policyConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-policyConstraints ATTRIBUTE ::= {
 *   WITH SYNTAX       policyConstraints.&ExtnType
 *   LDAP-SYNTAX       id-asx-policyConstraints
 *   LDAP-NAME         {"Policy Constraints"}
 *   ID                id-ce-a-policyConstraints }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_policyConstraints: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": policyConstraints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": policyConstraints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_policyConstraints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_policyConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_cRLNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-cRLNumber                           OBJECT IDENTIFIER ::= {id-ce 20 2}
 * ```
 *
 * @constant
 */
export const id_asx_cRLNumber: OBJECT_IDENTIFIER = new _OID([20, 2], id_ce);

/**
 * @summary id_ce_a_cRLNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-cRLNumber                          OBJECT IDENTIFIER ::= {id-ce 20 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_cRLNumber: OBJECT_IDENTIFIER = new _OID([20, 1], id_ce);

/**
 * @summary a_cRLNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-cRLNumber ATTRIBUTE ::= {
 *   WITH SYNTAX       cRLNumber.&ExtnType
 *   LDAP-SYNTAX       id-asx-cRLNumber
 *   LDAP-NAME         {"CRL Number"}
 *   ID                id-ce-a-cRLNumber}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_cRLNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": cRLNumber.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": cRLNumber.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_cRLNumber /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_cRLNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_statusReferrals
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-statusReferrals                     OBJECT IDENTIFIER ::= {id-ce 45 2}
 * ```
 *
 * @constant
 */
export const id_asx_statusReferrals: OBJECT_IDENTIFIER = new _OID(
    [45, 2],
    id_ce
);

/**
 * @summary id_ce_a_statusReferrals
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-statusReferrals                    OBJECT IDENTIFIER ::= {id-ce 45 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_statusReferrals: OBJECT_IDENTIFIER = new _OID(
    [45, 1],
    id_ce
);

/**
 * @summary a_statusReferrals
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-statusReferrals ATTRIBUTE ::= {
 *   WITH SYNTAX       statusReferrals.&ExtnType
 *   LDAP-SYNTAX       id-asx-statusReferrals
 *   LDAP-NAME         {"Status Referrals"}
 *   ID                id-ce-a-statusReferrals}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_statusReferrals: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": statusReferrals.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": statusReferrals.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_statusReferrals /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_statusReferrals /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_cRLStreamIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-cRLStreamIdentifier                 OBJECT IDENTIFIER ::= {id-ce 40 2}
 * ```
 *
 * @constant
 */
export const id_asx_cRLStreamIdentifier: OBJECT_IDENTIFIER = new _OID(
    [40, 2],
    id_ce
);

/**
 * @summary id_ce_a_cRLStreamIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-cRLStreamIdentifier                OBJECT IDENTIFIER ::= {id-ce 40 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_cRLStreamIdentifier: OBJECT_IDENTIFIER = new _OID(
    [40, 1],
    id_ce
);

/**
 * @summary a_cRLStreamIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-cRLStreamIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX       cRLStreamIdentifier.&ExtnType
 *   LDAP-SYNTAX       id-asx-cRLStreamIdentifier
 *   LDAP-NAME         {"CRL stream identifier"}
 *   ID                id-ce-a-cRLStreamIdentifier}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_cRLStreamIdentifier: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": cRLStreamIdentifier.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": cRLStreamIdentifier.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_cRLStreamIdentifier /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_cRLStreamIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_orderedList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-orderedList                         OBJECT IDENTIFIER ::= {id-ce 47 2}
 * ```
 *
 * @constant
 */
export const id_asx_orderedList: OBJECT_IDENTIFIER = new _OID([47, 2], id_ce);

/**
 * @summary id_ce_a_orderedList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-orderedList                        OBJECT IDENTIFIER ::= {id-ce 47 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_orderedList: OBJECT_IDENTIFIER = new _OID([47, 1], id_ce);

/**
 * @summary a_orderedList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-orderedList ATTRIBUTE ::= {
 *   WITH SYNTAX       orderedList.&ExtnType
 *   LDAP-SYNTAX       id-asx-orderedList
 *   LDAP-NAME         {"Ordered list"}
 *   ID                id-ce-a-orderedList}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_orderedList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": orderedList.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": orderedList.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_orderedList /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_orderedList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_deltaInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-deltaInfo                           OBJECT IDENTIFIER ::= {id-ce 53 2}
 * ```
 *
 * @constant
 */
export const id_asx_deltaInfo: OBJECT_IDENTIFIER = new _OID([53, 2], id_ce);

/**
 * @summary id_ce_a_deltaInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-deltaInfo                          OBJECT IDENTIFIER ::= {id-ce 53 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_deltaInfo: OBJECT_IDENTIFIER = new _OID([53, 1], id_ce);

/**
 * @summary a_deltaInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-deltaInfo ATTRIBUTE ::= {
 *   WITH SYNTAX       deltaInfo.&ExtnType
 *   LDAP-SYNTAX       id-asx-deltaInfo
 *   LDAP-NAME         {"Delta information"}
 *   ID                id-ce-a-deltaInfo}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_deltaInfo: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": deltaInfo.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": deltaInfo.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_deltaInfo /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_deltaInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_toBeRevoked
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-toBeRevoked                         OBJECT IDENTIFIER ::= {id-ce 58 2}
 * ```
 *
 * @constant
 */
export const id_asx_toBeRevoked: OBJECT_IDENTIFIER = new _OID([58, 2], id_ce);

/**
 * @summary id_ce_a_toBeRevoked
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-toBeRevoked                        OBJECT IDENTIFIER ::= {id-ce 58 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_toBeRevoked: OBJECT_IDENTIFIER = new _OID([58, 1], id_ce);

/**
 * @summary a_toBeRevoked
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-toBeRevoked ATTRIBUTE ::= {
 *   WITH SYNTAX       toBeRevoked.&ExtnType
 *   LDAP-SYNTAX       id-asx-toBeRevoked
 *   LDAP-NAME         {"To be revoked"}
 *   ID                id-ce-a-toBeRevoked}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_toBeRevoked: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": toBeRevoked.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": toBeRevoked.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_toBeRevoked /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_toBeRevoked /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_revokedGroups
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-revokedGroups                       OBJECT IDENTIFIER ::= {id-ce 59 2}
 * ```
 *
 * @constant
 */
export const id_asx_revokedGroups: OBJECT_IDENTIFIER = new _OID([59, 2], id_ce);

/**
 * @summary id_ce_a_revokedGroups
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-revokedGroups                      OBJECT IDENTIFIER ::= {id-ce 59 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_revokedGroups: OBJECT_IDENTIFIER = new _OID(
    [59, 1],
    id_ce
);

/**
 * @summary a_revokedGroups
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-revokedGroups ATTRIBUTE ::= {
 *   WITH SYNTAX       revokedGroups.&ExtnType
 *   LDAP-SYNTAX       id-asx-revokedGroups
 *   LDAP-NAME         {"Revoked group of certificates"}
 *   ID                id-ce-a-revokedGroups}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_revokedGroups: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": revokedGroups.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": revokedGroups.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_revokedGroups /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_revokedGroups /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_expiredCertsOnCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-expiredCertsOnCRL                   OBJECT IDENTIFIER ::= {id-ce 60 2}
 * ```
 *
 * @constant
 */
export const id_asx_expiredCertsOnCRL: OBJECT_IDENTIFIER = new _OID(
    [60, 2],
    id_ce
);

/**
 * @summary id_ce_a_expiredCertsOnCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-expiredCertsOnCRL                  OBJECT IDENTIFIER ::= {id-ce 60 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_expiredCertsOnCRL: OBJECT_IDENTIFIER = new _OID(
    [60, 1],
    id_ce
);

/**
 * @summary a_expiredCertsOnCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-expiredCertsOnCRL ATTRIBUTE ::= {
 *   WITH SYNTAX       expiredCertsOnCRL.&ExtnType
 *   LDAP-SYNTAX       id-asx-expiredCertsOnCRL
 *   LDAP-NAME         {"Expired certificates on CRL"}
 *   ID                id-ce-a-expiredCertsOnCRL}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_expiredCertsOnCRL: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": expiredCertsOnCRL.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": expiredCertsOnCRL.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_expiredCertsOnCRL /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_expiredCertsOnCRL /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_reasonCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-reasonCode                          OBJECT IDENTIFIER ::= {id-ce 21 2}
 * ```
 *
 * @constant
 */
export const id_asx_reasonCode: OBJECT_IDENTIFIER = new _OID([21, 2], id_ce);

/**
 * @summary id_ce_a_reasonCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-reasonCode                         OBJECT IDENTIFIER ::= {id-ce 21 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_reasonCode: OBJECT_IDENTIFIER = new _OID([21, 1], id_ce);

/**
 * @summary a_reasonCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-reasonCode ATTRIBUTE ::= {
 *   WITH SYNTAX       reasonCode.&ExtnType
 *   LDAP-SYNTAX       id-asx-reasonCode
 *   LDAP-NAME         {"Reason code"}
 *   ID                id-ce-a-reasonCode}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_reasonCode: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": reasonCode.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": reasonCode.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_reasonCode /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_reasonCode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_holdInstructionCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-holdInstructionCode                 OBJECT IDENTIFIER ::= {id-ce 23 2}
 * ```
 *
 * @constant
 */
export const id_asx_holdInstructionCode: OBJECT_IDENTIFIER = new _OID(
    [23, 2],
    id_ce
);

/**
 * @summary id_ce_a_holdInstructionCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-holdInstructionCode                OBJECT IDENTIFIER ::= {id-ce 23 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_holdInstructionCode: OBJECT_IDENTIFIER = new _OID(
    [23, 1],
    id_ce
);

/**
 * @summary a_holdInstructionCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-holdInstructionCode ATTRIBUTE ::= {
 *   WITH SYNTAX       holdInstructionCode.&ExtnType
 *   LDAP-SYNTAX       id-asx-holdInstructionCode
 *   LDAP-NAME         {"Hold instruction code"}
 *   ID                id-ce-a-holdInstructionCode}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_holdInstructionCode: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": holdInstructionCode.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": holdInstructionCode.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_holdInstructionCode /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_holdInstructionCode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_invalidityDate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-invalidityDate                      OBJECT IDENTIFIER ::= {id-ce 24 2}
 * ```
 *
 * @constant
 */
export const id_asx_invalidityDate: OBJECT_IDENTIFIER = new _OID(
    [24, 2],
    id_ce
);

/**
 * @summary id_ce_a_invalidityDate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-invalidityDate                     OBJECT IDENTIFIER ::= {id-ce 24 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_invalidityDate: OBJECT_IDENTIFIER = new _OID(
    [24, 1],
    id_ce
);

/**
 * @summary a_invalidityDate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-invalidityDate ATTRIBUTE ::= {
 *   WITH SYNTAX       invalidityDate.&ExtnType
 *   LDAP-SYNTAX       id-asx-invalidityDate
 *   LDAP-NAME         {"Invalidity date"}
 *   ID                id-ce-a-invalidityDate}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_invalidityDate: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": invalidityDate.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": invalidityDate.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_invalidityDate /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_invalidityDate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_cRLDistributionPoints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-cRLDistributionPoints               OBJECT IDENTIFIER ::= {id-ce 31 2}
 * ```
 *
 * @constant
 */
export const id_asx_cRLDistributionPoints: OBJECT_IDENTIFIER = new _OID(
    [31, 2],
    id_ce
);

/**
 * @summary id_ce_a_cRLDistributionPoints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-cRLDistributionPoints              OBJECT IDENTIFIER ::= {id-ce 31 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_cRLDistributionPoints: OBJECT_IDENTIFIER = new _OID(
    [31, 1],
    id_ce
);

/**
 * @summary a_cRLDistributionPoints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-cRLDistributionPoints ATTRIBUTE ::= {
 *   WITH SYNTAX       cRLDistributionPoints.&ExtnType
 *   LDAP-SYNTAX       id-asx-cRLDistributionPoints
 *   LDAP-NAME         {"CRL distribution points"}
 *   ID                id-ce-a-cRLDistributionPoints}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_cRLDistributionPoints: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": cRLDistributionPoints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": cRLDistributionPoints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_cRLDistributionPoints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_cRLDistributionPoints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_issuingDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-issuingDistributionPoint            OBJECT IDENTIFIER ::= {id-ce 28 2}
 * ```
 *
 * @constant
 */
export const id_asx_issuingDistributionPoint: OBJECT_IDENTIFIER = new _OID(
    [28, 2],
    id_ce
);

/**
 * @summary id_ce_a_issuingDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-issuingDistributionPoint           OBJECT IDENTIFIER ::= {id-ce 28 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_issuingDistributionPoint: OBJECT_IDENTIFIER = new _OID(
    [28, 1],
    id_ce
);

/**
 * @summary a_issuingDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-issuingDistributionPoint ATTRIBUTE ::= {
 *   WITH SYNTAX       issuingDistributionPoint.&ExtnType
 *   LDAP-SYNTAX       id-asx-issuingDistributionPoint
 *   LDAP-NAME         {"Issuing distribution point"}
 *   ID                id-ce-a-issuingDistributionPoint}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_issuingDistributionPoint: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": issuingDistributionPoint.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": issuingDistributionPoint.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_issuingDistributionPoint /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_issuingDistributionPoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_certificateIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-certificateIssuer                   OBJECT IDENTIFIER ::= {id-ce 29 2}
 * ```
 *
 * @constant
 */
export const id_asx_certificateIssuer: OBJECT_IDENTIFIER = new _OID(
    [29, 2],
    id_ce
);

/**
 * @summary id_ce_a_certificateIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-certificateIssuer                  OBJECT IDENTIFIER ::= {id-ce 29 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_certificateIssuer: OBJECT_IDENTIFIER = new _OID(
    [29, 1],
    id_ce
);

/**
 * @summary a_certificateIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-certificateIssuer ATTRIBUTE ::= {
 *   WITH SYNTAX       certificateIssuer.&ExtnType
 *   LDAP-SYNTAX       id-asx-certificateIssuer
 *   LDAP-NAME         {"Certificate issuer"}
 *   ID                id-ce-a-certificateIssuer}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_certificateIssuer: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": certificateIssuer.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": certificateIssuer.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_certificateIssuer /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_certificateIssuer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_deltaCRLIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-deltaCRLIndicator                   OBJECT IDENTIFIER ::= {id-ce 27 2}
 * ```
 *
 * @constant
 */
export const id_asx_deltaCRLIndicator: OBJECT_IDENTIFIER = new _OID(
    [27, 2],
    id_ce
);

/**
 * @summary id_ce_a_deltaCRLIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-deltaCRLIndicator                  OBJECT IDENTIFIER ::= {id-ce 27 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_deltaCRLIndicator: OBJECT_IDENTIFIER = new _OID(
    [27, 1],
    id_ce
);

/**
 * @summary a_deltaCRLIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-deltaCRLIndicator ATTRIBUTE ::= {
 *   WITH SYNTAX       deltaCRLIndicator.&ExtnType
 *   LDAP-SYNTAX       id-asx-deltaCRLIndicator
 *   LDAP-NAME         {"Delta CRL indicator"}
 *   ID                id-ce-a-deltaCRLIndicator}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_deltaCRLIndicator: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": deltaCRLIndicator.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": deltaCRLIndicator.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_deltaCRLIndicator /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_deltaCRLIndicator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_baseUpdateTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-baseUpdateTime                      OBJECT IDENTIFIER ::= {id-ce 51 2}
 * ```
 *
 * @constant
 */
export const id_asx_baseUpdateTime: OBJECT_IDENTIFIER = new _OID(
    [51, 2],
    id_ce
);

/**
 * @summary id_ce_a_baseUpdateTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-baseUpdateTime                     OBJECT IDENTIFIER ::= {id-ce 51 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_baseUpdateTime: OBJECT_IDENTIFIER = new _OID(
    [51, 1],
    id_ce
);

/**
 * @summary a_baseUpdateTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-baseUpdateTime ATTRIBUTE ::= {
 *   WITH SYNTAX       baseUpdateTime.&ExtnType
 *   LDAP-SYNTAX       id-asx-baseUpdateTime
 *   LDAP-NAME         {"Base update time"}
 *   ID                id-ce-a-baseUpdateTime}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_baseUpdateTime: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": baseUpdateTime.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": baseUpdateTime.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_baseUpdateTime /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_baseUpdateTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_freshestCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-freshestCRL                         OBJECT IDENTIFIER ::= {id-ce 46 2}
 * ```
 *
 * @constant
 */
export const id_asx_freshestCRL: OBJECT_IDENTIFIER = new _OID([46, 2], id_ce);

/**
 * @summary id_ce_a_freshestCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-freshestCRL                        OBJECT IDENTIFIER ::= {id-ce 46 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_freshestCRL: OBJECT_IDENTIFIER = new _OID([46, 1], id_ce);

/**
 * @summary a_freshestCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-freshestCRL ATTRIBUTE ::= {
 *   WITH SYNTAX       freshestCRL.&ExtnType
 *   LDAP-SYNTAX       id-asx-freshestCRL
 *   LDAP-NAME         {"Freshest CRL"}
 *   ID                id-ce-a-freshestCRL}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_freshestCRL: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": freshestCRL.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": freshestCRL.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_freshestCRL /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_freshestCRL /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_timeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-timeSpecification                   OBJECT IDENTIFIER ::= {id-ce 43 2}
 * ```
 *
 * @constant
 */
export const id_asx_timeSpecification: OBJECT_IDENTIFIER = new _OID(
    [43, 2],
    id_ce
);

/**
 * @summary id_ce_a_timeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-timeSpecification                  OBJECT IDENTIFIER ::= {id-ce 43 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_timeSpecification: OBJECT_IDENTIFIER = new _OID(
    [43, 1],
    id_ce
);

/**
 * @summary a_timeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-timeSpecification ATTRIBUTE ::= {
 *   WITH SYNTAX       timeSpecification.&ExtnType
 *   LDAP-SYNTAX       id-asx-timeSpecification
 *   LDAP-NAME         {"Time specification"}
 *   ID                id-ce-a-timeSpecification}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_timeSpecification: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": timeSpecification.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": timeSpecification.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_timeSpecification /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_timeSpecification /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_targetingInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-targetingInformation                OBJECT IDENTIFIER ::= {id-ce 55 2}
 * ```
 *
 * @constant
 */
export const id_asx_targetingInformation: OBJECT_IDENTIFIER = new _OID(
    [55, 2],
    id_ce
);

/**
 * @summary id_ce_a_targetingInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-targetingInformation               OBJECT IDENTIFIER ::= {id-ce 55 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_targetingInformation: OBJECT_IDENTIFIER = new _OID(
    [55, 1],
    id_ce
);

/**
 * @summary a_targetingInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-targetingInformation ATTRIBUTE ::= {
 *   WITH SYNTAX       targetingInformation.&ExtnType
 *   LDAP-SYNTAX       id-asx-targetingInformation
 *   LDAP-NAME         {"Targeting information"}
 *   ID                id-ce-a-targetingInformation}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_targetingInformation: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": targetingInformation.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": targetingInformation.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_targetingInformation /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_targetingInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_userNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-userNotice                          OBJECT IDENTIFIER ::= {id-ce 49 2}
 * ```
 *
 * @constant
 */
export const id_asx_userNotice: OBJECT_IDENTIFIER = new _OID([49, 2], id_ce);

/**
 * @summary id_ce_a_userNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-userNotice                         OBJECT IDENTIFIER ::= {id-ce 49 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_userNotice: OBJECT_IDENTIFIER = new _OID([49, 1], id_ce);

/**
 * @summary a_userNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-userNotice ATTRIBUTE ::= {
 *   WITH SYNTAX       userNotice.&ExtnType
 *   LDAP-SYNTAX       id-asx-userNotice
 *   LDAP-NAME         {"User notice"}
 *   ID                id-ce-a-userNotice}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_userNotice: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": userNotice.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": userNotice.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_userNotice /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_userNotice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_acceptablePrivilegePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-acceptablePrivilegePolicies         OBJECT IDENTIFIER ::= {id-ce 57 2}
 * ```
 *
 * @constant
 */
export const id_asx_acceptablePrivilegePolicies: OBJECT_IDENTIFIER = new _OID(
    [57, 2],
    id_ce
);

/**
 * @summary id_ce_a_acceptablePrivilegePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-acceptablePrivilegePolicies        OBJECT IDENTIFIER ::= {id-ce 57 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_acceptablePrivilegePolicies: OBJECT_IDENTIFIER = new _OID(
    [57, 1],
    id_ce
);

/**
 * @summary a_acceptablePrivilegePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-acceptablePrivilegePolicies ATTRIBUTE ::= {
 *   WITH SYNTAX       acceptablePrivilegePolicies.&ExtnType
 *   LDAP-SYNTAX       id-asx-acceptablePrivilegePolicies
 *   LDAP-NAME         {"Acceptable Privilege Policies"}
 *   ID                id-ce-a-acceptablePrivilegePolicies}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_acceptablePrivilegePolicies: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": acceptablePrivilegePolicies.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": acceptablePrivilegePolicies.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_acceptablePrivilegePolicies /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_acceptablePrivilegePolicies /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_singleUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-singleUse                           OBJECT IDENTIFIER ::= {id-ce 65 2}
 * ```
 *
 * @constant
 */
export const id_asx_singleUse: OBJECT_IDENTIFIER = new _OID([65, 2], id_ce);

/**
 * @summary id_ce_a_singleUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-singleUse                          OBJECT IDENTIFIER ::= {id-ce 65 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_singleUse: OBJECT_IDENTIFIER = new _OID([65, 1], id_ce);

/**
 * @summary a_singleUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-singleUse ATTRIBUTE ::= {
 *   WITH SYNTAX       singleUse.&ExtnType
 *   LDAP-SYNTAX       id-asx-singleUse
 *   LDAP-NAME         {"Single use"}
 *   ID                id-ce-a-singleUse}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_singleUse: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": singleUse.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": singleUse.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_singleUse /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_singleUse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_groupAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-groupAC                             OBJECT IDENTIFIER ::= {id-ce 66 2}
 * ```
 *
 * @constant
 */
export const id_asx_groupAC: OBJECT_IDENTIFIER = new _OID([66, 2], id_ce);

/**
 * @summary id_ce_a_groupAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-groupAC                            OBJECT IDENTIFIER ::= {id-ce 66 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_groupAC: OBJECT_IDENTIFIER = new _OID([66, 1], id_ce);

/**
 * @summary a_groupAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-groupAC ATTRIBUTE ::= {
 *   WITH SYNTAX       groupAC.&ExtnType
 *   LDAP-SYNTAX       id-asx-groupAC
 *   LDAP-NAME         {"Group attribute certificate"}
 *   ID                id-ce-a-groupAC}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_groupAC: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": groupAC.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": groupAC.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_groupAC /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_groupAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_noRevAvail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-noRevAvail                          OBJECT IDENTIFIER ::= {id-ce 56 2}
 * ```
 *
 * @constant
 */
export const id_asx_noRevAvail: OBJECT_IDENTIFIER = new _OID([56, 2], id_ce);

/**
 * @summary id_ce_a_noRevAvail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-noRevAvail                         OBJECT IDENTIFIER ::= {id-ce 56 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_noRevAvail: OBJECT_IDENTIFIER = new _OID([56, 1], id_ce);

/**
 * @summary a_noRevAvail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-noRevAvail ATTRIBUTE ::= {
 *   WITH SYNTAX       noRevAvail.&ExtnType
 *   LDAP-SYNTAX       id-asx-noRevAvail
 *   LDAP-NAME         {"No revocation information available"}
 *   ID                id-ce-a-noRevAvail}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_noRevAvail: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": noRevAvail.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": noRevAvail.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_noRevAvail /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_noRevAvail /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_sOAIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-sOAIdentifier                       OBJECT IDENTIFIER ::= {id-ce 50 2}
 * ```
 *
 * @constant
 */
export const id_asx_sOAIdentifier: OBJECT_IDENTIFIER = new _OID([50, 2], id_ce);

/**
 * @summary id_ce_a_sOAIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-sOAIdentifier                      OBJECT IDENTIFIER ::= {id-ce 50 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_sOAIdentifier: OBJECT_IDENTIFIER = new _OID(
    [50, 1],
    id_ce
);

/**
 * @summary a_sOAIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-sOAIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX       sOAIdentifier.&ExtnType
 *   LDAP-SYNTAX       id-asx-sOAIdentifier
 *   LDAP-NAME         {"SOA identifier"}
 *   ID                id-ce-a-sOAIdentifier}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_sOAIdentifier: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": sOAIdentifier.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": sOAIdentifier.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_sOAIdentifier /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_sOAIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_attributeDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-attributeDescriptor                 OBJECT IDENTIFIER ::= {id-ce 48 2}
 * ```
 *
 * @constant
 */
export const id_asx_attributeDescriptor: OBJECT_IDENTIFIER = new _OID(
    [48, 2],
    id_ce
);

/**
 * @summary id_ce_a_attributeDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-attributeDescriptor                OBJECT IDENTIFIER ::= {id-ce 48 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_attributeDescriptor: OBJECT_IDENTIFIER = new _OID(
    [48, 1],
    id_ce
);

/**
 * @summary a_attributeDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-attributeDescriptor ATTRIBUTE ::= {
 *   WITH SYNTAX       attributeDescriptor.&ExtnType
 *   LDAP-SYNTAX       id-asx-attributeDescriptor
 *   LDAP-NAME         {"Attribute descriptor"}
 *   ID                id-ce-a-attributeDescriptor}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_attributeDescriptor: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": attributeDescriptor.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": attributeDescriptor.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_attributeDescriptor /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_attributeDescriptor /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_roleSpecCertIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-roleSpecCertIdentifier              OBJECT IDENTIFIER ::= {id-ce 39 2}
 * ```
 *
 * @constant
 */
export const id_asx_roleSpecCertIdentifier: OBJECT_IDENTIFIER = new _OID(
    [39, 2],
    id_ce
);

/**
 * @summary id_ce_a_roleSpecCertIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-roleSpecCertIdentifier             OBJECT IDENTIFIER ::= {id-ce 39 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_roleSpecCertIdentifier: OBJECT_IDENTIFIER = new _OID(
    [39, 1],
    id_ce
);

/**
 * @summary a_roleSpecCertIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-roleSpecCertIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX       roleSpecCertIdentifier.&ExtnType
 *   LDAP-SYNTAX       id-asx-roleSpecCertIdentifier
 *   LDAP-NAME         {"Role specification certificate identifier"}
 *   ID                id-ce-a-roleSpecCertIdentifier}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_roleSpecCertIdentifier: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": roleSpecCertIdentifier.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": roleSpecCertIdentifier.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_roleSpecCertIdentifier /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_roleSpecCertIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_basicAttConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-basicAttConstraints                 OBJECT IDENTIFIER ::= {id-ce 41 2}
 * ```
 *
 * @constant
 */
export const id_asx_basicAttConstraints: OBJECT_IDENTIFIER = new _OID(
    [41, 2],
    id_ce
);

/**
 * @summary id_ce_a_basicAttConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-basicAttConstraints                OBJECT IDENTIFIER ::= {id-ce 41 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_basicAttConstraints: OBJECT_IDENTIFIER = new _OID(
    [41, 1],
    id_ce
);

/**
 * @summary a_basicAttConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-basicAttConstraints ATTRIBUTE ::= {
 *   WITH SYNTAX       basicAttConstraints.&ExtnType
 *   LDAP-SYNTAX       id-asx-basicAttConstraints
 *   LDAP-NAME         {"Basic attribute constraints"}
 *   ID                id-ce-a-basicAttConstraints}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_basicAttConstraints: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": basicAttConstraints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": basicAttConstraints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_basicAttConstraints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_basicAttConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_delegatedNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-delegatedNameConstraints            OBJECT IDENTIFIER ::= {id-ce 42 2}
 * ```
 *
 * @constant
 */
export const id_asx_delegatedNameConstraints: OBJECT_IDENTIFIER = new _OID(
    [42, 2],
    id_ce
);

/**
 * @summary id_ce_a_delegatedNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-delegatedNameConstraints           OBJECT IDENTIFIER ::= {id-ce 42 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_delegatedNameConstraints: OBJECT_IDENTIFIER = new _OID(
    [42, 1],
    id_ce
);

/**
 * @summary a_delegatedNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-delegatedNameConstraints ATTRIBUTE ::= {
 *   WITH SYNTAX       delegatedNameConstraints.&ExtnType
 *   LDAP-SYNTAX       id-asx-delegatedNameConstraints
 *   LDAP-NAME         {"Delegated name constraints"}
 *   ID                id-ce-a-delegatedNameConstraints}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_delegatedNameConstraints: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": delegatedNameConstraints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": delegatedNameConstraints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_delegatedNameConstraints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_delegatedNameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_acceptableCertPolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-acceptableCertPolicies              OBJECT IDENTIFIER ::= {id-ce 52 2}
 * ```
 *
 * @constant
 */
export const id_asx_acceptableCertPolicies: OBJECT_IDENTIFIER = new _OID(
    [52, 2],
    id_ce
);

/**
 * @summary id_ce_a_acceptableCertPolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-acceptableCertPolicies             OBJECT IDENTIFIER ::= {id-ce 52 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_acceptableCertPolicies: OBJECT_IDENTIFIER = new _OID(
    [52, 1],
    id_ce
);

/**
 * @summary a_acceptableCertPolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-acceptableCertPolicies ATTRIBUTE ::= {
 *   WITH SYNTAX       acceptableCertPolicies.&ExtnType
 *   LDAP-SYNTAX       id-asx-acceptableCertPolicies
 *   LDAP-NAME         {"Acceptable certificate policiesGroup attribute certificate"}
 *   ID                id-ce-a-acceptableCertPolicies}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_acceptableCertPolicies: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": acceptableCertPolicies.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": acceptableCertPolicies.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_acceptableCertPolicies /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_acceptableCertPolicies /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_authorityAttributeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-authorityAttributeIdentifier        OBJECT IDENTIFIER ::= {id-ce 38 2}
 * ```
 *
 * @constant
 */
export const id_asx_authorityAttributeIdentifier: OBJECT_IDENTIFIER = new _OID(
    [38, 2],
    id_ce
);

/**
 * @summary id_ce_a_authorityAttributeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-authorityAttributeIdentifier       OBJECT IDENTIFIER ::= {id-ce 38 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_authorityAttributeIdentifier: OBJECT_IDENTIFIER = new _OID(
    [38, 1],
    id_ce
);

/**
 * @summary a_authorityAttributeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-authorityAttributeIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX       authorityAttributeIdentifier.&ExtnType
 *   LDAP-SYNTAX       id-asx-authorityAttributeIdentifier
 *   LDAP-NAME         {"Authority attribute identifier"}
 *   ID                id-ce-a-authorityAttributeIdentifier}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_authorityAttributeIdentifier: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": authorityAttributeIdentifier.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": authorityAttributeIdentifier.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_authorityAttributeIdentifier /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_authorityAttributeIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_indirectIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-indirectIssuer                      OBJECT IDENTIFIER ::= {id-ce 61 2}
 * ```
 *
 * @constant
 */
export const id_asx_indirectIssuer: OBJECT_IDENTIFIER = new _OID(
    [61, 2],
    id_ce
);

/**
 * @summary id_ce_a_indirectIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-indirectIssuer                     OBJECT IDENTIFIER ::= {id-ce 61 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_indirectIssuer: OBJECT_IDENTIFIER = new _OID(
    [61, 1],
    id_ce
);

/**
 * @summary a_indirectIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-indirectIssuer ATTRIBUTE ::= {
 *   WITH SYNTAX       indirectIssuer.&ExtnType
 *   LDAP-SYNTAX       id-asx-indirectIssuer
 *   LDAP-NAME         {"Indirect issuer"}
 *   ID                id-ce-a-indirectIssuer}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_indirectIssuer: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": indirectIssuer.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": indirectIssuer.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_indirectIssuer /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_indirectIssuer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_issuedOnBehalfOf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-issuedOnBehalfOf                    OBJECT IDENTIFIER ::= {id-ce 64 2}
 * ```
 *
 * @constant
 */
export const id_asx_issuedOnBehalfOf: OBJECT_IDENTIFIER = new _OID(
    [64, 2],
    id_ce
);

/**
 * @summary id_ce_a_issuedOnBehalfOf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-issuedOnBehalfOf                   OBJECT IDENTIFIER ::= {id-ce 64 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_issuedOnBehalfOf: OBJECT_IDENTIFIER = new _OID(
    [64, 1],
    id_ce
);

/**
 * @summary a_issuedOnBehalfOf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-issuedOnBehalfOf ATTRIBUTE ::= {
 *   WITH SYNTAX       issuedOnBehalfOf.&ExtnType
 *   LDAP-SYNTAX       id-asx-issuedOnBehalfOf
 *   LDAP-NAME         {"Issued on behalf of"}
 *   ID                id-ce-a-issuedOnBehalfOf}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_issuedOnBehalfOf: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": issuedOnBehalfOf.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": issuedOnBehalfOf.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_issuedOnBehalfOf /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_issuedOnBehalfOf /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_noAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-noAssertion                         OBJECT IDENTIFIER ::= {id-ce 62 2}
 * ```
 *
 * @constant
 */
export const id_asx_noAssertion: OBJECT_IDENTIFIER = new _OID([62, 2], id_ce);

/**
 * @summary id_ce_a_noAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-noAssertion                        OBJECT IDENTIFIER ::= {id-ce 62 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_noAssertion: OBJECT_IDENTIFIER = new _OID([62, 1], id_ce);

/**
 * @summary a_noAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-noAssertion ATTRIBUTE ::= {
 *   WITH SYNTAX       noAssertion.&ExtnType
 *   LDAP-SYNTAX       id-asx-noAssertion
 *   LDAP-NAME         {"No assertion"}
 *   ID                id-ce-a-noAssertion}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_noAssertion: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": noAssertion.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": noAssertion.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_noAssertion /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_noAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_allowedAttributeAssignments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-allowedAttributeAssignments         OBJECT IDENTIFIER ::= {id-ce 67 2}
 * ```
 *
 * @constant
 */
export const id_asx_allowedAttributeAssignments: OBJECT_IDENTIFIER = new _OID(
    [67, 2],
    id_ce
);

/**
 * @summary id_ce_a_allowedAttributeAssignments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-allowedAttributeAssignments        OBJECT IDENTIFIER ::= {id-ce 67 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_allowedAttributeAssignments: OBJECT_IDENTIFIER = new _OID(
    [67, 1],
    id_ce
);

/**
 * @summary a_allowedAttributeAssignments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-allowedAttributeAssignments ATTRIBUTE ::= {
 *   WITH SYNTAX       allowedAttributeAssignments.&ExtnType
 *   LDAP-SYNTAX       id-asx-allowedAttributeAssignments
 *   LDAP-NAME         {"Allowed attribute assignments"}
 *   ID                id-ce-a-allowedAttributeAssignments}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_allowedAttributeAssignments: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": allowedAttributeAssignments.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": allowedAttributeAssignments.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_allowedAttributeAssignments /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_allowedAttributeAssignments /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_attributeMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-attributeMappings                   OBJECT IDENTIFIER ::= {id-ce 68 2}
 * ```
 *
 * @constant
 */
export const id_asx_attributeMappings: OBJECT_IDENTIFIER = new _OID(
    [68, 2],
    id_ce
);

/**
 * @summary id_ce_a_attributeMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-attributeMappings                  OBJECT IDENTIFIER ::= {id-ce 68 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_attributeMappings: OBJECT_IDENTIFIER = new _OID(
    [68, 1],
    id_ce
);

/**
 * @summary a_attributeMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-attributeMappings ATTRIBUTE ::= {
 *   WITH SYNTAX       attributeMappings.&ExtnType
 *   LDAP-SYNTAX       id-asx-attributeMappings
 *   LDAP-NAME         {"Attribute mappings"}
 *   ID                id-ce-a-attributeMappings}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_attributeMappings: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": attributeMappings.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": attributeMappings.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_attributeMappings /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_attributeMappings /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_holderNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-holderNameConstraints               OBJECT IDENTIFIER ::= {id-ce 69 2}
 * ```
 *
 * @constant
 */
export const id_asx_holderNameConstraints: OBJECT_IDENTIFIER = new _OID(
    [69, 2],
    id_ce
);

/**
 * @summary id_ce_a_holderNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-holderNameConstraints              OBJECT IDENTIFIER ::= {id-ce 69 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_holderNameConstraints: OBJECT_IDENTIFIER = new _OID(
    [69, 1],
    id_ce
);

/**
 * @summary a_holderNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-holderNameConstraints ATTRIBUTE ::= {
 *   WITH SYNTAX       holderNameConstraints.&ExtnType
 *   LDAP-SYNTAX       id-asx-holderNameConstraints
 *   LDAP-NAME         {"Holder name constraints"}
 *   ID                id-ce-a-holderNameConstraints}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_holderNameConstraints: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": holderNameConstraints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": holderNameConstraints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_holderNameConstraints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_holderNameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_aAissuingDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-aAissuingDistributionPoint          OBJECT IDENTIFIER ::= {id-ce 63 2}
 * ```
 *
 * @constant
 */
export const id_asx_aAissuingDistributionPoint: OBJECT_IDENTIFIER = new _OID(
    [63, 2],
    id_ce
);

/**
 * @summary id_ce_a_aAissuingDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-aAissuingDistributionPoint         OBJECT IDENTIFIER ::= {id-ce 63 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_aAissuingDistributionPoint: OBJECT_IDENTIFIER = new _OID(
    [63, 1],
    id_ce
);

/**
 * @summary a_aAissuingDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-aAissuingDistributionPoint ATTRIBUTE ::= {
 *   WITH SYNTAX       aAissuingDistributionPoint.&ExtnType
 *   LDAP-SYNTAX       id-asx-aAissuingDistributionPoint
 *   LDAP-NAME         {"AA issuing distribution point"}
 *   ID                id-ce-a-aAissuingDistributionPoint}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_aAissuingDistributionPoint: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": aAissuingDistributionPoint.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": aAissuingDistributionPoint.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_aAissuingDistributionPoint /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_aAissuingDistributionPoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_protRestrict
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-protRestrict                        OBJECT IDENTIFIER ::= {id-ce 71 2}
 * ```
 *
 * @constant
 */
export const id_asx_protRestrict: OBJECT_IDENTIFIER = new _OID([71, 2], id_ce);

/**
 * @summary id_ce_a_protRestrict
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-protRestrict                       OBJECT IDENTIFIER ::= {id-ce 71 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_protRestrict: OBJECT_IDENTIFIER = new _OID([71, 1], id_ce);

/**
 * @summary a_protRestrict
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-protRestrict ATTRIBUTE ::= {
 *   WITH SYNTAX       protRestrict.&ExtnType
 *   LDAP-SYNTAX       id-asx-protRestrict
 *   LDAP-NAME         {"Protocol restriction"}
 *   ID                id-ce-a-protRestrict}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_protRestrict: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": protRestrict.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": protRestrict.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_protRestrict /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_protRestrict /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_subjectAltPublicKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-subjectAltPublicKeyInfo             OBJECT IDENTIFIER ::= {id-ce 72 2}
 * ```
 *
 * @constant
 */
export const id_asx_subjectAltPublicKeyInfo: OBJECT_IDENTIFIER = new _OID(
    [72, 2],
    id_ce
);

/**
 * @summary id_ce_a_subjectAltPublicKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-subjectAltPublicKeyInfo            OBJECT IDENTIFIER ::= {id-ce 72 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_subjectAltPublicKeyInfo: OBJECT_IDENTIFIER = new _OID(
    [72, 1],
    id_ce
);

/**
 * @summary a_subjectAltPublicKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-subjectAltPublicKeyInfo ATTRIBUTE ::= {
 *   WITH SYNTAX       subjectAltPublicKeyInfo.&ExtnType
 *   LDAP-SYNTAX       id-asx-subjectAltPublicKeyInfo
 *   LDAP-NAME         {"Subject alternative public key info"}
 *   ID                id-ce-a-subjectAltPublicKeyInfo}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_subjectAltPublicKeyInfo: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": subjectAltPublicKeyInfo.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": subjectAltPublicKeyInfo.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_subjectAltPublicKeyInfo /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_subjectAltPublicKeyInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_altSignatureAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-altSignatureAlgorithm               OBJECT IDENTIFIER ::= {id-ce 73 2}
 * ```
 *
 * @constant
 */
export const id_asx_altSignatureAlgorithm: OBJECT_IDENTIFIER = new _OID(
    [73, 2],
    id_ce
);

/**
 * @summary id_ce_a_altSignatureAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-altSignatureAlgorithm              OBJECT IDENTIFIER ::= {id-ce 73 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_altSignatureAlgorithm: OBJECT_IDENTIFIER = new _OID(
    [73, 1],
    id_ce
);

/**
 * @summary a_altSignatureAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-altSignatureAlgorithm ATTRIBUTE ::= {
 *   WITH SYNTAX       altSignatureAlgorithm.&ExtnType
 *   LDAP-SYNTAX       id-asx-altSignatureAlgorithm
 *   LDAP-NAME         {"Alternative signature algorithm"}
 *   ID                id-ce-a-altSignatureAlgorithm}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_altSignatureAlgorithm: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": altSignatureAlgorithm.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": altSignatureAlgorithm.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_altSignatureAlgorithm /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_altSignatureAlgorithm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_asx_altSignatureValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-altSignatureValue                   OBJECT IDENTIFIER ::= {id-ce 74 2}
 * ```
 *
 * @constant
 */
export const id_asx_altSignatureValue: OBJECT_IDENTIFIER = new _OID(
    [74, 2],
    id_ce
);

/**
 * @summary id_ce_a_altSignatureValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-altSignatureValue                  OBJECT IDENTIFIER ::= {id-ce 74 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_altSignatureValue: OBJECT_IDENTIFIER = new _OID(
    [74, 1],
    id_ce
);

/**
 * @summary a_altSignatureValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-altSignatureValue ATTRIBUTE ::= {
 *   WITH SYNTAX       altSignatureValue.&ExtnType
 *   LDAP-SYNTAX       id-asx-altSignatureValue
 *   LDAP-NAME         {"Alternative signature value"}
 *   ID                id-ce-a-altSignatureValue}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_altSignatureValue: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": altSignatureValue.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": altSignatureValue.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_altSignatureValue /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_altSignatureValue /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_ce_a_subjectKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-subjectKeyIdentifier               OBJECT IDENTIFIER ::= {id-ce 14 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_subjectKeyIdentifier: OBJECT_IDENTIFIER = new _OID(
    [14, 1],
    id_ce
);

/**
 * @summary id_ce_a_cRLScope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-cRLScope                           OBJECT IDENTIFIER ::= {id-ce 44 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_cRLScope: OBJECT_IDENTIFIER = new _OID([44, 1], id_ce);

/**
 * @summary id_ce_a_inhibitAnyPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-inhibitAnyPolicy                   OBJECT IDENTIFIER ::= {id-ce 54 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_inhibitAnyPolicy: OBJECT_IDENTIFIER = new _OID(
    [54, 1],
    id_ce
);

/**
 * @summary id_asx_subjectKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-subjectKeyIdentifier                OBJECT IDENTIFIER ::= {id-ce 14 2}
 * ```
 *
 * @constant
 */
export const id_asx_subjectKeyIdentifier: OBJECT_IDENTIFIER = new _OID(
    [14, 2],
    id_ce
);

/**
 * @summary id_asx_cRLScope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-cRLScope                            OBJECT IDENTIFIER ::= {id-ce 44 2}
 * ```
 *
 * @constant
 */
export const id_asx_cRLScope: OBJECT_IDENTIFIER = new _OID([44, 2], id_ce);

/**
 * @summary id_asx_inhibitAnyPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-asx-inhibitAnyPolicy                    OBJECT IDENTIFIER ::= {id-ce 54 2}
 * ```
 *
 * @constant
 */
export const id_asx_inhibitAnyPolicy: OBJECT_IDENTIFIER = new _OID(
    [54, 2],
    id_ce
);

/* END_MODULE ExtensionAttributes */
/* eslint-enable */
