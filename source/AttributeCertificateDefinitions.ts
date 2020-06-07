
// AttributeCertificateDefinitions
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    basicAccessControl,
    id_at,
    id_ce,
    id_mr,
    informationFramework,
    authenticationFramework,
    selectedAttributeTypes,
    id_oc,
    certificateExtensions,
    pkiPmiExternalDataTypes
} from "./UsefulDefinitions";

import * as InformationFramework from "./InformationFramework";
import {
    ATTRIBUTE,
    AttributeType,
    MATCHING_RULE,
    Name,
    OBJECT_CLASS,
    RelativeDistinguishedName,
    SupportedAttributes,
    SYNTAX_NAME,
    top,
    Attribute,
    _decode_AttributeType,
    _encode_AttributeType,
    _decode_Name,
    _encode_Name,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
    _decode_Attribute,
    _encode_Attribute
} from "./InformationFramework";

import * as BasicAccessControl from "./BasicAccessControl";
import {
    AttributeTypeAndValue,
    _decode_AttributeTypeAndValue,
    _encode_AttributeTypeAndValue
} from "./BasicAccessControl";

import * as AuthenticationFramework from "./AuthenticationFramework";
import {
    AlgorithmIdentifier,
    Certificate,
    CertificateList,
    CertificateSerialNumber,
    EXTENSION,
    Extensions,
    InfoSyntax,
    PolicySyntax,
    SupportedAlgorithms,
    x509CertificateList,
    SIGNED,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
    _decode_Certificate,
    _encode_Certificate,
    _decode_CertificateList,
    _encode_CertificateList,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
    _decode_Extensions,
    _encode_Extensions,
    _decode_InfoSyntax,
    _encode_InfoSyntax,
    _decode_PolicySyntax,
    _encode_PolicySyntax,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED
} from "./AuthenticationFramework";

import * as SelectedAttributeTypes from "./SelectedAttributeTypes";
import {
    TimeSpecification,
    UnboundedDirectoryString,
    UniqueIdentifier,
    _decode_TimeSpecification,
    _encode_TimeSpecification,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier
} from "./SelectedAttributeTypes";

import * as CertificateExtensions from "./CertificateExtensions";
import {
    certificateListExactMatch,
    GeneralName,
    GeneralNames,
    NameConstraintsSyntax,
    _decode_GeneralName,
    _encode_GeneralName,
    _decode_GeneralNames,
    _encode_GeneralNames,
    _decode_NameConstraintsSyntax,
    _encode_NameConstraintsSyntax
} from "./CertificateExtensions";

import * as PkiPmiExternalDataTypes from "./PkiPmiExternalDataTypes";
import {
    UserNotice,
    _decode_UserNotice,
    _encode_UserNotice
} from "./PkiPmiExternalDataTypes";


const itu_t: number = 0;
const itu_r: number = 0;
const ccitt: number = 0;
const iso: number = 1;
const joint_iso_itu_t: number = 2;
const joint_iso_ccitt: number = 2;

export type AttCertVersion = asn1.INTEGER;
export const AttCertVersion_v2: AttCertVersion = 1; /* LONG_NAMED_INTEGER_VALUE */
export const v2: AttCertVersion = AttCertVersion_v2; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AttCertVersion = __utils._decodeInteger;
export const _encode_AttCertVersion = __utils._encodeInteger;


