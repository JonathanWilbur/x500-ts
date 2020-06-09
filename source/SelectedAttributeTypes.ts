/*
    BEGIN_MODULE SelectedAttributeTypes
    OID: joint-iso-itu-t.ds.module.selectedAttributeTypes.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    Attribute,
    AttributeType,
    AttributeValueAssertion,
    DistinguishedName,
    _decode_Attribute,
    _decode_AttributeType,
    _decode_AttributeValueAssertion,
    _decode_DistinguishedName,
    _encode_Attribute,
    _encode_AttributeType,
    _encode_AttributeValueAssertion,
    _encode_DistinguishedName,
} from "./InformationFramework";
import {
    G3FacsimileNonBasicParameters,
    _decode_G3FacsimileNonBasicParameters,
    _encode_G3FacsimileNonBasicParameters,
} from "./PkiPmiExternalDataTypes";
import {
    MRMapping,
    _decode_MRMapping,
    _encode_MRMapping,
} from "./ServiceAdministration";
import {
    id,
    id_asx,
    id_at,
    id_avc,
    id_cat,
    id_coat,
    id_lmr,
    id_lsx,
    id_mr,
    id_not,
    id_pr,
} from "./UsefulDefinitions";
import * as __utils from "./__utils";
export {
    AlgorithmIdentifier,
    Certificate,
    CertificateList,
    CertificatePair,
    SupportedAlgorithm,
    _decode_AlgorithmIdentifier,
    _decode_Certificate,
    _decode_CertificateList,
    _decode_CertificatePair,
    _decode_SupportedAlgorithm,
    _encode_AlgorithmIdentifier,
    _encode_Certificate,
    _encode_CertificateList,
    _encode_CertificatePair,
    _encode_SupportedAlgorithm,
} from "./AuthenticationFramework";
export {
    FilterItem,
    HierarchySelections,
    SearchControlOptions,
    ServiceControlOptions,
    _decode_FilterItem,
    _decode_HierarchySelections,
    _decode_SearchControlOptions,
    _decode_ServiceControlOptions,
    _encode_FilterItem,
    _encode_HierarchySelections,
    _encode_SearchControlOptions,
    _encode_ServiceControlOptions,
} from "./DirectoryAbstractService";
export {
    Attribute,
    AttributeType,
    AttributeValueAssertion,
    ContextAssertion,
    DistinguishedName,
    SubtreeSpecification,
    _decode_Attribute,
    _decode_AttributeType,
    _decode_AttributeValueAssertion,
    _decode_ContextAssertion,
    _decode_DistinguishedName,
    _decode_SubtreeSpecification,
    _encode_Attribute,
    _encode_AttributeType,
    _encode_AttributeValueAssertion,
    _encode_ContextAssertion,
    _encode_DistinguishedName,
    _encode_SubtreeSpecification,
} from "./InformationFramework";
export {
    PwdAlphabet,
    PwdVocabulary,
    UserPwd,
    _decode_PwdAlphabet,
    _decode_PwdVocabulary,
    _decode_UserPwd,
    _encode_PwdAlphabet,
    _encode_PwdVocabulary,
    _encode_UserPwd,
} from "./PasswordPolicy";
export {
    G3FacsimileNonBasicParameters,
    _decode_G3FacsimileNonBasicParameters,
    _encode_G3FacsimileNonBasicParameters,
} from "./PkiPmiExternalDataTypes";
export {
    AttributeTypeDescription,
    DITContentRuleDescription,
    DITStructureRuleDescription,
    MatchingRuleDescription,
    MatchingRuleUseDescription,
    NameFormDescription,
    ObjectClassDescription,
    _decode_AttributeTypeDescription,
    _decode_DITContentRuleDescription,
    _decode_DITStructureRuleDescription,
    _decode_MatchingRuleDescription,
    _decode_MatchingRuleUseDescription,
    _decode_NameFormDescription,
    _decode_ObjectClassDescription,
    _encode_AttributeTypeDescription,
    _encode_DITContentRuleDescription,
    _encode_DITStructureRuleDescription,
    _encode_MatchingRuleDescription,
    _encode_MatchingRuleUseDescription,
    _encode_NameFormDescription,
    _encode_ObjectClassDescription,
} from "./SchemaAdministration";
export {
    AttributeCombination,
    ContextCombination,
    MRMapping,
    _decode_AttributeCombination,
    _decode_ContextCombination,
    _decode_MRMapping,
    _encode_AttributeCombination,
    _encode_ContextCombination,
    _encode_MRMapping,
} from "./ServiceAdministration";
export {
    authenticationFramework,
    certificateExtensions,
    directoryAbstractService,
    id,
    id_asx,
    id_at,
    id_avc,
    id_cat,
    id_coat,
    id_lmr,
    id_lsx,
    id_mr,
    id_not,
    id_pr,
    informationFramework,
    passwordPolicy,
    pkiPmiExternalDataTypes,
    schemaAdministration,
    serviceAdministration,
} from "./UsefulDefinitions";

export type DirectoryString =
    | { teletexString: asn1.TeletexString }
    | { printableString: asn1.PrintableString }
    | { bmpString: asn1.BMPString }
    | { universalString: asn1.UniversalString }
    | { uTF8String: asn1.UTF8String };
export const _decode_DirectoryString = __utils._decode_inextensible_choice<
    DirectoryString
>({
    "UNIVERSAL 20": ["teletexString", __utils._decodeTeletexString],
    "UNIVERSAL 19": ["printableString", __utils._decodePrintableString],
    "UNIVERSAL 30": ["bmpString", __utils._decodeBMPString],
    "UNIVERSAL 28": ["universalString", __utils._decodeUniversalString],
    "UNIVERSAL 12": ["uTF8String", __utils._decodeUTF8String],
});
export const _encode_DirectoryString = __utils._encode_choice<DirectoryString>(
    {
        teletexString: __utils._encodeTeletexString,
        printableString: __utils._encodePrintableString,
        bmpString: __utils._encodeBMPString,
        universalString: __utils._encodeUniversalString,
        uTF8String: __utils._encodeUTF8String,
    },
    __utils.BER
);

// TODO: ObjectAssignment: knowledgeInformation

// TODO: ObjectAssignment: name

// TODO: ObjectAssignment: commonName

// TODO: ObjectAssignment: surname

// TODO: ObjectAssignment: givenName

// TODO: ObjectAssignment: initials

// TODO: ObjectAssignment: generationQualifier

// TODO: ObjectAssignment: uniqueIdentifier

// TODO: ObjectAssignment: dnQualifier

// TODO: ObjectAssignment: serialNumber

// TODO: ObjectAssignment: pseudonym

// TODO: ObjectAssignment: uUIDPair

export type UUID = asn1.OCTET_STRING; // OctetStringType
export const _decode_UUID = __utils._decodeOctetString;
export const _encode_UUID = __utils._encodeOctetString;

export class UUIDPair {
    constructor(
        readonly issuerUUID: UUID,
        readonly subjectUUID: UUID,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_UUIDPair: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "issuerUUID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subjectUUID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UUIDPair: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_UUIDPair: __utils.ComponentSpec[] = [];

export const _decode_UUIDPair = function (el: asn1.ASN1Element): UUIDPair {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "UUIDPair contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "issuerUUID";
    sequence[1].name = "subjectUUID";
    let issuerUUID!: UUID;
    let subjectUUID!: UUID;
    issuerUUID = _decode_UUID(sequence[0]);
    subjectUUID = _decode_UUID(sequence[1]);
    // TODO: Validate values.
    return new UUIDPair(issuerUUID, subjectUUID, sequence.slice(2));
};
export const _encode_UUIDPair = function (
    value: UUIDPair,
    elGetter: __utils.ASN1Encoder<UUIDPair>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ _encode_UUID(
                        value.issuerUUID,
                        __utils.BER
                    ),
                    /* REQUIRED   */ _encode_UUID(
                        value.subjectUUID,
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

// TODO: ObjectAssignment: uri

// TODO: ObjectAssignment: urn

// TODO: ObjectAssignment: url

// TODO: ObjectAssignment: dnsName

export type DomainName = asn1.UTF8String; // UTF8String
export const _decode_DomainName = __utils._decodeUTF8String;
export const _encode_DomainName = __utils._encodeUTF8String;

// TODO: ObjectAssignment: countryName

export type CountryName = asn1.PrintableString; // PrintableString
export const _decode_CountryName = __utils._decodePrintableString;
export const _encode_CountryName = __utils._encodePrintableString;

// TODO: ObjectAssignment: countryCode3c

export type CountryCode3c = asn1.PrintableString; // PrintableString
export const _decode_CountryCode3c = __utils._decodePrintableString;
export const _encode_CountryCode3c = __utils._encodePrintableString;

// TODO: ObjectAssignment: countryCode3n

export type CountryCode3n = asn1.NumericString; // NumericString
export const _decode_CountryCode3n = __utils._decodeNumericString;
export const _encode_CountryCode3n = __utils._encodeNumericString;

// TODO: ObjectAssignment: localityName

// TODO: ObjectAssignment: collectiveLocalityName

// TODO: ObjectAssignment: stateOrProvinceName

// TODO: ObjectAssignment: collectiveStateOrProvinceName

// TODO: ObjectAssignment: streetAddress

// TODO: ObjectAssignment: collectiveStreetAddress

// TODO: ObjectAssignment: houseIdentifier

// TODO: ObjectAssignment: utmCoordinates

export class UtmCoordinates {
    constructor(
        readonly zone: asn1.PrintableString,
        readonly easting: asn1.NumericString,
        readonly northing: asn1.NumericString
    ) {}
}
export const _root_component_type_list_1_spec_for_UtmCoordinates: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "zone",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 19),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "easting",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 18),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "northing",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 18),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UtmCoordinates: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_UtmCoordinates: __utils.ComponentSpec[] = [];

export const _decode_UtmCoordinates = function (
    el: asn1.ASN1Element
): UtmCoordinates {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError(
            "UtmCoordinates contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "zone";
    sequence[1].name = "easting";
    sequence[2].name = "northing";
    let zone!: asn1.PrintableString;
    let easting!: asn1.NumericString;
    let northing!: asn1.NumericString;
    zone = __utils._decodePrintableString(sequence[0]);
    easting = __utils._decodeNumericString(sequence[1]);
    northing = __utils._decodeNumericString(sequence[2]);
    // TODO: Validate values.
    return new UtmCoordinates(zone, easting, northing);
};
export const _encode_UtmCoordinates = function (
    value: UtmCoordinates,
    elGetter: __utils.ASN1Encoder<UtmCoordinates>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodePrintableString(
                    value.zone,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeNumericString(
                    value.easting,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeNumericString(
                    value.northing,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectAssignment: organizationName

// TODO: ObjectAssignment: collectiveOrganizationName

// TODO: ObjectAssignment: organizationalUnitName

// TODO: ObjectAssignment: collectiveOrganizationalUnitName

// TODO: ObjectAssignment: title

// TODO: ObjectAssignment: organizationIdentifier

// TODO: ObjectAssignment: description

// TODO: ObjectAssignment: searchGuide

export type CriteriaItem =
    | { equality: AttributeType }
    | { substrings: AttributeType }
    | { greaterOrEqual: AttributeType }
    | { lessOrEqual: AttributeType }
    | { approximateMatch: AttributeType }
    | asn1.ASN1Element;
export const _decode_CriteriaItem = __utils._decode_extensible_choice<
    CriteriaItem
>({
    "CONTEXT 0": [
        "equality",
        __utils._decode_explicit<AttributeType>(() => _decode_AttributeType),
    ],
    "CONTEXT 1": [
        "substrings",
        __utils._decode_explicit<AttributeType>(() => _decode_AttributeType),
    ],
    "CONTEXT 2": [
        "greaterOrEqual",
        __utils._decode_explicit<AttributeType>(() => _decode_AttributeType),
    ],
    "CONTEXT 3": [
        "lessOrEqual",
        __utils._decode_explicit<AttributeType>(() => _decode_AttributeType),
    ],
    "CONTEXT 4": [
        "approximateMatch",
        __utils._decode_explicit<AttributeType>(() => _decode_AttributeType),
    ],
});
export const _encode_CriteriaItem = __utils._encode_choice<CriteriaItem>(
    {
        equality: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            0,
            () => _encode_AttributeType,
            __utils.BER
        ),
        substrings: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            1,
            () => _encode_AttributeType,
            __utils.BER
        ),
        greaterOrEqual: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            2,
            () => _encode_AttributeType,
            __utils.BER
        ),
        lessOrEqual: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            3,
            () => _encode_AttributeType,
            __utils.BER
        ),
        approximateMatch: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            4,
            () => _encode_AttributeType,
            __utils.BER
        ),
    },
    __utils.BER
);

/* TODO: CHECK_RECURSIVE_DEFINITION */
export type Criteria =
    | { type_: CriteriaItem }
    | { and: Criteria[] }
    | { or: Criteria[] }
    | { not: Criteria }
    | asn1.ASN1Element;
export const _decode_Criteria = __utils._decode_extensible_choice<Criteria>({
    "CONTEXT 0": [
        "type_",
        __utils._decode_explicit<CriteriaItem>(() => _decode_CriteriaItem),
    ],
    "CONTEXT 1": [
        "and",
        __utils._decode_explicit<Criteria[]>(() =>
            __utils._decodeSetOf<Criteria>(() => _decode_Criteria)
        ),
    ],
    "CONTEXT 2": [
        "or",
        __utils._decode_explicit<Criteria[]>(() =>
            __utils._decodeSetOf<Criteria>(() => _decode_Criteria)
        ),
    ],
    "CONTEXT 3": [
        "not",
        __utils._decode_explicit<Criteria>(() => _decode_Criteria),
    ],
});
export const _encode_Criteria = __utils._encode_choice<Criteria>(
    {
        type_: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            0,
            () => _encode_CriteriaItem,
            __utils.BER
        ),
        and: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            1,
            () =>
                __utils._encodeSetOf<Criteria>(
                    () => _encode_Criteria,
                    __utils.BER
                ),
            __utils.BER
        ),
        or: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            2,
            () =>
                __utils._encodeSetOf<Criteria>(
                    () => _encode_Criteria,
                    __utils.BER
                ),
            __utils.BER
        ),
        not: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            3,
            () => _encode_Criteria,
            __utils.BER
        ),
    },
    __utils.BER
);

