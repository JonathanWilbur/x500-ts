/*
    BEGIN_MODULE SchemaAdministration
    OID: joint-iso-itu-t.ds.module.schemaAdministration.8
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as InformationFramework from "./InformationFramework";
import {
    AttributeUsage,
    ObjectClassKind,
    RuleIdentifier,
    _decode_AttributeUsage,
    _decode_ObjectClassKind,
    _decode_RuleIdentifier,
    _encode_AttributeUsage,
    _encode_ObjectClassKind,
    _encode_RuleIdentifier,
} from "./InformationFramework";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
import { id_soa, id_soc } from "./UsefulDefinitions";
import * as __utils from "./__utils";
export {
    AttributeUsage,
    DITContentRule,
    DITStructureRule,
    ObjectClassKind,
    _decode_AttributeUsage,
    _decode_DITContentRule,
    _decode_DITStructureRule,
    _decode_ObjectClassKind,
    _encode_AttributeUsage,
    _encode_DITContentRule,
    _encode_DITStructureRule,
    _encode_ObjectClassKind,
} from "./InformationFramework";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "./SelectedAttributeTypes";
export {
    id_soa,
    id_soc,
    informationFramework,
    ldapSystemSchema,
    selectedAttributeTypes,
} from "./UsefulDefinitions";

// TODO: ObjectAssignment: subschema

// TODO: ObjectAssignment: dITStructureRules

export class DITStructureRuleDescription {
    constructor(
        readonly ruleIdentifier: RuleIdentifier /* REPLICATED_COMPONENT */,
        readonly nameForm: asn1.OBJECT_IDENTIFIER /* REPLICATED_COMPONENT */,
        readonly superiorStructureRules:
            | RuleIdentifier[]
            | undefined /* REPLICATED_COMPONENT */,
        readonly name: UnboundedDirectoryString[] | undefined,
        readonly description: UnboundedDirectoryString | undefined,
        readonly obsolete: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DITStructureRuleDescription: __utils.ComponentSpec[] = [
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
    new __utils.ComponentSpec(
        "name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "description",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "obsolete",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DITStructureRuleDescription: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DITStructureRuleDescription: __utils.ComponentSpec[] = [];
export const _default_value_for_DITStructureRuleDescription__obsolete = false;
export const _decode_DITStructureRuleDescription = function (
    el: asn1.ASN1Element
): DITStructureRuleDescription {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let ruleIdentifier!: RuleIdentifier;
    let nameForm!: asn1.OBJECT_IDENTIFIER;
    let superiorStructureRules: asn1.OPTIONAL<RuleIdentifier[]>;
    let name: asn1.OPTIONAL<UnboundedDirectoryString[]>;
    let description: asn1.OPTIONAL<UnboundedDirectoryString>;
    let obsolete: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_DITStructureRuleDescription__obsolete;
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
            superiorStructureRules = __utils._decodeSetOf<RuleIdentifier>(
                () => _decode_RuleIdentifier
            )(_el);
        },
        name: (_el: asn1.ASN1Element): void => {
            name = __utils._decode_explicit<UnboundedDirectoryString[]>(() =>
                __utils._decodeSetOf<UnboundedDirectoryString>(
                    () => _decode_UnboundedDirectoryString
                )
            )(_el);
        },
        description: (_el: asn1.ASN1Element): void => {
            description = _decode_UnboundedDirectoryString(_el);
        },
        obsolete: (_el: asn1.ASN1Element): void => {
            obsolete = __utils._decodeBoolean(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_DITStructureRuleDescription,
        _extension_additions_list_spec_for_DITStructureRuleDescription,
        _root_component_type_list_2_spec_for_DITStructureRuleDescription,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new DITStructureRuleDescription(
        /* SEQUENCE_CONSTRUCTOR_CALL */ ruleIdentifier,
        nameForm,
        superiorStructureRules,
        name,
        description,
        obsolete,
        _unrecognizedExtensionsList
    );
};
export const _encode_DITStructureRuleDescription = function (
    value: DITStructureRuleDescription,
    elGetter: __utils.ASN1Encoder<DITStructureRuleDescription>
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
                    /* IF_ABSENT  */ value.superiorStructureRules === undefined
                        ? undefined
                        : __utils._encodeSetOf<RuleIdentifier>(
                              () => _encode_RuleIdentifier,
                              __utils.BER
                          )(value.superiorStructureRules, __utils.BER),
                    /* IF_ABSENT  */ value.name === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () =>
                                  __utils._encodeSetOf<
                                      UnboundedDirectoryString
                                  >(
                                      () => _encode_UnboundedDirectoryString,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.name, __utils.BER),
                    /* IF_ABSENT  */ value.description === undefined
                        ? undefined
                        : _encode_UnboundedDirectoryString(
                              value.description,
                              __utils.BER
                          ),
                    /* IF_DEFAULT */ value.obsolete === undefined ||
                    __utils.deepEq(
                        value.obsolete,
                        _default_value_for_DITStructureRuleDescription__obsolete
                    )
                        ? undefined
                        : __utils._encodeBoolean(value.obsolete, __utils.BER),
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

// TODO: ObjectAssignment: dITContentRules

export class DITContentRuleDescription {
    constructor(
        readonly structuralObjectClass: asn1.OBJECT_IDENTIFIER /* REPLICATED_COMPONENT */,
        readonly auxiliaries:
            | asn1.OBJECT_IDENTIFIER[]
            | undefined /* REPLICATED_COMPONENT */,
        readonly mandatory:
            | asn1.OBJECT_IDENTIFIER[]
            | undefined /* REPLICATED_COMPONENT */,
        readonly optional:
            | asn1.OBJECT_IDENTIFIER[]
            | undefined /* REPLICATED_COMPONENT */,
        readonly precluded:
            | asn1.OBJECT_IDENTIFIER[]
            | undefined /* REPLICATED_COMPONENT */,
        readonly name: UnboundedDirectoryString[] | undefined,
        readonly description: UnboundedDirectoryString | undefined,
        readonly obsolete: asn1.BOOLEAN | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DITContentRuleDescription: __utils.ComponentSpec[] = [
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
    new __utils.ComponentSpec(
        "name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "description",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "obsolete",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DITContentRuleDescription: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DITContentRuleDescription: __utils.ComponentSpec[] = [];
export const _default_value_for_DITContentRuleDescription__obsolete = false;
export const _decode_DITContentRuleDescription = function (
    el: asn1.ASN1Element
): DITContentRuleDescription {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let structuralObjectClass!: asn1.OBJECT_IDENTIFIER;
    let auxiliaries: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    let mandatory: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    let optional: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    let precluded: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    let name: asn1.OPTIONAL<UnboundedDirectoryString[]>;
    let description: asn1.OPTIONAL<UnboundedDirectoryString>;
    let obsolete: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_DITContentRuleDescription__obsolete;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        structuralObjectClass: (_el: asn1.ASN1Element): void => {
            structuralObjectClass = __utils._decodeObjectIdentifier(_el);
        },
        auxiliaries: (_el: asn1.ASN1Element): void => {
            auxiliaries = __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
        },
        mandatory: (_el: asn1.ASN1Element): void => {
            mandatory = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER[]>(() =>
                __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(
                    () => __utils._decodeObjectIdentifier
                )
            )(_el);
        },
        optional: (_el: asn1.ASN1Element): void => {
            optional = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER[]>(() =>
                __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(
                    () => __utils._decodeObjectIdentifier
                )
            )(_el);
        },
        precluded: (_el: asn1.ASN1Element): void => {
            precluded = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER[]>(() =>
                __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(
                    () => __utils._decodeObjectIdentifier
                )
            )(_el);
        },
        name: (_el: asn1.ASN1Element): void => {
            name = __utils._decode_explicit<UnboundedDirectoryString[]>(() =>
                __utils._decodeSetOf<UnboundedDirectoryString>(
                    () => _decode_UnboundedDirectoryString
                )
            )(_el);
        },
        description: (_el: asn1.ASN1Element): void => {
            description = _decode_UnboundedDirectoryString(_el);
        },
        obsolete: (_el: asn1.ASN1Element): void => {
            obsolete = __utils._decodeBoolean(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_DITContentRuleDescription,
        _extension_additions_list_spec_for_DITContentRuleDescription,
        _root_component_type_list_2_spec_for_DITContentRuleDescription,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new DITContentRuleDescription(
        /* SEQUENCE_CONSTRUCTOR_CALL */ structuralObjectClass,
        auxiliaries,
        mandatory,
        optional,
        precluded,
        name,
        description,
        obsolete,
        _unrecognizedExtensionsList
    );
};
export const _encode_DITContentRuleDescription = function (
    value: DITContentRuleDescription,
    elGetter: __utils.ASN1Encoder<DITContentRuleDescription>
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
                                  __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(
                                      () => __utils._encodeObjectIdentifier,
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
                                  __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(
                                      () => __utils._encodeObjectIdentifier,
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
                                  __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(
                                      () => __utils._encodeObjectIdentifier,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.precluded, __utils.BER),
                    /* IF_ABSENT  */ value.name === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              4,
                              () =>
                                  __utils._encodeSetOf<
                                      UnboundedDirectoryString
                                  >(
                                      () => _encode_UnboundedDirectoryString,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.name, __utils.BER),
                    /* IF_ABSENT  */ value.description === undefined
                        ? undefined
                        : _encode_UnboundedDirectoryString(
                              value.description,
                              __utils.BER
                          ),
                    /* IF_DEFAULT */ value.obsolete === undefined ||
                    __utils.deepEq(
                        value.obsolete,
                        _default_value_for_DITContentRuleDescription__obsolete
                    )
                        ? undefined
                        : __utils._encodeBoolean(value.obsolete, __utils.BER),
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

// TODO: ObjectAssignment: matchingRules

export class MatchingRuleDescription {
    constructor(
        readonly identifier: asn1.OBJECT_IDENTIFIER,
        readonly name: UnboundedDirectoryString[] | undefined,
        readonly description: UnboundedDirectoryString | undefined,
        readonly obsolete: asn1.BOOLEAN | undefined,
        readonly information: UnboundedDirectoryString | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_MatchingRuleDescription: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "description",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "obsolete",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "information",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_MatchingRuleDescription: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_MatchingRuleDescription: __utils.ComponentSpec[] = [];
export const _default_value_for_MatchingRuleDescription__obsolete = false;
export const _decode_MatchingRuleDescription = function (
    el: asn1.ASN1Element
): MatchingRuleDescription {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let identifier!: asn1.OBJECT_IDENTIFIER;
    let name: asn1.OPTIONAL<UnboundedDirectoryString[]>;
    let description: asn1.OPTIONAL<UnboundedDirectoryString>;
    let obsolete: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_MatchingRuleDescription__obsolete;
    let information: asn1.OPTIONAL<UnboundedDirectoryString>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        identifier: (_el: asn1.ASN1Element): void => {
            identifier = __utils._decodeObjectIdentifier(_el);
        },
        name: (_el: asn1.ASN1Element): void => {
            name = __utils._decodeSetOf<UnboundedDirectoryString>(
                () => _decode_UnboundedDirectoryString
            )(_el);
        },
        description: (_el: asn1.ASN1Element): void => {
            description = _decode_UnboundedDirectoryString(_el);
        },
        obsolete: (_el: asn1.ASN1Element): void => {
            obsolete = __utils._decodeBoolean(_el);
        },
        information: (_el: asn1.ASN1Element): void => {
            information = __utils._decode_explicit<UnboundedDirectoryString>(
                () => _decode_UnboundedDirectoryString
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_MatchingRuleDescription,
        _extension_additions_list_spec_for_MatchingRuleDescription,
        _root_component_type_list_2_spec_for_MatchingRuleDescription,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new MatchingRuleDescription(
        /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
        name,
        description,
        obsolete,
        information,
        _unrecognizedExtensionsList
    );
};
export const _encode_MatchingRuleDescription = function (
    value: MatchingRuleDescription,
    elGetter: __utils.ASN1Encoder<MatchingRuleDescription>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ __utils._encodeObjectIdentifier(
                        value.identifier,
                        __utils.BER
                    ),
                    /* IF_ABSENT  */ value.name === undefined
                        ? undefined
                        : __utils._encodeSetOf<UnboundedDirectoryString>(
                              () => _encode_UnboundedDirectoryString,
                              __utils.BER
                          )(value.name, __utils.BER),
                    /* IF_ABSENT  */ value.description === undefined
                        ? undefined
                        : _encode_UnboundedDirectoryString(
                              value.description,
                              __utils.BER
                          ),
                    /* IF_DEFAULT */ value.obsolete === undefined ||
                    __utils.deepEq(
                        value.obsolete,
                        _default_value_for_MatchingRuleDescription__obsolete
                    )
                        ? undefined
                        : __utils._encodeBoolean(value.obsolete, __utils.BER),
                    /* IF_ABSENT  */ value.information === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              0,
                              () => _encode_UnboundedDirectoryString,
                              __utils.BER
                          )(value.information, __utils.BER),
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

// TODO: ObjectAssignment: attributeTypes

export class AttributeTypeInformation {
    constructor(
        readonly derivation: asn1.OBJECT_IDENTIFIER | undefined,
        readonly equalityMatch: asn1.OBJECT_IDENTIFIER | undefined,
        readonly orderingMatch: asn1.OBJECT_IDENTIFIER | undefined,
        readonly substringsMatch: asn1.OBJECT_IDENTIFIER | undefined,
        readonly attributeSyntax: UnboundedDirectoryString | undefined,
        readonly multi_valued: asn1.BOOLEAN | undefined,
        readonly collective: asn1.BOOLEAN | undefined,
        readonly userModifiable: asn1.BOOLEAN | undefined,
        readonly application: AttributeUsage | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeTypeInformation: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "derivation",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "equalityMatch",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "orderingMatch",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "substringsMatch",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "attributeSyntax",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "multi-valued",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 5),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "collective",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "userModifiable",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 7),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "application",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AttributeTypeInformation: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AttributeTypeInformation: __utils.ComponentSpec[] = [];
export const _default_value_for_AttributeTypeInformation__multi_valued = true;
export const _default_value_for_AttributeTypeInformation__collective = false;
export const _default_value_for_AttributeTypeInformation__userModifiable = true;
export const _default_value_for_AttributeTypeInformation__application =
    InformationFramework.AttributeUsage_userApplications;
export const _decode_AttributeTypeInformation = function (
    el: asn1.ASN1Element
): AttributeTypeInformation {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let derivation: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let equalityMatch: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let orderingMatch: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let substringsMatch: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER>;
    let attributeSyntax: asn1.OPTIONAL<UnboundedDirectoryString>;
    let multi_valued: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_AttributeTypeInformation__multi_valued;
    let collective: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_AttributeTypeInformation__collective;
    let userModifiable: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_AttributeTypeInformation__userModifiable;
    let application: asn1.OPTIONAL<AttributeUsage> = _default_value_for_AttributeTypeInformation__application;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        derivation: (_el: asn1.ASN1Element): void => {
            derivation = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
        },
        equalityMatch: (_el: asn1.ASN1Element): void => {
            equalityMatch = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
        },
        orderingMatch: (_el: asn1.ASN1Element): void => {
            orderingMatch = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
        },
        substringsMatch: (_el: asn1.ASN1Element): void => {
            substringsMatch = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
        },
        attributeSyntax: (_el: asn1.ASN1Element): void => {
            attributeSyntax = __utils._decode_explicit<
                UnboundedDirectoryString
            >(() => _decode_UnboundedDirectoryString)(_el);
        },
        "multi-valued": (_el: asn1.ASN1Element): void => {
            multi_valued = __utils._decode_explicit<asn1.BOOLEAN>(
                () => __utils._decodeBoolean
            )(_el);
        },
        collective: (_el: asn1.ASN1Element): void => {
            collective = __utils._decode_explicit<asn1.BOOLEAN>(
                () => __utils._decodeBoolean
            )(_el);
        },
        userModifiable: (_el: asn1.ASN1Element): void => {
            userModifiable = __utils._decode_explicit<asn1.BOOLEAN>(
                () => __utils._decodeBoolean
            )(_el);
        },
        application: (_el: asn1.ASN1Element): void => {
            application = _decode_AttributeUsage(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_AttributeTypeInformation,
        _extension_additions_list_spec_for_AttributeTypeInformation,
        _root_component_type_list_2_spec_for_AttributeTypeInformation,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new AttributeTypeInformation(
        /* SEQUENCE_CONSTRUCTOR_CALL */ derivation,
        equalityMatch,
        orderingMatch,
        substringsMatch,
        attributeSyntax,
        multi_valued,
        collective,
        userModifiable,
        application,
        _unrecognizedExtensionsList
    );
};
export const _encode_AttributeTypeInformation = function (
    value: AttributeTypeInformation,
    elGetter: __utils.ASN1Encoder<AttributeTypeInformation>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* IF_ABSENT  */ value.derivation === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              0,
                              () => __utils._encodeObjectIdentifier,
                              __utils.BER
                          )(value.derivation, __utils.BER),
                    /* IF_ABSENT  */ value.equalityMatch === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () => __utils._encodeObjectIdentifier,
                              __utils.BER
                          )(value.equalityMatch, __utils.BER),
                    /* IF_ABSENT  */ value.orderingMatch === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              2,
                              () => __utils._encodeObjectIdentifier,
                              __utils.BER
                          )(value.orderingMatch, __utils.BER),
                    /* IF_ABSENT  */ value.substringsMatch === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              3,
                              () => __utils._encodeObjectIdentifier,
                              __utils.BER
                          )(value.substringsMatch, __utils.BER),
                    /* IF_ABSENT  */ value.attributeSyntax === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              4,
                              () => _encode_UnboundedDirectoryString,
                              __utils.BER
                          )(value.attributeSyntax, __utils.BER),
                    /* IF_DEFAULT */ value.multi_valued === undefined ||
                    __utils.deepEq(
                        value.multi_valued,
                        _default_value_for_AttributeTypeInformation__multi_valued
                    )
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              5,
                              () => __utils._encodeBoolean,
                              __utils.BER
                          )(value.multi_valued, __utils.BER),
                    /* IF_DEFAULT */ value.collective === undefined ||
                    __utils.deepEq(
                        value.collective,
                        _default_value_for_AttributeTypeInformation__collective
                    )
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              6,
                              () => __utils._encodeBoolean,
                              __utils.BER
                          )(value.collective, __utils.BER),
                    /* IF_DEFAULT */ value.userModifiable === undefined ||
                    __utils.deepEq(
                        value.userModifiable,
                        _default_value_for_AttributeTypeInformation__userModifiable
                    )
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              7,
                              () => __utils._encodeBoolean,
                              __utils.BER
                          )(value.userModifiable, __utils.BER),
                    /* IF_DEFAULT */ value.application === undefined ||
                    __utils.deepEq(
                        value.application,
                        _default_value_for_AttributeTypeInformation__application
                    )
                        ? undefined
                        : _encode_AttributeUsage(
                              value.application,
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

export class AttributeTypeDescription {
    constructor(
        readonly identifier: asn1.OBJECT_IDENTIFIER,
        readonly name: UnboundedDirectoryString[] | undefined,
        readonly description: UnboundedDirectoryString | undefined,
        readonly obsolete: asn1.BOOLEAN | undefined,
        readonly information: AttributeTypeInformation,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_AttributeTypeDescription: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "description",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "obsolete",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "information",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_AttributeTypeDescription: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_AttributeTypeDescription: __utils.ComponentSpec[] = [];
export const _default_value_for_AttributeTypeDescription__obsolete = false;
export const _decode_AttributeTypeDescription = function (
    el: asn1.ASN1Element
): AttributeTypeDescription {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let identifier!: asn1.OBJECT_IDENTIFIER;
    let name: asn1.OPTIONAL<UnboundedDirectoryString[]>;
    let description: asn1.OPTIONAL<UnboundedDirectoryString>;
    let obsolete: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_AttributeTypeDescription__obsolete;
    let information!: AttributeTypeInformation;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        identifier: (_el: asn1.ASN1Element): void => {
            identifier = __utils._decodeObjectIdentifier(_el);
        },
        name: (_el: asn1.ASN1Element): void => {
            name = __utils._decodeSetOf<UnboundedDirectoryString>(
                () => _decode_UnboundedDirectoryString
            )(_el);
        },
        description: (_el: asn1.ASN1Element): void => {
            description = _decode_UnboundedDirectoryString(_el);
        },
        obsolete: (_el: asn1.ASN1Element): void => {
            obsolete = __utils._decodeBoolean(_el);
        },
        information: (_el: asn1.ASN1Element): void => {
            information = __utils._decode_explicit<AttributeTypeInformation>(
                () => _decode_AttributeTypeInformation
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_AttributeTypeDescription,
        _extension_additions_list_spec_for_AttributeTypeDescription,
        _root_component_type_list_2_spec_for_AttributeTypeDescription,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new AttributeTypeDescription(
        /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
        name,
        description,
        obsolete,
        information,
        _unrecognizedExtensionsList
    );
};
export const _encode_AttributeTypeDescription = function (
    value: AttributeTypeDescription,
    elGetter: __utils.ASN1Encoder<AttributeTypeDescription>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ __utils._encodeObjectIdentifier(
                        value.identifier,
                        __utils.BER
                    ),
                    /* IF_ABSENT  */ value.name === undefined
                        ? undefined
                        : __utils._encodeSetOf<UnboundedDirectoryString>(
                              () => _encode_UnboundedDirectoryString,
                              __utils.BER
                          )(value.name, __utils.BER),
                    /* IF_ABSENT  */ value.description === undefined
                        ? undefined
                        : _encode_UnboundedDirectoryString(
                              value.description,
                              __utils.BER
                          ),
                    /* IF_DEFAULT */ value.obsolete === undefined ||
                    __utils.deepEq(
                        value.obsolete,
                        _default_value_for_AttributeTypeDescription__obsolete
                    )
                        ? undefined
                        : __utils._encodeBoolean(value.obsolete, __utils.BER),
                    /* REQUIRED   */ __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        0,
                        () => _encode_AttributeTypeInformation,
                        __utils.BER
                    )(value.information, __utils.BER),
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

// TODO: ObjectAssignment: objectClasses

export class ObjectClassInformation {
    constructor(
        readonly subclassOf: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly kind: ObjectClassKind | undefined,
        readonly mandatories: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly optionals: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ObjectClassInformation: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "subclassOf",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "kind",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 10),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "mandatories",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 3),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "optionals",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ObjectClassInformation: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ObjectClassInformation: __utils.ComponentSpec[] = [];
export const _default_value_for_ObjectClassInformation__kind =
    InformationFramework.structural;
export const _decode_ObjectClassInformation = function (
    el: asn1.ASN1Element
): ObjectClassInformation {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let subclassOf: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    let kind: asn1.OPTIONAL<ObjectClassKind> = _default_value_for_ObjectClassInformation__kind;
    let mandatories: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    let optionals: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        subclassOf: (_el: asn1.ASN1Element): void => {
            subclassOf = __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
        },
        kind: (_el: asn1.ASN1Element): void => {
            kind = _decode_ObjectClassKind(_el);
        },
        mandatories: (_el: asn1.ASN1Element): void => {
            mandatories = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER[]>(
                () =>
                    __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(
                        () => __utils._decodeObjectIdentifier
                    )
            )(_el);
        },
        optionals: (_el: asn1.ASN1Element): void => {
            optionals = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER[]>(() =>
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
        _root_component_type_list_1_spec_for_ObjectClassInformation,
        _extension_additions_list_spec_for_ObjectClassInformation,
        _root_component_type_list_2_spec_for_ObjectClassInformation,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new ObjectClassInformation(
        /* SEQUENCE_CONSTRUCTOR_CALL */ subclassOf,
        kind,
        mandatories,
        optionals,
        _unrecognizedExtensionsList
    );
};
export const _encode_ObjectClassInformation = function (
    value: ObjectClassInformation,
    elGetter: __utils.ASN1Encoder<ObjectClassInformation>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* IF_ABSENT  */ value.subclassOf === undefined
                        ? undefined
                        : __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(
                              () => __utils._encodeObjectIdentifier,
                              __utils.BER
                          )(value.subclassOf, __utils.BER),
                    /* IF_DEFAULT */ value.kind === undefined ||
                    __utils.deepEq(
                        value.kind,
                        _default_value_for_ObjectClassInformation__kind
                    )
                        ? undefined
                        : _encode_ObjectClassKind(value.kind, __utils.BER),
                    /* IF_ABSENT  */ value.mandatories === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              3,
                              () =>
                                  __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(
                                      () => __utils._encodeObjectIdentifier,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.mandatories, __utils.BER),
                    /* IF_ABSENT  */ value.optionals === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              4,
                              () =>
                                  __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(
                                      () => __utils._encodeObjectIdentifier,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.optionals, __utils.BER),
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

export class ObjectClassDescription {
    constructor(
        readonly identifier: asn1.OBJECT_IDENTIFIER,
        readonly name: UnboundedDirectoryString[] | undefined,
        readonly description: UnboundedDirectoryString | undefined,
        readonly obsolete: asn1.BOOLEAN | undefined,
        readonly information: ObjectClassInformation,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ObjectClassDescription: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "description",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "obsolete",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "information",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ObjectClassDescription: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ObjectClassDescription: __utils.ComponentSpec[] = [];
export const _default_value_for_ObjectClassDescription__obsolete = false;
export const _decode_ObjectClassDescription = function (
    el: asn1.ASN1Element
): ObjectClassDescription {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let identifier!: asn1.OBJECT_IDENTIFIER;
    let name: asn1.OPTIONAL<UnboundedDirectoryString[]>;
    let description: asn1.OPTIONAL<UnboundedDirectoryString>;
    let obsolete: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_ObjectClassDescription__obsolete;
    let information!: ObjectClassInformation;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        identifier: (_el: asn1.ASN1Element): void => {
            identifier = __utils._decodeObjectIdentifier(_el);
        },
        name: (_el: asn1.ASN1Element): void => {
            name = __utils._decodeSetOf<UnboundedDirectoryString>(
                () => _decode_UnboundedDirectoryString
            )(_el);
        },
        description: (_el: asn1.ASN1Element): void => {
            description = _decode_UnboundedDirectoryString(_el);
        },
        obsolete: (_el: asn1.ASN1Element): void => {
            obsolete = __utils._decodeBoolean(_el);
        },
        information: (_el: asn1.ASN1Element): void => {
            information = __utils._decode_explicit<ObjectClassInformation>(
                () => _decode_ObjectClassInformation
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ObjectClassDescription,
        _extension_additions_list_spec_for_ObjectClassDescription,
        _root_component_type_list_2_spec_for_ObjectClassDescription,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new ObjectClassDescription(
        /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
        name,
        description,
        obsolete,
        information,
        _unrecognizedExtensionsList
    );
};
export const _encode_ObjectClassDescription = function (
    value: ObjectClassDescription,
    elGetter: __utils.ASN1Encoder<ObjectClassDescription>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ __utils._encodeObjectIdentifier(
                        value.identifier,
                        __utils.BER
                    ),
                    /* IF_ABSENT  */ value.name === undefined
                        ? undefined
                        : __utils._encodeSetOf<UnboundedDirectoryString>(
                              () => _encode_UnboundedDirectoryString,
                              __utils.BER
                          )(value.name, __utils.BER),
                    /* IF_ABSENT  */ value.description === undefined
                        ? undefined
                        : _encode_UnboundedDirectoryString(
                              value.description,
                              __utils.BER
                          ),
                    /* IF_DEFAULT */ value.obsolete === undefined ||
                    __utils.deepEq(
                        value.obsolete,
                        _default_value_for_ObjectClassDescription__obsolete
                    )
                        ? undefined
                        : __utils._encodeBoolean(value.obsolete, __utils.BER),
                    /* REQUIRED   */ __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        0,
                        () => _encode_ObjectClassInformation,
                        __utils.BER
                    )(value.information, __utils.BER),
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

// TODO: ObjectAssignment: nameForms

export class NameFormInformation {
    constructor(
        readonly subordinate: asn1.OBJECT_IDENTIFIER,
        readonly namingMandatories: asn1.OBJECT_IDENTIFIER[],
        readonly namingOptionals: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_NameFormInformation: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "subordinate",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "namingMandatories",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "namingOptionals",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_NameFormInformation: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_NameFormInformation: __utils.ComponentSpec[] = [];

export const _decode_NameFormInformation = function (
    el: asn1.ASN1Element
): NameFormInformation {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let subordinate!: asn1.OBJECT_IDENTIFIER;
    let namingMandatories!: asn1.OBJECT_IDENTIFIER[];
    let namingOptionals: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        subordinate: (_el: asn1.ASN1Element): void => {
            subordinate = __utils._decodeObjectIdentifier(_el);
        },
        namingMandatories: (_el: asn1.ASN1Element): void => {
            namingMandatories = __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
        },
        namingOptionals: (_el: asn1.ASN1Element): void => {
            namingOptionals = __utils._decodeSetOf<asn1.OBJECT_IDENTIFIER>(
                () => __utils._decodeObjectIdentifier
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_NameFormInformation,
        _extension_additions_list_spec_for_NameFormInformation,
        _root_component_type_list_2_spec_for_NameFormInformation,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new NameFormInformation(
        /* SEQUENCE_CONSTRUCTOR_CALL */ subordinate,
        namingMandatories,
        namingOptionals,
        _unrecognizedExtensionsList
    );
};
export const _encode_NameFormInformation = function (
    value: NameFormInformation,
    elGetter: __utils.ASN1Encoder<NameFormInformation>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ __utils._encodeObjectIdentifier(
                        value.subordinate,
                        __utils.BER
                    ),
                    /* REQUIRED   */ __utils._encodeSetOf<
                        asn1.OBJECT_IDENTIFIER
                    >(() => __utils._encodeObjectIdentifier, __utils.BER)(
                        value.namingMandatories,
                        __utils.BER
                    ),
                    /* IF_ABSENT  */ value.namingOptionals === undefined
                        ? undefined
                        : __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(
                              () => __utils._encodeObjectIdentifier,
                              __utils.BER
                          )(value.namingOptionals, __utils.BER),
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

export class NameFormDescription {
    constructor(
        readonly identifier: asn1.OBJECT_IDENTIFIER,
        readonly name: UnboundedDirectoryString[] | undefined,
        readonly description: UnboundedDirectoryString | undefined,
        readonly obsolete: asn1.BOOLEAN | undefined,
        readonly information: NameFormInformation,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_NameFormDescription: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "description",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "obsolete",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "information",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_NameFormDescription: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_NameFormDescription: __utils.ComponentSpec[] = [];
export const _default_value_for_NameFormDescription__obsolete = false;
export const _decode_NameFormDescription = function (
    el: asn1.ASN1Element
): NameFormDescription {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let identifier!: asn1.OBJECT_IDENTIFIER;
    let name: asn1.OPTIONAL<UnboundedDirectoryString[]>;
    let description: asn1.OPTIONAL<UnboundedDirectoryString>;
    let obsolete: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_NameFormDescription__obsolete;
    let information!: NameFormInformation;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        identifier: (_el: asn1.ASN1Element): void => {
            identifier = __utils._decodeObjectIdentifier(_el);
        },
        name: (_el: asn1.ASN1Element): void => {
            name = __utils._decodeSetOf<UnboundedDirectoryString>(
                () => _decode_UnboundedDirectoryString
            )(_el);
        },
        description: (_el: asn1.ASN1Element): void => {
            description = _decode_UnboundedDirectoryString(_el);
        },
        obsolete: (_el: asn1.ASN1Element): void => {
            obsolete = __utils._decodeBoolean(_el);
        },
        information: (_el: asn1.ASN1Element): void => {
            information = __utils._decode_explicit<NameFormInformation>(
                () => _decode_NameFormInformation
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_NameFormDescription,
        _extension_additions_list_spec_for_NameFormDescription,
        _root_component_type_list_2_spec_for_NameFormDescription,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new NameFormDescription(
        /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
        name,
        description,
        obsolete,
        information,
        _unrecognizedExtensionsList
    );
};
export const _encode_NameFormDescription = function (
    value: NameFormDescription,
    elGetter: __utils.ASN1Encoder<NameFormDescription>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ __utils._encodeObjectIdentifier(
                        value.identifier,
                        __utils.BER
                    ),
                    /* IF_ABSENT  */ value.name === undefined
                        ? undefined
                        : __utils._encodeSetOf<UnboundedDirectoryString>(
                              () => _encode_UnboundedDirectoryString,
                              __utils.BER
                          )(value.name, __utils.BER),
                    /* IF_ABSENT  */ value.description === undefined
                        ? undefined
                        : _encode_UnboundedDirectoryString(
                              value.description,
                              __utils.BER
                          ),
                    /* IF_DEFAULT */ value.obsolete === undefined ||
                    __utils.deepEq(
                        value.obsolete,
                        _default_value_for_NameFormDescription__obsolete
                    )
                        ? undefined
                        : __utils._encodeBoolean(value.obsolete, __utils.BER),
                    /* REQUIRED   */ __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        0,
                        () => _encode_NameFormInformation,
                        __utils.BER
                    )(value.information, __utils.BER),
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

// TODO: ObjectAssignment: matchingRuleUse

export class MatchingRuleUseDescription {
    constructor(
        readonly identifier: asn1.OBJECT_IDENTIFIER,
        readonly name: UnboundedDirectoryString[] | undefined,
        readonly description: UnboundedDirectoryString | undefined,
        readonly obsolete: asn1.BOOLEAN | undefined,
        readonly information: asn1.OBJECT_IDENTIFIER[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_MatchingRuleUseDescription: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "description",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "obsolete",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "information",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_MatchingRuleUseDescription: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_MatchingRuleUseDescription: __utils.ComponentSpec[] = [];
export const _default_value_for_MatchingRuleUseDescription__obsolete = false;
export const _decode_MatchingRuleUseDescription = function (
    el: asn1.ASN1Element
): MatchingRuleUseDescription {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let identifier!: asn1.OBJECT_IDENTIFIER;
    let name: asn1.OPTIONAL<UnboundedDirectoryString[]>;
    let description: asn1.OPTIONAL<UnboundedDirectoryString>;
    let obsolete: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_MatchingRuleUseDescription__obsolete;
    let information!: asn1.OBJECT_IDENTIFIER[];
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        identifier: (_el: asn1.ASN1Element): void => {
            identifier = __utils._decodeObjectIdentifier(_el);
        },
        name: (_el: asn1.ASN1Element): void => {
            name = __utils._decodeSetOf<UnboundedDirectoryString>(
                () => _decode_UnboundedDirectoryString
            )(_el);
        },
        description: (_el: asn1.ASN1Element): void => {
            description = _decode_UnboundedDirectoryString(_el);
        },
        obsolete: (_el: asn1.ASN1Element): void => {
            obsolete = __utils._decodeBoolean(_el);
        },
        information: (_el: asn1.ASN1Element): void => {
            information = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER[]>(
                () =>
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
        _root_component_type_list_1_spec_for_MatchingRuleUseDescription,
        _extension_additions_list_spec_for_MatchingRuleUseDescription,
        _root_component_type_list_2_spec_for_MatchingRuleUseDescription,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new MatchingRuleUseDescription(
        /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
        name,
        description,
        obsolete,
        information,
        _unrecognizedExtensionsList
    );
};
export const _encode_MatchingRuleUseDescription = function (
    value: MatchingRuleUseDescription,
    elGetter: __utils.ASN1Encoder<MatchingRuleUseDescription>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ __utils._encodeObjectIdentifier(
                        value.identifier,
                        __utils.BER
                    ),
                    /* IF_ABSENT  */ value.name === undefined
                        ? undefined
                        : __utils._encodeSetOf<UnboundedDirectoryString>(
                              () => _encode_UnboundedDirectoryString,
                              __utils.BER
                          )(value.name, __utils.BER),
                    /* IF_ABSENT  */ value.description === undefined
                        ? undefined
                        : _encode_UnboundedDirectoryString(
                              value.description,
                              __utils.BER
                          ),
                    /* IF_DEFAULT */ value.obsolete === undefined ||
                    __utils.deepEq(
                        value.obsolete,
                        _default_value_for_MatchingRuleUseDescription__obsolete
                    )
                        ? undefined
                        : __utils._encodeBoolean(value.obsolete, __utils.BER),
                    /* REQUIRED   */ __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        0,
                        () =>
                            __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(
                                () => __utils._encodeObjectIdentifier,
                                __utils.BER
                            ),
                        __utils.BER
                    )(value.information, __utils.BER),
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

// TODO: ObjectAssignment: structuralObjectClass

// TODO: ObjectAssignment: governingStructureRule

// TODO: ObjectAssignment: contextTypes

export class ContextInformation {
    constructor(
        readonly syntax: UnboundedDirectoryString,
        readonly assertionSyntax: UnboundedDirectoryString | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ContextInformation: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "syntax",
        false,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "assertionSyntax",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ContextInformation: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ContextInformation: __utils.ComponentSpec[] = [];

export const _decode_ContextInformation = function (
    el: asn1.ASN1Element
): ContextInformation {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let syntax!: UnboundedDirectoryString;
    let assertionSyntax: asn1.OPTIONAL<UnboundedDirectoryString>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        syntax: (_el: asn1.ASN1Element): void => {
            syntax = _decode_UnboundedDirectoryString(_el);
        },
        assertionSyntax: (_el: asn1.ASN1Element): void => {
            assertionSyntax = _decode_UnboundedDirectoryString(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ContextInformation,
        _extension_additions_list_spec_for_ContextInformation,
        _root_component_type_list_2_spec_for_ContextInformation,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new ContextInformation(
        /* SEQUENCE_CONSTRUCTOR_CALL */ syntax,
        assertionSyntax,
        _unrecognizedExtensionsList
    );
};
export const _encode_ContextInformation = function (
    value: ContextInformation,
    elGetter: __utils.ASN1Encoder<ContextInformation>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ _encode_UnboundedDirectoryString(
                        value.syntax,
                        __utils.BER
                    ),
                    /* IF_ABSENT  */ value.assertionSyntax === undefined
                        ? undefined
                        : _encode_UnboundedDirectoryString(
                              value.assertionSyntax,
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

export class ContextDescription {
    constructor(
        readonly identifier: asn1.OBJECT_IDENTIFIER,
        readonly name: UnboundedDirectoryString[] | undefined,
        readonly description: UnboundedDirectoryString | undefined,
        readonly obsolete: asn1.BOOLEAN | undefined,
        readonly information: ContextInformation,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_ContextDescription: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "description",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "obsolete",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "information",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_ContextDescription: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_ContextDescription: __utils.ComponentSpec[] = [];
export const _default_value_for_ContextDescription__obsolete = false;
export const _decode_ContextDescription = function (
    el: asn1.ASN1Element
): ContextDescription {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let identifier!: asn1.OBJECT_IDENTIFIER;
    let name: asn1.OPTIONAL<UnboundedDirectoryString[]>;
    let description: asn1.OPTIONAL<UnboundedDirectoryString>;
    let obsolete: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_ContextDescription__obsolete;
    let information!: ContextInformation;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        identifier: (_el: asn1.ASN1Element): void => {
            identifier = __utils._decodeObjectIdentifier(_el);
        },
        name: (_el: asn1.ASN1Element): void => {
            name = __utils._decodeSetOf<UnboundedDirectoryString>(
                () => _decode_UnboundedDirectoryString
            )(_el);
        },
        description: (_el: asn1.ASN1Element): void => {
            description = _decode_UnboundedDirectoryString(_el);
        },
        obsolete: (_el: asn1.ASN1Element): void => {
            obsolete = __utils._decodeBoolean(_el);
        },
        information: (_el: asn1.ASN1Element): void => {
            information = __utils._decode_explicit<ContextInformation>(
                () => _decode_ContextInformation
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ContextDescription,
        _extension_additions_list_spec_for_ContextDescription,
        _root_component_type_list_2_spec_for_ContextDescription,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new ContextDescription(
        /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
        name,
        description,
        obsolete,
        information,
        _unrecognizedExtensionsList
    );
};
export const _encode_ContextDescription = function (
    value: ContextDescription,
    elGetter: __utils.ASN1Encoder<ContextDescription>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ __utils._encodeObjectIdentifier(
                        value.identifier,
                        __utils.BER
                    ),
                    /* IF_ABSENT  */ value.name === undefined
                        ? undefined
                        : __utils._encodeSetOf<UnboundedDirectoryString>(
                              () => _encode_UnboundedDirectoryString,
                              __utils.BER
                          )(value.name, __utils.BER),
                    /* IF_ABSENT  */ value.description === undefined
                        ? undefined
                        : _encode_UnboundedDirectoryString(
                              value.description,
                              __utils.BER
                          ),
                    /* IF_DEFAULT */ value.obsolete === undefined ||
                    __utils.deepEq(
                        value.obsolete,
                        _default_value_for_ContextDescription__obsolete
                    )
                        ? undefined
                        : __utils._encodeBoolean(value.obsolete, __utils.BER),
                    /* REQUIRED   */ __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        0,
                        () => _encode_ContextInformation,
                        __utils.BER
                    )(value.information, __utils.BER),
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

// TODO: ObjectAssignment: dITContextUse

export class DITContextUseInformation {
    constructor(
        readonly mandatoryContexts: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly optionalContexts: asn1.OBJECT_IDENTIFIER[] | undefined,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DITContextUseInformation: __utils.ComponentSpec[] = [
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
export const _root_component_type_list_2_spec_for_DITContextUseInformation: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DITContextUseInformation: __utils.ComponentSpec[] = [];

export const _decode_DITContextUseInformation = function (
    el: asn1.ASN1Element
): DITContextUseInformation {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let mandatoryContexts: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    let optionalContexts: asn1.OPTIONAL<asn1.OBJECT_IDENTIFIER[]>;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
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
        _root_component_type_list_1_spec_for_DITContextUseInformation,
        _extension_additions_list_spec_for_DITContextUseInformation,
        _root_component_type_list_2_spec_for_DITContextUseInformation,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new DITContextUseInformation(
        /* SEQUENCE_CONSTRUCTOR_CALL */ mandatoryContexts,
        optionalContexts,
        _unrecognizedExtensionsList
    );
};
export const _encode_DITContextUseInformation = function (
    value: DITContextUseInformation,
    elGetter: __utils.ASN1Encoder<DITContextUseInformation>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* IF_ABSENT  */ value.mandatoryContexts === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              1,
                              () =>
                                  __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(
                                      () => __utils._encodeObjectIdentifier,
                                      __utils.BER
                                  ),
                              __utils.BER
                          )(value.mandatoryContexts, __utils.BER),
                    /* IF_ABSENT  */ value.optionalContexts === undefined
                        ? undefined
                        : __utils._encode_explicit(
                              asn1.ASN1TagClass.context,
                              2,
                              () =>
                                  __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(
                                      () => __utils._encodeObjectIdentifier,
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

export class DITContextUseDescription {
    constructor(
        readonly identifier: asn1.OBJECT_IDENTIFIER,
        readonly name: UnboundedDirectoryString[] | undefined,
        readonly description: UnboundedDirectoryString | undefined,
        readonly obsolete: asn1.BOOLEAN | undefined,
        readonly information: DITContextUseInformation,
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_DITContextUseDescription: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "identifier",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "description",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "obsolete",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "information",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_DITContextUseDescription: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_DITContextUseDescription: __utils.ComponentSpec[] = [];
export const _default_value_for_DITContextUseDescription__obsolete = false;
export const _decode_DITContextUseDescription = function (
    el: asn1.ASN1Element
): DITContextUseDescription {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let identifier!: asn1.OBJECT_IDENTIFIER;
    let name: asn1.OPTIONAL<UnboundedDirectoryString[]>;
    let description: asn1.OPTIONAL<UnboundedDirectoryString>;
    let obsolete: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_DITContextUseDescription__obsolete;
    let information!: DITContextUseInformation;
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        identifier: (_el: asn1.ASN1Element): void => {
            identifier = __utils._decodeObjectIdentifier(_el);
        },
        name: (_el: asn1.ASN1Element): void => {
            name = __utils._decodeSetOf<UnboundedDirectoryString>(
                () => _decode_UnboundedDirectoryString
            )(_el);
        },
        description: (_el: asn1.ASN1Element): void => {
            description = _decode_UnboundedDirectoryString(_el);
        },
        obsolete: (_el: asn1.ASN1Element): void => {
            obsolete = __utils._decodeBoolean(_el);
        },
        information: (_el: asn1.ASN1Element): void => {
            information = __utils._decode_explicit<DITContextUseInformation>(
                () => _decode_DITContextUseInformation
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    __utils._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_DITContextUseDescription,
        _extension_additions_list_spec_for_DITContextUseDescription,
        _root_component_type_list_2_spec_for_DITContextUseDescription,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new DITContextUseDescription(
        /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
        name,
        description,
        obsolete,
        information,
        _unrecognizedExtensionsList
    );
};
export const _encode_DITContextUseDescription = function (
    value: DITContextUseDescription,
    elGetter: __utils.ASN1Encoder<DITContextUseDescription>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ __utils._encodeObjectIdentifier(
                        value.identifier,
                        __utils.BER
                    ),
                    /* IF_ABSENT  */ value.name === undefined
                        ? undefined
                        : __utils._encodeSetOf<UnboundedDirectoryString>(
                              () => _encode_UnboundedDirectoryString,
                              __utils.BER
                          )(value.name, __utils.BER),
                    /* IF_ABSENT  */ value.description === undefined
                        ? undefined
                        : _encode_UnboundedDirectoryString(
                              value.description,
                              __utils.BER
                          ),
                    /* IF_DEFAULT */ value.obsolete === undefined ||
                    __utils.deepEq(
                        value.obsolete,
                        _default_value_for_DITContextUseDescription__obsolete
                    )
                        ? undefined
                        : __utils._encodeBoolean(value.obsolete, __utils.BER),
                    /* REQUIRED   */ __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        0,
                        () => _encode_DITContextUseInformation,
                        __utils.BER
                    )(value.information, __utils.BER),
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

// TODO: ObjectAssignment: friends

export class FriendsDescription {
    constructor(
        readonly anchor: asn1.OBJECT_IDENTIFIER,
        readonly name: UnboundedDirectoryString[] | undefined,
        readonly description: UnboundedDirectoryString | undefined,
        readonly obsolete: asn1.BOOLEAN | undefined,
        readonly friends: asn1.OBJECT_IDENTIFIER[],
        readonly _unrecognizedExtensionsList: asn1.ASN1Element[] = []
    ) {}
}
export const _root_component_type_list_1_spec_for_FriendsDescription: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "anchor",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "name",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 17),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "description",
        true,
        __utils.hasAnyTag,
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "obsolete",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "friends",
        false,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_FriendsDescription: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_FriendsDescription: __utils.ComponentSpec[] = [];
export const _default_value_for_FriendsDescription__obsolete = false;
export const _decode_FriendsDescription = function (
    el: asn1.ASN1Element
): FriendsDescription {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let anchor!: asn1.OBJECT_IDENTIFIER;
    let name: asn1.OPTIONAL<UnboundedDirectoryString[]>;
    let description: asn1.OPTIONAL<UnboundedDirectoryString>;
    let obsolete: asn1.OPTIONAL<asn1.BOOLEAN> = _default_value_for_FriendsDescription__obsolete;
    let friends!: asn1.OBJECT_IDENTIFIER[];
    let _unrecognizedExtensionsList: asn1.ASN1Element[] = [];
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: __utils.DecodingMap = {
        anchor: (_el: asn1.ASN1Element): void => {
            anchor = __utils._decodeObjectIdentifier(_el);
        },
        name: (_el: asn1.ASN1Element): void => {
            name = __utils._decodeSetOf<UnboundedDirectoryString>(
                () => _decode_UnboundedDirectoryString
            )(_el);
        },
        description: (_el: asn1.ASN1Element): void => {
            description = _decode_UnboundedDirectoryString(_el);
        },
        obsolete: (_el: asn1.ASN1Element): void => {
            obsolete = __utils._decodeBoolean(_el);
        },
        friends: (_el: asn1.ASN1Element): void => {
            friends = __utils._decode_explicit<asn1.OBJECT_IDENTIFIER[]>(() =>
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
        _root_component_type_list_1_spec_for_FriendsDescription,
        _extension_additions_list_spec_for_FriendsDescription,
        _root_component_type_list_2_spec_for_FriendsDescription,
        (ext: asn1.ASN1Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new FriendsDescription(
        /* SEQUENCE_CONSTRUCTOR_CALL */ anchor,
        name,
        description,
        obsolete,
        friends,
        _unrecognizedExtensionsList
    );
};
export const _encode_FriendsDescription = function (
    value: FriendsDescription,
    elGetter: __utils.ASN1Encoder<FriendsDescription>
): asn1.ASN1Element {
    return __utils._encodeSequence(
        ([] as (asn1.ASN1Element | undefined)[])
            .concat(
                [
                    /* REQUIRED   */ __utils._encodeObjectIdentifier(
                        value.anchor,
                        __utils.BER
                    ),
                    /* IF_ABSENT  */ value.name === undefined
                        ? undefined
                        : __utils._encodeSetOf<UnboundedDirectoryString>(
                              () => _encode_UnboundedDirectoryString,
                              __utils.BER
                          )(value.name, __utils.BER),
                    /* IF_ABSENT  */ value.description === undefined
                        ? undefined
                        : _encode_UnboundedDirectoryString(
                              value.description,
                              __utils.BER
                          ),
                    /* IF_DEFAULT */ value.obsolete === undefined ||
                    __utils.deepEq(
                        value.obsolete,
                        _default_value_for_FriendsDescription__obsolete
                    )
                        ? undefined
                        : __utils._encodeBoolean(value.obsolete, __utils.BER),
                    /* REQUIRED   */ __utils._encode_explicit(
                        asn1.ASN1TagClass.context,
                        0,
                        () =>
                            __utils._encodeSetOf<asn1.OBJECT_IDENTIFIER>(
                                () => __utils._encodeObjectIdentifier,
                                __utils.BER
                            ),
                        __utils.BER
                    )(value.friends, __utils.BER),
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

export const id_soc_subschema: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_soc
);

export const id_soa_dITStructureRule: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [1],
    id_soa
);

export const id_soa_dITContentRules: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [2],
    id_soa
);

export const id_soa_matchingRules: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [4],
    id_soa
);

export const id_soa_attributeTypes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [5],
    id_soa
);

export const id_soa_objectClasses: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [6],
    id_soa
);

export const id_soa_nameForms: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [7],
    id_soa
);

export const id_soa_matchingRuleUse: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [8],
    id_soa
);

export const id_soa_structuralObjectClass: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [9],
    id_soa
);

export const id_soa_governingStructureRule: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [10],
    id_soa
);

export const id_soa_contextTypes: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [11],
    id_soa
);

export const id_soa_dITContextUse: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [12],
    id_soa
);

export const id_soa_friends: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier(
    [13],
    id_soa
);

/* END_MODULE SchemaAdministration */
