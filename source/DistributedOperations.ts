
// DistributedOperations
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    basicAccessControl,
    commonProtocolSpecification,
    directoryAbstractService,
    enhancedSecurity,
    informationFramework,
    selectedAttributeTypes,
    serviceAdministration
} from "./UsefulDefinitions";

import * as InformationFramework from "./InformationFramework";
import {
    DistinguishedName,
    Name,
    RDNSequence,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
    _decode_Name,
    _encode_Name,
    _decode_RDNSequence,
    _encode_RDNSequence
} from "./InformationFramework";

import * as ServiceAdministration from "./ServiceAdministration";
import {
    MRMapping,
    SearchRuleId,
    _decode_MRMapping,
    _encode_MRMapping,
    _decode_SearchRuleId,
    _encode_SearchRuleId
} from "./ServiceAdministration";

import * as BasicAccessControl from "./BasicAccessControl";
import {
    AuthenticationLevel,
    _decode_AuthenticationLevel,
    _encode_AuthenticationLevel
} from "./BasicAccessControl";

import * as EnhancedSecurity from "./EnhancedSecurity";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED
} from "./EnhancedSecurity";

import * as DirectoryAbstractService from "./DirectoryAbstractService";
import {
    abandon,
    addEntry,
    administerPassword,
    changePassword,
    CommonResults,
    compare,
    directoryBindError,
    ldapTransport,
    linkedLDAP,
    list,
    modifyDN,
    modifyEntry,
    read,
    referral,
    removeEntry,
    search,
    SecurityParameters,
    SimpleCredentials,
    SpkmCredentials,
    StrongCredentials,
    Versions,
    _decode_CommonResults,
    _encode_CommonResults,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
    _decode_SimpleCredentials,
    _encode_SimpleCredentials,
    _decode_SpkmCredentials,
    _encode_SpkmCredentials,
    _decode_StrongCredentials,
    _encode_StrongCredentials,
    _decode_Versions,
    _encode_Versions
} from "./DirectoryAbstractService";

import * as CommonProtocolSpecification from "./CommonProtocolSpecification";
import {
    ERROR,
    id_errcode_dsaReferral,
    OPERATION
} from "./CommonProtocolSpecification";

import * as SelectedAttributeTypes from "./SelectedAttributeTypes";
import {
    PresentationAddress,
    ProtocolInformation,
    UnboundedDirectoryString,
    UniqueIdentifier,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
    _decode_ProtocolInformation,
    _encode_ProtocolInformation,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier
} from "./SelectedAttributeTypes";


const itu_t: number = 0;
const itu_r: number = 0;
const ccitt: number = 0;
const iso: number = 1;
const joint_iso_itu_t: number = 2;
const joint_iso_ccitt: number = 2;

// TODO: ObjectAssignment: dsaReferral

export type OperationProgress_nameResolutionPhase = asn1.ENUMERATED
export const OperationProgress_nameResolutionPhase_notStarted: OperationProgress_nameResolutionPhase = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const notStarted: OperationProgress_nameResolutionPhase = OperationProgress_nameResolutionPhase_notStarted; /* SHORT_NAMED_ENUMERATED_VALUE */
export const OperationProgress_nameResolutionPhase_proceeding: OperationProgress_nameResolutionPhase = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const proceeding: OperationProgress_nameResolutionPhase = OperationProgress_nameResolutionPhase_proceeding; /* SHORT_NAMED_ENUMERATED_VALUE */
export const OperationProgress_nameResolutionPhase_completed: OperationProgress_nameResolutionPhase = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const completed: OperationProgress_nameResolutionPhase = OperationProgress_nameResolutionPhase_completed; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_OperationProgress_nameResolutionPhase = __utils._decodeEnumerated;
export const _encode_OperationProgress_nameResolutionPhase = __utils._encodeEnumerated;


