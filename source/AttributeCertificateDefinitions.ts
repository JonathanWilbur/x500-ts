/**
 * @module AttributeCertificateDefinitions
 * @summary The ASN.1 module `AttributeCertificateDefinitions`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.attributeCertificateDefinitions.9
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
    BIT_STRING,
    BMPString,
    BOOLEAN,
    GeneralizedTime,
    INTEGER,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    VisibleString,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    Certificate,
    CertificateSerialNumber,
    EXTENSION,
    Extensions,
    InfoSyntax,
    SIGNED,
    x509CertificateList,
    _decode_AlgorithmIdentifier,
    _decode_Certificate,
    _decode_CertificateList,
    _decode_CertificateSerialNumber,
    _decode_Extensions,
    _decode_InfoSyntax,
    _decode_PolicySyntax,
    _encode_AlgorithmIdentifier,
    _encode_Certificate,
    _encode_CertificateList,
    _encode_CertificateSerialNumber,
    _encode_Extensions,
    _encode_InfoSyntax,
    _encode_PolicySyntax,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "./AuthenticationFramework";
import {
    certificateListExactMatch,
    GeneralName,
    GeneralNames,
    _decode_GeneralName,
    _decode_GeneralNames,
    _decode_NameConstraintsSyntax,
    _encode_GeneralName,
    _encode_GeneralNames,
    _encode_NameConstraintsSyntax,
} from "./CertificateExtensions";
import * as InformationFramework from "./InformationFramework";
import {
    ATTRIBUTE,
    Attribute,
    AttributeType,
    AttributeTypeAndValue,
    MATCHING_RULE,
    OBJECT_CLASS,
    _decode_Attribute,
    _decode_AttributeType,
    _decode_AttributeTypeAndValue,
    _encode_Attribute,
    _encode_AttributeType,
    _encode_AttributeTypeAndValue,
} from "./InformationFramework";
import {
    UnboundedDirectoryString,
    UniqueIdentifier,
    _decode_TimeSpecification,
    _decode_UnboundedDirectoryString,
    _decode_UniqueIdentifier,
    _encode_TimeSpecification,
    _encode_UnboundedDirectoryString,
    _encode_UniqueIdentifier,
} from "./SelectedAttributeTypes";
import { id_at, id_ce, id_mr, id_oc } from "./UsefulDefinitions";
export {
    AlgorithmIdentifier,
    Certificate,
    CertificateList,
    CertificateSerialNumber,
    EXTENSION,
    Extensions,
    InfoSyntax,
    PolicySyntax,
    SIGNED,
    SupportedAlgorithms,
    x509CertificateList,
    _decode_AlgorithmIdentifier,
    _decode_Certificate,
    _decode_CertificateList,
    _decode_CertificateSerialNumber,
    _decode_Extensions,
    _decode_InfoSyntax,
    _decode_PolicySyntax,
    _encode_AlgorithmIdentifier,
    _encode_Certificate,
    _encode_CertificateList,
    _encode_CertificateSerialNumber,
    _encode_Extensions,
    _encode_InfoSyntax,
    _encode_PolicySyntax,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "./AuthenticationFramework";
export {
    certificateListExactMatch,
    GeneralName,
    GeneralNames,
    NameConstraintsSyntax,
    _decode_GeneralName,
    _decode_GeneralNames,
    _decode_NameConstraintsSyntax,
    _encode_GeneralName,
    _encode_GeneralNames,
    _encode_NameConstraintsSyntax,
} from "./CertificateExtensions";
export {
    ATTRIBUTE,
    Attribute,
    AttributeType,
    AttributeTypeAndValue,
    MATCHING_RULE,
    Name,
    OBJECT_CLASS,
    RelativeDistinguishedName,
    SupportedAttributes,
    SYNTAX_NAME,
    top,
    _decode_Attribute,
    _decode_AttributeType,
    _decode_AttributeTypeAndValue,
    _decode_Name,
    _decode_RelativeDistinguishedName,
    _encode_Attribute,
    _encode_AttributeType,
    _encode_AttributeTypeAndValue,
    _encode_Name,
    _encode_RelativeDistinguishedName,
} from "./InformationFramework";
export {
    TimeSpecification,
    UnboundedDirectoryString,
    UniqueIdentifier,
    _decode_TimeSpecification,
    _decode_UnboundedDirectoryString,
    _decode_UniqueIdentifier,
    _encode_TimeSpecification,
    _encode_UnboundedDirectoryString,
    _encode_UniqueIdentifier,
} from "./SelectedAttributeTypes";
export { id_at, id_ce, id_mr, id_oc } from "./UsefulDefinitions";

/**
 * @summary AttCertVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttCertVersion  ::=  INTEGER {v2(1)}
 * ```
 */
export type AttCertVersion = INTEGER;
/**
 * @summary AttCertVersion_v2
 * @constant
 * @type {number}
 */
export const AttCertVersion_v2: AttCertVersion = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_AttCertVersion: $.ASN1Decoder<
    AttCertVersion
> | null = null;
let _cached_encoder_for_AttCertVersion: $.ASN1Encoder<
    AttCertVersion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttCertVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttCertVersion} The decoded data structure.
 */
export function _decode_AttCertVersion(el: _Element) {
    if (!_cached_decoder_for_AttCertVersion) {
        _cached_decoder_for_AttCertVersion = $._decodeInteger;
    }
    return _cached_decoder_for_AttCertVersion(el);
}
/**
 * @summary Encodes a(n) AttCertVersion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttCertVersion, encoded as an ASN.1 Element.
 */
export function _encode_AttCertVersion(
    value: AttCertVersion,
    elGetter: $.ASN1Encoder<AttCertVersion>
) {
    if (!_cached_encoder_for_AttCertVersion) {
        _cached_encoder_for_AttCertVersion = $._encodeInteger;
    }
    return _cached_encoder_for_AttCertVersion(value, elGetter);
}

/**
 * @summary IssuerSerial
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IssuerSerial ::= SEQUENCE {
 *   issuer     GeneralNames,
 *   serial     CertificateSerialNumber,
 *   issuerUID  UniqueIdentifier OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class IssuerSerial {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: GeneralNames,
        /**
         * @summary `serial`.
         * @public
         * @readonly
         */
        readonly serial: CertificateSerialNumber,
        /**
         * @summary `issuerUID`.
         * @public
         * @readonly
         */
        readonly issuerUID: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IssuerSerial
     * @description
     *
     * This takes an `object` and converts it to a `IssuerSerial`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IssuerSerial`.
     * @returns {IssuerSerial}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof IssuerSerial]: IssuerSerial[_K] }>
    ): IssuerSerial {
        return new IssuerSerial(
            _o.issuer,
            _o.serial,
            _o.issuerUID,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of IssuerSerial
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IssuerSerial: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuer",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "serial",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "issuerUID",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of IssuerSerial
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IssuerSerial: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of IssuerSerial
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IssuerSerial: $.ComponentSpec[] = [];
let _cached_decoder_for_IssuerSerial: $.ASN1Decoder<IssuerSerial> | null = null;
let _cached_encoder_for_IssuerSerial: $.ASN1Encoder<IssuerSerial> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IssuerSerial
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IssuerSerial} The decoded data structure.
 */
export function _decode_IssuerSerial(el: _Element) {
    if (!_cached_decoder_for_IssuerSerial) {
        _cached_decoder_for_IssuerSerial = function (
            el: _Element
        ): IssuerSerial {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuer!: GeneralNames;
            let serial!: CertificateSerialNumber;
            let issuerUID: OPTIONAL<UniqueIdentifier>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                issuer: (_el: _Element): void => {
                    issuer = _decode_GeneralNames(_el);
                },
                serial: (_el: _Element): void => {
                    serial = _decode_CertificateSerialNumber(_el);
                },
                issuerUID: (_el: _Element): void => {
                    issuerUID = _decode_UniqueIdentifier(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IssuerSerial,
                _extension_additions_list_spec_for_IssuerSerial,
                _root_component_type_list_2_spec_for_IssuerSerial,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new IssuerSerial(
                /* SEQUENCE_CONSTRUCTOR_CALL */ issuer,
                serial,
                issuerUID,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_IssuerSerial(el);
}
/**
 * @summary Encodes a(n) IssuerSerial into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IssuerSerial, encoded as an ASN.1 Element.
 */
export function _encode_IssuerSerial(
    value: IssuerSerial,
    elGetter: $.ASN1Encoder<IssuerSerial>
) {
    if (!_cached_encoder_for_IssuerSerial) {
        _cached_encoder_for_IssuerSerial = function (
            value: IssuerSerial,
            elGetter: $.ASN1Encoder<IssuerSerial>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_GeneralNames(
                                value.issuer,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serial,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.issuerUID === undefined
                                ? undefined
                                : _encode_UniqueIdentifier(
                                      value.issuerUID,
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
    return _cached_encoder_for_IssuerSerial(value, elGetter);
}

/**
 * @summary ObjectDigestInfo_digestedObjectType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectDigestInfo-digestedObjectType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ObjectDigestInfo_digestedObjectType {
    publicKey = 0,
    publicKeyCert = 1,
    otherObjectTypes = 2,
}
/**
 * @summary ObjectDigestInfo_digestedObjectType
 */
export type ObjectDigestInfo_digestedObjectType = _enum_for_ObjectDigestInfo_digestedObjectType;
/**
 * @summary ObjectDigestInfo_digestedObjectType
 * @constant
 */
export const ObjectDigestInfo_digestedObjectType = _enum_for_ObjectDigestInfo_digestedObjectType;
/**
 * @summary ObjectDigestInfo_digestedObjectType_publicKey
 * @constant
 * @type {number}
 */
export const ObjectDigestInfo_digestedObjectType_publicKey: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.publicKey; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ObjectDigestInfo_digestedObjectType_publicKeyCert
 * @constant
 * @type {number}
 */
export const ObjectDigestInfo_digestedObjectType_publicKeyCert: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.publicKeyCert; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ObjectDigestInfo_digestedObjectType_otherObjectTypes
 * @constant
 * @type {number}
 */
export const ObjectDigestInfo_digestedObjectType_otherObjectTypes: ObjectDigestInfo_digestedObjectType =
    ObjectDigestInfo_digestedObjectType.otherObjectTypes; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_ObjectDigestInfo_digestedObjectType: $.ASN1Decoder<
    ObjectDigestInfo_digestedObjectType
> | null = null;
let _cached_encoder_for_ObjectDigestInfo_digestedObjectType: $.ASN1Encoder<
    ObjectDigestInfo_digestedObjectType
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ObjectDigestInfo_digestedObjectType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectDigestInfo_digestedObjectType} The decoded data structure.
 */
export function _decode_ObjectDigestInfo_digestedObjectType(el: _Element) {
    if (!_cached_decoder_for_ObjectDigestInfo_digestedObjectType) {
        _cached_decoder_for_ObjectDigestInfo_digestedObjectType =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_ObjectDigestInfo_digestedObjectType(el);
}
/**
 * @summary Encodes a(n) ObjectDigestInfo_digestedObjectType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectDigestInfo_digestedObjectType, encoded as an ASN.1 Element.
 */
export function _encode_ObjectDigestInfo_digestedObjectType(
    value: ObjectDigestInfo_digestedObjectType,
    elGetter: $.ASN1Encoder<ObjectDigestInfo_digestedObjectType>
) {
    if (!_cached_encoder_for_ObjectDigestInfo_digestedObjectType) {
        _cached_encoder_for_ObjectDigestInfo_digestedObjectType =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_ObjectDigestInfo_digestedObjectType(
        value,
        elGetter
    );
}

/**
 * @summary ObjectDigestInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectDigestInfo ::= SEQUENCE {
 *   digestedObjectType   ENUMERATED {
 *     publicKey        (0),
 *     publicKeyCert    (1),
 *     otherObjectTypes (2)},
 *   otherObjectTypeID   OBJECT IDENTIFIER OPTIONAL,
 *   digestAlgorithm     AlgorithmIdentifier{{SupportedAlgorithms}},
 *   objectDigest        BIT STRING,
 *   ... }
 * ```
 *
 * @class
 */
