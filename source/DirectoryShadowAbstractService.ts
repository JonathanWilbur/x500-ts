/**
 * @module DirectoryShadowAbstractService
 * @summary The ASN.1 module `DirectoryShadowAbstractService`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.directoryShadowAbstractService.9
 * IRI: undefined
 * EXTENSIBLE: false
 * ENCODINGREF: undefined
 * FILE: undefined
 *
 * This file was compiled by Wildboar Software's ASN.1 Compiler.
 *
 * @see {@link https://wildboarsoftware.com|Wildboar Software's Website}
 * /


/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    ENUMERATED,
    EXTERNAL,
    GeneralizedTime,
    INTEGER,
    NULL,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ERROR,
    id_errcode_shadowError,
    id_opcode_coordinateShadowUpdate,
    id_opcode_requestShadowUpdate,
    id_opcode_updateShadow,
    OPERATION,
} from "./CommonProtocolSpecification";
import {
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
import { id_op_binding_shadow } from "./DirectoryOperationalBindingTypes";
import {
    AccessPoint,
    dSABind,
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
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
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
    OPERATIONAL_BINDING,
    OP_BIND_ROLE,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "./OperationalBindingManagement";
export {
    ERROR,
    id_errcode_shadowError,
    id_opcode_coordinateShadowUpdate,
    id_opcode_requestShadowUpdate,
    id_opcode_updateShadow,
    OPERATION,
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
    shadowConsumerInitiatedAC,
    shadowSupplierInitiatedAC,
} from "./DirectoryOSIProtocols";
export {
    AccessPoint,
    dSABind,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "./DistributedOperations";
export {
    DSEType,
    DSEType_admPoint /* IMPORTED_BIT */,
    DSEType_alias /* IMPORTED_BIT */,
    DSEType_cp /* IMPORTED_BIT */,
    DSEType_ditBridge /* IMPORTED_BIT */,
    DSEType_dsSubentry /* IMPORTED_BIT */,
    DSEType_entry /* IMPORTED_BIT */,
    DSEType_familyMember /* IMPORTED_BIT */,
    DSEType_glue /* IMPORTED_BIT */,
    DSEType_immSupr /* IMPORTED_BIT */,
    DSEType_nssr /* IMPORTED_BIT */,
    DSEType_rhob /* IMPORTED_BIT */,
    DSEType_root /* IMPORTED_BIT */,
    DSEType_sa /* IMPORTED_BIT */,
    DSEType_shadow /* IMPORTED_BIT */,
    DSEType_subentry /* IMPORTED_BIT */,
    DSEType_subr /* IMPORTED_BIT */,
    DSEType_supr /* IMPORTED_BIT */,
    DSEType_xr /* IMPORTED_BIT */,
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
    CONTEXT,
    DistinguishedName,
    RelativeDistinguishedName,
    SubtreeSpecification,
    SupportedAttributes,
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
    OPERATIONAL_BINDING,
    OP_BIND_ROLE,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "./OperationalBindingManagement";

/**
 * @summary dSAShadowBind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dSAShadowBind OPERATION ::= dSABind
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const dSAShadowBind: OPERATION = dSABind;

/**
 * @summary AreaSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AreaSpecification ::= SEQUENCE {
 *   contextPrefix    DistinguishedName,
 *   replicationArea  SubtreeSpecification,
 *   ... }
 * ```
 *
 * @class
 */