export class Guide {
    constructor(
        readonly objectClass: asn1.OBJECT_IDENTIFIER | undefined,
        readonly criteria: Criteria,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_Guide: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "objectClass",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "criteria",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Guide: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Guide: __utils.ComponentSpec[] = [];

export const _decode_Guide = function (el: asn1.ASN1Element): Guide {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let objectClass: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let criteria!: Criteria;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        objectClass: (_el: asn1.ASN1Element): void => {
            objectClass = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
        },
        criteria: (_el: asn1.ASN1Element): void => {
            criteria = __utils._decode_explicit<Criteria>(
                () => _decode_Criteria
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_set(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Guide,
        _extension_additions_list_spec_for_Guide,
        _root_component_type_list_2_spec_for_Guide,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new Guide /* SET_CONSTRUCTOR_CALL */(
        objectClass,
        criteria,
        _unrecognizedExtensionsList
    );
};
export const _encode_Guide = function (
    value: Guide,
    elGetter: __utils.ASN1Encoder<Guide>
): asn1.ASN1Element {
    return __utils._encodeSet(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* IF_ABSENT  */ value.objectClass === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              0,
                              () => __utils._encodeObjectIdentifier,
                              __utils.BER
                          )(value.objectClass, __utils.BER),
                    /* REQUIRED   */ __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        1,
                        () => _encode_Criteria,
                        __utils.BER
                    )(value.criteria, __utils.BER),
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

// TODO: ObjectAssignment: enhancedSearchGuide

export type EnhancedGuide_subset = asn1.INTEGER;
export const EnhancedGuide_subset_baseObject: EnhancedGuide_subset = 0; /* LONG_NAMED_INTEGER_VALUE */
export const EnhancedGuide_subset_oneLevel: EnhancedGuide_subset = 1; /* LONG_NAMED_INTEGER_VALUE */
export const EnhancedGuide_subset_wholeSubtree: EnhancedGuide_subset = 2; /* LONG_NAMED_INTEGER_VALUE */
export const _decode_EnhancedGuide_subset = __utils._decodeInteger;
export const _encode_EnhancedGuide_subset = __utils._encodeInteger;

export class EnhancedGuide {
    constructor(
        readonly objectClass: asn1.OBJECT_IDENTIFIER,
        readonly criteria: Criteria,
        readonly subset: EnhancedGuide_subset | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_EnhancedGuide: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "objectClass",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "criteria",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subset",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EnhancedGuide: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EnhancedGuide: __utils.ComponentSpec[] = [];
export const _default_value_for_EnhancedGuide__subset = EnhancedGuide_subset_oneLevel;
export const _decode_EnhancedGuide = function (
    el: asn1.ASN1Element
): EnhancedGuide {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let objectClass!: asn1.OBJECT_IDENTIFIER;
    let criteria!: Criteria;
    let subset: asn1.OPTIONAL<EnhancedGuide_subset> = _default_value_for_EnhancedGuide__subset;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        objectClass: (_el: asn1.ASN1Element): void => {
            objectClass = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
        },
        criteria: (_el: asn1.ASN1Element): void => {
            criteria = __utils._decode_explicit<Criteria>(
                () => _decode_Criteria
            )(_el);
        },
        subset: (_el: asn1.ASN1Element): void => {
            subset = __utils._decode_explicit<EnhancedGuide_subset>(
                () => _decode_EnhancedGuide_subset
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_EnhancedGuide,
        _extension_additions_list_spec_for_EnhancedGuide,
        _root_component_type_list_2_spec_for_EnhancedGuide,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new EnhancedGuide /* SEQUENCE_CONSTRUCTOR_CALL */(
        objectClass,
        criteria,
        subset,
        _unrecognizedExtensionsList
    );
};
export const _encode_EnhancedGuide = function (
    value: EnhancedGuide,
    elGetter: __utils.ASN1Encoder<EnhancedGuide>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        0,
                        () => __utils._encodeObjectIdentifier,
                        __utils.BER
                    )(value.objectClass, __utils.BER),
                    /* REQUIRED   */ __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        1,
                        () => _encode_Criteria,
                        __utils.BER
                    )(value.criteria, __utils.BER),
                    /* IF_DEFAULT */ value.subset === undefined ||
                    __utils.deepEq(
                        value.subset,
                        _default_value_for_EnhancedGuide__subset
                    )
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              2,
                              () => _encode_EnhancedGuide_subset,
                              __utils.BER
                          )(value.subset, __utils.BER),
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

// TODO: ObjectAssignment: businessCategory

// TODO: ObjectAssignment: postalAddress

export type UnboundedDirectoryString =
    | { teletexString: asn1.TeletexString }
    | { printableString: asn1.PrintableString }
    | { bmpString: asn1.BMPString }
    | { universalString: asn1.UniversalString }
    | { uTF8String: asn1.UTF8String };
export const _decode_UnboundedDirectoryString = __utils._decode_inextensible_choice<
    UnboundedDirectoryString
>({
    "UNIVERSAL 20": ["teletexString", __utils._decodeTeletexString],
    "UNIVERSAL 19": ["printableString", __utils._decodePrintableString],
    "UNIVERSAL 30": ["bmpString", __utils._decodeBMPString],
    "UNIVERSAL 28": ["universalString", __utils._decodeUniversalString],
    "UNIVERSAL 12": ["uTF8String", __utils._decodeUTF8String],
});
export const _encode_UnboundedDirectoryString = __utils._encode_choice<
    UnboundedDirectoryString
>(
    {
        teletexString: __utils._encodeTeletexString,
        printableString: __utils._encodePrintableString,
        bmpString: __utils._encodeBMPString,
        universalString: __utils._encodeUniversalString,
        uTF8String: __utils._encodeUTF8String,
    },
    __utils.BER
);

export type PostalAddress = UnboundedDirectoryString[]; // SequenceOfType
export const _decode_PostalAddress = __utils._decodeSequenceOf<
    UnboundedDirectoryString
>(() => _decode_UnboundedDirectoryString);
export const _encode_PostalAddress = __utils._encodeSequenceOf<
    UnboundedDirectoryString
>(() => _encode_UnboundedDirectoryString, __utils.BER);

// TODO: ObjectAssignment: collectivePostalAddress

// TODO: ObjectAssignment: postalCode

// TODO: ObjectAssignment: collectivePostalCode

// TODO: ObjectAssignment: postOfficeBox

// TODO: ObjectAssignment: collectivePostOfficeBox

// TODO: ObjectAssignment: physicalDeliveryOfficeName

// TODO: ObjectAssignment: collectivePhysicalDeliveryOfficeName

// TODO: ObjectAssignment: telephoneNumber

export const ub_telephone_number: asn1.INTEGER = 32;

// TODO: ObjectAssignment: collectiveTelephoneNumber

// TODO: ObjectAssignment: telexNumber

export class TelexNumber {
    constructor(
        readonly telexNumber: asn1.PrintableString,
        readonly countryCode: asn1.PrintableString,
        readonly answerback: asn1.PrintableString,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_TelexNumber: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "telexNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 19),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "countryCode",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 19),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "answerback",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 19),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TelexNumber: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TelexNumber: __utils.ComponentSpec[] = [];

export const _decode_TelexNumber = function (
    el: asn1.ASN1Element
): TelexNumber {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new asn1.ASN1ConstructionError(
            "TelexNumber contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "telexNumber";
    sequence[1].name = "countryCode";
    sequence[2].name = "answerback";
    let telexNumber!: asn1.PrintableString;
    let countryCode!: asn1.PrintableString;
    let answerback!: asn1.PrintableString;
    telexNumber = __utils._decodePrintableString(sequence[0]);
    countryCode = __utils._decodePrintableString(sequence[1]);
    answerback = __utils._decodePrintableString(sequence[2]);
    // TODO: Validate values.
    return new TelexNumber(
        telexNumber,
        countryCode,
        answerback,
        sequence.slice(3)
    );
};
export const _encode_TelexNumber = function (
    value: TelexNumber,
    elGetter: __utils.ASN1Encoder<TelexNumber>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ __utils._encodePrintableString(
                        value.telexNumber,
                        __utils.BER
                    ),
                    /* REQUIRED   */ __utils._encodePrintableString(
                        value.countryCode,
                        __utils.BER
                    ),
                    /* REQUIRED   */ __utils._encodePrintableString(
                        value.answerback,
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

export const ub_telex_number: asn1.INTEGER = 14;

export const ub_country_code: asn1.INTEGER = 4;

export const ub_answerback: asn1.INTEGER = 8;

// TODO: ObjectAssignment: collectiveTelexNumber

// TODO: ObjectAssignment: facsimileTelephoneNumber

export type TelephoneNumber = asn1.PrintableString; // PrintableString
export const _decode_TelephoneNumber = __utils._decodePrintableString;
export const _encode_TelephoneNumber = __utils._encodePrintableString;

export class FacsimileTelephoneNumber {
    constructor(
        readonly telephoneNumber: TelephoneNumber,
        readonly parameters: G3FacsimileNonBasicParameters | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_FacsimileTelephoneNumber: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "telephoneNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 19),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "parameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_FacsimileTelephoneNumber: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_FacsimileTelephoneNumber: __utils.ComponentSpec[] = [];

export const _decode_FacsimileTelephoneNumber = function (
    el: asn1.ASN1Element
): FacsimileTelephoneNumber {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let telephoneNumber!: TelephoneNumber;
    let parameters: asn1.OPTIONAL<G3FacsimileNonBasicParameters>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        telephoneNumber: (_el: asn1.ASN1Element): void => {
            telephoneNumber = _decode_TelephoneNumber(_el);
        },
        parameters: (_el: asn1.ASN1Element): void => {
            parameters = _decode_G3FacsimileNonBasicParameters(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_FacsimileTelephoneNumber,
        _extension_additions_list_spec_for_FacsimileTelephoneNumber,
        _root_component_type_list_2_spec_for_FacsimileTelephoneNumber,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new FacsimileTelephoneNumber /* SEQUENCE_CONSTRUCTOR_CALL */(
        telephoneNumber,
        parameters,
        _unrecognizedExtensionsList
    );
};
export const _encode_FacsimileTelephoneNumber = function (
    value: FacsimileTelephoneNumber,
    elGetter: __utils.ASN1Encoder<FacsimileTelephoneNumber>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ _encode_TelephoneNumber(
                        value.telephoneNumber,
                        __utils.BER
                    ),
                    /* IF_ABSENT  */ value.parameters === undefined
                        ? undefined
                        : _encode_G3FacsimileNonBasicParameters(
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

// TODO: ObjectAssignment: collectiveFacsimileTelephoneNumber

// TODO: ObjectAssignment: x121Address

export type X121Address = asn1.NumericString; // NumericString
export const _decode_X121Address = __utils._decodeNumericString;
export const _encode_X121Address = __utils._encodeNumericString;

export const ub_x121_address: asn1.INTEGER = 15;

// TODO: ObjectAssignment: internationalISDNNumber

export type InternationalISDNNumber = asn1.NumericString; // NumericString
export const _decode_InternationalISDNNumber = __utils._decodeNumericString;
export const _encode_InternationalISDNNumber = __utils._encodeNumericString;

export const ub_international_isdn_number: asn1.INTEGER = 16;

// TODO: ObjectAssignment: collectiveInternationalISDNNumber

// TODO: ObjectAssignment: registeredAddress

// TODO: ObjectAssignment: destinationIndicator

export type DestinationIndicator = asn1.PrintableString; // PrintableString
export const _decode_DestinationIndicator = __utils._decodePrintableString;
export const _encode_DestinationIndicator = __utils._encodePrintableString;

// TODO: ObjectAssignment: communicationsService

export type CommunicationsService = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_CommunicationsService = __utils._decodeObjectIdentifier;
export const _encode_CommunicationsService = __utils._encodeObjectIdentifier;

// TODO: ObjectAssignment: communicationsNetwork

export type CommunicationsNetwork = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_CommunicationsNetwork = __utils._decodeObjectIdentifier;
export const _encode_CommunicationsNetwork = __utils._encodeObjectIdentifier;

// TODO: ObjectAssignment: preferredDeliveryMethod

export type PreferredDeliveryMethod_Item = asn1.INTEGER;
export const PreferredDeliveryMethod_Item_any_delivery_method: PreferredDeliveryMethod_Item = 0; /* LONG_NAMED_INTEGER_VALUE */
export const any_delivery_method: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_any_delivery_method; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_mhs_delivery: PreferredDeliveryMethod_Item = 1; /* LONG_NAMED_INTEGER_VALUE */
export const mhs_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_mhs_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_physical_delivery: PreferredDeliveryMethod_Item = 2; /* LONG_NAMED_INTEGER_VALUE */
export const physical_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_physical_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_telex_delivery: PreferredDeliveryMethod_Item = 3; /* LONG_NAMED_INTEGER_VALUE */
export const telex_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_telex_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_teletex_delivery: PreferredDeliveryMethod_Item = 4; /* LONG_NAMED_INTEGER_VALUE */
export const teletex_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_teletex_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_g3_facsimile_delivery: PreferredDeliveryMethod_Item = 5; /* LONG_NAMED_INTEGER_VALUE */
export const g3_facsimile_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_g3_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_g4_facsimile_delivery: PreferredDeliveryMethod_Item = 6; /* LONG_NAMED_INTEGER_VALUE */
export const g4_facsimile_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_g4_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_ia5_terminal_delivery: PreferredDeliveryMethod_Item = 7; /* LONG_NAMED_INTEGER_VALUE */
export const ia5_terminal_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_ia5_terminal_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_videotex_delivery: PreferredDeliveryMethod_Item = 8; /* LONG_NAMED_INTEGER_VALUE */
export const videotex_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_videotex_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const PreferredDeliveryMethod_Item_telephone_delivery: PreferredDeliveryMethod_Item = 9; /* LONG_NAMED_INTEGER_VALUE */
export const telephone_delivery: PreferredDeliveryMethod_Item = PreferredDeliveryMethod_Item_telephone_delivery; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_PreferredDeliveryMethod_Item = __utils._decodeInteger;
export const _encode_PreferredDeliveryMethod_Item = __utils._encodeInteger;

export type PreferredDeliveryMethod = PreferredDeliveryMethod_Item[]; // SequenceOfType
export const _decode_PreferredDeliveryMethod = __utils._decodeSequenceOf<
    PreferredDeliveryMethod_Item
>(() => _decode_PreferredDeliveryMethod_Item);
export const _encode_PreferredDeliveryMethod = __utils._encodeSequenceOf<
    PreferredDeliveryMethod_Item
>(() => _encode_PreferredDeliveryMethod_Item, __utils.BER);

// TODO: ObjectAssignment: presentationAddress

export class PresentationAddress {
    constructor(
        readonly pSelector: asn1.OCTET_STRING | undefined,
        readonly sSelector: asn1.OCTET_STRING | undefined,
        readonly tSelector: asn1.OCTET_STRING | undefined,
        readonly nAddresses: asn1.OCTET_STRING[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PresentationAddress: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "pSelector",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sSelector",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "tSelector",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nAddresses",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PresentationAddress: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PresentationAddress: __utils.ComponentSpec[] = [];

export const _decode_PresentationAddress = function (
    el: asn1.ASN1Element
): PresentationAddress {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let pSelector: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let sSelector: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let tSelector: asn1.OPTIONAL<asn1.OCTET_STRING>;
    let nAddresses!: asn1.OCTET_STRING[];
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        pSelector: (_el: asn1.ASN1Element): void => {
            pSelector = __utils._decode_explicit<asn1.OCTET_STRING>(
                () => __utils._decodeOctetString
            )(_el);
        },
        sSelector: (_el: asn1.ASN1Element): void => {
            sSelector = __utils._decode_explicit<asn1.OCTET_STRING>(
                () => __utils._decodeOctetString
            )(_el);
        },
        tSelector: (_el: asn1.ASN1Element): void => {
            tSelector = __utils._decode_explicit<asn1.OCTET_STRING>(
                () => __utils._decodeOctetString
            )(_el);
        },
        nAddresses: (_el: asn1.ASN1Element): void => {
            nAddresses = __utils._decode_explicit<asn1.OCTET_STRING[]>(() =>
                __utils._decodeSetOf<asn1.OCTET_STRING>(
                    () => __utils._decodeOctetString
                )
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_PresentationAddress,
        _extension_additions_list_spec_for_PresentationAddress,
        _root_component_type_list_2_spec_for_PresentationAddress,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new PresentationAddress /* SEQUENCE_CONSTRUCTOR_CALL */(
        pSelector,
        sSelector,
        tSelector,
        nAddresses,
        _unrecognizedExtensionsList
    );
};
export const _encode_PresentationAddress = function (
    value: PresentationAddress,
    elGetter: __utils.ASN1Encoder<PresentationAddress>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* IF_ABSENT  */ value.pSelector === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              0,
                              () => __utils._encodeOctetString,
                              __utils.BER
                          )(value.pSelector, __utils.BER),
                    /* IF_ABSENT  */ value.sSelector === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () => __utils._encodeOctetString,
                              __utils.BER
                          )(value.sSelector, __utils.BER),
                    /* IF_ABSENT  */ value.tSelector === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              2,
                              () => __utils._encodeOctetString,
                              __utils.BER
                          )(value.tSelector, __utils.BER),
                    /* REQUIRED   */ __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        3,
                        () =>
                            __utils._encodeSetOf<asn1.OCTET_STRING>(
                                () => __utils._encodeOctetString,
                                __utils.BER
                            ),
                        __utils.BER
                    )(value.nAddresses, __utils.BER),
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

// TODO: ObjectAssignment: supportedApplicationContext

// TODO: ObjectAssignment: protocolInformation

export class ProtocolInformation {
    constructor(
        readonly nAddress: asn1.OCTET_STRING,
        readonly profiles: asn1.OBJECT_IDENTIFIER[]
    ) {}
}
export const _root_component_type_list_1_spec_for_ProtocolInformation: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "nAddress",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "profiles",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ProtocolInformation: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ProtocolInformation: __utils.ComponentSpec[] = [];

export const _decode_ProtocolInformation = function (
    el: asn1.ASN1Element
): ProtocolInformation {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "ProtocolInformation contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "nAddress";
    sequence[1].name = "profiles";
    let nAddress!: asn1.OCTET_STRING;
    let profiles!: asn1.OBJECT_IDENTIFIER[];
    nAddress = __utils._decodeOctetString(sequence[0]);
    profiles = __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(
        () => __utils._decodeObjectIdentifier
    )(sequence[1]);
    // TODO: Validate values.
    return new ProtocolInformation(nAddress, profiles);
};
export const _encode_ProtocolInformation = function (
    value: ProtocolInformation,
    elGetter: __utils.ASN1Encoder<ProtocolInformation>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeOctetString(
                    value.nAddress,
                    __utils.BER
                ),
                /* REQUIRED   */ __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(
                    () => __utils._encodeObjectIdentifier,
                    __utils.BER
                )(value.profiles, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectAssignment: distinguishedName

// TODO: ObjectAssignment: member

// TODO: ObjectAssignment: uniqueMember

export type UniqueIdentifier = asn1.BIT_STRING;
export const _decode_UniqueIdentifier = __utils._decodeBitString;
export const _encode_UniqueIdentifier = __utils._encodeBitString;

export class NameAndOptionalUID {
    constructor(
        readonly dn: DistinguishedName,
        readonly uid: UniqueIdentifier | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_NameAndOptionalUID: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "dn",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "uid",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_NameAndOptionalUID: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_NameAndOptionalUID: __utils.ComponentSpec[] = [];

export const _decode_NameAndOptionalUID = function (
    el: asn1.ASN1Element
): NameAndOptionalUID {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let dn!: DistinguishedName;
    let uid: asn1.OPTIONAL<UniqueIdentifier>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        dn: (_el: asn1.ASN1Element): void => {
            dn = _decode_DistinguishedName(_el);
        },
        uid: (_el: asn1.ASN1Element): void => {
            uid = _decode_UniqueIdentifier(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_NameAndOptionalUID,
        _extension_additions_list_spec_for_NameAndOptionalUID,
        _root_component_type_list_2_spec_for_NameAndOptionalUID,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new NameAndOptionalUID /* SEQUENCE_CONSTRUCTOR_CALL */(
        dn,
        uid,
        _unrecognizedExtensionsList
    );
};
export const _encode_NameAndOptionalUID = function (
    value: NameAndOptionalUID,
    elGetter: __utils.ASN1Encoder<NameAndOptionalUID>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ _encode_DistinguishedName(
                        value.dn,
                        __utils.BER
                    ),
                    /* IF_ABSENT  */ value.uid === undefined
                        ? undefined
                        : _encode_UniqueIdentifier(value.uid, __utils.BER),
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

// TODO: ObjectAssignment: owner

// TODO: ObjectAssignment: roleOccupant

// TODO: ObjectAssignment: seeAlso

// TODO: ObjectAssignment: dmdName

// TODO: ObjectAssignment: oidC1

// TODO: ObjectAssignment: oidC2

// TODO: ObjectAssignment: oidC

// TODO: ObjectAssignment: urnC

// TODO: ObjectAssignment: tagOid

// TODO: ObjectAssignment: uiiFormat

export type URI = asn1.UTF8String; // UTF8String
export const _decode_URI = __utils._decodeUTF8String;
export const _encode_URI = __utils._encodeUTF8String;

export enum UiiFormat_subset {
    baseObject = 0,
    oneLevel = 1,
    wholeSubtree = 2,
}
export const UiiFormat_subset_baseObject: UiiFormat_subset =
    UiiFormat_subset.baseObject; /* LONG_NAMED_ENUMERATED_VALUE */
export const UiiFormat_subset_oneLevel: UiiFormat_subset =
    UiiFormat_subset.oneLevel; /* LONG_NAMED_ENUMERATED_VALUE */
export const UiiFormat_subset_wholeSubtree: UiiFormat_subset =
    UiiFormat_subset.wholeSubtree; /* LONG_NAMED_ENUMERATED_VALUE */
export const _decode_UiiFormat_subset = __utils._decodeEnumerated;
export const _encode_UiiFormat_subset = __utils._encodeEnumerated;

export class UiiItem {
    constructor(
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly length: asn1.INTEGER | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_UiiItem: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "length",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UiiItem: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_UiiItem: __utils.ComponentSpec[] = [];

export const _decode_UiiItem = function (el: asn1.ASN1Element): UiiItem {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let type_!: asn1.OBJECT_IDENTIFIER;
    let length: asn1.OPTIONAL<asn1.INTEGER>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        type: (_el: asn1.ASN1Element): void => {
            type_ = __utils._decodeObjectIdentifier(_el);
        },
        length: (_el: asn1.ASN1Element): void => {
            length = __utils._decodeInteger(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_UiiItem,
        _extension_additions_list_spec_for_UiiItem,
        _root_component_type_list_2_spec_for_UiiItem,
        undefined
    );
    return new UiiItem /* SEQUENCE_CONSTRUCTOR_CALL */(type_, length);
};
export const _encode_UiiItem = function (
    value: UiiItem,
    elGetter: __utils.ASN1Encoder<UiiItem>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeObjectIdentifier(
                    value.type_,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.length === undefined
                    ? undefined
                    : __utils._encodeInteger(value.length, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

/* TODO: CHECK_RECURSIVE_DEFINITION */
export type UiiFilter =
    | { item: UiiItem }
    | { and: UiiFilter[] }
    | { or: UiiFilter[] }
    | { not: UiiFilter };
export const _decode_UiiFilter = __utils._decode_inextensible_choice<UiiFilter>(
    {
        "CONTEXT 0": [
            "item",
            __utils._decode_explicit<UiiItem>(() => _decode_UiiItem),
        ],
        "CONTEXT 1": [
            "and",
            __utils._decode_explicit<UiiFilter[]>(() =>
                __utils._decodeSetOf<UiiFilter>(() => _decode_UiiFilter)
            ),
        ],
        "CONTEXT 2": [
            "or",
            __utils._decode_explicit<UiiFilter[]>(() =>
                __utils._decodeSetOf<UiiFilter>(() => _decode_UiiFilter)
            ),
        ],
        "CONTEXT 3": [
            "not",
            __utils._decode_explicit<UiiFilter>(() => _decode_UiiFilter),
        ],
    }
);
export const _encode_UiiFilter = __utils._encode_choice<UiiFilter>(
    {
        item: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            0,
            () => _encode_UiiItem,
            __utils.BER
        ),
        and: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            1,
            () =>
                __utils._encodeSetOf<UiiFilter>(
                    () => _encode_UiiFilter,
                    __utils.BER
                ),
            __utils.BER
        ),
        or: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            2,
            () =>
                __utils._encodeSetOf<UiiFilter>(
                    () => _encode_UiiFilter,
                    __utils.BER
                ),
            __utils.BER
        ),
        not: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            3,
            () => _encode_UiiFilter,
            __utils.BER
        ),
    },
    __utils.BER
);

export type UiiFormat_next = { length: asn1.INTEGER } | { filter: UiiFilter };
export const _decode_UiiFormat_next = __utils._decode_inextensible_choice<
    UiiFormat_next
>({
    "UNIVERSAL 2": ["length", __utils._decodeInteger],
    "CONTEXT 0": ["filter", _decode_UiiFilter],
    "CONTEXT 1": ["filter", _decode_UiiFilter],
    "CONTEXT 2": ["filter", _decode_UiiFilter],
    "CONTEXT 3": ["filter", _decode_UiiFilter],
});
export const _encode_UiiFormat_next = __utils._encode_choice<UiiFormat_next>(
    {
        length: __utils._encodeInteger,
        filter: _encode_UiiFilter,
    },
    __utils.BER
);

export class UiiFormat {
    constructor(
        readonly baseObject: URI | undefined,
        readonly subset: UiiFormat_subset | undefined,
        readonly next: UiiFormat_next
    ) {}
}
export const _root_component_type_list_1_spec_for_UiiFormat: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "baseObject",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 12),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subset",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "next",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UiiFormat: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_UiiFormat: __utils.ComponentSpec[] = [];
export const _default_value_for_UiiFormat__subset = UiiFormat_subset_baseObject;
export const _decode_UiiFormat = function (el: asn1.ASN1Element): UiiFormat {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let baseObject: asn1.OPTIONAL<URI>;
    let subset: asn1.OPTIONAL<UiiFormat_subset> = _default_value_for_UiiFormat__subset;
    let next!: UiiFormat_next;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        baseObject: (_el: asn1.ASN1Element): void => {
            baseObject = _decode_URI(_el);
        },
        subset: (_el: asn1.ASN1Element): void => {
            subset = _decode_UiiFormat_subset(_el);
        },
        next: (_el: asn1.ASN1Element): void => {
            next = _decode_UiiFormat_next(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_UiiFormat,
        _extension_additions_list_spec_for_UiiFormat,
        _root_component_type_list_2_spec_for_UiiFormat,
        undefined
    );
    return new UiiFormat /* SEQUENCE_CONSTRUCTOR_CALL */(
        baseObject,
        subset,
        next
    );
};
export const _encode_UiiFormat = function (
    value: UiiFormat,
    elGetter: __utils.ASN1Encoder<UiiFormat>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* IF_ABSENT  */ value.baseObject === undefined
                    ? undefined
                    : _encode_URI(value.baseObject, __utils.BER),
                /* IF_DEFAULT */ value.subset === undefined ||
                __utils.deepEq(
                    value.subset,
                    _default_value_for_UiiFormat__subset
                )
                    ? undefined
                    : _encode_UiiFormat_subset(value.subset, __utils.BER),
                /* REQUIRED   */ _encode_UiiFormat_next(
                    value.next,
                    __utils.BER
                ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectAssignment: uiiInUrn

// TODO: ObjectAssignment: contentUrl

// TODO: ObjectAssignment: uii

// TODO: ObjectAssignment: epc

// TODO: ObjectAssignment: tagAfi

// TODO: ObjectAssignment: epcFormat

export type EpcFormat_fields_Item_charField =
    | { characters: asn1.INTEGER }
    | { maxValue: asn1.INTEGER };
export const _decode_EpcFormat_fields_Item_charField = __utils._decode_inextensible_choice<
    EpcFormat_fields_Item_charField
>({
    "CONTEXT 0": [
        "characters",
        __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger),
    ],
    "CONTEXT 1": [
        "maxValue",
        __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger),
    ],
});
export const _encode_EpcFormat_fields_Item_charField = __utils._encode_choice<
    EpcFormat_fields_Item_charField
>(
    {
        characters: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            0,
            () => __utils._encodeInteger,
            __utils.BER
        ),
        maxValue: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            1,
            () => __utils._encodeInteger,
            __utils.BER
        ),
    },
    __utils.BER
);

export enum EpcFormat_fields_Item_result {
    numericPad = 0,
    numeric = 1,
    alpha7bits = 2,
}
export const EpcFormat_fields_Item_result_numericPad: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.numericPad; /* LONG_NAMED_ENUMERATED_VALUE */
export const numericPad: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.numericPad; /* SHORT_NAMED_ENUMERATED_VALUE */
export const EpcFormat_fields_Item_result_numeric: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.numeric; /* LONG_NAMED_ENUMERATED_VALUE */
export const numeric: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.numeric; /* SHORT_NAMED_ENUMERATED_VALUE */
export const EpcFormat_fields_Item_result_alpha7bits: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.alpha7bits; /* LONG_NAMED_ENUMERATED_VALUE */
export const alpha7bits: EpcFormat_fields_Item_result =
    EpcFormat_fields_Item_result.alpha7bits; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EpcFormat_fields_Item_result = __utils._decodeEnumerated;
export const _encode_EpcFormat_fields_Item_result = __utils._encodeEnumerated;

export class EpcFormat_fields_Item {
    constructor(
        readonly bits: asn1.INTEGER,
        readonly charField: EpcFormat_fields_Item_charField,
        readonly result: EpcFormat_fields_Item_result | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_EpcFormat_fields_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "bits",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "charField",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "result",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EpcFormat_fields_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EpcFormat_fields_Item: __utils.ComponentSpec[] = [];
export const _default_value_for_EpcFormat_fields_Item__result = numericPad;
export const _decode_EpcFormat_fields_Item = function (
    el: asn1.ASN1Element
): EpcFormat_fields_Item {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let bits!: asn1.INTEGER;
    let charField!: EpcFormat_fields_Item_charField;
    let result: asn1.OPTIONAL<EpcFormat_fields_Item_result> = _default_value_for_EpcFormat_fields_Item__result;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        bits: (_el: asn1.ASN1Element): void => {
            bits = __utils._decodeInteger(_el);
        },
        charField: (_el: asn1.ASN1Element): void => {
            charField = _decode_EpcFormat_fields_Item_charField(_el);
        },
        result: (_el: asn1.ASN1Element): void => {
            result = _decode_EpcFormat_fields_Item_result(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_EpcFormat_fields_Item,
        _extension_additions_list_spec_for_EpcFormat_fields_Item,
        _root_component_type_list_2_spec_for_EpcFormat_fields_Item,
        undefined
    );
    return new EpcFormat_fields_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
        bits,
        charField,
        result
    );
};
export const _encode_EpcFormat_fields_Item = function (
    value: EpcFormat_fields_Item,
    elGetter: __utils.ASN1Encoder<EpcFormat_fields_Item>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeInteger(
                    value.bits,
                    __utils.BER
                ),
                /* REQUIRED   */ _encode_EpcFormat_fields_Item_charField(
                    value.charField,
                    __utils.BER
                ),
                /* IF_DEFAULT */ value.result === undefined ||
                __utils.deepEq(
                    value.result,
                    _default_value_for_EpcFormat_fields_Item__result
                )
                    ? undefined
                    : _encode_EpcFormat_fields_Item_result(
                          value.result,
                          __utils.BER
                      ),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

export class EpcFormat {
    constructor(
        readonly fields: EpcFormat_fields_Item[],
        readonly digitShift: asn1.INTEGER | undefined,
        readonly checkCalc: asn1.INTEGER | undefined,
        readonly urnPrefix: asn1.UTF8String | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_EpcFormat: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "fields",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "digitShift",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "checkCalc",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "urnPrefix",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 12),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EpcFormat: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EpcFormat: __utils.ComponentSpec[] = [];

export const _decode_EpcFormat = function (el: asn1.ASN1Element): EpcFormat {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let fields!: EpcFormat_fields_Item[];
    let digitShift: asn1.OPTIONAL<asn1.INTEGER>;
    let checkCalc: asn1.OPTIONAL<asn1.INTEGER>;
    let urnPrefix: asn1.OPTIONAL<asn1.UTF8String>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        fields: (_el: asn1.ASN1Element): void => {
            fields = __utils._decodeSequenceOf<EpcFormat_fields_Item>(
                () => _decode_EpcFormat_fields_Item
            )(_el);
        },
        digitShift: (_el: asn1.ASN1Element): void => {
            digitShift = __utils._decode_explicit<asn1.INTEGER>(
                () => __utils._decodeInteger
            )(_el);
        },
        checkCalc: (_el: asn1.ASN1Element): void => {
            checkCalc = __utils._decode_explicit<asn1.INTEGER>(
                () => __utils._decodeInteger
            )(_el);
        },
        urnPrefix: (_el: asn1.ASN1Element): void => {
            urnPrefix = __utils._decodeUTF8String(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_EpcFormat,
        _extension_additions_list_spec_for_EpcFormat,
        _root_component_type_list_2_spec_for_EpcFormat,
        undefined
    );
    return new EpcFormat /* SEQUENCE_CONSTRUCTOR_CALL */(
        fields,
        digitShift,
        checkCalc,
        urnPrefix
    );
};
export const _encode_EpcFormat = function (
    value: EpcFormat,
    elGetter: __utils.ASN1Encoder<EpcFormat>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* REQUIRED   */ __utils._encodeSequenceOf<
                    EpcFormat_fields_Item
                >(() => _encode_EpcFormat_fields_Item, __utils.BER)(
                    value.fields,
                    __utils.BER
                ),
                /* IF_ABSENT  */ value.digitShift === undefined
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          0,
                          () => __utils._encodeInteger,
                          __utils.BER
                      )(value.digitShift, __utils.BER),
                /* IF_ABSENT  */ value.checkCalc === undefined
                    ? undefined
                    : __utils._encode_explicit(
                          asn1.ASN1TagClass.context,
                          1,
                          () => __utils._encodeInteger,
                          __utils.BER
                      )(value.checkCalc, __utils.BER),
                /* IF_ABSENT  */ value.urnPrefix === undefined
                    ? undefined
                    : __utils._encodeUTF8String(value.urnPrefix, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectAssignment: epcInUrn

// TODO: ObjectAssignment: ldapUrl

// TODO: ObjectAssignment: tagLocation

// TODO: ObjectAssignment: dSAProblem

// TODO: ObjectAssignment: searchServiceProblem

// TODO: ObjectAssignment: serviceType

// TODO: ObjectAssignment: attributeTypeList

// TODO: ObjectAssignment: matchingRuleList

// TODO: ObjectAssignment: filterItem

// TODO: ObjectAssignment: attributeCombinations

// TODO: ObjectAssignment: contextTypeList

// TODO: ObjectAssignment: contextList

// TODO: ObjectAssignment: contextCombinations

// TODO: ObjectAssignment: hierarchySelectList

// TODO: ObjectAssignment: searchControlOptionsList

// TODO: ObjectAssignment: serviceControlOptionsList

// TODO: ObjectAssignment: multipleMatchingLocalities

export class MultipleMatchingLocalities {
    constructor(
        readonly matchingRuleUsed: asn1.OBJECT_IDENTIFIER | undefined,
        readonly attributeList: AttributeValueAssertion[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_MultipleMatchingLocalities: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "matchingRuleUsed",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributeList",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_MultipleMatchingLocalities: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_MultipleMatchingLocalities: __utils.ComponentSpec[] = [];

export const _decode_MultipleMatchingLocalities = function (
    el: asn1.ASN1Element
): MultipleMatchingLocalities {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let matchingRuleUsed: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let attributeList!: AttributeValueAssertion[];
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        matchingRuleUsed: (_el: asn1.ASN1Element): void => {
            matchingRuleUsed = __utils._decodeObjectIdentifier(_el);
        },
        attributeList: (_el: asn1.ASN1Element): void => {
            attributeList = __utils._decodeSequenceOf<AttributeValueAssertion>(
                () => _decode_AttributeValueAssertion
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_MultipleMatchingLocalities,
        _extension_additions_list_spec_for_MultipleMatchingLocalities,
        _root_component_type_list_2_spec_for_MultipleMatchingLocalities,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new MultipleMatchingLocalities /* SEQUENCE_CONSTRUCTOR_CALL */(
        matchingRuleUsed,
        attributeList,
        _unrecognizedExtensionsList
    );
};
export const _encode_MultipleMatchingLocalities = function (
    value: MultipleMatchingLocalities,
    elGetter: __utils.ASN1Encoder<MultipleMatchingLocalities>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* IF_ABSENT  */ value.matchingRuleUsed === undefined
                        ? undefined
                        : __utils._encodeObjectIdentifier(
                              value.matchingRuleUsed,
                              __utils.BER
                          ),
                    /* REQUIRED   */ __utils._encodeSequenceOf<
                        AttributeValueAssertion
                    >(() => _encode_AttributeValueAssertion, __utils.BER)(
                        value.attributeList,
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

// TODO: ObjectAssignment: proposedRelaxation

export type MRMappings = MRMapping[]; // SequenceOfType
export const _decode_MRMappings = __utils._decodeSequenceOf<MRMapping>(
    () => _decode_MRMapping
);
export const _encode_MRMappings = __utils._encodeSequenceOf<MRMapping>(
    () => _encode_MRMapping,
    __utils.BER
);

// TODO: ObjectAssignment: appliedRelaxation

// TODO: ObjectAssignment: pwdResponseValue

export type PwdResponse_warning =
    | { timeleft: asn1.INTEGER }
    | { graceRemaining: asn1.INTEGER }
    | asn1.ASN1Element;
export const _decode_PwdResponse_warning = __utils._decode_extensible_choice<
    PwdResponse_warning
>({
    "CONTEXT 0": [
        "timeleft",
        __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger),
    ],
    "CONTEXT 1": [
        "graceRemaining",
        __utils._decode_explicit<asn1.INTEGER>(() => __utils._decodeInteger),
    ],
});
export const _encode_PwdResponse_warning = __utils._encode_choice<
    PwdResponse_warning
>(
    {
        timeleft: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            0,
            () => __utils._encodeInteger,
            __utils.BER
        ),
        graceRemaining: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            1,
            () => __utils._encodeInteger,
            __utils.BER
        ),
    },
    __utils.BER
);

export type PwdResponse_error = asn1.ENUMERATED;
export const PwdResponse_error_passwordExpired: PwdResponse_error = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const passwordExpired: PwdResponse_error = PwdResponse_error_passwordExpired; /* SHORT_NAMED_ENUMERATED_VALUE */
export const PwdResponse_error_changeAfterReset: PwdResponse_error = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const changeAfterReset: PwdResponse_error = PwdResponse_error_changeAfterReset; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PwdResponse_error = __utils._decodeEnumerated;
export const _encode_PwdResponse_error = __utils._encodeEnumerated;

export class PwdResponse {
    constructor(
        readonly warning: PwdResponse_warning | undefined,
        readonly error: PwdResponse_error | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_PwdResponse: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "warning",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "error",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PwdResponse: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PwdResponse: __utils.ComponentSpec[] = [];

export const _decode_PwdResponse = function (
    el: asn1.ASN1Element
): PwdResponse {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let warning: asn1.OPTIONAL<PwdResponse_warning>;
    let error: asn1.OPTIONAL<PwdResponse_error>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        warning: (_el: asn1.ASN1Element): void => {
            warning = _decode_PwdResponse_warning(_el);
        },
        error: (_el: asn1.ASN1Element): void => {
            error = _decode_PwdResponse_error(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_PwdResponse,
        _extension_additions_list_spec_for_PwdResponse,
        _root_component_type_list_2_spec_for_PwdResponse,
        undefined
    );
    return new PwdResponse /* SEQUENCE_CONSTRUCTOR_CALL */(warning, error);
};
export const _encode_PwdResponse = function (
    value: PwdResponse,
    elGetter: __utils.ASN1Encoder<PwdResponse>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                /* IF_ABSENT  */ value.warning === undefined
                    ? undefined
                    : _encode_PwdResponse_warning(value.warning, __utils.BER),
                /* IF_ABSENT  */ value.error === undefined
                    ? undefined
                    : _encode_PwdResponse_error(value.error, __utils.BER),
            ])
            .filter(
                (c: asn1.ASN1Element | undefined): boolean => !!c
            ) as asn1.ASN1Element[],
        __utils.BER
    );
};

// TODO: ObjectAssignment: ldapDiagnosticMsg

// TODO: ObjectAssignment: uid

// TODO: ObjectAssignment: dc

// TODO: ObjectAssignment: caseExactMatch

// TODO: ObjectAssignment: caseIgnoreMatch

// TODO: ObjectAssignment: caseExactOrderingMatch

// TODO: ObjectAssignment: caseIgnoreOrderingMatch

// TODO: ObjectAssignment: caseExactSubstringsMatch

// TODO: ObjectAssignment: caseIgnoreSubstringsMatch

export type SubstringAssertion_Item =
    | { initial: UnboundedDirectoryString }
    | { any_: UnboundedDirectoryString }
    | { final: UnboundedDirectoryString }
    | { control: Attribute }
    | asn1.ASN1Element;
export const _decode_SubstringAssertion_Item = __utils._decode_extensible_choice<
    SubstringAssertion_Item
>({
    "CONTEXT 0": [
        "initial",
        __utils._decode_explicit<UnboundedDirectoryString>(
            () => _decode_UnboundedDirectoryString
        ),
    ],
    "CONTEXT 1": [
        "any_",
        __utils._decode_explicit<UnboundedDirectoryString>(
            () => _decode_UnboundedDirectoryString
        ),
    ],
    "CONTEXT 2": [
        "final",
        __utils._decode_explicit<UnboundedDirectoryString>(
            () => _decode_UnboundedDirectoryString
        ),
    ],
    "UNIVERSAL 16": ["control", _decode_Attribute],
});
export const _encode_SubstringAssertion_Item = __utils._encode_choice<
    SubstringAssertion_Item
>(
    {
        initial: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            0,
            () => _encode_UnboundedDirectoryString,
            __utils.BER
        ),
        any_: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            1,
            () => _encode_UnboundedDirectoryString,
            __utils.BER
        ),
        final: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            2,
            () => _encode_UnboundedDirectoryString,
            __utils.BER
        ),
        control: _encode_Attribute,
    },
    __utils.BER
);

export type SubstringAssertion = SubstringAssertion_Item[]; // SequenceOfType
export const _decode_SubstringAssertion = __utils._decodeSequenceOf<
    SubstringAssertion_Item
>(() => _decode_SubstringAssertion_Item);
export const _encode_SubstringAssertion = __utils._encodeSequenceOf<
    SubstringAssertion_Item
>(() => _encode_SubstringAssertion_Item, __utils.BER);

// TODO: ObjectAssignment: numericStringMatch

// TODO: ObjectAssignment: numericStringOrderingMatch

// TODO: ObjectAssignment: numericStringSubstringsMatch

// TODO: ObjectAssignment: caseIgnoreListMatch

export type CaseIgnoreList = UnboundedDirectoryString[]; // SequenceOfType
export const _decode_CaseIgnoreList = __utils._decodeSequenceOf<
    UnboundedDirectoryString
>(() => _decode_UnboundedDirectoryString);
export const _encode_CaseIgnoreList = __utils._encodeSequenceOf<
    UnboundedDirectoryString
>(() => _encode_UnboundedDirectoryString, __utils.BER);

// TODO: ObjectAssignment: caseIgnoreListSubstringsMatch

// TODO: ObjectAssignment: storedPrefixMatch

// TODO: ObjectAssignment: booleanMatch

// TODO: ObjectAssignment: integerMatch

// TODO: ObjectAssignment: integerOrderingMatch

// TODO: ObjectAssignment: bitStringMatch

// TODO: ObjectAssignment: octetStringMatch

// TODO: ObjectAssignment: octetStringOrderingMatch

// TODO: ObjectAssignment: octetStringSubstringsMatch

export type OctetSubstringAssertion_Item =
    | { initial: asn1.OCTET_STRING }
    | { any_: asn1.OCTET_STRING }
    | { final: asn1.OCTET_STRING }
    | asn1.ASN1Element;
export const _decode_OctetSubstringAssertion_Item = __utils._decode_extensible_choice<
    OctetSubstringAssertion_Item
>({
    "CONTEXT 0": [
        "initial",
        __utils._decode_explicit<asn1.OCTET_STRING>(
            () => __utils._decodeOctetString
        ),
    ],
    "CONTEXT 1": [
        "any_",
        __utils._decode_explicit<asn1.OCTET_STRING>(
            () => __utils._decodeOctetString
        ),
    ],
    "CONTEXT 2": [
        "final",
        __utils._decode_explicit<asn1.OCTET_STRING>(
            () => __utils._decodeOctetString
        ),
    ],
});
export const _encode_OctetSubstringAssertion_Item = __utils._encode_choice<
    OctetSubstringAssertion_Item
>(
    {
        initial: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            0,
            () => __utils._encodeOctetString,
            __utils.BER
        ),
        any_: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            1,
            () => __utils._encodeOctetString,
            __utils.BER
        ),
        final: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            2,
            () => __utils._encodeOctetString,
            __utils.BER
        ),
    },
    __utils.BER
);

export type OctetSubstringAssertion = OctetSubstringAssertion_Item[]; // SequenceOfType
export const _decode_OctetSubstringAssertion = __utils._decodeSequenceOf<
    OctetSubstringAssertion_Item
>(() => _decode_OctetSubstringAssertion_Item);
export const _encode_OctetSubstringAssertion = __utils._encodeSequenceOf<
    OctetSubstringAssertion_Item
>(() => _encode_OctetSubstringAssertion_Item, __utils.BER);

// TODO: ObjectAssignment: telephoneNumberMatch

// TODO: ObjectAssignment: telephoneNumberSubstringsMatch

// TODO: ObjectAssignment: presentationAddressMatch

// TODO: ObjectAssignment: uniqueMemberMatch

// TODO: ObjectAssignment: protocolInformationMatch

// TODO: ObjectAssignment: facsimileNumberMatch

// TODO: ObjectAssignment: facsimileNumberSubstringsMatch

// TODO: ObjectAssignment: uUIDPairMatch

// TODO: ObjectAssignment: uTCTimeMatch

// TODO: ObjectAssignment: uTCTimeOrderingMatch

// TODO: ObjectAssignment: generalizedTimeMatch

// TODO: ObjectAssignment: generalizedTimeOrderingMatch

// TODO: ObjectAssignment: systemProposedMatch

// TODO: ObjectAssignment: integerFirstComponentMatch

// TODO: ObjectAssignment: objectIdentifierFirstComponentMatch

// TODO: ObjectAssignment: directoryStringFirstComponentMatch

// TODO: ObjectAssignment: wordMatch

// TODO: ObjectAssignment: keywordMatch

// TODO: ObjectAssignment: generalWordMatch

// TODO: ObjectAssignment: sequenceMatchType

export type SequenceMatchType = asn1.ENUMERATED;
export const SequenceMatchType_sequenceExact: SequenceMatchType = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const sequenceExact: SequenceMatchType = SequenceMatchType_sequenceExact; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SequenceMatchType_sequenceDeletion: SequenceMatchType = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const sequenceDeletion: SequenceMatchType = SequenceMatchType_sequenceDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SequenceMatchType_sequenceRestrictedDeletion: SequenceMatchType = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const sequenceRestrictedDeletion: SequenceMatchType = SequenceMatchType_sequenceRestrictedDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SequenceMatchType_sequencePermutation: SequenceMatchType = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const sequencePermutation: SequenceMatchType = SequenceMatchType_sequencePermutation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SequenceMatchType_sequencePermutationAndDeletion: SequenceMatchType = 4; /* LONG_NAMED_ENUMERATED_VALUE */
export const sequencePermutationAndDeletion: SequenceMatchType = SequenceMatchType_sequencePermutationAndDeletion; /* SHORT_NAMED_ENUMERATED_VALUE */
export const SequenceMatchType_sequenceProviderDefined: SequenceMatchType = 5; /* LONG_NAMED_ENUMERATED_VALUE */
export const sequenceProviderDefined: SequenceMatchType = SequenceMatchType_sequenceProviderDefined; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_SequenceMatchType = __utils._decodeEnumerated;
export const _encode_SequenceMatchType = __utils._encodeEnumerated;

// TODO: ObjectAssignment: wordMatchTypes

export type WordMatchTypes = asn1.ENUMERATED;
export const WordMatchTypes_wordExact: WordMatchTypes = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const wordExact: WordMatchTypes = WordMatchTypes_wordExact; /* SHORT_NAMED_ENUMERATED_VALUE */
export const WordMatchTypes_wordTruncated: WordMatchTypes = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const wordTruncated: WordMatchTypes = WordMatchTypes_wordTruncated; /* SHORT_NAMED_ENUMERATED_VALUE */
export const WordMatchTypes_wordPhonetic: WordMatchTypes = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const wordPhonetic: WordMatchTypes = WordMatchTypes_wordPhonetic; /* SHORT_NAMED_ENUMERATED_VALUE */
export const WordMatchTypes_wordProviderDefined: WordMatchTypes = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const wordProviderDefined: WordMatchTypes = WordMatchTypes_wordProviderDefined; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_WordMatchTypes = __utils._decodeEnumerated;
export const _encode_WordMatchTypes = __utils._encodeEnumerated;

// TODO: ObjectAssignment: characterMatchTypes

export type CharacterMatchTypes = asn1.ENUMERATED;
export const CharacterMatchTypes_characterExact: CharacterMatchTypes = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const characterExact: CharacterMatchTypes = CharacterMatchTypes_characterExact; /* SHORT_NAMED_ENUMERATED_VALUE */
export const CharacterMatchTypes_characterCaseIgnore: CharacterMatchTypes = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const characterCaseIgnore: CharacterMatchTypes = CharacterMatchTypes_characterCaseIgnore; /* SHORT_NAMED_ENUMERATED_VALUE */
export const CharacterMatchTypes_characterMapped: CharacterMatchTypes = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const characterMapped: CharacterMatchTypes = CharacterMatchTypes_characterMapped; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CharacterMatchTypes = __utils._decodeEnumerated;
export const _encode_CharacterMatchTypes = __utils._encodeEnumerated;

// TODO: ObjectAssignment: selectedContexts

// TODO: ObjectAssignment: approximateStringMatch

// TODO: ObjectAssignment: ignoreIfAbsentMatch

// TODO: ObjectAssignment: nullMatch

export type ZonalSelect = AttributeType[]; // SequenceOfType
export const _decode_ZonalSelect = __utils._decodeSequenceOf<AttributeType>(
    () => _decode_AttributeType
);
export const _encode_ZonalSelect = __utils._encodeSequenceOf<AttributeType>(
    () => _encode_AttributeType,
    __utils.BER
);

export type ZonalResult = asn1.ENUMERATED;
export const ZonalResult_cannot_select_mapping: ZonalResult = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const cannot_select_mapping: ZonalResult = ZonalResult_cannot_select_mapping; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ZonalResult_zero_mappings: ZonalResult = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const zero_mappings: ZonalResult = ZonalResult_zero_mappings; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ZonalResult_multiple_mappings: ZonalResult = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const multiple_mappings: ZonalResult = ZonalResult_multiple_mappings; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ZonalResult = __utils._decodeEnumerated;
export const _encode_ZonalResult = __utils._encodeEnumerated;

// TODO: ObjectClassAssignment: ZONAL-MATCHING

// TODO: ObjectAssignment: zonalMatch

// TODO: ObjectAssignment: uriMatch

// TODO: ObjectAssignment: dnsNameMatch

// TODO: ObjectAssignment: caseExactIA5Match

// TODO: ObjectAssignment: caseIgnoreIA5Match

// TODO: ObjectAssignment: caseIgnoreIA5SubstringsMatch

// TODO: ObjectAssignment: utmCoords

// TODO: ObjectAssignment: uiiForm

// TODO: ObjectAssignment: epcForm

// TODO: ObjectAssignment: countryString3c

// TODO: ObjectAssignment: countryString3n

// TODO: ObjectAssignment: dnsString

// TODO: ObjectAssignment: attributeTypeDescription

// TODO: ObjectAssignment: bitString

// TODO: ObjectAssignment: boolean

// TODO: ObjectAssignment: countryString

// TODO: ObjectAssignment: dn

// TODO: ObjectAssignment: deliveryMethod

// TODO: ObjectAssignment: directoryString

// TODO: ObjectAssignment: dITContentRuleDescription

// TODO: ObjectAssignment: dITStructureRuleDescription

// TODO: ObjectAssignment: enhancedGuide

// TODO: ObjectAssignment: facsimileTelephoneNr

// TODO: ObjectAssignment: fax

// TODO: ObjectAssignment: generalizedTime

// TODO: ObjectAssignment: guide

// TODO: ObjectAssignment: ia5String

// TODO: ObjectAssignment: integer

// TODO: ObjectAssignment: jpeg

// TODO: ObjectAssignment: matchingRuleDescription

// TODO: ObjectAssignment: matchingRuleUseDescription

// TODO: ObjectAssignment: nameAndOptionalUID

// TODO: ObjectAssignment: nameFormDescription

// TODO: ObjectAssignment: numericString

// TODO: ObjectAssignment: objectClassDescription

// TODO: ObjectAssignment: oid

// TODO: ObjectAssignment: otherMailbox

// TODO: ObjectAssignment: octetString

// TODO: ObjectAssignment: postalAddr

// TODO: ObjectAssignment: presentationAddr

// TODO: ObjectAssignment: printableString

// TODO: ObjectAssignment: subtreeSpec

// TODO: ObjectAssignment: telephoneNr

// TODO: ObjectAssignment: telexNr

// TODO: ObjectAssignment: utcTime

// TODO: ObjectAssignment: ldapSyntaxDescription

// TODO: ObjectAssignment: substringAssertion

// TODO: ObjectAssignment: languageContext

export type LanguageContextSyntax = asn1.PrintableString; // PrintableString
export const _decode_LanguageContextSyntax = __utils._decodePrintableString;
export const _encode_LanguageContextSyntax = __utils._encodePrintableString;

// TODO: ObjectAssignment: temporalContext

export class TimeSpecification_time_absolute {
    constructor(
        readonly startTime: asn1.GeneralizedTime | undefined,
        readonly endTime: asn1.GeneralizedTime | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_TimeSpecification_time_absolute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "startTime",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "endTime",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TimeSpecification_time_absolute: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TimeSpecification_time_absolute: __utils.ComponentSpec[] = [];

export const _decode_TimeSpecification_time_absolute = function (
    el: asn1.ASN1Element
): TimeSpecification_time_absolute {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let startTime: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let endTime: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        startTime: (_el: asn1.ASN1Element): void => {
            startTime = __utils._decode_explicit<asn1.GeneralizedTime>(
                () => __utils._decodeGeneralizedTime
            )(_el);
        },
        endTime: (_el: asn1.ASN1Element): void => {
            endTime = __utils._decode_explicit<asn1.GeneralizedTime>(
                () => __utils._decodeGeneralizedTime
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_TimeSpecification_time_absolute,
        _extension_additions_list_spec_for_TimeSpecification_time_absolute,
        _root_component_type_list_2_spec_for_TimeSpecification_time_absolute,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new TimeSpecification_time_absolute /* SEQUENCE_CONSTRUCTOR_CALL */(
        startTime,
        endTime,
        _unrecognizedExtensionsList
    );
};
export const _encode_TimeSpecification_time_absolute = function (
    value: TimeSpecification_time_absolute,
    elGetter: __utils.ASN1Encoder<TimeSpecification_time_absolute>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* IF_ABSENT  */ value.startTime === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              0,
                              () => __utils._encodeGeneralizedTime,
                              __utils.BER
                          )(value.startTime, __utils.BER),
                    /* IF_ABSENT  */ value.endTime === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () => __utils._encodeGeneralizedTime,
                              __utils.BER
                          )(value.endTime, __utils.BER),
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

export class DayTime {
    constructor(
        readonly hour: asn1.INTEGER,
        readonly minute: asn1.INTEGER | undefined,
        readonly second: asn1.INTEGER | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DayTime: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "hour",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "minute",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "second",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DayTime: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DayTime: __utils.ComponentSpec[] = [];
export const _default_value_for_DayTime__minute = 0;
export const _default_value_for_DayTime__second = 0;
export const _decode_DayTime = function (el: asn1.ASN1Element): DayTime {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let hour!: asn1.INTEGER;
    let minute: asn1.OPTIONAL<asn1.INTEGER> = _default_value_for_DayTime__minute;
    let second: asn1.OPTIONAL<asn1.INTEGER> = _default_value_for_DayTime__second;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        hour: (_el: asn1.ASN1Element): void => {
            hour = __utils._decode_explicit<asn1.INTEGER>(
                () => __utils._decodeInteger
            )(_el);
        },
        minute: (_el: asn1.ASN1Element): void => {
            minute = __utils._decode_explicit<asn1.INTEGER>(
                () => __utils._decodeInteger
            )(_el);
        },
        second: (_el: asn1.ASN1Element): void => {
            second = __utils._decode_explicit<asn1.INTEGER>(
                () => __utils._decodeInteger
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_DayTime,
        _extension_additions_list_spec_for_DayTime,
        _root_component_type_list_2_spec_for_DayTime,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new DayTime /* SEQUENCE_CONSTRUCTOR_CALL */(
        hour,
        minute,
        second,
        _unrecognizedExtensionsList
    );
};
export const _encode_DayTime = function (
    value: DayTime,
    elGetter: __utils.ASN1Encoder<DayTime>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        0,
                        () => __utils._encodeInteger,
                        __utils.BER
                    )(value.hour, __utils.BER),
                    /* IF_DEFAULT */ value.minute === undefined ||
                    __utils.deepEq(
                        value.minute,
                        _default_value_for_DayTime__minute
                    )
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () => __utils._encodeInteger,
                              __utils.BER
                          )(value.minute, __utils.BER),
                    /* IF_DEFAULT */ value.second === undefined ||
                    __utils.deepEq(
                        value.second,
                        _default_value_for_DayTime__second
                    )
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              2,
                              () => __utils._encodeInteger,
                              __utils.BER
                          )(value.second, __utils.BER),
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

export class DayTimeBand {
    constructor(
        readonly startDayTime: DayTime | undefined,
        readonly endDayTime: DayTime | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DayTimeBand: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "startDayTime",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "endDayTime",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DayTimeBand: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DayTimeBand: __utils.ComponentSpec[] = [];
export const _default_value_for_DayTimeBand__startDayTime = new DayTime(
    0,
    undefined,
    undefined
);
export const _default_value_for_DayTimeBand__endDayTime = new DayTime(
    23,
    59,
    59
);
export const _decode_DayTimeBand = function (
    el: asn1.ASN1Element
): DayTimeBand {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let startDayTime: asn1.OPTIONAL<DayTime> = _default_value_for_DayTimeBand__startDayTime;
    let endDayTime: asn1.OPTIONAL<DayTime> = _default_value_for_DayTimeBand__endDayTime;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        startDayTime: (_el: asn1.ASN1Element): void => {
            startDayTime = __utils._decode_explicit<DayTime>(
                () => _decode_DayTime
            )(_el);
        },
        endDayTime: (_el: asn1.ASN1Element): void => {
            endDayTime = __utils._decode_explicit<DayTime>(
                () => _decode_DayTime
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_DayTimeBand,
        _extension_additions_list_spec_for_DayTimeBand,
        _root_component_type_list_2_spec_for_DayTimeBand,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new DayTimeBand /* SEQUENCE_CONSTRUCTOR_CALL */(
        startDayTime,
        endDayTime,
        _unrecognizedExtensionsList
    );
};
export const _encode_DayTimeBand = function (
    value: DayTimeBand,
    elGetter: __utils.ASN1Encoder<DayTimeBand>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* IF_DEFAULT */ value.startDayTime === undefined ||
                    __utils.deepEq(
                        value.startDayTime,
                        _default_value_for_DayTimeBand__startDayTime
                    )
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              0,
                              () => _encode_DayTime,
                              __utils.BER
                          )(value.startDayTime, __utils.BER),
                    /* IF_DEFAULT */ value.endDayTime === undefined ||
                    __utils.deepEq(
                        value.endDayTime,
                        _default_value_for_DayTimeBand__endDayTime
                    )
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () => _encode_DayTime,
                              __utils.BER
                          )(value.endDayTime, __utils.BER),
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

export type Period_days_bitDay = asn1.BIT_STRING;
export const Period_days_bitDay_sunday: number = 0; /* LONG_NAMED_BIT */
export const Period_days_bitDay_monday: number = 1; /* LONG_NAMED_BIT */
export const Period_days_bitDay_tuesday: number = 2; /* LONG_NAMED_BIT */
export const Period_days_bitDay_wednesday: number = 3; /* LONG_NAMED_BIT */
export const Period_days_bitDay_thursday: number = 4; /* LONG_NAMED_BIT */
export const Period_days_bitDay_friday: number = 5; /* LONG_NAMED_BIT */
export const Period_days_bitDay_saturday: number = 6; /* LONG_NAMED_BIT */
export const _decode_Period_days_bitDay = __utils._decodeBitString;
export const _encode_Period_days_bitDay = __utils._encodeBitString;

export enum NamedDay_intNamedDays {
    sunday = 1,
    monday = 2,
    tuesday = 3,
    wednesday = 4,
    thursday = 5,
    friday = 6,
    saturday = 7,
}
export const NamedDay_intNamedDays_sunday: NamedDay_intNamedDays =
    NamedDay_intNamedDays.sunday; /* LONG_NAMED_ENUMERATED_VALUE */
export const NamedDay_intNamedDays_monday: NamedDay_intNamedDays =
    NamedDay_intNamedDays.monday; /* LONG_NAMED_ENUMERATED_VALUE */
export const NamedDay_intNamedDays_tuesday: NamedDay_intNamedDays =
    NamedDay_intNamedDays.tuesday; /* LONG_NAMED_ENUMERATED_VALUE */
export const NamedDay_intNamedDays_wednesday: NamedDay_intNamedDays =
    NamedDay_intNamedDays.wednesday; /* LONG_NAMED_ENUMERATED_VALUE */
export const NamedDay_intNamedDays_thursday: NamedDay_intNamedDays =
    NamedDay_intNamedDays.thursday; /* LONG_NAMED_ENUMERATED_VALUE */
export const NamedDay_intNamedDays_friday: NamedDay_intNamedDays =
    NamedDay_intNamedDays.friday; /* LONG_NAMED_ENUMERATED_VALUE */
export const NamedDay_intNamedDays_saturday: NamedDay_intNamedDays =
    NamedDay_intNamedDays.saturday; /* LONG_NAMED_ENUMERATED_VALUE */
export const _decode_NamedDay_intNamedDays = __utils._decodeEnumerated;
export const _encode_NamedDay_intNamedDays = __utils._encodeEnumerated;

export type NamedDay_bitNamedDays = asn1.BIT_STRING;
export const NamedDay_bitNamedDays_sunday: number = 0; /* LONG_NAMED_BIT */
export const NamedDay_bitNamedDays_monday: number = 1; /* LONG_NAMED_BIT */
export const NamedDay_bitNamedDays_tuesday: number = 2; /* LONG_NAMED_BIT */
export const NamedDay_bitNamedDays_wednesday: number = 3; /* LONG_NAMED_BIT */
export const NamedDay_bitNamedDays_thursday: number = 4; /* LONG_NAMED_BIT */
export const NamedDay_bitNamedDays_friday: number = 5; /* LONG_NAMED_BIT */
export const NamedDay_bitNamedDays_saturday: number = 6; /* LONG_NAMED_BIT */
export const _decode_NamedDay_bitNamedDays = __utils._decodeBitString;
export const _encode_NamedDay_bitNamedDays = __utils._encodeBitString;

export type NamedDay =
    | { intNamedDays: NamedDay_intNamedDays }
    | { bitNamedDays: NamedDay_bitNamedDays };
export const _decode_NamedDay = __utils._decode_inextensible_choice<NamedDay>({
    "UNIVERSAL 10": ["intNamedDays", _decode_NamedDay_intNamedDays],
    "UNIVERSAL 3": ["bitNamedDays", _decode_NamedDay_bitNamedDays],
});
export const _encode_NamedDay = __utils._encode_choice<NamedDay>(
    {
        intNamedDays: _encode_NamedDay_intNamedDays,
        bitNamedDays: _encode_NamedDay_bitNamedDays,
    },
    __utils.BER
);

export type XDayOf =
    | { first: NamedDay }
    | { second: NamedDay }
    | { third: NamedDay }
    | { fourth: NamedDay }
    | { fifth: NamedDay };
export const _decode_XDayOf = __utils._decode_inextensible_choice<XDayOf>({
    "CONTEXT 1": [
        "first",
        __utils._decode_explicit<NamedDay>(() => _decode_NamedDay),
    ],
    "CONTEXT 2": [
        "second",
        __utils._decode_explicit<NamedDay>(() => _decode_NamedDay),
    ],
    "CONTEXT 3": [
        "third",
        __utils._decode_explicit<NamedDay>(() => _decode_NamedDay),
    ],
    "CONTEXT 4": [
        "fourth",
        __utils._decode_explicit<NamedDay>(() => _decode_NamedDay),
    ],
    "CONTEXT 5": [
        "fifth",
        __utils._decode_explicit<NamedDay>(() => _decode_NamedDay),
    ],
});
export const _encode_XDayOf = __utils._encode_choice<XDayOf>(
    {
        first: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            1,
            () => _encode_NamedDay,
            __utils.BER
        ),
        second: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            2,
            () => _encode_NamedDay,
            __utils.BER
        ),
        third: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            3,
            () => _encode_NamedDay,
            __utils.BER
        ),
        fourth: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            4,
            () => _encode_NamedDay,
            __utils.BER
        ),
        fifth: __utils._encode_explicit(
            asn1.ASN1TagClass.context,
            5,
            () => _encode_NamedDay,
            __utils.BER
        ),
    },
    __utils.BER
);

export type Period_days =
    | { intDay: asn1.INTEGER[] }
    | { bitDay: Period_days_bitDay }
    | { dayOf: XDayOf }
    | asn1.ASN1Element;
export const _decode_Period_days = __utils._decode_extensible_choice<
    Period_days
>({
    "UNIVERSAL 17": [
        "intDay",
        __utils._decodeSetOf<asn1.INTEGER>(() => __utils._decodeInteger),
    ],
    "UNIVERSAL 3": ["bitDay", _decode_Period_days_bitDay],
    "CONTEXT 1": ["dayOf", _decode_XDayOf],
    "CONTEXT 2": ["dayOf", _decode_XDayOf],
    "CONTEXT 3": ["dayOf", _decode_XDayOf],
    "CONTEXT 4": ["dayOf", _decode_XDayOf],
    "CONTEXT 5": ["dayOf", _decode_XDayOf],
});
export const _encode_Period_days = __utils._encode_choice<Period_days>(
    {
        intDay: __utils._encodeSetOf<asn1.INTEGER>(
            () => __utils._encodeInteger,
            __utils.BER
        ),
        bitDay: _encode_Period_days_bitDay,
        dayOf: _encode_XDayOf,
    },
    __utils.BER
);

export type Period_weeks_bitWeek = asn1.BIT_STRING;
export const Period_weeks_bitWeek_week1: number = 0; /* LONG_NAMED_BIT */
export const week1: number = Period_weeks_bitWeek_week1; /* SHORT_NAMED_BIT */
export const Period_weeks_bitWeek_week2: number = 1; /* LONG_NAMED_BIT */
export const week2: number = Period_weeks_bitWeek_week2; /* SHORT_NAMED_BIT */
export const Period_weeks_bitWeek_week3: number = 2; /* LONG_NAMED_BIT */
export const week3: number = Period_weeks_bitWeek_week3; /* SHORT_NAMED_BIT */
export const Period_weeks_bitWeek_week4: number = 3; /* LONG_NAMED_BIT */
export const week4: number = Period_weeks_bitWeek_week4; /* SHORT_NAMED_BIT */
export const Period_weeks_bitWeek_week5: number = 4; /* LONG_NAMED_BIT */
export const week5: number = Period_weeks_bitWeek_week5; /* SHORT_NAMED_BIT */
export const _decode_Period_weeks_bitWeek = __utils._decodeBitString;
export const _encode_Period_weeks_bitWeek = __utils._encodeBitString;

export type Period_weeks =
    | { allWeeks: asn1.NULL }
    | { intWeek: asn1.INTEGER[] }
    | { bitWeek: Period_weeks_bitWeek }
    | asn1.ASN1Element;
export const _decode_Period_weeks = __utils._decode_extensible_choice<
    Period_weeks
>({
    "UNIVERSAL 5": ["allWeeks", __utils._decodeNull],
    "UNIVERSAL 17": [
        "intWeek",
        __utils._decodeSetOf<asn1.INTEGER>(() => __utils._decodeInteger),
    ],
    "UNIVERSAL 3": ["bitWeek", _decode_Period_weeks_bitWeek],
});
export const _encode_Period_weeks = __utils._encode_choice<Period_weeks>(
    {
        allWeeks: __utils._encodeNull,
        intWeek: __utils._encodeSetOf<asn1.INTEGER>(
            () => __utils._encodeInteger,
            __utils.BER
        ),
        bitWeek: _encode_Period_weeks_bitWeek,
    },
    __utils.BER
);

export type Period_months_bitMonth = asn1.BIT_STRING;
export const Period_months_bitMonth_january: number = 0; /* LONG_NAMED_BIT */
export const january: number = Period_months_bitMonth_january; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_february: number = 1; /* LONG_NAMED_BIT */
export const february: number = Period_months_bitMonth_february; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_march: number = 2; /* LONG_NAMED_BIT */
export const march: number = Period_months_bitMonth_march; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_april: number = 3; /* LONG_NAMED_BIT */
export const april: number = Period_months_bitMonth_april; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_may: number = 4; /* LONG_NAMED_BIT */
export const may: number = Period_months_bitMonth_may; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_june: number = 5; /* LONG_NAMED_BIT */
export const june: number = Period_months_bitMonth_june; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_july: number = 6; /* LONG_NAMED_BIT */
export const july: number = Period_months_bitMonth_july; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_august: number = 7; /* LONG_NAMED_BIT */
export const august: number = Period_months_bitMonth_august; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_september: number = 8; /* LONG_NAMED_BIT */
export const september: number = Period_months_bitMonth_september; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_october: number = 9; /* LONG_NAMED_BIT */
export const october: number = Period_months_bitMonth_october; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_november: number = 10; /* LONG_NAMED_BIT */
export const november: number = Period_months_bitMonth_november; /* SHORT_NAMED_BIT */
export const Period_months_bitMonth_december: number = 11; /* LONG_NAMED_BIT */
export const december: number = Period_months_bitMonth_december; /* SHORT_NAMED_BIT */
export const _decode_Period_months_bitMonth = __utils._decodeBitString;
export const _encode_Period_months_bitMonth = __utils._encodeBitString;

export type Period_months =
    | { allMonths: asn1.NULL }
    | { intMonth: asn1.INTEGER[] }
    | { bitMonth: Period_months_bitMonth }
    | asn1.ASN1Element;
export const _decode_Period_months = __utils._decode_extensible_choice<
    Period_months
>({
    "UNIVERSAL 5": ["allMonths", __utils._decodeNull],
    "UNIVERSAL 17": [
        "intMonth",
        __utils._decodeSetOf<asn1.INTEGER>(() => __utils._decodeInteger),
    ],
    "UNIVERSAL 3": ["bitMonth", _decode_Period_months_bitMonth],
});
export const _encode_Period_months = __utils._encode_choice<Period_months>(
    {
        allMonths: __utils._encodeNull,
        intMonth: __utils._encodeSetOf<asn1.INTEGER>(
            () => __utils._encodeInteger,
            __utils.BER
        ),
        bitMonth: _encode_Period_months_bitMonth,
    },
    __utils.BER
);

export class Period {
    constructor(
        readonly timesOfDay: DayTimeBand[] | undefined,
        readonly days: Period_days | undefined,
        readonly weeks: Period_weeks | undefined,
        readonly months: Period_months | undefined,
        readonly years: asn1.INTEGER[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_Period: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "timesOfDay",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "days",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "weeks",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "months",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "years",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Period: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Period: __utils.ComponentSpec[] = [];

export const _decode_Period = function (el: asn1.ASN1Element): Period {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let timesOfDay: asn1.OPTIONAL<DayTimeBand[]>;
    let days: asn1.OPTIONAL<Period_days>;
    let weeks: asn1.OPTIONAL<Period_weeks>;
    let months: asn1.OPTIONAL<Period_months>;
    let years: asn1.OPTIONAL<asn1.INTEGER[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        timesOfDay: (_el: asn1.ASN1Element): void => {
            timesOfDay = __utils._decode_explicit<DayTimeBand[]>(() =>
                __utils._decodeSetOf<DayTimeBand>(() => _decode_DayTimeBand)
            )(_el);
        },
        days: (_el: asn1.ASN1Element): void => {
            days = __utils._decode_explicit<Period_days>(
                () => _decode_Period_days
            )(_el);
        },
        weeks: (_el: asn1.ASN1Element): void => {
            weeks = __utils._decode_explicit<Period_weeks>(
                () => _decode_Period_weeks
            )(_el);
        },
        months: (_el: asn1.ASN1Element): void => {
            months = __utils._decode_explicit<Period_months>(
                () => _decode_Period_months
            )(_el);
        },
        years: (_el: asn1.ASN1Element): void => {
            years = __utils._decode_explicit<asn1.INTEGER[]>(() =>
                __utils._decodeSetOf<asn1.INTEGER>(() => __utils._decodeInteger)
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Period,
        _extension_additions_list_spec_for_Period,
        _root_component_type_list_2_spec_for_Period,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new Period /* SEQUENCE_CONSTRUCTOR_CALL */(
        timesOfDay,
        days,
        weeks,
        months,
        years,
        _unrecognizedExtensionsList
    );
};
export const _encode_Period = function (
    value: Period,
    elGetter: __utils.ASN1Encoder<Period>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* IF_ABSENT  */ value.timesOfDay === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              0,
                              () =>
                                  __utils._encodeSetOf<DayTimeBand>(
                                      () => _encode_DayTimeBand,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.timesOfDay, __utils.BER),
                    /* IF_ABSENT  */ value.days === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () => _encode_Period_days,
                              __utils.BER
                          )(value.days, __utils.BER),
                    /* IF_ABSENT  */ value.weeks === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              2,
                              () => _encode_Period_weeks,
                              __utils.BER
                          )(value.weeks, __utils.BER),
                    /* IF_ABSENT  */ value.months === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              3,
                              () => _encode_Period_months,
                              __utils.BER
                          )(value.months, __utils.BER),
                    /* IF_ABSENT  */ value.years === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              4,
                              () =>
                                  __utils._encodeSetOf<asn1.INTEGER>(
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.years, __utils.BER),
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

export type TimeSpecification_time =
    | { absolute: TimeSpecification_time_absolute }
    | { periodic: Period[] };
export const _decode_TimeSpecification_time = __utils._decode_inextensible_choice<
    TimeSpecification_time
>({
    "UNIVERSAL 16": ["absolute", _decode_TimeSpecification_time_absolute],
    "UNIVERSAL 17": [
        "periodic",
        __utils._decodeSetOf<Period>(() => _decode_Period),
    ],
});
export const _encode_TimeSpecification_time = __utils._encode_choice<
    TimeSpecification_time
>(
    {
        absolute: _encode_TimeSpecification_time_absolute,
        periodic: __utils._encodeSetOf<Period>(
            () => _encode_Period,
            __utils.BER
        ),
    },
    __utils.BER
);

export type TimeZone = asn1.INTEGER;
export const _decode_TimeZone = __utils._decodeInteger;
export const _encode_TimeZone = __utils._encodeInteger;

export class TimeSpecification {
    constructor(
        readonly time: TimeSpecification_time,
        readonly notThisTime: asn1.BOOLEAN | undefined,
        readonly timeZone: TimeZone | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_TimeSpecification: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "time",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notThisTime",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timeZone",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TimeSpecification: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TimeSpecification: __utils.ComponentSpec[] = [];
export const _default_value_for_TimeSpecification__notThisTime = false;
export const _decode_TimeSpecification = function (
    el: asn1.ASN1Element
): TimeSpecification {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let time!: TimeSpecification_time;
    let notThisTime: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_TimeSpecification__notThisTime;
    let timeZone: asn1.OPTIONAL<TimeZone>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        time: (_el: asn1.ASN1Element): void => {
            time = _decode_TimeSpecification_time(_el);
        },
        notThisTime: (_el: asn1.ASN1Element): void => {
            notThisTime = __utils._decodeBoolean(_el);
        },
        timeZone: (_el: asn1.ASN1Element): void => {
            timeZone = _decode_TimeZone(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_TimeSpecification,
        _extension_additions_list_spec_for_TimeSpecification,
        _root_component_type_list_2_spec_for_TimeSpecification,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new TimeSpecification /* SEQUENCE_CONSTRUCTOR_CALL */(
        time,
        notThisTime,
        timeZone,
        _unrecognizedExtensionsList
    );
};
export const _encode_TimeSpecification = function (
    value: TimeSpecification,
    elGetter: __utils.ASN1Encoder<TimeSpecification>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ _encode_TimeSpecification_time(
                        value.time,
                        __utils.BER
                    ),
                    /* IF_DEFAULT */ value.notThisTime === undefined ||
                    __utils.deepEq(
                        value.notThisTime,
                        _default_value_for_TimeSpecification__notThisTime
                    )
                        ? undefined
                        : __utils._encodeBoolean(
                              value.notThisTime,
                              __utils.BER
                          ),
                    /* IF_ABSENT  */ value.timeZone === undefined
                        ? undefined
                        : _encode_TimeZone(value.timeZone, __utils.BER),
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

export class TimeAssertion_between {
    constructor(
        readonly startTime: asn1.GeneralizedTime,
        readonly endTime: asn1.GeneralizedTime | undefined,
        readonly entirely: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_TimeAssertion_between: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "startTime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "endTime",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entirely",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TimeAssertion_between: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TimeAssertion_between: __utils.ComponentSpec[] = [];
export const _default_value_for_TimeAssertion_between__entirely = false;
export const _decode_TimeAssertion_between = function (
    el: asn1.ASN1Element
): TimeAssertion_between {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let startTime!: asn1.GeneralizedTime;
    let endTime: asn1.OPTIONAL<asn1.GeneralizedTime>;
    let entirely: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_TimeAssertion_between__entirely;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        startTime: (_el: asn1.ASN1Element): void => {
            startTime = __utils._decode_explicit<asn1.GeneralizedTime>(
                () => __utils._decodeGeneralizedTime
            )(_el);
        },
        endTime: (_el: asn1.ASN1Element): void => {
            endTime = __utils._decode_explicit<asn1.GeneralizedTime>(
                () => __utils._decodeGeneralizedTime
            )(_el);
        },
        entirely: (_el: asn1.ASN1Element): void => {
            entirely = __utils._decodeBoolean(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_TimeAssertion_between,
        _extension_additions_list_spec_for_TimeAssertion_between,
        _root_component_type_list_2_spec_for_TimeAssertion_between,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new TimeAssertion_between /* SEQUENCE_CONSTRUCTOR_CALL */(
        startTime,
        endTime,
        entirely,
        _unrecognizedExtensionsList
    );
};
export const _encode_TimeAssertion_between = function (
    value: TimeAssertion_between,
    elGetter: __utils.ASN1Encoder<TimeAssertion_between>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        0,
                        () => __utils._encodeGeneralizedTime,
                        __utils.BER
                    )(value.startTime, __utils.BER),
                    /* IF_ABSENT  */ value.endTime === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () => __utils._encodeGeneralizedTime,
                              __utils.BER
                          )(value.endTime, __utils.BER),
                    /* IF_DEFAULT */ value.entirely === undefined ||
                    __utils.deepEq(
                        value.entirely,
                        _default_value_for_TimeAssertion_between__entirely
                    )
                        ? undefined
                        : __utils._encodeBoolean(value.entirely, __utils.BER),
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

export type TimeAssertion =
    | { now: asn1.NULL }
    | { at: asn1.GeneralizedTime }
    | { between: TimeAssertion_between }
    | asn1.ASN1Element;
export const _decode_TimeAssertion = __utils._decode_extensible_choice<
    TimeAssertion
>({
    "UNIVERSAL 5": ["now", __utils._decodeNull],
    "UNIVERSAL 24": ["at", __utils._decodeGeneralizedTime],
    "UNIVERSAL 16": ["between", _decode_TimeAssertion_between],
});
export const _encode_TimeAssertion = __utils._encode_choice<TimeAssertion>(
    {
        now: __utils._encodeNull,
        at: __utils._encodeGeneralizedTime,
        between: _encode_TimeAssertion_between,
    },
    __utils.BER
);

// TODO: ObjectAssignment: localeContext

export type LocaleContextSyntax =
    | { localeID1: asn1.OBJECT_IDENTIFIER }
    | { localeID2: UnboundedDirectoryString }
    | asn1.ASN1Element;
export const _decode_LocaleContextSyntax = __utils._decode_extensible_choice<
    LocaleContextSyntax
>({
    "UNIVERSAL 6": ["localeID1", __utils._decodeObjectIdentifier],
    "UNIVERSAL 12": ["localeID2", _decode_UnboundedDirectoryString], // utf8String
    "UNIVERSAL 19": ["localeID2", _decode_UnboundedDirectoryString], // printableString
    "UNIVERSAL 20": ["localeID2", _decode_UnboundedDirectoryString], // teletexString
    "UNIVERSAL 28": ["localeID2", _decode_UnboundedDirectoryString], // universalString
    "UNIVERSAL 30": ["localeID2", _decode_UnboundedDirectoryString], // bmpString
});
export const _encode_LocaleContextSyntax = __utils._encode_choice<
    LocaleContextSyntax
>(
    {
        localeID1: __utils._encodeObjectIdentifier,
        localeID2: _encode_UnboundedDirectoryString,
    },
    __utils.BER
);

// TODO: ObjectAssignment: ldapAttributeOptionContext

export type AttributeOptionList = asn1.UTF8String[]; // SequenceOfType
export const _decode_AttributeOptionList = __utils._decodeSequenceOf<
    asn1.UTF8String
>(() => __utils._decodeUTF8String);
export const _encode_AttributeOptionList = __utils._encodeSequenceOf<
    asn1.UTF8String
>(() => __utils._encodeUTF8String, __utils.BER);

export const id_at_knowledgeInformation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_at
);

export const id_at_commonName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_at
);

export const id_at_surname: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_at
);

export const id_at_serialNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    id_at
);

export const id_at_countryName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    id_at
);

export const id_at_localityName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    id_at
);

export const id_at_collectiveLocalityName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7, 1],
    id_at
);

export const id_at_stateOrProvinceName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    id_at
);

export const id_at_collectiveStateOrProvinceName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8, 1],
    id_at
);

export const id_at_streetAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    id_at
);

export const id_at_collectiveStreetAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9, 1],
    id_at
);

export const id_at_organizationName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10],
    id_at
);

export const id_at_collectiveOrganizationName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10, 1],
    id_at
);

export const id_at_organizationalUnitName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    id_at
);

export const id_at_collectiveOrganizationalUnitName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11, 1],
    id_at
);

export const id_at_title: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [12],
    id_at
);

export const id_at_description: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [13],
    id_at
);

export const id_at_searchGuide: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [14],
    id_at
);

export const id_at_businessCategory: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [15],
    id_at
);

export const id_at_postalAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [16],
    id_at
);

export const id_at_collectivePostalAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [16, 1],
    id_at
);

export const id_at_postalCode: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [17],
    id_at
);

export const id_at_collectivePostalCode: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [17, 1],
    id_at
);

export const id_at_postOfficeBox: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [18],
    id_at
);

export const id_at_collectivePostOfficeBox: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [18, 1],
    id_at
);

export const id_at_physicalDeliveryOfficeName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [19],
    id_at
);

export const id_at_collectivePhysicalDeliveryOfficeName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [19, 1],
    id_at
);

export const id_at_telephoneNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [20],
    id_at
);

export const id_at_collectiveTelephoneNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [20, 1],
    id_at
);

export const id_at_telexNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [21],
    id_at
);

export const id_at_collectiveTelexNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [21, 1],
    id_at
);

export const id_at_facsimileTelephoneNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [23],
    id_at
);

export const id_at_collectiveFacsimileTelephoneNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [23, 1],
    id_at
);

export const id_at_x121Address: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [24],
    id_at
);

export const id_at_internationalISDNNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [25],
    id_at
);

export const id_at_collectiveInternationalISDNNumber: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [25, 1],
    id_at
);

export const id_at_registeredAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [26],
    id_at
);

export const id_at_destinationIndicator: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [27],
    id_at
);

export const id_at_preferredDeliveryMethod: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [28],
    id_at
);

export const id_at_presentationAddress: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [29],
    id_at
);

export const id_at_supportedApplicationContext: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [30],
    id_at
);

