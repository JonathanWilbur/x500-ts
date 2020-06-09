
/*
    BEGIN_MODULE AuthenticationFramework
    OID: joint-iso-itu-t.ds.module.authenticationFramework.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
} from "./__utils";
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    basicAccessControl,
    certificateExtensions,
    id_asx,
    id_at,
    id_avr,
    id_ldx,
    id_lsx,
    id_mr,
    id_nf,
    id_oa,
    id_oc,
    id_sc,
    informationFramework,
    selectedAttributeTypes
} from "./UsefulDefinitions";
export {
    basicAccessControl,
    certificateExtensions,
    id_asx,
    id_at,
    id_avr,
    id_ldx,
    id_lsx,
    id_mr,
    id_nf,
    id_oa,
    id_oc,
    id_sc,
    informationFramework,
    selectedAttributeTypes
} from "./UsefulDefinitions";

import * as InformationFramework from "./InformationFramework";
import {
    ATTRIBUTE,
    DistinguishedName,
    MATCHING_RULE,
    Name,
    NAME_FORM,
    OBJECT_CLASS,
    RelativeDistinguishedName,
    SYNTAX_NAME,
    top,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
    _decode_Name,
    _encode_Name,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName
} from "./InformationFramework";
export {
    ATTRIBUTE,
    DistinguishedName,
    MATCHING_RULE,
    Name,
    NAME_FORM,
    OBJECT_CLASS,
    RelativeDistinguishedName,
    SYNTAX_NAME,
    top,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
    _decode_Name,
    _encode_Name,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName
} from "./InformationFramework";

import * as SelectedAttributeTypes from "./SelectedAttributeTypes";
import {
    bitStringMatch,
    boolean_,
    booleanMatch,
    caseExactMatch,
    commonName,
    directoryString,
    distinguishedNameMatch,
    generalizedTime,
    generalizedTimeMatch,
    generalizedTimeOrderingMatch,
    integer,
    integerMatch,
    integerOrderingMatch,
    objectIdentifierMatch,
    octetString,
    octetStringMatch,
    UnboundedDirectoryString,
    UniqueIdentifier,
    uri,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier
} from "./SelectedAttributeTypes";
export {
    bitStringMatch,
    boolean_,
    booleanMatch,
    caseExactMatch,
    commonName,
    directoryString,
    distinguishedNameMatch,
    generalizedTime,
    generalizedTimeMatch,
    generalizedTimeOrderingMatch,
    integer,
    integerMatch,
    integerOrderingMatch,
    objectIdentifierMatch,
    octetString,
    octetStringMatch,
    UnboundedDirectoryString,
    UniqueIdentifier,
    uri,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier
} from "./SelectedAttributeTypes";

import * as CertificateExtensions from "./CertificateExtensions";
import {
    algorithmIdentifierMatch,
    certificateExactMatch,
    certificateListExactMatch,
    certificatePairExactMatch,
    CertificatePoliciesSyntax,
    CertPolicyId,
    GeneralNames,
    KeyUsage,
    CertificateAssertion,
    CertificateExactAssertion,
    CertificateListAssertion,
    CertificateListExactAssertion,
    CertificatePairAssertion,
    CertificatePairExactAssertion,
    _decode_CertificatePoliciesSyntax,
    _encode_CertificatePoliciesSyntax,
    _decode_CertPolicyId,
    _encode_CertPolicyId,
    _decode_GeneralNames,
    _encode_GeneralNames,
    _decode_KeyUsage,
    _encode_KeyUsage,
    _decode_CertificateAssertion,
    _encode_CertificateAssertion,
    _decode_CertificateExactAssertion,
    _encode_CertificateExactAssertion,
    _decode_CertificateListAssertion,
    _encode_CertificateListAssertion,
    _decode_CertificateListExactAssertion,
    _encode_CertificateListExactAssertion,
    _decode_CertificatePairAssertion,
    _encode_CertificatePairAssertion,
    _decode_CertificatePairExactAssertion,
    _encode_CertificatePairExactAssertion
} from "./CertificateExtensions";
export {
    algorithmIdentifierMatch,
    certificateExactMatch,
    certificateListExactMatch,
    certificatePairExactMatch,
    CertificatePoliciesSyntax,
    CertPolicyId,
    GeneralNames,
    KeyUsage,
    CertificateAssertion,
    CertificateExactAssertion,
    CertificateListAssertion,
    CertificateListExactAssertion,
    CertificatePairAssertion,
    CertificatePairExactAssertion,
    _decode_CertificatePoliciesSyntax,
    _encode_CertificatePoliciesSyntax,
    _decode_CertPolicyId,
    _encode_CertPolicyId,
    _decode_GeneralNames,
    _encode_GeneralNames,
    _decode_KeyUsage,
    _encode_KeyUsage,
    _decode_CertificateAssertion,
    _encode_CertificateAssertion,
    _decode_CertificateExactAssertion,
    _encode_CertificateExactAssertion,
    _decode_CertificateListAssertion,
    _encode_CertificateListAssertion,
    _decode_CertificateListExactAssertion,
    _encode_CertificateListExactAssertion,
    _decode_CertificatePairAssertion,
    _encode_CertificatePairAssertion,
    _decode_CertificatePairExactAssertion,
    _encode_CertificatePairExactAssertion
} from "./CertificateExtensions";


export type ENCRYPTED<ToBeEnciphered> = asn1.BIT_STRING;
export const _get_decoder_for_ENCRYPTED = function <ToBeEnciphered>(_decode_ToBeEnciphered: __utils.ASN1Decoder<ToBeEnciphered>) {
return __utils._decodeBitString
}
export const _get_encoder_for_ENCRYPTED = function <ToBeEnciphered>(_encode_ToBeEnciphered: __utils.ASN1Encoder<ToBeEnciphered>) {
return __utils._encodeBitString
}


export type ENCRYPTED_HASH<ToBeSigned> = asn1.BIT_STRING;
export const _get_decoder_for_ENCRYPTED_HASH = function <ToBeSigned>(_decode_ToBeSigned: __utils.ASN1Decoder<ToBeSigned>) {
return __utils._decodeBitString
}
export const _get_encoder_for_ENCRYPTED_HASH = function <ToBeSigned>(_encode_ToBeSigned: __utils.ASN1Encoder<ToBeSigned>) {
return __utils._encodeBitString
}


// TODO: ObjectSetAssignment: SupportedAlgorithms

export type SupportedCurves = asn1.OBJECT_IDENTIFIER; /* VALUE_SET_ASSIGNMENT */

export const dummyCurv: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    2,
    5,
    5,
]);

export const der: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* asn1 */ 1,
    /* ber-derived */ 2,
    /* distinguished-encoding */ 1,
], joint_iso_itu_t);

// TODO: ObjectSetAssignment: ExtensionSet

// TODO: ObjectClassAssignment: ALGORITHM