export class OperationProgress {
    constructor (
        readonly nameResolutionPhase: OperationProgress_nameResolutionPhase,
        readonly nextRDNToBeResolved: asn1.INTEGER | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_OperationProgress: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("nameResolutionPhase", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("nextRDNToBeResolved", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_OperationProgress: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_OperationProgress: __utils.ComponentSpec[] = [
    
];
export const _decode_OperationProgress = function (el: asn1.ASN1Element): OperationProgress {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let nameResolutionPhase!: OperationProgress_nameResolutionPhase;
    let nextRDNToBeResolved: asn1.OPTIONAL<asn1.INTEGER>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "nameResolutionPhase": (_el: asn1.ASN1Element): void => { nameResolutionPhase = __utils._decode_explicit<OperationProgress_nameResolutionPhase>(() => _decode_OperationProgress_nameResolutionPhase)(_el); },
        "nextRDNToBeResolved": (_el: asn1.ASN1Element): void => { nextRDNToBeResolved = __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OperationProgress,
        _extension_additions_list_spec_for_OperationProgress,
        _root_component_type_list_2_spec_for_OperationProgress,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new OperationProgress( /* SET_CONSTRUCTOR_CALL */
        nameResolutionPhase,
        nextRDNToBeResolved,
        _unrecognizedExtensionsList
    );
};
export const _encode_OperationProgress = function (value: OperationProgress, elGetter: __utils.ASN1Encoder<OperationProgress>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_OperationProgress_nameResolutionPhase, __utils.BER)(value.nameResolutionPhase, __utils.BER),
            (value.nextRDNToBeResolved ? __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeInteger, __utils.BER)(value.nextRDNToBeResolved, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type ReferenceType = asn1.ENUMERATED
export const ReferenceType_superior: ReferenceType = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const superior: ReferenceType = ReferenceType_superior; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ReferenceType_subordinate: ReferenceType = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const subordinate: ReferenceType = ReferenceType_subordinate; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ReferenceType_cross: ReferenceType = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const cross: ReferenceType = ReferenceType_cross; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ReferenceType_nonSpecificSubordinate: ReferenceType = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const nonSpecificSubordinate: ReferenceType = ReferenceType_nonSpecificSubordinate; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ReferenceType_supplier: ReferenceType = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const supplier: ReferenceType = ReferenceType_supplier; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ReferenceType_master: ReferenceType = 6; /* LONG_NAMED_ENUMERATED_VALUE */
export const master: ReferenceType = ReferenceType_master; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ReferenceType_immediateSuperior: ReferenceType = 7; /* LONG_NAMED_ENUMERATED_VALUE */
export const immediateSuperior: ReferenceType = ReferenceType_immediateSuperior; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ReferenceType_self: ReferenceType = 8; /* LONG_NAMED_ENUMERATED_VALUE */
export const self: ReferenceType = ReferenceType_self; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ReferenceType_ditBridge: ReferenceType = 9; /* LONG_NAMED_ENUMERATED_VALUE */
export const ditBridge: ReferenceType = ReferenceType_ditBridge; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ReferenceType = __utils._decodeEnumerated;
export const _encode_ReferenceType = __utils._encodeEnumerated;


export class AccessPoint {
    constructor (
        readonly ae_title: Name,
        readonly address: PresentationAddress,
        readonly protocolInformation: ProtocolInformation[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_AccessPoint: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("ae-title", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("address", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("protocolInformation", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
const _root_component_type_list_2_spec_for_AccessPoint: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_AccessPoint: __utils.ComponentSpec[] = [
    
];
export const _decode_AccessPoint = function (el: asn1.ASN1Element): AccessPoint {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let ae_title!: Name;
    let address!: PresentationAddress;
    let protocolInformation: asn1.OPTIONAL<ProtocolInformation[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "ae-title": (_el: asn1.ASN1Element): void => { ae_title = __utils._decode_explicit<Name>(() => _decode_Name)(_el); },
        "address": (_el: asn1.ASN1Element): void => { address = __utils._decode_explicit<PresentationAddress>(() => _decode_PresentationAddress)(_el); },
        "protocolInformation": (_el: asn1.ASN1Element): void => { protocolInformation = __utils._decode_explicit<ProtocolInformation[]>(() => __utils._decodeSetOf<ProtocolInformation>(() => _decode_ProtocolInformation))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_AccessPoint,
        _extension_additions_list_spec_for_AccessPoint,
        _root_component_type_list_2_spec_for_AccessPoint,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new AccessPoint( /* SET_CONSTRUCTOR_CALL */
        ae_title,
        address,
        protocolInformation,
        _unrecognizedExtensionsList
    );
};
export const _encode_AccessPoint = function (value: AccessPoint, elGetter: __utils.ASN1Encoder<AccessPoint>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Name, __utils.BER)(value.ae_title, __utils.BER),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_PresentationAddress, __utils.BER)(value.address, __utils.BER),
            (value.protocolInformation ? __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeSetOf<ProtocolInformation>(() => _encode_ProtocolInformation, __utils.BER), __utils.BER)(value.protocolInformation, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type MasterOrShadowAccessPoint_category = asn1.ENUMERATED
export const MasterOrShadowAccessPoint_category_master: MasterOrShadowAccessPoint_category = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const master: MasterOrShadowAccessPoint_category = MasterOrShadowAccessPoint_category_master; /* SHORT_NAMED_ENUMERATED_VALUE */
export const MasterOrShadowAccessPoint_category_shadow: MasterOrShadowAccessPoint_category = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const shadow: MasterOrShadowAccessPoint_category = MasterOrShadowAccessPoint_category_shadow; /* SHORT_NAMED_ENUMERATED_VALUE */
export const MasterOrShadowAccessPoint_category_writeableCopy: MasterOrShadowAccessPoint_category = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const writeableCopy: MasterOrShadowAccessPoint_category = MasterOrShadowAccessPoint_category_writeableCopy; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MasterOrShadowAccessPoint_category = __utils._decodeEnumerated;
export const _encode_MasterOrShadowAccessPoint_category = __utils._encodeEnumerated;


export class MasterOrShadowAccessPoint {
    constructor (
        readonly ae_title: Name /* REPLICATED_COMPONENT */,
        readonly address: PresentationAddress /* REPLICATED_COMPONENT */,
        readonly protocolInformation: ProtocolInformation[] | undefined /* REPLICATED_COMPONENT */,
        readonly category: MasterOrShadowAccessPoint_category | undefined,
        readonly chainingRequired: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_MasterOrShadowAccessPoint: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("ae-title", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("address", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("protocolInformation", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("category", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("chainingRequired", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined)
];
const _root_component_type_list_2_spec_for_MasterOrShadowAccessPoint: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_MasterOrShadowAccessPoint: __utils.ComponentSpec[] = [
    
];
export const _decode_MasterOrShadowAccessPoint = function (el: asn1.ASN1Element): MasterOrShadowAccessPoint {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let ae_title!: Name;
    let address!: PresentationAddress;
    let protocolInformation: asn1.OPTIONAL<ProtocolInformation[]>;
    let category: asn1.OPTIONAL<MasterOrShadowAccessPoint_category> = master;
    let chainingRequired: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "ae-title": (_el: asn1.ASN1Element): void => { ae_title = __utils._decode_explicit<Name>(() => _decode_Name)(_el); },
        "address": (_el: asn1.ASN1Element): void => { address = __utils._decode_explicit<PresentationAddress>(() => _decode_PresentationAddress)(_el); },
        "protocolInformation": (_el: asn1.ASN1Element): void => { protocolInformation = __utils._decode_explicit<ProtocolInformation[]>(() => __utils._decodeSetOf<ProtocolInformation>(() => _decode_ProtocolInformation))(_el); },
        "category": (_el: asn1.ASN1Element): void => { category = __utils._decode_explicit<MasterOrShadowAccessPoint_category>(() => _decode_MasterOrShadowAccessPoint_category)(_el); },
        "chainingRequired": (_el: asn1.ASN1Element): void => { chainingRequired = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_MasterOrShadowAccessPoint,
        _extension_additions_list_spec_for_MasterOrShadowAccessPoint,
        _root_component_type_list_2_spec_for_MasterOrShadowAccessPoint,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new MasterOrShadowAccessPoint( /* SET_CONSTRUCTOR_CALL */
        ae_title,
        address,
        protocolInformation,
        category,
        chainingRequired,
        _unrecognizedExtensionsList
    );
};
export const _encode_MasterOrShadowAccessPoint = function (value: MasterOrShadowAccessPoint, elGetter: __utils.ASN1Encoder<MasterOrShadowAccessPoint>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Name, __utils.BER)(value.ae_title, __utils.BER),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_PresentationAddress, __utils.BER)(value.address, __utils.BER),
            (value.protocolInformation ? __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeSetOf<ProtocolInformation>(() => _encode_ProtocolInformation, __utils.BER), __utils.BER)(value.protocolInformation, __utils.BER) : undefined),
            ((value.category !== undefined && value.category !== master) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_MasterOrShadowAccessPoint_category, __utils.BER)(value.category, __utils.BER) : undefined),
            ((value.chainingRequired !== undefined && value.chainingRequired !== false) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 5, () => __utils._encodeBoolean, __utils.BER)(value.chainingRequired, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type MasterAndShadowAccessPoints = MasterOrShadowAccessPoint[]; // SetOfType
export const _decode_MasterAndShadowAccessPoints = __utils._decodeSetOf<MasterOrShadowAccessPoint>(() => _decode_MasterOrShadowAccessPoint);
export const _encode_MasterAndShadowAccessPoints = __utils._encodeSetOf<MasterOrShadowAccessPoint>(() => _encode_MasterOrShadowAccessPoint, __utils.BER);


export class AccessPointInformation {
    constructor (
        readonly ae_title: Name /* REPLICATED_COMPONENT */,
        readonly address: PresentationAddress /* REPLICATED_COMPONENT */,
        readonly protocolInformation: ProtocolInformation[] | undefined /* REPLICATED_COMPONENT */,
        readonly category: MasterOrShadowAccessPoint_category | undefined /* REPLICATED_COMPONENT */,
        readonly chainingRequired: asn1.BOOLEAN | undefined /* REPLICATED_COMPONENT */,
        readonly additionalPoints: MasterAndShadowAccessPoints | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_AccessPointInformation: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("ae-title", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("address", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("protocolInformation", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("category", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("chainingRequired", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("additionalPoints", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined)
];
const _root_component_type_list_2_spec_for_AccessPointInformation: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_AccessPointInformation: __utils.ComponentSpec[] = [
    
];
export const _decode_AccessPointInformation = function (el: asn1.ASN1Element): AccessPointInformation {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let ae_title!: Name;
    let address!: PresentationAddress;
    let protocolInformation: asn1.OPTIONAL<ProtocolInformation[]>;
    let category: asn1.OPTIONAL<MasterOrShadowAccessPoint_category> = master;
    let chainingRequired: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let additionalPoints: asn1.OPTIONAL<MasterAndShadowAccessPoints>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "ae-title": (_el: asn1.ASN1Element): void => { ae_title = __utils._decode_explicit<Name>(() => _decode_Name)(_el); },
        "address": (_el: asn1.ASN1Element): void => { address = __utils._decode_explicit<PresentationAddress>(() => _decode_PresentationAddress)(_el); },
        "protocolInformation": (_el: asn1.ASN1Element): void => { protocolInformation = __utils._decode_explicit<ProtocolInformation[]>(() => __utils._decodeSetOf<ProtocolInformation>(() => _decode_ProtocolInformation))(_el); },
        "category": (_el: asn1.ASN1Element): void => { category = __utils._decode_explicit<MasterOrShadowAccessPoint_category>(() => _decode_MasterOrShadowAccessPoint_category)(_el); },
        "chainingRequired": (_el: asn1.ASN1Element): void => { chainingRequired = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "additionalPoints": (_el: asn1.ASN1Element): void => { additionalPoints = __utils._decode_explicit<MasterAndShadowAccessPoints>(() => _decode_MasterAndShadowAccessPoints)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_AccessPointInformation,
        _extension_additions_list_spec_for_AccessPointInformation,
        _root_component_type_list_2_spec_for_AccessPointInformation,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new AccessPointInformation( /* SET_CONSTRUCTOR_CALL */
        ae_title,
        address,
        protocolInformation,
        category,
        chainingRequired,
        additionalPoints,
        _unrecognizedExtensionsList
    );
};
export const _encode_AccessPointInformation = function (value: AccessPointInformation, elGetter: __utils.ASN1Encoder<AccessPointInformation>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Name, __utils.BER)(value.ae_title, __utils.BER),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_PresentationAddress, __utils.BER)(value.address, __utils.BER),
            (value.protocolInformation ? __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeSetOf<ProtocolInformation>(() => _encode_ProtocolInformation, __utils.BER), __utils.BER)(value.protocolInformation, __utils.BER) : undefined),
            ((value.category !== undefined && value.category !== master) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_MasterOrShadowAccessPoint_category, __utils.BER)(value.category, __utils.BER) : undefined),
            ((value.chainingRequired !== undefined && value.chainingRequired !== false) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 5, () => __utils._encodeBoolean, __utils.BER)(value.chainingRequired, __utils.BER) : undefined),
            (value.additionalPoints ? __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => _encode_MasterAndShadowAccessPoints, __utils.BER)(value.additionalPoints, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type Exclusions = RDNSequence[]; // SetOfType
export const _decode_Exclusions = __utils._decodeSetOf<RDNSequence>(() => _decode_RDNSequence);
export const _encode_Exclusions = __utils._encodeSetOf<RDNSequence>(() => _encode_RDNSequence, __utils.BER);


export class ContinuationReference {
    constructor (
        readonly targetObject: Name,
        readonly aliasedRDNs: asn1.INTEGER | undefined,
        readonly operationProgress: OperationProgress,
        readonly rdnsResolved: asn1.INTEGER | undefined,
        readonly referenceType: ReferenceType,
        readonly accessPoints: AccessPointInformation[],
        readonly entryOnly: asn1.BOOLEAN | undefined,
        readonly exclusions: Exclusions | undefined,
        readonly returnToDUA: asn1.BOOLEAN | undefined,
        readonly nameResolveOnMaster: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_ContinuationReference: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("targetObject", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("aliasedRDNs", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("operationProgress", false, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("rdnsResolved", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("referenceType", false, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("accessPoints", false, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("entryOnly", true, __utils.hasTag(asn1.ASN1TagClass.context, 6), undefined, undefined),
    new __utils.ComponentSpec("exclusions", true, __utils.hasTag(asn1.ASN1TagClass.context, 7), undefined, undefined),
    new __utils.ComponentSpec("returnToDUA", true, __utils.hasTag(asn1.ASN1TagClass.context, 8), undefined, undefined),
    new __utils.ComponentSpec("nameResolveOnMaster", true, __utils.hasTag(asn1.ASN1TagClass.context, 9), undefined, undefined)
];
const _root_component_type_list_2_spec_for_ContinuationReference: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_ContinuationReference: __utils.ComponentSpec[] = [
    
];
export const _decode_ContinuationReference = function (el: asn1.ASN1Element): ContinuationReference {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let targetObject!: Name;
    let aliasedRDNs: asn1.OPTIONAL<asn1.INTEGER>;
    let operationProgress!: OperationProgress;
    let rdnsResolved: asn1.OPTIONAL<asn1.INTEGER>;
    let referenceType!: ReferenceType;
    let accessPoints!: AccessPointInformation[];
    let entryOnly: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let exclusions: asn1.OPTIONAL<Exclusions>;
    let returnToDUA: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let nameResolveOnMaster: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "targetObject": (_el: asn1.ASN1Element): void => { targetObject = __utils._decode_explicit<Name>(() => _decode_Name)(_el); },
        "aliasedRDNs": (_el: asn1.ASN1Element): void => { aliasedRDNs = __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "operationProgress": (_el: asn1.ASN1Element): void => { operationProgress = __utils._decode_explicit<OperationProgress>(() => _decode_OperationProgress)(_el); },
        "rdnsResolved": (_el: asn1.ASN1Element): void => { rdnsResolved = __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "referenceType": (_el: asn1.ASN1Element): void => { referenceType = __utils._decode_explicit<ReferenceType>(() => _decode_ReferenceType)(_el); },
        "accessPoints": (_el: asn1.ASN1Element): void => { accessPoints = __utils._decode_explicit<AccessPointInformation[]>(() => __utils._decodeSetOf<AccessPointInformation>(() => _decode_AccessPointInformation))(_el); },
        "entryOnly": (_el: asn1.ASN1Element): void => { entryOnly = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "exclusions": (_el: asn1.ASN1Element): void => { exclusions = __utils._decode_explicit<Exclusions>(() => _decode_Exclusions)(_el); },
        "returnToDUA": (_el: asn1.ASN1Element): void => { returnToDUA = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "nameResolveOnMaster": (_el: asn1.ASN1Element): void => { nameResolveOnMaster = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ContinuationReference,
        _extension_additions_list_spec_for_ContinuationReference,
        _root_component_type_list_2_spec_for_ContinuationReference,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new ContinuationReference( /* SET_CONSTRUCTOR_CALL */
        targetObject,
        aliasedRDNs,
        operationProgress,
        rdnsResolved,
        referenceType,
        accessPoints,
        entryOnly,
        exclusions,
        returnToDUA,
        nameResolveOnMaster,
        _unrecognizedExtensionsList
    );
};
export const _encode_ContinuationReference = function (value: ContinuationReference, elGetter: __utils.ASN1Encoder<ContinuationReference>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Name, __utils.BER)(value.targetObject, __utils.BER),
            (value.aliasedRDNs ? __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeInteger, __utils.BER)(value.aliasedRDNs, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_OperationProgress, __utils.BER)(value.operationProgress, __utils.BER),
            (value.rdnsResolved ? __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => __utils._encodeInteger, __utils.BER)(value.rdnsResolved, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => _encode_ReferenceType, __utils.BER)(value.referenceType, __utils.BER),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 5, () => __utils._encodeSetOf<AccessPointInformation>(() => _encode_AccessPointInformation, __utils.BER), __utils.BER)(value.accessPoints, __utils.BER),
            ((value.entryOnly !== undefined && value.entryOnly !== false) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 6, () => __utils._encodeBoolean, __utils.BER)(value.entryOnly, __utils.BER) : undefined),
            (value.exclusions ? __utils._encode_explicit(asn1.ASN1TagClass.context, 7, () => _encode_Exclusions, __utils.BER)(value.exclusions, __utils.BER) : undefined),
            ((value.returnToDUA !== undefined && value.returnToDUA !== false) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 8, () => __utils._encodeBoolean, __utils.BER)(value.returnToDUA, __utils.BER) : undefined),
            ((value.nameResolveOnMaster !== undefined && value.nameResolveOnMaster !== false) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 9, () => __utils._encodeBoolean, __utils.BER)(value.nameResolveOnMaster, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class DsaReferralData {
    constructor (
        readonly reference: ContinuationReference,
        readonly contextPrefix: DistinguishedName | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[],
        readonly securityParameters: SecurityParameters | undefined /* REPLICATED_COMPONENT */,
        readonly performer: DistinguishedName | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced: asn1.BOOLEAN | undefined /* REPLICATED_COMPONENT */,
        readonly notification: Attribute[] | undefined /* REPLICATED_COMPONENT */
    ) {}
}
const _root_component_type_list_1_spec_for_DsaReferralData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("reference", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("contextPrefix", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_DsaReferralData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("securityParameters", true, __utils.hasTag(asn1.ASN1TagClass.context, 30), undefined, undefined),
    new __utils.ComponentSpec("performer", true, __utils.hasTag(asn1.ASN1TagClass.context, 29), undefined, undefined),
    new __utils.ComponentSpec("aliasDereferenced", true, __utils.hasTag(asn1.ASN1TagClass.context, 28), undefined, undefined),
    new __utils.ComponentSpec("notification", true, __utils.hasTag(asn1.ASN1TagClass.context, 27), undefined, undefined)
];
const _extension_additions_list_spec_for_DsaReferralData: __utils.ComponentSpec[] = [
    
];
export const _decode_DsaReferralData = function (el: asn1.ASN1Element): DsaReferralData {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let reference!: ContinuationReference;
    let contextPrefix: asn1.OPTIONAL<DistinguishedName>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    let securityParameters: asn1.OPTIONAL<SecurityParameters>;
    let performer: asn1.OPTIONAL<DistinguishedName>;
    let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let notification: asn1.OPTIONAL<Attribute[]>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "reference": (_el: asn1.ASN1Element): void => { reference = __utils._decode_explicit<ContinuationReference>(() => _decode_ContinuationReference)(_el); },
        "contextPrefix": (_el: asn1.ASN1Element): void => { contextPrefix = __utils._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "securityParameters": (_el: asn1.ASN1Element): void => { securityParameters = __utils._decode_explicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "performer": (_el: asn1.ASN1Element): void => { performer = __utils._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "aliasDereferenced": (_el: asn1.ASN1Element): void => { aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "notification": (_el: asn1.ASN1Element): void => { notification = __utils._decode_explicit<Attribute[]>(() => __utils._decodeSequenceOf<Attribute>(() => _decode_Attribute))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_DsaReferralData,
        _extension_additions_list_spec_for_DsaReferralData,
        _root_component_type_list_2_spec_for_DsaReferralData,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new DsaReferralData( /* SET_CONSTRUCTOR_CALL */
        reference,
        contextPrefix,
        _unrecognizedExtensionsList,
        securityParameters,
        performer,
        aliasDereferenced,
        notification
    );
};
export const _encode_DsaReferralData = function (value: DsaReferralData, elGetter: __utils.ASN1Encoder<DsaReferralData>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_ContinuationReference, __utils.BER)(value.reference, __utils.BER),
            (value.contextPrefix ? __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_DistinguishedName, __utils.BER)(value.contextPrefix, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
        [
            (value.securityParameters ? __utils._encode_explicit(asn1.ASN1TagClass.context, 30, () => _encode_SecurityParameters, __utils.BER)(value.securityParameters, __utils.BER) : undefined),
            (value.performer ? __utils._encode_explicit(asn1.ASN1TagClass.context, 29, () => _encode_DistinguishedName, __utils.BER)(value.performer, __utils.BER) : undefined),
            ((value.aliasDereferenced !== undefined && value.aliasDereferenced !== false) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 28, () => __utils._encodeBoolean, __utils.BER)(value.aliasDereferenced, __utils.BER) : undefined),
            (value.notification ? __utils._encode_explicit(asn1.ASN1TagClass.context, 27, () => __utils._encodeSequenceOf<Attribute>(() => _encode_Attribute, __utils.BER), __utils.BER)(value.notification, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class TraceItem {
    constructor (
        readonly dsa: Name,
        readonly targetObject: Name | undefined,
        readonly operationProgress: OperationProgress,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_TraceItem: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("dsa", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("targetObject", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("operationProgress", false, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
const _root_component_type_list_2_spec_for_TraceItem: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_TraceItem: __utils.ComponentSpec[] = [
    
];
export const _decode_TraceItem = function (el: asn1.ASN1Element): TraceItem {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let dsa!: Name;
    let targetObject: asn1.OPTIONAL<Name>;
    let operationProgress!: OperationProgress;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "dsa": (_el: asn1.ASN1Element): void => { dsa = __utils._decode_explicit<Name>(() => _decode_Name)(_el); },
        "targetObject": (_el: asn1.ASN1Element): void => { targetObject = __utils._decode_explicit<Name>(() => _decode_Name)(_el); },
        "operationProgress": (_el: asn1.ASN1Element): void => { operationProgress = __utils._decode_explicit<OperationProgress>(() => _decode_OperationProgress)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_TraceItem,
        _extension_additions_list_spec_for_TraceItem,
        _root_component_type_list_2_spec_for_TraceItem,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new TraceItem( /* SET_CONSTRUCTOR_CALL */
        dsa,
        targetObject,
        operationProgress,
        _unrecognizedExtensionsList
    );
};
export const _encode_TraceItem = function (value: TraceItem, elGetter: __utils.ASN1Encoder<TraceItem>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_Name, __utils.BER)(value.dsa, __utils.BER),
            (value.targetObject ? __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Name, __utils.BER)(value.targetObject, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_OperationProgress, __utils.BER)(value.operationProgress, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type TraceInformation = TraceItem[]; // SequenceOfType
export const _decode_TraceInformation = __utils._decodeSequenceOf<TraceItem>(() => _decode_TraceItem);
export const _encode_TraceInformation = __utils._encodeSequenceOf<TraceItem>(() => _encode_TraceItem, __utils.BER);


export type DomainInfo = asn1.ASN1Element; // ObjectClassFieldType
export const _decode_DomainInfo = __utils._decodeAny;
export const _encode_DomainInfo = __utils._encodeAny;


export type Time =
    { utcTime: asn1.UTCTime }
    | { generalizedTime: asn1.GeneralizedTime }
    | asn1.ASN1Element;
export const _decode_Time = __utils._decode_extensible_choice<Time>({
    "UNIVERSAL 23": [ "utcTime", __utils._decodeUTCTime ],
    "UNIVERSAL 24": [ "generalizedTime", __utils._decodeGeneralizedTime ]
});
export const _encode_Time = __utils._encode_choice<Time>({
    "utcTime": __utils._encodeUTCTime,
    "generalizedTime": __utils._encodeGeneralizedTime,
}, __utils.BER);


export class ChainingArguments {
    constructor (
        readonly originator: DistinguishedName | undefined,
        readonly targetObject: DistinguishedName | undefined,
        readonly operationProgress: OperationProgress | undefined,
        readonly traceInformation: TraceInformation,
        readonly aliasDereferenced: asn1.BOOLEAN | undefined,
        readonly aliasedRDNs: asn1.INTEGER | undefined,
        readonly returnCrossRefs: asn1.BOOLEAN | undefined,
        readonly referenceType: ReferenceType | undefined,
        readonly info: DomainInfo | undefined,
        readonly timeLimit: Time | undefined,
        readonly securityParameters: SecurityParameters | undefined,
        readonly entryOnly: asn1.BOOLEAN | undefined,
        readonly uniqueIdentifier: UniqueIdentifier | undefined,
        readonly authenticationLevel: AuthenticationLevel | undefined,
        readonly exclusions: Exclusions | undefined,
        readonly excludeShadows: asn1.BOOLEAN | undefined,
        readonly nameResolveOnMaster: asn1.BOOLEAN | undefined,
        readonly operationIdentifier: asn1.INTEGER | undefined,
        readonly searchRuleId: SearchRuleId | undefined,
        readonly chainedRelaxation: MRMapping | undefined,
        readonly relatedEntry: asn1.INTEGER | undefined,
        readonly dspPaging: asn1.BOOLEAN | undefined,
        readonly excludeWriteableCopies: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_ChainingArguments: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("originator", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("targetObject", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("operationProgress", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("traceInformation", false, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("aliasDereferenced", true, __utils.hasTag(asn1.ASN1TagClass.context, 4), undefined, undefined),
    new __utils.ComponentSpec("aliasedRDNs", true, __utils.hasTag(asn1.ASN1TagClass.context, 5), undefined, undefined),
    new __utils.ComponentSpec("returnCrossRefs", true, __utils.hasTag(asn1.ASN1TagClass.context, 6), undefined, undefined),
    new __utils.ComponentSpec("referenceType", true, __utils.hasTag(asn1.ASN1TagClass.context, 7), undefined, undefined),
    new __utils.ComponentSpec("info", true, __utils.hasTag(asn1.ASN1TagClass.context, 8), undefined, undefined),
    new __utils.ComponentSpec("timeLimit", true, __utils.hasTag(asn1.ASN1TagClass.context, 9), undefined, undefined),
    new __utils.ComponentSpec("securityParameters", true, __utils.hasTag(asn1.ASN1TagClass.context, 10), undefined, undefined),
    new __utils.ComponentSpec("entryOnly", true, __utils.hasTag(asn1.ASN1TagClass.context, 11), undefined, undefined),
    new __utils.ComponentSpec("uniqueIdentifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 12), undefined, undefined),
    new __utils.ComponentSpec("authenticationLevel", true, __utils.hasTag(asn1.ASN1TagClass.context, 13), undefined, undefined),
    new __utils.ComponentSpec("exclusions", true, __utils.hasTag(asn1.ASN1TagClass.context, 14), undefined, undefined),
    new __utils.ComponentSpec("excludeShadows", true, __utils.hasTag(asn1.ASN1TagClass.context, 15), undefined, undefined),
    new __utils.ComponentSpec("nameResolveOnMaster", true, __utils.hasTag(asn1.ASN1TagClass.context, 16), undefined, undefined),
    new __utils.ComponentSpec("operationIdentifier", true, __utils.hasTag(asn1.ASN1TagClass.context, 17), undefined, undefined),
    /* FIXME: searchRuleId COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: chainedRelaxation COULD_NOT_RESOLVE_TYPE_DEF */,
    new __utils.ComponentSpec("relatedEntry", true, __utils.hasTag(asn1.ASN1TagClass.context, 20), undefined, undefined),
    new __utils.ComponentSpec("dspPaging", true, __utils.hasTag(asn1.ASN1TagClass.context, 21), undefined, undefined),
    new __utils.ComponentSpec("excludeWriteableCopies", true, __utils.hasTag(asn1.ASN1TagClass.context, 24), undefined, undefined)
];
const _root_component_type_list_2_spec_for_ChainingArguments: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_ChainingArguments: __utils.ComponentSpec[] = [
    
];
export const _decode_ChainingArguments = function (el: asn1.ASN1Element): ChainingArguments {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let originator: asn1.OPTIONAL<DistinguishedName>;
    let targetObject: asn1.OPTIONAL<DistinguishedName>;
    let operationProgress: asn1.OPTIONAL<OperationProgress> = /* FIXME: operationProgress COULD_NOT_COMPILE_DEFAULT_VALUE */;
    let traceInformation!: TraceInformation;
    let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let aliasedRDNs: asn1.OPTIONAL<asn1.INTEGER>;
    let returnCrossRefs: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let referenceType: asn1.OPTIONAL<ReferenceType> = superior;
    let info: asn1.OPTIONAL<DomainInfo>;
    let timeLimit: asn1.OPTIONAL<Time>;
    let securityParameters: asn1.OPTIONAL<SecurityParameters> = /* FIXME: securityParameters COULD_NOT_COMPILE_DEFAULT_VALUE */;
    let entryOnly: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let uniqueIdentifier: asn1.OPTIONAL<UniqueIdentifier>;
    let authenticationLevel: asn1.OPTIONAL<AuthenticationLevel>;
    let exclusions: asn1.OPTIONAL<Exclusions>;
    let excludeShadows: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let nameResolveOnMaster: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let operationIdentifier: asn1.OPTIONAL<asn1.INTEGER>;
    let searchRuleId: asn1.OPTIONAL<SearchRuleId>;
    let chainedRelaxation: asn1.OPTIONAL<MRMapping>;
    let relatedEntry: asn1.OPTIONAL<asn1.INTEGER>;
    let dspPaging: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let excludeWriteableCopies: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "originator": (_el: asn1.ASN1Element): void => { originator = __utils._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "targetObject": (_el: asn1.ASN1Element): void => { targetObject = __utils._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "operationProgress": (_el: asn1.ASN1Element): void => { operationProgress = __utils._decode_explicit<OperationProgress>(() => _decode_OperationProgress)(_el); },
        "traceInformation": (_el: asn1.ASN1Element): void => { traceInformation = __utils._decode_explicit<TraceInformation>(() => _decode_TraceInformation)(_el); },
        "aliasDereferenced": (_el: asn1.ASN1Element): void => { aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "aliasedRDNs": (_el: asn1.ASN1Element): void => { aliasedRDNs = __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "returnCrossRefs": (_el: asn1.ASN1Element): void => { returnCrossRefs = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "referenceType": (_el: asn1.ASN1Element): void => { referenceType = __utils._decode_explicit<ReferenceType>(() => _decode_ReferenceType)(_el); },
        "info": (_el: asn1.ASN1Element): void => { info = __utils._decode_explicit<DomainInfo>(() => _decode_DomainInfo)(_el); },
        "timeLimit": (_el: asn1.ASN1Element): void => { timeLimit = __utils._decode_explicit<Time>(() => _decode_Time)(_el); },
        "securityParameters": (_el: asn1.ASN1Element): void => { securityParameters = __utils._decode_explicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "entryOnly": (_el: asn1.ASN1Element): void => { entryOnly = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "uniqueIdentifier": (_el: asn1.ASN1Element): void => { uniqueIdentifier = __utils._decode_explicit<UniqueIdentifier>(() => _decode_UniqueIdentifier)(_el); },
        "authenticationLevel": (_el: asn1.ASN1Element): void => { authenticationLevel = __utils._decode_explicit<AuthenticationLevel>(() => _decode_AuthenticationLevel)(_el); },
        "exclusions": (_el: asn1.ASN1Element): void => { exclusions = __utils._decode_explicit<Exclusions>(() => _decode_Exclusions)(_el); },
        "excludeShadows": (_el: asn1.ASN1Element): void => { excludeShadows = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "nameResolveOnMaster": (_el: asn1.ASN1Element): void => { nameResolveOnMaster = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "operationIdentifier": (_el: asn1.ASN1Element): void => { operationIdentifier = __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "searchRuleId": (_el: asn1.ASN1Element): void => { searchRuleId = __utils._decode_explicit<SearchRuleId>(() => _decode_SearchRuleId)(_el); },
        "chainedRelaxation": (_el: asn1.ASN1Element): void => { chainedRelaxation = __utils._decode_explicit<MRMapping>(() => _decode_MRMapping)(_el); },
        "relatedEntry": (_el: asn1.ASN1Element): void => { relatedEntry = __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger)(_el); },
        "dspPaging": (_el: asn1.ASN1Element): void => { dspPaging = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "excludeWriteableCopies": (_el: asn1.ASN1Element): void => { excludeWriteableCopies = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ChainingArguments,
        _extension_additions_list_spec_for_ChainingArguments,
        _root_component_type_list_2_spec_for_ChainingArguments,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new ChainingArguments( /* SET_CONSTRUCTOR_CALL */
        originator,
        targetObject,
        operationProgress,
        traceInformation,
        aliasDereferenced,
        aliasedRDNs,
        returnCrossRefs,
        referenceType,
        info,
        timeLimit,
        securityParameters,
        entryOnly,
        uniqueIdentifier,
        authenticationLevel,
        exclusions,
        excludeShadows,
        nameResolveOnMaster,
        operationIdentifier,
        searchRuleId,
        chainedRelaxation,
        relatedEntry,
        dspPaging,
        excludeWriteableCopies,
        _unrecognizedExtensionsList
    );
};
export const _encode_ChainingArguments = function (value: ChainingArguments, elGetter: __utils.ASN1Encoder<ChainingArguments>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.originator ? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_DistinguishedName, __utils.BER)(value.originator, __utils.BER) : undefined),
            (value.targetObject ? __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_DistinguishedName, __utils.BER)(value.targetObject, __utils.BER) : undefined),
            (value.operationProgress /* FIXME: COULD_NOT_COMPILE_DEFAULT_VALUE */? __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_OperationProgress, __utils.BER)(value.operationProgress, __utils.BER) : undefined),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_TraceInformation, __utils.BER)(value.traceInformation, __utils.BER),
            ((value.aliasDereferenced !== undefined && value.aliasDereferenced !== false) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 4, () => __utils._encodeBoolean, __utils.BER)(value.aliasDereferenced, __utils.BER) : undefined),
            (value.aliasedRDNs ? __utils._encode_explicit(asn1.ASN1TagClass.context, 5, () => __utils._encodeInteger, __utils.BER)(value.aliasedRDNs, __utils.BER) : undefined),
            ((value.returnCrossRefs !== undefined && value.returnCrossRefs !== false) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 6, () => __utils._encodeBoolean, __utils.BER)(value.returnCrossRefs, __utils.BER) : undefined),
            ((value.referenceType !== undefined && value.referenceType !== superior) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 7, () => _encode_ReferenceType, __utils.BER)(value.referenceType, __utils.BER) : undefined),
            (value.info ? __utils._encode_explicit(asn1.ASN1TagClass.context, 8, () => _encode_DomainInfo, __utils.BER)(value.info, __utils.BER) : undefined),
            (value.timeLimit ? __utils._encode_explicit(asn1.ASN1TagClass.context, 9, () => _encode_Time, __utils.BER)(value.timeLimit, __utils.BER) : undefined),
            (value.securityParameters /* FIXME: COULD_NOT_COMPILE_DEFAULT_VALUE */? __utils._encode_explicit(asn1.ASN1TagClass.context, 10, () => _encode_SecurityParameters, __utils.BER)(value.securityParameters, __utils.BER) : undefined),
            ((value.entryOnly !== undefined && value.entryOnly !== false) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 11, () => __utils._encodeBoolean, __utils.BER)(value.entryOnly, __utils.BER) : undefined),
            (value.uniqueIdentifier ? __utils._encode_explicit(asn1.ASN1TagClass.context, 12, () => _encode_UniqueIdentifier, __utils.BER)(value.uniqueIdentifier, __utils.BER) : undefined),
            (value.authenticationLevel ? __utils._encode_explicit(asn1.ASN1TagClass.context, 13, () => _encode_AuthenticationLevel, __utils.BER)(value.authenticationLevel, __utils.BER) : undefined),
            (value.exclusions ? __utils._encode_explicit(asn1.ASN1TagClass.context, 14, () => _encode_Exclusions, __utils.BER)(value.exclusions, __utils.BER) : undefined),
            ((value.excludeShadows !== undefined && value.excludeShadows !== false) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 15, () => __utils._encodeBoolean, __utils.BER)(value.excludeShadows, __utils.BER) : undefined),
            ((value.nameResolveOnMaster !== undefined && value.nameResolveOnMaster !== false) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 16, () => __utils._encodeBoolean, __utils.BER)(value.nameResolveOnMaster, __utils.BER) : undefined),
            (value.operationIdentifier ? __utils._encode_explicit(asn1.ASN1TagClass.context, 17, () => __utils._encodeInteger, __utils.BER)(value.operationIdentifier, __utils.BER) : undefined),
            (value.searchRuleId ? __utils._encode_explicit(asn1.ASN1TagClass.context, 18, () => _encode_SearchRuleId, __utils.BER)(value.searchRuleId, __utils.BER) : undefined),
            (value.chainedRelaxation ? __utils._encode_explicit(asn1.ASN1TagClass.context, 19, () => _encode_MRMapping, __utils.BER)(value.chainedRelaxation, __utils.BER) : undefined),
            (value.relatedEntry ? __utils._encode_explicit(asn1.ASN1TagClass.context, 20, () => __utils._encodeInteger, __utils.BER)(value.relatedEntry, __utils.BER) : undefined),
            ((value.dspPaging !== undefined && value.dspPaging !== false) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 21, () => __utils._encodeBoolean, __utils.BER)(value.dspPaging, __utils.BER) : undefined),
            ((value.excludeWriteableCopies !== undefined && value.excludeWriteableCopies !== false) /* TODO: Review this condition. */ ? __utils._encode_explicit(asn1.ASN1TagClass.context, 24, () => __utils._encodeBoolean, __utils.BER)(value.excludeWriteableCopies, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class CrossReference {
    constructor (
        readonly contextPrefix: DistinguishedName,
        readonly accessPoint: AccessPointInformation,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_CrossReference: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("contextPrefix", false, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("accessPoint", false, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_CrossReference: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_CrossReference: __utils.ComponentSpec[] = [
    
];
export const _decode_CrossReference = function (el: asn1.ASN1Element): CrossReference {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let contextPrefix!: DistinguishedName;
    let accessPoint!: AccessPointInformation;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "contextPrefix": (_el: asn1.ASN1Element): void => { contextPrefix = __utils._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "accessPoint": (_el: asn1.ASN1Element): void => { accessPoint = __utils._decode_explicit<AccessPointInformation>(() => _decode_AccessPointInformation)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_CrossReference,
        _extension_additions_list_spec_for_CrossReference,
        _root_component_type_list_2_spec_for_CrossReference,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new CrossReference( /* SET_CONSTRUCTOR_CALL */
        contextPrefix,
        accessPoint,
        _unrecognizedExtensionsList
    );
};
export const _encode_CrossReference = function (value: CrossReference, elGetter: __utils.ASN1Encoder<CrossReference>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_DistinguishedName, __utils.BER)(value.contextPrefix, __utils.BER),
            __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_AccessPointInformation, __utils.BER)(value.accessPoint, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class ChainingResults {
    constructor (
        readonly info: DomainInfo | undefined,
        readonly crossReferences: CrossReference[] | undefined,
        readonly securityParameters: SecurityParameters | undefined,
        readonly alreadySearched: Exclusions | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_ChainingResults: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("info", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("crossReferences", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("securityParameters", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("alreadySearched", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined)
];
const _root_component_type_list_2_spec_for_ChainingResults: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_ChainingResults: __utils.ComponentSpec[] = [
    
];
export const _decode_ChainingResults = function (el: asn1.ASN1Element): ChainingResults {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let info: asn1.OPTIONAL<DomainInfo>;
    let crossReferences: asn1.OPTIONAL<CrossReference[]>;
    let securityParameters: asn1.OPTIONAL<SecurityParameters> = /* FIXME: securityParameters COULD_NOT_COMPILE_DEFAULT_VALUE */;
    let alreadySearched: asn1.OPTIONAL<Exclusions>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "info": (_el: asn1.ASN1Element): void => { info = __utils._decode_explicit<DomainInfo>(() => _decode_DomainInfo)(_el); },
        "crossReferences": (_el: asn1.ASN1Element): void => { crossReferences = __utils._decode_explicit<CrossReference[]>(() => __utils._decodeSequenceOf<CrossReference>(() => _decode_CrossReference))(_el); },
        "securityParameters": (_el: asn1.ASN1Element): void => { securityParameters = __utils._decode_explicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "alreadySearched": (_el: asn1.ASN1Element): void => { alreadySearched = __utils._decode_explicit<Exclusions>(() => _decode_Exclusions)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_ChainingResults,
        _extension_additions_list_spec_for_ChainingResults,
        _root_component_type_list_2_spec_for_ChainingResults,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new ChainingResults( /* SET_CONSTRUCTOR_CALL */
        info,
        crossReferences,
        securityParameters,
        alreadySearched,
        _unrecognizedExtensionsList
    );
};
export const _encode_ChainingResults = function (value: ChainingResults, elGetter: __utils.ASN1Encoder<ChainingResults>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.info ? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_DomainInfo, __utils.BER)(value.info, __utils.BER) : undefined),
            (value.crossReferences ? __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSequenceOf<CrossReference>(() => _encode_CrossReference, __utils.BER), __utils.BER)(value.crossReferences, __utils.BER) : undefined),
            (value.securityParameters /* FIXME: COULD_NOT_COMPILE_DEFAULT_VALUE */? __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => _encode_SecurityParameters, __utils.BER)(value.securityParameters, __utils.BER) : undefined),
            (value.alreadySearched ? __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_Exclusions, __utils.BER)(value.alreadySearched, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class DitBridgeKnowledge {
    constructor (
        readonly domainLocalID: UnboundedDirectoryString | undefined,
        readonly accessPoints: MasterAndShadowAccessPoints,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_DitBridgeKnowledge: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("domainLocalID", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("accessPoints", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
const _root_component_type_list_2_spec_for_DitBridgeKnowledge: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_DitBridgeKnowledge: __utils.ComponentSpec[] = [
    
];
export const _decode_DitBridgeKnowledge = function (el: asn1.ASN1Element): DitBridgeKnowledge {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let domainLocalID: asn1.OPTIONAL<UnboundedDirectoryString>;
    let accessPoints!: MasterAndShadowAccessPoints;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "domainLocalID": (_el: asn1.ASN1Element): void => { domainLocalID = _decode_UnboundedDirectoryString(_el); },
        "accessPoints": (_el: asn1.ASN1Element): void => { accessPoints = _decode_MasterAndShadowAccessPoints(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DitBridgeKnowledge,
        _extension_additions_list_spec_for_DitBridgeKnowledge,
        _root_component_type_list_2_spec_for_DitBridgeKnowledge,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DitBridgeKnowledge( /* SEQUENCE_CONSTRUCTOR_CALL */
        domainLocalID,
        accessPoints,
        _unrecognizedExtensionsList
    );
};
export const _encode_DitBridgeKnowledge = function (value: DitBridgeKnowledge, elGetter: __utils.ASN1Encoder<DitBridgeKnowledge>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.domainLocalID ? _encode_UnboundedDirectoryString(value.domainLocalID, __utils.BER) : undefined),
            _encode_MasterAndShadowAccessPoints(value.accessPoints, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectAssignment: dSABind

export type DSACredentials =
    { simple: SimpleCredentials }
    | { strong: StrongCredentials }
    | { externalProcedure: asn1.EXTERNAL }
    | { spkm: SpkmCredentials }
    | asn1.ASN1Element;
export const _decode_DSACredentials = __utils._decode_extensible_choice<DSACredentials>({
    "CONTEXT 0": [ "simple", __utils._decode_explicit<SimpleCredentials>(() => _decode_SimpleCredentials) ],
    "CONTEXT 1": [ "strong", __utils._decode_explicit<StrongCredentials>(() => _decode_StrongCredentials) ],
    "CONTEXT 2": [ "externalProcedure", __utils._decode_explicit<asn1.EXTERNAL>(() => __utils._decodeExternal) ],
    "CONTEXT 3": [ "spkm", __utils._decode_explicit<SpkmCredentials>(() => _decode_SpkmCredentials) ]
});
export const _encode_DSACredentials = __utils._encode_choice<DSACredentials>({
    "simple": __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_SimpleCredentials, __utils.BER),
    "strong": __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_StrongCredentials, __utils.BER),
    "externalProcedure": __utils._encode_explicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeExternal, __utils.BER),
    "spkm": __utils._encode_explicit(asn1.ASN1TagClass.context, 3, () => _encode_SpkmCredentials, __utils.BER),
}, __utils.BER);


export class DSABindArgument {
    constructor (
        readonly credentials: DSACredentials | undefined,
        readonly versions: Versions | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
const _root_component_type_list_1_spec_for_DSABindArgument: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("credentials", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("versions", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined)
];
const _root_component_type_list_2_spec_for_DSABindArgument: __utils.ComponentSpec[] = [
    
];
const _extension_additions_list_spec_for_DSABindArgument: __utils.ComponentSpec[] = [
    
];
export const _decode_DSABindArgument = function (el: asn1.ASN1Element): DSABindArgument {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let credentials: asn1.OPTIONAL<DSACredentials>;
    let versions: asn1.OPTIONAL<Versions> = /* FIXME: versions COULD_NOT_COMPILE_DEFAULT_VALUE */;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "credentials": (_el: asn1.ASN1Element): void => { credentials = __utils._decode_explicit<DSACredentials>(() => _decode_DSACredentials)(_el); },
        "versions": (_el: asn1.ASN1Element): void => { versions = __utils._decode_explicit<Versions>(() => _decode_Versions)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_DSABindArgument,
        _extension_additions_list_spec_for_DSABindArgument,
        _root_component_type_list_2_spec_for_DSABindArgument,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new DSABindArgument( /* SET_CONSTRUCTOR_CALL */
        credentials,
        versions,
        _unrecognizedExtensionsList
    );
};
export const _encode_DSABindArgument = function (value: DSABindArgument, elGetter: __utils.ASN1Encoder<DSABindArgument>): asn1.ASN1Element {
    return __utils._encodeSet(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.credentials ? __utils._encode_explicit(asn1.ASN1TagClass.context, 0, () => _encode_DSACredentials, __utils.BER)(value.credentials, __utils.BER) : undefined),
            (value.versions /* FIXME: COULD_NOT_COMPILE_DEFAULT_VALUE */? __utils._encode_explicit(asn1.ASN1TagClass.context, 1, () => _encode_Versions, __utils.BER)(value.versions, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type DSABindResult = DSABindArgument; // DefinedType
export const _decode_DSABindResult = _decode_DSABindArgument;
export const _encode_DSABindResult = _encode_DSABindArgument;


// TODO: ObjectAssignment: chained

// TODO: ObjectAssignment: chainedRead

// TODO: ObjectAssignment: chainedCompare

// TODO: ObjectAssignment: chainedAbandon

// TODO: ObjectAssignment: chainedList

// TODO: ObjectAssignment: chainedSearch

// TODO: ObjectAssignment: chainedAddEntry

// TODO: ObjectAssignment: chainedRemoveEntry

// TODO: ObjectAssignment: chainedModifyEntry

// TODO: ObjectAssignment: chainedModifyDN

// TODO: ObjectAssignment: chainedChangePassword

// TODO: ObjectAssignment: chainedAdministerPassword

// TODO: ObjectAssignment: chainedLdapTransport

// TODO: ObjectAssignment: chainedLinkedLDAP