export const id_at_member: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [31],
    id_at
);

export const id_at_owner: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [32],
    id_at
);

export const id_at_roleOccupant: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [33],
    id_at
);

export const id_at_seeAlso: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [34],
    id_at
);

export const id_at_name: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [41],
    id_at
);

export const id_at_givenName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [42],
    id_at
);

export const id_at_initials: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [43],
    id_at
);

export const id_at_generationQualifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [44],
    id_at
);

export const id_at_uniqueIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [45],
    id_at
);

export const id_at_dnQualifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [46],
    id_at
);

export const id_at_enhancedSearchGuide: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [47],
    id_at
);

export const id_at_protocolInformation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [48],
    id_at
);

export const id_at_distinguishedName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [49],
    id_at
);

export const id_at_uniqueMember: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [50],
    id_at
);

export const id_at_houseIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [51],
    id_at
);

export const id_at_dmdName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [54],
    id_at
);

export const id_at_pseudonym: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [65],
    id_at
);

export const id_at_communicationsService: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [66],
    id_at
);

export const id_at_communicationsNetwork: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [67],
    id_at
);

export const id_at_uuidpair: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [77],
    id_at
);

export const id_at_tagOid: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [78],
    id_at
);

export const id_at_uiiFormat: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [79],
    id_at
);

