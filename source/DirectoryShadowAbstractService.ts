
// DirectoryShadowAbstractService
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";
import * as UsefulDefinitions from "./UsefulDefinitions";
import {
    commonProtocolSpecification,
    directoryAbstractService,
    directoryOperationalBindingTypes,
    informationFramework,
    directoryOSIProtocols,
    distributedOperations,
    dsaOperationalAttributeTypes,
    enhancedSecurity,
    opBindingManagement
} from "./UsefulDefinitions";
export {
    commonProtocolSpecification,
    directoryAbstractService,
    directoryOperationalBindingTypes,
    informationFramework,
    directoryOSIProtocols,
    distributedOperations,
    dsaOperationalAttributeTypes,
    enhancedSecurity,
    opBindingManagement
} from "./UsefulDefinitions";

import * as InformationFramework from "./InformationFramework";
import {
    AttributeType,
    CONTEXT,
    DistinguishedName,
    RelativeDistinguishedName,
    SubtreeSpecification,
    SupportedAttributes,
    Attribute,
    _decode_AttributeType,
    _encode_AttributeType,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
    _decode_SubtreeSpecification,
    _encode_SubtreeSpecification,
    _decode_Attribute,
    _encode_Attribute
} from "./InformationFramework";
export {
    AttributeType,
    CONTEXT,
    DistinguishedName,
    RelativeDistinguishedName,
    SubtreeSpecification,
    SupportedAttributes,
    Attribute,
    _decode_AttributeType,
    _encode_AttributeType,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
    _decode_SubtreeSpecification,
    _encode_SubtreeSpecification,
    _decode_Attribute,
    _encode_Attribute
} from "./InformationFramework";

import * as OperationalBindingManagement from "./OperationalBindingManagement";
import {
    OPERATIONAL_BINDING,
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID
} from "./OperationalBindingManagement";
export {
    OPERATIONAL_BINDING,
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID
} from "./OperationalBindingManagement";

import * as DSAOperationalAttributeTypes from "./DSAOperationalAttributeTypes";
import {
    DSEType,
    SupplierAndConsumers,
    _decode_DSEType,
    _encode_DSEType,
    _decode_SupplierAndConsumers,
    _encode_SupplierAndConsumers
} from "./DSAOperationalAttributeTypes";
export {
    DSEType,
    SupplierAndConsumers,
    _decode_DSEType,
    _encode_DSEType,
    _decode_SupplierAndConsumers,
    _encode_SupplierAndConsumers
} from "./DSAOperationalAttributeTypes";

import * as EnhancedSecurity from "./EnhancedSecurity";
import {
    OPTIONALLY_PROTECTED,
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ
} from "./EnhancedSecurity";
export {
    OPTIONALLY_PROTECTED,
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ
} from "./EnhancedSecurity";

import * as DirectoryAbstractService from "./DirectoryAbstractService";
import {
    CommonResultsSeq,
    ContextSelection,
    EntryModification,
    SecurityParameters,
    _decode_CommonResultsSeq,
    _encode_CommonResultsSeq,
    _decode_ContextSelection,
    _encode_ContextSelection,
    _decode_EntryModification,
    _encode_EntryModification,
    _decode_SecurityParameters,
    _encode_SecurityParameters
} from "./DirectoryAbstractService";
export {
    CommonResultsSeq,
    ContextSelection,
    EntryModification,
    SecurityParameters,
    _decode_CommonResultsSeq,
    _encode_CommonResultsSeq,
    _decode_ContextSelection,
    _encode_ContextSelection,
    _decode_EntryModification,
    _encode_EntryModification,
    _decode_SecurityParameters,
    _encode_SecurityParameters
} from "./DirectoryAbstractService";

import * as DistributedOperations from "./DistributedOperations";
import {
    AccessPoint,
    dSABind,
    _decode_AccessPoint,
    _encode_AccessPoint
} from "./DistributedOperations";
export {
    AccessPoint,
    dSABind,
    _decode_AccessPoint,
    _encode_AccessPoint
} from "./DistributedOperations";

import * as DirectoryOperationalBindingTypes from "./DirectoryOperationalBindingTypes";
import {
    id_op_binding_shadow
} from "./DirectoryOperationalBindingTypes";
export {
    id_op_binding_shadow
} from "./DirectoryOperationalBindingTypes";

import * as DirectoryOSIProtocols from "./DirectoryOSIProtocols";
import {
    shadowConsumerInitiatedAC,
    shadowSupplierInitiatedAC
} from "./DirectoryOSIProtocols";
export {
    shadowConsumerInitiatedAC,
    shadowSupplierInitiatedAC
} from "./DirectoryOSIProtocols";

import * as CommonProtocolSpecification from "./CommonProtocolSpecification";
import {
    ERROR,
    OPERATION,
    id_errcode_shadowError,
    id_opcode_coordinateShadowUpdate,
    id_opcode_requestShadowUpdate,
    id_opcode_updateShadow
} from "./CommonProtocolSpecification";
export {
    ERROR,
    OPERATION,
    id_errcode_shadowError,
    id_opcode_coordinateShadowUpdate,
    id_opcode_requestShadowUpdate,
    id_opcode_updateShadow
} from "./CommonProtocolSpecification";


const itu_t: number = 0;
const itu_r: number = 0;
const ccitt: number = 0;
const iso: number = 1;
const joint_iso_itu_t: number = 2;
const joint_iso_ccitt: number = 2;

// TODO: ObjectAssignment: dSAShadowBind

// TODO: ObjectAssignment: shadowOperationalBinding