export class IssuerSerial {
    constructor (
        readonly issuer: GeneralNames,
        readonly serial: CertificateSerialNumber,
        readonly issuerUID: UniqueIdentifier | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_IssuerSerial: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("issuer", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("serial", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("issuerUID", true, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_IssuerSerial: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_IssuerSerial: __utils.ComponentSpec[] = [
    
];
export const _decode_IssuerSerial = function (el: asn1.ASN1Element): IssuerSerial {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let issuer!: GeneralNames;
    let serial!: CertificateSerialNumber;
    let issuerUID: asn1.OPTIONAL<UniqueIdentifier>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "issuer": (_el: asn1.ASN1Element): void => { issuer = _decode_GeneralNames(_el); },
        "serial": (_el: asn1.ASN1Element): void => { serial = _decode_CertificateSerialNumber(_el); },
        "issuerUID": (_el: asn1.ASN1Element): void => { issuerUID = _decode_UniqueIdentifier(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IssuerSerial,
        _extension_additions_list_spec_for_IssuerSerial,
        _root_component_type_list_2_spec_for_IssuerSerial,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IssuerSerial( /* SEQUENCE_CONSTRUCTOR_CALL */
        issuer,
        serial,
        issuerUID,
        _unrecognizedExtensionsList
    );
};
export const _encode_IssuerSerial = function (value: IssuerSerial, elGetter: __utils.ASN1Encoder<IssuerSerial>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_GeneralNames(value.issuer, __utils.BER),
            _encode_CertificateSerialNumber(value.serial, __utils.BER),
            (value.issuerUID ? _encode_UniqueIdentifier(value.issuerUID, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export enum ObjectDigestInfo_digestedObjectType {
    publicKey = 0,
    publicKeyCert = 1,
    otherObjectTypes = 2,
}
export const publicKey: ObjectDigestInfo_digestedObjectType = 0;
export const publicKeyCert: ObjectDigestInfo_digestedObjectType = 1;
export const otherObjectTypes: ObjectDigestInfo_digestedObjectType = 2;
export const _decode_ObjectDigestInfo_digestedObjectType = __utils._decodeEnumerated;
export const _encode_ObjectDigestInfo_digestedObjectType = __utils._encodeEnumerated;


export class ObjectDigestInfo {
    constructor (
        readonly digestedObjectType: ObjectDigestInfo_digestedObjectType,
        readonly otherObjectTypeID: asn1.OBJECT_IDENTIFIER | undefined,
        readonly digestAlgorithm: AlgorithmIdentifier,
        readonly objectDigest: asn1.BIT_STRING,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_ObjectDigestInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("digestedObjectType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined),
    new __utils.ComponentSpec("otherObjectTypeID", true, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("digestAlgorithm", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("objectDigest", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_ObjectDigestInfo: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_ObjectDigestInfo: __utils.ComponentSpec[] = [
    
];
export const _decode_ObjectDigestInfo = function (el: asn1.ASN1Element): ObjectDigestInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let digestedObjectType!: ObjectDigestInfo_digestedObjectType;
    let otherObjectTypeID: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let digestAlgorithm!: AlgorithmIdentifier;
    let objectDigest!: asn1.BIT_STRING;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "digestedObjectType": (_el: asn1.ASN1Element): void => { digestedObjectType = _decode_ObjectDigestInfo_digestedObjectType(_el); },
        "otherObjectTypeID": (_el: asn1.ASN1Element): void => { otherObjectTypeID = __utils._decodeObjectIdentifier(_el); },
        "digestAlgorithm": (_el: asn1.ASN1Element): void => { digestAlgorithm = _decode_AlgorithmIdentifier(_el); },
        "objectDigest": (_el: asn1.ASN1Element): void => { objectDigest = __utils._decodeBitString(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ObjectDigestInfo,
        _extension_additions_list_spec_for_ObjectDigestInfo,
        _root_component_type_list_2_spec_for_ObjectDigestInfo,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ObjectDigestInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        digestedObjectType,
        otherObjectTypeID,
        digestAlgorithm,
        objectDigest,
        _unrecognizedExtensionsList
    );
};
export const _encode_ObjectDigestInfo = function (value: ObjectDigestInfo, elGetter: __utils.ASN1Encoder<ObjectDigestInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_ObjectDigestInfo_digestedObjectType(value.digestedObjectType, __utils.BER),
            (value.otherObjectTypeID ? __utils._encodeObjectIdentifier(value.otherObjectTypeID, __utils.BER) : undefined),
            _encode_AlgorithmIdentifier(value.digestAlgorithm, __utils.BER),
            __utils._encodeBitString(value.objectDigest, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class Holder {
    constructor (
        readonly baseCertificateID: IssuerSerial | undefined,
        readonly entityName: GeneralNames | undefined,
        readonly objectDigestInfo: ObjectDigestInfo | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_Holder: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("baseCertificateID", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("entityName", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("objectDigestInfo", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
const _root_component_type_list_2_spec_for_Holder: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_Holder: __utils.ComponentSpec[] = [
    
];
export const _decode_Holder = function (el: asn1.ASN1Element): Holder {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let baseCertificateID: asn1.OPTIONAL<IssuerSerial>;
    let entityName: asn1.OPTIONAL<GeneralNames>;
    let objectDigestInfo: asn1.OPTIONAL<ObjectDigestInfo>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "baseCertificateID": (_el: asn1.ASN1Element): void => { baseCertificateID = __utils._decode_implicit<IssuerSerial>(() => _decode_IssuerSerial)(_el); },
        "entityName": (_el: asn1.ASN1Element): void => { entityName = __utils._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "objectDigestInfo": (_el: asn1.ASN1Element): void => { objectDigestInfo = __utils._decode_implicit<ObjectDigestInfo>(() => _decode_ObjectDigestInfo)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Holder,
        _extension_additions_list_spec_for_Holder,
        _root_component_type_list_2_spec_for_Holder,
        undefined,
    );
    return new Holder( /* SEQUENCE_CONSTRUCTOR_CALL */
        baseCertificateID,
        entityName,
        objectDigestInfo
    );
};
export const _encode_Holder = function (value: Holder, elGetter: __utils.ASN1Encoder<Holder>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.baseCertificateID ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_IssuerSerial, __utils.BER)(value.baseCertificateID, __utils.BER) : undefined),
            (value.entityName ? __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_GeneralNames, __utils.BER)(value.entityName, __utils.BER) : undefined),
            (value.objectDigestInfo ? __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_ObjectDigestInfo, __utils.BER)(value.objectDigestInfo, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class AttCertIssuer {
    constructor (
        readonly issuerName: GeneralNames | undefined,
        readonly baseCertificateID: IssuerSerial | undefined,
        readonly objectDigestInfo: ObjectDigestInfo | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_AttCertIssuer: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("issuerName", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("baseCertificateID", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("objectDigestInfo", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_AttCertIssuer: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_AttCertIssuer: __utils.ComponentSpec[] = [
    
];
export const _decode_AttCertIssuer = __utils._decode_implicit<AttCertIssuer>(() => function (el: asn1.ASN1Element): AttCertIssuer {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let issuerName: asn1.OPTIONAL<GeneralNames>;
    let baseCertificateID: asn1.OPTIONAL<IssuerSerial>;
    let objectDigestInfo: asn1.OPTIONAL<ObjectDigestInfo>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "issuerName": (_el: asn1.ASN1Element): void => { issuerName = _decode_GeneralNames(_el); },
        "baseCertificateID": (_el: asn1.ASN1Element): void => { baseCertificateID = __utils._decode_implicit<IssuerSerial>(() => _decode_IssuerSerial)(_el); },
        "objectDigestInfo": (_el: asn1.ASN1Element): void => { objectDigestInfo = __utils._decode_implicit<ObjectDigestInfo>(() => _decode_ObjectDigestInfo)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttCertIssuer,
        _extension_additions_list_spec_for_AttCertIssuer,
        _root_component_type_list_2_spec_for_AttCertIssuer,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AttCertIssuer( /* SEQUENCE_CONSTRUCTOR_CALL */
        issuerName,
        baseCertificateID,
        objectDigestInfo,
        _unrecognizedExtensionsList
    );
});
export const _encode_AttCertIssuer = __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => function (value: AttCertIssuer, elGetter: __utils.ASN1Encoder<AttCertIssuer>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.issuerName ? _encode_GeneralNames(value.issuerName, __utils.BER) : undefined),
            (value.baseCertificateID ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_IssuerSerial, __utils.BER)(value.baseCertificateID, __utils.BER) : undefined),
            (value.objectDigestInfo ? __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_ObjectDigestInfo, __utils.BER)(value.objectDigestInfo, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export class AttCertValidityPeriod {
    constructor (
        readonly notBeforeTime: asn1.GeneralizedTime,
        readonly notAfterTime: asn1.GeneralizedTime,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_AttCertValidityPeriod: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("notBeforeTime", false, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("notAfterTime", false, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined)
];
const _root_component_type_list_2_spec_for_AttCertValidityPeriod: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_AttCertValidityPeriod: __utils.ComponentSpec[] = [
    
];
export const _decode_AttCertValidityPeriod = function (el: asn1.ASN1Element): AttCertValidityPeriod {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("AttCertValidityPeriod contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "notBeforeTime";
    sequence[1].name = "notAfterTime";
    let notBeforeTime!: asn1.GeneralizedTime;
    let notAfterTime!: asn1.GeneralizedTime;
    notBeforeTime = __utils._decodeGeneralizedTime(sequence[0]);
    notAfterTime = __utils._decodeGeneralizedTime(sequence[1]);
    // TODO: Validate values.
    return new AttCertValidityPeriod(
        notBeforeTime,
        notAfterTime,
        sequence.slice(2),
    );
};
export const _encode_AttCertValidityPeriod = function (value: AttCertValidityPeriod, elGetter: __utils.ASN1Encoder<AttCertValidityPeriod>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeGeneralizedTime(value.notBeforeTime, __utils.BER),
            __utils._encodeGeneralizedTime(value.notAfterTime, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class TBSAttributeCertificate {
    constructor (
        readonly version: AttCertVersion,
        readonly holder: Holder,
        readonly issuer: AttCertIssuer,
        readonly signature: AlgorithmIdentifier,
        readonly serialNumber: CertificateSerialNumber,
        readonly attrCertValidityPeriod: AttCertValidityPeriod,
        readonly attributes: Attribute[],
        readonly issuerUniqueID: UniqueIdentifier | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[],
        readonly extensions: Extensions | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_TBSAttributeCertificate: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("version", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("holder", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("issuer", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("signature", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("serialNumber", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("attrCertValidityPeriod", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("attributes", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("issuerUniqueID", true, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_TBSAttributeCertificate: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("extensions", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
const _extension_additions_list_spec_for_TBSAttributeCertificate: __utils.ComponentSpec[] = [
    
];
export const _decode_TBSAttributeCertificate = function (el: asn1.ASN1Element): TBSAttributeCertificate {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: AttCertVersion;
    let holder!: Holder;
    let issuer!: AttCertIssuer;
    let signature!: AlgorithmIdentifier;
    let serialNumber!: CertificateSerialNumber;
    let attrCertValidityPeriod!: AttCertValidityPeriod;
    let attributes!: Attribute[];
    let issuerUniqueID: asn1.OPTIONAL<UniqueIdentifier>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    let extensions: asn1.OPTIONAL<Extensions>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "version": (_el: asn1.ASN1Element): void => { version = _decode_AttCertVersion(_el); },
        "holder": (_el: asn1.ASN1Element): void => { holder = _decode_Holder(_el); },
        "issuer": (_el: asn1.ASN1Element): void => { issuer = _decode_AttCertIssuer(_el); },
        "signature": (_el: asn1.ASN1Element): void => { signature = _decode_AlgorithmIdentifier(_el); },
        "serialNumber": (_el: asn1.ASN1Element): void => { serialNumber = _decode_CertificateSerialNumber(_el); },
        "attrCertValidityPeriod": (_el: asn1.ASN1Element): void => { attrCertValidityPeriod = _decode_AttCertValidityPeriod(_el); },
        "attributes": (_el: asn1.ASN1Element): void => { attributes = __utils._decodeSequenceOf<Attribute>(() => _decode_Attribute)(_el); },
        "issuerUniqueID": (_el: asn1.ASN1Element): void => { issuerUniqueID = _decode_UniqueIdentifier(_el); },
        "extensions": (_el: asn1.ASN1Element): void => { extensions = _decode_Extensions(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TBSAttributeCertificate,
        _extension_additions_list_spec_for_TBSAttributeCertificate,
        _root_component_type_list_2_spec_for_TBSAttributeCertificate,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TBSAttributeCertificate( /* SEQUENCE_CONSTRUCTOR_CALL */
        version,
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
export const _encode_TBSAttributeCertificate = function (value: TBSAttributeCertificate, elGetter: __utils.ASN1Encoder<TBSAttributeCertificate>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_AttCertVersion(value.version, __utils.BER),
            _encode_Holder(value.holder, __utils.BER),
            _encode_AttCertIssuer(value.issuer, __utils.BER),
            _encode_AlgorithmIdentifier(value.signature, __utils.BER),
            _encode_CertificateSerialNumber(value.serialNumber, __utils.BER),
            _encode_AttCertValidityPeriod(value.attrCertValidityPeriod, __utils.BER),
            __utils._encodeSequenceOf<Attribute>(() => _encode_Attribute, __utils.BER)(value.attributes, __utils.BER),
            (value.issuerUniqueID ? _encode_UniqueIdentifier(value.issuerUniqueID, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
        [
            (value.extensions ? _encode_Extensions(value.extensions, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AttributeCertificate = SIGNED<TBSAttributeCertificate>; // DefinedType
export const _decode_AttributeCertificate = _get_decoder_for_SIGNED<TBSAttributeCertificate>(_decode_TBSAttributeCertificate);
export const _encode_AttributeCertificate = _get_encoder_for_SIGNED<TBSAttributeCertificate>(_encode_TBSAttributeCertificate);


export class ACPathData {
    constructor (
        readonly certificate: Certificate | undefined,
        readonly attributeCertificate: AttributeCertificate | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_ACPathData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("certificate", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("attributeCertificate", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_ACPathData: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_ACPathData: __utils.ComponentSpec[] = [
    
];
export const _decode_ACPathData = function (el: asn1.ASN1Element): ACPathData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let certificate: asn1.OPTIONAL<Certificate>;
    let attributeCertificate: asn1.OPTIONAL<AttributeCertificate>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "certificate": (_el: asn1.ASN1Element): void => { certificate = __utils._decode_implicit<Certificate>(() => _decode_Certificate)(_el); },
        "attributeCertificate": (_el: asn1.ASN1Element): void => { attributeCertificate = __utils._decode_implicit<AttributeCertificate>(() => _decode_AttributeCertificate)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ACPathData,
        _extension_additions_list_spec_for_ACPathData,
        _root_component_type_list_2_spec_for_ACPathData,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ACPathData( /* SEQUENCE_CONSTRUCTOR_CALL */
        certificate,
        attributeCertificate,
        _unrecognizedExtensionsList
    );
};
export const _encode_ACPathData = function (value: ACPathData, elGetter: __utils.ASN1Encoder<ACPathData>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.certificate ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_Certificate, __utils.BER)(value.certificate, __utils.BER) : undefined),
            (value.attributeCertificate ? __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_AttributeCertificate, __utils.BER)(value.attributeCertificate, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class AttributeCertificationPath {
    constructor (
        readonly attributeCertificate: AttributeCertificate,
        readonly acPath: ACPathData[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_AttributeCertificationPath: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("attributeCertificate", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("acPath", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
const _root_component_type_list_2_spec_for_AttributeCertificationPath: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_AttributeCertificationPath: __utils.ComponentSpec[] = [
    
];
export const _decode_AttributeCertificationPath = function (el: asn1.ASN1Element): AttributeCertificationPath {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let attributeCertificate!: AttributeCertificate;
    let acPath: asn1.OPTIONAL<ACPathData[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "attributeCertificate": (_el: asn1.ASN1Element): void => { attributeCertificate = _decode_AttributeCertificate(_el); },
        "acPath": (_el: asn1.ASN1Element): void => { acPath = __utils._decodeSequenceOf<ACPathData>(() => _decode_ACPathData)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeCertificationPath,
        _extension_additions_list_spec_for_AttributeCertificationPath,
        _root_component_type_list_2_spec_for_AttributeCertificationPath,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AttributeCertificationPath( /* SEQUENCE_CONSTRUCTOR_CALL */
        attributeCertificate,
        acPath,
        _unrecognizedExtensionsList
    );
};
export const _encode_AttributeCertificationPath = function (value: AttributeCertificationPath, elGetter: __utils.ASN1Encoder<AttributeCertificationPath>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_AttributeCertificate(value.attributeCertificate, __utils.BER),
            (value.acPath ? __utils._encodeSequenceOf<ACPathData>(() => _encode_ACPathData, __utils.BER)(value.acPath, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: role

export class RoleSyntax {
    constructor (
        readonly roleAuthority: GeneralNames | undefined,
        readonly roleName: GeneralName,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_RoleSyntax: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("roleAuthority", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("roleName", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_RoleSyntax: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_RoleSyntax: __utils.ComponentSpec[] = [
    
];
export const _decode_RoleSyntax = function (el: asn1.ASN1Element): RoleSyntax {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let roleAuthority: asn1.OPTIONAL<GeneralNames>;
    let roleName!: GeneralName;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "roleAuthority": (_el: asn1.ASN1Element): void => { roleAuthority = __utils._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "roleName": (_el: asn1.ASN1Element): void => { roleName = __utils._decode_implicit<GeneralName>(() => _decode_GeneralName)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RoleSyntax,
        _extension_additions_list_spec_for_RoleSyntax,
        _root_component_type_list_2_spec_for_RoleSyntax,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RoleSyntax( /* SEQUENCE_CONSTRUCTOR_CALL */
        roleAuthority,
        roleName,
        _unrecognizedExtensionsList
    );
};
export const _encode_RoleSyntax = function (value: RoleSyntax, elGetter: __utils.ASN1Encoder<RoleSyntax>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.roleAuthority ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_GeneralNames, __utils.BER)(value.roleAuthority, __utils.BER) : undefined),
            __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_GeneralName, __utils.BER)(value.roleName, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: xmlPrivilegeInfo

// TODO: ObjectAssignment: permission

export class DualStringSyntax {
    constructor (
        readonly operation: UnboundedDirectoryString,
        readonly object: UnboundedDirectoryString,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_DualStringSyntax: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("operation", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("object", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_DualStringSyntax: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_DualStringSyntax: __utils.ComponentSpec[] = [
    
];
export const _decode_DualStringSyntax = function (el: asn1.ASN1Element): DualStringSyntax {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("DualStringSyntax contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "operation";
    sequence[1].name = "object";
    let operation!: UnboundedDirectoryString;
    let object!: UnboundedDirectoryString;
    operation = __utils._decode_implicit<UnboundedDirectoryString>(() => _decode_UnboundedDirectoryString)(sequence[0]);
    object = __utils._decode_implicit<UnboundedDirectoryString>(() => _decode_UnboundedDirectoryString)(sequence[1]);
    // TODO: Validate values.
    return new DualStringSyntax(
        operation,
        object,
        sequence.slice(2),
    );
};
export const _encode_DualStringSyntax = function (value: DualStringSyntax, elGetter: __utils.ASN1Encoder<DualStringSyntax>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_UnboundedDirectoryString, __utils.BER)(value.operation, __utils.BER),
            __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_UnboundedDirectoryString, __utils.BER)(value.object, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: dualStringMatch

// TODO: ObjectAssignment: timeSpecification

// TODO: ObjectAssignment: timeSpecificationMatch

// TODO: ObjectAssignment: targetingInformation

export class TargetCert {
    constructor (
        readonly targetCertificate: IssuerSerial,
        readonly targetName: GeneralName | undefined,
        readonly certDigestInfo: ObjectDigestInfo | undefined
    ) {}
}
const _root_component_type_list_1_spec_for_TargetCert: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("targetCertificate", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("targetName", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("certDigestInfo", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
const _root_component_type_list_2_spec_for_TargetCert: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_TargetCert: __utils.ComponentSpec[] = [
    
];
export const _decode_TargetCert = function (el: asn1.ASN1Element): TargetCert {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let targetCertificate!: IssuerSerial;
    let targetName: asn1.OPTIONAL<GeneralName>;
    let certDigestInfo: asn1.OPTIONAL<ObjectDigestInfo>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "targetCertificate": (_el: asn1.ASN1Element): void => { targetCertificate = _decode_IssuerSerial(_el); },
        "targetName": (_el: asn1.ASN1Element): void => { targetName = _decode_GeneralName(_el); },
        "certDigestInfo": (_el: asn1.ASN1Element): void => { certDigestInfo = _decode_ObjectDigestInfo(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TargetCert,
        _extension_additions_list_spec_for_TargetCert,
        _root_component_type_list_2_spec_for_TargetCert,
        undefined,
    );
    return new TargetCert( /* SEQUENCE_CONSTRUCTOR_CALL */
        targetCertificate,
        targetName,
        certDigestInfo
    );
};
export const _encode_TargetCert = function (value: TargetCert, elGetter: __utils.ASN1Encoder<TargetCert>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_IssuerSerial(value.targetCertificate, __utils.BER),
            (value.targetName ? _encode_GeneralName(value.targetName, __utils.BER) : undefined),
            (value.certDigestInfo ? _encode_ObjectDigestInfo(value.certDigestInfo, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type Target =
    { targetName: GeneralName }
    | { targetGroup: GeneralName }
    | { targetCert: TargetCert }
    | asn1.ASN1Element;
export const _decode_Target = __utils._decode_extensible_choice<Target>({
    "CONTEXT 0": [ "targetName", __utils._decode_implicit<GeneralName>(() => _decode_GeneralName) ],
    "CONTEXT 1": [ "targetGroup", __utils._decode_implicit<GeneralName>(() => _decode_GeneralName) ],
    "CONTEXT 2": [ "targetCert", __utils._decode_implicit<TargetCert>(() => _decode_TargetCert) ]
});
export const _encode_Target = __utils._encode_choice<Target>({
    "targetName": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_GeneralName, __utils.BER),
    "targetGroup": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_GeneralName, __utils.BER),
    "targetCert": __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_TargetCert, __utils.BER),
}, __utils.BER);


export type Targets = Target[]; // SequenceOfType
export const _decode_Targets = __utils._decodeSequenceOf<Target>(() => _decode_Target);
export const _encode_Targets = __utils._encodeSequenceOf<Target>(() => _encode_Target, __utils.BER);


// TODO: ObjectAssignment: userNotice

// TODO: ObjectAssignment: acceptablePrivilegePolicies

export type PrivilegePolicy = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_PrivilegePolicy = __utils._decodeObjectIdentifier;
export const _encode_PrivilegePolicy = __utils._encodeObjectIdentifier;


export type AcceptablePrivilegePoliciesSyntax = PrivilegePolicy[]; // SequenceOfType
export const _decode_AcceptablePrivilegePoliciesSyntax = __utils._decodeSequenceOf<PrivilegePolicy>(() => _decode_PrivilegePolicy);
export const _encode_AcceptablePrivilegePoliciesSyntax = __utils._encodeSequenceOf<PrivilegePolicy>(() => _encode_PrivilegePolicy, __utils.BER);


// TODO: ObjectAssignment: singleUse

// TODO: ObjectAssignment: groupAC

// TODO: ObjectAssignment: noRevAvail

// TODO: ObjectAssignment: sOAIdentifier

// TODO: ObjectAssignment: sOAIdentifierMatch

// TODO: ObjectAssignment: attributeDescriptor

export type AttributeIdentifier = asn1.OBJECT_IDENTIFIER; // ObjectClassFieldType
export const _decode_AttributeIdentifier = __utils._decodeObjectIdentifier;
export const _encode_AttributeIdentifier = __utils._encodeObjectIdentifier;


export type AttributeName = asn1.UTF8String; // UTF8String
export const _decode_AttributeName = __utils._decodeUTF8String;
export const _encode_AttributeName = __utils._encodeUTF8String;


export type AttributeDescription = asn1.UTF8String; // UTF8String
export const _decode_AttributeDescription = __utils._decodeUTF8String;
export const _encode_AttributeDescription = __utils._encodeUTF8String;


export class PrivilegePolicyIdentifier {
    constructor (
        readonly privilegePolicy: PrivilegePolicy,
        readonly privPolSyntax: InfoSyntax,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_PrivilegePolicyIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("privilegePolicy", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("privPolSyntax", false, __utils.hasAnyTag, undefined, undefined)
];
const _root_component_type_list_2_spec_for_PrivilegePolicyIdentifier: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_PrivilegePolicyIdentifier: __utils.ComponentSpec[] = [
    
];
export const _decode_PrivilegePolicyIdentifier = function (el: asn1.ASN1Element): PrivilegePolicyIdentifier {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("PrivilegePolicyIdentifier contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "privilegePolicy";
    sequence[1].name = "privPolSyntax";
    let privilegePolicy!: PrivilegePolicy;
    let privPolSyntax!: InfoSyntax;
    privilegePolicy = _decode_PrivilegePolicy(sequence[0]);
    privPolSyntax = _decode_InfoSyntax(sequence[1]);
    // TODO: Validate values.
    return new PrivilegePolicyIdentifier(
        privilegePolicy,
        privPolSyntax,
        sequence.slice(2),
    );
};
export const _encode_PrivilegePolicyIdentifier = function (value: PrivilegePolicyIdentifier, elGetter: __utils.ASN1Encoder<PrivilegePolicyIdentifier>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_PrivilegePolicy(value.privilegePolicy, __utils.BER),
            _encode_InfoSyntax(value.privPolSyntax, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class AttributeDescriptorSyntax {
    constructor (
        readonly identifier: AttributeIdentifier,
        readonly attributeSyntax: asn1.OCTET_STRING,
        readonly name: AttributeName | undefined,
        readonly description: AttributeDescription | undefined,
        readonly dominationRule: PrivilegePolicyIdentifier,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_AttributeDescriptorSyntax: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("identifier", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("attributeSyntax", false, __utils.hasTag(asn1.ASN1TagClass.universal, 4), undefined, undefined),
    new __utils.ComponentSpec("name", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("description", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("dominationRule", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
const _root_component_type_list_2_spec_for_AttributeDescriptorSyntax: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_AttributeDescriptorSyntax: __utils.ComponentSpec[] = [
    
];
export const _decode_AttributeDescriptorSyntax = function (el: asn1.ASN1Element): AttributeDescriptorSyntax {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let identifier!: AttributeIdentifier;
    let attributeSyntax!: asn1.OCTET_STRING;
    let name: asn1.OPTIONAL<AttributeName>;
    let description: asn1.OPTIONAL<AttributeDescription>;
    let dominationRule!: PrivilegePolicyIdentifier;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "identifier": (_el: asn1.ASN1Element): void => { identifier = _decode_AttributeIdentifier(_el); },
        "attributeSyntax": (_el: asn1.ASN1Element): void => { attributeSyntax = __utils._decodeOctetString(_el); },
        "name": (_el: asn1.ASN1Element): void => { name = __utils._decode_implicit<AttributeName>(() => _decode_AttributeName)(_el); },
        "description": (_el: asn1.ASN1Element): void => { description = __utils._decode_implicit<AttributeDescription>(() => _decode_AttributeDescription)(_el); },
        "dominationRule": (_el: asn1.ASN1Element): void => { dominationRule = _decode_PrivilegePolicyIdentifier(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeDescriptorSyntax,
        _extension_additions_list_spec_for_AttributeDescriptorSyntax,
        _root_component_type_list_2_spec_for_AttributeDescriptorSyntax,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AttributeDescriptorSyntax( /* SEQUENCE_CONSTRUCTOR_CALL */
        identifier,
        attributeSyntax,
        name,
        description,
        dominationRule,
        _unrecognizedExtensionsList
    );
};
export const _encode_AttributeDescriptorSyntax = function (value: AttributeDescriptorSyntax, elGetter: __utils.ASN1Encoder<AttributeDescriptorSyntax>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_AttributeIdentifier(value.identifier, __utils.BER),
            __utils._encodeOctetString(value.attributeSyntax, __utils.BER),
            (value.name ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_AttributeName, __utils.BER)(value.name, __utils.BER) : undefined),
            (value.description ? __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_AttributeDescription, __utils.BER)(value.description, __utils.BER) : undefined),
            _encode_PrivilegePolicyIdentifier(value.dominationRule, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectSetAssignment: AttributeIDs

// TODO: ObjectAssignment: attDescriptor

// TODO: ObjectAssignment: roleSpecCertIdentifier

export class RoleSpecCertIdentifier {
    constructor (
        readonly roleName: GeneralName,
        readonly roleCertIssuer: GeneralName,
        readonly roleCertSerialNumber: CertificateSerialNumber | undefined,
        readonly roleCertLocator: GeneralNames | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_RoleSpecCertIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("roleName", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("roleCertIssuer", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("roleCertSerialNumber", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("roleCertLocator", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_RoleSpecCertIdentifier: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_RoleSpecCertIdentifier: __utils.ComponentSpec[] = [
    
];
export const _decode_RoleSpecCertIdentifier = function (el: asn1.ASN1Element): RoleSpecCertIdentifier {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let roleName!: GeneralName;
    let roleCertIssuer!: GeneralName;
    let roleCertSerialNumber: asn1.OPTIONAL<CertificateSerialNumber>;
    let roleCertLocator: asn1.OPTIONAL<GeneralNames>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "roleName": (_el: asn1.ASN1Element): void => { roleName = __utils._decode_implicit<GeneralName>(() => _decode_GeneralName)(_el); },
        "roleCertIssuer": (_el: asn1.ASN1Element): void => { roleCertIssuer = __utils._decode_implicit<GeneralName>(() => _decode_GeneralName)(_el); },
        "roleCertSerialNumber": (_el: asn1.ASN1Element): void => { roleCertSerialNumber = __utils._decode_implicit<CertificateSerialNumber>(() => _decode_CertificateSerialNumber)(_el); },
        "roleCertLocator": (_el: asn1.ASN1Element): void => { roleCertLocator = __utils._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RoleSpecCertIdentifier,
        _extension_additions_list_spec_for_RoleSpecCertIdentifier,
        _root_component_type_list_2_spec_for_RoleSpecCertIdentifier,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RoleSpecCertIdentifier( /* SEQUENCE_CONSTRUCTOR_CALL */
        roleName,
        roleCertIssuer,
        roleCertSerialNumber,
        roleCertLocator,
        _unrecognizedExtensionsList
    );
};
export const _encode_RoleSpecCertIdentifier = function (value: RoleSpecCertIdentifier, elGetter: __utils.ASN1Encoder<RoleSpecCertIdentifier>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_GeneralName, __utils.BER)(value.roleName, __utils.BER),
            __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_GeneralName, __utils.BER)(value.roleCertIssuer, __utils.BER),
            (value.roleCertSerialNumber ? __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => _encode_CertificateSerialNumber, __utils.BER)(value.roleCertSerialNumber, __utils.BER) : undefined),
            (value.roleCertLocator ? __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => _encode_GeneralNames, __utils.BER)(value.roleCertLocator, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type RoleSpecCertIdentifierSyntax = RoleSpecCertIdentifier[]; // SequenceOfType
export const _decode_RoleSpecCertIdentifierSyntax = __utils._decodeSequenceOf<RoleSpecCertIdentifier>(() => _decode_RoleSpecCertIdentifier);
export const _encode_RoleSpecCertIdentifierSyntax = __utils._encodeSequenceOf<RoleSpecCertIdentifier>(() => _encode_RoleSpecCertIdentifier, __utils.BER);


// TODO: ObjectAssignment: roleSpecCertIdMatch

// TODO: ObjectAssignment: basicAttConstraints

export class BasicAttConstraintsSyntax {
    constructor (
        readonly authority: asn1.BOOLEAN | undefined,
        readonly pathLenConstraint: asn1.INTEGER | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_BasicAttConstraintsSyntax: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("authority", true, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined),
    new __utils.ComponentSpec("pathLenConstraint", true, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined)
];
const _root_component_type_list_2_spec_for_BasicAttConstraintsSyntax: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_BasicAttConstraintsSyntax: __utils.ComponentSpec[] = [
    
];
export const _decode_BasicAttConstraintsSyntax = function (el: asn1.ASN1Element): BasicAttConstraintsSyntax {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let authority: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let pathLenConstraint: asn1.OPTIONAL<asn1.INTEGER>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "authority": (_el: asn1.ASN1Element): void => { authority = __utils._decodeBoolean(_el); },
        "pathLenConstraint": (_el: asn1.ASN1Element): void => { pathLenConstraint = __utils._decodeInteger(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BasicAttConstraintsSyntax,
        _extension_additions_list_spec_for_BasicAttConstraintsSyntax,
        _root_component_type_list_2_spec_for_BasicAttConstraintsSyntax,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new BasicAttConstraintsSyntax( /* SEQUENCE_CONSTRUCTOR_CALL */
        authority,
        pathLenConstraint,
        _unrecognizedExtensionsList
    );
};
export const _encode_BasicAttConstraintsSyntax = function (value: BasicAttConstraintsSyntax, elGetter: __utils.ASN1Encoder<BasicAttConstraintsSyntax>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            ((value.authority !== undefined && value.authority !== false) /* TODO: Review this condition. */ ? __utils._encodeBoolean(value.authority, __utils.BER) : undefined),
            (value.pathLenConstraint ? __utils._encodeInteger(value.pathLenConstraint, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: basicAttConstraintsMatch

// TODO: ObjectAssignment: delegatedNameConstraints

// TODO: ObjectAssignment: delegatedNameConstraintsMatch

// TODO: ObjectAssignment: acceptableCertPolicies

export type CertPolicyId = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_CertPolicyId = __utils._decodeObjectIdentifier;
export const _encode_CertPolicyId = __utils._encodeObjectIdentifier;


export type AcceptableCertPoliciesSyntax = CertPolicyId[]; // SequenceOfType
export const _decode_AcceptableCertPoliciesSyntax = __utils._decodeSequenceOf<CertPolicyId>(() => _decode_CertPolicyId);
export const _encode_AcceptableCertPoliciesSyntax = __utils._encodeSequenceOf<CertPolicyId>(() => _encode_CertPolicyId, __utils.BER);


// TODO: ObjectAssignment: acceptableCertPoliciesMatch

// TODO: ObjectAssignment: authorityAttributeIdentifier

export type AuthAttId = IssuerSerial; // DefinedType
export const _decode_AuthAttId = _decode_IssuerSerial;
export const _encode_AuthAttId = _encode_IssuerSerial;


export type AuthorityAttributeIdentifierSyntax = AuthAttId[]; // SequenceOfType
export const _decode_AuthorityAttributeIdentifierSyntax = __utils._decodeSequenceOf<AuthAttId>(() => _decode_AuthAttId);
export const _encode_AuthorityAttributeIdentifierSyntax = __utils._encodeSequenceOf<AuthAttId>(() => _encode_AuthAttId, __utils.BER);


// TODO: ObjectAssignment: authAttIdMatch

// TODO: ObjectAssignment: indirectIssuer

// TODO: ObjectAssignment: issuedOnBehalfOf

// TODO: ObjectAssignment: noAssertion

// TODO: ObjectAssignment: allowedAttributeAssignments

export type AllowedAttributeAssignments_Item_attributes_Item =
    { attributeType: AttributeType }
    | { attributeTypeandValues: Attribute }
    | asn1.ASN1Element;
export const _decode_AllowedAttributeAssignments_Item_attributes_Item = __utils._decode_extensible_choice<AllowedAttributeAssignments_Item_attributes_Item>({
    "CONTEXT 0": [ "attributeType", __utils._decode_implicit<AttributeType>(() => _decode_AttributeType) ],
    "CONTEXT 1": [ "attributeTypeandValues", __utils._decode_implicit<Attribute>(() => _decode_Attribute) ]
});
export const _encode_AllowedAttributeAssignments_Item_attributes_Item = __utils._encode_choice<AllowedAttributeAssignments_Item_attributes_Item>({
    "attributeType": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_AttributeType, __utils.BER),
    "attributeTypeandValues": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_Attribute, __utils.BER),
}, __utils.BER);


export class AllowedAttributeAssignments_Item {
    constructor (
        readonly attributes: AllowedAttributeAssignments_Item_attributes_Item[],
        readonly holderDomain: GeneralName,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_AllowedAttributeAssignments_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("attributes", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("holderDomain", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_AllowedAttributeAssignments_Item: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_AllowedAttributeAssignments_Item: __utils.ComponentSpec[] = [
    
];
export const _decode_AllowedAttributeAssignments_Item = function (el: asn1.ASN1Element): AllowedAttributeAssignments_Item {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("AllowedAttributeAssignments-Item contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "attributes";
    sequence[1].name = "holderDomain";
    let attributes!: AllowedAttributeAssignments_Item_attributes_Item[];
    let holderDomain!: GeneralName;
    attributes = __utils._decode_implicit<AllowedAttributeAssignments_Item_attributes_Item[]>(() => __utils._decodeSetOf<AllowedAttributeAssignments_Item_attributes_Item>(() => _decode_AllowedAttributeAssignments_Item_attributes_Item))(sequence[0]);
    holderDomain = __utils._decode_implicit<GeneralName>(() => _decode_GeneralName)(sequence[1]);
    // TODO: Validate values.
    return new AllowedAttributeAssignments_Item(
        attributes,
        holderDomain,
        sequence.slice(2),
    );
};
export const _encode_AllowedAttributeAssignments_Item = function (value: AllowedAttributeAssignments_Item, elGetter: __utils.ASN1Encoder<AllowedAttributeAssignments_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeSetOf<AllowedAttributeAssignments_Item_attributes_Item>(() => _encode_AllowedAttributeAssignments_Item_attributes_Item, __utils.BER), __utils.BER)(value.attributes, __utils.BER),
            __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_GeneralName, __utils.BER)(value.holderDomain, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AllowedAttributeAssignments = AllowedAttributeAssignments_Item[]; // SetOfType
export const _decode_AllowedAttributeAssignments = __utils._decodeSetOf<AllowedAttributeAssignments_Item>(() => _decode_AllowedAttributeAssignments_Item);
export const _encode_AllowedAttributeAssignments = __utils._encodeSetOf<AllowedAttributeAssignments_Item>(() => _encode_AllowedAttributeAssignments_Item, __utils.BER);


// TODO: ObjectAssignment: attributeMappings

export class AttributeMappings_Item_typeMappings {
    constructor (
        readonly local: AttributeType,
        readonly remote: AttributeType,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_AttributeMappings_Item_typeMappings: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("local", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("remote", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_AttributeMappings_Item_typeMappings: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_AttributeMappings_Item_typeMappings: __utils.ComponentSpec[] = [
    
];
export const _decode_AttributeMappings_Item_typeMappings = function (el: asn1.ASN1Element): AttributeMappings_Item_typeMappings {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("AttributeMappings-Item-typeMappings contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "local";
    sequence[1].name = "remote";
    let local!: AttributeType;
    let remote!: AttributeType;
    local = __utils._decode_implicit<AttributeType>(() => _decode_AttributeType)(sequence[0]);
    remote = __utils._decode_implicit<AttributeType>(() => _decode_AttributeType)(sequence[1]);
    // TODO: Validate values.
    return new AttributeMappings_Item_typeMappings(
        local,
        remote,
        sequence.slice(2),
    );
};
export const _encode_AttributeMappings_Item_typeMappings = function (value: AttributeMappings_Item_typeMappings, elGetter: __utils.ASN1Encoder<AttributeMappings_Item_typeMappings>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_AttributeType, __utils.BER)(value.local, __utils.BER),
            __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_AttributeType, __utils.BER)(value.remote, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class AttributeMappings_Item_typeValueMappings {
    constructor (
        readonly local: AttributeTypeAndValue,
        readonly remote: AttributeTypeAndValue,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_AttributeMappings_Item_typeValueMappings: __utils.ComponentSpec[] = [
    /* FIXME: local COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: remote COULD_NOT_RESOLVE_TYPE_DEF */
];
const _root_component_type_list_2_spec_for_AttributeMappings_Item_typeValueMappings: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_AttributeMappings_Item_typeValueMappings: __utils.ComponentSpec[] = [
    
];
export const _decode_AttributeMappings_Item_typeValueMappings = function (el: asn1.ASN1Element): AttributeMappings_Item_typeValueMappings {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("AttributeMappings-Item-typeValueMappings contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "local";
    sequence[1].name = "remote";
    let local!: AttributeTypeAndValue;
    let remote!: AttributeTypeAndValue;
    local = __utils._decode_implicit<AttributeTypeAndValue>(() => _decode_AttributeTypeAndValue)(sequence[0]);
    remote = __utils._decode_implicit<AttributeTypeAndValue>(() => _decode_AttributeTypeAndValue)(sequence[1]);
    // TODO: Validate values.
    return new AttributeMappings_Item_typeValueMappings(
        local,
        remote,
        sequence.slice(2),
    );
};
export const _encode_AttributeMappings_Item_typeValueMappings = function (value: AttributeMappings_Item_typeValueMappings, elGetter: __utils.ASN1Encoder<AttributeMappings_Item_typeValueMappings>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_AttributeTypeAndValue, __utils.BER)(value.local, __utils.BER),
            __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_AttributeTypeAndValue, __utils.BER)(value.remote, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AttributeMappings_Item =
    { typeMappings: AttributeMappings_Item_typeMappings }
    | { typeValueMappings: AttributeMappings_Item_typeValueMappings };
export const _decode_AttributeMappings_Item = __utils._decode_inextensible_choice<AttributeMappings_Item>({
    "CONTEXT 0": [ "typeMappings", __utils._decode_implicit<AttributeMappings_Item_typeMappings>(() => _decode_AttributeMappings_Item_typeMappings) ],
    "CONTEXT 1": [ "typeValueMappings", __utils._decode_implicit<AttributeMappings_Item_typeValueMappings>(() => _decode_AttributeMappings_Item_typeValueMappings) ]
});
export const _encode_AttributeMappings_Item = __utils._encode_choice<AttributeMappings_Item>({
    "typeMappings": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_AttributeMappings_Item_typeMappings, __utils.BER),
    "typeValueMappings": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_AttributeMappings_Item_typeValueMappings, __utils.BER),
}, __utils.BER);


export type AttributeMappings = AttributeMappings_Item[]; // SetOfType
export const _decode_AttributeMappings = __utils._decodeSetOf<AttributeMappings_Item>(() => _decode_AttributeMappings_Item);
export const _encode_AttributeMappings = __utils._encodeSetOf<AttributeMappings_Item>(() => _encode_AttributeMappings_Item, __utils.BER);


// TODO: ObjectAssignment: holderNameConstraints

export type BaseDistance = asn1.INTEGER;
export const _decode_BaseDistance = __utils._decodeInteger;
export const _encode_BaseDistance = __utils._encodeInteger;


export class GeneralSubtree {
    constructor (
        readonly base: GeneralName,
        readonly minimum: BaseDistance | undefined,
        readonly maximum: BaseDistance | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_GeneralSubtree: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("base", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("minimum", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("maximum", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_GeneralSubtree: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_GeneralSubtree: __utils.ComponentSpec[] = [
    
];
export const _decode_GeneralSubtree = function (el: asn1.ASN1Element): GeneralSubtree {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let base!: GeneralName;
    let minimum: asn1.OPTIONAL<BaseDistance> = 0;
    let maximum: asn1.OPTIONAL<BaseDistance>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "base": (_el: asn1.ASN1Element): void => { base = _decode_GeneralName(_el); },
        "minimum": (_el: asn1.ASN1Element): void => { minimum = __utils._decode_implicit<BaseDistance>(() => _decode_BaseDistance)(_el); },
        "maximum": (_el: asn1.ASN1Element): void => { maximum = __utils._decode_implicit<BaseDistance>(() => _decode_BaseDistance)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GeneralSubtree,
        _extension_additions_list_spec_for_GeneralSubtree,
        _root_component_type_list_2_spec_for_GeneralSubtree,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GeneralSubtree( /* SEQUENCE_CONSTRUCTOR_CALL */
        base,
        minimum,
        maximum,
        _unrecognizedExtensionsList
    );
};
export const _encode_GeneralSubtree = function (value: GeneralSubtree, elGetter: __utils.ASN1Encoder<GeneralSubtree>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_GeneralName(value.base, __utils.BER),
            ((value.minimum !== undefined && value.minimum !== 0) /* TODO: Review this condition. */ ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_BaseDistance, __utils.BER)(value.minimum, __utils.BER) : undefined),
            (value.maximum ? __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_BaseDistance, __utils.BER)(value.maximum, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type GeneralSubtrees = GeneralSubtree[]; // SequenceOfType
export const _decode_GeneralSubtrees = __utils._decodeSequenceOf<GeneralSubtree>(() => _decode_GeneralSubtree);
export const _encode_GeneralSubtrees = __utils._encodeSequenceOf<GeneralSubtree>(() => _encode_GeneralSubtree, __utils.BER);


export class HolderNameConstraintsSyntax {
    constructor (
        readonly permittedSubtrees: GeneralSubtrees,
        readonly excludedSubtrees: GeneralSubtrees | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_HolderNameConstraintsSyntax: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("permittedSubtrees", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("excludedSubtrees", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_HolderNameConstraintsSyntax: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_HolderNameConstraintsSyntax: __utils.ComponentSpec[] = [
    
];
export const _decode_HolderNameConstraintsSyntax = function (el: asn1.ASN1Element): HolderNameConstraintsSyntax {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let permittedSubtrees!: GeneralSubtrees;
    let excludedSubtrees: asn1.OPTIONAL<GeneralSubtrees>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "permittedSubtrees": (_el: asn1.ASN1Element): void => { permittedSubtrees = __utils._decode_implicit<GeneralSubtrees>(() => _decode_GeneralSubtrees)(_el); },
        "excludedSubtrees": (_el: asn1.ASN1Element): void => { excludedSubtrees = __utils._decode_implicit<GeneralSubtrees>(() => _decode_GeneralSubtrees)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_HolderNameConstraintsSyntax,
        _extension_additions_list_spec_for_HolderNameConstraintsSyntax,
        _root_component_type_list_2_spec_for_HolderNameConstraintsSyntax,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new HolderNameConstraintsSyntax( /* SEQUENCE_CONSTRUCTOR_CALL */
        permittedSubtrees,
        excludedSubtrees,
        _unrecognizedExtensionsList
    );
};
export const _encode_HolderNameConstraintsSyntax = function (value: HolderNameConstraintsSyntax, elGetter: __utils.ASN1Encoder<HolderNameConstraintsSyntax>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_GeneralSubtrees, __utils.BER)(value.permittedSubtrees, __utils.BER),
            (value.excludedSubtrees ? __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_GeneralSubtrees, __utils.BER)(value.excludedSubtrees, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: pmiUser

// TODO: ObjectAssignment: pmiAA

// TODO: ObjectAssignment: pmiSOA

// TODO: ObjectAssignment: attCertCRLDistributionPt

// TODO: ObjectAssignment: pmiDelegationPath

// TODO: ObjectAssignment: privilegePolicy

// TODO: ObjectAssignment: protectedPrivilegePolicy

// TODO: ObjectAssignment: attributeCertificateAttribute

// TODO: ObjectAssignment: aACertificate

// TODO: ObjectAssignment: attributeDescriptorCertificate

// TODO: ObjectAssignment: attributeCertificateRevocationList

// TODO: ObjectAssignment: eeAttrCertificateRevocationList

// TODO: ObjectAssignment: attributeAuthorityRevocationList

// TODO: ObjectAssignment: delegationPath

export type AttCertPath = AttributeCertificate[]; // SequenceOfType
export const _decode_AttCertPath = __utils._decodeSequenceOf<AttributeCertificate>(() => _decode_AttributeCertificate);
export const _encode_AttCertPath = __utils._encodeSequenceOf<AttributeCertificate>(() => _encode_AttributeCertificate, __utils.BER);


// TODO: ObjectAssignment: privPolicy

// TODO: ObjectAssignment: protPrivPolicy

// TODO: ObjectAssignment: xmlPrivPolicy

// TODO: ObjectAssignment: attributeCertificateExactMatch

export class AttributeCertificateExactAssertion {
    constructor (
        readonly serialNumber: CertificateSerialNumber,
        readonly issuer: AttCertIssuer,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_AttributeCertificateExactAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("serialNumber", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("issuer", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
const _root_component_type_list_2_spec_for_AttributeCertificateExactAssertion: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_AttributeCertificateExactAssertion: __utils.ComponentSpec[] = [
    
];
export const _decode_AttributeCertificateExactAssertion = function (el: asn1.ASN1Element): AttributeCertificateExactAssertion {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("AttributeCertificateExactAssertion contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "serialNumber";
    sequence[1].name = "issuer";
    let serialNumber!: CertificateSerialNumber;
    let issuer!: AttCertIssuer;
    serialNumber = _decode_CertificateSerialNumber(sequence[0]);
    issuer = _decode_AttCertIssuer(sequence[1]);
    // TODO: Validate values.
    return new AttributeCertificateExactAssertion(
        serialNumber,
        issuer,
        sequence.slice(2),
    );
};
export const _encode_AttributeCertificateExactAssertion = function (value: AttributeCertificateExactAssertion, elGetter: __utils.ASN1Encoder<AttributeCertificateExactAssertion>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_CertificateSerialNumber(value.serialNumber, __utils.BER),
            _encode_AttCertIssuer(value.issuer, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: attributeCertificateMatch

export type AttributeCertificateAssertion_holder =
    { baseCertificateID: IssuerSerial }
    | { holderName: GeneralNames }
    | asn1.ASN1Element;
export const _decode_AttributeCertificateAssertion_holder = __utils._decode_extensible_choice<AttributeCertificateAssertion_holder>({
    "CONTEXT 0": [ "baseCertificateID", __utils._decode_implicit<IssuerSerial>(() => _decode_IssuerSerial) ],
    "CONTEXT 1": [ "holderName", __utils._decode_implicit<GeneralNames>(() => _decode_GeneralNames) ]
});
export const _encode_AttributeCertificateAssertion_holder = __utils._encode_choice<AttributeCertificateAssertion_holder>({
    "baseCertificateID": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_IssuerSerial, __utils.BER),
    "holderName": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_GeneralNames, __utils.BER),
}, __utils.BER);


export class AttributeCertificateAssertion {
    constructor (
        readonly holder: AttributeCertificateAssertion_holder | undefined,
        readonly issuer: GeneralNames | undefined,
        readonly attCertValidity: asn1.GeneralizedTime | undefined,
        readonly attType: AttributeType[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_AttributeCertificateAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("holder", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("issuer", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("attCertValidity", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("attType", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_AttributeCertificateAssertion: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_AttributeCertificateAssertion: __utils.ComponentSpec[] = [
    
];
export const _decode_AttributeCertificateAssertion = function (el: asn1.ASN1Element): AttributeCertificateAssertion {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let holder: asn1.OPTIONAL<AttributeCertificateAssertion_holder>;
    let issuer: asn1.OPTIONAL<GeneralNames>;
    let attCertValidity: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let attType: asn1.OPTIONAL<AttributeType[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "holder": (_el: asn1.ASN1Element): void => { holder = __utils._decode_implicit<AttributeCertificateAssertion_holder>(() => _decode_AttributeCertificateAssertion_holder)(_el); },
        "issuer": (_el: asn1.ASN1Element): void => { issuer = __utils._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); },
        "attCertValidity": (_el: asn1.ASN1Element): void => { attCertValidity = __utils._decode_implicit<asn1.GeneralizedTime>(() => __utils._decodeGeneralizedTime)(_el); },
        "attType": (_el: asn1.ASN1Element): void => { attType = __utils._decode_implicit<AttributeType[]>(() => __utils._decodeSetOf<AttributeType>(() => _decode_AttributeType))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeCertificateAssertion,
        _extension_additions_list_spec_for_AttributeCertificateAssertion,
        _root_component_type_list_2_spec_for_AttributeCertificateAssertion,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AttributeCertificateAssertion( /* SEQUENCE_CONSTRUCTOR_CALL */
        holder,
        issuer,
        attCertValidity,
        attType,
        _unrecognizedExtensionsList
    );
};
export const _encode_AttributeCertificateAssertion = function (value: AttributeCertificateAssertion, elGetter: __utils.ASN1Encoder<AttributeCertificateAssertion>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.holder ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_AttributeCertificateAssertion_holder, __utils.BER)(value.holder, __utils.BER) : undefined),
            (value.issuer ? __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_GeneralNames, __utils.BER)(value.issuer, __utils.BER) : undefined),
            (value.attCertValidity ? __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeGeneralizedTime, __utils.BER)(value.attCertValidity, __utils.BER) : undefined),
            (value.attType ? __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => __utils._encodeSetOf<AttributeType>(() => _encode_AttributeType, __utils.BER), __utils.BER)(value.attType, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: holderIssuerMatch

export class HolderIssuerAssertion {
    constructor (
        readonly holder: Holder | undefined,
        readonly issuer: AttCertIssuer | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_HolderIssuerAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("holder", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("issuer", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_HolderIssuerAssertion: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_HolderIssuerAssertion: __utils.ComponentSpec[] = [
    
];
export const _decode_HolderIssuerAssertion = function (el: asn1.ASN1Element): HolderIssuerAssertion {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let holder: asn1.OPTIONAL<Holder>;
    let issuer: asn1.OPTIONAL<AttCertIssuer>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "holder": (_el: asn1.ASN1Element): void => { holder = __utils._decode_implicit<Holder>(() => _decode_Holder)(_el); },
        "issuer": (_el: asn1.ASN1Element): void => { issuer = __utils._decode_implicit<AttCertIssuer>(() => _decode_AttCertIssuer)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_HolderIssuerAssertion,
        _extension_additions_list_spec_for_HolderIssuerAssertion,
        _root_component_type_list_2_spec_for_HolderIssuerAssertion,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new HolderIssuerAssertion( /* SEQUENCE_CONSTRUCTOR_CALL */
        holder,
        issuer,
        _unrecognizedExtensionsList
    );
};
export const _encode_HolderIssuerAssertion = function (value: HolderIssuerAssertion, elGetter: __utils.ASN1Encoder<HolderIssuerAssertion>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.holder ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_Holder, __utils.BER)(value.holder, __utils.BER) : undefined),
            (value.issuer ? __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_AttCertIssuer, __utils.BER)(value.issuer, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: delegationPathMatch

export class DelMatchSyntax {
    constructor (
        readonly firstIssuer: AttCertIssuer,
        readonly lastHolder: Holder,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_DelMatchSyntax: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("firstIssuer", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("lastHolder", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
const _root_component_type_list_2_spec_for_DelMatchSyntax: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_DelMatchSyntax: __utils.ComponentSpec[] = [
    
];
export const _decode_DelMatchSyntax = function (el: asn1.ASN1Element): DelMatchSyntax {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("DelMatchSyntax contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "firstIssuer";
    sequence[1].name = "lastHolder";
    let firstIssuer!: AttCertIssuer;
    let lastHolder!: Holder;
    firstIssuer = _decode_AttCertIssuer(sequence[0]);
    lastHolder = _decode_Holder(sequence[1]);
    // TODO: Validate values.
    return new DelMatchSyntax(
        firstIssuer,
        lastHolder,
        sequence.slice(2),
    );
};
export const _encode_DelMatchSyntax = function (value: DelMatchSyntax, elGetter: __utils.ASN1Encoder<DelMatchSyntax>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_AttCertIssuer(value.firstIssuer, __utils.BER),
            _encode_Holder(value.lastHolder, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: extensionPresenceMatch

export const id_oc_pmiUser: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    24,
], id_oc);

export const id_oc_pmiAA: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    25,
], id_oc);

export const id_oc_pmiSOA: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    26,
], id_oc);

export const id_oc_attCertCRLDistributionPts: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    27,
], id_oc);

export const id_oc_privilegePolicy: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    32,
], id_oc);

export const id_oc_pmiDelegationPath: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    33,
], id_oc);

export const id_oc_protectedPrivilegePolicy: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    34,
], id_oc);

export const id_at_attributeCertificate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    58,
], id_at);

export const id_at_attributeCertificateRevocationList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    59,
], id_at);

export const id_at_aACertificate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    61,
], id_at);

export const id_at_attributeDescriptorCertificate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    62,
], id_at);

export const id_at_attributeAuthorityRevocationList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    63,
], id_at);

export const id_at_privPolicy: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    71,
], id_at);

export const id_at_role: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    72,
], id_at);

export const id_at_delegationPath: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    73,
], id_at);

export const id_at_protPrivPolicy: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    74,
], id_at);

export const id_at_xMLPrivilegeInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    75,
], id_at);

export const id_at_xmlPrivPolicy: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    76,
], id_at);

export const id_at_permission: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    82,
], id_at);

export const id_at_eeAttrCertificateRevocationList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    102,
], id_at);

export const id_ce_authorityAttributeIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    38,
], id_ce);

export const id_ce_roleSpecCertIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    39,
], id_ce);

export const id_ce_basicAttConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    41,
], id_ce);

export const id_ce_delegatedNameConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    42,
], id_ce);

export const id_ce_timeSpecification: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    43,
], id_ce);

export const id_ce_attributeDescriptor: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    48,
], id_ce);

export const id_ce_userNotice: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    49,
], id_ce);

export const id_ce_sOAIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    50,
], id_ce);

export const id_ce_acceptableCertPolicies: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    52,
], id_ce);

export const id_ce_targetingInformation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    55,
], id_ce);

export const id_ce_noRevAvail: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    56,
], id_ce);

export const id_ce_acceptablePrivilegePolicies: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    57,
], id_ce);

export const id_ce_indirectIssuer: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    61,
], id_ce);

export const id_ce_noAssertion: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    62,
], id_ce);

export const id_ce_issuedOnBehalfOf: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    64,
], id_ce);

export const id_ce_singleUse: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    65,
], id_ce);

export const id_ce_groupAC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    66,
], id_ce);

export const id_ce_allowedAttributeAssignments: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    67,
], id_ce);

export const id_ce_attributeMappings: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    68,
], id_ce);

export const id_ce_holderNameConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    69,
], id_ce);

export const id_mr_attributeCertificateMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    42,
], id_mr);

export const id_mr_attributeCertificateExactMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    45,
], id_mr);

export const id_mr_holderIssuerMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    46,
], id_mr);

export const id_mr_authAttIdMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    53,
], id_mr);

export const id_mr_roleSpecCertIdMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    54,
], id_mr);

export const id_mr_basicAttConstraintsMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    55,
], id_mr);

export const id_mr_delegatedNameConstraintsMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    56,
], id_mr);

export const id_mr_timeSpecMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    57,
], id_mr);

export const id_mr_attDescriptorMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    58,
], id_mr);

export const id_mr_acceptableCertPoliciesMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    59,
], id_mr);

export const id_mr_delegationPathMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    61,
], id_mr);

export const id_mr_sOAIdentifierMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    66,
], id_mr);

export const id_mr_extensionPresenceMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    67,
], id_mr);

export const id_mr_dualStringMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    69,
], id_mr);

