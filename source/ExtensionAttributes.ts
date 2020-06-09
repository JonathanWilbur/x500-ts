
// ExtensionAttributes
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    attributeCertificateDefinitions,
    authenticationFramework,
    certificateExtensions,
    extensionAttributes,
    id_ce,
    informationFramework
} from "./UsefulDefinitions";
export {
    attributeCertificateDefinitions,
    authenticationFramework,
    certificateExtensions,
    extensionAttributes,
    id_ce,
    informationFramework
} from "./UsefulDefinitions";

import * as InformationFramework from "./InformationFramework";
import {
    ATTRIBUTE,
    SYNTAX_NAME
} from "./InformationFramework";
export {
    ATTRIBUTE,
    SYNTAX_NAME
} from "./InformationFramework";

import * as AuthenticationFramework from "./AuthenticationFramework";
import {
    EXTENSION
} from "./AuthenticationFramework";
export {
    EXTENSION
} from "./AuthenticationFramework";

import * as CertificateExtensions from "./CertificateExtensions";
import {
    aAissuingDistributionPoint,
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
    reasonCode,
    revokedGroups,
    statusReferrals,
    subjectAltName,
    subjectDirectoryAttributes,
    subjectKeyIdentifier,
    toBeRevoked
} from "./CertificateExtensions";
export {
    aAissuingDistributionPoint,
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
    reasonCode,
    revokedGroups,
    statusReferrals,
    subjectAltName,
    subjectDirectoryAttributes,
    subjectKeyIdentifier,
    toBeRevoked
} from "./CertificateExtensions";

import * as AttributeCertificateDefinitions from "./AttributeCertificateDefinitions";
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
    issuedOnBehalfOf,
    noAssertion,
    noRevAvail,
    roleSpecCertIdentifier,
    singleUse,
    sOAIdentifier,
    targetingInformation,
    timeSpecification,
    userNotice
} from "./AttributeCertificateDefinitions";
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
    userNotice
} from "./AttributeCertificateDefinitions";


const itu_t: number = 0;
const itu_r: number = 0;
const ccitt: number = 0;
const iso: number = 1;
const joint_iso_itu_t: number = 2;
const joint_iso_ccitt: number = 2;

