/*
    BEGIN_MODULE HierarchicalOperationalBindings
    OID: joint-iso-itu-t.ds.module.hierarchicalOperationalBindings.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    MasterAndShadowAccessPoints,
    _decode_MasterAndShadowAccessPoints,
    _encode_MasterAndShadowAccessPoints,
} from "./DistributedOperations";
import {
    Attribute,
    DistinguishedName,
    RelativeDistinguishedName,
    _decode_Attribute,
    _decode_DistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_Attribute,
    _encode_DistinguishedName,
    _encode_RelativeDistinguishedName,
} from "./InformationFramework";
import * as __utils from "./__utils";
export {
    id_op_binding_hierarchical,
    id_op_binding_non_specific_hierarchical,
} from "./DirectoryOperationalBindingTypes";
export { directorySystemAC } from "./DirectoryOSIProtocols";
export {
    MasterAndShadowAccessPoints,
    _decode_MasterAndShadowAccessPoints,
    _encode_MasterAndShadowAccessPoints,
} from "./DistributedOperations";
export {
    Attribute,
    DistinguishedName,
    RelativeDistinguishedName,
    SupportedAttributes,
    _decode_Attribute,
    _decode_DistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_Attribute,
    _encode_DistinguishedName,
    _encode_RelativeDistinguishedName,
} from "./InformationFramework";
export { OPERATIONAL_BINDING } from "./OperationalBindingManagement";
export {
    directoryOperationalBindingTypes,
    directoryOSIProtocols,
    distributedOperations,
    informationFramework,
    opBindingManagement,
} from "./UsefulDefinitions";

export class HierarchicalAgreement {
    constructor(
        readonly rdn: RelativeDistinguishedName,
        readonly immediateSuperior: DistinguishedName,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_HierarchicalAgreement: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "rdn",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "immediateSuperior",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_HierarchicalAgreement: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_HierarchicalAgreement: __utils.ComponentSpec[] = [];
export const _decode_HierarchicalAgreement = function (
    el: asn1.ASN1Element
): HierarchicalAgreement {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "HierarchicalAgreement contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "rdn";
    sequence[1].name = "immediateSuperior";
    let rdn!: RelativeDistinguishedName;
    let immediateSuperior!: DistinguishedName;
    rdn = __utils._decode_explicit<RelativeDistinguishedName>(
        () => _decode_RelativeDistinguishedName
    )(sequence[0]);
    immediateSuperior = __utils._decode_explicit<DistinguishedName>(
        () => _decode_DistinguishedName
    )(sequence[1]);
    // TODO: Validate values.
    return new HierarchicalAgreement(rdn, immediateSuperior, sequence.slice(2));
};
export const _encode_HierarchicalAgreement = function (
    value: HierarchicalAgreement,
    elGetter: __utils.ASN1Encoder<HierarchicalAgreement>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        0,
                        () => _encode_RelativeDistinguishedName,
                        __utils.BER
                    )(value.rdn, __utils.BER),
                    __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        1,
                        () => _encode_DistinguishedName,
                        __utils.BER
                    )(value.immediateSuperior, __utils.BER),
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

export class SubentryInfo {
    constructor(
        readonly rdn: RelativeDistinguishedName,
        readonly info: Attribute[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_SubentryInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "rdn",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "info",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SubentryInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SubentryInfo: __utils.ComponentSpec[] = [];
export const _decode_SubentryInfo = function (
    el: asn1.ASN1Element
): SubentryInfo {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new asn1.ASN1ConstructionError(
            "SubentryInfo contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "rdn";
    sequence[1].name = "info";
    let rdn!: RelativeDistinguishedName;
    let info!: Attribute[];
    rdn = __utils._decode_explicit<RelativeDistinguishedName>(
        () => _decode_RelativeDistinguishedName
    )(sequence[0]);
    info = __utils._decode_explicit<Attribute[]>(() =>
        __utils._decodeSetOf<Attribute>(() => _decode_Attribute)
    )(sequence[1]);
    // TODO: Validate values.
    return new SubentryInfo(rdn, info, sequence.slice(2));
};
export const _encode_SubentryInfo = function (
    value: SubentryInfo,
    elGetter: __utils.ASN1Encoder<SubentryInfo>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        0,
                        () => _encode_RelativeDistinguishedName,
                        __utils.BER
                    )(value.rdn, __utils.BER),
                    __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        1,
                        () =>
                            __utils._encodeSetOf<Attribute>(
                                () => _encode_Attribute,
                                __utils.BER
                            ),
                        __utils.BER
                    )(value.info, __utils.BER),
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

export class SubordinateToSuperior {
    constructor(
        readonly accessPoints: MasterAndShadowAccessPoints | undefined,
        readonly alias: asn1.BOOLEAN | undefined,
        readonly entryInfo: Attribute[] | undefined,
        readonly subentries: SubentryInfo[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_SubordinateToSuperior: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "accessPoints",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "alias",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entryInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subentries",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SubordinateToSuperior: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SubordinateToSuperior: __utils.ComponentSpec[] = [];
export const _decode_SubordinateToSuperior = function (
    el: asn1.ASN1Element
): SubordinateToSuperior {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let accessPoints: asn1.OPTIONAL<MasterAndShadowAccessPoints>;
    let alias: asn1.OPTIONAL<asn1.BOOLEAN> = false;
    let entryInfo: asn1.OPTIONAL<Attribute[]>;
    let subentries: asn1.OPTIONAL<SubentryInfo[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        accessPoints: (_el: asn1.ASN1Element): void => {
            accessPoints = __utils._decode_explicit<
                MasterAndShadowAccessPoints
            >(() => _decode_MasterAndShadowAccessPoints)(_el);
        },
        alias: (_el: asn1.ASN1Element): void => {
            alias = __utils._decode_explicit<asn1.BOOLEAN>(
                () => __utils._decodeBoolean
            )(_el);
        },
        entryInfo: (_el: asn1.ASN1Element): void => {
            entryInfo = __utils._decode_explicit<Attribute[]>(() =>
                __utils._decodeSetOf<Attribute>(() => _decode_Attribute)
            )(_el);
        },
        subentries: (_el: asn1.ASN1Element): void => {
            subentries = __utils._decode_explicit<SubentryInfo[]>(() =>
                __utils._decodeSetOf<SubentryInfo>(() => _decode_SubentryInfo)
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SubordinateToSuperior,
        _extension_additions_list_spec_for_SubordinateToSuperior,
        _root_component_type_list_2_spec_for_SubordinateToSuperior,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new SubordinateToSuperior(
        /* SEQUENCE_CONSTRUCTOR_CALL */ accessPoints,
        alias,
        entryInfo,
        subentries,
        _unrecognizedExtensionsList
    );
};
export const _encode_SubordinateToSuperior = function (
    value: SubordinateToSuperior,
    elGetter: __utils.ASN1Encoder<SubordinateToSuperior>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    value.accessPoints
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              0,
                              () => _encode_MasterAndShadowAccessPoints,
                              __utils.BER
                          )(value.accessPoints, __utils.BER)
                        : undefined,
                    value.alias !== undefined &&
                    value.alias !== false /* TODO: Review this condition. */
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () => __utils._encodeBoolean,
                              __utils.BER
                          )(value.alias, __utils.BER)
                        : undefined,
                    value.entryInfo
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              2,
                              () =>
                                  __utils._encodeSetOf<Attribute>(
                                      () => _encode_Attribute,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.entryInfo, __utils.BER)
                        : undefined,
                    value.subentries
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              3,
                              () =>
                                  __utils._encodeSetOf<SubentryInfo>(
                                      () => _encode_SubentryInfo,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.subentries, __utils.BER)
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