export const id_at_uiiInUrn: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [80],
    id_at
);

export const id_at_contentUrl: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [81],
    id_at
);

export const id_at_uri: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [83],
    id_at
);

export const id_at_urn: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [86],
    id_at
);

export const id_at_url: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [87],
    id_at
);

export const id_at_utmCoordinates: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [88],
    id_at
);

export const id_at_urnC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [89],
    id_at
);

export const id_at_uii: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [90],
    id_at
);

export const id_at_epc: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [91],
    id_at
);

export const id_at_tagAfi: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [92],
    id_at
);

export const id_at_epcFormat: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [93],
    id_at
);

export const id_at_epcInUrn: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [94],
    id_at
);

export const id_at_ldapUrl: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [95],
    id_at
);

export const id_at_tagLocation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [96],
    id_at
);

export const id_at_organizationIdentifier: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [97],
    id_at
);

export const id_at_countryCode3c: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [98],
    id_at
);

export const id_at_countryCode3n: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [99],
    id_at
);

export const id_at_dnsName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [100],
    id_at
);

export const id_asx_utmCoords: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_asx
);

export const id_asx_uiiForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    id_asx
);

export const id_asx_epcForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    id_asx
);

export const id_asx_countryString3c: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    id_asx
);

export const id_asx_countryString3n: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    id_asx
);

