
// PkiPmiWrapper
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    attributeCertificateDefinitions,
    authenticationFramework,
    certificateExtensions,
    id_cmsct,
    informationFramework,
    selectedAttributeTypes
} from "./UsefulDefinitions";
export {
    attributeCertificateDefinitions,
    authenticationFramework,
    certificateExtensions,
    id_cmsct,
    informationFramework,
    selectedAttributeTypes
} from "./UsefulDefinitions";

import * as InformationFramework from "./InformationFramework";
import {
    ATTRIBUTE,
    Name,
    Attribute,
    _decode_Name,
    _encode_Name,
    _decode_Attribute,
    _encode_Attribute
} from "./InformationFramework";
export {
    ATTRIBUTE,
    Name,
    Attribute,
    _decode_Name,
    _encode_Name,
    _decode_Attribute,
    _encode_Attribute
} from "./InformationFramework";

import * as AuthenticationFramework from "./AuthenticationFramework";
import {
    ALGORITHM,
    Certificate,
    CertificateList,
    CertificateSerialNumber,
    CertAVL,
    PKCertIdentifier,
    TBSCertAVL,
    Version,
    AvlSerialNumber,
    PkiPath,
    SIGNED,
    AlgorithmIdentifier,
    ENCRYPTED_HASH,
    SIGNATURE,
    _decode_Certificate,
    _encode_Certificate,
    _decode_CertificateList,
    _encode_CertificateList,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_CertAVL,
    _encode_CertAVL,
    _decode_PKCertIdentifier,
    _encode_PKCertIdentifier,
    _decode_TBSCertAVL,
    _encode_TBSCertAVL,
    _decode_Version,
    _encode_Version,
    _decode_AvlSerialNumber,
    _encode_AvlSerialNumber,
    _decode_PkiPath,
    _encode_PkiPath,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
    _get_decoder_for_ENCRYPTED_HASH,
    _get_encoder_for_ENCRYPTED_HASH,
    _decode_SIGNATURE,
    _encode_SIGNATURE
} from "./AuthenticationFramework";
export {
    ALGORITHM,
    Certificate,
    CertificateList,
    CertificateSerialNumber,
    CertAVL,
    PKCertIdentifier,
    TBSCertAVL,
    Version,
    AvlSerialNumber,
    PkiPath,
    SIGNED,
    AlgorithmIdentifier,
    ENCRYPTED_HASH,
    SIGNATURE,
    _decode_Certificate,
    _encode_Certificate,
    _decode_CertificateList,
    _encode_CertificateList,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_CertAVL,
    _encode_CertAVL,
    _decode_PKCertIdentifier,
    _encode_PKCertIdentifier,
    _decode_TBSCertAVL,
    _encode_TBSCertAVL,
    _decode_Version,
    _encode_Version,
    _decode_AvlSerialNumber,
    _encode_AvlSerialNumber,
    _decode_PkiPath,
    _encode_PkiPath,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
    _get_decoder_for_ENCRYPTED_HASH,
    _get_encoder_for_ENCRYPTED_HASH,
    _decode_SIGNATURE,
    _encode_SIGNATURE
} from "./AuthenticationFramework";

import * as CertificateExtensions from "./CertificateExtensions";
import {
    CRLReason,
    SubjectKeyIdentifier,
    _decode_CRLReason,
    _encode_CRLReason,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier
} from "./CertificateExtensions";
export {
    CRLReason,
    SubjectKeyIdentifier,
    _decode_CRLReason,
    _encode_CRLReason,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier
} from "./CertificateExtensions";

import * as AttributeCertificateDefinitions from "./AttributeCertificateDefinitions";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate
} from "./AttributeCertificateDefinitions";
export {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate
} from "./AttributeCertificateDefinitions";

import * as SelectedAttributeTypes from "./SelectedAttributeTypes";
import {
    objectIdentifierMatch,
    octetStringMatch
} from "./SelectedAttributeTypes";
export {
    objectIdentifierMatch,
    octetStringMatch
} from "./SelectedAttributeTypes";


const itu_t: number = 0;
const itu_r: number = 0;
const ccitt: number = 0;
const iso: number = 1;
const joint_iso_itu_t: number = 2;
const joint_iso_ccitt: number = 2;

