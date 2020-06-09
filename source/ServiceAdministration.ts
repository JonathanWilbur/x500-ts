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
export const _decode_RequestAttribute_defaultValues_Item = function (
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
    return new RequestAttribute_defaultValues_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
        entryType,
        values,
        _unrecognizedExtensionsList
    );
};
export const _encode_RequestAttribute_defaultValues_Item = function (
    value: RequestAttribute_defaultValues_Item,
    elGetter: __utils.ASN1Encoder<RequestAttribute_defaultValues_Item>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    value.entryType
                        ? __utils._encodeObjectIdentifier(
                              value.entryType,
                              __utils.BER
                          )
                        : undefined,
                    __utils._encodeSequenceOf<asn1.ASN1Element>(
                        () => __utils._encodeAny,
                        __utils.BER
                    )(value.values, __utils.BER),
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
export const _decode_ContextProfile = function (
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
    return new ContextProfile /* SEQUENCE_CONSTRUCTOR_CALL */(
        contextType,
        contextValue,
        _unrecognizedExtensionsList
    );
};
export const _encode_ContextProfile = function (
    value: ContextProfile,
    elGetter: __utils.ASN1Encoder<ContextProfile>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    __utils._encodeObjectIdentifier(
                        value.contextType,
                        __utils.BER
                    ),
                    value.contextValue
                        ? __utils._encodeSequenceOf<asn1.ASN1Element>(
                              () => __utils._encodeAny,
                              __utils.BER
                          )(value.contextValue, __utils.BER)
                        : undefined,
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

/* TODO: CHECK_RECURSIVE_DEFINITION */
export type ContextCombination =
    | { context: asn1.OBJECT_IDENTIFIER }
    | { and: ContextCombination[] }
    | { or: ContextCombination[] }
    | { not: ContextCombination }
    | asn1.ASN1Element;
export const _decode_ContextCombination = __utils._decode_extensible_choice<
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
export const _encode_ContextCombination = __utils._encode_choice<
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
export const _decode_MatchingUse = function (
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
export const _encode_MatchingUse = function (
    value: MatchingUse,
    elGetter: __utils.ASN1Encoder<MatchingUse>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    __utils._encodeObjectIdentifier(
                        value.restrictionType,
                        __utils.BER
                    ),
                    __utils._encodeAny(value.restrictionValue, __utils.BER),
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
export const _decode_RequestAttribute = function (
    el: asn1.ASN1Element
): RequestAttribute {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let attributeType!: asn1.OBJECT_IDENTIFIER;
    let includeSubtypes: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let selectedValues: asn1.OPTIONAL<asn1.ASN1Element[]>;
    let defaultValues: asn1.OPTIONAL<RequestAttribute_defaultValues_Item[]>;
    let contexts: asn1.OPTIONAL<ContextProfile[]>;
    let contextCombination: asn1.OPTIONAL<ContextCombination> = { and: [] };
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
            selectedValues = __utils._decode_explicit<asn1.ASN1Element[]>(() =>
                __utils._decodeSequenceOf<asn1.ASN1Element>(
                    () => __utils._decodeAny
                )
            )(_el);
        },
        defaultValues: (_el: asn1.ASN1Element): void => {
            defaultValues = __utils._decode_explicit<
                RequestAttribute_defaultValues_Item[]
            >(() =>
                __utils._decodeSequenceOf<RequestAttribute_defaultValues_Item>(
                    () => _decode_RequestAttribute_defaultValues_Item
                )
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
            contextCombination = __utils._decode_explicit<ContextCombination>(
                () => _decode_ContextCombination
            )(_el);
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
    return new RequestAttribute /* SEQUENCE_CONSTRUCTOR_CALL */(
        attributeType,
        includeSubtypes,
        selectedValues,
        defaultValues,
        contexts,
        contextCombination,
        matchingUse,
        _unrecognizedExtensionsList
    );
};
export const _encode_RequestAttribute = function (
    value: RequestAttribute,
    elGetter: __utils.ASN1Encoder<RequestAttribute>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    __utils._encodeObjectIdentifier(
                        value.attributeType,
                        __utils.BER
                    ),
                    value.includeSubtypes !== undefined &&
                    value.includeSubtypes !==
                        false /* TODO: Review this condition. */
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              0,
                              () => __utils._encodeBoolean,
                              __utils.BER
                          )(value.includeSubtypes, __utils.BER)
                        : undefined,
                    value.selectedValues
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () =>
                                  __utils._encodeSequenceOf<asn1.ASN1Element>(
                                      () => __utils._encodeAny,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.selectedValues, __utils.BER)
                        : undefined,
                    value.defaultValues
                        ? __utils._encode_explicit(
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
                          )(value.defaultValues, __utils.BER)
                        : undefined,
                    value.contexts
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              3,
                              () =>
                                  __utils._encodeSequenceOf<ContextProfile>(
                                      () => _encode_ContextProfile,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.contexts, __utils.BER)
                        : undefined,
                    JSON.stringify(value.contextCombination) ===
                    JSON.stringify({ and: [] })
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              4,
                              () => _encode_ContextCombination,
                              __utils.BER
                          )(value.contextCombination, __utils.BER)
                        : undefined,
                    value.matchingUse
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              5,
                              () =>
                                  __utils._encodeSequenceOf<MatchingUse>(
                                      () => _encode_MatchingUse,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.matchingUse, __utils.BER)
                        : undefined,
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

/* TODO: CHECK_RECURSIVE_DEFINITION */
export type AttributeCombination =
    | { attribute: AttributeType }
    | { and: AttributeCombination[] }
    | { or: AttributeCombination[] }
    | { not: AttributeCombination }
    | asn1.ASN1Element;
export const _decode_AttributeCombination = __utils._decode_extensible_choice<
    AttributeCombination
>({
    "CONTEXT 0": [
        "attribute",
        __utils._decode_explicit<AttributeType>(() => _decode_AttributeType),
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
export const _encode_AttributeCombination = __utils._encode_choice<
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

export type ResultAttribute_outputValues =
    | { selectedValues: asn1.ASN1Element[] }
    | { matchedValuesOnly: asn1.NULL };
export const _decode_ResultAttribute_outputValues = __utils._decode_inextensible_choice<
    ResultAttribute_outputValues
>({
    "UNIVERSAL 16": [
        "selectedValues",
        __utils._decodeSequenceOf<asn1.ASN1Element>(() => __utils._decodeAny),
    ],
    "UNIVERSAL 5": ["matchedValuesOnly", __utils._decodeNull],
});
export const _encode_ResultAttribute_outputValues = __utils._encode_choice<
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
export const _decode_ResultAttribute = function (
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
    return new ResultAttribute /* SEQUENCE_CONSTRUCTOR_CALL */(
        attributeType,
        outputValues,
        contexts,
        _unrecognizedExtensionsList
    );
};
export const _encode_ResultAttribute = function (
    value: ResultAttribute,
    elGetter: __utils.ASN1Encoder<ResultAttribute>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    __utils._encodeObjectIdentifier(
                        value.attributeType,
                        __utils.BER
                    ),
                    value.outputValues
                        ? _encode_ResultAttribute_outputValues(
                              value.outputValues,
                              __utils.BER
                          )
                        : undefined,
                    value.contexts
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              0,
                              () =>
                                  __utils._encodeSequenceOf<ContextProfile>(
                                      () => _encode_ContextProfile,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.contexts, __utils.BER)
                        : undefined,
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

export class ControlOptions {
    constructor(
        readonly serviceControls: ServiceControlOptions | undefined,
        readonly searchOptions: SearchControlOptions | undefined,
        readonly hierarchyOptions: HierarchySelections | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _decode_ControlOptions = function (
    el: asn1.ASN1Element
): ControlOptions {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let serviceControls: asn1.OPTIONAL<ServiceControlOptions> = new Uint8ClampedArray(
        0
    );
    let searchOptions: asn1.OPTIONAL<SearchControlOptions> = new Uint8ClampedArray(
        [asn1.FALSE_BIT]
    );
    let hierarchyOptions: asn1.OPTIONAL<HierarchySelections>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        serviceControls: (_el: asn1.ASN1Element): void => {
            serviceControls = __utils._decode_explicit<ServiceControlOptions>(
                () => _decode_ServiceControlOptions
            )(_el);
        },
        searchOptions: (_el: asn1.ASN1Element): void => {
            searchOptions = __utils._decode_explicit<SearchControlOptions>(
                () => _decode_SearchControlOptions
            )(_el);
        },
        hierarchyOptions: (_el: asn1.ASN1Element): void => {
            hierarchyOptions = __utils._decode_explicit<HierarchySelections>(
                () => _decode_HierarchySelections
            )(_el);
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
    return new ControlOptions /* SEQUENCE_CONSTRUCTOR_CALL */(
        serviceControls,
        searchOptions,
        hierarchyOptions,
        _unrecognizedExtensionsList
    );
};
export const _encode_ControlOptions = function (
    value: ControlOptions,
    elGetter: __utils.ASN1Encoder<ControlOptions>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    JSON.stringify(value.serviceControls) ===
                    JSON.stringify(new Uint8ClampedArray(0))
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              0,
                              () => _encode_ServiceControlOptions,
                              __utils.BER
                          )(value.serviceControls, __utils.BER)
                        : undefined,
                    JSON.stringify(value.searchOptions) ===
                    JSON.stringify(new Uint8ClampedArray([asn1.FALSE_BIT]))
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () => _encode_SearchControlOptions,
                              __utils.BER
                          )(value.searchOptions, __utils.BER)
                        : undefined,
                    value.hierarchyOptions
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              2,
                              () => _encode_HierarchySelections,
                              __utils.BER
                          )(value.hierarchyOptions, __utils.BER)
                        : undefined,
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

export class Mapping {
    constructor(
        readonly mappingFunction: asn1.OBJECT_IDENTIFIER,
        readonly level: asn1.INTEGER | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _decode_Mapping = function (el: asn1.ASN1Element): Mapping {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let mappingFunction!: asn1.OBJECT_IDENTIFIER;
    let level: asn1.OPTIONAL<asn1.INTEGER> = 0;
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
    return new Mapping /* SEQUENCE_CONSTRUCTOR_CALL */(
        mappingFunction,
        level,
        _unrecognizedExtensionsList
    );
};
export const _encode_Mapping = function (
    value: Mapping,
    elGetter: __utils.ASN1Encoder<Mapping>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    __utils._encodeObjectIdentifier(
                        value.mappingFunction,
                        __utils.BER
                    ),
                    value.level !== undefined &&
                    value.level !== 0 /* TODO: Review this condition. */
                        ? __utils._encodeInteger(value.level, __utils.BER)
                        : undefined,
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
export const _decode_MRSubstitution = function (
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
            oldMatchingRule = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
        },
        newMatchingRule: (_el: asn1.ASN1Element): void => {
            newMatchingRule = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
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
    return new MRSubstitution /* SEQUENCE_CONSTRUCTOR_CALL */(
        attribute,
        oldMatchingRule,
        newMatchingRule,
        _unrecognizedExtensionsList
    );
};
export const _encode_MRSubstitution = function (
    value: MRSubstitution,
    elGetter: __utils.ASN1Encoder<MRSubstitution>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    _encode_AttributeType(value.attribute, __utils.BER),
                    value.oldMatchingRule
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              0,
                              () => __utils._encodeObjectIdentifier,
                              __utils.BER
                          )(value.oldMatchingRule, __utils.BER)
                        : undefined,
                    value.newMatchingRule
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () => __utils._encodeObjectIdentifier,
                              __utils.BER
                          )(value.newMatchingRule, __utils.BER)
                        : undefined,
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
export const _decode_MRMapping = function (el: asn1.ASN1Element): MRMapping {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let mapping: asn1.OPTIONAL<Mapping[]>;
    let substitution: asn1.OPTIONAL<MRSubstitution[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        mapping: (_el: asn1.ASN1Element): void => {
            mapping = __utils._decode_explicit<Mapping[]>(() =>
                __utils._decodeSequenceOf<Mapping>(() => _decode_Mapping)
            )(_el);
        },
        substitution: (_el: asn1.ASN1Element): void => {
            substitution = __utils._decode_explicit<MRSubstitution[]>(() =>
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
    return new MRMapping /* SEQUENCE_CONSTRUCTOR_CALL */(
        mapping,
        substitution,
        _unrecognizedExtensionsList
    );
};
export const _encode_MRMapping = function (
    value: MRMapping,
    elGetter: __utils.ASN1Encoder<MRMapping>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    value.mapping
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              0,
                              () =>
                                  __utils._encodeSequenceOf<Mapping>(
                                      () => _encode_Mapping,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.mapping, __utils.BER)
                        : undefined,
                    value.substitution
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () =>
                                  __utils._encodeSequenceOf<MRSubstitution>(
                                      () => _encode_MRSubstitution,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.substitution, __utils.BER)
                        : undefined,
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

export class RelaxationPolicy {
    constructor(
        readonly basic: MRMapping | undefined,
        readonly tightenings: MRMapping[] | undefined,
        readonly relaxations: MRMapping[] | undefined,
        readonly maximum: asn1.INTEGER | undefined,
        readonly minimum: asn1.INTEGER | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
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
export const _decode_RelaxationPolicy = function (
    el: asn1.ASN1Element
): RelaxationPolicy {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let basic: asn1.OPTIONAL<MRMapping> = new MRMapping(undefined, undefined);
    let tightenings: asn1.OPTIONAL<MRMapping[]>;
    let relaxations: asn1.OPTIONAL<MRMapping[]>;
    let maximum: asn1.OPTIONAL<asn1.INTEGER>;
    let minimum: asn1.OPTIONAL<asn1.INTEGER> = 1;
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
                __utils._decodeSequenceOf<MRMapping>(() => _decode_MRMapping)
            )(_el);
        },
        relaxations: (_el: asn1.ASN1Element): void => {
            relaxations = __utils._decode_explicit<MRMapping[]>(() =>
                __utils._decodeSequenceOf<MRMapping>(() => _decode_MRMapping)
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
    return new RelaxationPolicy /* SEQUENCE_CONSTRUCTOR_CALL */(
        basic,
        tightenings,
        relaxations,
        maximum,
        minimum,
        _unrecognizedExtensionsList
    );
};
export const _encode_RelaxationPolicy = function (
    value: RelaxationPolicy,
    elGetter: __utils.ASN1Encoder<RelaxationPolicy>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    JSON.stringify(value.basic) ===
                    JSON.stringify(new MRMapping(undefined, undefined))
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              0,
                              () => _encode_MRMapping,
                              __utils.BER
                          )(value.basic, __utils.BER)
                        : undefined,
                    value.tightenings
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () =>
                                  __utils._encodeSequenceOf<MRMapping>(
                                      () => _encode_MRMapping,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.tightenings, __utils.BER)
                        : undefined,
                    value.relaxations
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              2,
                              () =>
                                  __utils._encodeSequenceOf<MRMapping>(
                                      () => _encode_MRMapping,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.relaxations, __utils.BER)
                        : undefined,
                    value.maximum
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              3,
                              () => __utils._encodeInteger,
                              __utils.BER
                          )(value.maximum, __utils.BER)
                        : undefined,
                    value.minimum !== undefined &&
                    value.minimum !== 1 /* TODO: Review this condition. */
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              4,
                              () => __utils._encodeInteger,
                              __utils.BER
                          )(value.minimum, __utils.BER)
                        : undefined,
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

export type AllowedSubset = asn1.BIT_STRING;
export const AllowedSubset_baseObject: number = 0; /* LONG_NAMED_BIT */
export const AllowedSubset_oneLevel: number = 1; /* LONG_NAMED_BIT */
export const AllowedSubset_wholeSubtree: number = 2; /* LONG_NAMED_BIT */
export const _decode_AllowedSubset = __utils._decodeBitString;
export const _encode_AllowedSubset = __utils._encodeBitString;

export type ImposedSubset = asn1.ENUMERATED;
export const ImposedSubset_baseObject: ImposedSubset = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const ImposedSubset_oneLevel: ImposedSubset = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const ImposedSubset_wholeSubtree: ImposedSubset = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const _decode_ImposedSubset = __utils._decodeEnumerated;
export const _encode_ImposedSubset = __utils._encodeEnumerated;

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
export const _decode_EntryLimit = function (el: asn1.ASN1Element): EntryLimit {
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
export const _encode_EntryLimit = function (
    value: EntryLimit,
    elGetter: __utils.ASN1Encoder<EntryLimit>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    __utils._encodeInteger(value.default_, __utils.BER),
                    __utils._encodeInteger(value.max, __utils.BER),
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
export const _decode_SearchRule = function (el: asn1.ASN1Element): SearchRule {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let id!: asn1.INTEGER;
    let dmdId!: asn1.OBJECT_IDENTIFIER;
    let serviceType: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let userClass: asn1.OPTIONAL<asn1.INTEGER>;
    let inputAttributeTypes: asn1.OPTIONAL<RequestAttribute[]>;
    let attributeCombination: asn1.OPTIONAL<AttributeCombination> = { and: [] };
    let outputAttributeTypes: asn1.OPTIONAL<ResultAttribute[]>;
    let defaultControls: asn1.OPTIONAL<ControlOptions>;
    let mandatoryControls: asn1.OPTIONAL<ControlOptions>;
    let searchRuleControls: asn1.OPTIONAL<ControlOptions>;
    let familyGrouping: asn1.OPTIONAL<FamilyGrouping>;
    let familyReturn: asn1.OPTIONAL<FamilyReturn>;
    let relaxation: asn1.OPTIONAL<RelaxationPolicy>;
    let additionalControl: asn1.OPTIONAL<AttributeType[]>;
    let allowedSubset: asn1.OPTIONAL<AllowedSubset> = new Uint8ClampedArray([
        1,
        1,
        1,
    ]);
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
            serviceType = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
        },
        userClass: (_el: asn1.ASN1Element): void => {
            userClass = __utils._decode_explicit<asn1.INTEGER>(
                () => __utils._decodeInteger
            )(_el);
        },
        inputAttributeTypes: (_el: asn1.ASN1Element): void => {
            inputAttributeTypes = __utils._decode_explicit<RequestAttribute[]>(
                () =>
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
            outputAttributeTypes = __utils._decode_explicit<ResultAttribute[]>(
                () =>
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
            mandatoryControls = __utils._decode_explicit<ControlOptions>(
                () => _decode_ControlOptions
            )(_el);
        },
        searchRuleControls: (_el: asn1.ASN1Element): void => {
            searchRuleControls = __utils._decode_explicit<ControlOptions>(
                () => _decode_ControlOptions
            )(_el);
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
            additionalControl = __utils._decode_explicit<AttributeType[]>(() =>
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
    return new SearchRule /* SEQUENCE_CONSTRUCTOR_CALL */(
        id,
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
export const _encode_SearchRule = function (
    value: SearchRule,
    elGetter: __utils.ASN1Encoder<SearchRule>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    __utils._encodeInteger(value.id, __utils.BER),
                    __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        0,
                        () => __utils._encodeObjectIdentifier,
                        __utils.BER
                    )(value.dmdId, __utils.BER),
                    value.serviceType
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () => __utils._encodeObjectIdentifier,
                              __utils.BER
                          )(value.serviceType, __utils.BER)
                        : undefined,
                    value.userClass
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              2,
                              () => __utils._encodeInteger,
                              __utils.BER
                          )(value.userClass, __utils.BER)
                        : undefined,
                    value.inputAttributeTypes
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              3,
                              () =>
                                  __utils._encodeSequenceOf<RequestAttribute>(
                                      () => _encode_RequestAttribute,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.inputAttributeTypes, __utils.BER)
                        : undefined,
                    JSON.stringify(value.attributeCombination) ===
                    JSON.stringify({ and: [] })
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              4,
                              () => _encode_AttributeCombination,
                              __utils.BER
                          )(value.attributeCombination, __utils.BER)
                        : undefined,
                    value.outputAttributeTypes
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              5,
                              () =>
                                  __utils._encodeSequenceOf<ResultAttribute>(
                                      () => _encode_ResultAttribute,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.outputAttributeTypes, __utils.BER)
                        : undefined,
                    value.defaultControls
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              6,
                              () => _encode_ControlOptions,
                              __utils.BER
                          )(value.defaultControls, __utils.BER)
                        : undefined,
                    value.mandatoryControls
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              7,
                              () => _encode_ControlOptions,
                              __utils.BER
                          )(value.mandatoryControls, __utils.BER)
                        : undefined,
                    value.searchRuleControls
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              8,
                              () => _encode_ControlOptions,
                              __utils.BER
                          )(value.searchRuleControls, __utils.BER)
                        : undefined,
                    value.familyGrouping
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              9,
                              () => _encode_FamilyGrouping,
                              __utils.BER
                          )(value.familyGrouping, __utils.BER)
                        : undefined,
                    value.familyReturn
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              10,
                              () => _encode_FamilyReturn,
                              __utils.BER
                          )(value.familyReturn, __utils.BER)
                        : undefined,
                    value.relaxation
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              11,
                              () => _encode_RelaxationPolicy,
                              __utils.BER
                          )(value.relaxation, __utils.BER)
                        : undefined,
                    value.additionalControl
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              12,
                              () =>
                                  __utils._encodeSequenceOf<AttributeType>(
                                      () => _encode_AttributeType,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.additionalControl, __utils.BER)
                        : undefined,
                    value.allowedSubset !== undefined &&
                    value.allowedSubset !==
                        new Uint8ClampedArray([
                            1,
                            1,
                            1,
                        ]) /* TODO: Review this condition. */
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              13,
                              () => _encode_AllowedSubset,
                              __utils.BER
                          )(value.allowedSubset, __utils.BER)
                        : undefined,
                    value.imposedSubset
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              14,
                              () => _encode_ImposedSubset,
                              __utils.BER
                          )(value.imposedSubset, __utils.BER)
                        : undefined,
                    value.entryLimit
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              15,
                              () => _encode_EntryLimit,
                              __utils.BER
                          )(value.entryLimit, __utils.BER)
                        : undefined,
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
export const _decode_SearchRuleId = function (
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
export const _encode_SearchRuleId = function (
    value: SearchRuleId,
    elGetter: __utils.ASN1Encoder<SearchRuleId>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat([
                __utils._encodeInteger(value.id, __utils.BER),
                __utils._encode_explicit(
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

// TODO: ObjectSetAssignment: SupportedMatchingRestrictions

// TODO: ObjectClassAssignment: REQUEST-ATTRIBUTE

// TODO: ObjectClassAssignment: RESULT-ATTRIBUTE

// TODO: ObjectClassAssignment: SEARCH-RULE

// TODO: ObjectClassAssignment: MATCHING-RESTRICTION

/* END_MODULE ServiceAdministration */