export const id_asx_dnsString: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    id_asx
);

export const id_lsx_attributeTypeDescription: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_lsx
);

export const id_lsx_bitString: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    id_lsx
);

export const id_lsx_boolean: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    id_lsx
);

export const id_lsx_countryString: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    id_lsx
);

export const id_lsx_dn: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [12],
    id_lsx
);

export const id_lsx_deliveryMethod: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [14],
    id_lsx
);

export const id_lsx_directoryString: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [15],
    id_lsx
);

export const id_lsx_dITContentRuleDescription: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [16],
    id_lsx
);

export const id_lsx_dITStructureRuleDescription: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [17],
    id_lsx
);

export const id_lsx_enhancedGuide: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [21],
    id_lsx
);

export const id_lsx_facsimileTelephoneNr: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [22],
    id_lsx
);

export const id_lsx_fax: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [23],
    id_lsx
);

export const id_lsx_generalizedTime: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [24],
    id_lsx
);

export const id_lsx_guide: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [25],
    id_lsx
);

export const id_lsx_ia5String: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [26],
    id_lsx
);

export const id_lsx_integer: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [27],
    id_lsx
);

export const id_lsx_jpeg: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [28],
    id_lsx
);

export const id_lsx_matchingRuleDescription: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [30],
    id_lsx
);

