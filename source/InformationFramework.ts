/*
    BEGIN_MODULE InformationFramework
    OID: joint-iso-itu-t.ds.module.informationFramework.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
import {
    AllowedSubset,
    AttributeCombination,
    ControlOptions,
    EntryLimit,
    FamilyGrouping,
    FamilyReturn,
    ImposedSubset,
    RelaxationPolicy,
    RequestAttribute,
    ResultAttribute,
    _decode_AllowedSubset,
    _decode_AttributeCombination,
    _decode_ControlOptions,
    _decode_EntryLimit,
    _decode_FamilyGrouping,
    _decode_FamilyReturn,
    _decode_ImposedSubset,
    _decode_RelaxationPolicy,
    _decode_RequestAttribute,
    _decode_ResultAttribute,
    _encode_AllowedSubset,
    _encode_AttributeCombination,
    _encode_ControlOptions,
    _encode_EntryLimit,
    _encode_FamilyGrouping,
    _encode_FamilyReturn,
    _encode_ImposedSubset,
    _encode_RelaxationPolicy,
    _encode_RequestAttribute,
    _encode_ResultAttribute,
} from "./ServiceAdministration";
import {
    id_ar,
    id_at,
    id_mr,
    id_nf,
    id_oa,
    id_oc,
    id_sc,
} from "./UsefulDefinitions";
import * as __utils from "./__utils";
export {
    TypeAndContextAssertion,
    _decode_TypeAndContextAssertion,
    _encode_TypeAndContextAssertion,
} from "./DirectoryAbstractService";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
export {
    RequestAttribute,
    ResultAttribute,
    SearchRule,
    _decode_RequestAttribute,
    _decode_ResultAttribute,
    _decode_SearchRule,
    _encode_RequestAttribute,
    _encode_ResultAttribute,
    _encode_SearchRule,
} from "./ServiceAdministration";
export {
    directoryAbstractService,
    id_ar,
    id_at,
    id_mr,
    id_nf,
    id_oa,
    id_oc,
    id_sc,
    selectedAttributeTypes,
    serviceAdministration,
} from "./UsefulDefinitions";

// TODO: ObjectClassAssignment: MATCHING-RULE

export type AttributeUsage = asn1.ENUMERATED;
export const AttributeUsage_userApplications: AttributeUsage = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const userApplications: AttributeUsage = AttributeUsage_userApplications; /* SHORT_NAMED_ENUMERATED_VALUE */
export const AttributeUsage_directoryOperation: AttributeUsage = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const directoryOperation: AttributeUsage = AttributeUsage_directoryOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const AttributeUsage_distributedOperation: AttributeUsage = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const distributedOperation: AttributeUsage = AttributeUsage_distributedOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const AttributeUsage_dSAOperation: AttributeUsage = 3; /* LONG_NAMED_ENUMERATED_VALUE */
export const dSAOperation: AttributeUsage = AttributeUsage_dSAOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_AttributeUsage: __utils.ASN1Decoder<
    AttributeUsage
> | null = null;
let _cached_encoder_for_AttributeUsage: __utils.ASN1Encoder<
    AttributeUsage