export class ExtensionAttribute_value_Item {
    constructor (
        readonly mandatory: asn1.BOOLEAN | undefined,
        readonly critical: asn1.BOOLEAN | undefined,
        readonly ext: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_ExtensionAttribute_value_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("mandatory", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("critical", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("ext", false, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ExtensionAttribute_value_Item: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ExtensionAttribute_value_Item: __utils.ComponentSpec[] = [
    
];
export const _decode_ExtensionAttribute_value_Item = function (el: asn1.ASN1Element): ExtensionAttribute_value_Item {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let mandatory: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let critical: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let ext!: asn1.ASN1Element;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "mandatory": (_el: asn1.ASN1Element): void => { mandatory = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "critical": (_el: asn1.ASN1Element): void => { critical = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "ext": (_el: asn1.ASN1Element): void => { ext = __utils._decode_explicit<asn1.ASN1Element>(() => __utils._decodeAny)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtensionAttribute_value_Item,
        _extension_additions_list_spec_for_ExtensionAttribute_value_Item,
        _root_component_type_list_2_spec_for_ExtensionAttribute_value_Item,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ExtensionAttribute_value_Item( /* SEQUENCE_CONSTRUCTOR_CALL */
        mandatory,
        critical,
        ext,
        _unrecognizedExtensionsList
    );
};
export const _encode_ExtensionAttribute_value_Item = function (value: ExtensionAttribute_value_Item, elGetter: __utils.ASN1Encoder<ExtensionAttribute_value_Item>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            ((value.mandatory !== undefined && value.mandatory !== false) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeBoolean, __utils.BER)(value.mandatory, __utils.BER) : undefined),
            ((value.critical !== undefined && value.critical !== false) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeBoolean, __utils.BER)(value.critical, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeAny, __utils.BER)(value.ext, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class ExtensionAttribute {
    constructor (
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly value: ExtensionAttribute_value_Item[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_ExtensionAttribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("type", false, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("value", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ExtensionAttribute: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ExtensionAttribute: __utils.ComponentSpec[] = [
    
];
export const _decode_ExtensionAttribute = function (el: asn1.ASN1Element): ExtensionAttribute {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("ExtensionAttribute contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "type";
    sequence[1].name = "value";
    let type_!: asn1.OBJECT_IDENTIFIER;
    let value!: ExtensionAttribute_value_Item[];
    type_ = __utils._decodeObjectIdentifier(sequence[0]);
    value = __utils._decodeSetOf<ExtensionAttribute_value_Item>(() => _decode_ExtensionAttribute_value_Item)(sequence[1]);
    // TODO: Validate values.
    return new ExtensionAttribute(
        type_,
        value,
        sequence.slice(2),
    );
};
export const _encode_ExtensionAttribute = function (value: ExtensionAttribute, elGetter: __utils.ASN1Encoder<ExtensionAttribute>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeObjectIdentifier(value.type_, __utils.BER),
            __utils._encodeSetOf<ExtensionAttribute_value_Item>(() => _encode_ExtensionAttribute_value_Item, __utils.BER)(value.value, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: extensionSyntax

// TODO: ObjectAssignment: a-authorityKeyIdentifier

// TODO: ObjectAssignment: a-keyUsage

// TODO: ObjectAssignment: a-extKeyUsage

// TODO: ObjectAssignment: a-privateKeyUsagePeriod

// TODO: ObjectAssignment: a-certificatePolicies

// TODO: ObjectAssignment: a-policyMappings

// TODO: ObjectAssignment: a-authorizationValidation

// TODO: ObjectAssignment: a-subjectAltName

// TODO: ObjectAssignment: a-issuerAltName

// TODO: ObjectAssignment: a-subjectDirectoryAttributes

// TODO: ObjectAssignment: a-basicConstraints

// TODO: ObjectAssignment: a-nameConstraints

// TODO: ObjectAssignment: a-policyConstraints

// TODO: ObjectAssignment: a-cRLNumber

// TODO: ObjectAssignment: a-statusReferrals

// TODO: ObjectAssignment: a-cRLStreamIdentifier

// TODO: ObjectAssignment: a-orderedList

// TODO: ObjectAssignment: a-deltaInfo

// TODO: ObjectAssignment: a-toBeRevoked

// TODO: ObjectAssignment: a-revokedGroups

// TODO: ObjectAssignment: a-expiredCertsOnCRL

// TODO: ObjectAssignment: a-reasonCode

// TODO: ObjectAssignment: a-holdInstructionCode

// TODO: ObjectAssignment: a-invalidityDate

// TODO: ObjectAssignment: a-cRLDistributionPoints

// TODO: ObjectAssignment: a-issuingDistributionPoint

// TODO: ObjectAssignment: a-certificateIssuer

// TODO: ObjectAssignment: a-deltaCRLIndicator

// TODO: ObjectAssignment: a-baseUpdateTime

// TODO: ObjectAssignment: a-freshestCRL

// TODO: ObjectAssignment: a-timeSpecification

// TODO: ObjectAssignment: a-targetingInformation

// TODO: ObjectAssignment: a-userNotice

// TODO: ObjectAssignment: a-acceptablePrivilegePolicies

// TODO: ObjectAssignment: a-singleUse

// TODO: ObjectAssignment: a-groupAC

// TODO: ObjectAssignment: a-noRevAvail

// TODO: ObjectAssignment: a-sOAIdentifier

// TODO: ObjectAssignment: a-attributeDescriptor

// TODO: ObjectAssignment: a-roleSpecCertIdentifier

// TODO: ObjectAssignment: a-basicAttConstraints

// TODO: ObjectAssignment: a-delegatedNameConstraints

// TODO: ObjectAssignment: a-acceptableCertPolicies

// TODO: ObjectAssignment: a-authorityAttributeIdentifier

// TODO: ObjectAssignment: a-indirectIssuer

// TODO: ObjectAssignment: a-issuedOnBehalfOf

// TODO: ObjectAssignment: a-noAssertion

// TODO: ObjectAssignment: a-allowedAttributeAssignments

// TODO: ObjectAssignment: a-attributeMappings

// TODO: ObjectAssignment: a-holderNameConstraints

// TODO: ObjectAssignment: a-aAissuingDistributionPoint

export const id_ce_a_subjectDirectoryAttributes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
    1,
], id_ce);

export const id_ce_a_subjectKeyIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    14,
    1,
], id_ce);

export const id_ce_a_keyUsage: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    15,
    1,
], id_ce);

export const id_ce_a_privateKeyUsagePeriod: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    16,
    1,
], id_ce);

export const id_ce_a_subjectAltName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    17,
    1,
], id_ce);

export const id_ce_a_issuerAltName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    18,
    1,
], id_ce);

export const id_ce_a_basicConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    19,
    1,
], id_ce);

export const id_ce_a_cRLNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    20,
    1,
], id_ce);

export const id_ce_a_reasonCode: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    21,
    1,
], id_ce);