export class Vertex {
    constructor(
        readonly rdn: RelativeDistinguishedName,
        readonly admPointInfo: Attribute[] | undefined,
        readonly subentries: SubentryInfo[] | undefined,
        readonly accessPoints: MasterAndShadowAccessPoints | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_Vertex: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "rdn",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "admPointInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subentries",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "accessPoints",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Vertex: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Vertex: __utils.ComponentSpec[] = [];
export const _decode_Vertex = function (el: asn1.ASN1Element): Vertex {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let rdn!: RelativeDistinguishedName;
    let admPointInfo: asn1.OPTIONAL<Attribute[]>;
    let subentries: asn1.OPTIONAL<SubentryInfo[]>;
    let accessPoints: asn1.OPTIONAL<MasterAndShadowAccessPoints>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        rdn: (_el: asn1.ASN1Element): void => {
            rdn = __utils._decode_explicit<RelativeDistinguishedName>(
                () => _decode_RelativeDistinguishedName
            )(_el);
        },
        admPointInfo: (_el: asn1.ASN1Element): void => {
            admPointInfo = __utils._decode_explicit<Attribute[]>(() =>
                __utils._decodeSetOf<Attribute>(() => _decode_Attribute)
            )(_el);
        },
        subentries: (_el: asn1.ASN1Element): void => {
            subentries = __utils._decode_explicit<SubentryInfo[]>(() =>
                __utils._decodeSetOf<SubentryInfo>(() => _decode_SubentryInfo)
            )(_el);
        },
        accessPoints: (_el: asn1.ASN1Element): void => {
            accessPoints = __utils._decode_explicit<
                MasterAndShadowAccessPoints
            >(() => _decode_MasterAndShadowAccessPoints)(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Vertex,
        _extension_additions_list_spec_for_Vertex,
        _root_component_type_list_2_spec_for_Vertex,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new Vertex(
        /* SEQUENCE_CONSTRUCTOR_CALL */ rdn,
        admPointInfo,
        subentries,
        accessPoints,
        _unrecognizedExtensionsList
    );
};
export const _encode_Vertex = function (
    value: Vertex,
    elGetter: __utils.ASN1Encoder<Vertex>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        0,
                        () => _encode_RelativeDistinguishedName,
                        __utils.BER
                    )(value.rdn, __utils.BER),
                    value.admPointInfo
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () =>
                                  __utils._encodeSetOf<Attribute>(
                                      () => _encode_Attribute,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.admPointInfo, __utils.BER)
                        : undefined,
                    value.subentries
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              2,
                              () =>
                                  __utils._encodeSetOf<SubentryInfo>(
                                      () => _encode_SubentryInfo,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.subentries, __utils.BER)
                        : undefined,
                    value.accessPoints
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              3,
                              () => _encode_MasterAndShadowAccessPoints,
                              __utils.BER
                          )(value.accessPoints, __utils.BER)
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

export type DITcontext = Vertex[]; // SequenceOfType
export const _decode_DITcontext = __utils._decodeSequenceOf<Vertex>(
    () => _decode_Vertex
);
export const _encode_DITcontext = __utils._encodeSequenceOf<Vertex>(
    () => _encode_Vertex,
    __utils.BER
);

export class SuperiorToSubordinate {
    constructor(
        readonly contextPrefixInfo: DITcontext,
        readonly entryInfo: Attribute[] | undefined,
        readonly immediateSuperiorInfo: Attribute[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_SuperiorToSubordinate: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "contextPrefixInfo",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "entryInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "immediateSuperiorInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_SuperiorToSubordinate: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_SuperiorToSubordinate: __utils.ComponentSpec[] = [];
export const _decode_SuperiorToSubordinate = function (
    el: asn1.ASN1Element
): SuperiorToSubordinate {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let contextPrefixInfo!: DITcontext;
    let entryInfo: asn1.OPTIONAL<Attribute[]>;
    let immediateSuperiorInfo: asn1.OPTIONAL<Attribute[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        contextPrefixInfo: (_el: asn1.ASN1Element): void => {
            contextPrefixInfo = __utils._decode_explicit<DITcontext>(
                () => _decode_DITcontext
            )(_el);
        },
        entryInfo: (_el: asn1.ASN1Element): void => {
            entryInfo = __utils._decode_explicit<Attribute[]>(() =>
                __utils._decodeSetOf<Attribute>(() => _decode_Attribute)
            )(_el);
        },
        immediateSuperiorInfo: (_el: asn1.ASN1Element): void => {
            immediateSuperiorInfo = __utils._decode_explicit<Attribute[]>(() =>
                __utils._decodeSetOf<Attribute>(() => _decode_Attribute)
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SuperiorToSubordinate,
        _extension_additions_list_spec_for_SuperiorToSubordinate,
        _root_component_type_list_2_spec_for_SuperiorToSubordinate,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new SuperiorToSubordinate(
        /* SEQUENCE_CONSTRUCTOR_CALL */ contextPrefixInfo,
        entryInfo,
        immediateSuperiorInfo,
        _unrecognizedExtensionsList
    );
};
export const _encode_SuperiorToSubordinate = function (
    value: SuperiorToSubordinate,
    elGetter: __utils.ASN1Encoder<SuperiorToSubordinate>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        0,
                        () => _encode_DITcontext,
                        __utils.BER
                    )(value.contextPrefixInfo, __utils.BER),
                    value.entryInfo
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () =>
                                  __utils._encodeSetOf<Attribute>(
                                      () => _encode_Attribute,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.entryInfo, __utils.BER)
                        : undefined,
                    value.immediateSuperiorInfo
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              2,
                              () =>
                                  __utils._encodeSetOf<Attribute>(
                                      () => _encode_Attribute,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.immediateSuperiorInfo, __utils.BER)
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

export type SuperiorToSubordinateModification = SuperiorToSubordinate; // DefinedType
export const _decode_SuperiorToSubordinateModification = _decode_SuperiorToSubordinate;
export const _encode_SuperiorToSubordinateModification = _encode_SuperiorToSubordinate;

export class NonSpecificHierarchicalAgreement {
    constructor(
        readonly immediateSuperior: DistinguishedName,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_NonSpecificHierarchicalAgreement: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "immediateSuperior",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_NonSpecificHierarchicalAgreement: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_NonSpecificHierarchicalAgreement: __utils.ComponentSpec[] = [];
export const _decode_NonSpecificHierarchicalAgreement = function (
    el: asn1.ASN1Element
): NonSpecificHierarchicalAgreement {
    const sequence: asn1.ASN1Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new asn1.ASN1ConstructionError(
            "NonSpecificHierarchicalAgreement contained only " +
                sequence.length.toString() +
                " elements."
        );
    }
    // TODO: Validate tags.
    sequence[0].name = "immediateSuperior";
    let immediateSuperior!: DistinguishedName;
    immediateSuperior = __utils._decode_explicit<DistinguishedName>(
        () => _decode_DistinguishedName
    )(sequence[0]);
    // TODO: Validate values.
    return new NonSpecificHierarchicalAgreement(
        immediateSuperior,
        sequence.slice(1)
    );
};
export const _encode_NonSpecificHierarchicalAgreement = function (
    value: NonSpecificHierarchicalAgreement,
    elGetter: __utils.ASN1Encoder<NonSpecificHierarchicalAgreement>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        1,
                        () => _encode_DistinguishedName,
                        __utils.BER
                    )(value.immediateSuperior, __utils.BER),
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

export type NHOBSuperiorToSubordinate = SuperiorToSubordinate; // DefinedType
export const _decode_NHOBSuperiorToSubordinate = _decode_SuperiorToSubordinate;
export const _encode_NHOBSuperiorToSubordinate = _encode_SuperiorToSubordinate;

export class NHOBSubordinateToSuperior {
    constructor(
        readonly accessPoints: MasterAndShadowAccessPoints | undefined,
        readonly subentries: SubentryInfo[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[]
    ) {}
}
export const _root_component_type_list_1_spec_for_NHOBSubordinateToSuperior: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "accessPoints",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "subentries",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_NHOBSubordinateToSuperior: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_NHOBSubordinateToSuperior: __utils.ComponentSpec[] = [];
export const _decode_NHOBSubordinateToSuperior = function (
    el: asn1.ASN1Element
): NHOBSubordinateToSuperior {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let accessPoints: asn1.OPTIONAL<MasterAndShadowAccessPoints>;
    let subentries: asn1.OPTIONAL<SubentryInfo[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        accessPoints: (_el: asn1.ASN1Element): void => {
            accessPoints = __utils._decode_explicit<
                MasterAndShadowAccessPoints
            >(() => _decode_MasterAndShadowAccessPoints)(_el);
        },
        subentries: (_el: asn1.ASN1Element): void => {
            subentries = __utils._decode_explicit<SubentryInfo[]>(() =>
                __utils._decodeSetOf<SubentryInfo>(() => _decode_SubentryInfo)
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_NHOBSubordinateToSuperior,
        _extension_additions_list_spec_for_NHOBSubordinateToSuperior,
        _root_component_type_list_2_spec_for_NHOBSubordinateToSuperior,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new NHOBSubordinateToSuperior(
        /* SEQUENCE_CONSTRUCTOR_CALL */ accessPoints,
        subentries,
        _unrecognizedExtensionsList
    );
};
export const _encode_NHOBSubordinateToSuperior = function (
    value: NHOBSubordinateToSuperior,
    elGetter: __utils.ASN1Encoder<NHOBSubordinateToSuperior>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    value.accessPoints
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              0,
                              () => _encode_MasterAndShadowAccessPoints,
                              __utils.BER
                          )(value.accessPoints, __utils.BER)
                        : undefined,
                    value.subentries
                        ? __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              3,
                              () =>
                                  __utils._encodeSetOf<SubentryInfo>(
                                      () => _encode_SubentryInfo,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.subentries, __utils.BER)
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

// TODO: ObjectAssignment: hierarchicalOperationalBinding

// TODO: ObjectAssignment: nonSpecificHierarchicalOperationalBinding

/* END_MODULE HierarchicalOperationalBindings */
