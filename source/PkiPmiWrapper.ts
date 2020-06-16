/*
    BEGIN_MODULE PkiPmiWrapper
    OID: joint-iso-itu-t.ds.module.pkiPmiWrapper.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "./AttributeCertificateDefinitions";
import {
    AlgorithmIdentifier,
    CertificateSerialNumber,
    PkiPath,
    SIGNED,
    Version,
    Version_v1,
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
import {
    Attribute,
    Name,
    _decode_Attribute,
    _decode_Name,
    _encode_Attribute,
    _encode_Name,
} from "./InformationFramework";
import * as __utils from "./__utils";
export {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "./AttributeCertificateDefinitions";
export {
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
    CRLReason_aACompromise as aACompromise /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_affiliationChanged as affiliationChanged /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_cACompromise as cACompromise /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_certificateHold as certificateHold /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_cessationOfOperation as cessationOfOperation /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_keyCompromise as keyCompromise /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_privilegeWithdrawn as privilegeWithdrawn /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_removeFromCRL as removeFromCRL /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_superseded as superseded /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_unspecified as unspecified /* IMPORTED_ENUMERATION_ITEM */,
    CRLReason_weakAlgorithmOrKey as weakAlgorithmOrKey /* IMPORTED_ENUMERATION_ITEM */,
    SubjectKeyIdentifier,
    _decode_CRLReason,
    _decode_SubjectKeyIdentifier,
    _encode_CRLReason,
    _encode_SubjectKeyIdentifier,
} from "./CertificateExtensions";
export {
    Attribute,
    Name,
    _decode_Attribute,
    _decode_Name,
    _encode_Attribute,
    _encode_Name,
} from "./InformationFramework";
export {
    attributeCertificateDefinitions,
    authenticationFramework,
    certificateExtensions,
    id_cmsct,
    informationFramework,
    selectedAttributeTypes,
} from "./UsefulDefinitions";

// TODO: ObjectClassAssignment: WRAPPED-PDU

export type SignedAttributes = Attribute[]; // SetOfType
let _cached_decoder_for_SignedAttributes: __utils.ASN1Decoder<
    SignedAttributes
> | null = null;
let _cached_encoder_for_SignedAttributes: __utils.ASN1Encoder<
    SignedAttributes
> | null = null;
export function _decode_SignedAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SignedAttributes) {
        _cached_decoder_for_SignedAttributes = __utils._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_SignedAttributes(el);
}
export function _encode_SignedAttributes(
    value: SignedAttributes,
    elGetter: __utils.ASN1Encoder<SignedAttributes>
) {
    if (!_cached_encoder_for_SignedAttributes) {
        _cached_encoder_for_SignedAttributes = __utils._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            __utils.BER
        );
    }
    return _cached_encoder_for_SignedAttributes(value, elGetter);
}

