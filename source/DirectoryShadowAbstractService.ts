/*
    BEGIN_MODULE DirectoryShadowAbstractService
    OID: joint-iso-itu-t.ds.module.directoryShadowAbstractService.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    CommonResultsSeq,
    ContextSelection,
    EntryModification,
    SecurityParameters,
    _decode_ContextSelection,
    _decode_EntryModification,
    _decode_SecurityParameters,
    _encode_ContextSelection,
    _encode_EntryModification,
    _encode_SecurityParameters,
} from "./DirectoryAbstractService";
import {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "./DistributedOperations";
import {
    DSEType,
    SupplierAndConsumers,
    _decode_DSEType,
    _decode_SupplierAndConsumers,
    _encode_DSEType,
    _encode_SupplierAndConsumers,
} from "./DSAOperationalAttributeTypes";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "./EnhancedSecurity";
import {
    Attribute,
    AttributeType,
    DistinguishedName,
    RelativeDistinguishedName,
    SubtreeSpecification,
    _decode_Attribute,
    _decode_AttributeType,
    _decode_DistinguishedName,
    _decode_RelativeDistinguishedName,
    _decode_SubtreeSpecification,
    _encode_Attribute,
    _encode_AttributeType,
    _encode_DistinguishedName,
    _encode_RelativeDistinguishedName,
    _encode_SubtreeSpecification,
} from "./InformationFramework";
import {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "./OperationalBindingManagement";
import * as __utils from "./__utils";
export {
    id_errcode_shadowError,
    id_opcode_coordinateShadowUpdate,
    id_opcode_requestShadowUpdate,
    id_opcode_updateShadow,
} from "./CommonProtocolSpecification";
export {
    CommonResultsSeq,
    ContextSelection,
    EntryModification,
    SecurityParameters,
    _decode_CommonResultsSeq,
    _decode_ContextSelection,
    _decode_EntryModification,
    _decode_SecurityParameters,
    _encode_CommonResultsSeq,
    _encode_ContextSelection,
    _encode_EntryModification,
    _encode_SecurityParameters,
} from "./DirectoryAbstractService";
export { id_op_binding_shadow } from "./DirectoryOperationalBindingTypes";
export {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "./DistributedOperations";
export {
    DSEType,
    DSEType_admPoint as admPoint /* IMPORTED_BIT */,
    DSEType_alias as alias /* IMPORTED_BIT */,
    DSEType_cp as cp /* IMPORTED_BIT */,
    DSEType_ditBridge as ditBridge /* IMPORTED_BIT */,
    DSEType_dsSubentry as dsSubentry /* IMPORTED_BIT */,
    DSEType_entry as entry /* IMPORTED_BIT */,
    DSEType_familyMember as familyMember /* IMPORTED_BIT */,
    DSEType_glue as glue /* IMPORTED_BIT */,
    DSEType_immSupr as immSupr /* IMPORTED_BIT */,
    DSEType_nssr as nssr /* IMPORTED_BIT */,
    DSEType_rhob as rhob /* IMPORTED_BIT */,
    DSEType_root as root /* IMPORTED_BIT */,
    DSEType_sa as sa /* IMPORTED_BIT */,
    DSEType_subentry as subentry /* IMPORTED_BIT */,
    DSEType_subr as subr /* IMPORTED_BIT */,
    DSEType_supr as supr /* IMPORTED_BIT */,
    DSEType_xr as xr /* IMPORTED_BIT */,
    SupplierAndConsumers,
    _decode_DSEType,
    _decode_SupplierAndConsumers,
    _encode_DSEType,
    _encode_SupplierAndConsumers,
} from "./DSAOperationalAttributeTypes";
export {
    OPTIONALLY_PROTECTED,
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "./EnhancedSecurity";
export {
    Attribute,
    AttributeType,
    DistinguishedName,
    RelativeDistinguishedName,
    SubtreeSpecification,
    _decode_Attribute,
    _decode_AttributeType,
    _decode_DistinguishedName,
    _decode_RelativeDistinguishedName,
    _decode_SubtreeSpecification,
    _encode_Attribute,
    _encode_AttributeType,
    _encode_DistinguishedName,
    _encode_RelativeDistinguishedName,
    _encode_SubtreeSpecification,
} from "./InformationFramework";
export {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "./OperationalBindingManagement";
export {
    commonProtocolSpecification,
    directoryAbstractService,
    directoryOperationalBindingTypes,
    directoryOSIProtocols,
    distributedOperations,
    dsaOperationalAttributeTypes,
    enhancedSecurity,
    informationFramework,
    opBindingManagement,
} from "./UsefulDefinitions";

// TODO: ObjectAssignment: dSAShadowBind

// TODO: ObjectAssignment: shadowOperationalBinding

export class ModificationParameter {
    constructor(
        readonly secondaryShadows: SupplierAndConsumers[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ModificationParameter: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "secondaryShadows",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ModificationParameter: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ModificationParameter: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ModificationParameter: __utils.ASN1Decoder<
    ModificationParameter
> | null = null;
let _cached_encoder_for_ModificationParameter: __utils.ASN1Encoder<
    ModificationParameter
> | null = null;
export function _decode_ModificationParameter(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ModificationParameter) {
        _cached_decoder_for_ModificationParameter = function (
            el: asn1.ASN1Element
        ): ModificationParameter {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new asn1.ASN1ConstructionError(
                    "ModificationParameter contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "secondaryShadows";
            let secondaryShadows!: SupplierAndConsumers[];
            secondaryShadows = __utils._decodeSetOf<SupplierAndConsumers>(
                () => _decode_SupplierAndConsumers
            )(sequence[0]);
            // TODO: Validate values.
            return new ModificationParameter(
                secondaryShadows,
                sequence.slice(1)
            );
        };
    }
    return _cached_decoder_for_ModificationParameter(el);
}
export function _encode_ModificationParameter(
    value: ModificationParameter,
    elGetter: __utils.ASN1Encoder<ModificationParameter>
) {
    if (!_cached_encoder_for_ModificationParameter) {
        _cached_encoder_for_ModificationParameter = function (
            value: ModificationParameter,
            elGetter: __utils.ASN1Encoder<ModificationParameter>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ __utils._encodeSetOf<
                                SupplierAndConsumers
                            >(() => _encode_SupplierAndConsumers, __utils.BER)(
                                value.secondaryShadows,
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
    return _cached_encoder_for_ModificationParameter(value, elGetter);
}

export class AreaSpecification {
    constructor(
        readonly contextPrefix: DistinguishedName,
        readonly replicationArea: SubtreeSpecification,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AreaSpecification: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "contextPrefix",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "replicationArea",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AreaSpecification: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AreaSpecification: __utils.ComponentSpec[] = [];
let _cached_decoder_for_AreaSpecification: __utils.ASN1Decoder<
    AreaSpecification
> | null = null;
let _cached_encoder_for_AreaSpecification: __utils.ASN1Encoder<
    AreaSpecification
> | null = null;
export function _decode_AreaSpecification(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AreaSpecification) {
        _cached_decoder_for_AreaSpecification = function (
            el: asn1.ASN1Element
        ): AreaSpecification {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "AreaSpecification contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "contextPrefix";
            sequence[1].name = "replicationArea";
            let contextPrefix!: DistinguishedName;
            let replicationArea!: SubtreeSpecification;
            contextPrefix = _decode_DistinguishedName(sequence[0]);
            replicationArea = _decode_SubtreeSpecification(sequence[1]);
            // TODO: Validate values.
            return new AreaSpecification(
                contextPrefix,
                replicationArea,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_AreaSpecification(el);
}
export function _encode_AreaSpecification(
    value: AreaSpecification,
    elGetter: __utils.ASN1Encoder<AreaSpecification>
) {
    if (!_cached_encoder_for_AreaSpecification) {
        _cached_encoder_for_AreaSpecification = function (
            value: AreaSpecification,
            elGetter: __utils.ASN1Encoder<AreaSpecification>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_DistinguishedName(
                                value.contextPrefix,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_SubtreeSpecification(
                                value.replicationArea,
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
    return _cached_encoder_for_AreaSpecification(value, elGetter);
}

export type AttributeTypes = AttributeType[]; // SetOfType
let _cached_decoder_for_AttributeTypes: __utils.ASN1Decoder<
    AttributeTypes
> | null = null;
let _cached_encoder_for_AttributeTypes: __utils.ASN1Encoder<
    AttributeTypes
> | null = null;
export function _decode_AttributeTypes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeTypes) {
        _cached_decoder_for_AttributeTypes = __utils._decodeSetOf<
            AttributeType
        >(() => _decode_AttributeType);
    }
    return _cached_decoder_for_AttributeTypes(el);
}
export function _encode_AttributeTypes(
    value: AttributeTypes,
    elGetter: __utils.ASN1Encoder<AttributeTypes>
) {
    if (!_cached_encoder_for_AttributeTypes) {
        _cached_encoder_for_AttributeTypes = __utils._encodeSetOf<
            AttributeType
        >(() => _encode_AttributeType, __utils.BER);
    }
    return _cached_encoder_for_AttributeTypes(value, elGetter);
}

export type ClassAttributes =
    | { allAttributes: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { include: AttributeTypes } /* CHOICE_ALT_ROOT */
    | { exclude: AttributeTypes } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ClassAttributes: __utils.ASN1Decoder<
    ClassAttributes
> | null = null;
let _cached_encoder_for_ClassAttributes: __utils.ASN1Encoder<
    ClassAttributes
> | null = null;
export function _decode_ClassAttributes(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ClassAttributes) {
        _cached_decoder_for_ClassAttributes = __utils._decode_extensible_choice<
            ClassAttributes
        >({
            "UNIVERSAL 5": ["allAttributes", __utils._decodeNull],
            "CONTEXT 0": [
                "include",
                __utils._decode_implicit<AttributeTypes>(
                    () => _decode_AttributeTypes
                ),
            ],
            "CONTEXT 1": [
                "exclude",
                __utils._decode_implicit<AttributeTypes>(
                    () => _decode_AttributeTypes
                ),
            ],
        });
    }
    return _cached_decoder_for_ClassAttributes(el);
}
export function _encode_ClassAttributes(
    value: ClassAttributes,
    elGetter: __utils.ASN1Encoder<ClassAttributes>
) {
    if (!_cached_encoder_for_ClassAttributes) {
        _cached_encoder_for_ClassAttributes = __utils._encode_choice<
            ClassAttributes
        >(
            {
                allAttributes: __utils._encodeNull,
                include: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_AttributeTypes,
                    __utils.BER
                ),
                exclude: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_AttributeTypes,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ClassAttributes(value, elGetter);
}

export class ClassAttributeSelection {
    constructor(
        readonly class_: asn1.OBJECT_IDENTIFIER | undefined,
        readonly classAttributes: ClassAttributes | undefined
    ) {}
    public static get _default_value_for_classAttributes() {
        return { allAttributes: null };
    }
}
export const _root_component_type_list_1_spec_for_ClassAttributeSelection: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "class",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "classAttributes",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ClassAttributeSelection: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ClassAttributeSelection: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ClassAttributeSelection: __utils.ASN1Decoder<
    ClassAttributeSelection
> | null = null;
let _cached_encoder_for_ClassAttributeSelection: __utils.ASN1Encoder<
    ClassAttributeSelection
> | null = null;
export function _decode_ClassAttributeSelection(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ClassAttributeSelection) {
        _cached_decoder_for_ClassAttributeSelection = function (
            el: asn1.ASN1Element
        ): ClassAttributeSelection {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let class_: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
            let classAttributes: asn1.OPTIONAL<ClassAttributes> =
                ClassAttributeSelection._default_value_for_classAttributes;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                class: (_el: asn1.ASN1Element): void => {
                    class_ = __utils._decodeObjectIdentifier(_el);
                },
                classAttributes: (_el: asn1.ASN1Element): void => {
                    classAttributes = _decode_ClassAttributes(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ClassAttributeSelection,
                _extension_additions_list_spec_for_ClassAttributeSelection,
                _root_component_type_list_2_spec_for_ClassAttributeSelection,
                undefined
            );
            return new ClassAttributeSelection(
                /* SEQUENCE_CONSTRUCTOR_CALL */ class_,
                classAttributes
            );
        };
    }
    return _cached_decoder_for_ClassAttributeSelection(el);
}
export function _encode_ClassAttributeSelection(
    value: ClassAttributeSelection,
    elGetter: __utils.ASN1Encoder<ClassAttributeSelection>
) {
    if (!_cached_encoder_for_ClassAttributeSelection) {
        _cached_encoder_for_ClassAttributeSelection = function (
            value: ClassAttributeSelection,
            elGetter: __utils.ASN1Encoder<ClassAttributeSelection>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.class_ === undefined
                            ? undefined
                            : __utils._encodeObjectIdentifier(
                                  value.class_,
                                  __utils.BER
                              ),
                        /* IF_DEFAULT */ value.classAttributes === undefined ||
                        __utils.deepEq(
                            value.classAttributes,
                            ClassAttributeSelection._default_value_for_classAttributes
                        )
                            ? undefined
                            : _encode_ClassAttributes(
                                  value.classAttributes,
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
    return _cached_encoder_for_ClassAttributeSelection(value, elGetter);
}

export type AttributeSelection = ClassAttributeSelection[]; // SetOfType
let _cached_decoder_for_AttributeSelection: __utils.ASN1Decoder<
    AttributeSelection
> | null = null;
let _cached_encoder_for_AttributeSelection: __utils.ASN1Encoder<
    AttributeSelection
> | null = null;
export function _decode_AttributeSelection(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AttributeSelection) {
        _cached_decoder_for_AttributeSelection = __utils._decodeSetOf<
            ClassAttributeSelection
        >(() => _decode_ClassAttributeSelection);
    }
    return _cached_decoder_for_AttributeSelection(el);
}
export function _encode_AttributeSelection(
    value: AttributeSelection,
    elGetter: __utils.ASN1Encoder<AttributeSelection>
) {
    if (!_cached_encoder_for_AttributeSelection) {
        _cached_encoder_for_AttributeSelection = __utils._encodeSetOf<
            ClassAttributeSelection
        >(() => _encode_ClassAttributeSelection, __utils.BER);
    }
    return _cached_encoder_for_AttributeSelection(value, elGetter);
}

export enum Knowledge_knowledgeType {
    master = 0,
    shadow = 1,
    both = 2,
}
export const Knowledge_knowledgeType_master: Knowledge_knowledgeType =
    Knowledge_knowledgeType.master; /* LONG_NAMED_ENUMERATED_VALUE */
export const master: Knowledge_knowledgeType =
    Knowledge_knowledgeType.master; /* SHORT_NAMED_ENUMERATED_VALUE */
export const Knowledge_knowledgeType_shadow: Knowledge_knowledgeType =
    Knowledge_knowledgeType.shadow; /* LONG_NAMED_ENUMERATED_VALUE */
export const shadow: Knowledge_knowledgeType =
    Knowledge_knowledgeType.shadow; /* SHORT_NAMED_ENUMERATED_VALUE */
export const Knowledge_knowledgeType_both: Knowledge_knowledgeType =
    Knowledge_knowledgeType.both; /* LONG_NAMED_ENUMERATED_VALUE */
export const both: Knowledge_knowledgeType =
    Knowledge_knowledgeType.both; /* SHORT_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_Knowledge_knowledgeType: __utils.ASN1Decoder<
    Knowledge_knowledgeType
> | null = null;
let _cached_encoder_for_Knowledge_knowledgeType: __utils.ASN1Encoder<
    Knowledge_knowledgeType
> | null = null;
export function _decode_Knowledge_knowledgeType(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Knowledge_knowledgeType) {
        _cached_decoder_for_Knowledge_knowledgeType = __utils._decodeEnumerated;
    }
    return _cached_decoder_for_Knowledge_knowledgeType(el);
}
export function _encode_Knowledge_knowledgeType(
    value: Knowledge_knowledgeType,
    elGetter: __utils.ASN1Encoder<Knowledge_knowledgeType>
) {
    if (!_cached_encoder_for_Knowledge_knowledgeType) {
        _cached_encoder_for_Knowledge_knowledgeType = __utils._encodeEnumerated;
    }
    return _cached_encoder_for_Knowledge_knowledgeType(value, elGetter);
}

export class Knowledge {
    constructor(
        readonly knowledgeType: Knowledge_knowledgeType,
        readonly extendedKnowledge: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_extendedKnowledge() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_Knowledge: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "knowledgeType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extendedKnowledge",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Knowledge: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Knowledge: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Knowledge: __utils.ASN1Decoder<Knowledge> | null = null;
let _cached_encoder_for_Knowledge: __utils.ASN1Encoder<Knowledge> | null = null;
export function _decode_Knowledge(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Knowledge) {
        _cached_decoder_for_Knowledge = function (
            el: asn1.ASN1Element
        ): Knowledge {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let knowledgeType!: Knowledge_knowledgeType;
            let extendedKnowledge: asn1.OPTIONAL<asn1.BOOLEAN> =
                Knowledge._default_value_for_extendedKnowledge;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                knowledgeType: (_el: asn1.ASN1Element): void => {
                    knowledgeType = _decode_Knowledge_knowledgeType(_el);
                },
                extendedKnowledge: (_el: asn1.ASN1Element): void => {
                    extendedKnowledge = __utils._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Knowledge,
                _extension_additions_list_spec_for_Knowledge,
                _root_component_type_list_2_spec_for_Knowledge,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Knowledge(
                /* SEQUENCE_CONSTRUCTOR_CALL */ knowledgeType,
                extendedKnowledge,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Knowledge(el);
}
export function _encode_Knowledge(
    value: Knowledge,
    elGetter: __utils.ASN1Encoder<Knowledge>
) {
    if (!_cached_encoder_for_Knowledge) {
        _cached_encoder_for_Knowledge = function (
            value: Knowledge,
            elGetter: __utils.ASN1Encoder<Knowledge>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Knowledge_knowledgeType(
                                value.knowledgeType,
                                __utils.BER
                            ),
                            /* IF_DEFAULT */ value.extendedKnowledge ===
                                undefined ||
                            __utils.deepEq(
                                value.extendedKnowledge,
                                Knowledge._default_value_for_extendedKnowledge
                            )
                                ? undefined
                                : __utils._encodeBoolean(
                                      value.extendedKnowledge,
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
    return _cached_encoder_for_Knowledge(value, elGetter);
}

export type UnitOfReplication_supplyContexts =
    | { allContexts: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { selectedContexts: asn1.OBJECT_IDENTIFIER[] } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_UnitOfReplication_supplyContexts: __utils.ASN1Decoder<
    UnitOfReplication_supplyContexts
> | null = null;
let _cached_encoder_for_UnitOfReplication_supplyContexts: __utils.ASN1Encoder<
    UnitOfReplication_supplyContexts
> | null = null;
export function _decode_UnitOfReplication_supplyContexts(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UnitOfReplication_supplyContexts) {
        _cached_decoder_for_UnitOfReplication_supplyContexts = __utils._decode_extensible_choice<
            UnitOfReplication_supplyContexts
        >({
            "UNIVERSAL 5": ["allContexts", __utils._decodeNull],
            "UNIVERSAL 17": [
                "selectedContexts",
                __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(
                    () => __utils._decodeObjectIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_UnitOfReplication_supplyContexts(el);
}
export function _encode_UnitOfReplication_supplyContexts(
    value: UnitOfReplication_supplyContexts,
    elGetter: __utils.ASN1Encoder<UnitOfReplication_supplyContexts>
) {
    if (!_cached_encoder_for_UnitOfReplication_supplyContexts) {
        _cached_encoder_for_UnitOfReplication_supplyContexts = __utils._encode_choice<
            UnitOfReplication_supplyContexts
        >(
            {
                allContexts: __utils._encodeNull,
                selectedContexts: __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(
                    () => __utils._encodeObjectIdentifier,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_UnitOfReplication_supplyContexts(
        value,
        elGetter
    );
}

export class UnitOfReplication {
    constructor(
        readonly area: AreaSpecification,
        readonly attributes: AttributeSelection,
        readonly knowledge: Knowledge | undefined,
        readonly subordinates: asn1.BOOLEAN | undefined,
        readonly contextSelection: ContextSelection | undefined,
        readonly supplyContexts: UnitOfReplication_supplyContexts | undefined
    ) {}
    public static get _default_value_for_subordinates() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_UnitOfReplication: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "area",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributes",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "knowledge",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subordinates",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "contextSelection",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "supplyContexts",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UnitOfReplication: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_UnitOfReplication: __utils.ComponentSpec[] = [];
let _cached_decoder_for_UnitOfReplication: __utils.ASN1Decoder<
    UnitOfReplication
> | null = null;
let _cached_encoder_for_UnitOfReplication: __utils.ASN1Encoder<
    UnitOfReplication
> | null = null;
export function _decode_UnitOfReplication(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UnitOfReplication) {
        _cached_decoder_for_UnitOfReplication = function (
            el: asn1.ASN1Element
        ): UnitOfReplication {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let area!: AreaSpecification;
            let attributes!: AttributeSelection;
            let knowledge: asn1.OPTIONAL<Knowledge>;
            let subordinates: asn1.OPTIONAL<asn1.BOOLEAN> =
                UnitOfReplication._default_value_for_subordinates;
            let contextSelection: asn1.OPTIONAL<ContextSelection>;
            let supplyContexts: asn1.OPTIONAL<UnitOfReplication_supplyContexts>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                area: (_el: asn1.ASN1Element): void => {
                    area = _decode_AreaSpecification(_el);
                },
                attributes: (_el: asn1.ASN1Element): void => {
                    attributes = _decode_AttributeSelection(_el);
                },
                knowledge: (_el: asn1.ASN1Element): void => {
                    knowledge = _decode_Knowledge(_el);
                },
                subordinates: (_el: asn1.ASN1Element): void => {
                    subordinates = __utils._decodeBoolean(_el);
                },
                contextSelection: (_el: asn1.ASN1Element): void => {
                    contextSelection = _decode_ContextSelection(_el);
                },
                supplyContexts: (_el: asn1.ASN1Element): void => {
                    supplyContexts = __utils._decode_implicit<
                        UnitOfReplication_supplyContexts
                    >(() => _decode_UnitOfReplication_supplyContexts)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UnitOfReplication,
                _extension_additions_list_spec_for_UnitOfReplication,
                _root_component_type_list_2_spec_for_UnitOfReplication,
                undefined
            );
            return new UnitOfReplication(
                /* SEQUENCE_CONSTRUCTOR_CALL */ area,
                attributes,
                knowledge,
                subordinates,
                contextSelection,
                supplyContexts
            );
        };
    }
    return _cached_decoder_for_UnitOfReplication(el);
}
export function _encode_UnitOfReplication(
    value: UnitOfReplication,
    elGetter: __utils.ASN1Encoder<UnitOfReplication>
) {
    if (!_cached_encoder_for_UnitOfReplication) {
        _cached_encoder_for_UnitOfReplication = function (
            value: UnitOfReplication,
            elGetter: __utils.ASN1Encoder<UnitOfReplication>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AreaSpecification(
                            value.area,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_AttributeSelection(
                            value.attributes,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.knowledge === undefined
                            ? undefined
                            : _encode_Knowledge(value.knowledge, __utils.BER),
                        /* IF_DEFAULT */ value.subordinates === undefined ||
                        __utils.deepEq(
                            value.subordinates,
                            UnitOfReplication._default_value_for_subordinates
                        )
                            ? undefined
                            : __utils._encodeBoolean(
                                  value.subordinates,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.contextSelection === undefined
                            ? undefined
                            : _encode_ContextSelection(
                                  value.contextSelection,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.supplyContexts === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () =>
                                      _encode_UnitOfReplication_supplyContexts,
                                  __utils.BER
                              )(value.supplyContexts, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_UnitOfReplication(value, elGetter);
}

export type Time = asn1.GeneralizedTime; // GeneralizedTime
let _cached_decoder_for_Time: __utils.ASN1Decoder<Time> | null = null;
let _cached_encoder_for_Time: __utils.ASN1Encoder<Time> | null = null;
export function _decode_Time(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Time) {
        _cached_decoder_for_Time = __utils._decodeGeneralizedTime;
    }
    return _cached_decoder_for_Time(el);
}
export function _encode_Time(value: Time, elGetter: __utils.ASN1Encoder<Time>) {
    if (!_cached_encoder_for_Time) {
        _cached_encoder_for_Time = __utils._encodeGeneralizedTime;
    }
    return _cached_encoder_for_Time(value, elGetter);
}

export class PeriodicStrategy {
    constructor(
        readonly beginTime: Time | undefined,
        readonly windowSize: asn1.INTEGER,
        readonly updateInterval: asn1.INTEGER,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_PeriodicStrategy: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "beginTime",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "windowSize",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "updateInterval",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PeriodicStrategy: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PeriodicStrategy: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PeriodicStrategy: __utils.ASN1Decoder<
    PeriodicStrategy
> | null = null;
let _cached_encoder_for_PeriodicStrategy: __utils.ASN1Encoder<
    PeriodicStrategy
> | null = null;
export function _decode_PeriodicStrategy(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PeriodicStrategy) {
        _cached_decoder_for_PeriodicStrategy = function (
            el: asn1.ASN1Element
        ): PeriodicStrategy {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let beginTime: asn1.OPTIONAL<Time>;
            let windowSize!: asn1.INTEGER;
            let updateInterval!: asn1.INTEGER;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                beginTime: (_el: asn1.ASN1Element): void => {
                    beginTime = _decode_Time(_el);
                },
                windowSize: (_el: asn1.ASN1Element): void => {
                    windowSize = __utils._decodeInteger(_el);
                },
                updateInterval: (_el: asn1.ASN1Element): void => {
                    updateInterval = __utils._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PeriodicStrategy,
                _extension_additions_list_spec_for_PeriodicStrategy,
                _root_component_type_list_2_spec_for_PeriodicStrategy,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PeriodicStrategy(
                /* SEQUENCE_CONSTRUCTOR_CALL */ beginTime,
                windowSize,
                updateInterval,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PeriodicStrategy(el);
}
export function _encode_PeriodicStrategy(
    value: PeriodicStrategy,
    elGetter: __utils.ASN1Encoder<PeriodicStrategy>
) {
    if (!_cached_encoder_for_PeriodicStrategy) {
        _cached_encoder_for_PeriodicStrategy = function (
            value: PeriodicStrategy,
            elGetter: __utils.ASN1Encoder<PeriodicStrategy>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.beginTime === undefined
                                ? undefined
                                : _encode_Time(value.beginTime, __utils.BER),
                            /* REQUIRED   */ __utils._encodeInteger(
                                value.windowSize,
                                __utils.BER
                            ),
                            /* REQUIRED   */ __utils._encodeInteger(
                                value.updateInterval,
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
    return _cached_encoder_for_PeriodicStrategy(value, elGetter);
}

export class SchedulingParameters {
    constructor(
        readonly periodic: PeriodicStrategy | undefined,
        readonly othertimes: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_othertimes() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_SchedulingParameters: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "periodic",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "othertimes",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SchedulingParameters: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SchedulingParameters: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SchedulingParameters: __utils.ASN1Decoder<
    SchedulingParameters
> | null = null;
let _cached_encoder_for_SchedulingParameters: __utils.ASN1Encoder<
    SchedulingParameters
> | null = null;
export function _decode_SchedulingParameters(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SchedulingParameters) {
        _cached_decoder_for_SchedulingParameters = function (
            el: asn1.ASN1Element
        ): SchedulingParameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let periodic: asn1.OPTIONAL<PeriodicStrategy>;
            let othertimes: asn1.OPTIONAL<asn1.BOOLEAN> =
                SchedulingParameters._default_value_for_othertimes;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                periodic: (_el: asn1.ASN1Element): void => {
                    periodic = _decode_PeriodicStrategy(_el);
                },
                othertimes: (_el: asn1.ASN1Element): void => {
                    othertimes = __utils._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SchedulingParameters,
                _extension_additions_list_spec_for_SchedulingParameters,
                _root_component_type_list_2_spec_for_SchedulingParameters,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SchedulingParameters(
                /* SEQUENCE_CONSTRUCTOR_CALL */ periodic,
                othertimes,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SchedulingParameters(el);
}
export function _encode_SchedulingParameters(
    value: SchedulingParameters,
    elGetter: __utils.ASN1Encoder<SchedulingParameters>
) {
    if (!_cached_encoder_for_SchedulingParameters) {
        _cached_encoder_for_SchedulingParameters = function (
            value: SchedulingParameters,
            elGetter: __utils.ASN1Encoder<SchedulingParameters>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.periodic === undefined
                                ? undefined
                                : _encode_PeriodicStrategy(
                                      value.periodic,
                                      __utils.BER
                                  ),
                            /* IF_DEFAULT */ value.othertimes === undefined ||
                            __utils.deepEq(
                                value.othertimes,
                                SchedulingParameters._default_value_for_othertimes
                            )
                                ? undefined
                                : __utils._encodeBoolean(
                                      value.othertimes,
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
    return _cached_encoder_for_SchedulingParameters(value, elGetter);
}

export type SupplierUpdateMode =
    | { onChange: asn1.BOOLEAN } /* CHOICE_ALT_ROOT */
    | { scheduled: SchedulingParameters } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_SupplierUpdateMode: __utils.ASN1Decoder<
    SupplierUpdateMode
> | null = null;
let _cached_encoder_for_SupplierUpdateMode: __utils.ASN1Encoder<
    SupplierUpdateMode
> | null = null;
export function _decode_SupplierUpdateMode(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SupplierUpdateMode) {
        _cached_decoder_for_SupplierUpdateMode = __utils._decode_extensible_choice<
            SupplierUpdateMode
        >({
            "UNIVERSAL 1": ["onChange", __utils._decodeBoolean],
            "UNIVERSAL 16": ["scheduled", _decode_SchedulingParameters],
        });
    }
    return _cached_decoder_for_SupplierUpdateMode(el);
}
export function _encode_SupplierUpdateMode(
    value: SupplierUpdateMode,
    elGetter: __utils.ASN1Encoder<SupplierUpdateMode>
) {
    if (!_cached_encoder_for_SupplierUpdateMode) {
        _cached_encoder_for_SupplierUpdateMode = __utils._encode_choice<
            SupplierUpdateMode
        >(
            {
                onChange: __utils._encodeBoolean,
                scheduled: _encode_SchedulingParameters,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_SupplierUpdateMode(value, elGetter);
}

export type ConsumerUpdateMode = SchedulingParameters; // DefinedType
let _cached_decoder_for_ConsumerUpdateMode: __utils.ASN1Decoder<
    ConsumerUpdateMode
> | null = null;
let _cached_encoder_for_ConsumerUpdateMode: __utils.ASN1Encoder<
    ConsumerUpdateMode
> | null = null;
export function _decode_ConsumerUpdateMode(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ConsumerUpdateMode) {
        _cached_decoder_for_ConsumerUpdateMode = _decode_SchedulingParameters;
    }
    return _cached_decoder_for_ConsumerUpdateMode(el);
}
export function _encode_ConsumerUpdateMode(
    value: ConsumerUpdateMode,
    elGetter: __utils.ASN1Encoder<ConsumerUpdateMode>
) {
    if (!_cached_encoder_for_ConsumerUpdateMode) {
        _cached_encoder_for_ConsumerUpdateMode = _encode_SchedulingParameters;
    }
    return _cached_encoder_for_ConsumerUpdateMode(value, elGetter);
}

export type UpdateMode =
    | { supplierInitiated: SupplierUpdateMode } /* CHOICE_ALT_ROOT */
    | { consumerInitiated: ConsumerUpdateMode } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_UpdateMode: __utils.ASN1Decoder<
    UpdateMode
> | null = null;
let _cached_encoder_for_UpdateMode: __utils.ASN1Encoder<
    UpdateMode
> | null = null;
export function _decode_UpdateMode(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UpdateMode) {
        _cached_decoder_for_UpdateMode = __utils._decode_extensible_choice<
            UpdateMode
        >({
            "CONTEXT 0": [
                "supplierInitiated",
                __utils._decode_implicit<SupplierUpdateMode>(
                    () => _decode_SupplierUpdateMode
                ),
            ],
            "CONTEXT 1": [
                "consumerInitiated",
                __utils._decode_implicit<ConsumerUpdateMode>(
                    () => _decode_ConsumerUpdateMode
                ),
            ],
        });
    }
    return _cached_decoder_for_UpdateMode(el);
}
export function _encode_UpdateMode(
    value: UpdateMode,
    elGetter: __utils.ASN1Encoder<UpdateMode>
) {
    if (!_cached_encoder_for_UpdateMode) {
        _cached_encoder_for_UpdateMode = __utils._encode_choice<UpdateMode>(
            {
                supplierInitiated: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_SupplierUpdateMode,
                    __utils.BER
                ),
                consumerInitiated: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_ConsumerUpdateMode,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_UpdateMode(value, elGetter);
}

export class ShadowingAgreementInfo {
    constructor(
        readonly shadowSubject: UnitOfReplication,
        readonly updateMode: UpdateMode | undefined,
        readonly master: AccessPoint | undefined,
        readonly secondaryShadows: asn1.BOOLEAN | undefined
    ) {}
    public static get _default_value_for_updateMode() {
        return { supplierInitiated: { onChange: true } };
    }
    public static get _default_value_for_secondaryShadows() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_ShadowingAgreementInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "shadowSubject",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "updateMode",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "master",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "secondaryShadows",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ShadowingAgreementInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ShadowingAgreementInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ShadowingAgreementInfo: __utils.ASN1Decoder<
    ShadowingAgreementInfo
> | null = null;
let _cached_encoder_for_ShadowingAgreementInfo: __utils.ASN1Encoder<
    ShadowingAgreementInfo
> | null = null;
export function _decode_ShadowingAgreementInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ShadowingAgreementInfo) {
        _cached_decoder_for_ShadowingAgreementInfo = function (
            el: asn1.ASN1Element
        ): ShadowingAgreementInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let shadowSubject!: UnitOfReplication;
            let updateMode: asn1.OPTIONAL<UpdateMode> =
                ShadowingAgreementInfo._default_value_for_updateMode;
            let master: asn1.OPTIONAL<AccessPoint>;
            let secondaryShadows: asn1.OPTIONAL<asn1.BOOLEAN> =
                ShadowingAgreementInfo._default_value_for_secondaryShadows;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                shadowSubject: (_el: asn1.ASN1Element): void => {
                    shadowSubject = _decode_UnitOfReplication(_el);
                },
                updateMode: (_el: asn1.ASN1Element): void => {
                    updateMode = _decode_UpdateMode(_el);
                },
                master: (_el: asn1.ASN1Element): void => {
                    master = _decode_AccessPoint(_el);
                },
                secondaryShadows: (_el: asn1.ASN1Element): void => {
                    secondaryShadows = __utils._decode_implicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ShadowingAgreementInfo,
                _extension_additions_list_spec_for_ShadowingAgreementInfo,
                _root_component_type_list_2_spec_for_ShadowingAgreementInfo,
                undefined
            );
            return new ShadowingAgreementInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ shadowSubject,
                updateMode,
                master,
                secondaryShadows
            );
        };
    }
    return _cached_decoder_for_ShadowingAgreementInfo(el);
}
export function _encode_ShadowingAgreementInfo(
    value: ShadowingAgreementInfo,
    elGetter: __utils.ASN1Encoder<ShadowingAgreementInfo>
) {
    if (!_cached_encoder_for_ShadowingAgreementInfo) {
        _cached_encoder_for_ShadowingAgreementInfo = function (
            value: ShadowingAgreementInfo,
            elGetter: __utils.ASN1Encoder<ShadowingAgreementInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_UnitOfReplication(
                            value.shadowSubject,
                            __utils.BER
                        ),
                        /* IF_DEFAULT */ value.updateMode === undefined ||
                        __utils.deepEq(
                            value.updateMode,
                            ShadowingAgreementInfo._default_value_for_updateMode
                        )
                            ? undefined
                            : _encode_UpdateMode(value.updateMode, __utils.BER),
                        /* IF_ABSENT  */ value.master === undefined
                            ? undefined
                            : _encode_AccessPoint(value.master, __utils.BER),
                        /* IF_DEFAULT */ value.secondaryShadows === undefined ||
                        __utils.deepEq(
                            value.secondaryShadows,
                            ShadowingAgreementInfo._default_value_for_secondaryShadows
                        )
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  2,
                                  () => __utils._encodeBoolean,
                                  __utils.BER
                              )(value.secondaryShadows, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ShadowingAgreementInfo(value, elGetter);
}

// TODO: ObjectSetAssignment: All-operations-consumer-initiated

// TODO: ObjectSetAssignment: All-operations-supplier-initiated

// TODO: ObjectAssignment: coordinateShadowUpdate

export type AgreementID = OperationalBindingID; // DefinedType
let _cached_decoder_for_AgreementID: __utils.ASN1Decoder<
    AgreementID
> | null = null;
let _cached_encoder_for_AgreementID: __utils.ASN1Encoder<
    AgreementID
> | null = null;
export function _decode_AgreementID(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_AgreementID) {
        _cached_decoder_for_AgreementID = _decode_OperationalBindingID;
    }
    return _cached_decoder_for_AgreementID(el);
}
export function _encode_AgreementID(
    value: AgreementID,
    elGetter: __utils.ASN1Encoder<AgreementID>
) {
    if (!_cached_encoder_for_AgreementID) {
        _cached_encoder_for_AgreementID = _encode_OperationalBindingID;
    }
    return _cached_encoder_for_AgreementID(value, elGetter);
}

export type CoordinateShadowUpdateArgumentData_updateStrategy_standard = asn1.ENUMERATED;
export const CoordinateShadowUpdateArgumentData_updateStrategy_standard_noChanges: CoordinateShadowUpdateArgumentData_updateStrategy_standard = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const CoordinateShadowUpdateArgumentData_updateStrategy_standard_incremental: CoordinateShadowUpdateArgumentData_updateStrategy_standard = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const CoordinateShadowUpdateArgumentData_updateStrategy_standard_total: CoordinateShadowUpdateArgumentData_updateStrategy_standard = 2; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard: __utils.ASN1Decoder<
    CoordinateShadowUpdateArgumentData_updateStrategy_standard
> | null = null;
let _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard: __utils.ASN1Encoder<
    CoordinateShadowUpdateArgumentData_updateStrategy_standard
> | null = null;
export function _decode_CoordinateShadowUpdateArgumentData_updateStrategy_standard(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard
    ) {
        _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard(
        el
    );
}
export function _encode_CoordinateShadowUpdateArgumentData_updateStrategy_standard(
    value: CoordinateShadowUpdateArgumentData_updateStrategy_standard,
    elGetter: __utils.ASN1Encoder<
        CoordinateShadowUpdateArgumentData_updateStrategy_standard
    >
) {
    if (
        !_cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard
    ) {
        _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard(
        value,
        elGetter
    );
}

export type CoordinateShadowUpdateArgumentData_updateStrategy =
    | {
          standard: CoordinateShadowUpdateArgumentData_updateStrategy_standard;
      } /* CHOICE_ALT_ROOT */
    | { other: asn1.EXTERNAL } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy: __utils.ASN1Decoder<
    CoordinateShadowUpdateArgumentData_updateStrategy
> | null = null;
let _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy: __utils.ASN1Encoder<
    CoordinateShadowUpdateArgumentData_updateStrategy
> | null = null;
export function _decode_CoordinateShadowUpdateArgumentData_updateStrategy(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy
    ) {
        _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy = __utils._decode_extensible_choice<
            CoordinateShadowUpdateArgumentData_updateStrategy
        >({
            "UNIVERSAL 10": [
                "standard",
                _decode_CoordinateShadowUpdateArgumentData_updateStrategy_standard,
            ],
            "UNIVERSAL 8": ["other", __utils._decodeExternal],
        });
    }
    return _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy(
        el
    );
}
export function _encode_CoordinateShadowUpdateArgumentData_updateStrategy(
    value: CoordinateShadowUpdateArgumentData_updateStrategy,
    elGetter: __utils.ASN1Encoder<
        CoordinateShadowUpdateArgumentData_updateStrategy
    >
) {
    if (
        !_cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy
    ) {
        _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy = __utils._encode_choice<
            CoordinateShadowUpdateArgumentData_updateStrategy
        >(
            {
                standard: _encode_CoordinateShadowUpdateArgumentData_updateStrategy_standard,
                other: __utils._encodeExternal,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy(
        value,
        elGetter
    );
}

export class CoordinateShadowUpdateArgumentData {
    constructor(
        readonly agreementID: AgreementID,
        readonly lastUpdate: Time | undefined,
        readonly updateStrategy: CoordinateShadowUpdateArgumentData_updateStrategy,
        readonly securityParameters: SecurityParameters | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_CoordinateShadowUpdateArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "agreementID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "lastUpdate",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "updateStrategy",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CoordinateShadowUpdateArgumentData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_CoordinateShadowUpdateArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CoordinateShadowUpdateArgumentData: __utils.ASN1Decoder<
    CoordinateShadowUpdateArgumentData
> | null = null;
let _cached_encoder_for_CoordinateShadowUpdateArgumentData: __utils.ASN1Encoder<
    CoordinateShadowUpdateArgumentData
> | null = null;
export function _decode_CoordinateShadowUpdateArgumentData(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_CoordinateShadowUpdateArgumentData) {
        _cached_decoder_for_CoordinateShadowUpdateArgumentData = __utils._decode_implicit<
            CoordinateShadowUpdateArgumentData
        >(
            () =>
                function (
                    el: asn1.ASN1Element
                ): CoordinateShadowUpdateArgumentData {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let agreementID!: AgreementID;
                    let lastUpdate: asn1.OPTIONAL<Time>;
                    let updateStrategy!: CoordinateShadowUpdateArgumentData_updateStrategy;
                    let securityParameters: asn1.OPTIONAL<SecurityParameters>;
                    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: __utils.DecodingMap = {
                        agreementID: (_el: asn1.ASN1Element): void => {
                            agreementID = _decode_AgreementID(_el);
                        },
                        lastUpdate: (_el: asn1.ASN1Element): void => {
                            lastUpdate = _decode_Time(_el);
                        },
                        updateStrategy: (_el: asn1.ASN1Element): void => {
                            updateStrategy = _decode_CoordinateShadowUpdateArgumentData_updateStrategy(
                                _el
                            );
                        },
                        securityParameters: (_el: asn1.ASN1Element): void => {
                            securityParameters = _decode_SecurityParameters(
                                _el
                            );
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    __utils._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_CoordinateShadowUpdateArgumentData,
                        _extension_additions_list_spec_for_CoordinateShadowUpdateArgumentData,
                        _root_component_type_list_2_spec_for_CoordinateShadowUpdateArgumentData,
                        (ext: asn1.ASN1Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new CoordinateShadowUpdateArgumentData(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ agreementID,
                        lastUpdate,
                        updateStrategy,
                        securityParameters,
                        _unrecognizedExtensionsList
                    );
                }
        );
    }
    return _cached_decoder_for_CoordinateShadowUpdateArgumentData(el);
}
export function _encode_CoordinateShadowUpdateArgumentData(
    value: CoordinateShadowUpdateArgumentData,
    elGetter: __utils.ASN1Encoder<CoordinateShadowUpdateArgumentData>
) {
    if (!_cached_encoder_for_CoordinateShadowUpdateArgumentData) {
        _cached_encoder_for_CoordinateShadowUpdateArgumentData = __utils._encode_implicit(
            asn1.ASN1TagClass.context,
            0,
            () =>
                function (
                    value: CoordinateShadowUpdateArgumentData,
                    elGetter: __utils.ASN1Encoder<
                        CoordinateShadowUpdateArgumentData
                    >
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_AgreementID(
                                        value.agreementID,
                                        __utils.BER
                                    ),
                                    /* IF_ABSENT  */ value.lastUpdate ===
                                    undefined
                                        ? undefined
                                        : _encode_Time(
                                              value.lastUpdate,
                                              __utils.BER
                                          ),
                                    /* REQUIRED   */ _encode_CoordinateShadowUpdateArgumentData_updateStrategy(
                                        value.updateStrategy,
                                        __utils.BER
                                    ),
                                    /* IF_ABSENT  */ value.securityParameters ===
                                    undefined
                                        ? undefined
                                        : _encode_SecurityParameters(
                                              value.securityParameters,
                                              __utils.BER
                                          ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_CoordinateShadowUpdateArgumentData(
        value,
        elGetter
    );
}

export type CoordinateShadowUpdateArgument = OPTIONALLY_PROTECTED<
    CoordinateShadowUpdateArgumentData
>; // DefinedType
let _cached_decoder_for_CoordinateShadowUpdateArgument: __utils.ASN1Decoder<
    CoordinateShadowUpdateArgument
> | null = null;
let _cached_encoder_for_CoordinateShadowUpdateArgument: __utils.ASN1Encoder<
    CoordinateShadowUpdateArgument
> | null = null;
export function _decode_CoordinateShadowUpdateArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CoordinateShadowUpdateArgument) {
        _cached_decoder_for_CoordinateShadowUpdateArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            CoordinateShadowUpdateArgumentData
        >(_decode_CoordinateShadowUpdateArgumentData);
    }
    return _cached_decoder_for_CoordinateShadowUpdateArgument(el);
}
export function _encode_CoordinateShadowUpdateArgument(
    value: CoordinateShadowUpdateArgument,
    elGetter: __utils.ASN1Encoder<CoordinateShadowUpdateArgument>
) {
    if (!_cached_encoder_for_CoordinateShadowUpdateArgument) {
        _cached_encoder_for_CoordinateShadowUpdateArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            CoordinateShadowUpdateArgumentData
        >(_encode_CoordinateShadowUpdateArgumentData);
    }
    return _cached_encoder_for_CoordinateShadowUpdateArgument(value, elGetter);
}

export class CoordinateShadowUpdateResultData {
    constructor(
        readonly agreementID: AgreementID,
        readonly lastUpdate: Time | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly _componentsOf_CommonResultsSeq: CommonResultsSeq
    ) {}
}
export const _root_component_type_list_1_spec_for_CoordinateShadowUpdateResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "agreementID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "lastUpdate",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_CoordinateShadowUpdateResultData: __utils.ComponentSpec[] = [
    /* TODO: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
];
export const _extension_additions_list_spec_for_CoordinateShadowUpdateResultData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_CoordinateShadowUpdateResultData: __utils.ASN1Decoder<
    CoordinateShadowUpdateResultData
> | null = null;
let _cached_encoder_for_CoordinateShadowUpdateResultData: __utils.ASN1Encoder<
    CoordinateShadowUpdateResultData
> | null = null;
export function _decode_CoordinateShadowUpdateResultData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CoordinateShadowUpdateResultData) {
        _cached_decoder_for_CoordinateShadowUpdateResultData = __utils._decode_implicit<
            CoordinateShadowUpdateResultData
        >(
            () =>
                function (
                    el: asn1.ASN1Element
                ): CoordinateShadowUpdateResultData {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let agreementID!: AgreementID;
                    let lastUpdate: asn1.OPTIONAL<Time>;
                    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
                    let _componentsOf!: CommonResultsSeq;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: __utils.DecodingMap = {
                        agreementID: (_el: asn1.ASN1Element): void => {
                            agreementID = _decode_AgreementID(_el);
                        },
                        lastUpdate: (_el: asn1.ASN1Element): void => {
                            lastUpdate = _decode_Time(_el);
                        },
                        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
                    };
                    /* END_OF_CALLBACKS_MAP */
                    __utils._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_CoordinateShadowUpdateResultData,
                        _extension_additions_list_spec_for_CoordinateShadowUpdateResultData,
                        _root_component_type_list_2_spec_for_CoordinateShadowUpdateResultData,
                        (ext: asn1.ASN1Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new CoordinateShadowUpdateResultData(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ agreementID,
                        lastUpdate,
                        _unrecognizedExtensionsList,
                        _componentsOf
                    );
                }
        );
    }
    return _cached_decoder_for_CoordinateShadowUpdateResultData(el);
}
export function _encode_CoordinateShadowUpdateResultData(
    value: CoordinateShadowUpdateResultData,
    elGetter: __utils.ASN1Encoder<CoordinateShadowUpdateResultData>
) {
    if (!_cached_encoder_for_CoordinateShadowUpdateResultData) {
        _cached_encoder_for_CoordinateShadowUpdateResultData = __utils._encode_implicit(
            asn1.ASN1TagClass.context,
            0,
            () =>
                function (
                    value: CoordinateShadowUpdateResultData,
                    elGetter: __utils.ASN1Encoder<
                        CoordinateShadowUpdateResultData
                    >
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_AgreementID(
                                        value.agreementID,
                                        __utils.BER
                                    ),
                                    /* IF_ABSENT  */ value.lastUpdate ===
                                    undefined
                                        ? undefined
                                        : _encode_Time(
                                              value.lastUpdate,
                                              __utils.BER
                                          ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : [],
                                [
                                    /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
                                ]
                            )
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_CoordinateShadowUpdateResultData(
        value,
        elGetter
    );
}

export type CoordinateShadowUpdateResult =
    | { null_: asn1.NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED<CoordinateShadowUpdateResultData>;
      } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CoordinateShadowUpdateResult: __utils.ASN1Decoder<
    CoordinateShadowUpdateResult
> | null = null;
let _cached_encoder_for_CoordinateShadowUpdateResult: __utils.ASN1Encoder<
    CoordinateShadowUpdateResult
> | null = null;
export function _decode_CoordinateShadowUpdateResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_CoordinateShadowUpdateResult) {
        _cached_decoder_for_CoordinateShadowUpdateResult = __utils._decode_extensible_choice<
            CoordinateShadowUpdateResult
        >({
            "UNIVERSAL 5": ["null_", __utils._decodeNull],
            "CONTEXT 0": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED<
                    CoordinateShadowUpdateResultData
                >(_decode_CoordinateShadowUpdateResultData),
            ],
            "UNIVERSAL 16": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED<
                    CoordinateShadowUpdateResultData
                >(_decode_CoordinateShadowUpdateResultData),
            ],
        });
    }
    return _cached_decoder_for_CoordinateShadowUpdateResult(el);
}
export function _encode_CoordinateShadowUpdateResult(
    value: CoordinateShadowUpdateResult,
    elGetter: __utils.ASN1Encoder<CoordinateShadowUpdateResult>
) {
    if (!_cached_encoder_for_CoordinateShadowUpdateResult) {
        _cached_encoder_for_CoordinateShadowUpdateResult = __utils._encode_choice<
            CoordinateShadowUpdateResult
        >(
            {
                null_: __utils._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED<
                    CoordinateShadowUpdateResultData
                >(_encode_CoordinateShadowUpdateResultData),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_CoordinateShadowUpdateResult(value, elGetter);
}

// TODO: ObjectAssignment: requestShadowUpdate

export type RequestShadowUpdateArgumentData_requestedStrategy_standard = asn1.ENUMERATED;
export const RequestShadowUpdateArgumentData_requestedStrategy_standard_incremental: RequestShadowUpdateArgumentData_requestedStrategy_standard = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const RequestShadowUpdateArgumentData_requestedStrategy_standard_total: RequestShadowUpdateArgumentData_requestedStrategy_standard = 2; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard: __utils.ASN1Decoder<
    RequestShadowUpdateArgumentData_requestedStrategy_standard
> | null = null;
let _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard: __utils.ASN1Encoder<
    RequestShadowUpdateArgumentData_requestedStrategy_standard
> | null = null;
export function _decode_RequestShadowUpdateArgumentData_requestedStrategy_standard(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard
    ) {
        _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard =
            __utils._decodeEnumerated;
    }
    return _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard(
        el
    );
}
export function _encode_RequestShadowUpdateArgumentData_requestedStrategy_standard(
    value: RequestShadowUpdateArgumentData_requestedStrategy_standard,
    elGetter: __utils.ASN1Encoder<
        RequestShadowUpdateArgumentData_requestedStrategy_standard
    >
) {
    if (
        !_cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard
    ) {
        _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard =
            __utils._encodeEnumerated;
    }
    return _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard(
        value,
        elGetter
    );
}

export type RequestShadowUpdateArgumentData_requestedStrategy =
    | {
          standard: RequestShadowUpdateArgumentData_requestedStrategy_standard;
      } /* CHOICE_ALT_ROOT */
    | { other: asn1.EXTERNAL } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy: __utils.ASN1Decoder<
    RequestShadowUpdateArgumentData_requestedStrategy
> | null = null;
let _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy: __utils.ASN1Encoder<
    RequestShadowUpdateArgumentData_requestedStrategy
> | null = null;
export function _decode_RequestShadowUpdateArgumentData_requestedStrategy(
    el: asn1.ASN1Element
) {
    if (
        !_cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy
    ) {
        _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy = __utils._decode_extensible_choice<
            RequestShadowUpdateArgumentData_requestedStrategy
        >({
            "UNIVERSAL 10": [
                "standard",
                _decode_RequestShadowUpdateArgumentData_requestedStrategy_standard,
            ],
            "UNIVERSAL 8": ["other", __utils._decodeExternal],
        });
    }
    return _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy(
        el
    );
}
export function _encode_RequestShadowUpdateArgumentData_requestedStrategy(
    value: RequestShadowUpdateArgumentData_requestedStrategy,
    elGetter: __utils.ASN1Encoder<
        RequestShadowUpdateArgumentData_requestedStrategy
    >
) {
    if (
        !_cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy
    ) {
        _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy = __utils._encode_choice<
            RequestShadowUpdateArgumentData_requestedStrategy
        >(
            {
                standard: _encode_RequestShadowUpdateArgumentData_requestedStrategy_standard,
                other: __utils._encodeExternal,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy(
        value,
        elGetter
    );
}

export class RequestShadowUpdateArgumentData {
    constructor(
        readonly agreementID: AgreementID,
        readonly lastUpdate: Time | undefined,
        readonly requestedStrategy: RequestShadowUpdateArgumentData_requestedStrategy,
        readonly securityParameters: SecurityParameters | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_RequestShadowUpdateArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "agreementID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "lastUpdate",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "requestedStrategy",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RequestShadowUpdateArgumentData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_RequestShadowUpdateArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RequestShadowUpdateArgumentData: __utils.ASN1Decoder<
    RequestShadowUpdateArgumentData
> | null = null;
let _cached_encoder_for_RequestShadowUpdateArgumentData: __utils.ASN1Encoder<
    RequestShadowUpdateArgumentData
> | null = null;
export function _decode_RequestShadowUpdateArgumentData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RequestShadowUpdateArgumentData) {
        _cached_decoder_for_RequestShadowUpdateArgumentData = __utils._decode_implicit<
            RequestShadowUpdateArgumentData
        >(
            () =>
                function (
                    el: asn1.ASN1Element
                ): RequestShadowUpdateArgumentData {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let agreementID!: AgreementID;
                    let lastUpdate: asn1.OPTIONAL<Time>;
                    let requestedStrategy!: RequestShadowUpdateArgumentData_requestedStrategy;
                    let securityParameters: asn1.OPTIONAL<SecurityParameters>;
                    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: __utils.DecodingMap = {
                        agreementID: (_el: asn1.ASN1Element): void => {
                            agreementID = _decode_AgreementID(_el);
                        },
                        lastUpdate: (_el: asn1.ASN1Element): void => {
                            lastUpdate = _decode_Time(_el);
                        },
                        requestedStrategy: (_el: asn1.ASN1Element): void => {
                            requestedStrategy = _decode_RequestShadowUpdateArgumentData_requestedStrategy(
                                _el
                            );
                        },
                        securityParameters: (_el: asn1.ASN1Element): void => {
                            securityParameters = _decode_SecurityParameters(
                                _el
                            );
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    __utils._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_RequestShadowUpdateArgumentData,
                        _extension_additions_list_spec_for_RequestShadowUpdateArgumentData,
                        _root_component_type_list_2_spec_for_RequestShadowUpdateArgumentData,
                        (ext: asn1.ASN1Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new RequestShadowUpdateArgumentData(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ agreementID,
                        lastUpdate,
                        requestedStrategy,
                        securityParameters,
                        _unrecognizedExtensionsList
                    );
                }
        );
    }
    return _cached_decoder_for_RequestShadowUpdateArgumentData(el);
}
export function _encode_RequestShadowUpdateArgumentData(
    value: RequestShadowUpdateArgumentData,
    elGetter: __utils.ASN1Encoder<RequestShadowUpdateArgumentData>
) {
    if (!_cached_encoder_for_RequestShadowUpdateArgumentData) {
        _cached_encoder_for_RequestShadowUpdateArgumentData = __utils._encode_implicit(
            asn1.ASN1TagClass.context,
            0,
            () =>
                function (
                    value: RequestShadowUpdateArgumentData,
                    elGetter: __utils.ASN1Encoder<
                        RequestShadowUpdateArgumentData
                    >
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_AgreementID(
                                        value.agreementID,
                                        __utils.BER
                                    ),
                                    /* IF_ABSENT  */ value.lastUpdate ===
                                    undefined
                                        ? undefined
                                        : _encode_Time(
                                              value.lastUpdate,
                                              __utils.BER
                                          ),
                                    /* REQUIRED   */ _encode_RequestShadowUpdateArgumentData_requestedStrategy(
                                        value.requestedStrategy,
                                        __utils.BER
                                    ),
                                    /* IF_ABSENT  */ value.securityParameters ===
                                    undefined
                                        ? undefined
                                        : _encode_SecurityParameters(
                                              value.securityParameters,
                                              __utils.BER
                                          ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_RequestShadowUpdateArgumentData(value, elGetter);
}

export type RequestShadowUpdateArgument = OPTIONALLY_PROTECTED<
    RequestShadowUpdateArgumentData
>; // DefinedType
let _cached_decoder_for_RequestShadowUpdateArgument: __utils.ASN1Decoder<
    RequestShadowUpdateArgument
> | null = null;
let _cached_encoder_for_RequestShadowUpdateArgument: __utils.ASN1Encoder<
    RequestShadowUpdateArgument
> | null = null;
export function _decode_RequestShadowUpdateArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RequestShadowUpdateArgument) {
        _cached_decoder_for_RequestShadowUpdateArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            RequestShadowUpdateArgumentData
        >(_decode_RequestShadowUpdateArgumentData);
    }
    return _cached_decoder_for_RequestShadowUpdateArgument(el);
}
export function _encode_RequestShadowUpdateArgument(
    value: RequestShadowUpdateArgument,
    elGetter: __utils.ASN1Encoder<RequestShadowUpdateArgument>
) {
    if (!_cached_encoder_for_RequestShadowUpdateArgument) {
        _cached_encoder_for_RequestShadowUpdateArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            RequestShadowUpdateArgumentData
        >(_encode_RequestShadowUpdateArgumentData);
    }
    return _cached_encoder_for_RequestShadowUpdateArgument(value, elGetter);
}

export class RequestShadowUpdateResultData {
    constructor(
        readonly agreementID: AgreementID,
        readonly lastUpdate: Time | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly _componentsOf_CommonResultsSeq: CommonResultsSeq
    ) {}
}
export const _root_component_type_list_1_spec_for_RequestShadowUpdateResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "agreementID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "lastUpdate",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_RequestShadowUpdateResultData: __utils.ComponentSpec[] = [
    /* TODO: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
];
export const _extension_additions_list_spec_for_RequestShadowUpdateResultData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_RequestShadowUpdateResultData: __utils.ASN1Decoder<
    RequestShadowUpdateResultData
> | null = null;
let _cached_encoder_for_RequestShadowUpdateResultData: __utils.ASN1Encoder<
    RequestShadowUpdateResultData
> | null = null;
export function _decode_RequestShadowUpdateResultData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RequestShadowUpdateResultData) {
        _cached_decoder_for_RequestShadowUpdateResultData = __utils._decode_implicit<
            RequestShadowUpdateResultData
        >(
            () =>
                function (el: asn1.ASN1Element): RequestShadowUpdateResultData {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let agreementID!: AgreementID;
                    let lastUpdate: asn1.OPTIONAL<Time>;
                    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
                    let _componentsOf!: CommonResultsSeq;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: __utils.DecodingMap = {
                        agreementID: (_el: asn1.ASN1Element): void => {
                            agreementID = _decode_AgreementID(_el);
                        },
                        lastUpdate: (_el: asn1.ASN1Element): void => {
                            lastUpdate = _decode_Time(_el);
                        },
                        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
                    };
                    /* END_OF_CALLBACKS_MAP */
                    __utils._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_RequestShadowUpdateResultData,
                        _extension_additions_list_spec_for_RequestShadowUpdateResultData,
                        _root_component_type_list_2_spec_for_RequestShadowUpdateResultData,
                        (ext: asn1.ASN1Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new RequestShadowUpdateResultData(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ agreementID,
                        lastUpdate,
                        _unrecognizedExtensionsList,
                        _componentsOf
                    );
                }
        );
    }
    return _cached_decoder_for_RequestShadowUpdateResultData(el);
}
export function _encode_RequestShadowUpdateResultData(
    value: RequestShadowUpdateResultData,
    elGetter: __utils.ASN1Encoder<RequestShadowUpdateResultData>
) {
    if (!_cached_encoder_for_RequestShadowUpdateResultData) {
        _cached_encoder_for_RequestShadowUpdateResultData = __utils._encode_implicit(
            asn1.ASN1TagClass.context,
            0,
            () =>
                function (
                    value: RequestShadowUpdateResultData,
                    elGetter: __utils.ASN1Encoder<RequestShadowUpdateResultData>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_AgreementID(
                                        value.agreementID,
                                        __utils.BER
                                    ),
                                    /* IF_ABSENT  */ value.lastUpdate ===
                                    undefined
                                        ? undefined
                                        : _encode_Time(
                                              value.lastUpdate,
                                              __utils.BER
                                          ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : [],
                                [
                                    /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
                                ]
                            )
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_RequestShadowUpdateResultData(value, elGetter);
}

export type RequestShadowUpdateResult =
    | { null_: asn1.NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED<RequestShadowUpdateResultData>;
      } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_RequestShadowUpdateResult: __utils.ASN1Decoder<
    RequestShadowUpdateResult
> | null = null;
let _cached_encoder_for_RequestShadowUpdateResult: __utils.ASN1Encoder<
    RequestShadowUpdateResult
> | null = null;
export function _decode_RequestShadowUpdateResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RequestShadowUpdateResult) {
        _cached_decoder_for_RequestShadowUpdateResult = __utils._decode_extensible_choice<
            RequestShadowUpdateResult
        >({
            "UNIVERSAL 5": ["null_", __utils._decodeNull],
            "CONTEXT 0": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED<
                    RequestShadowUpdateResultData
                >(_decode_RequestShadowUpdateResultData),
            ],
            "UNIVERSAL 16": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED<
                    RequestShadowUpdateResultData
                >(_decode_RequestShadowUpdateResultData),
            ],
        });
    }
    return _cached_decoder_for_RequestShadowUpdateResult(el);
}
export function _encode_RequestShadowUpdateResult(
    value: RequestShadowUpdateResult,
    elGetter: __utils.ASN1Encoder<RequestShadowUpdateResult>
) {
    if (!_cached_encoder_for_RequestShadowUpdateResult) {
        _cached_encoder_for_RequestShadowUpdateResult = __utils._encode_choice<
            RequestShadowUpdateResult
        >(
            {
                null_: __utils._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED<
                    RequestShadowUpdateResultData
                >(_encode_RequestShadowUpdateResultData),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_RequestShadowUpdateResult(value, elGetter);
}

// TODO: ObjectAssignment: updateShadow

export class UpdateWindow {
    constructor(
        readonly start: Time,
        readonly stop: Time,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_UpdateWindow: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "start",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "stop",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UpdateWindow: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_UpdateWindow: __utils.ComponentSpec[] = [];
let _cached_decoder_for_UpdateWindow: __utils.ASN1Decoder<
    UpdateWindow
> | null = null;
let _cached_encoder_for_UpdateWindow: __utils.ASN1Encoder<
    UpdateWindow
> | null = null;
export function _decode_UpdateWindow(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UpdateWindow) {
        _cached_decoder_for_UpdateWindow = function (
            el: asn1.ASN1Element
        ): UpdateWindow {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "UpdateWindow contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "start";
            sequence[1].name = "stop";
            let start!: Time;
            let stop!: Time;
            start = _decode_Time(sequence[0]);
            stop = _decode_Time(sequence[1]);
            // TODO: Validate values.
            return new UpdateWindow(start, stop, sequence.slice(2));
        };
    }
    return _cached_decoder_for_UpdateWindow(el);
}
export function _encode_UpdateWindow(
    value: UpdateWindow,
    elGetter: __utils.ASN1Encoder<UpdateWindow>
) {
    if (!_cached_encoder_for_UpdateWindow) {
        _cached_encoder_for_UpdateWindow = function (
            value: UpdateWindow,
            elGetter: __utils.ASN1Encoder<UpdateWindow>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Time(
                                value.start,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_Time(
                                value.stop,
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
    return _cached_encoder_for_UpdateWindow(value, elGetter);
}

export type SDSEType = DSEType; // DefinedType
let _cached_decoder_for_SDSEType: __utils.ASN1Decoder<SDSEType> | null = null;
let _cached_encoder_for_SDSEType: __utils.ASN1Encoder<SDSEType> | null = null;
export function _decode_SDSEType(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SDSEType) {
        _cached_decoder_for_SDSEType = _decode_DSEType;
    }
    return _cached_decoder_for_SDSEType(el);
}
export function _encode_SDSEType(
    value: SDSEType,
    elGetter: __utils.ASN1Encoder<SDSEType>
) {
    if (!_cached_encoder_for_SDSEType) {
        _cached_encoder_for_SDSEType = _encode_DSEType;
    }
    return _cached_encoder_for_SDSEType(value, elGetter);
}

export class SDSEContent {
    constructor(
        readonly sDSEType: SDSEType,
        readonly subComplete: asn1.BOOLEAN | undefined,
        readonly attComplete: asn1.BOOLEAN | undefined,
        readonly attributes: Attribute[],
        readonly attValIncomplete: AttributeType[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_subComplete() {
        return false;
    }
    public static get _default_value_for_attValIncomplete() {
        return [];
    }
}
export const _root_component_type_list_1_spec_for_SDSEContent: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "sDSEType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subComplete",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attComplete",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributes",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attValIncomplete",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SDSEContent: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SDSEContent: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SDSEContent: __utils.ASN1Decoder<
    SDSEContent
> | null = null;
let _cached_encoder_for_SDSEContent: __utils.ASN1Encoder<
    SDSEContent
> | null = null;
export function _decode_SDSEContent(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SDSEContent) {
        _cached_decoder_for_SDSEContent = function (
            el: asn1.ASN1Element
        ): SDSEContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let sDSEType!: SDSEType;
            let subComplete: asn1.OPTIONAL<asn1.BOOLEAN> =
                SDSEContent._default_value_for_subComplete;
            let attComplete: asn1.OPTIONAL<asn1.BOOLEAN>;
            let attributes!: Attribute[];
            let attValIncomplete: asn1.OPTIONAL<AttributeType[]> =
                SDSEContent._default_value_for_attValIncomplete;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                sDSEType: (_el: asn1.ASN1Element): void => {
                    sDSEType = _decode_SDSEType(_el);
                },
                subComplete: (_el: asn1.ASN1Element): void => {
                    subComplete = __utils._decode_implicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                attComplete: (_el: asn1.ASN1Element): void => {
                    attComplete = __utils._decode_implicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                attributes: (_el: asn1.ASN1Element): void => {
                    attributes = __utils._decodeSetOf<Attribute>(
                        () => _decode_Attribute
                    )(_el);
                },
                attValIncomplete: (_el: asn1.ASN1Element): void => {
                    attValIncomplete = __utils._decodeSetOf<AttributeType>(
                        () => _decode_AttributeType
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SDSEContent,
                _extension_additions_list_spec_for_SDSEContent,
                _root_component_type_list_2_spec_for_SDSEContent,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SDSEContent(
                /* SEQUENCE_CONSTRUCTOR_CALL */ sDSEType,
                subComplete,
                attComplete,
                attributes,
                attValIncomplete,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SDSEContent(el);
}
export function _encode_SDSEContent(
    value: SDSEContent,
    elGetter: __utils.ASN1Encoder<SDSEContent>
) {
    if (!_cached_encoder_for_SDSEContent) {
        _cached_encoder_for_SDSEContent = function (
            value: SDSEContent,
            elGetter: __utils.ASN1Encoder<SDSEContent>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_SDSEType(
                                value.sDSEType,
                                __utils.BER
                            ),
                            /* IF_DEFAULT */ value.subComplete === undefined ||
                            __utils.deepEq(
                                value.subComplete,
                                SDSEContent._default_value_for_subComplete
                            )
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      0,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.subComplete, __utils.BER),
                            /* IF_ABSENT  */ value.attComplete === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      1,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.attComplete, __utils.BER),
                            /* REQUIRED   */ __utils._encodeSetOf<Attribute>(
                                () => _encode_Attribute,
                                __utils.BER
                            )(value.attributes, __utils.BER),
                            /* IF_DEFAULT */ value.attValIncomplete ===
                                undefined ||
                            __utils.deepEq(
                                value.attValIncomplete,
                                SDSEContent._default_value_for_attValIncomplete
                            )
                                ? undefined
                                : __utils._encodeSetOf<AttributeType>(
                                      () => _encode_AttributeType,
                                      __utils.BER
                                  )(value.attValIncomplete, __utils.BER),
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
    return _cached_encoder_for_SDSEContent(value, elGetter);
}

export class Subtree {
    constructor(
        readonly rdn: RelativeDistinguishedName,
        readonly sDSE: SDSEContent | undefined /* REPLICATED_COMPONENT */,
        readonly subtree: Subtree[] | undefined /* REPLICATED_COMPONENT */,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_Subtree: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "rdn",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sDSE",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subtree",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Subtree: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Subtree: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Subtree: __utils.ASN1Decoder<Subtree> | null = null;
let _cached_encoder_for_Subtree: __utils.ASN1Encoder<Subtree> | null = null;
export function _decode_Subtree(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Subtree) {
        _cached_decoder_for_Subtree = function (el: asn1.ASN1Element): Subtree {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let rdn!: RelativeDistinguishedName;
            let sDSE: asn1.OPTIONAL<SDSEContent>;
            let subtree: asn1.OPTIONAL<Subtree[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                rdn: (_el: asn1.ASN1Element): void => {
                    rdn = _decode_RelativeDistinguishedName(_el);
                },
                sDSE: (_el: asn1.ASN1Element): void => {
                    sDSE = _decode_SDSEContent(_el);
                },
                subtree: (_el: asn1.ASN1Element): void => {
                    subtree = __utils._decodeSetOf<Subtree>(
                        () => _decode_Subtree
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Subtree,
                _extension_additions_list_spec_for_Subtree,
                _root_component_type_list_2_spec_for_Subtree,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Subtree(
                /* SEQUENCE_CONSTRUCTOR_CALL */ rdn,
                sDSE,
                subtree,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Subtree(el);
}
export function _encode_Subtree(
    value: Subtree,
    elGetter: __utils.ASN1Encoder<Subtree>
) {
    if (!_cached_encoder_for_Subtree) {
        _cached_encoder_for_Subtree = function (
            value: Subtree,
            elGetter: __utils.ASN1Encoder<Subtree>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RelativeDistinguishedName(
                                value.rdn,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.sDSE === undefined
                                ? undefined
                                : _encode_SDSEContent(value.sDSE, __utils.BER),
                            /* IF_ABSENT  */ value.subtree === undefined
                                ? undefined
                                : __utils._encodeSetOf<Subtree>(
                                      () => _encode_Subtree,
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
    return _cached_encoder_for_Subtree(value, elGetter);
}

export class TotalRefresh {
    constructor(
        readonly sDSE: SDSEContent | undefined,
        readonly subtree: Subtree[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_TotalRefresh: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "sDSE",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subtree",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TotalRefresh: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TotalRefresh: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TotalRefresh: __utils.ASN1Decoder<
    TotalRefresh
> | null = null;
let _cached_encoder_for_TotalRefresh: __utils.ASN1Encoder<
    TotalRefresh
> | null = null;
export function _decode_TotalRefresh(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TotalRefresh) {
        _cached_decoder_for_TotalRefresh = function (
            el: asn1.ASN1Element
        ): TotalRefresh {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let sDSE: asn1.OPTIONAL<SDSEContent>;
            let subtree: asn1.OPTIONAL<Subtree[]>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                sDSE: (_el: asn1.ASN1Element): void => {
                    sDSE = _decode_SDSEContent(_el);
                },
                subtree: (_el: asn1.ASN1Element): void => {
                    subtree = __utils._decodeSetOf<Subtree>(
                        () => _decode_Subtree
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TotalRefresh,
                _extension_additions_list_spec_for_TotalRefresh,
                _root_component_type_list_2_spec_for_TotalRefresh,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TotalRefresh(
                /* SEQUENCE_CONSTRUCTOR_CALL */ sDSE,
                subtree,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_TotalRefresh(el);
}
export function _encode_TotalRefresh(
    value: TotalRefresh,
    elGetter: __utils.ASN1Encoder<TotalRefresh>
) {
    if (!_cached_encoder_for_TotalRefresh) {
        _cached_encoder_for_TotalRefresh = function (
            value: TotalRefresh,
            elGetter: __utils.ASN1Encoder<TotalRefresh>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.sDSE === undefined
                                ? undefined
                                : _encode_SDSEContent(value.sDSE, __utils.BER),
                            /* IF_ABSENT  */ value.subtree === undefined
                                ? undefined
                                : __utils._encodeSetOf<Subtree>(
                                      () => _encode_Subtree,
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
    return _cached_encoder_for_TotalRefresh(value, elGetter);
}

export type ContentChange_rename =
    | { newRDN: RelativeDistinguishedName } /* CHOICE_ALT_ROOT */
    | { newDN: DistinguishedName } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ContentChange_rename: __utils.ASN1Decoder<
    ContentChange_rename
> | null = null;
let _cached_encoder_for_ContentChange_rename: __utils.ASN1Encoder<
    ContentChange_rename
> | null = null;
export function _decode_ContentChange_rename(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ContentChange_rename) {
        _cached_decoder_for_ContentChange_rename = __utils._decode_inextensible_choice<
            ContentChange_rename
        >({
            "UNIVERSAL 17": ["newRDN", _decode_RelativeDistinguishedName],
            "UNIVERSAL 16": ["newDN", _decode_DistinguishedName],
        });
    }
    return _cached_decoder_for_ContentChange_rename(el);
}
export function _encode_ContentChange_rename(
    value: ContentChange_rename,
    elGetter: __utils.ASN1Encoder<ContentChange_rename>
) {
    if (!_cached_encoder_for_ContentChange_rename) {
        _cached_encoder_for_ContentChange_rename = __utils._encode_choice<
            ContentChange_rename
        >(
            {
                newRDN: _encode_RelativeDistinguishedName,
                newDN: _encode_DistinguishedName,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ContentChange_rename(value, elGetter);
}

export type ContentChange_attributeChanges =
    | { replace: Attribute[] } /* CHOICE_ALT_ROOT */
    | { changes: EntryModification[] } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ContentChange_attributeChanges: __utils.ASN1Decoder<
    ContentChange_attributeChanges
> | null = null;
let _cached_encoder_for_ContentChange_attributeChanges: __utils.ASN1Encoder<
    ContentChange_attributeChanges
> | null = null;
export function _decode_ContentChange_attributeChanges(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ContentChange_attributeChanges) {
        _cached_decoder_for_ContentChange_attributeChanges = __utils._decode_inextensible_choice<
            ContentChange_attributeChanges
        >({
            "CONTEXT 0": [
                "replace",
                __utils._decode_implicit<Attribute[]>(() =>
                    __utils._decodeSetOf<Attribute>(() => _decode_Attribute)
                ),
            ],
            "CONTEXT 1": [
                "changes",
                __utils._decode_implicit<EntryModification[]>(() =>
                    __utils._decodeSequenceOf<EntryModification>(
                        () => _decode_EntryModification
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_ContentChange_attributeChanges(el);
}
export function _encode_ContentChange_attributeChanges(
    value: ContentChange_attributeChanges,
    elGetter: __utils.ASN1Encoder<ContentChange_attributeChanges>
) {
    if (!_cached_encoder_for_ContentChange_attributeChanges) {
        _cached_encoder_for_ContentChange_attributeChanges = __utils._encode_choice<
            ContentChange_attributeChanges
        >(
            {
                replace: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () =>
                        __utils._encodeSetOf<Attribute>(
                            () => _encode_Attribute,
                            __utils.BER
                        ),
                    __utils.BER
                ),
                changes: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () =>
                        __utils._encodeSequenceOf<EntryModification>(
                            () => _encode_EntryModification,
                            __utils.BER
                        ),
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_ContentChange_attributeChanges(value, elGetter);
}

export class ContentChange {
    constructor(
        readonly rename: ContentChange_rename | undefined,
        readonly attributeChanges: ContentChange_attributeChanges | undefined,
        readonly sDSEType: SDSEType,
        readonly subComplete: asn1.BOOLEAN | undefined,
        readonly attComplete: asn1.BOOLEAN | undefined,
        readonly attValIncomplete: AttributeType[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
    public static get _default_value_for_subComplete() {
        return false;
    }
    public static get _default_value_for_attValIncomplete() {
        return [];
    }
}
export const _root_component_type_list_1_spec_for_ContentChange: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "rename",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributeChanges",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "sDSEType",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subComplete",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attComplete",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attValIncomplete",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ContentChange: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ContentChange: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ContentChange: __utils.ASN1Decoder<
    ContentChange
> | null = null;
let _cached_encoder_for_ContentChange: __utils.ASN1Encoder<
    ContentChange
> | null = null;
export function _decode_ContentChange(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ContentChange) {
        _cached_decoder_for_ContentChange = function (
            el: asn1.ASN1Element
        ): ContentChange {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let rename: asn1.OPTIONAL<ContentChange_rename>;
            let attributeChanges: asn1.OPTIONAL<ContentChange_attributeChanges>;
            let sDSEType!: SDSEType;
            let subComplete: asn1.OPTIONAL<asn1.BOOLEAN> =
                ContentChange._default_value_for_subComplete;
            let attComplete: asn1.OPTIONAL<asn1.BOOLEAN>;
            let attValIncomplete: asn1.OPTIONAL<AttributeType[]> =
                ContentChange._default_value_for_attValIncomplete;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                rename: (_el: asn1.ASN1Element): void => {
                    rename = _decode_ContentChange_rename(_el);
                },
                attributeChanges: (_el: asn1.ASN1Element): void => {
                    attributeChanges = _decode_ContentChange_attributeChanges(
                        _el
                    );
                },
                sDSEType: (_el: asn1.ASN1Element): void => {
                    sDSEType = _decode_SDSEType(_el);
                },
                subComplete: (_el: asn1.ASN1Element): void => {
                    subComplete = __utils._decode_implicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                attComplete: (_el: asn1.ASN1Element): void => {
                    attComplete = __utils._decode_implicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                attValIncomplete: (_el: asn1.ASN1Element): void => {
                    attValIncomplete = __utils._decodeSetOf<AttributeType>(
                        () => _decode_AttributeType
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ContentChange,
                _extension_additions_list_spec_for_ContentChange,
                _root_component_type_list_2_spec_for_ContentChange,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ContentChange(
                /* SEQUENCE_CONSTRUCTOR_CALL */ rename,
                attributeChanges,
                sDSEType,
                subComplete,
                attComplete,
                attValIncomplete,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ContentChange(el);
}
export function _encode_ContentChange(
    value: ContentChange,
    elGetter: __utils.ASN1Encoder<ContentChange>
) {
    if (!_cached_encoder_for_ContentChange) {
        _cached_encoder_for_ContentChange = function (
            value: ContentChange,
            elGetter: __utils.ASN1Encoder<ContentChange>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.rename === undefined
                                ? undefined
                                : _encode_ContentChange_rename(
                                      value.rename,
                                      __utils.BER
                                  ),
                            /* IF_ABSENT  */ value.attributeChanges ===
                            undefined
                                ? undefined
                                : _encode_ContentChange_attributeChanges(
                                      value.attributeChanges,
                                      __utils.BER
                                  ),
                            /* REQUIRED   */ _encode_SDSEType(
                                value.sDSEType,
                                __utils.BER
                            ),
                            /* IF_DEFAULT */ value.subComplete === undefined ||
                            __utils.deepEq(
                                value.subComplete,
                                ContentChange._default_value_for_subComplete
                            )
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      2,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.subComplete, __utils.BER),
                            /* IF_ABSENT  */ value.attComplete === undefined
                                ? undefined
                                : __utils._encode_implicit(
                                      asn1.ASN1TagClass.context,
                                      3,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.attComplete, __utils.BER),
                            /* IF_DEFAULT */ value.attValIncomplete ===
                                undefined ||
                            __utils.deepEq(
                                value.attValIncomplete,
                                ContentChange._default_value_for_attValIncomplete
                            )
                                ? undefined
                                : __utils._encodeSetOf<AttributeType>(
                                      () => _encode_AttributeType,
                                      __utils.BER
                                  )(value.attValIncomplete, __utils.BER),
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
    return _cached_encoder_for_ContentChange(value, elGetter);
}

export type IncrementalStepRefresh_sDSEChanges =
    | { add: SDSEContent } /* CHOICE_ALT_ROOT */
    | { remove: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { modify: ContentChange } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_IncrementalStepRefresh_sDSEChanges: __utils.ASN1Decoder<
    IncrementalStepRefresh_sDSEChanges
> | null = null;
let _cached_encoder_for_IncrementalStepRefresh_sDSEChanges: __utils.ASN1Encoder<
    IncrementalStepRefresh_sDSEChanges
> | null = null;
export function _decode_IncrementalStepRefresh_sDSEChanges(
    el: asn1.ASN1Element
) {
    if (!_cached_decoder_for_IncrementalStepRefresh_sDSEChanges) {
        _cached_decoder_for_IncrementalStepRefresh_sDSEChanges = __utils._decode_extensible_choice<
            IncrementalStepRefresh_sDSEChanges
        >({
            "CONTEXT 0": [
                "add",
                __utils._decode_implicit<SDSEContent>(
                    () => _decode_SDSEContent
                ),
            ],
            "UNIVERSAL 5": ["remove", __utils._decodeNull],
            "CONTEXT 1": [
                "modify",
                __utils._decode_implicit<ContentChange>(
                    () => _decode_ContentChange
                ),
            ],
        });
    }
    return _cached_decoder_for_IncrementalStepRefresh_sDSEChanges(el);
}
export function _encode_IncrementalStepRefresh_sDSEChanges(
    value: IncrementalStepRefresh_sDSEChanges,
    elGetter: __utils.ASN1Encoder<IncrementalStepRefresh_sDSEChanges>
) {
    if (!_cached_encoder_for_IncrementalStepRefresh_sDSEChanges) {
        _cached_encoder_for_IncrementalStepRefresh_sDSEChanges = __utils._encode_choice<
            IncrementalStepRefresh_sDSEChanges
        >(
            {
                add: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_SDSEContent,
                    __utils.BER
                ),
                remove: __utils._encodeNull,
                modify: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_ContentChange,
                    __utils.BER
                ),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_IncrementalStepRefresh_sDSEChanges(
        value,
        elGetter
    );
}

export class SubordinateChanges {
    constructor(
        readonly subordinate: RelativeDistinguishedName,
        readonly changes: IncrementalStepRefresh,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_SubordinateChanges: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "subordinate",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "changes",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SubordinateChanges: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SubordinateChanges: __utils.ComponentSpec[] = [];
let _cached_decoder_for_SubordinateChanges: __utils.ASN1Decoder<
    SubordinateChanges
> | null = null;
let _cached_encoder_for_SubordinateChanges: __utils.ASN1Encoder<
    SubordinateChanges
> | null = null;
export function _decode_SubordinateChanges(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_SubordinateChanges) {
        _cached_decoder_for_SubordinateChanges = function (
            el: asn1.ASN1Element
        ): SubordinateChanges {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "SubordinateChanges contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "subordinate";
            sequence[1].name = "changes";
            let subordinate!: RelativeDistinguishedName;
            let changes!: IncrementalStepRefresh;
            subordinate = _decode_RelativeDistinguishedName(sequence[0]);
            changes = _decode_IncrementalStepRefresh(sequence[1]);
            // TODO: Validate values.
            return new SubordinateChanges(
                subordinate,
                changes,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_SubordinateChanges(el);
}
export function _encode_SubordinateChanges(
    value: SubordinateChanges,
    elGetter: __utils.ASN1Encoder<SubordinateChanges>
) {
    if (!_cached_encoder_for_SubordinateChanges) {
        _cached_encoder_for_SubordinateChanges = function (
            value: SubordinateChanges,
            elGetter: __utils.ASN1Encoder<SubordinateChanges>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RelativeDistinguishedName(
                                value.subordinate,
                                __utils.BER
                            ),
                            /* REQUIRED   */ _encode_IncrementalStepRefresh(
                                value.changes,
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
    return _cached_encoder_for_SubordinateChanges(value, elGetter);
}

export class IncrementalStepRefresh {
    constructor(
        readonly sDSEChanges: IncrementalStepRefresh_sDSEChanges | undefined,
        readonly subordinateUpdates: SubordinateChanges[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_IncrementalStepRefresh: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "sDSEChanges",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subordinateUpdates",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_IncrementalStepRefresh: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_IncrementalStepRefresh: __utils.ComponentSpec[] = [];
let _cached_decoder_for_IncrementalStepRefresh: __utils.ASN1Decoder<
    IncrementalStepRefresh
> | null = null;
let _cached_encoder_for_IncrementalStepRefresh: __utils.ASN1Encoder<
    IncrementalStepRefresh
> | null = null;
export function _decode_IncrementalStepRefresh(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IncrementalStepRefresh) {
        _cached_decoder_for_IncrementalStepRefresh = function (
            el: asn1.ASN1Element
        ): IncrementalStepRefresh {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let sDSEChanges: asn1.OPTIONAL<IncrementalStepRefresh_sDSEChanges>;
            let subordinateUpdates: asn1.OPTIONAL<SubordinateChanges[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                sDSEChanges: (_el: asn1.ASN1Element): void => {
                    sDSEChanges = _decode_IncrementalStepRefresh_sDSEChanges(
                        _el
                    );
                },
                subordinateUpdates: (_el: asn1.ASN1Element): void => {
                    subordinateUpdates = __utils._decodeSequenceOf<
                        SubordinateChanges
                    >(() => _decode_SubordinateChanges)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IncrementalStepRefresh,
                _extension_additions_list_spec_for_IncrementalStepRefresh,
                _root_component_type_list_2_spec_for_IncrementalStepRefresh,
                undefined
            );
            return new IncrementalStepRefresh(
                /* SEQUENCE_CONSTRUCTOR_CALL */ sDSEChanges,
                subordinateUpdates
            );
        };
    }
    return _cached_decoder_for_IncrementalStepRefresh(el);
}
export function _encode_IncrementalStepRefresh(
    value: IncrementalStepRefresh,
    elGetter: __utils.ASN1Encoder<IncrementalStepRefresh>
) {
    if (!_cached_encoder_for_IncrementalStepRefresh) {
        _cached_encoder_for_IncrementalStepRefresh = function (
            value: IncrementalStepRefresh,
            elGetter: __utils.ASN1Encoder<IncrementalStepRefresh>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.sDSEChanges === undefined
                            ? undefined
                            : _encode_IncrementalStepRefresh_sDSEChanges(
                                  value.sDSEChanges,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.subordinateUpdates === undefined
                            ? undefined
                            : __utils._encodeSequenceOf<SubordinateChanges>(
                                  () => _encode_SubordinateChanges,
                                  __utils.BER
                              )(value.subordinateUpdates, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_IncrementalStepRefresh(value, elGetter);
}

export type IncrementalRefresh = IncrementalStepRefresh[]; // SequenceOfType
let _cached_decoder_for_IncrementalRefresh: __utils.ASN1Decoder<
    IncrementalRefresh
> | null = null;
let _cached_encoder_for_IncrementalRefresh: __utils.ASN1Encoder<
    IncrementalRefresh
> | null = null;
export function _decode_IncrementalRefresh(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_IncrementalRefresh) {
        _cached_decoder_for_IncrementalRefresh = __utils._decodeSequenceOf<
            IncrementalStepRefresh
        >(() => _decode_IncrementalStepRefresh);
    }
    return _cached_decoder_for_IncrementalRefresh(el);
}
export function _encode_IncrementalRefresh(
    value: IncrementalRefresh,
    elGetter: __utils.ASN1Encoder<IncrementalRefresh>
) {
    if (!_cached_encoder_for_IncrementalRefresh) {
        _cached_encoder_for_IncrementalRefresh = __utils._encodeSequenceOf<
            IncrementalStepRefresh
        >(() => _encode_IncrementalStepRefresh, __utils.BER);
    }
    return _cached_encoder_for_IncrementalRefresh(value, elGetter);
}

export type RefreshInformation =
    | { noRefresh: asn1.NULL } /* CHOICE_ALT_ROOT */
    | { total: TotalRefresh } /* CHOICE_ALT_ROOT */
    | { incremental: IncrementalRefresh } /* CHOICE_ALT_ROOT */
    | { otherStrategy: asn1.EXTERNAL } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_RefreshInformation: __utils.ASN1Decoder<
    RefreshInformation
> | null = null;
let _cached_encoder_for_RefreshInformation: __utils.ASN1Encoder<
    RefreshInformation
> | null = null;
export function _decode_RefreshInformation(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_RefreshInformation) {
        _cached_decoder_for_RefreshInformation = __utils._decode_extensible_choice<
            RefreshInformation
        >({
            "UNIVERSAL 5": ["noRefresh", __utils._decodeNull],
            "CONTEXT 0": [
                "total",
                __utils._decode_implicit<TotalRefresh>(
                    () => _decode_TotalRefresh
                ),
            ],
            "CONTEXT 1": [
                "incremental",
                __utils._decode_implicit<IncrementalRefresh>(
                    () => _decode_IncrementalRefresh
                ),
            ],
            "UNIVERSAL 8": ["otherStrategy", __utils._decodeExternal],
        });
    }
    return _cached_decoder_for_RefreshInformation(el);
}
export function _encode_RefreshInformation(
    value: RefreshInformation,
    elGetter: __utils.ASN1Encoder<RefreshInformation>
) {
    if (!_cached_encoder_for_RefreshInformation) {
        _cached_encoder_for_RefreshInformation = __utils._encode_choice<
            RefreshInformation
        >(
            {
                noRefresh: __utils._encodeNull,
                total: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    0,
                    () => _encode_TotalRefresh,
                    __utils.BER
                ),
                incremental: __utils._encode_implicit(
                    asn1.ASN1TagClass.context,
                    1,
                    () => _encode_IncrementalRefresh,
                    __utils.BER
                ),
                otherStrategy: __utils._encodeExternal,
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_RefreshInformation(value, elGetter);
}

export class UpdateShadowArgumentData {
    constructor(
        readonly agreementID: AgreementID,
        readonly updateTime: Time,
        readonly updateWindow: UpdateWindow | undefined,
        readonly updatedInfo: RefreshInformation,
        readonly securityParameters: SecurityParameters | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_UpdateShadowArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "agreementID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "updateTime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "updateWindow",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "updatedInfo",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UpdateShadowArgumentData: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_UpdateShadowArgumentData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_UpdateShadowArgumentData: __utils.ASN1Decoder<
    UpdateShadowArgumentData
> | null = null;
let _cached_encoder_for_UpdateShadowArgumentData: __utils.ASN1Encoder<
    UpdateShadowArgumentData
> | null = null;
export function _decode_UpdateShadowArgumentData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UpdateShadowArgumentData) {
        _cached_decoder_for_UpdateShadowArgumentData = __utils._decode_implicit<
            UpdateShadowArgumentData
        >(
            () =>
                function (el: asn1.ASN1Element): UpdateShadowArgumentData {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let agreementID!: AgreementID;
                    let updateTime!: Time;
                    let updateWindow: asn1.OPTIONAL<UpdateWindow>;
                    let updatedInfo!: RefreshInformation;
                    let securityParameters: asn1.OPTIONAL<SecurityParameters>;
                    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: __utils.DecodingMap = {
                        agreementID: (_el: asn1.ASN1Element): void => {
                            agreementID = _decode_AgreementID(_el);
                        },
                        updateTime: (_el: asn1.ASN1Element): void => {
                            updateTime = _decode_Time(_el);
                        },
                        updateWindow: (_el: asn1.ASN1Element): void => {
                            updateWindow = _decode_UpdateWindow(_el);
                        },
                        updatedInfo: (_el: asn1.ASN1Element): void => {
                            updatedInfo = _decode_RefreshInformation(_el);
                        },
                        securityParameters: (_el: asn1.ASN1Element): void => {
                            securityParameters = _decode_SecurityParameters(
                                _el
                            );
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    __utils._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_UpdateShadowArgumentData,
                        _extension_additions_list_spec_for_UpdateShadowArgumentData,
                        _root_component_type_list_2_spec_for_UpdateShadowArgumentData,
                        (ext: asn1.ASN1Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new UpdateShadowArgumentData(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ agreementID,
                        updateTime,
                        updateWindow,
                        updatedInfo,
                        securityParameters,
                        _unrecognizedExtensionsList
                    );
                }
        );
    }
    return _cached_decoder_for_UpdateShadowArgumentData(el);
}
export function _encode_UpdateShadowArgumentData(
    value: UpdateShadowArgumentData,
    elGetter: __utils.ASN1Encoder<UpdateShadowArgumentData>
) {
    if (!_cached_encoder_for_UpdateShadowArgumentData) {
        _cached_encoder_for_UpdateShadowArgumentData = __utils._encode_implicit(
            asn1.ASN1TagClass.context,
            0,
            () =>
                function (
                    value: UpdateShadowArgumentData,
                    elGetter: __utils.ASN1Encoder<UpdateShadowArgumentData>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_AgreementID(
                                        value.agreementID,
                                        __utils.BER
                                    ),
                                    /* REQUIRED   */ _encode_Time(
                                        value.updateTime,
                                        __utils.BER
                                    ),
                                    /* IF_ABSENT  */ value.updateWindow ===
                                    undefined
                                        ? undefined
                                        : _encode_UpdateWindow(
                                              value.updateWindow,
                                              __utils.BER
                                          ),
                                    /* REQUIRED   */ _encode_RefreshInformation(
                                        value.updatedInfo,
                                        __utils.BER
                                    ),
                                    /* IF_ABSENT  */ value.securityParameters ===
                                    undefined
                                        ? undefined
                                        : _encode_SecurityParameters(
                                              value.securityParameters,
                                              __utils.BER
                                          ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_UpdateShadowArgumentData(value, elGetter);
}

export type UpdateShadowArgument = OPTIONALLY_PROTECTED<
    UpdateShadowArgumentData
>; // DefinedType
let _cached_decoder_for_UpdateShadowArgument: __utils.ASN1Decoder<
    UpdateShadowArgument
> | null = null;
let _cached_encoder_for_UpdateShadowArgument: __utils.ASN1Encoder<
    UpdateShadowArgument
> | null = null;
export function _decode_UpdateShadowArgument(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UpdateShadowArgument) {
        _cached_decoder_for_UpdateShadowArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            UpdateShadowArgumentData
        >(_decode_UpdateShadowArgumentData);
    }
    return _cached_decoder_for_UpdateShadowArgument(el);
}
export function _encode_UpdateShadowArgument(
    value: UpdateShadowArgument,
    elGetter: __utils.ASN1Encoder<UpdateShadowArgument>
) {
    if (!_cached_encoder_for_UpdateShadowArgument) {
        _cached_encoder_for_UpdateShadowArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            UpdateShadowArgumentData
        >(_encode_UpdateShadowArgumentData);
    }
    return _cached_encoder_for_UpdateShadowArgument(value, elGetter);
}

export class UpdateShadowResultData {
    constructor(
        readonly agreementID: AgreementID,
        readonly lastUpdate: Time | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly _componentsOf_CommonResultsSeq: CommonResultsSeq
    ) {}
}
export const _root_component_type_list_1_spec_for_UpdateShadowResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "agreementID",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "lastUpdate",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_UpdateShadowResultData: __utils.ComponentSpec[] = [
    /* TODO: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
];
export const _extension_additions_list_spec_for_UpdateShadowResultData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_UpdateShadowResultData: __utils.ASN1Decoder<
    UpdateShadowResultData
> | null = null;
let _cached_encoder_for_UpdateShadowResultData: __utils.ASN1Encoder<
    UpdateShadowResultData
> | null = null;
export function _decode_UpdateShadowResultData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UpdateShadowResultData) {
        _cached_decoder_for_UpdateShadowResultData = __utils._decode_implicit<
            UpdateShadowResultData
        >(
            () =>
                function (el: asn1.ASN1Element): UpdateShadowResultData {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let agreementID!: AgreementID;
                    let lastUpdate: asn1.OPTIONAL<Time>;
                    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
                    let _componentsOf!: CommonResultsSeq;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: __utils.DecodingMap = {
                        agreementID: (_el: asn1.ASN1Element): void => {
                            agreementID = _decode_AgreementID(_el);
                        },
                        lastUpdate: (_el: asn1.ASN1Element): void => {
                            lastUpdate = _decode_Time(_el);
                        },
                        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
                    };
                    /* END_OF_CALLBACKS_MAP */
                    __utils._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_UpdateShadowResultData,
                        _extension_additions_list_spec_for_UpdateShadowResultData,
                        _root_component_type_list_2_spec_for_UpdateShadowResultData,
                        (ext: asn1.ASN1Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new UpdateShadowResultData(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ agreementID,
                        lastUpdate,
                        _unrecognizedExtensionsList,
                        _componentsOf
                    );
                }
        );
    }
    return _cached_decoder_for_UpdateShadowResultData(el);
}
export function _encode_UpdateShadowResultData(
    value: UpdateShadowResultData,
    elGetter: __utils.ASN1Encoder<UpdateShadowResultData>
) {
    if (!_cached_encoder_for_UpdateShadowResultData) {
        _cached_encoder_for_UpdateShadowResultData = __utils._encode_implicit(
            asn1.ASN1TagClass.context,
            0,
            () =>
                function (
                    value: UpdateShadowResultData,
                    elGetter: __utils.ASN1Encoder<UpdateShadowResultData>
                ): asn1.ASN1Element {
                    return __utils._encodeSequence(
                        ([] as (asn1.ASN1Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_AgreementID(
                                        value.agreementID,
                                        __utils.BER
                                    ),
                                    /* IF_ABSENT  */ value.lastUpdate ===
                                    undefined
                                        ? undefined
                                        : _encode_Time(
                                              value.lastUpdate,
                                              __utils.BER
                                          ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : [],
                                [
                                    /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
                                ]
                            )
                            .filter(
                                (c: asn1.ASN1Element | undefined): boolean =>
                                    !!c
                            ) as asn1.ASN1Element[],
                        __utils.BER
                    );
                },
            __utils.BER
        );
    }
    return _cached_encoder_for_UpdateShadowResultData(value, elGetter);
}

export type UpdateShadowResult =
    | { null_: asn1.NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED<UpdateShadowResultData>;
      } /* CHOICE_ALT_ROOT */
    | asn1.ASN1Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_UpdateShadowResult: __utils.ASN1Decoder<
    UpdateShadowResult
> | null = null;
let _cached_encoder_for_UpdateShadowResult: __utils.ASN1Encoder<
    UpdateShadowResult
> | null = null;
export function _decode_UpdateShadowResult(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_UpdateShadowResult) {
        _cached_decoder_for_UpdateShadowResult = __utils._decode_extensible_choice<
            UpdateShadowResult
        >({
            "UNIVERSAL 5": ["null_", __utils._decodeNull],
            "CONTEXT 0": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED<UpdateShadowResultData>(
                    _decode_UpdateShadowResultData
                ),
            ],
            "UNIVERSAL 16": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED<UpdateShadowResultData>(
                    _decode_UpdateShadowResultData
                ),
            ],
        });
    }
    return _cached_decoder_for_UpdateShadowResult(el);
}
export function _encode_UpdateShadowResult(
    value: UpdateShadowResult,
    elGetter: __utils.ASN1Encoder<UpdateShadowResult>
) {
    if (!_cached_encoder_for_UpdateShadowResult) {
        _cached_encoder_for_UpdateShadowResult = __utils._encode_choice<
            UpdateShadowResult
        >(
            {
                null_: __utils._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED<
                    UpdateShadowResultData
                >(_encode_UpdateShadowResultData),
            },
            __utils.BER
        );
    }
    return _cached_encoder_for_UpdateShadowResult(value, elGetter);
}

// TODO: ObjectAssignment: shadowError

export type ShadowProblem = asn1.INTEGER;
export const ShadowProblem_invalidAgreementID: ShadowProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
export const invalidAgreementID: ShadowProblem = ShadowProblem_invalidAgreementID; /* SHORT_NAMED_INTEGER_VALUE */
export const ShadowProblem_inactiveAgreement: ShadowProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
export const inactiveAgreement: ShadowProblem = ShadowProblem_inactiveAgreement; /* SHORT_NAMED_INTEGER_VALUE */
export const ShadowProblem_invalidInformationReceived: ShadowProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
export const invalidInformationReceived: ShadowProblem = ShadowProblem_invalidInformationReceived; /* SHORT_NAMED_INTEGER_VALUE */
export const ShadowProblem_unsupportedStrategy: ShadowProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
export const unsupportedStrategy: ShadowProblem = ShadowProblem_unsupportedStrategy; /* SHORT_NAMED_INTEGER_VALUE */
export const ShadowProblem_missedPrevious: ShadowProblem = 5; /* LONG_NAMED_INTEGER_VALUE */
export const missedPrevious: ShadowProblem = ShadowProblem_missedPrevious; /* SHORT_NAMED_INTEGER_VALUE */
export const ShadowProblem_fullUpdateRequired: ShadowProblem = 6; /* LONG_NAMED_INTEGER_VALUE */
export const fullUpdateRequired: ShadowProblem = ShadowProblem_fullUpdateRequired; /* SHORT_NAMED_INTEGER_VALUE */
export const ShadowProblem_unwillingToPerform: ShadowProblem = 7; /* LONG_NAMED_INTEGER_VALUE */
export const unwillingToPerform: ShadowProblem = ShadowProblem_unwillingToPerform; /* SHORT_NAMED_INTEGER_VALUE */
export const ShadowProblem_unsuitableTiming: ShadowProblem = 8; /* LONG_NAMED_INTEGER_VALUE */
export const unsuitableTiming: ShadowProblem = ShadowProblem_unsuitableTiming; /* SHORT_NAMED_INTEGER_VALUE */
export const ShadowProblem_updateAlreadyReceived: ShadowProblem = 9; /* LONG_NAMED_INTEGER_VALUE */
export const updateAlreadyReceived: ShadowProblem = ShadowProblem_updateAlreadyReceived; /* SHORT_NAMED_INTEGER_VALUE */
export const ShadowProblem_invalidSequencing: ShadowProblem = 10; /* LONG_NAMED_INTEGER_VALUE */
export const invalidSequencing: ShadowProblem = ShadowProblem_invalidSequencing; /* SHORT_NAMED_INTEGER_VALUE */
export const ShadowProblem_insufficientResources: ShadowProblem = 11; /* LONG_NAMED_INTEGER_VALUE */
export const insufficientResources: ShadowProblem = ShadowProblem_insufficientResources; /* SHORT_NAMED_INTEGER_VALUE */
let _cached_decoder_for_ShadowProblem: __utils.ASN1Decoder<
    ShadowProblem
> | null = null;
let _cached_encoder_for_ShadowProblem: __utils.ASN1Encoder<
    ShadowProblem
> | null = null;
export function _decode_ShadowProblem(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ShadowProblem) {
        _cached_decoder_for_ShadowProblem = __utils._decodeInteger;
    }
    return _cached_decoder_for_ShadowProblem(el);
}
export function _encode_ShadowProblem(
    value: ShadowProblem,
    elGetter: __utils.ASN1Encoder<ShadowProblem>
) {
    if (!_cached_encoder_for_ShadowProblem) {
        _cached_encoder_for_ShadowProblem = __utils._encodeInteger;
    }
    return _cached_encoder_for_ShadowProblem(value, elGetter);
}

export class ShadowErrorData {
    constructor(
        readonly problem: ShadowProblem,
        readonly lastUpdate: Time | undefined,
        readonly updateWindow: UpdateWindow | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = [],
        readonly securityParameters:
            | SecurityParameters
            | undefined /* REPLICATED_COMPONENT */,
        readonly performer:
            | DistinguishedName
            | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced:
            | asn1.BOOLEAN
            | undefined /* REPLICATED_COMPONENT */,
        readonly notification:
            | Attribute[]
            | undefined /* REPLICATED_COMPONENT */
    ) {}
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_ShadowErrorData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "problem",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "lastUpdate",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "updateWindow",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ShadowErrorData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "securityParameters",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 30),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "performer",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 29),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "aliasDereferenced",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 28),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "notification",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 27),
        undefined,
        undefined
    ),
];
export const _extension_additions_list_spec_for_ShadowErrorData: __utils.ComponentSpec[] = [];
let _cached_decoder_for_ShadowErrorData: __utils.ASN1Decoder<
    ShadowErrorData
> | null = null;
let _cached_encoder_for_ShadowErrorData: __utils.ASN1Encoder<
    ShadowErrorData
> | null = null;
export function _decode_ShadowErrorData(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_ShadowErrorData) {
        _cached_decoder_for_ShadowErrorData = function (
            el: asn1.ASN1Element
        ): ShadowErrorData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let problem!: ShadowProblem;
            let lastUpdate: asn1.OPTIONAL<Time>;
            let updateWindow: asn1.OPTIONAL<UpdateWindow>;
            let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
            let securityParameters: asn1.OPTIONAL<SecurityParameters>;
            let performer: asn1.OPTIONAL<DistinguishedName>;
            let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> =
                ShadowErrorData._default_value_for_aliasDereferenced;
            let notification: asn1.OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                problem: (_el: asn1.ASN1Element): void => {
                    problem = _decode_ShadowProblem(_el);
                },
                lastUpdate: (_el: asn1.ASN1Element): void => {
                    lastUpdate = _decode_Time(_el);
                },
                updateWindow: (_el: asn1.ASN1Element): void => {
                    updateWindow = _decode_UpdateWindow(_el);
                },
                securityParameters: (_el: asn1.ASN1Element): void => {
                    securityParameters = __utils._decode_explicit<
                        SecurityParameters
                    >(() => _decode_SecurityParameters)(_el);
                },
                performer: (_el: asn1.ASN1Element): void => {
                    performer = __utils._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: asn1.ASN1Element): void => {
                    aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(
                        () => __utils._decodeBoolean
                    )(_el);
                },
                notification: (_el: asn1.ASN1Element): void => {
                    notification = __utils._decode_explicit<Attribute[]>(() =>
                        __utils._decodeSequenceOf<Attribute>(
                            () => _decode_Attribute
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ShadowErrorData,
                _extension_additions_list_spec_for_ShadowErrorData,
                _root_component_type_list_2_spec_for_ShadowErrorData,
                (ext: asn1.ASN1Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ShadowErrorData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ problem,
                lastUpdate,
                updateWindow,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_ShadowErrorData(el);
}
export function _encode_ShadowErrorData(
    value: ShadowErrorData,
    elGetter: __utils.ASN1Encoder<ShadowErrorData>
) {
    if (!_cached_encoder_for_ShadowErrorData) {
        _cached_encoder_for_ShadowErrorData = function (
            value: ShadowErrorData,
            elGetter: __utils.ASN1Encoder<ShadowErrorData>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ShadowProblem(
                                value.problem,
                                __utils.BER
                            ),
                            /* IF_ABSENT  */ value.lastUpdate === undefined
                                ? undefined
                                : _encode_Time(value.lastUpdate, __utils.BER),
                            /* IF_ABSENT  */ value.updateWindow === undefined
                                ? undefined
                                : _encode_UpdateWindow(
                                      value.updateWindow,
                                      __utils.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      __utils.BER
                                  )(value.securityParameters, __utils.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      __utils.BER
                                  )(value.performer, __utils.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            __utils.deepEq(
                                value.aliasDereferenced,
                                ShadowErrorData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      28,
                                      () => __utils._encodeBoolean,
                                      __utils.BER
                                  )(value.aliasDereferenced, __utils.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : __utils._encode_explicit(
                                      asn1.ASN1TagClass.context,
                                      27,
                                      () =>
                                          __utils._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              __utils.BER
                                          ),
                                      __utils.BER
                                  )(value.notification, __utils.BER),
                        ]
                    )
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_ShadowErrorData(value, elGetter);
}

/* END_MODULE DirectoryShadowAbstractService */