export class ObjectDigestInfo {
    constructor(
        /**
         * @summary `digestedObjectType`.
         * @public
         * @readonly
         */
        readonly digestedObjectType: ObjectDigestInfo_digestedObjectType,
        /**
         * @summary `otherObjectTypeID`.
         * @public
         * @readonly
         */
        readonly otherObjectTypeID: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `digestAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `objectDigest`.
         * @public
         * @readonly
         */
        readonly objectDigest: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ObjectDigestInfo
     * @description
     *
     * This takes an `object` and converts it to a `ObjectDigestInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObjectDigestInfo`.
     * @returns {ObjectDigestInfo}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ObjectDigestInfo]: ObjectDigestInfo[_K] }>
    ): ObjectDigestInfo {
        return new ObjectDigestInfo(
            _o.digestedObjectType,
            _o.otherObjectTypeID,
            _o.digestAlgorithm,
            _o.objectDigest,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `digestedObjectType`
     * @public
     * @static
     */

    public static _enum_for_digestedObjectType = _enum_for_ObjectDigestInfo_digestedObjectType;
}
/**
 * @summary The Leading Root Component Types of ObjectDigestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ObjectDigestInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "digestedObjectType",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "otherObjectTypeID",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "digestAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "objectDigest",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ObjectDigestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ObjectDigestInfo: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ObjectDigestInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ObjectDigestInfo: $.ComponentSpec[] = [];
let _cached_decoder_for_ObjectDigestInfo: $.ASN1Decoder<
    ObjectDigestInfo
> | null = null;
let _cached_encoder_for_ObjectDigestInfo: $.ASN1Encoder<
    ObjectDigestInfo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ObjectDigestInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectDigestInfo} The decoded data structure.
 */
export function _decode_ObjectDigestInfo(el: _Element) {
    if (!_cached_decoder_for_ObjectDigestInfo) {
        _cached_decoder_for_ObjectDigestInfo = function (
            el: _Element
        ): ObjectDigestInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let digestedObjectType!: ObjectDigestInfo_digestedObjectType;
            let otherObjectTypeID: OPTIONAL<OBJECT_IDENTIFIER>;
            let digestAlgorithm!: AlgorithmIdentifier;
            let objectDigest!: BIT_STRING;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                digestedObjectType: (_el: _Element): void => {
                    digestedObjectType = _decode_ObjectDigestInfo_digestedObjectType(
                        _el
                    );
                },
                otherObjectTypeID: (_el: _Element): void => {
                    otherObjectTypeID = $._decodeObjectIdentifier(_el);
                },
                digestAlgorithm: (_el: _Element): void => {
                    digestAlgorithm = _decode_AlgorithmIdentifier(_el);
                },
                objectDigest: (_el: _Element): void => {
                    objectDigest = $._decodeBitString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ObjectDigestInfo,
                _extension_additions_list_spec_for_ObjectDigestInfo,
                _root_component_type_list_2_spec_for_ObjectDigestInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ObjectDigestInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ digestedObjectType,
                otherObjectTypeID,
                digestAlgorithm,
                objectDigest,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ObjectDigestInfo(el);
}
/**
 * @summary Encodes a(n) ObjectDigestInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectDigestInfo, encoded as an ASN.1 Element.
 */
export function _encode_ObjectDigestInfo(
    value: ObjectDigestInfo,
    elGetter: $.ASN1Encoder<ObjectDigestInfo>
) {
    if (!_cached_encoder_for_ObjectDigestInfo) {
        _cached_encoder_for_ObjectDigestInfo = function (
            value: ObjectDigestInfo,
            elGetter: $.ASN1Encoder<ObjectDigestInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ObjectDigestInfo_digestedObjectType(
                                value.digestedObjectType,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.otherObjectTypeID ===
                            undefined
                                ? undefined
                                : $._encodeObjectIdentifier(
                                      value.otherObjectTypeID,
                                      $.BER
                                  ),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.digestAlgorithm,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeBitString(
                                value.objectDigest,
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
    return _cached_encoder_for_ObjectDigestInfo(value, elGetter);
}

/**
 * @summary Holder
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Holder ::= SEQUENCE {
 *   baseCertificateID  [0]  IssuerSerial OPTIONAL,
 *   entityName         [1]  GeneralNames OPTIONAL,
 *   objectDigestInfo   [2]  ObjectDigestInfo OPTIONAL }
 *   (WITH COMPONENTS {..., baseCertificateID  PRESENT } |
 *    WITH COMPONENTS {..., entityName  PRESENT } |
 *    WITH COMPONENTS {..., objectDigestInfo  PRESENT } )
 * ```
 *
 * @class
 */
export class Holder {
    constructor(
        /**
         * @summary `baseCertificateID`.
         * @public
         * @readonly
         */
        readonly baseCertificateID: OPTIONAL<IssuerSerial>,
        /**
         * @summary `entityName`.
         * @public
         * @readonly
         */
        readonly entityName: OPTIONAL<GeneralNames>,
        /**
         * @summary `objectDigestInfo`.
         * @public
         * @readonly
         */
        readonly objectDigestInfo: OPTIONAL<ObjectDigestInfo>
    ) {}

    /**
     * @summary Restructures an object into a Holder
     * @description
     *
     * This takes an `object` and converts it to a `Holder`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Holder`.
     * @returns {Holder}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Holder]: Holder[_K] }>
    ): Holder {
        return new Holder(
            _o.baseCertificateID,
            _o.entityName,
            _o.objectDigestInfo
        );
    }
}
/**
 * @summary The Leading Root Component Types of Holder
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Holder: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "baseCertificateID",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "entityName",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "objectDigestInfo",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Holder
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Holder: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Holder
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Holder: $.ComponentSpec[] = [];
let _cached_decoder_for_Holder: $.ASN1Decoder<Holder> | null = null;
let _cached_encoder_for_Holder: $.ASN1Encoder<Holder> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Holder
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Holder} The decoded data structure.
 */
export function _decode_Holder(el: _Element) {
    if (!_cached_decoder_for_Holder) {
        _cached_decoder_for_Holder = function (el: _Element): Holder {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let baseCertificateID: OPTIONAL<IssuerSerial>;
            let entityName: OPTIONAL<GeneralNames>;
            let objectDigestInfo: OPTIONAL<ObjectDigestInfo>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                baseCertificateID: (_el: _Element): void => {
                    baseCertificateID = $._decode_implicit<IssuerSerial>(
                        () => _decode_IssuerSerial
                    )(_el);
                },
                entityName: (_el: _Element): void => {
                    entityName = $._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
                objectDigestInfo: (_el: _Element): void => {
                    objectDigestInfo = $._decode_implicit<ObjectDigestInfo>(
                        () => _decode_ObjectDigestInfo
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Holder,
                _extension_additions_list_spec_for_Holder,
                _root_component_type_list_2_spec_for_Holder,
                undefined
            );
            return new Holder(
                /* SEQUENCE_CONSTRUCTOR_CALL */ baseCertificateID,
                entityName,
                objectDigestInfo
            );
        };
    }
    return _cached_decoder_for_Holder(el);
}
/**
 * @summary Encodes a(n) Holder into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Holder, encoded as an ASN.1 Element.
 */
export function _encode_Holder(value: Holder, elGetter: $.ASN1Encoder<Holder>) {
    if (!_cached_encoder_for_Holder) {
        _cached_encoder_for_Holder = function (
            value: Holder,
            elGetter: $.ASN1Encoder<Holder>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.baseCertificateID === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_IssuerSerial,
                                  $.BER
                              )(value.baseCertificateID, $.BER),
                        /* IF_ABSENT  */ value.entityName === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_GeneralNames,
                                  $.BER
                              )(value.entityName, $.BER),
                        /* IF_ABSENT  */ value.objectDigestInfo === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_ObjectDigestInfo,
                                  $.BER
                              )(value.objectDigestInfo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Holder(value, elGetter);
}

/**
 * @summary AttCertIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttCertIssuer ::= [0]  SEQUENCE {
 *   issuerName              GeneralNames OPTIONAL,
 *   baseCertificateID  [0]  IssuerSerial OPTIONAL,
 *   objectDigestInfo   [1]  ObjectDigestInfo OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS {..., issuerName  PRESENT } |
 *    WITH COMPONENTS {..., baseCertificateID  PRESENT } |
 *    WITH COMPONENTS {..., objectDigestInfo  PRESENT } )
 * ```
 *
 * @class
 */
export class AttCertIssuer {
    constructor(
        /**
         * @summary `issuerName`.
         * @public
         * @readonly
         */
        readonly issuerName: OPTIONAL<GeneralNames>,
        /**
         * @summary `baseCertificateID`.
         * @public
         * @readonly
         */
        readonly baseCertificateID: OPTIONAL<IssuerSerial>,
        /**
         * @summary `objectDigestInfo`.
         * @public
         * @readonly
         */
        readonly objectDigestInfo: OPTIONAL<ObjectDigestInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttCertIssuer
     * @description
     *
     * This takes an `object` and converts it to a `AttCertIssuer`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttCertIssuer`.
     * @returns {AttCertIssuer}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AttCertIssuer]: AttCertIssuer[_K] }>
    ): AttCertIssuer {
        return new AttCertIssuer(
            _o.issuerName,
            _o.baseCertificateID,
            _o.objectDigestInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AttCertIssuer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttCertIssuer: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuerName",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "baseCertificateID",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "objectDigestInfo",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AttCertIssuer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttCertIssuer: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttCertIssuer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttCertIssuer: $.ComponentSpec[] = [];
let _cached_decoder_for_AttCertIssuer: $.ASN1Decoder<
    AttCertIssuer
> | null = null;
let _cached_encoder_for_AttCertIssuer: $.ASN1Encoder<
    AttCertIssuer
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttCertIssuer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttCertIssuer} The decoded data structure.
 */
export function _decode_AttCertIssuer(el: _Element) {
    if (!_cached_decoder_for_AttCertIssuer) {
        _cached_decoder_for_AttCertIssuer = $._decode_implicit<AttCertIssuer>(
            () =>
                function (el: _Element): AttCertIssuer {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let issuerName: OPTIONAL<GeneralNames>;
                    let baseCertificateID: OPTIONAL<IssuerSerial>;
                    let objectDigestInfo: OPTIONAL<ObjectDigestInfo>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        issuerName: (_el: _Element): void => {
                            issuerName = _decode_GeneralNames(_el);
                        },
                        baseCertificateID: (_el: _Element): void => {
                            baseCertificateID = $._decode_implicit<
                                IssuerSerial
                            >(() => _decode_IssuerSerial)(_el);
                        },
                        objectDigestInfo: (_el: _Element): void => {
                            objectDigestInfo = $._decode_implicit<
                                ObjectDigestInfo
                            >(() => _decode_ObjectDigestInfo)(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_AttCertIssuer,
                        _extension_additions_list_spec_for_AttCertIssuer,
                        _root_component_type_list_2_spec_for_AttCertIssuer,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new AttCertIssuer(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ issuerName,
                        baseCertificateID,
                        objectDigestInfo,
                        _unrecognizedExtensionsList
                    );
                }
        );
    }
    return _cached_decoder_for_AttCertIssuer(el);
}
/**
 * @summary Encodes a(n) AttCertIssuer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttCertIssuer, encoded as an ASN.1 Element.
 */
export function _encode_AttCertIssuer(
    value: AttCertIssuer,
    elGetter: $.ASN1Encoder<AttCertIssuer>
) {
    if (!_cached_encoder_for_AttCertIssuer) {
        _cached_encoder_for_AttCertIssuer = $._encode_implicit(
            _TagClass.context,
            0,
            () =>
                function (
                    value: AttCertIssuer,
                    elGetter: $.ASN1Encoder<AttCertIssuer>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* IF_ABSENT  */ value.issuerName ===
                                    undefined
                                        ? undefined
                                        : _encode_GeneralNames(
                                              value.issuerName,
                                              $.BER
                                          ),
                                    /* IF_ABSENT  */ value.baseCertificateID ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              0,
                                              () => _encode_IssuerSerial,
                                              $.BER
                                          )(value.baseCertificateID, $.BER),
                                    /* IF_ABSENT  */ value.objectDigestInfo ===
                                    undefined
                                        ? undefined
                                        : $._encode_implicit(
                                              _TagClass.context,
                                              1,
                                              () => _encode_ObjectDigestInfo,
                                              $.BER
                                          )(value.objectDigestInfo, $.BER),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_AttCertIssuer(value, elGetter);
}

/**
 * @summary AttCertValidityPeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttCertValidityPeriod ::= SEQUENCE {
 *   notBeforeTime  GeneralizedTime,
 *   notAfterTime   GeneralizedTime,
 *   ... }
 * ```
 *
 * @class
 */
export class AttCertValidityPeriod {
    constructor(
        /**
         * @summary `notBeforeTime`.
         * @public
         * @readonly
         */
        readonly notBeforeTime: GeneralizedTime,
        /**
         * @summary `notAfterTime`.
         * @public
         * @readonly
         */
        readonly notAfterTime: GeneralizedTime,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttCertValidityPeriod
     * @description
     *
     * This takes an `object` and converts it to a `AttCertValidityPeriod`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttCertValidityPeriod`.
     * @returns {AttCertValidityPeriod}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof AttCertValidityPeriod]: AttCertValidityPeriod[_K] }
        >
    ): AttCertValidityPeriod {
        return new AttCertValidityPeriod(
            _o.notBeforeTime,
            _o.notAfterTime,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AttCertValidityPeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttCertValidityPeriod: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notBeforeTime",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "notAfterTime",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AttCertValidityPeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttCertValidityPeriod: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttCertValidityPeriod
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttCertValidityPeriod: $.ComponentSpec[] = [];
let _cached_decoder_for_AttCertValidityPeriod: $.ASN1Decoder<
    AttCertValidityPeriod
> | null = null;
let _cached_encoder_for_AttCertValidityPeriod: $.ASN1Encoder<
    AttCertValidityPeriod
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttCertValidityPeriod
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttCertValidityPeriod} The decoded data structure.
 */
export function _decode_AttCertValidityPeriod(el: _Element) {
    if (!_cached_decoder_for_AttCertValidityPeriod) {
        _cached_decoder_for_AttCertValidityPeriod = function (
            el: _Element
        ): AttCertValidityPeriod {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AttCertValidityPeriod contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "notBeforeTime";
            sequence[1].name = "notAfterTime";
            let notBeforeTime!: GeneralizedTime;
            let notAfterTime!: GeneralizedTime;
            notBeforeTime = $._decodeGeneralizedTime(sequence[0]);
            notAfterTime = $._decodeGeneralizedTime(sequence[1]);
            return new AttCertValidityPeriod(
                notBeforeTime,
                notAfterTime,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_AttCertValidityPeriod(el);
}
/**
 * @summary Encodes a(n) AttCertValidityPeriod into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttCertValidityPeriod, encoded as an ASN.1 Element.
 */
export function _encode_AttCertValidityPeriod(
    value: AttCertValidityPeriod,
    elGetter: $.ASN1Encoder<AttCertValidityPeriod>
) {
    if (!_cached_encoder_for_AttCertValidityPeriod) {
        _cached_encoder_for_AttCertValidityPeriod = function (
            value: AttCertValidityPeriod,
            elGetter: $.ASN1Encoder<AttCertValidityPeriod>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.notBeforeTime,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeGeneralizedTime(
                                value.notAfterTime,
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
    return _cached_encoder_for_AttCertValidityPeriod(value, elGetter);
}

/**
 * @summary TBSAttributeCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSAttributeCertificate ::= SEQUENCE {
 *   version                 AttCertVersion, -- version is v2
 *   holder                  Holder,
 *   issuer                  AttCertIssuer,
 *   signature               AlgorithmIdentifier{{SupportedAlgorithms}},
 *   serialNumber            CertificateSerialNumber,
 *   attrCertValidityPeriod  AttCertValidityPeriod,
 *   attributes              SEQUENCE OF Attribute{{SupportedAttributes}},
 *   issuerUniqueID          UniqueIdentifier OPTIONAL,
 *   ...,
 *   ...,
 *   extensions              Extensions OPTIONAL
 *  }  (CONSTRAINED BY { -- shall be DER encoded -- } )
 * ```
 *
 * @class
 */
export class TBSAttributeCertificate {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: AttCertVersion,
        /**
         * @summary `holder`.
         * @public
         * @readonly
         */
        readonly holder: Holder,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: AttCertIssuer,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: AlgorithmIdentifier,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary `attrCertValidityPeriod`.
         * @public
         * @readonly
         */
        readonly attrCertValidityPeriod: AttCertValidityPeriod,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: Attribute[],
        /**
         * @summary `issuerUniqueID`.
         * @public
         * @readonly
         */
        readonly issuerUniqueID: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a TBSAttributeCertificate
     * @description
     *
     * This takes an `object` and converts it to a `TBSAttributeCertificate`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSAttributeCertificate`.
     * @returns {TBSAttributeCertificate}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof TBSAttributeCertificate]: TBSAttributeCertificate[_K];
            }
        >
    ): TBSAttributeCertificate {
        return new TBSAttributeCertificate(
            _o.version,
            _o.holder,
            _o.issuer,
            _o.signature,
            _o.serialNumber,
            _o.attrCertValidityPeriod,
            _o.attributes,
            _o.issuerUniqueID,
            _o._unrecognizedExtensionsList,
            _o.extensions
        );
    }
}
/**
 * @summary The Leading Root Component Types of TBSAttributeCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBSAttributeCertificate: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "holder",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "issuer",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attrCertValidityPeriod",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributes",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "issuerUniqueID",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TBSAttributeCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBSAttributeCertificate: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "extensions",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Extension Addition Component Types of TBSAttributeCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBSAttributeCertificate: $.ComponentSpec[] = [];
let _cached_decoder_for_TBSAttributeCertificate: $.ASN1Decoder<
    TBSAttributeCertificate
> | null = null;
let _cached_encoder_for_TBSAttributeCertificate: $.ASN1Encoder<
    TBSAttributeCertificate
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBSAttributeCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSAttributeCertificate} The decoded data structure.
 */
export function _decode_TBSAttributeCertificate(el: _Element) {
    if (!_cached_decoder_for_TBSAttributeCertificate) {
        _cached_decoder_for_TBSAttributeCertificate = function (
            el: _Element
        ): TBSAttributeCertificate {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: AttCertVersion;
            let holder!: Holder;
            let issuer!: AttCertIssuer;
            let signature!: AlgorithmIdentifier;
            let serialNumber!: CertificateSerialNumber;
            let attrCertValidityPeriod!: AttCertValidityPeriod;
            let attributes!: Attribute[];
            let issuerUniqueID: OPTIONAL<UniqueIdentifier>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let extensions: OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_AttCertVersion(_el);
                },
                holder: (_el: _Element): void => {
                    holder = _decode_Holder(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = _decode_AttCertIssuer(_el);
                },
                signature: (_el: _Element): void => {
                    signature = _decode_AlgorithmIdentifier(_el);
                },
                serialNumber: (_el: _Element): void => {
                    serialNumber = _decode_CertificateSerialNumber(_el);
                },
                attrCertValidityPeriod: (_el: _Element): void => {
                    attrCertValidityPeriod = _decode_AttCertValidityPeriod(_el);
                },
                attributes: (_el: _Element): void => {
                    attributes = $._decodeSequenceOf<Attribute>(
                        () => _decode_Attribute
                    )(_el);
                },
                issuerUniqueID: (_el: _Element): void => {
                    issuerUniqueID = _decode_UniqueIdentifier(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = _decode_Extensions(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBSAttributeCertificate,
                _extension_additions_list_spec_for_TBSAttributeCertificate,
                _root_component_type_list_2_spec_for_TBSAttributeCertificate,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TBSAttributeCertificate(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                holder,
                issuer,
                signature,
                serialNumber,
                attrCertValidityPeriod,
                attributes,
                issuerUniqueID,
                _unrecognizedExtensionsList,
                extensions
            );
        };
    }
    return _cached_decoder_for_TBSAttributeCertificate(el);
}
/**
 * @summary Encodes a(n) TBSAttributeCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSAttributeCertificate, encoded as an ASN.1 Element.
 */
export function _encode_TBSAttributeCertificate(
    value: TBSAttributeCertificate,
    elGetter: $.ASN1Encoder<TBSAttributeCertificate>
) {
    if (!_cached_encoder_for_TBSAttributeCertificate) {
        _cached_encoder_for_TBSAttributeCertificate = function (
            value: TBSAttributeCertificate,
            elGetter: $.ASN1Encoder<TBSAttributeCertificate>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttCertVersion(
                                value.version,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Holder(
                                value.holder,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AttCertIssuer(
                                value.issuer,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.signature,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AttCertValidityPeriod(
                                value.attrCertValidityPeriod,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<Attribute>(
                                () => _encode_Attribute,
                                $.BER
                            )(value.attributes, $.BER),
                            /* IF_ABSENT  */ value.issuerUniqueID === undefined
                                ? undefined
                                : _encode_UniqueIdentifier(
                                      value.issuerUniqueID,
                                      $.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.extensions === undefined
                                ? undefined
                                : _encode_Extensions(value.extensions, $.BER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TBSAttributeCertificate(value, elGetter);
}

export type AttributeCertificate<> = SIGNED<TBSAttributeCertificate>; // DefinedType
let _cached_decoder_for_AttributeCertificate: $.ASN1Decoder<
    AttributeCertificate
> | null = null;
let _cached_encoder_for_AttributeCertificate: $.ASN1Encoder<
    AttributeCertificate
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificate} The decoded data structure.
 */
export function _decode_AttributeCertificate(el: _Element) {
    if (!_cached_decoder_for_AttributeCertificate) {
        _cached_decoder_for_AttributeCertificate = _get_decoder_for_SIGNED<
            TBSAttributeCertificate
        >(_decode_TBSAttributeCertificate);
    }
    return _cached_decoder_for_AttributeCertificate(el);
}
/**
 * @summary Encodes a(n) AttributeCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificate, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificate(
    value: AttributeCertificate,
    elGetter: $.ASN1Encoder<AttributeCertificate>
) {
    if (!_cached_encoder_for_AttributeCertificate) {
        _cached_encoder_for_AttributeCertificate = _get_encoder_for_SIGNED<
            TBSAttributeCertificate
        >(_encode_TBSAttributeCertificate);
    }
    return _cached_encoder_for_AttributeCertificate(value, elGetter);
}

/**
 * @summary ACPathData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ACPathData ::= SEQUENCE {
 *   certificate           [0]  Certificate OPTIONAL,
 *   attributeCertificate  [1]  AttributeCertificate OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ACPathData {
    constructor(
        /**
         * @summary `certificate`.
         * @public
         * @readonly
         */
        readonly certificate: OPTIONAL<Certificate>,
        /**
         * @summary `attributeCertificate`.
         * @public
         * @readonly
         */
        readonly attributeCertificate: OPTIONAL<AttributeCertificate>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ACPathData
     * @description
     *
     * This takes an `object` and converts it to a `ACPathData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ACPathData`.
     * @returns {ACPathData}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ACPathData]: ACPathData[_K] }>
    ): ACPathData {
        return new ACPathData(
            _o.certificate,
            _o.attributeCertificate,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ACPathData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ACPathData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certificate",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeCertificate",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ACPathData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ACPathData: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ACPathData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ACPathData: $.ComponentSpec[] = [];
let _cached_decoder_for_ACPathData: $.ASN1Decoder<ACPathData> | null = null;
let _cached_encoder_for_ACPathData: $.ASN1Encoder<ACPathData> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ACPathData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ACPathData} The decoded data structure.
 */
export function _decode_ACPathData(el: _Element) {
    if (!_cached_decoder_for_ACPathData) {
        _cached_decoder_for_ACPathData = function (el: _Element): ACPathData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certificate: OPTIONAL<Certificate>;
            let attributeCertificate: OPTIONAL<AttributeCertificate>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                certificate: (_el: _Element): void => {
                    certificate = $._decode_implicit<Certificate>(
                        () => _decode_Certificate
                    )(_el);
                },
                attributeCertificate: (_el: _Element): void => {
                    attributeCertificate = $._decode_implicit<
                        AttributeCertificate
                    >(() => _decode_AttributeCertificate)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ACPathData,
                _extension_additions_list_spec_for_ACPathData,
                _root_component_type_list_2_spec_for_ACPathData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ACPathData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ certificate,
                attributeCertificate,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ACPathData(el);
}
/**
 * @summary Encodes a(n) ACPathData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACPathData, encoded as an ASN.1 Element.
 */
export function _encode_ACPathData(
    value: ACPathData,
    elGetter: $.ASN1Encoder<ACPathData>
) {
    if (!_cached_encoder_for_ACPathData) {
        _cached_encoder_for_ACPathData = function (
            value: ACPathData,
            elGetter: $.ASN1Encoder<ACPathData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.certificate === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Certificate,
                                      $.BER
                                  )(value.certificate, $.BER),
                            /* IF_ABSENT  */ value.attributeCertificate ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_AttributeCertificate,
                                      $.BER
                                  )(value.attributeCertificate, $.BER),
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
    return _cached_encoder_for_ACPathData(value, elGetter);
}

/**
 * @summary AttributeCertificationPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCertificationPath ::= SEQUENCE {
 *   attributeCertificate  AttributeCertificate,
 *   acPath                SEQUENCE OF ACPathData OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeCertificationPath {
    constructor(
        /**
         * @summary `attributeCertificate`.
         * @public
         * @readonly
         */
        readonly attributeCertificate: AttributeCertificate,
        /**
         * @summary `acPath`.
         * @public
         * @readonly
         */
        readonly acPath: OPTIONAL<ACPathData[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeCertificationPath
     * @description
     *
     * This takes an `object` and converts it to a `AttributeCertificationPath`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeCertificationPath`.
     * @returns {AttributeCertificationPath}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeCertificationPath]: AttributeCertificationPath[_K];
            }
        >
    ): AttributeCertificationPath {
        return new AttributeCertificationPath(
            _o.attributeCertificate,
            _o.acPath,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AttributeCertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeCertificationPath: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "attributeCertificate",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "acPath",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AttributeCertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeCertificationPath: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttributeCertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeCertificationPath: $.ComponentSpec[] = [];
let _cached_decoder_for_AttributeCertificationPath: $.ASN1Decoder<
    AttributeCertificationPath
> | null = null;
let _cached_encoder_for_AttributeCertificationPath: $.ASN1Encoder<
    AttributeCertificationPath
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificationPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificationPath} The decoded data structure.
 */
export function _decode_AttributeCertificationPath(el: _Element) {
    if (!_cached_decoder_for_AttributeCertificationPath) {
        _cached_decoder_for_AttributeCertificationPath = function (
            el: _Element
        ): AttributeCertificationPath {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attributeCertificate!: AttributeCertificate;
            let acPath: OPTIONAL<ACPathData[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                attributeCertificate: (_el: _Element): void => {
                    attributeCertificate = _decode_AttributeCertificate(_el);
                },
                acPath: (_el: _Element): void => {
                    acPath = $._decodeSequenceOf<ACPathData>(
                        () => _decode_ACPathData
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeCertificationPath,
                _extension_additions_list_spec_for_AttributeCertificationPath,
                _root_component_type_list_2_spec_for_AttributeCertificationPath,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeCertificationPath(
                /* SEQUENCE_CONSTRUCTOR_CALL */ attributeCertificate,
                acPath,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeCertificationPath(el);
}
/**
 * @summary Encodes a(n) AttributeCertificationPath into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificationPath, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificationPath(
    value: AttributeCertificationPath,
    elGetter: $.ASN1Encoder<AttributeCertificationPath>
) {
    if (!_cached_encoder_for_AttributeCertificationPath) {
        _cached_encoder_for_AttributeCertificationPath = function (
            value: AttributeCertificationPath,
            elGetter: $.ASN1Encoder<AttributeCertificationPath>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeCertificate(
                                value.attributeCertificate,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.acPath === undefined
                                ? undefined
                                : $._encodeSequenceOf<ACPathData>(
                                      () => _encode_ACPathData,
                                      $.BER
                                  )(value.acPath, $.BER),
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
    return _cached_encoder_for_AttributeCertificationPath(value, elGetter);
}

/**
 * @summary RoleSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoleSyntax ::= SEQUENCE {
 *   roleAuthority  [0]  GeneralNames OPTIONAL,
 *   roleName       [1]  GeneralName,
 *   ... }
 * ```
 *
 * @class
 */
export class RoleSyntax {
    constructor(
        /**
         * @summary `roleAuthority`.
         * @public
         * @readonly
         */
        readonly roleAuthority: OPTIONAL<GeneralNames>,
        /**
         * @summary `roleName`.
         * @public
         * @readonly
         */
        readonly roleName: GeneralName,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RoleSyntax
     * @description
     *
     * This takes an `object` and converts it to a `RoleSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoleSyntax`.
     * @returns {RoleSyntax}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof RoleSyntax]: RoleSyntax[_K] }>
    ): RoleSyntax {
        return new RoleSyntax(
            _o.roleAuthority,
            _o.roleName,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of RoleSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RoleSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "roleAuthority",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "roleName",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of RoleSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RoleSyntax: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of RoleSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RoleSyntax: $.ComponentSpec[] = [];
let _cached_decoder_for_RoleSyntax: $.ASN1Decoder<RoleSyntax> | null = null;
let _cached_encoder_for_RoleSyntax: $.ASN1Encoder<RoleSyntax> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RoleSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RoleSyntax} The decoded data structure.
 */
export function _decode_RoleSyntax(el: _Element) {
    if (!_cached_decoder_for_RoleSyntax) {
        _cached_decoder_for_RoleSyntax = function (el: _Element): RoleSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let roleAuthority: OPTIONAL<GeneralNames>;
            let roleName!: GeneralName;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                roleAuthority: (_el: _Element): void => {
                    roleAuthority = $._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
                roleName: (_el: _Element): void => {
                    roleName = $._decode_implicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RoleSyntax,
                _extension_additions_list_spec_for_RoleSyntax,
                _root_component_type_list_2_spec_for_RoleSyntax,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RoleSyntax(
                /* SEQUENCE_CONSTRUCTOR_CALL */ roleAuthority,
                roleName,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RoleSyntax(el);
}
/**
 * @summary Encodes a(n) RoleSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoleSyntax, encoded as an ASN.1 Element.
 */
export function _encode_RoleSyntax(
    value: RoleSyntax,
    elGetter: $.ASN1Encoder<RoleSyntax>
) {
    if (!_cached_encoder_for_RoleSyntax) {
        _cached_encoder_for_RoleSyntax = function (
            value: RoleSyntax,
            elGetter: $.ASN1Encoder<RoleSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.roleAuthority === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralNames,
                                      $.BER
                                  )(value.roleAuthority, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => _encode_GeneralName,
                                $.BER
                            )(value.roleName, $.BER),
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
    return _cached_encoder_for_RoleSyntax(value, elGetter);
}

/**
 * @summary id_at_role
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-role                               OBJECT IDENTIFIER ::= {id-at 72}
 * ```
 *
 * @constant
 */
export const id_at_role: OBJECT_IDENTIFIER = new _OID([72], id_at);

/**
 * @summary role
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * role ATTRIBUTE ::= {
 *   WITH SYNTAX  RoleSyntax
 *   ID           id-at-role }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const role: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_RoleSyntax,
    },
    encoderFor: {
        "&Type": _encode_RoleSyntax,
    },
    "&id": id_at_role /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary id_at_xMLPrivilegeInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-xMLPrivilegeInfo                   OBJECT IDENTIFIER ::= {id-at 75}
 * ```
 *
 * @constant
 */
export const id_at_xMLPrivilegeInfo: OBJECT_IDENTIFIER = new _OID([75], id_at);

/**
 * @summary xmlPrivilegeInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * xmlPrivilegeInfo ATTRIBUTE ::= {
 *   WITH SYNTAX  UTF8String --contains XML-encoded privilege information
 *   ID           id-at-xMLPrivilegeInfo }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const xmlPrivilegeInfo: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeUTF8String,
    },
    encoderFor: {
        "&Type": $._encodeUTF8String,
    },
    "&id": id_at_xMLPrivilegeInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary DualStringSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DualStringSyntax ::= SEQUENCE {
 *   operation  [0]  UnboundedDirectoryString,
 *   object     [1]  UnboundedDirectoryString,
 *   ... }
 * ```
 *
 * @class
 */
export class DualStringSyntax {
    constructor(
        /**
         * @summary `operation`.
         * @public
         * @readonly
         */
        readonly operation: UnboundedDirectoryString,
        /**
         * @summary `object`.
         * @public
         * @readonly
         */
        readonly object: UnboundedDirectoryString,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DualStringSyntax
     * @description
     *
     * This takes an `object` and converts it to a `DualStringSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DualStringSyntax`.
     * @returns {DualStringSyntax}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DualStringSyntax]: DualStringSyntax[_K] }>
    ): DualStringSyntax {
        return new DualStringSyntax(
            _o.operation,
            _o.object,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of DualStringSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DualStringSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "operation",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "object",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DualStringSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DualStringSyntax: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DualStringSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DualStringSyntax: $.ComponentSpec[] = [];
let _cached_decoder_for_DualStringSyntax: $.ASN1Decoder<
    DualStringSyntax
> | null = null;
let _cached_encoder_for_DualStringSyntax: $.ASN1Encoder<
    DualStringSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DualStringSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DualStringSyntax} The decoded data structure.
 */
export function _decode_DualStringSyntax(el: _Element) {
    if (!_cached_decoder_for_DualStringSyntax) {
        _cached_decoder_for_DualStringSyntax = function (
            el: _Element
        ): DualStringSyntax {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "DualStringSyntax contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "operation";
            sequence[1].name = "object";
            let operation!: UnboundedDirectoryString;
            let object!: UnboundedDirectoryString;
            operation = $._decode_implicit<UnboundedDirectoryString>(
                () => _decode_UnboundedDirectoryString
            )(sequence[0]);
            object = $._decode_implicit<UnboundedDirectoryString>(
                () => _decode_UnboundedDirectoryString
            )(sequence[1]);
            return new DualStringSyntax(operation, object, sequence.slice(2));
        };
    }
    return _cached_decoder_for_DualStringSyntax(el);
}
/**
 * @summary Encodes a(n) DualStringSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DualStringSyntax, encoded as an ASN.1 Element.
 */
export function _encode_DualStringSyntax(
    value: DualStringSyntax,
    elGetter: $.ASN1Encoder<DualStringSyntax>
) {
    if (!_cached_encoder_for_DualStringSyntax) {
        _cached_encoder_for_DualStringSyntax = function (
            value: DualStringSyntax,
            elGetter: $.ASN1Encoder<DualStringSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => _encode_UnboundedDirectoryString,
                                $.BER
                            )(value.operation, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => _encode_UnboundedDirectoryString,
                                $.BER
                            )(value.object, $.BER),
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
    return _cached_encoder_for_DualStringSyntax(value, elGetter);
}

/**
 * @summary id_mr_dualStringMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-dualStringMatch                    OBJECT IDENTIFIER ::= {id-mr 69}
 * ```
 *
 * @constant
 */
export const id_mr_dualStringMatch: OBJECT_IDENTIFIER = new _OID([69], id_mr);

/**
 * @summary dualStringMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dualStringMatch MATCHING-RULE ::= {
 *   SYNTAX  DualStringSyntax
 *   ID      id-mr-dualStringMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const dualStringMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_DualStringSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_DualStringSyntax,
    },
    "&id": id_mr_dualStringMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_permission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-permission                         OBJECT IDENTIFIER ::= {id-at 82}
 * ```
 *
 * @constant
 */
export const id_at_permission: OBJECT_IDENTIFIER = new _OID([82], id_at);

/**
 * @summary permission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * permission ATTRIBUTE ::= {
 *   WITH SYNTAX             DualStringSyntax
 *   EQUALITY MATCHING RULE  dualStringMatch
 *   ID                      id-at-permission }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const permission: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DualStringSyntax,
    },
    encoderFor: {
        "&Type": _encode_DualStringSyntax,
    },
    "&equality-match": dualStringMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_permission /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary id_ce_timeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-timeSpecification                  OBJECT IDENTIFIER ::= {id-ce 43}
 * ```
 *
 * @constant
 */
export const id_ce_timeSpecification: OBJECT_IDENTIFIER = new _OID([43], id_ce);

/**
 * @summary timeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * timeSpecification EXTENSION ::= {
 *   SYNTAX         TimeSpecification
 *   IDENTIFIED BY  id-ce-timeSpecification }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const timeSpecification: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_TimeSpecification,
    },
    encoderFor: {
        "&ExtnType": _encode_TimeSpecification,
    },
    "&id": id_ce_timeSpecification /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_timeSpecMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-timeSpecMatch                      OBJECT IDENTIFIER ::= {id-mr 57}
 * ```
 *
 * @constant
 */
export const id_mr_timeSpecMatch: OBJECT_IDENTIFIER = new _OID([57], id_mr);

/**
 * @summary timeSpecificationMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * timeSpecificationMatch MATCHING-RULE ::= {
 *   SYNTAX  TimeSpecification
 *   ID      id-mr-timeSpecMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const timeSpecificationMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_TimeSpecification,
    },
    encoderFor: {
        "&AssertionType": _encode_TimeSpecification,
    },
    "&id": id_mr_timeSpecMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary TargetCert
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TargetCert ::= SEQUENCE {
 *   targetCertificate  IssuerSerial,
 *   targetName         GeneralName OPTIONAL,
 *   certDigestInfo     ObjectDigestInfo OPTIONAL }
 * ```
 *
 * @class
 */
export class TargetCert {
    constructor(
        /**
         * @summary `targetCertificate`.
         * @public
         * @readonly
         */
        readonly targetCertificate: IssuerSerial,
        /**
         * @summary `targetName`.
         * @public
         * @readonly
         */
        readonly targetName: OPTIONAL<GeneralName>,
        /**
         * @summary `certDigestInfo`.
         * @public
         * @readonly
         */
        readonly certDigestInfo: OPTIONAL<ObjectDigestInfo>
    ) {}

    /**
     * @summary Restructures an object into a TargetCert
     * @description
     *
     * This takes an `object` and converts it to a `TargetCert`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TargetCert`.
     * @returns {TargetCert}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TargetCert]: TargetCert[_K] }>
    ): TargetCert {
        return new TargetCert(
            _o.targetCertificate,
            _o.targetName,
            _o.certDigestInfo
        );
    }
}
/**
 * @summary The Leading Root Component Types of TargetCert
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TargetCert: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "targetCertificate",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec("targetName", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "certDigestInfo",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TargetCert
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TargetCert: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TargetCert
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TargetCert: $.ComponentSpec[] = [];
let _cached_decoder_for_TargetCert: $.ASN1Decoder<TargetCert> | null = null;
let _cached_encoder_for_TargetCert: $.ASN1Encoder<TargetCert> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TargetCert
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TargetCert} The decoded data structure.
 */
export function _decode_TargetCert(el: _Element) {
    if (!_cached_decoder_for_TargetCert) {
        _cached_decoder_for_TargetCert = function (el: _Element): TargetCert {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let targetCertificate!: IssuerSerial;
            let targetName: OPTIONAL<GeneralName>;
            let certDigestInfo: OPTIONAL<ObjectDigestInfo>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                targetCertificate: (_el: _Element): void => {
                    targetCertificate = _decode_IssuerSerial(_el);
                },
                targetName: (_el: _Element): void => {
                    targetName = _decode_GeneralName(_el);
                },
                certDigestInfo: (_el: _Element): void => {
                    certDigestInfo = _decode_ObjectDigestInfo(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TargetCert,
                _extension_additions_list_spec_for_TargetCert,
                _root_component_type_list_2_spec_for_TargetCert,
                undefined
            );
            return new TargetCert(
                /* SEQUENCE_CONSTRUCTOR_CALL */ targetCertificate,
                targetName,
                certDigestInfo
            );
        };
    }
    return _cached_decoder_for_TargetCert(el);
}
/**
 * @summary Encodes a(n) TargetCert into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TargetCert, encoded as an ASN.1 Element.
 */
export function _encode_TargetCert(
    value: TargetCert,
    elGetter: $.ASN1Encoder<TargetCert>
) {
    if (!_cached_encoder_for_TargetCert) {
        _cached_encoder_for_TargetCert = function (
            value: TargetCert,
            elGetter: $.ASN1Encoder<TargetCert>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_IssuerSerial(
                            value.targetCertificate,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.targetName === undefined
                            ? undefined
                            : _encode_GeneralName(value.targetName, $.BER),
                        /* IF_ABSENT  */ value.certDigestInfo === undefined
                            ? undefined
                            : _encode_ObjectDigestInfo(
                                  value.certDigestInfo,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TargetCert(value, elGetter);
}

/**
 * @summary Target
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Target  ::=  CHOICE {
 *   targetName   [0]  GeneralName,
 *   targetGroup  [1]  GeneralName,
 *   targetCert   [2]  TargetCert,
 *   ... }
 * ```
 */
export type Target =
    | { targetName: GeneralName } /* CHOICE_ALT_ROOT */
    | { targetGroup: GeneralName } /* CHOICE_ALT_ROOT */
    | { targetCert: TargetCert } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Target: $.ASN1Decoder<Target> | null = null;
let _cached_encoder_for_Target: $.ASN1Encoder<Target> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Target
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Target} The decoded data structure.
 */
export function _decode_Target(el: _Element) {
    if (!_cached_decoder_for_Target) {
        _cached_decoder_for_Target = $._decode_extensible_choice<Target>({
            "CONTEXT 0": [
                "targetName",
                $._decode_implicit<GeneralName>(() => _decode_GeneralName),
            ],
            "CONTEXT 1": [
                "targetGroup",
                $._decode_implicit<GeneralName>(() => _decode_GeneralName),
            ],
            "CONTEXT 2": [
                "targetCert",
                $._decode_implicit<TargetCert>(() => _decode_TargetCert),
            ],
        });
    }
    return _cached_decoder_for_Target(el);
}
/**
 * @summary Encodes a(n) Target into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Target, encoded as an ASN.1 Element.
 */
export function _encode_Target(value: Target, elGetter: $.ASN1Encoder<Target>) {
    if (!_cached_encoder_for_Target) {
        _cached_encoder_for_Target = $._encode_choice<Target>(
            {
                targetName: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_GeneralName,
                    $.BER
                ),
                targetGroup: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GeneralName,
                    $.BER
                ),
                targetCert: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_TargetCert,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Target(value, elGetter);
}

export type Targets<> = Target[]; // SequenceOfType
let _cached_decoder_for_Targets: $.ASN1Decoder<Targets> | null = null;
let _cached_encoder_for_Targets: $.ASN1Encoder<Targets> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Targets
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Targets} The decoded data structure.
 */
export function _decode_Targets(el: _Element) {
    if (!_cached_decoder_for_Targets) {
        _cached_decoder_for_Targets = $._decodeSequenceOf<Target>(
            () => _decode_Target
        );
    }
    return _cached_decoder_for_Targets(el);
}
/**
 * @summary Encodes a(n) Targets into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Targets, encoded as an ASN.1 Element.
 */
export function _encode_Targets(
    value: Targets,
    elGetter: $.ASN1Encoder<Targets>
) {
    if (!_cached_encoder_for_Targets) {
        _cached_encoder_for_Targets = $._encodeSequenceOf<Target>(
            () => _encode_Target,
            $.BER
        );
    }
    return _cached_encoder_for_Targets(value, elGetter);
}

/**
 * @summary id_ce_targetingInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-targetingInformation               OBJECT IDENTIFIER ::= {id-ce 55}
 * ```
 *
 * @constant
 */
export const id_ce_targetingInformation: OBJECT_IDENTIFIER = new _OID(
    [55],
    id_ce
);

/**
 * @summary targetingInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * targetingInformation EXTENSION ::= {
 *   SYNTAX         SEQUENCE SIZE (1..MAX) OF Targets
 *   IDENTIFIED BY  id-ce-targetingInformation }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const targetingInformation: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeSequenceOf<Targets>(() => _decode_Targets),
    },
    encoderFor: {
        "&ExtnType": $._encodeSequenceOf<Targets>(() => _encode_Targets, $.BER),
    },
    "&id": id_ce_targetingInformation /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary DisplayText
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DisplayText  ::=  CHOICE {
 *   visibleString  VisibleString(SIZE (1..200)),
 *   bmpString      BMPString(SIZE (1..200)),
 *   utf8String     UTF8String(SIZE (1..200)) }
 * ```
 */
export type DisplayText =
    | { visibleString: VisibleString } /* CHOICE_ALT_ROOT */
    | { bmpString: BMPString } /* CHOICE_ALT_ROOT */
    | { utf8String: UTF8String } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_DisplayText: $.ASN1Decoder<DisplayText> | null = null;
let _cached_encoder_for_DisplayText: $.ASN1Encoder<DisplayText> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DisplayText
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DisplayText} The decoded data structure.
 */
export function _decode_DisplayText(el: _Element) {
    if (!_cached_decoder_for_DisplayText) {
        _cached_decoder_for_DisplayText = $._decode_inextensible_choice<
            DisplayText
        >({
            "UNIVERSAL 26": ["visibleString", $._decodeVisibleString],
            "UNIVERSAL 30": ["bmpString", $._decodeBMPString],
            "UNIVERSAL 12": ["utf8String", $._decodeUTF8String],
        });
    }
    return _cached_decoder_for_DisplayText(el);
}
/**
 * @summary Encodes a(n) DisplayText into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisplayText, encoded as an ASN.1 Element.
 */
export function _encode_DisplayText(
    value: DisplayText,
    elGetter: $.ASN1Encoder<DisplayText>
) {
    if (!_cached_encoder_for_DisplayText) {
        _cached_encoder_for_DisplayText = $._encode_choice<DisplayText>(
            {
                visibleString: $._encodeVisibleString,
                bmpString: $._encodeBMPString,
                utf8String: $._encodeUTF8String,
            },
            $.BER
        );
    }
    return _cached_encoder_for_DisplayText(value, elGetter);
}

/**
 * @summary NoticeReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoticeReference ::= SEQUENCE {
 *   organization   DisplayText,
 *   noticeNumbers  SEQUENCE OF INTEGER }
 * ```
 *
 * @class
 */
export class NoticeReference {
    constructor(
        /**
         * @summary `organization`.
         * @public
         * @readonly
         */
        readonly organization: DisplayText,
        /**
         * @summary `noticeNumbers`.
         * @public
         * @readonly
         */
        readonly noticeNumbers: INTEGER[]
    ) {}

    /**
     * @summary Restructures an object into a NoticeReference
     * @description
     *
     * This takes an `object` and converts it to a `NoticeReference`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NoticeReference`.
     * @returns {NoticeReference}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof NoticeReference]: NoticeReference[_K] }>
    ): NoticeReference {
        return new NoticeReference(_o.organization, _o.noticeNumbers);
    }
}
/**
 * @summary The Leading Root Component Types of NoticeReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NoticeReference: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "organization",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "noticeNumbers",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of NoticeReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NoticeReference: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of NoticeReference
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NoticeReference: $.ComponentSpec[] = [];
let _cached_decoder_for_NoticeReference: $.ASN1Decoder<
    NoticeReference
> | null = null;
let _cached_encoder_for_NoticeReference: $.ASN1Encoder<
    NoticeReference
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) NoticeReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoticeReference} The decoded data structure.
 */
export function _decode_NoticeReference(el: _Element) {
    if (!_cached_decoder_for_NoticeReference) {
        _cached_decoder_for_NoticeReference = function (
            el: _Element
        ): NoticeReference {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "NoticeReference contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "organization";
            sequence[1].name = "noticeNumbers";
            let organization!: DisplayText;
            let noticeNumbers!: INTEGER[];
            organization = _decode_DisplayText(sequence[0]);
            noticeNumbers = $._decodeSequenceOf<INTEGER>(
                () => $._decodeInteger
            )(sequence[1]);
            return new NoticeReference(organization, noticeNumbers);
        };
    }
    return _cached_decoder_for_NoticeReference(el);
}
/**
 * @summary Encodes a(n) NoticeReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoticeReference, encoded as an ASN.1 Element.
 */
export function _encode_NoticeReference(
    value: NoticeReference,
    elGetter: $.ASN1Encoder<NoticeReference>
) {
    if (!_cached_encoder_for_NoticeReference) {
        _cached_encoder_for_NoticeReference = function (
            value: NoticeReference,
            elGetter: $.ASN1Encoder<NoticeReference>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_DisplayText(
                            value.organization,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSequenceOf<INTEGER>(
                            () => $._encodeInteger,
                            $.BER
                        )(value.noticeNumbers, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NoticeReference(value, elGetter);
}

/**
 * @summary UserNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserNotice ::= SEQUENCE {
 *   noticeRef     NoticeReference OPTIONAL,
 *   explicitText  DisplayText OPTIONAL }
 * ```
 *
 * @class
 */
export class UserNotice {
    constructor(
        /**
         * @summary `noticeRef`.
         * @public
         * @readonly
         */
        readonly noticeRef: OPTIONAL<NoticeReference>,
        /**
         * @summary `explicitText`.
         * @public
         * @readonly
         */
        readonly explicitText: OPTIONAL<DisplayText>
    ) {}

    /**
     * @summary Restructures an object into a UserNotice
     * @description
     *
     * This takes an `object` and converts it to a `UserNotice`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserNotice`.
     * @returns {UserNotice}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UserNotice]: UserNotice[_K] }>
    ): UserNotice {
        return new UserNotice(_o.noticeRef, _o.explicitText);
    }
}
/**
 * @summary The Leading Root Component Types of UserNotice
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UserNotice: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "noticeRef",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "explicitText",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of UserNotice
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UserNotice: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of UserNotice
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UserNotice: $.ComponentSpec[] = [];
let _cached_decoder_for_UserNotice: $.ASN1Decoder<UserNotice> | null = null;
let _cached_encoder_for_UserNotice: $.ASN1Encoder<UserNotice> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UserNotice
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserNotice} The decoded data structure.
 */
export function _decode_UserNotice(el: _Element) {
    if (!_cached_decoder_for_UserNotice) {
        _cached_decoder_for_UserNotice = function (el: _Element): UserNotice {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let noticeRef: OPTIONAL<NoticeReference>;
            let explicitText: OPTIONAL<DisplayText>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                noticeRef: (_el: _Element): void => {
                    noticeRef = _decode_NoticeReference(_el);
                },
                explicitText: (_el: _Element): void => {
                    explicitText = _decode_DisplayText(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UserNotice,
                _extension_additions_list_spec_for_UserNotice,
                _root_component_type_list_2_spec_for_UserNotice,
                undefined
            );
            return new UserNotice(
                /* SEQUENCE_CONSTRUCTOR_CALL */ noticeRef,
                explicitText
            );
        };
    }
    return _cached_decoder_for_UserNotice(el);
}
/**
 * @summary Encodes a(n) UserNotice into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserNotice, encoded as an ASN.1 Element.
 */
export function _encode_UserNotice(
    value: UserNotice,
    elGetter: $.ASN1Encoder<UserNotice>
) {
    if (!_cached_encoder_for_UserNotice) {
        _cached_encoder_for_UserNotice = function (
            value: UserNotice,
            elGetter: $.ASN1Encoder<UserNotice>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.noticeRef === undefined
                            ? undefined
                            : _encode_NoticeReference(value.noticeRef, $.BER),
                        /* IF_ABSENT  */ value.explicitText === undefined
                            ? undefined
                            : _encode_DisplayText(value.explicitText, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UserNotice(value, elGetter);
}

/**
 * @summary id_ce_userNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-userNotice                         OBJECT IDENTIFIER ::= {id-ce 49}
 * ```
 *
 * @constant
 */
export const id_ce_userNotice: OBJECT_IDENTIFIER = new _OID([49], id_ce);

/**
 * @summary userNotice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userNotice EXTENSION ::= {
 *   SYNTAX         SEQUENCE SIZE (1..MAX) OF UserNotice
 *   IDENTIFIED BY  id-ce-userNotice }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const userNotice: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeSequenceOf<UserNotice>(() => _decode_UserNotice),
    },
    encoderFor: {
        "&ExtnType": $._encodeSequenceOf<UserNotice>(
            () => _encode_UserNotice,
            $.BER
        ),
    },
    "&id": id_ce_userNotice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type PrivilegePolicy<> = OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_PrivilegePolicy: $.ASN1Decoder<
    PrivilegePolicy
> | null = null;
let _cached_encoder_for_PrivilegePolicy: $.ASN1Encoder<
    PrivilegePolicy
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PrivilegePolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivilegePolicy} The decoded data structure.
 */
export function _decode_PrivilegePolicy(el: _Element) {
    if (!_cached_decoder_for_PrivilegePolicy) {
        _cached_decoder_for_PrivilegePolicy = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_PrivilegePolicy(el);
}
/**
 * @summary Encodes a(n) PrivilegePolicy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivilegePolicy, encoded as an ASN.1 Element.
 */
export function _encode_PrivilegePolicy(
    value: PrivilegePolicy,
    elGetter: $.ASN1Encoder<PrivilegePolicy>
) {
    if (!_cached_encoder_for_PrivilegePolicy) {
        _cached_encoder_for_PrivilegePolicy = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_PrivilegePolicy(value, elGetter);
}

export type AcceptablePrivilegePoliciesSyntax<> = PrivilegePolicy[]; // SequenceOfType
let _cached_decoder_for_AcceptablePrivilegePoliciesSyntax: $.ASN1Decoder<
    AcceptablePrivilegePoliciesSyntax
> | null = null;
let _cached_encoder_for_AcceptablePrivilegePoliciesSyntax: $.ASN1Encoder<
    AcceptablePrivilegePoliciesSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AcceptablePrivilegePoliciesSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AcceptablePrivilegePoliciesSyntax} The decoded data structure.
 */
export function _decode_AcceptablePrivilegePoliciesSyntax(el: _Element) {
    if (!_cached_decoder_for_AcceptablePrivilegePoliciesSyntax) {
        _cached_decoder_for_AcceptablePrivilegePoliciesSyntax = $._decodeSequenceOf<
            PrivilegePolicy
        >(() => _decode_PrivilegePolicy);
    }
    return _cached_decoder_for_AcceptablePrivilegePoliciesSyntax(el);
}
/**
 * @summary Encodes a(n) AcceptablePrivilegePoliciesSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcceptablePrivilegePoliciesSyntax, encoded as an ASN.1 Element.
 */
export function _encode_AcceptablePrivilegePoliciesSyntax(
    value: AcceptablePrivilegePoliciesSyntax,
    elGetter: $.ASN1Encoder<AcceptablePrivilegePoliciesSyntax>
) {
    if (!_cached_encoder_for_AcceptablePrivilegePoliciesSyntax) {
        _cached_encoder_for_AcceptablePrivilegePoliciesSyntax = $._encodeSequenceOf<
            PrivilegePolicy
        >(() => _encode_PrivilegePolicy, $.BER);
    }
    return _cached_encoder_for_AcceptablePrivilegePoliciesSyntax(
        value,
        elGetter
    );
}

/**
 * @summary id_ce_acceptablePrivilegePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-acceptablePrivilegePolicies        OBJECT IDENTIFIER ::= {id-ce 57}
 * ```
 *
 * @constant
 */
export const id_ce_acceptablePrivilegePolicies: OBJECT_IDENTIFIER = new _OID(
    [57],
    id_ce
);

/**
 * @summary acceptablePrivilegePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acceptablePrivilegePolicies EXTENSION ::= {
 *   SYNTAX         AcceptablePrivilegePoliciesSyntax
 *   IDENTIFIED BY  id-ce-acceptablePrivilegePolicies }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const acceptablePrivilegePolicies: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AcceptablePrivilegePoliciesSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AcceptablePrivilegePoliciesSyntax,
    },
    "&id": id_ce_acceptablePrivilegePolicies /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_singleUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-singleUse                          OBJECT IDENTIFIER ::= {id-ce 65}
 * ```
 *
 * @constant
 */
export const id_ce_singleUse: OBJECT_IDENTIFIER = new _OID([65], id_ce);

/**
 * @summary singleUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * singleUse EXTENSION ::= {
 *   SYNTAX         NULL
 *   IDENTIFIED BY  id-ce-singleUse }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const singleUse: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_ce_singleUse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_groupAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-groupAC                            OBJECT IDENTIFIER ::= {id-ce 66}
 * ```
 *
 * @constant
 */
export const id_ce_groupAC: OBJECT_IDENTIFIER = new _OID([66], id_ce);

/**
 * @summary groupAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * groupAC EXTENSION ::= {
 *   SYNTAX         NULL
 *   IDENTIFIED BY  id-ce-groupAC }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const groupAC: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_ce_groupAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_noRevAvail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-noRevAvail                         OBJECT IDENTIFIER ::= {id-ce 56}
 * ```
 *
 * @constant
 */
export const id_ce_noRevAvail: OBJECT_IDENTIFIER = new _OID([56], id_ce);

/**
 * @summary noRevAvail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noRevAvail EXTENSION ::= {
 *   SYNTAX         NULL
 *   IDENTIFIED BY  id-ce-noRevAvail }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const noRevAvail: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_ce_noRevAvail /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_sOAIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-sOAIdentifier                      OBJECT IDENTIFIER ::= {id-ce 50}
 * ```
 *
 * @constant
 */
export const id_ce_sOAIdentifier: OBJECT_IDENTIFIER = new _OID([50], id_ce);

/**
 * @summary sOAIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sOAIdentifier EXTENSION ::= {
 *   SYNTAX         NULL
 *   IDENTIFIED BY  id-ce-sOAIdentifier }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const sOAIdentifier: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_ce_sOAIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_sOAIdentifierMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-sOAIdentifierMatch                 OBJECT IDENTIFIER ::= {id-mr 66}
 * ```
 *
 * @constant
 */
export const id_mr_sOAIdentifierMatch: OBJECT_IDENTIFIER = new _OID(
    [66],
    id_mr
);

/**
 * @summary sOAIdentifierMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sOAIdentifierMatch MATCHING-RULE ::= {
 *   SYNTAX  NULL
 *   ID      id-mr-sOAIdentifierMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const sOAIdentifierMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeNull,
    },
    encoderFor: {
        "&AssertionType": $._encodeNull,
    },
    "&id": id_mr_sOAIdentifierMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary AttributeIDs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeIDs ATTRIBUTE ::= {...}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const AttributeIDs: ATTRIBUTE[] = [];

export type AttributeIdentifier<> = OBJECT_IDENTIFIER; // ObjectClassFieldType
let _cached_decoder_for_AttributeIdentifier: $.ASN1Decoder<
    AttributeIdentifier
> | null = null;
let _cached_encoder_for_AttributeIdentifier: $.ASN1Encoder<
    AttributeIdentifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeIdentifier} The decoded data structure.
 */
export function _decode_AttributeIdentifier(el: _Element) {
    if (!_cached_decoder_for_AttributeIdentifier) {
        _cached_decoder_for_AttributeIdentifier = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_AttributeIdentifier(el);
}
/**
 * @summary Encodes a(n) AttributeIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_AttributeIdentifier(
    value: AttributeIdentifier,
    elGetter: $.ASN1Encoder<AttributeIdentifier>
) {
    if (!_cached_encoder_for_AttributeIdentifier) {
        _cached_encoder_for_AttributeIdentifier = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_AttributeIdentifier(value, elGetter);
}

export type AttributeName<> = UTF8String; // UTF8String
let _cached_decoder_for_AttributeName: $.ASN1Decoder<
    AttributeName
> | null = null;
let _cached_encoder_for_AttributeName: $.ASN1Encoder<
    AttributeName
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeName} The decoded data structure.
 */
export function _decode_AttributeName(el: _Element) {
    if (!_cached_decoder_for_AttributeName) {
        _cached_decoder_for_AttributeName = $._decodeUTF8String;
    }
    return _cached_decoder_for_AttributeName(el);
}
/**
 * @summary Encodes a(n) AttributeName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeName, encoded as an ASN.1 Element.
 */
export function _encode_AttributeName(
    value: AttributeName,
    elGetter: $.ASN1Encoder<AttributeName>
) {
    if (!_cached_encoder_for_AttributeName) {
        _cached_encoder_for_AttributeName = $._encodeUTF8String;
    }
    return _cached_encoder_for_AttributeName(value, elGetter);
}

export type AttributeDescription<> = UTF8String; // UTF8String
let _cached_decoder_for_AttributeDescription: $.ASN1Decoder<
    AttributeDescription
> | null = null;
let _cached_encoder_for_AttributeDescription: $.ASN1Encoder<
    AttributeDescription
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeDescription} The decoded data structure.
 */
export function _decode_AttributeDescription(el: _Element) {
    if (!_cached_decoder_for_AttributeDescription) {
        _cached_decoder_for_AttributeDescription = $._decodeUTF8String;
    }
    return _cached_decoder_for_AttributeDescription(el);
}
/**
 * @summary Encodes a(n) AttributeDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeDescription, encoded as an ASN.1 Element.
 */
export function _encode_AttributeDescription(
    value: AttributeDescription,
    elGetter: $.ASN1Encoder<AttributeDescription>
) {
    if (!_cached_encoder_for_AttributeDescription) {
        _cached_encoder_for_AttributeDescription = $._encodeUTF8String;
    }
    return _cached_encoder_for_AttributeDescription(value, elGetter);
}

/**
 * @summary PrivilegePolicyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivilegePolicyIdentifier ::= SEQUENCE {
 *   privilegePolicy  PrivilegePolicy,
 *   privPolSyntax    InfoSyntax,
 *   ... }
 * ```
 *
 * @class
 */
export class PrivilegePolicyIdentifier {
    constructor(
        /**
         * @summary `privilegePolicy`.
         * @public
         * @readonly
         */
        readonly privilegePolicy: PrivilegePolicy,
        /**
         * @summary `privPolSyntax`.
         * @public
         * @readonly
         */
        readonly privPolSyntax: InfoSyntax,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PrivilegePolicyIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `PrivilegePolicyIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivilegePolicyIdentifier`.
     * @returns {PrivilegePolicyIdentifier}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof PrivilegePolicyIdentifier]: PrivilegePolicyIdentifier[_K];
            }
        >
    ): PrivilegePolicyIdentifier {
        return new PrivilegePolicyIdentifier(
            _o.privilegePolicy,
            _o.privPolSyntax,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of PrivilegePolicyIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PrivilegePolicyIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "privilegePolicy",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "privPolSyntax",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of PrivilegePolicyIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PrivilegePolicyIdentifier: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of PrivilegePolicyIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PrivilegePolicyIdentifier: $.ComponentSpec[] = [];
let _cached_decoder_for_PrivilegePolicyIdentifier: $.ASN1Decoder<
    PrivilegePolicyIdentifier
> | null = null;
let _cached_encoder_for_PrivilegePolicyIdentifier: $.ASN1Encoder<
    PrivilegePolicyIdentifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PrivilegePolicyIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivilegePolicyIdentifier} The decoded data structure.
 */
export function _decode_PrivilegePolicyIdentifier(el: _Element) {
    if (!_cached_decoder_for_PrivilegePolicyIdentifier) {
        _cached_decoder_for_PrivilegePolicyIdentifier = function (
            el: _Element
        ): PrivilegePolicyIdentifier {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PrivilegePolicyIdentifier contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "privilegePolicy";
            sequence[1].name = "privPolSyntax";
            let privilegePolicy!: PrivilegePolicy;
            let privPolSyntax!: InfoSyntax;
            privilegePolicy = _decode_PrivilegePolicy(sequence[0]);
            privPolSyntax = _decode_InfoSyntax(sequence[1]);
            return new PrivilegePolicyIdentifier(
                privilegePolicy,
                privPolSyntax,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_PrivilegePolicyIdentifier(el);
}
/**
 * @summary Encodes a(n) PrivilegePolicyIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivilegePolicyIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_PrivilegePolicyIdentifier(
    value: PrivilegePolicyIdentifier,
    elGetter: $.ASN1Encoder<PrivilegePolicyIdentifier>
) {
    if (!_cached_encoder_for_PrivilegePolicyIdentifier) {
        _cached_encoder_for_PrivilegePolicyIdentifier = function (
            value: PrivilegePolicyIdentifier,
            elGetter: $.ASN1Encoder<PrivilegePolicyIdentifier>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_PrivilegePolicy(
                                value.privilegePolicy,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_InfoSyntax(
                                value.privPolSyntax,
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
    return _cached_encoder_for_PrivilegePolicyIdentifier(value, elGetter);
}

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
/**
 * @summary The Trailing Root Component Types of AttributeDescriptorSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeDescriptorSyntax: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttributeDescriptorSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeDescriptorSyntax: $.ComponentSpec[] = [];
let _cached_decoder_for_AttributeDescriptorSyntax: $.ASN1Decoder<
    AttributeDescriptorSyntax
> | null = null;
let _cached_encoder_for_AttributeDescriptorSyntax: $.ASN1Encoder<
    AttributeDescriptorSyntax
> | null = null;
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

/**
 * @summary attributeDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeDescriptor EXTENSION ::= {
 *   SYNTAX         AttributeDescriptorSyntax
 *   IDENTIFIED BY  {id-ce-attributeDescriptor} }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const attributeDescriptor: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AttributeDescriptorSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AttributeDescriptorSyntax,
    },
    "&id": undefined,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_attDescriptorMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-attDescriptorMatch                 OBJECT IDENTIFIER ::= {id-mr 58}
 * ```
 *
 * @constant
 */
export const id_mr_attDescriptorMatch: OBJECT_IDENTIFIER = new _OID(
    [58],
    id_mr
);

/**
 * @summary attDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attDescriptor MATCHING-RULE ::= {
 *   SYNTAX  AttributeDescriptorSyntax
 *   ID      id-mr-attDescriptorMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const attDescriptor: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_AttributeDescriptorSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_AttributeDescriptorSyntax,
    },
    "&id": id_mr_attDescriptorMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary RoleSpecCertIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RoleSpecCertIdentifier ::= SEQUENCE {
 *   roleName              [0]  GeneralName,
 *   roleCertIssuer        [1]  GeneralName,
 *   roleCertSerialNumber  [2]  CertificateSerialNumber OPTIONAL,
 *   roleCertLocator       [3]  GeneralNames OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class RoleSpecCertIdentifier {
    constructor(
        /**
         * @summary `roleName`.
         * @public
         * @readonly
         */
        readonly roleName: GeneralName,
        /**
         * @summary `roleCertIssuer`.
         * @public
         * @readonly
         */
        readonly roleCertIssuer: GeneralName,
        /**
         * @summary `roleCertSerialNumber`.
         * @public
         * @readonly
         */
        readonly roleCertSerialNumber: OPTIONAL<CertificateSerialNumber>,
        /**
         * @summary `roleCertLocator`.
         * @public
         * @readonly
         */
        readonly roleCertLocator: OPTIONAL<GeneralNames>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RoleSpecCertIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `RoleSpecCertIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoleSpecCertIdentifier`.
     * @returns {RoleSpecCertIdentifier}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof RoleSpecCertIdentifier]: RoleSpecCertIdentifier[_K] }
        >
    ): RoleSpecCertIdentifier {
        return new RoleSpecCertIdentifier(
            _o.roleName,
            _o.roleCertIssuer,
            _o.roleCertSerialNumber,
            _o.roleCertLocator,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of RoleSpecCertIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RoleSpecCertIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "roleName",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "roleCertIssuer",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "roleCertSerialNumber",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "roleCertLocator",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of RoleSpecCertIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RoleSpecCertIdentifier: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of RoleSpecCertIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RoleSpecCertIdentifier: $.ComponentSpec[] = [];
let _cached_decoder_for_RoleSpecCertIdentifier: $.ASN1Decoder<
    RoleSpecCertIdentifier
> | null = null;
let _cached_encoder_for_RoleSpecCertIdentifier: $.ASN1Encoder<
    RoleSpecCertIdentifier
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RoleSpecCertIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RoleSpecCertIdentifier} The decoded data structure.
 */
export function _decode_RoleSpecCertIdentifier(el: _Element) {
    if (!_cached_decoder_for_RoleSpecCertIdentifier) {
        _cached_decoder_for_RoleSpecCertIdentifier = function (
            el: _Element
        ): RoleSpecCertIdentifier {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let roleName!: GeneralName;
            let roleCertIssuer!: GeneralName;
            let roleCertSerialNumber: OPTIONAL<CertificateSerialNumber>;
            let roleCertLocator: OPTIONAL<GeneralNames>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                roleName: (_el: _Element): void => {
                    roleName = $._decode_implicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                roleCertIssuer: (_el: _Element): void => {
                    roleCertIssuer = $._decode_implicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                roleCertSerialNumber: (_el: _Element): void => {
                    roleCertSerialNumber = $._decode_implicit<
                        CertificateSerialNumber
                    >(() => _decode_CertificateSerialNumber)(_el);
                },
                roleCertLocator: (_el: _Element): void => {
                    roleCertLocator = $._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RoleSpecCertIdentifier,
                _extension_additions_list_spec_for_RoleSpecCertIdentifier,
                _root_component_type_list_2_spec_for_RoleSpecCertIdentifier,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RoleSpecCertIdentifier(
                /* SEQUENCE_CONSTRUCTOR_CALL */ roleName,
                roleCertIssuer,
                roleCertSerialNumber,
                roleCertLocator,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RoleSpecCertIdentifier(el);
}
/**
 * @summary Encodes a(n) RoleSpecCertIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoleSpecCertIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_RoleSpecCertIdentifier(
    value: RoleSpecCertIdentifier,
    elGetter: $.ASN1Encoder<RoleSpecCertIdentifier>
) {
    if (!_cached_encoder_for_RoleSpecCertIdentifier) {
        _cached_encoder_for_RoleSpecCertIdentifier = function (
            value: RoleSpecCertIdentifier,
            elGetter: $.ASN1Encoder<RoleSpecCertIdentifier>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => _encode_GeneralName,
                                $.BER
                            )(value.roleName, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => _encode_GeneralName,
                                $.BER
                            )(value.roleCertIssuer, $.BER),
                            /* IF_ABSENT  */ value.roleCertSerialNumber ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_CertificateSerialNumber,
                                      $.BER
                                  )(value.roleCertSerialNumber, $.BER),
                            /* IF_ABSENT  */ value.roleCertLocator === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_GeneralNames,
                                      $.BER
                                  )(value.roleCertLocator, $.BER),
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
    return _cached_encoder_for_RoleSpecCertIdentifier(value, elGetter);
}

export type RoleSpecCertIdentifierSyntax<> = RoleSpecCertIdentifier[]; // SequenceOfType
let _cached_decoder_for_RoleSpecCertIdentifierSyntax: $.ASN1Decoder<
    RoleSpecCertIdentifierSyntax
> | null = null;
let _cached_encoder_for_RoleSpecCertIdentifierSyntax: $.ASN1Encoder<
    RoleSpecCertIdentifierSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RoleSpecCertIdentifierSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RoleSpecCertIdentifierSyntax} The decoded data structure.
 */
export function _decode_RoleSpecCertIdentifierSyntax(el: _Element) {
    if (!_cached_decoder_for_RoleSpecCertIdentifierSyntax) {
        _cached_decoder_for_RoleSpecCertIdentifierSyntax = $._decodeSequenceOf<
            RoleSpecCertIdentifier
        >(() => _decode_RoleSpecCertIdentifier);
    }
    return _cached_decoder_for_RoleSpecCertIdentifierSyntax(el);
}
/**
 * @summary Encodes a(n) RoleSpecCertIdentifierSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoleSpecCertIdentifierSyntax, encoded as an ASN.1 Element.
 */
export function _encode_RoleSpecCertIdentifierSyntax(
    value: RoleSpecCertIdentifierSyntax,
    elGetter: $.ASN1Encoder<RoleSpecCertIdentifierSyntax>
) {
    if (!_cached_encoder_for_RoleSpecCertIdentifierSyntax) {
        _cached_encoder_for_RoleSpecCertIdentifierSyntax = $._encodeSequenceOf<
            RoleSpecCertIdentifier
        >(() => _encode_RoleSpecCertIdentifier, $.BER);
    }
    return _cached_encoder_for_RoleSpecCertIdentifierSyntax(value, elGetter);
}

/**
 * @summary roleSpecCertIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * roleSpecCertIdentifier EXTENSION ::= {
 *   SYNTAX         RoleSpecCertIdentifierSyntax
 *   IDENTIFIED BY  {id-ce-roleSpecCertIdentifier} }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const roleSpecCertIdentifier: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_RoleSpecCertIdentifierSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_RoleSpecCertIdentifierSyntax,
    },
    "&id": undefined,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_roleSpecCertIdMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-roleSpecCertIdMatch                OBJECT IDENTIFIER ::= {id-mr 54}
 * ```
 *
 * @constant
 */
export const id_mr_roleSpecCertIdMatch: OBJECT_IDENTIFIER = new _OID(
    [54],
    id_mr
);

/**
 * @summary roleSpecCertIdMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * roleSpecCertIdMatch MATCHING-RULE ::= {
 *   SYNTAX  RoleSpecCertIdentifierSyntax
 *   ID      id-mr-roleSpecCertIdMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const roleSpecCertIdMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_RoleSpecCertIdentifierSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_RoleSpecCertIdentifierSyntax,
    },
    "&id": id_mr_roleSpecCertIdMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary BasicAttConstraintsSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasicAttConstraintsSyntax ::= SEQUENCE {
 *   authority          BOOLEAN DEFAULT FALSE,
 *   pathLenConstraint  INTEGER(0..MAX) OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class BasicAttConstraintsSyntax {
    constructor(
        /**
         * @summary `authority`.
         * @public
         * @readonly
         */
        readonly authority: OPTIONAL<BOOLEAN>,
        /**
         * @summary `pathLenConstraint`.
         * @public
         * @readonly
         */
        readonly pathLenConstraint: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a BasicAttConstraintsSyntax
     * @description
     *
     * This takes an `object` and converts it to a `BasicAttConstraintsSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BasicAttConstraintsSyntax`.
     * @returns {BasicAttConstraintsSyntax}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof BasicAttConstraintsSyntax]: BasicAttConstraintsSyntax[_K];
            }
        >
    ): BasicAttConstraintsSyntax {
        return new BasicAttConstraintsSyntax(
            _o.authority,
            _o.pathLenConstraint,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `authority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_authority() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of BasicAttConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BasicAttConstraintsSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "authority",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pathLenConstraint",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of BasicAttConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BasicAttConstraintsSyntax: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of BasicAttConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BasicAttConstraintsSyntax: $.ComponentSpec[] = [];
let _cached_decoder_for_BasicAttConstraintsSyntax: $.ASN1Decoder<
    BasicAttConstraintsSyntax
> | null = null;
let _cached_encoder_for_BasicAttConstraintsSyntax: $.ASN1Encoder<
    BasicAttConstraintsSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) BasicAttConstraintsSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BasicAttConstraintsSyntax} The decoded data structure.
 */
export function _decode_BasicAttConstraintsSyntax(el: _Element) {
    if (!_cached_decoder_for_BasicAttConstraintsSyntax) {
        _cached_decoder_for_BasicAttConstraintsSyntax = function (
            el: _Element
        ): BasicAttConstraintsSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let authority: OPTIONAL<BOOLEAN> =
                BasicAttConstraintsSyntax._default_value_for_authority;
            let pathLenConstraint: OPTIONAL<INTEGER>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                authority: (_el: _Element): void => {
                    authority = $._decodeBoolean(_el);
                },
                pathLenConstraint: (_el: _Element): void => {
                    pathLenConstraint = $._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BasicAttConstraintsSyntax,
                _extension_additions_list_spec_for_BasicAttConstraintsSyntax,
                _root_component_type_list_2_spec_for_BasicAttConstraintsSyntax,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new BasicAttConstraintsSyntax(
                /* SEQUENCE_CONSTRUCTOR_CALL */ authority,
                pathLenConstraint,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_BasicAttConstraintsSyntax(el);
}
/**
 * @summary Encodes a(n) BasicAttConstraintsSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicAttConstraintsSyntax, encoded as an ASN.1 Element.
 */
export function _encode_BasicAttConstraintsSyntax(
    value: BasicAttConstraintsSyntax,
    elGetter: $.ASN1Encoder<BasicAttConstraintsSyntax>
) {
    if (!_cached_encoder_for_BasicAttConstraintsSyntax) {
        _cached_encoder_for_BasicAttConstraintsSyntax = function (
            value: BasicAttConstraintsSyntax,
            elGetter: $.ASN1Encoder<BasicAttConstraintsSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.authority === undefined ||
                            $.deepEq(
                                value.authority,
                                BasicAttConstraintsSyntax._default_value_for_authority
                            )
                                ? undefined
                                : $._encodeBoolean(value.authority, $.BER),
                            /* IF_ABSENT  */ value.pathLenConstraint ===
                            undefined
                                ? undefined
                                : $._encodeInteger(
                                      value.pathLenConstraint,
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
    return _cached_encoder_for_BasicAttConstraintsSyntax(value, elGetter);
}

/**
 * @summary basicAttConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * basicAttConstraints EXTENSION ::= {
 *   SYNTAX         BasicAttConstraintsSyntax
 *   IDENTIFIED BY  {id-ce-basicAttConstraints} }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const basicAttConstraints: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_BasicAttConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_BasicAttConstraintsSyntax,
    },
    "&id": undefined,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_basicAttConstraintsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-basicAttConstraintsMatch           OBJECT IDENTIFIER ::= {id-mr 55}
 * ```
 *
 * @constant
 */
export const id_mr_basicAttConstraintsMatch: OBJECT_IDENTIFIER = new _OID(
    [55],
    id_mr
);

/**
 * @summary basicAttConstraintsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * basicAttConstraintsMatch MATCHING-RULE ::= {
 *   SYNTAX  BasicAttConstraintsSyntax
 *   ID      id-mr-basicAttConstraintsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const basicAttConstraintsMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_BasicAttConstraintsSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_BasicAttConstraintsSyntax,
    },
    "&id": id_mr_basicAttConstraintsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_delegatedNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-delegatedNameConstraints           OBJECT IDENTIFIER ::= {id-ce 42}
 * ```
 *
 * @constant
 */
export const id_ce_delegatedNameConstraints: OBJECT_IDENTIFIER = new _OID(
    [42],
    id_ce
);

/**
 * @summary delegatedNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delegatedNameConstraints EXTENSION ::= {
 *   SYNTAX         NameConstraintsSyntax
 *   IDENTIFIED BY  id-ce-delegatedNameConstraints }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const delegatedNameConstraints: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_NameConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_NameConstraintsSyntax,
    },
    "&id": id_ce_delegatedNameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_delegatedNameConstraintsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-delegatedNameConstraintsMatch      OBJECT IDENTIFIER ::= {id-mr 56}
 * ```
 *
 * @constant
 */
export const id_mr_delegatedNameConstraintsMatch: OBJECT_IDENTIFIER = new _OID(
    [56],
    id_mr
);

/**
 * @summary delegatedNameConstraintsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delegatedNameConstraintsMatch MATCHING-RULE ::= {
 *   SYNTAX  NameConstraintsSyntax
 *   ID      id-mr-delegatedNameConstraintsMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const delegatedNameConstraintsMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_NameConstraintsSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_NameConstraintsSyntax,
    },
    "&id": id_mr_delegatedNameConstraintsMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type CertPolicyId<> = OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_CertPolicyId: $.ASN1Decoder<CertPolicyId> | null = null;
let _cached_encoder_for_CertPolicyId: $.ASN1Encoder<CertPolicyId> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CertPolicyId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertPolicyId} The decoded data structure.
 */
export function _decode_CertPolicyId(el: _Element) {
    if (!_cached_decoder_for_CertPolicyId) {
        _cached_decoder_for_CertPolicyId = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_CertPolicyId(el);
}
/**
 * @summary Encodes a(n) CertPolicyId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertPolicyId, encoded as an ASN.1 Element.
 */
export function _encode_CertPolicyId(
    value: CertPolicyId,
    elGetter: $.ASN1Encoder<CertPolicyId>
) {
    if (!_cached_encoder_for_CertPolicyId) {
        _cached_encoder_for_CertPolicyId = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_CertPolicyId(value, elGetter);
}

export type AcceptableCertPoliciesSyntax<> = CertPolicyId[]; // SequenceOfType
let _cached_decoder_for_AcceptableCertPoliciesSyntax: $.ASN1Decoder<
    AcceptableCertPoliciesSyntax
> | null = null;
let _cached_encoder_for_AcceptableCertPoliciesSyntax: $.ASN1Encoder<
    AcceptableCertPoliciesSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AcceptableCertPoliciesSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AcceptableCertPoliciesSyntax} The decoded data structure.
 */
export function _decode_AcceptableCertPoliciesSyntax(el: _Element) {
    if (!_cached_decoder_for_AcceptableCertPoliciesSyntax) {
        _cached_decoder_for_AcceptableCertPoliciesSyntax = $._decodeSequenceOf<
            CertPolicyId
        >(() => _decode_CertPolicyId);
    }
    return _cached_decoder_for_AcceptableCertPoliciesSyntax(el);
}
/**
 * @summary Encodes a(n) AcceptableCertPoliciesSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcceptableCertPoliciesSyntax, encoded as an ASN.1 Element.
 */
export function _encode_AcceptableCertPoliciesSyntax(
    value: AcceptableCertPoliciesSyntax,
    elGetter: $.ASN1Encoder<AcceptableCertPoliciesSyntax>
) {
    if (!_cached_encoder_for_AcceptableCertPoliciesSyntax) {
        _cached_encoder_for_AcceptableCertPoliciesSyntax = $._encodeSequenceOf<
            CertPolicyId
        >(() => _encode_CertPolicyId, $.BER);
    }
    return _cached_encoder_for_AcceptableCertPoliciesSyntax(value, elGetter);
}

/**
 * @summary id_ce_acceptableCertPolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-acceptableCertPolicies             OBJECT IDENTIFIER ::= {id-ce 52}
 * ```
 *
 * @constant
 */
export const id_ce_acceptableCertPolicies: OBJECT_IDENTIFIER = new _OID(
    [52],
    id_ce
);

/**
 * @summary acceptableCertPolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acceptableCertPolicies EXTENSION ::= {
 *   SYNTAX         AcceptableCertPoliciesSyntax
 *   IDENTIFIED BY  id-ce-acceptableCertPolicies }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const acceptableCertPolicies: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AcceptableCertPoliciesSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AcceptableCertPoliciesSyntax,
    },
    "&id": id_ce_acceptableCertPolicies /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_acceptableCertPoliciesMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-acceptableCertPoliciesMatch        OBJECT IDENTIFIER ::= {id-mr 59}
 * ```
 *
 * @constant
 */
export const id_mr_acceptableCertPoliciesMatch: OBJECT_IDENTIFIER = new _OID(
    [59],
    id_mr
);

/**
 * @summary acceptableCertPoliciesMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acceptableCertPoliciesMatch MATCHING-RULE ::= {
 *   SYNTAX  AcceptableCertPoliciesSyntax
 *   ID      id-mr-acceptableCertPoliciesMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const acceptableCertPoliciesMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_AcceptableCertPoliciesSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_AcceptableCertPoliciesSyntax,
    },
    "&id": id_mr_acceptableCertPoliciesMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type AuthAttId<> = IssuerSerial; // DefinedType
let _cached_decoder_for_AuthAttId: $.ASN1Decoder<AuthAttId> | null = null;
let _cached_encoder_for_AuthAttId: $.ASN1Encoder<AuthAttId> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AuthAttId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthAttId} The decoded data structure.
 */
export function _decode_AuthAttId(el: _Element) {
    if (!_cached_decoder_for_AuthAttId) {
        _cached_decoder_for_AuthAttId = _decode_IssuerSerial;
    }
    return _cached_decoder_for_AuthAttId(el);
}
/**
 * @summary Encodes a(n) AuthAttId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthAttId, encoded as an ASN.1 Element.
 */
export function _encode_AuthAttId(
    value: AuthAttId,
    elGetter: $.ASN1Encoder<AuthAttId>
) {
    if (!_cached_encoder_for_AuthAttId) {
        _cached_encoder_for_AuthAttId = _encode_IssuerSerial;
    }
    return _cached_encoder_for_AuthAttId(value, elGetter);
}

export type AuthorityAttributeIdentifierSyntax<> = AuthAttId[]; // SequenceOfType
let _cached_decoder_for_AuthorityAttributeIdentifierSyntax: $.ASN1Decoder<
    AuthorityAttributeIdentifierSyntax
> | null = null;
let _cached_encoder_for_AuthorityAttributeIdentifierSyntax: $.ASN1Encoder<
    AuthorityAttributeIdentifierSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AuthorityAttributeIdentifierSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorityAttributeIdentifierSyntax} The decoded data structure.
 */
export function _decode_AuthorityAttributeIdentifierSyntax(el: _Element) {
    if (!_cached_decoder_for_AuthorityAttributeIdentifierSyntax) {
        _cached_decoder_for_AuthorityAttributeIdentifierSyntax = $._decodeSequenceOf<
            AuthAttId
        >(() => _decode_AuthAttId);
    }
    return _cached_decoder_for_AuthorityAttributeIdentifierSyntax(el);
}
/**
 * @summary Encodes a(n) AuthorityAttributeIdentifierSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorityAttributeIdentifierSyntax, encoded as an ASN.1 Element.
 */
export function _encode_AuthorityAttributeIdentifierSyntax(
    value: AuthorityAttributeIdentifierSyntax,
    elGetter: $.ASN1Encoder<AuthorityAttributeIdentifierSyntax>
) {
    if (!_cached_encoder_for_AuthorityAttributeIdentifierSyntax) {
        _cached_encoder_for_AuthorityAttributeIdentifierSyntax = $._encodeSequenceOf<
            AuthAttId
        >(() => _encode_AuthAttId, $.BER);
    }
    return _cached_encoder_for_AuthorityAttributeIdentifierSyntax(
        value,
        elGetter
    );
}

/**
 * @summary authorityAttributeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorityAttributeIdentifier EXTENSION ::= {
 *   SYNTAX         AuthorityAttributeIdentifierSyntax
 *   IDENTIFIED BY  {id-ce-authorityAttributeIdentifier} }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const authorityAttributeIdentifier: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AuthorityAttributeIdentifierSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AuthorityAttributeIdentifierSyntax,
    },
    "&id": undefined,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_authAttIdMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-authAttIdMatch                     OBJECT IDENTIFIER ::= {id-mr 53}
 * ```
 *
 * @constant
 */
export const id_mr_authAttIdMatch: OBJECT_IDENTIFIER = new _OID([53], id_mr);

/**
 * @summary authAttIdMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authAttIdMatch MATCHING-RULE ::= {
 *   SYNTAX  AuthorityAttributeIdentifierSyntax
 *   ID      id-mr-authAttIdMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const authAttIdMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_AuthorityAttributeIdentifierSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_AuthorityAttributeIdentifierSyntax,
    },
    "&id": id_mr_authAttIdMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_indirectIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-indirectIssuer                     OBJECT IDENTIFIER ::= {id-ce 61}
 * ```
 *
 * @constant
 */
export const id_ce_indirectIssuer: OBJECT_IDENTIFIER = new _OID([61], id_ce);

/**
 * @summary indirectIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * indirectIssuer EXTENSION ::= {
 *   SYNTAX         NULL
 *   IDENTIFIED BY  id-ce-indirectIssuer }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const indirectIssuer: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_ce_indirectIssuer /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_issuedOnBehalfOf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-issuedOnBehalfOf                   OBJECT IDENTIFIER ::= {id-ce 64}
 * ```
 *
 * @constant
 */
export const id_ce_issuedOnBehalfOf: OBJECT_IDENTIFIER = new _OID([64], id_ce);

/**
 * @summary issuedOnBehalfOf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * issuedOnBehalfOf EXTENSION ::= {
 *   SYNTAX         GeneralName
 *   IDENTIFIED BY  id-ce-issuedOnBehalfOf }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const issuedOnBehalfOf: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_GeneralName,
    },
    encoderFor: {
        "&ExtnType": _encode_GeneralName,
    },
    "&id": id_ce_issuedOnBehalfOf /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_noAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-noAssertion                        OBJECT IDENTIFIER ::= {id-ce 62}
 * ```
 *
 * @constant
 */
export const id_ce_noAssertion: OBJECT_IDENTIFIER = new _OID([62], id_ce);

/**
 * @summary noAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * noAssertion EXTENSION ::= {
 *   SYNTAX         NULL
 *   IDENTIFIED BY  id-ce-noAssertion }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const noAssertion: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_ce_noAssertion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary AllowedAttributeAssignments_Item_attributes_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AllowedAttributeAssignments-Item-attributes-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AllowedAttributeAssignments_Item_attributes_Item =
    | { attributeType: AttributeType } /* CHOICE_ALT_ROOT */
    | { attributeTypeandValues: Attribute } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_AllowedAttributeAssignments_Item_attributes_Item: $.ASN1Decoder<
    AllowedAttributeAssignments_Item_attributes_Item
> | null = null;
let _cached_encoder_for_AllowedAttributeAssignments_Item_attributes_Item: $.ASN1Encoder<
    AllowedAttributeAssignments_Item_attributes_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AllowedAttributeAssignments_Item_attributes_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AllowedAttributeAssignments_Item_attributes_Item} The decoded data structure.
 */
export function _decode_AllowedAttributeAssignments_Item_attributes_Item(
    el: _Element
) {
    if (!_cached_decoder_for_AllowedAttributeAssignments_Item_attributes_Item) {
        _cached_decoder_for_AllowedAttributeAssignments_Item_attributes_Item = $._decode_extensible_choice<
            AllowedAttributeAssignments_Item_attributes_Item
        >({
            "CONTEXT 0": [
                "attributeType",
                $._decode_implicit<AttributeType>(() => _decode_AttributeType),
            ],
            "CONTEXT 1": [
                "attributeTypeandValues",
                $._decode_implicit<Attribute>(() => _decode_Attribute),
            ],
        });
    }
    return _cached_decoder_for_AllowedAttributeAssignments_Item_attributes_Item(
        el
    );
}
/**
 * @summary Encodes a(n) AllowedAttributeAssignments_Item_attributes_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllowedAttributeAssignments_Item_attributes_Item, encoded as an ASN.1 Element.
 */
export function _encode_AllowedAttributeAssignments_Item_attributes_Item(
    value: AllowedAttributeAssignments_Item_attributes_Item,
    elGetter: $.ASN1Encoder<AllowedAttributeAssignments_Item_attributes_Item>
) {
    if (!_cached_encoder_for_AllowedAttributeAssignments_Item_attributes_Item) {
        _cached_encoder_for_AllowedAttributeAssignments_Item_attributes_Item = $._encode_choice<
            AllowedAttributeAssignments_Item_attributes_Item
        >(
            {
                attributeType: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AttributeType,
                    $.BER
                ),
                attributeTypeandValues: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_Attribute,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AllowedAttributeAssignments_Item_attributes_Item(
        value,
        elGetter
    );
}

/**
 * @summary AllowedAttributeAssignments_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AllowedAttributeAssignments-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AllowedAttributeAssignments_Item {
    constructor(
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: AllowedAttributeAssignments_Item_attributes_Item[],
        /**
         * @summary `holderDomain`.
         * @public
         * @readonly
         */
        readonly holderDomain: GeneralName,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AllowedAttributeAssignments_Item
     * @description
     *
     * This takes an `object` and converts it to a `AllowedAttributeAssignments_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AllowedAttributeAssignments_Item`.
     * @returns {AllowedAttributeAssignments_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AllowedAttributeAssignments_Item]: AllowedAttributeAssignments_Item[_K];
            }
        >
    ): AllowedAttributeAssignments_Item {
        return new AllowedAttributeAssignments_Item(
            _o.attributes,
            _o.holderDomain,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AllowedAttributeAssignments_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AllowedAttributeAssignments_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "attributes",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "holderDomain",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AllowedAttributeAssignments_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AllowedAttributeAssignments_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AllowedAttributeAssignments_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AllowedAttributeAssignments_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_AllowedAttributeAssignments_Item: $.ASN1Decoder<
    AllowedAttributeAssignments_Item
> | null = null;
let _cached_encoder_for_AllowedAttributeAssignments_Item: $.ASN1Encoder<
    AllowedAttributeAssignments_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AllowedAttributeAssignments_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AllowedAttributeAssignments_Item} The decoded data structure.
 */
export function _decode_AllowedAttributeAssignments_Item(el: _Element) {
    if (!_cached_decoder_for_AllowedAttributeAssignments_Item) {
        _cached_decoder_for_AllowedAttributeAssignments_Item = function (
            el: _Element
        ): AllowedAttributeAssignments_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AllowedAttributeAssignments-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "attributes";
            sequence[1].name = "holderDomain";
            let attributes!: AllowedAttributeAssignments_Item_attributes_Item[];
            let holderDomain!: GeneralName;
            attributes = $._decode_implicit<
                AllowedAttributeAssignments_Item_attributes_Item[]
            >(() =>
                $._decodeSetOf<
                    AllowedAttributeAssignments_Item_attributes_Item
                >(
                    () =>
                        _decode_AllowedAttributeAssignments_Item_attributes_Item
                )
            )(sequence[0]);
            holderDomain = $._decode_implicit<GeneralName>(
                () => _decode_GeneralName
            )(sequence[1]);
            return new AllowedAttributeAssignments_Item(
                attributes,
                holderDomain,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_AllowedAttributeAssignments_Item(el);
}
/**
 * @summary Encodes a(n) AllowedAttributeAssignments_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllowedAttributeAssignments_Item, encoded as an ASN.1 Element.
 */
export function _encode_AllowedAttributeAssignments_Item(
    value: AllowedAttributeAssignments_Item,
    elGetter: $.ASN1Encoder<AllowedAttributeAssignments_Item>
) {
    if (!_cached_encoder_for_AllowedAttributeAssignments_Item) {
        _cached_encoder_for_AllowedAttributeAssignments_Item = function (
            value: AllowedAttributeAssignments_Item,
            elGetter: $.ASN1Encoder<AllowedAttributeAssignments_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () =>
                                    $._encodeSetOf<
                                        AllowedAttributeAssignments_Item_attributes_Item
                                    >(
                                        () =>
                                            _encode_AllowedAttributeAssignments_Item_attributes_Item,
                                        $.BER
                                    ),
                                $.BER
                            )(value.attributes, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => _encode_GeneralName,
                                $.BER
                            )(value.holderDomain, $.BER),
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
    return _cached_encoder_for_AllowedAttributeAssignments_Item(
        value,
        elGetter
    );
}

export type AllowedAttributeAssignments<> = AllowedAttributeAssignments_Item[]; // SetOfType
let _cached_decoder_for_AllowedAttributeAssignments: $.ASN1Decoder<
    AllowedAttributeAssignments
> | null = null;
let _cached_encoder_for_AllowedAttributeAssignments: $.ASN1Encoder<
    AllowedAttributeAssignments
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AllowedAttributeAssignments
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AllowedAttributeAssignments} The decoded data structure.
 */
export function _decode_AllowedAttributeAssignments(el: _Element) {
    if (!_cached_decoder_for_AllowedAttributeAssignments) {
        _cached_decoder_for_AllowedAttributeAssignments = $._decodeSetOf<
            AllowedAttributeAssignments_Item
        >(() => _decode_AllowedAttributeAssignments_Item);
    }
    return _cached_decoder_for_AllowedAttributeAssignments(el);
}
/**
 * @summary Encodes a(n) AllowedAttributeAssignments into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllowedAttributeAssignments, encoded as an ASN.1 Element.
 */
export function _encode_AllowedAttributeAssignments(
    value: AllowedAttributeAssignments,
    elGetter: $.ASN1Encoder<AllowedAttributeAssignments>
) {
    if (!_cached_encoder_for_AllowedAttributeAssignments) {
        _cached_encoder_for_AllowedAttributeAssignments = $._encodeSetOf<
            AllowedAttributeAssignments_Item
        >(() => _encode_AllowedAttributeAssignments_Item, $.BER);
    }
    return _cached_encoder_for_AllowedAttributeAssignments(value, elGetter);
}

/**
 * @summary id_ce_allowedAttributeAssignments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-allowedAttributeAssignments        OBJECT IDENTIFIER ::= {id-ce 67}
 * ```
 *
 * @constant
 */
export const id_ce_allowedAttributeAssignments: OBJECT_IDENTIFIER = new _OID(
    [67],
    id_ce
);

/**
 * @summary allowedAttributeAssignments
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * allowedAttributeAssignments EXTENSION ::= {
 *   SYNTAX         AllowedAttributeAssignments
 *   IDENTIFIED BY  id-ce-allowedAttributeAssignments }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const allowedAttributeAssignments: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AllowedAttributeAssignments,
    },
    encoderFor: {
        "&ExtnType": _encode_AllowedAttributeAssignments,
    },
    "&id": id_ce_allowedAttributeAssignments /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary AttributeMappings_Item_typeMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeMappings-Item-typeMappings ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AttributeMappings_Item_typeMappings {
    constructor(
        /**
         * @summary `local`.
         * @public
         * @readonly
         */
        readonly local: AttributeType,
        /**
         * @summary `remote`.
         * @public
         * @readonly
         */
        readonly remote: AttributeType,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeMappings_Item_typeMappings
     * @description
     *
     * This takes an `object` and converts it to a `AttributeMappings_Item_typeMappings`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeMappings_Item_typeMappings`.
     * @returns {AttributeMappings_Item_typeMappings}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeMappings_Item_typeMappings]: AttributeMappings_Item_typeMappings[_K];
            }
        >
    ): AttributeMappings_Item_typeMappings {
        return new AttributeMappings_Item_typeMappings(
            _o.local,
            _o.remote,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AttributeMappings_Item_typeMappings
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeMappings_Item_typeMappings: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "local",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "remote",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AttributeMappings_Item_typeMappings
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeMappings_Item_typeMappings: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttributeMappings_Item_typeMappings
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeMappings_Item_typeMappings: $.ComponentSpec[] = [];
let _cached_decoder_for_AttributeMappings_Item_typeMappings: $.ASN1Decoder<
    AttributeMappings_Item_typeMappings
> | null = null;
let _cached_encoder_for_AttributeMappings_Item_typeMappings: $.ASN1Encoder<
    AttributeMappings_Item_typeMappings
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeMappings_Item_typeMappings
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeMappings_Item_typeMappings} The decoded data structure.
 */
export function _decode_AttributeMappings_Item_typeMappings(el: _Element) {
    if (!_cached_decoder_for_AttributeMappings_Item_typeMappings) {
        _cached_decoder_for_AttributeMappings_Item_typeMappings = function (
            el: _Element
        ): AttributeMappings_Item_typeMappings {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AttributeMappings-Item-typeMappings contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "local";
            sequence[1].name = "remote";
            let local!: AttributeType;
            let remote!: AttributeType;
            local = $._decode_implicit<AttributeType>(
                () => _decode_AttributeType
            )(sequence[0]);
            remote = $._decode_implicit<AttributeType>(
                () => _decode_AttributeType
            )(sequence[1]);
            return new AttributeMappings_Item_typeMappings(
                local,
                remote,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_AttributeMappings_Item_typeMappings(el);
}
/**
 * @summary Encodes a(n) AttributeMappings_Item_typeMappings into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeMappings_Item_typeMappings, encoded as an ASN.1 Element.
 */
export function _encode_AttributeMappings_Item_typeMappings(
    value: AttributeMappings_Item_typeMappings,
    elGetter: $.ASN1Encoder<AttributeMappings_Item_typeMappings>
) {
    if (!_cached_encoder_for_AttributeMappings_Item_typeMappings) {
        _cached_encoder_for_AttributeMappings_Item_typeMappings = function (
            value: AttributeMappings_Item_typeMappings,
            elGetter: $.ASN1Encoder<AttributeMappings_Item_typeMappings>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => _encode_AttributeType,
                                $.BER
                            )(value.local, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => _encode_AttributeType,
                                $.BER
                            )(value.remote, $.BER),
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
    return _cached_encoder_for_AttributeMappings_Item_typeMappings(
        value,
        elGetter
    );
}

/**
 * @summary AttributeMappings_Item_typeValueMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeMappings-Item-typeValueMappings ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AttributeMappings_Item_typeValueMappings {
    constructor(
        /**
         * @summary `local`.
         * @public
         * @readonly
         */
        readonly local: AttributeTypeAndValue,
        /**
         * @summary `remote`.
         * @public
         * @readonly
         */
        readonly remote: AttributeTypeAndValue,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeMappings_Item_typeValueMappings
     * @description
     *
     * This takes an `object` and converts it to a `AttributeMappings_Item_typeValueMappings`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeMappings_Item_typeValueMappings`.
     * @returns {AttributeMappings_Item_typeValueMappings}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeMappings_Item_typeValueMappings]: AttributeMappings_Item_typeValueMappings[_K];
            }
        >
    ): AttributeMappings_Item_typeValueMappings {
        return new AttributeMappings_Item_typeValueMappings(
            _o.local,
            _o.remote,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AttributeMappings_Item_typeValueMappings
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeMappings_Item_typeValueMappings: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "local",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "remote",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AttributeMappings_Item_typeValueMappings
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeMappings_Item_typeValueMappings: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttributeMappings_Item_typeValueMappings
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeMappings_Item_typeValueMappings: $.ComponentSpec[] = [];
let _cached_decoder_for_AttributeMappings_Item_typeValueMappings: $.ASN1Decoder<
    AttributeMappings_Item_typeValueMappings
> | null = null;
let _cached_encoder_for_AttributeMappings_Item_typeValueMappings: $.ASN1Encoder<
    AttributeMappings_Item_typeValueMappings
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeMappings_Item_typeValueMappings
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeMappings_Item_typeValueMappings} The decoded data structure.
 */
export function _decode_AttributeMappings_Item_typeValueMappings(el: _Element) {
    if (!_cached_decoder_for_AttributeMappings_Item_typeValueMappings) {
        _cached_decoder_for_AttributeMappings_Item_typeValueMappings = function (
            el: _Element
        ): AttributeMappings_Item_typeValueMappings {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AttributeMappings-Item-typeValueMappings contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "local";
            sequence[1].name = "remote";
            let local!: AttributeTypeAndValue;
            let remote!: AttributeTypeAndValue;
            local = $._decode_implicit<AttributeTypeAndValue>(
                () => _decode_AttributeTypeAndValue
            )(sequence[0]);
            remote = $._decode_implicit<AttributeTypeAndValue>(
                () => _decode_AttributeTypeAndValue
            )(sequence[1]);
            return new AttributeMappings_Item_typeValueMappings(
                local,
                remote,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_AttributeMappings_Item_typeValueMappings(el);
}
/**
 * @summary Encodes a(n) AttributeMappings_Item_typeValueMappings into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeMappings_Item_typeValueMappings, encoded as an ASN.1 Element.
 */
export function _encode_AttributeMappings_Item_typeValueMappings(
    value: AttributeMappings_Item_typeValueMappings,
    elGetter: $.ASN1Encoder<AttributeMappings_Item_typeValueMappings>
) {
    if (!_cached_encoder_for_AttributeMappings_Item_typeValueMappings) {
        _cached_encoder_for_AttributeMappings_Item_typeValueMappings = function (
            value: AttributeMappings_Item_typeValueMappings,
            elGetter: $.ASN1Encoder<AttributeMappings_Item_typeValueMappings>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => _encode_AttributeTypeAndValue,
                                $.BER
                            )(value.local, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => _encode_AttributeTypeAndValue,
                                $.BER
                            )(value.remote, $.BER),
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
    return _cached_encoder_for_AttributeMappings_Item_typeValueMappings(
        value,
        elGetter
    );
}

/**
 * @summary AttributeMappings_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeMappings-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AttributeMappings_Item =
    | {
          typeMappings: AttributeMappings_Item_typeMappings;
      } /* CHOICE_ALT_ROOT */
    | {
          typeValueMappings: AttributeMappings_Item_typeValueMappings;
      } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_AttributeMappings_Item: $.ASN1Decoder<
    AttributeMappings_Item
> | null = null;
let _cached_encoder_for_AttributeMappings_Item: $.ASN1Encoder<
    AttributeMappings_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeMappings_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeMappings_Item} The decoded data structure.
 */
export function _decode_AttributeMappings_Item(el: _Element) {
    if (!_cached_decoder_for_AttributeMappings_Item) {
        _cached_decoder_for_AttributeMappings_Item = $._decode_inextensible_choice<
            AttributeMappings_Item
        >({
            "CONTEXT 0": [
                "typeMappings",
                $._decode_implicit<AttributeMappings_Item_typeMappings>(
                    () => _decode_AttributeMappings_Item_typeMappings
                ),
            ],
            "CONTEXT 1": [
                "typeValueMappings",
                $._decode_implicit<AttributeMappings_Item_typeValueMappings>(
                    () => _decode_AttributeMappings_Item_typeValueMappings
                ),
            ],
        });
    }
    return _cached_decoder_for_AttributeMappings_Item(el);
}
/**
 * @summary Encodes a(n) AttributeMappings_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeMappings_Item, encoded as an ASN.1 Element.
 */
export function _encode_AttributeMappings_Item(
    value: AttributeMappings_Item,
    elGetter: $.ASN1Encoder<AttributeMappings_Item>
) {
    if (!_cached_encoder_for_AttributeMappings_Item) {
        _cached_encoder_for_AttributeMappings_Item = $._encode_choice<
            AttributeMappings_Item
        >(
            {
                typeMappings: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AttributeMappings_Item_typeMappings,
                    $.BER
                ),
                typeValueMappings: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AttributeMappings_Item_typeValueMappings,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AttributeMappings_Item(value, elGetter);
}

export type AttributeMappings<> = AttributeMappings_Item[]; // SetOfType
let _cached_decoder_for_AttributeMappings: $.ASN1Decoder<
    AttributeMappings
> | null = null;
let _cached_encoder_for_AttributeMappings: $.ASN1Encoder<
    AttributeMappings
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeMappings
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeMappings} The decoded data structure.
 */
export function _decode_AttributeMappings(el: _Element) {
    if (!_cached_decoder_for_AttributeMappings) {
        _cached_decoder_for_AttributeMappings = $._decodeSetOf<
            AttributeMappings_Item
        >(() => _decode_AttributeMappings_Item);
    }
    return _cached_decoder_for_AttributeMappings(el);
}
/**
 * @summary Encodes a(n) AttributeMappings into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeMappings, encoded as an ASN.1 Element.
 */
export function _encode_AttributeMappings(
    value: AttributeMappings,
    elGetter: $.ASN1Encoder<AttributeMappings>
) {
    if (!_cached_encoder_for_AttributeMappings) {
        _cached_encoder_for_AttributeMappings = $._encodeSetOf<
            AttributeMappings_Item
        >(() => _encode_AttributeMappings_Item, $.BER);
    }
    return _cached_encoder_for_AttributeMappings(value, elGetter);
}

/**
 * @summary id_ce_attributeMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-attributeMappings                  OBJECT IDENTIFIER ::= {id-ce 68}
 * ```
 *
 * @constant
 */
export const id_ce_attributeMappings: OBJECT_IDENTIFIER = new _OID([68], id_ce);

/**
 * @summary attributeMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeMappings EXTENSION ::= {
 *   SYNTAX         AttributeMappings
 *   IDENTIFIED BY  id-ce-attributeMappings }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const attributeMappings: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AttributeMappings,
    },
    encoderFor: {
        "&ExtnType": _encode_AttributeMappings,
    },
    "&id": id_ce_attributeMappings /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary BaseDistance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BaseDistance  ::=  INTEGER(0..MAX)
 * ```
 */
export type BaseDistance = INTEGER;
let _cached_decoder_for_BaseDistance: $.ASN1Decoder<BaseDistance> | null = null;
let _cached_encoder_for_BaseDistance: $.ASN1Encoder<BaseDistance> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) BaseDistance
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BaseDistance} The decoded data structure.
 */
export function _decode_BaseDistance(el: _Element) {
    if (!_cached_decoder_for_BaseDistance) {
        _cached_decoder_for_BaseDistance = $._decodeInteger;
    }
    return _cached_decoder_for_BaseDistance(el);
}
/**
 * @summary Encodes a(n) BaseDistance into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BaseDistance, encoded as an ASN.1 Element.
 */
export function _encode_BaseDistance(
    value: BaseDistance,
    elGetter: $.ASN1Encoder<BaseDistance>
) {
    if (!_cached_encoder_for_BaseDistance) {
        _cached_encoder_for_BaseDistance = $._encodeInteger;
    }
    return _cached_encoder_for_BaseDistance(value, elGetter);
}

/**
 * @summary GeneralSubtree
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralSubtree ::= SEQUENCE {
 *   base          GeneralName,
 *   minimum  [0]  BaseDistance DEFAULT 0,
 *   maximum  [1]  BaseDistance OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class GeneralSubtree {
    constructor(
        /**
         * @summary `base`.
         * @public
         * @readonly
         */
        readonly base: GeneralName,
        /**
         * @summary `minimum`.
         * @public
         * @readonly
         */
        readonly minimum: OPTIONAL<BaseDistance>,
        /**
         * @summary `maximum`.
         * @public
         * @readonly
         */
        readonly maximum: OPTIONAL<BaseDistance>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a GeneralSubtree
     * @description
     *
     * This takes an `object` and converts it to a `GeneralSubtree`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GeneralSubtree`.
     * @returns {GeneralSubtree}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof GeneralSubtree]: GeneralSubtree[_K] }>
    ): GeneralSubtree {
        return new GeneralSubtree(
            _o.base,
            _o.minimum,
            _o.maximum,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `minimum`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_minimum() {
        return 0;
    }
}
/**
 * @summary The Leading Root Component Types of GeneralSubtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GeneralSubtree: $.ComponentSpec[] = [
    new $.ComponentSpec("base", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "minimum",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "maximum",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of GeneralSubtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GeneralSubtree: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of GeneralSubtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GeneralSubtree: $.ComponentSpec[] = [];
let _cached_decoder_for_GeneralSubtree: $.ASN1Decoder<
    GeneralSubtree
> | null = null;
let _cached_encoder_for_GeneralSubtree: $.ASN1Encoder<
    GeneralSubtree
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralSubtree
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralSubtree} The decoded data structure.
 */
export function _decode_GeneralSubtree(el: _Element) {
    if (!_cached_decoder_for_GeneralSubtree) {
        _cached_decoder_for_GeneralSubtree = function (
            el: _Element
        ): GeneralSubtree {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let base!: GeneralName;
            let minimum: OPTIONAL<BaseDistance> =
                GeneralSubtree._default_value_for_minimum;
            let maximum: OPTIONAL<BaseDistance>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                base: (_el: _Element): void => {
                    base = _decode_GeneralName(_el);
                },
                minimum: (_el: _Element): void => {
                    minimum = $._decode_implicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
                maximum: (_el: _Element): void => {
                    maximum = $._decode_implicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_GeneralSubtree,
                _extension_additions_list_spec_for_GeneralSubtree,
                _root_component_type_list_2_spec_for_GeneralSubtree,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new GeneralSubtree(
                /* SEQUENCE_CONSTRUCTOR_CALL */ base,
                minimum,
                maximum,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_GeneralSubtree(el);
}
/**
 * @summary Encodes a(n) GeneralSubtree into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralSubtree, encoded as an ASN.1 Element.
 */
export function _encode_GeneralSubtree(
    value: GeneralSubtree,
    elGetter: $.ASN1Encoder<GeneralSubtree>
) {
    if (!_cached_encoder_for_GeneralSubtree) {
        _cached_encoder_for_GeneralSubtree = function (
            value: GeneralSubtree,
            elGetter: $.ASN1Encoder<GeneralSubtree>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_GeneralName(
                                value.base,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.minimum === undefined ||
                            $.deepEq(
                                value.minimum,
                                GeneralSubtree._default_value_for_minimum
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_BaseDistance,
                                      $.BER
                                  )(value.minimum, $.BER),
                            /* IF_ABSENT  */ value.maximum === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_BaseDistance,
                                      $.BER
                                  )(value.maximum, $.BER),
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
    return _cached_encoder_for_GeneralSubtree(value, elGetter);
}

export type GeneralSubtrees<> = GeneralSubtree[]; // SequenceOfType
let _cached_decoder_for_GeneralSubtrees: $.ASN1Decoder<
    GeneralSubtrees
> | null = null;
let _cached_encoder_for_GeneralSubtrees: $.ASN1Encoder<
    GeneralSubtrees
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralSubtrees
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralSubtrees} The decoded data structure.
 */
export function _decode_GeneralSubtrees(el: _Element) {
    if (!_cached_decoder_for_GeneralSubtrees) {
        _cached_decoder_for_GeneralSubtrees = $._decodeSequenceOf<
            GeneralSubtree
        >(() => _decode_GeneralSubtree);
    }
    return _cached_decoder_for_GeneralSubtrees(el);
}
/**
 * @summary Encodes a(n) GeneralSubtrees into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralSubtrees, encoded as an ASN.1 Element.
 */
export function _encode_GeneralSubtrees(
    value: GeneralSubtrees,
    elGetter: $.ASN1Encoder<GeneralSubtrees>
) {
    if (!_cached_encoder_for_GeneralSubtrees) {
        _cached_encoder_for_GeneralSubtrees = $._encodeSequenceOf<
            GeneralSubtree
        >(() => _encode_GeneralSubtree, $.BER);
    }
    return _cached_encoder_for_GeneralSubtrees(value, elGetter);
}

/**
 * @summary HolderNameConstraintsSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HolderNameConstraintsSyntax ::= SEQUENCE {
 *   permittedSubtrees  [0]  GeneralSubtrees,
 *   excludedSubtrees   [1]  GeneralSubtrees OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class HolderNameConstraintsSyntax {
    constructor(
        /**
         * @summary `permittedSubtrees`.
         * @public
         * @readonly
         */
        readonly permittedSubtrees: GeneralSubtrees,
        /**
         * @summary `excludedSubtrees`.
         * @public
         * @readonly
         */
        readonly excludedSubtrees: OPTIONAL<GeneralSubtrees>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a HolderNameConstraintsSyntax
     * @description
     *
     * This takes an `object` and converts it to a `HolderNameConstraintsSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HolderNameConstraintsSyntax`.
     * @returns {HolderNameConstraintsSyntax}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof HolderNameConstraintsSyntax]: HolderNameConstraintsSyntax[_K];
            }
        >
    ): HolderNameConstraintsSyntax {
        return new HolderNameConstraintsSyntax(
            _o.permittedSubtrees,
            _o.excludedSubtrees,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of HolderNameConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_HolderNameConstraintsSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "permittedSubtrees",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "excludedSubtrees",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of HolderNameConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HolderNameConstraintsSyntax: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of HolderNameConstraintsSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HolderNameConstraintsSyntax: $.ComponentSpec[] = [];
let _cached_decoder_for_HolderNameConstraintsSyntax: $.ASN1Decoder<
    HolderNameConstraintsSyntax
> | null = null;
let _cached_encoder_for_HolderNameConstraintsSyntax: $.ASN1Encoder<
    HolderNameConstraintsSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) HolderNameConstraintsSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HolderNameConstraintsSyntax} The decoded data structure.
 */
export function _decode_HolderNameConstraintsSyntax(el: _Element) {
    if (!_cached_decoder_for_HolderNameConstraintsSyntax) {
        _cached_decoder_for_HolderNameConstraintsSyntax = function (
            el: _Element
        ): HolderNameConstraintsSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let permittedSubtrees!: GeneralSubtrees;
            let excludedSubtrees: OPTIONAL<GeneralSubtrees>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                permittedSubtrees: (_el: _Element): void => {
                    permittedSubtrees = $._decode_implicit<GeneralSubtrees>(
                        () => _decode_GeneralSubtrees
                    )(_el);
                },
                excludedSubtrees: (_el: _Element): void => {
                    excludedSubtrees = $._decode_implicit<GeneralSubtrees>(
                        () => _decode_GeneralSubtrees
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_HolderNameConstraintsSyntax,
                _extension_additions_list_spec_for_HolderNameConstraintsSyntax,
                _root_component_type_list_2_spec_for_HolderNameConstraintsSyntax,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new HolderNameConstraintsSyntax(
                /* SEQUENCE_CONSTRUCTOR_CALL */ permittedSubtrees,
                excludedSubtrees,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_HolderNameConstraintsSyntax(el);
}
/**
 * @summary Encodes a(n) HolderNameConstraintsSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HolderNameConstraintsSyntax, encoded as an ASN.1 Element.
 */
export function _encode_HolderNameConstraintsSyntax(
    value: HolderNameConstraintsSyntax,
    elGetter: $.ASN1Encoder<HolderNameConstraintsSyntax>
) {
    if (!_cached_encoder_for_HolderNameConstraintsSyntax) {
        _cached_encoder_for_HolderNameConstraintsSyntax = function (
            value: HolderNameConstraintsSyntax,
            elGetter: $.ASN1Encoder<HolderNameConstraintsSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => _encode_GeneralSubtrees,
                                $.BER
                            )(value.permittedSubtrees, $.BER),
                            /* IF_ABSENT  */ value.excludedSubtrees ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_GeneralSubtrees,
                                      $.BER
                                  )(value.excludedSubtrees, $.BER),
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
    return _cached_encoder_for_HolderNameConstraintsSyntax(value, elGetter);
}

/**
 * @summary id_ce_holderNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-holderNameConstraints              OBJECT IDENTIFIER ::= {id-ce 69}
 * ```
 *
 * @constant
 */
export const id_ce_holderNameConstraints: OBJECT_IDENTIFIER = new _OID(
    [69],
    id_ce
);

/**
 * @summary holderNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * holderNameConstraints EXTENSION ::= {
 *   SYNTAX         HolderNameConstraintsSyntax
 *   IDENTIFIED BY  id-ce-holderNameConstraints }
 * ```
 *
 * @constant
 * @type {EXTENSION}
 * @implements {EXTENSION}
 */
export const holderNameConstraints: EXTENSION = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_HolderNameConstraintsSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_HolderNameConstraintsSyntax,
    },
    "&id": id_ce_holderNameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_oc_pmiUser
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-pmiUser                            OBJECT IDENTIFIER ::= {id-oc 24}
 * ```
 *
 * @constant
 */
export const id_oc_pmiUser: OBJECT_IDENTIFIER = new _OID([24], id_oc);

/**
 * @summary pmiUser
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pmiUser OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {attributeCertificateAttribute}
 *   ID           id-oc-pmiUser }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pmiUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&id": id_oc_pmiUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary AttributeCertificateExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCertificateExactAssertion ::= SEQUENCE {
 *   serialNumber  CertificateSerialNumber,
 *   issuer        AttCertIssuer,
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeCertificateExactAssertion {
    constructor(
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: AttCertIssuer,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeCertificateExactAssertion
     * @description
     *
     * This takes an `object` and converts it to a `AttributeCertificateExactAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeCertificateExactAssertion`.
     * @returns {AttributeCertificateExactAssertion}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeCertificateExactAssertion]: AttributeCertificateExactAssertion[_K];
            }
        >
    ): AttributeCertificateExactAssertion {
        return new AttributeCertificateExactAssertion(
            _o.serialNumber,
            _o.issuer,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AttributeCertificateExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeCertificateExactAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "issuer",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AttributeCertificateExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeCertificateExactAssertion: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttributeCertificateExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeCertificateExactAssertion: $.ComponentSpec[] = [];
let _cached_decoder_for_AttributeCertificateExactAssertion: $.ASN1Decoder<
    AttributeCertificateExactAssertion
> | null = null;
let _cached_encoder_for_AttributeCertificateExactAssertion: $.ASN1Encoder<
    AttributeCertificateExactAssertion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificateExactAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificateExactAssertion} The decoded data structure.
 */
export function _decode_AttributeCertificateExactAssertion(el: _Element) {
    if (!_cached_decoder_for_AttributeCertificateExactAssertion) {
        _cached_decoder_for_AttributeCertificateExactAssertion = function (
            el: _Element
        ): AttributeCertificateExactAssertion {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AttributeCertificateExactAssertion contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "serialNumber";
            sequence[1].name = "issuer";
            let serialNumber!: CertificateSerialNumber;
            let issuer!: AttCertIssuer;
            serialNumber = _decode_CertificateSerialNumber(sequence[0]);
            issuer = _decode_AttCertIssuer(sequence[1]);
            return new AttributeCertificateExactAssertion(
                serialNumber,
                issuer,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_AttributeCertificateExactAssertion(el);
}
/**
 * @summary Encodes a(n) AttributeCertificateExactAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificateExactAssertion, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificateExactAssertion(
    value: AttributeCertificateExactAssertion,
    elGetter: $.ASN1Encoder<AttributeCertificateExactAssertion>
) {
    if (!_cached_encoder_for_AttributeCertificateExactAssertion) {
        _cached_encoder_for_AttributeCertificateExactAssertion = function (
            value: AttributeCertificateExactAssertion,
            elGetter: $.ASN1Encoder<AttributeCertificateExactAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AttCertIssuer(
                                value.issuer,
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
    return _cached_encoder_for_AttributeCertificateExactAssertion(
        value,
        elGetter
    );
}

/**
 * @summary id_mr_attributeCertificateExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-attributeCertificateExactMatch     OBJECT IDENTIFIER ::= {id-mr 45}
 * ```
 *
 * @constant
 */
export const id_mr_attributeCertificateExactMatch: OBJECT_IDENTIFIER = new _OID(
    [45],
    id_mr
);

/**
 * @summary attributeCertificateExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeCertificateExactMatch MATCHING-RULE ::= {
 *   SYNTAX  AttributeCertificateExactAssertion
 *   ID      id-mr-attributeCertificateExactMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const attributeCertificateExactMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_AttributeCertificateExactAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_AttributeCertificateExactAssertion,
    },
    "&id": id_mr_attributeCertificateExactMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_at_aACertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-aACertificate                      OBJECT IDENTIFIER ::= {id-at 61}
 * ```
 *
 * @constant
 */
export const id_at_aACertificate: OBJECT_IDENTIFIER = new _OID([61], id_at);

/**
 * @summary aACertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aACertificate ATTRIBUTE ::= {
 *   WITH SYNTAX             AttributeCertificate
 *   EQUALITY MATCHING RULE  attributeCertificateExactMatch
 *   ID                      id-at-aACertificate }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const aACertificate: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttributeCertificate,
    },
    encoderFor: {
        "&Type": _encode_AttributeCertificate,
    },
    "&equality-match": attributeCertificateExactMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_aACertificate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary id_at_attributeCertificateRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-attributeCertificateRevocationList OBJECT IDENTIFIER ::= {id-at 59}
 * ```
 *
 * @constant
 */
export const id_at_attributeCertificateRevocationList: OBJECT_IDENTIFIER = new _OID(
    [59],
    id_at
);

/**
 * @summary attributeCertificateRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeCertificateRevocationList ATTRIBUTE ::= {
 *   WITH SYNTAX             CertificateList
 *   EQUALITY MATCHING RULE  certificateListExactMatch
 *   LDAP-SYNTAX             x509CertificateList.&id
 *   LDAP-NAME               {"AttrCertificateRevocationList"}
 *   LDAP-DESC               "X.509 Attr certificate revocation list"
 *   ID                      id-at-attributeCertificateRevocationList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const attributeCertificateRevocationList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CertificateList,
    },
    encoderFor: {
        "&Type": _encode_CertificateList,
    },
    "&equality-match": certificateListExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509CertificateList["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc":
        "X.509 Attr certificate revocation list" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_attributeCertificateRevocationList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary id_at_eeAttrCertificateRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-eeAttrCertificateRevocationList    OBJECT IDENTIFIER ::= {id-at 102}
 * ```
 *
 * @constant
 */
export const id_at_eeAttrCertificateRevocationList: OBJECT_IDENTIFIER = new _OID(
    [102],
    id_at
);

/**
 * @summary eeAttrCertificateRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * eeAttrCertificateRevocationList ATTRIBUTE ::= {
 *   WITH SYNTAX             CertificateList
 *   EQUALITY MATCHING RULE  certificateListExactMatch
 *   LDAP-SYNTAX             x509CertificateList.&id
 *   LDAP-NAME               {"EEAttrCertificateRevocationList"}
 *   LDAP-DESC               "X.509 EEAttr certificate revocation list"
 *   ID                      id-at-eeAttrCertificateRevocationList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const eeAttrCertificateRevocationList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CertificateList,
    },
    encoderFor: {
        "&Type": _encode_CertificateList,
    },
    "&equality-match": certificateListExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509CertificateList["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc":
        "X.509 EEAttr certificate revocation list" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_eeAttrCertificateRevocationList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary id_at_attributeAuthorityRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-attributeAuthorityRevocationList   OBJECT IDENTIFIER ::= {id-at 63}
 * ```
 *
 * @constant
 */
export const id_at_attributeAuthorityRevocationList: OBJECT_IDENTIFIER = new _OID(
    [63],
    id_at
);

/**
 * @summary attributeAuthorityRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeAuthorityRevocationList ATTRIBUTE ::= {
 *   WITH SYNTAX             CertificateList
 *   EQUALITY MATCHING RULE  certificateListExactMatch
 *   LDAP-SYNTAX             x509CertificateList.&id
 *   LDAP-NAME               {"AACertificateRevocationList"}
 *   LDAP-DESC               "X.509 AA certificate revocation list"
 *   ID                      id-at-attributeAuthorityRevocationList }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const attributeAuthorityRevocationList: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CertificateList,
    },
    encoderFor: {
        "&Type": _encode_CertificateList,
    },
    "&equality-match": certificateListExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": x509CertificateList["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc":
        "X.509 AA certificate revocation list" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_attributeAuthorityRevocationList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary id_oc_pmiAA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-pmiAA                              OBJECT IDENTIFIER ::= {id-oc 25}
 * ```
 *
 * @constant
 */
export const id_oc_pmiAA: OBJECT_IDENTIFIER = new _OID([25], id_oc);

/**
 * @summary pmiAA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pmiAA OBJECT-CLASS ::= { -- a PMI AA
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {aACertificate |
 *                 attributeCertificateRevocationList |
 *                 eeAttrCertificateRevocationList |
 *                 attributeAuthorityRevocationList}
 *   ID           id-oc-pmiAA }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pmiAA: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        aACertificate,
        attributeCertificateRevocationList,
        eeAttrCertificateRevocationList,
        attributeAuthorityRevocationList,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pmiAA /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_attributeDescriptorCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-attributeDescriptorCertificate     OBJECT IDENTIFIER ::= {id-at 62}
 * ```
 *
 * @constant
 */
export const id_at_attributeDescriptorCertificate: OBJECT_IDENTIFIER = new _OID(
    [62],
    id_at
);

/**
 * @summary attributeDescriptorCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeDescriptorCertificate ATTRIBUTE ::= {
 *   WITH SYNTAX             AttributeCertificate
 *   EQUALITY MATCHING RULE  attributeCertificateExactMatch
 *   ID                      id-at-attributeDescriptorCertificate }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const attributeDescriptorCertificate: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttributeCertificate,
    },
    encoderFor: {
        "&Type": _encode_AttributeCertificate,
    },
    "&equality-match": attributeCertificateExactMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_attributeDescriptorCertificate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary id_oc_pmiSOA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-pmiSOA                             OBJECT IDENTIFIER ::= {id-oc 26}
 * ```
 *
 * @constant
 */
export const id_oc_pmiSOA: OBJECT_IDENTIFIER = new _OID([26], id_oc);

/**
 * @summary pmiSOA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pmiSOA OBJECT-CLASS ::= { -- a PMI Source of Authority
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {attributeCertificateRevocationList |
 *                 eeAttrCertificateRevocationList |
 *                 attributeAuthorityRevocationList |
 *                 attributeDescriptorCertificate}
 *   ID           id-oc-pmiSOA }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pmiSOA: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        attributeCertificateRevocationList,
        eeAttrCertificateRevocationList,
        attributeAuthorityRevocationList,
        attributeDescriptorCertificate,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_pmiSOA /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_attCertCRLDistributionPts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-attCertCRLDistributionPts          OBJECT IDENTIFIER ::= {id-oc 27}
 * ```
 *
 * @constant
 */
export const id_oc_attCertCRLDistributionPts: OBJECT_IDENTIFIER = new _OID(
    [27],
    id_oc
);

/**
 * @summary attCertCRLDistributionPt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attCertCRLDistributionPt OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {attributeCertificateRevocationList |
 *                 eeAttrCertificateRevocationList |
 *                 attributeAuthorityRevocationList}
 *   ID           id-oc-attCertCRLDistributionPts }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const attCertCRLDistributionPt: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        attributeCertificateRevocationList,
        eeAttrCertificateRevocationList,
        attributeAuthorityRevocationList,
    ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_attCertCRLDistributionPts /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_pmiDelegationPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-pmiDelegationPath                  OBJECT IDENTIFIER ::= {id-oc 33}
 * ```
 *
 * @constant
 */
export const id_oc_pmiDelegationPath: OBJECT_IDENTIFIER = new _OID([33], id_oc);

/**
 * @summary pmiDelegationPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pmiDelegationPath OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {delegationPath}
 *   ID           id-oc-pmiDelegationPath }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const pmiDelegationPath: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&id": id_oc_pmiDelegationPath /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_privilegePolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-privilegePolicy                    OBJECT IDENTIFIER ::= {id-oc 32}
 * ```
 *
 * @constant
 */
export const id_oc_privilegePolicy: OBJECT_IDENTIFIER = new _OID([32], id_oc);

/**
 * @summary privilegePolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * privilegePolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {privPolicy}
 *   ID           id-oc-privilegePolicy }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const privilegePolicy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&id": id_oc_privilegePolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_oc_protectedPrivilegePolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-protectedPrivilegePolicy           OBJECT IDENTIFIER ::= {id-oc 34}
 * ```
 *
 * @constant
 */
export const id_oc_protectedPrivilegePolicy: OBJECT_IDENTIFIER = new _OID(
    [34],
    id_oc
);

/**
 * @summary protectedPrivilegePolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protectedPrivilegePolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF  {top}
 *   KIND         auxiliary
 *   MAY CONTAIN  {protPrivPolicy}
 *   ID           id-oc-protectedPrivilegePolicy }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const protectedPrivilegePolicy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": undefined,
    "&id": id_oc_protectedPrivilegePolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_at_attributeCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-attributeCertificate               OBJECT IDENTIFIER ::= {id-at 58}
 * ```
 *
 * @constant
 */
export const id_at_attributeCertificate: OBJECT_IDENTIFIER = new _OID(
    [58],
    id_at
);

/**
 * @summary attributeCertificateAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeCertificateAttribute ATTRIBUTE ::= {
 *   WITH SYNTAX             AttributeCertificate
 *   EQUALITY MATCHING RULE  attributeCertificateExactMatch
 *   ID                      id-at-attributeCertificate }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const attributeCertificateAttribute: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttributeCertificate,
    },
    encoderFor: {
        "&Type": _encode_AttributeCertificate,
    },
    "&equality-match": attributeCertificateExactMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_attributeCertificate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

export type AttCertPath<> = AttributeCertificate[]; // SequenceOfType
let _cached_decoder_for_AttCertPath: $.ASN1Decoder<AttCertPath> | null = null;
let _cached_encoder_for_AttCertPath: $.ASN1Encoder<AttCertPath> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttCertPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttCertPath} The decoded data structure.
 */
export function _decode_AttCertPath(el: _Element) {
    if (!_cached_decoder_for_AttCertPath) {
        _cached_decoder_for_AttCertPath = $._decodeSequenceOf<
            AttributeCertificate
        >(() => _decode_AttributeCertificate);
    }
    return _cached_decoder_for_AttCertPath(el);
}
/**
 * @summary Encodes a(n) AttCertPath into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttCertPath, encoded as an ASN.1 Element.
 */
export function _encode_AttCertPath(
    value: AttCertPath,
    elGetter: $.ASN1Encoder<AttCertPath>
) {
    if (!_cached_encoder_for_AttCertPath) {
        _cached_encoder_for_AttCertPath = $._encodeSequenceOf<
            AttributeCertificate
        >(() => _encode_AttributeCertificate, $.BER);
    }
    return _cached_encoder_for_AttCertPath(value, elGetter);
}

/**
 * @summary id_at_delegationPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-delegationPath                     OBJECT IDENTIFIER ::= {id-at 73}
 * ```
 *
 * @constant
 */
export const id_at_delegationPath: OBJECT_IDENTIFIER = new _OID([73], id_at);

/**
 * @summary delegationPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delegationPath ATTRIBUTE ::= {
 *   WITH SYNTAX  AttCertPath
 *   ID           id-at-delegationPath }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const delegationPath: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttCertPath,
    },
    encoderFor: {
        "&Type": _encode_AttCertPath,
    },
    "&id": id_at_delegationPath /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary id_at_privPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-privPolicy                         OBJECT IDENTIFIER ::= {id-at 71}
 * ```
 *
 * @constant
 */
export const id_at_privPolicy: OBJECT_IDENTIFIER = new _OID([71], id_at);

/**
 * @summary privPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * privPolicy ATTRIBUTE ::= {
 *   WITH SYNTAX  PolicySyntax
 *   ID           id-at-privPolicy }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const privPolicy: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PolicySyntax,
    },
    encoderFor: {
        "&Type": _encode_PolicySyntax,
    },
    "&id": id_at_privPolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary id_at_protPrivPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-protPrivPolicy                     OBJECT IDENTIFIER ::= {id-at 74}
 * ```
 *
 * @constant
 */
export const id_at_protPrivPolicy: OBJECT_IDENTIFIER = new _OID([74], id_at);

/**
 * @summary protPrivPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * protPrivPolicy ATTRIBUTE ::= {
 *   WITH SYNTAX             AttributeCertificate
 *   EQUALITY MATCHING RULE  attributeCertificateExactMatch
 *   ID                      id-at-protPrivPolicy }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const protPrivPolicy: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttributeCertificate,
    },
    encoderFor: {
        "&Type": _encode_AttributeCertificate,
    },
    "&equality-match": attributeCertificateExactMatch /* OBJECT_FIELD_SETTING */,
    "&id": id_at_protPrivPolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary id_at_xmlPrivPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-xmlPrivPolicy                      OBJECT IDENTIFIER ::= {id-at 76}
 * ```
 *
 * @constant
 */
export const id_at_xmlPrivPolicy: OBJECT_IDENTIFIER = new _OID([76], id_at);

/**
 * @summary xmlPrivPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * xmlPrivPolicy ATTRIBUTE ::= {
 *   WITH SYNTAX  UTF8String -- XML-encoded privilege policy information
 *   ID           id-at-xmlPrivPolicy }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const xmlPrivPolicy: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeUTF8String,
    },
    encoderFor: {
        "&Type": $._encodeUTF8String,
    },
    "&id": id_at_xmlPrivPolicy /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
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
 * @summary AttributeCertificateAssertion_holder
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCertificateAssertion-holder ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AttributeCertificateAssertion_holder =
    | { baseCertificateID: IssuerSerial } /* CHOICE_ALT_ROOT */
    | { holderName: GeneralNames } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_AttributeCertificateAssertion_holder: $.ASN1Decoder<
    AttributeCertificateAssertion_holder
> | null = null;
let _cached_encoder_for_AttributeCertificateAssertion_holder: $.ASN1Encoder<
    AttributeCertificateAssertion_holder
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificateAssertion_holder
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificateAssertion_holder} The decoded data structure.
 */
export function _decode_AttributeCertificateAssertion_holder(el: _Element) {
    if (!_cached_decoder_for_AttributeCertificateAssertion_holder) {
        _cached_decoder_for_AttributeCertificateAssertion_holder = $._decode_extensible_choice<
            AttributeCertificateAssertion_holder
        >({
            "CONTEXT 0": [
                "baseCertificateID",
                $._decode_implicit<IssuerSerial>(() => _decode_IssuerSerial),
            ],
            "CONTEXT 1": [
                "holderName",
                $._decode_implicit<GeneralNames>(() => _decode_GeneralNames),
            ],
        });
    }
    return _cached_decoder_for_AttributeCertificateAssertion_holder(el);
}
/**
 * @summary Encodes a(n) AttributeCertificateAssertion_holder into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificateAssertion_holder, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificateAssertion_holder(
    value: AttributeCertificateAssertion_holder,
    elGetter: $.ASN1Encoder<AttributeCertificateAssertion_holder>
) {
    if (!_cached_encoder_for_AttributeCertificateAssertion_holder) {
        _cached_encoder_for_AttributeCertificateAssertion_holder = $._encode_choice<
            AttributeCertificateAssertion_holder
        >(
            {
                baseCertificateID: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_IssuerSerial,
                    $.BER
                ),
                holderName: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_GeneralNames,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AttributeCertificateAssertion_holder(
        value,
        elGetter
    );
}

/**
 * @summary AttributeCertificateAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCertificateAssertion ::= SEQUENCE {
 *   holder             [0]  CHOICE {
 *     baseCertificateID  [0]  IssuerSerial,
 *     holderName         [1]  GeneralNames,
 *     ...} OPTIONAL,
 *   issuer             [1]  GeneralNames OPTIONAL,
 *   attCertValidity    [2]  GeneralizedTime OPTIONAL,
 *   attType            [3]  SET OF AttributeType OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeCertificateAssertion {
    constructor(
        /**
         * @summary `holder`.
         * @public
         * @readonly
         */
        readonly holder: OPTIONAL<AttributeCertificateAssertion_holder>,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<GeneralNames>,
        /**
         * @summary `attCertValidity`.
         * @public
         * @readonly
         */
        readonly attCertValidity: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `attType`.
         * @public
         * @readonly
         */
        readonly attType: OPTIONAL<AttributeType[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeCertificateAssertion
     * @description
     *
     * This takes an `object` and converts it to a `AttributeCertificateAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeCertificateAssertion`.
     * @returns {AttributeCertificateAssertion}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeCertificateAssertion]: AttributeCertificateAssertion[_K];
            }
        >
    ): AttributeCertificateAssertion {
        return new AttributeCertificateAssertion(
            _o.holder,
            _o.issuer,
            _o.attCertValidity,
            _o.attType,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AttributeCertificateAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeCertificateAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "holder",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "issuer",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attCertValidity",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attType",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AttributeCertificateAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeCertificateAssertion: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AttributeCertificateAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeCertificateAssertion: $.ComponentSpec[] = [];
let _cached_decoder_for_AttributeCertificateAssertion: $.ASN1Decoder<
    AttributeCertificateAssertion
> | null = null;
let _cached_encoder_for_AttributeCertificateAssertion: $.ASN1Encoder<
    AttributeCertificateAssertion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificateAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificateAssertion} The decoded data structure.
 */
export function _decode_AttributeCertificateAssertion(el: _Element) {
    if (!_cached_decoder_for_AttributeCertificateAssertion) {
        _cached_decoder_for_AttributeCertificateAssertion = function (
            el: _Element
        ): AttributeCertificateAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let holder: OPTIONAL<AttributeCertificateAssertion_holder>;
            let issuer: OPTIONAL<GeneralNames>;
            let attCertValidity: OPTIONAL<GeneralizedTime>;
            let attType: OPTIONAL<AttributeType[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                holder: (_el: _Element): void => {
                    holder = $._decode_implicit<
                        AttributeCertificateAssertion_holder
                    >(() => _decode_AttributeCertificateAssertion_holder)(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = $._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
                attCertValidity: (_el: _Element): void => {
                    attCertValidity = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                attType: (_el: _Element): void => {
                    attType = $._decode_implicit<AttributeType[]>(() =>
                        $._decodeSetOf<AttributeType>(
                            () => _decode_AttributeType
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeCertificateAssertion,
                _extension_additions_list_spec_for_AttributeCertificateAssertion,
                _root_component_type_list_2_spec_for_AttributeCertificateAssertion,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeCertificateAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ holder,
                issuer,
                attCertValidity,
                attType,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeCertificateAssertion(el);
}
/**
 * @summary Encodes a(n) AttributeCertificateAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificateAssertion, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificateAssertion(
    value: AttributeCertificateAssertion,
    elGetter: $.ASN1Encoder<AttributeCertificateAssertion>
) {
    if (!_cached_encoder_for_AttributeCertificateAssertion) {
        _cached_encoder_for_AttributeCertificateAssertion = function (
            value: AttributeCertificateAssertion,
            elGetter: $.ASN1Encoder<AttributeCertificateAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.holder === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () =>
                                          _encode_AttributeCertificateAssertion_holder,
                                      $.BER
                                  )(value.holder, $.BER),
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_GeneralNames,
                                      $.BER
                                  )(value.issuer, $.BER),
                            /* IF_ABSENT  */ value.attCertValidity === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeGeneralizedTime,
                                      $.BER
                                  )(value.attCertValidity, $.BER),
                            /* IF_ABSENT  */ value.attType === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSetOf<AttributeType>(
                                              () => _encode_AttributeType,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.attType, $.BER),
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
    return _cached_encoder_for_AttributeCertificateAssertion(value, elGetter);
}

/**
 * @summary id_mr_attributeCertificateMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-attributeCertificateMatch          OBJECT IDENTIFIER ::= {id-mr 42}
 * ```
 *
 * @constant
 */
export const id_mr_attributeCertificateMatch: OBJECT_IDENTIFIER = new _OID(
    [42],
    id_mr
);

/**
 * @summary attributeCertificateMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeCertificateMatch MATCHING-RULE ::= {
 *   SYNTAX  AttributeCertificateAssertion
 *   ID      id-mr-attributeCertificateMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const attributeCertificateMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_AttributeCertificateAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_AttributeCertificateAssertion,
    },
    "&id": id_mr_attributeCertificateMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary HolderIssuerAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HolderIssuerAssertion ::= SEQUENCE {
 *   holder  [0]  Holder OPTIONAL,
 *   issuer  [1]  AttCertIssuer OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class HolderIssuerAssertion {
    constructor(
        /**
         * @summary `holder`.
         * @public
         * @readonly
         */
        readonly holder: OPTIONAL<Holder>,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<AttCertIssuer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a HolderIssuerAssertion
     * @description
     *
     * This takes an `object` and converts it to a `HolderIssuerAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HolderIssuerAssertion`.
     * @returns {HolderIssuerAssertion}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof HolderIssuerAssertion]: HolderIssuerAssertion[_K] }
        >
    ): HolderIssuerAssertion {
        return new HolderIssuerAssertion(
            _o.holder,
            _o.issuer,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of HolderIssuerAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_HolderIssuerAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "holder",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "issuer",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of HolderIssuerAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HolderIssuerAssertion: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of HolderIssuerAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HolderIssuerAssertion: $.ComponentSpec[] = [];
let _cached_decoder_for_HolderIssuerAssertion: $.ASN1Decoder<
    HolderIssuerAssertion
> | null = null;
let _cached_encoder_for_HolderIssuerAssertion: $.ASN1Encoder<
    HolderIssuerAssertion
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) HolderIssuerAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HolderIssuerAssertion} The decoded data structure.
 */
export function _decode_HolderIssuerAssertion(el: _Element) {
    if (!_cached_decoder_for_HolderIssuerAssertion) {
        _cached_decoder_for_HolderIssuerAssertion = function (
            el: _Element
        ): HolderIssuerAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let holder: OPTIONAL<Holder>;
            let issuer: OPTIONAL<AttCertIssuer>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                holder: (_el: _Element): void => {
                    holder = $._decode_implicit<Holder>(() => _decode_Holder)(
                        _el
                    );
                },
                issuer: (_el: _Element): void => {
                    issuer = $._decode_implicit<AttCertIssuer>(
                        () => _decode_AttCertIssuer
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_HolderIssuerAssertion,
                _extension_additions_list_spec_for_HolderIssuerAssertion,
                _root_component_type_list_2_spec_for_HolderIssuerAssertion,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new HolderIssuerAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ holder,
                issuer,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_HolderIssuerAssertion(el);
}
/**
 * @summary Encodes a(n) HolderIssuerAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HolderIssuerAssertion, encoded as an ASN.1 Element.
 */
export function _encode_HolderIssuerAssertion(
    value: HolderIssuerAssertion,
    elGetter: $.ASN1Encoder<HolderIssuerAssertion>
) {
    if (!_cached_encoder_for_HolderIssuerAssertion) {
        _cached_encoder_for_HolderIssuerAssertion = function (
            value: HolderIssuerAssertion,
            elGetter: $.ASN1Encoder<HolderIssuerAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.holder === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Holder,
                                      $.BER
                                  )(value.holder, $.BER),
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_AttCertIssuer,
                                      $.BER
                                  )(value.issuer, $.BER),
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
    return _cached_encoder_for_HolderIssuerAssertion(value, elGetter);
}

/**
 * @summary id_mr_holderIssuerMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-holderIssuerMatch                  OBJECT IDENTIFIER ::= {id-mr 46}
 * ```
 *
 * @constant
 */
export const id_mr_holderIssuerMatch: OBJECT_IDENTIFIER = new _OID([46], id_mr);

/**
 * @summary holderIssuerMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * holderIssuerMatch MATCHING-RULE ::= {
 *   SYNTAX  HolderIssuerAssertion
 *   ID      id-mr-holderIssuerMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const holderIssuerMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_HolderIssuerAssertion,
    },
    encoderFor: {
        "&AssertionType": _encode_HolderIssuerAssertion,
    },
    "&id": id_mr_holderIssuerMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary DelMatchSyntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DelMatchSyntax ::= SEQUENCE {
 *   firstIssuer  AttCertIssuer,
 *   lastHolder   Holder,
 *   ... }
 * ```
 *
 * @class
 */
export class DelMatchSyntax {
    constructor(
        /**
         * @summary `firstIssuer`.
         * @public
         * @readonly
         */
        readonly firstIssuer: AttCertIssuer,
        /**
         * @summary `lastHolder`.
         * @public
         * @readonly
         */
        readonly lastHolder: Holder,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DelMatchSyntax
     * @description
     *
     * This takes an `object` and converts it to a `DelMatchSyntax`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DelMatchSyntax`.
     * @returns {DelMatchSyntax}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DelMatchSyntax]: DelMatchSyntax[_K] }>
    ): DelMatchSyntax {
        return new DelMatchSyntax(
            _o.firstIssuer,
            _o.lastHolder,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of DelMatchSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DelMatchSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "firstIssuer",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "lastHolder",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of DelMatchSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DelMatchSyntax: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of DelMatchSyntax
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DelMatchSyntax: $.ComponentSpec[] = [];
let _cached_decoder_for_DelMatchSyntax: $.ASN1Decoder<
    DelMatchSyntax
> | null = null;
let _cached_encoder_for_DelMatchSyntax: $.ASN1Encoder<
    DelMatchSyntax
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) DelMatchSyntax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DelMatchSyntax} The decoded data structure.
 */
export function _decode_DelMatchSyntax(el: _Element) {
    if (!_cached_decoder_for_DelMatchSyntax) {
        _cached_decoder_for_DelMatchSyntax = function (
            el: _Element
        ): DelMatchSyntax {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "DelMatchSyntax contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "firstIssuer";
            sequence[1].name = "lastHolder";
            let firstIssuer!: AttCertIssuer;
            let lastHolder!: Holder;
            firstIssuer = _decode_AttCertIssuer(sequence[0]);
            lastHolder = _decode_Holder(sequence[1]);
            return new DelMatchSyntax(
                firstIssuer,
                lastHolder,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_DelMatchSyntax(el);
}
/**
 * @summary Encodes a(n) DelMatchSyntax into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DelMatchSyntax, encoded as an ASN.1 Element.
 */
export function _encode_DelMatchSyntax(
    value: DelMatchSyntax,
    elGetter: $.ASN1Encoder<DelMatchSyntax>
) {
    if (!_cached_encoder_for_DelMatchSyntax) {
        _cached_encoder_for_DelMatchSyntax = function (
            value: DelMatchSyntax,
            elGetter: $.ASN1Encoder<DelMatchSyntax>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttCertIssuer(
                                value.firstIssuer,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Holder(
                                value.lastHolder,
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
    return _cached_encoder_for_DelMatchSyntax(value, elGetter);
}

/**
 * @summary id_mr_delegationPathMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-delegationPathMatch                OBJECT IDENTIFIER ::= {id-mr 61}
 * ```
 *
 * @constant
 */
export const id_mr_delegationPathMatch: OBJECT_IDENTIFIER = new _OID(
    [61],
    id_mr
);

/**
 * @summary delegationPathMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * delegationPathMatch MATCHING-RULE ::= {
 *   SYNTAX  DelMatchSyntax
 *   ID      id-mr-delegationPathMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const delegationPathMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_DelMatchSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_DelMatchSyntax,
    },
    "&id": id_mr_delegationPathMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_mr_extensionPresenceMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mr-extensionPresenceMatch             OBJECT IDENTIFIER ::= {id-mr 67}
 * ```
 *
 * @constant
 */
export const id_mr_extensionPresenceMatch: OBJECT_IDENTIFIER = new _OID(
    [67],
    id_mr
);

/**
 * @summary extensionPresenceMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extensionPresenceMatch MATCHING-RULE ::= {
 *   SYNTAX  EXTENSION.&id
 *   ID      id-mr-extensionPresenceMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE}
 * @implements {MATCHING_RULE}
 */
export const extensionPresenceMatch: MATCHING_RULE = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&AssertionType": $._encodeObjectIdentifier,
    },
    "&id": id_mr_extensionPresenceMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary id_ce_authorityAttributeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-authorityAttributeIdentifier       OBJECT IDENTIFIER ::= {id-ce 38}
 * ```
 *
 * @constant
 */
export const id_ce_authorityAttributeIdentifier: OBJECT_IDENTIFIER = new _OID(
    [38],
    id_ce
);

/**
 * @summary id_ce_roleSpecCertIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-roleSpecCertIdentifier             OBJECT IDENTIFIER ::= {id-ce 39}
 * ```
 *
 * @constant
 */
export const id_ce_roleSpecCertIdentifier: OBJECT_IDENTIFIER = new _OID(
    [39],
    id_ce
);

/**
 * @summary id_ce_basicAttConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-basicAttConstraints                OBJECT IDENTIFIER ::= {id-ce 41}
 * ```
 *
 * @constant
 */
export const id_ce_basicAttConstraints: OBJECT_IDENTIFIER = new _OID(
    [41],
    id_ce
);

/**
 * @summary id_ce_attributeDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-attributeDescriptor                OBJECT IDENTIFIER ::= {id-ce 48}
 * ```
 *
 * @constant
 */
export const id_ce_attributeDescriptor: OBJECT_IDENTIFIER = new _OID(
    [48],
    id_ce
);

/* END_MODULE AttributeCertificateDefinitions */
/* eslint-enable */