export const id_ce_a_holdInstructionCode: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    23,
    1,
], id_ce);

export const id_ce_a_invalidityDate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    24,
    1,
], id_ce);

export const id_ce_a_deltaCRLIndicator: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    27,
    1,
], id_ce);

export const id_ce_a_issuingDistributionPoint: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    28,
    1,
], id_ce);

export const id_ce_a_certificateIssuer: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    29,
    1,
], id_ce);

export const id_ce_a_nameConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    30,
    1,
], id_ce);

export const id_ce_a_cRLDistributionPoints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    31,
    1,
], id_ce);

export const id_ce_a_certificatePolicies: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    32,
    1,
], id_ce);

export const id_ce_a_policyMappings: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    33,
    1,
], id_ce);

export const id_ce_a_authorityKeyIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    35,
    1,
], id_ce);

export const id_ce_a_policyConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    36,
    1,
], id_ce);

export const id_ce_a_extKeyUsage: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    37,
    1,
], id_ce);

export const id_ce_a_authorityAttributeIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    38,
    1,
], id_ce);

export const id_ce_a_roleSpecCertIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    39,
    1,
], id_ce);

export const id_ce_a_cRLStreamIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    40,
    1,
], id_ce);

export const id_ce_a_basicAttConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    41,
    1,
], id_ce);

export const id_ce_a_delegatedNameConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    42,
    1,
], id_ce);

export const id_ce_a_timeSpecification: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    43,
    1,
], id_ce);

export const id_ce_a_cRLScope: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    44,
    1,
], id_ce);

export const id_ce_a_statusReferrals: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    45,
    1,
], id_ce);

export const id_ce_a_freshestCRL: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    46,
    1,
], id_ce);

export const id_ce_a_orderedList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    47,
    1,
], id_ce);

export const id_ce_a_attributeDescriptor: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    48,
    1,
], id_ce);

export const id_ce_a_userNotice: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    49,
    1,
], id_ce);

export const id_ce_a_sOAIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    50,
    1,
], id_ce);

export const id_ce_a_baseUpdateTime: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    51,
    1,
], id_ce);

export const id_ce_a_acceptableCertPolicies: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    52,
    1,
], id_ce);

export const id_ce_a_deltaInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    53,
    1,
], id_ce);

export const id_ce_a_inhibitAnyPolicy: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    54,
    1,
], id_ce);

export const id_ce_a_targetingInformation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    55,
    1,
], id_ce);

export const id_ce_a_noRevAvail: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    56,
    1,
], id_ce);

export const id_ce_a_acceptablePrivilegePolicies: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    57,
    1,
], id_ce);

export const id_ce_a_toBeRevoked: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    58,
    1,
], id_ce);

export const id_ce_a_revokedGroups: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    59,
    1,
], id_ce);

export const id_ce_a_expiredCertsOnCRL: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    60,
    1,
], id_ce);

export const id_ce_a_indirectIssuer: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    61,
    1,
], id_ce);

export const id_ce_a_noAssertion: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    62,
    1,
], id_ce);

export const id_ce_a_aAissuingDistributionPoint: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    63,
    1,
], id_ce);

export const id_ce_a_issuedOnBehalfOf: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    64,
    1,
], id_ce);

export const id_ce_a_singleUse: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    65,
    1,
], id_ce);

export const id_ce_a_groupAC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    66,
    1,
], id_ce);

export const id_ce_a_allowedAttributeAssignments: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    67,
    1,
], id_ce);

export const id_ce_a_attributeMappings: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    68,
    1,
], id_ce);

export const id_ce_a_holderNameConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    69,
    1,
], id_ce);

