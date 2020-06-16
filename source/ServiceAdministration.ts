/*
    BEGIN_MODULE ServiceAdministration
    OID: joint-iso-itu-t.ds.module.serviceAdministration.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    FamilyGrouping,
    FamilyReturn,
    HierarchySelections,
    SearchControlOptions,
    ServiceControlOptions,
    _decode_FamilyGrouping,
    _decode_FamilyReturn,
    _decode_HierarchySelections,
    _decode_SearchControlOptions,
    _decode_ServiceControlOptions,
    _encode_FamilyGrouping,
    _encode_FamilyReturn,
    _encode_HierarchySelections,
    _encode_SearchControlOptions,
    _encode_ServiceControlOptions,
} from "./DirectoryAbstractService";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./InformationFramework";
import * as __utils from "./__utils";
export {
    FamilyGrouping,
    FamilyGrouping_compoundEntry as compoundEntry /* IMPORTED_ENUMERATION_ITEM */,
    FamilyGrouping_entryOnly as entryOnly /* IMPORTED_ENUMERATION_ITEM */,
    FamilyGrouping_multiStrand as multiStrand /* IMPORTED_ENUMERATION_ITEM */,
    FamilyGrouping_strands as strands /* IMPORTED_ENUMERATION_ITEM */,
    FamilyReturn,
    HierarchySelections,
    HierarchySelections_all as all /* IMPORTED_BIT */,
    HierarchySelections_children as children /* IMPORTED_BIT */,
    HierarchySelections_hierarchy as hierarchy /* IMPORTED_BIT */,
    HierarchySelections_parent as parent /* IMPORTED_BIT */,
    HierarchySelections_self as self /* IMPORTED_BIT */,
    HierarchySelections_siblingChildren as siblingChildren /* IMPORTED_BIT */,
    HierarchySelections_siblings as siblings /* IMPORTED_BIT */,
    HierarchySelections_siblingSubtree as siblingSubtree /* IMPORTED_BIT */,
    HierarchySelections_subtree as subtree /* IMPORTED_BIT */,
    HierarchySelections_top as top /* IMPORTED_BIT */,
    SearchControlOptions,
    SearchControlOptions_checkOverspecified as checkOverspecified /* IMPORTED_BIT */,
    SearchControlOptions_dnAttribute as dnAttribute /* IMPORTED_BIT */,
    SearchControlOptions_entryCount as entryCount /* IMPORTED_BIT */,
    SearchControlOptions_includeAllAreas as includeAllAreas /* IMPORTED_BIT */,
    SearchControlOptions_matchedValuesOnly as matchedValuesOnly /* IMPORTED_BIT */,
    SearchControlOptions_matchOnResidualName as matchOnResidualName /* IMPORTED_BIT */,
    SearchControlOptions_noSystemRelaxation as noSystemRelaxation /* IMPORTED_BIT */,
    SearchControlOptions_performExactly as performExactly /* IMPORTED_BIT */,
    SearchControlOptions_searchAliases as searchAliases /* IMPORTED_BIT */,
    SearchControlOptions_searchFamily as searchFamily /* IMPORTED_BIT */,
    SearchControlOptions_separateFamilyMembers as separateFamilyMembers /* IMPORTED_BIT */,
    SearchControlOptions_useSubset as useSubset /* IMPORTED_BIT */,
    ServiceControlOptions,
    ServiceControlOptions_allowWriteableCopy as allowWriteableCopy /* IMPORTED_BIT */,
    ServiceControlOptions_chainingProhibited as chainingProhibited /* IMPORTED_BIT */,
    ServiceControlOptions_copyShallDo as copyShallDo /* IMPORTED_BIT */,
    ServiceControlOptions_countFamily as countFamily /* IMPORTED_BIT */,
    ServiceControlOptions_dontDereferenceAliases as dontDereferenceAliases /* IMPORTED_BIT */,
    ServiceControlOptions_dontMatchFriends as dontMatchFriends /* IMPORTED_BIT */,
    ServiceControlOptions_dontSelectFriends as dontSelectFriends /* IMPORTED_BIT */,
    ServiceControlOptions_dontUseCopy as dontUseCopy /* IMPORTED_BIT */,
    ServiceControlOptions_localScope as localScope /* IMPORTED_BIT */,
    ServiceControlOptions_manageDSAIT as manageDSAIT /* IMPORTED_BIT */,
    ServiceControlOptions_noSubtypeMatch as noSubtypeMatch /* IMPORTED_BIT */,
    ServiceControlOptions_noSubtypeSelection as noSubtypeSelection /* IMPORTED_BIT */,
    ServiceControlOptions_partialNameResolution as partialNameResolution /* IMPORTED_BIT */,
    ServiceControlOptions_preferChaining as preferChaining /* IMPORTED_BIT */,
    ServiceControlOptions_subentries as subentries /* IMPORTED_BIT */,
    _decode_FamilyGrouping,
    _decode_FamilyReturn,
    _decode_HierarchySelections,
    _decode_SearchControlOptions,
    _decode_ServiceControlOptions,
    _encode_FamilyGrouping,
    _encode_FamilyReturn,
    _encode_HierarchySelections,
    _encode_SearchControlOptions,
    _encode_ServiceControlOptions,
} from "./DirectoryAbstractService";
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./InformationFramework";
export {
    directoryAbstractService,
    informationFramework,
} from "./UsefulDefinitions";