> | null = null;
export function _decode_AttributeUsage(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeUsage) {
        _cached_decoder_for_AttributeUsage = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_AttributeUsage(el);
}
export function _encode_AttributeUsage(
    value: AttributeUsage,
    elGetter: __utils.ASN1Encoder<AttributeUsage>
) {
    if (!_cached_encoder_for_AttributeUsage) {
        _cached_encoder_for_AttributeUsage = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_AttributeUsage(value, elGetter);
}

// TODO: ObjectClassAssignment: ATTRIBUTE

export class Context {
    constructor(
        readonly contextType: asn1.OBJECT_IDENTIFIER,
        readonly contextValues: asn1.ASN1Element[],
        readonly fallback: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_fallback() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_Context: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "contextType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contextValues",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "fallback",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Context: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Context: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Context: __utils.ASN1Decoder<Context> | null = null;
let _cached_encoder_for_Context: __utils.ASN1Encoder<Context> | null = null;
export function _decode_Context(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Context) {
        _cached_decoder_for_Context = function (el: asn1.ASN1Element): Context {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let contextType!: asn1.OBJECT_IDENTIFIER;
            let contextValues!: asn1.ASN1Element[];
            let fallback: asn1.OPTIONAL<asn1.BOOLEAN> =
                Context._default_value_for_fallback;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                contextType: (_el: asn1.ASN1Element): void => {
                    contextType = __utils._decodeObjectIdentifier(_el);
                },
                contextValues: (_el: asn1.ASN1Element): void => {
                    contextValues = __utils._decodeSetOf<asn1.ASN1Element>(
                        () => __utils._decodeAny
                    )(_el);
                },
                fallback: (_el: asn1.ASN1Element): void => {
                    fallback = __utils._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Context,
                _extension_additions_list_spec_for_Context,
                _root_component_type_list_2_spec_for_Context,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Context(
                /* SEQUENCE_CONSTRUCTOR_CALL */ contextType,
                contextValues,
                fallback,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Context(el);
}
export function _encode_Context(
    value: Context,
    elGetter: __utils.ASN1Encoder<Context>
) {
    if (!_cached_encoder_for_Context) {
        _cached_encoder_for_Context = function (
            value: Context,
            elGetter: __utils.ASN1Encoder<Context>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.contextType,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeSetOf<
                                asn1.ASN1Element
                            >(() => __utils._encodeAny, __utils.BER)(
                                value.contextValues,
                                __utils.BER
                            ),
                            /* IF_DEFAULT */ value.fallback === undefined ||
                            __utils.deepEq(
                                value.fallback,
                                Context._default_value_for_fallback
                            )
                                ? undefined
                                : __utils._encodeBoolean(
                                      value.fallback,
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
    return _cached_encoder_for_Context(value, elGetter);
}

export class Attribute_valuesWithContext_Item {
    constructor(
        readonly value: asn1.ASN1Element,
        readonly contextList: Context[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_Attribute_valuesWithContext_Item: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "value",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contextList",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Attribute_valuesWithContext_Item: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Attribute_valuesWithContext_Item: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Attribute_valuesWithContext_Item: __utils.ASN1Decoder<
    Attribute_valuesWithContext_Item
> | null = null;
let _cached_encoder_for_Attribute_valuesWithContext_Item: __utils.ASN1Encoder<
    Attribute_valuesWithContext_Item
> | null = null;
export function _decode_Attribute_valuesWithContext_Item(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Attribute_valuesWithContext_Item) {
        _cached_decoder_for_Attribute_valuesWithContext_Item = function (
            el: asn1.ASN1Element
        ): Attribute_valuesWithContext_Item {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "Attribute-valuesWithContext-Item contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "value";
            sequence[1].name = "contextList";
            let value!: asn1.ASN1Element;
            let contextList!: Context[];
            value = __utils._decodeAny(sequence[0]);
            contextList = __utils._decodeSetOf<Context>(() => _decode_Context)(
                sequence[1]
            );
            // TODO: Validate values.
            return new Attribute_valuesWithContext_Item(
                value,
                contextList,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_Attribute_valuesWithContext_Item(el);
}
export function _encode_Attribute_valuesWithContext_Item(
    value: Attribute_valuesWithContext_Item,
    elGetter: __utils.ASN1Encoder<Attribute_valuesWithContext_Item>
) {
    if (!_cached_encoder_for_Attribute_valuesWithContext_Item) {
        _cached_encoder_for_Attribute_valuesWithContext_Item = function (
            value: Attribute_valuesWithContext_Item,
            elGetter: __utils.ASN1Encoder<Attribute_valuesWithContext_Item>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeAny(
                                value.value,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeSetOf<Context>(
                                () => _encode_Context,
                                __utils.BER
                            )(value.contextList, __utils.BER),
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
    return _cached_encoder_for_Attribute_valuesWithContext_Item(
        value,
        elGetter
    );
}

export class Attribute {
    constructor(
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly values: asn1.ASN1Element[],
        readonly valuesWithContext:
            | Attribute_valuesWithContext_Item[]
            | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_Attribute: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "values",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "valuesWithContext",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Attribute: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Attribute: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Attribute: __utils.ASN1Decoder<Attribute> | null = null;
let _cached_encoder_for_Attribute: __utils.ASN1Encoder<Attribute> | null = null;
export function _decode_Attribute(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Attribute) {
        _cached_decoder_for_Attribute = function (
            el: asn1.ASN1Element
        ): Attribute {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let type_!: asn1.OBJECT_IDENTIFIER;
            let values!: asn1.ASN1Element[];
            let valuesWithContext: asn1.OPTIONAL<
                Attribute_valuesWithContext_Item[]
            >;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                type: (_el: asn1.ASN1Element): void => {
                    type_ = __utils._decodeObjectIdentifier(_el);
                },
                values: (_el: asn1.ASN1Element): void => {
                    values = __utils._decodeSetOf<asn1.ASN1Element>(
                        () => __utils._decodeAny
                    )(_el);
                },
                valuesWithContext: (_el: asn1.ASN1Element): void => {
                    valuesWithContext = __utils._decodeSetOf<
                        Attribute_valuesWithContext_Item
                    >(() => _decode_Attribute_valuesWithContext_Item)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Attribute,
                _extension_additions_list_spec_for_Attribute,
                _root_component_type_list_2_spec_for_Attribute,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Attribute(
                /* SEQUENCE_CONSTRUCTOR_CALL */ type_,
                values,
                valuesWithContext,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Attribute(el);
}
export function _encode_Attribute(
    value: Attribute,
    elGetter: __utils.ASN1Encoder<Attribute>
) {
    if (!_cached_encoder_for_Attribute) {
        _cached_encoder_for_Attribute = function (
            value: Attribute,
            elGetter: __utils.ASN1Encoder<Attribute>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.type_,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeSetOf<
                                asn1.ASN1Element
                            >(() => __utils._encodeAny, __utils.BER)(
                                value.values,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.valuesWithContext ===
                            undefined
                                ? undefined
                                : __utils._encodeSetOf<
                                      Attribute_valuesWithContext_Item
                                  >(
                                      () =>
                                          _encode_Attribute_valuesWithContext_Item,
                                      __utils.BER
                                  )(value.valuesWithContext, __utils.BER),
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
    return _cached_encoder_for_Attribute(value, elGetter);
}

export type AttributeType = asn1.OBJECT_IDENTIFIER; // ObjectClassFieldType
let _cached_decoder_for_AttributeType: __utils.ASN1Decoder<
    AttributeType
> | null = null;
let _cached_encoder_for_AttributeType: __utils.ASN1Encoder<
    AttributeType
> | null = null;
export function _decode_AttributeType(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeType) {
        _cached_decoder_for_AttributeType = __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_AttributeType(el);
}
export function _encode_AttributeType(
    value: AttributeType,
    elGetter: __utils.ASN1Encoder<AttributeType>
) {
    if (!_cached_encoder_for_AttributeType) {
        _cached_encoder_for_AttributeType = __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_AttributeType(value, elGetter);
}

export type AttributeValue = asn1.ASN1Element; // ObjectClassFieldType
let _cached_decoder_for_AttributeValue: __utils.ASN1Decoder<
    AttributeValue
> | null = null;
let _cached_encoder_for_AttributeValue: __utils.ASN1Encoder<
    AttributeValue
> | null = null;
export function _decode_AttributeValue(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeValue) {
        _cached_decoder_for_AttributeValue = __utils._decodeAny;
    }
    return _cached_decoder_for_AttributeValue(el);
}
export function _encode_AttributeValue(
    value: AttributeValue,
    elGetter: __utils.ASN1Encoder<AttributeValue>
) {
    if (!_cached_encoder_for_AttributeValue) {
        _cached_encoder_for_AttributeValue = __utils._encodeAny;
    }
    return _cached_encoder_for_AttributeValue(value, elGetter);
}

export class ContextAssertion {
    constructor(
        readonly contextType: asn1.OBJECT_IDENTIFIER,
        readonly contextValues: asn1.ASN1Element[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ContextAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "contextType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contextValues",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ContextAssertion: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ContextAssertion: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ContextAssertion: __utils.ASN1Decoder<
    ContextAssertion
> | null = null;
let _cached_encoder_for_ContextAssertion: __utils.ASN1Encoder<
    ContextAssertion
> | null = null;
export function _decode_ContextAssertion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ContextAssertion) {
        _cached_decoder_for_ContextAssertion = function (
            el: asn1.ASN1Element
        ): ContextAssertion {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ContextAssertion contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "contextType";
            sequence[1].name = "contextValues";
            let contextType!: asn1.OBJECT_IDENTIFIER;
            let contextValues!: asn1.ASN1Element[];
            contextType = __utils._decodeObjectIdentifier(sequence[0]);
            contextValues = __utils._decodeSetOf<asn1.ASN1Element>(
                () => __utils._decodeAny
            )(sequence[1]);
            // TODO: Validate values.
            return new ContextAssertion(
                contextType,
                contextValues,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_ContextAssertion(el);
}
export function _encode_ContextAssertion(
    value: ContextAssertion,
    elGetter: __utils.ASN1Encoder<ContextAssertion>
) {
    if (!_cached_encoder_for_ContextAssertion) {
        _cached_encoder_for_ContextAssertion = function (
            value: ContextAssertion,
            elGetter: __utils.ASN1Encoder<ContextAssertion>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.contextType,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeSetOf<
                                asn1.ASN1Element
                            >(() => __utils._encodeAny, __utils.BER)(
                                value.contextValues,
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
    return _cached_encoder_for_ContextAssertion(value, elGetter);
}

export type AttributeValueAssertion_assertedContexts =
    | { allContexts: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { selectedContexts: ContextAssertion[] } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_AttributeValueAssertion_assertedContexts: __utils.ASN1Decoder<
    AttributeValueAssertion_assertedContexts
> | null = null;
let _cached_encoder_for_AttributeValueAssertion_assertedContexts: __utils.ASN1Encoder<
    AttributeValueAssertion_assertedContexts
> | null = null;
export function _decode_AttributeValueAssertion_assertedContexts(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_AttributeValueAssertion_assertedContexts) {
        _cached_decoder_for_AttributeValueAssertion_assertedContexts = __utils._decode_inextensible_choice<
            AttributeValueAssertion_assertedContexts
        >({
            "CONTEXT 0": [
                "allContexts",
                __utils._decode_explicit<asn1.NULL>(() => __utils._decodeNull),
            ],
            "CONTEXT 1": [
                "selectedContexts",
                __utils._decode_explicit<ContextAssertion[]>(() =>
                    __utils._decodeSetOf<ContextAssertion>(
                        () => _decode_ContextAssertion
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_AttributeValueAssertion_assertedContexts(el);
}
export function _encode_AttributeValueAssertion_assertedContexts(
    value: AttributeValueAssertion_assertedContexts,
    elGetter: __utils.ASN1Encoder<AttributeValueAssertion_assertedContexts>
) {
    if (!_cached_encoder_for_AttributeValueAssertion_assertedContexts) {
        _cached_encoder_for_AttributeValueAssertion_assertedContexts = __utils._encode_choice<
            AttributeValueAssertion_assertedContexts
        >(
            {
                allContexts: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeNull,
                    __utils.BER
                ),
                selectedContexts: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () =>
                        __utils._encodeSetOf<ContextAssertion>(
                            () => _encode_ContextAssertion,
                            __utils.BER
                        ),
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_AttributeValueAssertion_assertedContexts(
        value,
        elGetter
    );
}

export class AttributeValueAssertion {
    constructor(
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly assertion: asn1.ASN1Element,
        readonly assertedContexts:
            | AttributeValueAssertion_assertedContexts
            | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeValueAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "assertion",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "assertedContexts",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AttributeValueAssertion: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AttributeValueAssertion: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AttributeValueAssertion: __utils.ASN1Decoder<
    AttributeValueAssertion
> | null = null;
let _cached_encoder_for_AttributeValueAssertion: __utils.ASN1Encoder<
    AttributeValueAssertion
> | null = null;
export function _decode_AttributeValueAssertion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeValueAssertion) {
        _cached_decoder_for_AttributeValueAssertion = function (
            el: asn1.ASN1Element
        ): AttributeValueAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let type_!: asn1.OBJECT_IDENTIFIER;
            let assertion!: asn1.ASN1Element;
            let assertedContexts: asn1.OPTIONAL<AttributeValueAssertion_assertedContexts>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                type: (_el: asn1.ASN1Element): void => {
                    type_ = __utils._decodeObjectIdentifier(_el);
                },
                assertion: (_el: asn1.ASN1Element): void => {
                    assertion = __utils._decodeAny(_el);
                },
                assertedContexts: (_el: asn1.ASN1Element): void => {
                    assertedContexts = _decode_AttributeValueAssertion_assertedContexts(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeValueAssertion,
                _extension_additions_list_spec_for_AttributeValueAssertion,
                _root_component_type_list_2_spec_for_AttributeValueAssertion,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeValueAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ type_,
                assertion,
                assertedContexts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeValueAssertion(el);
}
export function _encode_AttributeValueAssertion(
    value: AttributeValueAssertion,
    elGetter: __utils.ASN1Encoder<AttributeValueAssertion>
) {
    if (!_cached_encoder_for_AttributeValueAssertion) {
        _cached_encoder_for_AttributeValueAssertion = function (
            value: AttributeValueAssertion,
            elGetter: __utils.ASN1Encoder<AttributeValueAssertion>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.type_,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeAny(
                                value.assertion,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.assertedContexts ===
                            undefined
                                ? undefined
                                : _encode_AttributeValueAssertion_assertedContexts(
                                      value.assertedContexts,
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
    return _cached_encoder_for_AttributeValueAssertion(value, elGetter);
}

export class AttributeTypeAssertion {
    constructor(
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly assertedContexts: ContextAssertion[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeTypeAssertion: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "assertedContexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AttributeTypeAssertion: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AttributeTypeAssertion: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AttributeTypeAssertion: __utils.ASN1Decoder<
    AttributeTypeAssertion
> | null = null;
let _cached_encoder_for_AttributeTypeAssertion: __utils.ASN1Encoder<
    AttributeTypeAssertion
> | null = null;
export function _decode_AttributeTypeAssertion(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeTypeAssertion) {
        _cached_decoder_for_AttributeTypeAssertion = function (
            el: asn1.ASN1Element
        ): AttributeTypeAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let type_!: asn1.OBJECT_IDENTIFIER;
            let assertedContexts: asn1.OPTIONAL<ContextAssertion[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                type: (_el: asn1.ASN1Element): void => {
                    type_ = __utils._decodeObjectIdentifier(_el);
                },
                assertedContexts: (_el: asn1.ASN1Element): void => {
                    assertedContexts = __utils._decodeSequenceOf<
                        ContextAssertion
                    >(() => _decode_ContextAssertion)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AttributeTypeAssertion,
                _extension_additions_list_spec_for_AttributeTypeAssertion,
                _root_component_type_list_2_spec_for_AttributeTypeAssertion,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AttributeTypeAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ type_,
                assertedContexts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AttributeTypeAssertion(el);
}
export function _encode_AttributeTypeAssertion(
    value: AttributeTypeAssertion,
    elGetter: __utils.ASN1Encoder<AttributeTypeAssertion>
) {
    if (!_cached_encoder_for_AttributeTypeAssertion) {
        _cached_encoder_for_AttributeTypeAssertion = function (
            value: AttributeTypeAssertion,
            elGetter: __utils.ASN1Encoder<AttributeTypeAssertion>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.type_,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.assertedContexts ===
                            undefined
                                ? undefined
                                : __utils._encodeSequenceOf<ContextAssertion>(
                                      () => _encode_ContextAssertion,
                                      __utils.BER
                                  )(value.assertedContexts, __utils.BER),
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
    return _cached_encoder_for_AttributeTypeAssertion(value, elGetter);
}

// TODO: ObjectSetAssignment: SupportedAttributes

// TODO: ObjectSetAssignment: SupportedContexts

export class AttributeTypeAndValue {
    constructor(
        readonly type_: asn1.OBJECT_IDENTIFIER,
        readonly value: asn1.ASN1Element,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeTypeAndValue: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "value",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AttributeTypeAndValue: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AttributeTypeAndValue: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AttributeTypeAndValue: __utils.ASN1Decoder<
    AttributeTypeAndValue
> | null = null;
let _cached_encoder_for_AttributeTypeAndValue: __utils.ASN1Encoder<
    AttributeTypeAndValue
> | null = null;
export function _decode_AttributeTypeAndValue(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeTypeAndValue) {
        _cached_decoder_for_AttributeTypeAndValue = function (
            el: asn1.ASN1Element
        ): AttributeTypeAndValue {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "AttributeTypeAndValue contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "type";
            sequence[1].name = "value";
            let type_!: asn1.OBJECT_IDENTIFIER;
            let value!: asn1.ASN1Element;
            type_ = __utils._decodeObjectIdentifier(sequence[0]);
            value = __utils._decodeAny(sequence[1]);
            // TODO: Validate values.
            return new AttributeTypeAndValue(type_, value, sequence.slice(2));
        };
    }
    return _cached_decoder_for_AttributeTypeAndValue(el);
}
export function _encode_AttributeTypeAndValue(
    value: AttributeTypeAndValue,
    elGetter: __utils.ASN1Encoder<AttributeTypeAndValue>
) {
    if (!_cached_encoder_for_AttributeTypeAndValue) {
        _cached_encoder_for_AttributeTypeAndValue = function (
            value: AttributeTypeAndValue,
            elGetter: __utils.ASN1Encoder<AttributeTypeAndValue>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.type_,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeAny(
                                value.value,
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
    return _cached_encoder_for_AttributeTypeAndValue(value, elGetter);
}

export type RelativeDistinguishedName = AttributeTypeAndValue[]; // SetOfType
let _cached_decoder_for_RelativeDistinguishedName: __utils.ASN1Decoder<
    RelativeDistinguishedName
> | null = null;
let _cached_encoder_for_RelativeDistinguishedName: __utils.ASN1Encoder<
    RelativeDistinguishedName
> | null = null;
export function _decode_RelativeDistinguishedName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RelativeDistinguishedName) {
        _cached_decoder_for_RelativeDistinguishedName = __utils._decodeSetOf<
            AttributeTypeAndValue
        >(() => _decode_AttributeTypeAndValue);
    }
    return _cached_decoder_for_RelativeDistinguishedName(el);
}
export function _encode_RelativeDistinguishedName(
    value: RelativeDistinguishedName,
    elGetter: __utils.ASN1Encoder<RelativeDistinguishedName>
) {
    if (!_cached_encoder_for_RelativeDistinguishedName) {
        _cached_encoder_for_RelativeDistinguishedName = __utils._encodeSetOf<
            AttributeTypeAndValue
        >(() => _encode_AttributeTypeAndValue, __utils.BER);
    }
    return _cached_encoder_for_RelativeDistinguishedName(value, elGetter);
}

export type RDNSequence = RelativeDistinguishedName[]; // SequenceOfType
let _cached_decoder_for_RDNSequence: __utils.ASN1Decoder<
    RDNSequence
> | null = null;
let _cached_encoder_for_RDNSequence: __utils.ASN1Encoder<
    RDNSequence
> | null = null;
export function _decode_RDNSequence(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RDNSequence) {
        _cached_decoder_for_RDNSequence = __utils._decodeSequenceOf<
            RelativeDistinguishedName
        >(() => _decode_RelativeDistinguishedName);
    }
    return _cached_decoder_for_RDNSequence(el);
}
export function _encode_RDNSequence(
    value: RDNSequence,
    elGetter: __utils.ASN1Encoder<RDNSequence>
) {
    if (!_cached_encoder_for_RDNSequence) {
        _cached_encoder_for_RDNSequence = __utils._encodeSequenceOf<
            RelativeDistinguishedName
        >(() => _encode_RelativeDistinguishedName, __utils.BER);
    }
    return _cached_encoder_for_RDNSequence(value, elGetter);
}

export type Name = { rdnSequence: RDNSequence } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_Name: __utils.ASN1Decoder<Name> | null = null;
let _cached_encoder_for_Name: __utils.ASN1Encoder<Name> | null = null;
export function _decode_Name(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Name) {
        _cached_decoder_for_Name = __utils._decode_inextensible_choice<Name>({
            "UNIVERSAL 16": ["rdnSequence", _decode_RDNSequence],
        });
    }
    return _cached_decoder_for_Name(el);
}
export function _encode_Name(value: Name, elGetter: __utils.ASN1Encoder<Name>) {
    if (!_cached_encoder_for_Name) {
        _cached_encoder_for_Name = __utils._encode_choice<Name>(
            {
                rdnSequence: _encode_RDNSequence,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_Name(value, elGetter);
}

export type DistinguishedName = RDNSequence; // DefinedType
let _cached_decoder_for_DistinguishedName: __utils.ASN1Decoder<
    DistinguishedName
> | null = null;
let _cached_encoder_for_DistinguishedName: __utils.ASN1Encoder<
    DistinguishedName
> | null = null;
export function _decode_DistinguishedName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DistinguishedName) {
        _cached_decoder_for_DistinguishedName = _decode_RDNSequence;
    }
    return _cached_decoder_for_DistinguishedName(el);
}
export function _encode_DistinguishedName(
    value: DistinguishedName,
    elGetter: __utils.ASN1Encoder<DistinguishedName>
) {
    if (!_cached_encoder_for_DistinguishedName) {
        _cached_encoder_for_DistinguishedName = _encode_RDNSequence;
    }
    return _cached_encoder_for_DistinguishedName(value, elGetter);
}

export type LocalName = RDNSequence; // DefinedType
let _cached_decoder_for_LocalName: __utils.ASN1Decoder<LocalName> | null = null;
let _cached_encoder_for_LocalName: __utils.ASN1Encoder<LocalName> | null = null;
export function _decode_LocalName(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_LocalName) {
        _cached_decoder_for_LocalName = _decode_RDNSequence;
    }
    return _cached_decoder_for_LocalName(el);
}
export function _encode_LocalName(
    value: LocalName,
    elGetter: __utils.ASN1Encoder<LocalName>
) {
    if (!_cached_encoder_for_LocalName) {
        _cached_encoder_for_LocalName = _encode_RDNSequence;
    }
    return _cached_encoder_for_LocalName(value, elGetter);
}

export type ChopSpecification_specificExclusions_Item =
    | { chopBefore: LocalName } /* CHOICE_ALT_ROOT */
    | { chopAfter: LocalName } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ChopSpecification_specificExclusions_Item: __utils.ASN1Decoder<
    ChopSpecification_specificExclusions_Item
> | null = null;
let _cached_encoder_for_ChopSpecification_specificExclusions_Item: __utils.ASN1Encoder<
    ChopSpecification_specificExclusions_Item
> | null = null;
export function _decode_ChopSpecification_specificExclusions_Item(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_ChopSpecification_specificExclusions_Item) {
        _cached_decoder_for_ChopSpecification_specificExclusions_Item = __utils._decode_extensible_choice<
            ChopSpecification_specificExclusions_Item
        >({
            "CONTEXT 0": [
                "chopBefore",
                __utils._decode_explicit<LocalName>(() => _decode_LocalName),
            ],
            "CONTEXT 1": [
                "chopAfter",
                __utils._decode_explicit<LocalName>(() => _decode_LocalName),
            ],
        });
    }
    return _cached_decoder_for_ChopSpecification_specificExclusions_Item(el);
}
export function _encode_ChopSpecification_specificExclusions_Item(
    value: ChopSpecification_specificExclusions_Item,
    elGetter: __utils.ASN1Encoder<ChopSpecification_specificExclusions_Item>
) {
    if (!_cached_encoder_for_ChopSpecification_specificExclusions_Item) {
        _cached_encoder_for_ChopSpecification_specificExclusions_Item = __utils._encode_choice<
            ChopSpecification_specificExclusions_Item
        >(
            {
                chopBefore: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_LocalName,
                    __utils.BER
                ),
                chopAfter: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_LocalName,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ChopSpecification_specificExclusions_Item(
        value,
        elGetter
    );
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

export class ChopSpecification {
    constructor(
        readonly specificExclusions:
            | ChopSpecification_specificExclusions_Item[]
            | undefined,
        readonly minimum: BaseDistance | undefined,
        readonly maximum: BaseDistance | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_minimum() {
        return 0;
    }
}
export const _root_component_type_list_1_spec_for_ChopSpecification: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "specificExclusions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "minimum",
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
];
export const _root_component_type_list_2_spec_for_ChopSpecification: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ChopSpecification: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ChopSpecification: __utils.ASN1Decoder<
    ChopSpecification
> | null = null;
let _cached_encoder_for_ChopSpecification: __utils.ASN1Encoder<
    ChopSpecification
> | null = null;
export function _decode_ChopSpecification(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ChopSpecification) {
        _cached_decoder_for_ChopSpecification = function (
            el: asn1.ASN1Element
        ): ChopSpecification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let specificExclusions: asn1.OPTIONAL<
                ChopSpecification_specificExclusions_Item[]
            >;
            let minimum: asn1.OPTIONAL<BaseDistance> =
                ChopSpecification._default_value_for_minimum;
            let maximum: asn1.OPTIONAL<BaseDistance>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                specificExclusions: (_el: asn1.ASN1Element): void => {
                    specificExclusions = __utils._decode_explicit<
                        ChopSpecification_specificExclusions_Item[]
                    >(() =>
                        __utils._decodeSetOf<
                            ChopSpecification_specificExclusions_Item
                        >(
                            () =>
                                _decode_ChopSpecification_specificExclusions_Item
                        )
                    )(_el);
                },
                minimum: (_el: asn1.ASN1Element): void => {
                    minimum = __utils._decode_explicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
                maximum: (_el: asn1.ASN1Element): void => {
                    maximum = __utils._decode_explicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ChopSpecification,
                _extension_additions_list_spec_for_ChopSpecification,
                _root_component_type_list_2_spec_for_ChopSpecification,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ChopSpecification(
                /* SEQUENCE_CONSTRUCTOR_CALL */ specificExclusions,
                minimum,
                maximum,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ChopSpecification(el);
}
export function _encode_ChopSpecification(
    value: ChopSpecification,
    elGetter: __utils.ASN1Encoder<ChopSpecification>
) {
    if (!_cached_encoder_for_ChopSpecification) {
        _cached_encoder_for_ChopSpecification = function (
            value: ChopSpecification,
            elGetter: __utils.ASN1Encoder<ChopSpecification>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.specificExclusions ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () =>
                                          __utils._encodeSetOf<
                                              ChopSpecification_specificExclusions_Item
                                          >(
                                              () =>
                                                  _encode_ChopSpecification_specificExclusions_Item,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.specificExclusions, __utils.BER),
                            /* IF_DEFAULT */ value.minimum === undefined ||
                            __utils.deepEq(
                                value.minimum,
                                ChopSpecification._default_value_for_minimum
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_BaseDistance,
                                      __utils.BER
                                  )(value.minimum, __utils.BER),
                            /* IF_ABSENT  */ value.maximum === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
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
    return _cached_encoder_for_ChopSpecification(value, elGetter);
}

/* TODO: CHECK_RECURSIVE_DEFINITION */
export type Refinement =
    | { item: asn1.OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { and: Refinement[] } /* CHOICE_ALT_ROOT */
    | { or: Refinement[] } /* CHOICE_ALT_ROOT */
    | { not: Refinement } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_Refinement: __utils.ASN1Decoder<
    Refinement
> | null = null;
let _cached_encoder_for_Refinement: __utils.ASN1Encoder<
    Refinement
> | null = null;
export function _decode_Refinement(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Refinement) {
        _cached_decoder_for_Refinement = __utils._decode_extensible_choice<
            Refinement
        >({
            "CONTEXT 0": [
                "item",
                __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                    () => __utils._decodeObjectIdentifier
                ),
            ],
            "CONTEXT 1": [
                "and",
                __utils._decode_explicit<Refinement[]>(() =>
                    __utils._decodeSetOf<Refinement>(() => _decode_Refinement)
                ),
            ],
            "CONTEXT 2": [
                "or",
                __utils._decode_explicit<Refinement[]>(() =>
                    __utils._decodeSetOf<Refinement>(() => _decode_Refinement)
                ),
            ],
            "CONTEXT 3": [
                "not",
                __utils._decode_explicit<Refinement>(() => _decode_Refinement),
            ],
        });
    }
    return _cached_decoder_for_Refinement(el);
}
export function _encode_Refinement(
    value: Refinement,
    elGetter: __utils.ASN1Encoder<Refinement>
) {
    if (!_cached_encoder_for_Refinement) {
        _cached_encoder_for_Refinement = __utils._encode_choice<Refinement>(
            {
                item: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => __utils._encodeObjectIdentifier,
                    __utils.BER
                ),
                and: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () =>
                        __utils._encodeSetOf<Refinement>(
                            () => _encode_Refinement,
                            __utils.BER
                        ),
                    __utils.BER
                ),
                or: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    2,
                    () =>
                        __utils._encodeSetOf<Refinement>(
                            () => _encode_Refinement,
                            __utils.BER
                        ),
                    __utils.BER
                ),
                not: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    3,
                    () => _encode_Refinement,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_Refinement(value, elGetter);
}

export class SubtreeSpecification {
    constructor(
        readonly base: LocalName | undefined,
        readonly specificExclusions:
            | ChopSpecification_specificExclusions_Item[]
            | undefined /* REPLICATED_COMPONENT */,
        readonly minimum: BaseDistance | undefined /* REPLICATED_COMPONENT */,
        readonly maximum: BaseDistance | undefined /* REPLICATED_COMPONENT */,
        readonly specificationFilter: Refinement | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_base() {
        return [];
    }
    public static get _default_value_for_minimum() {
        return 0;
    }
}
export const _root_component_type_list_1_spec_for_SubtreeSpecification: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "base",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "specificExclusions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "minimum",
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
        "specificationFilter",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SubtreeSpecification: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SubtreeSpecification: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SubtreeSpecification: __utils.ASN1Decoder<
    SubtreeSpecification
> | null = null;
let _cached_encoder_for_SubtreeSpecification: __utils.ASN1Encoder<
    SubtreeSpecification
> | null = null;
export function _decode_SubtreeSpecification(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SubtreeSpecification) {
        _cached_decoder_for_SubtreeSpecification = function (
            el: asn1.ASN1Element
        ): SubtreeSpecification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let base: asn1.OPTIONAL<LocalName> =
                SubtreeSpecification._default_value_for_base;
            let specificExclusions: asn1.OPTIONAL<
                ChopSpecification_specificExclusions_Item[]
            >;
            let minimum: asn1.OPTIONAL<BaseDistance> =
                SubtreeSpecification._default_value_for_minimum;
            let maximum: asn1.OPTIONAL<BaseDistance>;
            let specificationFilter: asn1.OPTIONAL<Refinement>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                base: (_el: asn1.ASN1Element): void => {
                    base = __utils._decode_explicit<LocalName>(
                        () => _decode_LocalName
                    )(_el);
                },
                specificExclusions: (_el: asn1.ASN1Element): void => {
                    specificExclusions = __utils._decode_explicit<
                        ChopSpecification_specificExclusions_Item[]
                    >(() =>
                        __utils._decodeSetOf<
                            ChopSpecification_specificExclusions_Item
                        >(
                            () =>
                                _decode_ChopSpecification_specificExclusions_Item
                        )
                    )(_el);
                },
                minimum: (_el: asn1.ASN1Element): void => {
                    minimum = __utils._decode_explicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
                maximum: (_el: asn1.ASN1Element): void => {
                    maximum = __utils._decode_explicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
                specificationFilter: (_el: asn1.ASN1Element): void => {
                    specificationFilter = __utils._decode_explicit<Refinement>(
                        () => _decode_Refinement
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SubtreeSpecification,
                _extension_additions_list_spec_for_SubtreeSpecification,
                _root_component_type_list_2_spec_for_SubtreeSpecification,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SubtreeSpecification(
                /* SEQUENCE_CONSTRUCTOR_CALL */ base,
                specificExclusions,
                minimum,
                maximum,
                specificationFilter,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SubtreeSpecification(el);
}
export function _encode_SubtreeSpecification(
    value: SubtreeSpecification,
    elGetter: __utils.ASN1Encoder<SubtreeSpecification>
) {
    if (!_cached_encoder_for_SubtreeSpecification) {
        _cached_encoder_for_SubtreeSpecification = function (
            value: SubtreeSpecification,
            elGetter: __utils.ASN1Encoder<SubtreeSpecification>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.base === undefined ||
                            __utils.deepEq(
                                value.base,
                                SubtreeSpecification._default_value_for_base
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => _encode_LocalName,
                                      __utils.BER
                                  )(value.base, __utils.BER),
                            /* IF_ABSENT  */ value.specificExclusions ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () =>
                                          __utils._encodeSetOf<
                                              ChopSpecification_specificExclusions_Item
                                          >(
                                              () =>
                                                  _encode_ChopSpecification_specificExclusions_Item,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.specificExclusions, __utils.BER),
                            /* IF_DEFAULT */ value.minimum === undefined ||
                            __utils.deepEq(
                                value.minimum,
                                SubtreeSpecification._default_value_for_minimum
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => _encode_BaseDistance,
                                      __utils.BER
                                  )(value.minimum, __utils.BER),
                            /* IF_ABSENT  */ value.maximum === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => _encode_BaseDistance,
                                      __utils.BER
                                  )(value.maximum, __utils.BER),
                            /* IF_ABSENT  */ value.specificationFilter ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () => _encode_Refinement,
                                      __utils.BER
                                  )(value.specificationFilter, __utils.BER),
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
    return _cached_encoder_for_SubtreeSpecification(value, elGetter);
}

export enum ObjectClassKind {
    abstract = 0,
    structural = 1,
    auxiliary = 2,
}
export const ObjectClassKind_abstract: ObjectClassKind =
    ObjectClassKind.abstract; /* LONG_NAMED_ENUMERATED_VALUE */
export const abstract: ObjectClassKind =
    ObjectClassKind.abstract; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ObjectClassKind_structural: ObjectClassKind =
    ObjectClassKind.structural; /* LONG_NAMED_ENUMERATED_VALUE */
export const structural: ObjectClassKind =
    ObjectClassKind.structural; /* SHORT_NAMED_ENUMERATED_VALUE */
export const ObjectClassKind_auxiliary: ObjectClassKind =
    ObjectClassKind.auxiliary; /* LONG_NAMED_ENUMERATED_VALUE */
export const auxiliary: ObjectClassKind =
    ObjectClassKind.auxiliary; /* SHORT_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_ObjectClassKind: __utils.ASN1Decoder<
    ObjectClassKind
> | null = null;
let _cached_encoder_for_ObjectClassKind: __utils.ASN1Encoder<
    ObjectClassKind
> | null = null;
export function _decode_ObjectClassKind(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ObjectClassKind) {
        _cached_decoder_for_ObjectClassKind = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_ObjectClassKind(el);
}
export function _encode_ObjectClassKind(
    value: ObjectClassKind,
    elGetter: __utils.ASN1Encoder<ObjectClassKind>
) {
    if (!_cached_encoder_for_ObjectClassKind) {
        _cached_encoder_for_ObjectClassKind = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_ObjectClassKind(value, elGetter);
}

// TODO: ObjectClassAssignment: OBJECT-CLASS

// TODO: ObjectAssignment: top

// TODO: ObjectAssignment: alias

// TODO: ObjectAssignment: parent

// TODO: ObjectAssignment: child

// TODO: ObjectAssignment: objectClass

// TODO: ObjectAssignment: aliasedEntryName

// TODO: ObjectAssignment: objectIdentifierMatch

// TODO: ObjectAssignment: distinguishedNameMatch

// TODO: ObjectClassAssignment: MAPPING-BASED-MATCHING

export type RuleIdentifier = asn1.INTEGER;
let _cached_decoder_for_RuleIdentifier: __utils.ASN1Decoder<
    RuleIdentifier
> | null = null;
let _cached_encoder_for_RuleIdentifier: __utils.ASN1Encoder<
    RuleIdentifier
> | null = null;
export function _decode_RuleIdentifier(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RuleIdentifier) {
        _cached_decoder_for_RuleIdentifier = __utils._decodeInteger;
    }
    return _cached_decoder_for_RuleIdentifier(el);
}
export function _encode_RuleIdentifier(
    value: RuleIdentifier,
    elGetter: __utils.ASN1Encoder<RuleIdentifier>
) {
    if (!_cached_encoder_for_RuleIdentifier) {
        _cached_encoder_for_RuleIdentifier = __utils._encodeInteger;
    }
    return _cached_encoder_for_RuleIdentifier(value, elGetter);
}

export class DITStructureRule {
    constructor(
        readonly ruleIdentifier: RuleIdentifier,
        readonly nameForm: asn1.OBJECT_IDENTIFIER,
        readonly superiorStructureRules: RuleIdentifier[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DITStructureRule: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "ruleIdentifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nameForm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "superiorStructureRules",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DITStructureRule: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DITStructureRule: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DITStructureRule: __utils.ASN1Decoder<
    DITStructureRule
> | null = null;
let _cached_encoder_for_DITStructureRule: __utils.ASN1Encoder<
    DITStructureRule
> | null = null;
export function _decode_DITStructureRule(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DITStructureRule) {
        _cached_decoder_for_DITStructureRule = function (
            el: asn1.ASN1Element
        ): DITStructureRule {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let ruleIdentifier!: RuleIdentifier;
            let nameForm!: asn1.OBJECT_IDENTIFIER;
            let superiorStructureRules: asn1.OPTIONAL<RuleIdentifier[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                ruleIdentifier: (_el: asn1.ASN1Element): void => {
                    ruleIdentifier = _decode_RuleIdentifier(_el);
                },
                nameForm: (_el: asn1.ASN1Element): void => {
                    nameForm = __utils._decodeObjectIdentifier(_el);
                },
                superiorStructureRules: (_el: asn1.ASN1Element): void => {
                    superiorStructureRules = __utils._decodeSetOf<
                        RuleIdentifier
                    >(() => _decode_RuleIdentifier)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DITStructureRule,
                _extension_additions_list_spec_for_DITStructureRule,
                _root_component_type_list_2_spec_for_DITStructureRule,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITStructureRule(
                /* SEQUENCE_CONSTRUCTOR_CALL */ ruleIdentifier,
                nameForm,
                superiorStructureRules,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITStructureRule(el);
}
export function _encode_DITStructureRule(
    value: DITStructureRule,
    elGetter: __utils.ASN1Encoder<DITStructureRule>
) {
    if (!_cached_encoder_for_DITStructureRule) {
        _cached_encoder_for_DITStructureRule = function (
            value: DITStructureRule,
            elGetter: __utils.ASN1Encoder<DITStructureRule>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RuleIdentifier(
                                value.ruleIdentifier,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.nameForm,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.superiorStructureRules ===
                            undefined
                                ? undefined
                                : __utils._encodeSetOf<RuleIdentifier>(
                                      () => _encode_RuleIdentifier,
                                      __utils.BER
                                  )(value.superiorStructureRules, __utils.BER),
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
    return _cached_encoder_for_DITStructureRule(value, elGetter);
}

// TODO: ObjectClassAssignment: NAME-FORM

// TODO: ObjectClassAssignment: STRUCTURE-RULE

export class DITContentRule {
    constructor(
        readonly structuralObjectClass: asn1.OBJECT_IDENTIFIER,
        readonly auxiliaries: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly mandatory: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly optional: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly precluded: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DITContentRule: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "structuralObjectClass",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "auxiliaries",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "mandatory",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "optional",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "precluded",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DITContentRule: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DITContentRule: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DITContentRule: __utils.ASN1Decoder<
    DITContentRule
> | null = null;
let _cached_encoder_for_DITContentRule: __utils.ASN1Encoder<
    DITContentRule
> | null = null;
export function _decode_DITContentRule(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DITContentRule) {
        _cached_decoder_for_DITContentRule = function (
            el: asn1.ASN1Element
        ): DITContentRule {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let structuralObjectClass!: asn1.OBJECT_IDENTIFIER;
            let auxiliaries: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
            let mandatory: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
            let optional: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
            let precluded: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                structuralObjectClass: (_el: asn1.ASN1Element): void => {
                    structuralObjectClass = __utils._decodeObjectIdentifier(
                        _el
                    );
                },
                auxiliaries: (_el: asn1.ASN1Element): void => {
                    auxiliaries = __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(
                        () => __utils._decodeObjectIdentifier
                    )(_el);
                },
                mandatory: (_el: asn1.ASN1Element): void => {
                    mandatory = __utils._decode_explicit<
                        asn1.OBJECT_IDENTIFIER[]
                    >(() =>
                        __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(
                            () => __utils._decodeObjectIdentifier
                        )
                    )(_el);
                },
                optional: (_el: asn1.ASN1Element): void => {
                    optional = __utils._decode_explicit<
                        asn1.OBJECT_IDENTIFIER[]
                    >(() =>
                        __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(
                            () => __utils._decodeObjectIdentifier
                        )
                    )(_el);
                },
                precluded: (_el: asn1.ASN1Element): void => {
                    precluded = __utils._decode_explicit<
                        asn1.OBJECT_IDENTIFIER[]
                    >(() =>
                        __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(
                            () => __utils._decodeObjectIdentifier
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DITContentRule,
                _extension_additions_list_spec_for_DITContentRule,
                _root_component_type_list_2_spec_for_DITContentRule,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITContentRule(
                /* SEQUENCE_CONSTRUCTOR_CALL */ structuralObjectClass,
                auxiliaries,
                mandatory,
                optional,
                precluded,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITContentRule(el);
}
export function _encode_DITContentRule(
    value: DITContentRule,
    elGetter: __utils.ASN1Encoder<DITContentRule>
) {
    if (!_cached_encoder_for_DITContentRule) {
        _cached_encoder_for_DITContentRule = function (
            value: DITContentRule,
            elGetter: __utils.ASN1Encoder<DITContentRule>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.structuralObjectClass,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.auxiliaries === undefined
                                ? undefined
                                : __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(
                                      () => __utils._encodeObjectIdentifier,
                                      __utils.BER
                                  )(value.auxiliaries, __utils.BER),
                            /* IF_ABSENT  */ value.mandatory === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () =>
                                          __utils._encodeSetOf<
                                              asn1.OBJECT_IDENTIFIER
                                          >(
                                              () =>
                                                  __utils._encodeObjectIdentifier,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.mandatory, __utils.BER),
                            /* IF_ABSENT  */ value.optional === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () =>
                                          __utils._encodeSetOf<
                                              asn1.OBJECT_IDENTIFIER
                                          >(
                                              () =>
                                                  __utils._encodeObjectIdentifier,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.optional, __utils.BER),
                            /* IF_ABSENT  */ value.precluded === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () =>
                                          __utils._encodeSetOf<
                                              asn1.OBJECT_IDENTIFIER
                                          >(
                                              () =>
                                                  __utils._encodeObjectIdentifier,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.precluded, __utils.BER),
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
    return _cached_encoder_for_DITContentRule(value, elGetter);
}

// TODO: ObjectClassAssignment: CONTENT-RULE

export class DITContextUse {
    constructor(
        readonly attributeType: asn1.OBJECT_IDENTIFIER,
        readonly mandatoryContexts: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly optionalContexts: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DITContextUse: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "attributeType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "mandatoryContexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "optionalContexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DITContextUse: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DITContextUse: __utils.ComponentSpec[] = [];
let _cached_decoder_for_DITContextUse: __utils.ASN1Decoder<
    DITContextUse
> | null = null;
let _cached_encoder_for_DITContextUse: __utils.ASN1Encoder<
    DITContextUse
> | null = null;
export function _decode_DITContextUse(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_DITContextUse) {
        _cached_decoder_for_DITContextUse = function (
            el: asn1.ASN1Element
        ): DITContextUse {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attributeType!: asn1.OBJECT_IDENTIFIER;
            let mandatoryContexts: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
            let optionalContexts: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                attributeType: (_el: asn1.ASN1Element): void => {
                    attributeType = __utils._decodeObjectIdentifier(_el);
                },
                mandatoryContexts: (_el: asn1.ASN1Element): void => {
                    mandatoryContexts = __utils._decode_explicit<
                        asn1.OBJECT_IDENTIFIER[]
                    >(() =>
                        __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(
                            () => __utils._decodeObjectIdentifier
                        )
                    )(_el);
                },
                optionalContexts: (_el: asn1.ASN1Element): void => {
                    optionalContexts = __utils._decode_explicit<
                        asn1.OBJECT_IDENTIFIER[]
                    >(() =>
                        __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(
                            () => __utils._decodeObjectIdentifier
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DITContextUse,
                _extension_additions_list_spec_for_DITContextUse,
                _root_component_type_list_2_spec_for_DITContextUse,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITContextUse(
                /* SEQUENCE_CONSTRUCTOR_CALL */ attributeType,
                mandatoryContexts,
                optionalContexts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITContextUse(el);
}
export function _encode_DITContextUse(
    value: DITContextUse,
    elGetter: __utils.ASN1Encoder<DITContextUse>
) {
    if (!_cached_encoder_for_DITContextUse) {
        _cached_encoder_for_DITContextUse = function (
            value: DITContextUse,
            elGetter: __utils.ASN1Encoder<DITContextUse>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeObjectIdentifier(
                                value.attributeType,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.mandatoryContexts ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () =>
                                          __utils._encodeSetOf<
                                              asn1.OBJECT_IDENTIFIER
                                          >(
                                              () =>
                                                  __utils._encodeObjectIdentifier,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.mandatoryContexts, __utils.BER),
                            /* IF_ABSENT  */ value.optionalContexts ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () =>
                                          __utils._encodeSetOf<
                                              asn1.OBJECT_IDENTIFIER
                                          >(
                                              () =>
                                                  __utils._encodeObjectIdentifier,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.optionalContexts, __utils.BER),
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
    return _cached_encoder_for_DITContextUse(value, elGetter);
}

// TODO: ObjectClassAssignment: CONTEXT

// TODO: ObjectClassAssignment: DIT-CONTEXT-USE-RULE

// TODO: ObjectClassAssignment: FRIENDS

// TODO: ObjectClassAssignment: SYNTAX-NAME

// TODO: ObjectAssignment: subentry

// TODO: ObjectAssignment: subentryNameForm

// TODO: ObjectAssignment: subtreeSpecification

// TODO: ObjectAssignment: administrativeRole

// TODO: ObjectAssignment: createTimestamp

// TODO: ObjectAssignment: modifyTimestamp

// TODO: ObjectAssignment: subschemaTimestamp

// TODO: ObjectAssignment: creatorsName

// TODO: ObjectAssignment: modifiersName

// TODO: ObjectAssignment: subschemaSubentryList

// TODO: ObjectAssignment: accessControlSubentryList

// TODO: ObjectAssignment: collectiveAttributeSubentryList

// TODO: ObjectAssignment: contextDefaultSubentryList

// TODO: ObjectAssignment: serviceAdminSubentryList

// TODO: ObjectAssignment: pwdAdminSubentryList

// TODO: ObjectAssignment: hasSubordinates

// TODO: ObjectAssignment: accessControlSubentry

// TODO: ObjectAssignment: collectiveAttributeSubentry

// TODO: ObjectAssignment: collectiveExclusions

// TODO: ObjectAssignment: contextAssertionSubentry

// TODO: ObjectAssignment: contextAssertionDefaults

// TODO: ObjectAssignment: serviceAdminSubentry

// TODO: ObjectAssignment: searchRules

export class SearchRuleDescription {
    constructor(
        readonly id: asn1.INTEGER /* REPLICATED_COMPONENT */,
        readonly dmdId: asn1.OBJECT_IDENTIFIER /* REPLICATED_COMPONENT */,
        readonly serviceType:
            | asn1.OBJECT_IDENTIFIER
            | undefined /* REPLICATED_COMPONENT */,
        readonly userClass: asn1.INTEGER | undefined /* REPLICATED_COMPONENT */,
        readonly inputAttributeTypes:
            | RequestAttribute[]
            | undefined /* REPLICATED_COMPONENT */,
        readonly attributeCombination:
            | AttributeCombination
            | undefined /* REPLICATED_COMPONENT */,
        readonly outputAttributeTypes:
            | ResultAttribute[]
            | undefined /* REPLICATED_COMPONENT */,
        readonly defaultControls:
            | ControlOptions
            | undefined /* REPLICATED_COMPONENT */,
        readonly mandatoryControls:
            | ControlOptions
            | undefined /* REPLICATED_COMPONENT */,
        readonly searchRuleControls:
            | ControlOptions
            | undefined /* REPLICATED_COMPONENT */,
        readonly familyGrouping:
            | FamilyGrouping
            | undefined /* REPLICATED_COMPONENT */,
        readonly familyReturn:
            | FamilyReturn
            | undefined /* REPLICATED_COMPONENT */,
        readonly relaxation:
            | RelaxationPolicy
            | undefined /* REPLICATED_COMPONENT */,
        readonly additionalControl:
            | AttributeType[]
            | undefined /* REPLICATED_COMPONENT */,
        readonly allowedSubset:
            | AllowedSubset
            | undefined /* REPLICATED_COMPONENT */,
        readonly imposedSubset:
            | ImposedSubset
            | undefined /* REPLICATED_COMPONENT */,
        readonly entryLimit: EntryLimit | undefined /* REPLICATED_COMPONENT */,
        readonly name: UnboundedDirectoryString[] | undefined,
        readonly description: UnboundedDirectoryString | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_attributeCombination() {
        return { and: [] };
    }
    public static get _default_value_for_allowedSubset() {
        return new Uint8ClampedArray([1, 1, 1]);
    }
}
export const _root_component_type_list_1_spec_for_SearchRuleDescription: __utils.ComponentSpec[] = [
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
    new __utils.ComponentSpec(
        "name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "description",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SearchRuleDescription: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SearchRuleDescription: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SearchRuleDescription: __utils.ASN1Decoder<
    SearchRuleDescription
> | null = null;
let _cached_encoder_for_SearchRuleDescription: __utils.ASN1Encoder<
    SearchRuleDescription
> | null = null;
export function _decode_SearchRuleDescription(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SearchRuleDescription) {
        _cached_decoder_for_SearchRuleDescription = function (
            el: asn1.ASN1Element
        ): SearchRuleDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let id!: asn1.INTEGER;
            let dmdId!: asn1.OBJECT_IDENTIFIER;
            let serviceType: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
            let userClass: asn1.OPTIONAL<asn1.INTEGER>;
            let inputAttributeTypes: asn1.OPTIONAL<RequestAttribute[]>;
            let attributeCombination: asn1.OPTIONAL<AttributeCombination> =
                SearchRuleDescription._default_value_for_attributeCombination;
            let outputAttributeTypes: asn1.OPTIONAL<ResultAttribute[]>;
            let defaultControls: asn1.OPTIONAL<ControlOptions>;
            let mandatoryControls: asn1.OPTIONAL<ControlOptions>;
            let searchRuleControls: asn1.OPTIONAL<ControlOptions>;
            let familyGrouping: asn1.OPTIONAL<FamilyGrouping>;
            let familyReturn: asn1.OPTIONAL<FamilyReturn>;
            let relaxation: asn1.OPTIONAL<RelaxationPolicy>;
            let additionalControl: asn1.OPTIONAL<AttributeType[]>;
            let allowedSubset: asn1.OPTIONAL<AllowedSubset> =
                SearchRuleDescription._default_value_for_allowedSubset;
            let imposedSubset: asn1.OPTIONAL<ImposedSubset>;
            let entryLimit: asn1.OPTIONAL<EntryLimit>;
            let name: asn1.OPTIONAL<UnboundedDirectoryString[]>;
            let description: asn1.OPTIONAL<UnboundedDirectoryString>;
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
                name: (_el: asn1.ASN1Element): void => {
                    name = __utils._decode_explicit<UnboundedDirectoryString[]>(
                        () =>
                            __utils._decodeSetOf<UnboundedDirectoryString>(
                                () => _decode_UnboundedDirectoryString
                            )
                    )(_el);
                },
                description: (_el: asn1.ASN1Element): void => {
                    description = __utils._decode_explicit<
                        UnboundedDirectoryString
                    >(() => _decode_UnboundedDirectoryString)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SearchRuleDescription,
                _extension_additions_list_spec_for_SearchRuleDescription,
                _root_component_type_list_2_spec_for_SearchRuleDescription,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SearchRuleDescription(
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
                name,
                description,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SearchRuleDescription(el);
}
export function _encode_SearchRuleDescription(
    value: SearchRuleDescription,
    elGetter: __utils.ASN1Encoder<SearchRuleDescription>
) {
    if (!_cached_encoder_for_SearchRuleDescription) {
        _cached_encoder_for_SearchRuleDescription = function (
            value: SearchRuleDescription,
            elGetter: __utils.ASN1Encoder<SearchRuleDescription>
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
                                SearchRuleDescription._default_value_for_attributeCombination
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
                                SearchRuleDescription._default_value_for_allowedSubset
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
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () =>
                                          __utils._encodeSetOf<
                                              UnboundedDirectoryString
                                          >(
                                              () =>
                                                  _encode_UnboundedDirectoryString,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.name, __utils.BER),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_UnboundedDirectoryString,
                                      __utils.BER
                                  )(value.description, __utils.BER),
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
    return _cached_encoder_for_SearchRuleDescription(value, elGetter);
}

// TODO: ObjectAssignment: pwdAdminSubentry

// TODO: ObjectAssignment: pwdAttribute

// TODO: ObjectAssignment: pwdHistory

export class PwdHistory {
    constructor(
        readonly time: asn1.GeneralizedTime,
        readonly password: asn1.ASN1Element /* COULD_NOT_RESOLVE_REFERENCED_OBJECTS */,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PwdHistory: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "time",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "password",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PwdHistory: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PwdHistory: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PwdHistory: __utils.ASN1Decoder<
    PwdHistory
> | null = null;
let _cached_encoder_for_PwdHistory: __utils.ASN1Encoder<
    PwdHistory
> | null = null;
export function _decode_PwdHistory(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PwdHistory) {
        _cached_decoder_for_PwdHistory = function (
            el: asn1.ASN1Element
        ): PwdHistory {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "PwdHistory contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "time";
            sequence[1].name = "password";
            let time!: asn1.GeneralizedTime;
            let password!: asn1.ASN1Element /* COULD_NOT_RESOLVE_REFERENCED_OBJECTS */;
            time = __utils._decodeGeneralizedTime(sequence[0]);
            password = __utils._decodeAny(
                /* COULD_NOT_RESOLVE_REFERENCED_OBJECTS */ sequence[1]
            );
            // TODO: Validate values.
            return new PwdHistory(time, password, sequence.slice(2));
        };
    }
    return _cached_decoder_for_PwdHistory(el);
}
export function _encode_PwdHistory(
    value: PwdHistory,
    elGetter: __utils.ASN1Encoder<PwdHistory>
) {
    if (!_cached_encoder_for_PwdHistory) {
        _cached_encoder_for_PwdHistory = function (
            value: PwdHistory,
            elGetter: __utils.ASN1Encoder<PwdHistory>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeGeneralizedTime(
                                value.time,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeAny(
                                /* COULD_NOT_RESOLVE_REFERENCED_OBJECTS */ value.password,
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
    return _cached_encoder_for_PwdHistory(value, elGetter);
}

// TODO: ObjectAssignment: pwdRecentlyExpired

// TODO: ObjectAssignment: pwdHistoryMatch

// TODO: ObjectAssignment: hierarchyLevel

export type HierarchyLevel = asn1.INTEGER;
let _cached_decoder_for_HierarchyLevel: __utils.ASN1Decoder<
    HierarchyLevel
> | null = null;
let _cached_encoder_for_HierarchyLevel: __utils.ASN1Encoder<
    HierarchyLevel
> | null = null;
export function _decode_HierarchyLevel(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_HierarchyLevel) {
        _cached_decoder_for_HierarchyLevel = __utils._decodeInteger;
    }
    return _cached_decoder_for_HierarchyLevel(el);
}
export function _encode_HierarchyLevel(
    value: HierarchyLevel,
    elGetter: __utils.ASN1Encoder<HierarchyLevel>
) {
    if (!_cached_encoder_for_HierarchyLevel) {
        _cached_encoder_for_HierarchyLevel = __utils._encodeInteger;
    }
    return _cached_encoder_for_HierarchyLevel(value, elGetter);
}

// TODO: ObjectAssignment: hierarchyBelow

export type HierarchyBelow = asn1.BOOLEAN; // BooleanType
let _cached_decoder_for_HierarchyBelow: __utils.ASN1Decoder<
    HierarchyBelow
> | null = null;
let _cached_encoder_for_HierarchyBelow: __utils.ASN1Encoder<
    HierarchyBelow
> | null = null;
export function _decode_HierarchyBelow(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_HierarchyBelow) {
        _cached_decoder_for_HierarchyBelow = __utils._decodeBoolean;
    }
    return _cached_decoder_for_HierarchyBelow(el);
}
export function _encode_HierarchyBelow(
    value: HierarchyBelow,
    elGetter: __utils.ASN1Encoder<HierarchyBelow>
) {
    if (!_cached_encoder_for_HierarchyBelow) {
        _cached_encoder_for_HierarchyBelow = __utils._encodeBoolean;
    }
    return _cached_encoder_for_HierarchyBelow(value, elGetter);
}

// TODO: ObjectAssignment: hierarchyParent

// TODO: ObjectAssignment: hierarchyTop

export const id_oc_top: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [0],
    id_oc
);

export const id_oc_alias: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_oc
);

export const id_oc_parent: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [28],
    id_oc
);

export const id_oc_child: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [29],
    id_oc
);

export const id_at_objectClass: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [0],
    id_at
);

export const id_at_aliasedEntryName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_at
);

export const id_at_pwdAttribute: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [84],
    id_at
);

export const id_mr_objectIdentifierMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [0],
    id_mr
);

export const id_mr_distinguishedNameMatch: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_mr
);

export const id_oa_excludeAllCollectiveAttributes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [0],
    id_oa
);

export const id_oa_createTimestamp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_oa
);

export const id_oa_modifyTimestamp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_oa
);

export const id_oa_creatorsName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_oa
);

export const id_oa_modifiersName: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_oa
);

export const id_oa_administrativeRole: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    id_oa
);

export const id_oa_subtreeSpecification: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    id_oa
);

export const id_oa_collectiveExclusions: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    id_oa
);

export const id_oa_subschemaTimestamp: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    id_oa
);

export const id_oa_hasSubordinates: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    id_oa
);

export const id_oa_subschemaSubentryList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10],
    id_oa
);

export const id_oa_accessControlSubentryList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    id_oa
);

export const id_oa_collectiveAttributeSubentryList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [12],
    id_oa
);

export const id_oa_contextDefaultSubentryList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [13],
    id_oa
);

export const id_oa_contextAssertionDefault: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [14],
    id_oa
);

export const id_oa_serviceAdminSubentryList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [15],
    id_oa
);

export const id_oa_searchRules: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [16],
    id_oa
);

export const id_oa_hierarchyLevel: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [17],
    id_oa
);

export const id_oa_hierarchyBelow: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [18],
    id_oa
);

export const id_oa_hierarchyParent: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [19],
    id_oa
);

export const id_oa_hierarchyTop: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [20],
    id_oa
);

export const id_oa_pwdAdminSubentryList: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [21],
    id_oa
);

export const id_oa_allAttributeTypes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [48],
    id_oa
);

export const id_sc_subentry: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [0],
    id_sc
);

export const id_sc_accessControlSubentry: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_sc
);

export const id_sc_collectiveAttributeSubentry: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_sc
);

export const id_sc_contextAssertionSubentry: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_sc
);

export const id_sc_serviceAdminSubentry: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_sc
);

export const id_sc_pwdAdminSubentry: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    id_sc
);

export const id_nf_subentryNameForm: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [16],
    id_nf
);

export const id_ar_autonomousArea: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_ar
);

export const id_ar_accessControlSpecificArea: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_ar
);

export const id_ar_accessControlInnerArea: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_ar
);

export const id_ar_subschemaAdminSpecificArea: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_ar
);

export const id_ar_collectiveAttributeSpecificArea: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    id_ar
);

export const id_ar_collectiveAttributeInnerArea: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    id_ar
);

export const id_ar_contextDefaultSpecificArea: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    id_ar
);

export const id_ar_serviceSpecificArea: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    id_ar
);

export const id_ar_pwdAdminSpecificArea: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    id_ar
);

/* END_MODULE InformationFramework */
