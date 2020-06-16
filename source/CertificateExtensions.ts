/*
    BEGIN_MODULE CertificateExtensions
    OID: joint-iso-itu-t.ds.module.certificateExtensions.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    AvlSerialNumber,
    CertificateSerialNumber,
    Time,
    _decode_AvlSerialNumber,
    _decode_CertificateSerialNumber,
    _decode_Time,
    _encode_AvlSerialNumber,
    _encode_CertificateSerialNumber,
    _encode_Time,
} from "./AuthenticationFramework";
import {
    Attribute,
    Name,
    RelativeDistinguishedName,
    _decode_Attribute,
    _decode_Name,
    _decode_RelativeDistinguishedName,
    _encode_Attribute,
    _encode_Name,
    _encode_RelativeDistinguishedName,
} from "./InformationFramework";
import {
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress,
} from "./PkiPmiExternalDataTypes";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
import { id_ce, id_ldx, id_mr } from "./UsefulDefinitions";
import * as __utils from "./__utils";
export {
    AlgorithmIdentifier,
    AvlSerialNumber,
    CertificateList,
    CertificateSerialNumber,
    PolicyID,
    Time,
    _decode_AlgorithmIdentifier,
    _decode_AvlSerialNumber,
    _decode_CertificateList,
    _decode_CertificateSerialNumber,
    _decode_PolicyID,
    _decode_Time,
    _encode_AlgorithmIdentifier,
    _encode_AvlSerialNumber,
    _encode_CertificateList,
    _encode_CertificateSerialNumber,
    _encode_PolicyID,
    _encode_Time,
} from "./AuthenticationFramework";
export {
    Attribute,
    Name,
    RelativeDistinguishedName,
    _decode_Attribute,
    _decode_Name,
    _decode_RelativeDistinguishedName,
    _encode_Attribute,
    _encode_Name,
    _encode_RelativeDistinguishedName,
} from "./InformationFramework";
export {
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress,
} from "./PkiPmiExternalDataTypes";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
export {
    authenticationFramework,
    id_at,
    id_ce,
    id_ldx,
    id_mr,
    informationFramework,
    pkiPmiExternalDataTypes,
    selectedAttributeTypes,
} from "./UsefulDefinitions";

// TODO: ObjectAssignment: authorityKeyIdentifier

// TODO: ObjectAssignment: subjectKeyIdentifier

// TODO: ObjectAssignment: keyUsage

// TODO: ObjectAssignment: extKeyUsage

export type KeyPurposeId = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_KeyPurposeId: __utils.ASN1Decoder<
    KeyPurposeId
> | null = null;
let _cached_encoder_for_KeyPurposeId: __utils.ASN1Encoder<
    KeyPurposeId
> | null = null;
export function _decode_KeyPurposeId(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyPurposeId) {
        _cached_decoder_for_KeyPurposeId = __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_KeyPurposeId(el);
}
export function _encode_KeyPurposeId(
    value: KeyPurposeId,
    elGetter: __utils.ASN1Encoder<KeyPurposeId>
) {
    if (!_cached_encoder_for_KeyPurposeId) {
        _cached_encoder_for_KeyPurposeId = __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_KeyPurposeId(value, elGetter);
}

// TODO: ObjectAssignment: privateKeyUsagePeriod

export class PrivateKeyUsagePeriod {
    constructor(
        readonly notBefore: asn1.GeneralizedTime | undefined,
        readonly notAfter: asn1.GeneralizedTime | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PrivateKeyUsagePeriod: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "notBefore",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notAfter",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PrivateKeyUsagePeriod: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PrivateKeyUsagePeriod: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PrivateKeyUsagePeriod: __utils.ASN1Decoder<
    PrivateKeyUsagePeriod
> | null = null;
let _cached_encoder_for_PrivateKeyUsagePeriod: __utils.ASN1Encoder<
    PrivateKeyUsagePeriod
> | null = null;
export function _decode_PrivateKeyUsagePeriod(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PrivateKeyUsagePeriod) {
        _cached_decoder_for_PrivateKeyUsagePeriod = function (
            el: asn1.ASN1Element
        ): PrivateKeyUsagePeriod {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let notBefore: asn1.OPTIONAL<asn1.GeneralizedTime>;
            let notAfter: asn1.OPTIONAL<asn1.GeneralizedTime>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                notBefore: (_el: asn1.ASN1Element): void => {
                    notBefore = __utils._decode_implicit<asn1.GeneralizedTime>(
                        () => __utils._decodeGeneralizedTime
                    )(_el);
                },
                notAfter: (_el: asn1.ASN1Element): void => {
                    notAfter = __utils._decode_implicit<asn1.GeneralizedTime>(
                        () => __utils._decodeGeneralizedTime
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PrivateKeyUsagePeriod,
                _extension_additions_list_spec_for_PrivateKeyUsagePeriod,
                _root_component_type_list_2_spec_for_PrivateKeyUsagePeriod,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PrivateKeyUsagePeriod(
                /* SEQUENCE_CONSTRUCTOR_CALL */ notBefore,
                notAfter,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PrivateKeyUsagePeriod(el);
}
export function _encode_PrivateKeyUsagePeriod(
    value: PrivateKeyUsagePeriod,
    elGetter: __utils.ASN1Encoder<PrivateKeyUsagePeriod>
) {
    if (!_cached_encoder_for_PrivateKeyUsagePeriod) {
        _cached_encoder_for_PrivateKeyUsagePeriod = function (
            value: PrivateKeyUsagePeriod,
            elGetter: __utils.ASN1Encoder<PrivateKeyUsagePeriod>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.notBefore === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => __utils._encodeGeneralizedTime,
                                      __utils.BER
                                  )(value.notBefore, __utils.BER),
                            /* IF_ABSENT  */ value.notAfter === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => __utils._encodeGeneralizedTime,
                                      __utils.BER
                                  )(value.notAfter, __utils.BER),
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
    return _cached_encoder_for_PrivateKeyUsagePeriod(value, elGetter);
}

// TODO: ObjectAssignment: certificatePolicies

export type CertPolicyId = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_CertPolicyId: __utils.ASN1Decoder<
    CertPolicyId
> | null = null;
let _cached_encoder_for_CertPolicyId: __utils.ASN1Encoder<
    CertPolicyId