export class AlgorithmIdentifier {
    constructor (
        readonly algorithm: asn1.OBJECT_IDENTIFIER,
        readonly parameters: asn1.ASN1Element | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("parameters", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_AlgorithmIdentifier: __utils.ComponentSpec[] = [

];
export const _decode_AlgorithmIdentifier = function (el: asn1.ASN1Element): AlgorithmIdentifier {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let algorithm!: asn1.OBJECT_IDENTIFIER;
    let parameters: asn1.OPTIONAL<asn1.ASN1Element>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "algorithm": (_el: asn1.ASN1Element): void => { algorithm = __utils._decodeObjectIdentifier(_el); },
        "parameters": (_el: asn1.ASN1Element): void => { parameters = __utils._decodeAny(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AlgorithmIdentifier,
        _extension_additions_list_spec_for_AlgorithmIdentifier,
        _root_component_type_list_2_spec_for_AlgorithmIdentifier,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AlgorithmIdentifier( /* SEQUENCE_CONSTRUCTOR_CALL */
        algorithm,
        parameters,
        _unrecognizedExtensionsList
    );
};
export const _encode_AlgorithmIdentifier = function (value: AlgorithmIdentifier, elGetter: __utils.ASN1Encoder<AlgorithmIdentifier>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeObjectIdentifier(value.algorithm, __utils.BER),
            (value.parameters ? __utils._encodeAny(value.parameters, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SIGNATURE {
    constructor (
        readonly algorithmIdentifier: AlgorithmIdentifier,
        readonly signature: asn1.BIT_STRING,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_SIGNATURE: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algorithmIdentifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("signature", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SIGNATURE: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_SIGNATURE: __utils.ComponentSpec[] = [

];
export const _decode_SIGNATURE = function (el: asn1.ASN1Element): SIGNATURE {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SIGNATURE contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "algorithmIdentifier";
    sequence[1].name = "signature";
    let algorithmIdentifier!: AlgorithmIdentifier;
    let signature!: asn1.BIT_STRING;
    algorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
    signature = __utils._decodeBitString(sequence[1]);
    // TODO: Validate values.
    return new SIGNATURE(
        algorithmIdentifier,
        signature,
        sequence.slice(2),
    );
};
export const _encode_SIGNATURE = function (value: SIGNATURE, elGetter: __utils.ASN1Encoder<SIGNATURE>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_AlgorithmIdentifier(value.algorithmIdentifier, __utils.BER),
            __utils._encodeBitString(value.signature, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SIGNED<ToBeSigned> {
    constructor (
        readonly toBeSigned: ToBeSigned,
        readonly algorithmIdentifier: AlgorithmIdentifier /* REPLICATED_COMPONENT */,
        readonly signature: asn1.BIT_STRING /* REPLICATED_COMPONENT */,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_SIGNED: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("toBeSigned", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("algorithmIdentifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("signature", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SIGNED: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_SIGNED: __utils.ComponentSpec[] = [

];
export const _get_decoder_for_SIGNED = function <ToBeSigned>(_decode_ToBeSigned: __utils.ASN1Decoder<ToBeSigned>) {
return function (el: asn1.ASN1Element): SIGNED<ToBeSigned> {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let toBeSigned!: ToBeSigned;
    let algorithmIdentifier!: AlgorithmIdentifier;
    let signature!: asn1.BIT_STRING;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "toBeSigned": (_el: asn1.ASN1Element): void => { toBeSigned = _decode_ToBeSigned(_el); },
        "algorithmIdentifier": (_el: asn1.ASN1Element): void => { algorithmIdentifier = _decode_AlgorithmIdentifier(_el); },
        "signature": (_el: asn1.ASN1Element): void => { signature = __utils._decodeBitString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SIGNED,
        _extension_additions_list_spec_for_SIGNED,
        _root_component_type_list_2_spec_for_SIGNED,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SIGNED( /* SEQUENCE_CONSTRUCTOR_CALL */
        toBeSigned,
        algorithmIdentifier,
        signature,
        _unrecognizedExtensionsList
    );
}
}
export const _get_encoder_for_SIGNED = function <ToBeSigned>(_encode_ToBeSigned: __utils.ASN1Encoder<ToBeSigned>) {
return function (value: SIGNED<ToBeSigned>, elGetter: __utils.ASN1Encoder<SIGNED<ToBeSigned>>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_ToBeSigned(value.toBeSigned, __utils.BER),
            _encode_AlgorithmIdentifier(value.algorithmIdentifier, __utils.BER),
            __utils._encodeBitString(value.signature, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}
}


export type Version = asn1.INTEGER;
export const Version_v1: Version = 0; /* LONG_NAMED_INTEGER_VALUE */
export const v1: Version = Version_v1; /* SHORT_NAMED_INTEGER_VALUE */
export const Version_v2: Version = 1; /* LONG_NAMED_INTEGER_VALUE */
export const v2: Version = Version_v2; /* SHORT_NAMED_INTEGER_VALUE */
export const Version_v3: Version = 2; /* LONG_NAMED_INTEGER_VALUE */
export const v3: Version = Version_v3; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_Version = __utils._decodeInteger;
export const _encode_Version = __utils._encodeInteger;


export type CertificateSerialNumber = asn1.INTEGER;
export const _decode_CertificateSerialNumber = __utils._decodeInteger;
export const _encode_CertificateSerialNumber = __utils._encodeInteger;


export type Time =
    { utcTime: asn1.UTCTime }
    | { generalizedTime: asn1.GeneralizedTime };
export const _decode_Time = __utils._decode_inextensible_choice<Time>({
    "UNIVERSAL 23": [ "utcTime", __utils._decodeUTCTime ],
    "UNIVERSAL 24": [ "generalizedTime", __utils._decodeGeneralizedTime ]
});
export const _encode_Time = __utils._encode_choice<Time>({
    "utcTime": __utils._encodeUTCTime,
    "generalizedTime": __utils._encodeGeneralizedTime,
}, __utils.BER);


export class Validity {
    constructor (
        readonly notBefore: Time,
        readonly notAfter: Time,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_Validity: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("notBefore", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("notAfter", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Validity: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_Validity: __utils.ComponentSpec[] = [

];
export const _decode_Validity = function (el: asn1.ASN1Element): Validity {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("Validity contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "notBefore";
    sequence[1].name = "notAfter";
    let notBefore!: Time;
    let notAfter!: Time;
    notBefore = _decode_Time(sequence[0]);
    notAfter = _decode_Time(sequence[1]);
    // TODO: Validate values.
    return new Validity(
        notBefore,
        notAfter,
        sequence.slice(2),
    );
};
export const _encode_Validity = function (value: Validity, elGetter: __utils.ASN1Encoder<Validity>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Time(value.notBefore, __utils.BER),
            _encode_Time(value.notAfter, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type PublicKey = asn1.BIT_STRING;
export const _decode_PublicKey = __utils._decodeBitString;
export const _encode_PublicKey = __utils._encodeBitString;


export class SubjectPublicKeyInfo {
    constructor (
        readonly algorithm: AlgorithmIdentifier,
        readonly subjectPublicKey: PublicKey,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("subjectPublicKey", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_SubjectPublicKeyInfo: __utils.ComponentSpec[] = [

];
export const _decode_SubjectPublicKeyInfo = function (el: asn1.ASN1Element): SubjectPublicKeyInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SubjectPublicKeyInfo contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "algorithm";
    sequence[1].name = "subjectPublicKey";
    let algorithm!: AlgorithmIdentifier;
    let subjectPublicKey!: PublicKey;
    algorithm = _decode_AlgorithmIdentifier(sequence[0]);
    subjectPublicKey = _decode_PublicKey(sequence[1]);
    // TODO: Validate values.
    return new SubjectPublicKeyInfo(
        algorithm,
        subjectPublicKey,
        sequence.slice(2),
    );
};
export const _encode_SubjectPublicKeyInfo = function (value: SubjectPublicKeyInfo, elGetter: __utils.ASN1Encoder<SubjectPublicKeyInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_AlgorithmIdentifier(value.algorithm, __utils.BER),
            _encode_PublicKey(value.subjectPublicKey, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class Extension {
    constructor (
        readonly extnId: asn1.OBJECT_IDENTIFIER,
        readonly critical: asn1.BOOLEAN | undefined,
        readonly extnValue: asn1.OCTET_STRING,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_Extension: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("extnId", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("critical", true, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined),
    new __utils.ComponentSpec("extnValue", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Extension: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_Extension: __utils.ComponentSpec[] = [

];
export const _decode_Extension = function (el: asn1.ASN1Element): Extension {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let extnId!: asn1.OBJECT_IDENTIFIER;
    let critical: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let extnValue!: asn1.OCTET_STRING;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "extnId": (_el: asn1.ASN1Element): void => { extnId = __utils._decodeObjectIdentifier(_el); },
        "critical": (_el: asn1.ASN1Element): void => { critical = __utils._decodeBoolean(_el); },
        "extnValue": (_el: asn1.ASN1Element): void => { extnValue = __utils._decodeOctetString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Extension,
        _extension_additions_list_spec_for_Extension,
        _root_component_type_list_2_spec_for_Extension,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Extension( /* SEQUENCE_CONSTRUCTOR_CALL */
        extnId,
        critical,
        extnValue,
        _unrecognizedExtensionsList
    );
};
export const _encode_Extension = function (value: Extension, elGetter: __utils.ASN1Encoder<Extension>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeObjectIdentifier(value.extnId, __utils.BER),
            ((value.critical !== undefined && value.critical !== false) /* TODO: Review this condition. */ ? __utils._encodeBoolean(value.critical, __utils.BER) : undefined),
            __utils._encodeOctetString(value.extnValue, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type Extensions = Extension[]; // SequenceOfType
export const _decode_Extensions = __utils._decodeSequenceOf<Extension>(() => _decode_Extension);
export const _encode_Extensions = __utils._encodeSequenceOf<Extension>(() => _encode_Extension, __utils.BER);


export class TBSCertificate {
    constructor (
        readonly version: Version | undefined,
        readonly serialNumber: CertificateSerialNumber,
        readonly signature: AlgorithmIdentifier,
        readonly issuer: Name,
        readonly validity: Validity,
        readonly subject: Name,
        readonly subjectPublicKeyInfo: SubjectPublicKeyInfo,
        readonly issuerUniqueIdentifier: UniqueIdentifier | undefined,
        readonly subjectUniqueIdentifier: UniqueIdentifier | undefined,
        readonly extensions: Extensions | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_TBSCertificate: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("serialNumber", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("signature", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("issuer", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("validity", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("subject", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("subjectPublicKeyInfo", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("issuerUniqueIdentifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_TBSCertificate: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_TBSCertificate: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("subjectUniqueIdentifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), 0, 2),
    new __utils.ComponentSpec("extensions", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), 1, 3)
];
export const _decode_TBSCertificate = function (el: asn1.ASN1Element): TBSCertificate {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<Version> = v1;
    let serialNumber!: CertificateSerialNumber;
    let signature!: AlgorithmIdentifier;
    let issuer!: Name;
    let validity!: Validity;
    let subject!: Name;
    let subjectPublicKeyInfo!: SubjectPublicKeyInfo;
    let issuerUniqueIdentifier: asn1.OPTIONAL<UniqueIdentifier>;
    let subjectUniqueIdentifier: asn1.OPTIONAL<UniqueIdentifier>; // Only present in version 2 and higher.
    let extensions: asn1.OPTIONAL<Extensions>; // Only present in version 3 and higher.
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = __utils._decode_explicit<Version>(() => _decode_Version)(_el); },
        "serialNumber": (_el: asn1.ASN1Element): void => { serialNumber = _decode_CertificateSerialNumber(_el); },
        "signature": (_el: asn1.ASN1Element): void => { signature = _decode_AlgorithmIdentifier(_el); },
        "issuer": (_el: asn1.ASN1Element): void => { issuer = _decode_Name(_el); },
        "validity": (_el: asn1.ASN1Element): void => { validity = _decode_Validity(_el); },
        "subject": (_el: asn1.ASN1Element): void => { subject = _decode_Name(_el); },
        "subjectPublicKeyInfo": (_el: asn1.ASN1Element): void => { subjectPublicKeyInfo = _decode_SubjectPublicKeyInfo(_el); },
        "issuerUniqueIdentifier": (_el: asn1.ASN1Element): void => { issuerUniqueIdentifier = __utils._decode_explicit<UniqueIdentifier>(() => _decode_UniqueIdentifier)(_el); },
        "subjectUniqueIdentifier": (_el: asn1.ASN1Element): void => { subjectUniqueIdentifier = __utils._decode_explicit<UniqueIdentifier>(() => _decode_UniqueIdentifier)(_el); },
        "extensions": (_el: asn1.ASN1Element): void => { extensions = __utils._decode_explicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TBSCertificate,
        _extension_additions_list_spec_for_TBSCertificate,
        _root_component_type_list_2_spec_for_TBSCertificate,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TBSCertificate( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        serialNumber,
        signature,
        issuer,
        validity,
        subject,
        subjectPublicKeyInfo,
        issuerUniqueIdentifier,
        subjectUniqueIdentifier,
        extensions,
        _unrecognizedExtensionsList
    );
};
export const _encode_TBSCertificate = function (value: TBSCertificate, elGetter: __utils.ASN1Encoder<TBSCertificate>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            ((value.version !== undefined && value.version !== v1) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Version, __utils.BER)(value.version, __utils.BER) : undefined),
            _encode_CertificateSerialNumber(value.serialNumber, __utils.BER),
            _encode_AlgorithmIdentifier(value.signature, __utils.BER),
            _encode_Name(value.issuer, __utils.BER),
            _encode_Validity(value.validity, __utils.BER),
            _encode_Name(value.subject, __utils.BER),
            _encode_SubjectPublicKeyInfo(value.subjectPublicKeyInfo, __utils.BER),
            (value.issuerUniqueIdentifier ? __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_UniqueIdentifier, __utils.BER)(value.issuerUniqueIdentifier, __utils.BER) : undefined)
        ],
        [
            (value.subjectUniqueIdentifier ? __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_UniqueIdentifier, __utils.BER)(value.subjectUniqueIdentifier, __utils.BER) : undefined),
            (value.extensions ? __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_Extensions, __utils.BER)(value.extensions, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type Certificate = SIGNED<TBSCertificate>; // DefinedType
export const _decode_Certificate = _get_decoder_for_SIGNED<TBSCertificate>(_decode_TBSCertificate);
export const _encode_Certificate = _get_encoder_for_SIGNED<TBSCertificate>(_encode_TBSCertificate);


export type CrossCertificates = Certificate[]; // SetOfType
export const _decode_CrossCertificates = __utils._decodeSetOf<Certificate>(() => _decode_Certificate);
export const _encode_CrossCertificates = __utils._encodeSetOf<Certificate>(() => _encode_Certificate, __utils.BER);


export type ForwardCertificationPath = CrossCertificates[]; // SequenceOfType
export const _decode_ForwardCertificationPath = __utils._decodeSequenceOf<CrossCertificates>(() => _decode_CrossCertificates);
export const _encode_ForwardCertificationPath = __utils._encodeSequenceOf<CrossCertificates>(() => _encode_CrossCertificates, __utils.BER);


export class Certificates {
    constructor (
        readonly userCertificate: Certificate,
        readonly certificationPath: ForwardCertificationPath | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_Certificates: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("userCertificate", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("certificationPath", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Certificates: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_Certificates: __utils.ComponentSpec[] = [

];
export const _decode_Certificates = function (el: asn1.ASN1Element): Certificates {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let userCertificate!: Certificate;
    let certificationPath: asn1.OPTIONAL<ForwardCertificationPath>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "userCertificate": (_el: asn1.ASN1Element): void => { userCertificate = _decode_Certificate(_el); },
        "certificationPath": (_el: asn1.ASN1Element): void => { certificationPath = _decode_ForwardCertificationPath(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Certificates,
        _extension_additions_list_spec_for_Certificates,
        _root_component_type_list_2_spec_for_Certificates,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Certificates( /* SEQUENCE_CONSTRUCTOR_CALL */
        userCertificate,
        certificationPath,
        _unrecognizedExtensionsList
    );
};
export const _encode_Certificates = function (value: Certificates, elGetter: __utils.ASN1Encoder<Certificates>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Certificate(value.userCertificate, __utils.BER),
            (value.certificationPath ? _encode_ForwardCertificationPath(value.certificationPath, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class CertificatePair {
    constructor (
        readonly issuedToThisCA: Certificate | undefined,
        readonly issuedByThisCA: Certificate | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_CertificatePair: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("issuedToThisCA", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("issuedByThisCA", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CertificatePair: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_CertificatePair: __utils.ComponentSpec[] = [

];
export const _decode_CertificatePair = function (el: asn1.ASN1Element): CertificatePair {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let issuedToThisCA: asn1.OPTIONAL<Certificate>;
    let issuedByThisCA: asn1.OPTIONAL<Certificate>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "issuedToThisCA": (_el: asn1.ASN1Element): void => { issuedToThisCA = __utils._decode_explicit<Certificate>(() => _decode_Certificate)(_el); },
        "issuedByThisCA": (_el: asn1.ASN1Element): void => { issuedByThisCA = __utils._decode_explicit<Certificate>(() => _decode_Certificate)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertificatePair,
        _extension_additions_list_spec_for_CertificatePair,
        _root_component_type_list_2_spec_for_CertificatePair,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CertificatePair( /* SEQUENCE_CONSTRUCTOR_CALL */
        issuedToThisCA,
        issuedByThisCA,
        _unrecognizedExtensionsList
    );
};
export const _encode_CertificatePair = function (value: CertificatePair, elGetter: __utils.ASN1Encoder<CertificatePair>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.issuedToThisCA ? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Certificate, __utils.BER)(value.issuedToThisCA, __utils.BER) : undefined),
            (value.issuedByThisCA ? __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Certificate, __utils.BER)(value.issuedByThisCA, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class CertificationPath {
    constructor (
        readonly userCertificate: Certificate,
        readonly theCACertificates: CertificatePair[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_CertificationPath: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("userCertificate", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("theCACertificates", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CertificationPath: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_CertificationPath: __utils.ComponentSpec[] = [

];
export const _decode_CertificationPath = function (el: asn1.ASN1Element): CertificationPath {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let userCertificate!: Certificate;
    let theCACertificates: asn1.OPTIONAL<CertificatePair[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "userCertificate": (_el: asn1.ASN1Element): void => { userCertificate = _decode_Certificate(_el); },
        "theCACertificates": (_el: asn1.ASN1Element): void => { theCACertificates = __utils._decodeSequenceOf<CertificatePair>(() => _decode_CertificatePair)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertificationPath,
        _extension_additions_list_spec_for_CertificationPath,
        _root_component_type_list_2_spec_for_CertificationPath,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CertificationPath( /* SEQUENCE_CONSTRUCTOR_CALL */
        userCertificate,
        theCACertificates,
        _unrecognizedExtensionsList
    );
};
export const _encode_CertificationPath = function (value: CertificationPath, elGetter: __utils.ASN1Encoder<CertificationPath>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Certificate(value.userCertificate, __utils.BER),
            (value.theCACertificates ? __utils._encodeSequenceOf<CertificatePair>(() => _encode_CertificatePair, __utils.BER)(value.theCACertificates, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type PkiPath = Certificate[]; // SequenceOfType
export const _decode_PkiPath = __utils._decodeSequenceOf<Certificate>(() => _decode_Certificate);
export const _encode_PkiPath = __utils._encodeSequenceOf<Certificate>(() => _encode_Certificate, __utils.BER);


export class CertificateListContent_revokedCertificates_Item {
    constructor (
        readonly serialNumber: CertificateSerialNumber,
        readonly revocationDate: Time,
        readonly crlEntryExtensions: Extensions | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_CertificateListContent_revokedCertificates_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("serialNumber", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("revocationDate", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("crlEntryExtensions", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CertificateListContent_revokedCertificates_Item: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_CertificateListContent_revokedCertificates_Item: __utils.ComponentSpec[] = [

];
export const _decode_CertificateListContent_revokedCertificates_Item = function (el: asn1.ASN1Element): CertificateListContent_revokedCertificates_Item {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let serialNumber!: CertificateSerialNumber;
    let revocationDate!: Time;
    let crlEntryExtensions: asn1.OPTIONAL<Extensions>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "serialNumber": (_el: asn1.ASN1Element): void => { serialNumber = _decode_CertificateSerialNumber(_el); },
        "revocationDate": (_el: asn1.ASN1Element): void => { revocationDate = _decode_Time(_el); },
        "crlEntryExtensions": (_el: asn1.ASN1Element): void => { crlEntryExtensions = _decode_Extensions(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertificateListContent_revokedCertificates_Item,
        _extension_additions_list_spec_for_CertificateListContent_revokedCertificates_Item,
        _root_component_type_list_2_spec_for_CertificateListContent_revokedCertificates_Item,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CertificateListContent_revokedCertificates_Item( /* SEQUENCE_CONSTRUCTOR_CALL */
        serialNumber,
        revocationDate,
        crlEntryExtensions,
        _unrecognizedExtensionsList
    );
};
export const _encode_CertificateListContent_revokedCertificates_Item = function (value: CertificateListContent_revokedCertificates_Item, elGetter: __utils.ASN1Encoder<CertificateListContent_revokedCertificates_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_CertificateSerialNumber(value.serialNumber, __utils.BER),
            _encode_Time(value.revocationDate, __utils.BER),
            (value.crlEntryExtensions ? _encode_Extensions(value.crlEntryExtensions, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class CertificateListContent {
    constructor (
        readonly version: Version | undefined,
        readonly signature: AlgorithmIdentifier,
        readonly issuer: Name,
        readonly thisUpdate: Time,
        readonly nextUpdate: Time | undefined,
        readonly revokedCertificates: CertificateListContent_revokedCertificates_Item[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[],
        readonly crlExtensions: Extensions | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_CertificateListContent: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("signature", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("issuer", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("thisUpdate", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("nextUpdate", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("revokedCertificates", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CertificateListContent: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("crlExtensions", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _extension_additions_list_spec_for_CertificateListContent: __utils.ComponentSpec[] = [

];
export const _decode_CertificateListContent = function (el: asn1.ASN1Element): CertificateListContent {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<Version>;
    let signature!: AlgorithmIdentifier;
    let issuer!: Name;
    let thisUpdate!: Time;
    let nextUpdate: asn1.OPTIONAL<Time>;
    let revokedCertificates: asn1.OPTIONAL<CertificateListContent_revokedCertificates_Item[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    let crlExtensions: asn1.OPTIONAL<Extensions>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = _decode_Version(_el); },
        "signature": (_el: asn1.ASN1Element): void => { signature = _decode_AlgorithmIdentifier(_el); },
        "issuer": (_el: asn1.ASN1Element): void => { issuer = _decode_Name(_el); },
        "thisUpdate": (_el: asn1.ASN1Element): void => { thisUpdate = _decode_Time(_el); },
        "nextUpdate": (_el: asn1.ASN1Element): void => { nextUpdate = _decode_Time(_el); },
        "revokedCertificates": (_el: asn1.ASN1Element): void => { revokedCertificates = __utils._decodeSequenceOf<CertificateListContent_revokedCertificates_Item>(() => _decode_CertificateListContent_revokedCertificates_Item)(_el); },
        "crlExtensions": (_el: asn1.ASN1Element): void => { crlExtensions = __utils._decode_explicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertificateListContent,
        _extension_additions_list_spec_for_CertificateListContent,
        _root_component_type_list_2_spec_for_CertificateListContent,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CertificateListContent( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        signature,
        issuer,
        thisUpdate,
        nextUpdate,
        revokedCertificates,
        _unrecognizedExtensionsList,
        crlExtensions
    );
};
export const _encode_CertificateListContent = function (value: CertificateListContent, elGetter: __utils.ASN1Encoder<CertificateListContent>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.version ? _encode_Version(value.version, __utils.BER) : undefined),
            _encode_AlgorithmIdentifier(value.signature, __utils.BER),
            _encode_Name(value.issuer, __utils.BER),
            _encode_Time(value.thisUpdate, __utils.BER),
            (value.nextUpdate ? _encode_Time(value.nextUpdate, __utils.BER) : undefined),
            (value.revokedCertificates ? __utils._encodeSequenceOf<CertificateListContent_revokedCertificates_Item>(() => _encode_CertificateListContent_revokedCertificates_Item, __utils.BER)(value.revokedCertificates, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
        [
            (value.crlExtensions ? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Extensions, __utils.BER)(value.crlExtensions, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type CertificateList = SIGNED<CertificateListContent>; // DefinedType
export const _decode_CertificateList = _get_decoder_for_SIGNED<CertificateListContent>(_decode_CertificateListContent);
export const _encode_CertificateList = _get_encoder_for_SIGNED<CertificateListContent>(_encode_CertificateListContent);


export type AvlSerialNumber = asn1.INTEGER;
export const _decode_AvlSerialNumber = __utils._decodeInteger;
export const _encode_AvlSerialNumber = __utils._encodeInteger;


export class IssuerSerialNumber {
    constructor (
        readonly issuer: Name,
        readonly serialNumber: CertificateSerialNumber,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_IssuerSerialNumber: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("issuer", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("serialNumber", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_IssuerSerialNumber: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_IssuerSerialNumber: __utils.ComponentSpec[] = [

];
export const _decode_IssuerSerialNumber = function (el: asn1.ASN1Element): IssuerSerialNumber {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("IssuerSerialNumber contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "issuer";
    sequence[1].name = "serialNumber";
    let issuer!: Name;
    let serialNumber!: CertificateSerialNumber;
    issuer = _decode_Name(sequence[0]);
    serialNumber = _decode_CertificateSerialNumber(sequence[1]);
    // TODO: Validate values.
    return new IssuerSerialNumber(
        issuer,
        serialNumber,
        sequence.slice(2),
    );
};
export const _encode_IssuerSerialNumber = function (value: IssuerSerialNumber, elGetter: __utils.ASN1Encoder<IssuerSerialNumber>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Name(value.issuer, __utils.BER),
            _encode_CertificateSerialNumber(value.serialNumber, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class FINGERPRINT<ToBeFingerprinted> {
    constructor (
        readonly algorithmIdentifier: AlgorithmIdentifier,
        readonly fingerprint: asn1.BIT_STRING,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_FINGERPRINT: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algorithmIdentifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("fingerprint", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_FINGERPRINT: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_FINGERPRINT: __utils.ComponentSpec[] = [

];
export const _get_decoder_for_FINGERPRINT = function <ToBeFingerprinted>(_decode_ToBeFingerprinted: __utils.ASN1Decoder<ToBeFingerprinted>) {
return function <ToBeFingerprinted>(el: asn1.ASN1Element): FINGERPRINT<ToBeFingerprinted> {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("FINGERPRINT contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "algorithmIdentifier";
    sequence[1].name = "fingerprint";
    let algorithmIdentifier!: AlgorithmIdentifier;
    let fingerprint!: asn1.BIT_STRING;
    algorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
    fingerprint = __utils._decodeBitString(sequence[1]);
    // TODO: Validate values.
    return new FINGERPRINT<ToBeFingerprinted>(
        algorithmIdentifier,
        fingerprint,
        sequence.slice(2),
    );
}
}
export const _get_encoder_for_FINGERPRINT = function <ToBeFingerprinted>(_encode_ToBeFingerprinted: __utils.ASN1Encoder<ToBeFingerprinted>) {
return function (value: FINGERPRINT<ToBeFingerprinted>, elGetter: __utils.ASN1Encoder<FINGERPRINT<ToBeFingerprinted>>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_AlgorithmIdentifier(value.algorithmIdentifier, __utils.BER),
            __utils._encodeBitString(value.fingerprint, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}
}


export type PKCertIdentifier =
    { issuerSerialNumber: IssuerSerialNumber }
    | { fingerprintPKC: FINGERPRINT<Certificate> }
    | { fingerprintPK: FINGERPRINT<PublicKey> }
    | asn1.ASN1Element;
export const _decode_PKCertIdentifier = __utils._decode_extensible_choice<PKCertIdentifier>({
    "UNIVERSAL 16": [ "issuerSerialNumber", _decode_IssuerSerialNumber ],
    "CONTEXT 0": [ "fingerprintPKC", __utils._decode_explicit<FINGERPRINT<Certificate>>(() => _get_decoder_for_FINGERPRINT<Certificate>(_decode_Certificate)) ],
    "CONTEXT 1": [ "fingerprintPK", __utils._decode_explicit<FINGERPRINT<PublicKey>>(() => _get_decoder_for_FINGERPRINT<PublicKey>(_decode_PublicKey)) ]
});
export const _encode_PKCertIdentifier = __utils._encode_choice<PKCertIdentifier>({
    "issuerSerialNumber": _encode_IssuerSerialNumber,
    "fingerprintPKC": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _get_encoder_for_FINGERPRINT<Certificate>(_encode_Certificate), __utils.BER),
    "fingerprintPK": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _get_encoder_for_FINGERPRINT<PublicKey>(_encode_PublicKey), __utils.BER),
}, __utils.BER);


export type TBSCertAVL_entries_Item_idType =
    { certIdentifier: PKCertIdentifier }
    | { entityGroup: DistinguishedName }
    | asn1.ASN1Element;
export const _decode_TBSCertAVL_entries_Item_idType = __utils._decode_extensible_choice<TBSCertAVL_entries_Item_idType>({
    "CONTEXT 0": [ "certIdentifier", __utils._decode_explicit<PKCertIdentifier>(() => _decode_PKCertIdentifier) ],
    "UNIVERSAL 16": [ "entityGroup", _decode_DistinguishedName ]
});
export const _encode_TBSCertAVL_entries_Item_idType = __utils._encode_choice<TBSCertAVL_entries_Item_idType>({
    "certIdentifier": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_PKCertIdentifier, __utils.BER),
    "entityGroup": _encode_DistinguishedName,
}, __utils.BER);


export class ScopeRestriction {
    constructor (
        readonly id: asn1.OBJECT_IDENTIFIER,
        readonly restriction: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_ScopeRestriction: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("id", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("restriction", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ScopeRestriction: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_ScopeRestriction: __utils.ComponentSpec[] = [

];
export const _decode_ScopeRestriction = function (el: asn1.ASN1Element): ScopeRestriction {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("ScopeRestriction contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "id";
    sequence[1].name = "restriction";
    let id!: asn1.OBJECT_IDENTIFIER;
    let restriction!: asn1.ASN1Element;
    id = __utils._decodeObjectIdentifier(sequence[0]);
    restriction = __utils._decodeAny(sequence[1]);
    // TODO: Validate values.
    return new ScopeRestriction(
        id,
        restriction,
        sequence.slice(2),
    );
};
export const _encode_ScopeRestriction = function (value: ScopeRestriction, elGetter: __utils.ASN1Encoder<ScopeRestriction>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeObjectIdentifier(value.id, __utils.BER),
            __utils._encodeAny(value.restriction, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type ScopeRestrictions = ScopeRestriction[]; // SequenceOfType
export const _decode_ScopeRestrictions = __utils._decodeSequenceOf<ScopeRestriction>(() => _decode_ScopeRestriction);
export const _encode_ScopeRestrictions = __utils._encodeSequenceOf<ScopeRestriction>(() => _encode_ScopeRestriction, __utils.BER);


export class TBSCertAVL_entries_Item {
    constructor (
        readonly idType: TBSCertAVL_entries_Item_idType,
        readonly scope: ScopeRestrictions | undefined,
        readonly entryExtensions: Extensions | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_TBSCertAVL_entries_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("idType", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("scope", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("entryExtensions", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_TBSCertAVL_entries_Item: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_TBSCertAVL_entries_Item: __utils.ComponentSpec[] = [

];
export const _decode_TBSCertAVL_entries_Item = function (el: asn1.ASN1Element): TBSCertAVL_entries_Item {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let idType!: TBSCertAVL_entries_Item_idType;
    let scope: asn1.OPTIONAL<ScopeRestrictions>;
    let entryExtensions: asn1.OPTIONAL<Extensions>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "idType": (_el: asn1.ASN1Element): void => { idType = _decode_TBSCertAVL_entries_Item_idType(_el); },
        "scope": (_el: asn1.ASN1Element): void => { scope = __utils._decode_explicit<ScopeRestrictions>(() => _decode_ScopeRestrictions)(_el); },
        "entryExtensions": (_el: asn1.ASN1Element): void => { entryExtensions = __utils._decode_explicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TBSCertAVL_entries_Item,
        _extension_additions_list_spec_for_TBSCertAVL_entries_Item,
        _root_component_type_list_2_spec_for_TBSCertAVL_entries_Item,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TBSCertAVL_entries_Item( /* SEQUENCE_CONSTRUCTOR_CALL */
        idType,
        scope,
        entryExtensions,
        _unrecognizedExtensionsList
    );
};
export const _encode_TBSCertAVL_entries_Item = function (value: TBSCertAVL_entries_Item, elGetter: __utils.ASN1Encoder<TBSCertAVL_entries_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_TBSCertAVL_entries_Item_idType(value.idType, __utils.BER),
            (value.scope ? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_ScopeRestrictions, __utils.BER)(value.scope, __utils.BER) : undefined),
            (value.entryExtensions ? __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Extensions, __utils.BER)(value.entryExtensions, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class TBSCertAVL {
    constructor (
        readonly version: Version | undefined,
        readonly serialNumber: AvlSerialNumber | undefined,
        readonly signature: AlgorithmIdentifier,
        readonly issuer: Name,
        readonly constrained: asn1.BOOLEAN,
        readonly entries: TBSCertAVL_entries_Item[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[],
        readonly avlExtensions: Extensions | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_TBSCertAVL: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("serialNumber", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("signature", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("issuer", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("constrained", false, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined),
    new __utils.ComponentSpec("entries", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_TBSCertAVL: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("avlExtensions", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _extension_additions_list_spec_for_TBSCertAVL: __utils.ComponentSpec[] = [

];
export const _decode_TBSCertAVL = function (el: asn1.ASN1Element): TBSCertAVL {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version: asn1.OPTIONAL<Version> = v1;
    let serialNumber: asn1.OPTIONAL<AvlSerialNumber>;
    let signature!: AlgorithmIdentifier;
    let issuer!: Name;
    let constrained!: asn1.BOOLEAN;
    let entries!: TBSCertAVL_entries_Item[];
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    let avlExtensions: asn1.OPTIONAL<Extensions>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = __utils._decode_explicit<Version>(() => _decode_Version)(_el); },
        "serialNumber": (_el: asn1.ASN1Element): void => { serialNumber = _decode_AvlSerialNumber(_el); },
        "signature": (_el: asn1.ASN1Element): void => { signature = _decode_AlgorithmIdentifier(_el); },
        "issuer": (_el: asn1.ASN1Element): void => { issuer = _decode_Name(_el); },
        "constrained": (_el: asn1.ASN1Element): void => { constrained = __utils._decodeBoolean(_el); },
        "entries": (_el: asn1.ASN1Element): void => { entries = __utils._decodeSequenceOf<TBSCertAVL_entries_Item>(() => _decode_TBSCertAVL_entries_Item)(_el); },
        "avlExtensions": (_el: asn1.ASN1Element): void => { avlExtensions = _decode_Extensions(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TBSCertAVL,
        _extension_additions_list_spec_for_TBSCertAVL,
        _root_component_type_list_2_spec_for_TBSCertAVL,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TBSCertAVL( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
        serialNumber,
        signature,
        issuer,
        constrained,
        entries,
        _unrecognizedExtensionsList,
        avlExtensions
    );
};
export const _encode_TBSCertAVL = function (value: TBSCertAVL, elGetter: __utils.ASN1Encoder<TBSCertAVL>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            ((value.version !== undefined && value.version !== v1) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Version, __utils.BER)(value.version, __utils.BER) : undefined),
            (value.serialNumber ? _encode_AvlSerialNumber(value.serialNumber, __utils.BER) : undefined),
            _encode_AlgorithmIdentifier(value.signature, __utils.BER),
            _encode_Name(value.issuer, __utils.BER),
            __utils._encodeBoolean(value.constrained, __utils.BER),
            __utils._encodeSequenceOf<TBSCertAVL_entries_Item>(() => _encode_TBSCertAVL_entries_Item, __utils.BER)(value.entries, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
        [
            (value.avlExtensions ? _encode_Extensions(value.avlExtensions, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type CertAVL = SIGNED<TBSCertAVL>; // DefinedType
export const _decode_CertAVL = _get_decoder_for_SIGNED<TBSCertAVL>(_decode_TBSCertAVL);
export const _encode_CertAVL = _get_encoder_for_SIGNED<TBSCertAVL>(_encode_TBSCertAVL);


// TODO: ObjectClassAssignment: SCOPE-RESTRICTION

// TODO: ObjectClassAssignment: EXTENSION

// TODO: ObjectAssignment: protRestrict

export type ProtRestriction = asn1.OBJECT_IDENTIFIER[]; // SequenceOfType
export const _decode_ProtRestriction = __utils._decodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier);
export const _encode_ProtRestriction = __utils._encodeSequenceOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER);


// TODO: ObjectAssignment: pkiUser

// TODO: ObjectAssignment: pkiCA

// TODO: ObjectAssignment: cRLDistributionPoint

// TODO: ObjectAssignment: cRLDistPtNameForm

// TODO: ObjectAssignment: deltaCRL

// TODO: ObjectAssignment: cpCps

// TODO: ObjectAssignment: pkiCertPath

// TODO: ObjectAssignment: userCertificate

// TODO: ObjectAssignment: cACertificate

// TODO: ObjectAssignment: crossCertificatePair

// TODO: ObjectAssignment: certificateRevocationList

// TODO: ObjectAssignment: eepkCertificateRevocationList

// TODO: ObjectAssignment: authorityRevocationList

// TODO: ObjectAssignment: deltaRevocationList

// TODO: ObjectAssignment: supportedAlgorithms

export class SupportedAlgorithm {
    constructor (
        readonly algorithmIdentifier: AlgorithmIdentifier,
        readonly intendedUsage: KeyUsage | undefined,
        readonly intendedCertificatePolicies: CertificatePoliciesSyntax | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_SupportedAlgorithm: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algorithmIdentifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("intendedUsage", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("intendedCertificatePolicies", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SupportedAlgorithm: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_SupportedAlgorithm: __utils.ComponentSpec[] = [

];
export const _decode_SupportedAlgorithm = function (el: asn1.ASN1Element): SupportedAlgorithm {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let algorithmIdentifier!: AlgorithmIdentifier;
    let intendedUsage: asn1.OPTIONAL<KeyUsage>;
    let intendedCertificatePolicies: asn1.OPTIONAL<CertificatePoliciesSyntax>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "algorithmIdentifier": (_el: asn1.ASN1Element): void => { algorithmIdentifier = _decode_AlgorithmIdentifier(_el); },
        "intendedUsage": (_el: asn1.ASN1Element): void => { intendedUsage = __utils._decode_explicit<KeyUsage>(() => _decode_KeyUsage)(_el); },
        "intendedCertificatePolicies": (_el: asn1.ASN1Element): void => { intendedCertificatePolicies = __utils._decode_explicit<CertificatePoliciesSyntax>(() => _decode_CertificatePoliciesSyntax)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SupportedAlgorithm,
        _extension_additions_list_spec_for_SupportedAlgorithm,
        _root_component_type_list_2_spec_for_SupportedAlgorithm,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SupportedAlgorithm( /* SEQUENCE_CONSTRUCTOR_CALL */
        algorithmIdentifier,
        intendedUsage,
        intendedCertificatePolicies,
        _unrecognizedExtensionsList
    );
};
export const _encode_SupportedAlgorithm = function (value: SupportedAlgorithm, elGetter: __utils.ASN1Encoder<SupportedAlgorithm>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_AlgorithmIdentifier(value.algorithmIdentifier, __utils.BER),
            (value.intendedUsage ? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_KeyUsage, __utils.BER)(value.intendedUsage, __utils.BER) : undefined),
            (value.intendedCertificatePolicies ? __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_CertificatePoliciesSyntax, __utils.BER)(value.intendedCertificatePolicies, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: certificationPracticeStmt

// TODO: ObjectClassAssignment: POLICY

// TODO: ObjectSetAssignment: Policies

// TODO: ObjectAssignment: certificatePolicy

export type PolicyID = CertPolicyId; // DefinedType
export const _decode_PolicyID = _decode_CertPolicyId;
export const _encode_PolicyID = _encode_CertPolicyId;


export class HASH<ToBeHashed> {
    constructor (
        readonly algorithmIdentifier: AlgorithmIdentifier,
        readonly hashValue: asn1.BIT_STRING,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_HASH: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("algorithmIdentifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("hashValue", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_HASH: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_HASH: __utils.ComponentSpec[] = [

];
export const _get_decoder_for_HASH = function <ToBeHashed>(_decode_ToBeHashed: __utils.ASN1Decoder<ToBeHashed>) {
return function <ToBeHashed>(el: asn1.ASN1Element): HASH<ToBeHashed> {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("HASH contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "algorithmIdentifier";
    sequence[1].name = "hashValue";
    let algorithmIdentifier!: AlgorithmIdentifier;
    let hashValue!: asn1.BIT_STRING;
    algorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
    hashValue = __utils._decodeBitString(sequence[1]);
    // TODO: Validate values.
    return new HASH<ToBeHashed>(
        algorithmIdentifier,
        hashValue,
        sequence.slice(2),
    );
}
}
export const _get_encoder_for_HASH = function <ToBeHashed>(_encode_ToBeHashed: __utils.ASN1Encoder<ToBeHashed>) {
return function (value: HASH<ToBeHashed>, elGetter: __utils.ASN1Encoder<HASH<ToBeHashed>>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_AlgorithmIdentifier(value.algorithmIdentifier, __utils.BER),
            __utils._encodeBitString(value.hashValue, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}
}


export type HashedPolicyInfo = asn1.ASN1Element; // ObjectClassFieldType
export const _decode_HashedPolicyInfo = __utils._decodeAny;
export const _encode_HashedPolicyInfo = __utils._encodeAny;


export class InfoSyntax_pointer {
    constructor (
        readonly name: GeneralNames,
        readonly hash: HASH<HashedPolicyInfo> | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_InfoSyntax_pointer: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("name", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("hash", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_InfoSyntax_pointer: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_InfoSyntax_pointer: __utils.ComponentSpec[] = [

];
export const _decode_InfoSyntax_pointer = function (el: asn1.ASN1Element): InfoSyntax_pointer {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let name!: GeneralNames;
    let hash: asn1.OPTIONAL<HASH<HashedPolicyInfo>>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "name": (_el: asn1.ASN1Element): void => { name = _decode_GeneralNames(_el); },
        "hash": (_el: asn1.ASN1Element): void => { hash = _get_decoder_for_HASH<HashedPolicyInfo>(_decode_HashedPolicyInfo)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InfoSyntax_pointer,
        _extension_additions_list_spec_for_InfoSyntax_pointer,
        _root_component_type_list_2_spec_for_InfoSyntax_pointer,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InfoSyntax_pointer( /* SEQUENCE_CONSTRUCTOR_CALL */
        name,
        hash,
        _unrecognizedExtensionsList
    );
};
export const _encode_InfoSyntax_pointer = function (value: InfoSyntax_pointer, elGetter: __utils.ASN1Encoder<InfoSyntax_pointer>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_GeneralNames(value.name, __utils.BER),
            (value.hash ? _get_encoder_for_HASH<HashedPolicyInfo>(_encode_HashedPolicyInfo)(value.hash, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type InfoSyntax =
    { content: UnboundedDirectoryString }
    | { pointer: InfoSyntax_pointer }
    | asn1.ASN1Element;
export const _decode_InfoSyntax = __utils._decode_extensible_choice<InfoSyntax>({
    "UNIVERSAL 16": [ "pointer", _decode_InfoSyntax_pointer ],
    "UNIVERSAL 12": [ "content", _decode_UnboundedDirectoryString ], // utf8String
    "UNIVERSAL 19": [ "content", _decode_UnboundedDirectoryString ], // printableString
    "UNIVERSAL 20": [ "content", _decode_UnboundedDirectoryString ], // teletexString
    "UNIVERSAL 28": [ "content", _decode_UnboundedDirectoryString ], // universalString
    "UNIVERSAL 30": [ "content", _decode_UnboundedDirectoryString ], // bmpString
});
export const _encode_InfoSyntax = __utils._encode_choice<InfoSyntax>({
    "content": _encode_UnboundedDirectoryString,
    "pointer": _encode_InfoSyntax_pointer,
}, __utils.BER);


export class PolicySyntax {
    constructor (
        readonly policyIdentifier: PolicyID,
        readonly policySyntax: InfoSyntax,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_PolicySyntax: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("policyIdentifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("policySyntax", false, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PolicySyntax: __utils.ComponentSpec[] = [

];
export const _extension_additions_list_spec_for_PolicySyntax: __utils.ComponentSpec[] = [

];
export const _decode_PolicySyntax = function (el: asn1.ASN1Element): PolicySyntax {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("PolicySyntax contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "policyIdentifier";
    sequence[1].name = "policySyntax";
    let policyIdentifier!: PolicyID;
    let policySyntax!: InfoSyntax;
    policyIdentifier = _decode_PolicyID(sequence[0]);
    policySyntax = _decode_InfoSyntax(sequence[1]);
    // TODO: Validate values.
    return new PolicySyntax(
        policyIdentifier,
        policySyntax,
        sequence.slice(2),
    );
};
export const _encode_PolicySyntax = function (value: PolicySyntax, elGetter: __utils.ASN1Encoder<PolicySyntax>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_PolicyID(value.policyIdentifier, __utils.BER),
            _encode_InfoSyntax(value.policySyntax, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: pkiPath

// TODO: ObjectAssignment: userPassword

// TODO: ObjectAssignment: x509Certificate

// TODO: ObjectAssignment: x509CertificateList

// TODO: ObjectAssignment: x509CertificatePair

// TODO: ObjectAssignment: x509SupportedAlgorithm

export const id_oc_cRLDistributionPoint: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    19,
], id_oc);

export const id_oc_pkiUser: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    21,
], id_oc);

export const id_oc_pkiCA: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    22,
], id_oc);

export const id_oc_deltaCRL: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    23,
], id_oc);

export const id_oc_cpCps: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    30,
], id_oc);

export const id_oc_pkiCertPath: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    31,
], id_oc);

export const id_nf_cRLDistPtNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    14,
], id_nf);

export const id_at_userPassword: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    35,
], id_at);

export const id_at_userCertificate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    36,
], id_at);

export const id_at_cAcertificate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    37,
], id_at);

export const id_at_authorityRevocationList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    38,
], id_at);

export const id_at_certificateRevocationList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    39,
], id_at);

export const id_at_crossCertificatePair: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    40,
], id_at);

export const id_at_supportedAlgorithms: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    52,
], id_at);

export const id_at_deltaRevocationList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    53,
], id_at);

export const id_at_certificationPracticeStmt: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    68,
], id_at);

export const id_at_certificatePolicy: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    69,
], id_at);

export const id_at_pkiPath: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    70,
], id_at);

export const id_at_eepkCertificateRevocationList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    101,
], id_at);

export const id_lsx_x509Certificate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    8,
], id_lsx);

export const id_lsx_x509CertificateList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
], id_lsx);

export const id_lsx_x509CertificatePair: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    10,
], id_lsx);

export const id_lsx_x509SupportedAlgorithm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    49,
], id_lsx);

export const id_protRestrict: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    1,
], id_avr);

/* END_MODULE AuthenticationFramework */