export const id_lsx_matchingRuleUseDescription: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [31],
    id_lsx
);

export const id_lsx_nameAndOptionalUID: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [34],
    id_lsx
);

export const id_lsx_nameFormDescription: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [35],
    id_lsx
);

export const id_lsx_numericString: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [36],
    id_lsx
);

export const id_lsx_objectClassDescription: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [37],
    id_lsx
);

export const id_lsx_oid: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [38],
    id_lsx
);

export const id_lsx_otherMailbox: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [39],
    id_lsx
);

export const id_lsx_octetString: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [40],
    id_lsx
);

export const id_lsx_postalAddr: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [41],
    id_lsx
);

export const id_lsx_presentationAddr: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [43],
    id_lsx
);

export const id_lsx_printableString: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [44],
    id_lsx
);

export const id_lsx_subtreeSpec: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [45],
    id_lsx
);

export const id_lsx_telephoneNr: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [50],
    id_lsx
);

export const id_lsx_telexNr: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [52],
    id_lsx
);

export const id_lsx_utcTime: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [53],
    id_lsx
);

export const id_lsx_ldapSyntaxDescription: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [54],
    id_lsx
);

export const id_lsx_substringAssertion: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [58],
    id_lsx
);

export const id_oidC1: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [0],
    id
);

export const id_oidC2: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id
);

