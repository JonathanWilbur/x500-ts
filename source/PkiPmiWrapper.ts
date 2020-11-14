/**
 * @module PkiPmiWrapper
 * @summary The ASN.1 module `PkiPmiWrapper`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.pkiPmiWrapper.8
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
    ENUMERATED,
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    TYPE_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "./AttributeCertificateDefinitions";
import * as AuthenticationFramework from "./AuthenticationFramework";
import {
    ALGORITHM,
    AlgorithmIdentifier,
    CertificateSerialNumber,
    PkiPath,
    SIGNED,
    Version,
    _decode_AlgorithmIdentifier,
    _decode_CertificateSerialNumber,
    _decode_PkiPath,
    _decode_Version,
    _encode_AlgorithmIdentifier,
    _encode_CertificateSerialNumber,
    _encode_PkiPath,
    _encode_Version,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "./AuthenticationFramework";
import * as InformationFramework from "./InformationFramework";
import {
    Attribute,
    ATTRIBUTE,
    Name,
    _decode_Attribute,
    _decode_Name,
    _encode_Attribute,
    _encode_Name,
} from "./InformationFramework";
import {
    objectIdentifierMatch,
    octetStringMatch,
} from "./SelectedAttributeTypes";
export {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "./AttributeCertificateDefinitions";
export {
    ALGORITHM,
    AlgorithmIdentifier,
    AvlSerialNumber,
    CertAVL,
    Certificate,
    CertificateList,
    CertificateSerialNumber,
    ENCRYPTED_HASH,
    PKCertIdentifier,
    PkiPath,
    SIGNATURE,
    SIGNED,
    TBSCertAVL,
    Version,
    Version_v1 /* IMPORTED_NAMED_INTEGER */,
    Version_v2 /* IMPORTED_NAMED_INTEGER */,
    Version_v3 /* IMPORTED_NAMED_INTEGER */,
    _decode_AlgorithmIdentifier,
    _decode_AvlSerialNumber,
    _decode_CertAVL,
    _decode_Certificate,
    _decode_CertificateList,
    _decode_CertificateSerialNumber,
    _decode_PKCertIdentifier,
    _decode_PkiPath,
    _decode_SIGNATURE,
    _decode_TBSCertAVL,
    _decode_Version,
    _encode_AlgorithmIdentifier,
    _encode_AvlSerialNumber,
    _encode_CertAVL,
    _encode_Certificate,
    _encode_CertificateList,
    _encode_CertificateSerialNumber,
    _encode_PKCertIdentifier,
    _encode_PkiPath,
    _encode_SIGNATURE,
    _encode_TBSCertAVL,
    _encode_Version,
    _get_decoder_for_ENCRYPTED_HASH,
    _get_decoder_for_SIGNED,
    _get_encoder_for_ENCRYPTED_HASH,
    _get_encoder_for_SIGNED,
} from "./AuthenticationFramework";
export {
    CRLReason,
    CRLReason_aACompromise /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_affiliationChanged /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_cACompromise /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_certificateHold /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_cessationOfOperation /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_keyCompromise /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_privilegeWithdrawn /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_removeFromCRL /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_superseded /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_unspecified /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_weakAlgorithmOrKey /* IMPORTED_ENUMERATION_ITEM */,
    SubjectKeyIdentifier,
    _decode_CRLReason,
    _decode_SubjectKeyIdentifier,
    _encode_CRLReason,
    _encode_SubjectKeyIdentifier,
    _enum_for_CRLReason,
} from "./CertificateExtensions";
export {
    Attribute,
    ATTRIBUTE,
    Name,
    _decode_Attribute,
    _decode_Name,
    _encode_Attribute,
    _encode_Name,
} from "./InformationFramework";
export {
    objectIdentifierMatch,
    octetStringMatch,
} from "./SelectedAttributeTypes";
export {
    attributeCertificateDefinitions,
    authenticationFramework,
    certificateExtensions,
    id_cmsct,
    informationFramework,
    selectedAttributeTypes,
} from "./UsefulDefinitions";

export type SignedAttributes<> = Attribute[]; // SetOfType
let _cached_decoder_for_SignedAttributes: $.ASN1Decoder<
    SignedAttributes
> | null = null;
let _cached_encoder_for_SignedAttributes: $.ASN1Encoder<
    SignedAttributes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SignedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedAttributes} The decoded data structure.
 */
export function _decode_SignedAttributes(el: _Element) {
    if (!_cached_decoder_for_SignedAttributes) {
        _cached_decoder_for_SignedAttributes = $._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_SignedAttributes(el);
}
/**
 * @summary Encodes a(n) SignedAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_SignedAttributes(
    value: SignedAttributes,
    elGetter: $.ASN1Encoder<SignedAttributes>
) {
    if (!_cached_encoder_for_SignedAttributes) {
        _cached_encoder_for_SignedAttributes = $._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_SignedAttributes(value, elGetter);
}

/**
 * @summary WRAPPED_PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WRAPPED-PDU ::= TYPE-IDENTIFIER
 * ```
 *
 * @interface
 */
export type WRAPPED_PDU = TYPE_IDENTIFIER;

/**
 * @summary SupportedPduSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedPduSet WRAPPED-PDU ::= {...}
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU[]}
 *
 */
export const SupportedPduSet: WRAPPED_PDU[] = [];

/**
 * @summary WrappedPDUInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WrappedPDUInfo ::= SEQUENCE {
 *   pduType      WRAPPED-PDU.&id ({SupportedPduSet}),
 *   pduInfo      WRAPPED-PDU.&Type ({SupportedPduSet}{@pduType}),
 *   ... }
 * ```
 *
 * @class
 */
export class WrappedPDUInfo {
    constructor(
        /**
         * @summary `pduType`.
         * @public
         * @readonly
         */
        readonly pduType: OBJECT_IDENTIFIER,
        /**
         * @summary `pduInfo`.
         * @public
         * @readonly
         */
        readonly pduInfo: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a WrappedPDUInfo
     * @description
     *
     * This takes an `object` and converts it to a `WrappedPDUInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WrappedPDUInfo`.
     * @returns {WrappedPDUInfo}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof WrappedPDUInfo]: WrappedPDUInfo[_K] }>
    ): WrappedPDUInfo {
        return new WrappedPDUInfo(
            _o.pduType,
            _o.pduInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of WrappedPDUInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_WrappedPDUInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "pduType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("pduInfo", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of WrappedPDUInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_WrappedPDUInfo: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of WrappedPDUInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_WrappedPDUInfo: $.ComponentSpec[] = [];
let _cached_decoder_for_WrappedPDUInfo: $.ASN1Decoder<
    WrappedPDUInfo
> | null = null;
let _cached_encoder_for_WrappedPDUInfo: $.ASN1Encoder<
    WrappedPDUInfo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) WrappedPDUInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WrappedPDUInfo} The decoded data structure.
 */