// TODO: ObjectClassAssignment: WRAPPED-PDU

export type SignedAttributes = Attribute[]; // SetOfType
export const _decode_SignedAttributes = __utils._decodeSetOf<Attribute>(() => _decode_Attribute);
export const _encode_SignedAttributes = __utils._encodeSetOf<Attribute>(() => _encode_Attribute, __utils.BER);


export class WrappedPDUInfo {
    constructor (
        readonly pduType: asn1.OBJECT_IDENTIFIER,
        readonly pduInfo: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_WrappedPDUInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("pduType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("pduInfo", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_WrappedPDUInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_WrappedPDUInfo: __utils.ComponentSpec[] = [
    
];
export const _decode_WrappedPDUInfo = function (el: asn1.ASN1Element): WrappedPDUInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("WrappedPDUInfo contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "pduType";
    sequence[1].name = "pduInfo";
    let pduType!: asn1.OBJECT_IDENTIFIER;
    let pduInfo!: asn1.ASN1Element;
    pduType = __utils._decodeObjectIdentifier(sequence[0]);
    pduInfo = __utils._decodeAny(sequence[1]);
    // TODO: Validate values.
    return new WrappedPDUInfo(
        pduType,
        pduInfo,
        sequence.slice(2),
    );
};
export const _encode_WrappedPDUInfo = function (value: WrappedPDUInfo, elGetter: __utils.ASN1Encoder<WrappedPDUInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeObjectIdentifier(value.pduType, __utils.BER),
            __utils._encodeAny(value.pduInfo, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type UserKeyingMaterial = asn1.OCTET_STRING; // OctetStringType
export const _decode_UserKeyingMaterial = __utils._decodeOctetString;
export const _encode_UserKeyingMaterial = __utils._encodeOctetString;


export class SenderStaticInfo {
    constructor (
        readonly issuer: Name,
        readonly serialNumber: CertificateSerialNumber,
        readonly partyAinfo: UserKeyingMaterial,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_SenderStaticInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("issuer", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("serialNumber", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("partyAinfo", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SenderStaticInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SenderStaticInfo: __utils.ComponentSpec[] = [
    
];
export const _decode_SenderStaticInfo = function (el: asn1.ASN1Element): SenderStaticInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError("SenderStaticInfo contained only " + sequence.length.toString() + " elements.");
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
        sequence.slice(3),
    );
};
export const _encode_SenderStaticInfo = function (value: SenderStaticInfo, elGetter: __utils.ASN1Encoder<SenderStaticInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Name(value.issuer, __utils.BER),
            _encode_CertificateSerialNumber(value.serialNumber, __utils.BER),
            _encode_UserKeyingMaterial(value.partyAinfo, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SenderDhPublicKey {
    constructor (
        readonly algorithm: AlgorithmIdentifier,
        readonly publicKey: asn1.BIT_STRING,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_SenderDhPublicKey: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("publicKey", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SenderDhPublicKey: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SenderDhPublicKey: __utils.ComponentSpec[] = [
    
];
export const _decode_SenderDhPublicKey = function (el: asn1.ASN1Element): SenderDhPublicKey {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SenderDhPublicKey contained only " + sequence.length.toString() + " elements.");
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
        sequence.slice(2),
    );
};
export const _encode_SenderDhPublicKey = function (value: SenderDhPublicKey, elGetter: __utils.ASN1Encoder<SenderDhPublicKey>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_AlgorithmIdentifier(value.algorithm, __utils.BER),
            __utils._encodeBitString(value.publicKey, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type SenderDhInfo =
    { senderStaticInfo: SenderStaticInfo }
    | { senderDhPublicKey: SenderDhPublicKey }
    | asn1.ASN1Element;
export const _decode_SenderDhInfo = __utils._decode_extensible_choice<SenderDhInfo>({
    "CONTEXT 0": [ "senderStaticInfo", __utils._decode_explicit<SenderStaticInfo>(() => _decode_SenderStaticInfo) ],
    "CONTEXT 1": [ "senderDhPublicKey", __utils._decode_explicit<SenderDhPublicKey>(() => _decode_SenderDhPublicKey) ]
});
export const _encode_SenderDhInfo = __utils._encode_choice<SenderDhInfo>({
    "senderStaticInfo": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_SenderStaticInfo, __utils.BER),
    "senderDhPublicKey": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_SenderDhPublicKey, __utils.BER),
}, __utils.BER);


export class KeyAgreement_keyEncryptionAlgorithm {
    constructor (
        readonly algorithm: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyAgreement_keyEncryptionAlgorithm: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("parameters", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_KeyAgreement_keyEncryptionAlgorithm: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_KeyAgreement_keyEncryptionAlgorithm: __utils.ComponentSpec[] = [
    
];
export const _decode_KeyAgreement_keyEncryptionAlgorithm = function (el: asn1.ASN1Element): KeyAgreement_keyEncryptionAlgorithm {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("KeyAgreement-keyEncryptionAlgorithm contained only " + sequence.length.toString() + " elements.");
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
        sequence.slice(2),
    );
};
export const _encode_KeyAgreement_keyEncryptionAlgorithm = function (value: KeyAgreement_keyEncryptionAlgorithm, elGetter: __utils.ASN1Encoder<KeyAgreement_keyEncryptionAlgorithm>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeObjectIdentifier(value.algorithm, __utils.BER),
            __utils._encodeAny(value.parameters, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class KeyAgreement {
    constructor (
        readonly senderDhInfo: SenderDhInfo,
        readonly keyEncryptionAlgorithm: KeyAgreement_keyEncryptionAlgorithm,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_KeyAgreement: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("senderDhInfo", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("keyEncryptionAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_KeyAgreement: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_KeyAgreement: __utils.ComponentSpec[] = [
    
];
export const _decode_KeyAgreement = function (el: asn1.ASN1Element): KeyAgreement {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("KeyAgreement contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "senderDhInfo";
    sequence[1].name = "keyEncryptionAlgorithm";
    let senderDhInfo!: SenderDhInfo;
    let keyEncryptionAlgorithm!: KeyAgreement_keyEncryptionAlgorithm;
    senderDhInfo = __utils._decode_explicit<SenderDhInfo>(() => _decode_SenderDhInfo)(sequence[0]);
    keyEncryptionAlgorithm = _decode_KeyAgreement_keyEncryptionAlgorithm(sequence[1]);
    // TODO: Validate values.
    return new KeyAgreement(
        senderDhInfo,
        keyEncryptionAlgorithm,
        sequence.slice(2),
    );
};
export const _encode_KeyAgreement = function (value: KeyAgreement, elGetter: __utils.ASN1Encoder<KeyAgreement>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_SenderDhInfo, __utils.BER)(value.senderDhInfo, __utils.BER),
            _encode_KeyAgreement_keyEncryptionAlgorithm(value.keyEncryptionAlgorithm, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type EncryptedKey = asn1.OCTET_STRING; // OctetStringType
export const _decode_EncryptedKey = __utils._decodeOctetString;
export const _encode_EncryptedKey = __utils._encodeOctetString;


export class EncryptedPduInfo_pduEncryptionAlgorithm {
    constructor (
        readonly algorithm: asn1.OBJECT_IDENTIFIER,
        readonly parameter: asn1.ASN1Element
    ) {}
}
export const _root_component_type_list_1_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("parameter", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_EncryptedPduInfo_pduEncryptionAlgorithm: __utils.ComponentSpec[] = [
    
];
export const _decode_EncryptedPduInfo_pduEncryptionAlgorithm = function (el: asn1.ASN1Element): EncryptedPduInfo_pduEncryptionAlgorithm {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("EncryptedPduInfo-pduEncryptionAlgorithm contained only " + sequence.length.toString() + " elements.");
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
        parameter,

    );
};
export const _encode_EncryptedPduInfo_pduEncryptionAlgorithm = function (value: EncryptedPduInfo_pduEncryptionAlgorithm, elGetter: __utils.ASN1Encoder<EncryptedPduInfo_pduEncryptionAlgorithm>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeObjectIdentifier(value.algorithm, __utils.BER),
            __utils._encodeAny(value.parameter, __utils.BER)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type EncryptedPdu = asn1.OCTET_STRING; // OctetStringType
export const _decode_EncryptedPdu = __utils._decodeOctetString;
export const _encode_EncryptedPdu = __utils._encodeOctetString;


export class EncryptedPduInfo {
    constructor (
        readonly pduType: asn1.OBJECT_IDENTIFIER,
        readonly encryptedKey: EncryptedKey | undefined,
        readonly pduEncryptionAlgorithm: EncryptedPduInfo_pduEncryptionAlgorithm | undefined,
        readonly encryptedPdu: EncryptedPdu,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_EncryptedPduInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("pduType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("encryptedKey", true, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("pduEncryptionAlgorithm", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("encryptedPdu", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_EncryptedPduInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_EncryptedPduInfo: __utils.ComponentSpec[] = [
    
];
export const _decode_EncryptedPduInfo = function (el: asn1.ASN1Element): EncryptedPduInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let pduType!: asn1.OBJECT_IDENTIFIER;
    let encryptedKey: asn1.OPTIONAL<EncryptedKey>;
    let pduEncryptionAlgorithm: asn1.OPTIONAL<EncryptedPduInfo_pduEncryptionAlgorithm>;
    let encryptedPdu!: EncryptedPdu;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "pduType": (_el: asn1.ASN1Element): void => { pduType = __utils._decodeObjectIdentifier(_el); },
        "encryptedKey": (_el: asn1.ASN1Element): void => { encryptedKey = _decode_EncryptedKey(_el); },
        "pduEncryptionAlgorithm": (_el: asn1.ASN1Element): void => { pduEncryptionAlgorithm = _decode_EncryptedPduInfo_pduEncryptionAlgorithm(_el); },
        "encryptedPdu": (_el: asn1.ASN1Element): void => { encryptedPdu = __utils._decode_explicit<EncryptedPdu>(() => _decode_EncryptedPdu)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EncryptedPduInfo,
        _extension_additions_list_spec_for_EncryptedPduInfo,
        _root_component_type_list_2_spec_for_EncryptedPduInfo,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EncryptedPduInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        pduType,
        encryptedKey,
        pduEncryptionAlgorithm,
        encryptedPdu,
        _unrecognizedExtensionsList
    );
};
export const _encode_EncryptedPduInfo = function (value: EncryptedPduInfo, elGetter: __utils.ASN1Encoder<EncryptedPduInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeObjectIdentifier(value.pduType, __utils.BER),
            (value.encryptedKey ? _encode_EncryptedKey(value.encryptedKey, __utils.BER) : undefined),
            (value.pduEncryptionAlgorithm ? _encode_EncryptedPduInfo_pduEncryptionAlgorithm(value.pduEncryptionAlgorithm, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_EncryptedPdu, __utils.BER)(value.encryptedPdu, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class EncryptedInfo {
    constructor (
        readonly keyAgreement: KeyAgreement,
        readonly encryptedPduInfo: EncryptedPduInfo,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_EncryptedInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("keyAgreement", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("encryptedPduInfo", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_EncryptedInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_EncryptedInfo: __utils.ComponentSpec[] = [
    
];
export const _decode_EncryptedInfo = function (el: asn1.ASN1Element): EncryptedInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("EncryptedInfo contained only " + sequence.length.toString() + " elements.");
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
        sequence.slice(2),
    );
};
export const _encode_EncryptedInfo = function (value: EncryptedInfo, elGetter: __utils.ASN1Encoder<EncryptedInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_KeyAgreement(value.keyAgreement, __utils.BER),
            _encode_EncryptedPduInfo(value.encryptedPduInfo, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type TBSPDU_wrapper_conf =
    { clear: WrappedPDUInfo }
    | { protected_: EncryptedInfo }
    | asn1.ASN1Element;
export const _decode_TBSPDU_wrapper_conf = __utils._decode_extensible_choice<TBSPDU_wrapper_conf>({
    "CONTEXT 2": [ "clear", __utils._decode_explicit<WrappedPDUInfo>(() => _decode_WrappedPDUInfo) ],
    "CONTEXT 3": [ "protected_", __utils._decode_explicit<EncryptedInfo>(() => _decode_EncryptedInfo) ]
});
export const _encode_TBSPDU_wrapper_conf = __utils._encode_choice<TBSPDU_wrapper_conf>({
    "clear": __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_WrappedPDUInfo, __utils.BER),
    "protected_": __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_EncryptedInfo, __utils.BER),
}, __utils.BER);


export class TBSPDU_wrapper {
    constructor (
        readonly version: Version | undefined,
        readonly signatureAlgorithm: AlgorithmIdentifier,
        readonly certPath: PkiPath,
        readonly signedAttrs: SignedAttributes | undefined,
        readonly conf: TBSPDU_wrapper_conf,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_TBSPDU_wrapper: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("signatureAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("certPath", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("signedAttrs", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("conf", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_TBSPDU_wrapper: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_TBSPDU_wrapper: __utils.ComponentSpec[] = [
    
];
export const _decode_TBSPDU_wrapper = function (el: asn1.ASN1Element): TBSPDU_wrapper {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<Version> = v1;
    let signatureAlgorithm!: AlgorithmIdentifier;
    let certPath!: PkiPath;
    let signedAttrs: asn1.OPTIONAL<SignedAttributes>;
    let conf!: TBSPDU_wrapper_conf;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = _decode_Version(_el); },
        "signatureAlgorithm": (_el: asn1.ASN1Element): void => { signatureAlgorithm = _decode_AlgorithmIdentifier(_el); },
        "certPath": (_el: asn1.ASN1Element): void => { certPath = __utils._decode_explicit<PkiPath>(() => _decode_PkiPath)(_el); },
        "signedAttrs": (_el: asn1.ASN1Element): void => { signedAttrs = __utils._decode_explicit<SignedAttributes>(() => _decode_SignedAttributes)(_el); },
        "conf": (_el: asn1.ASN1Element): void => { conf = _decode_TBSPDU_wrapper_conf(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TBSPDU_wrapper,
        _extension_additions_list_spec_for_TBSPDU_wrapper,
        _root_component_type_list_2_spec_for_TBSPDU_wrapper,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TBSPDU_wrapper( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        signatureAlgorithm,
        certPath,
        signedAttrs,
        conf,
        _unrecognizedExtensionsList
    );
};
export const _encode_TBSPDU_wrapper = function (value: TBSPDU_wrapper, elGetter: __utils.ASN1Encoder<TBSPDU_wrapper>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            ((value.version !== undefined && value.version !== v1) /* TODO: Review this condition. */ ? _encode_Version(value.version, __utils.BER) : undefined),
            _encode_AlgorithmIdentifier(value.signatureAlgorithm, __utils.BER),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_PkiPath, __utils.BER)(value.certPath, __utils.BER),
            (value.signedAttrs ? __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_SignedAttributes, __utils.BER)(value.signedAttrs, __utils.BER) : undefined),
            _encode_TBSPDU_wrapper_conf(value.conf, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type PDU_wrapper = SIGNED<TBSPDU_wrapper>; // DefinedType
export const _decode_PDU_wrapper = _get_decoder_for_SIGNED<TBSPDU_wrapper>(_decode_TBSPDU_wrapper);
export const _encode_PDU_wrapper = _get_encoder_for_SIGNED<TBSPDU_wrapper>(_encode_TBSPDU_wrapper);


// TODO: ObjectSetAssignment: SupportedSignatureAlgorithms

// TODO: ObjectSetAssignment: SupportedSignedAttributes

// TODO: ObjectSetAssignment: SupportedPduSet

// TODO: ObjectSetAssignment: SupportedKeyEncryptionAlgorithm

// TODO: ObjectSetAssignment: SupportedDHPublicKeyAlgorithms

// TODO: ObjectSetAssignment: SymmetricEncryptionAlgorithms

// TODO: ObjectSetAssignment: SupportedAttributes

export type AttributeCertificateV2 = AttributeCertificate; // DefinedType
export const _decode_AttributeCertificateV2 = _decode_AttributeCertificate;
export const _encode_AttributeCertificateV2 = _encode_AttributeCertificate;


// TODO: ObjectAssignment: contentType

export const id_contentType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    3,
]);

// TODO: ObjectAssignment: messageDigest

export const id_messageDigest: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs9 */ 9,
    4,
]);

export type PkiWaError = asn1.ENUMERATED
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
export const _decode_PkiWaError = __utils._decodeEnumerated;
export const _encode_PkiWaError = __utils._encodeEnumerated;