export const id_oidC: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id
);

export const id_cat_sequenceMatchType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_cat
);

export const id_cat_wordMatchType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_cat
);

export const id_cat_characterMatchTypes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_cat
);

export const id_cat_selectedContexts: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_cat
);

export const id_not_dSAProblem: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [0],
    id_not
);

export const id_not_searchServiceProblem: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_not
);

export const id_not_serviceType: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_not
);

export const id_not_attributeTypeList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_not
);

export const id_not_matchingRuleList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_not
);

export const id_not_filterItem: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    id_not
);

export const id_not_attributeCombinations: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    id_not
);

export const id_not_contextTypeList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    id_not
);

export const id_not_contextList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    id_not
);

export const id_not_contextCombinations: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    id_not
);

export const id_not_hierarchySelectList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10],
    id_not
);

export const id_not_searchControlOptionsList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    id_not
);

export const id_not_serviceControlOptionsList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [12],
    id_not
);

export const id_not_multipleMatchingLocalities: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [13],
    id_not
);

export const id_not_proposedRelaxation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [14],
    id_not
);

export const id_not_appliedRelaxation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [15],
    id_not
);

export const id_not_pwdResponse: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [16],
    id_not
);

export const id_not_ldapDiagnosticMsg: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [17],
    id_not
);

