/**
 * @module ServiceAdministration
 * @summary The ASN.1 module `ServiceAdministration`.
 * @description
 *
 * OID: joint-iso-itu-t.ds.module.serviceAdministration.9
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
    BIT_STRING,
    BOOLEAN,
    ENUMERATED,
    INTEGER,
    NULL,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    TRUE_BIT,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    FamilyGrouping,
    FamilyReturn,
    HierarchySelections,
    SearchControlOptions,
    SearchControlOptions_searchAliases /* IMPORTED_BIT */,
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
    _enum_for_FamilyGrouping,
} from "./DirectoryAbstractService";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./InformationFramework";
export {
    FamilyGrouping,
    FamilyGrouping_compoundEntry /* IMPORTED_ENUMERATION_ITEM */,
    FamilyGrouping_entryOnly /* IMPORTED_ENUMERATION_ITEM */,
    FamilyGrouping_multiStrand /* IMPORTED_ENUMERATION_ITEM */,
    FamilyGrouping_strands /* IMPORTED_ENUMERATION_ITEM */,
    FamilyReturn,
    HierarchySelections,
    HierarchySelections_all /* IMPORTED_BIT */,
    HierarchySelections_children /* IMPORTED_BIT */,
    HierarchySelections_hierarchy /* IMPORTED_BIT */,
    HierarchySelections_parent /* IMPORTED_BIT */,
    HierarchySelections_self /* IMPORTED_BIT */,
    HierarchySelections_siblingChildren /* IMPORTED_BIT */,
    HierarchySelections_siblings /* IMPORTED_BIT */,
    HierarchySelections_siblingSubtree /* IMPORTED_BIT */,
    HierarchySelections_subtree /* IMPORTED_BIT */,
    HierarchySelections_top /* IMPORTED_BIT */,
    SearchControlOptions,
    SearchControlOptions_checkOverspecified /* IMPORTED_BIT */,
    SearchControlOptions_dnAttribute /* IMPORTED_BIT */,
    SearchControlOptions_entryCount /* IMPORTED_BIT */,
    SearchControlOptions_includeAllAreas /* IMPORTED_BIT */,
    SearchControlOptions_matchedValuesOnly /* IMPORTED_BIT */,
    SearchControlOptions_matchOnResidualName /* IMPORTED_BIT */,
    SearchControlOptions_noSystemRelaxation /* IMPORTED_BIT */,
    SearchControlOptions_performExactly /* IMPORTED_BIT */,
    SearchControlOptions_searchAliases /* IMPORTED_BIT */,
    SearchControlOptions_searchFamily /* IMPORTED_BIT */,
    SearchControlOptions_separateFamilyMembers /* IMPORTED_BIT */,
    SearchControlOptions_useSubset /* IMPORTED_BIT */,
    ServiceControlOptions,
    ServiceControlOptions_allowWriteableCopy /* IMPORTED_BIT */,
    ServiceControlOptions_chainingProhibited /* IMPORTED_BIT */,
    ServiceControlOptions_copyShallDo /* IMPORTED_BIT */,
    ServiceControlOptions_countFamily /* IMPORTED_BIT */,
    ServiceControlOptions_dontDereferenceAliases /* IMPORTED_BIT */,
    ServiceControlOptions_dontMatchFriends /* IMPORTED_BIT */,
    ServiceControlOptions_dontSelectFriends /* IMPORTED_BIT */,
    ServiceControlOptions_dontUseCopy /* IMPORTED_BIT */,
    ServiceControlOptions_localScope /* IMPORTED_BIT */,
    ServiceControlOptions_manageDSAIT /* IMPORTED_BIT */,
    ServiceControlOptions_noSubtypeMatch /* IMPORTED_BIT */,
    ServiceControlOptions_noSubtypeSelection /* IMPORTED_BIT */,
    ServiceControlOptions_partialNameResolution /* IMPORTED_BIT */,
    ServiceControlOptions_preferChaining /* IMPORTED_BIT */,
    ServiceControlOptions_subentries /* IMPORTED_BIT */,
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
    _enum_for_FamilyGrouping,
} from "./DirectoryAbstractService";
export {
    ATTRIBUTE,
    AttributeType,
    CONTEXT,
    MATCHING_RULE,
    OBJECT_CLASS,
    SupportedAttributes,
    SupportedContexts,
    _decode_AttributeType,
    _encode_AttributeType,
} from "./InformationFramework";