> | null = null;
export function _decode_CertPolicyId(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertPolicyId) {
        _cached_decoder_for_CertPolicyId = __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_CertPolicyId(el);
}
export function _encode_CertPolicyId(
    value: CertPolicyId,
    elGetter: __utils.ASN1Encoder<CertPolicyId>
) {
    if (!_cached_encoder_for_CertPolicyId) {
        _cached_encoder_for_CertPolicyId = __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_CertPolicyId(value, elGetter);
}

export class PolicyQualifierInfo {
    constructor(
        readonly policyQualifierId: asn1.OBJECT_IDENTIFIER,
        readonly qualifier: asn1.ASN1Element | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PolicyQualifierInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "policyQualifierId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "qualifier",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PolicyQualifierInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PolicyQualifierInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PolicyQualifierInfo: __utils.ASN1Decoder<
    PolicyQualifierInfo
> | null = null;
let _cached_encoder_for_PolicyQualifierInfo: __utils.ASN1Encoder<
    PolicyQualifierInfo
> | null = null;
export function _decode_PolicyQualifierInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PolicyQualifierInfo) {
        _cached_decoder_for_PolicyQualifierInfo = function (
            el: asn1.ASN1Element
        ): PolicyQualifierInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let policyQualifierId!: asn1.OBJECT_IDENTIFIER;
            let qualifier: asn1.OPTIONAL<asn1.ASN1Element>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                policyQualifierId: (_el: asn1.ASN1Element): void => {
                    policyQualifierId = __utils._decodeObjectIdentifier(_el);
                },
                qualifier: (_el: asn1.ASN1Element): void => {
                    qualifier = __utils._decodeAny(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PolicyQualifierInfo,
                _extension_additions_list_spec_for_PolicyQualifierInfo,
                _root_component_type_list_2_spec_for_PolicyQualifierInfo,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PolicyQualifierInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ policyQualifierId,
                qualifier,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PolicyQualifierInfo(el);
}
export function _encode_PolicyQualifierInfo(
    value: PolicyQualifierInfo,
    elGetter: __utils.ASN1Encoder<PolicyQualifierInfo>
) {
    if (!_cached_encoder_for_PolicyQualifierInfo) {
        _cached_encoder_for_PolicyQualifierInfo = function (
            value: PolicyQualifierInfo,
            elGetter: __utils.ASN1Encoder<PolicyQualifierInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.policyQualifierId,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.qualifier === undefined
                                ? undefined
                                : __utils._encodeAny(
                                      value.qualifier,
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
    return _cached_encoder_for_PolicyQualifierInfo(value, elGetter);
}

export class PolicyInformation {
    constructor(
        readonly policyIdentifier: CertPolicyId,
        readonly policyQualifiers: PolicyQualifierInfo[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PolicyInformation: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "policyIdentifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "policyQualifiers",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PolicyInformation: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PolicyInformation: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PolicyInformation: __utils.ASN1Decoder<
    PolicyInformation
> | null = null;
let _cached_encoder_for_PolicyInformation: __utils.ASN1Encoder<
    PolicyInformation
> | null = null;
export function _decode_PolicyInformation(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PolicyInformation) {
        _cached_decoder_for_PolicyInformation = function (
            el: asn1.ASN1Element
        ): PolicyInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let policyIdentifier!: CertPolicyId;
            let policyQualifiers: asn1.OPTIONAL<PolicyQualifierInfo[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                policyIdentifier: (_el: asn1.ASN1Element): void => {
                    policyIdentifier = _decode_CertPolicyId(_el);
                },
                policyQualifiers: (_el: asn1.ASN1Element): void => {
                    policyQualifiers = __utils._decodeSequenceOf<
                        PolicyQualifierInfo
                    >(() => _decode_PolicyQualifierInfo)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PolicyInformation,
                _extension_additions_list_spec_for_PolicyInformation,
                _root_component_type_list_2_spec_for_PolicyInformation,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PolicyInformation(
                /* SEQUENCE_CONSTRUCTOR_CALL */ policyIdentifier,
                policyQualifiers,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PolicyInformation(el);
}
export function _encode_PolicyInformation(
    value: PolicyInformation,
    elGetter: __utils.ASN1Encoder<PolicyInformation>
) {
    if (!_cached_encoder_for_PolicyInformation) {
        _cached_encoder_for_PolicyInformation = function (
            value: PolicyInformation,
            elGetter: __utils.ASN1Encoder<PolicyInformation>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertPolicyId(
                                value.policyIdentifier,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.policyQualifiers ===
                            undefined
                                ? undefined
                                : __utils._encodeSequenceOf<
                                      PolicyQualifierInfo
                                  >(
                                      () => _encode_PolicyQualifierInfo,
                                      __utils.BER
                                  )(value.policyQualifiers, __utils.BER),
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
    return _cached_encoder_for_PolicyInformation(value, elGetter);
}

export type CertificatePoliciesSyntax = PolicyInformation[]; // SequenceOfType
let _cached_decoder_for_CertificatePoliciesSyntax: __utils.ASN1Decoder<
    CertificatePoliciesSyntax
> | null = null;
let _cached_encoder_for_CertificatePoliciesSyntax: __utils.ASN1Encoder<
    CertificatePoliciesSyntax
> | null = null;
export function _decode_CertificatePoliciesSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificatePoliciesSyntax) {
        _cached_decoder_for_CertificatePoliciesSyntax = __utils._decodeSequenceOf<
            PolicyInformation
        >(() => _decode_PolicyInformation);
    }
    return _cached_decoder_for_CertificatePoliciesSyntax(el);
}
export function _encode_CertificatePoliciesSyntax(
    value: CertificatePoliciesSyntax,
    elGetter: __utils.ASN1Encoder<CertificatePoliciesSyntax>
) {
    if (!_cached_encoder_for_CertificatePoliciesSyntax) {
        _cached_encoder_for_CertificatePoliciesSyntax = __utils._encodeSequenceOf<
            PolicyInformation
        >(() => _encode_PolicyInformation, __utils.BER);
    }
    return _cached_encoder_for_CertificatePoliciesSyntax(value, elGetter);
}

// TODO: ObjectSetAssignment: SupportedPolicyQualifiers

// TODO: ObjectClassAssignment: CERT-POLICY-QUALIFIER

// TODO: ObjectAssignment: policyMappings

export class PolicyMappingsSyntax_Item {
    constructor(
        readonly issuerDomainPolicy: CertPolicyId,
        readonly subjectDomainPolicy: CertPolicyId,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PolicyMappingsSyntax_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "issuerDomainPolicy",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subjectDomainPolicy",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PolicyMappingsSyntax_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PolicyMappingsSyntax_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PolicyMappingsSyntax_Item: __utils.ASN1Decoder<
    PolicyMappingsSyntax_Item
> | null = null;
let _cached_encoder_for_PolicyMappingsSyntax_Item: __utils.ASN1Encoder<
    PolicyMappingsSyntax_Item
> | null = null;
export function _decode_PolicyMappingsSyntax_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PolicyMappingsSyntax_Item) {
        _cached_decoder_for_PolicyMappingsSyntax_Item = function (
            el: asn1.ASN1Element
        ): PolicyMappingsSyntax_Item {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "PolicyMappingsSyntax-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "issuerDomainPolicy";
            sequence[1].name = "subjectDomainPolicy";
            let issuerDomainPolicy!: CertPolicyId;
            let subjectDomainPolicy!: CertPolicyId;
            issuerDomainPolicy = _decode_CertPolicyId(sequence[0]);
            subjectDomainPolicy = _decode_CertPolicyId(sequence[1]);
            // TODO: Validate values.
            return new PolicyMappingsSyntax_Item(
                issuerDomainPolicy,
                subjectDomainPolicy,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_PolicyMappingsSyntax_Item(el);
}
export function _encode_PolicyMappingsSyntax_Item(
    value: PolicyMappingsSyntax_Item,
    elGetter: __utils.ASN1Encoder<PolicyMappingsSyntax_Item>
) {
    if (!_cached_encoder_for_PolicyMappingsSyntax_Item) {
        _cached_encoder_for_PolicyMappingsSyntax_Item = function (
            value: PolicyMappingsSyntax_Item,
            elGetter: __utils.ASN1Encoder<PolicyMappingsSyntax_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertPolicyId(
                                value.issuerDomainPolicy,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertPolicyId(
                                value.subjectDomainPolicy,
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
    return _cached_encoder_for_PolicyMappingsSyntax_Item(value, elGetter);
}

export type PolicyMappingsSyntax = PolicyMappingsSyntax_Item[]; // SequenceOfType
let _cached_decoder_for_PolicyMappingsSyntax: __utils.ASN1Decoder<
    PolicyMappingsSyntax
> | null = null;
let _cached_encoder_for_PolicyMappingsSyntax: __utils.ASN1Encoder<
    PolicyMappingsSyntax
> | null = null;
export function _decode_PolicyMappingsSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PolicyMappingsSyntax) {
        _cached_decoder_for_PolicyMappingsSyntax = __utils._decodeSequenceOf<
            PolicyMappingsSyntax_Item
        >(() => _decode_PolicyMappingsSyntax_Item);
    }
    return _cached_decoder_for_PolicyMappingsSyntax(el);
}
export function _encode_PolicyMappingsSyntax(
    value: PolicyMappingsSyntax,
    elGetter: __utils.ASN1Encoder<PolicyMappingsSyntax>
) {
    if (!_cached_encoder_for_PolicyMappingsSyntax) {
        _cached_encoder_for_PolicyMappingsSyntax = __utils._encodeSequenceOf<
            PolicyMappingsSyntax_Item
        >(() => _encode_PolicyMappingsSyntax_Item, __utils.BER);
    }
    return _cached_encoder_for_PolicyMappingsSyntax(value, elGetter);
}

// TODO: ObjectAssignment: authorizationValidation

export class AvlId {
    constructor(
        readonly issuer: Name,
        readonly serialNumber: AvlSerialNumber | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AvlId: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "issuer",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serialNumber",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AvlId: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AvlId: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AvlId: __utils.ASN1Decoder<AvlId> | null = null;
let _cached_encoder_for_AvlId: __utils.ASN1Encoder<AvlId> | null = null;
export function _decode_AvlId(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AvlId) {
        _cached_decoder_for_AvlId = function (el: asn1.ASN1Element): AvlId {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuer!: Name;
            let serialNumber: asn1.OPTIONAL<AvlSerialNumber>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                issuer: (_el: asn1.ASN1Element): void => {
                    issuer = _decode_Name(_el);
                },
                serialNumber: (_el: asn1.ASN1Element): void => {
                    serialNumber = _decode_AvlSerialNumber(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AvlId,
                _extension_additions_list_spec_for_AvlId,
                _root_component_type_list_2_spec_for_AvlId,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AvlId(
                /* SEQUENCE_CONSTRUCTOR_CALL */ issuer,
                serialNumber,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AvlId(el);
}
export function _encode_AvlId(
    value: AvlId,
    elGetter: __utils.ASN1Encoder<AvlId>
) {
    if (!_cached_encoder_for_AvlId) {
        _cached_encoder_for_AvlId = function (
            value: AvlId,
            elGetter: __utils.ASN1Encoder<AvlId>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(
                                value.issuer,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.serialNumber === undefined
                                ? undefined
                                : _encode_AvlSerialNumber(
                                      value.serialNumber,
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
    return _cached_encoder_for_AvlId(value, elGetter);
}

// TODO: ObjectAssignment: subjectAltName

// TODO: ObjectAssignment: issuerAltName

// TODO: ObjectAssignment: subjectDirectoryAttributes

export type AttributesSyntax = Attribute[]; // SequenceOfType
let _cached_decoder_for_AttributesSyntax: __utils.ASN1Decoder<
    AttributesSyntax
> | null = null;
let _cached_encoder_for_AttributesSyntax: __utils.ASN1Encoder<
    AttributesSyntax
> | null = null;
export function _decode_AttributesSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributesSyntax) {
        _cached_decoder_for_AttributesSyntax = __utils._decodeSequenceOf<
            Attribute
        >(() => _decode_Attribute);
    }
    return _cached_decoder_for_AttributesSyntax(el);
}
export function _encode_AttributesSyntax(
    value: AttributesSyntax,
    elGetter: __utils.ASN1Encoder<AttributesSyntax>
) {
    if (!_cached_encoder_for_AttributesSyntax) {
        _cached_encoder_for_AttributesSyntax = __utils._encodeSequenceOf<
            Attribute
        >(() => _encode_Attribute, __utils.BER);
    }
    return _cached_encoder_for_AttributesSyntax(value, elGetter);
}

// TODO: ObjectAssignment: basicConstraints

export class BasicConstraintsSyntax {
    constructor(
        readonly cA: asn1.BOOLEAN | undefined,
        readonly pathLenConstraint: asn1.INTEGER | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_cA() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_BasicConstraintsSyntax: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "cA",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pathLenConstraint",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_BasicConstraintsSyntax: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_BasicConstraintsSyntax: __utils.ComponentSpec[] = [];
let _cached_decoder_for_BasicConstraintsSyntax: __utils.ASN1Decoder<
    BasicConstraintsSyntax
> | null = null;
let _cached_encoder_for_BasicConstraintsSyntax: __utils.ASN1Encoder<
    BasicConstraintsSyntax
> | null = null;
export function _decode_BasicConstraintsSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BasicConstraintsSyntax) {
        _cached_decoder_for_BasicConstraintsSyntax = function (
            el: asn1.ASN1Element
        ): BasicConstraintsSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let cA: asn1.OPTIONAL<asn1.BOOLEAN> =
                BasicConstraintsSyntax._default_value_for_cA;
            let pathLenConstraint: asn1.OPTIONAL<asn1.INTEGER>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                cA: (_el: asn1.ASN1Element): void => {
                    cA = __utils._decodeBoolean(_el);
                },
                pathLenConstraint: (_el: asn1.ASN1Element): void => {
                    pathLenConstraint = __utils._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BasicConstraintsSyntax,
                _extension_additions_list_spec_for_BasicConstraintsSyntax,
                _root_component_type_list_2_spec_for_BasicConstraintsSyntax,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new BasicConstraintsSyntax(
                /* SEQUENCE_CONSTRUCTOR_CALL */ cA,
                pathLenConstraint,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_BasicConstraintsSyntax(el);
}
export function _encode_BasicConstraintsSyntax(
    value: BasicConstraintsSyntax,
    elGetter: __utils.ASN1Encoder<BasicConstraintsSyntax>
) {
    if (!_cached_encoder_for_BasicConstraintsSyntax) {
        _cached_encoder_for_BasicConstraintsSyntax = function (
            value: BasicConstraintsSyntax,
            elGetter: __utils.ASN1Encoder<BasicConstraintsSyntax>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.cA === undefined ||
                            __utils.deepEq(
                                value.cA,
                                BasicConstraintsSyntax._default_value_for_cA
                            )
                                ? undefined
                                : __utils._encodeBoolean(value.cA, __utils.BER),
                            /* IF_ABSENT  */ value.pathLenConstraint ===
                            undefined
                                ? undefined
                                : __utils._encodeInteger(
                                      value.pathLenConstraint,
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
    return _cached_encoder_for_BasicConstraintsSyntax(value, elGetter);
}

// TODO: ObjectAssignment: nameConstraints

// TODO: ObjectAssignment: policyConstraints

export type SkipCerts = asn1.INTEGER;
let _cached_decoder_for_SkipCerts: __utils.ASN1Decoder<SkipCerts> | null = null;
let _cached_encoder_for_SkipCerts: __utils.ASN1Encoder<SkipCerts> | null = null;
export function _decode_SkipCerts(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SkipCerts) {
        _cached_decoder_for_SkipCerts = __utils._decodeInteger;
    }
    return _cached_decoder_for_SkipCerts(el);
}
export function _encode_SkipCerts(
    value: SkipCerts,
    elGetter: __utils.ASN1Encoder<SkipCerts>
) {
    if (!_cached_encoder_for_SkipCerts) {
        _cached_encoder_for_SkipCerts = __utils._encodeInteger;
    }
    return _cached_encoder_for_SkipCerts(value, elGetter);
}

export class PolicyConstraintsSyntax {
    constructor(
        readonly requireExplicitPolicy: SkipCerts | undefined,
        readonly inhibitPolicyMapping: SkipCerts | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PolicyConstraintsSyntax: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "requireExplicitPolicy",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "inhibitPolicyMapping",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PolicyConstraintsSyntax: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PolicyConstraintsSyntax: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PolicyConstraintsSyntax: __utils.ASN1Decoder<
    PolicyConstraintsSyntax
> | null = null;
let _cached_encoder_for_PolicyConstraintsSyntax: __utils.ASN1Encoder<
    PolicyConstraintsSyntax
> | null = null;
export function _decode_PolicyConstraintsSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PolicyConstraintsSyntax) {
        _cached_decoder_for_PolicyConstraintsSyntax = function (
            el: asn1.ASN1Element
        ): PolicyConstraintsSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let requireExplicitPolicy: asn1.OPTIONAL<SkipCerts>;
            let inhibitPolicyMapping: asn1.OPTIONAL<SkipCerts>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                requireExplicitPolicy: (_el: asn1.ASN1Element): void => {
                    requireExplicitPolicy = __utils._decode_implicit<SkipCerts>(
                        () => _decode_SkipCerts
                    )(_el);
                },
                inhibitPolicyMapping: (_el: asn1.ASN1Element): void => {
                    inhibitPolicyMapping = __utils._decode_implicit<SkipCerts>(
                        () => _decode_SkipCerts
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PolicyConstraintsSyntax,
                _extension_additions_list_spec_for_PolicyConstraintsSyntax,
                _root_component_type_list_2_spec_for_PolicyConstraintsSyntax,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PolicyConstraintsSyntax(
                /* SEQUENCE_CONSTRUCTOR_CALL */ requireExplicitPolicy,
                inhibitPolicyMapping,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PolicyConstraintsSyntax(el);
}
export function _encode_PolicyConstraintsSyntax(
    value: PolicyConstraintsSyntax,
    elGetter: __utils.ASN1Encoder<PolicyConstraintsSyntax>
) {
    if (!_cached_encoder_for_PolicyConstraintsSyntax) {
        _cached_encoder_for_PolicyConstraintsSyntax = function (
            value: PolicyConstraintsSyntax,
            elGetter: __utils.ASN1Encoder<PolicyConstraintsSyntax>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.requireExplicitPolicy ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_SkipCerts,
                                      __utils.BER
                                  )(value.requireExplicitPolicy, __utils.BER),
                            /* IF_ABSENT  */ value.inhibitPolicyMapping ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_SkipCerts,
                                      __utils.BER
                                  )(value.inhibitPolicyMapping, __utils.BER),
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
    return _cached_encoder_for_PolicyConstraintsSyntax(value, elGetter);
}

// TODO: ObjectAssignment: inhibitAnyPolicy

// TODO: ObjectAssignment: cRLNumber

// TODO: ObjectAssignment: crlScope

// TODO: ObjectAssignment: statusReferrals

// TODO: ObjectClassAssignment: OTHER-NAME

export class EDIPartyName {
    constructor(
        readonly nameAssigner: UnboundedDirectoryString | undefined,
        readonly partyName: UnboundedDirectoryString,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_EDIPartyName: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "nameAssigner",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "partyName",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EDIPartyName: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EDIPartyName: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EDIPartyName: __utils.ASN1Decoder<
    EDIPartyName
> | null = null;
let _cached_encoder_for_EDIPartyName: __utils.ASN1Encoder<
    EDIPartyName
> | null = null;
export function _decode_EDIPartyName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EDIPartyName) {
        _cached_decoder_for_EDIPartyName = function (
            el: asn1.ASN1Element
        ): EDIPartyName {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let nameAssigner: asn1.OPTIONAL<UnboundedDirectoryString>;
            let partyName!: UnboundedDirectoryString;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                nameAssigner: (_el: asn1.ASN1Element): void => {
                    nameAssigner = __utils._decode_implicit<
                        UnboundedDirectoryString
                    >(() => _decode_UnboundedDirectoryString)(_el);
                },
                partyName: (_el: asn1.ASN1Element): void => {
                    partyName = __utils._decode_implicit<
                        UnboundedDirectoryString
                    >(() => _decode_UnboundedDirectoryString)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EDIPartyName,
                _extension_additions_list_spec_for_EDIPartyName,
                _root_component_type_list_2_spec_for_EDIPartyName,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EDIPartyName(
                /* SEQUENCE_CONSTRUCTOR_CALL */ nameAssigner,
                partyName,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EDIPartyName(el);
}
export function _encode_EDIPartyName(
    value: EDIPartyName,
    elGetter: __utils.ASN1Encoder<EDIPartyName>
) {
    if (!_cached_encoder_for_EDIPartyName) {
        _cached_encoder_for_EDIPartyName = function (
            value: EDIPartyName,
            elGetter: __utils.ASN1Encoder<EDIPartyName>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.nameAssigner === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_UnboundedDirectoryString,
                                      __utils.BER
                                  )(value.nameAssigner, __utils.BER),
                            /* REQUIRED   */ __utils._encode_implicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => _encode_UnboundedDirectoryString,
                                __utils.BER
                            )(value.partyName, __utils.BER),
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
    return _cached_encoder_for_EDIPartyName(value, elGetter);
}

export type GeneralName =
    | { otherName: asn1.INSTANCE_OF } /* CHOICE_ALT_ROOT */
    | { rfc822Name: asn1.IA5String } /* CHOICE_ALT_ROOT */
    | { dNSName: asn1.IA5String } /* CHOICE_ALT_ROOT */
    | { x400Address: ORAddress } /* CHOICE_ALT_ROOT */
    | { directoryName: Name } /* CHOICE_ALT_ROOT */
    | { ediPartyName: EDIPartyName } /* CHOICE_ALT_ROOT */
    | { uniformResourceIdentifier: asn1.IA5String } /* CHOICE_ALT_ROOT */
    | { iPAddress: asn1.OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { registeredID: asn1.OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_GeneralName: __utils.ASN1Decoder<
    GeneralName
> | null = null;
let _cached_encoder_for_GeneralName: __utils.ASN1Encoder<
    GeneralName
> | null = null;
export function _decode_GeneralName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GeneralName) {
        _cached_decoder_for_GeneralName = __utils._decode_extensible_choice<
            GeneralName
        >({
            "CONTEXT 0": [
                "otherName",
                __utils._decode_implicit<asn1.INSTANCE_OF>(
                    () => __utils._decodeInstanceOf
                ),
            ],
            "CONTEXT 1": [
                "rfc822Name",
                __utils._decode_implicit<asn1.IA5String>(
                    () => __utils._decodeIA5String
                ),
            ],
            "CONTEXT 2": [
                "dNSName",
                __utils._decode_implicit<asn1.IA5String>(
                    () => __utils._decodeIA5String
                ),
            ],
            "CONTEXT 3": [
                "x400Address",
                __utils._decode_implicit<ORAddress>(() => _decode_ORAddress),
            ],
            "CONTEXT 4": [
                "directoryName",
                __utils._decode_implicit<Name>(() => _decode_Name),
            ],
            "CONTEXT 5": [
                "ediPartyName",
                __utils._decode_implicit<EDIPartyName>(
                    () => _decode_EDIPartyName
                ),
            ],
            "CONTEXT 6": [
                "uniformResourceIdentifier",
                __utils._decode_implicit<asn1.IA5String>(
                    () => __utils._decodeIA5String
                ),
            ],
            "CONTEXT 7": [
                "iPAddress",
                __utils._decode_implicit<asn1.OCTET_STRING>(
                    () => __utils._decodeOctetString
                ),
            ],
            "CONTEXT 8": [
                "registeredID",
                __utils._decode_implicit<asn1.OBJECT_IDENTIFIER>(
                    () => __utils._decodeObjectIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_GeneralName(el);
}
export function _encode_GeneralName(
    value: GeneralName,
    elGetter: __utils.ASN1Encoder<GeneralName>
) {
    if (!_cached_encoder_for_GeneralName) {
        _cached_encoder_for_GeneralName = __utils._encode_choice<GeneralName>(
            {
                otherName: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeInstanceOf,
                    __utils.BER
                ),
                rfc822Name: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => __utils._encodeIA5String,
                    __utils.BER
                ),
                dNSName: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => __utils._encodeIA5String,
                    __utils.BER
                ),
                x400Address: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    3,
                    () => _encode_ORAddress,
                    __utils.BER
                ),
                directoryName: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    4,
                    () => _encode_Name,
                    __utils.BER
                ),
                ediPartyName: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    5,
                    () => _encode_EDIPartyName,
                    __utils.BER
                ),
                uniformResourceIdentifier: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    6,
                    () => __utils._encodeIA5String,
                    __utils.BER
                ),
                iPAddress: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    7,
                    () => __utils._encodeOctetString,
                    __utils.BER
                ),
                registeredID: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    8,
                    () => __utils._encodeObjectIdentifier,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_GeneralName(value, elGetter);
}

export class DeltaRefInfo {
    constructor(
        readonly deltaLocation: GeneralName,
        readonly lastDelta: asn1.GeneralizedTime | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DeltaRefInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "deltaLocation",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "lastDelta",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DeltaRefInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DeltaRefInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DeltaRefInfo: __utils.ASN1Decoder<
    DeltaRefInfo
> | null = null;
let _cached_encoder_for_DeltaRefInfo: __utils.ASN1Encoder<
    DeltaRefInfo
> | null = null;
export function _decode_DeltaRefInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DeltaRefInfo) {
        _cached_decoder_for_DeltaRefInfo = function (
            el: asn1.ASN1Element
        ): DeltaRefInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let deltaLocation!: GeneralName;
            let lastDelta: asn1.OPTIONAL<asn1.GeneralizedTime>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                deltaLocation: (_el: asn1.ASN1Element): void => {
                    deltaLocation = _decode_GeneralName(_el);
                },
                lastDelta: (_el: asn1.ASN1Element): void => {
                    lastDelta = __utils._decodeGeneralizedTime(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeltaRefInfo,
                _extension_additions_list_spec_for_DeltaRefInfo,
                _root_component_type_list_2_spec_for_DeltaRefInfo,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DeltaRefInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ deltaLocation,
                lastDelta,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DeltaRefInfo(el);
}
export function _encode_DeltaRefInfo(
    value: DeltaRefInfo,
    elGetter: __utils.ASN1Encoder<DeltaRefInfo>
) {
    if (!_cached_encoder_for_DeltaRefInfo) {
        _cached_encoder_for_DeltaRefInfo = function (
            value: DeltaRefInfo,
            elGetter: __utils.ASN1Encoder<DeltaRefInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_GeneralName(
                                value.deltaLocation,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.lastDelta === undefined
                                ? undefined
                                : __utils._encodeGeneralizedTime(
                                      value.lastDelta,
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
    return _cached_encoder_for_DeltaRefInfo(value, elGetter);
}

export type GeneralNames = GeneralName[]; // SequenceOfType
let _cached_decoder_for_GeneralNames: __utils.ASN1Decoder<
    GeneralNames
> | null = null;
let _cached_encoder_for_GeneralNames: __utils.ASN1Encoder<
    GeneralNames
> | null = null;
export function _decode_GeneralNames(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GeneralNames) {
        _cached_decoder_for_GeneralNames = __utils._decodeSequenceOf<
            GeneralName
        >(() => _decode_GeneralName);
    }
    return _cached_decoder_for_GeneralNames(el);
}
export function _encode_GeneralNames(
    value: GeneralNames,
    elGetter: __utils.ASN1Encoder<GeneralNames>
) {
    if (!_cached_encoder_for_GeneralNames) {
        _cached_encoder_for_GeneralNames = __utils._encodeSequenceOf<
            GeneralName
        >(() => _encode_GeneralName, __utils.BER);
    }
    return _cached_encoder_for_GeneralNames(value, elGetter);
}

export type DistributionPointName =
    | { fullName: GeneralNames } /* CHOICE_ALT_ROOT */
    | {
          nameRelativeToCRLIssuer: RelativeDistinguishedName;
      } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_DistributionPointName: __utils.ASN1Decoder<
    DistributionPointName
> | null = null;
let _cached_encoder_for_DistributionPointName: __utils.ASN1Encoder<
    DistributionPointName
> | null = null;
export function _decode_DistributionPointName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DistributionPointName) {
        _cached_decoder_for_DistributionPointName = __utils._decode_extensible_choice<
            DistributionPointName
        >({
            "CONTEXT 0": [
                "fullName",
                __utils._decode_implicit<GeneralNames>(
                    () => _decode_GeneralNames
                ),
            ],
            "CONTEXT 1": [
                "nameRelativeToCRLIssuer",
                __utils._decode_implicit<RelativeDistinguishedName>(
                    () => _decode_RelativeDistinguishedName
                ),
            ],
        });
    }
    return _cached_decoder_for_DistributionPointName(el);
}
export function _encode_DistributionPointName(
    value: DistributionPointName,
    elGetter: __utils.ASN1Encoder<DistributionPointName>
) {
    if (!_cached_encoder_for_DistributionPointName) {
        _cached_encoder_for_DistributionPointName = __utils._encode_choice<
            DistributionPointName
        >(
            {
                fullName: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_GeneralNames,
                    __utils.BER
                ),
                nameRelativeToCRLIssuer: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_RelativeDistinguishedName,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_DistributionPointName(value, elGetter);
}

export type OnlyCertificateTypes = asn1.BIT_STRING;
export const OnlyCertificateTypes_user: number = 0; /* LONG_NAMED_BIT */
export const user: number = OnlyCertificateTypes_user; /* SHORT_NAMED_BIT */
export const OnlyCertificateTypes_authority: number = 1; /* LONG_NAMED_BIT */
export const authority: number = OnlyCertificateTypes_authority; /* SHORT_NAMED_BIT */
export const OnlyCertificateTypes_attribute: number = 2; /* LONG_NAMED_BIT */
export const attribute: number = OnlyCertificateTypes_attribute; /* SHORT_NAMED_BIT */
let _cached_decoder_for_OnlyCertificateTypes: __utils.ASN1Decoder<
    OnlyCertificateTypes
> | null = null;
let _cached_encoder_for_OnlyCertificateTypes: __utils.ASN1Encoder<
    OnlyCertificateTypes
> | null = null;
export function _decode_OnlyCertificateTypes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OnlyCertificateTypes) {
        _cached_decoder_for_OnlyCertificateTypes = __utils._decodeBitString;
    }
    return _cached_decoder_for_OnlyCertificateTypes(el);
}
export function _encode_OnlyCertificateTypes(
    value: OnlyCertificateTypes,
    elGetter: __utils.ASN1Encoder<OnlyCertificateTypes>
) {
    if (!_cached_encoder_for_OnlyCertificateTypes) {
        _cached_encoder_for_OnlyCertificateTypes = __utils._encodeBitString;
    }
    return _cached_encoder_for_OnlyCertificateTypes(value, elGetter);
}

export type ReasonFlags = asn1.BIT_STRING;
export const ReasonFlags_unused: number = 0; /* LONG_NAMED_BIT */
export const unused: number = ReasonFlags_unused; /* SHORT_NAMED_BIT */
export const ReasonFlags_keyCompromise: number = 1; /* LONG_NAMED_BIT */
export const ReasonFlags_cACompromise: number = 2; /* LONG_NAMED_BIT */
export const ReasonFlags_affiliationChanged: number = 3; /* LONG_NAMED_BIT */
export const ReasonFlags_superseded: number = 4; /* LONG_NAMED_BIT */
export const ReasonFlags_cessationOfOperation: number = 5; /* LONG_NAMED_BIT */
export const ReasonFlags_certificateHold: number = 6; /* LONG_NAMED_BIT */
export const ReasonFlags_privilegeWithdrawn: number = 7; /* LONG_NAMED_BIT */
export const ReasonFlags_aACompromise: number = 8; /* LONG_NAMED_BIT */
export const ReasonFlags_weakAlgorithmOrKey: number = 9; /* LONG_NAMED_BIT */
let _cached_decoder_for_ReasonFlags: __utils.ASN1Decoder<
    ReasonFlags
> | null = null;
let _cached_encoder_for_ReasonFlags: __utils.ASN1Encoder<
    ReasonFlags
> | null = null;
export function _decode_ReasonFlags(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReasonFlags) {
        _cached_decoder_for_ReasonFlags = __utils._decodeBitString;
    }
    return _cached_decoder_for_ReasonFlags(el);
}
export function _encode_ReasonFlags(
    value: ReasonFlags,
    elGetter: __utils.ASN1Encoder<ReasonFlags>
) {
    if (!_cached_encoder_for_ReasonFlags) {
        _cached_encoder_for_ReasonFlags = __utils._encodeBitString;
    }
    return _cached_encoder_for_ReasonFlags(value, elGetter);
}

export class NumberRange {
    constructor(
        readonly startingNumber: asn1.INTEGER | undefined,
        readonly endingNumber: asn1.INTEGER | undefined,
        readonly modulus: asn1.INTEGER | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_NumberRange: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "startingNumber",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "endingNumber",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "modulus",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_NumberRange: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_NumberRange: __utils.ComponentSpec[] = [];
let _cached_decoder_for_NumberRange: __utils.ASN1Decoder<
    NumberRange
> | null = null;
let _cached_encoder_for_NumberRange: __utils.ASN1Encoder<
    NumberRange
> | null = null;
export function _decode_NumberRange(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NumberRange) {
        _cached_decoder_for_NumberRange = function (
            el: asn1.ASN1Element
        ): NumberRange {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let startingNumber: asn1.OPTIONAL<asn1.INTEGER>;
            let endingNumber: asn1.OPTIONAL<asn1.INTEGER>;
            let modulus: asn1.OPTIONAL<asn1.INTEGER>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                startingNumber: (_el: asn1.ASN1Element): void => {
                    startingNumber = __utils._decode_implicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                endingNumber: (_el: asn1.ASN1Element): void => {
                    endingNumber = __utils._decode_implicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                modulus: (_el: asn1.ASN1Element): void => {
                    modulus = __utils._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NumberRange,
                _extension_additions_list_spec_for_NumberRange,
                _root_component_type_list_2_spec_for_NumberRange,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NumberRange(
                /* SEQUENCE_CONSTRUCTOR_CALL */ startingNumber,
                endingNumber,
                modulus,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_NumberRange(el);
}
export function _encode_NumberRange(
    value: NumberRange,
    elGetter: __utils.ASN1Encoder<NumberRange>
) {
    if (!_cached_encoder_for_NumberRange) {
        _cached_encoder_for_NumberRange = function (
            value: NumberRange,
            elGetter: __utils.ASN1Encoder<NumberRange>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.startingNumber === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.startingNumber, __utils.BER),
                            /* IF_ABSENT  */ value.endingNumber === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.endingNumber, __utils.BER),
                            /* IF_ABSENT  */ value.modulus === undefined
                                ? undefined
                                : __utils._encodeInteger(
                                      value.modulus,
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
    return _cached_encoder_for_NumberRange(value, elGetter);
}

export type CRLStreamIdentifier = asn1.INTEGER;
let _cached_decoder_for_CRLStreamIdentifier: __utils.ASN1Decoder<
    CRLStreamIdentifier
> | null = null;
let _cached_encoder_for_CRLStreamIdentifier: __utils.ASN1Encoder<
    CRLStreamIdentifier
> | null = null;
export function _decode_CRLStreamIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CRLStreamIdentifier) {
        _cached_decoder_for_CRLStreamIdentifier = __utils._decodeInteger;
    }
    return _cached_decoder_for_CRLStreamIdentifier(el);
}
export function _encode_CRLStreamIdentifier(
    value: CRLStreamIdentifier,
    elGetter: __utils.ASN1Encoder<CRLStreamIdentifier>
) {
    if (!_cached_encoder_for_CRLStreamIdentifier) {
        _cached_encoder_for_CRLStreamIdentifier = __utils._encodeInteger;
    }
    return _cached_encoder_for_CRLStreamIdentifier(value, elGetter);
}

export type CRLNumber = asn1.INTEGER;
let _cached_decoder_for_CRLNumber: __utils.ASN1Decoder<CRLNumber> | null = null;
let _cached_encoder_for_CRLNumber: __utils.ASN1Encoder<CRLNumber> | null = null;
export function _decode_CRLNumber(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CRLNumber) {
        _cached_decoder_for_CRLNumber = __utils._decodeInteger;
    }
    return _cached_decoder_for_CRLNumber(el);
}
export function _encode_CRLNumber(
    value: CRLNumber,
    elGetter: __utils.ASN1Encoder<CRLNumber>
) {
    if (!_cached_encoder_for_CRLNumber) {
        _cached_encoder_for_CRLNumber = __utils._encodeInteger;
    }
    return _cached_encoder_for_CRLNumber(value, elGetter);
}

export class BaseRevocationInfo {
    constructor(
        readonly cRLStreamIdentifier: CRLStreamIdentifier | undefined,
        readonly cRLNumber: CRLNumber,
        readonly baseThisUpdate: asn1.GeneralizedTime,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_BaseRevocationInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "cRLStreamIdentifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "cRLNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "baseThisUpdate",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_BaseRevocationInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_BaseRevocationInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_BaseRevocationInfo: __utils.ASN1Decoder<
    BaseRevocationInfo
> | null = null;
let _cached_encoder_for_BaseRevocationInfo: __utils.ASN1Encoder<
    BaseRevocationInfo
> | null = null;
export function _decode_BaseRevocationInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BaseRevocationInfo) {
        _cached_decoder_for_BaseRevocationInfo = function (
            el: asn1.ASN1Element
        ): BaseRevocationInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let cRLStreamIdentifier: asn1.OPTIONAL<CRLStreamIdentifier>;
            let cRLNumber!: CRLNumber;
            let baseThisUpdate!: asn1.GeneralizedTime;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                cRLStreamIdentifier: (_el: asn1.ASN1Element): void => {
                    cRLStreamIdentifier = __utils._decode_implicit<
                        CRLStreamIdentifier
                    >(() => _decode_CRLStreamIdentifier)(_el);
                },
                cRLNumber: (_el: asn1.ASN1Element): void => {
                    cRLNumber = __utils._decode_implicit<CRLNumber>(
                        () => _decode_CRLNumber
                    )(_el);
                },
                baseThisUpdate: (_el: asn1.ASN1Element): void => {
                    baseThisUpdate = __utils._decode_implicit<
                        asn1.GeneralizedTime
                    >(() => __utils._decodeGeneralizedTime)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BaseRevocationInfo,
                _extension_additions_list_spec_for_BaseRevocationInfo,
                _root_component_type_list_2_spec_for_BaseRevocationInfo,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new BaseRevocationInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ cRLStreamIdentifier,
                cRLNumber,
                baseThisUpdate,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_BaseRevocationInfo(el);
}
export function _encode_BaseRevocationInfo(
    value: BaseRevocationInfo,
    elGetter: __utils.ASN1Encoder<BaseRevocationInfo>
) {
    if (!_cached_encoder_for_BaseRevocationInfo) {
        _cached_encoder_for_BaseRevocationInfo = function (
            value: BaseRevocationInfo,
            elGetter: __utils.ASN1Encoder<BaseRevocationInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.cRLStreamIdentifier ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_CRLStreamIdentifier,
                                      __utils.BER
                                  )(value.cRLStreamIdentifier, __utils.BER),
                            /* REQUIRED   */ __utils._encode_implicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => _encode_CRLNumber,
                                __utils.BER
                            )(value.cRLNumber, __utils.BER),
                            /* REQUIRED   */ __utils._encode_implicit(
                                asn1.ASN1TagClass.context,
                                2,
                                () => __utils._encodeGeneralizedTime,
                                __utils.BER
                            )(value.baseThisUpdate, __utils.BER),
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
    return _cached_encoder_for_BaseRevocationInfo(value, elGetter);
}

export class PerAuthorityScope {
    constructor(
        readonly authorityName: GeneralName | undefined,
        readonly distributionPoint: DistributionPointName | undefined,
        readonly onlyContains: OnlyCertificateTypes | undefined,
        readonly onlySomeReasons: ReasonFlags | undefined,
        readonly serialNumberRange: NumberRange | undefined,
        readonly subjectKeyIdRange: NumberRange | undefined,
        readonly nameSubtrees: GeneralNames | undefined,
        readonly baseRevocationInfo: BaseRevocationInfo | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PerAuthorityScope: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "authorityName",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "distributionPoint",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "onlyContains",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "onlySomeReasons",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serialNumberRange",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subjectKeyIdRange",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nameSubtrees",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "baseRevocationInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 9),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PerAuthorityScope: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PerAuthorityScope: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PerAuthorityScope: __utils.ASN1Decoder<
    PerAuthorityScope
> | null = null;
let _cached_encoder_for_PerAuthorityScope: __utils.ASN1Encoder<
    PerAuthorityScope
> | null = null;
export function _decode_PerAuthorityScope(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PerAuthorityScope) {
        _cached_decoder_for_PerAuthorityScope = function (
            el: asn1.ASN1Element
        ): PerAuthorityScope {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let authorityName: asn1.OPTIONAL<GeneralName>;
            let distributionPoint: asn1.OPTIONAL<DistributionPointName>;
            let onlyContains: asn1.OPTIONAL<OnlyCertificateTypes>;
            let onlySomeReasons: asn1.OPTIONAL<ReasonFlags>;
            let serialNumberRange: asn1.OPTIONAL<NumberRange>;
            let subjectKeyIdRange: asn1.OPTIONAL<NumberRange>;
            let nameSubtrees: asn1.OPTIONAL<GeneralNames>;
            let baseRevocationInfo: asn1.OPTIONAL<BaseRevocationInfo>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                authorityName: (_el: asn1.ASN1Element): void => {
                    authorityName = __utils._decode_implicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                distributionPoint: (_el: asn1.ASN1Element): void => {
                    distributionPoint = __utils._decode_implicit<
                        DistributionPointName
                    >(() => _decode_DistributionPointName)(_el);
                },
                onlyContains: (_el: asn1.ASN1Element): void => {
                    onlyContains = __utils._decode_implicit<
                        OnlyCertificateTypes
                    >(() => _decode_OnlyCertificateTypes)(_el);
                },
                onlySomeReasons: (_el: asn1.ASN1Element): void => {
                    onlySomeReasons = __utils._decode_implicit<ReasonFlags>(
                        () => _decode_ReasonFlags
                    )(_el);
                },
                serialNumberRange: (_el: asn1.ASN1Element): void => {
                    serialNumberRange = __utils._decode_implicit<NumberRange>(
                        () => _decode_NumberRange
                    )(_el);
                },
                subjectKeyIdRange: (_el: asn1.ASN1Element): void => {
                    subjectKeyIdRange = __utils._decode_implicit<NumberRange>(
                        () => _decode_NumberRange
                    )(_el);
                },
                nameSubtrees: (_el: asn1.ASN1Element): void => {
                    nameSubtrees = __utils._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
                baseRevocationInfo: (_el: asn1.ASN1Element): void => {
                    baseRevocationInfo = __utils._decode_implicit<
                        BaseRevocationInfo
                    >(() => _decode_BaseRevocationInfo)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PerAuthorityScope,
                _extension_additions_list_spec_for_PerAuthorityScope,
                _root_component_type_list_2_spec_for_PerAuthorityScope,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PerAuthorityScope(
                /* SEQUENCE_CONSTRUCTOR_CALL */ authorityName,
                distributionPoint,
                onlyContains,
                onlySomeReasons,
                serialNumberRange,
                subjectKeyIdRange,
                nameSubtrees,
                baseRevocationInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PerAuthorityScope(el);
}
export function _encode_PerAuthorityScope(
    value: PerAuthorityScope,
    elGetter: __utils.ASN1Encoder<PerAuthorityScope>
) {
    if (!_cached_encoder_for_PerAuthorityScope) {
        _cached_encoder_for_PerAuthorityScope = function (
            value: PerAuthorityScope,
            elGetter: __utils.ASN1Encoder<PerAuthorityScope>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.authorityName === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      __utils.BER
                                  )(value.authorityName, __utils.BER),
                            /* IF_ABSENT  */ value.distributionPoint ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_DistributionPointName,
                                      __utils.BER
                                  )(value.distributionPoint, __utils.BER),
                            /* IF_ABSENT  */ value.onlyContains === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_OnlyCertificateTypes,
                                      __utils.BER
                                  )(value.onlyContains, __utils.BER),
                            /* IF_ABSENT  */ value.onlySomeReasons === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () => _encode_ReasonFlags,
                                      __utils.BER
                                  )(value.onlySomeReasons, __utils.BER),
                            /* IF_ABSENT  */ value.serialNumberRange ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      5,
                                      () => _encode_NumberRange,
                                      __utils.BER
                                  )(value.serialNumberRange, __utils.BER),
                            /* IF_ABSENT  */ value.subjectKeyIdRange ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      6,
                                      () => _encode_NumberRange,
                                      __utils.BER
                                  )(value.subjectKeyIdRange, __utils.BER),
                            /* IF_ABSENT  */ value.nameSubtrees === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      7,
                                      () => _encode_GeneralNames,
                                      __utils.BER
                                  )(value.nameSubtrees, __utils.BER),
                            /* IF_ABSENT  */ value.baseRevocationInfo ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      9,
                                      () => _encode_BaseRevocationInfo,
                                      __utils.BER
                                  )(value.baseRevocationInfo, __utils.BER),
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
    return _cached_encoder_for_PerAuthorityScope(value, elGetter);
}

export type CRLScopeSyntax = PerAuthorityScope[]; // SequenceOfType
let _cached_decoder_for_CRLScopeSyntax: __utils.ASN1Decoder<
    CRLScopeSyntax
> | null = null;
let _cached_encoder_for_CRLScopeSyntax: __utils.ASN1Encoder<
    CRLScopeSyntax
> | null = null;
export function _decode_CRLScopeSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CRLScopeSyntax) {
        _cached_decoder_for_CRLScopeSyntax = __utils._decodeSequenceOf<
            PerAuthorityScope
        >(() => _decode_PerAuthorityScope);
    }
    return _cached_decoder_for_CRLScopeSyntax(el);
}
export function _encode_CRLScopeSyntax(
    value: CRLScopeSyntax,
    elGetter: __utils.ASN1Encoder<CRLScopeSyntax>
) {
    if (!_cached_encoder_for_CRLScopeSyntax) {
        _cached_encoder_for_CRLScopeSyntax = __utils._encodeSequenceOf<
            PerAuthorityScope
        >(() => _encode_PerAuthorityScope, __utils.BER);
    }
    return _cached_encoder_for_CRLScopeSyntax(value, elGetter);
}

export class CRLReferral {
    constructor(
        readonly issuer: GeneralName | undefined,
        readonly location: GeneralName | undefined,
        readonly deltaRefInfo: DeltaRefInfo | undefined,
        readonly cRLScope: CRLScopeSyntax,
        readonly lastUpdate: asn1.GeneralizedTime | undefined,
        readonly lastChangedCRL: asn1.GeneralizedTime | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CRLReferral: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "issuer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "location",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "deltaRefInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "cRLScope",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "lastUpdate",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "lastChangedCRL",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CRLReferral: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CRLReferral: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CRLReferral: __utils.ASN1Decoder<
    CRLReferral
> | null = null;
let _cached_encoder_for_CRLReferral: __utils.ASN1Encoder<
    CRLReferral
> | null = null;
export function _decode_CRLReferral(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CRLReferral) {
        _cached_decoder_for_CRLReferral = function (
            el: asn1.ASN1Element
        ): CRLReferral {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuer: asn1.OPTIONAL<GeneralName>;
            let location: asn1.OPTIONAL<GeneralName>;
            let deltaRefInfo: asn1.OPTIONAL<DeltaRefInfo>;
            let cRLScope!: CRLScopeSyntax;
            let lastUpdate: asn1.OPTIONAL<asn1.GeneralizedTime>;
            let lastChangedCRL: asn1.OPTIONAL<asn1.GeneralizedTime>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                issuer: (_el: asn1.ASN1Element): void => {
                    issuer = __utils._decode_implicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                location: (_el: asn1.ASN1Element): void => {
                    location = __utils._decode_implicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                deltaRefInfo: (_el: asn1.ASN1Element): void => {
                    deltaRefInfo = __utils._decode_implicit<DeltaRefInfo>(
                        () => _decode_DeltaRefInfo
                    )(_el);
                },
                cRLScope: (_el: asn1.ASN1Element): void => {
                    cRLScope = _decode_CRLScopeSyntax(_el);
                },
                lastUpdate: (_el: asn1.ASN1Element): void => {
                    lastUpdate = __utils._decode_implicit<asn1.GeneralizedTime>(
                        () => __utils._decodeGeneralizedTime
                    )(_el);
                },
                lastChangedCRL: (_el: asn1.ASN1Element): void => {
                    lastChangedCRL = __utils._decode_implicit<
                        asn1.GeneralizedTime
                    >(() => __utils._decodeGeneralizedTime)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CRLReferral,
                _extension_additions_list_spec_for_CRLReferral,
                _root_component_type_list_2_spec_for_CRLReferral,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CRLReferral(
                /* SEQUENCE_CONSTRUCTOR_CALL */ issuer,
                location,
                deltaRefInfo,
                cRLScope,
                lastUpdate,
                lastChangedCRL,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CRLReferral(el);
}
export function _encode_CRLReferral(
    value: CRLReferral,
    elGetter: __utils.ASN1Encoder<CRLReferral>
) {
    if (!_cached_encoder_for_CRLReferral) {
        _cached_encoder_for_CRLReferral = function (
            value: CRLReferral,
            elGetter: __utils.ASN1Encoder<CRLReferral>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      __utils.BER
                                  )(value.issuer, __utils.BER),
                            /* IF_ABSENT  */ value.location === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_GeneralName,
                                      __utils.BER
                                  )(value.location, __utils.BER),
                            /* IF_ABSENT  */ value.deltaRefInfo === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_DeltaRefInfo,
                                      __utils.BER
                                  )(value.deltaRefInfo, __utils.BER),
                            /* REQUIRED   */ _encode_CRLScopeSyntax(
                                value.cRLScope,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.lastUpdate === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => __utils._encodeGeneralizedTime,
                                      __utils.BER
                                  )(value.lastUpdate, __utils.BER),
                            /* IF_ABSENT  */ value.lastChangedCRL === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () => __utils._encodeGeneralizedTime,
                                      __utils.BER
                                  )(value.lastChangedCRL, __utils.BER),
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
    return _cached_encoder_for_CRLReferral(value, elGetter);
}

// TODO: ObjectClassAssignment: OTHER-REFERRAL

export type StatusReferral =
    | { cRLReferral: CRLReferral } /* CHOICE_ALT_ROOT */
    | { otherReferral: asn1.INSTANCE_OF } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_StatusReferral: __utils.ASN1Decoder<
    StatusReferral
> | null = null;
let _cached_encoder_for_StatusReferral: __utils.ASN1Encoder<
    StatusReferral
> | null = null;
export function _decode_StatusReferral(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_StatusReferral) {
        _cached_decoder_for_StatusReferral = __utils._decode_extensible_choice<
            StatusReferral
        >({
            "CONTEXT 0": [
                "cRLReferral",
                __utils._decode_implicit<CRLReferral>(
                    () => _decode_CRLReferral
                ),
            ],
            "CONTEXT 1": [
                "otherReferral",
                __utils._decode_implicit<asn1.INSTANCE_OF>(
                    () => __utils._decodeInstanceOf
                ),
            ],
        });
    }
    return _cached_decoder_for_StatusReferral(el);
}
export function _encode_StatusReferral(
    value: StatusReferral,
    elGetter: __utils.ASN1Encoder<StatusReferral>
) {
    if (!_cached_encoder_for_StatusReferral) {
        _cached_encoder_for_StatusReferral = __utils._encode_choice<
            StatusReferral
        >(
            {
                cRLReferral: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_CRLReferral,
                    __utils.BER
                ),
                otherReferral: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => __utils._encodeInstanceOf,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_StatusReferral(value, elGetter);
}

export type StatusReferrals = StatusReferral[]; // SequenceOfType
let _cached_decoder_for_StatusReferrals: __utils.ASN1Decoder<
    StatusReferrals
> | null = null;
let _cached_encoder_for_StatusReferrals: __utils.ASN1Encoder<
    StatusReferrals
> | null = null;
export function _decode_StatusReferrals(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_StatusReferrals) {
        _cached_decoder_for_StatusReferrals = __utils._decodeSequenceOf<
            StatusReferral
        >(() => _decode_StatusReferral);
    }
    return _cached_decoder_for_StatusReferrals(el);
}
export function _encode_StatusReferrals(
    value: StatusReferrals,
    elGetter: __utils.ASN1Encoder<StatusReferrals>
) {
    if (!_cached_encoder_for_StatusReferrals) {
        _cached_encoder_for_StatusReferrals = __utils._encodeSequenceOf<
            StatusReferral
        >(() => _encode_StatusReferral, __utils.BER);
    }
    return _cached_encoder_for_StatusReferrals(value, elGetter);
}

// TODO: ObjectAssignment: cRLStreamIdentifier

// TODO: ObjectAssignment: orderedList

export type OrderedListSyntax = asn1.ENUMERATED;
export const OrderedListSyntax_ascSerialNum: OrderedListSyntax = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const ascSerialNum: OrderedListSyntax = OrderedListSyntax_ascSerialNum; /* SHORT_NAMED_ENUMERATED_VALUE */
export const OrderedListSyntax_ascRevDate: OrderedListSyntax = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const ascRevDate: OrderedListSyntax = OrderedListSyntax_ascRevDate; /* SHORT_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_OrderedListSyntax: __utils.ASN1Decoder<
    OrderedListSyntax
> | null = null;
let _cached_encoder_for_OrderedListSyntax: __utils.ASN1Encoder<
    OrderedListSyntax
> | null = null;
export function _decode_OrderedListSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_OrderedListSyntax) {
        _cached_decoder_for_OrderedListSyntax = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_OrderedListSyntax(el);
}
export function _encode_OrderedListSyntax(
    value: OrderedListSyntax,
    elGetter: __utils.ASN1Encoder<OrderedListSyntax>
) {
    if (!_cached_encoder_for_OrderedListSyntax) {
        _cached_encoder_for_OrderedListSyntax = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_OrderedListSyntax(value, elGetter);
}

// TODO: ObjectAssignment: deltaInfo

export class DeltaInformation {
    constructor(
        readonly deltaLocation: GeneralName,
        readonly nextDelta: asn1.GeneralizedTime | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DeltaInformation: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "deltaLocation",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nextDelta",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DeltaInformation: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DeltaInformation: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DeltaInformation: __utils.ASN1Decoder<
    DeltaInformation
> | null = null;
let _cached_encoder_for_DeltaInformation: __utils.ASN1Encoder<
    DeltaInformation
> | null = null;
export function _decode_DeltaInformation(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DeltaInformation) {
        _cached_decoder_for_DeltaInformation = function (
            el: asn1.ASN1Element
        ): DeltaInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let deltaLocation!: GeneralName;
            let nextDelta: asn1.OPTIONAL<asn1.GeneralizedTime>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                deltaLocation: (_el: asn1.ASN1Element): void => {
                    deltaLocation = _decode_GeneralName(_el);
                },
                nextDelta: (_el: asn1.ASN1Element): void => {
                    nextDelta = __utils._decodeGeneralizedTime(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeltaInformation,
                _extension_additions_list_spec_for_DeltaInformation,
                _root_component_type_list_2_spec_for_DeltaInformation,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DeltaInformation(
                /* SEQUENCE_CONSTRUCTOR_CALL */ deltaLocation,
                nextDelta,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DeltaInformation(el);
}
export function _encode_DeltaInformation(
    value: DeltaInformation,
    elGetter: __utils.ASN1Encoder<DeltaInformation>
) {
    if (!_cached_encoder_for_DeltaInformation) {
        _cached_encoder_for_DeltaInformation = function (
            value: DeltaInformation,
            elGetter: __utils.ASN1Encoder<DeltaInformation>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_GeneralName(
                                value.deltaLocation,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.nextDelta === undefined
                                ? undefined
                                : __utils._encodeGeneralizedTime(
                                      value.nextDelta,
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
    return _cached_encoder_for_DeltaInformation(value, elGetter);
}

// TODO: ObjectAssignment: toBeRevoked

export type CRLReason = asn1.ENUMERATED;
export const CRLReason_unspecified: CRLReason = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_keyCompromise: CRLReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_cACompromise: CRLReason = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_affiliationChanged: CRLReason = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_superseded: CRLReason = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_cessationOfOperation: CRLReason = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_certificateHold: CRLReason = 6; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_removeFromCRL: CRLReason = 8; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_privilegeWithdrawn: CRLReason = 9; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_aACompromise: CRLReason = 10; /* LONG_NAMED_ENUMERATED_VALUE */
export const CRLReason_weakAlgorithmOrKey: CRLReason = 11; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CRLReason: __utils.ASN1Decoder<CRLReason> | null = null;
let _cached_encoder_for_CRLReason: __utils.ASN1Encoder<CRLReason> | null = null;
export function _decode_CRLReason(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CRLReason) {
        _cached_decoder_for_CRLReason = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_CRLReason(el);
}
export function _encode_CRLReason(
    value: CRLReason,
    elGetter: __utils.ASN1Encoder<CRLReason>
) {
    if (!_cached_encoder_for_CRLReason) {
        _cached_encoder_for_CRLReason = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_CRLReason(value, elGetter);
}

export type HoldInstruction = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_HoldInstruction: __utils.ASN1Decoder<
    HoldInstruction
> | null = null;
let _cached_encoder_for_HoldInstruction: __utils.ASN1Encoder<
    HoldInstruction
> | null = null;
export function _decode_HoldInstruction(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_HoldInstruction) {
        _cached_decoder_for_HoldInstruction = __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_HoldInstruction(el);
}
export function _encode_HoldInstruction(
    value: HoldInstruction,
    elGetter: __utils.ASN1Encoder<HoldInstruction>
) {
    if (!_cached_encoder_for_HoldInstruction) {
        _cached_encoder_for_HoldInstruction = __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_HoldInstruction(value, elGetter);
}

export class ReasonInfo {
    constructor(
        readonly reasonCode: CRLReason,
        readonly holdInstructionCode: HoldInstruction | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ReasonInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "reasonCode",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "holdInstructionCode",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ReasonInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ReasonInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ReasonInfo: __utils.ASN1Decoder<
    ReasonInfo
> | null = null;
let _cached_encoder_for_ReasonInfo: __utils.ASN1Encoder<
    ReasonInfo
> | null = null;
export function _decode_ReasonInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ReasonInfo) {
        _cached_decoder_for_ReasonInfo = function (
            el: asn1.ASN1Element
        ): ReasonInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let reasonCode!: CRLReason;
            let holdInstructionCode: asn1.OPTIONAL<HoldInstruction>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                reasonCode: (_el: asn1.ASN1Element): void => {
                    reasonCode = _decode_CRLReason(_el);
                },
                holdInstructionCode: (_el: asn1.ASN1Element): void => {
                    holdInstructionCode = _decode_HoldInstruction(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ReasonInfo,
                _extension_additions_list_spec_for_ReasonInfo,
                _root_component_type_list_2_spec_for_ReasonInfo,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ReasonInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ reasonCode,
                holdInstructionCode,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ReasonInfo(el);
}
export function _encode_ReasonInfo(
    value: ReasonInfo,
    elGetter: __utils.ASN1Encoder<ReasonInfo>
) {
    if (!_cached_encoder_for_ReasonInfo) {
        _cached_encoder_for_ReasonInfo = function (
            value: ReasonInfo,
            elGetter: __utils.ASN1Encoder<ReasonInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CRLReason(
                                value.reasonCode,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.holdInstructionCode ===
                            undefined
                                ? undefined
                                : _encode_HoldInstruction(
                                      value.holdInstructionCode,
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
    return _cached_encoder_for_ReasonInfo(value, elGetter);
}

export type CertificateSerialNumbers = CertificateSerialNumber[]; // SequenceOfType
let _cached_decoder_for_CertificateSerialNumbers: __utils.ASN1Decoder<
    CertificateSerialNumbers
> | null = null;
let _cached_encoder_for_CertificateSerialNumbers: __utils.ASN1Encoder<
    CertificateSerialNumbers
> | null = null;
export function _decode_CertificateSerialNumbers(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificateSerialNumbers) {
        _cached_decoder_for_CertificateSerialNumbers = __utils._decodeSequenceOf<
            CertificateSerialNumber
        >(() => _decode_CertificateSerialNumber);
    }
    return _cached_decoder_for_CertificateSerialNumbers(el);
}
export function _encode_CertificateSerialNumbers(
    value: CertificateSerialNumbers,
    elGetter: __utils.ASN1Encoder<CertificateSerialNumbers>
) {
    if (!_cached_encoder_for_CertificateSerialNumbers) {
        _cached_encoder_for_CertificateSerialNumbers = __utils._encodeSequenceOf<
            CertificateSerialNumber
        >(() => _encode_CertificateSerialNumber, __utils.BER);
    }
    return _cached_encoder_for_CertificateSerialNumbers(value, elGetter);
}

export class CertificateGroupNumberRange {
    constructor(
        readonly startingNumber: asn1.INTEGER,
        readonly endingNumber: asn1.INTEGER,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertificateGroupNumberRange: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "startingNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "endingNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertificateGroupNumberRange: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertificateGroupNumberRange: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertificateGroupNumberRange: __utils.ASN1Decoder<
    CertificateGroupNumberRange
> | null = null;
let _cached_encoder_for_CertificateGroupNumberRange: __utils.ASN1Encoder<
    CertificateGroupNumberRange
> | null = null;
export function _decode_CertificateGroupNumberRange(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificateGroupNumberRange) {
        _cached_decoder_for_CertificateGroupNumberRange = function (
            el: asn1.ASN1Element
        ): CertificateGroupNumberRange {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "CertificateGroupNumberRange contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "startingNumber";
            sequence[1].name = "endingNumber";
            let startingNumber!: asn1.INTEGER;
            let endingNumber!: asn1.INTEGER;
            startingNumber = __utils._decode_implicit<asn1.INTEGER>(
                () => __utils._decodeInteger
            )(sequence[0]);
            endingNumber = __utils._decode_implicit<asn1.INTEGER>(
                () => __utils._decodeInteger
            )(sequence[1]);
            // TODO: Validate values.
            return new CertificateGroupNumberRange(
                startingNumber,
                endingNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertificateGroupNumberRange(el);
}
export function _encode_CertificateGroupNumberRange(
    value: CertificateGroupNumberRange,
    elGetter: __utils.ASN1Encoder<CertificateGroupNumberRange>
) {
    if (!_cached_encoder_for_CertificateGroupNumberRange) {
        _cached_encoder_for_CertificateGroupNumberRange = function (
            value: CertificateGroupNumberRange,
            elGetter: __utils.ASN1Encoder<CertificateGroupNumberRange>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encode_implicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => __utils._encodeInteger,
                                __utils.BER
                            )(value.startingNumber, __utils.BER),
                            /* REQUIRED   */ __utils._encode_implicit(
                                asn1.ASN1TagClass.context,
                                1,
                                () => __utils._encodeInteger,
                                __utils.BER
                            )(value.endingNumber, __utils.BER),
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
    return _cached_encoder_for_CertificateGroupNumberRange(value, elGetter);
}

export type CertificateGroup =
    | { serialNumbers: CertificateSerialNumbers } /* CHOICE_ALT_ROOT */
    | { serialNumberRange: CertificateGroupNumberRange } /* CHOICE_ALT_ROOT */
    | { nameSubtree: GeneralName } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CertificateGroup: __utils.ASN1Decoder<
    CertificateGroup
> | null = null;
let _cached_encoder_for_CertificateGroup: __utils.ASN1Encoder<
    CertificateGroup
> | null = null;
export function _decode_CertificateGroup(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificateGroup) {
        _cached_decoder_for_CertificateGroup = __utils._decode_extensible_choice<
            CertificateGroup
        >({
            "CONTEXT 0": [
                "serialNumbers",
                __utils._decode_implicit<CertificateSerialNumbers>(
                    () => _decode_CertificateSerialNumbers
                ),
            ],
            "CONTEXT 1": [
                "serialNumberRange",
                __utils._decode_implicit<CertificateGroupNumberRange>(
                    () => _decode_CertificateGroupNumberRange
                ),
            ],
            "CONTEXT 2": [
                "nameSubtree",
                __utils._decode_implicit<GeneralName>(
                    () => _decode_GeneralName
                ),
            ],
        });
    }
    return _cached_decoder_for_CertificateGroup(el);
}
export function _encode_CertificateGroup(
    value: CertificateGroup,
    elGetter: __utils.ASN1Encoder<CertificateGroup>
) {
    if (!_cached_encoder_for_CertificateGroup) {
        _cached_encoder_for_CertificateGroup = __utils._encode_choice<
            CertificateGroup
        >(
            {
                serialNumbers: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_CertificateSerialNumbers,
                    __utils.BER
                ),
                serialNumberRange: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_CertificateGroupNumberRange,
                    __utils.BER
                ),
                nameSubtree: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () => _encode_GeneralName,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_CertificateGroup(value, elGetter);
}

export class ToBeRevokedGroup {
    constructor(
        readonly certificateIssuer: GeneralName | undefined,
        readonly reasonInfo: ReasonInfo | undefined,
        readonly revocationTime: asn1.GeneralizedTime,
        readonly certificateGroup: CertificateGroup,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ToBeRevokedGroup: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certificateIssuer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "reasonInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "revocationTime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certificateGroup",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ToBeRevokedGroup: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ToBeRevokedGroup: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ToBeRevokedGroup: __utils.ASN1Decoder<
    ToBeRevokedGroup
> | null = null;
let _cached_encoder_for_ToBeRevokedGroup: __utils.ASN1Encoder<
    ToBeRevokedGroup
> | null = null;
export function _decode_ToBeRevokedGroup(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ToBeRevokedGroup) {
        _cached_decoder_for_ToBeRevokedGroup = function (
            el: asn1.ASN1Element
        ): ToBeRevokedGroup {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certificateIssuer: asn1.OPTIONAL<GeneralName>;
            let reasonInfo: asn1.OPTIONAL<ReasonInfo>;
            let revocationTime!: asn1.GeneralizedTime;
            let certificateGroup!: CertificateGroup;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                certificateIssuer: (_el: asn1.ASN1Element): void => {
                    certificateIssuer = __utils._decode_implicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                reasonInfo: (_el: asn1.ASN1Element): void => {
                    reasonInfo = __utils._decode_implicit<ReasonInfo>(
                        () => _decode_ReasonInfo
                    )(_el);
                },
                revocationTime: (_el: asn1.ASN1Element): void => {
                    revocationTime = __utils._decodeGeneralizedTime(_el);
                },
                certificateGroup: (_el: asn1.ASN1Element): void => {
                    certificateGroup = _decode_CertificateGroup(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ToBeRevokedGroup,
                _extension_additions_list_spec_for_ToBeRevokedGroup,
                _root_component_type_list_2_spec_for_ToBeRevokedGroup,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ToBeRevokedGroup(
                /* SEQUENCE_CONSTRUCTOR_CALL */ certificateIssuer,
                reasonInfo,
                revocationTime,
                certificateGroup,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ToBeRevokedGroup(el);
}
export function _encode_ToBeRevokedGroup(
    value: ToBeRevokedGroup,
    elGetter: __utils.ASN1Encoder<ToBeRevokedGroup>
) {
    if (!_cached_encoder_for_ToBeRevokedGroup) {
        _cached_encoder_for_ToBeRevokedGroup = function (
            value: ToBeRevokedGroup,
            elGetter: __utils.ASN1Encoder<ToBeRevokedGroup>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.certificateIssuer ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      __utils.BER
                                  )(value.certificateIssuer, __utils.BER),
                            /* IF_ABSENT  */ value.reasonInfo === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_ReasonInfo,
                                      __utils.BER
                                  )(value.reasonInfo, __utils.BER),
                            /* REQUIRED   */ __utils._encodeGeneralizedTime(
                                value.revocationTime,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_CertificateGroup(
                                value.certificateGroup,
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
    return _cached_encoder_for_ToBeRevokedGroup(value, elGetter);
}

export type ToBeRevokedSyntax = ToBeRevokedGroup[]; // SequenceOfType
let _cached_decoder_for_ToBeRevokedSyntax: __utils.ASN1Decoder<
    ToBeRevokedSyntax
> | null = null;
let _cached_encoder_for_ToBeRevokedSyntax: __utils.ASN1Encoder<
    ToBeRevokedSyntax
> | null = null;
export function _decode_ToBeRevokedSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ToBeRevokedSyntax) {
        _cached_decoder_for_ToBeRevokedSyntax = __utils._decodeSequenceOf<
            ToBeRevokedGroup
        >(() => _decode_ToBeRevokedGroup);
    }
    return _cached_decoder_for_ToBeRevokedSyntax(el);
}
export function _encode_ToBeRevokedSyntax(
    value: ToBeRevokedSyntax,
    elGetter: __utils.ASN1Encoder<ToBeRevokedSyntax>
) {
    if (!_cached_encoder_for_ToBeRevokedSyntax) {
        _cached_encoder_for_ToBeRevokedSyntax = __utils._encodeSequenceOf<
            ToBeRevokedGroup
        >(() => _encode_ToBeRevokedGroup, __utils.BER);
    }
    return _cached_encoder_for_ToBeRevokedSyntax(value, elGetter);
}

// TODO: ObjectAssignment: revokedGroups

export type RevokedCertificateGroup =
    | { serialNumberRange: NumberRange } /* CHOICE_ALT_ROOT */
    | { nameSubtree: GeneralName } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_RevokedCertificateGroup: __utils.ASN1Decoder<
    RevokedCertificateGroup
> | null = null;
let _cached_encoder_for_RevokedCertificateGroup: __utils.ASN1Encoder<
    RevokedCertificateGroup
> | null = null;
export function _decode_RevokedCertificateGroup(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RevokedCertificateGroup) {
        _cached_decoder_for_RevokedCertificateGroup = __utils._decode_inextensible_choice<
            RevokedCertificateGroup
        >({
            "UNIVERSAL 16": ["serialNumberRange", _decode_NumberRange],
            "CONTEXT 0": ["nameSubtree", _decode_GeneralName],
            "CONTEXT 1": ["nameSubtree", _decode_GeneralName],
            "CONTEXT 2": ["nameSubtree", _decode_GeneralName],
            "CONTEXT 3": ["nameSubtree", _decode_GeneralName],
            "CONTEXT 4": ["nameSubtree", _decode_GeneralName],
            "CONTEXT 5": ["nameSubtree", _decode_GeneralName],
            "CONTEXT 6": ["nameSubtree", _decode_GeneralName],
            "CONTEXT 7": ["nameSubtree", _decode_GeneralName],
            "CONTEXT 8": ["nameSubtree", _decode_GeneralName],
        });
    }
    return _cached_decoder_for_RevokedCertificateGroup(el);
}
export function _encode_RevokedCertificateGroup(
    value: RevokedCertificateGroup,
    elGetter: __utils.ASN1Encoder<RevokedCertificateGroup>
) {
    if (!_cached_encoder_for_RevokedCertificateGroup) {
        _cached_encoder_for_RevokedCertificateGroup = __utils._encode_choice<
            RevokedCertificateGroup
        >(
            {
                serialNumberRange: _encode_NumberRange,
                nameSubtree: _encode_GeneralName,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_RevokedCertificateGroup(value, elGetter);
}

export class RevokedGroup {
    constructor(
        readonly certificateIssuer: GeneralName | undefined,
        readonly reasonInfo: ReasonInfo | undefined,
        readonly invalidityDate: asn1.GeneralizedTime | undefined,
        readonly revokedcertificateGroup: RevokedCertificateGroup,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_RevokedGroup: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "certificateIssuer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "reasonInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "invalidityDate",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "revokedcertificateGroup",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RevokedGroup: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RevokedGroup: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RevokedGroup: __utils.ASN1Decoder<
    RevokedGroup
> | null = null;
let _cached_encoder_for_RevokedGroup: __utils.ASN1Encoder<
    RevokedGroup
> | null = null;
export function _decode_RevokedGroup(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RevokedGroup) {
        _cached_decoder_for_RevokedGroup = function (
            el: asn1.ASN1Element
        ): RevokedGroup {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let certificateIssuer: asn1.OPTIONAL<GeneralName>;
            let reasonInfo: asn1.OPTIONAL<ReasonInfo>;
            let invalidityDate: asn1.OPTIONAL<asn1.GeneralizedTime>;
            let revokedcertificateGroup!: RevokedCertificateGroup;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                certificateIssuer: (_el: asn1.ASN1Element): void => {
                    certificateIssuer = __utils._decode_implicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                reasonInfo: (_el: asn1.ASN1Element): void => {
                    reasonInfo = __utils._decode_implicit<ReasonInfo>(
                        () => _decode_ReasonInfo
                    )(_el);
                },
                invalidityDate: (_el: asn1.ASN1Element): void => {
                    invalidityDate = __utils._decode_implicit<
                        asn1.GeneralizedTime
                    >(() => __utils._decodeGeneralizedTime)(_el);
                },
                revokedcertificateGroup: (_el: asn1.ASN1Element): void => {
                    revokedcertificateGroup = __utils._decode_implicit<
                        RevokedCertificateGroup
                    >(() => _decode_RevokedCertificateGroup)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RevokedGroup,
                _extension_additions_list_spec_for_RevokedGroup,
                _root_component_type_list_2_spec_for_RevokedGroup,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RevokedGroup(
                /* SEQUENCE_CONSTRUCTOR_CALL */ certificateIssuer,
                reasonInfo,
                invalidityDate,
                revokedcertificateGroup,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RevokedGroup(el);
}
export function _encode_RevokedGroup(
    value: RevokedGroup,
    elGetter: __utils.ASN1Encoder<RevokedGroup>
) {
    if (!_cached_encoder_for_RevokedGroup) {
        _cached_encoder_for_RevokedGroup = function (
            value: RevokedGroup,
            elGetter: __utils.ASN1Encoder<RevokedGroup>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.certificateIssuer ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      __utils.BER
                                  )(value.certificateIssuer, __utils.BER),
                            /* IF_ABSENT  */ value.reasonInfo === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_ReasonInfo,
                                      __utils.BER
                                  )(value.reasonInfo, __utils.BER),
                            /* IF_ABSENT  */ value.invalidityDate === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => __utils._encodeGeneralizedTime,
                                      __utils.BER
                                  )(value.invalidityDate, __utils.BER),
                            /* REQUIRED   */ __utils._encode_implicit(
                                asn1.ASN1TagClass.context,
                                3,
                                () => _encode_RevokedCertificateGroup,
                                __utils.BER
                            )(value.revokedcertificateGroup, __utils.BER),
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
    return _cached_encoder_for_RevokedGroup(value, elGetter);
}

export type RevokedGroupsSyntax = RevokedGroup[]; // SequenceOfType
let _cached_decoder_for_RevokedGroupsSyntax: __utils.ASN1Decoder<
    RevokedGroupsSyntax
> | null = null;
let _cached_encoder_for_RevokedGroupsSyntax: __utils.ASN1Encoder<
    RevokedGroupsSyntax
> | null = null;
export function _decode_RevokedGroupsSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RevokedGroupsSyntax) {
        _cached_decoder_for_RevokedGroupsSyntax = __utils._decodeSequenceOf<
            RevokedGroup
        >(() => _decode_RevokedGroup);
    }
    return _cached_decoder_for_RevokedGroupsSyntax(el);
}
export function _encode_RevokedGroupsSyntax(
    value: RevokedGroupsSyntax,
    elGetter: __utils.ASN1Encoder<RevokedGroupsSyntax>
) {
    if (!_cached_encoder_for_RevokedGroupsSyntax) {
        _cached_encoder_for_RevokedGroupsSyntax = __utils._encodeSequenceOf<
            RevokedGroup
        >(() => _encode_RevokedGroup, __utils.BER);
    }
    return _cached_encoder_for_RevokedGroupsSyntax(value, elGetter);
}

// TODO: ObjectAssignment: expiredCertsOnCRL

export type ExpiredCertsOnCRL = asn1.GeneralizedTime; // GeneralizedTime
let _cached_decoder_for_ExpiredCertsOnCRL: __utils.ASN1Decoder<
    ExpiredCertsOnCRL
> | null = null;
let _cached_encoder_for_ExpiredCertsOnCRL: __utils.ASN1Encoder<
    ExpiredCertsOnCRL
> | null = null;
export function _decode_ExpiredCertsOnCRL(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ExpiredCertsOnCRL) {
        _cached_decoder_for_ExpiredCertsOnCRL = __utils._decodeGeneralizedTime;
    }
    return _cached_decoder_for_ExpiredCertsOnCRL(el);
}
export function _encode_ExpiredCertsOnCRL(
    value: ExpiredCertsOnCRL,
    elGetter: __utils.ASN1Encoder<ExpiredCertsOnCRL>
) {
    if (!_cached_encoder_for_ExpiredCertsOnCRL) {
        _cached_encoder_for_ExpiredCertsOnCRL = __utils._encodeGeneralizedTime;
    }
    return _cached_encoder_for_ExpiredCertsOnCRL(value, elGetter);
}

// TODO: ObjectAssignment: reasonCode

// TODO: ObjectAssignment: holdInstructionCode

// TODO: ObjectAssignment: invalidityDate

// TODO: ObjectAssignment: cRLDistributionPoints

export class DistributionPoint {
    constructor(
        readonly distributionPoint: DistributionPointName | undefined,
        readonly reasons: ReasonFlags | undefined,
        readonly cRLIssuer: GeneralNames | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DistributionPoint: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "distributionPoint",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "reasons",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "cRLIssuer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DistributionPoint: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DistributionPoint: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DistributionPoint: __utils.ASN1Decoder<
    DistributionPoint
> | null = null;
let _cached_encoder_for_DistributionPoint: __utils.ASN1Encoder<
    DistributionPoint
> | null = null;
export function _decode_DistributionPoint(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DistributionPoint) {
        _cached_decoder_for_DistributionPoint = function (
            el: asn1.ASN1Element
        ): DistributionPoint {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let distributionPoint: asn1.OPTIONAL<DistributionPointName>;
            let reasons: asn1.OPTIONAL<ReasonFlags>;
            let cRLIssuer: asn1.OPTIONAL<GeneralNames>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                distributionPoint: (_el: asn1.ASN1Element): void => {
                    distributionPoint = __utils._decode_implicit<
                        DistributionPointName
                    >(() => _decode_DistributionPointName)(_el);
                },
                reasons: (_el: asn1.ASN1Element): void => {
                    reasons = __utils._decode_implicit<ReasonFlags>(
                        () => _decode_ReasonFlags
                    )(_el);
                },
                cRLIssuer: (_el: asn1.ASN1Element): void => {
                    cRLIssuer = __utils._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DistributionPoint,
                _extension_additions_list_spec_for_DistributionPoint,
                _root_component_type_list_2_spec_for_DistributionPoint,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DistributionPoint(
                /* SEQUENCE_CONSTRUCTOR_CALL */ distributionPoint,
                reasons,
                cRLIssuer,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DistributionPoint(el);
}
export function _encode_DistributionPoint(
    value: DistributionPoint,
    elGetter: __utils.ASN1Encoder<DistributionPoint>
) {
    if (!_cached_encoder_for_DistributionPoint) {
        _cached_encoder_for_DistributionPoint = function (
            value: DistributionPoint,
            elGetter: __utils.ASN1Encoder<DistributionPoint>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.distributionPoint ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_DistributionPointName,
                                      __utils.BER
                                  )(value.distributionPoint, __utils.BER),
                            /* IF_ABSENT  */ value.reasons === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_ReasonFlags,
                                      __utils.BER
                                  )(value.reasons, __utils.BER),
                            /* IF_ABSENT  */ value.cRLIssuer === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_GeneralNames,
                                      __utils.BER
                                  )(value.cRLIssuer, __utils.BER),
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
    return _cached_encoder_for_DistributionPoint(value, elGetter);
}

export type CRLDistPointsSyntax = DistributionPoint[]; // SequenceOfType
let _cached_decoder_for_CRLDistPointsSyntax: __utils.ASN1Decoder<
    CRLDistPointsSyntax
> | null = null;
let _cached_encoder_for_CRLDistPointsSyntax: __utils.ASN1Encoder<
    CRLDistPointsSyntax
> | null = null;
export function _decode_CRLDistPointsSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CRLDistPointsSyntax) {
        _cached_decoder_for_CRLDistPointsSyntax = __utils._decodeSequenceOf<
            DistributionPoint
        >(() => _decode_DistributionPoint);
    }
    return _cached_decoder_for_CRLDistPointsSyntax(el);
}
export function _encode_CRLDistPointsSyntax(
    value: CRLDistPointsSyntax,
    elGetter: __utils.ASN1Encoder<CRLDistPointsSyntax>
) {
    if (!_cached_encoder_for_CRLDistPointsSyntax) {
        _cached_encoder_for_CRLDistPointsSyntax = __utils._encodeSequenceOf<
            DistributionPoint
        >(() => _encode_DistributionPoint, __utils.BER);
    }
    return _cached_encoder_for_CRLDistPointsSyntax(value, elGetter);
}

// TODO: ObjectAssignment: issuingDistributionPoint

export class IssuingDistPointSyntax {
    constructor(
        readonly distributionPoint: DistributionPointName | undefined,
        readonly onlyContainsUserPublicKeyCerts: asn1.BOOLEAN | undefined,
        readonly onlyContainsCACerts: asn1.BOOLEAN | undefined,
        readonly onlySomeReasons: ReasonFlags | undefined,
        readonly indirectCRL: asn1.BOOLEAN | undefined,
        readonly onlyContainsAttributeCerts: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_onlyContainsUserPublicKeyCerts() {
        return false;
    }
    public static get _default_value_for_onlyContainsCACerts() {
        return false;
    }
    public static get _default_value_for_indirectCRL() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_IssuingDistPointSyntax: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "distributionPoint",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "onlyContainsUserPublicKeyCerts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "onlyContainsCACerts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "onlySomeReasons",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "indirectCRL",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "onlyContainsAttributeCerts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_IssuingDistPointSyntax: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_IssuingDistPointSyntax: __utils.ComponentSpec[] = [];
let _cached_decoder_for_IssuingDistPointSyntax: __utils.ASN1Decoder<
    IssuingDistPointSyntax
> | null = null;
let _cached_encoder_for_IssuingDistPointSyntax: __utils.ASN1Encoder<
    IssuingDistPointSyntax
> | null = null;
export function _decode_IssuingDistPointSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IssuingDistPointSyntax) {
        _cached_decoder_for_IssuingDistPointSyntax = function (
            el: asn1.ASN1Element
        ): IssuingDistPointSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let distributionPoint: asn1.OPTIONAL<DistributionPointName>;
            let onlyContainsUserPublicKeyCerts: asn1.OPTIONAL<asn1.BOOLEAN> =
                IssuingDistPointSyntax._default_value_for_onlyContainsUserPublicKeyCerts;
            let onlyContainsCACerts: asn1.OPTIONAL<asn1.BOOLEAN> =
                IssuingDistPointSyntax._default_value_for_onlyContainsCACerts;
            let onlySomeReasons: asn1.OPTIONAL<ReasonFlags>;
            let indirectCRL: asn1.OPTIONAL<asn1.BOOLEAN> =
                IssuingDistPointSyntax._default_value_for_indirectCRL;
            let onlyContainsAttributeCerts: asn1.OPTIONAL<asn1.BOOLEAN>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                distributionPoint: (_el: asn1.ASN1Element): void => {
                    distributionPoint = __utils._decode_implicit<
                        DistributionPointName
                    >(() => _decode_DistributionPointName)(_el);
                },
                onlyContainsUserPublicKeyCerts: (
                    _el: asn1.ASN1Element
                ): void => {
                    onlyContainsUserPublicKeyCerts = __utils._decode_implicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
                onlyContainsCACerts: (_el: asn1.ASN1Element): void => {
                    onlyContainsCACerts = __utils._decode_implicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
                onlySomeReasons: (_el: asn1.ASN1Element): void => {
                    onlySomeReasons = __utils._decode_implicit<ReasonFlags>(
                        () => _decode_ReasonFlags
                    )(_el);
                },
                indirectCRL: (_el: asn1.ASN1Element): void => {
                    indirectCRL = __utils._decode_implicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                onlyContainsAttributeCerts: (_el: asn1.ASN1Element): void => {
                    onlyContainsAttributeCerts = __utils._decode_implicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IssuingDistPointSyntax,
                _extension_additions_list_spec_for_IssuingDistPointSyntax,
                _root_component_type_list_2_spec_for_IssuingDistPointSyntax,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new IssuingDistPointSyntax(
                /* SEQUENCE_CONSTRUCTOR_CALL */ distributionPoint,
                onlyContainsUserPublicKeyCerts,
                onlyContainsCACerts,
                onlySomeReasons,
                indirectCRL,
                onlyContainsAttributeCerts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_IssuingDistPointSyntax(el);
}
export function _encode_IssuingDistPointSyntax(
    value: IssuingDistPointSyntax,
    elGetter: __utils.ASN1Encoder<IssuingDistPointSyntax>
) {
    if (!_cached_encoder_for_IssuingDistPointSyntax) {
        _cached_encoder_for_IssuingDistPointSyntax = function (
            value: IssuingDistPointSyntax,
            elGetter: __utils.ASN1Encoder<IssuingDistPointSyntax>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.distributionPoint ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_DistributionPointName,
                                      __utils.BER
                                  )(value.distributionPoint, __utils.BER),
                            /* IF_DEFAULT */ value.onlyContainsUserPublicKeyCerts ===
                                undefined ||
                            __utils.deepEq(
                                value.onlyContainsUserPublicKeyCerts,
                                IssuingDistPointSyntax._default_value_for_onlyContainsUserPublicKeyCerts
                            )
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(
                                      value.onlyContainsUserPublicKeyCerts,
                                      __utils.BER
                                  ),
                            /* IF_DEFAULT */ value.onlyContainsCACerts ===
                                undefined ||
                            __utils.deepEq(
                                value.onlyContainsCACerts,
                                IssuingDistPointSyntax._default_value_for_onlyContainsCACerts
                            )
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.onlyContainsCACerts, __utils.BER),
                            /* IF_ABSENT  */ value.onlySomeReasons === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => _encode_ReasonFlags,
                                      __utils.BER
                                  )(value.onlySomeReasons, __utils.BER),
                            /* IF_DEFAULT */ value.indirectCRL === undefined ||
                            __utils.deepEq(
                                value.indirectCRL,
                                IssuingDistPointSyntax._default_value_for_indirectCRL
                            )
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.indirectCRL, __utils.BER),
                            /* IF_ABSENT  */ value.onlyContainsAttributeCerts ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      5,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(
                                      value.onlyContainsAttributeCerts,
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
    return _cached_encoder_for_IssuingDistPointSyntax(value, elGetter);
}

// TODO: ObjectAssignment: certificateIssuer

// TODO: ObjectAssignment: deltaCRLIndicator

export type BaseCRLNumber = CRLNumber; // DefinedType
let _cached_decoder_for_BaseCRLNumber: __utils.ASN1Decoder<
    BaseCRLNumber
> | null = null;
let _cached_encoder_for_BaseCRLNumber: __utils.ASN1Encoder<
    BaseCRLNumber
> | null = null;
export function _decode_BaseCRLNumber(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BaseCRLNumber) {
        _cached_decoder_for_BaseCRLNumber = _decode_CRLNumber;
    }
    return _cached_decoder_for_BaseCRLNumber(el);
}
export function _encode_BaseCRLNumber(
    value: BaseCRLNumber,
    elGetter: __utils.ASN1Encoder<BaseCRLNumber>
) {
    if (!_cached_encoder_for_BaseCRLNumber) {
        _cached_encoder_for_BaseCRLNumber = _encode_CRLNumber;
    }
    return _cached_encoder_for_BaseCRLNumber(value, elGetter);
}

// TODO: ObjectAssignment: baseUpdateTime

// TODO: ObjectAssignment: freshestCRL

// TODO: ObjectAssignment: aAissuingDistributionPoint

export class AAIssuingDistPointSyntax {
    constructor(
        readonly distributionPoint: DistributionPointName | undefined,
        readonly onlySomeReasons: ReasonFlags | undefined,
        readonly indirectCRL: asn1.BOOLEAN | undefined,
        readonly containsUserAttributeCerts: asn1.BOOLEAN | undefined,
        readonly containsAACerts: asn1.BOOLEAN | undefined,
        readonly containsSOAPublicKeyCerts: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_indirectCRL() {
        return false;
    }
    public static get _default_value_for_containsUserAttributeCerts() {
        return true;
    }
    public static get _default_value_for_containsAACerts() {
        return true;
    }
    public static get _default_value_for_containsSOAPublicKeyCerts() {
        return true;
    }
}
export const _root_component_type_list_1_spec_for_AAIssuingDistPointSyntax: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "distributionPoint",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "onlySomeReasons",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "indirectCRL",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "containsUserAttributeCerts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "containsAACerts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "containsSOAPublicKeyCerts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AAIssuingDistPointSyntax: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AAIssuingDistPointSyntax: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AAIssuingDistPointSyntax: __utils.ASN1Decoder<
    AAIssuingDistPointSyntax
> | null = null;
let _cached_encoder_for_AAIssuingDistPointSyntax: __utils.ASN1Encoder<
    AAIssuingDistPointSyntax
> | null = null;
export function _decode_AAIssuingDistPointSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AAIssuingDistPointSyntax) {
        _cached_decoder_for_AAIssuingDistPointSyntax = function (
            el: asn1.ASN1Element
        ): AAIssuingDistPointSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let distributionPoint: asn1.OPTIONAL<DistributionPointName>;
            let onlySomeReasons: asn1.OPTIONAL<ReasonFlags>;
            let indirectCRL: asn1.OPTIONAL<asn1.BOOLEAN> =
                AAIssuingDistPointSyntax._default_value_for_indirectCRL;
            let containsUserAttributeCerts: asn1.OPTIONAL<asn1.BOOLEAN> =
                AAIssuingDistPointSyntax._default_value_for_containsUserAttributeCerts;
            let containsAACerts: asn1.OPTIONAL<asn1.BOOLEAN> =
                AAIssuingDistPointSyntax._default_value_for_containsAACerts;
            let containsSOAPublicKeyCerts: asn1.OPTIONAL<asn1.BOOLEAN> =
                AAIssuingDistPointSyntax._default_value_for_containsSOAPublicKeyCerts;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                distributionPoint: (_el: asn1.ASN1Element): void => {
                    distributionPoint = __utils._decode_implicit<
                        DistributionPointName
                    >(() => _decode_DistributionPointName)(_el);
                },
                onlySomeReasons: (_el: asn1.ASN1Element): void => {
                    onlySomeReasons = __utils._decode_implicit<ReasonFlags>(
                        () => _decode_ReasonFlags
                    )(_el);
                },
                indirectCRL: (_el: asn1.ASN1Element): void => {
                    indirectCRL = __utils._decode_implicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                containsUserAttributeCerts: (_el: asn1.ASN1Element): void => {
                    containsUserAttributeCerts = __utils._decode_implicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
                containsAACerts: (_el: asn1.ASN1Element): void => {
                    containsAACerts = __utils._decode_implicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                containsSOAPublicKeyCerts: (_el: asn1.ASN1Element): void => {
                    containsSOAPublicKeyCerts = __utils._decode_implicit<
                        asn1.BOOLEAN
                    >(() => __utils._decodeBoolean)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AAIssuingDistPointSyntax,
                _extension_additions_list_spec_for_AAIssuingDistPointSyntax,
                _root_component_type_list_2_spec_for_AAIssuingDistPointSyntax,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AAIssuingDistPointSyntax(
                /* SEQUENCE_CONSTRUCTOR_CALL */ distributionPoint,
                onlySomeReasons,
                indirectCRL,
                containsUserAttributeCerts,
                containsAACerts,
                containsSOAPublicKeyCerts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AAIssuingDistPointSyntax(el);
}
export function _encode_AAIssuingDistPointSyntax(
    value: AAIssuingDistPointSyntax,
    elGetter: __utils.ASN1Encoder<AAIssuingDistPointSyntax>
) {
    if (!_cached_encoder_for_AAIssuingDistPointSyntax) {
        _cached_encoder_for_AAIssuingDistPointSyntax = function (
            value: AAIssuingDistPointSyntax,
            elGetter: __utils.ASN1Encoder<AAIssuingDistPointSyntax>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.distributionPoint ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_DistributionPointName,
                                      __utils.BER
                                  )(value.distributionPoint, __utils.BER),
                            /* IF_ABSENT  */ value.onlySomeReasons === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_ReasonFlags,
                                      __utils.BER
                                  )(value.onlySomeReasons, __utils.BER),
                            /* IF_DEFAULT */ value.indirectCRL === undefined ||
                            __utils.deepEq(
                                value.indirectCRL,
                                AAIssuingDistPointSyntax._default_value_for_indirectCRL
                            )
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.indirectCRL, __utils.BER),
                            /* IF_DEFAULT */ value.containsUserAttributeCerts ===
                                undefined ||
                            __utils.deepEq(
                                value.containsUserAttributeCerts,
                                AAIssuingDistPointSyntax._default_value_for_containsUserAttributeCerts
                            )
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(
                                      value.containsUserAttributeCerts,
                                      __utils.BER
                                  ),
                            /* IF_DEFAULT */ value.containsAACerts ===
                                undefined ||
                            __utils.deepEq(
                                value.containsAACerts,
                                AAIssuingDistPointSyntax._default_value_for_containsAACerts
                            )
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.containsAACerts, __utils.BER),
                            /* IF_DEFAULT */ value.containsSOAPublicKeyCerts ===
                                undefined ||
                            __utils.deepEq(
                                value.containsSOAPublicKeyCerts,
                                AAIssuingDistPointSyntax._default_value_for_containsSOAPublicKeyCerts
                            )
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      5,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(
                                      value.containsSOAPublicKeyCerts,
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
    return _cached_encoder_for_AAIssuingDistPointSyntax(value, elGetter);
}

// TODO: ObjectAssignment: certificateExactMatch

// TODO: ObjectAssignment: certificateMatch

// TODO: ObjectAssignment: certificatePairExactMatch

export class CertificateExactAssertion {
    constructor(
        readonly serialNumber: CertificateSerialNumber,
        readonly issuer: Name,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertificateExactAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "serialNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "issuer",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertificateExactAssertion: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertificateExactAssertion: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertificateExactAssertion: __utils.ASN1Decoder<
    CertificateExactAssertion
> | null = null;
let _cached_encoder_for_CertificateExactAssertion: __utils.ASN1Encoder<
    CertificateExactAssertion
> | null = null;
export function _decode_CertificateExactAssertion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificateExactAssertion) {
        _cached_decoder_for_CertificateExactAssertion = function (
            el: asn1.ASN1Element
        ): CertificateExactAssertion {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "CertificateExactAssertion contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "serialNumber";
            sequence[1].name = "issuer";
            let serialNumber!: CertificateSerialNumber;
            let issuer!: Name;
            serialNumber = _decode_CertificateSerialNumber(sequence[0]);
            issuer = _decode_Name(sequence[1]);
            // TODO: Validate values.
            return new CertificateExactAssertion(
                serialNumber,
                issuer,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertificateExactAssertion(el);
}
export function _encode_CertificateExactAssertion(
    value: CertificateExactAssertion,
    elGetter: __utils.ASN1Encoder<CertificateExactAssertion>
) {
    if (!_cached_encoder_for_CertificateExactAssertion) {
        _cached_encoder_for_CertificateExactAssertion = function (
            value: CertificateExactAssertion,
            elGetter: __utils.ASN1Encoder<CertificateExactAssertion>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_Name(
                                value.issuer,
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
    return _cached_encoder_for_CertificateExactAssertion(value, elGetter);
}

export class CertificatePairExactAssertion {
    constructor(
        readonly issuedToThisCAAssertion: CertificateExactAssertion | undefined,
        readonly issuedByThisCAAssertion: CertificateExactAssertion | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertificatePairExactAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "issuedToThisCAAssertion",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "issuedByThisCAAssertion",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertificatePairExactAssertion: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertificatePairExactAssertion: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertificatePairExactAssertion: __utils.ASN1Decoder<
    CertificatePairExactAssertion
> | null = null;
let _cached_encoder_for_CertificatePairExactAssertion: __utils.ASN1Encoder<
    CertificatePairExactAssertion
> | null = null;
export function _decode_CertificatePairExactAssertion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificatePairExactAssertion) {
        _cached_decoder_for_CertificatePairExactAssertion = function (
            el: asn1.ASN1Element
        ): CertificatePairExactAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuedToThisCAAssertion: asn1.OPTIONAL<CertificateExactAssertion>;
            let issuedByThisCAAssertion: asn1.OPTIONAL<CertificateExactAssertion>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                issuedToThisCAAssertion: (_el: asn1.ASN1Element): void => {
                    issuedToThisCAAssertion = __utils._decode_implicit<
                        CertificateExactAssertion
                    >(() => _decode_CertificateExactAssertion)(_el);
                },
                issuedByThisCAAssertion: (_el: asn1.ASN1Element): void => {
                    issuedByThisCAAssertion = __utils._decode_implicit<
                        CertificateExactAssertion
                    >(() => _decode_CertificateExactAssertion)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificatePairExactAssertion,
                _extension_additions_list_spec_for_CertificatePairExactAssertion,
                _root_component_type_list_2_spec_for_CertificatePairExactAssertion,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificatePairExactAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ issuedToThisCAAssertion,
                issuedByThisCAAssertion,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificatePairExactAssertion(el);
}
export function _encode_CertificatePairExactAssertion(
    value: CertificatePairExactAssertion,
    elGetter: __utils.ASN1Encoder<CertificatePairExactAssertion>
) {
    if (!_cached_encoder_for_CertificatePairExactAssertion) {
        _cached_encoder_for_CertificatePairExactAssertion = function (
            value: CertificatePairExactAssertion,
            elGetter: __utils.ASN1Encoder<CertificatePairExactAssertion>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.issuedToThisCAAssertion ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_CertificateExactAssertion,
                                      __utils.BER
                                  )(value.issuedToThisCAAssertion, __utils.BER),
                            /* IF_ABSENT  */ value.issuedByThisCAAssertion ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_CertificateExactAssertion,
                                      __utils.BER
                                  )(value.issuedByThisCAAssertion, __utils.BER),
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
    return _cached_encoder_for_CertificatePairExactAssertion(value, elGetter);
}

// TODO: ObjectAssignment: certificatePairMatch

export type KeyIdentifier = asn1.OCTET_STRING; // OctetStringType
let _cached_decoder_for_KeyIdentifier: __utils.ASN1Decoder<
    KeyIdentifier
> | null = null;
let _cached_encoder_for_KeyIdentifier: __utils.ASN1Encoder<
    KeyIdentifier
> | null = null;
export function _decode_KeyIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyIdentifier) {
        _cached_decoder_for_KeyIdentifier = __utils._decodeOctetString;
    }
    return _cached_decoder_for_KeyIdentifier(el);
}
export function _encode_KeyIdentifier(
    value: KeyIdentifier,
    elGetter: __utils.ASN1Encoder<KeyIdentifier>
) {
    if (!_cached_encoder_for_KeyIdentifier) {
        _cached_encoder_for_KeyIdentifier = __utils._encodeOctetString;
    }
    return _cached_encoder_for_KeyIdentifier(value, elGetter);
}

export type SubjectKeyIdentifier = KeyIdentifier; // DefinedType
let _cached_decoder_for_SubjectKeyIdentifier: __utils.ASN1Decoder<
    SubjectKeyIdentifier
> | null = null;
let _cached_encoder_for_SubjectKeyIdentifier: __utils.ASN1Encoder<
    SubjectKeyIdentifier
> | null = null;
export function _decode_SubjectKeyIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SubjectKeyIdentifier) {
        _cached_decoder_for_SubjectKeyIdentifier = _decode_KeyIdentifier;
    }
    return _cached_decoder_for_SubjectKeyIdentifier(el);
}
export function _encode_SubjectKeyIdentifier(
    value: SubjectKeyIdentifier,
    elGetter: __utils.ASN1Encoder<SubjectKeyIdentifier>
) {
    if (!_cached_encoder_for_SubjectKeyIdentifier) {
        _cached_encoder_for_SubjectKeyIdentifier = _encode_KeyIdentifier;
    }
    return _cached_encoder_for_SubjectKeyIdentifier(value, elGetter);
}

export class AuthorityKeyIdentifier {
    constructor(
        readonly keyIdentifier: KeyIdentifier | undefined,
        readonly authorityCertIssuer: GeneralNames | undefined,
        readonly authorityCertSerialNumber: CertificateSerialNumber | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AuthorityKeyIdentifier: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "keyIdentifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "authorityCertIssuer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "authorityCertSerialNumber",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AuthorityKeyIdentifier: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AuthorityKeyIdentifier: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AuthorityKeyIdentifier: __utils.ASN1Decoder<
    AuthorityKeyIdentifier
> | null = null;
let _cached_encoder_for_AuthorityKeyIdentifier: __utils.ASN1Encoder<
    AuthorityKeyIdentifier
> | null = null;
export function _decode_AuthorityKeyIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AuthorityKeyIdentifier) {
        _cached_decoder_for_AuthorityKeyIdentifier = function (
            el: asn1.ASN1Element
        ): AuthorityKeyIdentifier {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let keyIdentifier: asn1.OPTIONAL<KeyIdentifier>;
            let authorityCertIssuer: asn1.OPTIONAL<GeneralNames>;
            let authorityCertSerialNumber: asn1.OPTIONAL<CertificateSerialNumber>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                keyIdentifier: (_el: asn1.ASN1Element): void => {
                    keyIdentifier = __utils._decode_implicit<KeyIdentifier>(
                        () => _decode_KeyIdentifier
                    )(_el);
                },
                authorityCertIssuer: (_el: asn1.ASN1Element): void => {
                    authorityCertIssuer = __utils._decode_implicit<
                        GeneralNames
                    >(() => _decode_GeneralNames)(_el);
                },
                authorityCertSerialNumber: (_el: asn1.ASN1Element): void => {
                    authorityCertSerialNumber = __utils._decode_implicit<
                        CertificateSerialNumber
                    >(() => _decode_CertificateSerialNumber)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AuthorityKeyIdentifier,
                _extension_additions_list_spec_for_AuthorityKeyIdentifier,
                _root_component_type_list_2_spec_for_AuthorityKeyIdentifier,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AuthorityKeyIdentifier(
                /* SEQUENCE_CONSTRUCTOR_CALL */ keyIdentifier,
                authorityCertIssuer,
                authorityCertSerialNumber,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AuthorityKeyIdentifier(el);
}
export function _encode_AuthorityKeyIdentifier(
    value: AuthorityKeyIdentifier,
    elGetter: __utils.ASN1Encoder<AuthorityKeyIdentifier>
) {
    if (!_cached_encoder_for_AuthorityKeyIdentifier) {
        _cached_encoder_for_AuthorityKeyIdentifier = function (
            value: AuthorityKeyIdentifier,
            elGetter: __utils.ASN1Encoder<AuthorityKeyIdentifier>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.keyIdentifier === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_KeyIdentifier,
                                      __utils.BER
                                  )(value.keyIdentifier, __utils.BER),
                            /* IF_ABSENT  */ value.authorityCertIssuer ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_GeneralNames,
                                      __utils.BER
                                  )(value.authorityCertIssuer, __utils.BER),
                            /* IF_ABSENT  */ value.authorityCertSerialNumber ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_CertificateSerialNumber,
                                      __utils.BER
                                  )(
                                      value.authorityCertSerialNumber,
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
    return _cached_encoder_for_AuthorityKeyIdentifier(value, elGetter);
}

export type KeyUsage = asn1.BIT_STRING;
export const KeyUsage_digitalSignature: number = 0; /* LONG_NAMED_BIT */
export const digitalSignature: number = KeyUsage_digitalSignature; /* SHORT_NAMED_BIT */
export const KeyUsage_contentCommitment: number = 1; /* LONG_NAMED_BIT */
export const contentCommitment: number = KeyUsage_contentCommitment; /* SHORT_NAMED_BIT */
export const KeyUsage_keyEncipherment: number = 2; /* LONG_NAMED_BIT */
export const keyEncipherment: number = KeyUsage_keyEncipherment; /* SHORT_NAMED_BIT */
export const KeyUsage_dataEncipherment: number = 3; /* LONG_NAMED_BIT */
export const dataEncipherment: number = KeyUsage_dataEncipherment; /* SHORT_NAMED_BIT */
export const KeyUsage_keyAgreement: number = 4; /* LONG_NAMED_BIT */
export const keyAgreement: number = KeyUsage_keyAgreement; /* SHORT_NAMED_BIT */
export const KeyUsage_keyCertSign: number = 5; /* LONG_NAMED_BIT */
export const keyCertSign: number = KeyUsage_keyCertSign; /* SHORT_NAMED_BIT */
export const KeyUsage_cRLSign: number = 6; /* LONG_NAMED_BIT */
export const cRLSign: number = KeyUsage_cRLSign; /* SHORT_NAMED_BIT */
export const KeyUsage_encipherOnly: number = 7; /* LONG_NAMED_BIT */
export const encipherOnly: number = KeyUsage_encipherOnly; /* SHORT_NAMED_BIT */
export const KeyUsage_decipherOnly: number = 8; /* LONG_NAMED_BIT */
export const decipherOnly: number = KeyUsage_decipherOnly; /* SHORT_NAMED_BIT */
let _cached_decoder_for_KeyUsage: __utils.ASN1Decoder<KeyUsage> | null = null;
let _cached_encoder_for_KeyUsage: __utils.ASN1Encoder<KeyUsage> | null = null;
export function _decode_KeyUsage(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_KeyUsage) {
        _cached_decoder_for_KeyUsage = __utils._decodeBitString;
    }
    return _cached_decoder_for_KeyUsage(el);
}
export function _encode_KeyUsage(
    value: KeyUsage,
    elGetter: __utils.ASN1Encoder<KeyUsage>
) {
    if (!_cached_encoder_for_KeyUsage) {
        _cached_encoder_for_KeyUsage = __utils._encodeBitString;
    }
    return _cached_encoder_for_KeyUsage(value, elGetter);
}

export type AltNameType_builtinNameForm = asn1.ENUMERATED;
export const AltNameType_builtinNameForm_rfc822Name: AltNameType_builtinNameForm = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const rfc822Name: AltNameType_builtinNameForm = AltNameType_builtinNameForm_rfc822Name; /* SHORT_NAMED_ENUMERATED_VALUE */
export const AltNameType_builtinNameForm_dNSName: AltNameType_builtinNameForm = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const dNSName: AltNameType_builtinNameForm = AltNameType_builtinNameForm_dNSName; /* SHORT_NAMED_ENUMERATED_VALUE */
export const AltNameType_builtinNameForm_x400Address: AltNameType_builtinNameForm = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const x400Address: AltNameType_builtinNameForm = AltNameType_builtinNameForm_x400Address; /* SHORT_NAMED_ENUMERATED_VALUE */
export const AltNameType_builtinNameForm_directoryName: AltNameType_builtinNameForm = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const directoryName: AltNameType_builtinNameForm = AltNameType_builtinNameForm_directoryName; /* SHORT_NAMED_ENUMERATED_VALUE */
export const AltNameType_builtinNameForm_ediPartyName: AltNameType_builtinNameForm = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const ediPartyName: AltNameType_builtinNameForm = AltNameType_builtinNameForm_ediPartyName; /* SHORT_NAMED_ENUMERATED_VALUE */
export const AltNameType_builtinNameForm_uniformResourceIdentifier: AltNameType_builtinNameForm = 6; /* LONG_NAMED_ENUMERATED_VALUE */
export const uniformResourceIdentifier: AltNameType_builtinNameForm = AltNameType_builtinNameForm_uniformResourceIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */
export const AltNameType_builtinNameForm_iPAddress: AltNameType_builtinNameForm = 7; /* LONG_NAMED_ENUMERATED_VALUE */
export const iPAddress: AltNameType_builtinNameForm = AltNameType_builtinNameForm_iPAddress; /* SHORT_NAMED_ENUMERATED_VALUE */
export const AltNameType_builtinNameForm_registeredId: AltNameType_builtinNameForm = 8; /* LONG_NAMED_ENUMERATED_VALUE */
export const registeredId: AltNameType_builtinNameForm = AltNameType_builtinNameForm_registeredId; /* SHORT_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_AltNameType_builtinNameForm: __utils.ASN1Decoder<
    AltNameType_builtinNameForm
> | null = null;
let _cached_encoder_for_AltNameType_builtinNameForm: __utils.ASN1Encoder<
    AltNameType_builtinNameForm
> | null = null;
export function _decode_AltNameType_builtinNameForm(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AltNameType_builtinNameForm) {
        _cached_decoder_for_AltNameType_builtinNameForm =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_AltNameType_builtinNameForm(el);
}
export function _encode_AltNameType_builtinNameForm(
    value: AltNameType_builtinNameForm,
    elGetter: __utils.ASN1Encoder<AltNameType_builtinNameForm>
) {
    if (!_cached_encoder_for_AltNameType_builtinNameForm) {
        _cached_encoder_for_AltNameType_builtinNameForm =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_AltNameType_builtinNameForm(value, elGetter);
}

export type AltNameType =
    | { builtinNameForm: AltNameType_builtinNameForm } /* CHOICE_ALT_ROOT */
    | { otherNameForm: asn1.OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_AltNameType: __utils.ASN1Decoder<
    AltNameType
> | null = null;
let _cached_encoder_for_AltNameType: __utils.ASN1Encoder<
    AltNameType
> | null = null;
export function _decode_AltNameType(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AltNameType) {
        _cached_decoder_for_AltNameType = __utils._decode_extensible_choice<
            AltNameType
        >({
            "UNIVERSAL 10": [
                "builtinNameForm",
                _decode_AltNameType_builtinNameForm,
            ],
            "UNIVERSAL 6": ["otherNameForm", __utils._decodeObjectIdentifier],
        });
    }
    return _cached_decoder_for_AltNameType(el);
}
export function _encode_AltNameType(
    value: AltNameType,
    elGetter: __utils.ASN1Encoder<AltNameType>
) {
    if (!_cached_encoder_for_AltNameType) {
        _cached_encoder_for_AltNameType = __utils._encode_choice<AltNameType>(
            {
                builtinNameForm: _encode_AltNameType_builtinNameForm,
                otherNameForm: __utils._encodeObjectIdentifier,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_AltNameType(value, elGetter);
}

export type CertPolicySet = CertPolicyId[]; // SequenceOfType
let _cached_decoder_for_CertPolicySet: __utils.ASN1Decoder<
    CertPolicySet
> | null = null;
let _cached_encoder_for_CertPolicySet: __utils.ASN1Encoder<
    CertPolicySet
> | null = null;
export function _decode_CertPolicySet(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertPolicySet) {
        _cached_decoder_for_CertPolicySet = __utils._decodeSequenceOf<
            CertPolicyId
        >(() => _decode_CertPolicyId);
    }
    return _cached_decoder_for_CertPolicySet(el);
}
export function _encode_CertPolicySet(
    value: CertPolicySet,
    elGetter: __utils.ASN1Encoder<CertPolicySet>
) {
    if (!_cached_encoder_for_CertPolicySet) {
        _cached_encoder_for_CertPolicySet = __utils._encodeSequenceOf<
            CertPolicyId
        >(() => _encode_CertPolicyId, __utils.BER);
    }
    return _cached_encoder_for_CertPolicySet(value, elGetter);
}

export type BaseDistance = asn1.INTEGER;
let _cached_decoder_for_BaseDistance: __utils.ASN1Decoder<
    BaseDistance
> | null = null;
let _cached_encoder_for_BaseDistance: __utils.ASN1Encoder<
    BaseDistance
> | null = null;
export function _decode_BaseDistance(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_BaseDistance) {
        _cached_decoder_for_BaseDistance = __utils._decodeInteger;
    }
    return _cached_decoder_for_BaseDistance(el);
}
export function _encode_BaseDistance(
    value: BaseDistance,
    elGetter: __utils.ASN1Encoder<BaseDistance>
) {
    if (!_cached_encoder_for_BaseDistance) {
        _cached_encoder_for_BaseDistance = __utils._encodeInteger;
    }
    return _cached_encoder_for_BaseDistance(value, elGetter);
}

export class GeneralSubtree {
    constructor(
        readonly base: GeneralName,
        readonly minimum: BaseDistance | undefined,
        readonly maximum: BaseDistance | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_minimum() {
        return 0;
    }
}
export const _root_component_type_list_1_spec_for_GeneralSubtree: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "base",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "minimum",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "maximum",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_GeneralSubtree: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_GeneralSubtree: __utils.ComponentSpec[] = [];
let _cached_decoder_for_GeneralSubtree: __utils.ASN1Decoder<
    GeneralSubtree
> | null = null;
let _cached_encoder_for_GeneralSubtree: __utils.ASN1Encoder<
    GeneralSubtree
> | null = null;
export function _decode_GeneralSubtree(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GeneralSubtree) {
        _cached_decoder_for_GeneralSubtree = function (
            el: asn1.ASN1Element
        ): GeneralSubtree {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let base!: GeneralName;
            let minimum: asn1.OPTIONAL<BaseDistance> =
                GeneralSubtree._default_value_for_minimum;
            let maximum: asn1.OPTIONAL<BaseDistance>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                base: (_el: asn1.ASN1Element): void => {
                    base = _decode_GeneralName(_el);
                },
                minimum: (_el: asn1.ASN1Element): void => {
                    minimum = __utils._decode_implicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
                maximum: (_el: asn1.ASN1Element): void => {
                    maximum = __utils._decode_implicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_GeneralSubtree,
                _extension_additions_list_spec_for_GeneralSubtree,
                _root_component_type_list_2_spec_for_GeneralSubtree,
                (ext: asn1.ASN1Element): void => {
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
export function _encode_GeneralSubtree(
    value: GeneralSubtree,
    elGetter: __utils.ASN1Encoder<GeneralSubtree>
) {
    if (!_cached_encoder_for_GeneralSubtree) {
        _cached_encoder_for_GeneralSubtree = function (
            value: GeneralSubtree,
            elGetter: __utils.ASN1Encoder<GeneralSubtree>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_GeneralName(
                                value.base,
                                __utils.BER
                            ),
                            /* IF_DEFAULT */ value.minimum === undefined ||
                            __utils.deepEq(
                                value.minimum,
                                GeneralSubtree._default_value_for_minimum
                            )
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_BaseDistance,
                                      __utils.BER
                                  )(value.minimum, __utils.BER),
                            /* IF_ABSENT  */ value.maximum === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_BaseDistance,
                                      __utils.BER
                                  )(value.maximum, __utils.BER),
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
    return _cached_encoder_for_GeneralSubtree(value, elGetter);
}

export type GeneralSubtrees = GeneralSubtree[]; // SequenceOfType
let _cached_decoder_for_GeneralSubtrees: __utils.ASN1Decoder<
    GeneralSubtrees
> | null = null;
let _cached_encoder_for_GeneralSubtrees: __utils.ASN1Encoder<
    GeneralSubtrees
> | null = null;
export function _decode_GeneralSubtrees(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GeneralSubtrees) {
        _cached_decoder_for_GeneralSubtrees = __utils._decodeSequenceOf<
            GeneralSubtree
        >(() => _decode_GeneralSubtree);
    }
    return _cached_decoder_for_GeneralSubtrees(el);
}
export function _encode_GeneralSubtrees(
    value: GeneralSubtrees,
    elGetter: __utils.ASN1Encoder<GeneralSubtrees>
) {
    if (!_cached_encoder_for_GeneralSubtrees) {
        _cached_encoder_for_GeneralSubtrees = __utils._encodeSequenceOf<
            GeneralSubtree
        >(() => _encode_GeneralSubtree, __utils.BER);
    }
    return _cached_encoder_for_GeneralSubtrees(value, elGetter);
}

export class NameConstraintsSyntax {
    constructor(
        readonly permittedSubtrees: GeneralSubtrees | undefined,
        readonly excludedSubtrees: GeneralSubtrees | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_NameConstraintsSyntax: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "permittedSubtrees",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "excludedSubtrees",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_NameConstraintsSyntax: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_NameConstraintsSyntax: __utils.ComponentSpec[] = [];
let _cached_decoder_for_NameConstraintsSyntax: __utils.ASN1Decoder<
    NameConstraintsSyntax
> | null = null;
let _cached_encoder_for_NameConstraintsSyntax: __utils.ASN1Encoder<
    NameConstraintsSyntax
> | null = null;
export function _decode_NameConstraintsSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_NameConstraintsSyntax) {
        _cached_decoder_for_NameConstraintsSyntax = function (
            el: asn1.ASN1Element
        ): NameConstraintsSyntax {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let permittedSubtrees: asn1.OPTIONAL<GeneralSubtrees>;
            let excludedSubtrees: asn1.OPTIONAL<GeneralSubtrees>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                permittedSubtrees: (_el: asn1.ASN1Element): void => {
                    permittedSubtrees = __utils._decode_implicit<
                        GeneralSubtrees
                    >(() => _decode_GeneralSubtrees)(_el);
                },
                excludedSubtrees: (_el: asn1.ASN1Element): void => {
                    excludedSubtrees = __utils._decode_implicit<
                        GeneralSubtrees
                    >(() => _decode_GeneralSubtrees)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NameConstraintsSyntax,
                _extension_additions_list_spec_for_NameConstraintsSyntax,
                _root_component_type_list_2_spec_for_NameConstraintsSyntax,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NameConstraintsSyntax(
                /* SEQUENCE_CONSTRUCTOR_CALL */ permittedSubtrees,
                excludedSubtrees,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_NameConstraintsSyntax(el);
}
export function _encode_NameConstraintsSyntax(
    value: NameConstraintsSyntax,
    elGetter: __utils.ASN1Encoder<NameConstraintsSyntax>
) {
    if (!_cached_encoder_for_NameConstraintsSyntax) {
        _cached_encoder_for_NameConstraintsSyntax = function (
            value: NameConstraintsSyntax,
            elGetter: __utils.ASN1Encoder<NameConstraintsSyntax>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.permittedSubtrees ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_GeneralSubtrees,
                                      __utils.BER
                                  )(value.permittedSubtrees, __utils.BER),
                            /* IF_ABSENT  */ value.excludedSubtrees ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_GeneralSubtrees,
                                      __utils.BER
                                  )(value.excludedSubtrees, __utils.BER),
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
    return _cached_encoder_for_NameConstraintsSyntax(value, elGetter);
}

export class CertificateAssertion {
    constructor(
        readonly serialNumber: CertificateSerialNumber | undefined,
        readonly issuer: Name | undefined,
        readonly subjectKeyIdentifier: SubjectKeyIdentifier | undefined,
        readonly authorityKeyIdentifier: AuthorityKeyIdentifier | undefined,
        readonly certificateValid: Time | undefined,
        readonly privateKeyValid: asn1.GeneralizedTime | undefined,
        readonly subjectPublicKeyAlgID: asn1.OBJECT_IDENTIFIER | undefined,
        readonly keyUsage: KeyUsage | undefined,
        readonly subjectAltName: AltNameType | undefined,
        readonly policy: CertPolicySet | undefined,
        readonly pathToName: Name | undefined,
        readonly subject: Name | undefined,
        readonly nameConstraints: NameConstraintsSyntax | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertificateAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "serialNumber",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "issuer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subjectKeyIdentifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "authorityKeyIdentifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certificateValid",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "privateKeyValid",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subjectPublicKeyAlgID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyUsage",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subjectAltName",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "policy",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 9),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pathToName",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subject",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 11),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nameConstraints",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 12),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertificateAssertion: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertificateAssertion: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertificateAssertion: __utils.ASN1Decoder<
    CertificateAssertion
> | null = null;
let _cached_encoder_for_CertificateAssertion: __utils.ASN1Encoder<
    CertificateAssertion
> | null = null;
export function _decode_CertificateAssertion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificateAssertion) {
        _cached_decoder_for_CertificateAssertion = function (
            el: asn1.ASN1Element
        ): CertificateAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let serialNumber: asn1.OPTIONAL<CertificateSerialNumber>;
            let issuer: asn1.OPTIONAL<Name>;
            let subjectKeyIdentifier: asn1.OPTIONAL<SubjectKeyIdentifier>;
            let authorityKeyIdentifier: asn1.OPTIONAL<AuthorityKeyIdentifier>;
            let certificateValid: asn1.OPTIONAL<Time>;
            let privateKeyValid: asn1.OPTIONAL<asn1.GeneralizedTime>;
            let subjectPublicKeyAlgID: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
            let keyUsage: asn1.OPTIONAL<KeyUsage>;
            let subjectAltName: asn1.OPTIONAL<AltNameType>;
            let policy: asn1.OPTIONAL<CertPolicySet>;
            let pathToName: asn1.OPTIONAL<Name>;
            let subject: asn1.OPTIONAL<Name>;
            let nameConstraints: asn1.OPTIONAL<NameConstraintsSyntax>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                serialNumber: (_el: asn1.ASN1Element): void => {
                    serialNumber = __utils._decode_implicit<
                        CertificateSerialNumber
                    >(() => _decode_CertificateSerialNumber)(_el);
                },
                issuer: (_el: asn1.ASN1Element): void => {
                    issuer = __utils._decode_implicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                subjectKeyIdentifier: (_el: asn1.ASN1Element): void => {
                    subjectKeyIdentifier = __utils._decode_implicit<
                        SubjectKeyIdentifier
                    >(() => _decode_SubjectKeyIdentifier)(_el);
                },
                authorityKeyIdentifier: (_el: asn1.ASN1Element): void => {
                    authorityKeyIdentifier = __utils._decode_implicit<
                        AuthorityKeyIdentifier
                    >(() => _decode_AuthorityKeyIdentifier)(_el);
                },
                certificateValid: (_el: asn1.ASN1Element): void => {
                    certificateValid = __utils._decode_implicit<Time>(
                        () => _decode_Time
                    )(_el);
                },
                privateKeyValid: (_el: asn1.ASN1Element): void => {
                    privateKeyValid = __utils._decode_implicit<
                        asn1.GeneralizedTime
                    >(() => __utils._decodeGeneralizedTime)(_el);
                },
                subjectPublicKeyAlgID: (_el: asn1.ASN1Element): void => {
                    subjectPublicKeyAlgID = __utils._decode_implicit<
                        asn1.OBJECT_IDENTIFIER
                    >(() => __utils._decodeObjectIdentifier)(_el);
                },
                keyUsage: (_el: asn1.ASN1Element): void => {
                    keyUsage = __utils._decode_implicit<KeyUsage>(
                        () => _decode_KeyUsage
                    )(_el);
                },
                subjectAltName: (_el: asn1.ASN1Element): void => {
                    subjectAltName = __utils._decode_implicit<AltNameType>(
                        () => _decode_AltNameType
                    )(_el);
                },
                policy: (_el: asn1.ASN1Element): void => {
                    policy = __utils._decode_implicit<CertPolicySet>(
                        () => _decode_CertPolicySet
                    )(_el);
                },
                pathToName: (_el: asn1.ASN1Element): void => {
                    pathToName = __utils._decode_implicit<Name>(
                        () => _decode_Name
                    )(_el);
                },
                subject: (_el: asn1.ASN1Element): void => {
                    subject = __utils._decode_implicit<Name>(
                        () => _decode_Name
                    )(_el);
                },
                nameConstraints: (_el: asn1.ASN1Element): void => {
                    nameConstraints = __utils._decode_implicit<
                        NameConstraintsSyntax
                    >(() => _decode_NameConstraintsSyntax)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificateAssertion,
                _extension_additions_list_spec_for_CertificateAssertion,
                _root_component_type_list_2_spec_for_CertificateAssertion,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificateAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ serialNumber,
                issuer,
                subjectKeyIdentifier,
                authorityKeyIdentifier,
                certificateValid,
                privateKeyValid,
                subjectPublicKeyAlgID,
                keyUsage,
                subjectAltName,
                policy,
                pathToName,
                subject,
                nameConstraints,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificateAssertion(el);
}
export function _encode_CertificateAssertion(
    value: CertificateAssertion,
    elGetter: __utils.ASN1Encoder<CertificateAssertion>
) {
    if (!_cached_encoder_for_CertificateAssertion) {
        _cached_encoder_for_CertificateAssertion = function (
            value: CertificateAssertion,
            elGetter: __utils.ASN1Encoder<CertificateAssertion>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.serialNumber === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_CertificateSerialNumber,
                                      __utils.BER
                                  )(value.serialNumber, __utils.BER),
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_Name,
                                      __utils.BER
                                  )(value.issuer, __utils.BER),
                            /* IF_ABSENT  */ value.subjectKeyIdentifier ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_SubjectKeyIdentifier,
                                      __utils.BER
                                  )(value.subjectKeyIdentifier, __utils.BER),
                            /* IF_ABSENT  */ value.authorityKeyIdentifier ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => _encode_AuthorityKeyIdentifier,
                                      __utils.BER
                                  )(value.authorityKeyIdentifier, __utils.BER),
                            /* IF_ABSENT  */ value.certificateValid ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () => _encode_Time,
                                      __utils.BER
                                  )(value.certificateValid, __utils.BER),
                            /* IF_ABSENT  */ value.privateKeyValid === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      5,
                                      () => __utils._encodeGeneralizedTime,
                                      __utils.BER
                                  )(value.privateKeyValid, __utils.BER),
                            /* IF_ABSENT  */ value.subjectPublicKeyAlgID ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      6,
                                      () => __utils._encodeObjectIdentifier,
                                      __utils.BER
                                  )(value.subjectPublicKeyAlgID, __utils.BER),
                            /* IF_ABSENT  */ value.keyUsage === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      7,
                                      () => _encode_KeyUsage,
                                      __utils.BER
                                  )(value.keyUsage, __utils.BER),
                            /* IF_ABSENT  */ value.subjectAltName === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      8,
                                      () => _encode_AltNameType,
                                      __utils.BER
                                  )(value.subjectAltName, __utils.BER),
                            /* IF_ABSENT  */ value.policy === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      9,
                                      () => _encode_CertPolicySet,
                                      __utils.BER
                                  )(value.policy, __utils.BER),
                            /* IF_ABSENT  */ value.pathToName === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      10,
                                      () => _encode_Name,
                                      __utils.BER
                                  )(value.pathToName, __utils.BER),
                            /* IF_ABSENT  */ value.subject === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      11,
                                      () => _encode_Name,
                                      __utils.BER
                                  )(value.subject, __utils.BER),
                            /* IF_ABSENT  */ value.nameConstraints === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      12,
                                      () => _encode_NameConstraintsSyntax,
                                      __utils.BER
                                  )(value.nameConstraints, __utils.BER),
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
    return _cached_encoder_for_CertificateAssertion(value, elGetter);
}

export class CertificatePairAssertion {
    constructor(
        readonly issuedToThisCAAssertion: CertificateAssertion | undefined,
        readonly issuedByThisCAAssertion: CertificateAssertion | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertificatePairAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "issuedToThisCAAssertion",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "issuedByThisCAAssertion",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertificatePairAssertion: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertificatePairAssertion: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertificatePairAssertion: __utils.ASN1Decoder<
    CertificatePairAssertion
> | null = null;
let _cached_encoder_for_CertificatePairAssertion: __utils.ASN1Encoder<
    CertificatePairAssertion
> | null = null;
export function _decode_CertificatePairAssertion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificatePairAssertion) {
        _cached_decoder_for_CertificatePairAssertion = function (
            el: asn1.ASN1Element
        ): CertificatePairAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuedToThisCAAssertion: asn1.OPTIONAL<CertificateAssertion>;
            let issuedByThisCAAssertion: asn1.OPTIONAL<CertificateAssertion>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                issuedToThisCAAssertion: (_el: asn1.ASN1Element): void => {
                    issuedToThisCAAssertion = __utils._decode_implicit<
                        CertificateAssertion
                    >(() => _decode_CertificateAssertion)(_el);
                },
                issuedByThisCAAssertion: (_el: asn1.ASN1Element): void => {
                    issuedByThisCAAssertion = __utils._decode_implicit<
                        CertificateAssertion
                    >(() => _decode_CertificateAssertion)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificatePairAssertion,
                _extension_additions_list_spec_for_CertificatePairAssertion,
                _root_component_type_list_2_spec_for_CertificatePairAssertion,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificatePairAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ issuedToThisCAAssertion,
                issuedByThisCAAssertion,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificatePairAssertion(el);
}
export function _encode_CertificatePairAssertion(
    value: CertificatePairAssertion,
    elGetter: __utils.ASN1Encoder<CertificatePairAssertion>
) {
    if (!_cached_encoder_for_CertificatePairAssertion) {
        _cached_encoder_for_CertificatePairAssertion = function (
            value: CertificatePairAssertion,
            elGetter: __utils.ASN1Encoder<CertificatePairAssertion>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.issuedToThisCAAssertion ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_CertificateAssertion,
                                      __utils.BER
                                  )(value.issuedToThisCAAssertion, __utils.BER),
                            /* IF_ABSENT  */ value.issuedByThisCAAssertion ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_CertificateAssertion,
                                      __utils.BER
                                  )(value.issuedByThisCAAssertion, __utils.BER),
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
    return _cached_encoder_for_CertificatePairAssertion(value, elGetter);
}

// TODO: ObjectAssignment: certificateListExactMatch

export class CertificateListExactAssertion {
    constructor(
        readonly issuer: Name,
        readonly thisUpdate: Time,
        readonly distributionPoint: DistributionPointName | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_CertificateListExactAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "issuer",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "thisUpdate",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "distributionPoint",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertificateListExactAssertion: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertificateListExactAssertion: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertificateListExactAssertion: __utils.ASN1Decoder<
    CertificateListExactAssertion
> | null = null;
let _cached_encoder_for_CertificateListExactAssertion: __utils.ASN1Encoder<
    CertificateListExactAssertion
> | null = null;
export function _decode_CertificateListExactAssertion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificateListExactAssertion) {
        _cached_decoder_for_CertificateListExactAssertion = function (
            el: asn1.ASN1Element
        ): CertificateListExactAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuer!: Name;
            let thisUpdate!: Time;
            let distributionPoint: asn1.OPTIONAL<DistributionPointName>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                issuer: (_el: asn1.ASN1Element): void => {
                    issuer = _decode_Name(_el);
                },
                thisUpdate: (_el: asn1.ASN1Element): void => {
                    thisUpdate = _decode_Time(_el);
                },
                distributionPoint: (_el: asn1.ASN1Element): void => {
                    distributionPoint = _decode_DistributionPointName(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificateListExactAssertion,
                _extension_additions_list_spec_for_CertificateListExactAssertion,
                _root_component_type_list_2_spec_for_CertificateListExactAssertion,
                undefined
            );
            return new CertificateListExactAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ issuer,
                thisUpdate,
                distributionPoint
            );
        };
    }
    return _cached_decoder_for_CertificateListExactAssertion(el);
}
export function _encode_CertificateListExactAssertion(
    value: CertificateListExactAssertion,
    elGetter: __utils.ASN1Encoder<CertificateListExactAssertion>
) {
    if (!_cached_encoder_for_CertificateListExactAssertion) {
        _cached_encoder_for_CertificateListExactAssertion = function (
            value: CertificateListExactAssertion,
            elGetter: __utils.ASN1Encoder<CertificateListExactAssertion>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Name(
                            value.issuer,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_Time(
                            value.thisUpdate,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.distributionPoint === undefined
                            ? undefined
                            : _encode_DistributionPointName(
                                  value.distributionPoint,
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
    return _cached_encoder_for_CertificateListExactAssertion(value, elGetter);
}

// TODO: ObjectAssignment: certificateListMatch

export class CertificateListAssertion {
    constructor(
        readonly issuer: Name | undefined,
        readonly minCRLNumber: CRLNumber | undefined,
        readonly maxCRLNumber: CRLNumber | undefined,
        readonly reasonFlags: ReasonFlags | undefined,
        readonly dateAndTime: Time | undefined,
        readonly distributionPoint: DistributionPointName | undefined,
        readonly authorityKeyIdentifier: AuthorityKeyIdentifier | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CertificateListAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "issuer",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "minCRLNumber",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "maxCRLNumber",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "reasonFlags",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "dateAndTime",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "distributionPoint",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "authorityKeyIdentifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CertificateListAssertion: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CertificateListAssertion: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CertificateListAssertion: __utils.ASN1Decoder<
    CertificateListAssertion
> | null = null;
let _cached_encoder_for_CertificateListAssertion: __utils.ASN1Encoder<
    CertificateListAssertion
> | null = null;
export function _decode_CertificateListAssertion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CertificateListAssertion) {
        _cached_decoder_for_CertificateListAssertion = function (
            el: asn1.ASN1Element
        ): CertificateListAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuer: asn1.OPTIONAL<Name>;
            let minCRLNumber: asn1.OPTIONAL<CRLNumber>;
            let maxCRLNumber: asn1.OPTIONAL<CRLNumber>;
            let reasonFlags: asn1.OPTIONAL<ReasonFlags>;
            let dateAndTime: asn1.OPTIONAL<Time>;
            let distributionPoint: asn1.OPTIONAL<DistributionPointName>;
            let authorityKeyIdentifier: asn1.OPTIONAL<AuthorityKeyIdentifier>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                issuer: (_el: asn1.ASN1Element): void => {
                    issuer = _decode_Name(_el);
                },
                minCRLNumber: (_el: asn1.ASN1Element): void => {
                    minCRLNumber = __utils._decode_implicit<CRLNumber>(
                        () => _decode_CRLNumber
                    )(_el);
                },
                maxCRLNumber: (_el: asn1.ASN1Element): void => {
                    maxCRLNumber = __utils._decode_implicit<CRLNumber>(
                        () => _decode_CRLNumber
                    )(_el);
                },
                reasonFlags: (_el: asn1.ASN1Element): void => {
                    reasonFlags = _decode_ReasonFlags(_el);
                },
                dateAndTime: (_el: asn1.ASN1Element): void => {
                    dateAndTime = _decode_Time(_el);
                },
                distributionPoint: (_el: asn1.ASN1Element): void => {
                    distributionPoint = __utils._decode_implicit<
                        DistributionPointName
                    >(() => _decode_DistributionPointName)(_el);
                },
                authorityKeyIdentifier: (_el: asn1.ASN1Element): void => {
                    authorityKeyIdentifier = __utils._decode_implicit<
                        AuthorityKeyIdentifier
                    >(() => _decode_AuthorityKeyIdentifier)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificateListAssertion,
                _extension_additions_list_spec_for_CertificateListAssertion,
                _root_component_type_list_2_spec_for_CertificateListAssertion,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificateListAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ issuer,
                minCRLNumber,
                maxCRLNumber,
                reasonFlags,
                dateAndTime,
                distributionPoint,
                authorityKeyIdentifier,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificateListAssertion(el);
}
export function _encode_CertificateListAssertion(
    value: CertificateListAssertion,
    elGetter: __utils.ASN1Encoder<CertificateListAssertion>
) {
    if (!_cached_encoder_for_CertificateListAssertion) {
        _cached_encoder_for_CertificateListAssertion = function (
            value: CertificateListAssertion,
            elGetter: __utils.ASN1Encoder<CertificateListAssertion>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : _encode_Name(value.issuer, __utils.BER),
                            /* IF_ABSENT  */ value.minCRLNumber === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_CRLNumber,
                                      __utils.BER
                                  )(value.minCRLNumber, __utils.BER),
                            /* IF_ABSENT  */ value.maxCRLNumber === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_CRLNumber,
                                      __utils.BER
                                  )(value.maxCRLNumber, __utils.BER),
                            /* IF_ABSENT  */ value.reasonFlags === undefined
                                ? undefined
                                : _encode_ReasonFlags(
                                      value.reasonFlags,
                                      __utils.BER
                                  ),
                            /* IF_ABSENT  */ value.dateAndTime === undefined
                                ? undefined
                                : _encode_Time(value.dateAndTime, __utils.BER),
                            /* IF_ABSENT  */ value.distributionPoint ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_DistributionPointName,
                                      __utils.BER
                                  )(value.distributionPoint, __utils.BER),
                            /* IF_ABSENT  */ value.authorityKeyIdentifier ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => _encode_AuthorityKeyIdentifier,
                                      __utils.BER
                                  )(value.authorityKeyIdentifier, __utils.BER),
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
    return _cached_encoder_for_CertificateListAssertion(value, elGetter);
}

// TODO: ObjectAssignment: algorithmIdentifierMatch

// TODO: ObjectAssignment: policyMatch

// TODO: ObjectAssignment: pkiPathMatch

export class PkiPathMatchSyntax {
    constructor(
        readonly firstIssuer: Name,
        readonly lastSubject: Name,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PkiPathMatchSyntax: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "firstIssuer",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "lastSubject",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PkiPathMatchSyntax: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PkiPathMatchSyntax: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PkiPathMatchSyntax: __utils.ASN1Decoder<
    PkiPathMatchSyntax
> | null = null;
let _cached_encoder_for_PkiPathMatchSyntax: __utils.ASN1Encoder<
    PkiPathMatchSyntax
> | null = null;
export function _decode_PkiPathMatchSyntax(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PkiPathMatchSyntax) {
        _cached_decoder_for_PkiPathMatchSyntax = function (
            el: asn1.ASN1Element
        ): PkiPathMatchSyntax {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "PkiPathMatchSyntax contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "firstIssuer";
            sequence[1].name = "lastSubject";
            let firstIssuer!: Name;
            let lastSubject!: Name;
            firstIssuer = _decode_Name(sequence[0]);
            lastSubject = _decode_Name(sequence[1]);
            // TODO: Validate values.
            return new PkiPathMatchSyntax(
                firstIssuer,
                lastSubject,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_PkiPathMatchSyntax(el);
}
export function _encode_PkiPathMatchSyntax(
    value: PkiPathMatchSyntax,
    elGetter: __utils.ASN1Encoder<PkiPathMatchSyntax>
) {
    if (!_cached_encoder_for_PkiPathMatchSyntax) {
        _cached_encoder_for_PkiPathMatchSyntax = function (
            value: PkiPathMatchSyntax,
            elGetter: __utils.ASN1Encoder<PkiPathMatchSyntax>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Name(
                                value.firstIssuer,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_Name(
                                value.lastSubject,
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
    return _cached_encoder_for_PkiPathMatchSyntax(value, elGetter);
}

// TODO: ObjectAssignment: enhancedCertificateMatch

export class AltName {
    constructor(
        readonly altnameType: AltNameType,
        readonly altNameValue: GeneralName | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_AltName: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "altnameType",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "altNameValue",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AltName: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AltName: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AltName: __utils.ASN1Decoder<AltName> | null = null;
let _cached_encoder_for_AltName: __utils.ASN1Encoder<AltName> | null = null;
export function _decode_AltName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AltName) {
        _cached_decoder_for_AltName = function (el: asn1.ASN1Element): AltName {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let altnameType!: AltNameType;
            let altNameValue: asn1.OPTIONAL<GeneralName>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                altnameType: (_el: asn1.ASN1Element): void => {
                    altnameType = _decode_AltNameType(_el);
                },
                altNameValue: (_el: asn1.ASN1Element): void => {
                    altNameValue = _decode_GeneralName(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AltName,
                _extension_additions_list_spec_for_AltName,
                _root_component_type_list_2_spec_for_AltName,
                undefined
            );
            return new AltName(
                /* SEQUENCE_CONSTRUCTOR_CALL */ altnameType,
                altNameValue
            );
        };
    }
    return _cached_decoder_for_AltName(el);
}
export function _encode_AltName(
    value: AltName,
    elGetter: __utils.ASN1Encoder<AltName>
) {
    if (!_cached_encoder_for_AltName) {
        _cached_encoder_for_AltName = function (
            value: AltName,
            elGetter: __utils.ASN1Encoder<AltName>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AltNameType(
                            value.altnameType,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.altNameValue === undefined
                            ? undefined
                            : _encode_GeneralName(
                                  value.altNameValue,
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
    return _cached_encoder_for_AltName(value, elGetter);
}

export class EnhancedCertificateAssertion {
    constructor(
        readonly serialNumber: CertificateSerialNumber | undefined,
        readonly issuer: Name | undefined,
        readonly subjectKeyIdentifier: SubjectKeyIdentifier | undefined,
        readonly authorityKeyIdentifier: AuthorityKeyIdentifier | undefined,
        readonly certificateValid: Time | undefined,
        readonly privateKeyValid: asn1.GeneralizedTime | undefined,
        readonly subjectPublicKeyAlgID: asn1.OBJECT_IDENTIFIER | undefined,
        readonly keyUsage: KeyUsage | undefined,
        readonly subjectAltName: AltName | undefined,
        readonly policy: CertPolicySet | undefined,
        readonly pathToName: GeneralNames | undefined,
        readonly subject: Name | undefined,
        readonly nameConstraints: NameConstraintsSyntax | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_EnhancedCertificateAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "serialNumber",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "issuer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subjectKeyIdentifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "authorityKeyIdentifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certificateValid",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "privateKeyValid",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subjectPublicKeyAlgID",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "keyUsage",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subjectAltName",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "policy",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 9),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "pathToName",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subject",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 11),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nameConstraints",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 12),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EnhancedCertificateAssertion: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EnhancedCertificateAssertion: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EnhancedCertificateAssertion: __utils.ASN1Decoder<
    EnhancedCertificateAssertion
> | null = null;
let _cached_encoder_for_EnhancedCertificateAssertion: __utils.ASN1Encoder<
    EnhancedCertificateAssertion
> | null = null;
export function _decode_EnhancedCertificateAssertion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EnhancedCertificateAssertion) {
        _cached_decoder_for_EnhancedCertificateAssertion = function (
            el: asn1.ASN1Element
        ): EnhancedCertificateAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let serialNumber: asn1.OPTIONAL<CertificateSerialNumber>;
            let issuer: asn1.OPTIONAL<Name>;
            let subjectKeyIdentifier: asn1.OPTIONAL<SubjectKeyIdentifier>;
            let authorityKeyIdentifier: asn1.OPTIONAL<AuthorityKeyIdentifier>;
            let certificateValid: asn1.OPTIONAL<Time>;
            let privateKeyValid: asn1.OPTIONAL<asn1.GeneralizedTime>;
            let subjectPublicKeyAlgID: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
            let keyUsage: asn1.OPTIONAL<KeyUsage>;
            let subjectAltName: asn1.OPTIONAL<AltName>;
            let policy: asn1.OPTIONAL<CertPolicySet>;
            let pathToName: asn1.OPTIONAL<GeneralNames>;
            let subject: asn1.OPTIONAL<Name>;
            let nameConstraints: asn1.OPTIONAL<NameConstraintsSyntax>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                serialNumber: (_el: asn1.ASN1Element): void => {
                    serialNumber = __utils._decode_implicit<
                        CertificateSerialNumber
                    >(() => _decode_CertificateSerialNumber)(_el);
                },
                issuer: (_el: asn1.ASN1Element): void => {
                    issuer = __utils._decode_implicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                subjectKeyIdentifier: (_el: asn1.ASN1Element): void => {
                    subjectKeyIdentifier = __utils._decode_implicit<
                        SubjectKeyIdentifier
                    >(() => _decode_SubjectKeyIdentifier)(_el);
                },
                authorityKeyIdentifier: (_el: asn1.ASN1Element): void => {
                    authorityKeyIdentifier = __utils._decode_implicit<
                        AuthorityKeyIdentifier
                    >(() => _decode_AuthorityKeyIdentifier)(_el);
                },
                certificateValid: (_el: asn1.ASN1Element): void => {
                    certificateValid = __utils._decode_implicit<Time>(
                        () => _decode_Time
                    )(_el);
                },
                privateKeyValid: (_el: asn1.ASN1Element): void => {
                    privateKeyValid = __utils._decode_implicit<
                        asn1.GeneralizedTime
                    >(() => __utils._decodeGeneralizedTime)(_el);
                },
                subjectPublicKeyAlgID: (_el: asn1.ASN1Element): void => {
                    subjectPublicKeyAlgID = __utils._decode_implicit<
                        asn1.OBJECT_IDENTIFIER
                    >(() => __utils._decodeObjectIdentifier)(_el);
                },
                keyUsage: (_el: asn1.ASN1Element): void => {
                    keyUsage = __utils._decode_implicit<KeyUsage>(
                        () => _decode_KeyUsage
                    )(_el);
                },
                subjectAltName: (_el: asn1.ASN1Element): void => {
                    subjectAltName = __utils._decode_implicit<AltName>(
                        () => _decode_AltName
                    )(_el);
                },
                policy: (_el: asn1.ASN1Element): void => {
                    policy = __utils._decode_implicit<CertPolicySet>(
                        () => _decode_CertPolicySet
                    )(_el);
                },
                pathToName: (_el: asn1.ASN1Element): void => {
                    pathToName = __utils._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
                subject: (_el: asn1.ASN1Element): void => {
                    subject = __utils._decode_implicit<Name>(
                        () => _decode_Name
                    )(_el);
                },
                nameConstraints: (_el: asn1.ASN1Element): void => {
                    nameConstraints = __utils._decode_implicit<
                        NameConstraintsSyntax
                    >(() => _decode_NameConstraintsSyntax)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EnhancedCertificateAssertion,
                _extension_additions_list_spec_for_EnhancedCertificateAssertion,
                _root_component_type_list_2_spec_for_EnhancedCertificateAssertion,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EnhancedCertificateAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ serialNumber,
                issuer,
                subjectKeyIdentifier,
                authorityKeyIdentifier,
                certificateValid,
                privateKeyValid,
                subjectPublicKeyAlgID,
                keyUsage,
                subjectAltName,
                policy,
                pathToName,
                subject,
                nameConstraints,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EnhancedCertificateAssertion(el);
}
export function _encode_EnhancedCertificateAssertion(
    value: EnhancedCertificateAssertion,
    elGetter: __utils.ASN1Encoder<EnhancedCertificateAssertion>
) {
    if (!_cached_encoder_for_EnhancedCertificateAssertion) {
        _cached_encoder_for_EnhancedCertificateAssertion = function (
            value: EnhancedCertificateAssertion,
            elGetter: __utils.ASN1Encoder<EnhancedCertificateAssertion>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.serialNumber === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_CertificateSerialNumber,
                                      __utils.BER
                                  )(value.serialNumber, __utils.BER),
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_Name,
                                      __utils.BER
                                  )(value.issuer, __utils.BER),
                            /* IF_ABSENT  */ value.subjectKeyIdentifier ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_SubjectKeyIdentifier,
                                      __utils.BER
                                  )(value.subjectKeyIdentifier, __utils.BER),
                            /* IF_ABSENT  */ value.authorityKeyIdentifier ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => _encode_AuthorityKeyIdentifier,
                                      __utils.BER
                                  )(value.authorityKeyIdentifier, __utils.BER),
                            /* IF_ABSENT  */ value.certificateValid ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () => _encode_Time,
                                      __utils.BER
                                  )(value.certificateValid, __utils.BER),
                            /* IF_ABSENT  */ value.privateKeyValid === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      5,
                                      () => __utils._encodeGeneralizedTime,
                                      __utils.BER
                                  )(value.privateKeyValid, __utils.BER),
                            /* IF_ABSENT  */ value.subjectPublicKeyAlgID ===
                            undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      6,
                                      () => __utils._encodeObjectIdentifier,
                                      __utils.BER
                                  )(value.subjectPublicKeyAlgID, __utils.BER),
                            /* IF_ABSENT  */ value.keyUsage === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      7,
                                      () => _encode_KeyUsage,
                                      __utils.BER
                                  )(value.keyUsage, __utils.BER),
                            /* IF_ABSENT  */ value.subjectAltName === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      8,
                                      () => _encode_AltName,
                                      __utils.BER
                                  )(value.subjectAltName, __utils.BER),
                            /* IF_ABSENT  */ value.policy === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      9,
                                      () => _encode_CertPolicySet,
                                      __utils.BER
                                  )(value.policy, __utils.BER),
                            /* IF_ABSENT  */ value.pathToName === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      10,
                                      () => _encode_GeneralNames,
                                      __utils.BER
                                  )(value.pathToName, __utils.BER),
                            /* IF_ABSENT  */ value.subject === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      11,
                                      () => _encode_Name,
                                      __utils.BER
                                  )(value.subject, __utils.BER),
                            /* IF_ABSENT  */ value.nameConstraints === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      12,
                                      () => _encode_NameConstraintsSyntax,
                                      __utils.BER
                                  )(value.nameConstraints, __utils.BER),
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
    return _cached_encoder_for_EnhancedCertificateAssertion(value, elGetter);
}

// TODO: ObjectAssignment: certExactAssertion

// TODO: ObjectAssignment: certAssertion

// TODO: ObjectAssignment: certPairExactAssertion

// TODO: ObjectAssignment: certPairAssertion

// TODO: ObjectAssignment: certListExactAssertion

// TODO: ObjectAssignment: certListAssertion

// TODO: ObjectAssignment: algorithmIdentifier

export const id_ce_subjectDirectoryAttributes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    id_ce
);

export const id_ce_subjectKeyIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [14],
    id_ce
);

export const id_ce_keyUsage: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [15],
    id_ce
);

export const id_ce_privateKeyUsagePeriod: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [16],
    id_ce
);

export const id_ce_subjectAltName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [17],
    id_ce
);

export const id_ce_issuerAltName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [18],
    id_ce
);

export const id_ce_basicConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [19],
    id_ce
);

export const id_ce_cRLNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [20],
    id_ce
);

export const id_ce_reasonCode: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [21],
    id_ce
);

export const id_ce_holdInstructionCode: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [23],
    id_ce
);

export const id_ce_invalidityDate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [24],
    id_ce
);

export const id_ce_deltaCRLIndicator: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [27],
    id_ce
);

export const id_ce_issuingDistributionPoint: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [28],
    id_ce
);

export const id_ce_certificateIssuer: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [29],
    id_ce
);

export const id_ce_nameConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [30],
    id_ce
);

export const id_ce_cRLDistributionPoints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [31],
    id_ce
);

export const id_ce_certificatePolicies: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [32],
    id_ce
);

export const id_ce_policyMappings: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [33],
    id_ce
);

export const id_ce_authorityKeyIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [35],
    id_ce
);

export const id_ce_policyConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [36],
    id_ce
);

export const id_ce_extKeyUsage: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [37],
    id_ce
);

export const id_ce_cRLStreamIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [40],
    id_ce
);

export const id_ce_cRLScope: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [44],
    id_ce
);

export const id_ce_statusReferrals: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [45],
    id_ce
);

export const id_ce_freshestCRL: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [46],
    id_ce
);

export const id_ce_orderedList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [47],
    id_ce
);

export const id_ce_baseUpdateTime: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [51],
    id_ce
);

export const id_ce_deltaInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [53],
    id_ce
);

export const id_ce_inhibitAnyPolicy: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [54],
    id_ce
);

export const id_ce_toBeRevoked: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [58],
    id_ce
);

export const id_ce_revokedGroups: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [59],
    id_ce
);

export const id_ce_expiredCertsOnCRL: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [60],
    id_ce
);

export const id_ce_aAissuingDistributionPoint: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [63],
    id_ce
);

export const id_ce_authorizationValidation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [70],
    id_ce
);

export const id_mr_certificateExactMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [34],
    id_mr
);

export const id_mr_certificateMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [35],
    id_mr
);

export const id_mr_certificatePairExactMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [36],
    id_mr
);

export const id_mr_certificatePairMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [37],
    id_mr
);

export const id_mr_certificateListExactMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [38],
    id_mr
);

export const id_mr_certificateListMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [39],
    id_mr
);

export const id_mr_algorithmIdentifierMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [40],
    id_mr
);

export const id_mr_policyMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [60],
    id_mr
);

export const id_mr_pkiPathMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [62],
    id_mr
);

export const id_mr_enhancedCertificateMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [65],
    id_mr
);

export const id_ldx_certExactAssertion: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_ldx
);

export const id_ldx_certAssertion: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_ldx
);

export const id_ldx_certPairExactAssertion: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_ldx
);

export const id_ldx_certPairAssertion: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_ldx
);

export const id_ldx_certListExactAssertion: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    id_ldx
);

export const id_ldx_certListAssertion: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    id_ldx
);

export const id_ldx_algorithmIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    id_ldx
);

export const anyPolicy: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [0],
    id_ce_certificatePolicies
);

/* END_MODULE CertificateExtensions */