export class RequestAttribute_defaultValues_Item {
    constructor(
        readonly entryType: asn1.OBJECT_IDENTIFIER | undefined,
        readonly values: asn1.ASN1Element[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_RequestAttribute_defaultValues_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "entryType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "values",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RequestAttribute_defaultValues_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RequestAttribute_defaultValues_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RequestAttribute_defaultValues_Item: __utils.ASN1Decoder<
    RequestAttribute_defaultValues_Item
> | null = null;
let _cached_encoder_for_RequestAttribute_defaultValues_Item: __utils.ASN1Encoder<
    RequestAttribute_defaultValues_Item
> | null = null;
export function _decode_RequestAttribute_defaultValues_Item(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_RequestAttribute_defaultValues_Item) {
        _cached_decoder_for_RequestAttribute_defaultValues_Item = function (
            el: asn1.ASN1Element
        ): RequestAttribute_defaultValues_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let entryType: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
            let values!: asn1.ASN1Element[];
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                entryType: (_el: asn1.ASN1Element): void => {
                    entryType = __utils._decodeObjectIdentifier(_el);
                },
                values: (_el: asn1.ASN1Element): void => {
                    values = __utils._decodeSequenceOf<asn1.ASN1Element>(
                        () => __utils._decodeAny
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RequestAttribute_defaultValues_Item,
                _extension_additions_list_spec_for_RequestAttribute_defaultValues_Item,
                _root_component_type_list_2_spec_for_RequestAttribute_defaultValues_Item,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RequestAttribute_defaultValues_Item(
                /* SEQUENCE_CONSTRUCTOR_CALL */ entryType,
                values,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RequestAttribute_defaultValues_Item(el);
}
export function _encode_RequestAttribute_defaultValues_Item(
    value: RequestAttribute_defaultValues_Item,
    elGetter: __utils.ASN1Encoder<RequestAttribute_defaultValues_Item>
) {
    if (!_cached_encoder_for_RequestAttribute_defaultValues_Item) {
        _cached_encoder_for_RequestAttribute_defaultValues_Item = function (
            value: RequestAttribute_defaultValues_Item,
            elGetter: __utils.ASN1Encoder<RequestAttribute_defaultValues_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.entryType === undefined
                                ? undefined
                                : __utils._encodeObjectIdentifier(
                                      value.entryType,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ __utils._encodeSequenceOf<
                                asn1.ASN1Element
                            >(() => __utils._encodeAny, __utils.BER)(
                                value.values,
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
    return _cached_encoder_for_RequestAttribute_defaultValues_Item(
        value,
        elGetter
    );
}

export class ContextProfile {
    constructor(
        readonly contextType: asn1.OBJECT_IDENTIFIER,
        readonly contextValue: asn1.ASN1Element[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ContextProfile: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "contextType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contextValue",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ContextProfile: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ContextProfile: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ContextProfile: __utils.ASN1Decoder<
    ContextProfile
> | null = null;
let _cached_encoder_for_ContextProfile: __utils.ASN1Encoder<
    ContextProfile
> | null = null;
export function _decode_ContextProfile(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ContextProfile) {
        _cached_decoder_for_ContextProfile = function (
            el: asn1.ASN1Element
        ): ContextProfile {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let contextType!: asn1.OBJECT_IDENTIFIER;
            let contextValue: asn1.OPTIONAL<asn1.ASN1Element[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                contextType: (_el: asn1.ASN1Element): void => {
                    contextType = __utils._decodeObjectIdentifier(_el);
                },
                contextValue: (_el: asn1.ASN1Element): void => {
                    contextValue = __utils._decodeSequenceOf<asn1.ASN1Element>(
                        () => __utils._decodeAny
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ContextProfile,
                _extension_additions_list_spec_for_ContextProfile,
                _root_component_type_list_2_spec_for_ContextProfile,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ContextProfile(
                /* SEQUENCE_CONSTRUCTOR_CALL */ contextType,
                contextValue,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ContextProfile(el);
}
export function _encode_ContextProfile(
    value: ContextProfile,
    elGetter: __utils.ASN1Encoder<ContextProfile>
) {
    if (!_cached_encoder_for_ContextProfile) {
        _cached_encoder_for_ContextProfile = function (
            value: ContextProfile,
            elGetter: __utils.ASN1Encoder<ContextProfile>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.contextType,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.contextValue === undefined
                                ? undefined
                                : __utils._encodeSequenceOf<asn1.ASN1Element>(
                                      () => __utils._encodeAny,
                                      __utils.BER
                                  )(value.contextValue, __utils.BER),
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
    return _cached_encoder_for_ContextProfile(value, elGetter);
}

/* TODO: CHECK_RECURSIVE_DEFINITION */
export type ContextCombination =
    | { context: asn1.OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { and: ContextCombination[] } /* CHOICE_ALT_ROOT */
    | { or: ContextCombination[] } /* CHOICE_ALT_ROOT */
    | { not: ContextCombination } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ContextCombination: __utils.ASN1Decoder<
    ContextCombination
> | null = null;
let _cached_encoder_for_ContextCombination: __utils.ASN1Encoder<
    ContextCombination
> | null = null;
export function _decode_ContextCombination(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ContextCombination) {
        _cached_decoder_for_ContextCombination = __utils._decode_extensible_choice<
            ContextCombination
        >({
            "CONTEXT 0": [
                "context",
                __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                    () => __utils._decodeObjectIdentifier
                ),
            ],
            "CONTEXT 1": [
                "and",
                __utils._decode_explicit<ContextCombination[]>(() =>
                    __utils._decodeSequenceOf<ContextCombination>(
                        () => _decode_ContextCombination
                    )
                ),
            ],
            "CONTEXT 2": [
                "or",
                __utils._decode_explicit<ContextCombination[]>(() =>
                    __utils._decodeSequenceOf<ContextCombination>(
                        () => _decode_ContextCombination
                    )
                ),
            ],
            "CONTEXT 3": [
                "not",
                __utils._decode_explicit<ContextCombination>(
                    () => _decode_ContextCombination
                ),
            ],
        });
    }
    return _cached_decoder_for_ContextCombination(el);
}
export function _encode_ContextCombination(
    value: ContextCombination,
    elGetter: __utils.ASN1Encoder<ContextCombination>
) {
    if (!_cached_encoder_for_ContextCombination) {
        _cached_encoder_for_ContextCombination = __utils._encode_choice<
            ContextCombination
        >(
            {
                context: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeObjectIdentifier,
                    __utils.BER
                ),
                and: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () =>
                        __utils._encodeSequenceOf<ContextCombination>(
                            () => _encode_ContextCombination,
                            __utils.BER
                        ),
                    __utils.BER
                ),
                or: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () =>
                        __utils._encodeSequenceOf<ContextCombination>(
                            () => _encode_ContextCombination,
                            __utils.BER
                        ),
                    __utils.BER
                ),
                not: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    3,
                    () => _encode_ContextCombination,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ContextCombination(value, elGetter);
}

export class MatchingUse {
    constructor(
        readonly restrictionType: asn1.OBJECT_IDENTIFIER,
        readonly restrictionValue: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_MatchingUse: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "restrictionType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "restrictionValue",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_MatchingUse: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_MatchingUse: __utils.ComponentSpec[] = [];
let _cached_decoder_for_MatchingUse: __utils.ASN1Decoder<
    MatchingUse
> | null = null;
let _cached_encoder_for_MatchingUse: __utils.ASN1Encoder<
    MatchingUse
> | null = null;
export function _decode_MatchingUse(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MatchingUse) {
        _cached_decoder_for_MatchingUse = function (
            el: asn1.ASN1Element
        ): MatchingUse {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "MatchingUse contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "restrictionType";
            sequence[1].name = "restrictionValue";
            let restrictionType!: asn1.OBJECT_IDENTIFIER;
            let restrictionValue!: asn1.ASN1Element;
            restrictionType = __utils._decodeObjectIdentifier(sequence[0]);
            restrictionValue = __utils._decodeAny(sequence[1]);
            // TODO: Validate values.
            return new MatchingUse(
                restrictionType,
                restrictionValue,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_MatchingUse(el);
}
export function _encode_MatchingUse(
    value: MatchingUse,
    elGetter: __utils.ASN1Encoder<MatchingUse>
) {
    if (!_cached_encoder_for_MatchingUse) {
        _cached_encoder_for_MatchingUse = function (
            value: MatchingUse,
            elGetter: __utils.ASN1Encoder<MatchingUse>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.restrictionType,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeAny(
                                value.restrictionValue,
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
    return _cached_encoder_for_MatchingUse(value, elGetter);
}

export class RequestAttribute {
    constructor(
        readonly attributeType: asn1.OBJECT_IDENTIFIER,
        readonly includeSubtypes: asn1.BOOLEAN | undefined,
        readonly selectedValues: asn1.ASN1Element[] | undefined,
        readonly defaultValues:
            | RequestAttribute_defaultValues_Item[]
            | undefined,
        readonly contexts: ContextProfile[] | undefined,
        readonly contextCombination: ContextCombination | undefined,
        readonly matchingUse: MatchingUse[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_includeSubtypes() {
        return false;
    }
    public static get _default_value_for_contextCombination() {
        return { and: [] };
    }
}
export const _root_component_type_list_1_spec_for_RequestAttribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "attributeType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "includeSubtypes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "selectedValues",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "defaultValues",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contextCombination",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "matchingUse",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RequestAttribute: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RequestAttribute: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RequestAttribute: __utils.ASN1Decoder<
    RequestAttribute
> | null = null;
let _cached_encoder_for_RequestAttribute: __utils.ASN1Encoder<
    RequestAttribute
> | null = null;
export function _decode_RequestAttribute(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RequestAttribute) {
        _cached_decoder_for_RequestAttribute = function (
            el: asn1.ASN1Element
        ): RequestAttribute {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attributeType!: asn1.OBJECT_IDENTIFIER;
            let includeSubtypes: asn1.OPTIONAL<asn1.BOOLEAN> =
                RequestAttribute._default_value_for_includeSubtypes;
            let selectedValues: asn1.OPTIONAL<asn1.ASN1Element[]>;
            let defaultValues: asn1.OPTIONAL<
                RequestAttribute_defaultValues_Item[]
            >;
            let contexts: asn1.OPTIONAL<ContextProfile[]>;
            let contextCombination: asn1.OPTIONAL<ContextCombination> =
                RequestAttribute._default_value_for_contextCombination;
            let matchingUse: asn1.OPTIONAL<MatchingUse[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                attributeType: (_el: asn1.ASN1Element): void => {
                    attributeType = __utils._decodeObjectIdentifier(_el);
                },
                includeSubtypes: (_el: asn1.ASN1Element): void => {
                    includeSubtypes = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                selectedValues: (_el: asn1.ASN1Element): void => {
                    selectedValues = __utils._decode_explicit<
                        asn1.ASN1Element[]
                    >(() =>
                        __utils._decodeSequenceOf<asn1.ASN1Element>(
                            () => __utils._decodeAny
                        )
                    )(_el);
                },
                defaultValues: (_el: asn1.ASN1Element): void => {
                    defaultValues = __utils._decode_explicit<
                        RequestAttribute_defaultValues_Item[]
                    >(() =>
                        __utils._decodeSequenceOf<
                            RequestAttribute_defaultValues_Item
                        >(() => _decode_RequestAttribute_defaultValues_Item)
                    )(_el);
                },
                contexts: (_el: asn1.ASN1Element): void => {
                    contexts = __utils._decode_explicit<ContextProfile[]>(() =>
                        __utils._decodeSequenceOf<ContextProfile>(
                            () => _decode_ContextProfile
                        )
                    )(_el);
                },
                contextCombination: (_el: asn1.ASN1Element): void => {
                    contextCombination = __utils._decode_explicit<
                        ContextCombination
                    >(() => _decode_ContextCombination)(_el);
                },
                matchingUse: (_el: asn1.ASN1Element): void => {
                    matchingUse = __utils._decode_explicit<MatchingUse[]>(() =>
                        __utils._decodeSequenceOf<MatchingUse>(
                            () => _decode_MatchingUse
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RequestAttribute,
                _extension_additions_list_spec_for_RequestAttribute,
                _root_component_type_list_2_spec_for_RequestAttribute,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RequestAttribute(
                /* SEQUENCE_CONSTRUCTOR_CALL */ attributeType,
                includeSubtypes,
                selectedValues,
                defaultValues,
                contexts,
                contextCombination,
                matchingUse,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RequestAttribute(el);
}
export function _encode_RequestAttribute(
    value: RequestAttribute,
    elGetter: __utils.ASN1Encoder<RequestAttribute>
) {
    if (!_cached_encoder_for_RequestAttribute) {
        _cached_encoder_for_RequestAttribute = function (
            value: RequestAttribute,
            elGetter: __utils.ASN1Encoder<RequestAttribute>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.attributeType,
                                __utils.BER
                            ),
                            /* IF_DEFAULT */ value.includeSubtypes ===
                                undefined ||
                            __utils.deepEq(
                                value.includeSubtypes,
                                RequestAttribute._default_value_for_includeSubtypes
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.includeSubtypes, __utils.BER),
                            /* IF_ABSENT  */ value.selectedValues === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () =>
                                          __utils._encodeSequenceOf<
                                              asn1.ASN1Element
                                          >(
                                              () => __utils._encodeAny,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.selectedValues, __utils.BER),
                            /* IF_ABSENT  */ value.defaultValues === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () =>
                                          __utils._encodeSequenceOf<
                                              RequestAttribute_defaultValues_Item
                                          >(
                                              () =>
                                                  _encode_RequestAttribute_defaultValues_Item,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.defaultValues, __utils.BER),
                            /* IF_ABSENT  */ value.contexts === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () =>
                                          __utils._encodeSequenceOf<
                                              ContextProfile
                                          >(
                                              () => _encode_ContextProfile,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.contexts, __utils.BER),
                            /* IF_DEFAULT */ value.contextCombination ===
                                undefined ||
                            __utils.deepEq(
                                value.contextCombination,
                                RequestAttribute._default_value_for_contextCombination
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () => _encode_ContextCombination,
                                      __utils.BER
                                  )(value.contextCombination, __utils.BER),
                            /* IF_ABSENT  */ value.matchingUse === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      5,
                                      () =>
                                          __utils._encodeSequenceOf<
                                              MatchingUse
                                          >(
                                              () => _encode_MatchingUse,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.matchingUse, __utils.BER),
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
    return _cached_encoder_for_RequestAttribute(value, elGetter);
}

/* TODO: CHECK_RECURSIVE_DEFINITION */
export type AttributeCombination =
    | { attribute: AttributeType } /* CHOICE_ALT_ROOT */
    | { and: AttributeCombination[] } /* CHOICE_ALT_ROOT */
    | { or: AttributeCombination[] } /* CHOICE_ALT_ROOT */
    | { not: AttributeCombination } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_AttributeCombination: __utils.ASN1Decoder<
    AttributeCombination
> | null = null;
let _cached_encoder_for_AttributeCombination: __utils.ASN1Encoder<
    AttributeCombination
> | null = null;
export function _decode_AttributeCombination(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeCombination) {
        _cached_decoder_for_AttributeCombination = __utils._decode_extensible_choice<
            AttributeCombination
        >({
            "CONTEXT 0": [
                "attribute",
                __utils._decode_explicit<AttributeType>(
                    () => _decode_AttributeType
                ),
            ],
            "CONTEXT 1": [
                "and",
                __utils._decode_explicit<AttributeCombination[]>(() =>
                    __utils._decodeSequenceOf<AttributeCombination>(
                        () => _decode_AttributeCombination
                    )
                ),
            ],
            "CONTEXT 2": [
                "or",
                __utils._decode_explicit<AttributeCombination[]>(() =>
                    __utils._decodeSequenceOf<AttributeCombination>(
                        () => _decode_AttributeCombination
                    )
                ),
            ],
            "CONTEXT 3": [
                "not",
                __utils._decode_explicit<AttributeCombination>(
                    () => _decode_AttributeCombination
                ),
            ],
        });
    }
    return _cached_decoder_for_AttributeCombination(el);
}
export function _encode_AttributeCombination(
    value: AttributeCombination,
    elGetter: __utils.ASN1Encoder<AttributeCombination>
) {
    if (!_cached_encoder_for_AttributeCombination) {
        _cached_encoder_for_AttributeCombination = __utils._encode_choice<
            AttributeCombination
        >(
            {
                attribute: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_AttributeType,
                    __utils.BER
                ),
                and: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () =>
                        __utils._encodeSequenceOf<AttributeCombination>(
                            () => _encode_AttributeCombination,
                            __utils.BER
                        ),
                    __utils.BER
                ),
                or: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () =>
                        __utils._encodeSequenceOf<AttributeCombination>(
                            () => _encode_AttributeCombination,
                            __utils.BER
                        ),
                    __utils.BER
                ),
                not: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    3,
                    () => _encode_AttributeCombination,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_AttributeCombination(value, elGetter);
}

export type ResultAttribute_outputValues =
    | { selectedValues: asn1.ASN1Element[] } /* CHOICE_ALT_ROOT */
    | { matchedValuesOnly: asn1.NULL } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ResultAttribute_outputValues: __utils.ASN1Decoder<
    ResultAttribute_outputValues
> | null = null;
let _cached_encoder_for_ResultAttribute_outputValues: __utils.ASN1Encoder<
    ResultAttribute_outputValues
> | null = null;
export function _decode_ResultAttribute_outputValues(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ResultAttribute_outputValues) {
        _cached_decoder_for_ResultAttribute_outputValues = __utils._decode_inextensible_choice<
            ResultAttribute_outputValues
        >({
            "UNIVERSAL 16": [
                "selectedValues",
                __utils._decodeSequenceOf<asn1.ASN1Element>(
                    () => __utils._decodeAny
                ),
            ],
            "UNIVERSAL 5": ["matchedValuesOnly", __utils._decodeNull],
        });
    }
    return _cached_decoder_for_ResultAttribute_outputValues(el);
}
export function _encode_ResultAttribute_outputValues(
    value: ResultAttribute_outputValues,
    elGetter: __utils.ASN1Encoder<ResultAttribute_outputValues>
) {
    if (!_cached_encoder_for_ResultAttribute_outputValues) {
        _cached_encoder_for_ResultAttribute_outputValues = __utils._encode_choice<
            ResultAttribute_outputValues
        >(
            {
                selectedValues: __utils._encodeSequenceOf<asn1.ASN1Element>(
                    () => __utils._encodeAny,
                    __utils.BER
                ),
                matchedValuesOnly: __utils._encodeNull,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ResultAttribute_outputValues(value, elGetter);
}

export class ResultAttribute {
    constructor(
        readonly attributeType: asn1.OBJECT_IDENTIFIER,
        readonly outputValues: ResultAttribute_outputValues | undefined,
        readonly contexts: ContextProfile[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ResultAttribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "attributeType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "outputValues",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ResultAttribute: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ResultAttribute: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ResultAttribute: __utils.ASN1Decoder<
    ResultAttribute
> | null = null;
let _cached_encoder_for_ResultAttribute: __utils.ASN1Encoder<
    ResultAttribute
> | null = null;
export function _decode_ResultAttribute(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ResultAttribute) {
        _cached_decoder_for_ResultAttribute = function (
            el: asn1.ASN1Element
        ): ResultAttribute {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attributeType!: asn1.OBJECT_IDENTIFIER;
            let outputValues: asn1.OPTIONAL<ResultAttribute_outputValues>;
            let contexts: asn1.OPTIONAL<ContextProfile[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                attributeType: (_el: asn1.ASN1Element): void => {
                    attributeType = __utils._decodeObjectIdentifier(_el);
                },
                outputValues: (_el: asn1.ASN1Element): void => {
                    outputValues = _decode_ResultAttribute_outputValues(_el);
                },
                contexts: (_el: asn1.ASN1Element): void => {
                    contexts = __utils._decode_explicit<ContextProfile[]>(() =>
                        __utils._decodeSequenceOf<ContextProfile>(
                            () => _decode_ContextProfile
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ResultAttribute,
                _extension_additions_list_spec_for_ResultAttribute,
                _root_component_type_list_2_spec_for_ResultAttribute,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ResultAttribute(
                /* SEQUENCE_CONSTRUCTOR_CALL */ attributeType,
                outputValues,
                contexts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ResultAttribute(el);
}
export function _encode_ResultAttribute(
    value: ResultAttribute,
    elGetter: __utils.ASN1Encoder<ResultAttribute>
) {
    if (!_cached_encoder_for_ResultAttribute) {
        _cached_encoder_for_ResultAttribute = function (
            value: ResultAttribute,
            elGetter: __utils.ASN1Encoder<ResultAttribute>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.attributeType,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.outputValues === undefined
                                ? undefined
                                : _encode_ResultAttribute_outputValues(
                                      value.outputValues,
                                      __utils.BER
                                  ),
                            /* IF_ABSENT  */ value.contexts === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () =>
                                          __utils._encodeSequenceOf<
                                              ContextProfile
                                          >(
                                              () => _encode_ContextProfile,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.contexts, __utils.BER),
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
    return _cached_encoder_for_ResultAttribute(value, elGetter);
}

export class ControlOptions {
    constructor(
        readonly serviceControls: ServiceControlOptions | undefined,
        readonly searchOptions: SearchControlOptions | undefined,
        readonly hierarchyOptions: HierarchySelections | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_serviceControls() {
        return new Uint8ClampedArray([]);
    }
    public static get _default_value_for_searchOptions() {
        return new Uint8ClampedArray([asn1.TRUE_BIT]);
    }
}
export const _root_component_type_list_1_spec_for_ControlOptions: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "serviceControls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "searchOptions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "hierarchyOptions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ControlOptions: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ControlOptions: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ControlOptions: __utils.ASN1Decoder<
    ControlOptions
> | null = null;
let _cached_encoder_for_ControlOptions: __utils.ASN1Encoder<
    ControlOptions
> | null = null;
export function _decode_ControlOptions(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ControlOptions) {
        _cached_decoder_for_ControlOptions = function (
            el: asn1.ASN1Element
        ): ControlOptions {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let serviceControls: asn1.OPTIONAL<ServiceControlOptions> =
                ControlOptions._default_value_for_serviceControls;
            let searchOptions: asn1.OPTIONAL<SearchControlOptions> =
                ControlOptions._default_value_for_searchOptions;
            let hierarchyOptions: asn1.OPTIONAL<HierarchySelections>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                serviceControls: (_el: asn1.ASN1Element): void => {
                    serviceControls = __utils._decode_explicit<
                        ServiceControlOptions
                    >(() => _decode_ServiceControlOptions)(_el);
                },
                searchOptions: (_el: asn1.ASN1Element): void => {
                    searchOptions = __utils._decode_explicit<
                        SearchControlOptions
                    >(() => _decode_SearchControlOptions)(_el);
                },
                hierarchyOptions: (_el: asn1.ASN1Element): void => {
                    hierarchyOptions = __utils._decode_explicit<
                        HierarchySelections
                    >(() => _decode_HierarchySelections)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ControlOptions,
                _extension_additions_list_spec_for_ControlOptions,
                _root_component_type_list_2_spec_for_ControlOptions,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ControlOptions(
                /* SEQUENCE_CONSTRUCTOR_CALL */ serviceControls,
                searchOptions,
                hierarchyOptions,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ControlOptions(el);
}
export function _encode_ControlOptions(
    value: ControlOptions,
    elGetter: __utils.ASN1Encoder<ControlOptions>
) {
    if (!_cached_encoder_for_ControlOptions) {
        _cached_encoder_for_ControlOptions = function (
            value: ControlOptions,
            elGetter: __utils.ASN1Encoder<ControlOptions>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            __utils.deepEq(
                                value.serviceControls,
                                ControlOptions._default_value_for_serviceControls
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_ServiceControlOptions,
                                      __utils.BER
                                  )(value.serviceControls, __utils.BER),
                            /* IF_DEFAULT */ value.searchOptions ===
                                undefined ||
                            __utils.deepEq(
                                value.searchOptions,
                                ControlOptions._default_value_for_searchOptions
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => _encode_SearchControlOptions,
                                      __utils.BER
                                  )(value.searchOptions, __utils.BER),
                            /* IF_ABSENT  */ value.hierarchyOptions ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_HierarchySelections,
                                      __utils.BER
                                  )(value.hierarchyOptions, __utils.BER),
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
    return _cached_encoder_for_ControlOptions(value, elGetter);
}

export class Mapping {
    constructor(
        readonly mappingFunction: asn1.OBJECT_IDENTIFIER,
        readonly level: asn1.INTEGER | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_level() {
        return 0;
    }
}
export const _root_component_type_list_1_spec_for_Mapping: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "mappingFunction",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "level",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Mapping: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Mapping: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Mapping: __utils.ASN1Decoder<Mapping> | null = null;
let _cached_encoder_for_Mapping: __utils.ASN1Encoder<Mapping> | null = null;
export function _decode_Mapping(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Mapping) {
        _cached_decoder_for_Mapping = function (el: asn1.ASN1Element): Mapping {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mappingFunction!: asn1.OBJECT_IDENTIFIER;
            let level: asn1.OPTIONAL<asn1.INTEGER> =
                Mapping._default_value_for_level;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                mappingFunction: (_el: asn1.ASN1Element): void => {
                    mappingFunction = __utils._decodeObjectIdentifier(_el);
                },
                level: (_el: asn1.ASN1Element): void => {
                    level = __utils._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Mapping,
                _extension_additions_list_spec_for_Mapping,
                _root_component_type_list_2_spec_for_Mapping,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Mapping(
                /* SEQUENCE_CONSTRUCTOR_CALL */ mappingFunction,
                level,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Mapping(el);
}
export function _encode_Mapping(
    value: Mapping,
    elGetter: __utils.ASN1Encoder<Mapping>
) {
    if (!_cached_encoder_for_Mapping) {
        _cached_encoder_for_Mapping = function (
            value: Mapping,
            elGetter: __utils.ASN1Encoder<Mapping>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.mappingFunction,
                                __utils.BER
                            ),
                            /* IF_DEFAULT */ value.level === undefined ||
                            __utils.deepEq(
                                value.level,
                                Mapping._default_value_for_level
                            )
                                ? undefined
                                : __utils._encodeInteger(
                                      value.level,
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
    return _cached_encoder_for_Mapping(value, elGetter);
}

export class MRSubstitution {
    constructor(
        readonly attribute: AttributeType,
        readonly oldMatchingRule: asn1.OBJECT_IDENTIFIER | undefined,
        readonly newMatchingRule: asn1.OBJECT_IDENTIFIER | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_MRSubstitution: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "attribute",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "oldMatchingRule",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "newMatchingRule",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_MRSubstitution: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_MRSubstitution: __utils.ComponentSpec[] = [];
let _cached_decoder_for_MRSubstitution: __utils.ASN1Decoder<
    MRSubstitution
> | null = null;
let _cached_encoder_for_MRSubstitution: __utils.ASN1Encoder<
    MRSubstitution
> | null = null;
export function _decode_MRSubstitution(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MRSubstitution) {
        _cached_decoder_for_MRSubstitution = function (
            el: asn1.ASN1Element
        ): MRSubstitution {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attribute!: AttributeType;
            let oldMatchingRule: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
            let newMatchingRule: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                attribute: (_el: asn1.ASN1Element): void => {
                    attribute = _decode_AttributeType(_el);
                },
                oldMatchingRule: (_el: asn1.ASN1Element): void => {
                    oldMatchingRule = __utils._decode_explicit<
                        asn1.OBJECT_IDENTIFIER
                    >(() => __utils._decodeObjectIdentifier)(_el);
                },
                newMatchingRule: (_el: asn1.ASN1Element): void => {
                    newMatchingRule = __utils._decode_explicit<
                        asn1.OBJECT_IDENTIFIER
                    >(() => __utils._decodeObjectIdentifier)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MRSubstitution,
                _extension_additions_list_spec_for_MRSubstitution,
                _root_component_type_list_2_spec_for_MRSubstitution,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new MRSubstitution(
                /* SEQUENCE_CONSTRUCTOR_CALL */ attribute,
                oldMatchingRule,
                newMatchingRule,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_MRSubstitution(el);
}
export function _encode_MRSubstitution(
    value: MRSubstitution,
    elGetter: __utils.ASN1Encoder<MRSubstitution>
) {
    if (!_cached_encoder_for_MRSubstitution) {
        _cached_encoder_for_MRSubstitution = function (
            value: MRSubstitution,
            elGetter: __utils.ASN1Encoder<MRSubstitution>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeType(
                                value.attribute,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.oldMatchingRule === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => __utils._encodeObjectIdentifier,
                                      __utils.BER
                                  )(value.oldMatchingRule, __utils.BER),
                            /* IF_ABSENT  */ value.newMatchingRule === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => __utils._encodeObjectIdentifier,
                                      __utils.BER
                                  )(value.newMatchingRule, __utils.BER),
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
    return _cached_encoder_for_MRSubstitution(value, elGetter);
}

export class MRMapping {
    constructor(
        readonly mapping: Mapping[] | undefined,
        readonly substitution: MRSubstitution[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_MRMapping: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "mapping",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "substitution",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_MRMapping: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_MRMapping: __utils.ComponentSpec[] = [];
let _cached_decoder_for_MRMapping: __utils.ASN1Decoder<MRMapping> | null = null;
let _cached_encoder_for_MRMapping: __utils.ASN1Encoder<MRMapping> | null = null;
export function _decode_MRMapping(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MRMapping) {
        _cached_decoder_for_MRMapping = function (
            el: asn1.ASN1Element
        ): MRMapping {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mapping: asn1.OPTIONAL<Mapping[]>;
            let substitution: asn1.OPTIONAL<MRSubstitution[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                mapping: (_el: asn1.ASN1Element): void => {
                    mapping = __utils._decode_explicit<Mapping[]>(() =>
                        __utils._decodeSequenceOf<Mapping>(
                            () => _decode_Mapping
                        )
                    )(_el);
                },
                substitution: (_el: asn1.ASN1Element): void => {
                    substitution = __utils._decode_explicit<MRSubstitution[]>(
                        () =>
                            __utils._decodeSequenceOf<MRSubstitution>(
                                () => _decode_MRSubstitution
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MRMapping,
                _extension_additions_list_spec_for_MRMapping,
                _root_component_type_list_2_spec_for_MRMapping,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new MRMapping(
                /* SEQUENCE_CONSTRUCTOR_CALL */ mapping,
                substitution,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_MRMapping(el);
}
export function _encode_MRMapping(
    value: MRMapping,
    elGetter: __utils.ASN1Encoder<MRMapping>
) {
    if (!_cached_encoder_for_MRMapping) {
        _cached_encoder_for_MRMapping = function (
            value: MRMapping,
            elGetter: __utils.ASN1Encoder<MRMapping>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.mapping === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () =>
                                          __utils._encodeSequenceOf<Mapping>(
                                              () => _encode_Mapping,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.mapping, __utils.BER),
                            /* IF_ABSENT  */ value.substitution === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () =>
                                          __utils._encodeSequenceOf<
                                              MRSubstitution
                                          >(
                                              () => _encode_MRSubstitution,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.substitution, __utils.BER),
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
    return _cached_encoder_for_MRMapping(value, elGetter);
}

export class RelaxationPolicy {
    constructor(
        readonly basic: MRMapping | undefined,
        readonly tightenings: MRMapping[] | undefined,
        readonly relaxations: MRMapping[] | undefined,
        readonly maximum: asn1.INTEGER | undefined,
        readonly minimum: asn1.INTEGER | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_basic() {
        return new MRMapping(undefined, undefined);
    }
    public static get _default_value_for_minimum() {
        return 1;
    }
}
export const _root_component_type_list_1_spec_for_RelaxationPolicy: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "basic",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "tightenings",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "relaxations",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "maximum",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "minimum",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RelaxationPolicy: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RelaxationPolicy: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RelaxationPolicy: __utils.ASN1Decoder<
    RelaxationPolicy
> | null = null;
let _cached_encoder_for_RelaxationPolicy: __utils.ASN1Encoder<
    RelaxationPolicy
> | null = null;
export function _decode_RelaxationPolicy(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RelaxationPolicy) {
        _cached_decoder_for_RelaxationPolicy = function (
            el: asn1.ASN1Element
        ): RelaxationPolicy {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let basic: asn1.OPTIONAL<MRMapping> =
                RelaxationPolicy._default_value_for_basic;
            let tightenings: asn1.OPTIONAL<MRMapping[]>;
            let relaxations: asn1.OPTIONAL<MRMapping[]>;
            let maximum: asn1.OPTIONAL<asn1.INTEGER>;
            let minimum: asn1.OPTIONAL<asn1.INTEGER> =
                RelaxationPolicy._default_value_for_minimum;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                basic: (_el: asn1.ASN1Element): void => {
                    basic = __utils._decode_explicit<MRMapping>(
                        () => _decode_MRMapping
                    )(_el);
                },
                tightenings: (_el: asn1.ASN1Element): void => {
                    tightenings = __utils._decode_explicit<MRMapping[]>(() =>
                        __utils._decodeSequenceOf<MRMapping>(
                            () => _decode_MRMapping
                        )
                    )(_el);
                },
                relaxations: (_el: asn1.ASN1Element): void => {
                    relaxations = __utils._decode_explicit<MRMapping[]>(() =>
                        __utils._decodeSequenceOf<MRMapping>(
                            () => _decode_MRMapping
                        )
                    )(_el);
                },
                maximum: (_el: asn1.ASN1Element): void => {
                    maximum = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                minimum: (_el: asn1.ASN1Element): void => {
                    minimum = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RelaxationPolicy,
                _extension_additions_list_spec_for_RelaxationPolicy,
                _root_component_type_list_2_spec_for_RelaxationPolicy,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new RelaxationPolicy(
                /* SEQUENCE_CONSTRUCTOR_CALL */ basic,
                tightenings,
                relaxations,
                maximum,
                minimum,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_RelaxationPolicy(el);
}
export function _encode_RelaxationPolicy(
    value: RelaxationPolicy,
    elGetter: __utils.ASN1Encoder<RelaxationPolicy>
) {
    if (!_cached_encoder_for_RelaxationPolicy) {
        _cached_encoder_for_RelaxationPolicy = function (
            value: RelaxationPolicy,
            elGetter: __utils.ASN1Encoder<RelaxationPolicy>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.basic === undefined ||
                            __utils.deepEq(
                                value.basic,
                                RelaxationPolicy._default_value_for_basic
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_MRMapping,
                                      __utils.BER
                                  )(value.basic, __utils.BER),
                            /* IF_ABSENT  */ value.tightenings === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () =>
                                          __utils._encodeSequenceOf<MRMapping>(
                                              () => _encode_MRMapping,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.tightenings, __utils.BER),
                            /* IF_ABSENT  */ value.relaxations === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () =>
                                          __utils._encodeSequenceOf<MRMapping>(
                                              () => _encode_MRMapping,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.relaxations, __utils.BER),
                            /* IF_ABSENT  */ value.maximum === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.maximum, __utils.BER),
                            /* IF_DEFAULT */ value.minimum === undefined ||
                            __utils.deepEq(
                                value.minimum,
                                RelaxationPolicy._default_value_for_minimum
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.minimum, __utils.BER),
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
    return _cached_encoder_for_RelaxationPolicy(value, elGetter);
}

export type AllowedSubset = asn1.BIT_STRING;
export const AllowedSubset_baseObject: number = 0; /* LONG_NAMED_BIT */
export const AllowedSubset_oneLevel: number = 1; /* LONG_NAMED_BIT */
export const AllowedSubset_wholeSubtree: number = 2; /* LONG_NAMED_BIT */
let _cached_decoder_for_AllowedSubset: __utils.ASN1Decoder<
    AllowedSubset
> | null = null;
let _cached_encoder_for_AllowedSubset: __utils.ASN1Encoder<
    AllowedSubset
> | null = null;
export function _decode_AllowedSubset(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AllowedSubset) {
        _cached_decoder_for_AllowedSubset = __utils._decodeBitString;
    }
    return _cached_decoder_for_AllowedSubset(el);
}
export function _encode_AllowedSubset(
    value: AllowedSubset,
    elGetter: __utils.ASN1Encoder<AllowedSubset>
) {
    if (!_cached_encoder_for_AllowedSubset) {
        _cached_encoder_for_AllowedSubset = __utils._encodeBitString;
    }
    return _cached_encoder_for_AllowedSubset(value, elGetter);
}

export type ImposedSubset = asn1.ENUMERATED;
export const ImposedSubset_baseObject: ImposedSubset = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const ImposedSubset_oneLevel: ImposedSubset = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const ImposedSubset_wholeSubtree: ImposedSubset = 2; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_ImposedSubset: __utils.ASN1Decoder<
    ImposedSubset
> | null = null;
let _cached_encoder_for_ImposedSubset: __utils.ASN1Encoder<
    ImposedSubset
> | null = null;
export function _decode_ImposedSubset(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ImposedSubset) {
        _cached_decoder_for_ImposedSubset = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_ImposedSubset(el);
}
export function _encode_ImposedSubset(
    value: ImposedSubset,
    elGetter: __utils.ASN1Encoder<ImposedSubset>
) {
    if (!_cached_encoder_for_ImposedSubset) {
        _cached_encoder_for_ImposedSubset = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_ImposedSubset(value, elGetter);
}

export class EntryLimit {
    constructor(
        readonly default_: asn1.INTEGER,
        readonly max: asn1.INTEGER,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_EntryLimit: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "default",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "max",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_EntryLimit: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_EntryLimit: __utils.ComponentSpec[] = [];
let _cached_decoder_for_EntryLimit: __utils.ASN1Decoder<
    EntryLimit
> | null = null;
let _cached_encoder_for_EntryLimit: __utils.ASN1Encoder<
    EntryLimit
> | null = null;
export function _decode_EntryLimit(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_EntryLimit) {
        _cached_decoder_for_EntryLimit = function (
            el: asn1.ASN1Element
        ): EntryLimit {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "EntryLimit contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "default";
            sequence[1].name = "max";
            let default_!: asn1.INTEGER;
            let max!: asn1.INTEGER;
            default_ = __utils._decodeInteger(sequence[0]);
            max = __utils._decodeInteger(sequence[1]);
            // TODO: Validate values.
            return new EntryLimit(default_, max, sequence.slice(2));
        };
    }
    return _cached_decoder_for_EntryLimit(el);
}
export function _encode_EntryLimit(
    value: EntryLimit,
    elGetter: __utils.ASN1Encoder<EntryLimit>
) {
    if (!_cached_encoder_for_EntryLimit) {
        _cached_encoder_for_EntryLimit = function (
            value: EntryLimit,
            elGetter: __utils.ASN1Encoder<EntryLimit>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeInteger(
                                value.default_,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeInteger(
                                value.max,
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
    return _cached_encoder_for_EntryLimit(value, elGetter);
}

export class SearchRule {
    constructor(
        readonly id: asn1.INTEGER /* REPLICATED_COMPONENT */,
        readonly dmdId: asn1.OBJECT_IDENTIFIER /* REPLICATED_COMPONENT */,
        readonly serviceType: asn1.OBJECT_IDENTIFIER | undefined,
        readonly userClass: asn1.INTEGER | undefined,
        readonly inputAttributeTypes: RequestAttribute[] | undefined,
        readonly attributeCombination: AttributeCombination | undefined,
        readonly outputAttributeTypes: ResultAttribute[] | undefined,
        readonly defaultControls: ControlOptions | undefined,
        readonly mandatoryControls: ControlOptions | undefined,
        readonly searchRuleControls: ControlOptions | undefined,
        readonly familyGrouping: FamilyGrouping | undefined,
        readonly familyReturn: FamilyReturn | undefined,
        readonly relaxation: RelaxationPolicy | undefined,
        readonly additionalControl: AttributeType[] | undefined,
        readonly allowedSubset: AllowedSubset | undefined,
        readonly imposedSubset: ImposedSubset | undefined,
        readonly entryLimit: EntryLimit | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_attributeCombination() {
        return { and: [] };
    }
    public static get _default_value_for_allowedSubset() {
        return new Uint8ClampedArray([1, 1, 1]);
    }
}
export const _root_component_type_list_1_spec_for_SearchRule: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "id",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "dmdId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serviceType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "userClass",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "inputAttributeTypes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributeCombination",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "outputAttributeTypes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "defaultControls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "mandatoryControls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "searchRuleControls",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "familyGrouping",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 9),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "familyReturn",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "relaxation",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 11),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "additionalControl",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 12),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "allowedSubset",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 13),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "imposedSubset",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 14),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entryLimit",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 15),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SearchRule: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SearchRule: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SearchRule: __utils.ASN1Decoder<
    SearchRule
> | null = null;
let _cached_encoder_for_SearchRule: __utils.ASN1Encoder<
    SearchRule
> | null = null;
export function _decode_SearchRule(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SearchRule) {
        _cached_decoder_for_SearchRule = function (
            el: asn1.ASN1Element
        ): SearchRule {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let id!: asn1.INTEGER;
            let dmdId!: asn1.OBJECT_IDENTIFIER;
            let serviceType: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
            let userClass: asn1.OPTIONAL<asn1.INTEGER>;
            let inputAttributeTypes: asn1.OPTIONAL<RequestAttribute[]>;
            let attributeCombination: asn1.OPTIONAL<AttributeCombination> =
                SearchRule._default_value_for_attributeCombination;
            let outputAttributeTypes: asn1.OPTIONAL<ResultAttribute[]>;
            let defaultControls: asn1.OPTIONAL<ControlOptions>;
            let mandatoryControls: asn1.OPTIONAL<ControlOptions>;
            let searchRuleControls: asn1.OPTIONAL<ControlOptions>;
            let familyGrouping: asn1.OPTIONAL<FamilyGrouping>;
            let familyReturn: asn1.OPTIONAL<FamilyReturn>;
            let relaxation: asn1.OPTIONAL<RelaxationPolicy>;
            let additionalControl: asn1.OPTIONAL<AttributeType[]>;
            let allowedSubset: asn1.OPTIONAL<AllowedSubset> =
                SearchRule._default_value_for_allowedSubset;
            let imposedSubset: asn1.OPTIONAL<ImposedSubset>;
            let entryLimit: asn1.OPTIONAL<EntryLimit>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                id: (_el: asn1.ASN1Element): void => {
                    id = __utils._decodeInteger(_el);
                },
                dmdId: (_el: asn1.ASN1Element): void => {
                    dmdId = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                        () => __utils._decodeObjectIdentifier
                    )(_el);
                },
                serviceType: (_el: asn1.ASN1Element): void => {
                    serviceType = __utils._decode_explicit<
                        asn1.OBJECT_IDENTIFIER
                    >(() => __utils._decodeObjectIdentifier)(_el);
                },
                userClass: (_el: asn1.ASN1Element): void => {
                    userClass = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                inputAttributeTypes: (_el: asn1.ASN1Element): void => {
                    inputAttributeTypes = __utils._decode_explicit<
                        RequestAttribute[]
                    >(() =>
                        __utils._decodeSequenceOf<RequestAttribute>(
                            () => _decode_RequestAttribute
                        )
                    )(_el);
                },
                attributeCombination: (_el: asn1.ASN1Element): void => {
                    attributeCombination = __utils._decode_explicit<
                        AttributeCombination
                    >(() => _decode_AttributeCombination)(_el);
                },
                outputAttributeTypes: (_el: asn1.ASN1Element): void => {
                    outputAttributeTypes = __utils._decode_explicit<
                        ResultAttribute[]
                    >(() =>
                        __utils._decodeSequenceOf<ResultAttribute>(
                            () => _decode_ResultAttribute
                        )
                    )(_el);
                },
                defaultControls: (_el: asn1.ASN1Element): void => {
                    defaultControls = __utils._decode_explicit<ControlOptions>(
                        () => _decode_ControlOptions
                    )(_el);
                },
                mandatoryControls: (_el: asn1.ASN1Element): void => {
                    mandatoryControls = __utils._decode_explicit<
                        ControlOptions
                    >(() => _decode_ControlOptions)(_el);
                },
                searchRuleControls: (_el: asn1.ASN1Element): void => {
                    searchRuleControls = __utils._decode_explicit<
                        ControlOptions
                    >(() => _decode_ControlOptions)(_el);
                },
                familyGrouping: (_el: asn1.ASN1Element): void => {
                    familyGrouping = __utils._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
                familyReturn: (_el: asn1.ASN1Element): void => {
                    familyReturn = __utils._decode_explicit<FamilyReturn>(
                        () => _decode_FamilyReturn
                    )(_el);
                },
                relaxation: (_el: asn1.ASN1Element): void => {
                    relaxation = __utils._decode_explicit<RelaxationPolicy>(
                        () => _decode_RelaxationPolicy
                    )(_el);
                },
                additionalControl: (_el: asn1.ASN1Element): void => {
                    additionalControl = __utils._decode_explicit<
                        AttributeType[]
                    >(() =>
                        __utils._decodeSequenceOf<AttributeType>(
                            () => _decode_AttributeType
                        )
                    )(_el);
                },
                allowedSubset: (_el: asn1.ASN1Element): void => {
                    allowedSubset = __utils._decode_explicit<AllowedSubset>(
                        () => _decode_AllowedSubset
                    )(_el);
                },
                imposedSubset: (_el: asn1.ASN1Element): void => {
                    imposedSubset = __utils._decode_explicit<ImposedSubset>(
                        () => _decode_ImposedSubset
                    )(_el);
                },
                entryLimit: (_el: asn1.ASN1Element): void => {
                    entryLimit = __utils._decode_explicit<EntryLimit>(
                        () => _decode_EntryLimit
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SearchRule,
                _extension_additions_list_spec_for_SearchRule,
                _root_component_type_list_2_spec_for_SearchRule,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SearchRule(
                /* SEQUENCE_CONSTRUCTOR_CALL */ id,
                dmdId,
                serviceType,
                userClass,
                inputAttributeTypes,
                attributeCombination,
                outputAttributeTypes,
                defaultControls,
                mandatoryControls,
                searchRuleControls,
                familyGrouping,
                familyReturn,
                relaxation,
                additionalControl,
                allowedSubset,
                imposedSubset,
                entryLimit,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SearchRule(el);
}
export function _encode_SearchRule(
    value: SearchRule,
    elGetter: __utils.ASN1Encoder<SearchRule>
) {
    if (!_cached_encoder_for_SearchRule) {
        _cached_encoder_for_SearchRule = function (
            value: SearchRule,
            elGetter: __utils.ASN1Encoder<SearchRule>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeInteger(
                                value.id,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encode_explicit(
                                asn1.ASN1TagClass.context,
                                0,
                                () => __utils._encodeObjectIdentifier,
                                __utils.BER
                            )(value.dmdId, __utils.BER),
                            /* IF_ABSENT  */ value.serviceType === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => __utils._encodeObjectIdentifier,
                                      __utils.BER
                                  )(value.serviceType, __utils.BER),
                            /* IF_ABSENT  */ value.userClass === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.userClass, __utils.BER),
                            /* IF_ABSENT  */ value.inputAttributeTypes ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () =>
                                          __utils._encodeSequenceOf<
                                              RequestAttribute
                                          >(
                                              () => _encode_RequestAttribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.inputAttributeTypes, __utils.BER),
                            /* IF_DEFAULT */ value.attributeCombination ===
                                undefined ||
                            __utils.deepEq(
                                value.attributeCombination,
                                SearchRule._default_value_for_attributeCombination
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () => _encode_AttributeCombination,
                                      __utils.BER
                                  )(value.attributeCombination, __utils.BER),
                            /* IF_ABSENT  */ value.outputAttributeTypes ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      5,
                                      () =>
                                          __utils._encodeSequenceOf<
                                              ResultAttribute
                                          >(
                                              () => _encode_ResultAttribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.outputAttributeTypes, __utils.BER),
                            /* IF_ABSENT  */ value.defaultControls === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      6,
                                      () => _encode_ControlOptions,
                                      __utils.BER
                                  )(value.defaultControls, __utils.BER),
                            /* IF_ABSENT  */ value.mandatoryControls ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      7,
                                      () => _encode_ControlOptions,
                                      __utils.BER
                                  )(value.mandatoryControls, __utils.BER),
                            /* IF_ABSENT  */ value.searchRuleControls ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      8,
                                      () => _encode_ControlOptions,
                                      __utils.BER
                                  )(value.searchRuleControls, __utils.BER),
                            /* IF_ABSENT  */ value.familyGrouping === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      9,
                                      () => _encode_FamilyGrouping,
                                      __utils.BER
                                  )(value.familyGrouping, __utils.BER),
                            /* IF_ABSENT  */ value.familyReturn === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      10,
                                      () => _encode_FamilyReturn,
                                      __utils.BER
                                  )(value.familyReturn, __utils.BER),
                            /* IF_ABSENT  */ value.relaxation === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      11,
                                      () => _encode_RelaxationPolicy,
                                      __utils.BER
                                  )(value.relaxation, __utils.BER),
                            /* IF_ABSENT  */ value.additionalControl ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      12,
                                      () =>
                                          __utils._encodeSequenceOf<
                                              AttributeType
                                          >(
                                              () => _encode_AttributeType,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.additionalControl, __utils.BER),
                            /* IF_DEFAULT */ value.allowedSubset ===
                                undefined ||
                            __utils.deepEq(
                                value.allowedSubset,
                                SearchRule._default_value_for_allowedSubset
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      13,
                                      () => _encode_AllowedSubset,
                                      __utils.BER
                                  )(value.allowedSubset, __utils.BER),
                            /* IF_ABSENT  */ value.imposedSubset === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      14,
                                      () => _encode_ImposedSubset,
                                      __utils.BER
                                  )(value.imposedSubset, __utils.BER),
                            /* IF_ABSENT  */ value.entryLimit === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      15,
                                      () => _encode_EntryLimit,
                                      __utils.BER
                                  )(value.entryLimit, __utils.BER),
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
    return _cached_encoder_for_SearchRule(value, elGetter);
}

export class SearchRuleId {
    constructor(
        readonly id: asn1.INTEGER,
        readonly dmdId: asn1.OBJECT_IDENTIFIER
    ) {}
}
export const _root_component_type_list_1_spec_for_SearchRuleId: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "id",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "dmdId",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SearchRuleId: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SearchRuleId: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SearchRuleId: __utils.ASN1Decoder<
    SearchRuleId
> | null = null;
let _cached_encoder_for_SearchRuleId: __utils.ASN1Encoder<
    SearchRuleId
> | null = null;
export function _decode_SearchRuleId(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SearchRuleId) {
        _cached_decoder_for_SearchRuleId = function (
            el: asn1.ASN1Element
        ): SearchRuleId {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "SearchRuleId contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "id";
            sequence[1].name = "dmdId";
            let id!: asn1.INTEGER;
            let dmdId!: asn1.OBJECT_IDENTIFIER;
            id = __utils._decodeInteger(sequence[0]);
            dmdId = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(sequence[1]);
            // TODO: Validate values.
            return new SearchRuleId(id, dmdId);
        };
    }
    return _cached_decoder_for_SearchRuleId(el);
}
export function _encode_SearchRuleId(
    value: SearchRuleId,
    elGetter: __utils.ASN1Encoder<SearchRuleId>
) {
    if (!_cached_encoder_for_SearchRuleId) {
        _cached_encoder_for_SearchRuleId = function (
            value: SearchRuleId,
            elGetter: __utils.ASN1Encoder<SearchRuleId>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.id,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encode_explicit(
                            asn1.ASN1TagClass.context,
                            0,
                            () => __utils._encodeObjectIdentifier,
                            __utils.BER
                        )(value.dmdId, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_SearchRuleId(value, elGetter);
}

// TODO: ObjectSetAssignment: SupportedMatchingRestrictions

// TODO: ObjectClassAssignment: REQUEST-ATTRIBUTE

// TODO: ObjectClassAssignment: RESULT-ATTRIBUTE

// TODO: ObjectClassAssignment: SEARCH-RULE

// TODO: ObjectClassAssignment: MATCHING-RESTRICTION

/* END_MODULE ServiceAdministration */