export class WrappedPDUInfo {
    constructor(
        readonly pduType: asn1.OBJECT_IDENTIFIER,
        readonly pduInfo: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_WrappedPDUInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pduType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pduInfo",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_WrappedPDUInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_WrappedPDUInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_WrappedPDUInfo: __utils.ASN1Decoder<
    WrappedPDUInfo
> | null = null;
let _cached_encoder_for_WrappedPDUInfo: __utils.ASN1Encoder<
    WrappedPDUInfo
> | null = null;
export function _decode_WrappedPDUInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_WrappedPDUInfo) {
        _cached_decoder_for_WrappedPDUInfo = function (
            el: asn1.ASN1Element
        ): WrappedPDUInfo {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "WrappedPDUInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "pduType";
            sequence[1].name = "pduInfo";
            let pduType!: asn1.OBJECT_IDENTIFIER;
            let pduInfo!: asn1.ASN1Element;
            pduType = __utils._decodeObjectIdentifier(sequence[0]);
            pduInfo = __utils._decodeAny(sequence[1]);
            // TODO: Validate values.
            return new WrappedPDUInfo(pduType, pduInfo, sequence.slice(2));
        };
    }
    return _cached_decoder_for_WrappedPDUInfo(el);
}
export function _encode_WrappedPDUInfo(
    value: WrappedPDUInfo,
    elGetter: __utils.ASN1Encoder<WrappedPDUInfo>
) {
    if (!_cached_encoder_for_WrappedPDUInfo) {
        _cached_encoder_for_WrappedPDUInfo = function (
            value: WrappedPDUInfo,
            elGetter: __utils.ASN1Encoder<WrappedPDUInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.pduType,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeAny(
                                value.pduInfo,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_WrappedPDUInfo(value, elGetter);
}

export type UserKeyingMaterial = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_UserKeyingMaterial: __utils.ASN1Decoder<
    UserKeyingMaterial
> | null = null;
let _cached_encoder_for_UserKeyingMaterial: __utils.ASN1Encoder<
    UserKeyingMaterial
> | null = null;
export function _decode_UserKeyingMaterial(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UserKeyingMaterial) {
        _cached_decoder_for_UserKeyingMaterial = __utils._decodeOctetString;
    }
    return _cached_decoder_for_UserKeyingMaterial(el);
}
export function _encode_UserKeyingMaterial(
    value: UserKeyingMaterial,
    elGetter: __utils.ASN1Encoder<UserKeyingMaterial>
) {
    if (!_cached_encoder_for_UserKeyingMaterial) {
        _cached_encoder_for_UserKeyingMaterial = __utils._encodeOctetString;
    }
    return _cached_encoder_for_UserKeyingMaterial(value, elGetter);
}

export class SenderStaticInfo {
    constructor(
        readonly issuer: Name,
        readonly serialNumber: CertificateSerialNumber,
        readonly partyAinfo: UserKeyingMaterial,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_SenderStaticInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "issuer",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serialNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "partyAinfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SenderStaticInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SenderStaticInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SenderStaticInfo: __utils.ASN1Decoder<
    SenderStaticInfo
> | null = null;
let _cached_encoder_for_SenderStaticInfo: __utils.ASN1Encoder<
    SenderStaticInfo
> | null = null;
export function _decode_SenderStaticInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SenderStaticInfo) {
        _cached_decoder_for_SenderStaticInfo = function (
            el: asn1.ASN1Element
        ): SenderStaticInfo {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new asn1.ASN1ConstructionError(
                    "SenderStaticInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "issuer";
            sequence[1].name = "serialNumber";
            sequence[2].name = "partyAinfo";
            let issuer!: Name;
            let serialNumber!: CertificateSerialNumber;
            let partyAinfo!: UserKeyingMaterial;
            issuer = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            partyAinfo = _decode_UserKeyingMaterial(sequence[2]);
            // TODO: Validate values.
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
export function _encode_SenderStaticInfo(
    value: SenderStaticInfo,
    elGetter: __utils.ASN1Encoder<SenderStaticInfo>
) {
    if (!_cached_encoder_for_SenderStaticInfo) {
        _cached_encoder_for_SenderStaticInfo = function (
            value: SenderStaticInfo,
            elGetter: __utils.ASN1Encoder<SenderStaticInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(
                                value.issuer,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_UserKeyingMaterial(
                                value.partyAinfo,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SenderStaticInfo(value, elGetter);
}

export class SenderDhPublicKey {
    constructor(
        readonly algorithm: AlgorithmIdentifier,
        readonly publicKey: asn1.BIT_STRING,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_SenderDhPublicKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "publicKey",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SenderDhPublicKey: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SenderDhPublicKey: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SenderDhPublicKey: __utils.ASN1Decoder<
    SenderDhPublicKey
> | null = null;
let _cached_encoder_for_SenderDhPublicKey: __utils.ASN1Encoder<
    SenderDhPublicKey
> | null = null;
export function _decode_SenderDhPublicKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SenderDhPublicKey) {
        _cached_decoder_for_SenderDhPublicKey = function (
            el: asn1.ASN1Element
        ): SenderDhPublicKey {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "SenderDhPublicKey contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "algorithm";
            sequence[1].name = "publicKey";
            let algorithm!: AlgorithmIdentifier;
            let publicKey!: asn1.BIT_STRING;
            algorithm = _decode_AlgorithmIdentifier(sequence[0]);
            publicKey = __utils._decodeBitString(sequence[1]);
            // TODO: Validate values.
            return new SenderDhPublicKey(
                algorithm,
                publicKey,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_SenderDhPublicKey(el);
}
export function _encode_SenderDhPublicKey(
    value: SenderDhPublicKey,
    elGetter: __utils.ASN1Encoder<SenderDhPublicKey>
) {
    if (!_cached_encoder_for_SenderDhPublicKey) {
        _cached_encoder_for_SenderDhPublicKey = function (
            value: SenderDhPublicKey,
            elGetter: __utils.ASN1Encoder<SenderDhPublicKey>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.algorithm,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeBitString(
                                value.publicKey,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SenderDhPublicKey(value, elGetter);
}

export type SenderDhInfo =
    | { senderStaticInfo: SenderStaticInfo } /* CHOICE_ALT_ROOT */
    | { senderDhPublicKey: SenderDhPublicKey } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_SenderDhInfo: __utils.ASN1Decoder<
    SenderDhInfo
> | null = null;
let _cached_encoder_for_SenderDhInfo: __utils.ASN1Encoder<
    SenderDhInfo
> | null = null;
export function _decode_SenderDhInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SenderDhInfo) {
        _cached_decoder_for_SenderDhInfo = __utils._decode_extensible_choice<
            SenderDhInfo
        >({
            "CONTEXT 0": [
                "senderStaticInfo",
                __utils._decode_explicit<SenderStaticInfo>(
                    () => _decode_SenderStaticInfo
                ),
            ],
            "CONTEXT 1": [
                "senderDhPublicKey",
                __utils._decode_explicit<SenderDhPublicKey>(
                    () => _decode_SenderDhPublicKey
                ),
            ],
        });
    }
    return _cached_decoder_for_SenderDhInfo(el);
}
export function _encode_SenderDhInfo(
    value: SenderDhInfo,
    elGetter: __utils.ASN1Encoder<SenderDhInfo>
) {
    if (!_cached_encoder_for_SenderDhInfo) {
        _cached_encoder_for_SenderDhInfo = __utils._encode_choice<SenderDhInfo>(
            {
                senderStaticInfo: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_SenderStaticInfo,
                    __utils.BER
                ),
                senderDhPublicKey: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_SenderDhPublicKey,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_SenderDhInfo(value, elGetter);
}

export class KeyAgreement_keyEncryptionAlgorithm {
    constructor(
        readonly algorithm: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyAgreement_keyEncryptionAlgorithm: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "parameters",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KeyAgreement_keyEncryptionAlgorithm: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KeyAgreement_keyEncryptionAlgorithm: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm: __utils.ASN1Decoder<
    KeyAgreement_keyEncryptionAlgorithm
> | null = null;
let _cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm: __utils.ASN1Encoder<
    KeyAgreement_keyEncryptionAlgorithm
> | null = null;
export function _decode_KeyAgreement_keyEncryptionAlgorithm(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm) {
        _cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm = function (
            el: asn1.ASN1Element
        ): KeyAgreement_keyEncryptionAlgorithm {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "KeyAgreement-keyEncryptionAlgorithm contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "algorithm";
            sequence[1].name = "parameters";
            let algorithm!: asn1.OBJECT_IDENTIFIER;
            let parameters!: asn1.ASN1Element;
            algorithm = __utils._decodeObjectIdentifier(sequence[0]);
            parameters = __utils._decodeAny(sequence[1]);
            // TODO: Validate values.
            return new KeyAgreement_keyEncryptionAlgorithm(
                algorithm,
                parameters,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm(el);
}
export function _encode_KeyAgreement_keyEncryptionAlgorithm(
    value: KeyAgreement_keyEncryptionAlgorithm,
    elGetter: __utils.ASN1Encoder<KeyAgreement_keyEncryptionAlgorithm>
) {
    if (!_cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm) {
        _cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm = function (
            value: KeyAgreement_keyEncryptionAlgorithm,
            elGetter: __utils.ASN1Encoder<KeyAgreement_keyEncryptionAlgorithm>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.algorithm,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeAny(
                                value.parameters,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm(
        value,
        elGetter
    );
}

export class KeyAgreement {
    constructor(
        readonly senderDhInfo: SenderDhInfo,
        readonly keyEncryptionAlgorithm: KeyAgreement_keyEncryptionAlgorithm,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyAgreement: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "senderDhInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyEncryptionAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_KeyAgreement: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_KeyAgreement: __utils.ComponentSpec[] = [];
let _cached_decoder_for_KeyAgreement: __utils.ASN1Decoder<
    KeyAgreement
> | null = null;
let _cached_encoder_for_KeyAgreement: __utils.ASN1Encoder<
    KeyAgreement
> | null = null;
export function _decode_KeyAgreement(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyAgreement) {
        _cached_decoder_for_KeyAgreement = function (
            el: asn1.ASN1Element
        ): KeyAgreement {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "KeyAgreement contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "senderDhInfo";
            sequence[1].name = "keyEncryptionAlgorithm";
            let senderDhInfo!: SenderDhInfo;
            let keyEncryptionAlgorithm!: KeyAgreement_keyEncryptionAlgorithm;
            senderDhInfo = __utils._decode_explicit<SenderDhInfo>(
                () => _decode_SenderDhInfo
            )(sequence[0]);
            keyEncryptionAlgorithm = _decode_KeyAgreement_keyEncryptionAlgorithm(
                sequence[1]
            );
            // TODO: Validate values.
            return new KeyAgreement(
                senderDhInfo,
                keyEncryptionAlgorithm,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_KeyAgreement(el);
}
export function _encode_KeyAgreement(
    value: KeyAgreement,
    elGetter: __utils.ASN1Encoder<KeyAgreement>
) {
    if (!_cached_encoder_for_KeyAgreement) {
        _cached_encoder_for_KeyAgreement = function (
            value: KeyAgreement,
            elGetter: __utils.ASN1Encoder<KeyAgreement>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_SenderDhInfo,
                                __utils.BER
                            )(value.senderDhInfo, __utils.BER),
                            /* REQUIRED   */ _encode_KeyAgreement_keyEncryptionAlgorithm(
                                value.keyEncryptionAlgorithm,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_KeyAgreement(value, elGetter);
}

export type EncryptedKey = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_EncryptedKey: __utils.ASN1Decoder<
    EncryptedKey
> | null = null;
let _cached_encoder_for_EncryptedKey: __utils.ASN1Encoder<
    EncryptedKey
> | null = null;
export function _decode_EncryptedKey(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncryptedKey) {
        _cached_decoder_for_EncryptedKey = __utils._decodeOctetString;
    }
    return _cached_decoder_for_EncryptedKey(el);
}
export function _encode_EncryptedKey(
    value: EncryptedKey,
    elGetter: __utils.ASN1Encoder<EncryptedKey>
) {
    if (!_cached_encoder_for_EncryptedKey) {
        _cached_encoder_for_EncryptedKey = __utils._encodeOctetString;
    }
    return _cached_encoder_for_EncryptedKey(value, elGetter);
}

export class EncryptedPduInfo_pduEncryptionAlgorithm {
    constructor(
        readonly algorithm: asn1.OBJECT_IDENTIFIER,
        readonly parameter: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "algorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "parameter",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EncryptedPduInfo_pduEncryptionAlgorithm: __utils.ASN1Decoder<
    EncryptedPduInfo_pduEncryptionAlgorithm
> | null = null;
let _cached_encoder_for_EncryptedPduInfo_pduEncryptionAlgorithm: __utils.ASN1Encoder<
    EncryptedPduInfo_pduEncryptionAlgorithm
> | null = null;
export function _decode_EncryptedPduInfo_pduEncryptionAlgorithm(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_EncryptedPduInfo_pduEncryptionAlgorithm) {
        _cached_decoder_for_EncryptedPduInfo_pduEncryptionAlgorithm = function (
            el: asn1.ASN1Element
        ): EncryptedPduInfo_pduEncryptionAlgorithm {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "EncryptedPduInfo-pduEncryptionAlgorithm contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "algorithm";
            sequence[1].name = "parameter";
            let algorithm!: asn1.OBJECT_IDENTIFIER;
            let parameter!: asn1.ASN1Element;
            algorithm = __utils._decodeObjectIdentifier(sequence[0]);
            parameter = __utils._decodeAny(sequence[1]);
            // TODO: Validate values.
            return new EncryptedPduInfo_pduEncryptionAlgorithm(
                algorithm,
                parameter
            );
        };
    }
    return _cached_decoder_for_EncryptedPduInfo_pduEncryptionAlgorithm(el);
}
export function _encode_EncryptedPduInfo_pduEncryptionAlgorithm(
    value: EncryptedPduInfo_pduEncryptionAlgorithm,
    elGetter: __utils.ASN1Encoder<EncryptedPduInfo_pduEncryptionAlgorithm>
) {
    if (!_cached_encoder_for_EncryptedPduInfo_pduEncryptionAlgorithm) {
        _cached_encoder_for_EncryptedPduInfo_pduEncryptionAlgorithm = function (
            value: EncryptedPduInfo_pduEncryptionAlgorithm,
            elGetter: __utils.ASN1Encoder<
                EncryptedPduInfo_pduEncryptionAlgorithm
            >
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeObjectIdentifier(
                            value.algorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeAny(
                            value.parameter,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EncryptedPduInfo_pduEncryptionAlgorithm(
        value,
        elGetter
    );
}

export type EncryptedPdu = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_EncryptedPdu: __utils.ASN1Decoder<
    EncryptedPdu
> | null = null;
let _cached_encoder_for_EncryptedPdu: __utils.ASN1Encoder<
    EncryptedPdu
> | null = null;
export function _decode_EncryptedPdu(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncryptedPdu) {
        _cached_decoder_for_EncryptedPdu = __utils._decodeOctetString;
    }
    return _cached_decoder_for_EncryptedPdu(el);
}
export function _encode_EncryptedPdu(
    value: EncryptedPdu,
    elGetter: __utils.ASN1Encoder<EncryptedPdu>
) {
    if (!_cached_encoder_for_EncryptedPdu) {
        _cached_encoder_for_EncryptedPdu = __utils._encodeOctetString;
    }
    return _cached_encoder_for_EncryptedPdu(value, elGetter);
}

export class EncryptedPduInfo {
    constructor(
        readonly pduType: asn1.OBJECT_IDENTIFIER,
        readonly encryptedKey: EncryptedKey | undefined,
        readonly pduEncryptionAlgorithm:
            | EncryptedPduInfo_pduEncryptionAlgorithm
            | undefined,
        readonly encryptedPdu: EncryptedPdu,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_EncryptedPduInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pduType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedKey",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pduEncryptionAlgorithm",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedPdu",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncryptedPduInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncryptedPduInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EncryptedPduInfo: __utils.ASN1Decoder<
    EncryptedPduInfo
> | null = null;
let _cached_encoder_for_EncryptedPduInfo: __utils.ASN1Encoder<
    EncryptedPduInfo
> | null = null;
export function _decode_EncryptedPduInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncryptedPduInfo) {
        _cached_decoder_for_EncryptedPduInfo = function (
            el: asn1.ASN1Element
        ): EncryptedPduInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let pduType!: asn1.OBJECT_IDENTIFIER;
            let encryptedKey: asn1.OPTIONAL<EncryptedKey>;
            let pduEncryptionAlgorithm: asn1.OPTIONAL<EncryptedPduInfo_pduEncryptionAlgorithm>;
            let encryptedPdu!: EncryptedPdu;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                pduType: (_el: asn1.ASN1Element): void => {
                    pduType = __utils._decodeObjectIdentifier(_el);
                },
                encryptedKey: (_el: asn1.ASN1Element): void => {
                    encryptedKey = _decode_EncryptedKey(_el);
                },
                pduEncryptionAlgorithm: (_el: asn1.ASN1Element): void => {
                    pduEncryptionAlgorithm = _decode_EncryptedPduInfo_pduEncryptionAlgorithm(
                        _el
                    );
                },
                encryptedPdu: (_el: asn1.ASN1Element): void => {
                    encryptedPdu = __utils._decode_explicit<EncryptedPdu>(
                        () => _decode_EncryptedPdu
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncryptedPduInfo,
                _extension_additions_list_spec_for_EncryptedPduInfo,
                _root_component_type_list_2_spec_for_EncryptedPduInfo,
                (ext: asn1.ASN1Element): void => {
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
export function _encode_EncryptedPduInfo(
    value: EncryptedPduInfo,
    elGetter: __utils.ASN1Encoder<EncryptedPduInfo>
) {
    if (!_cached_encoder_for_EncryptedPduInfo) {
        _cached_encoder_for_EncryptedPduInfo = function (
            value: EncryptedPduInfo,
            elGetter: __utils.ASN1Encoder<EncryptedPduInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.pduType,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.encryptedKey === undefined
                                ? undefined
                                : _encode_EncryptedKey(
                                      value.encryptedKey,
                                      __utils.BER
                                  ),
                            /* IF_ABSENT  */ value.pduEncryptionAlgorithm ===
                            undefined
                                ? undefined
                                : _encode_EncryptedPduInfo_pduEncryptionAlgorithm(
                                      value.pduEncryptionAlgorithm,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_EncryptedPdu,
                                __utils.BER
                            )(value.encryptedPdu, __utils.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EncryptedPduInfo(value, elGetter);
}

export class EncryptedInfo {
    constructor(
        readonly keyAgreement: KeyAgreement,
        readonly encryptedPduInfo: EncryptedPduInfo,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_EncryptedInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "keyAgreement",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "encryptedPduInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EncryptedInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EncryptedInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EncryptedInfo: __utils.ASN1Decoder<
    EncryptedInfo
> | null = null;
let _cached_encoder_for_EncryptedInfo: __utils.ASN1Encoder<
    EncryptedInfo
> | null = null;
export function _decode_EncryptedInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EncryptedInfo) {
        _cached_decoder_for_EncryptedInfo = function (
            el: asn1.ASN1Element
        ): EncryptedInfo {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "EncryptedInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "keyAgreement";
            sequence[1].name = "encryptedPduInfo";
            let keyAgreement!: KeyAgreement;
            let encryptedPduInfo!: EncryptedPduInfo;
            keyAgreement = _decode_KeyAgreement(sequence[0]);
            encryptedPduInfo = _decode_EncryptedPduInfo(sequence[1]);
            // TODO: Validate values.
            return new EncryptedInfo(
                keyAgreement,
                encryptedPduInfo,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_EncryptedInfo(el);
}
export function _encode_EncryptedInfo(
    value: EncryptedInfo,
    elGetter: __utils.ASN1Encoder<EncryptedInfo>
) {
    if (!_cached_encoder_for_EncryptedInfo) {
        _cached_encoder_for_EncryptedInfo = function (
            value: EncryptedInfo,
            elGetter: __utils.ASN1Encoder<EncryptedInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_KeyAgreement(
                                value.keyAgreement,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_EncryptedPduInfo(
                                value.encryptedPduInfo,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_EncryptedInfo(value, elGetter);
}

export type TBSPDU_wrapper_conf =
    | { clear: WrappedPDUInfo } /* CHOICE_ALT_ROOT */
    | { protected_: EncryptedInfo } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_TBSPDU_wrapper_conf: __utils.ASN1Decoder<
    TBSPDU_wrapper_conf
> | null = null;
let _cached_encoder_for_TBSPDU_wrapper_conf: __utils.ASN1Encoder<
    TBSPDU_wrapper_conf
> | null = null;
export function _decode_TBSPDU_wrapper_conf(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TBSPDU_wrapper_conf) {
        _cached_decoder_for_TBSPDU_wrapper_conf = __utils._decode_extensible_choice<
            TBSPDU_wrapper_conf
        >({
            "CONTEXT 2": [
                "clear",
                __utils._decode_explicit<WrappedPDUInfo>(
                    () => _decode_WrappedPDUInfo
                ),
            ],
            "CONTEXT 3": [
                "protected_",
                __utils._decode_explicit<EncryptedInfo>(
                    () => _decode_EncryptedInfo
                ),
            ],
        });
    }
    return _cached_decoder_for_TBSPDU_wrapper_conf(el);
}
export function _encode_TBSPDU_wrapper_conf(
    value: TBSPDU_wrapper_conf,
    elGetter: __utils.ASN1Encoder<TBSPDU_wrapper_conf>
) {
    if (!_cached_encoder_for_TBSPDU_wrapper_conf) {
        _cached_encoder_for_TBSPDU_wrapper_conf = __utils._encode_choice<
            TBSPDU_wrapper_conf
        >(
            {
                clear: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => _encode_WrappedPDUInfo,
                    __utils.BER
                ),
                protected_: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    3,
                    () => _encode_EncryptedInfo,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_TBSPDU_wrapper_conf(value, elGetter);
}

export class TBSPDU_wrapper {
    constructor(
        readonly version: Version | undefined,
        readonly signatureAlgorithm: AlgorithmIdentifier,
        readonly certPath: PkiPath,
        readonly signedAttrs: SignedAttributes | undefined,
        readonly conf: TBSPDU_wrapper_conf,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_version() {
        return Version_v1;
    }
}
export const _root_component_type_list_1_spec_for_TBSPDU_wrapper: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signatureAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certPath",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signedAttrs",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "conf",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TBSPDU_wrapper: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TBSPDU_wrapper: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TBSPDU_wrapper: __utils.ASN1Decoder<
    TBSPDU_wrapper
> | null = null;
let _cached_encoder_for_TBSPDU_wrapper: __utils.ASN1Encoder<
    TBSPDU_wrapper
> | null = null;
export function _decode_TBSPDU_wrapper(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TBSPDU_wrapper) {
        _cached_decoder_for_TBSPDU_wrapper = function (
            el: asn1.ASN1Element
        ): TBSPDU_wrapper {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: asn1.OPTIONAL<Version> =
                TBSPDU_wrapper._default_value_for_version;
            let signatureAlgorithm!: AlgorithmIdentifier;
            let certPath!: PkiPath;
            let signedAttrs: asn1.OPTIONAL<SignedAttributes>;
            let conf!: TBSPDU_wrapper_conf;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_Version(_el);
                },
                signatureAlgorithm: (_el: asn1.ASN1Element): void => {
                    signatureAlgorithm = _decode_AlgorithmIdentifier(_el);
                },
                certPath: (_el: asn1.ASN1Element): void => {
                    certPath = __utils._decode_explicit<PkiPath>(
                        () => _decode_PkiPath
                    )(_el);
                },
                signedAttrs: (_el: asn1.ASN1Element): void => {
                    signedAttrs = __utils._decode_explicit<SignedAttributes>(
                        () => _decode_SignedAttributes
                    )(_el);
                },
                conf: (_el: asn1.ASN1Element): void => {
                    conf = _decode_TBSPDU_wrapper_conf(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TBSPDU_wrapper,
                _extension_additions_list_spec_for_TBSPDU_wrapper,
                _root_component_type_list_2_spec_for_TBSPDU_wrapper,
                (ext: asn1.ASN1Element): void => {
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
export function _encode_TBSPDU_wrapper(
    value: TBSPDU_wrapper,
    elGetter: __utils.ASN1Encoder<TBSPDU_wrapper>
) {
    if (!_cached_encoder_for_TBSPDU_wrapper) {
        _cached_encoder_for_TBSPDU_wrapper = function (
            value: TBSPDU_wrapper,
            elGetter: __utils.ASN1Encoder<TBSPDU_wrapper>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.version === undefined ||
                            __utils.deepEq(
                                value.version,
                                TBSPDU_wrapper._default_value_for_version
                            )
                                ? undefined
                                : _encode_Version(value.version, __utils.BER),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.signatureAlgorithm,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => _encode_PkiPath,
                                __utils.BER
                            )(value.certPath, __utils.BER),
                            /* IF_ABSENT  */ value.signedAttrs === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_SignedAttributes,
                                      __utils.BER
                                  )(value.signedAttrs, __utils.BER),
                            /* REQUIRED   */ _encode_TBSPDU_wrapper_conf(
                                value.conf,
                                __utils.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_TBSPDU_wrapper(value, elGetter);
}

export type PDU_wrapper = SIGNED<TBSPDU_wrapper>; // DefinedType
let _cached_decoder_for_PDU_wrapper: __utils.ASN1Decoder<
    PDU_wrapper
> | null = null;
let _cached_encoder_for_PDU_wrapper: __utils.ASN1Encoder<
    PDU_wrapper
> | null = null;
export function _decode_PDU_wrapper(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PDU_wrapper) {
        _cached_decoder_for_PDU_wrapper = _get_decoder_for_SIGNED<
            TBSPDU_wrapper
        >(_decode_TBSPDU_wrapper);
    }
    return _cached_decoder_for_PDU_wrapper(el);
}
export function _encode_PDU_wrapper(
    value: PDU_wrapper,
    elGetter: __utils.ASN1Encoder<PDU_wrapper>
) {
    if (!_cached_encoder_for_PDU_wrapper) {
        _cached_encoder_for_PDU_wrapper = _get_encoder_for_SIGNED<
            TBSPDU_wrapper
        >(_encode_TBSPDU_wrapper);
    }
    return _cached_encoder_for_PDU_wrapper(value, elGetter);
}

// TODO: ObjectSetAssignment: SupportedSignatureAlgorithms

// TODO: ObjectSetAssignment: SupportedSignedAttributes

// TODO: ObjectSetAssignment: SupportedPduSet

// TODO: ObjectSetAssignment: SupportedKeyEncryptionAlgorithm

// TODO: ObjectSetAssignment: SupportedDHPublicKeyAlgorithms

// TODO: ObjectSetAssignment: SymmetricEncryptionAlgorithms

// TODO: ObjectSetAssignment: SupportedAttributes

export type AttributeCertificateV2 = AttributeCertificate; // DefinedType
let _cached_decoder_for_AttributeCertificateV2: __utils.ASN1Decoder<
    AttributeCertificateV2
> | null = null;
let _cached_encoder_for_AttributeCertificateV2: __utils.ASN1Encoder<
    AttributeCertificateV2
> | null = null;
export function _decode_AttributeCertificateV2(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeCertificateV2) {
        _cached_decoder_for_AttributeCertificateV2 = _decode_AttributeCertificate;
    }
    return _cached_decoder_for_AttributeCertificateV2(el);
}
export function _encode_AttributeCertificateV2(
    value: AttributeCertificateV2,
    elGetter: __utils.ASN1Encoder<AttributeCertificateV2>
) {
    if (!_cached_encoder_for_AttributeCertificateV2) {
        _cached_encoder_for_AttributeCertificateV2 = _encode_AttributeCertificate;
    }
    return _cached_encoder_for_AttributeCertificateV2(value, elGetter);
}

// TODO: ObjectAssignment: contentType

export const id_contentType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs9 */ 9,
        3,
    ]
);

// TODO: ObjectAssignment: messageDigest

export const id_messageDigest: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [
        /* iso */ 1,
        /* member-body */ 2,
        /* us */ 840,
        /* rsadsi */ 113549,
        /* pkcs */ 1,
        /* pkcs9 */ 9,
        4,
    ]
);

export type PkiWaError = asn1.ENUMERATED;
export const PkiWaError_unsupportedWrapperVersion: PkiWaError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const unsupportedWrapperVersion: PkiWaError = PkiWaError_unsupportedWrapperVersion; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_unsupportedSignatureAlgorithm: PkiWaError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const unsupportedSignatureAlgorithm: PkiWaError = PkiWaError_unsupportedSignatureAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_incompleteCertPath: PkiWaError = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const incompleteCertPath: PkiWaError = PkiWaError_incompleteCertPath; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_certificationPathFailure: PkiWaError = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const certificationPathFailure: PkiWaError = PkiWaError_certificationPathFailure; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_invalidSignature: PkiWaError = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const invalidSignature: PkiWaError = PkiWaError_invalidSignature; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_missingMandatoryAttributes: PkiWaError = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const missingMandatoryAttributes: PkiWaError = PkiWaError_missingMandatoryAttributes; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_unwantedAttribute: PkiWaError = 6; /* LONG_NAMED_ENUMERATED_VALUE */
export const unwantedAttribute: PkiWaError = PkiWaError_unwantedAttribute; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_unsupportedPduType: PkiWaError = 7; /* LONG_NAMED_ENUMERATED_VALUE */
export const unsupportedPduType: PkiWaError = PkiWaError_unsupportedPduType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_unexpectedPduType: PkiWaError = 8; /* LONG_NAMED_ENUMERATED_VALUE */
export const unexpectedPduType: PkiWaError = PkiWaError_unexpectedPduType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_invalidPduSyntax: PkiWaError = 9; /* LONG_NAMED_ENUMERATED_VALUE */
export const invalidPduSyntax: PkiWaError = PkiWaError_invalidPduSyntax; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_unknownDHpkCetificate: PkiWaError = 10; /* LONG_NAMED_ENUMERATED_VALUE */
export const unknownDHpkCetificate: PkiWaError = PkiWaError_unknownDHpkCetificate; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_invalidKeyingMaterial: PkiWaError = 11; /* LONG_NAMED_ENUMERATED_VALUE */
export const invalidKeyingMaterial: PkiWaError = PkiWaError_invalidKeyingMaterial; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_dhAlgorithmMismatch: PkiWaError = 12; /* LONG_NAMED_ENUMERATED_VALUE */
export const dhAlgorithmMismatch: PkiWaError = PkiWaError_dhAlgorithmMismatch; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_invalideDhPublickey: PkiWaError = 13; /* LONG_NAMED_ENUMERATED_VALUE */
export const invalideDhPublickey: PkiWaError = PkiWaError_invalideDhPublickey; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_unsupportedKeyWrappingAlgorithm: PkiWaError = 14; /* LONG_NAMED_ENUMERATED_VALUE */
export const unsupportedKeyWrappingAlgorithm: PkiWaError = PkiWaError_unsupportedKeyWrappingAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_keyEncAlgorithmParametersMissing: PkiWaError = 15; /* LONG_NAMED_ENUMERATED_VALUE */
export const keyEncAlgorithmParametersMissing: PkiWaError = PkiWaError_keyEncAlgorithmParametersMissing; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_keyEncAlgorithmParametersNotAllowed: PkiWaError = 16; /* LONG_NAMED_ENUMERATED_VALUE */
export const keyEncAlgorithmParametersNotAllowed: PkiWaError = PkiWaError_keyEncAlgorithmParametersNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_invalidParmsForSymEncryptAlgorithms: PkiWaError = 17; /* LONG_NAMED_ENUMERATED_VALUE */
export const invalidParmsForSymEncryptAlgorithms: PkiWaError = PkiWaError_invalidParmsForSymEncryptAlgorithms; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PkiWaError_decryptionFailed: PkiWaError = 18; /* LONG_NAMED_ENUMERATED_VALUE */
export const decryptionFailed: PkiWaError = PkiWaError_decryptionFailed; /* SHORT_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_PkiWaError: __utils.ASN1Decoder<
    PkiWaError
> | null = null;
let _cached_encoder_for_PkiWaError: __utils.ASN1Encoder<
    PkiWaError
> | null = null;
export function _decode_PkiWaError(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PkiWaError) {
        _cached_decoder_for_PkiWaError = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_PkiWaError(el);
}
export function _encode_PkiWaError(
    value: PkiWaError,
    elGetter: __utils.ASN1Encoder<PkiWaError>
) {
    if (!_cached_encoder_for_PkiWaError) {
        _cached_encoder_for_PkiWaError = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_PkiWaError(value, elGetter);
}

/* END_MODULE PkiPmiWrapper */