export const id_pr_targetDsaUnavailable: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_pr
);

export const id_pr_dataSourceUnavailable: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_pr
);

export const id_pr_unidentifiedOperation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_pr
);

export const id_pr_unavailableOperation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_pr
);

export const id_pr_searchAttributeViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    id_pr
);

export const id_pr_searchAttributeCombinationViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    id_pr
);

export const id_pr_searchValueNotAllowed: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    id_pr
);

export const id_pr_missingSearchAttribute: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    id_pr
);

export const id_pr_searchValueViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    id_pr
);

export const id_pr_attributeNegationViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10],
    id_pr
);

export const id_pr_searchValueRequired: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    id_pr
);

export const id_pr_invalidSearchValue: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [12],
    id_pr
);

export const id_pr_searchContextViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [13],
    id_pr
);

export const id_pr_searchContextCombinationViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [14],
    id_pr
);

export const id_pr_missingSearchContext: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [15],
    id_pr
);

export const id_pr_searchContextValueViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [16],
    id_pr
);

export const id_pr_searchContextValueRequired: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [17],
    id_pr
);

export const id_pr_invalidContextSearchValue: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [18],
    id_pr
);

export const id_pr_unsupportedMatchingRule: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [19],
    id_pr
);

export const id_pr_attributeMatchingViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [20],
    id_pr
);

export const id_pr_unsupportedMatchingUse: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [21],
    id_pr
);

export const id_pr_matchingUseViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [22],
    id_pr
);

export const id_pr_hierarchySelectForbidden: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [23],
    id_pr
);

export const id_pr_invalidHierarchySelect: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [24],
    id_pr
);

export const id_pr_unavailableHierarchySelect: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [25],
    id_pr
);

export const id_pr_invalidSearchControlOptions: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [26],
    id_pr
);

export const id_pr_invalidServiceControlOptions: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [27],
    id_pr
);

export const id_pr_searchSubsetViolation: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [28],
    id_pr
);

export const id_pr_unmatchedKeyAttributes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [29],
    id_pr
);

export const id_pr_ambiguousKeyAttributes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [30],
    id_pr
);

export const id_pr_unavailableRelaxationLevel: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [31],
    id_pr
);

export const id_pr_emptyHierarchySelection: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [32],
    id_pr
);

export const id_pr_administratorImposedLimit: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [33],
    id_pr
);

export const id_pr_permanentRestriction: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [34],
    id_pr
);

export const id_pr_temporaryRestriction: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [35],
    id_pr
);

export const id_pr_relaxationNotSupported: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [36],
    id_pr
);

export const id_coat_uid: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_coat
);

export const id_coat_dc: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [25],
    id_coat
);

export const id_mr_caseIgnoreMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_mr
);

export const id_mr_caseIgnoreOrderingMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_mr
);

export const id_mr_caseIgnoreSubstringsMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_mr
);

export const id_mr_caseExactMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    id_mr
);

export const id_mr_caseExactOrderingMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    id_mr
);

export const id_mr_caseExactSubstringsMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    id_mr
);

export const id_mr_numericStringMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    id_mr
);

export const id_mr_numericStringOrderingMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    id_mr
);

export const id_mr_numericStringSubstringsMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10],
    id_mr
);

export const id_mr_caseIgnoreListMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    id_mr
);

export const id_mr_caseIgnoreListSubstringsMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [12],
    id_mr
);

export const id_mr_booleanMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [13],
    id_mr
);

export const id_mr_integerMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [14],
    id_mr
);

export const id_mr_integerOrderingMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [15],
    id_mr
);

export const id_mr_bitStringMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [16],
    id_mr
);

export const id_mr_octetStringMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [17],
    id_mr
);

export const id_mr_octetStringOrderingMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [18],
    id_mr
);

export const id_mr_octetStringSubstringsMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [19],
    id_mr
);

export const id_mr_telephoneNumberMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [20],
    id_mr
);

export const id_mr_telephoneNumberSubstringsMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [21],
    id_mr
);

export const id_mr_presentationAddressMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [22],
    id_mr
);

export const id_mr_uniqueMemberMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [23],
    id_mr
);

export const id_mr_protocolInformationMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [24],
    id_mr
);

export const id_mr_uTCTimeMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [25],
    id_mr
);

export const id_mr_uTCTimeOrderingMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [26],
    id_mr
);

export const id_mr_generalizedTimeMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [27],
    id_mr
);

export const id_mr_generalizedTimeOrderingMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [28],
    id_mr
);

export const id_mr_integerFirstComponentMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [29],
    id_mr
);

export const id_mr_objectIdentifierFirstComponentMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [30],
    id_mr
);

export const id_mr_directoryStringFirstComponentMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [31],
    id_mr
);

export const id_mr_wordMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [32],
    id_mr
);

export const id_mr_keywordMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [33],
    id_mr
);

export const id_mr_storedPrefixMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [41],
    id_mr
);

export const id_mr_systemProposedMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [47],
    id_mr
);

export const id_mr_generalWordMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [48],
    id_mr
);

export const id_mr_approximateStringMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [49],
    id_mr
);

export const id_mr_ignoreIfAbsentMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [50],
    id_mr
);

export const id_mr_nullMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [51],
    id_mr
);

export const id_mr_zonalMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [52],
    id_mr
);

export const id_mr_facsimileNumberMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [63],
    id_mr
);

export const id_mr_facsimileNumberSubstringsMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [64],
    id_mr
);

export const id_mr_uuidpairmatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [68],
    id_mr
);

export const id_mr_uriMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [70],
    id_mr
);

export const id_mr_dnsNameMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [74],
    id_mr
);

export const id_lmr_caseExactIA5Match: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_lmr
);

export const id_lmr_caseIgnoreIA5Match: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_lmr
);

export const id_lmr_caseIgnoreIA5SubstringsMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_lmr
);

export const id_avc_language: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [0],
    id_avc
);

export const id_avc_temporal: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_avc
);

export const id_avc_locale: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_avc
);

export const id_avc_ldapAttributeOption: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    id_avc
);

/* END_MODULE SelectedAttributeTypes */