/**
 * @summary RequestAttribute_defaultValues_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestAttribute-defaultValues-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class RequestAttribute_defaultValues_Item {
    constructor(
        /**
         * @summary `entryType`.
         * @public
         * @readonly
         */
        readonly entryType: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `values`.
         * @public
         * @readonly
         */
        readonly values: _Element[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RequestAttribute_defaultValues_Item
     * @description
     *
     * This takes an `object` and converts it to a `RequestAttribute_defaultValues_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestAttribute_defaultValues_Item`.
     * @returns {RequestAttribute_defaultValues_Item}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof RequestAttribute_defaultValues_Item]: RequestAttribute_defaultValues_Item[_K];
            }
        >
    ): RequestAttribute_defaultValues_Item {
        return new RequestAttribute_defaultValues_Item(
            _o.entryType,
            _o.values,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of RequestAttribute_defaultValues_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RequestAttribute_defaultValues_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "entryType",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "values",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of RequestAttribute_defaultValues_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RequestAttribute_defaultValues_Item: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of RequestAttribute_defaultValues_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RequestAttribute_defaultValues_Item: $.ComponentSpec[] = [];
let _cached_decoder_for_RequestAttribute_defaultValues_Item: $.ASN1Decoder<
    RequestAttribute_defaultValues_Item
> | null = null;
let _cached_encoder_for_RequestAttribute_defaultValues_Item: $.ASN1Encoder<
    RequestAttribute_defaultValues_Item
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RequestAttribute_defaultValues_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestAttribute_defaultValues_Item} The decoded data structure.
 */
export function _decode_RequestAttribute_defaultValues_Item(el: _Element) {
    if (!_cached_decoder_for_RequestAttribute_defaultValues_Item) {
        _cached_decoder_for_RequestAttribute_defaultValues_Item = function (
            el: _Element
        ): RequestAttribute_defaultValues_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let entryType: OPTIONAL<OBJECT_IDENTIFIER>;
            let values!: _Element[];
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                entryType: (_el: _Element): void => {
                    entryType = $._decodeObjectIdentifier(_el);
                },
                values: (_el: _Element): void => {
                    values = $._decodeSequenceOf<_Element>(() => $._decodeAny)(
                        _el
                    );
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RequestAttribute_defaultValues_Item,
                _extension_additions_list_spec_for_RequestAttribute_defaultValues_Item,
                _root_component_type_list_2_spec_for_RequestAttribute_defaultValues_Item,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) RequestAttribute_defaultValues_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestAttribute_defaultValues_Item, encoded as an ASN.1 Element.
 */
export function _encode_RequestAttribute_defaultValues_Item(
    value: RequestAttribute_defaultValues_Item,
    elGetter: $.ASN1Encoder<RequestAttribute_defaultValues_Item>
) {
    if (!_cached_encoder_for_RequestAttribute_defaultValues_Item) {
        _cached_encoder_for_RequestAttribute_defaultValues_Item = function (
            value: RequestAttribute_defaultValues_Item,
            elGetter: $.ASN1Encoder<RequestAttribute_defaultValues_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.entryType === undefined
                                ? undefined
                                : $._encodeObjectIdentifier(
                                      value.entryType,
                                      $.BER
                                  ),
                            /* REQUIRED   */ $._encodeSequenceOf<_Element>(
                                () => $._encodeAny,
                                $.BER
                            )(value.values, $.BER),
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
    return _cached_encoder_for_RequestAttribute_defaultValues_Item(
        value,
        elGetter
    );
}

/**
 * @summary ContextProfile
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContextProfile ::= SEQUENCE {
 *   contextType   CONTEXT.&id({SupportedContexts}),
 *   contextValue  SEQUENCE SIZE (1..MAX) OF CONTEXT.&Assertion
 *                  ({SupportedContexts}{@contextType}) OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ContextProfile {
    constructor(
        /**
         * @summary `contextType`.
         * @public
         * @readonly
         */
        readonly contextType: OBJECT_IDENTIFIER,
        /**
         * @summary `contextValue`.
         * @public
         * @readonly
         */
        readonly contextValue: OPTIONAL<_Element[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ContextProfile
     * @description
     *
     * This takes an `object` and converts it to a `ContextProfile`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContextProfile`.
     * @returns {ContextProfile}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ContextProfile]: ContextProfile[_K] }>
    ): ContextProfile {
        return new ContextProfile(
            _o.contextType,
            _o.contextValue,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ContextProfile
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ContextProfile: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "contextType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contextValue",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ContextProfile
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ContextProfile: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ContextProfile
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ContextProfile: $.ComponentSpec[] = [];
let _cached_decoder_for_ContextProfile: $.ASN1Decoder<
    ContextProfile
> | null = null;
let _cached_encoder_for_ContextProfile: $.ASN1Encoder<
    ContextProfile
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ContextProfile
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContextProfile} The decoded data structure.
 */
export function _decode_ContextProfile(el: _Element) {
    if (!_cached_decoder_for_ContextProfile) {
        _cached_decoder_for_ContextProfile = function (
            el: _Element
        ): ContextProfile {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let contextType!: OBJECT_IDENTIFIER;
            let contextValue: OPTIONAL<_Element[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                contextType: (_el: _Element): void => {
                    contextType = $._decodeObjectIdentifier(_el);
                },
                contextValue: (_el: _Element): void => {
                    contextValue = $._decodeSequenceOf<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ContextProfile,
                _extension_additions_list_spec_for_ContextProfile,
                _root_component_type_list_2_spec_for_ContextProfile,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) ContextProfile into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextProfile, encoded as an ASN.1 Element.
 */
export function _encode_ContextProfile(
    value: ContextProfile,
    elGetter: $.ASN1Encoder<ContextProfile>
) {
    if (!_cached_encoder_for_ContextProfile) {
        _cached_encoder_for_ContextProfile = function (
            value: ContextProfile,
            elGetter: $.ASN1Encoder<ContextProfile>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.contextType,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.contextValue === undefined
                                ? undefined
                                : $._encodeSequenceOf<_Element>(
                                      () => $._encodeAny,
                                      $.BER
                                  )(value.contextValue, $.BER),
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
    return _cached_encoder_for_ContextProfile(value, elGetter);
}

/**
 * @summary ContextCombination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContextCombination  ::=  CHOICE {
 *   context  [0]  CONTEXT.&id({SupportedContexts}),
 *   and      [1]  SEQUENCE OF ContextCombination,
 *   or       [2]  SEQUENCE OF ContextCombination,
 *   not      [3]  ContextCombination,
 *   ... }
 * ```
 */
export type ContextCombination =
    | { context: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { and: ContextCombination[] } /* CHOICE_ALT_ROOT */
    | { or: ContextCombination[] } /* CHOICE_ALT_ROOT */
    | { not: ContextCombination } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_ContextCombination: $.ASN1Decoder<
    ContextCombination
> | null = null;
let _cached_encoder_for_ContextCombination: $.ASN1Encoder<
    ContextCombination
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ContextCombination
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContextCombination} The decoded data structure.
 */
export function _decode_ContextCombination(el: _Element) {
    if (!_cached_decoder_for_ContextCombination) {
        _cached_decoder_for_ContextCombination = $._decode_extensible_choice<
            ContextCombination
        >({
            "CONTEXT 0": [
                "context",
                $._decode_explicit<OBJECT_IDENTIFIER>(
                    () => $._decodeObjectIdentifier
                ),
            ],
            "CONTEXT 1": [
                "and",
                $._decode_explicit<ContextCombination[]>(() =>
                    $._decodeSequenceOf<ContextCombination>(
                        () => _decode_ContextCombination
                    )
                ),
            ],
            "CONTEXT 2": [
                "or",
                $._decode_explicit<ContextCombination[]>(() =>
                    $._decodeSequenceOf<ContextCombination>(
                        () => _decode_ContextCombination
                    )
                ),
            ],
            "CONTEXT 3": [
                "not",
                $._decode_explicit<ContextCombination>(
                    () => _decode_ContextCombination
                ),
            ],
        });
    }
    return _cached_decoder_for_ContextCombination(el);
}
/**
 * @summary Encodes a(n) ContextCombination into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextCombination, encoded as an ASN.1 Element.
 */
export function _encode_ContextCombination(
    value: ContextCombination,
    elGetter: $.ASN1Encoder<ContextCombination>
) {
    if (!_cached_encoder_for_ContextCombination) {
        _cached_encoder_for_ContextCombination = $._encode_choice<
            ContextCombination
        >(
            {
                context: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
                and: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<ContextCombination>(
                            () => _encode_ContextCombination,
                            $.BER
                        ),
                    $.BER
                ),
                or: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSequenceOf<ContextCombination>(
                            () => _encode_ContextCombination,
                            $.BER
                        ),
                    $.BER
                ),
                not: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_ContextCombination,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ContextCombination(value, elGetter);
}

/**
 * @summary MATCHING_RESTRICTION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MATCHING-RESTRICTION ::= CLASS {
 *   &Restriction,
 *   &Rules                MATCHING-RULE.&id,
 *   &id                   OBJECT IDENTIFIER  UNIQUE }
 * WITH SYNTAX {
 *   RESTRICTION           &Restriction
 *   RULES                 &Rules
 *   ID                    &id }
 * ```
 *
 * @interface
 */
export interface MATCHING_RESTRICTION<
    Restriction = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "MATCHING-RESTRICTION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof MATCHING_RESTRICTION<Restriction>]: $.ASN1Decoder<
                MATCHING_RESTRICTION<Restriction>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof MATCHING_RESTRICTION<Restriction>]: $.ASN1Encoder<
                MATCHING_RESTRICTION<Restriction>[_K]
            >;
        }
    >;
    /**
     * @summary &Restriction
     */
    "&Restriction": Restriction;
    /**
     * @summary &Rules
     */
    "&Rules"?: OBJECT_IDENTIFIER;
    /**
     * @summary &id
     */
    "&id"?: OBJECT_IDENTIFIER;
}

/**
 * @summary SupportedMatchingRestrictions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedMatchingRestrictions MATCHING-RESTRICTION ::= {...}
 * ```
 *
 * @constant
 * @type {MATCHING_RESTRICTION[]}
 *
 */
export const SupportedMatchingRestrictions: MATCHING_RESTRICTION[] = [];

/**
 * @summary MatchingUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MatchingUse ::= SEQUENCE {
 *   restrictionType    MATCHING-RESTRICTION.&id({SupportedMatchingRestrictions}),
 *   restrictionValue   MATCHING-RESTRICTION.&Restriction
 *                         ({SupportedMatchingRestrictions}{@restrictionType}),
 *   ... }
 * ```
 *
 * @class
 */
export class MatchingUse {
    constructor(
        /**
         * @summary `restrictionType`.
         * @public
         * @readonly
         */
        readonly restrictionType: OBJECT_IDENTIFIER,
        /**
         * @summary `restrictionValue`.
         * @public
         * @readonly
         */
        readonly restrictionValue: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MatchingUse
     * @description
     *
     * This takes an `object` and converts it to a `MatchingUse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MatchingUse`.
     * @returns {MatchingUse}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof MatchingUse]: MatchingUse[_K] }>
    ): MatchingUse {
        return new MatchingUse(
            _o.restrictionType,
            _o.restrictionValue,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of MatchingUse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MatchingUse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "restrictionType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "restrictionValue",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of MatchingUse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MatchingUse: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of MatchingUse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MatchingUse: $.ComponentSpec[] = [];
let _cached_decoder_for_MatchingUse: $.ASN1Decoder<MatchingUse> | null = null;
let _cached_encoder_for_MatchingUse: $.ASN1Encoder<MatchingUse> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MatchingUse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MatchingUse} The decoded data structure.
 */
export function _decode_MatchingUse(el: _Element) {
    if (!_cached_decoder_for_MatchingUse) {
        _cached_decoder_for_MatchingUse = function (el: _Element): MatchingUse {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "MatchingUse contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "restrictionType";
            sequence[1].name = "restrictionValue";
            let restrictionType!: OBJECT_IDENTIFIER;
            let restrictionValue!: _Element;
            restrictionType = $._decodeObjectIdentifier(sequence[0]);
            restrictionValue = $._decodeAny(sequence[1]);
            return new MatchingUse(
                restrictionType,
                restrictionValue,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_MatchingUse(el);
}
/**
 * @summary Encodes a(n) MatchingUse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MatchingUse, encoded as an ASN.1 Element.
 */
export function _encode_MatchingUse(
    value: MatchingUse,
    elGetter: $.ASN1Encoder<MatchingUse>
) {
    if (!_cached_encoder_for_MatchingUse) {
        _cached_encoder_for_MatchingUse = function (
            value: MatchingUse,
            elGetter: $.ASN1Encoder<MatchingUse>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.restrictionType,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(
                                value.restrictionValue,
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
    return _cached_encoder_for_MatchingUse(value, elGetter);
}

/**
 * @summary RequestAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestAttribute ::= SEQUENCE {
 *   attributeType            ATTRIBUTE.&id({SupportedAttributes}),
 *   includeSubtypes     [0]  BOOLEAN DEFAULT FALSE,
 *   selectedValues      [1]  SEQUENCE SIZE (0..MAX) OF ATTRIBUTE.&Type
 *                            ({SupportedAttributes}{@attributeType}) OPTIONAL,
 *   defaultValues       [2]  SEQUENCE SIZE (0..MAX) OF SEQUENCE {
 *     entryType                OBJECT-CLASS.&id OPTIONAL,
 *     values                   SEQUENCE OF ATTRIBUTE.&Type
 *                              ({SupportedAttributes}{@attributeType}),
 *                              ...} OPTIONAL,
 *   contexts            [3]  SEQUENCE SIZE (0..MAX) OF ContextProfile OPTIONAL,
 *   contextCombination  [4]  ContextCombination DEFAULT and:{},
 *   matchingUse         [5]  SEQUENCE SIZE (1..MAX) OF MatchingUse OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class RequestAttribute {
    constructor(
        /**
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType: OBJECT_IDENTIFIER,
        /**
         * @summary `includeSubtypes`.
         * @public
         * @readonly
         */
        readonly includeSubtypes: OPTIONAL<BOOLEAN>,
        /**
         * @summary `selectedValues`.
         * @public
         * @readonly
         */
        readonly selectedValues: OPTIONAL<_Element[]>,
        /**
         * @summary `defaultValues`.
         * @public
         * @readonly
         */
        readonly defaultValues: OPTIONAL<RequestAttribute_defaultValues_Item[]>,
        /**
         * @summary `contexts`.
         * @public
         * @readonly
         */
        readonly contexts: OPTIONAL<ContextProfile[]>,
        /**
         * @summary `contextCombination`.
         * @public
         * @readonly
         */
        readonly contextCombination: OPTIONAL<ContextCombination>,
        /**
         * @summary `matchingUse`.
         * @public
         * @readonly
         */
        readonly matchingUse: OPTIONAL<MatchingUse[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RequestAttribute
     * @description
     *
     * This takes an `object` and converts it to a `RequestAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestAttribute`.
     * @returns {RequestAttribute}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof RequestAttribute]: RequestAttribute[_K] }>
    ): RequestAttribute {
        return new RequestAttribute(
            _o.attributeType,
            _o.includeSubtypes,
            _o.selectedValues,
            _o.defaultValues,
            _o.contexts,
            _o.contextCombination,
            _o.matchingUse,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `includeSubtypes`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_includeSubtypes() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `contextCombination`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_contextCombination() {
        return { and: [] };
    }
}
/**
 * @summary The Leading Root Component Types of RequestAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RequestAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "attributeType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "includeSubtypes",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "selectedValues",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "defaultValues",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contexts",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contextCombination",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "matchingUse",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of RequestAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RequestAttribute: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of RequestAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RequestAttribute: $.ComponentSpec[] = [];
let _cached_decoder_for_RequestAttribute: $.ASN1Decoder<
    RequestAttribute
> | null = null;
let _cached_encoder_for_RequestAttribute: $.ASN1Encoder<
    RequestAttribute
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RequestAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestAttribute} The decoded data structure.
 */
export function _decode_RequestAttribute(el: _Element) {
    if (!_cached_decoder_for_RequestAttribute) {
        _cached_decoder_for_RequestAttribute = function (
            el: _Element
        ): RequestAttribute {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attributeType!: OBJECT_IDENTIFIER;
            let includeSubtypes: OPTIONAL<BOOLEAN> =
                RequestAttribute._default_value_for_includeSubtypes;
            let selectedValues: OPTIONAL<_Element[]>;
            let defaultValues: OPTIONAL<RequestAttribute_defaultValues_Item[]>;
            let contexts: OPTIONAL<ContextProfile[]>;
            let contextCombination: OPTIONAL<ContextCombination> =
                RequestAttribute._default_value_for_contextCombination;
            let matchingUse: OPTIONAL<MatchingUse[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                attributeType: (_el: _Element): void => {
                    attributeType = $._decodeObjectIdentifier(_el);
                },
                includeSubtypes: (_el: _Element): void => {
                    includeSubtypes = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                selectedValues: (_el: _Element): void => {
                    selectedValues = $._decode_explicit<_Element[]>(() =>
                        $._decodeSequenceOf<_Element>(() => $._decodeAny)
                    )(_el);
                },
                defaultValues: (_el: _Element): void => {
                    defaultValues = $._decode_explicit<
                        RequestAttribute_defaultValues_Item[]
                    >(() =>
                        $._decodeSequenceOf<
                            RequestAttribute_defaultValues_Item
                        >(() => _decode_RequestAttribute_defaultValues_Item)
                    )(_el);
                },
                contexts: (_el: _Element): void => {
                    contexts = $._decode_explicit<ContextProfile[]>(() =>
                        $._decodeSequenceOf<ContextProfile>(
                            () => _decode_ContextProfile
                        )
                    )(_el);
                },
                contextCombination: (_el: _Element): void => {
                    contextCombination = $._decode_explicit<ContextCombination>(
                        () => _decode_ContextCombination
                    )(_el);
                },
                matchingUse: (_el: _Element): void => {
                    matchingUse = $._decode_explicit<MatchingUse[]>(() =>
                        $._decodeSequenceOf<MatchingUse>(
                            () => _decode_MatchingUse
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RequestAttribute,
                _extension_additions_list_spec_for_RequestAttribute,
                _root_component_type_list_2_spec_for_RequestAttribute,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) RequestAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestAttribute, encoded as an ASN.1 Element.
 */
export function _encode_RequestAttribute(
    value: RequestAttribute,
    elGetter: $.ASN1Encoder<RequestAttribute>
) {
    if (!_cached_encoder_for_RequestAttribute) {
        _cached_encoder_for_RequestAttribute = function (
            value: RequestAttribute,
            elGetter: $.ASN1Encoder<RequestAttribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.attributeType,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.includeSubtypes ===
                                undefined ||
                            $.deepEq(
                                value.includeSubtypes,
                                RequestAttribute._default_value_for_includeSubtypes
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.includeSubtypes, $.BER),
                            /* IF_ABSENT  */ value.selectedValues === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSequenceOf<_Element>(
                                              () => $._encodeAny,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.selectedValues, $.BER),
                            /* IF_ABSENT  */ value.defaultValues === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSequenceOf<
                                              RequestAttribute_defaultValues_Item
                                          >(
                                              () =>
                                                  _encode_RequestAttribute_defaultValues_Item,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.defaultValues, $.BER),
                            /* IF_ABSENT  */ value.contexts === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSequenceOf<ContextProfile>(
                                              () => _encode_ContextProfile,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.contexts, $.BER),
                            /* IF_DEFAULT */ value.contextCombination ===
                                undefined ||
                            $.deepEq(
                                value.contextCombination,
                                RequestAttribute._default_value_for_contextCombination
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_ContextCombination,
                                      $.BER
                                  )(value.contextCombination, $.BER),
                            /* IF_ABSENT  */ value.matchingUse === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () =>
                                          $._encodeSequenceOf<MatchingUse>(
                                              () => _encode_MatchingUse,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.matchingUse, $.BER),
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
    return _cached_encoder_for_RequestAttribute(value, elGetter);
}

/**
 * @summary AttributeCombination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCombination  ::=  CHOICE {
 *   attribute  [0]  AttributeType,
 *   and        [1]  SEQUENCE OF AttributeCombination,
 *   or         [2]  SEQUENCE OF AttributeCombination,
 *   not        [3]  AttributeCombination,
 *   ... }
 * ```
 */
export type AttributeCombination =
    | { attribute: AttributeType } /* CHOICE_ALT_ROOT */
    | { and: AttributeCombination[] } /* CHOICE_ALT_ROOT */
    | { or: AttributeCombination[] } /* CHOICE_ALT_ROOT */
    | { not: AttributeCombination } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
let _cached_decoder_for_AttributeCombination: $.ASN1Decoder<
    AttributeCombination
> | null = null;
let _cached_encoder_for_AttributeCombination: $.ASN1Encoder<
    AttributeCombination
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCombination
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCombination} The decoded data structure.
 */
export function _decode_AttributeCombination(el: _Element) {
    if (!_cached_decoder_for_AttributeCombination) {
        _cached_decoder_for_AttributeCombination = $._decode_extensible_choice<
            AttributeCombination
        >({
            "CONTEXT 0": [
                "attribute",
                $._decode_explicit<AttributeType>(() => _decode_AttributeType),
            ],
            "CONTEXT 1": [
                "and",
                $._decode_explicit<AttributeCombination[]>(() =>
                    $._decodeSequenceOf<AttributeCombination>(
                        () => _decode_AttributeCombination
                    )
                ),
            ],
            "CONTEXT 2": [
                "or",
                $._decode_explicit<AttributeCombination[]>(() =>
                    $._decodeSequenceOf<AttributeCombination>(
                        () => _decode_AttributeCombination
                    )
                ),
            ],
            "CONTEXT 3": [
                "not",
                $._decode_explicit<AttributeCombination>(
                    () => _decode_AttributeCombination
                ),
            ],
        });
    }
    return _cached_decoder_for_AttributeCombination(el);
}
/**
 * @summary Encodes a(n) AttributeCombination into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCombination, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCombination(
    value: AttributeCombination,
    elGetter: $.ASN1Encoder<AttributeCombination>
) {
    if (!_cached_encoder_for_AttributeCombination) {
        _cached_encoder_for_AttributeCombination = $._encode_choice<
            AttributeCombination
        >(
            {
                attribute: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_AttributeType,
                    $.BER
                ),
                and: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<AttributeCombination>(
                            () => _encode_AttributeCombination,
                            $.BER
                        ),
                    $.BER
                ),
                or: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSequenceOf<AttributeCombination>(
                            () => _encode_AttributeCombination,
                            $.BER
                        ),
                    $.BER
                ),
                not: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_AttributeCombination,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AttributeCombination(value, elGetter);
}

/**
 * @summary ResultAttribute_outputValues
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultAttribute-outputValues ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ResultAttribute_outputValues =
    | { selectedValues: _Element[] } /* CHOICE_ALT_ROOT */
    | { matchedValuesOnly: NULL } /* CHOICE_ALT_ROOT */;
let _cached_decoder_for_ResultAttribute_outputValues: $.ASN1Decoder<
    ResultAttribute_outputValues
> | null = null;
let _cached_encoder_for_ResultAttribute_outputValues: $.ASN1Encoder<
    ResultAttribute_outputValues
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ResultAttribute_outputValues
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResultAttribute_outputValues} The decoded data structure.
 */
export function _decode_ResultAttribute_outputValues(el: _Element) {
    if (!_cached_decoder_for_ResultAttribute_outputValues) {
        _cached_decoder_for_ResultAttribute_outputValues = $._decode_inextensible_choice<
            ResultAttribute_outputValues
        >({
            "UNIVERSAL 16": [
                "selectedValues",
                $._decodeSequenceOf<_Element>(() => $._decodeAny),
            ],
            "UNIVERSAL 5": ["matchedValuesOnly", $._decodeNull],
        });
    }
    return _cached_decoder_for_ResultAttribute_outputValues(el);
}
/**
 * @summary Encodes a(n) ResultAttribute_outputValues into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultAttribute_outputValues, encoded as an ASN.1 Element.
 */
export function _encode_ResultAttribute_outputValues(
    value: ResultAttribute_outputValues,
    elGetter: $.ASN1Encoder<ResultAttribute_outputValues>
) {
    if (!_cached_encoder_for_ResultAttribute_outputValues) {
        _cached_encoder_for_ResultAttribute_outputValues = $._encode_choice<
            ResultAttribute_outputValues
        >(
            {
                selectedValues: $._encodeSequenceOf<_Element>(
                    () => $._encodeAny,
                    $.BER
                ),
                matchedValuesOnly: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ResultAttribute_outputValues(value, elGetter);
}

/**
 * @summary ResultAttribute
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResultAttribute ::= SEQUENCE {
 *   attributeType      ATTRIBUTE.&id({SupportedAttributes}),
 *   outputValues       CHOICE {
 *     selectedValues     SEQUENCE OF ATTRIBUTE.&Type
 *                        ({SupportedAttributes}{@attributeType}),
 *     matchedValuesOnly  NULL } OPTIONAL,
 *   contexts      [0]  SEQUENCE SIZE (1..MAX) OF ContextProfile OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ResultAttribute {
    constructor(
        /**
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType: OBJECT_IDENTIFIER,
        /**
         * @summary `outputValues`.
         * @public
         * @readonly
         */
        readonly outputValues: OPTIONAL<ResultAttribute_outputValues>,
        /**
         * @summary `contexts`.
         * @public
         * @readonly
         */
        readonly contexts: OPTIONAL<ContextProfile[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ResultAttribute
     * @description
     *
     * This takes an `object` and converts it to a `ResultAttribute`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResultAttribute`.
     * @returns {ResultAttribute}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ResultAttribute]: ResultAttribute[_K] }>
    ): ResultAttribute {
        return new ResultAttribute(
            _o.attributeType,
            _o.outputValues,
            _o.contexts,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of ResultAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResultAttribute: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "attributeType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "outputValues",
        true,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contexts",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ResultAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResultAttribute: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ResultAttribute
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResultAttribute: $.ComponentSpec[] = [];
let _cached_decoder_for_ResultAttribute: $.ASN1Decoder<
    ResultAttribute
> | null = null;
let _cached_encoder_for_ResultAttribute: $.ASN1Encoder<
    ResultAttribute
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ResultAttribute
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResultAttribute} The decoded data structure.
 */
export function _decode_ResultAttribute(el: _Element) {
    if (!_cached_decoder_for_ResultAttribute) {
        _cached_decoder_for_ResultAttribute = function (
            el: _Element
        ): ResultAttribute {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attributeType!: OBJECT_IDENTIFIER;
            let outputValues: OPTIONAL<ResultAttribute_outputValues>;
            let contexts: OPTIONAL<ContextProfile[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                attributeType: (_el: _Element): void => {
                    attributeType = $._decodeObjectIdentifier(_el);
                },
                outputValues: (_el: _Element): void => {
                    outputValues = _decode_ResultAttribute_outputValues(_el);
                },
                contexts: (_el: _Element): void => {
                    contexts = $._decode_explicit<ContextProfile[]>(() =>
                        $._decodeSequenceOf<ContextProfile>(
                            () => _decode_ContextProfile
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ResultAttribute,
                _extension_additions_list_spec_for_ResultAttribute,
                _root_component_type_list_2_spec_for_ResultAttribute,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) ResultAttribute into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultAttribute, encoded as an ASN.1 Element.
 */
export function _encode_ResultAttribute(
    value: ResultAttribute,
    elGetter: $.ASN1Encoder<ResultAttribute>
) {
    if (!_cached_encoder_for_ResultAttribute) {
        _cached_encoder_for_ResultAttribute = function (
            value: ResultAttribute,
            elGetter: $.ASN1Encoder<ResultAttribute>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.attributeType,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.outputValues === undefined
                                ? undefined
                                : _encode_ResultAttribute_outputValues(
                                      value.outputValues,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.contexts === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () =>
                                          $._encodeSequenceOf<ContextProfile>(
                                              () => _encode_ContextProfile,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.contexts, $.BER),
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
    return _cached_encoder_for_ResultAttribute(value, elGetter);
}

/**
 * @summary ControlOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlOptions ::= SEQUENCE {
 *   serviceControls   [0]  ServiceControlOptions DEFAULT {},
 *   searchOptions     [1]  SearchControlOptions  DEFAULT {searchAliases},
 *   hierarchyOptions  [2]  HierarchySelections   OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ControlOptions {
    constructor(
        /**
         * @summary `serviceControls`.
         * @public
         * @readonly
         */
        readonly serviceControls: OPTIONAL<ServiceControlOptions>,
        /**
         * @summary `searchOptions`.
         * @public
         * @readonly
         */
        readonly searchOptions: OPTIONAL<SearchControlOptions>,
        /**
         * @summary `hierarchyOptions`.
         * @public
         * @readonly
         */
        readonly hierarchyOptions: OPTIONAL<HierarchySelections>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ControlOptions
     * @description
     *
     * This takes an `object` and converts it to a `ControlOptions`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ControlOptions`.
     * @returns {ControlOptions}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ControlOptions]: ControlOptions[_K] }>
    ): ControlOptions {
        return new ControlOptions(
            _o.serviceControls,
            _o.searchOptions,
            _o.hierarchyOptions,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `serviceControls`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_serviceControls() {
        return new Uint8ClampedArray([]);
    }
    /**
     * @summary Getter that returns the default value for `searchOptions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_searchOptions() {
        return (() => {
            const _ret = new Uint8ClampedArray(
                Math.max(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)
            );
            _ret[SearchControlOptions_searchAliases] = TRUE_BIT;
            return _ret;
        })();
    }
}
/**
 * @summary The Leading Root Component Types of ControlOptions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ControlOptions: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "serviceControls",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "searchOptions",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "hierarchyOptions",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of ControlOptions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ControlOptions: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of ControlOptions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ControlOptions: $.ComponentSpec[] = [];
let _cached_decoder_for_ControlOptions: $.ASN1Decoder<
    ControlOptions
> | null = null;
let _cached_encoder_for_ControlOptions: $.ASN1Encoder<
    ControlOptions
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ControlOptions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ControlOptions} The decoded data structure.
 */
export function _decode_ControlOptions(el: _Element) {
    if (!_cached_decoder_for_ControlOptions) {
        _cached_decoder_for_ControlOptions = function (
            el: _Element
        ): ControlOptions {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let serviceControls: OPTIONAL<ServiceControlOptions> =
                ControlOptions._default_value_for_serviceControls;
            let searchOptions: OPTIONAL<SearchControlOptions> =
                ControlOptions._default_value_for_searchOptions;
            let hierarchyOptions: OPTIONAL<HierarchySelections>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                serviceControls: (_el: _Element): void => {
                    serviceControls = $._decode_explicit<ServiceControlOptions>(
                        () => _decode_ServiceControlOptions
                    )(_el);
                },
                searchOptions: (_el: _Element): void => {
                    searchOptions = $._decode_explicit<SearchControlOptions>(
                        () => _decode_SearchControlOptions
                    )(_el);
                },
                hierarchyOptions: (_el: _Element): void => {
                    hierarchyOptions = $._decode_explicit<HierarchySelections>(
                        () => _decode_HierarchySelections
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ControlOptions,
                _extension_additions_list_spec_for_ControlOptions,
                _root_component_type_list_2_spec_for_ControlOptions,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) ControlOptions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlOptions, encoded as an ASN.1 Element.
 */
export function _encode_ControlOptions(
    value: ControlOptions,
    elGetter: $.ASN1Encoder<ControlOptions>
) {
    if (!_cached_encoder_for_ControlOptions) {
        _cached_encoder_for_ControlOptions = function (
            value: ControlOptions,
            elGetter: $.ASN1Encoder<ControlOptions>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.serviceControls ===
                                undefined ||
                            $.deepEq(
                                value.serviceControls,
                                ControlOptions._default_value_for_serviceControls
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_ServiceControlOptions,
                                      $.BER
                                  )(value.serviceControls, $.BER),
                            /* IF_DEFAULT */ value.searchOptions ===
                                undefined ||
                            $.deepEq(
                                value.searchOptions,
                                ControlOptions._default_value_for_searchOptions
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_SearchControlOptions,
                                      $.BER
                                  )(value.searchOptions, $.BER),
                            /* IF_ABSENT  */ value.hierarchyOptions ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_HierarchySelections,
                                      $.BER
                                  )(value.hierarchyOptions, $.BER),
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
    return _cached_encoder_for_ControlOptions(value, elGetter);
}

/**
 * @summary Mapping
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Mapping ::= SEQUENCE {
 *   mappingFunction  OBJECT IDENTIFIER (CONSTRAINED BY {-- shall be an--
 *                      -- object identifier of a mapping-based matching algorithm -- }),
 *   level            INTEGER DEFAULT 0,
 *   ... }
 * ```
 *
 * @class
 */
export class Mapping {
    constructor(
        /**
         * @summary `mappingFunction`.
         * @public
         * @readonly
         */
        readonly mappingFunction: OBJECT_IDENTIFIER,
        /**
         * @summary `level`.
         * @public
         * @readonly
         */
        readonly level: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Mapping
     * @description
     *
     * This takes an `object` and converts it to a `Mapping`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Mapping`.
     * @returns {Mapping}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof Mapping]: Mapping[_K] }>
    ): Mapping {
        return new Mapping(
            _o.mappingFunction,
            _o.level,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `level`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_level() {
        return 0;
    }
}
/**
 * @summary The Leading Root Component Types of Mapping
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Mapping: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mappingFunction",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "level",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of Mapping
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Mapping: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of Mapping
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Mapping: $.ComponentSpec[] = [];
let _cached_decoder_for_Mapping: $.ASN1Decoder<Mapping> | null = null;
let _cached_encoder_for_Mapping: $.ASN1Encoder<Mapping> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) Mapping
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Mapping} The decoded data structure.
 */
export function _decode_Mapping(el: _Element) {
    if (!_cached_decoder_for_Mapping) {
        _cached_decoder_for_Mapping = function (el: _Element): Mapping {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mappingFunction!: OBJECT_IDENTIFIER;
            let level: OPTIONAL<INTEGER> = Mapping._default_value_for_level;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                mappingFunction: (_el: _Element): void => {
                    mappingFunction = $._decodeObjectIdentifier(_el);
                },
                level: (_el: _Element): void => {
                    level = $._decodeInteger(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Mapping,
                _extension_additions_list_spec_for_Mapping,
                _root_component_type_list_2_spec_for_Mapping,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) Mapping into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Mapping, encoded as an ASN.1 Element.
 */
export function _encode_Mapping(
    value: Mapping,
    elGetter: $.ASN1Encoder<Mapping>
) {
    if (!_cached_encoder_for_Mapping) {
        _cached_encoder_for_Mapping = function (
            value: Mapping,
            elGetter: $.ASN1Encoder<Mapping>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.mappingFunction,
                                $.BER
                            ),
                            /* IF_DEFAULT */ value.level === undefined ||
                            $.deepEq(
                                value.level,
                                Mapping._default_value_for_level
                            )
                                ? undefined
                                : $._encodeInteger(value.level, $.BER),
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
    return _cached_encoder_for_Mapping(value, elGetter);
}

/**
 * @summary MRSubstitution
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MRSubstitution ::= SEQUENCE {
 *   attribute             AttributeType,
 *   oldMatchingRule  [0]  MATCHING-RULE.&id OPTIONAL,
 *   newMatchingRule  [1]  MATCHING-RULE.&id OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class MRSubstitution {
    constructor(
        /**
         * @summary `attribute`.
         * @public
         * @readonly
         */
        readonly attribute: AttributeType,
        /**
         * @summary `oldMatchingRule`.
         * @public
         * @readonly
         */
        readonly oldMatchingRule: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `newMatchingRule`.
         * @public
         * @readonly
         */
        readonly newMatchingRule: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MRSubstitution
     * @description
     *
     * This takes an `object` and converts it to a `MRSubstitution`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MRSubstitution`.
     * @returns {MRSubstitution}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof MRSubstitution]: MRSubstitution[_K] }>
    ): MRSubstitution {
        return new MRSubstitution(
            _o.attribute,
            _o.oldMatchingRule,
            _o.newMatchingRule,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of MRSubstitution
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MRSubstitution: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "attribute",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "oldMatchingRule",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "newMatchingRule",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of MRSubstitution
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MRSubstitution: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of MRSubstitution
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MRSubstitution: $.ComponentSpec[] = [];
let _cached_decoder_for_MRSubstitution: $.ASN1Decoder<
    MRSubstitution
> | null = null;
let _cached_encoder_for_MRSubstitution: $.ASN1Encoder<
    MRSubstitution
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MRSubstitution
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MRSubstitution} The decoded data structure.
 */
export function _decode_MRSubstitution(el: _Element) {
    if (!_cached_decoder_for_MRSubstitution) {
        _cached_decoder_for_MRSubstitution = function (
            el: _Element
        ): MRSubstitution {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let attribute!: AttributeType;
            let oldMatchingRule: OPTIONAL<OBJECT_IDENTIFIER>;
            let newMatchingRule: OPTIONAL<OBJECT_IDENTIFIER>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                attribute: (_el: _Element): void => {
                    attribute = _decode_AttributeType(_el);
                },
                oldMatchingRule: (_el: _Element): void => {
                    oldMatchingRule = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                newMatchingRule: (_el: _Element): void => {
                    newMatchingRule = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MRSubstitution,
                _extension_additions_list_spec_for_MRSubstitution,
                _root_component_type_list_2_spec_for_MRSubstitution,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) MRSubstitution into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MRSubstitution, encoded as an ASN.1 Element.
 */
export function _encode_MRSubstitution(
    value: MRSubstitution,
    elGetter: $.ASN1Encoder<MRSubstitution>
) {
    if (!_cached_encoder_for_MRSubstitution) {
        _cached_encoder_for_MRSubstitution = function (
            value: MRSubstitution,
            elGetter: $.ASN1Encoder<MRSubstitution>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AttributeType(
                                value.attribute,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.oldMatchingRule === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.oldMatchingRule, $.BER),
                            /* IF_ABSENT  */ value.newMatchingRule === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.newMatchingRule, $.BER),
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
    return _cached_encoder_for_MRSubstitution(value, elGetter);
}

/**
 * @summary MRMapping
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MRMapping ::= SEQUENCE {
 *   mapping       [0]  SEQUENCE SIZE (1..MAX) OF Mapping OPTIONAL,
 *   substitution  [1]  SEQUENCE SIZE (1..MAX) OF MRSubstitution OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class MRMapping {
    constructor(
        /**
         * @summary `mapping`.
         * @public
         * @readonly
         */
        readonly mapping: OPTIONAL<Mapping[]>,
        /**
         * @summary `substitution`.
         * @public
         * @readonly
         */
        readonly substitution: OPTIONAL<MRSubstitution[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MRMapping
     * @description
     *
     * This takes an `object` and converts it to a `MRMapping`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MRMapping`.
     * @returns {MRMapping}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof MRMapping]: MRMapping[_K] }>
    ): MRMapping {
        return new MRMapping(
            _o.mapping,
            _o.substitution,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of MRMapping
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MRMapping: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mapping",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "substitution",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of MRMapping
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MRMapping: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of MRMapping
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MRMapping: $.ComponentSpec[] = [];
let _cached_decoder_for_MRMapping: $.ASN1Decoder<MRMapping> | null = null;
let _cached_encoder_for_MRMapping: $.ASN1Encoder<MRMapping> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) MRMapping
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MRMapping} The decoded data structure.
 */
export function _decode_MRMapping(el: _Element) {
    if (!_cached_decoder_for_MRMapping) {
        _cached_decoder_for_MRMapping = function (el: _Element): MRMapping {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mapping: OPTIONAL<Mapping[]>;
            let substitution: OPTIONAL<MRSubstitution[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                mapping: (_el: _Element): void => {
                    mapping = $._decode_explicit<Mapping[]>(() =>
                        $._decodeSequenceOf<Mapping>(() => _decode_Mapping)
                    )(_el);
                },
                substitution: (_el: _Element): void => {
                    substitution = $._decode_explicit<MRSubstitution[]>(() =>
                        $._decodeSequenceOf<MRSubstitution>(
                            () => _decode_MRSubstitution
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MRMapping,
                _extension_additions_list_spec_for_MRMapping,
                _root_component_type_list_2_spec_for_MRMapping,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) MRMapping into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MRMapping, encoded as an ASN.1 Element.
 */
export function _encode_MRMapping(
    value: MRMapping,
    elGetter: $.ASN1Encoder<MRMapping>
) {
    if (!_cached_encoder_for_MRMapping) {
        _cached_encoder_for_MRMapping = function (
            value: MRMapping,
            elGetter: $.ASN1Encoder<MRMapping>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.mapping === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () =>
                                          $._encodeSequenceOf<Mapping>(
                                              () => _encode_Mapping,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.mapping, $.BER),
                            /* IF_ABSENT  */ value.substitution === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSequenceOf<MRSubstitution>(
                                              () => _encode_MRSubstitution,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.substitution, $.BER),
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
    return _cached_encoder_for_MRMapping(value, elGetter);
}

/**
 * @summary RelaxationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelaxationPolicy ::= SEQUENCE {
 *   basic        [0]  MRMapping DEFAULT {},
 *   tightenings  [1]  SEQUENCE SIZE (1..MAX) OF MRMapping OPTIONAL,
 *   relaxations  [2]  SEQUENCE SIZE (1..MAX) OF MRMapping OPTIONAL,
 *   maximum      [3]  INTEGER OPTIONAL, -- mandatory if tightenings is present
 *   minimum      [4]  INTEGER DEFAULT 1,
 *   ... }
 * ```
 *
 * @class
 */
export class RelaxationPolicy {
    constructor(
        /**
         * @summary `basic`.
         * @public
         * @readonly
         */
        readonly basic: OPTIONAL<MRMapping>,
        /**
         * @summary `tightenings`.
         * @public
         * @readonly
         */
        readonly tightenings: OPTIONAL<MRMapping[]>,
        /**
         * @summary `relaxations`.
         * @public
         * @readonly
         */
        readonly relaxations: OPTIONAL<MRMapping[]>,
        /**
         * @summary `maximum`.
         * @public
         * @readonly
         */
        readonly maximum: OPTIONAL<INTEGER>,
        /**
         * @summary `minimum`.
         * @public
         * @readonly
         */
        readonly minimum: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RelaxationPolicy
     * @description
     *
     * This takes an `object` and converts it to a `RelaxationPolicy`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RelaxationPolicy`.
     * @returns {RelaxationPolicy}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof RelaxationPolicy]: RelaxationPolicy[_K] }>
    ): RelaxationPolicy {
        return new RelaxationPolicy(
            _o.basic,
            _o.tightenings,
            _o.relaxations,
            _o.maximum,
            _o.minimum,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `basic`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_basic() {
        return MRMapping._from_object({});
    }
    /**
     * @summary Getter that returns the default value for `minimum`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_minimum() {
        return 1;
    }
}
/**
 * @summary The Leading Root Component Types of RelaxationPolicy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RelaxationPolicy: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "basic",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "tightenings",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "relaxations",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "maximum",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "minimum",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of RelaxationPolicy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RelaxationPolicy: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of RelaxationPolicy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RelaxationPolicy: $.ComponentSpec[] = [];
let _cached_decoder_for_RelaxationPolicy: $.ASN1Decoder<
    RelaxationPolicy
> | null = null;
let _cached_encoder_for_RelaxationPolicy: $.ASN1Encoder<
    RelaxationPolicy
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) RelaxationPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelaxationPolicy} The decoded data structure.
 */
export function _decode_RelaxationPolicy(el: _Element) {
    if (!_cached_decoder_for_RelaxationPolicy) {
        _cached_decoder_for_RelaxationPolicy = function (
            el: _Element
        ): RelaxationPolicy {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let basic: OPTIONAL<MRMapping> =
                RelaxationPolicy._default_value_for_basic;
            let tightenings: OPTIONAL<MRMapping[]>;
            let relaxations: OPTIONAL<MRMapping[]>;
            let maximum: OPTIONAL<INTEGER>;
            let minimum: OPTIONAL<INTEGER> =
                RelaxationPolicy._default_value_for_minimum;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                basic: (_el: _Element): void => {
                    basic = $._decode_explicit<MRMapping>(
                        () => _decode_MRMapping
                    )(_el);
                },
                tightenings: (_el: _Element): void => {
                    tightenings = $._decode_explicit<MRMapping[]>(() =>
                        $._decodeSequenceOf<MRMapping>(() => _decode_MRMapping)
                    )(_el);
                },
                relaxations: (_el: _Element): void => {
                    relaxations = $._decode_explicit<MRMapping[]>(() =>
                        $._decodeSequenceOf<MRMapping>(() => _decode_MRMapping)
                    )(_el);
                },
                maximum: (_el: _Element): void => {
                    maximum = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                minimum: (_el: _Element): void => {
                    minimum = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RelaxationPolicy,
                _extension_additions_list_spec_for_RelaxationPolicy,
                _root_component_type_list_2_spec_for_RelaxationPolicy,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) RelaxationPolicy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelaxationPolicy, encoded as an ASN.1 Element.
 */
export function _encode_RelaxationPolicy(
    value: RelaxationPolicy,
    elGetter: $.ASN1Encoder<RelaxationPolicy>
) {
    if (!_cached_encoder_for_RelaxationPolicy) {
        _cached_encoder_for_RelaxationPolicy = function (
            value: RelaxationPolicy,
            elGetter: $.ASN1Encoder<RelaxationPolicy>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.basic === undefined ||
                            $.deepEq(
                                value.basic,
                                RelaxationPolicy._default_value_for_basic
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_MRMapping,
                                      $.BER
                                  )(value.basic, $.BER),
                            /* IF_ABSENT  */ value.tightenings === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSequenceOf<MRMapping>(
                                              () => _encode_MRMapping,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.tightenings, $.BER),
                            /* IF_ABSENT  */ value.relaxations === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSequenceOf<MRMapping>(
                                              () => _encode_MRMapping,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.relaxations, $.BER),
                            /* IF_ABSENT  */ value.maximum === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.maximum, $.BER),
                            /* IF_DEFAULT */ value.minimum === undefined ||
                            $.deepEq(
                                value.minimum,
                                RelaxationPolicy._default_value_for_minimum
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.minimum, $.BER),
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
    return _cached_encoder_for_RelaxationPolicy(value, elGetter);
}

/**
 * @summary AllowedSubset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AllowedSubset  ::=  BIT STRING {baseObject(0), oneLevel(1), wholeSubtree(2)}
 * ```
 */
export type AllowedSubset = BIT_STRING;
/**
 * @summary AllowedSubset_baseObject
 * @constant
 */
export const AllowedSubset_baseObject: number = 0; /* LONG_NAMED_BIT */
/**
 * @summary AllowedSubset_oneLevel
 * @constant
 */
export const AllowedSubset_oneLevel: number = 1; /* LONG_NAMED_BIT */
/**
 * @summary AllowedSubset_wholeSubtree
 * @constant
 */
export const AllowedSubset_wholeSubtree: number = 2; /* LONG_NAMED_BIT */
let _cached_decoder_for_AllowedSubset: $.ASN1Decoder<
    AllowedSubset
> | null = null;
let _cached_encoder_for_AllowedSubset: $.ASN1Encoder<
    AllowedSubset
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) AllowedSubset
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AllowedSubset} The decoded data structure.
 */
export function _decode_AllowedSubset(el: _Element) {
    if (!_cached_decoder_for_AllowedSubset) {
        _cached_decoder_for_AllowedSubset = $._decodeBitString;
    }
    return _cached_decoder_for_AllowedSubset(el);
}
/**
 * @summary Encodes a(n) AllowedSubset into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllowedSubset, encoded as an ASN.1 Element.
 */
export function _encode_AllowedSubset(
    value: AllowedSubset,
    elGetter: $.ASN1Encoder<AllowedSubset>
) {
    if (!_cached_encoder_for_AllowedSubset) {
        _cached_encoder_for_AllowedSubset = $._encodeBitString;
    }
    return _cached_encoder_for_AllowedSubset(value, elGetter);
}

/**
 * @summary ImposedSubset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ImposedSubset ::= ENUMERATED {baseObject(0), oneLevel(1), wholeSubtree(2),...}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ImposedSubset {
    baseObject = 0,
    oneLevel = 1,
    wholeSubtree = 2,
}
/**
 * @summary ImposedSubset
 */
export type ImposedSubset = _enum_for_ImposedSubset | ENUMERATED;
/**
 * @summary ImposedSubset_baseObject
 * @constant
 * @type {number}
 */
export const ImposedSubset_baseObject: ImposedSubset = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ImposedSubset_oneLevel
 * @constant
 * @type {number}
 */
export const ImposedSubset_oneLevel: ImposedSubset = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/**
 * @summary ImposedSubset_wholeSubtree
 * @constant
 * @type {number}
 */
export const ImposedSubset_wholeSubtree: ImposedSubset = 2; /* LONG_NAMED_ENUMERATED_VALUE */
let _cached_decoder_for_ImposedSubset: $.ASN1Decoder<
    ImposedSubset
> | null = null;
let _cached_encoder_for_ImposedSubset: $.ASN1Encoder<
    ImposedSubset
> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) ImposedSubset
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ImposedSubset} The decoded data structure.
 */
export function _decode_ImposedSubset(el: _Element) {
    if (!_cached_decoder_for_ImposedSubset) {
        _cached_decoder_for_ImposedSubset = $._decodeEnumerated;
    }
    return _cached_decoder_for_ImposedSubset(el);
}
/**
 * @summary Encodes a(n) ImposedSubset into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ImposedSubset, encoded as an ASN.1 Element.
 */
export function _encode_ImposedSubset(
    value: ImposedSubset,
    elGetter: $.ASN1Encoder<ImposedSubset>
) {
    if (!_cached_encoder_for_ImposedSubset) {
        _cached_encoder_for_ImposedSubset = $._encodeEnumerated;
    }
    return _cached_encoder_for_ImposedSubset(value, elGetter);
}

/**
 * @summary EntryLimit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryLimit ::= SEQUENCE {
 *   default  INTEGER,
 *   max      INTEGER,
 *   ... }
 * ```
 *
 * @class
 */
export class EntryLimit {
    constructor(
        /**
         * @summary `default_`.
         * @public
         * @readonly
         */
        readonly default_: INTEGER,
        /**
         * @summary `max`.
         * @public
         * @readonly
         */
        readonly max: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EntryLimit
     * @description
     *
     * This takes an `object` and converts it to a `EntryLimit`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EntryLimit`.
     * @returns {EntryLimit}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof EntryLimit]: EntryLimit[_K] }>
    ): EntryLimit {
        return new EntryLimit(
            _o.default_,
            _o.max,
            _o._unrecognizedExtensionsList
        );
    }
}
/**
 * @summary The Leading Root Component Types of EntryLimit
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EntryLimit: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "default",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "max",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of EntryLimit
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EntryLimit: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of EntryLimit
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EntryLimit: $.ComponentSpec[] = [];
let _cached_decoder_for_EntryLimit: $.ASN1Decoder<EntryLimit> | null = null;
let _cached_encoder_for_EntryLimit: $.ASN1Encoder<EntryLimit> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) EntryLimit
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryLimit} The decoded data structure.
 */
export function _decode_EntryLimit(el: _Element) {
    if (!_cached_decoder_for_EntryLimit) {
        _cached_decoder_for_EntryLimit = function (el: _Element): EntryLimit {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "EntryLimit contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "default";
            sequence[1].name = "max";
            let default_!: INTEGER;
            let max!: INTEGER;
            default_ = $._decodeInteger(sequence[0]);
            max = $._decodeInteger(sequence[1]);
            return new EntryLimit(default_, max, sequence.slice(2));
        };
    }
    return _cached_decoder_for_EntryLimit(el);
}
/**
 * @summary Encodes a(n) EntryLimit into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryLimit, encoded as an ASN.1 Element.
 */
export function _encode_EntryLimit(
    value: EntryLimit,
    elGetter: $.ASN1Encoder<EntryLimit>
) {
    if (!_cached_encoder_for_EntryLimit) {
        _cached_encoder_for_EntryLimit = function (
            value: EntryLimit,
            elGetter: $.ASN1Encoder<EntryLimit>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(
                                value.default_,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeInteger(value.max, $.BER),
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
    return _cached_encoder_for_EntryLimit(value, elGetter);
}

/**
 * @summary SearchRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRule ::= SEQUENCE {
 *   COMPONENTS OF SearchRuleId,
 *   serviceType           [1]  OBJECT IDENTIFIER                          OPTIONAL,
 *   userClass             [2]  INTEGER                                    OPTIONAL,
 *   inputAttributeTypes   [3]  SEQUENCE SIZE (0..MAX) OF RequestAttribute OPTIONAL,
 *   attributeCombination  [4]  AttributeCombination                       DEFAULT and:{},
 *   outputAttributeTypes  [5]  SEQUENCE SIZE (1..MAX) OF ResultAttribute  OPTIONAL,
 *   defaultControls       [6]  ControlOptions                             OPTIONAL,
 *   mandatoryControls     [7]  ControlOptions                             OPTIONAL,
 *   searchRuleControls    [8]  ControlOptions                             OPTIONAL,
 *   familyGrouping        [9]  FamilyGrouping                             OPTIONAL,
 *   familyReturn          [10] FamilyReturn                               OPTIONAL,
 *   relaxation            [11] RelaxationPolicy                           OPTIONAL,
 *   additionalControl     [12] SEQUENCE SIZE (1..MAX) OF AttributeType    OPTIONAL,
 *   allowedSubset         [13] AllowedSubset                              DEFAULT '111'B,
 *   imposedSubset         [14] ImposedSubset                              OPTIONAL,
 *   entryLimit            [15] EntryLimit                                 OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class SearchRule {
    constructor(
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: INTEGER /* REPLICATED_COMPONENT */,
        /**
         * @summary `dmdId`.
         * @public
         * @readonly
         */
        readonly dmdId: OBJECT_IDENTIFIER /* REPLICATED_COMPONENT */,
        /**
         * @summary `serviceType`.
         * @public
         * @readonly
         */
        readonly serviceType: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `userClass`.
         * @public
         * @readonly
         */
        readonly userClass: OPTIONAL<INTEGER>,
        /**
         * @summary `inputAttributeTypes`.
         * @public
         * @readonly
         */
        readonly inputAttributeTypes: OPTIONAL<RequestAttribute[]>,
        /**
         * @summary `attributeCombination`.
         * @public
         * @readonly
         */
        readonly attributeCombination: OPTIONAL<AttributeCombination>,
        /**
         * @summary `outputAttributeTypes`.
         * @public
         * @readonly
         */
        readonly outputAttributeTypes: OPTIONAL<ResultAttribute[]>,
        /**
         * @summary `defaultControls`.
         * @public
         * @readonly
         */
        readonly defaultControls: OPTIONAL<ControlOptions>,
        /**
         * @summary `mandatoryControls`.
         * @public
         * @readonly
         */
        readonly mandatoryControls: OPTIONAL<ControlOptions>,
        /**
         * @summary `searchRuleControls`.
         * @public
         * @readonly
         */
        readonly searchRuleControls: OPTIONAL<ControlOptions>,
        /**
         * @summary `familyGrouping`.
         * @public
         * @readonly
         */
        readonly familyGrouping: OPTIONAL<FamilyGrouping>,
        /**
         * @summary `familyReturn`.
         * @public
         * @readonly
         */
        readonly familyReturn: OPTIONAL<FamilyReturn>,
        /**
         * @summary `relaxation`.
         * @public
         * @readonly
         */
        readonly relaxation: OPTIONAL<RelaxationPolicy>,
        /**
         * @summary `additionalControl`.
         * @public
         * @readonly
         */
        readonly additionalControl: OPTIONAL<AttributeType[]>,
        /**
         * @summary `allowedSubset`.
         * @public
         * @readonly
         */
        readonly allowedSubset: OPTIONAL<AllowedSubset>,
        /**
         * @summary `imposedSubset`.
         * @public
         * @readonly
         */
        readonly imposedSubset: OPTIONAL<ImposedSubset>,
        /**
         * @summary `entryLimit`.
         * @public
         * @readonly
         */
        readonly entryLimit: OPTIONAL<EntryLimit>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SearchRule
     * @description
     *
     * This takes an `object` and converts it to a `SearchRule`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchRule`.
     * @returns {SearchRule}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SearchRule]: SearchRule[_K] }>
    ): SearchRule {
        return new SearchRule(
            _o.id,
            _o.dmdId,
            _o.serviceType,
            _o.userClass,
            _o.inputAttributeTypes,
            _o.attributeCombination,
            _o.outputAttributeTypes,
            _o.defaultControls,
            _o.mandatoryControls,
            _o.searchRuleControls,
            _o.familyGrouping,
            _o.familyReturn,
            _o.relaxation,
            _o.additionalControl,
            _o.allowedSubset,
            _o.imposedSubset,
            _o.entryLimit,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `attributeCombination`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_attributeCombination() {
        return { and: [] };
    }
    /**
     * @summary Getter that returns the default value for `allowedSubset`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_allowedSubset() {
        return new Uint8ClampedArray([1, 1, 1]);
    }
    /**
     * @summary The enum used as the type of the component `familyGrouping`
     * @public
     * @static
     */

    public static _enum_for_familyGrouping = _enum_for_FamilyGrouping;
    /**
     * @summary The enum used as the type of the component `imposedSubset`
     * @public
     * @static
     */

    public static _enum_for_imposedSubset = _enum_for_ImposedSubset;
}
/**
 * @summary The Leading Root Component Types of SearchRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchRule: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "id",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "dmdId",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "serviceType",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "userClass",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "inputAttributeTypes",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeCombination",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "outputAttributeTypes",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "defaultControls",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "mandatoryControls",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "searchRuleControls",
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "familyGrouping",
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "familyReturn",
        true,
        $.hasTag(_TagClass.context, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "relaxation",
        true,
        $.hasTag(_TagClass.context, 11),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "additionalControl",
        true,
        $.hasTag(_TagClass.context, 12),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "allowedSubset",
        true,
        $.hasTag(_TagClass.context, 13),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "imposedSubset",
        true,
        $.hasTag(_TagClass.context, 14),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "entryLimit",
        true,
        $.hasTag(_TagClass.context, 15),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SearchRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchRule: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SearchRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchRule: $.ComponentSpec[] = [];
let _cached_decoder_for_SearchRule: $.ASN1Decoder<SearchRule> | null = null;
let _cached_encoder_for_SearchRule: $.ASN1Encoder<SearchRule> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SearchRule
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchRule} The decoded data structure.
 */
export function _decode_SearchRule(el: _Element) {
    if (!_cached_decoder_for_SearchRule) {
        _cached_decoder_for_SearchRule = function (el: _Element): SearchRule {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let id!: INTEGER;
            let dmdId!: OBJECT_IDENTIFIER;
            let serviceType: OPTIONAL<OBJECT_IDENTIFIER>;
            let userClass: OPTIONAL<INTEGER>;
            let inputAttributeTypes: OPTIONAL<RequestAttribute[]>;
            let attributeCombination: OPTIONAL<AttributeCombination> =
                SearchRule._default_value_for_attributeCombination;
            let outputAttributeTypes: OPTIONAL<ResultAttribute[]>;
            let defaultControls: OPTIONAL<ControlOptions>;
            let mandatoryControls: OPTIONAL<ControlOptions>;
            let searchRuleControls: OPTIONAL<ControlOptions>;
            let familyGrouping: OPTIONAL<FamilyGrouping>;
            let familyReturn: OPTIONAL<FamilyReturn>;
            let relaxation: OPTIONAL<RelaxationPolicy>;
            let additionalControl: OPTIONAL<AttributeType[]>;
            let allowedSubset: OPTIONAL<AllowedSubset> =
                SearchRule._default_value_for_allowedSubset;
            let imposedSubset: OPTIONAL<ImposedSubset>;
            let entryLimit: OPTIONAL<EntryLimit>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                id: (_el: _Element): void => {
                    id = $._decodeInteger(_el);
                },
                dmdId: (_el: _Element): void => {
                    dmdId = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                serviceType: (_el: _Element): void => {
                    serviceType = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                userClass: (_el: _Element): void => {
                    userClass = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                inputAttributeTypes: (_el: _Element): void => {
                    inputAttributeTypes = $._decode_explicit<
                        RequestAttribute[]
                    >(() =>
                        $._decodeSequenceOf<RequestAttribute>(
                            () => _decode_RequestAttribute
                        )
                    )(_el);
                },
                attributeCombination: (_el: _Element): void => {
                    attributeCombination = $._decode_explicit<
                        AttributeCombination
                    >(() => _decode_AttributeCombination)(_el);
                },
                outputAttributeTypes: (_el: _Element): void => {
                    outputAttributeTypes = $._decode_explicit<
                        ResultAttribute[]
                    >(() =>
                        $._decodeSequenceOf<ResultAttribute>(
                            () => _decode_ResultAttribute
                        )
                    )(_el);
                },
                defaultControls: (_el: _Element): void => {
                    defaultControls = $._decode_explicit<ControlOptions>(
                        () => _decode_ControlOptions
                    )(_el);
                },
                mandatoryControls: (_el: _Element): void => {
                    mandatoryControls = $._decode_explicit<ControlOptions>(
                        () => _decode_ControlOptions
                    )(_el);
                },
                searchRuleControls: (_el: _Element): void => {
                    searchRuleControls = $._decode_explicit<ControlOptions>(
                        () => _decode_ControlOptions
                    )(_el);
                },
                familyGrouping: (_el: _Element): void => {
                    familyGrouping = $._decode_explicit<FamilyGrouping>(
                        () => _decode_FamilyGrouping
                    )(_el);
                },
                familyReturn: (_el: _Element): void => {
                    familyReturn = $._decode_explicit<FamilyReturn>(
                        () => _decode_FamilyReturn
                    )(_el);
                },
                relaxation: (_el: _Element): void => {
                    relaxation = $._decode_explicit<RelaxationPolicy>(
                        () => _decode_RelaxationPolicy
                    )(_el);
                },
                additionalControl: (_el: _Element): void => {
                    additionalControl = $._decode_explicit<AttributeType[]>(
                        () =>
                            $._decodeSequenceOf<AttributeType>(
                                () => _decode_AttributeType
                            )
                    )(_el);
                },
                allowedSubset: (_el: _Element): void => {
                    allowedSubset = $._decode_explicit<AllowedSubset>(
                        () => _decode_AllowedSubset
                    )(_el);
                },
                imposedSubset: (_el: _Element): void => {
                    imposedSubset = $._decode_explicit<ImposedSubset>(
                        () => _decode_ImposedSubset
                    )(_el);
                },
                entryLimit: (_el: _Element): void => {
                    entryLimit = $._decode_explicit<EntryLimit>(
                        () => _decode_EntryLimit
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SearchRule,
                _extension_additions_list_spec_for_SearchRule,
                _root_component_type_list_2_spec_for_SearchRule,
                (ext: _Element): void => {
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
/**
 * @summary Encodes a(n) SearchRule into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRule, encoded as an ASN.1 Element.
 */
export function _encode_SearchRule(
    value: SearchRule,
    elGetter: $.ASN1Encoder<SearchRule>
) {
    if (!_cached_encoder_for_SearchRule) {
        _cached_encoder_for_SearchRule = function (
            value: SearchRule,
            elGetter: $.ASN1Encoder<SearchRule>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeInteger(value.id, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeObjectIdentifier,
                                $.BER
                            )(value.dmdId, $.BER),
                            /* IF_ABSENT  */ value.serviceType === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.serviceType, $.BER),
                            /* IF_ABSENT  */ value.userClass === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.userClass, $.BER),
                            /* IF_ABSENT  */ value.inputAttributeTypes ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSequenceOf<RequestAttribute>(
                                              () => _encode_RequestAttribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.inputAttributeTypes, $.BER),
                            /* IF_DEFAULT */ value.attributeCombination ===
                                undefined ||
                            $.deepEq(
                                value.attributeCombination,
                                SearchRule._default_value_for_attributeCombination
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_AttributeCombination,
                                      $.BER
                                  )(value.attributeCombination, $.BER),
                            /* IF_ABSENT  */ value.outputAttributeTypes ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () =>
                                          $._encodeSequenceOf<ResultAttribute>(
                                              () => _encode_ResultAttribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.outputAttributeTypes, $.BER),
                            /* IF_ABSENT  */ value.defaultControls === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
                                      () => _encode_ControlOptions,
                                      $.BER
                                  )(value.defaultControls, $.BER),
                            /* IF_ABSENT  */ value.mandatoryControls ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_ControlOptions,
                                      $.BER
                                  )(value.mandatoryControls, $.BER),
                            /* IF_ABSENT  */ value.searchRuleControls ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () => _encode_ControlOptions,
                                      $.BER
                                  )(value.searchRuleControls, $.BER),
                            /* IF_ABSENT  */ value.familyGrouping === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      9,
                                      () => _encode_FamilyGrouping,
                                      $.BER
                                  )(value.familyGrouping, $.BER),
                            /* IF_ABSENT  */ value.familyReturn === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      10,
                                      () => _encode_FamilyReturn,
                                      $.BER
                                  )(value.familyReturn, $.BER),
                            /* IF_ABSENT  */ value.relaxation === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      11,
                                      () => _encode_RelaxationPolicy,
                                      $.BER
                                  )(value.relaxation, $.BER),
                            /* IF_ABSENT  */ value.additionalControl ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      12,
                                      () =>
                                          $._encodeSequenceOf<AttributeType>(
                                              () => _encode_AttributeType,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.additionalControl, $.BER),
                            /* IF_DEFAULT */ value.allowedSubset ===
                                undefined ||
                            $.deepEq(
                                value.allowedSubset,
                                SearchRule._default_value_for_allowedSubset
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      13,
                                      () => _encode_AllowedSubset,
                                      $.BER
                                  )(value.allowedSubset, $.BER),
                            /* IF_ABSENT  */ value.imposedSubset === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      14,
                                      () => _encode_ImposedSubset,
                                      $.BER
                                  )(value.imposedSubset, $.BER),
                            /* IF_ABSENT  */ value.entryLimit === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      15,
                                      () => _encode_EntryLimit,
                                      $.BER
                                  )(value.entryLimit, $.BER),
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
    return _cached_encoder_for_SearchRule(value, elGetter);
}

/**
 * @summary SearchRuleId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchRuleId ::= SEQUENCE {
 *   id          INTEGER,
 *   dmdId  [0]  OBJECT IDENTIFIER }
 * ```
 *
 * @class
 */
export class SearchRuleId {
    constructor(
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: INTEGER,
        /**
         * @summary `dmdId`.
         * @public
         * @readonly
         */
        readonly dmdId: OBJECT_IDENTIFIER
    ) {}

    /**
     * @summary Restructures an object into a SearchRuleId
     * @description
     *
     * This takes an `object` and converts it to a `SearchRuleId`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchRuleId`.
     * @returns {SearchRuleId}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof SearchRuleId]: SearchRuleId[_K] }>
    ): SearchRuleId {
        return new SearchRuleId(_o.id, _o.dmdId);
    }
}
/**
 * @summary The Leading Root Component Types of SearchRuleId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SearchRuleId: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "id",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "dmdId",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/**
 * @summary The Trailing Root Component Types of SearchRuleId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SearchRuleId: $.ComponentSpec[] = [];
/**
 * @summary The Extension Addition Component Types of SearchRuleId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SearchRuleId: $.ComponentSpec[] = [];
let _cached_decoder_for_SearchRuleId: $.ASN1Decoder<SearchRuleId> | null = null;
let _cached_encoder_for_SearchRuleId: $.ASN1Encoder<SearchRuleId> | null = null;
/**
 * @summary Decodes an ASN.1 element into a(n) SearchRuleId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchRuleId} The decoded data structure.
 */
export function _decode_SearchRuleId(el: _Element) {
    if (!_cached_decoder_for_SearchRuleId) {
        _cached_decoder_for_SearchRuleId = function (
            el: _Element
        ): SearchRuleId {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SearchRuleId contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "id";
            sequence[1].name = "dmdId";
            let id!: INTEGER;
            let dmdId!: OBJECT_IDENTIFIER;
            id = $._decodeInteger(sequence[0]);
            dmdId = $._decode_explicit<OBJECT_IDENTIFIER>(
                () => $._decodeObjectIdentifier
            )(sequence[1]);
            return new SearchRuleId(id, dmdId);
        };
    }
    return _cached_decoder_for_SearchRuleId(el);
}
/**
 * @summary Encodes a(n) SearchRuleId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRuleId, encoded as an ASN.1 Element.
 */
export function _encode_SearchRuleId(
    value: SearchRuleId,
    elGetter: $.ASN1Encoder<SearchRuleId>
) {
    if (!_cached_encoder_for_SearchRuleId) {
        _cached_encoder_for_SearchRuleId = function (
            value: SearchRuleId,
            elGetter: $.ASN1Encoder<SearchRuleId>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeInteger(value.id, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodeObjectIdentifier,
                            $.BER
                        )(value.dmdId, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SearchRuleId(value, elGetter);
}

/**
 * @summary REQUEST_ATTRIBUTE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * REQUEST-ATTRIBUTE ::= CLASS {
 *   &attributeType         ATTRIBUTE.&id,
 *   &SelectedValues        ATTRIBUTE.&Type                 OPTIONAL,
 *   &DefaultValues         SEQUENCE {
 *     entryType              OBJECT-CLASS.&id            OPTIONAL,
 *     values                 SEQUENCE OF ATTRIBUTE.&Type } OPTIONAL,
 *   &contexts              SEQUENCE OF ContextProfile      OPTIONAL,
 *   &contextCombination    ContextCombination              OPTIONAL,
 *   &MatchingUse           MatchingUse                     OPTIONAL,
 *   &includeSubtypes       BOOLEAN                         DEFAULT FALSE }
 * WITH SYNTAX {
 *   ATTRIBUTE TYPE         &attributeType
 *   [SELECTED VALUES       &SelectedValues]
 *   [DEFAULT VALUES        &DefaultValues]
 *   [CONTEXTS              &contexts]
 *   [CONTEXT COMBINATION   &contextCombination]
 *   [MATCHING USE          &MatchingUse]
 *   [INCLUDE SUBTYPES      &includeSubtypes] }
 * ```
 *
 * @interface
 */
export interface REQUEST_ATTRIBUTE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "REQUEST-ATTRIBUTE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof REQUEST_ATTRIBUTE]: $.ASN1Decoder<
                REQUEST_ATTRIBUTE[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof REQUEST_ATTRIBUTE]: $.ASN1Encoder<
                REQUEST_ATTRIBUTE[_K]
            >;
        }
    >;
    /**
     * @summary &attributeType
     */
    "&attributeType"?: OBJECT_IDENTIFIER;
    /**
     * @summary &SelectedValues
     */
    "&SelectedValues"?: _Element;
    /**
     * @summary &DefaultValues
     */
    "&DefaultValues"?: {
        entryType: OBJECT_IDENTIFIER;
        values: OPTIONAL<_Element[]>;
    };
    /**
     * @summary &contexts
     */
    "&contexts"?: ContextProfile[];
    /**
     * @summary &contextCombination
     */
    "&contextCombination"?: ContextCombination;
    /**
     * @summary &MatchingUse
     */
    "&MatchingUse"?: MatchingUse;
    /**
     * @summary &includeSubtypes
     */
    "&includeSubtypes"?: BOOLEAN;
}

/**
 * @summary RESULT_ATTRIBUTE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RESULT-ATTRIBUTE ::= CLASS {
 *   &attributeType         ATTRIBUTE.&id,
 *   &outputValues          CHOICE {
 *     selectedValues         SEQUENCE OF ATTRIBUTE.&Type,
 *     matchedValuesOnly      NULL }                      OPTIONAL,
 *   &contexts              ContextProfile                  OPTIONAL }
 * WITH SYNTAX {
 *   ATTRIBUTE TYPE        &attributeType
 *   [OUTPUT VALUES        &outputValues]
 *   [CONTEXTS             &contexts] }
 * ```
 *
 * @interface
 */
export interface RESULT_ATTRIBUTE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "RESULT-ATTRIBUTE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof RESULT_ATTRIBUTE]: $.ASN1Decoder<RESULT_ATTRIBUTE[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof RESULT_ATTRIBUTE]: $.ASN1Encoder<RESULT_ATTRIBUTE[_K]>;
        }
    >;
    /**
     * @summary &attributeType
     */
    "&attributeType"?: OBJECT_IDENTIFIER;
    /**
     * @summary &outputValues
     */
    "&outputValues"?:
        | { selectedValues: _Element[] }
        | { matchedValuesOnly: NULL };
    /**
     * @summary &contexts
     */
    "&contexts"?: ContextProfile;
}

/**
 * @summary SEARCH_RULE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEARCH-RULE ::= CLASS {
 *   &dmdId                 OBJECT IDENTIFIER,
 *   &serviceType           OBJECT IDENTIFIER               OPTIONAL,
 *   &userClass             INTEGER                         OPTIONAL,
 *   &InputAttributeTypes   REQUEST-ATTRIBUTE               OPTIONAL,
 *   &combination           AttributeCombination            OPTIONAL,
 *   &OutputAttributeTypes  RESULT-ATTRIBUTE                OPTIONAL,
 *   &defaultControls       ControlOptions                  OPTIONAL,
 *   &mandatoryControls     ControlOptions                  OPTIONAL,
 *   &searchRuleControls    ControlOptions                  OPTIONAL,
 *   &familyGrouping        FamilyGrouping                  OPTIONAL,
 *   &familyReturn          FamilyReturn                    OPTIONAL,
 *   &additionalControl     AttributeType                   OPTIONAL,
 *   &relaxation            RelaxationPolicy                OPTIONAL,
 *   &allowedSubset         AllowedSubset                   DEFAULT '111'B,
 *   &imposedSubset         ImposedSubset                   OPTIONAL,
 *   &entryLimit            EntryLimit                      OPTIONAL,
 *   &id                    INTEGER                         UNIQUE }
 * WITH SYNTAX {
 *   DMD ID                 &dmdId
 *   [SERVICE-TYPE          &serviceType]
 *   [USER-CLASS            &userClass]
 *   [INPUT ATTRIBUTES      &InputAttributeTypes]
 *   [COMBINATION           &combination]
 *   [OUTPUT ATTRIBUTES     &OutputAttributeTypes]
 *   [DEFAULT CONTROL       &defaultControls]
 *   [MANDATORY CONTROL     &mandatoryControls]
 *   [SEARCH-RULE CONTROL   &searchRuleControls]
 *   [FAMILY-GROUPING       &familyGrouping]
 *   [FAMILY-RETURN         &familyReturn]
 *   [ADDITIONAL CONTROL    &additionalControl]
 *   [RELAXATION            &relaxation]
 *   [ALLOWED SUBSET        &allowedSubset]
 *   [IMPOSED SUBSET        &imposedSubset]
 *   [ENTRY LIMIT           &entryLimit]
 *   ID                     &id }
 * ```
 *
 * @interface
 */
export interface SEARCH_RULE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    class: "SEARCH-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof SEARCH_RULE]: $.ASN1Decoder<SEARCH_RULE[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof SEARCH_RULE]: $.ASN1Encoder<SEARCH_RULE[_K]>;
        }
    >;
    /**
     * @summary &dmdId
     */
    "&dmdId"?: OBJECT_IDENTIFIER;
    /**
     * @summary &serviceType
     */
    "&serviceType"?: OBJECT_IDENTIFIER;
    /**
     * @summary &userClass
     */
    "&userClass"?: INTEGER;
    /**
     * @summary &InputAttributeTypes
     */
    "&InputAttributeTypes"?: REQUEST_ATTRIBUTE[];
    /**
     * @summary &combination
     */
    "&combination"?: AttributeCombination;
    /**
     * @summary &OutputAttributeTypes
     */
    "&OutputAttributeTypes"?: RESULT_ATTRIBUTE[];
    /**
     * @summary &defaultControls
     */
    "&defaultControls"?: ControlOptions;
    /**
     * @summary &mandatoryControls
     */
    "&mandatoryControls"?: ControlOptions;
    /**
     * @summary &searchRuleControls
     */
    "&searchRuleControls"?: ControlOptions;
    /**
     * @summary &familyGrouping
     */
    "&familyGrouping"?: FamilyGrouping;
    /**
     * @summary &familyReturn
     */
    "&familyReturn"?: FamilyReturn;
    /**
     * @summary &additionalControl
     */
    "&additionalControl"?: AttributeType;
    /**
     * @summary &relaxation
     */
    "&relaxation"?: RelaxationPolicy;
    /**
     * @summary &allowedSubset
     */
    "&allowedSubset"?: AllowedSubset;
    /**
     * @summary &imposedSubset
     */
    "&imposedSubset"?: ImposedSubset;
    /**
     * @summary &entryLimit
     */
    "&entryLimit"?: EntryLimit;
    /**
     * @summary &id
     */
    "&id"?: INTEGER;
}

/* END_MODULE ServiceAdministration */
/* eslint-enable */