export class AreaSpecification {
    constructor(
        /**
         * @summary `contextPrefix`.
         * @public
         * @readonly
         */
        readonly contextPrefix: DistinguishedName,
        /**
         * @summary `replicationArea`.
         * @public
         * @readonly
         */
        readonly replicationArea: SubtreeSpecification,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AreaSpecification
     * @description
     *
     * This takes an `object` and converts it to a `AreaSpecification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AreaSpecification`.
     * @returns {AreaSpecification}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AreaSpecification]: AreaSpecification[_K] }>
    ): AreaSpecification {
        return new AreaSpecification(
            _o.contextPrefix,
            _o.replicationArea,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of AreaSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AreaSpecification: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "contextPrefix",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "replicationArea",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of AreaSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AreaSpecification: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of AreaSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AreaSpecification: $.ComponentSpec[] = [];
let _cached_decoder_for_AreaSpecification: $.ASN1Decoder<
    AreaSpecification
> | null = null;
let _cached_encoder_for_AreaSpecification: $.ASN1Encoder<
    AreaSpecification
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AreaSpecification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AreaSpecification} The decoded data structure.
 */
export function _decode_AreaSpecification(el: _Element) {
    if (!_cached_decoder_for_AreaSpecification) {
        _cached_decoder_for_AreaSpecification = function (
            el: _Element
        ): AreaSpecification {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AreaSpecification contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "contextPrefix";
            sequence[1].name = "replicationArea";
            let contextPrefix!: DistinguishedName;
            let replicationArea!: SubtreeSpecification;
            contextPrefix = _decode_DistinguishedName(sequence[0]);
            replicationArea = _decode_SubtreeSpecification(sequence[1]);
            return new AreaSpecification(
                contextPrefix,
                replicationArea,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_AreaSpecification(el);
}
/**
 * @summary Encodes a(n) AreaSpecification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AreaSpecification, encoded as an ASN.1 Element.
 */
export function _encode_AreaSpecification(
    value: AreaSpecification,
    elGetter: $.ASN1Encoder<AreaSpecification>
) {
    if (!_cached_encoder_for_AreaSpecification) {
        _cached_encoder_for_AreaSpecification = function (
            value: AreaSpecification,
            elGetter: $.ASN1Encoder<AreaSpecification>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_DistinguishedName(
                                value.contextPrefix,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_SubtreeSpecification(
                                value.replicationArea,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AreaSpecification(value, elGetter);
}

export type AttributeTypes<> = AttributeType[]; // SetOfType
let _cached_decoder_for_AttributeTypes: $.ASN1Decoder<
    AttributeTypes
> | null = null;
let _cached_encoder_for_AttributeTypes: $.ASN1Encoder<
    AttributeTypes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeTypes} The decoded data structure.
 */
export function _decode_AttributeTypes(el: _Element) {
    if (!_cached_decoder_for_AttributeTypes) {
        _cached_decoder_for_AttributeTypes = $._decodeSetOf<AttributeType>(
            () => _decode_AttributeType
        );
    }
    return _cached_decoder_for_AttributeTypes(el);
}
/**
 * @summary Encodes a(n) AttributeTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypes, encoded as an ASN.1 Element.
 */
export function _encode_AttributeTypes(
    value: AttributeTypes,
    elGetter: $.ASN1Encoder<AttributeTypes>
) {
    if (!_cached_encoder_for_AttributeTypes) {
        _cached_encoder_for_AttributeTypes = $._encodeSetOf<AttributeType>(
            () => _encode_AttributeType,
            $.BER
        );
    }
    return _cached_encoder_for_AttributeTypes(value, elGetter);
}

/**
 * @summary ClassAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClassAttributes  ::=  CHOICE {
 *   allAttributes  NULL,
 *   include        [0]  AttributeTypes,
 *   exclude        [1]  AttributeTypes,
 *   ... }
 * ```
 */
export type ClassAttributes =
    | { allAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { include: AttributeTypes } /* CHOICE_ALT_ROOT */
    | { exclude: AttributeTypes } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ClassAttributes: $.ASN1Decoder<
    ClassAttributes
> | null = null;
let _cached_encoder_for_ClassAttributes: $.ASN1Encoder<
    ClassAttributes
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ClassAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClassAttributes} The decoded data structure.
 */
export function _decode_ClassAttributes(el: _Element) {
    if (!_cached_decoder_for_ClassAttributes) {
        _cached_decoder_for_ClassAttributes = $._decode_extensible_choice<
            ClassAttributes
        >({
            "UNIVERSAL 5": ["allAttributes", $._decodeNull],
            "CONTEXT 0": [
                "include",
                $._decode_implicit<AttributeTypes>(
                    () => _decode_AttributeTypes
                ),
            ],
            "CONTEXT 1": [
                "exclude",
                $._decode_implicit<AttributeTypes>(
                    () => _decode_AttributeTypes
                ),
            ],
        });
    }
    return _cached_decoder_for_ClassAttributes(el);
}
/**
 * @summary Encodes a(n) ClassAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClassAttributes, encoded as an ASN.1 Element.
 */
export function _encode_ClassAttributes(
    value: ClassAttributes,
    elGetter: $.ASN1Encoder<ClassAttributes>
) {
    if (!_cached_encoder_for_ClassAttributes) {
        _cached_encoder_for_ClassAttributes = $._encode_choice<ClassAttributes>(
            {
                allAttributes: $._encodeNull,
                include: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AttributeTypes,
                    $.BER
                ),
                exclude: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AttributeTypes,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ClassAttributes(value, elGetter);
}

/**
 * @summary ClassAttributeSelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClassAttributeSelection ::= SEQUENCE {
 *   class            OBJECT IDENTIFIER OPTIONAL,
 *   classAttributes  ClassAttributes DEFAULT allAttributes:NULL }
 * ```
 *
 * @class
 */
export class ClassAttributeSelection {
    constructor(
        /**
         * @summary `class_`.
         * @public
         * @readonly
         */
        readonly class_: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `classAttributes`.
         * @public
         * @readonly
         */
        readonly classAttributes: OPTIONAL<ClassAttributes>
    ) {}

    /**
     * @summary Restructures an object into a ClassAttributeSelection
     * @description
     *
     * This takes an `object` and converts it to a `ClassAttributeSelection`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClassAttributeSelection`.
     * @returns {ClassAttributeSelection}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ClassAttributeSelection]: ClassAttributeSelection[_K];
            }
        >
    ): ClassAttributeSelection {
        return new ClassAttributeSelection(_o.class_, _o.classAttributes);
    }

    /**
     * @summary Getter that returns the default value for `classAttributes`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_classAttributes() {
        return { allAttributes: null };
    }
}
/**
 * @summary The Leading Root Component Types of ClassAttributeSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ClassAttributeSelection: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "class",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "classAttributes",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ClassAttributeSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ClassAttributeSelection: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ClassAttributeSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ClassAttributeSelection: $.ComponentSpec[] = [];
let _cached_decoder_for_ClassAttributeSelection: $.ASN1Decoder<
    ClassAttributeSelection
> | null = null;
let _cached_encoder_for_ClassAttributeSelection: $.ASN1Encoder<
    ClassAttributeSelection
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ClassAttributeSelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClassAttributeSelection} The decoded data structure.
 */
export function _decode_ClassAttributeSelection(el: _Element) {
    if (!_cached_decoder_for_ClassAttributeSelection) {
        _cached_decoder_for_ClassAttributeSelection = function (
            el: _Element
        ): ClassAttributeSelection {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let class_: OPTIONAL<OBJECT_IDENTIFIER>;
            let classAttributes: OPTIONAL<ClassAttributes> =
                ClassAttributeSelection._default_value_for_classAttributes;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                class: (_el: _Element): void => {
                    class_ = $._decodeObjectIdentifier(_el);
                },
                classAttributes: (_el: _Element): void => {
                    classAttributes = _decode_ClassAttributes(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
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
/**
 * @summary Encodes a(n) ClassAttributeSelection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClassAttributeSelection, encoded as an ASN.1 Element.
 */
export function _encode_ClassAttributeSelection(
    value: ClassAttributeSelection,
    elGetter: $.ASN1Encoder<ClassAttributeSelection>
) {
    if (!_cached_encoder_for_ClassAttributeSelection) {
        _cached_encoder_for_ClassAttributeSelection = function (
            value: ClassAttributeSelection,
            elGetter: $.ASN1Encoder<ClassAttributeSelection>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.class_ === undefined
                            ? undefined
                            : $._encodeObjectIdentifier(value.class_, $.BER),
                        /* IF_DEFAULT */ value.classAttributes === undefined ||
                        $.deepEq(
                            value.classAttributes,
                            ClassAttributeSelection._default_value_for_classAttributes
                        )
                            ? undefined
                            : _encode_ClassAttributes(
                                  value.classAttributes,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ClassAttributeSelection(value, elGetter);
}

export type AttributeSelection<> = ClassAttributeSelection[]; // SetOfType
let _cached_decoder_for_AttributeSelection: $.ASN1Decoder<
    AttributeSelection
> | null = null;
let _cached_encoder_for_AttributeSelection: $.ASN1Encoder<
    AttributeSelection
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeSelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeSelection} The decoded data structure.
 */
export function _decode_AttributeSelection(el: _Element) {
    if (!_cached_decoder_for_AttributeSelection) {
        _cached_decoder_for_AttributeSelection = $._decodeSetOf<
            ClassAttributeSelection
        >(() => _decode_ClassAttributeSelection);
    }
    return _cached_decoder_for_AttributeSelection(el);
}
/**
 * @summary Encodes a(n) AttributeSelection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeSelection, encoded as an ASN.1 Element.
 */
export function _encode_AttributeSelection(
    value: AttributeSelection,
    elGetter: $.ASN1Encoder<AttributeSelection>
) {
    if (!_cached_encoder_for_AttributeSelection) {
        _cached_encoder_for_AttributeSelection = $._encodeSetOf<
            ClassAttributeSelection
        >(() => _encode_ClassAttributeSelection, $.BER);
    }
    return _cached_encoder_for_AttributeSelection(value, elGetter);
}

/**
 * @summary Knowledge_knowledgeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Knowledge-knowledgeType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_Knowledge_knowledgeType {
    master = 0,
    shadow = 1,
    both = 2,
}
/**
 * @summary Knowledge_knowledgeType
 */
export type Knowledge_knowledgeType = _enum_for_Knowledge_knowledgeType;
/**
 * @summary Knowledge_knowledgeType
 * @constant
 */
export const Knowledge_knowledgeType = _enum_for_Knowledge_knowledgeType;
/**
 * @summary Knowledge_knowledgeType_master
 * @constant
 * @type {number}
 */
export const Knowledge_knowledgeType_master: Knowledge_knowledgeType =
    Knowledge_knowledgeType.master; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary Knowledge_knowledgeType_shadow
 * @constant
 * @type {number}
 */
export const Knowledge_knowledgeType_shadow: Knowledge_knowledgeType =
    Knowledge_knowledgeType.shadow; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary Knowledge_knowledgeType_both
 * @constant
 * @type {number}
 */
export const Knowledge_knowledgeType_both: Knowledge_knowledgeType =
    Knowledge_knowledgeType.both; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_Knowledge_knowledgeType: $.ASN1Decoder<
    Knowledge_knowledgeType
> | null = null;
let _cached_encoder_for_Knowledge_knowledgeType: $.ASN1Encoder<
    Knowledge_knowledgeType
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Knowledge_knowledgeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Knowledge_knowledgeType} The decoded data structure.
 */
export function _decode_Knowledge_knowledgeType(el: _Element) {
    if (!_cached_decoder_for_Knowledge_knowledgeType) {
        _cached_decoder_for_Knowledge_knowledgeType = $._decodeEnumerated;
    }
    return _cached_decoder_for_Knowledge_knowledgeType(el);
}
/**
 * @summary Encodes a(n) Knowledge_knowledgeType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Knowledge_knowledgeType, encoded as an ASN.1 Element.
 */
export function _encode_Knowledge_knowledgeType(
    value: Knowledge_knowledgeType,
    elGetter: $.ASN1Encoder<Knowledge_knowledgeType>
) {
    if (!_cached_encoder_for_Knowledge_knowledgeType) {
        _cached_encoder_for_Knowledge_knowledgeType = $._encodeEnumerated;
    }
    return _cached_encoder_for_Knowledge_knowledgeType(value, elGetter);
}

/**
 * @summary Knowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Knowledge ::= SEQUENCE {
 *   knowledgeType      ENUMERATED {
 *     master (0),
 *     shadow (1),
 *     both   (2)},
 *   extendedKnowledge  BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class Knowledge {
    constructor(
        /**
         * @summary `knowledgeType`.
         * @public
         * @readonly
         */
        readonly knowledgeType: Knowledge_knowledgeType,
        /**
         * @summary `extendedKnowledge`.
         * @public
         * @readonly
         */
        readonly extendedKnowledge: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Knowledge
     * @description
     *
     * This takes an `object` and converts it to a `Knowledge`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Knowledge`.
     * @returns {Knowledge}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Knowledge]: Knowledge[_K] }>
    ): Knowledge {
        return new Knowledge(
            _o.knowledgeType,
            _o.extendedKnowledge,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `extendedKnowledge`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_extendedKnowledge() {
        return false;
    }
    /**
     * @summary The enum used as the type of the component `knowledgeType`
     * @public
     * @static
     */

    public static _enum_for_knowledgeType = _enum_for_Knowledge_knowledgeType;
}
/**
 * @summary The Leading Root Component Types of Knowledge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Knowledge: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "knowledgeType",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "extendedKnowledge",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Knowledge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Knowledge: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Knowledge
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Knowledge: $.ComponentSpec[] = [];
let _cached_decoder_for_Knowledge: $.ASN1Decoder<Knowledge> | null = null;
let _cached_encoder_for_Knowledge: $.ASN1Encoder<Knowledge> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Knowledge
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Knowledge} The decoded data structure.
 */
export function _decode_Knowledge(el: _Element) {
    if (!_cached_decoder_for_Knowledge) {
        _cached_decoder_for_Knowledge = function (el: _Element): Knowledge {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let knowledgeType!: Knowledge_knowledgeType;
            let extendedKnowledge: OPTIONAL<BOOLEAN> =
                Knowledge._default_value_for_extendedKnowledge;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                knowledgeType: (_el: _Element): void => {
                    knowledgeType = _decode_Knowledge_knowledgeType(_el);
                },
                extendedKnowledge: (_el: _Element): void => {
                    extendedKnowledge = $._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Knowledge,
                _extension_additions_list_spec_for_Knowledge,
                _root_component_type_list_2_spec_for_Knowledge,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) Knowledge into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Knowledge, encoded as an ASN.1 Element.
 */
export function _encode_Knowledge(
    value: Knowledge,
    elGetter: $.ASN1Encoder<Knowledge>
) {
    if (!_cached_encoder_for_Knowledge) {
        _cached_encoder_for_Knowledge = function (
            value: Knowledge,
            elGetter: $.ASN1Encoder<Knowledge>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Knowledge_knowledgeType(
                                value.knowledgeType,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.extendedKnowledge ===
                                undefined ||
                            $.deepEq(
                                value.extendedKnowledge,
                                Knowledge._default_value_for_extendedKnowledge
                            )
                                ? undefined
                                : $._encodeBoolean(
                                      value.extendedKnowledge,
                                      $.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Knowledge(value, elGetter);
}

/**
 * @summary UnitOfReplication_supplyContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnitOfReplication-supplyContexts ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type UnitOfReplication_supplyContexts =
    | { allContexts: NULL } /* CHOICE_ALT_ROOT */
    | { selectedContexts: OBJECT_IDENTIFIER[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_UnitOfReplication_supplyContexts: $.ASN1Decoder<
    UnitOfReplication_supplyContexts
> | null = null;
let _cached_encoder_for_UnitOfReplication_supplyContexts: $.ASN1Encoder<
    UnitOfReplication_supplyContexts
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UnitOfReplication_supplyContexts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnitOfReplication_supplyContexts} The decoded data structure.
 */
export function _decode_UnitOfReplication_supplyContexts(el: _Element) {
    if (!_cached_decoder_for_UnitOfReplication_supplyContexts) {
        _cached_decoder_for_UnitOfReplication_supplyContexts = $._decode_extensible_choice<
            UnitOfReplication_supplyContexts
        >({
            "UNIVERSAL 5": ["allContexts", $._decodeNull],
            "UNIVERSAL 17": [
                "selectedContexts",
                $._decodeSetOf<OBJECT_IDENTIFIER>(
                    () => $._decodeObjectIdentifier
                ),
            ],
        });
    }
    return _cached_decoder_for_UnitOfReplication_supplyContexts(el);
}
/**
 * @summary Encodes a(n) UnitOfReplication_supplyContexts into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitOfReplication_supplyContexts, encoded as an ASN.1 Element.
 */
export function _encode_UnitOfReplication_supplyContexts(
    value: UnitOfReplication_supplyContexts,
    elGetter: $.ASN1Encoder<UnitOfReplication_supplyContexts>
) {
    if (!_cached_encoder_for_UnitOfReplication_supplyContexts) {
        _cached_encoder_for_UnitOfReplication_supplyContexts = $._encode_choice<
            UnitOfReplication_supplyContexts
        >(
            {
                allContexts: $._encodeNull,
                selectedContexts: $._encodeSetOf<OBJECT_IDENTIFIER>(
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_UnitOfReplication_supplyContexts(
        value,
        elGetter
    );
}

/**
 * @summary UnitOfReplication
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnitOfReplication ::= SEQUENCE {
 *   area                 AreaSpecification,
 *   attributes           AttributeSelection,
 *   knowledge            Knowledge OPTIONAL,
 *   subordinates         BOOLEAN DEFAULT FALSE,
 *   contextSelection     ContextSelection OPTIONAL,
 *   supplyContexts  [0]  CHOICE {
 *     allContexts         NULL,
 *     selectedContexts    SET SIZE (1..MAX) OF CONTEXT.&id,
 *     ... } OPTIONAL }
 * ```
 *
 * @class
 */
export class UnitOfReplication {
    constructor(
        /**
         * @summary `area`.
         * @public
         * @readonly
         */
        readonly area: AreaSpecification,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: AttributeSelection,
        /**
         * @summary `knowledge`.
         * @public
         * @readonly
         */
        readonly knowledge: OPTIONAL<Knowledge>,
        /**
         * @summary `subordinates`.
         * @public
         * @readonly
         */
        readonly subordinates: OPTIONAL<BOOLEAN>,
        /**
         * @summary `contextSelection`.
         * @public
         * @readonly
         */
        readonly contextSelection: OPTIONAL<ContextSelection>,
        /**
         * @summary `supplyContexts`.
         * @public
         * @readonly
         */
        readonly supplyContexts: OPTIONAL<UnitOfReplication_supplyContexts>
    ) {}

    /**
     * @summary Restructures an object into a UnitOfReplication
     * @description
     *
     * This takes an `object` and converts it to a `UnitOfReplication`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UnitOfReplication`.
     * @returns {UnitOfReplication}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UnitOfReplication]: UnitOfReplication[_K] }>
    ): UnitOfReplication {
        return new UnitOfReplication(
            _o.area,
            _o.attributes,
            _o.knowledge,
            _o.subordinates,
            _o.contextSelection,
            _o.supplyContexts
        );
    }

    /**
     * @summary Getter that returns the default value for `subordinates`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_subordinates() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of UnitOfReplication
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnitOfReplication: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "area",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributes",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "knowledge",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subordinates",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contextSelection",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "supplyContexts",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of UnitOfReplication
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnitOfReplication: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of UnitOfReplication
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnitOfReplication: $.ComponentSpec[] = [];
let _cached_decoder_for_UnitOfReplication: $.ASN1Decoder<
    UnitOfReplication
> | null = null;
let _cached_encoder_for_UnitOfReplication: $.ASN1Encoder<
    UnitOfReplication
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UnitOfReplication
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnitOfReplication} The decoded data structure.
 */
export function _decode_UnitOfReplication(el: _Element) {
    if (!_cached_decoder_for_UnitOfReplication) {
        _cached_decoder_for_UnitOfReplication = function (
            el: _Element
        ): UnitOfReplication {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let area!: AreaSpecification;
            let attributes!: AttributeSelection;
            let knowledge: OPTIONAL<Knowledge>;
            let subordinates: OPTIONAL<BOOLEAN> =
                UnitOfReplication._default_value_for_subordinates;
            let contextSelection: OPTIONAL<ContextSelection>;
            let supplyContexts: OPTIONAL<UnitOfReplication_supplyContexts>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                area: (_el: _Element): void => {
                    area = _decode_AreaSpecification(_el);
                },
                attributes: (_el: _Element): void => {
                    attributes = _decode_AttributeSelection(_el);
                },
                knowledge: (_el: _Element): void => {
                    knowledge = _decode_Knowledge(_el);
                },
                subordinates: (_el: _Element): void => {
                    subordinates = $._decodeBoolean(_el);
                },
                contextSelection: (_el: _Element): void => {
                    contextSelection = _decode_ContextSelection(_el);
                },
                supplyContexts: (_el: _Element): void => {
                    supplyContexts = $._decode_implicit<
                        UnitOfReplication_supplyContexts
                    >(() => _decode_UnitOfReplication_supplyContexts)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
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
/**
 * @summary Encodes a(n) UnitOfReplication into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitOfReplication, encoded as an ASN.1 Element.
 */
export function _encode_UnitOfReplication(
    value: UnitOfReplication,
    elGetter: $.ASN1Encoder<UnitOfReplication>
) {
    if (!_cached_encoder_for_UnitOfReplication) {
        _cached_encoder_for_UnitOfReplication = function (
            value: UnitOfReplication,
            elGetter: $.ASN1Encoder<UnitOfReplication>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AreaSpecification(
                            value.area,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AttributeSelection(
                            value.attributes,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.knowledge === undefined
                            ? undefined
                            : _encode_Knowledge(value.knowledge, $.BER),
                        /* IF_DEFAULT */ value.subordinates === undefined ||
                        $.deepEq(
                            value.subordinates,
                            UnitOfReplication._default_value_for_subordinates
                        )
                            ? undefined
                            : $._encodeBoolean(value.subordinates, $.BER),
                        /* IF_ABSENT  */ value.contextSelection === undefined
                            ? undefined
                            : _encode_ContextSelection(
                                  value.contextSelection,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.supplyContexts === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      _encode_UnitOfReplication_supplyContexts,
                                  $.BER
                              )(value.supplyContexts, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UnitOfReplication(value, elGetter);
}

export type Time<> = GeneralizedTime; // GeneralizedTime
let _cached_decoder_for_Time: $.ASN1Decoder<Time> | null = null;
let _cached_encoder_for_Time: $.ASN1Encoder<Time> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Time
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Time} The decoded data structure.
 */
export function _decode_Time(el: _Element) {
    if (!_cached_decoder_for_Time) {
        _cached_decoder_for_Time = $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_Time(el);
}
/**
 * @summary Encodes a(n) Time into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Time, encoded as an ASN.1 Element.
 */
export function _encode_Time(value: Time, elGetter: $.ASN1Encoder<Time>) {
    if (!_cached_encoder_for_Time) {
        _cached_encoder_for_Time = $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_Time(value, elGetter);
}

/**
 * @summary PeriodicStrategy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PeriodicStrategy ::= SEQUENCE {
 *   beginTime       Time OPTIONAL,
 *   windowSize      INTEGER,
 *   updateInterval  INTEGER,
 *   ... }
 * ```
 *
 * @class
 */
export class PeriodicStrategy {
    constructor(
        /**
         * @summary `beginTime`.
         * @public
         * @readonly
         */
        readonly beginTime: OPTIONAL<Time>,
        /**
         * @summary `windowSize`.
         * @public
         * @readonly
         */
        readonly windowSize: INTEGER,
        /**
         * @summary `updateInterval`.
         * @public
         * @readonly
         */
        readonly updateInterval: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PeriodicStrategy
     * @description
     *
     * This takes an `object` and converts it to a `PeriodicStrategy`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PeriodicStrategy`.
     * @returns {PeriodicStrategy}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof PeriodicStrategy]: PeriodicStrategy[_K] }>
    ): PeriodicStrategy {
        return new PeriodicStrategy(
            _o.beginTime,
            _o.windowSize,
            _o.updateInterval,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of PeriodicStrategy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PeriodicStrategy: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "beginTime",
        true,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "windowSize",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "updateInterval",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of PeriodicStrategy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PeriodicStrategy: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of PeriodicStrategy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PeriodicStrategy: $.ComponentSpec[] = [];
let _cached_decoder_for_PeriodicStrategy: $.ASN1Decoder<
    PeriodicStrategy
> | null = null;
let _cached_encoder_for_PeriodicStrategy: $.ASN1Encoder<
    PeriodicStrategy
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) PeriodicStrategy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PeriodicStrategy} The decoded data structure.
 */
export function _decode_PeriodicStrategy(el: _Element) {
    if (!_cached_decoder_for_PeriodicStrategy) {
        _cached_decoder_for_PeriodicStrategy = function (
            el: _Element
        ): PeriodicStrategy {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let beginTime: OPTIONAL<Time>;
            let windowSize!: INTEGER;
            let updateInterval!: INTEGER;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                beginTime: (_el: _Element): void => {
                    beginTime = _decode_Time(_el);
                },
                windowSize: (_el: _Element): void => {
                    windowSize = $._decodeInteger(_el);
                },
                updateInterval: (_el: _Element): void => {
                    updateInterval = $._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PeriodicStrategy,
                _extension_additions_list_spec_for_PeriodicStrategy,
                _root_component_type_list_2_spec_for_PeriodicStrategy,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) PeriodicStrategy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeriodicStrategy, encoded as an ASN.1 Element.
 */
export function _encode_PeriodicStrategy(
    value: PeriodicStrategy,
    elGetter: $.ASN1Encoder<PeriodicStrategy>
) {
    if (!_cached_encoder_for_PeriodicStrategy) {
        _cached_encoder_for_PeriodicStrategy = function (
            value: PeriodicStrategy,
            elGetter: $.ASN1Encoder<PeriodicStrategy>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.beginTime === undefined
                                ? undefined
                                : _encode_Time(value.beginTime, $.BER),
                            /* REQUIRED   */ $._encodeInteger(
                                value.windowSize,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeInteger(
                                value.updateInterval,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PeriodicStrategy(value, elGetter);
}

/**
 * @summary SchedulingParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchedulingParameters ::= SEQUENCE {
 *   periodic    PeriodicStrategy OPTIONAL, -- shall be present if othertimes
 *   --                                        is set to FALSE
 *   othertimes  BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class SchedulingParameters {
    constructor(
        /**
         * @summary `periodic`.
         * @public
         * @readonly
         */
        readonly periodic: OPTIONAL<PeriodicStrategy>,
        /**
         * @summary `othertimes`.
         * @public
         * @readonly
         */
        readonly othertimes: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SchedulingParameters
     * @description
     *
     * This takes an `object` and converts it to a `SchedulingParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SchedulingParameters`.
     * @returns {SchedulingParameters}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SchedulingParameters]: SchedulingParameters[_K] }
        >
    ): SchedulingParameters {
        return new SchedulingParameters(
            _o.periodic,
            _o.othertimes,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `othertimes`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_othertimes() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of SchedulingParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SchedulingParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "periodic",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "othertimes",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SchedulingParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SchedulingParameters: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SchedulingParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SchedulingParameters: $.ComponentSpec[] = [];
let _cached_decoder_for_SchedulingParameters: $.ASN1Decoder<
    SchedulingParameters
> | null = null;
let _cached_encoder_for_SchedulingParameters: $.ASN1Encoder<
    SchedulingParameters
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SchedulingParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchedulingParameters} The decoded data structure.
 */
export function _decode_SchedulingParameters(el: _Element) {
    if (!_cached_decoder_for_SchedulingParameters) {
        _cached_decoder_for_SchedulingParameters = function (
            el: _Element
        ): SchedulingParameters {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let periodic: OPTIONAL<PeriodicStrategy>;
            let othertimes: OPTIONAL<BOOLEAN> =
                SchedulingParameters._default_value_for_othertimes;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                periodic: (_el: _Element): void => {
                    periodic = _decode_PeriodicStrategy(_el);
                },
                othertimes: (_el: _Element): void => {
                    othertimes = $._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SchedulingParameters,
                _extension_additions_list_spec_for_SchedulingParameters,
                _root_component_type_list_2_spec_for_SchedulingParameters,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) SchedulingParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchedulingParameters, encoded as an ASN.1 Element.
 */
export function _encode_SchedulingParameters(
    value: SchedulingParameters,
    elGetter: $.ASN1Encoder<SchedulingParameters>
) {
    if (!_cached_encoder_for_SchedulingParameters) {
        _cached_encoder_for_SchedulingParameters = function (
            value: SchedulingParameters,
            elGetter: $.ASN1Encoder<SchedulingParameters>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.periodic === undefined
                                ? undefined
                                : _encode_PeriodicStrategy(
                                      value.periodic,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.othertimes === undefined ||
                            $.deepEq(
                                value.othertimes,
                                SchedulingParameters._default_value_for_othertimes
                            )
                                ? undefined
                                : $._encodeBoolean(value.othertimes, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SchedulingParameters(value, elGetter);
}

/**
 * @summary SupplierUpdateMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupplierUpdateMode  ::=  CHOICE {
 *   onChange   BOOLEAN,
 *   scheduled  SchedulingParameters,
 *   ... }
 * ```
 */
export type SupplierUpdateMode =
    | { onChange: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { scheduled: SchedulingParameters } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_SupplierUpdateMode: $.ASN1Decoder<
    SupplierUpdateMode
> | null = null;
let _cached_encoder_for_SupplierUpdateMode: $.ASN1Encoder<
    SupplierUpdateMode
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SupplierUpdateMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupplierUpdateMode} The decoded data structure.
 */
export function _decode_SupplierUpdateMode(el: _Element) {
    if (!_cached_decoder_for_SupplierUpdateMode) {
        _cached_decoder_for_SupplierUpdateMode = $._decode_extensible_choice<
            SupplierUpdateMode
        >({
            "UNIVERSAL 1": ["onChange", $._decodeBoolean],
            "UNIVERSAL 16": ["scheduled", _decode_SchedulingParameters],
        });
    }
    return _cached_decoder_for_SupplierUpdateMode(el);
}
/**
 * @summary Encodes a(n) SupplierUpdateMode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupplierUpdateMode, encoded as an ASN.1 Element.
 */
export function _encode_SupplierUpdateMode(
    value: SupplierUpdateMode,
    elGetter: $.ASN1Encoder<SupplierUpdateMode>
) {
    if (!_cached_encoder_for_SupplierUpdateMode) {
        _cached_encoder_for_SupplierUpdateMode = $._encode_choice<
            SupplierUpdateMode
        >(
            {
                onChange: $._encodeBoolean,
                scheduled: _encode_SchedulingParameters,
            },
            $.BER
        );
    }
    return _cached_encoder_for_SupplierUpdateMode(value, elGetter);
}

export type ConsumerUpdateMode<> = SchedulingParameters; // DefinedType
let _cached_decoder_for_ConsumerUpdateMode: $.ASN1Decoder<
    ConsumerUpdateMode
> | null = null;
let _cached_encoder_for_ConsumerUpdateMode: $.ASN1Encoder<
    ConsumerUpdateMode
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ConsumerUpdateMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConsumerUpdateMode} The decoded data structure.
 */
export function _decode_ConsumerUpdateMode(el: _Element) {
    if (!_cached_decoder_for_ConsumerUpdateMode) {
        _cached_decoder_for_ConsumerUpdateMode = _decode_SchedulingParameters;
    }
    return _cached_decoder_for_ConsumerUpdateMode(el);
}
/**
 * @summary Encodes a(n) ConsumerUpdateMode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConsumerUpdateMode, encoded as an ASN.1 Element.
 */
export function _encode_ConsumerUpdateMode(
    value: ConsumerUpdateMode,
    elGetter: $.ASN1Encoder<ConsumerUpdateMode>
) {
    if (!_cached_encoder_for_ConsumerUpdateMode) {
        _cached_encoder_for_ConsumerUpdateMode = _encode_SchedulingParameters;
    }
    return _cached_encoder_for_ConsumerUpdateMode(value, elGetter);
}

/**
 * @summary UpdateMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UpdateMode  ::=  CHOICE {
 *   supplierInitiated  [0]  SupplierUpdateMode,
 *   consumerInitiated  [1]  ConsumerUpdateMode,
 *   ... }
 * ```
 */
export type UpdateMode =
    | { supplierInitiated: SupplierUpdateMode } /* CHOICE_ALT_ROOT */
    | { consumerInitiated: ConsumerUpdateMode } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_UpdateMode: $.ASN1Decoder<UpdateMode> | null = null;
let _cached_encoder_for_UpdateMode: $.ASN1Encoder<UpdateMode> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UpdateMode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UpdateMode} The decoded data structure.
 */
export function _decode_UpdateMode(el: _Element) {
    if (!_cached_decoder_for_UpdateMode) {
        _cached_decoder_for_UpdateMode = $._decode_extensible_choice<
            UpdateMode
        >({
            "CONTEXT 0": [
                "supplierInitiated",
                $._decode_implicit<SupplierUpdateMode>(
                    () => _decode_SupplierUpdateMode
                ),
            ],
            "CONTEXT 1": [
                "consumerInitiated",
                $._decode_implicit<ConsumerUpdateMode>(
                    () => _decode_ConsumerUpdateMode
                ),
            ],
        });
    }
    return _cached_decoder_for_UpdateMode(el);
}
/**
 * @summary Encodes a(n) UpdateMode into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateMode, encoded as an ASN.1 Element.
 */
export function _encode_UpdateMode(
    value: UpdateMode,
    elGetter: $.ASN1Encoder<UpdateMode>
) {
    if (!_cached_encoder_for_UpdateMode) {
        _cached_encoder_for_UpdateMode = $._encode_choice<UpdateMode>(
            {
                supplierInitiated: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_SupplierUpdateMode,
                    $.BER
                ),
                consumerInitiated: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ConsumerUpdateMode,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_UpdateMode(value, elGetter);
}

/**
 * @summary ShadowingAgreementInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ShadowingAgreementInfo ::= SEQUENCE {
 *   shadowSubject          UnitOfReplication,
 *   updateMode             UpdateMode DEFAULT supplierInitiated:onChange:TRUE,
 *   master                 AccessPoint OPTIONAL,
 *   secondaryShadows  [2]  BOOLEAN DEFAULT FALSE }
 * ```
 *
 * @class
 */
export class ShadowingAgreementInfo {
    constructor(
        /**
         * @summary `shadowSubject`.
         * @public
         * @readonly
         */
        readonly shadowSubject: UnitOfReplication,
        /**
         * @summary `updateMode`.
         * @public
         * @readonly
         */
        readonly updateMode: OPTIONAL<UpdateMode>,
        /**
         * @summary `master`.
         * @public
         * @readonly
         */
        readonly master: OPTIONAL<AccessPoint>,
        /**
         * @summary `secondaryShadows`.
         * @public
         * @readonly
         */
        readonly secondaryShadows: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a ShadowingAgreementInfo
     * @description
     *
     * This takes an `object` and converts it to a `ShadowingAgreementInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ShadowingAgreementInfo`.
     * @returns {ShadowingAgreementInfo}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof ShadowingAgreementInfo]: ShadowingAgreementInfo[_K] }
        >
    ): ShadowingAgreementInfo {
        return new ShadowingAgreementInfo(
            _o.shadowSubject,
            _o.updateMode,
            _o.master,
            _o.secondaryShadows
        );
    }

    /**
     * @summary Getter that returns the default value for `updateMode`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_updateMode() {
        return { supplierInitiated: { onChange: false } };
    }
    /**
     * @summary Getter that returns the default value for `secondaryShadows`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_secondaryShadows() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of ShadowingAgreementInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ShadowingAgreementInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "shadowSubject",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec("updateMode", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "master",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "secondaryShadows",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ShadowingAgreementInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ShadowingAgreementInfo: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ShadowingAgreementInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ShadowingAgreementInfo: $.ComponentSpec[] = [];
let _cached_decoder_for_ShadowingAgreementInfo: $.ASN1Decoder<
    ShadowingAgreementInfo
> | null = null;
let _cached_encoder_for_ShadowingAgreementInfo: $.ASN1Encoder<
    ShadowingAgreementInfo
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ShadowingAgreementInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ShadowingAgreementInfo} The decoded data structure.
 */
export function _decode_ShadowingAgreementInfo(el: _Element) {
    if (!_cached_decoder_for_ShadowingAgreementInfo) {
        _cached_decoder_for_ShadowingAgreementInfo = function (
            el: _Element
        ): ShadowingAgreementInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let shadowSubject!: UnitOfReplication;
            let updateMode: OPTIONAL<UpdateMode> =
                ShadowingAgreementInfo._default_value_for_updateMode;
            let master: OPTIONAL<AccessPoint>;
            let secondaryShadows: OPTIONAL<BOOLEAN> =
                ShadowingAgreementInfo._default_value_for_secondaryShadows;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                shadowSubject: (_el: _Element): void => {
                    shadowSubject = _decode_UnitOfReplication(_el);
                },
                updateMode: (_el: _Element): void => {
                    updateMode = _decode_UpdateMode(_el);
                },
                master: (_el: _Element): void => {
                    master = _decode_AccessPoint(_el);
                },
                secondaryShadows: (_el: _Element): void => {
                    secondaryShadows = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
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
/**
 * @summary Encodes a(n) ShadowingAgreementInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShadowingAgreementInfo, encoded as an ASN.1 Element.
 */
export function _encode_ShadowingAgreementInfo(
    value: ShadowingAgreementInfo,
    elGetter: $.ASN1Encoder<ShadowingAgreementInfo>
) {
    if (!_cached_encoder_for_ShadowingAgreementInfo) {
        _cached_encoder_for_ShadowingAgreementInfo = function (
            value: ShadowingAgreementInfo,
            elGetter: $.ASN1Encoder<ShadowingAgreementInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_UnitOfReplication(
                            value.shadowSubject,
                            $.BER
                        ),
                        /* IF_DEFAULT */ value.updateMode === undefined ||
                        $.deepEq(
                            value.updateMode,
                            ShadowingAgreementInfo._default_value_for_updateMode
                        )
                            ? undefined
                            : _encode_UpdateMode(value.updateMode, $.BER),
                        /* IF_ABSENT  */ value.master === undefined
                            ? undefined
                            : _encode_AccessPoint(value.master, $.BER),
                        /* IF_DEFAULT */ value.secondaryShadows === undefined ||
                        $.deepEq(
                            value.secondaryShadows,
                            ShadowingAgreementInfo._default_value_for_secondaryShadows
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.secondaryShadows, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ShadowingAgreementInfo(value, elGetter);
}

/**
 * @summary shadowOperationalBinding_roleA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shadowOperationalBinding-roleA ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {OP_BIND_ROLE}
 * @implements {OP_BIND_ROLE}
 */
export const shadowOperationalBinding_roleA: OP_BIND_ROLE = {
    class: "OP-BIND-ROLE",
    decoderFor: {
        "&EstablishParam": $._decodeNull,
        "&ModifyParam": undefined,
        "&TerminateParam": undefined,
    },
    encoderFor: {
        "&EstablishParam": $._encodeNull,
        "&ModifyParam": undefined,
        "&TerminateParam": undefined,
    },
    "&establish": false /* OBJECT_FIELD_SETTING */,
    "&modify": false /* OBJECT_FIELD_SETTING */,
    "&terminate": false /* OBJECT_FIELD_SETTING */,
    "&EstablishParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ModifyParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&TerminateParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary ModificationParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModificationParameter ::= SEQUENCE {
 *   secondaryShadows  SET OF SupplierAndConsumers,
 *   ... }
 * ```
 *
 * @class
 */
export class ModificationParameter {
    constructor(
        /**
         * @summary `secondaryShadows`.
         * @public
         * @readonly
         */
        readonly secondaryShadows: SupplierAndConsumers[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ModificationParameter
     * @description
     *
     * This takes an `object` and converts it to a `ModificationParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModificationParameter`.
     * @returns {ModificationParameter}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof ModificationParameter]: ModificationParameter[_K] }
        >
    ): ModificationParameter {
        return new ModificationParameter(
            _o.secondaryShadows,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ModificationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ModificationParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "secondaryShadows",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ModificationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ModificationParameter: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ModificationParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ModificationParameter: $.ComponentSpec[] = [];
let _cached_decoder_for_ModificationParameter: $.ASN1Decoder<
    ModificationParameter
> | null = null;
let _cached_encoder_for_ModificationParameter: $.ASN1Encoder<
    ModificationParameter
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ModificationParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModificationParameter} The decoded data structure.
 */
export function _decode_ModificationParameter(el: _Element) {
    if (!_cached_decoder_for_ModificationParameter) {
        _cached_decoder_for_ModificationParameter = function (
            el: _Element
        ): ModificationParameter {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "ModificationParameter contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "secondaryShadows";
            let secondaryShadows!: SupplierAndConsumers[];
            secondaryShadows = $._decodeSetOf<SupplierAndConsumers>(
                () => _decode_SupplierAndConsumers
            )(sequence[0]);
            return new ModificationParameter(
                secondaryShadows,
                sequence.slice(1)
            );
        };
    }
    return _cached_decoder_for_ModificationParameter(el);
}
/**
 * @summary Encodes a(n) ModificationParameter into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModificationParameter, encoded as an ASN.1 Element.
 */
export function _encode_ModificationParameter(
    value: ModificationParameter,
    elGetter: $.ASN1Encoder<ModificationParameter>
) {
    if (!_cached_encoder_for_ModificationParameter) {
        _cached_encoder_for_ModificationParameter = function (
            value: ModificationParameter,
            elGetter: $.ASN1Encoder<ModificationParameter>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeSetOf<
                                SupplierAndConsumers
                            >(() => _encode_SupplierAndConsumers, $.BER)(
                                value.secondaryShadows,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ModificationParameter(value, elGetter);
}

/**
 * @summary shadowOperationalBinding_roleB
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shadowOperationalBinding-roleB ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {OP_BIND_ROLE}
 * @implements {OP_BIND_ROLE}
 */
export const shadowOperationalBinding_roleB: OP_BIND_ROLE = {
    class: "OP-BIND-ROLE",
    decoderFor: {
        "&EstablishParam": $._decodeNull,
        "&ModifyParam": _decode_ModificationParameter,
        "&TerminateParam": undefined,
    },
    encoderFor: {
        "&EstablishParam": $._encodeNull,
        "&ModifyParam": _encode_ModificationParameter,
        "&TerminateParam": undefined,
    },
    "&establish": false /* OBJECT_FIELD_SETTING */,
    "&modify": false /* OBJECT_FIELD_SETTING */,
    "&terminate": false /* OBJECT_FIELD_SETTING */,
    "&EstablishParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ModifyParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&TerminateParam": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary shadowOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shadowOperationalBinding OPERATIONAL-BINDING ::= {
 *   AGREEMENT             ShadowingAgreementInfo
 *   APPLICATION CONTEXTS
 *     {{shadowSupplierInitiatedAC
 *       APPLIES TO  {All-operations-supplier-initiated}} |
 *     {shadowConsumerInitiatedAC
 *       APPLIES TO  {All-operations-consumer-initiated}}}
 *   ASYMMETRIC
 *     ROLE-A { -- shadow supplier role
 *       ESTABLISHMENT-INITIATOR  TRUE
 *       ESTABLISHMENT-PARAMETER  NULL
 *       MODIFICATION-INITIATOR   TRUE
 *       TERMINATION-INITIATOR    TRUE }
 *     ROLE-B { -- shadow consumer role
 *       ESTABLISHMENT-INITIATOR  TRUE
 *       ESTABLISHMENT-PARAMETER  NULL
 *       MODIFICATION-INITIATOR   TRUE
 *       MODIFICATION-PARAMETER   ModificationParameter
 *       TERMINATION-INITIATOR    TRUE}
 *   ID                    id-op-binding-shadow }
 * ```
 *
 * @constant
 * @type {OPERATIONAL_BINDING}
 * @implements {OPERATIONAL_BINDING}
 */
export const shadowOperationalBinding: OPERATIONAL_BINDING = {
    class: "OPERATIONAL-BINDING",
    decoderFor: {
        "&Agreement": _decode_ShadowingAgreementInfo,
    },
    encoderFor: {
        "&Agreement": _encode_ShadowingAgreementInfo,
    },
    "&Cooperation": [
        ,
        ,/* FIXME: COULD_NOT_COMPILE_DEFINED_SYNTAX_IN_OBJECT_SET */
    /* FIXME: COULD_NOT_COMPILE_DEFINED_SYNTAX_IN_OBJECT_SET */
    ] /* OBJECT_FIELD_SETTING */,
    "&roleA": shadowOperationalBinding_roleA /* OBJECT_FIELD_SETTING */,
    "&roleB": shadowOperationalBinding_roleB /* OBJECT_FIELD_SETTING */,
    "&id": id_op_binding_shadow /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Agreement": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

export type AgreementID<> = OperationalBindingID; // DefinedType
let _cached_decoder_for_AgreementID: $.ASN1Decoder<AgreementID> | null = null;
let _cached_encoder_for_AgreementID: $.ASN1Encoder<AgreementID> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AgreementID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AgreementID} The decoded data structure.
 */
export function _decode_AgreementID(el: _Element) {
    if (!_cached_decoder_for_AgreementID) {
        _cached_decoder_for_AgreementID = _decode_OperationalBindingID;
    }
    return _cached_decoder_for_AgreementID(el);
}
/**
 * @summary Encodes a(n) AgreementID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgreementID, encoded as an ASN.1 Element.
 */
export function _encode_AgreementID(
    value: AgreementID,
    elGetter: $.ASN1Encoder<AgreementID>
) {
    if (!_cached_encoder_for_AgreementID) {
        _cached_encoder_for_AgreementID = _encode_OperationalBindingID;
    }
    return _cached_encoder_for_AgreementID(value, elGetter);
}

/**
 * @summary RequestShadowUpdateArgumentData_requestedStrategy_standard
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestShadowUpdateArgumentData-requestedStrategy-standard ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_RequestShadowUpdateArgumentData_requestedStrategy_standard {
    incremental = 1,
    total = 2,
}
/**
 * @summary RequestShadowUpdateArgumentData_requestedStrategy_standard
 */
export type RequestShadowUpdateArgumentData_requestedStrategy_standard =
    | _enum_for_RequestShadowUpdateArgumentData_requestedStrategy_standard
    | ENUMERATED;
/**
 * @summary RequestShadowUpdateArgumentData_requestedStrategy_standard_incremental
 * @constant
 * @type {number}
 */
export const RequestShadowUpdateArgumentData_requestedStrategy_standard_incremental: RequestShadowUpdateArgumentData_requestedStrategy_standard = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary RequestShadowUpdateArgumentData_requestedStrategy_standard_total
 * @constant
 * @type {number}
 */
export const RequestShadowUpdateArgumentData_requestedStrategy_standard_total: RequestShadowUpdateArgumentData_requestedStrategy_standard = 2; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard: $.ASN1Decoder<
    RequestShadowUpdateArgumentData_requestedStrategy_standard
> | null = null;
let _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard: $.ASN1Encoder<
    RequestShadowUpdateArgumentData_requestedStrategy_standard
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RequestShadowUpdateArgumentData_requestedStrategy_standard
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestShadowUpdateArgumentData_requestedStrategy_standard} The decoded data structure.
 */
export function _decode_RequestShadowUpdateArgumentData_requestedStrategy_standard(
    el: _Element
) {
    if (
        !_cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard
    ) {
        _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard(
        el
    );
}
/**
 * @summary Encodes a(n) RequestShadowUpdateArgumentData_requestedStrategy_standard into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestShadowUpdateArgumentData_requestedStrategy_standard, encoded as an ASN.1 Element.
 */
export function _encode_RequestShadowUpdateArgumentData_requestedStrategy_standard(
    value: RequestShadowUpdateArgumentData_requestedStrategy_standard,
    elGetter: $.ASN1Encoder<
        RequestShadowUpdateArgumentData_requestedStrategy_standard
    >
) {
    if (
        !_cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard
    ) {
        _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy_standard(
        value,
        elGetter
    );
}

/**
 * @summary RequestShadowUpdateArgumentData_requestedStrategy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestShadowUpdateArgumentData-requestedStrategy ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RequestShadowUpdateArgumentData_requestedStrategy =
    | {
          standard: RequestShadowUpdateArgumentData_requestedStrategy_standard;
      } /* CHOICE_ALT_ROOT */
    | { other: EXTERNAL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy: $.ASN1Decoder<
    RequestShadowUpdateArgumentData_requestedStrategy
> | null = null;
let _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy: $.ASN1Encoder<
    RequestShadowUpdateArgumentData_requestedStrategy
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RequestShadowUpdateArgumentData_requestedStrategy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestShadowUpdateArgumentData_requestedStrategy} The decoded data structure.
 */
export function _decode_RequestShadowUpdateArgumentData_requestedStrategy(
    el: _Element
) {
    if (
        !_cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy
    ) {
        _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy = $._decode_extensible_choice<
            RequestShadowUpdateArgumentData_requestedStrategy
        >({
            "UNIVERSAL 10": [
                "standard",
                _decode_RequestShadowUpdateArgumentData_requestedStrategy_standard,
            ],
            "UNIVERSAL 8": ["other", $._decodeExternal],
        });
    }
    return _cached_decoder_for_RequestShadowUpdateArgumentData_requestedStrategy(
        el
    );
}
/**
 * @summary Encodes a(n) RequestShadowUpdateArgumentData_requestedStrategy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestShadowUpdateArgumentData_requestedStrategy, encoded as an ASN.1 Element.
 */
export function _encode_RequestShadowUpdateArgumentData_requestedStrategy(
    value: RequestShadowUpdateArgumentData_requestedStrategy,
    elGetter: $.ASN1Encoder<RequestShadowUpdateArgumentData_requestedStrategy>
) {
    if (
        !_cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy
    ) {
        _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy = $._encode_choice<
            RequestShadowUpdateArgumentData_requestedStrategy
        >(
            {
                standard: _encode_RequestShadowUpdateArgumentData_requestedStrategy_standard,
                other: $._encodeExternal,
            },
            $.BER
        );
    }
    return _cached_encoder_for_RequestShadowUpdateArgumentData_requestedStrategy(
        value,
        elGetter
    );
}

/**
 * @summary RequestShadowUpdateArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestShadowUpdateArgumentData ::= [0]  SEQUENCE {
 *   agreementID         AgreementID,
 *   lastUpdate          Time OPTIONAL,
 *   requestedStrategy   CHOICE {
 *     standard  ENUMERATED {
 *       incremental (1),
 *       total       (2),
 *       ...},
 *     other     EXTERNAL,
 *     ...},
 *   securityParameters  SecurityParameters OPTIONAL,
 *   ...}
 * ```
 *
 * @class
 */
export class RequestShadowUpdateArgumentData {
    constructor(
        /**
         * @summary `agreementID`.
         * @public
         * @readonly
         */
        readonly agreementID: AgreementID,
        /**
         * @summary `lastUpdate`.
         * @public
         * @readonly
         */
        readonly lastUpdate: OPTIONAL<Time>,
        /**
         * @summary `requestedStrategy`.
         * @public
         * @readonly
         */
        readonly requestedStrategy: RequestShadowUpdateArgumentData_requestedStrategy,
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<SecurityParameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RequestShadowUpdateArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `RequestShadowUpdateArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestShadowUpdateArgumentData`.
     * @returns {RequestShadowUpdateArgumentData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof RequestShadowUpdateArgumentData]: RequestShadowUpdateArgumentData[_K];
            }
        >
    ): RequestShadowUpdateArgumentData {
        return new RequestShadowUpdateArgumentData(
            _o.agreementID,
            _o.lastUpdate,
            _o.requestedStrategy,
            _o.securityParameters,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of RequestShadowUpdateArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RequestShadowUpdateArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "agreementID",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "lastUpdate",
        true,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "requestedStrategy",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of RequestShadowUpdateArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RequestShadowUpdateArgumentData: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of RequestShadowUpdateArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RequestShadowUpdateArgumentData: $.ComponentSpec[] = [];
let _cached_decoder_for_RequestShadowUpdateArgumentData: $.ASN1Decoder<
    RequestShadowUpdateArgumentData
> | null = null;
let _cached_encoder_for_RequestShadowUpdateArgumentData: $.ASN1Encoder<
    RequestShadowUpdateArgumentData
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RequestShadowUpdateArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestShadowUpdateArgumentData} The decoded data structure.
 */
export function _decode_RequestShadowUpdateArgumentData(el: _Element) {
    if (!_cached_decoder_for_RequestShadowUpdateArgumentData) {
        _cached_decoder_for_RequestShadowUpdateArgumentData = $._decode_implicit<
            RequestShadowUpdateArgumentData
        >(
            () =>
                function (el: _Element): RequestShadowUpdateArgumentData {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let agreementID!: AgreementID;
                    let lastUpdate: OPTIONAL<Time>;
                    let requestedStrategy!: RequestShadowUpdateArgumentData_requestedStrategy;
                    let securityParameters: OPTIONAL<SecurityParameters>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        agreementID: (_el: _Element): void => {
                            agreementID = _decode_AgreementID(_el);
                        },
                        lastUpdate: (_el: _Element): void => {
                            lastUpdate = _decode_Time(_el);
                        },
                        requestedStrategy: (_el: _Element): void => {
                            requestedStrategy = _decode_RequestShadowUpdateArgumentData_requestedStrategy(
                                _el
                            );
                        },
                        securityParameters: (_el: _Element): void => {
                            securityParameters = _decode_SecurityParameters(
                                _el
                            );
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_RequestShadowUpdateArgumentData,
                        _extension_additions_list_spec_for_RequestShadowUpdateArgumentData,
                        _root_component_type_list_2_spec_for_RequestShadowUpdateArgumentData,
                        (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) RequestShadowUpdateArgumentData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestShadowUpdateArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_RequestShadowUpdateArgumentData(
    value: RequestShadowUpdateArgumentData,
    elGetter: $.ASN1Encoder<RequestShadowUpdateArgumentData>
) {
    if (!_cached_encoder_for_RequestShadowUpdateArgumentData) {
        _cached_encoder_for_RequestShadowUpdateArgumentData = $._encode_implicit(
            _TagClass.context,
            0,
            () =>
                function (
                    value: RequestShadowUpdateArgumentData,
                    elGetter: $.ASN1Encoder<RequestShadowUpdateArgumentData>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_AgreementID(
                                        value.agreementID,
                                        $.BER
                                    ),
                                    /* IF_ABSENT  */ value.lastUpdate ===
                                    undefined
                                        ? undefined
                                        : _encode_Time(value.lastUpdate, $.BER),
                                    /* REQUIRED   */ _encode_RequestShadowUpdateArgumentData_requestedStrategy(
                                        value.requestedStrategy,
                                        $.BER
                                    ),
                                    /* IF_ABSENT  */ value.securityParameters ===
                                    undefined
                                        ? undefined
                                        : _encode_SecurityParameters(
                                              value.securityParameters,
                                              $.BER
                                          ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_RequestShadowUpdateArgumentData(value, elGetter);
}

export type RequestShadowUpdateArgument<> = OPTIONALLY_PROTECTED<
    RequestShadowUpdateArgumentData
>; // DefinedType
let _cached_decoder_for_RequestShadowUpdateArgument: $.ASN1Decoder<
    RequestShadowUpdateArgument
> | null = null;
let _cached_encoder_for_RequestShadowUpdateArgument: $.ASN1Encoder<
    RequestShadowUpdateArgument
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RequestShadowUpdateArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestShadowUpdateArgument} The decoded data structure.
 */
export function _decode_RequestShadowUpdateArgument(el: _Element) {
    if (!_cached_decoder_for_RequestShadowUpdateArgument) {
        _cached_decoder_for_RequestShadowUpdateArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            RequestShadowUpdateArgumentData
        >(_decode_RequestShadowUpdateArgumentData);
    }
    return _cached_decoder_for_RequestShadowUpdateArgument(el);
}
/**
 * @summary Encodes a(n) RequestShadowUpdateArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestShadowUpdateArgument, encoded as an ASN.1 Element.
 */
export function _encode_RequestShadowUpdateArgument(
    value: RequestShadowUpdateArgument,
    elGetter: $.ASN1Encoder<RequestShadowUpdateArgument>
) {
    if (!_cached_encoder_for_RequestShadowUpdateArgument) {
        _cached_encoder_for_RequestShadowUpdateArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            RequestShadowUpdateArgumentData
        >(_encode_RequestShadowUpdateArgumentData);
    }
    return _cached_encoder_for_RequestShadowUpdateArgument(value, elGetter);
}

/**
 * @summary RequestShadowUpdateResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestShadowUpdateResultData ::= [0]  SEQUENCE {
 *   agreementID  AgreementID,
 *   lastUpdate   Time OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }
 * ```
 *
 * @class
 */
export class RequestShadowUpdateResultData {
    constructor(
        /**
         * @summary `agreementID`.
         * @public
         * @readonly
         */
        readonly agreementID: AgreementID,
        /**
         * @summary `lastUpdate`.
         * @public
         * @readonly
         */
        readonly lastUpdate: OPTIONAL<Time>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<
            SecurityParameters
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer: OPTIONAL<
            DistinguishedName
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<
            BOOLEAN
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a RequestShadowUpdateResultData
     * @description
     *
     * This takes an `object` and converts it to a `RequestShadowUpdateResultData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestShadowUpdateResultData`.
     * @returns {RequestShadowUpdateResultData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof RequestShadowUpdateResultData]: RequestShadowUpdateResultData[_K];
            }
        >
    ): RequestShadowUpdateResultData {
        return new RequestShadowUpdateResultData(
            _o.agreementID,
            _o.lastUpdate,
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
        );
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of RequestShadowUpdateResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RequestShadowUpdateResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "agreementID",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "lastUpdate",
        true,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of RequestShadowUpdateResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RequestShadowUpdateResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "performer",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasDereferenced",
        true,
        $.hasTag(_TagClass.context, 28),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "notification",
        true,
        $.hasTag(_TagClass.context, 27),
        undefined,
        undefined
    ),
];
/**
 * @summary The Extension Addition Component Types of RequestShadowUpdateResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RequestShadowUpdateResultData: $.ComponentSpec[] = [];
let _cached_decoder_for_RequestShadowUpdateResultData: $.ASN1Decoder<
    RequestShadowUpdateResultData
> | null = null;
let _cached_encoder_for_RequestShadowUpdateResultData: $.ASN1Encoder<
    RequestShadowUpdateResultData
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RequestShadowUpdateResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestShadowUpdateResultData} The decoded data structure.
 */
export function _decode_RequestShadowUpdateResultData(el: _Element) {
    if (!_cached_decoder_for_RequestShadowUpdateResultData) {
        _cached_decoder_for_RequestShadowUpdateResultData = $._decode_implicit<
            RequestShadowUpdateResultData
        >(
            () =>
                function (el: _Element): RequestShadowUpdateResultData {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let agreementID!: AgreementID;
                    let lastUpdate: OPTIONAL<Time>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    let securityParameters: OPTIONAL<SecurityParameters>;
                    let performer: OPTIONAL<DistinguishedName>;
                    let aliasDereferenced: OPTIONAL<BOOLEAN> =
                        RequestShadowUpdateResultData._default_value_for_aliasDereferenced;
                    let notification: OPTIONAL<Attribute[]>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        agreementID: (_el: _Element): void => {
                            agreementID = _decode_AgreementID(_el);
                        },
                        lastUpdate: (_el: _Element): void => {
                            lastUpdate = _decode_Time(_el);
                        },
                        securityParameters: (_el: _Element): void => {
                            securityParameters = $._decode_explicit<
                                SecurityParameters
                            >(() => _decode_SecurityParameters)(_el);
                        },
                        performer: (_el: _Element): void => {
                            performer = $._decode_explicit<DistinguishedName>(
                                () => _decode_DistinguishedName
                            )(_el);
                        },
                        aliasDereferenced: (_el: _Element): void => {
                            aliasDereferenced = $._decode_explicit<BOOLEAN>(
                                () => $._decodeBoolean
                            )(_el);
                        },
                        notification: (_el: _Element): void => {
                            notification = $._decode_explicit<Attribute[]>(() =>
                                $._decodeSequenceOf<Attribute>(
                                    () => _decode_Attribute
                                )
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_RequestShadowUpdateResultData,
                        _extension_additions_list_spec_for_RequestShadowUpdateResultData,
                        _root_component_type_list_2_spec_for_RequestShadowUpdateResultData,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new RequestShadowUpdateResultData(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ agreementID,
                        lastUpdate,
                        _unrecognizedExtensionsList,
                        securityParameters,
                        performer,
                        aliasDereferenced,
                        notification
                    );
                }
        );
    }
    return _cached_decoder_for_RequestShadowUpdateResultData(el);
}
/**
 * @summary Encodes a(n) RequestShadowUpdateResultData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestShadowUpdateResultData, encoded as an ASN.1 Element.
 */
export function _encode_RequestShadowUpdateResultData(
    value: RequestShadowUpdateResultData,
    elGetter: $.ASN1Encoder<RequestShadowUpdateResultData>
) {
    if (!_cached_encoder_for_RequestShadowUpdateResultData) {
        _cached_encoder_for_RequestShadowUpdateResultData = $._encode_implicit(
            _TagClass.context,
            0,
            () =>
                function (
                    value: RequestShadowUpdateResultData,
                    elGetter: $.ASN1Encoder<RequestShadowUpdateResultData>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_AgreementID(
                                        value.agreementID,
                                        $.BER
                                    ),
                                    /* IF_ABSENT  */ value.lastUpdate ===
                                    undefined
                                        ? undefined
                                        : _encode_Time(value.lastUpdate, $.BER),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : [],
                                [
                                    /* IF_ABSENT  */ value.securityParameters ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              30,
                                              () => _encode_SecurityParameters,
                                              $.BER
                                          )(value.securityParameters, $.BER),
                                    /* IF_ABSENT  */ value.performer ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              29,
                                              () => _encode_DistinguishedName,
                                              $.BER
                                          )(value.performer, $.BER),
                                    /* IF_DEFAULT */ value.aliasDereferenced ===
                                        undefined ||
                                    $.deepEq(
                                        value.aliasDereferenced,
                                        RequestShadowUpdateResultData._default_value_for_aliasDereferenced
                                    )
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              28,
                                              () => $._encodeBoolean,
                                              $.BER
                                          )(value.aliasDereferenced, $.BER),
                                    /* IF_ABSENT  */ value.notification ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              27,
                                              () =>
                                                  $._encodeSequenceOf<
                                                      Attribute
                                                  >(
                                                      () => _encode_Attribute,
                                                      $.BER
                                                  ),
                                              $.BER
                                          )(value.notification, $.BER),
                                ]
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_RequestShadowUpdateResultData(value, elGetter);
}

/**
 * @summary RequestShadowUpdateResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestShadowUpdateResult  ::=  CHOICE {
 *   null         NULL,
 *   information OPTIONALLY-PROTECTED{ RequestShadowUpdateResultData },
 *   ...
 *   }
 * ```
 */
export type RequestShadowUpdateResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED<RequestShadowUpdateResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_RequestShadowUpdateResult: $.ASN1Decoder<
    RequestShadowUpdateResult
> | null = null;
let _cached_encoder_for_RequestShadowUpdateResult: $.ASN1Encoder<
    RequestShadowUpdateResult
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RequestShadowUpdateResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestShadowUpdateResult} The decoded data structure.
 */
export function _decode_RequestShadowUpdateResult(el: _Element) {
    if (!_cached_decoder_for_RequestShadowUpdateResult) {
        _cached_decoder_for_RequestShadowUpdateResult = $._decode_extensible_choice<
            RequestShadowUpdateResult
        >({
            "UNIVERSAL 5": ["null_", $._decodeNull],
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
/**
 * @summary Encodes a(n) RequestShadowUpdateResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestShadowUpdateResult, encoded as an ASN.1 Element.
 */
export function _encode_RequestShadowUpdateResult(
    value: RequestShadowUpdateResult,
    elGetter: $.ASN1Encoder<RequestShadowUpdateResult>
) {
    if (!_cached_encoder_for_RequestShadowUpdateResult) {
        _cached_encoder_for_RequestShadowUpdateResult = $._encode_choice<
            RequestShadowUpdateResult
        >(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED<
                    RequestShadowUpdateResultData
                >(_encode_RequestShadowUpdateResultData),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RequestShadowUpdateResult(value, elGetter);
}

/**
 * @summary requestShadowUpdate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * requestShadowUpdate OPERATION ::= {
 *   ARGUMENT  RequestShadowUpdateArgument
 *   RESULT    RequestShadowUpdateResult
 *   ERRORS    {shadowError}
 *   CODE      id-opcode-requestShadowUpdate
 * }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const requestShadowUpdate: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RequestShadowUpdateArgument,
        "&ResultType": _decode_RequestShadowUpdateResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_RequestShadowUpdateArgument,
        "&ResultType": _encode_RequestShadowUpdateResult,
    },
    "&Errors": undefined,
    "&operationCode": id_opcode_requestShadowUpdate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary UpdateWindow
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UpdateWindow ::= SEQUENCE {
 *   start  Time,
 *   stop   Time,
 *   ...}
 * ```
 *
 * @class
 */
export class UpdateWindow {
    constructor(
        /**
         * @summary `start`.
         * @public
         * @readonly
         */
        readonly start: Time,
        /**
         * @summary `stop`.
         * @public
         * @readonly
         */
        readonly stop: Time,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UpdateWindow
     * @description
     *
     * This takes an `object` and converts it to a `UpdateWindow`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateWindow`.
     * @returns {UpdateWindow}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UpdateWindow]: UpdateWindow[_K] }>
    ): UpdateWindow {
        return new UpdateWindow(
            _o.start,
            _o.stop,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of UpdateWindow
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UpdateWindow: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "start",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "stop",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of UpdateWindow
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UpdateWindow: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of UpdateWindow
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UpdateWindow: $.ComponentSpec[] = [];
let _cached_decoder_for_UpdateWindow: $.ASN1Decoder<UpdateWindow> | null = null;
let _cached_encoder_for_UpdateWindow: $.ASN1Encoder<UpdateWindow> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UpdateWindow
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UpdateWindow} The decoded data structure.
 */
export function _decode_UpdateWindow(el: _Element) {
    if (!_cached_decoder_for_UpdateWindow) {
        _cached_decoder_for_UpdateWindow = function (
            el: _Element
        ): UpdateWindow {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "UpdateWindow contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "start";
            sequence[1].name = "stop";
            let start!: Time;
            let stop!: Time;
            start = _decode_Time(sequence[0]);
            stop = _decode_Time(sequence[1]);
            return new UpdateWindow(start, stop, sequence.slice(2));
        };
    }
    return _cached_decoder_for_UpdateWindow(el);
}
/**
 * @summary Encodes a(n) UpdateWindow into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateWindow, encoded as an ASN.1 Element.
 */
export function _encode_UpdateWindow(
    value: UpdateWindow,
    elGetter: $.ASN1Encoder<UpdateWindow>
) {
    if (!_cached_encoder_for_UpdateWindow) {
        _cached_encoder_for_UpdateWindow = function (
            value: UpdateWindow,
            elGetter: $.ASN1Encoder<UpdateWindow>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Time(value.start, $.BER),
                            /* REQUIRED   */ _encode_Time(value.stop, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UpdateWindow(value, elGetter);
}

export type SDSEType<> = DSEType; // DefinedType
let _cached_decoder_for_SDSEType: $.ASN1Decoder<SDSEType> | null = null;
let _cached_encoder_for_SDSEType: $.ASN1Encoder<SDSEType> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SDSEType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SDSEType} The decoded data structure.
 */
export function _decode_SDSEType(el: _Element) {
    if (!_cached_decoder_for_SDSEType) {
        _cached_decoder_for_SDSEType = _decode_DSEType;
    }
    return _cached_decoder_for_SDSEType(el);
}
/**
 * @summary Encodes a(n) SDSEType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SDSEType, encoded as an ASN.1 Element.
 */
export function _encode_SDSEType(
    value: SDSEType,
    elGetter: $.ASN1Encoder<SDSEType>
) {
    if (!_cached_encoder_for_SDSEType) {
        _cached_encoder_for_SDSEType = _encode_DSEType;
    }
    return _cached_encoder_for_SDSEType(value, elGetter);
}

/**
 * @summary SDSEContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SDSEContent ::= SEQUENCE {
 *   sDSEType          SDSEType,
 *   subComplete       [0]  BOOLEAN DEFAULT FALSE,
 *   attComplete       [1]  BOOLEAN OPTIONAL,
 *   attributes        SET OF Attribute{{SupportedAttributes}},
 *   attValIncomplete  SET OF AttributeType DEFAULT {},
 *   ...}
 * ```
 *
 * @class
 */
export class SDSEContent {
    constructor(
        /**
         * @summary `sDSEType`.
         * @public
         * @readonly
         */
        readonly sDSEType: SDSEType,
        /**
         * @summary `subComplete`.
         * @public
         * @readonly
         */
        readonly subComplete: OPTIONAL<BOOLEAN>,
        /**
         * @summary `attComplete`.
         * @public
         * @readonly
         */
        readonly attComplete: OPTIONAL<BOOLEAN>,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: Attribute[],
        /**
         * @summary `attValIncomplete`.
         * @public
         * @readonly
         */
        readonly attValIncomplete: OPTIONAL<AttributeType[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SDSEContent
     * @description
     *
     * This takes an `object` and converts it to a `SDSEContent`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SDSEContent`.
     * @returns {SDSEContent}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SDSEContent]: SDSEContent[_K] }>
    ): SDSEContent {
        return new SDSEContent(
            _o.sDSEType,
            _o.subComplete,
            _o.attComplete,
            _o.attributes,
            _o.attValIncomplete,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `subComplete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_subComplete() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `attValIncomplete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_attValIncomplete() {
        return [];
    }
}
/**
 * @summary The Leading Root Component Types of SDSEContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SDSEContent: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "sDSEType",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subComplete",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attComplete",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributes",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attValIncomplete",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SDSEContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SDSEContent: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SDSEContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SDSEContent: $.ComponentSpec[] = [];
let _cached_decoder_for_SDSEContent: $.ASN1Decoder<SDSEContent> | null = null;
let _cached_encoder_for_SDSEContent: $.ASN1Encoder<SDSEContent> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SDSEContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SDSEContent} The decoded data structure.
 */
export function _decode_SDSEContent(el: _Element) {
    if (!_cached_decoder_for_SDSEContent) {
        _cached_decoder_for_SDSEContent = function (el: _Element): SDSEContent {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let sDSEType!: SDSEType;
            let subComplete: OPTIONAL<BOOLEAN> =
                SDSEContent._default_value_for_subComplete;
            let attComplete: OPTIONAL<BOOLEAN>;
            let attributes!: Attribute[];
            let attValIncomplete: OPTIONAL<AttributeType[]> =
                SDSEContent._default_value_for_attValIncomplete;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                sDSEType: (_el: _Element): void => {
                    sDSEType = _decode_SDSEType(_el);
                },
                subComplete: (_el: _Element): void => {
                    subComplete = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                attComplete: (_el: _Element): void => {
                    attComplete = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                attributes: (_el: _Element): void => {
                    attributes = $._decodeSetOf<Attribute>(
                        () => _decode_Attribute
                    )(_el);
                },
                attValIncomplete: (_el: _Element): void => {
                    attValIncomplete = $._decodeSetOf<AttributeType>(
                        () => _decode_AttributeType
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SDSEContent,
                _extension_additions_list_spec_for_SDSEContent,
                _root_component_type_list_2_spec_for_SDSEContent,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) SDSEContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SDSEContent, encoded as an ASN.1 Element.
 */
export function _encode_SDSEContent(
    value: SDSEContent,
    elGetter: $.ASN1Encoder<SDSEContent>
) {
    if (!_cached_encoder_for_SDSEContent) {
        _cached_encoder_for_SDSEContent = function (
            value: SDSEContent,
            elGetter: $.ASN1Encoder<SDSEContent>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_SDSEType(
                                value.sDSEType,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.subComplete === undefined ||
                            $.deepEq(
                                value.subComplete,
                                SDSEContent._default_value_for_subComplete
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.subComplete, $.BER),
                            /* IF_ABSENT  */ value.attComplete === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.attComplete, $.BER),
                            /* REQUIRED   */ $._encodeSetOf<Attribute>(
                                () => _encode_Attribute,
                                $.BER
                            )(value.attributes, $.BER),
                            /* IF_DEFAULT */ value.attValIncomplete ===
                                undefined ||
                            $.deepEq(
                                value.attValIncomplete,
                                SDSEContent._default_value_for_attValIncomplete
                            )
                                ? undefined
                                : $._encodeSetOf<AttributeType>(
                                      () => _encode_AttributeType,
                                      $.BER
                                  )(value.attValIncomplete, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SDSEContent(value, elGetter);
}

/* TODO: CHECK_RECURSIVE_DEFINITION */
/**
 * @summary Subtree
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Subtree ::= SEQUENCE {
 *   rdn  RelativeDistinguishedName,
 *   COMPONENTS OF TotalRefresh,
 *   ...}
 * ```
 *
 * @class
 */
export class Subtree {
    constructor(
        /**
         * @summary `rdn`.
         * @public
         * @readonly
         */
        readonly rdn: RelativeDistinguishedName,
        /**
         * @summary `sDSE`.
         * @public
         * @readonly
         */
        readonly sDSE: OPTIONAL<SDSEContent> /* REPLICATED_COMPONENT */,
        /**
         * @summary `subtree`.
         * @public
         * @readonly
         */
        readonly subtree: OPTIONAL<Subtree[]> /* REPLICATED_COMPONENT */,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Subtree
     * @description
     *
     * This takes an `object` and converts it to a `Subtree`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Subtree`.
     * @returns {Subtree}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Subtree]: Subtree[_K] }>
    ): Subtree {
        return new Subtree(
            _o.rdn,
            _o.sDSE,
            _o.subtree,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of Subtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Subtree: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "rdn",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sDSE",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subtree",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Subtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Subtree: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Subtree
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Subtree: $.ComponentSpec[] = [];
let _cached_decoder_for_Subtree: $.ASN1Decoder<Subtree> | null = null;
let _cached_encoder_for_Subtree: $.ASN1Encoder<Subtree> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Subtree
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Subtree} The decoded data structure.
 */
export function _decode_Subtree(el: _Element) {
    if (!_cached_decoder_for_Subtree) {
        _cached_decoder_for_Subtree = function (el: _Element): Subtree {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let rdn!: RelativeDistinguishedName;
            let sDSE: OPTIONAL<SDSEContent>;
            let subtree: OPTIONAL<Subtree[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                rdn: (_el: _Element): void => {
                    rdn = _decode_RelativeDistinguishedName(_el);
                },
                sDSE: (_el: _Element): void => {
                    sDSE = _decode_SDSEContent(_el);
                },
                subtree: (_el: _Element): void => {
                    subtree = $._decodeSetOf<Subtree>(() => _decode_Subtree)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Subtree,
                _extension_additions_list_spec_for_Subtree,
                _root_component_type_list_2_spec_for_Subtree,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) Subtree into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Subtree, encoded as an ASN.1 Element.
 */
export function _encode_Subtree(
    value: Subtree,
    elGetter: $.ASN1Encoder<Subtree>
) {
    if (!_cached_encoder_for_Subtree) {
        _cached_encoder_for_Subtree = function (
            value: Subtree,
            elGetter: $.ASN1Encoder<Subtree>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RelativeDistinguishedName(
                                value.rdn,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.sDSE === undefined
                                ? undefined
                                : _encode_SDSEContent(value.sDSE, $.BER),
                            /* IF_ABSENT  */ value.subtree === undefined
                                ? undefined
                                : $._encodeSetOf<Subtree>(
                                      () => _encode_Subtree,
                                      $.BER
                                  )(value.subtree, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Subtree(value, elGetter);
}

/**
 * @summary TotalRefresh
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TotalRefresh ::= SEQUENCE {
 *   sDSE     SDSEContent OPTIONAL,
 *   subtree  SET SIZE (1..MAX) OF Subtree OPTIONAL,
 *   ...}
 * ```
 *
 * @class
 */
export class TotalRefresh {
    constructor(
        /**
         * @summary `sDSE`.
         * @public
         * @readonly
         */
        readonly sDSE: OPTIONAL<SDSEContent>,
        /**
         * @summary `subtree`.
         * @public
         * @readonly
         */
        readonly subtree: OPTIONAL<Subtree[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TotalRefresh
     * @description
     *
     * This takes an `object` and converts it to a `TotalRefresh`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TotalRefresh`.
     * @returns {TotalRefresh}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TotalRefresh]: TotalRefresh[_K] }>
    ): TotalRefresh {
        return new TotalRefresh(
            _o.sDSE,
            _o.subtree,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of TotalRefresh
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TotalRefresh: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "sDSE",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subtree",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of TotalRefresh
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TotalRefresh: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of TotalRefresh
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TotalRefresh: $.ComponentSpec[] = [];
let _cached_decoder_for_TotalRefresh: $.ASN1Decoder<TotalRefresh> | null = null;
let _cached_encoder_for_TotalRefresh: $.ASN1Encoder<TotalRefresh> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) TotalRefresh
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TotalRefresh} The decoded data structure.
 */
export function _decode_TotalRefresh(el: _Element) {
    if (!_cached_decoder_for_TotalRefresh) {
        _cached_decoder_for_TotalRefresh = function (
            el: _Element
        ): TotalRefresh {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let sDSE: OPTIONAL<SDSEContent>;
            let subtree: OPTIONAL<Subtree[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                sDSE: (_el: _Element): void => {
                    sDSE = _decode_SDSEContent(_el);
                },
                subtree: (_el: _Element): void => {
                    subtree = $._decodeSetOf<Subtree>(() => _decode_Subtree)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TotalRefresh,
                _extension_additions_list_spec_for_TotalRefresh,
                _root_component_type_list_2_spec_for_TotalRefresh,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) TotalRefresh into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TotalRefresh, encoded as an ASN.1 Element.
 */
export function _encode_TotalRefresh(
    value: TotalRefresh,
    elGetter: $.ASN1Encoder<TotalRefresh>
) {
    if (!_cached_encoder_for_TotalRefresh) {
        _cached_encoder_for_TotalRefresh = function (
            value: TotalRefresh,
            elGetter: $.ASN1Encoder<TotalRefresh>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.sDSE === undefined
                                ? undefined
                                : _encode_SDSEContent(value.sDSE, $.BER),
                            /* IF_ABSENT  */ value.subtree === undefined
                                ? undefined
                                : $._encodeSetOf<Subtree>(
                                      () => _encode_Subtree,
                                      $.BER
                                  )(value.subtree, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TotalRefresh(value, elGetter);
}

/**
 * @summary ContentChange_rename
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentChange-rename ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ContentChange_rename =
    | { newRDN: RelativeDistinguishedName } /* CHOICE_ALT_ROOT */
    | { newDN: DistinguishedName } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ContentChange_rename: $.ASN1Decoder<
    ContentChange_rename
> | null = null;
let _cached_encoder_for_ContentChange_rename: $.ASN1Encoder<
    ContentChange_rename
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ContentChange_rename
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentChange_rename} The decoded data structure.
 */
export function _decode_ContentChange_rename(el: _Element) {
    if (!_cached_decoder_for_ContentChange_rename) {
        _cached_decoder_for_ContentChange_rename = $._decode_inextensible_choice<
            ContentChange_rename
        >({
            "UNIVERSAL 17": ["newRDN", _decode_RelativeDistinguishedName],
            "UNIVERSAL 16": ["newDN", _decode_DistinguishedName],
        });
    }
    return _cached_decoder_for_ContentChange_rename(el);
}
/**
 * @summary Encodes a(n) ContentChange_rename into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentChange_rename, encoded as an ASN.1 Element.
 */
export function _encode_ContentChange_rename(
    value: ContentChange_rename,
    elGetter: $.ASN1Encoder<ContentChange_rename>
) {
    if (!_cached_encoder_for_ContentChange_rename) {
        _cached_encoder_for_ContentChange_rename = $._encode_choice<
            ContentChange_rename
        >(
            {
                newRDN: _encode_RelativeDistinguishedName,
                newDN: _encode_DistinguishedName,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ContentChange_rename(value, elGetter);
}

/**
 * @summary ContentChange_attributeChanges
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentChange-attributeChanges ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ContentChange_attributeChanges =
    | { replace: Attribute[] } /* CHOICE_ALT_ROOT */
    | { changes: EntryModification[] } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ContentChange_attributeChanges: $.ASN1Decoder<
    ContentChange_attributeChanges
> | null = null;
let _cached_encoder_for_ContentChange_attributeChanges: $.ASN1Encoder<
    ContentChange_attributeChanges
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ContentChange_attributeChanges
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentChange_attributeChanges} The decoded data structure.
 */
export function _decode_ContentChange_attributeChanges(el: _Element) {
    if (!_cached_decoder_for_ContentChange_attributeChanges) {
        _cached_decoder_for_ContentChange_attributeChanges = $._decode_inextensible_choice<
            ContentChange_attributeChanges
        >({
            "CONTEXT 0": [
                "replace",
                $._decode_implicit<Attribute[]>(() =>
                    $._decodeSetOf<Attribute>(() => _decode_Attribute)
                ),
            ],
            "CONTEXT 1": [
                "changes",
                $._decode_implicit<EntryModification[]>(() =>
                    $._decodeSequenceOf<EntryModification>(
                        () => _decode_EntryModification
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_ContentChange_attributeChanges(el);
}
/**
 * @summary Encodes a(n) ContentChange_attributeChanges into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentChange_attributeChanges, encoded as an ASN.1 Element.
 */
export function _encode_ContentChange_attributeChanges(
    value: ContentChange_attributeChanges,
    elGetter: $.ASN1Encoder<ContentChange_attributeChanges>
) {
    if (!_cached_encoder_for_ContentChange_attributeChanges) {
        _cached_encoder_for_ContentChange_attributeChanges = $._encode_choice<
            ContentChange_attributeChanges
        >(
            {
                replace: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () =>
                        $._encodeSetOf<Attribute>(
                            () => _encode_Attribute,
                            $.BER
                        ),
                    $.BER
                ),
                changes: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<EntryModification>(
                            () => _encode_EntryModification,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ContentChange_attributeChanges(value, elGetter);
}

/**
 * @summary ContentChange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentChange ::= SEQUENCE {
 *   rename
 *     CHOICE {newRDN  RelativeDistinguishedName,
 *             newDN   DistinguishedName} OPTIONAL,
 *   attributeChanges
 *     CHOICE {replace  [0]  SET SIZE (1..MAX) OF Attribute{{SupportedAttributes}},
 *             changes  [1]  SEQUENCE SIZE (1..MAX) OF EntryModification} OPTIONAL,
 *   sDSEType          SDSEType,
 *   subComplete       [2]  BOOLEAN DEFAULT FALSE,
 *   attComplete       [3]  BOOLEAN OPTIONAL,
 *   attValIncomplete  SET OF AttributeType DEFAULT {},
 *   ... }
 * ```
 *
 * @class
 */
export class ContentChange {
    constructor(
        /**
         * @summary `rename`.
         * @public
         * @readonly
         */
        readonly rename: OPTIONAL<ContentChange_rename>,
        /**
         * @summary `attributeChanges`.
         * @public
         * @readonly
         */
        readonly attributeChanges: OPTIONAL<ContentChange_attributeChanges>,
        /**
         * @summary `sDSEType`.
         * @public
         * @readonly
         */
        readonly sDSEType: SDSEType,
        /**
         * @summary `subComplete`.
         * @public
         * @readonly
         */
        readonly subComplete: OPTIONAL<BOOLEAN>,
        /**
         * @summary `attComplete`.
         * @public
         * @readonly
         */
        readonly attComplete: OPTIONAL<BOOLEAN>,
        /**
         * @summary `attValIncomplete`.
         * @public
         * @readonly
         */
        readonly attValIncomplete: OPTIONAL<AttributeType[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ContentChange
     * @description
     *
     * This takes an `object` and converts it to a `ContentChange`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContentChange`.
     * @returns {ContentChange}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ContentChange]: ContentChange[_K] }>
    ): ContentChange {
        return new ContentChange(
            _o.rename,
            _o.attributeChanges,
            _o.sDSEType,
            _o.subComplete,
            _o.attComplete,
            _o.attValIncomplete,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `subComplete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_subComplete() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `attValIncomplete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_attValIncomplete() {
        return [];
    }
}
/**
 * @summary The Leading Root Component Types of ContentChange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ContentChange: $.ComponentSpec[] = [
    new $.ComponentSpec("rename", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "attributeChanges",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "sDSEType",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "subComplete",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attComplete",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attValIncomplete",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ContentChange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ContentChange: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ContentChange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ContentChange: $.ComponentSpec[] = [];
let _cached_decoder_for_ContentChange: $.ASN1Decoder<
    ContentChange
> | null = null;
let _cached_encoder_for_ContentChange: $.ASN1Encoder<
    ContentChange
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ContentChange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentChange} The decoded data structure.
 */
export function _decode_ContentChange(el: _Element) {
    if (!_cached_decoder_for_ContentChange) {
        _cached_decoder_for_ContentChange = function (
            el: _Element
        ): ContentChange {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let rename: OPTIONAL<ContentChange_rename>;
            let attributeChanges: OPTIONAL<ContentChange_attributeChanges>;
            let sDSEType!: SDSEType;
            let subComplete: OPTIONAL<BOOLEAN> =
                ContentChange._default_value_for_subComplete;
            let attComplete: OPTIONAL<BOOLEAN>;
            let attValIncomplete: OPTIONAL<AttributeType[]> =
                ContentChange._default_value_for_attValIncomplete;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                rename: (_el: _Element): void => {
                    rename = _decode_ContentChange_rename(_el);
                },
                attributeChanges: (_el: _Element): void => {
                    attributeChanges = _decode_ContentChange_attributeChanges(
                        _el
                    );
                },
                sDSEType: (_el: _Element): void => {
                    sDSEType = _decode_SDSEType(_el);
                },
                subComplete: (_el: _Element): void => {
                    subComplete = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                attComplete: (_el: _Element): void => {
                    attComplete = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                attValIncomplete: (_el: _Element): void => {
                    attValIncomplete = $._decodeSetOf<AttributeType>(
                        () => _decode_AttributeType
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ContentChange,
                _extension_additions_list_spec_for_ContentChange,
                _root_component_type_list_2_spec_for_ContentChange,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) ContentChange into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentChange, encoded as an ASN.1 Element.
 */
export function _encode_ContentChange(
    value: ContentChange,
    elGetter: $.ASN1Encoder<ContentChange>
) {
    if (!_cached_encoder_for_ContentChange) {
        _cached_encoder_for_ContentChange = function (
            value: ContentChange,
            elGetter: $.ASN1Encoder<ContentChange>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.rename === undefined
                                ? undefined
                                : _encode_ContentChange_rename(
                                      value.rename,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.attributeChanges ===
                            undefined
                                ? undefined
                                : _encode_ContentChange_attributeChanges(
                                      value.attributeChanges,
                                      $.BER
                                  ),
                            /* REQUIRED   */ _encode_SDSEType(
                                value.sDSEType,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.subComplete === undefined ||
                            $.deepEq(
                                value.subComplete,
                                ContentChange._default_value_for_subComplete
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.subComplete, $.BER),
                            /* IF_ABSENT  */ value.attComplete === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.attComplete, $.BER),
                            /* IF_DEFAULT */ value.attValIncomplete ===
                                undefined ||
                            $.deepEq(
                                value.attValIncomplete,
                                ContentChange._default_value_for_attValIncomplete
                            )
                                ? undefined
                                : $._encodeSetOf<AttributeType>(
                                      () => _encode_AttributeType,
                                      $.BER
                                  )(value.attValIncomplete, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ContentChange(value, elGetter);
}

/**
 * @summary IncrementalStepRefresh_sDSEChanges
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IncrementalStepRefresh-sDSEChanges ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type IncrementalStepRefresh_sDSEChanges =
    | { add: SDSEContent } /* CHOICE_ALT_ROOT */
    | { remove: NULL } /* CHOICE_ALT_ROOT */
    | { modify: ContentChange } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_IncrementalStepRefresh_sDSEChanges: $.ASN1Decoder<
    IncrementalStepRefresh_sDSEChanges
> | null = null;
let _cached_encoder_for_IncrementalStepRefresh_sDSEChanges: $.ASN1Encoder<
    IncrementalStepRefresh_sDSEChanges
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IncrementalStepRefresh_sDSEChanges
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IncrementalStepRefresh_sDSEChanges} The decoded data structure.
 */
export function _decode_IncrementalStepRefresh_sDSEChanges(el: _Element) {
    if (!_cached_decoder_for_IncrementalStepRefresh_sDSEChanges) {
        _cached_decoder_for_IncrementalStepRefresh_sDSEChanges = $._decode_extensible_choice<
            IncrementalStepRefresh_sDSEChanges
        >({
            "CONTEXT 0": [
                "add",
                $._decode_implicit<SDSEContent>(() => _decode_SDSEContent),
            ],
            "UNIVERSAL 5": ["remove", $._decodeNull],
            "CONTEXT 1": [
                "modify",
                $._decode_implicit<ContentChange>(() => _decode_ContentChange),
            ],
        });
    }
    return _cached_decoder_for_IncrementalStepRefresh_sDSEChanges(el);
}
/**
 * @summary Encodes a(n) IncrementalStepRefresh_sDSEChanges into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IncrementalStepRefresh_sDSEChanges, encoded as an ASN.1 Element.
 */
export function _encode_IncrementalStepRefresh_sDSEChanges(
    value: IncrementalStepRefresh_sDSEChanges,
    elGetter: $.ASN1Encoder<IncrementalStepRefresh_sDSEChanges>
) {
    if (!_cached_encoder_for_IncrementalStepRefresh_sDSEChanges) {
        _cached_encoder_for_IncrementalStepRefresh_sDSEChanges = $._encode_choice<
            IncrementalStepRefresh_sDSEChanges
        >(
            {
                add: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_SDSEContent,
                    $.BER
                ),
                remove: $._encodeNull,
                modify: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_ContentChange,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_IncrementalStepRefresh_sDSEChanges(
        value,
        elGetter
    );
}

/**
 * @summary SubordinateChanges
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubordinateChanges ::= SEQUENCE {
 *   subordinate  RelativeDistinguishedName,
 *   changes      IncrementalStepRefresh,
 *   ... }
 * ```
 *
 * @class
 */
export class SubordinateChanges {
    constructor(
        /**
         * @summary `subordinate`.
         * @public
         * @readonly
         */
        readonly subordinate: RelativeDistinguishedName,
        /**
         * @summary `changes`.
         * @public
         * @readonly
         */
        readonly changes: IncrementalStepRefresh,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SubordinateChanges
     * @description
     *
     * This takes an `object` and converts it to a `SubordinateChanges`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubordinateChanges`.
     * @returns {SubordinateChanges}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SubordinateChanges]: SubordinateChanges[_K] }
        >
    ): SubordinateChanges {
        return new SubordinateChanges(
            _o.subordinate,
            _o.changes,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of SubordinateChanges
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubordinateChanges: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "subordinate",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "changes",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SubordinateChanges
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubordinateChanges: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SubordinateChanges
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubordinateChanges: $.ComponentSpec[] = [];
let _cached_decoder_for_SubordinateChanges: $.ASN1Decoder<
    SubordinateChanges
> | null = null;
let _cached_encoder_for_SubordinateChanges: $.ASN1Encoder<
    SubordinateChanges
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SubordinateChanges
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubordinateChanges} The decoded data structure.
 */
export function _decode_SubordinateChanges(el: _Element) {
    if (!_cached_decoder_for_SubordinateChanges) {
        _cached_decoder_for_SubordinateChanges = function (
            el: _Element
        ): SubordinateChanges {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SubordinateChanges contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "subordinate";
            sequence[1].name = "changes";
            let subordinate!: RelativeDistinguishedName;
            let changes!: IncrementalStepRefresh;
            subordinate = _decode_RelativeDistinguishedName(sequence[0]);
            changes = _decode_IncrementalStepRefresh(sequence[1]);
            return new SubordinateChanges(
                subordinate,
                changes,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_SubordinateChanges(el);
}
/**
 * @summary Encodes a(n) SubordinateChanges into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubordinateChanges, encoded as an ASN.1 Element.
 */
export function _encode_SubordinateChanges(
    value: SubordinateChanges,
    elGetter: $.ASN1Encoder<SubordinateChanges>
) {
    if (!_cached_encoder_for_SubordinateChanges) {
        _cached_encoder_for_SubordinateChanges = function (
            value: SubordinateChanges,
            elGetter: $.ASN1Encoder<SubordinateChanges>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RelativeDistinguishedName(
                                value.subordinate,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_IncrementalStepRefresh(
                                value.changes,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SubordinateChanges(value, elGetter);
}

/**
 * @summary IncrementalStepRefresh
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IncrementalStepRefresh ::= SEQUENCE {
 *   sDSEChanges
 *     CHOICE {add     [0]  SDSEContent,
 *             remove  NULL,
 *             modify  [1]  ContentChange,
 *             ...} OPTIONAL,
 *   subordinateUpdates  SEQUENCE SIZE (1..MAX) OF SubordinateChanges OPTIONAL }
 * ```
 *
 * @class
 */
export class IncrementalStepRefresh {
    constructor(
        /**
         * @summary `sDSEChanges`.
         * @public
         * @readonly
         */
        readonly sDSEChanges: OPTIONAL<IncrementalStepRefresh_sDSEChanges>,
        /**
         * @summary `subordinateUpdates`.
         * @public
         * @readonly
         */
        readonly subordinateUpdates: OPTIONAL<SubordinateChanges[]>
    ) {}

    /**
     * @summary Restructures an object into a IncrementalStepRefresh
     * @description
     *
     * This takes an `object` and converts it to a `IncrementalStepRefresh`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IncrementalStepRefresh`.
     * @returns {IncrementalStepRefresh}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof IncrementalStepRefresh]: IncrementalStepRefresh[_K] }
        >
    ): IncrementalStepRefresh {
        return new IncrementalStepRefresh(
            _o.sDSEChanges,
            _o.subordinateUpdates
        );
    }
}
/**
 * @summary The Leading Root Component Types of IncrementalStepRefresh
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IncrementalStepRefresh: $.ComponentSpec[] = [
    new $.ComponentSpec("sDSEChanges", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "subordinateUpdates",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of IncrementalStepRefresh
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IncrementalStepRefresh: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of IncrementalStepRefresh
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IncrementalStepRefresh: $.ComponentSpec[] = [];
let _cached_decoder_for_IncrementalStepRefresh: $.ASN1Decoder<
    IncrementalStepRefresh
> | null = null;
let _cached_encoder_for_IncrementalStepRefresh: $.ASN1Encoder<
    IncrementalStepRefresh
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IncrementalStepRefresh
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IncrementalStepRefresh} The decoded data structure.
 */
export function _decode_IncrementalStepRefresh(el: _Element) {
    if (!_cached_decoder_for_IncrementalStepRefresh) {
        _cached_decoder_for_IncrementalStepRefresh = function (
            el: _Element
        ): IncrementalStepRefresh {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let sDSEChanges: OPTIONAL<IncrementalStepRefresh_sDSEChanges>;
            let subordinateUpdates: OPTIONAL<SubordinateChanges[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                sDSEChanges: (_el: _Element): void => {
                    sDSEChanges = _decode_IncrementalStepRefresh_sDSEChanges(
                        _el
                    );
                },
                subordinateUpdates: (_el: _Element): void => {
                    subordinateUpdates = $._decodeSequenceOf<
                        SubordinateChanges
                    >(() => _decode_SubordinateChanges)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
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
/**
 * @summary Encodes a(n) IncrementalStepRefresh into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IncrementalStepRefresh, encoded as an ASN.1 Element.
 */
export function _encode_IncrementalStepRefresh(
    value: IncrementalStepRefresh,
    elGetter: $.ASN1Encoder<IncrementalStepRefresh>
) {
    if (!_cached_encoder_for_IncrementalStepRefresh) {
        _cached_encoder_for_IncrementalStepRefresh = function (
            value: IncrementalStepRefresh,
            elGetter: $.ASN1Encoder<IncrementalStepRefresh>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.sDSEChanges === undefined
                            ? undefined
                            : _encode_IncrementalStepRefresh_sDSEChanges(
                                  value.sDSEChanges,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.subordinateUpdates === undefined
                            ? undefined
                            : $._encodeSequenceOf<SubordinateChanges>(
                                  () => _encode_SubordinateChanges,
                                  $.BER
                              )(value.subordinateUpdates, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IncrementalStepRefresh(value, elGetter);
}

export type IncrementalRefresh<> = IncrementalStepRefresh[]; // SequenceOfType
let _cached_decoder_for_IncrementalRefresh: $.ASN1Decoder<
    IncrementalRefresh
> | null = null;
let _cached_encoder_for_IncrementalRefresh: $.ASN1Encoder<
    IncrementalRefresh
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) IncrementalRefresh
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IncrementalRefresh} The decoded data structure.
 */
export function _decode_IncrementalRefresh(el: _Element) {
    if (!_cached_decoder_for_IncrementalRefresh) {
        _cached_decoder_for_IncrementalRefresh = $._decodeSequenceOf<
            IncrementalStepRefresh
        >(() => _decode_IncrementalStepRefresh);
    }
    return _cached_decoder_for_IncrementalRefresh(el);
}
/**
 * @summary Encodes a(n) IncrementalRefresh into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IncrementalRefresh, encoded as an ASN.1 Element.
 */
export function _encode_IncrementalRefresh(
    value: IncrementalRefresh,
    elGetter: $.ASN1Encoder<IncrementalRefresh>
) {
    if (!_cached_encoder_for_IncrementalRefresh) {
        _cached_encoder_for_IncrementalRefresh = $._encodeSequenceOf<
            IncrementalStepRefresh
        >(() => _encode_IncrementalStepRefresh, $.BER);
    }
    return _cached_encoder_for_IncrementalRefresh(value, elGetter);
}

/**
 * @summary RefreshInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RefreshInformation  ::=  CHOICE {
 *   noRefresh      NULL,
 *   total          [0]  TotalRefresh,
 *   incremental    [1]  IncrementalRefresh,
 *   otherStrategy       EXTERNAL,
 *   ...}
 * ```
 */
export type RefreshInformation =
    | { noRefresh: NULL } /* CHOICE_ALT_ROOT */
    | { total: TotalRefresh } /* CHOICE_ALT_ROOT */
    | { incremental: IncrementalRefresh } /* CHOICE_ALT_ROOT */
    | { otherStrategy: EXTERNAL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_RefreshInformation: $.ASN1Decoder<
    RefreshInformation
> | null = null;
let _cached_encoder_for_RefreshInformation: $.ASN1Encoder<
    RefreshInformation
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RefreshInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RefreshInformation} The decoded data structure.
 */
export function _decode_RefreshInformation(el: _Element) {
    if (!_cached_decoder_for_RefreshInformation) {
        _cached_decoder_for_RefreshInformation = $._decode_extensible_choice<
            RefreshInformation
        >({
            "UNIVERSAL 5": ["noRefresh", $._decodeNull],
            "CONTEXT 0": [
                "total",
                $._decode_implicit<TotalRefresh>(() => _decode_TotalRefresh),
            ],
            "CONTEXT 1": [
                "incremental",
                $._decode_implicit<IncrementalRefresh>(
                    () => _decode_IncrementalRefresh
                ),
            ],
            "UNIVERSAL 8": ["otherStrategy", $._decodeExternal],
        });
    }
    return _cached_decoder_for_RefreshInformation(el);
}
/**
 * @summary Encodes a(n) RefreshInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RefreshInformation, encoded as an ASN.1 Element.
 */
export function _encode_RefreshInformation(
    value: RefreshInformation,
    elGetter: $.ASN1Encoder<RefreshInformation>
) {
    if (!_cached_encoder_for_RefreshInformation) {
        _cached_encoder_for_RefreshInformation = $._encode_choice<
            RefreshInformation
        >(
            {
                noRefresh: $._encodeNull,
                total: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_TotalRefresh,
                    $.BER
                ),
                incremental: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_IncrementalRefresh,
                    $.BER
                ),
                otherStrategy: $._encodeExternal,
            },
            $.BER
        );
    }
    return _cached_encoder_for_RefreshInformation(value, elGetter);
}

/**
 * @summary UpdateShadowArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UpdateShadowArgumentData ::= [0]  SEQUENCE {
 *   agreementID         AgreementID,
 *   updateTime          Time,
 *   updateWindow        UpdateWindow OPTIONAL,
 *   updatedInfo         RefreshInformation,
 *   securityParameters  SecurityParameters OPTIONAL,
 *   ...}
 * ```
 *
 * @class
 */
export class UpdateShadowArgumentData {
    constructor(
        /**
         * @summary `agreementID`.
         * @public
         * @readonly
         */
        readonly agreementID: AgreementID,
        /**
         * @summary `updateTime`.
         * @public
         * @readonly
         */
        readonly updateTime: Time,
        /**
         * @summary `updateWindow`.
         * @public
         * @readonly
         */
        readonly updateWindow: OPTIONAL<UpdateWindow>,
        /**
         * @summary `updatedInfo`.
         * @public
         * @readonly
         */
        readonly updatedInfo: RefreshInformation,
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<SecurityParameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UpdateShadowArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `UpdateShadowArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateShadowArgumentData`.
     * @returns {UpdateShadowArgumentData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof UpdateShadowArgumentData]: UpdateShadowArgumentData[_K];
            }
        >
    ): UpdateShadowArgumentData {
        return new UpdateShadowArgumentData(
            _o.agreementID,
            _o.updateTime,
            _o.updateWindow,
            _o.updatedInfo,
            _o.securityParameters,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of UpdateShadowArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UpdateShadowArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "agreementID",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "updateTime",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "updateWindow",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "updatedInfo",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of UpdateShadowArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UpdateShadowArgumentData: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of UpdateShadowArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UpdateShadowArgumentData: $.ComponentSpec[] = [];
let _cached_decoder_for_UpdateShadowArgumentData: $.ASN1Decoder<
    UpdateShadowArgumentData
> | null = null;
let _cached_encoder_for_UpdateShadowArgumentData: $.ASN1Encoder<
    UpdateShadowArgumentData
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UpdateShadowArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UpdateShadowArgumentData} The decoded data structure.
 */
export function _decode_UpdateShadowArgumentData(el: _Element) {
    if (!_cached_decoder_for_UpdateShadowArgumentData) {
        _cached_decoder_for_UpdateShadowArgumentData = $._decode_implicit<
            UpdateShadowArgumentData
        >(
            () =>
                function (el: _Element): UpdateShadowArgumentData {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let agreementID!: AgreementID;
                    let updateTime!: Time;
                    let updateWindow: OPTIONAL<UpdateWindow>;
                    let updatedInfo!: RefreshInformation;
                    let securityParameters: OPTIONAL<SecurityParameters>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        agreementID: (_el: _Element): void => {
                            agreementID = _decode_AgreementID(_el);
                        },
                        updateTime: (_el: _Element): void => {
                            updateTime = _decode_Time(_el);
                        },
                        updateWindow: (_el: _Element): void => {
                            updateWindow = _decode_UpdateWindow(_el);
                        },
                        updatedInfo: (_el: _Element): void => {
                            updatedInfo = _decode_RefreshInformation(_el);
                        },
                        securityParameters: (_el: _Element): void => {
                            securityParameters = _decode_SecurityParameters(
                                _el
                            );
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_UpdateShadowArgumentData,
                        _extension_additions_list_spec_for_UpdateShadowArgumentData,
                        _root_component_type_list_2_spec_for_UpdateShadowArgumentData,
                        (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) UpdateShadowArgumentData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateShadowArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_UpdateShadowArgumentData(
    value: UpdateShadowArgumentData,
    elGetter: $.ASN1Encoder<UpdateShadowArgumentData>
) {
    if (!_cached_encoder_for_UpdateShadowArgumentData) {
        _cached_encoder_for_UpdateShadowArgumentData = $._encode_implicit(
            _TagClass.context,
            0,
            () =>
                function (
                    value: UpdateShadowArgumentData,
                    elGetter: $.ASN1Encoder<UpdateShadowArgumentData>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_AgreementID(
                                        value.agreementID,
                                        $.BER
                                    ),
                                    /* REQUIRED   */ _encode_Time(
                                        value.updateTime,
                                        $.BER
                                    ),
                                    /* IF_ABSENT  */ value.updateWindow ===
                                    undefined
                                        ? undefined
                                        : _encode_UpdateWindow(
                                              value.updateWindow,
                                              $.BER
                                          ),
                                    /* REQUIRED   */ _encode_RefreshInformation(
                                        value.updatedInfo,
                                        $.BER
                                    ),
                                    /* IF_ABSENT  */ value.securityParameters ===
                                    undefined
                                        ? undefined
                                        : _encode_SecurityParameters(
                                              value.securityParameters,
                                              $.BER
                                          ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_UpdateShadowArgumentData(value, elGetter);
}

export type UpdateShadowArgument<> = OPTIONALLY_PROTECTED<
    UpdateShadowArgumentData
>; // DefinedType
let _cached_decoder_for_UpdateShadowArgument: $.ASN1Decoder<
    UpdateShadowArgument
> | null = null;
let _cached_encoder_for_UpdateShadowArgument: $.ASN1Encoder<
    UpdateShadowArgument
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UpdateShadowArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UpdateShadowArgument} The decoded data structure.
 */
export function _decode_UpdateShadowArgument(el: _Element) {
    if (!_cached_decoder_for_UpdateShadowArgument) {
        _cached_decoder_for_UpdateShadowArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            UpdateShadowArgumentData
        >(_decode_UpdateShadowArgumentData);
    }
    return _cached_decoder_for_UpdateShadowArgument(el);
}
/**
 * @summary Encodes a(n) UpdateShadowArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateShadowArgument, encoded as an ASN.1 Element.
 */
export function _encode_UpdateShadowArgument(
    value: UpdateShadowArgument,
    elGetter: $.ASN1Encoder<UpdateShadowArgument>
) {
    if (!_cached_encoder_for_UpdateShadowArgument) {
        _cached_encoder_for_UpdateShadowArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            UpdateShadowArgumentData
        >(_encode_UpdateShadowArgumentData);
    }
    return _cached_encoder_for_UpdateShadowArgument(value, elGetter);
}

/**
 * @summary UpdateShadowResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UpdateShadowResultData ::= [0]  SEQUENCE {
 *   agreementID  AgreementID,
 *   lastUpdate   Time OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }
 * ```
 *
 * @class
 */
export class UpdateShadowResultData {
    constructor(
        /**
         * @summary `agreementID`.
         * @public
         * @readonly
         */
        readonly agreementID: AgreementID,
        /**
         * @summary `lastUpdate`.
         * @public
         * @readonly
         */
        readonly lastUpdate: OPTIONAL<Time>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<
            SecurityParameters
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer: OPTIONAL<
            DistinguishedName
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<
            BOOLEAN
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a UpdateShadowResultData
     * @description
     *
     * This takes an `object` and converts it to a `UpdateShadowResultData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateShadowResultData`.
     * @returns {UpdateShadowResultData}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof UpdateShadowResultData]: UpdateShadowResultData[_K] }
        >
    ): UpdateShadowResultData {
        return new UpdateShadowResultData(
            _o.agreementID,
            _o.lastUpdate,
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
        );
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of UpdateShadowResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UpdateShadowResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "agreementID",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "lastUpdate",
        true,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of UpdateShadowResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UpdateShadowResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "performer",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasDereferenced",
        true,
        $.hasTag(_TagClass.context, 28),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "notification",
        true,
        $.hasTag(_TagClass.context, 27),
        undefined,
        undefined
    ),
];
/**
 * @summary The Extension Addition Component Types of UpdateShadowResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UpdateShadowResultData: $.ComponentSpec[] = [];
let _cached_decoder_for_UpdateShadowResultData: $.ASN1Decoder<
    UpdateShadowResultData
> | null = null;
let _cached_encoder_for_UpdateShadowResultData: $.ASN1Encoder<
    UpdateShadowResultData
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UpdateShadowResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UpdateShadowResultData} The decoded data structure.
 */
export function _decode_UpdateShadowResultData(el: _Element) {
    if (!_cached_decoder_for_UpdateShadowResultData) {
        _cached_decoder_for_UpdateShadowResultData = $._decode_implicit<
            UpdateShadowResultData
        >(
            () =>
                function (el: _Element): UpdateShadowResultData {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let agreementID!: AgreementID;
                    let lastUpdate: OPTIONAL<Time>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    let securityParameters: OPTIONAL<SecurityParameters>;
                    let performer: OPTIONAL<DistinguishedName>;
                    let aliasDereferenced: OPTIONAL<BOOLEAN> =
                        UpdateShadowResultData._default_value_for_aliasDereferenced;
                    let notification: OPTIONAL<Attribute[]>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        agreementID: (_el: _Element): void => {
                            agreementID = _decode_AgreementID(_el);
                        },
                        lastUpdate: (_el: _Element): void => {
                            lastUpdate = _decode_Time(_el);
                        },
                        securityParameters: (_el: _Element): void => {
                            securityParameters = $._decode_explicit<
                                SecurityParameters
                            >(() => _decode_SecurityParameters)(_el);
                        },
                        performer: (_el: _Element): void => {
                            performer = $._decode_explicit<DistinguishedName>(
                                () => _decode_DistinguishedName
                            )(_el);
                        },
                        aliasDereferenced: (_el: _Element): void => {
                            aliasDereferenced = $._decode_explicit<BOOLEAN>(
                                () => $._decodeBoolean
                            )(_el);
                        },
                        notification: (_el: _Element): void => {
                            notification = $._decode_explicit<Attribute[]>(() =>
                                $._decodeSequenceOf<Attribute>(
                                    () => _decode_Attribute
                                )
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_UpdateShadowResultData,
                        _extension_additions_list_spec_for_UpdateShadowResultData,
                        _root_component_type_list_2_spec_for_UpdateShadowResultData,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new UpdateShadowResultData(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ agreementID,
                        lastUpdate,
                        _unrecognizedExtensionsList,
                        securityParameters,
                        performer,
                        aliasDereferenced,
                        notification
                    );
                }
        );
    }
    return _cached_decoder_for_UpdateShadowResultData(el);
}
/**
 * @summary Encodes a(n) UpdateShadowResultData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateShadowResultData, encoded as an ASN.1 Element.
 */
export function _encode_UpdateShadowResultData(
    value: UpdateShadowResultData,
    elGetter: $.ASN1Encoder<UpdateShadowResultData>
) {
    if (!_cached_encoder_for_UpdateShadowResultData) {
        _cached_encoder_for_UpdateShadowResultData = $._encode_implicit(
            _TagClass.context,
            0,
            () =>
                function (
                    value: UpdateShadowResultData,
                    elGetter: $.ASN1Encoder<UpdateShadowResultData>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_AgreementID(
                                        value.agreementID,
                                        $.BER
                                    ),
                                    /* IF_ABSENT  */ value.lastUpdate ===
                                    undefined
                                        ? undefined
                                        : _encode_Time(value.lastUpdate, $.BER),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : [],
                                [
                                    /* IF_ABSENT  */ value.securityParameters ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              30,
                                              () => _encode_SecurityParameters,
                                              $.BER
                                          )(value.securityParameters, $.BER),
                                    /* IF_ABSENT  */ value.performer ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              29,
                                              () => _encode_DistinguishedName,
                                              $.BER
                                          )(value.performer, $.BER),
                                    /* IF_DEFAULT */ value.aliasDereferenced ===
                                        undefined ||
                                    $.deepEq(
                                        value.aliasDereferenced,
                                        UpdateShadowResultData._default_value_for_aliasDereferenced
                                    )
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              28,
                                              () => $._encodeBoolean,
                                              $.BER
                                          )(value.aliasDereferenced, $.BER),
                                    /* IF_ABSENT  */ value.notification ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              27,
                                              () =>
                                                  $._encodeSequenceOf<
                                                      Attribute
                                                  >(
                                                      () => _encode_Attribute,
                                                      $.BER
                                                  ),
                                              $.BER
                                          )(value.notification, $.BER),
                                ]
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_UpdateShadowResultData(value, elGetter);
}

/**
 * @summary UpdateShadowResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UpdateShadowResult  ::=  CHOICE {
 *   null         NULL,
 *   information OPTIONALLY-PROTECTED{ UpdateShadowResultData },
 *   ...}
 * ```
 */
export type UpdateShadowResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED<UpdateShadowResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_UpdateShadowResult: $.ASN1Decoder<
    UpdateShadowResult
> | null = null;
let _cached_encoder_for_UpdateShadowResult: $.ASN1Encoder<
    UpdateShadowResult
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) UpdateShadowResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UpdateShadowResult} The decoded data structure.
 */
export function _decode_UpdateShadowResult(el: _Element) {
    if (!_cached_decoder_for_UpdateShadowResult) {
        _cached_decoder_for_UpdateShadowResult = $._decode_extensible_choice<
            UpdateShadowResult
        >({
            "UNIVERSAL 5": ["null_", $._decodeNull],
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
/**
 * @summary Encodes a(n) UpdateShadowResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateShadowResult, encoded as an ASN.1 Element.
 */
export function _encode_UpdateShadowResult(
    value: UpdateShadowResult,
    elGetter: $.ASN1Encoder<UpdateShadowResult>
) {
    if (!_cached_encoder_for_UpdateShadowResult) {
        _cached_encoder_for_UpdateShadowResult = $._encode_choice<
            UpdateShadowResult
        >(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED<
                    UpdateShadowResultData
                >(_encode_UpdateShadowResultData),
            },
            $.BER
        );
    }
    return _cached_encoder_for_UpdateShadowResult(value, elGetter);
}

/**
 * @summary updateShadow
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * updateShadow OPERATION ::= {
 *   ARGUMENT  UpdateShadowArgument
 *   RESULT    UpdateShadowResult
 *   ERRORS    {shadowError}
 *   CODE      id-opcode-updateShadow }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const updateShadow: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_UpdateShadowArgument,
        "&ResultType": _decode_UpdateShadowResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_UpdateShadowArgument,
        "&ResultType": _encode_UpdateShadowResult,
    },
    "&Errors": undefined,
    "&operationCode": id_opcode_updateShadow /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary All_operations_consumer_initiated
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * All-operations-consumer-initiated OPERATION ::= {requestShadowUpdate | updateShadow}
 * ```
 *
 * @constant
 * @type {OPERATION[]}
 *
 */
export const All_operations_consumer_initiated: OPERATION[] = [
    requestShadowUpdate,
    updateShadow,
];

/**
 * @summary CoordinateShadowUpdateArgumentData_updateStrategy_standard
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CoordinateShadowUpdateArgumentData-updateStrategy-standard ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard {
    noChanges = 0,
    incremental = 1,
    total = 2,
}
/**
 * @summary CoordinateShadowUpdateArgumentData_updateStrategy_standard
 */
export type CoordinateShadowUpdateArgumentData_updateStrategy_standard =
    | _enum_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard
    | ENUMERATED;
/**
 * @summary CoordinateShadowUpdateArgumentData_updateStrategy_standard_noChanges
 * @constant
 * @type {number}
 */
export const CoordinateShadowUpdateArgumentData_updateStrategy_standard_noChanges: CoordinateShadowUpdateArgumentData_updateStrategy_standard = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CoordinateShadowUpdateArgumentData_updateStrategy_standard_incremental
 * @constant
 * @type {number}
 */
export const CoordinateShadowUpdateArgumentData_updateStrategy_standard_incremental: CoordinateShadowUpdateArgumentData_updateStrategy_standard = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary CoordinateShadowUpdateArgumentData_updateStrategy_standard_total
 * @constant
 * @type {number}
 */
export const CoordinateShadowUpdateArgumentData_updateStrategy_standard_total: CoordinateShadowUpdateArgumentData_updateStrategy_standard = 2; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard: $.ASN1Decoder<
    CoordinateShadowUpdateArgumentData_updateStrategy_standard
> | null = null;
let _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard: $.ASN1Encoder<
    CoordinateShadowUpdateArgumentData_updateStrategy_standard
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CoordinateShadowUpdateArgumentData_updateStrategy_standard
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CoordinateShadowUpdateArgumentData_updateStrategy_standard} The decoded data structure.
 */
export function _decode_CoordinateShadowUpdateArgumentData_updateStrategy_standard(
    el: _Element
) {
    if (
        !_cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard
    ) {
        _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard(
        el
    );
}
/**
 * @summary Encodes a(n) CoordinateShadowUpdateArgumentData_updateStrategy_standard into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoordinateShadowUpdateArgumentData_updateStrategy_standard, encoded as an ASN.1 Element.
 */
export function _encode_CoordinateShadowUpdateArgumentData_updateStrategy_standard(
    value: CoordinateShadowUpdateArgumentData_updateStrategy_standard,
    elGetter: $.ASN1Encoder<
        CoordinateShadowUpdateArgumentData_updateStrategy_standard
    >
) {
    if (
        !_cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard
    ) {
        _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy_standard(
        value,
        elGetter
    );
}

/**
 * @summary CoordinateShadowUpdateArgumentData_updateStrategy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CoordinateShadowUpdateArgumentData-updateStrategy ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CoordinateShadowUpdateArgumentData_updateStrategy =
    | {
          standard: CoordinateShadowUpdateArgumentData_updateStrategy_standard;
      } /* CHOICE_ALT_ROOT */
    | { other: EXTERNAL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy: $.ASN1Decoder<
    CoordinateShadowUpdateArgumentData_updateStrategy
> | null = null;
let _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy: $.ASN1Encoder<
    CoordinateShadowUpdateArgumentData_updateStrategy
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CoordinateShadowUpdateArgumentData_updateStrategy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CoordinateShadowUpdateArgumentData_updateStrategy} The decoded data structure.
 */
export function _decode_CoordinateShadowUpdateArgumentData_updateStrategy(
    el: _Element
) {
    if (
        !_cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy
    ) {
        _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy = $._decode_extensible_choice<
            CoordinateShadowUpdateArgumentData_updateStrategy
        >({
            "UNIVERSAL 10": [
                "standard",
                _decode_CoordinateShadowUpdateArgumentData_updateStrategy_standard,
            ],
            "UNIVERSAL 8": ["other", $._decodeExternal],
        });
    }
    return _cached_decoder_for_CoordinateShadowUpdateArgumentData_updateStrategy(
        el
    );
}
/**
 * @summary Encodes a(n) CoordinateShadowUpdateArgumentData_updateStrategy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoordinateShadowUpdateArgumentData_updateStrategy, encoded as an ASN.1 Element.
 */
export function _encode_CoordinateShadowUpdateArgumentData_updateStrategy(
    value: CoordinateShadowUpdateArgumentData_updateStrategy,
    elGetter: $.ASN1Encoder<CoordinateShadowUpdateArgumentData_updateStrategy>
) {
    if (
        !_cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy
    ) {
        _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy = $._encode_choice<
            CoordinateShadowUpdateArgumentData_updateStrategy
        >(
            {
                standard: _encode_CoordinateShadowUpdateArgumentData_updateStrategy_standard,
                other: $._encodeExternal,
            },
            $.BER
        );
    }
    return _cached_encoder_for_CoordinateShadowUpdateArgumentData_updateStrategy(
        value,
        elGetter
    );
}

/**
 * @summary CoordinateShadowUpdateArgumentData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CoordinateShadowUpdateArgumentData ::= [0]  SEQUENCE {
 *   agreementID         AgreementID,
 *   lastUpdate          Time OPTIONAL,
 *   updateStrategy      CHOICE {
 *     standard            ENUMERATED {
 *       noChanges   (0),
 *       incremental (1),
 *       total       (2),
 *       ...},
 *     other               EXTERNAL,
 *     ...},
 *   securityParameters  SecurityParameters OPTIONAL,
 *   ...}
 * ```
 *
 * @class
 */
export class CoordinateShadowUpdateArgumentData {
    constructor(
        /**
         * @summary `agreementID`.
         * @public
         * @readonly
         */
        readonly agreementID: AgreementID,
        /**
         * @summary `lastUpdate`.
         * @public
         * @readonly
         */
        readonly lastUpdate: OPTIONAL<Time>,
        /**
         * @summary `updateStrategy`.
         * @public
         * @readonly
         */
        readonly updateStrategy: CoordinateShadowUpdateArgumentData_updateStrategy,
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<SecurityParameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CoordinateShadowUpdateArgumentData
     * @description
     *
     * This takes an `object` and converts it to a `CoordinateShadowUpdateArgumentData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CoordinateShadowUpdateArgumentData`.
     * @returns {CoordinateShadowUpdateArgumentData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CoordinateShadowUpdateArgumentData]: CoordinateShadowUpdateArgumentData[_K];
            }
        >
    ): CoordinateShadowUpdateArgumentData {
        return new CoordinateShadowUpdateArgumentData(
            _o.agreementID,
            _o.lastUpdate,
            _o.updateStrategy,
            _o.securityParameters,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of CoordinateShadowUpdateArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CoordinateShadowUpdateArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "agreementID",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "lastUpdate",
        true,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "updateStrategy",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CoordinateShadowUpdateArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CoordinateShadowUpdateArgumentData: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of CoordinateShadowUpdateArgumentData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CoordinateShadowUpdateArgumentData: $.ComponentSpec[] = [];
let _cached_decoder_for_CoordinateShadowUpdateArgumentData: $.ASN1Decoder<
    CoordinateShadowUpdateArgumentData
> | null = null;
let _cached_encoder_for_CoordinateShadowUpdateArgumentData: $.ASN1Encoder<
    CoordinateShadowUpdateArgumentData
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CoordinateShadowUpdateArgumentData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CoordinateShadowUpdateArgumentData} The decoded data structure.
 */
export function _decode_CoordinateShadowUpdateArgumentData(el: _Element) {
    if (!_cached_decoder_for_CoordinateShadowUpdateArgumentData) {
        _cached_decoder_for_CoordinateShadowUpdateArgumentData = $._decode_implicit<
            CoordinateShadowUpdateArgumentData
        >(
            () =>
                function (el: _Element): CoordinateShadowUpdateArgumentData {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let agreementID!: AgreementID;
                    let lastUpdate: OPTIONAL<Time>;
                    let updateStrategy!: CoordinateShadowUpdateArgumentData_updateStrategy;
                    let securityParameters: OPTIONAL<SecurityParameters>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        agreementID: (_el: _Element): void => {
                            agreementID = _decode_AgreementID(_el);
                        },
                        lastUpdate: (_el: _Element): void => {
                            lastUpdate = _decode_Time(_el);
                        },
                        updateStrategy: (_el: _Element): void => {
                            updateStrategy = _decode_CoordinateShadowUpdateArgumentData_updateStrategy(
                                _el
                            );
                        },
                        securityParameters: (_el: _Element): void => {
                            securityParameters = _decode_SecurityParameters(
                                _el
                            );
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_CoordinateShadowUpdateArgumentData,
                        _extension_additions_list_spec_for_CoordinateShadowUpdateArgumentData,
                        _root_component_type_list_2_spec_for_CoordinateShadowUpdateArgumentData,
                        (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) CoordinateShadowUpdateArgumentData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoordinateShadowUpdateArgumentData, encoded as an ASN.1 Element.
 */
export function _encode_CoordinateShadowUpdateArgumentData(
    value: CoordinateShadowUpdateArgumentData,
    elGetter: $.ASN1Encoder<CoordinateShadowUpdateArgumentData>
) {
    if (!_cached_encoder_for_CoordinateShadowUpdateArgumentData) {
        _cached_encoder_for_CoordinateShadowUpdateArgumentData = $._encode_implicit(
            _TagClass.context,
            0,
            () =>
                function (
                    value: CoordinateShadowUpdateArgumentData,
                    elGetter: $.ASN1Encoder<CoordinateShadowUpdateArgumentData>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_AgreementID(
                                        value.agreementID,
                                        $.BER
                                    ),
                                    /* IF_ABSENT  */ value.lastUpdate ===
                                    undefined
                                        ? undefined
                                        : _encode_Time(value.lastUpdate, $.BER),
                                    /* REQUIRED   */ _encode_CoordinateShadowUpdateArgumentData_updateStrategy(
                                        value.updateStrategy,
                                        $.BER
                                    ),
                                    /* IF_ABSENT  */ value.securityParameters ===
                                    undefined
                                        ? undefined
                                        : _encode_SecurityParameters(
                                              value.securityParameters,
                                              $.BER
                                          ),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : []
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_CoordinateShadowUpdateArgumentData(
        value,
        elGetter
    );
}

export type CoordinateShadowUpdateArgument<> = OPTIONALLY_PROTECTED<
    CoordinateShadowUpdateArgumentData
>; // DefinedType
let _cached_decoder_for_CoordinateShadowUpdateArgument: $.ASN1Decoder<
    CoordinateShadowUpdateArgument
> | null = null;
let _cached_encoder_for_CoordinateShadowUpdateArgument: $.ASN1Encoder<
    CoordinateShadowUpdateArgument
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CoordinateShadowUpdateArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CoordinateShadowUpdateArgument} The decoded data structure.
 */
export function _decode_CoordinateShadowUpdateArgument(el: _Element) {
    if (!_cached_decoder_for_CoordinateShadowUpdateArgument) {
        _cached_decoder_for_CoordinateShadowUpdateArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            CoordinateShadowUpdateArgumentData
        >(_decode_CoordinateShadowUpdateArgumentData);
    }
    return _cached_decoder_for_CoordinateShadowUpdateArgument(el);
}
/**
 * @summary Encodes a(n) CoordinateShadowUpdateArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoordinateShadowUpdateArgument, encoded as an ASN.1 Element.
 */
export function _encode_CoordinateShadowUpdateArgument(
    value: CoordinateShadowUpdateArgument,
    elGetter: $.ASN1Encoder<CoordinateShadowUpdateArgument>
) {
    if (!_cached_encoder_for_CoordinateShadowUpdateArgument) {
        _cached_encoder_for_CoordinateShadowUpdateArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            CoordinateShadowUpdateArgumentData
        >(_encode_CoordinateShadowUpdateArgumentData);
    }
    return _cached_encoder_for_CoordinateShadowUpdateArgument(value, elGetter);
}

/**
 * @summary CoordinateShadowUpdateResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CoordinateShadowUpdateResultData ::= [0]  SEQUENCE {
 *   agreementID  AgreementID,
 *   lastUpdate   Time OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }
 * ```
 *
 * @class
 */
export class CoordinateShadowUpdateResultData {
    constructor(
        /**
         * @summary `agreementID`.
         * @public
         * @readonly
         */
        readonly agreementID: AgreementID,
        /**
         * @summary `lastUpdate`.
         * @public
         * @readonly
         */
        readonly lastUpdate: OPTIONAL<Time>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<
            SecurityParameters
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer: OPTIONAL<
            DistinguishedName
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<
            BOOLEAN
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a CoordinateShadowUpdateResultData
     * @description
     *
     * This takes an `object` and converts it to a `CoordinateShadowUpdateResultData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CoordinateShadowUpdateResultData`.
     * @returns {CoordinateShadowUpdateResultData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CoordinateShadowUpdateResultData]: CoordinateShadowUpdateResultData[_K];
            }
        >
    ): CoordinateShadowUpdateResultData {
        return new CoordinateShadowUpdateResultData(
            _o.agreementID,
            _o.lastUpdate,
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
        );
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of CoordinateShadowUpdateResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CoordinateShadowUpdateResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "agreementID",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "lastUpdate",
        true,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of CoordinateShadowUpdateResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CoordinateShadowUpdateResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "performer",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasDereferenced",
        true,
        $.hasTag(_TagClass.context, 28),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "notification",
        true,
        $.hasTag(_TagClass.context, 27),
        undefined,
        undefined
    ),
];
/**
 * @summary The Extension Addition Component Types of CoordinateShadowUpdateResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CoordinateShadowUpdateResultData: $.ComponentSpec[] = [];
let _cached_decoder_for_CoordinateShadowUpdateResultData: $.ASN1Decoder<
    CoordinateShadowUpdateResultData
> | null = null;
let _cached_encoder_for_CoordinateShadowUpdateResultData: $.ASN1Encoder<
    CoordinateShadowUpdateResultData
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CoordinateShadowUpdateResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CoordinateShadowUpdateResultData} The decoded data structure.
 */
export function _decode_CoordinateShadowUpdateResultData(el: _Element) {
    if (!_cached_decoder_for_CoordinateShadowUpdateResultData) {
        _cached_decoder_for_CoordinateShadowUpdateResultData = $._decode_implicit<
            CoordinateShadowUpdateResultData
        >(
            () =>
                function (el: _Element): CoordinateShadowUpdateResultData {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let agreementID!: AgreementID;
                    let lastUpdate: OPTIONAL<Time>;
                    let _unrecognizedExtensionsList: _Element[] = [];
                    let securityParameters: OPTIONAL<SecurityParameters>;
                    let performer: OPTIONAL<DistinguishedName>;
                    let aliasDereferenced: OPTIONAL<BOOLEAN> =
                        CoordinateShadowUpdateResultData._default_value_for_aliasDereferenced;
                    let notification: OPTIONAL<Attribute[]>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        agreementID: (_el: _Element): void => {
                            agreementID = _decode_AgreementID(_el);
                        },
                        lastUpdate: (_el: _Element): void => {
                            lastUpdate = _decode_Time(_el);
                        },
                        securityParameters: (_el: _Element): void => {
                            securityParameters = $._decode_explicit<
                                SecurityParameters
                            >(() => _decode_SecurityParameters)(_el);
                        },
                        performer: (_el: _Element): void => {
                            performer = $._decode_explicit<DistinguishedName>(
                                () => _decode_DistinguishedName
                            )(_el);
                        },
                        aliasDereferenced: (_el: _Element): void => {
                            aliasDereferenced = $._decode_explicit<BOOLEAN>(
                                () => $._decodeBoolean
                            )(_el);
                        },
                        notification: (_el: _Element): void => {
                            notification = $._decode_explicit<Attribute[]>(() =>
                                $._decodeSequenceOf<Attribute>(
                                    () => _decode_Attribute
                                )
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_CoordinateShadowUpdateResultData,
                        _extension_additions_list_spec_for_CoordinateShadowUpdateResultData,
                        _root_component_type_list_2_spec_for_CoordinateShadowUpdateResultData,
                        (ext: _Element): void => {
                            _unrecognizedExtensionsList.push(ext);
                        }
                    );
                    return new CoordinateShadowUpdateResultData(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ agreementID,
                        lastUpdate,
                        _unrecognizedExtensionsList,
                        securityParameters,
                        performer,
                        aliasDereferenced,
                        notification
                    );
                }
        );
    }
    return _cached_decoder_for_CoordinateShadowUpdateResultData(el);
}
/**
 * @summary Encodes a(n) CoordinateShadowUpdateResultData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoordinateShadowUpdateResultData, encoded as an ASN.1 Element.
 */
export function _encode_CoordinateShadowUpdateResultData(
    value: CoordinateShadowUpdateResultData,
    elGetter: $.ASN1Encoder<CoordinateShadowUpdateResultData>
) {
    if (!_cached_encoder_for_CoordinateShadowUpdateResultData) {
        _cached_encoder_for_CoordinateShadowUpdateResultData = $._encode_implicit(
            _TagClass.context,
            0,
            () =>
                function (
                    value: CoordinateShadowUpdateResultData,
                    elGetter: $.ASN1Encoder<CoordinateShadowUpdateResultData>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat(
                                [
                                    /* REQUIRED   */ _encode_AgreementID(
                                        value.agreementID,
                                        $.BER
                                    ),
                                    /* IF_ABSENT  */ value.lastUpdate ===
                                    undefined
                                        ? undefined
                                        : _encode_Time(value.lastUpdate, $.BER),
                                ],
                                value._unrecognizedExtensionsList
                                    ? value._unrecognizedExtensionsList
                                    : [],
                                [
                                    /* IF_ABSENT  */ value.securityParameters ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              30,
                                              () => _encode_SecurityParameters,
                                              $.BER
                                          )(value.securityParameters, $.BER),
                                    /* IF_ABSENT  */ value.performer ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              29,
                                              () => _encode_DistinguishedName,
                                              $.BER
                                          )(value.performer, $.BER),
                                    /* IF_DEFAULT */ value.aliasDereferenced ===
                                        undefined ||
                                    $.deepEq(
                                        value.aliasDereferenced,
                                        CoordinateShadowUpdateResultData._default_value_for_aliasDereferenced
                                    )
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              28,
                                              () => $._encodeBoolean,
                                              $.BER
                                          )(value.aliasDereferenced, $.BER),
                                    /* IF_ABSENT  */ value.notification ===
                                    undefined
                                        ? undefined
                                        : $._encode_explicit(
                                              _TagClass.context,
                                              27,
                                              () =>
                                                  $._encodeSequenceOf<
                                                      Attribute
                                                  >(
                                                      () => _encode_Attribute,
                                                      $.BER
                                                  ),
                                              $.BER
                                          )(value.notification, $.BER),
                                ]
                            )
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_CoordinateShadowUpdateResultData(
        value,
        elGetter
    );
}

/**
 * @summary CoordinateShadowUpdateResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CoordinateShadowUpdateResult  ::=  CHOICE {
 *   null         NULL,
 *   information  OPTIONALLY-PROTECTED{ CoordinateShadowUpdateResultData },
 *   ...}
 * ```
 */
export type CoordinateShadowUpdateResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED<CoordinateShadowUpdateResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_CoordinateShadowUpdateResult: $.ASN1Decoder<
    CoordinateShadowUpdateResult
> | null = null;
let _cached_encoder_for_CoordinateShadowUpdateResult: $.ASN1Encoder<
    CoordinateShadowUpdateResult
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) CoordinateShadowUpdateResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CoordinateShadowUpdateResult} The decoded data structure.
 */
export function _decode_CoordinateShadowUpdateResult(el: _Element) {
    if (!_cached_decoder_for_CoordinateShadowUpdateResult) {
        _cached_decoder_for_CoordinateShadowUpdateResult = $._decode_extensible_choice<
            CoordinateShadowUpdateResult
        >({
            "UNIVERSAL 5": ["null_", $._decodeNull],
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
/**
 * @summary Encodes a(n) CoordinateShadowUpdateResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoordinateShadowUpdateResult, encoded as an ASN.1 Element.
 */
export function _encode_CoordinateShadowUpdateResult(
    value: CoordinateShadowUpdateResult,
    elGetter: $.ASN1Encoder<CoordinateShadowUpdateResult>
) {
    if (!_cached_encoder_for_CoordinateShadowUpdateResult) {
        _cached_encoder_for_CoordinateShadowUpdateResult = $._encode_choice<
            CoordinateShadowUpdateResult
        >(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED<
                    CoordinateShadowUpdateResultData
                >(_encode_CoordinateShadowUpdateResultData),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CoordinateShadowUpdateResult(value, elGetter);
}

/**
 * @summary coordinateShadowUpdate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * coordinateShadowUpdate OPERATION ::= {
 *   ARGUMENT  CoordinateShadowUpdateArgument
 *   RESULT    CoordinateShadowUpdateResult
 *   ERRORS    {shadowError}
 *   CODE      id-opcode-coordinateShadowUpdate
 * }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const coordinateShadowUpdate: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CoordinateShadowUpdateArgument,
        "&ResultType": _decode_CoordinateShadowUpdateResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CoordinateShadowUpdateArgument,
        "&ResultType": _encode_CoordinateShadowUpdateResult,
    },
    "&Errors": undefined,
    "&operationCode": id_opcode_coordinateShadowUpdate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/**
 * @summary All_operations_supplier_initiated
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * All-operations-supplier-initiated OPERATION ::= {coordinateShadowUpdate | updateShadow}
 * ```
 *
 * @constant
 * @type {OPERATION[]}
 *
 */
export const All_operations_supplier_initiated: OPERATION[] = [
    coordinateShadowUpdate,
    updateShadow,
];

/**
 * @summary ShadowProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ShadowProblem  ::=  INTEGER {
 *   invalidAgreementID         (1),
 *   inactiveAgreement          (2),
 *   invalidInformationReceived (3),
 *   unsupportedStrategy        (4),
 *   missedPrevious             (5),
 *   fullUpdateRequired         (6),
 *   unwillingToPerform         (7),
 *   unsuitableTiming           (8),
 *   updateAlreadyReceived      (9),
 *   invalidSequencing          (10),
 *   insufficientResources      (11) }
 * ```
 */
export type ShadowProblem = INTEGER;
/**
 * @summary ShadowProblem_invalidAgreementID
 * @constant
 * @type {number}
 */
export const ShadowProblem_invalidAgreementID: ShadowProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ShadowProblem_inactiveAgreement
 * @constant
 * @type {number}
 */
export const ShadowProblem_inactiveAgreement: ShadowProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ShadowProblem_invalidInformationReceived
 * @constant
 * @type {number}
 */
export const ShadowProblem_invalidInformationReceived: ShadowProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ShadowProblem_unsupportedStrategy
 * @constant
 * @type {number}
 */
export const ShadowProblem_unsupportedStrategy: ShadowProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ShadowProblem_missedPrevious
 * @constant
 * @type {number}
 */
export const ShadowProblem_missedPrevious: ShadowProblem = 5; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ShadowProblem_fullUpdateRequired
 * @constant
 * @type {number}
 */
export const ShadowProblem_fullUpdateRequired: ShadowProblem = 6; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ShadowProblem_unwillingToPerform
 * @constant
 * @type {number}
 */
export const ShadowProblem_unwillingToPerform: ShadowProblem = 7; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ShadowProblem_unsuitableTiming
 * @constant
 * @type {number}
 */
export const ShadowProblem_unsuitableTiming: ShadowProblem = 8; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ShadowProblem_updateAlreadyReceived
 * @constant
 * @type {number}
 */
export const ShadowProblem_updateAlreadyReceived: ShadowProblem = 9; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ShadowProblem_invalidSequencing
 * @constant
 * @type {number}
 */
export const ShadowProblem_invalidSequencing: ShadowProblem = 10; /* LONG_NAMED_INTEGER_VALUE */
/**
 * @summary ShadowProblem_insufficientResources
 * @constant
 * @type {number}
 */
export const ShadowProblem_insufficientResources: ShadowProblem = 11; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_ShadowProblem: $.ASN1Decoder<
    ShadowProblem
> | null = null;
let _cached_encoder_for_ShadowProblem: $.ASN1Encoder<
    ShadowProblem
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ShadowProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ShadowProblem} The decoded data structure.
 */
export function _decode_ShadowProblem(el: _Element) {
    if (!_cached_decoder_for_ShadowProblem) {
        _cached_decoder_for_ShadowProblem = $._decodeInteger;
    }
    return _cached_decoder_for_ShadowProblem(el);
}
/**
 * @summary Encodes a(n) ShadowProblem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShadowProblem, encoded as an ASN.1 Element.
 */
export function _encode_ShadowProblem(
    value: ShadowProblem,
    elGetter: $.ASN1Encoder<ShadowProblem>
) {
    if (!_cached_encoder_for_ShadowProblem) {
        _cached_encoder_for_ShadowProblem = $._encodeInteger;
    }
    return _cached_encoder_for_ShadowProblem(value, elGetter);
}

/**
 * @summary ShadowErrorData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ShadowErrorData ::= SEQUENCE {
 *   problem       ShadowProblem,
 *   lastUpdate    Time OPTIONAL,
 *   updateWindow  UpdateWindow OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResultsSeq }
 * ```
 *
 * @class
 */
export class ShadowErrorData {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: ShadowProblem,
        /**
         * @summary `lastUpdate`.
         * @public
         * @readonly
         */
        readonly lastUpdate: OPTIONAL<Time>,
        /**
         * @summary `updateWindow`.
         * @public
         * @readonly
         */
        readonly updateWindow: OPTIONAL<UpdateWindow>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters: OPTIONAL<
            SecurityParameters
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer: OPTIONAL<
            DistinguishedName
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced: OPTIONAL<
            BOOLEAN
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a ShadowErrorData
     * @description
     *
     * This takes an `object` and converts it to a `ShadowErrorData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ShadowErrorData`.
     * @returns {ShadowErrorData}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ShadowErrorData]: ShadowErrorData[_K] }>
    ): ShadowErrorData {
        return new ShadowErrorData(
            _o.problem,
            _o.lastUpdate,
            _o.updateWindow,
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
        );
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}
/**
 * @summary The Leading Root Component Types of ShadowErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ShadowErrorData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "problem",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "lastUpdate",
        true,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "updateWindow",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ShadowErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ShadowErrorData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 30),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "performer",
        true,
        $.hasTag(_TagClass.context, 29),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "aliasDereferenced",
        true,
        $.hasTag(_TagClass.context, 28),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "notification",
        true,
        $.hasTag(_TagClass.context, 27),
        undefined,
        undefined
    ),
];
/**
 * @summary The Extension Addition Component Types of ShadowErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ShadowErrorData: $.ComponentSpec[] = [];
let _cached_decoder_for_ShadowErrorData: $.ASN1Decoder<
    ShadowErrorData
> | null = null;
let _cached_encoder_for_ShadowErrorData: $.ASN1Encoder<
    ShadowErrorData
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ShadowErrorData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ShadowErrorData} The decoded data structure.
 */
export function _decode_ShadowErrorData(el: _Element) {
    if (!_cached_decoder_for_ShadowErrorData) {
        _cached_decoder_for_ShadowErrorData = function (
            el: _Element
        ): ShadowErrorData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let problem!: ShadowProblem;
            let lastUpdate: OPTIONAL<Time>;
            let updateWindow: OPTIONAL<UpdateWindow>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                ShadowErrorData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = _decode_ShadowProblem(_el);
                },
                lastUpdate: (_el: _Element): void => {
                    lastUpdate = _decode_Time(_el);
                },
                updateWindow: (_el: _Element): void => {
                    updateWindow = _decode_UpdateWindow(_el);
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
                performer: (_el: _Element): void => {
                    performer = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: _Element): void => {
                    aliasDereferenced = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                notification: (_el: _Element): void => {
                    notification = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSequenceOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ShadowErrorData,
                _extension_additions_list_spec_for_ShadowErrorData,
                _root_component_type_list_2_spec_for_ShadowErrorData,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) ShadowErrorData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShadowErrorData, encoded as an ASN.1 Element.
 */
export function _encode_ShadowErrorData(
    value: ShadowErrorData,
    elGetter: $.ASN1Encoder<ShadowErrorData>
) {
    if (!_cached_encoder_for_ShadowErrorData) {
        _cached_encoder_for_ShadowErrorData = function (
            value: ShadowErrorData,
            elGetter: $.ASN1Encoder<ShadowErrorData>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ShadowProblem(
                                value.problem,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.lastUpdate === undefined
                                ? undefined
                                : _encode_Time(value.lastUpdate, $.BER),
                            /* IF_ABSENT  */ value.updateWindow === undefined
                                ? undefined
                                : _encode_UpdateWindow(
                                      value.updateWindow,
                                      $.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      $.BER
                                  )(value.securityParameters, $.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.performer, $.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            $.deepEq(
                                value.aliasDereferenced,
                                ShadowErrorData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.aliasDereferenced, $.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      27,
                                      () =>
                                          $._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.notification, $.BER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ShadowErrorData(value, elGetter);
}

/**
 * @summary shadowError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shadowError ERROR ::= {
 *   PARAMETER OPTIONALLY-PROTECTED-SEQ { ShadowErrorData }
 *   CODE                               id-errcode-shadowError }
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export const shadowError: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
            ShadowErrorData
        >(_decode_ShadowErrorData),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
            ShadowErrorData
        >(_encode_ShadowErrorData),
    },
    "&errorCode": id_errcode_shadowError /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* END_MODULE DirectoryShadowAbstractService */
/* eslint-enable */