export const id_ce_a_authorizationValidation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    70,
    1,
], id_ce);

export const id_asx_subjectDirectoryAttributes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    9,
    2,
], id_ce);

export const id_asx_subjectKeyIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    14,
    2,
], id_ce);

export const id_asx_keyUsage: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    15,
    2,
], id_ce);

export const id_asx_privateKeyUsagePeriod: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    16,
    2,
], id_ce);

export const id_asx_subjectAltName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    17,
    2,
], id_ce);

export const id_asx_issuerAltName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    18,
    2,
], id_ce);

export const id_asx_basicConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    19,
    2,
], id_ce);

export const id_asx_cRLNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    20,
    2,
], id_ce);

export const id_asx_reasonCode: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    21,
    2,
], id_ce);

export const id_asx_holdInstructionCode: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    23,
    2,
], id_ce);

export const id_asx_invalidityDate: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    24,
    2,
], id_ce);

export const id_asx_deltaCRLIndicator: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    27,
    2,
], id_ce);

export const id_asx_issuingDistributionPoint: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    28,
    2,
], id_ce);

export const id_asx_certificateIssuer: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    29,
    2,
], id_ce);

export const id_asx_nameConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    30,
    2,
], id_ce);

export const id_asx_cRLDistributionPoints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    31,
    2,
], id_ce);

export const id_asx_certificatePolicies: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    32,
    2,
], id_ce);

export const id_asx_policyMappings: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    33,
    2,
], id_ce);

export const id_asx_authorityKeyIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    35,
    2,
], id_ce);

export const id_asx_policyConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    36,
    2,
], id_ce);

export const id_asx_extKeyUsage: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    37,
    2,
], id_ce);

export const id_asx_authorityAttributeIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    38,
    2,
], id_ce);

export const id_asx_roleSpecCertIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    39,
    2,
], id_ce);

export const id_asx_cRLStreamIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    40,
    2,
], id_ce);

export const id_asx_basicAttConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    41,
    2,
], id_ce);

export const id_asx_delegatedNameConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    42,
    2,
], id_ce);

export const id_asx_timeSpecification: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    43,
    2,
], id_ce);

export const id_asx_cRLScope: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    44,
    2,
], id_ce);

export const id_asx_statusReferrals: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    45,
    2,
], id_ce);

export const id_asx_freshestCRL: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    46,
    2,
], id_ce);

export const id_asx_orderedList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    47,
    2,
], id_ce);

export const id_asx_attributeDescriptor: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    48,
    2,
], id_ce);

export const id_asx_userNotice: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    49,
    2,
], id_ce);

export const id_asx_sOAIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    50,
    2,
], id_ce);

export const id_asx_baseUpdateTime: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    51,
    2,
], id_ce);

export const id_asx_acceptableCertPolicies: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    52,
    2,
], id_ce);

export const id_asx_deltaInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    53,
    2,
], id_ce);

export const id_asx_inhibitAnyPolicy: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    54,
    2,
], id_ce);

export const id_asx_targetingInformation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    55,
    2,
], id_ce);

export const id_asx_noRevAvail: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    56,
    2,
], id_ce);

export const id_asx_acceptablePrivilegePolicies: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    57,
    2,
], id_ce);

export const id_asx_toBeRevoked: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    58,
    2,
], id_ce);

export const id_asx_revokedGroups: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    59,
    2,
], id_ce);

export const id_asx_expiredCertsOnCRL: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    60,
    2,
], id_ce);

export const id_asx_indirectIssuer: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    61,
    2,
], id_ce);

export const id_asx_noAssertion: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    62,
    2,
], id_ce);

export const id_asx_aAissuingDistributionPoint: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    63,
    2,
], id_ce);

export const id_asx_issuedOnBehalfOf: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    64,
    2,
], id_ce);

export const id_asx_singleUse: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    65,
    2,
], id_ce);

export const id_asx_groupAC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    66,
    2,
], id_ce);

export const id_asx_allowedAttributeAssignments: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    67,
    2,
], id_ce);

export const id_asx_attributeMappings: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    68,
    2,
], id_ce);

export const id_asx_holderNameConstraints: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    69,
    2,
], id_ce);

export const id_asx_authorizationValidation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    70,
    2,
], id_ce);