export function _decode_WrappedPDUInfo(el: _Element) {
    if (!_cached_decoder_for_WrappedPDUInfo) {
        _cached_decoder_for_WrappedPDUInfo = function (
            el: _Element
        ): WrappedPDUInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "WrappedPDUInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "pduType";
            sequence[1].name = "pduInfo";
            let pduType!: OBJECT_IDENTIFIER;
            let pduInfo!: _Element;
            pduType = $._decodeObjectIdentifier(sequence[0]);
            pduInfo = $._decodeAny(sequence[1]);
            return new WrappedPDUInfo(pduType, pduInfo, sequence.slice(2));
        };
    }
    return _cached_decoder_for_WrappedPDUInfo(el);
}
/**
 * @summary Encodes a(n) WrappedPDUInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WrappedPDUInfo, encoded as an ASN.1 Element.
 */
export function _encode_WrappedPDUInfo(
    value: WrappedPDUInfo,
    elGetter: $.ASN1Encoder<WrappedPDUInfo>
) {
    if (!_cached_encoder_for_WrappedPDUInfo) {
        _cached_encoder_for_WrappedPDUInfo = function (
            value: WrappedPDUInfo,
            elGetter: $.ASN1Encoder<WrappedPDUInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.pduType,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(value.pduInfo, $.BER),
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
    return _cached_encoder_for_WrappedPDUInfo(value, elGetter);
}

export type UserKeyingMaterial<> = OCTET_STRING; // OctetStringType
let _cached_decoder_for_UserKeyingMaterial: $.ASN1Decoder<
    UserKeyingMaterial
> | null = null;
let _cached_encoder_for_UserKeyingMaterial: $.ASN1Encoder<
    UserKeyingMaterial
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UserKeyingMaterial
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserKeyingMaterial} The decoded data structure.
 */
export function _decode_UserKeyingMaterial(el: _Element) {
    if (!_cached_decoder_for_UserKeyingMaterial) {
        _cached_decoder_for_UserKeyingMaterial = $._decodeOctetString;
    }
    return _cached_decoder_for_UserKeyingMaterial(el);
}
/**
 * @summary Encodes a(n) UserKeyingMaterial into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserKeyingMaterial, encoded as an ASN.1 Element.
 */
export function _encode_UserKeyingMaterial(
    value: UserKeyingMaterial,
    elGetter: $.ASN1Encoder<UserKeyingMaterial>
) {
    if (!_cached_encoder_for_UserKeyingMaterial) {
        _cached_encoder_for_UserKeyingMaterial = $._encodeOctetString;
    }
    return _cached_encoder_for_UserKeyingMaterial(value, elGetter);
}

/**
 * @summary SenderStaticInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SenderStaticInfo ::= SEQUENCE {
 *   issuer       Name,
 *   serialNumber CertificateSerialNumber,
 *   partyAinfo   UserKeyingMaterial,
 *   ... }
 * ```
 *
 * @class
 */
export class SenderStaticInfo {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary `partyAinfo`.
         * @public
         * @readonly
         */
        readonly partyAinfo: UserKeyingMaterial,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SenderStaticInfo
     * @description
     *
     * This takes an `object` and converts it to a `SenderStaticInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SenderStaticInfo`.
     * @returns {SenderStaticInfo}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SenderStaticInfo]: SenderStaticInfo[_K] }>
    ): SenderStaticInfo {
        return new SenderStaticInfo(
            _o.issuer,
            _o.serialNumber,
            _o.partyAinfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of SenderStaticInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SenderStaticInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("issuer", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "partyAinfo",
        false,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SenderStaticInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SenderStaticInfo: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SenderStaticInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SenderStaticInfo: $.ComponentSpec[] = [];
let _cached_decoder_for_SenderStaticInfo: $.ASN1Decoder<
    SenderStaticInfo
> | null = null;
let _cached_encoder_for_SenderStaticInfo: $.ASN1Encoder<
    SenderStaticInfo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SenderStaticInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SenderStaticInfo} The decoded data structure.
 */
export function _decode_SenderStaticInfo(el: _Element) {
    if (!_cached_decoder_for_SenderStaticInfo) {
        _cached_decoder_for_SenderStaticInfo = function (
            el: _Element
        ): SenderStaticInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "SenderStaticInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "issuer";
            sequence[1].name = "serialNumber";
            sequence[2].name = "partyAinfo";
            let issuer!: Name;
            let serialNumber!: CertificateSerialNumber;
            let partyAinfo!: UserKeyingMaterial;
            issuer = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            partyAinfo = _decode_UserKeyingMaterial(sequence[2]);
            return new SenderStaticInfo(
                issuer,
                serialNumber,
                partyAinfo,
                sequence.slice(3)
            );
        };
    }
    return _cached_decoder_for_SenderStaticInfo(el);
}
/**
 * @summary Encodes a(n) SenderStaticInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SenderStaticInfo, encoded as an ASN.1 Element.
 */
export function _encode_SenderStaticInfo(
    value: SenderStaticInfo,
    elGetter: $.ASN1Encoder<SenderStaticInfo>
) {
    if (!_cached_encoder_for_SenderStaticInfo) {
        _cached_encoder_for_SenderStaticInfo = function (
            value: SenderStaticInfo,
            elGetter: $.ASN1Encoder<SenderStaticInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(value.issuer, $.BER),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_UserKeyingMaterial(
                                value.partyAinfo,
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
    return _cached_encoder_for_SenderStaticInfo(value, elGetter);
}

/**
 * @summary SenderDhPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SenderDhPublicKey ::= SEQUENCE {
 *   algorithm   AlgorithmIdentifier {{SupportedDHPublicKeyAlgorithms}},
 *   publicKey   BIT STRING,
 *   ... }
 * ```
 *
 * @class
 */
export class SenderDhPublicKey {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: AlgorithmIdentifier,
        /**
         * @summary `publicKey`.
         * @public
         * @readonly
         */
        readonly publicKey: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SenderDhPublicKey
     * @description
     *
     * This takes an `object` and converts it to a `SenderDhPublicKey`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SenderDhPublicKey`.
     * @returns {SenderDhPublicKey}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SenderDhPublicKey]: SenderDhPublicKey[_K] }>
    ): SenderDhPublicKey {
        return new SenderDhPublicKey(
            _o.algorithm,
            _o.publicKey,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of SenderDhPublicKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SenderDhPublicKey: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "publicKey",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SenderDhPublicKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SenderDhPublicKey: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SenderDhPublicKey
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SenderDhPublicKey: $.ComponentSpec[] = [];
let _cached_decoder_for_SenderDhPublicKey: $.ASN1Decoder<
    SenderDhPublicKey
> | null = null;
let _cached_encoder_for_SenderDhPublicKey: $.ASN1Encoder<
    SenderDhPublicKey
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SenderDhPublicKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SenderDhPublicKey} The decoded data structure.
 */
export function _decode_SenderDhPublicKey(el: _Element) {
    if (!_cached_decoder_for_SenderDhPublicKey) {
        _cached_decoder_for_SenderDhPublicKey = function (
            el: _Element
        ): SenderDhPublicKey {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SenderDhPublicKey contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "algorithm";
            sequence[1].name = "publicKey";
            let algorithm!: AlgorithmIdentifier;
            let publicKey!: BIT_STRING;
            algorithm = _decode_AlgorithmIdentifier(sequence[0]);
            publicKey = $._decodeBitString(sequence[1]);
            return new SenderDhPublicKey(
                algorithm,
                publicKey,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_SenderDhPublicKey(el);
}
/**
 * @summary Encodes a(n) SenderDhPublicKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SenderDhPublicKey, encoded as an ASN.1 Element.
 */
export function _encode_SenderDhPublicKey(
    value: SenderDhPublicKey,
    elGetter: $.ASN1Encoder<SenderDhPublicKey>
) {
    if (!_cached_encoder_for_SenderDhPublicKey) {
        _cached_encoder_for_SenderDhPublicKey = function (
            value: SenderDhPublicKey,
            elGetter: $.ASN1Encoder<SenderDhPublicKey>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.algorithm,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeBitString(
                                value.publicKey,
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
    return _cached_encoder_for_SenderDhPublicKey(value, elGetter);
}

/**
 * @summary SenderDhInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SenderDhInfo  ::=  CHOICE {
 *   senderStaticInfo   [0] SenderStaticInfo,
 *   senderDhPublicKey  [1] SenderDhPublicKey,
 *   ... }
 * ```
 */
export type SenderDhInfo =
    | { senderStaticInfo: SenderStaticInfo } /* CHOICE_ALT_ROOT */
    | { senderDhPublicKey: SenderDhPublicKey } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_SenderDhInfo: $.ASN1Decoder<SenderDhInfo> | null = null;
let _cached_encoder_for_SenderDhInfo: $.ASN1Encoder<SenderDhInfo> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SenderDhInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SenderDhInfo} The decoded data structure.
 */
export function _decode_SenderDhInfo(el: _Element) {
    if (!_cached_decoder_for_SenderDhInfo) {
        _cached_decoder_for_SenderDhInfo = $._decode_extensible_choice<
            SenderDhInfo
        >({
            "CONTEXT 0": [
                "senderStaticInfo",
                $._decode_explicit<SenderStaticInfo>(
                    () => _decode_SenderStaticInfo
                ),
            ],
            "CONTEXT 1": [
                "senderDhPublicKey",
                $._decode_explicit<SenderDhPublicKey>(
                    () => _decode_SenderDhPublicKey
                ),
            ],
        });
    }
    return _cached_decoder_for_SenderDhInfo(el);
}
/**
 * @summary Encodes a(n) SenderDhInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SenderDhInfo, encoded as an ASN.1 Element.
 */
export function _encode_SenderDhInfo(
    value: SenderDhInfo,
    elGetter: $.ASN1Encoder<SenderDhInfo>
) {
    if (!_cached_encoder_for_SenderDhInfo) {
        _cached_encoder_for_SenderDhInfo = $._encode_choice<SenderDhInfo>(
            {
                senderStaticInfo: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_SenderStaticInfo,
                    $.BER
                ),
                senderDhPublicKey: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_SenderDhPublicKey,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SenderDhInfo(value, elGetter);
}

/**
 * @summary SupportedKeyEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedKeyEncryptionAlgorithm ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedKeyEncryptionAlgorithm: ALGORITHM[] = [];

/**
 * @summary KeyAgreement_keyEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAgreement-keyEncryptionAlgorithm ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class KeyAgreement_keyEncryptionAlgorithm {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a KeyAgreement_keyEncryptionAlgorithm
     * @description
     *
     * This takes an `object` and converts it to a `KeyAgreement_keyEncryptionAlgorithm`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyAgreement_keyEncryptionAlgorithm`.
     * @returns {KeyAgreement_keyEncryptionAlgorithm}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof KeyAgreement_keyEncryptionAlgorithm]: KeyAgreement_keyEncryptionAlgorithm[_K];
            }
        >
    ): KeyAgreement_keyEncryptionAlgorithm {
        return new KeyAgreement_keyEncryptionAlgorithm(
            _o.algorithm,
            _o.parameters,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of KeyAgreement_keyEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyAgreement_keyEncryptionAlgorithm: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("parameters", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of KeyAgreement_keyEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyAgreement_keyEncryptionAlgorithm: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of KeyAgreement_keyEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyAgreement_keyEncryptionAlgorithm: $.ComponentSpec[] = [];
let _cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm: $.ASN1Decoder<
    KeyAgreement_keyEncryptionAlgorithm
> | null = null;
let _cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm: $.ASN1Encoder<
    KeyAgreement_keyEncryptionAlgorithm
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) KeyAgreement_keyEncryptionAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyAgreement_keyEncryptionAlgorithm} The decoded data structure.
 */
export function _decode_KeyAgreement_keyEncryptionAlgorithm(el: _Element) {
    if (!_cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm) {
        _cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm = function (
            el: _Element
        ): KeyAgreement_keyEncryptionAlgorithm {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "KeyAgreement-keyEncryptionAlgorithm contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "algorithm";
            sequence[1].name = "parameters";
            let algorithm!: OBJECT_IDENTIFIER;
            let parameters!: _Element;
            algorithm = $._decodeObjectIdentifier(sequence[0]);
            parameters = $._decodeAny(sequence[1]);
            return new KeyAgreement_keyEncryptionAlgorithm(
                algorithm,
                parameters,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm(el);
}
/**
 * @summary Encodes a(n) KeyAgreement_keyEncryptionAlgorithm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyAgreement_keyEncryptionAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_KeyAgreement_keyEncryptionAlgorithm(
    value: KeyAgreement_keyEncryptionAlgorithm,
    elGetter: $.ASN1Encoder<KeyAgreement_keyEncryptionAlgorithm>
) {
    if (!_cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm) {
        _cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm = function (
            value: KeyAgreement_keyEncryptionAlgorithm,
            elGetter: $.ASN1Encoder<KeyAgreement_keyEncryptionAlgorithm>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.algorithm,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(
                                value.parameters,
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
    return _cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm(
        value,
        elGetter
    );
}

/**
 * @summary KeyAgreement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAgreement ::= SEQUENCE {
 *   senderDhInfo       [0] SenderDhInfo,
 *   keyEncryptionAlgorithm SEQUENCE {
 *     algorithm    ALGORITHM.&id ({SupportedKeyEncryptionAlgorithm}),
 *     parameters   ALGORITHM.&Type({SupportedKeyEncryptionAlgorithm}{@.algorithm}),
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class KeyAgreement {
    constructor(
        /**
         * @summary `senderDhInfo`.
         * @public
         * @readonly
         */
        readonly senderDhInfo: SenderDhInfo,
        /**
         * @summary `keyEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly keyEncryptionAlgorithm: KeyAgreement_keyEncryptionAlgorithm,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a KeyAgreement
     * @description
     *
     * This takes an `object` and converts it to a `KeyAgreement`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyAgreement`.
     * @returns {KeyAgreement}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof KeyAgreement]: KeyAgreement[_K] }>
    ): KeyAgreement {
        return new KeyAgreement(
            _o.senderDhInfo,
            _o.keyEncryptionAlgorithm,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of KeyAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyAgreement: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "senderDhInfo",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "keyEncryptionAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of KeyAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyAgreement: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of KeyAgreement
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyAgreement: $.ComponentSpec[] = [];
let _cached_decoder_for_KeyAgreement: $.ASN1Decoder<KeyAgreement> | null = null;
let _cached_encoder_for_KeyAgreement: $.ASN1Encoder<KeyAgreement> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) KeyAgreement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyAgreement} The decoded data structure.
 */
export function _decode_KeyAgreement(el: _Element) {
    if (!_cached_decoder_for_KeyAgreement) {
        _cached_decoder_for_KeyAgreement = function (
            el: _Element
        ): KeyAgreement {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "KeyAgreement contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "senderDhInfo";
            sequence[1].name = "keyEncryptionAlgorithm";
            let senderDhInfo!: SenderDhInfo;
            let keyEncryptionAlgorithm!: KeyAgreement_keyEncryptionAlgorithm;
            senderDhInfo = $._decode_explicit<SenderDhInfo>(
                () => _decode_SenderDhInfo
            )(sequence[0]);
            keyEncryptionAlgorithm = _decode_KeyAgreement_keyEncryptionAlgorithm(
                sequence[1]
            );
            return new KeyAgreement(
                senderDhInfo,
                keyEncryptionAlgorithm,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_KeyAgreement(el);
}
/**
 * @summary Encodes a(n) KeyAgreement into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyAgreement, encoded as an ASN.1 Element.
 */
export function _encode_KeyAgreement(
    value: KeyAgreement,
    elGetter: $.ASN1Encoder<KeyAgreement>
) {
    if (!_cached_encoder_for_KeyAgreement) {
        _cached_encoder_for_KeyAgreement = function (
            value: KeyAgreement,
            elGetter: $.ASN1Encoder<KeyAgreement>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_SenderDhInfo,
                                $.BER
                            )(value.senderDhInfo, $.BER),
                            /* REQUIRED   */ _encode_KeyAgreement_keyEncryptionAlgorithm(
                                value.keyEncryptionAlgorithm,
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
    return _cached_encoder_for_KeyAgreement(value, elGetter);
}

export type EncryptedKey<> = OCTET_STRING; // OctetStringType
let _cached_decoder_for_EncryptedKey: $.ASN1Decoder<EncryptedKey> | null = null;
let _cached_encoder_for_EncryptedKey: $.ASN1Encoder<EncryptedKey> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedKey
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedKey} The decoded data structure.
 */
export function _decode_EncryptedKey(el: _Element) {
    if (!_cached_decoder_for_EncryptedKey) {
        _cached_decoder_for_EncryptedKey = $._decodeOctetString;
    }
    return _cached_decoder_for_EncryptedKey(el);
}
/**
 * @summary Encodes a(n) EncryptedKey into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedKey, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedKey(
    value: EncryptedKey,
    elGetter: $.ASN1Encoder<EncryptedKey>
) {
    if (!_cached_encoder_for_EncryptedKey) {
        _cached_encoder_for_EncryptedKey = $._encodeOctetString;
    }
    return _cached_encoder_for_EncryptedKey(value, elGetter);
}

/**
 * @summary SymmetricEncryptionAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SymmetricEncryptionAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SymmetricEncryptionAlgorithms: ALGORITHM[] = [];

/**
 * @summary EncryptedPduInfo_pduEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedPduInfo-pduEncryptionAlgorithm ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class EncryptedPduInfo_pduEncryptionAlgorithm {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: OBJECT_IDENTIFIER,
        /**
         * @summary `parameter`.
         * @public
         * @readonly
         */
        readonly parameter: _Element
    ) {}

    /**
     * @summary Restructures an object into a EncryptedPduInfo_pduEncryptionAlgorithm
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedPduInfo_pduEncryptionAlgorithm`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedPduInfo_pduEncryptionAlgorithm`.
     * @returns {EncryptedPduInfo_pduEncryptionAlgorithm}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof EncryptedPduInfo_pduEncryptionAlgorithm]: EncryptedPduInfo_pduEncryptionAlgorithm[_K];
            }
        >
    ): EncryptedPduInfo_pduEncryptionAlgorithm {
        return new EncryptedPduInfo_pduEncryptionAlgorithm(
            _o.algorithm,
            _o.parameter
        );
    }
}
/**
 * @summary The Leading Root Component Types of EncryptedPduInfo_pduEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("parameter", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of EncryptedPduInfo_pduEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of EncryptedPduInfo_pduEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm: $.ComponentSpec[] = [];
let _cached_decoder_for_EncryptedPduInfo_pduEncryptionAlgorithm: $.ASN1Decoder<
    EncryptedPduInfo_pduEncryptionAlgorithm
> | null = null;
let _cached_encoder_for_EncryptedPduInfo_pduEncryptionAlgorithm: $.ASN1Encoder<
    EncryptedPduInfo_pduEncryptionAlgorithm
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedPduInfo_pduEncryptionAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedPduInfo_pduEncryptionAlgorithm} The decoded data structure.
 */
export function _decode_EncryptedPduInfo_pduEncryptionAlgorithm(el: _Element) {
    if (!_cached_decoder_for_EncryptedPduInfo_pduEncryptionAlgorithm) {
        _cached_decoder_for_EncryptedPduInfo_pduEncryptionAlgorithm = function (
            el: _Element
        ): EncryptedPduInfo_pduEncryptionAlgorithm {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "EncryptedPduInfo-pduEncryptionAlgorithm contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "algorithm";
            sequence[1].name = "parameter";
            let algorithm!: OBJECT_IDENTIFIER;
            let parameter!: _Element;
            algorithm = $._decodeObjectIdentifier(sequence[0]);
            parameter = $._decodeAny(sequence[1]);
            return new EncryptedPduInfo_pduEncryptionAlgorithm(
                algorithm,
                parameter
            );
        };
    }
    return _cached_decoder_for_EncryptedPduInfo_pduEncryptionAlgorithm(el);
}
/**
 * @summary Encodes a(n) EncryptedPduInfo_pduEncryptionAlgorithm into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedPduInfo_pduEncryptionAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedPduInfo_pduEncryptionAlgorithm(
    value: EncryptedPduInfo_pduEncryptionAlgorithm,
    elGetter: $.ASN1Encoder<EncryptedPduInfo_pduEncryptionAlgorithm>
) {
    if (!_cached_encoder_for_EncryptedPduInfo_pduEncryptionAlgorithm) {
        _cached_encoder_for_EncryptedPduInfo_pduEncryptionAlgorithm = function (
            value: EncryptedPduInfo_pduEncryptionAlgorithm,
            elGetter: $.ASN1Encoder<EncryptedPduInfo_pduEncryptionAlgorithm>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.algorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.parameter, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EncryptedPduInfo_pduEncryptionAlgorithm(
        value,
        elGetter
    );
}

export type EncryptedPdu<> = OCTET_STRING; // OctetStringType
let _cached_decoder_for_EncryptedPdu: $.ASN1Decoder<EncryptedPdu> | null = null;
let _cached_encoder_for_EncryptedPdu: $.ASN1Encoder<EncryptedPdu> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedPdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedPdu} The decoded data structure.
 */
export function _decode_EncryptedPdu(el: _Element) {
    if (!_cached_decoder_for_EncryptedPdu) {
        _cached_decoder_for_EncryptedPdu = $._decodeOctetString;
    }
    return _cached_decoder_for_EncryptedPdu(el);
}
/**
 * @summary Encodes a(n) EncryptedPdu into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedPdu, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedPdu(
    value: EncryptedPdu,
    elGetter: $.ASN1Encoder<EncryptedPdu>
) {
    if (!_cached_encoder_for_EncryptedPdu) {
        _cached_encoder_for_EncryptedPdu = $._encodeOctetString;
    }
    return _cached_encoder_for_EncryptedPdu(value, elGetter);
}

/**
 * @summary EncryptedPduInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedPduInfo ::= SEQUENCE {
 *   pduType                 WRAPPED-PDU.&id ({SupportedPduSet}),
 *   encryptedKey            EncryptedKey OPTIONAL,
 *   pduEncryptionAlgorithm  SEQUENCE {
 *     algorithm               ALGORITHM.&id ({SymmetricEncryptionAlgorithms}),
 *     parameter               ALGORITHM.&Type
 *                   ({SymmetricEncryptionAlgorithms}{@.algorithm})} OPTIONAL,
 *   encryptedPdu        [0] EncryptedPdu,
 *   ... }
 * ```
 *
 * @class
 */
export class EncryptedPduInfo {
    constructor(
        /**
         * @summary `pduType`.
         * @public
         * @readonly
         */
        readonly pduType: OBJECT_IDENTIFIER,
        /**
         * @summary `encryptedKey`.
         * @public
         * @readonly
         */
        readonly encryptedKey: OPTIONAL<EncryptedKey>,
        /**
         * @summary `pduEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly pduEncryptionAlgorithm: OPTIONAL<
            EncryptedPduInfo_pduEncryptionAlgorithm
        >,
        /**
         * @summary `encryptedPdu`.
         * @public
         * @readonly
         */
        readonly encryptedPdu: EncryptedPdu,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EncryptedPduInfo
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedPduInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedPduInfo`.
     * @returns {EncryptedPduInfo}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof EncryptedPduInfo]: EncryptedPduInfo[_K] }>
    ): EncryptedPduInfo {
        return new EncryptedPduInfo(
            _o.pduType,
            _o.encryptedKey,
            _o.pduEncryptionAlgorithm,
            _o.encryptedPdu,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of EncryptedPduInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedPduInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "pduType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encryptedKey",
        true,
        $.hasTag(_TagClass.universal, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "pduEncryptionAlgorithm",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encryptedPdu",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of EncryptedPduInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedPduInfo: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of EncryptedPduInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedPduInfo: $.ComponentSpec[] = [];
let _cached_decoder_for_EncryptedPduInfo: $.ASN1Decoder<
    EncryptedPduInfo
> | null = null;
let _cached_encoder_for_EncryptedPduInfo: $.ASN1Encoder<
    EncryptedPduInfo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedPduInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedPduInfo} The decoded data structure.
 */
export function _decode_EncryptedPduInfo(el: _Element) {
    if (!_cached_decoder_for_EncryptedPduInfo) {
        _cached_decoder_for_EncryptedPduInfo = function (
            el: _Element
        ): EncryptedPduInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pduType!: OBJECT_IDENTIFIER;
            let encryptedKey: OPTIONAL<EncryptedKey>;
            let pduEncryptionAlgorithm: OPTIONAL<EncryptedPduInfo_pduEncryptionAlgorithm>;
            let encryptedPdu!: EncryptedPdu;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                pduType: (_el: _Element): void => {
                    pduType = $._decodeObjectIdentifier(_el);
                },
                encryptedKey: (_el: _Element): void => {
                    encryptedKey = _decode_EncryptedKey(_el);
                },
                pduEncryptionAlgorithm: (_el: _Element): void => {
                    pduEncryptionAlgorithm = _decode_EncryptedPduInfo_pduEncryptionAlgorithm(
                        _el
                    );
                },
                encryptedPdu: (_el: _Element): void => {
                    encryptedPdu = $._decode_explicit<EncryptedPdu>(
                        () => _decode_EncryptedPdu
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncryptedPduInfo,
                _extension_additions_list_spec_for_EncryptedPduInfo,
                _root_component_type_list_2_spec_for_EncryptedPduInfo,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EncryptedPduInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ pduType,
                encryptedKey,
                pduEncryptionAlgorithm,
                encryptedPdu,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EncryptedPduInfo(el);
}
/**
 * @summary Encodes a(n) EncryptedPduInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedPduInfo, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedPduInfo(
    value: EncryptedPduInfo,
    elGetter: $.ASN1Encoder<EncryptedPduInfo>
) {
    if (!_cached_encoder_for_EncryptedPduInfo) {
        _cached_encoder_for_EncryptedPduInfo = function (
            value: EncryptedPduInfo,
            elGetter: $.ASN1Encoder<EncryptedPduInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.pduType,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.encryptedKey === undefined
                                ? undefined
                                : _encode_EncryptedKey(
                                      value.encryptedKey,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.pduEncryptionAlgorithm ===
                            undefined
                                ? undefined
                                : _encode_EncryptedPduInfo_pduEncryptionAlgorithm(
                                      value.pduEncryptionAlgorithm,
                                      $.BER
                                  ),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_EncryptedPdu,
                                $.BER
                            )(value.encryptedPdu, $.BER),
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
    return _cached_encoder_for_EncryptedPduInfo(value, elGetter);
}

/**
 * @summary EncryptedInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedInfo ::= SEQUENCE {
 *   keyAgreement      KeyAgreement,
 *   encryptedPduInfo  EncryptedPduInfo,
 *   ... }
 * ```
 *
 * @class
 */
export class EncryptedInfo {
    constructor(
        /**
         * @summary `keyAgreement`.
         * @public
         * @readonly
         */
        readonly keyAgreement: KeyAgreement,
        /**
         * @summary `encryptedPduInfo`.
         * @public
         * @readonly
         */
        readonly encryptedPduInfo: EncryptedPduInfo,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EncryptedInfo
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedInfo`.
     * @returns {EncryptedInfo}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof EncryptedInfo]: EncryptedInfo[_K] }>
    ): EncryptedInfo {
        return new EncryptedInfo(
            _o.keyAgreement,
            _o.encryptedPduInfo,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of EncryptedInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "keyAgreement",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "encryptedPduInfo",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of EncryptedInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedInfo: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of EncryptedInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedInfo: $.ComponentSpec[] = [];
let _cached_decoder_for_EncryptedInfo: $.ASN1Decoder<
    EncryptedInfo
> | null = null;
let _cached_encoder_for_EncryptedInfo: $.ASN1Encoder<
    EncryptedInfo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedInfo} The decoded data structure.
 */
export function _decode_EncryptedInfo(el: _Element) {
    if (!_cached_decoder_for_EncryptedInfo) {
        _cached_decoder_for_EncryptedInfo = function (
            el: _Element
        ): EncryptedInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "EncryptedInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "keyAgreement";
            sequence[1].name = "encryptedPduInfo";
            let keyAgreement!: KeyAgreement;
            let encryptedPduInfo!: EncryptedPduInfo;
            keyAgreement = _decode_KeyAgreement(sequence[0]);
            encryptedPduInfo = _decode_EncryptedPduInfo(sequence[1]);
            return new EncryptedInfo(
                keyAgreement,
                encryptedPduInfo,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_EncryptedInfo(el);
}
/**
 * @summary Encodes a(n) EncryptedInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedInfo, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedInfo(
    value: EncryptedInfo,
    elGetter: $.ASN1Encoder<EncryptedInfo>
) {
    if (!_cached_encoder_for_EncryptedInfo) {
        _cached_encoder_for_EncryptedInfo = function (
            value: EncryptedInfo,
            elGetter: $.ASN1Encoder<EncryptedInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_KeyAgreement(
                                value.keyAgreement,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_EncryptedPduInfo(
                                value.encryptedPduInfo,
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
    return _cached_encoder_for_EncryptedInfo(value, elGetter);
}

/**
 * @summary TBSPDU_wrapper_conf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSPDU-wrapper-conf ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TBSPDU_wrapper_conf =
    | { clear: WrappedPDUInfo } /* CHOICE_ALT_ROOT */
    | { protected_: EncryptedInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TBSPDU_wrapper_conf: $.ASN1Decoder<
    TBSPDU_wrapper_conf
> | null = null;
let _cached_encoder_for_TBSPDU_wrapper_conf: $.ASN1Encoder<
    TBSPDU_wrapper_conf
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBSPDU_wrapper_conf
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSPDU_wrapper_conf} The decoded data structure.
 */
export function _decode_TBSPDU_wrapper_conf(el: _Element) {
    if (!_cached_decoder_for_TBSPDU_wrapper_conf) {
        _cached_decoder_for_TBSPDU_wrapper_conf = $._decode_extensible_choice<
            TBSPDU_wrapper_conf
        >({
            "CONTEXT 2": [
                "clear",
                $._decode_explicit<WrappedPDUInfo>(
                    () => _decode_WrappedPDUInfo
                ),
            ],
            "CONTEXT 3": [
                "protected_",
                $._decode_explicit<EncryptedInfo>(() => _decode_EncryptedInfo),
            ],
        });
    }
    return _cached_decoder_for_TBSPDU_wrapper_conf(el);
}
/**
 * @summary Encodes a(n) TBSPDU_wrapper_conf into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSPDU_wrapper_conf, encoded as an ASN.1 Element.
 */
export function _encode_TBSPDU_wrapper_conf(
    value: TBSPDU_wrapper_conf,
    elGetter: $.ASN1Encoder<TBSPDU_wrapper_conf>
) {
    if (!_cached_encoder_for_TBSPDU_wrapper_conf) {
        _cached_encoder_for_TBSPDU_wrapper_conf = $._encode_choice<
            TBSPDU_wrapper_conf
        >(
            {
                clear: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_WrappedPDUInfo,
                    $.BER
                ),
                protected_: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_EncryptedInfo,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TBSPDU_wrapper_conf(value, elGetter);
}

/**
 * @summary TBSPDU_wrapper
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSPDU-wrapper ::= SEQUENCE  {
 *   version               Version DEFAULT v1,
 *   signatureAlgorithm    AlgorithmIdentifier {{SupportedSignatureAlgorithms}},
 *   certPath         [0]  IMPLICIT PkiPath,
 *   signedAttrs      [1]  IMPLICIT SignedAttributes OPTIONAL,
 *   conf                  CHOICE {
 *     clear            [2]  WrappedPDUInfo,
 *     protected        [3]  EncryptedInfo,
 *    ... },
 *   ... }
 * ```
 *
 * @class
 */
export class TBSPDU_wrapper {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `signatureAlgorithm`.
         * @public
         * @readonly
         */
        readonly signatureAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `certPath`.
         * @public
         * @readonly
         */
        readonly certPath: PkiPath,
        /**
         * @summary `signedAttrs`.
         * @public
         * @readonly
         */
        readonly signedAttrs: OPTIONAL<SignedAttributes>,
        /**
         * @summary `conf`.
         * @public
         * @readonly
         */
        readonly conf: TBSPDU_wrapper_conf,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TBSPDU_wrapper
     * @description
     *
     * This takes an `object` and converts it to a `TBSPDU_wrapper`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSPDU_wrapper`.
     * @returns {TBSPDU_wrapper}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TBSPDU_wrapper]: TBSPDU_wrapper[_K] }>
    ): TBSPDU_wrapper {
        return new TBSPDU_wrapper(
            _o.version,
            _o.signatureAlgorithm,
            _o.certPath,
            _o.signedAttrs,
            _o.conf,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version() {
        return AuthenticationFramework.Version_v1;
    }
}
/**
 * @summary The Leading Root Component Types of TBSPDU_wrapper
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBSPDU_wrapper: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signatureAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "certPath",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signedAttrs",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec("conf", false, $.hasAnyTag, undefined, undefined),
];
/**
 * @summary The Trailing Root Component Types of TBSPDU_wrapper
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBSPDU_wrapper: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TBSPDU_wrapper
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBSPDU_wrapper: $.ComponentSpec[] = [];
let _cached_decoder_for_TBSPDU_wrapper: $.ASN1Decoder<
    TBSPDU_wrapper
> | null = null;
let _cached_encoder_for_TBSPDU_wrapper: $.ASN1Encoder<
    TBSPDU_wrapper
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TBSPDU_wrapper
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSPDU_wrapper} The decoded data structure.
 */
export function _decode_TBSPDU_wrapper(el: _Element) {
    if (!_cached_decoder_for_TBSPDU_wrapper) {
        _cached_decoder_for_TBSPDU_wrapper = function (
            el: _Element
        ): TBSPDU_wrapper {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<Version> =
                TBSPDU_wrapper._default_value_for_version;
            let signatureAlgorithm!: AlgorithmIdentifier;
            let certPath!: PkiPath;
            let signedAttrs: OPTIONAL<SignedAttributes>;
            let conf!: TBSPDU_wrapper_conf;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
                },
                signatureAlgorithm: (_el: _Element): void => {
                    signatureAlgorithm = _decode_AlgorithmIdentifier(_el);
                },
                certPath: (_el: _Element): void => {
                    certPath = $._decode_explicit<PkiPath>(
                        () => _decode_PkiPath
                    )(_el);
                },
                signedAttrs: (_el: _Element): void => {
                    signedAttrs = $._decode_explicit<SignedAttributes>(
                        () => _decode_SignedAttributes
                    )(_el);
                },
                conf: (_el: _Element): void => {
                    conf = _decode_TBSPDU_wrapper_conf(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBSPDU_wrapper,
                _extension_additions_list_spec_for_TBSPDU_wrapper,
                _root_component_type_list_2_spec_for_TBSPDU_wrapper,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TBSPDU_wrapper(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                signatureAlgorithm,
                certPath,
                signedAttrs,
                conf,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TBSPDU_wrapper(el);
}
/**
 * @summary Encodes a(n) TBSPDU_wrapper into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSPDU_wrapper, encoded as an ASN.1 Element.
 */
export function _encode_TBSPDU_wrapper(
    value: TBSPDU_wrapper,
    elGetter: $.ASN1Encoder<TBSPDU_wrapper>
) {
    if (!_cached_encoder_for_TBSPDU_wrapper) {
        _cached_encoder_for_TBSPDU_wrapper = function (
            value: TBSPDU_wrapper,
            elGetter: $.ASN1Encoder<TBSPDU_wrapper>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            $.deepEq(
                                value.version,
                                TBSPDU_wrapper._default_value_for_version
                            )
                                ? undefined
                                : _encode_Version(value.version, $.BER),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.signatureAlgorithm,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_PkiPath,
                                $.BER
                            )(value.certPath, $.BER),
                            /* IF_ABSENT  */ value.signedAttrs === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_SignedAttributes,
                                      $.BER
                                  )(value.signedAttrs, $.BER),
                            /* REQUIRED   */ _encode_TBSPDU_wrapper_conf(
                                value.conf,
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
    return _cached_encoder_for_TBSPDU_wrapper(value, elGetter);
}

export type PDU_wrapper<> = SIGNED<TBSPDU_wrapper>; // DefinedType
let _cached_decoder_for_PDU_wrapper: $.ASN1Decoder<PDU_wrapper> | null = null;
let _cached_encoder_for_PDU_wrapper: $.ASN1Encoder<PDU_wrapper> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PDU_wrapper
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDU_wrapper} The decoded data structure.
 */
export function _decode_PDU_wrapper(el: _Element) {
    if (!_cached_decoder_for_PDU_wrapper) {
        _cached_decoder_for_PDU_wrapper = _get_decoder_for_SIGNED<
            TBSPDU_wrapper
        >(_decode_TBSPDU_wrapper);
    }
    return _cached_decoder_for_PDU_wrapper(el);
}
/**
 * @summary Encodes a(n) PDU_wrapper into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDU_wrapper, encoded as an ASN.1 Element.
 */
export function _encode_PDU_wrapper(
    value: PDU_wrapper,
    elGetter: $.ASN1Encoder<PDU_wrapper>
) {
    if (!_cached_encoder_for_PDU_wrapper) {
        _cached_encoder_for_PDU_wrapper = _get_encoder_for_SIGNED<
            TBSPDU_wrapper
        >(_encode_TBSPDU_wrapper);
    }
    return _cached_encoder_for_PDU_wrapper(value, elGetter);
}

/**
 * @summary SupportedSignatureAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedSignatureAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedSignatureAlgorithms: ALGORITHM[] = [];

/**
 * @summary id_contentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-contentType OBJECT IDENTIFIER ::= { iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs9(9) 3 }
 * ```
 *
 * @constant
 */
export const id_contentType: OBJECT_IDENTIFIER = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    3,
]);

/**
 * @summary contentType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contentType ATTRIBUTE ::= {
 *   WITH SYNTAX            WRAPPED-PDU.&id({SupportedPduSet})
 *   EQUALITY MATCHING RULE objectIdentifierMatch
 *   SINGLE VALUE           TRUE
 *   ID                     id-contentType }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const contentType: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_contentType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary id_messageDigest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-messageDigest OBJECT IDENTIFIER ::= { iso(1) member-body(2) us(840) rsadsi(113549) pkcs(1) pkcs9(9) 4 }
 * ```
 *
 * @constant
 */
export const id_messageDigest: OBJECT_IDENTIFIER = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    4,
]);

/**
 * @summary messageDigest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * messageDigest ATTRIBUTE ::= {
 *   WITH SYNTAX            OCTET STRING
 *   EQUALITY MATCHING RULE octetStringMatch
 *   SINGLE VALUE           TRUE
 *   ID                     id-messageDigest }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const messageDigest: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&equality-match": octetStringMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&id": id_messageDigest /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/**
 * @summary SupportedSignedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedSignedAttributes ATTRIBUTE ::= { contentType | messageDigest }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const SupportedSignedAttributes: ATTRIBUTE[] = [
    contentType,
    messageDigest,
];

/**
 * @summary SupportedDHPublicKeyAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedDHPublicKeyAlgorithms ALGORITHM ::= {...}
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const SupportedDHPublicKeyAlgorithms: ALGORITHM[] = [];

/**
 * @summary SupportedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedAttributes ATTRIBUTE ::= {...}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const SupportedAttributes: ATTRIBUTE[] = [];

export type AttributeCertificateV2<> = AttributeCertificate; // DefinedType
let _cached_decoder_for_AttributeCertificateV2: $.ASN1Decoder<
    AttributeCertificateV2
> | null = null;
let _cached_encoder_for_AttributeCertificateV2: $.ASN1Encoder<
    AttributeCertificateV2
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificateV2
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificateV2} The decoded data structure.
 */
export function _decode_AttributeCertificateV2(el: _Element) {
    if (!_cached_decoder_for_AttributeCertificateV2) {
        _cached_decoder_for_AttributeCertificateV2 = _decode_AttributeCertificate;
    }
    return _cached_decoder_for_AttributeCertificateV2(el);
}
/**
 * @summary Encodes a(n) AttributeCertificateV2 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificateV2, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificateV2(
    value: AttributeCertificateV2,
    elGetter: $.ASN1Encoder<AttributeCertificateV2>
) {
    if (!_cached_encoder_for_AttributeCertificateV2) {
        _cached_encoder_for_AttributeCertificateV2 = _encode_AttributeCertificate;
    }
    return _cached_encoder_for_AttributeCertificateV2(value, elGetter);
}

/**
 * @summary PkiWaError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PkiWaError ::= ENUMERATED {
 *   unsupportedWrapperVersion           (0),
 *   unsupportedSignatureAlgorithm       (1),
 *   incompleteCertPath                  (2),
 *   certificationPathFailure            (3),
 *   invalidSignature                    (4),
 *   missingMandatoryAttributes          (5),
 *   unwantedAttribute                   (6),
 *   unsupportedPduType                  (7),
 *   unexpectedPduType                   (8),
 *   invalidPduSyntax                    (9),
 *   unknownDHpkCetificate               (10),
 *   invalidKeyingMaterial               (11),
 *   dhAlgorithmMismatch                 (12),
 *   invalideDhPublickey                 (13),
 *   unsupportedKeyWrappingAlgorithm     (14),
 *   keyEncAlgorithmParametersMissing    (15),
 *   keyEncAlgorithmParametersNotAllowed (16),
 *   invalidParmsForSymEncryptAlgorithms (17),
 *   decryptionFailed                    (18),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_PkiWaError {
    unsupportedWrapperVersion = 0,
    unsupportedSignatureAlgorithm = 1,
    incompleteCertPath = 2,
    certificationPathFailure = 3,
    invalidSignature = 4,
    missingMandatoryAttributes = 5,
    unwantedAttribute = 6,
    unsupportedPduType = 7,
    unexpectedPduType = 8,
    invalidPduSyntax = 9,
    unknownDHpkCetificate = 10,
    invalidKeyingMaterial = 11,
    dhAlgorithmMismatch = 12,
    invalideDhPublickey = 13,
    unsupportedKeyWrappingAlgorithm = 14,
    keyEncAlgorithmParametersMissing = 15,
    keyEncAlgorithmParametersNotAllowed = 16,
    invalidParmsForSymEncryptAlgorithms = 17,
    decryptionFailed = 18,
}
/**
 * @summary PkiWaError
 */
export type PkiWaError = _enum_for_PkiWaError | ENUMERATED;
/**
 * @summary PkiWaError_unsupportedWrapperVersion
 * @constant
 * @type {number}
 */
export const PkiWaError_unsupportedWrapperVersion: PkiWaError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_unsupportedSignatureAlgorithm
 * @constant
 * @type {number}
 */
export const PkiWaError_unsupportedSignatureAlgorithm: PkiWaError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_incompleteCertPath
 * @constant
 * @type {number}
 */
export const PkiWaError_incompleteCertPath: PkiWaError = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_certificationPathFailure
 * @constant
 * @type {number}
 */
export const PkiWaError_certificationPathFailure: PkiWaError = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_invalidSignature
 * @constant
 * @type {number}
 */
export const PkiWaError_invalidSignature: PkiWaError = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_missingMandatoryAttributes
 * @constant
 * @type {number}
 */
export const PkiWaError_missingMandatoryAttributes: PkiWaError = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_unwantedAttribute
 * @constant
 * @type {number}
 */
export const PkiWaError_unwantedAttribute: PkiWaError = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_unsupportedPduType
 * @constant
 * @type {number}
 */
export const PkiWaError_unsupportedPduType: PkiWaError = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_unexpectedPduType
 * @constant
 * @type {number}
 */
export const PkiWaError_unexpectedPduType: PkiWaError = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_invalidPduSyntax
 * @constant
 * @type {number}
 */
export const PkiWaError_invalidPduSyntax: PkiWaError = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_unknownDHpkCetificate
 * @constant
 * @type {number}
 */
export const PkiWaError_unknownDHpkCetificate: PkiWaError = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_invalidKeyingMaterial
 * @constant
 * @type {number}
 */
export const PkiWaError_invalidKeyingMaterial: PkiWaError = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_dhAlgorithmMismatch
 * @constant
 * @type {number}
 */
export const PkiWaError_dhAlgorithmMismatch: PkiWaError = 12; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_invalideDhPublickey
 * @constant
 * @type {number}
 */
export const PkiWaError_invalideDhPublickey: PkiWaError = 13; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_unsupportedKeyWrappingAlgorithm
 * @constant
 * @type {number}
 */
export const PkiWaError_unsupportedKeyWrappingAlgorithm: PkiWaError = 14; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_keyEncAlgorithmParametersMissing
 * @constant
 * @type {number}
 */
export const PkiWaError_keyEncAlgorithmParametersMissing: PkiWaError = 15; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_keyEncAlgorithmParametersNotAllowed
 * @constant
 * @type {number}
 */
export const PkiWaError_keyEncAlgorithmParametersNotAllowed: PkiWaError = 16; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_invalidParmsForSymEncryptAlgorithms
 * @constant
 * @type {number}
 */
export const PkiWaError_invalidParmsForSymEncryptAlgorithms: PkiWaError = 17; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary PkiWaError_decryptionFailed
 * @constant
 * @type {number}
 */
export const PkiWaError_decryptionFailed: PkiWaError = 18; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_PkiWaError: $.ASN1Decoder<PkiWaError> | null = null;
let _cached_encoder_for_PkiWaError: $.ASN1Encoder<PkiWaError> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PkiWaError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PkiWaError} The decoded data structure.
 */
export function _decode_PkiWaError(el: _Element) {
    if (!_cached_decoder_for_PkiWaError) {
        _cached_decoder_for_PkiWaError = $._decodeEnumerated;
    }
    return _cached_decoder_for_PkiWaError(el);
}
/**
 * @summary Encodes a(n) PkiWaError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PkiWaError, encoded as an ASN.1 Element.
 */
export function _encode_PkiWaError(
    value: PkiWaError,
    elGetter: $.ASN1Encoder<PkiWaError>
) {
    if (!_cached_encoder_for_PkiWaError) {
        _cached_encoder_for_PkiWaError = $._encodeEnumerated;
    }
    return _cached_encoder_for_PkiWaError(value, elGetter);
}

/* END_MODULE PkiPmiWrapper */
/* eslint-enable */
