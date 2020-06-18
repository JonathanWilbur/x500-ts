/*
    BEGIN_MODULE BasicAccessControl
    OID: joint-iso-itu-t.ds.module.basicAccessControl.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    Filter,
    _decode_Filter,
    _encode_Filter,
} from "./DirectoryAbstractService";
import {
    AttributeType,
    AttributeTypeAndValue,
    ContextAssertion,
    Refinement,
    SubtreeSpecification,
    _decode_AttributeType,
    _decode_AttributeTypeAndValue,
    _decode_ContextAssertion,
    _decode_Refinement,
    _decode_SubtreeSpecification,
    _encode_AttributeType,
    _encode_AttributeTypeAndValue,
    _encode_ContextAssertion,
    _encode_Refinement,
    _encode_SubtreeSpecification,
} from "./InformationFramework";
import {
    NameAndOptionalUID,
    UnboundedDirectoryString,
    _decode_NameAndOptionalUID,
    _decode_UnboundedDirectoryString,
    _encode_NameAndOptionalUID,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
import { id_aca, id_acScheme } from "./UsefulDefinitions";
import * as __utils from "./__utils";
export {
    Filter,
    _decode_Filter,
    _encode_Filter,
} from "./DirectoryAbstractService";
export {
    AttributeType,
    AttributeTypeAndValue,
    ContextAssertion,
    DistinguishedName,
    Refinement,
    SubtreeSpecification,
    _decode_AttributeType,
    _decode_AttributeTypeAndValue,
    _decode_ContextAssertion,
    _decode_DistinguishedName,
    _decode_Refinement,
    _decode_SubtreeSpecification,
    _encode_AttributeType,
    _encode_AttributeTypeAndValue,
    _encode_ContextAssertion,
    _encode_DistinguishedName,
    _encode_Refinement,
    _encode_SubtreeSpecification,
} from "./InformationFramework";
export {
    NameAndOptionalUID,
    UnboundedDirectoryString,
    UniqueIdentifier,
    _decode_NameAndOptionalUID,
    _decode_UnboundedDirectoryString,
    _decode_UniqueIdentifier,
    _encode_NameAndOptionalUID,
    _encode_UnboundedDirectoryString,
    _encode_UniqueIdentifier,
} from "./SelectedAttributeTypes";
export {
    directoryAbstractService,
    id_aca,
    id_acScheme,
    informationFramework,
    selectedAttributeTypes,
} from "./UsefulDefinitions";

// TODO: ObjectAssignment: accessControlScheme

export type Precedence = asn1.INTEGER;
let _cached_decoder_for_Precedence: __utils.ASN1Decoder<
    Precedence
> | null = null;
let _cached_encoder_for_Precedence: __utils.ASN1Encoder<
    Precedence
> | null = null;
export function _decode_Precedence(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Precedence) {
        _cached_decoder_for_Precedence = __utils._decodeInteger;
    }
    return _cached_decoder_for_Precedence(el);
}
export function _encode_Precedence(
    value: Precedence,
    elGetter: __utils.ASN1Encoder<Precedence>
) {
    if (!_cached_encoder_for_Precedence) {
        _cached_encoder_for_Precedence = __utils._encodeInteger;
    }
    return _cached_encoder_for_Precedence(value, elGetter);
}

export type AuthenticationLevel_basicLevels_level = asn1.ENUMERATED;
export const AuthenticationLevel_basicLevels_level_none: AuthenticationLevel_basicLevels_level = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const none: AuthenticationLevel_basicLevels_level = AuthenticationLevel_basicLevels_level_none; /* SHORT_NAMED_ENUMERATED_VALUE */
export const AuthenticationLevel_basicLevels_level_simple: AuthenticationLevel_basicLevels_level = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const simple: AuthenticationLevel_basicLevels_level = AuthenticationLevel_basicLevels_level_simple; /* SHORT_NAMED_ENUMERATED_VALUE */
export const AuthenticationLevel_basicLevels_level_strong: AuthenticationLevel_basicLevels_level = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const strong: AuthenticationLevel_basicLevels_level = AuthenticationLevel_basicLevels_level_strong; /* SHORT_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_AuthenticationLevel_basicLevels_level: __utils.ASN1Decoder<
    AuthenticationLevel_basicLevels_level
> | null = null;
let _cached_encoder_for_AuthenticationLevel_basicLevels_level: __utils.ASN1Encoder<
    AuthenticationLevel_basicLevels_level
> | null = null;
export function _decode_AuthenticationLevel_basicLevels_level(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_AuthenticationLevel_basicLevels_level) {
        _cached_decoder_for_AuthenticationLevel_basicLevels_level =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_AuthenticationLevel_basicLevels_level(el);
}
export function _encode_AuthenticationLevel_basicLevels_level(
    value: AuthenticationLevel_basicLevels_level,
    elGetter: __utils.ASN1Encoder<AuthenticationLevel_basicLevels_level>
) {
    if (!_cached_encoder_for_AuthenticationLevel_basicLevels_level) {
        _cached_encoder_for_AuthenticationLevel_basicLevels_level =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_AuthenticationLevel_basicLevels_level(
        value,
        elGetter
    );
}

export class AuthenticationLevel_basicLevels {
    constructor(
        readonly level: AuthenticationLevel_basicLevels_level,
        readonly localQualifier: asn1.INTEGER | undefined,
        readonly signed: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_signed() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_AuthenticationLevel_basicLevels: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "level",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "localQualifier",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "signed",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AuthenticationLevel_basicLevels: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AuthenticationLevel_basicLevels: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AuthenticationLevel_basicLevels: __utils.ASN1Decoder<
    AuthenticationLevel_basicLevels
> | null = null;
let _cached_encoder_for_AuthenticationLevel_basicLevels: __utils.ASN1Encoder<
    AuthenticationLevel_basicLevels
> | null = null;
export function _decode_AuthenticationLevel_basicLevels(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AuthenticationLevel_basicLevels) {
        _cached_decoder_for_AuthenticationLevel_basicLevels = function (
            el: asn1.ASN1Element
        ): AuthenticationLevel_basicLevels {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let level!: AuthenticationLevel_basicLevels_level;
            let localQualifier: asn1.OPTIONAL<asn1.INTEGER>;
            let signed: asn1.OPTIONAL<asn1.BOOLEAN> =
                AuthenticationLevel_basicLevels._default_value_for_signed;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                level: (_el: asn1.ASN1Element): void => {
                    level = _decode_AuthenticationLevel_basicLevels_level(_el);
                },
                localQualifier: (_el: asn1.ASN1Element): void => {
                    localQualifier = __utils._decodeInteger(_el);
                },
                signed: (_el: asn1.ASN1Element): void => {
                    signed = __utils._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AuthenticationLevel_basicLevels,
                _extension_additions_list_spec_for_AuthenticationLevel_basicLevels,
                _root_component_type_list_2_spec_for_AuthenticationLevel_basicLevels,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AuthenticationLevel_basicLevels(
                /* SEQUENCE_CONSTRUCTOR_CALL */ level,
                localQualifier,
                signed,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AuthenticationLevel_basicLevels(el);
}
export function _encode_AuthenticationLevel_basicLevels(
    value: AuthenticationLevel_basicLevels,
    elGetter: __utils.ASN1Encoder<AuthenticationLevel_basicLevels>
) {
    if (!_cached_encoder_for_AuthenticationLevel_basicLevels) {
        _cached_encoder_for_AuthenticationLevel_basicLevels = function (
            value: AuthenticationLevel_basicLevels,
            elGetter: __utils.ASN1Encoder<AuthenticationLevel_basicLevels>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AuthenticationLevel_basicLevels_level(
                                value.level,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.localQualifier === undefined
                                ? undefined
                                : __utils._encodeInteger(
                                      value.localQualifier,
                                      __utils.BER
                                  ),
                            /* IF_DEFAULT */ value.signed === undefined ||
                            __utils.deepEq(
                                value.signed,
                                AuthenticationLevel_basicLevels._default_value_for_signed
                            )
                                ? undefined
                                : __utils._encodeBoolean(
                                      value.signed,
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
    return _cached_encoder_for_AuthenticationLevel_basicLevels(value, elGetter);
}

export type AuthenticationLevel =
    | { basicLevels: AuthenticationLevel_basicLevels } /* CHOICE_ALT_ROOT */
    | { other: asn1.EXTERNAL } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_AuthenticationLevel: __utils.ASN1Decoder<
    AuthenticationLevel
> | null = null;
let _cached_encoder_for_AuthenticationLevel: __utils.ASN1Encoder<
    AuthenticationLevel
> | null = null;
export function _decode_AuthenticationLevel(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AuthenticationLevel) {
        _cached_decoder_for_AuthenticationLevel = __utils._decode_extensible_choice<
            AuthenticationLevel
        >({
            "UNIVERSAL 16": [
                "basicLevels",
                _decode_AuthenticationLevel_basicLevels,
            ],
            "UNIVERSAL 8": ["other", __utils._decodeExternal],
        });
    }
    return _cached_decoder_for_AuthenticationLevel(el);
}
export function _encode_AuthenticationLevel(
    value: AuthenticationLevel,
    elGetter: __utils.ASN1Encoder<AuthenticationLevel>
) {
    if (!_cached_encoder_for_AuthenticationLevel) {
        _cached_encoder_for_AuthenticationLevel = __utils._encode_choice<
            AuthenticationLevel
        >(
            {
                basicLevels: _encode_AuthenticationLevel_basicLevels,
                other: __utils._encodeExternal,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_AuthenticationLevel(value, elGetter);
}

export class MaxValueCount {
    constructor(
        readonly type_: AttributeType,
        readonly maxCount: asn1.INTEGER,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_MaxValueCount: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "maxCount",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_MaxValueCount: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_MaxValueCount: __utils.ComponentSpec[] = [];
let _cached_decoder_for_MaxValueCount: __utils.ASN1Decoder<
    MaxValueCount
> | null = null;
let _cached_encoder_for_MaxValueCount: __utils.ASN1Encoder<
    MaxValueCount
> | null = null;
export function _decode_MaxValueCount(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MaxValueCount) {
        _cached_decoder_for_MaxValueCount = function (
            el: asn1.ASN1Element
        ): MaxValueCount {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "MaxValueCount contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "type";
            sequence[1].name = "maxCount";
            let type_!: AttributeType;
            let maxCount!: asn1.INTEGER;
            type_ = _decode_AttributeType(sequence[0]);
            maxCount = __utils._decodeInteger(sequence[1]);
            // TODO: Validate values.
            return new MaxValueCount(type_, maxCount, sequence.slice(2));
        };
    }
    return _cached_decoder_for_MaxValueCount(el);
}
export function _encode_MaxValueCount(
    value: MaxValueCount,
    elGetter: __utils.ASN1Encoder<MaxValueCount>
) {
    if (!_cached_encoder_for_MaxValueCount) {
        _cached_encoder_for_MaxValueCount = function (
            value: MaxValueCount,
            elGetter: __utils.ASN1Encoder<MaxValueCount>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeType(
                                value.type_,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeInteger(
                                value.maxCount,
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
    return _cached_encoder_for_MaxValueCount(value, elGetter);
}

export class RestrictedValue {
    constructor(
        readonly type_: AttributeType,
        readonly valuesIn: AttributeType,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_RestrictedValue: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "type",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "valuesIn",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RestrictedValue: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RestrictedValue: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RestrictedValue: __utils.ASN1Decoder<
    RestrictedValue
> | null = null;
let _cached_encoder_for_RestrictedValue: __utils.ASN1Encoder<
    RestrictedValue
> | null = null;
export function _decode_RestrictedValue(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RestrictedValue) {
        _cached_decoder_for_RestrictedValue = function (
            el: asn1.ASN1Element
        ): RestrictedValue {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "RestrictedValue contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "type";
            sequence[1].name = "valuesIn";
            let type_!: AttributeType;
            let valuesIn!: AttributeType;
            type_ = _decode_AttributeType(sequence[0]);
            valuesIn = _decode_AttributeType(sequence[1]);
            // TODO: Validate values.
            return new RestrictedValue(type_, valuesIn, sequence.slice(2));
        };
    }
    return _cached_decoder_for_RestrictedValue(el);
}
export function _encode_RestrictedValue(
    value: RestrictedValue,
    elGetter: __utils.ASN1Encoder<RestrictedValue>
) {
    if (!_cached_encoder_for_RestrictedValue) {
        _cached_encoder_for_RestrictedValue = function (
            value: RestrictedValue,
            elGetter: __utils.ASN1Encoder<RestrictedValue>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeType(
                                value.type_,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_AttributeType(
                                value.valuesIn,
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
    return _cached_encoder_for_RestrictedValue(value, elGetter);
}

export class ProtectedItems {
    constructor(
        readonly entry: asn1.NULL | undefined,
        readonly allUserAttributeTypes: asn1.NULL | undefined,
        readonly attributeType: AttributeType[] | undefined,
        readonly allAttributeValues: AttributeType[] | undefined,
        readonly allUserAttributeTypesAndValues: asn1.NULL | undefined,
        readonly attributeValue: AttributeTypeAndValue[] | undefined,
        readonly selfValue: AttributeType[] | undefined,
        readonly rangeOfValues: Filter | undefined,
        readonly maxValueCount: MaxValueCount[] | undefined,
        readonly maxImmSub: asn1.INTEGER | undefined,
        readonly restrictedBy: RestrictedValue[] | undefined,
        readonly contexts: ContextAssertion[] | undefined,
        readonly classes: Refinement | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ProtectedItems: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "entry",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "allUserAttributeTypes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributeType",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "allAttributeValues",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "allUserAttributeTypesAndValues",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributeValue",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "selfValue",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "rangeOfValues",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "maxValueCount",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 8),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "maxImmSub",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 9),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "restrictedBy",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 11),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "classes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 12),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ProtectedItems: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ProtectedItems: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ProtectedItems: __utils.ASN1Decoder<
    ProtectedItems
> | null = null;
let _cached_encoder_for_ProtectedItems: __utils.ASN1Encoder<
    ProtectedItems
> | null = null;
export function _decode_ProtectedItems(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ProtectedItems) {
        _cached_decoder_for_ProtectedItems = function (
            el: asn1.ASN1Element
        ): ProtectedItems {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let entry: asn1.OPTIONAL<asn1.NULL>;
            let allUserAttributeTypes: asn1.OPTIONAL<asn1.NULL>;
            let attributeType: asn1.OPTIONAL<AttributeType[]>;
            let allAttributeValues: asn1.OPTIONAL<AttributeType[]>;
            let allUserAttributeTypesAndValues: asn1.OPTIONAL<asn1.NULL>;
            let attributeValue: asn1.OPTIONAL<AttributeTypeAndValue[]>;
            let selfValue: asn1.OPTIONAL<AttributeType[]>;
            let rangeOfValues: asn1.OPTIONAL<Filter>;
            let maxValueCount: asn1.OPTIONAL<MaxValueCount[]>;
            let maxImmSub: asn1.OPTIONAL<asn1.INTEGER>;
            let restrictedBy: asn1.OPTIONAL<RestrictedValue[]>;
            let contexts: asn1.OPTIONAL<ContextAssertion[]>;
            let classes: asn1.OPTIONAL<Refinement>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                entry: (_el: asn1.ASN1Element): void => {
                    entry = __utils._decode_explicit<asn1.NULL>(
                        () => __utils._decodeNull
                    )(_el);
                },
                allUserAttributeTypes: (_el: asn1.ASN1Element): void => {
                    allUserAttributeTypes = __utils._decode_explicit<asn1.NULL>(
                        () => __utils._decodeNull
                    )(_el);
                },
                attributeType: (_el: asn1.ASN1Element): void => {
                    attributeType = __utils._decode_explicit<AttributeType[]>(
                        () =>
                            __utils._decodeSetOf<AttributeType>(
                                () => _decode_AttributeType
                            )
                    )(_el);
                },
                allAttributeValues: (_el: asn1.ASN1Element): void => {
                    allAttributeValues = __utils._decode_explicit<
                        AttributeType[]
                    >(() =>
                        __utils._decodeSetOf<AttributeType>(
                            () => _decode_AttributeType
                        )
                    )(_el);
                },
                allUserAttributeTypesAndValues: (
                    _el: asn1.ASN1Element
                ): void => {
                    allUserAttributeTypesAndValues = __utils._decode_explicit<
                        asn1.NULL
                    >(() => __utils._decodeNull)(_el);
                },
                attributeValue: (_el: asn1.ASN1Element): void => {
                    attributeValue = __utils._decode_explicit<
                        AttributeTypeAndValue[]
                    >(() =>
                        __utils._decodeSetOf<AttributeTypeAndValue>(
                            () => _decode_AttributeTypeAndValue
                        )
                    )(_el);
                },
                selfValue: (_el: asn1.ASN1Element): void => {
                    selfValue = __utils._decode_explicit<AttributeType[]>(() =>
                        __utils._decodeSetOf<AttributeType>(
                            () => _decode_AttributeType
                        )
                    )(_el);
                },
                rangeOfValues: (_el: asn1.ASN1Element): void => {
                    rangeOfValues = __utils._decode_explicit<Filter>(
                        () => _decode_Filter
                    )(_el);
                },
                maxValueCount: (_el: asn1.ASN1Element): void => {
                    maxValueCount = __utils._decode_explicit<MaxValueCount[]>(
                        () =>
                            __utils._decodeSetOf<MaxValueCount>(
                                () => _decode_MaxValueCount
                            )
                    )(_el);
                },
                maxImmSub: (_el: asn1.ASN1Element): void => {
                    maxImmSub = __utils._decode_explicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                restrictedBy: (_el: asn1.ASN1Element): void => {
                    restrictedBy = __utils._decode_explicit<RestrictedValue[]>(
                        () =>
                            __utils._decodeSetOf<RestrictedValue>(
                                () => _decode_RestrictedValue
                            )
                    )(_el);
                },
                contexts: (_el: asn1.ASN1Element): void => {
                    contexts = __utils._decode_explicit<ContextAssertion[]>(
                        () =>
                            __utils._decodeSetOf<ContextAssertion>(
                                () => _decode_ContextAssertion
                            )
                    )(_el);
                },
                classes: (_el: asn1.ASN1Element): void => {
                    classes = __utils._decode_explicit<Refinement>(
                        () => _decode_Refinement
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ProtectedItems,
                _extension_additions_list_spec_for_ProtectedItems,
                _root_component_type_list_2_spec_for_ProtectedItems,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ProtectedItems(
                /* SEQUENCE_CONSTRUCTOR_CALL */ entry,
                allUserAttributeTypes,
                attributeType,
                allAttributeValues,
                allUserAttributeTypesAndValues,
                attributeValue,
                selfValue,
                rangeOfValues,
                maxValueCount,
                maxImmSub,
                restrictedBy,
                contexts,
                classes,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ProtectedItems(el);
}
export function _encode_ProtectedItems(
    value: ProtectedItems,
    elGetter: __utils.ASN1Encoder<ProtectedItems>
) {
    if (!_cached_encoder_for_ProtectedItems) {
        _cached_encoder_for_ProtectedItems = function (
            value: ProtectedItems,
            elGetter: __utils.ASN1Encoder<ProtectedItems>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.entry === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => __utils._encodeNull,
                                      __utils.BER
                                  )(value.entry, __utils.BER),
                            /* IF_ABSENT  */ value.allUserAttributeTypes ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => __utils._encodeNull,
                                      __utils.BER
                                  )(value.allUserAttributeTypes, __utils.BER),
                            /* IF_ABSENT  */ value.attributeType === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () =>
                                          __utils._encodeSetOf<AttributeType>(
                                              () => _encode_AttributeType,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.attributeType, __utils.BER),
                            /* IF_ABSENT  */ value.allAttributeValues ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () =>
                                          __utils._encodeSetOf<AttributeType>(
                                              () => _encode_AttributeType,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.allAttributeValues, __utils.BER),
                            /* IF_ABSENT  */ value.allUserAttributeTypesAndValues ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () => __utils._encodeNull,
                                      __utils.BER
                                  )(
                                      value.allUserAttributeTypesAndValues,
                                      __utils.BER
                                  ),
                            /* IF_ABSENT  */ value.attributeValue === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      5,
                                      () =>
                                          __utils._encodeSetOf<
                                              AttributeTypeAndValue
                                          >(
                                              () =>
                                                  _encode_AttributeTypeAndValue,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.attributeValue, __utils.BER),
                            /* IF_ABSENT  */ value.selfValue === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      6,
                                      () =>
                                          __utils._encodeSetOf<AttributeType>(
                                              () => _encode_AttributeType,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.selfValue, __utils.BER),
                            /* IF_ABSENT  */ value.rangeOfValues === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      7,
                                      () => _encode_Filter,
                                      __utils.BER
                                  )(value.rangeOfValues, __utils.BER),
                            /* IF_ABSENT  */ value.maxValueCount === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      8,
                                      () =>
                                          __utils._encodeSetOf<MaxValueCount>(
                                              () => _encode_MaxValueCount,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.maxValueCount, __utils.BER),
                            /* IF_ABSENT  */ value.maxImmSub === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      9,
                                      () => __utils._encodeInteger,
                                      __utils.BER
                                  )(value.maxImmSub, __utils.BER),
                            /* IF_ABSENT  */ value.restrictedBy === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      10,
                                      () =>
                                          __utils._encodeSetOf<RestrictedValue>(
                                              () => _encode_RestrictedValue,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.restrictedBy, __utils.BER),
                            /* IF_ABSENT  */ value.contexts === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      11,
                                      () =>
                                          __utils._encodeSetOf<
                                              ContextAssertion
                                          >(
                                              () => _encode_ContextAssertion,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.contexts, __utils.BER),
                            /* IF_ABSENT  */ value.classes === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      12,
                                      () => _encode_Refinement,
                                      __utils.BER
                                  )(value.classes, __utils.BER),
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
    return _cached_encoder_for_ProtectedItems(value, elGetter);
}

export class UserClasses {
    constructor(
        readonly allUsers: asn1.NULL | undefined,
        readonly thisEntry: asn1.NULL | undefined,
        readonly name: NameAndOptionalUID[] | undefined,
        readonly userGroup: NameAndOptionalUID[] | undefined,
        readonly subtree: SubtreeSpecification[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_UserClasses: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "allUsers",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "thisEntry",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "userGroup",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subtree",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UserClasses: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_UserClasses: __utils.ComponentSpec[] = [];
let _cached_decoder_for_UserClasses: __utils.ASN1Decoder<
    UserClasses
> | null = null;
let _cached_encoder_for_UserClasses: __utils.ASN1Encoder<
    UserClasses
> | null = null;
export function _decode_UserClasses(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UserClasses) {
        _cached_decoder_for_UserClasses = function (
            el: asn1.ASN1Element
        ): UserClasses {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let allUsers: asn1.OPTIONAL<asn1.NULL>;
            let thisEntry: asn1.OPTIONAL<asn1.NULL>;
            let name: asn1.OPTIONAL<NameAndOptionalUID[]>;
            let userGroup: asn1.OPTIONAL<NameAndOptionalUID[]>;
            let subtree: asn1.OPTIONAL<SubtreeSpecification[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                allUsers: (_el: asn1.ASN1Element): void => {
                    allUsers = __utils._decode_explicit<asn1.NULL>(
                        () => __utils._decodeNull
                    )(_el);
                },
                thisEntry: (_el: asn1.ASN1Element): void => {
                    thisEntry = __utils._decode_explicit<asn1.NULL>(
                        () => __utils._decodeNull
                    )(_el);
                },
                name: (_el: asn1.ASN1Element): void => {
                    name = __utils._decode_explicit<NameAndOptionalUID[]>(() =>
                        __utils._decodeSetOf<NameAndOptionalUID>(
                            () => _decode_NameAndOptionalUID
                        )
                    )(_el);
                },
                userGroup: (_el: asn1.ASN1Element): void => {
                    userGroup = __utils._decode_explicit<NameAndOptionalUID[]>(
                        () =>
                            __utils._decodeSetOf<NameAndOptionalUID>(
                                () => _decode_NameAndOptionalUID
                            )
                    )(_el);
                },
                subtree: (_el: asn1.ASN1Element): void => {
                    subtree = __utils._decode_explicit<SubtreeSpecification[]>(
                        () =>
                            __utils._decodeSetOf<SubtreeSpecification>(
                                () => _decode_SubtreeSpecification
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UserClasses,
                _extension_additions_list_spec_for_UserClasses,
                _root_component_type_list_2_spec_for_UserClasses,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new UserClasses(
                /* SEQUENCE_CONSTRUCTOR_CALL */ allUsers,
                thisEntry,
                name,
                userGroup,
                subtree,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_UserClasses(el);
}
export function _encode_UserClasses(
    value: UserClasses,
    elGetter: __utils.ASN1Encoder<UserClasses>
) {
    if (!_cached_encoder_for_UserClasses) {
        _cached_encoder_for_UserClasses = function (
            value: UserClasses,
            elGetter: __utils.ASN1Encoder<UserClasses>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.allUsers === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => __utils._encodeNull,
                                      __utils.BER
                                  )(value.allUsers, __utils.BER),
                            /* IF_ABSENT  */ value.thisEntry === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => __utils._encodeNull,
                                      __utils.BER
                                  )(value.thisEntry, __utils.BER),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () =>
                                          __utils._encodeSetOf<
                                              NameAndOptionalUID
                                          >(
                                              () => _encode_NameAndOptionalUID,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.name, __utils.BER),
                            /* IF_ABSENT  */ value.userGroup === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () =>
                                          __utils._encodeSetOf<
                                              NameAndOptionalUID
                                          >(
                                              () => _encode_NameAndOptionalUID,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.userGroup, __utils.BER),
                            /* IF_ABSENT  */ value.subtree === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      4,
                                      () =>
                                          __utils._encodeSetOf<
                                              SubtreeSpecification
                                          >(
                                              () =>
                                                  _encode_SubtreeSpecification,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.subtree, __utils.BER),
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
    return _cached_encoder_for_UserClasses(value, elGetter);
}

export type GrantsAndDenials = asn1.BIT_STRING;
export const GrantsAndDenials_grantAdd: number = 0; /* LONG_NAMED_BIT */
export const grantAdd: number = GrantsAndDenials_grantAdd; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_denyAdd: number = 1; /* LONG_NAMED_BIT */
export const denyAdd: number = GrantsAndDenials_denyAdd; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_grantDiscloseOnError: number = 2; /* LONG_NAMED_BIT */
export const grantDiscloseOnError: number = GrantsAndDenials_grantDiscloseOnError; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_denyDiscloseOnError: number = 3; /* LONG_NAMED_BIT */
export const denyDiscloseOnError: number = GrantsAndDenials_denyDiscloseOnError; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_grantRead: number = 4; /* LONG_NAMED_BIT */
export const grantRead: number = GrantsAndDenials_grantRead; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_denyRead: number = 5; /* LONG_NAMED_BIT */
export const denyRead: number = GrantsAndDenials_denyRead; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_grantRemove: number = 6; /* LONG_NAMED_BIT */
export const grantRemove: number = GrantsAndDenials_grantRemove; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_denyRemove: number = 7; /* LONG_NAMED_BIT */
export const denyRemove: number = GrantsAndDenials_denyRemove; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_grantBrowse: number = 8; /* LONG_NAMED_BIT */
export const grantBrowse: number = GrantsAndDenials_grantBrowse; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_denyBrowse: number = 9; /* LONG_NAMED_BIT */
export const denyBrowse: number = GrantsAndDenials_denyBrowse; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_grantExport: number = 10; /* LONG_NAMED_BIT */
export const grantExport: number = GrantsAndDenials_grantExport; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_denyExport: number = 11; /* LONG_NAMED_BIT */
export const denyExport: number = GrantsAndDenials_denyExport; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_grantImport: number = 12; /* LONG_NAMED_BIT */
export const grantImport: number = GrantsAndDenials_grantImport; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_denyImport: number = 13; /* LONG_NAMED_BIT */
export const denyImport: number = GrantsAndDenials_denyImport; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_grantModify: number = 14; /* LONG_NAMED_BIT */
export const grantModify: number = GrantsAndDenials_grantModify; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_denyModify: number = 15; /* LONG_NAMED_BIT */
export const denyModify: number = GrantsAndDenials_denyModify; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_grantRename: number = 16; /* LONG_NAMED_BIT */
export const grantRename: number = GrantsAndDenials_grantRename; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_denyRename: number = 17; /* LONG_NAMED_BIT */
export const denyRename: number = GrantsAndDenials_denyRename; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_grantReturnDN: number = 18; /* LONG_NAMED_BIT */
export const grantReturnDN: number = GrantsAndDenials_grantReturnDN; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_denyReturnDN: number = 19; /* LONG_NAMED_BIT */
export const denyReturnDN: number = GrantsAndDenials_denyReturnDN; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_grantCompare: number = 20; /* LONG_NAMED_BIT */
export const grantCompare: number = GrantsAndDenials_grantCompare; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_denyCompare: number = 21; /* LONG_NAMED_BIT */
export const denyCompare: number = GrantsAndDenials_denyCompare; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_grantFilterMatch: number = 22; /* LONG_NAMED_BIT */
export const grantFilterMatch: number = GrantsAndDenials_grantFilterMatch; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_denyFilterMatch: number = 23; /* LONG_NAMED_BIT */
export const denyFilterMatch: number = GrantsAndDenials_denyFilterMatch; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_grantInvoke: number = 24; /* LONG_NAMED_BIT */
export const grantInvoke: number = GrantsAndDenials_grantInvoke; /* SHORT_NAMED_BIT */
export const GrantsAndDenials_denyInvoke: number = 25; /* LONG_NAMED_BIT */
export const denyInvoke: number = GrantsAndDenials_denyInvoke; /* SHORT_NAMED_BIT */
let _cached_decoder_for_GrantsAndDenials: __utils.ASN1Decoder<
    GrantsAndDenials
> | null = null;
let _cached_encoder_for_GrantsAndDenials: __utils.ASN1Encoder<
    GrantsAndDenials
> | null = null;
export function _decode_GrantsAndDenials(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_GrantsAndDenials) {
        _cached_decoder_for_GrantsAndDenials = __utils._decodeBitString;
    }
    return _cached_decoder_for_GrantsAndDenials(el);
}
export function _encode_GrantsAndDenials(
    value: GrantsAndDenials,
    elGetter: __utils.ASN1Encoder<GrantsAndDenials>
) {
    if (!_cached_encoder_for_GrantsAndDenials) {
        _cached_encoder_for_GrantsAndDenials = __utils._encodeBitString;
    }
    return _cached_encoder_for_GrantsAndDenials(value, elGetter);
}

export class ItemPermission {
    constructor(
        readonly precedence: Precedence | undefined,
        readonly userClasses: UserClasses,
        readonly grantsAndDenials: GrantsAndDenials,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ItemPermission: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "precedence",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "userClasses",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "grantsAndDenials",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ItemPermission: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ItemPermission: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ItemPermission: __utils.ASN1Decoder<
    ItemPermission
> | null = null;
let _cached_encoder_for_ItemPermission: __utils.ASN1Encoder<
    ItemPermission
> | null = null;
export function _decode_ItemPermission(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ItemPermission) {
        _cached_decoder_for_ItemPermission = function (
            el: asn1.ASN1Element
        ): ItemPermission {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let precedence: asn1.OPTIONAL<Precedence>;
            let userClasses!: UserClasses;
            let grantsAndDenials!: GrantsAndDenials;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                precedence: (_el: asn1.ASN1Element): void => {
                    precedence = _decode_Precedence(_el);
                },
                userClasses: (_el: asn1.ASN1Element): void => {
                    userClasses = _decode_UserClasses(_el);
                },
                grantsAndDenials: (_el: asn1.ASN1Element): void => {
                    grantsAndDenials = _decode_GrantsAndDenials(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ItemPermission,
                _extension_additions_list_spec_for_ItemPermission,
                _root_component_type_list_2_spec_for_ItemPermission,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ItemPermission(
                /* SEQUENCE_CONSTRUCTOR_CALL */ precedence,
                userClasses,
                grantsAndDenials,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ItemPermission(el);
}
export function _encode_ItemPermission(
    value: ItemPermission,
    elGetter: __utils.ASN1Encoder<ItemPermission>
) {
    if (!_cached_encoder_for_ItemPermission) {
        _cached_encoder_for_ItemPermission = function (
            value: ItemPermission,
            elGetter: __utils.ASN1Encoder<ItemPermission>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.precedence === undefined
                                ? undefined
                                : _encode_Precedence(
                                      value.precedence,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ _encode_UserClasses(
                                value.userClasses,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_GrantsAndDenials(
                                value.grantsAndDenials,
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
    return _cached_encoder_for_ItemPermission(value, elGetter);
}

export class ACIItem_itemOrUserFirst_itemFirst {
    constructor(
        readonly protectedItems: ProtectedItems,
        readonly itemPermissions: ItemPermission[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ACIItem_itemOrUserFirst_itemFirst: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "protectedItems",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "itemPermissions",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ACIItem_itemOrUserFirst_itemFirst: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ACIItem_itemOrUserFirst_itemFirst: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ACIItem_itemOrUserFirst_itemFirst: __utils.ASN1Decoder<
    ACIItem_itemOrUserFirst_itemFirst
> | null = null;
let _cached_encoder_for_ACIItem_itemOrUserFirst_itemFirst: __utils.ASN1Encoder<
    ACIItem_itemOrUserFirst_itemFirst
> | null = null;
export function _decode_ACIItem_itemOrUserFirst_itemFirst(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_ACIItem_itemOrUserFirst_itemFirst) {
        _cached_decoder_for_ACIItem_itemOrUserFirst_itemFirst = function (
            el: asn1.ASN1Element
        ): ACIItem_itemOrUserFirst_itemFirst {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ACIItem-itemOrUserFirst-itemFirst contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "protectedItems";
            sequence[1].name = "itemPermissions";
            let protectedItems!: ProtectedItems;
            let itemPermissions!: ItemPermission[];
            protectedItems = _decode_ProtectedItems(sequence[0]);
            itemPermissions = __utils._decodeSetOf<ItemPermission>(
                () => _decode_ItemPermission
            )(sequence[1]);
            // TODO: Validate values.
            return new ACIItem_itemOrUserFirst_itemFirst(
                protectedItems,
                itemPermissions,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_ACIItem_itemOrUserFirst_itemFirst(el);
}
export function _encode_ACIItem_itemOrUserFirst_itemFirst(
    value: ACIItem_itemOrUserFirst_itemFirst,
    elGetter: __utils.ASN1Encoder<ACIItem_itemOrUserFirst_itemFirst>
) {
    if (!_cached_encoder_for_ACIItem_itemOrUserFirst_itemFirst) {
        _cached_encoder_for_ACIItem_itemOrUserFirst_itemFirst = function (
            value: ACIItem_itemOrUserFirst_itemFirst,
            elGetter: __utils.ASN1Encoder<ACIItem_itemOrUserFirst_itemFirst>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ProtectedItems(
                                value.protectedItems,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeSetOf<
                                ItemPermission
                            >(() => _encode_ItemPermission, __utils.BER)(
                                value.itemPermissions,
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
    return _cached_encoder_for_ACIItem_itemOrUserFirst_itemFirst(
        value,
        elGetter
    );
}

export class UserPermission {
    constructor(
        readonly precedence: Precedence | undefined,
        readonly protectedItems: ProtectedItems,
        readonly grantsAndDenials: GrantsAndDenials,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_UserPermission: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "precedence",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "protectedItems",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "grantsAndDenials",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UserPermission: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_UserPermission: __utils.ComponentSpec[] = [];
let _cached_decoder_for_UserPermission: __utils.ASN1Decoder<
    UserPermission
> | null = null;
let _cached_encoder_for_UserPermission: __utils.ASN1Encoder<
    UserPermission
> | null = null;
export function _decode_UserPermission(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UserPermission) {
        _cached_decoder_for_UserPermission = function (
            el: asn1.ASN1Element
        ): UserPermission {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let precedence: asn1.OPTIONAL<Precedence>;
            let protectedItems!: ProtectedItems;
            let grantsAndDenials!: GrantsAndDenials;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                precedence: (_el: asn1.ASN1Element): void => {
                    precedence = _decode_Precedence(_el);
                },
                protectedItems: (_el: asn1.ASN1Element): void => {
                    protectedItems = _decode_ProtectedItems(_el);
                },
                grantsAndDenials: (_el: asn1.ASN1Element): void => {
                    grantsAndDenials = _decode_GrantsAndDenials(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UserPermission,
                _extension_additions_list_spec_for_UserPermission,
                _root_component_type_list_2_spec_for_UserPermission,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new UserPermission(
                /* SEQUENCE_CONSTRUCTOR_CALL */ precedence,
                protectedItems,
                grantsAndDenials,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_UserPermission(el);
}
export function _encode_UserPermission(
    value: UserPermission,
    elGetter: __utils.ASN1Encoder<UserPermission>
) {
    if (!_cached_encoder_for_UserPermission) {
        _cached_encoder_for_UserPermission = function (
            value: UserPermission,
            elGetter: __utils.ASN1Encoder<UserPermission>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.precedence === undefined
                                ? undefined
                                : _encode_Precedence(
                                      value.precedence,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ _encode_ProtectedItems(
                                value.protectedItems,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_GrantsAndDenials(
                                value.grantsAndDenials,
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
    return _cached_encoder_for_UserPermission(value, elGetter);
}

export class ACIItem_itemOrUserFirst_userFirst {
    constructor(
        readonly userClasses: UserClasses,
        readonly userPermissions: UserPermission[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ACIItem_itemOrUserFirst_userFirst: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "userClasses",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "userPermissions",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ACIItem_itemOrUserFirst_userFirst: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ACIItem_itemOrUserFirst_userFirst: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ACIItem_itemOrUserFirst_userFirst: __utils.ASN1Decoder<
    ACIItem_itemOrUserFirst_userFirst
> | null = null;
let _cached_encoder_for_ACIItem_itemOrUserFirst_userFirst: __utils.ASN1Encoder<
    ACIItem_itemOrUserFirst_userFirst
> | null = null;
export function _decode_ACIItem_itemOrUserFirst_userFirst(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_ACIItem_itemOrUserFirst_userFirst) {
        _cached_decoder_for_ACIItem_itemOrUserFirst_userFirst = function (
            el: asn1.ASN1Element
        ): ACIItem_itemOrUserFirst_userFirst {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "ACIItem-itemOrUserFirst-userFirst contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "userClasses";
            sequence[1].name = "userPermissions";
            let userClasses!: UserClasses;
            let userPermissions!: UserPermission[];
            userClasses = _decode_UserClasses(sequence[0]);
            userPermissions = __utils._decodeSetOf<UserPermission>(
                () => _decode_UserPermission
            )(sequence[1]);
            // TODO: Validate values.
            return new ACIItem_itemOrUserFirst_userFirst(
                userClasses,
                userPermissions,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_ACIItem_itemOrUserFirst_userFirst(el);
}
export function _encode_ACIItem_itemOrUserFirst_userFirst(
    value: ACIItem_itemOrUserFirst_userFirst,
    elGetter: __utils.ASN1Encoder<ACIItem_itemOrUserFirst_userFirst>
) {
    if (!_cached_encoder_for_ACIItem_itemOrUserFirst_userFirst) {
        _cached_encoder_for_ACIItem_itemOrUserFirst_userFirst = function (
            value: ACIItem_itemOrUserFirst_userFirst,
            elGetter: __utils.ASN1Encoder<ACIItem_itemOrUserFirst_userFirst>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_UserClasses(
                                value.userClasses,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeSetOf<
                                UserPermission
                            >(() => _encode_UserPermission, __utils.BER)(
                                value.userPermissions,
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
    return _cached_encoder_for_ACIItem_itemOrUserFirst_userFirst(
        value,
        elGetter
    );
}

export type ACIItem_itemOrUserFirst =
    | { itemFirst: ACIItem_itemOrUserFirst_itemFirst } /* CHOICE_ALT_ROOT */
    | { userFirst: ACIItem_itemOrUserFirst_userFirst } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ACIItem_itemOrUserFirst: __utils.ASN1Decoder<
    ACIItem_itemOrUserFirst
> | null = null;
let _cached_encoder_for_ACIItem_itemOrUserFirst: __utils.ASN1Encoder<
    ACIItem_itemOrUserFirst
> | null = null;
export function _decode_ACIItem_itemOrUserFirst(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ACIItem_itemOrUserFirst) {
        _cached_decoder_for_ACIItem_itemOrUserFirst = __utils._decode_extensible_choice<
            ACIItem_itemOrUserFirst
        >({
            "CONTEXT 0": [
                "itemFirst",
                __utils._decode_explicit<ACIItem_itemOrUserFirst_itemFirst>(
                    () => _decode_ACIItem_itemOrUserFirst_itemFirst
                ),
            ],
            "CONTEXT 1": [
                "userFirst",
                __utils._decode_explicit<ACIItem_itemOrUserFirst_userFirst>(
                    () => _decode_ACIItem_itemOrUserFirst_userFirst
                ),
            ],
        });
    }
    return _cached_decoder_for_ACIItem_itemOrUserFirst(el);
}
export function _encode_ACIItem_itemOrUserFirst(
    value: ACIItem_itemOrUserFirst,
    elGetter: __utils.ASN1Encoder<ACIItem_itemOrUserFirst>
) {
    if (!_cached_encoder_for_ACIItem_itemOrUserFirst) {
        _cached_encoder_for_ACIItem_itemOrUserFirst = __utils._encode_choice<
            ACIItem_itemOrUserFirst
        >(
            {
                itemFirst: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_ACIItem_itemOrUserFirst_itemFirst,
                    __utils.BER
                ),
                userFirst: __utils._encode_explicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_ACIItem_itemOrUserFirst_userFirst,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ACIItem_itemOrUserFirst(value, elGetter);
}

export class ACIItem {
    constructor(
        readonly identificationTag: UnboundedDirectoryString,
        readonly precedence: Precedence,
        readonly authenticationLevel: AuthenticationLevel,
        readonly itemOrUserFirst: ACIItem_itemOrUserFirst,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ACIItem: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "identificationTag",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "precedence",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "authenticationLevel",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "itemOrUserFirst",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ACIItem: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ACIItem: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ACIItem: __utils.ASN1Decoder<ACIItem> | null = null;
let _cached_encoder_for_ACIItem: __utils.ASN1Encoder<ACIItem> | null = null;
export function _decode_ACIItem(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ACIItem) {
        _cached_decoder_for_ACIItem = function (el: asn1.ASN1Element): ACIItem {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new asn1.ASN1ConstructionError(
                    "ACIItem contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "identificationTag";
            sequence[1].name = "precedence";
            sequence[2].name = "authenticationLevel";
            sequence[3].name = "itemOrUserFirst";
            let identificationTag!: UnboundedDirectoryString;
            let precedence!: Precedence;
            let authenticationLevel!: AuthenticationLevel;
            let itemOrUserFirst!: ACIItem_itemOrUserFirst;
            identificationTag = _decode_UnboundedDirectoryString(sequence[0]);
            precedence = _decode_Precedence(sequence[1]);
            authenticationLevel = _decode_AuthenticationLevel(sequence[2]);
            itemOrUserFirst = _decode_ACIItem_itemOrUserFirst(sequence[3]);
            // TODO: Validate values.
            return new ACIItem(
                identificationTag,
                precedence,
                authenticationLevel,
                itemOrUserFirst,
                sequence.slice(4)
            );
        };
    }
    return _cached_decoder_for_ACIItem(el);
}
export function _encode_ACIItem(
    value: ACIItem,
    elGetter: __utils.ASN1Encoder<ACIItem>
) {
    if (!_cached_encoder_for_ACIItem) {
        _cached_encoder_for_ACIItem = function (
            value: ACIItem,
            elGetter: __utils.ASN1Encoder<ACIItem>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_UnboundedDirectoryString(
                                value.identificationTag,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_Precedence(
                                value.precedence,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_AuthenticationLevel(
                                value.authenticationLevel,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_ACIItem_itemOrUserFirst(
                                value.itemOrUserFirst,
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
    return _cached_encoder_for_ACIItem(value, elGetter);
}

// TODO: ObjectAssignment: prescriptiveACI

// TODO: ObjectAssignment: entryACI

// TODO: ObjectAssignment: subentryACI

export const id_aca_accessControlScheme: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_aca
);

export const id_aca_prescriptiveACI: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_aca
);

export const id_aca_entryACI: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    id_aca
);

export const id_aca_subentryACI: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    id_aca
);

export const basicAccessControlScheme: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_acScheme
);

export const simplifiedAccessControlScheme: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_acScheme
);

export const rule_based_access_control: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [3],
    id_acScheme
);

export const rule_and_basic_access_control: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_acScheme
);

export const rule_and_simple_access_control: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    id_acScheme
);

/* END_MODULE BasicAccessControl */