export class ModificationParameter {
    constructor (
        readonly secondaryShadows: SupplierAndConsumers[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_ModificationParameter: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("secondaryShadows", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ModificationParameter: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ModificationParameter: __utils.ComponentSpec[] = [
    
];
export const _decode_ModificationParameter = function (el: asn1.ASN1Element): ModificationParameter {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new asn1.ASN1ConstructionError("ModificationParameter contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "secondaryShadows";
    let secondaryShadows!: SupplierAndConsumers[];
    secondaryShadows = __utils._decodeSetOf<SupplierAndConsumers>(() => _decode_SupplierAndConsumers)(sequence[0]);
    // TODO: Validate values.
    return new ModificationParameter(
        secondaryShadows,
        sequence.slice(1),
    );
};
export const _encode_ModificationParameter = function (value: ModificationParameter, elGetter: __utils.ASN1Encoder<ModificationParameter>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            __utils._encodeSetOf<SupplierAndConsumers>(() => _encode_SupplierAndConsumers, __utils.BER)(value.secondaryShadows, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class AreaSpecification {
    constructor (
        readonly contextPrefix: DistinguishedName,
        readonly replicationArea: SubtreeSpecification,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_AreaSpecification: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("contextPrefix", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("replicationArea", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_AreaSpecification: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_AreaSpecification: __utils.ComponentSpec[] = [
    
];
export const _decode_AreaSpecification = function (el: asn1.ASN1Element): AreaSpecification {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("AreaSpecification contained only " + sequence.length.toString() + " elements.");
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
        sequence.slice(2),
    );
};
export const _encode_AreaSpecification = function (value: AreaSpecification, elGetter: __utils.ASN1Encoder<AreaSpecification>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_DistinguishedName(value.contextPrefix, __utils.BER),
            _encode_SubtreeSpecification(value.replicationArea, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AttributeTypes = AttributeType[]; // SetOfType
export const _decode_AttributeTypes = __utils._decodeSetOf<AttributeType>(() => _decode_AttributeType);
export const _encode_AttributeTypes = __utils._encodeSetOf<AttributeType>(() => _encode_AttributeType, __utils.BER);


export type ClassAttributes =
    { allAttributes: asn1.NULL }
    | { include: AttributeTypes }
    | { exclude: AttributeTypes }
    | asn1.ASN1Element;
export const _decode_ClassAttributes = __utils._decode_extensible_choice<ClassAttributes>({
    "UNIVERSAL 5": [ "allAttributes", __utils._decodeNull ],
    "CONTEXT 0": [ "include", __utils._decode_implicit<AttributeTypes>(() => _decode_AttributeTypes) ],
    "CONTEXT 1": [ "exclude", __utils._decode_implicit<AttributeTypes>(() => _decode_AttributeTypes) ]
});
export const _encode_ClassAttributes = __utils._encode_choice<ClassAttributes>({
    "allAttributes": __utils._encodeNull,
    "include": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_AttributeTypes, __utils.BER),
    "exclude": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_AttributeTypes, __utils.BER),
}, __utils.BER);


export class ClassAttributeSelection {
    constructor (
        readonly class_: asn1.OBJECT_IDENTIFIER | undefined,
        readonly classAttributes: ClassAttributes | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_ClassAttributeSelection: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("class", true, __utils.hasTag(asn1.ASN1TagClass.universal, 6), undefined, undefined),
    new __utils.ComponentSpec("classAttributes", true, __utils.hasAnyTag, undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ClassAttributeSelection: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ClassAttributeSelection: __utils.ComponentSpec[] = [
    
];
export const _decode_ClassAttributeSelection = function (el: asn1.ASN1Element): ClassAttributeSelection {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let class_: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let classAttributes: asn1.OPTIONAL<ClassAttributes> = { allAttributes: null };
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "class": (_el: asn1.ASN1Element): void => { class_ = __utils._decodeObjectIdentifier(_el); },
        "classAttributes": (_el: asn1.ASN1Element): void => { classAttributes = _decode_ClassAttributes(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ClassAttributeSelection,
        _extension_additions_list_spec_for_ClassAttributeSelection,
        _root_component_type_list_2_spec_for_ClassAttributeSelection,
        undefined,
    );
    return new ClassAttributeSelection( /* SEQUENCE_CONSTRUCTOR_CALL */
        class_,
        classAttributes
    );
};
export const _encode_ClassAttributeSelection = function (value: ClassAttributeSelection, elGetter: __utils.ASN1Encoder<ClassAttributeSelection>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.class_ ? __utils._encodeObjectIdentifier(value.class_, __utils.BER) : undefined),
            ((value.classAttributes !== undefined && value.classAttributes !== { allAttributes: null }) /* TODO: Review this condition. */ ? _encode_ClassAttributes(value.classAttributes, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type AttributeSelection = ClassAttributeSelection[]; // SetOfType
export const _decode_AttributeSelection = __utils._decodeSetOf<ClassAttributeSelection>(() => _decode_ClassAttributeSelection);
export const _encode_AttributeSelection = __utils._encodeSetOf<ClassAttributeSelection>(() => _encode_ClassAttributeSelection, __utils.BER);


export enum Knowledge_knowledgeType {
    master = 0,
    shadow = 1,
    both = 2,
}
export const Knowledge_knowledgeType_master: Knowledge_knowledgeType = Knowledge_knowledgeType.master; /* LONG_NAMED_ENUMERATED_VALUE */
export const master: Knowledge_knowledgeType = Knowledge_knowledgeType.master; /* SHORT_NAMED_ENUMERATED_VALUE */
export const Knowledge_knowledgeType_shadow: Knowledge_knowledgeType = Knowledge_knowledgeType.shadow; /* LONG_NAMED_ENUMERATED_VALUE */
export const shadow: Knowledge_knowledgeType = Knowledge_knowledgeType.shadow; /* SHORT_NAMED_ENUMERATED_VALUE */
export const Knowledge_knowledgeType_both: Knowledge_knowledgeType = Knowledge_knowledgeType.both; /* LONG_NAMED_ENUMERATED_VALUE */
export const both: Knowledge_knowledgeType = Knowledge_knowledgeType.both; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Knowledge_knowledgeType = __utils._decodeEnumerated;
export const _encode_Knowledge_knowledgeType = __utils._encodeEnumerated;


export class Knowledge {
    constructor (
        readonly knowledgeType: Knowledge_knowledgeType,
        readonly extendedKnowledge: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_Knowledge: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("knowledgeType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 10), undefined, undefined),
    new __utils.ComponentSpec("extendedKnowledge", true, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Knowledge: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_Knowledge: __utils.ComponentSpec[] = [
    
];
export const _decode_Knowledge = function (el: asn1.ASN1Element): Knowledge {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let knowledgeType!: Knowledge_knowledgeType;
    let extendedKnowledge: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "knowledgeType": (_el: asn1.ASN1Element): void => { knowledgeType = _decode_Knowledge_knowledgeType(_el); },
        "extendedKnowledge": (_el: asn1.ASN1Element): void => { extendedKnowledge = __utils._decodeBoolean(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Knowledge,
        _extension_additions_list_spec_for_Knowledge,
        _root_component_type_list_2_spec_for_Knowledge,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Knowledge( /* SEQUENCE_CONSTRUCTOR_CALL */
        knowledgeType,
        extendedKnowledge,
        _unrecognizedExtensionsList
    );
};
export const _encode_Knowledge = function (value: Knowledge, elGetter: __utils.ASN1Encoder<Knowledge>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Knowledge_knowledgeType(value.knowledgeType, __utils.BER),
            ((value.extendedKnowledge !== undefined && value.extendedKnowledge !== false) /* TODO: Review this condition. */ ? __utils._encodeBoolean(value.extendedKnowledge, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type UnitOfReplication_supplyContexts =
    { allContexts: asn1.NULL }
    | { selectedContexts: asn1.OBJECT_IDENTIFIER[] }
    | asn1.ASN1Element;
export const _decode_UnitOfReplication_supplyContexts = __utils._decode_extensible_choice<UnitOfReplication_supplyContexts>({
    "UNIVERSAL 5": [ "allContexts", __utils._decodeNull ],
    "UNIVERSAL 17": [ "selectedContexts", __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(() => __utils._decodeObjectIdentifier) ]
});
export const _encode_UnitOfReplication_supplyContexts = __utils._encode_choice<UnitOfReplication_supplyContexts>({
    "allContexts": __utils._encodeNull,
    "selectedContexts": __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(() => __utils._encodeObjectIdentifier, __utils.BER),
}, __utils.BER);


export class UnitOfReplication {
    constructor (
        readonly area: AreaSpecification,
        readonly attributes: AttributeSelection,
        readonly knowledge: Knowledge | undefined,
        readonly subordinates: asn1.BOOLEAN | undefined,
        readonly contextSelection: ContextSelection | undefined,
        readonly supplyContexts: UnitOfReplication_supplyContexts | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_UnitOfReplication: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("area", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("attributes", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined),
    new __utils.ComponentSpec("knowledge", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("subordinates", true, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined),
    new __utils.ComponentSpec("contextSelection", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("supplyContexts", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_UnitOfReplication: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_UnitOfReplication: __utils.ComponentSpec[] = [
    
];
export const _decode_UnitOfReplication = function (el: asn1.ASN1Element): UnitOfReplication {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let area!: AreaSpecification;
    let attributes!: AttributeSelection;
    let knowledge: asn1.OPTIONAL<Knowledge>;
    let subordinates: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let contextSelection: asn1.OPTIONAL<ContextSelection>;
    let supplyContexts: asn1.OPTIONAL<UnitOfReplication_supplyContexts>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "area": (_el: asn1.ASN1Element): void => { area = _decode_AreaSpecification(_el); },
        "attributes": (_el: asn1.ASN1Element): void => { attributes = _decode_AttributeSelection(_el); },
        "knowledge": (_el: asn1.ASN1Element): void => { knowledge = _decode_Knowledge(_el); },
        "subordinates": (_el: asn1.ASN1Element): void => { subordinates = __utils._decodeBoolean(_el); },
        "contextSelection": (_el: asn1.ASN1Element): void => { contextSelection = _decode_ContextSelection(_el); },
        "supplyContexts": (_el: asn1.ASN1Element): void => { supplyContexts = __utils._decode_implicit<UnitOfReplication_supplyContexts>(() => _decode_UnitOfReplication_supplyContexts)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UnitOfReplication,
        _extension_additions_list_spec_for_UnitOfReplication,
        _root_component_type_list_2_spec_for_UnitOfReplication,
        undefined,
    );
    return new UnitOfReplication( /* SEQUENCE_CONSTRUCTOR_CALL */
        area,
        attributes,
        knowledge,
        subordinates,
        contextSelection,
        supplyContexts
    );
};
export const _encode_UnitOfReplication = function (value: UnitOfReplication, elGetter: __utils.ASN1Encoder<UnitOfReplication>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_AreaSpecification(value.area, __utils.BER),
            _encode_AttributeSelection(value.attributes, __utils.BER),
            (value.knowledge ? _encode_Knowledge(value.knowledge, __utils.BER) : undefined),
            ((value.subordinates !== undefined && value.subordinates !== false) /* TODO: Review this condition. */ ? __utils._encodeBoolean(value.subordinates, __utils.BER) : undefined),
            (value.contextSelection ? _encode_ContextSelection(value.contextSelection, __utils.BER) : undefined),
            (value.supplyContexts ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_UnitOfReplication_supplyContexts, __utils.BER)(value.supplyContexts, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type Time = asn1.GeneralizedTime; // GeneralizedTime
export const _decode_Time = __utils._decodeGeneralizedTime;
export const _encode_Time = __utils._encodeGeneralizedTime;


export class PeriodicStrategy {
    constructor (
        readonly beginTime: Time | undefined,
        readonly windowSize: asn1.INTEGER,
        readonly updateInterval: asn1.INTEGER,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_PeriodicStrategy: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("beginTime", true, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("windowSize", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("updateInterval", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_PeriodicStrategy: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_PeriodicStrategy: __utils.ComponentSpec[] = [
    
];
export const _decode_PeriodicStrategy = function (el: asn1.ASN1Element): PeriodicStrategy {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let beginTime: asn1.OPTIONAL<Time>;
    let windowSize!: asn1.INTEGER;
    let updateInterval!: asn1.INTEGER;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "beginTime": (_el: asn1.ASN1Element): void => { beginTime = _decode_Time(_el); },
        "windowSize": (_el: asn1.ASN1Element): void => { windowSize = __utils._decodeInteger(_el); },
        "updateInterval": (_el: asn1.ASN1Element): void => { updateInterval = __utils._decodeInteger(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PeriodicStrategy,
        _extension_additions_list_spec_for_PeriodicStrategy,
        _root_component_type_list_2_spec_for_PeriodicStrategy,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PeriodicStrategy( /* SEQUENCE_CONSTRUCTOR_CALL */
        beginTime,
        windowSize,
        updateInterval,
        _unrecognizedExtensionsList
    );
};
export const _encode_PeriodicStrategy = function (value: PeriodicStrategy, elGetter: __utils.ASN1Encoder<PeriodicStrategy>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.beginTime ? _encode_Time(value.beginTime, __utils.BER) : undefined),
            __utils._encodeInteger(value.windowSize, __utils.BER),
            __utils._encodeInteger(value.updateInterval, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class SchedulingParameters {
    constructor (
        readonly periodic: PeriodicStrategy | undefined,
        readonly othertimes: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_SchedulingParameters: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("periodic", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("othertimes", true, __utils.hasTag(asn1.ASN1TagClass.universal, 1), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SchedulingParameters: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SchedulingParameters: __utils.ComponentSpec[] = [
    
];
export const _decode_SchedulingParameters = function (el: asn1.ASN1Element): SchedulingParameters {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let periodic: asn1.OPTIONAL<PeriodicStrategy>;
    let othertimes: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "periodic": (_el: asn1.ASN1Element): void => { periodic = _decode_PeriodicStrategy(_el); },
        "othertimes": (_el: asn1.ASN1Element): void => { othertimes = __utils._decodeBoolean(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SchedulingParameters,
        _extension_additions_list_spec_for_SchedulingParameters,
        _root_component_type_list_2_spec_for_SchedulingParameters,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SchedulingParameters( /* SEQUENCE_CONSTRUCTOR_CALL */
        periodic,
        othertimes,
        _unrecognizedExtensionsList
    );
};
export const _encode_SchedulingParameters = function (value: SchedulingParameters, elGetter: __utils.ASN1Encoder<SchedulingParameters>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.periodic ? _encode_PeriodicStrategy(value.periodic, __utils.BER) : undefined),
            ((value.othertimes !== undefined && value.othertimes !== false) /* TODO: Review this condition. */ ? __utils._encodeBoolean(value.othertimes, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type SupplierUpdateMode =
    { onChange: asn1.BOOLEAN }
    | { scheduled: SchedulingParameters }
    | asn1.ASN1Element;
export const _decode_SupplierUpdateMode = __utils._decode_extensible_choice<SupplierUpdateMode>({
    "UNIVERSAL 1": [ "onChange", __utils._decodeBoolean ],
    "UNIVERSAL 16": [ "scheduled", _decode_SchedulingParameters ]
});
export const _encode_SupplierUpdateMode = __utils._encode_choice<SupplierUpdateMode>({
    "onChange": __utils._encodeBoolean,
    "scheduled": _encode_SchedulingParameters,
}, __utils.BER);


export type ConsumerUpdateMode = SchedulingParameters; // DefinedType
export const _decode_ConsumerUpdateMode = _decode_SchedulingParameters;
export const _encode_ConsumerUpdateMode = _encode_SchedulingParameters;


export type UpdateMode =
    { supplierInitiated: SupplierUpdateMode }
    | { consumerInitiated: ConsumerUpdateMode }
    | asn1.ASN1Element;
export const _decode_UpdateMode = __utils._decode_extensible_choice<UpdateMode>({
    "CONTEXT 0": [ "supplierInitiated", __utils._decode_implicit<SupplierUpdateMode>(() => _decode_SupplierUpdateMode) ],
    "CONTEXT 1": [ "consumerInitiated", __utils._decode_implicit<ConsumerUpdateMode>(() => _decode_ConsumerUpdateMode) ]
});
export const _encode_UpdateMode = __utils._encode_choice<UpdateMode>({
    "supplierInitiated": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_SupplierUpdateMode, __utils.BER),
    "consumerInitiated": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_ConsumerUpdateMode, __utils.BER),
}, __utils.BER);


export class ShadowingAgreementInfo {
    constructor (
        readonly shadowSubject: UnitOfReplication,
        readonly updateMode: UpdateMode | undefined,
        readonly master: AccessPoint | undefined,
        readonly secondaryShadows: asn1.BOOLEAN | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_ShadowingAgreementInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("shadowSubject", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("updateMode", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("master", true, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined),
    new __utils.ComponentSpec("secondaryShadows", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ShadowingAgreementInfo: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ShadowingAgreementInfo: __utils.ComponentSpec[] = [
    
];
export const _decode_ShadowingAgreementInfo = function (el: asn1.ASN1Element): ShadowingAgreementInfo {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let shadowSubject!: UnitOfReplication;
    let updateMode: asn1.OPTIONAL<UpdateMode> = { supplierInitiated: { onChange: true } };
    let master: asn1.OPTIONAL<AccessPoint>;
    let secondaryShadows: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "shadowSubject": (_el: asn1.ASN1Element): void => { shadowSubject = _decode_UnitOfReplication(_el); },
        "updateMode": (_el: asn1.ASN1Element): void => { updateMode = _decode_UpdateMode(_el); },
        "master": (_el: asn1.ASN1Element): void => { master = _decode_AccessPoint(_el); },
        "secondaryShadows": (_el: asn1.ASN1Element): void => { secondaryShadows = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ShadowingAgreementInfo,
        _extension_additions_list_spec_for_ShadowingAgreementInfo,
        _root_component_type_list_2_spec_for_ShadowingAgreementInfo,
        undefined,
    );
    return new ShadowingAgreementInfo( /* SEQUENCE_CONSTRUCTOR_CALL */
        shadowSubject,
        updateMode,
        master,
        secondaryShadows
    );
};
export const _encode_ShadowingAgreementInfo = function (value: ShadowingAgreementInfo, elGetter: __utils.ASN1Encoder<ShadowingAgreementInfo>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_UnitOfReplication(value.shadowSubject, __utils.BER),
            ((value.updateMode !== undefined && value.updateMode !== { supplierInitiated: { onChange: true } }) /* TODO: Review this condition. */ ? _encode_UpdateMode(value.updateMode, __utils.BER) : undefined),
            (value.master ? _encode_AccessPoint(value.master, __utils.BER) : undefined),
            ((value.secondaryShadows !== undefined && value.secondaryShadows !== false) /* TODO: Review this condition. */ ? __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeBoolean, __utils.BER)(value.secondaryShadows, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


// TODO: ObjectSetAssignment: All-operations-consumer-initiated

// TODO: ObjectSetAssignment: All-operations-supplier-initiated

// TODO: ObjectAssignment: coordinateShadowUpdate

export type AgreementID = OperationalBindingID; // DefinedType
export const _decode_AgreementID = _decode_OperationalBindingID;
export const _encode_AgreementID = _encode_OperationalBindingID;


export type CoordinateShadowUpdateArgumentData_updateStrategy_standard = asn1.ENUMERATED
export const CoordinateShadowUpdateArgumentData_updateStrategy_standard_noChanges: CoordinateShadowUpdateArgumentData_updateStrategy_standard = 0; /* LONG_NAMED_ENUMERATED_VALUE */
export const noChanges: CoordinateShadowUpdateArgumentData_updateStrategy_standard = CoordinateShadowUpdateArgumentData_updateStrategy_standard_noChanges; /* SHORT_NAMED_ENUMERATED_VALUE */
export const CoordinateShadowUpdateArgumentData_updateStrategy_standard_incremental: CoordinateShadowUpdateArgumentData_updateStrategy_standard = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const incremental: CoordinateShadowUpdateArgumentData_updateStrategy_standard = CoordinateShadowUpdateArgumentData_updateStrategy_standard_incremental; /* SHORT_NAMED_ENUMERATED_VALUE */
export const CoordinateShadowUpdateArgumentData_updateStrategy_standard_total: CoordinateShadowUpdateArgumentData_updateStrategy_standard = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const total: CoordinateShadowUpdateArgumentData_updateStrategy_standard = CoordinateShadowUpdateArgumentData_updateStrategy_standard_total; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CoordinateShadowUpdateArgumentData_updateStrategy_standard = __utils._decodeEnumerated;
export const _encode_CoordinateShadowUpdateArgumentData_updateStrategy_standard = __utils._encodeEnumerated;


export type CoordinateShadowUpdateArgumentData_updateStrategy =
    { standard: CoordinateShadowUpdateArgumentData_updateStrategy_standard }
    | { other: asn1.EXTERNAL }
    | asn1.ASN1Element;
export const _decode_CoordinateShadowUpdateArgumentData_updateStrategy = __utils._decode_extensible_choice<CoordinateShadowUpdateArgumentData_updateStrategy>({
    "UNIVERSAL 10": [ "standard", _decode_CoordinateShadowUpdateArgumentData_updateStrategy_standard ],
    "UNIVERSAL 8": [ "other", __utils._decodeExternal ]
});
export const _encode_CoordinateShadowUpdateArgumentData_updateStrategy = __utils._encode_choice<CoordinateShadowUpdateArgumentData_updateStrategy>({
    "standard": _encode_CoordinateShadowUpdateArgumentData_updateStrategy_standard,
    "other": __utils._encodeExternal,
}, __utils.BER);


export class CoordinateShadowUpdateArgumentData {
    constructor (
        readonly agreementID: AgreementID,
        readonly lastUpdate: Time | undefined,
        readonly updateStrategy: CoordinateShadowUpdateArgumentData_updateStrategy,
        readonly securityParameters: SecurityParameters | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_CoordinateShadowUpdateArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("agreementID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("lastUpdate", true, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("updateStrategy", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("securityParameters", true, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CoordinateShadowUpdateArgumentData: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_CoordinateShadowUpdateArgumentData: __utils.ComponentSpec[] = [
    
];
export const _decode_CoordinateShadowUpdateArgumentData = __utils._decode_implicit<CoordinateShadowUpdateArgumentData>(() => function (el: asn1.ASN1Element): CoordinateShadowUpdateArgumentData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let agreementID!: AgreementID;
    let lastUpdate: asn1.OPTIONAL<Time>;
    let updateStrategy!: CoordinateShadowUpdateArgumentData_updateStrategy;
    let securityParameters: asn1.OPTIONAL<SecurityParameters>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "agreementID": (_el: asn1.ASN1Element): void => { agreementID = _decode_AgreementID(_el); },
        "lastUpdate": (_el: asn1.ASN1Element): void => { lastUpdate = _decode_Time(_el); },
        "updateStrategy": (_el: asn1.ASN1Element): void => { updateStrategy = _decode_CoordinateShadowUpdateArgumentData_updateStrategy(_el); },
        "securityParameters": (_el: asn1.ASN1Element): void => { securityParameters = _decode_SecurityParameters(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CoordinateShadowUpdateArgumentData,
        _extension_additions_list_spec_for_CoordinateShadowUpdateArgumentData,
        _root_component_type_list_2_spec_for_CoordinateShadowUpdateArgumentData,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CoordinateShadowUpdateArgumentData( /* SEQUENCE_CONSTRUCTOR_CALL */
        agreementID,
        lastUpdate,
        updateStrategy,
        securityParameters,
        _unrecognizedExtensionsList
    );
});
export const _encode_CoordinateShadowUpdateArgumentData = __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => function (value: CoordinateShadowUpdateArgumentData, elGetter: __utils.ASN1Encoder<CoordinateShadowUpdateArgumentData>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_AgreementID(value.agreementID, __utils.BER),
            (value.lastUpdate ? _encode_Time(value.lastUpdate, __utils.BER) : undefined),
            _encode_CoordinateShadowUpdateArgumentData_updateStrategy(value.updateStrategy, __utils.BER),
            (value.securityParameters ? _encode_SecurityParameters(value.securityParameters, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type CoordinateShadowUpdateArgument = OPTIONALLY_PROTECTED<CoordinateShadowUpdateArgumentData>; // DefinedType
export const _decode_CoordinateShadowUpdateArgument = _get_decoder_for_OPTIONALLY_PROTECTED<CoordinateShadowUpdateArgumentData>(_decode_CoordinateShadowUpdateArgumentData);
export const _encode_CoordinateShadowUpdateArgument = _get_encoder_for_OPTIONALLY_PROTECTED<CoordinateShadowUpdateArgumentData>(_encode_CoordinateShadowUpdateArgumentData);


export class CoordinateShadowUpdateResultData {
    constructor (
        readonly agreementID: AgreementID,
        readonly lastUpdate: Time | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[],
        readonly _componentsOf_CommonResultsSeq: CommonResultsSeq
    ) {}
}
export const _root_component_type_list_1_spec_for_CoordinateShadowUpdateResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("agreementID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("lastUpdate", true, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_CoordinateShadowUpdateResultData: __utils.ComponentSpec[] = [
    /* TODO: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
];
export const _extension_additions_list_spec_for_CoordinateShadowUpdateResultData: __utils.ComponentSpec[] = [
    
];
export const _decode_CoordinateShadowUpdateResultData = __utils._decode_implicit<CoordinateShadowUpdateResultData>(() => function (el: asn1.ASN1Element): CoordinateShadowUpdateResultData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let agreementID!: AgreementID;
    let lastUpdate: asn1.OPTIONAL<Time>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    let _componentsOf!: CommonResultsSeq;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "agreementID": (_el: asn1.ASN1Element): void => { agreementID = _decode_AgreementID(_el); },
        "lastUpdate": (_el: asn1.ASN1Element): void => { lastUpdate = _decode_Time(_el); },
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CoordinateShadowUpdateResultData,
        _extension_additions_list_spec_for_CoordinateShadowUpdateResultData,
        _root_component_type_list_2_spec_for_CoordinateShadowUpdateResultData,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CoordinateShadowUpdateResultData( /* SEQUENCE_CONSTRUCTOR_CALL */
        agreementID,
        lastUpdate,
        _unrecognizedExtensionsList,
        _componentsOf
    );
});
export const _encode_CoordinateShadowUpdateResultData = __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => function (value: CoordinateShadowUpdateResultData, elGetter: __utils.ASN1Encoder<CoordinateShadowUpdateResultData>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_AgreementID(value.agreementID, __utils.BER),
            (value.lastUpdate ? _encode_Time(value.lastUpdate, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
        [
            /* TODO: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type CoordinateShadowUpdateResult =
    { null_: asn1.NULL }
    | { information: OPTIONALLY_PROTECTED<CoordinateShadowUpdateResultData> }
    | asn1.ASN1Element;
export const _decode_CoordinateShadowUpdateResult = __utils._decode_extensible_choice<CoordinateShadowUpdateResult>({
    "UNIVERSAL 5": [ "null_", __utils._decodeNull ],
    /* NO_TAG_OR_TAG_CLASS */: [ "information", _get_decoder_for_OPTIONALLY_PROTECTED<CoordinateShadowUpdateResultData>(_decode_CoordinateShadowUpdateResultData) ]
});
export const _encode_CoordinateShadowUpdateResult = __utils._encode_choice<CoordinateShadowUpdateResult>({
    "null_": __utils._encodeNull,
    "information": _get_encoder_for_OPTIONALLY_PROTECTED<CoordinateShadowUpdateResultData>(_encode_CoordinateShadowUpdateResultData),
}, __utils.BER);


// TODO: ObjectAssignment: requestShadowUpdate

export type RequestShadowUpdateArgumentData_requestedStrategy_standard = asn1.ENUMERATED
export const RequestShadowUpdateArgumentData_requestedStrategy_standard_incremental: RequestShadowUpdateArgumentData_requestedStrategy_standard = 1; /* LONG_NAMED_ENUMERATED_VALUE */
export const incremental: RequestShadowUpdateArgumentData_requestedStrategy_standard = RequestShadowUpdateArgumentData_requestedStrategy_standard_incremental; /* SHORT_NAMED_ENUMERATED_VALUE */
export const RequestShadowUpdateArgumentData_requestedStrategy_standard_total: RequestShadowUpdateArgumentData_requestedStrategy_standard = 2; /* LONG_NAMED_ENUMERATED_VALUE */
export const total: RequestShadowUpdateArgumentData_requestedStrategy_standard = RequestShadowUpdateArgumentData_requestedStrategy_standard_total; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RequestShadowUpdateArgumentData_requestedStrategy_standard = __utils._decodeEnumerated;
export const _encode_RequestShadowUpdateArgumentData_requestedStrategy_standard = __utils._encodeEnumerated;


export type RequestShadowUpdateArgumentData_requestedStrategy =
    { standard: RequestShadowUpdateArgumentData_requestedStrategy_standard }
    | { other: asn1.EXTERNAL }
    | asn1.ASN1Element;
export const _decode_RequestShadowUpdateArgumentData_requestedStrategy = __utils._decode_extensible_choice<RequestShadowUpdateArgumentData_requestedStrategy>({
    "UNIVERSAL 10": [ "standard", _decode_RequestShadowUpdateArgumentData_requestedStrategy_standard ],
    "UNIVERSAL 8": [ "other", __utils._decodeExternal ]
});
export const _encode_RequestShadowUpdateArgumentData_requestedStrategy = __utils._encode_choice<RequestShadowUpdateArgumentData_requestedStrategy>({
    "standard": _encode_RequestShadowUpdateArgumentData_requestedStrategy_standard,
    "other": __utils._encodeExternal,
}, __utils.BER);


export class RequestShadowUpdateArgumentData {
    constructor (
        readonly agreementID: AgreementID,
        readonly lastUpdate: Time | undefined,
        readonly requestedStrategy: RequestShadowUpdateArgumentData_requestedStrategy,
        readonly securityParameters: SecurityParameters | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_RequestShadowUpdateArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("agreementID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("lastUpdate", true, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("requestedStrategy", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("securityParameters", true, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_RequestShadowUpdateArgumentData: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_RequestShadowUpdateArgumentData: __utils.ComponentSpec[] = [
    
];
export const _decode_RequestShadowUpdateArgumentData = __utils._decode_implicit<RequestShadowUpdateArgumentData>(() => function (el: asn1.ASN1Element): RequestShadowUpdateArgumentData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let agreementID!: AgreementID;
    let lastUpdate: asn1.OPTIONAL<Time>;
    let requestedStrategy!: RequestShadowUpdateArgumentData_requestedStrategy;
    let securityParameters: asn1.OPTIONAL<SecurityParameters>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "agreementID": (_el: asn1.ASN1Element): void => { agreementID = _decode_AgreementID(_el); },
        "lastUpdate": (_el: asn1.ASN1Element): void => { lastUpdate = _decode_Time(_el); },
        "requestedStrategy": (_el: asn1.ASN1Element): void => { requestedStrategy = _decode_RequestShadowUpdateArgumentData_requestedStrategy(_el); },
        "securityParameters": (_el: asn1.ASN1Element): void => { securityParameters = _decode_SecurityParameters(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestShadowUpdateArgumentData,
        _extension_additions_list_spec_for_RequestShadowUpdateArgumentData,
        _root_component_type_list_2_spec_for_RequestShadowUpdateArgumentData,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RequestShadowUpdateArgumentData( /* SEQUENCE_CONSTRUCTOR_CALL */
        agreementID,
        lastUpdate,
        requestedStrategy,
        securityParameters,
        _unrecognizedExtensionsList
    );
});
export const _encode_RequestShadowUpdateArgumentData = __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => function (value: RequestShadowUpdateArgumentData, elGetter: __utils.ASN1Encoder<RequestShadowUpdateArgumentData>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_AgreementID(value.agreementID, __utils.BER),
            (value.lastUpdate ? _encode_Time(value.lastUpdate, __utils.BER) : undefined),
            _encode_RequestShadowUpdateArgumentData_requestedStrategy(value.requestedStrategy, __utils.BER),
            (value.securityParameters ? _encode_SecurityParameters(value.securityParameters, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type RequestShadowUpdateArgument = OPTIONALLY_PROTECTED<RequestShadowUpdateArgumentData>; // DefinedType
export const _decode_RequestShadowUpdateArgument = _get_decoder_for_OPTIONALLY_PROTECTED<RequestShadowUpdateArgumentData>(_decode_RequestShadowUpdateArgumentData);
export const _encode_RequestShadowUpdateArgument = _get_encoder_for_OPTIONALLY_PROTECTED<RequestShadowUpdateArgumentData>(_encode_RequestShadowUpdateArgumentData);


export class RequestShadowUpdateResultData {
    constructor (
        readonly agreementID: AgreementID,
        readonly lastUpdate: Time | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[],
        readonly _componentsOf_CommonResultsSeq: CommonResultsSeq
    ) {}
}
export const _root_component_type_list_1_spec_for_RequestShadowUpdateResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("agreementID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("lastUpdate", true, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_RequestShadowUpdateResultData: __utils.ComponentSpec[] = [
    /* TODO: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
];
export const _extension_additions_list_spec_for_RequestShadowUpdateResultData: __utils.ComponentSpec[] = [
    
];
export const _decode_RequestShadowUpdateResultData = __utils._decode_implicit<RequestShadowUpdateResultData>(() => function (el: asn1.ASN1Element): RequestShadowUpdateResultData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let agreementID!: AgreementID;
    let lastUpdate: asn1.OPTIONAL<Time>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    let _componentsOf!: CommonResultsSeq;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "agreementID": (_el: asn1.ASN1Element): void => { agreementID = _decode_AgreementID(_el); },
        "lastUpdate": (_el: asn1.ASN1Element): void => { lastUpdate = _decode_Time(_el); },
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestShadowUpdateResultData,
        _extension_additions_list_spec_for_RequestShadowUpdateResultData,
        _root_component_type_list_2_spec_for_RequestShadowUpdateResultData,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RequestShadowUpdateResultData( /* SEQUENCE_CONSTRUCTOR_CALL */
        agreementID,
        lastUpdate,
        _unrecognizedExtensionsList,
        _componentsOf
    );
});
export const _encode_RequestShadowUpdateResultData = __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => function (value: RequestShadowUpdateResultData, elGetter: __utils.ASN1Encoder<RequestShadowUpdateResultData>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_AgreementID(value.agreementID, __utils.BER),
            (value.lastUpdate ? _encode_Time(value.lastUpdate, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
        [
            /* TODO: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type RequestShadowUpdateResult =
    { null_: asn1.NULL }
    | { information: OPTIONALLY_PROTECTED<RequestShadowUpdateResultData> }
    | asn1.ASN1Element;
export const _decode_RequestShadowUpdateResult = __utils._decode_extensible_choice<RequestShadowUpdateResult>({
    "UNIVERSAL 5": [ "null_", __utils._decodeNull ],
    /* NO_TAG_OR_TAG_CLASS */: [ "information", _get_decoder_for_OPTIONALLY_PROTECTED<RequestShadowUpdateResultData>(_decode_RequestShadowUpdateResultData) ]
});
export const _encode_RequestShadowUpdateResult = __utils._encode_choice<RequestShadowUpdateResult>({
    "null_": __utils._encodeNull,
    "information": _get_encoder_for_OPTIONALLY_PROTECTED<RequestShadowUpdateResultData>(_encode_RequestShadowUpdateResultData),
}, __utils.BER);


// TODO: ObjectAssignment: updateShadow

export class UpdateWindow {
    constructor (
        readonly start: Time,
        readonly stop: Time,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_UpdateWindow: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("start", false, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("stop", false, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_UpdateWindow: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_UpdateWindow: __utils.ComponentSpec[] = [
    
];
export const _decode_UpdateWindow = function (el: asn1.ASN1Element): UpdateWindow {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("UpdateWindow contained only " + sequence.length.toString() + " elements.");
    }
    // TODO: Validate tags.
    sequence[0].name = "start";
    sequence[1].name = "stop";
    let start!: Time;
    let stop!: Time;
    start = _decode_Time(sequence[0]);
    stop = _decode_Time(sequence[1]);
    // TODO: Validate values.
    return new UpdateWindow(
        start,
        stop,
        sequence.slice(2),
    );
};
export const _encode_UpdateWindow = function (value: UpdateWindow, elGetter: __utils.ASN1Encoder<UpdateWindow>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_Time(value.start, __utils.BER),
            _encode_Time(value.stop, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type SDSEType = DSEType; // DefinedType
export const _decode_SDSEType = _decode_DSEType;
export const _encode_SDSEType = _encode_DSEType;


export class SDSEContent {
    constructor (
        readonly sDSEType: SDSEType,
        readonly subComplete: asn1.BOOLEAN | undefined,
        readonly attComplete: asn1.BOOLEAN | undefined,
        readonly attributes: Attribute[],
        readonly attValIncomplete: AttributeType[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_SDSEContent: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("sDSEType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("subComplete", true, __utils.hasTag(asn1.ASN1TagClass.context, 0), undefined, undefined),
    new __utils.ComponentSpec("attComplete", true, __utils.hasTag(asn1.ASN1TagClass.context, 1), undefined, undefined),
    new __utils.ComponentSpec("attributes", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined),
    new __utils.ComponentSpec("attValIncomplete", true, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SDSEContent: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SDSEContent: __utils.ComponentSpec[] = [
    
];
export const _decode_SDSEContent = function (el: asn1.ASN1Element): SDSEContent {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let sDSEType!: SDSEType;
    let subComplete: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let attComplete: asn1.OPTIONAL<asn1.BOOLEAN>;
    let attributes!: Attribute[];
    let attValIncomplete: asn1.OPTIONAL<AttributeType[]> = /* FIXME: attValIncomplete COULD_NOT_COMPILE_DEFAULT_VALUE */;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "sDSEType": (_el: asn1.ASN1Element): void => { sDSEType = _decode_SDSEType(_el); },
        "subComplete": (_el: asn1.ASN1Element): void => { subComplete = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "attComplete": (_el: asn1.ASN1Element): void => { attComplete = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "attributes": (_el: asn1.ASN1Element): void => { attributes = __utils._decodeSetOf<Attribute>(() => _decode_Attribute)(_el); },
        "attValIncomplete": (_el: asn1.ASN1Element): void => { attValIncomplete = __utils._decodeSetOf<AttributeType>(() => _decode_AttributeType)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SDSEContent,
        _extension_additions_list_spec_for_SDSEContent,
        _root_component_type_list_2_spec_for_SDSEContent,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SDSEContent( /* SEQUENCE_CONSTRUCTOR_CALL */
        sDSEType,
        subComplete,
        attComplete,
        attributes,
        attValIncomplete,
        _unrecognizedExtensionsList
    );
};
export const _encode_SDSEContent = function (value: SDSEContent, elGetter: __utils.ASN1Encoder<SDSEContent>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_SDSEType(value.sDSEType, __utils.BER),
            ((value.subComplete !== undefined && value.subComplete !== false) /* TODO: Review this condition. */ ? __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeBoolean, __utils.BER)(value.subComplete, __utils.BER) : undefined),
            (value.attComplete ? __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeBoolean, __utils.BER)(value.attComplete, __utils.BER) : undefined),
            __utils._encodeSetOf<Attribute>(() => _encode_Attribute, __utils.BER)(value.attributes, __utils.BER),
            (value.attValIncomplete /* FIXME: COULD_NOT_COMPILE_DEFAULT_VALUE */? __utils._encodeSetOf<AttributeType>(() => _encode_AttributeType, __utils.BER)(value.attValIncomplete, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class Subtree {
    constructor (
        readonly rdn: RelativeDistinguishedName,
        readonly sDSE: SDSEContent | undefined /* REPLICATED_COMPONENT */,
        readonly subtree: Subtree[] | undefined /* REPLICATED_COMPONENT */,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_Subtree: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("rdn", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined),
    new __utils.ComponentSpec("sDSE", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("subtree", true, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_Subtree: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_Subtree: __utils.ComponentSpec[] = [
    
];
export const _decode_Subtree = function (el: asn1.ASN1Element): Subtree {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let rdn!: RelativeDistinguishedName;
    let sDSE: asn1.OPTIONAL<SDSEContent>;
    let subtree: asn1.OPTIONAL<Subtree[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "rdn": (_el: asn1.ASN1Element): void => { rdn = _decode_RelativeDistinguishedName(_el); },
        "sDSE": (_el: asn1.ASN1Element): void => { sDSE = _decode_SDSEContent(_el); },
        "subtree": (_el: asn1.ASN1Element): void => { subtree = __utils._decodeSetOf<Subtree>(() => _decode_Subtree)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Subtree,
        _extension_additions_list_spec_for_Subtree,
        _root_component_type_list_2_spec_for_Subtree,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Subtree( /* SEQUENCE_CONSTRUCTOR_CALL */
        rdn,
        sDSE,
        subtree,
        _unrecognizedExtensionsList
    );
};
export const _encode_Subtree = function (value: Subtree, elGetter: __utils.ASN1Encoder<Subtree>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_RelativeDistinguishedName(value.rdn, __utils.BER),
            (value.sDSE ? _encode_SDSEContent(value.sDSE, __utils.BER) : undefined),
            (value.subtree ? __utils._encodeSetOf<Subtree>(() => _encode_Subtree, __utils.BER)(value.subtree, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class TotalRefresh {
    constructor (
        readonly sDSE: SDSEContent | undefined,
        readonly subtree: Subtree[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_TotalRefresh: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("sDSE", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("subtree", true, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_TotalRefresh: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_TotalRefresh: __utils.ComponentSpec[] = [
    
];
export const _decode_TotalRefresh = function (el: asn1.ASN1Element): TotalRefresh {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let sDSE: asn1.OPTIONAL<SDSEContent>;
    let subtree: asn1.OPTIONAL<Subtree[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "sDSE": (_el: asn1.ASN1Element): void => { sDSE = _decode_SDSEContent(_el); },
        "subtree": (_el: asn1.ASN1Element): void => { subtree = __utils._decodeSetOf<Subtree>(() => _decode_Subtree)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TotalRefresh,
        _extension_additions_list_spec_for_TotalRefresh,
        _root_component_type_list_2_spec_for_TotalRefresh,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TotalRefresh( /* SEQUENCE_CONSTRUCTOR_CALL */
        sDSE,
        subtree,
        _unrecognizedExtensionsList
    );
};
export const _encode_TotalRefresh = function (value: TotalRefresh, elGetter: __utils.ASN1Encoder<TotalRefresh>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.sDSE ? _encode_SDSEContent(value.sDSE, __utils.BER) : undefined),
            (value.subtree ? __utils._encodeSetOf<Subtree>(() => _encode_Subtree, __utils.BER)(value.subtree, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type ContentChange_rename =
    { newRDN: RelativeDistinguishedName }
    | { newDN: DistinguishedName };
export const _decode_ContentChange_rename = __utils._decode_inextensible_choice<ContentChange_rename>({
    "UNIVERSAL 17": [ "newRDN", _decode_RelativeDistinguishedName ],
    "UNIVERSAL 16": [ "newDN", _decode_DistinguishedName ]
});
export const _encode_ContentChange_rename = __utils._encode_choice<ContentChange_rename>({
    "newRDN": _encode_RelativeDistinguishedName,
    "newDN": _encode_DistinguishedName,
}, __utils.BER);


export type ContentChange_attributeChanges =
    { replace: Attribute[] }
    | { changes: EntryModification[] };
export const _decode_ContentChange_attributeChanges = __utils._decode_inextensible_choice<ContentChange_attributeChanges>({
    "CONTEXT 0": [ "replace", __utils._decode_implicit<Attribute[]>(() => __utils._decodeSetOf<Attribute>(() => _decode_Attribute)) ],
    "CONTEXT 1": [ "changes", __utils._decode_implicit<EntryModification[]>(() => __utils._decodeSequenceOf<EntryModification>(() => _decode_EntryModification)) ]
});
export const _encode_ContentChange_attributeChanges = __utils._encode_choice<ContentChange_attributeChanges>({
    "replace": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => __utils._encodeSetOf<Attribute>(() => _encode_Attribute, __utils.BER), __utils.BER),
    "changes": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => __utils._encodeSequenceOf<EntryModification>(() => _encode_EntryModification, __utils.BER), __utils.BER),
}, __utils.BER);


export class ContentChange {
    constructor (
        readonly rename: ContentChange_rename | undefined,
        readonly attributeChanges: ContentChange_attributeChanges | undefined,
        readonly sDSEType: SDSEType,
        readonly subComplete: asn1.BOOLEAN | undefined,
        readonly attComplete: asn1.BOOLEAN | undefined,
        readonly attValIncomplete: AttributeType[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_ContentChange: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("rename", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("attributeChanges", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("sDSEType", false, __utils.hasTag(asn1.ASN1TagClass.universal, 3), undefined, undefined),
    new __utils.ComponentSpec("subComplete", true, __utils.hasTag(asn1.ASN1TagClass.context, 2), undefined, undefined),
    new __utils.ComponentSpec("attComplete", true, __utils.hasTag(asn1.ASN1TagClass.context, 3), undefined, undefined),
    new __utils.ComponentSpec("attValIncomplete", true, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ContentChange: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_ContentChange: __utils.ComponentSpec[] = [
    
];
export const _decode_ContentChange = function (el: asn1.ASN1Element): ContentChange {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let rename: asn1.OPTIONAL<ContentChange_rename>;
    let attributeChanges: asn1.OPTIONAL<ContentChange_attributeChanges>;
    let sDSEType!: SDSEType;
    let subComplete: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let attComplete: asn1.OPTIONAL<asn1.BOOLEAN>;
    let attValIncomplete: asn1.OPTIONAL<AttributeType[]> = /* FIXME: attValIncomplete COULD_NOT_COMPILE_DEFAULT_VALUE */;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "rename": (_el: asn1.ASN1Element): void => { rename = _decode_ContentChange_rename(_el); },
        "attributeChanges": (_el: asn1.ASN1Element): void => { attributeChanges = _decode_ContentChange_attributeChanges(_el); },
        "sDSEType": (_el: asn1.ASN1Element): void => { sDSEType = _decode_SDSEType(_el); },
        "subComplete": (_el: asn1.ASN1Element): void => { subComplete = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "attComplete": (_el: asn1.ASN1Element): void => { attComplete = __utils._decode_implicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "attValIncomplete": (_el: asn1.ASN1Element): void => { attValIncomplete = __utils._decodeSetOf<AttributeType>(() => _decode_AttributeType)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ContentChange,
        _extension_additions_list_spec_for_ContentChange,
        _root_component_type_list_2_spec_for_ContentChange,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ContentChange( /* SEQUENCE_CONSTRUCTOR_CALL */
        rename,
        attributeChanges,
        sDSEType,
        subComplete,
        attComplete,
        attValIncomplete,
        _unrecognizedExtensionsList
    );
};
export const _encode_ContentChange = function (value: ContentChange, elGetter: __utils.ASN1Encoder<ContentChange>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.rename ? _encode_ContentChange_rename(value.rename, __utils.BER) : undefined),
            (value.attributeChanges ? _encode_ContentChange_attributeChanges(value.attributeChanges, __utils.BER) : undefined),
            _encode_SDSEType(value.sDSEType, __utils.BER),
            ((value.subComplete !== undefined && value.subComplete !== false) /* TODO: Review this condition. */ ? __utils._encode_implicit(asn1.ASN1TagClass.context, 2, () => __utils._encodeBoolean, __utils.BER)(value.subComplete, __utils.BER) : undefined),
            (value.attComplete ? __utils._encode_implicit(asn1.ASN1TagClass.context, 3, () => __utils._encodeBoolean, __utils.BER)(value.attComplete, __utils.BER) : undefined),
            (value.attValIncomplete /* FIXME: COULD_NOT_COMPILE_DEFAULT_VALUE */? __utils._encodeSetOf<AttributeType>(() => _encode_AttributeType, __utils.BER)(value.attValIncomplete, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type IncrementalStepRefresh_sDSEChanges =
    { add: SDSEContent }
    | { remove: asn1.NULL }
    | { modify: ContentChange }
    | asn1.ASN1Element;
export const _decode_IncrementalStepRefresh_sDSEChanges = __utils._decode_extensible_choice<IncrementalStepRefresh_sDSEChanges>({
    "CONTEXT 0": [ "add", __utils._decode_implicit<SDSEContent>(() => _decode_SDSEContent) ],
    "UNIVERSAL 5": [ "remove", __utils._decodeNull ],
    "CONTEXT 1": [ "modify", __utils._decode_implicit<ContentChange>(() => _decode_ContentChange) ]
});
export const _encode_IncrementalStepRefresh_sDSEChanges = __utils._encode_choice<IncrementalStepRefresh_sDSEChanges>({
    "add": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_SDSEContent, __utils.BER),
    "remove": __utils._encodeNull,
    "modify": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_ContentChange, __utils.BER),
}, __utils.BER);


export class SubordinateChanges {
    constructor (
        readonly subordinate: RelativeDistinguishedName,
        readonly changes: IncrementalStepRefresh,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_SubordinateChanges: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("subordinate", false, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined),
    new __utils.ComponentSpec("changes", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_SubordinateChanges: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_SubordinateChanges: __utils.ComponentSpec[] = [
    
];
export const _decode_SubordinateChanges = function (el: asn1.ASN1Element): SubordinateChanges {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError("SubordinateChanges contained only " + sequence.length.toString() + " elements.");
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
        sequence.slice(2),
    );
};
export const _encode_SubordinateChanges = function (value: SubordinateChanges, elGetter: __utils.ASN1Encoder<SubordinateChanges>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_RelativeDistinguishedName(value.subordinate, __utils.BER),
            _encode_IncrementalStepRefresh(value.changes, __utils.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export class IncrementalStepRefresh {
    constructor (
        readonly sDSEChanges: IncrementalStepRefresh_sDSEChanges | undefined,
        readonly subordinateUpdates: SubordinateChanges[] | undefined
    ) {}
}
export const _root_component_type_list_1_spec_for_IncrementalStepRefresh: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("sDSEChanges", true, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("subordinateUpdates", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_IncrementalStepRefresh: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_IncrementalStepRefresh: __utils.ComponentSpec[] = [
    
];
export const _decode_IncrementalStepRefresh = function (el: asn1.ASN1Element): IncrementalStepRefresh {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let sDSEChanges: asn1.OPTIONAL<IncrementalStepRefresh_sDSEChanges>;
    let subordinateUpdates: asn1.OPTIONAL<SubordinateChanges[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "sDSEChanges": (_el: asn1.ASN1Element): void => { sDSEChanges = _decode_IncrementalStepRefresh_sDSEChanges(_el); },
        "subordinateUpdates": (_el: asn1.ASN1Element): void => { subordinateUpdates = __utils._decodeSequenceOf<SubordinateChanges>(() => _decode_SubordinateChanges)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IncrementalStepRefresh,
        _extension_additions_list_spec_for_IncrementalStepRefresh,
        _root_component_type_list_2_spec_for_IncrementalStepRefresh,
        undefined,
    );
    return new IncrementalStepRefresh( /* SEQUENCE_CONSTRUCTOR_CALL */
        sDSEChanges,
        subordinateUpdates
    );
};
export const _encode_IncrementalStepRefresh = function (value: IncrementalStepRefresh, elGetter: __utils.ASN1Encoder<IncrementalStepRefresh>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            (value.sDSEChanges ? _encode_IncrementalStepRefresh_sDSEChanges(value.sDSEChanges, __utils.BER) : undefined),
            (value.subordinateUpdates ? __utils._encodeSequenceOf<SubordinateChanges>(() => _encode_SubordinateChanges, __utils.BER)(value.subordinateUpdates, __utils.BER) : undefined)
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
};


export type IncrementalRefresh = IncrementalStepRefresh[]; // SequenceOfType
export const _decode_IncrementalRefresh = __utils._decodeSequenceOf<IncrementalStepRefresh>(() => _decode_IncrementalStepRefresh);
export const _encode_IncrementalRefresh = __utils._encodeSequenceOf<IncrementalStepRefresh>(() => _encode_IncrementalStepRefresh, __utils.BER);


export type RefreshInformation =
    { noRefresh: asn1.NULL }
    | { total: TotalRefresh }
    | { incremental: IncrementalRefresh }
    | { otherStrategy: asn1.EXTERNAL }
    | asn1.ASN1Element;
export const _decode_RefreshInformation = __utils._decode_extensible_choice<RefreshInformation>({
    "UNIVERSAL 5": [ "noRefresh", __utils._decodeNull ],
    "CONTEXT 0": [ "total", __utils._decode_implicit<TotalRefresh>(() => _decode_TotalRefresh) ],
    "CONTEXT 1": [ "incremental", __utils._decode_implicit<IncrementalRefresh>(() => _decode_IncrementalRefresh) ],
    "UNIVERSAL 8": [ "otherStrategy", __utils._decodeExternal ]
});
export const _encode_RefreshInformation = __utils._encode_choice<RefreshInformation>({
    "noRefresh": __utils._encodeNull,
    "total": __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => _encode_TotalRefresh, __utils.BER),
    "incremental": __utils._encode_implicit(asn1.ASN1TagClass.context, 1, () => _encode_IncrementalRefresh, __utils.BER),
    "otherStrategy": __utils._encodeExternal,
}, __utils.BER);


export class UpdateShadowArgumentData {
    constructor (
        readonly agreementID: AgreementID,
        readonly updateTime: Time,
        readonly updateWindow: UpdateWindow | undefined,
        readonly updatedInfo: RefreshInformation,
        readonly securityParameters: SecurityParameters | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_UpdateShadowArgumentData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("agreementID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("updateTime", false, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("updateWindow", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("updatedInfo", false, __utils.hasAnyTag, undefined, undefined),
    new __utils.ComponentSpec("securityParameters", true, __utils.hasTag(asn1.ASN1TagClass.universal, 17), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_UpdateShadowArgumentData: __utils.ComponentSpec[] = [
    
];
export const _extension_additions_list_spec_for_UpdateShadowArgumentData: __utils.ComponentSpec[] = [
    
];
export const _decode_UpdateShadowArgumentData = __utils._decode_implicit<UpdateShadowArgumentData>(() => function (el: asn1.ASN1Element): UpdateShadowArgumentData {
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
        "agreementID": (_el: asn1.ASN1Element): void => { agreementID = _decode_AgreementID(_el); },
        "updateTime": (_el: asn1.ASN1Element): void => { updateTime = _decode_Time(_el); },
        "updateWindow": (_el: asn1.ASN1Element): void => { updateWindow = _decode_UpdateWindow(_el); },
        "updatedInfo": (_el: asn1.ASN1Element): void => { updatedInfo = _decode_RefreshInformation(_el); },
        "securityParameters": (_el: asn1.ASN1Element): void => { securityParameters = _decode_SecurityParameters(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UpdateShadowArgumentData,
        _extension_additions_list_spec_for_UpdateShadowArgumentData,
        _root_component_type_list_2_spec_for_UpdateShadowArgumentData,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UpdateShadowArgumentData( /* SEQUENCE_CONSTRUCTOR_CALL */
        agreementID,
        updateTime,
        updateWindow,
        updatedInfo,
        securityParameters,
        _unrecognizedExtensionsList
    );
});
export const _encode_UpdateShadowArgumentData = __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => function (value: UpdateShadowArgumentData, elGetter: __utils.ASN1Encoder<UpdateShadowArgumentData>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_AgreementID(value.agreementID, __utils.BER),
            _encode_Time(value.updateTime, __utils.BER),
            (value.updateWindow ? _encode_UpdateWindow(value.updateWindow, __utils.BER) : undefined),
            _encode_RefreshInformation(value.updatedInfo, __utils.BER),
            (value.securityParameters ? _encode_SecurityParameters(value.securityParameters, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type UpdateShadowArgument = OPTIONALLY_PROTECTED<UpdateShadowArgumentData>; // DefinedType
export const _decode_UpdateShadowArgument = _get_decoder_for_OPTIONALLY_PROTECTED<UpdateShadowArgumentData>(_decode_UpdateShadowArgumentData);
export const _encode_UpdateShadowArgument = _get_encoder_for_OPTIONALLY_PROTECTED<UpdateShadowArgumentData>(_encode_UpdateShadowArgumentData);


export class UpdateShadowResultData {
    constructor (
        readonly agreementID: AgreementID,
        readonly lastUpdate: Time | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[],
        readonly _componentsOf_CommonResultsSeq: CommonResultsSeq
    ) {}
}
export const _root_component_type_list_1_spec_for_UpdateShadowResultData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("agreementID", false, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined),
    new __utils.ComponentSpec("lastUpdate", true, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_UpdateShadowResultData: __utils.ComponentSpec[] = [
    /* TODO: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
];
export const _extension_additions_list_spec_for_UpdateShadowResultData: __utils.ComponentSpec[] = [
    
];
export const _decode_UpdateShadowResultData = __utils._decode_implicit<UpdateShadowResultData>(() => function (el: asn1.ASN1Element): UpdateShadowResultData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let agreementID!: AgreementID;
    let lastUpdate: asn1.OPTIONAL<Time>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    let _componentsOf!: CommonResultsSeq;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "agreementID": (_el: asn1.ASN1Element): void => { agreementID = _decode_AgreementID(_el); },
        "lastUpdate": (_el: asn1.ASN1Element): void => { lastUpdate = _decode_Time(_el); },
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UpdateShadowResultData,
        _extension_additions_list_spec_for_UpdateShadowResultData,
        _root_component_type_list_2_spec_for_UpdateShadowResultData,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UpdateShadowResultData( /* SEQUENCE_CONSTRUCTOR_CALL */
        agreementID,
        lastUpdate,
        _unrecognizedExtensionsList,
        _componentsOf
    );
});
export const _encode_UpdateShadowResultData = __utils._encode_implicit(asn1.ASN1TagClass.context, 0, () => function (value: UpdateShadowResultData, elGetter: __utils.ASN1Encoder<UpdateShadowResultData>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_AgreementID(value.agreementID, __utils.BER),
            (value.lastUpdate ? _encode_Time(value.lastUpdate, __utils.BER) : undefined)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
        [
            /* TODO: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
        ],
    ).filter((c: (asn1.ASN1Element | undefined)): boolean => (!!c)) as asn1.ASN1Element[], __utils.BER);
}, __utils.BER);


export type UpdateShadowResult =
    { null_: asn1.NULL }
    | { information: OPTIONALLY_PROTECTED<UpdateShadowResultData> }
    | asn1.ASN1Element;
export const _decode_UpdateShadowResult = __utils._decode_extensible_choice<UpdateShadowResult>({
    "UNIVERSAL 5": [ "null_", __utils._decodeNull ],
    /* NO_TAG_OR_TAG_CLASS */: [ "information", _get_decoder_for_OPTIONALLY_PROTECTED<UpdateShadowResultData>(_decode_UpdateShadowResultData) ]
});
export const _encode_UpdateShadowResult = __utils._encode_choice<UpdateShadowResult>({
    "null_": __utils._encodeNull,
    "information": _get_encoder_for_OPTIONALLY_PROTECTED<UpdateShadowResultData>(_encode_UpdateShadowResultData),
}, __utils.BER);


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
export const _decode_ShadowProblem = __utils._decodeInteger;
export const _encode_ShadowProblem = __utils._encodeInteger;


export class ShadowErrorData {
    constructor (
        readonly problem: ShadowProblem,
        readonly lastUpdate: Time | undefined,
        readonly updateWindow: UpdateWindow | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[],
        readonly securityParameters: SecurityParameters | undefined /* REPLICATED_COMPONENT */,
        readonly performer: DistinguishedName | undefined /* REPLICATED_COMPONENT */,
        readonly aliasDereferenced: asn1.BOOLEAN | undefined /* REPLICATED_COMPONENT */,
        readonly notification: Attribute[] | undefined /* REPLICATED_COMPONENT */
    ) {}
}
export const _root_component_type_list_1_spec_for_ShadowErrorData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("problem", false, __utils.hasTag(asn1.ASN1TagClass.universal, 2), undefined, undefined),
    new __utils.ComponentSpec("lastUpdate", true, __utils.hasTag(asn1.ASN1TagClass.universal, 24), undefined, undefined),
    new __utils.ComponentSpec("updateWindow", true, __utils.hasTag(asn1.ASN1TagClass.universal, 16), undefined, undefined)
];
export const _root_component_type_list_2_spec_for_ShadowErrorData: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec("securityParameters", true, __utils.hasTag(asn1.ASN1TagClass.context, 30), undefined, undefined),
    new __utils.ComponentSpec("performer", true, __utils.hasTag(asn1.ASN1TagClass.context, 29), undefined, undefined),
    new __utils.ComponentSpec("aliasDereferenced", true, __utils.hasTag(asn1.ASN1TagClass.context, 28), undefined, undefined),
    new __utils.ComponentSpec("notification", true, __utils.hasTag(asn1.ASN1TagClass.context, 27), undefined, undefined)
];
export const _extension_additions_list_spec_for_ShadowErrorData: __utils.ComponentSpec[] = [
    
];
export const _decode_ShadowErrorData = function (el: asn1.ASN1Element): ShadowErrorData {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let problem!: ShadowProblem;
    let lastUpdate: asn1.OPTIONAL<Time>;
    let updateWindow: asn1.OPTIONAL<UpdateWindow>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    let securityParameters: asn1.OPTIONAL<SecurityParameters>;
    let performer: asn1.OPTIONAL<DistinguishedName>;
    let aliasDereferenced: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let notification: asn1.OPTIONAL<Attribute[]>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        "problem": (_el: asn1.ASN1Element): void => { problem = _decode_ShadowProblem(_el); },
        "lastUpdate": (_el: asn1.ASN1Element): void => { lastUpdate = _decode_Time(_el); },
        "updateWindow": (_el: asn1.ASN1Element): void => { updateWindow = _decode_UpdateWindow(_el); },
        "securityParameters": (_el: asn1.ASN1Element): void => { securityParameters = __utils._decode_explicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "performer": (_el: asn1.ASN1Element): void => { performer = __utils._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "aliasDereferenced": (_el: asn1.ASN1Element): void => { aliasDereferenced = __utils._decode_explicit<asn1.BOOLEAN>(() => __utils._decodeBoolean)(_el); },
        "notification": (_el: asn1.ASN1Element): void => { notification = __utils._decode_explicit<Attribute[]>(() => __utils._decodeSequenceOf<Attribute>(() => _decode_Attribute))(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ShadowErrorData,
        _extension_additions_list_spec_for_ShadowErrorData,
        _root_component_type_list_2_spec_for_ShadowErrorData,
        (ext: asn1.ASN1Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ShadowErrorData( /* SEQUENCE_CONSTRUCTOR_CALL */
        problem,
        lastUpdate,
        updateWindow,
        _unrecognizedExtensionsList,
        securityParameters,
        performer,
        aliasDereferenced,
        notification
    );
};
export const _encode_ShadowErrorData = function (value: ShadowErrorData, elGetter: __utils.ASN1Encoder<ShadowErrorData>): asn1.ASN1Element {
    return __utils._encodeSequence(([] as (asn1.ASN1Element | undefined)[]).concat(
        [
            _encode_ShadowProblem(value.problem, __utils.BER),
            (value.lastUpdate ? _encode_Time(value.lastUpdate, __utils.BER) : undefined),
            (value.updateWindow ? _encode_UpdateWindow(value.updateWindow, __utils.BER) : undefined)
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


