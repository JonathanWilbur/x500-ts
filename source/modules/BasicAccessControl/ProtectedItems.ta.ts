/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    NULL,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    MaxValueCount,
    _decode_MaxValueCount,
    _encode_MaxValueCount,
} from "../BasicAccessControl/MaxValueCount.ta";
import {
    RestrictedValue,
    _decode_RestrictedValue,
    _encode_RestrictedValue,
} from "../BasicAccessControl/RestrictedValue.ta";
import {
    Filter,
    _decode_Filter,
    _encode_Filter,
} from "../DirectoryAbstractService/Filter.ta";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
import {
    AttributeTypeAndValue,
    _decode_AttributeTypeAndValue,
    _encode_AttributeTypeAndValue,
} from "../InformationFramework/AttributeTypeAndValue.ta";
import {
    ContextAssertion,
    _decode_ContextAssertion,
    _encode_ContextAssertion,
} from "../InformationFramework/ContextAssertion.ta";
import {
    Refinement,
    _decode_Refinement,
    _encode_Refinement,
} from "../InformationFramework/Refinement.ta";
export {
    MaxValueCount,
    _decode_MaxValueCount,
    _encode_MaxValueCount,
} from "../BasicAccessControl/MaxValueCount.ta";
export {
    RestrictedValue,
    _decode_RestrictedValue,
    _encode_RestrictedValue,
} from "../BasicAccessControl/RestrictedValue.ta";
export {
    Filter,
    _decode_Filter,
    _encode_Filter,
} from "../DirectoryAbstractService/Filter.ta";
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
export {
    AttributeTypeAndValue,
    _decode_AttributeTypeAndValue,
    _encode_AttributeTypeAndValue,
} from "../InformationFramework/AttributeTypeAndValue.ta";
export {
    ContextAssertion,
    _decode_ContextAssertion,
    _encode_ContextAssertion,
} from "../InformationFramework/ContextAssertion.ta";
export {
    Refinement,
    _decode_Refinement,
    _encode_Refinement,
} from "../InformationFramework/Refinement.ta";

/* START_OF_SYMBOL_DEFINITION ProtectedItems */
/**
 * @summary ProtectedItems
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectedItems ::= SEQUENCE {
 *   entry                          [0]  NULL OPTIONAL,
 *   allUserAttributeTypes          [1]  NULL OPTIONAL,
 *   attributeType                  [2]  SET SIZE (1..MAX) OF AttributeType
 *                                         OPTIONAL,
 *   allAttributeValues             [3]  SET SIZE (1..MAX) OF AttributeType
 *                                         OPTIONAL,
 *   allUserAttributeTypesAndValues [4]  NULL OPTIONAL,
 *   attributeValue                 [5]  SET SIZE (1..MAX) OF AttributeTypeAndValue
 *                                         OPTIONAL,
 *   selfValue                      [6]  SET SIZE (1..MAX) OF AttributeType
 *                                         OPTIONAL,
 *   rangeOfValues                  [7]  Filter OPTIONAL,
 *   maxValueCount                  [8]  SET SIZE (1..MAX) OF MaxValueCount
 *                                         OPTIONAL,
 *   maxImmSub                      [9]  INTEGER OPTIONAL,
 *   restrictedBy                   [10] SET SIZE (1..MAX) OF RestrictedValue
 *                                         OPTIONAL,
 *   contexts                       [11] SET SIZE (1..MAX) OF ContextAssertion
 *                                         OPTIONAL,
 *   classes                        [12] Refinement OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ProtectedItems {
    constructor(
        /**
         * @summary `entry`.
         * @public
         * @readonly
         */
        readonly entry: OPTIONAL<NULL>,
        /**
         * @summary `allUserAttributeTypes`.
         * @public
         * @readonly
         */
        readonly allUserAttributeTypes: OPTIONAL<NULL>,
        /**
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType: OPTIONAL<AttributeType[]>,
        /**
         * @summary `allAttributeValues`.
         * @public
         * @readonly
         */
        readonly allAttributeValues: OPTIONAL<AttributeType[]>,
        /**
         * @summary `allUserAttributeTypesAndValues`.
         * @public
         * @readonly
         */
        readonly allUserAttributeTypesAndValues: OPTIONAL<NULL>,
        /**
         * @summary `attributeValue`.
         * @public
         * @readonly
         */
        readonly attributeValue: OPTIONAL<AttributeTypeAndValue[]>,
        /**
         * @summary `selfValue`.
         * @public
         * @readonly
         */
        readonly selfValue: OPTIONAL<AttributeType[]>,
        /**
         * @summary `rangeOfValues`.
         * @public
         * @readonly
         */
        readonly rangeOfValues: OPTIONAL<Filter>,
        /**
         * @summary `maxValueCount`.
         * @public
         * @readonly
         */
        readonly maxValueCount: OPTIONAL<MaxValueCount[]>,
        /**
         * @summary `maxImmSub`.
         * @public
         * @readonly
         */
        readonly maxImmSub: OPTIONAL<INTEGER>,
        /**
         * @summary `restrictedBy`.
         * @public
         * @readonly
         */
        readonly restrictedBy: OPTIONAL<RestrictedValue[]>,
        /**
         * @summary `contexts`.
         * @public
         * @readonly
         */
        readonly contexts: OPTIONAL<ContextAssertion[]>,
        /**
         * @summary `classes`.
         * @public
         * @readonly
         */
        readonly classes: OPTIONAL<Refinement>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ProtectedItems
     * @description
     *
     * This takes an `object` and converts it to a `ProtectedItems`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProtectedItems`.
     * @returns {ProtectedItems}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ProtectedItems]: ProtectedItems[_K] }>
    ): ProtectedItems {
        return new ProtectedItems(
            _o.entry,
            _o.allUserAttributeTypes,
            _o.attributeType,
            _o.allAttributeValues,
            _o.allUserAttributeTypesAndValues,
            _o.attributeValue,
            _o.selfValue,
            _o.rangeOfValues,
            _o.maxValueCount,
            _o.maxImmSub,
            _o.restrictedBy,
            _o.contexts,
            _o.classes,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION ProtectedItems */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectedItems */
/**
 * @summary The Leading Root Component Types of ProtectedItems
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ProtectedItems: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "entry",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "allUserAttributeTypes",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeType",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "allAttributeValues",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "allUserAttributeTypesAndValues",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeValue",
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "selfValue",
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "rangeOfValues",
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "maxValueCount",
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "maxImmSub",
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "restrictedBy",
        true,
        $.hasTag(_TagClass.context, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "contexts",
        true,
        $.hasTag(_TagClass.context, 11),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "classes",
        true,
        $.hasTag(_TagClass.context, 12),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ProtectedItems */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectedItems */
/**
 * @summary The Trailing Root Component Types of ProtectedItems
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ProtectedItems: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ProtectedItems */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectedItems */
/**
 * @summary The Extension Addition Component Types of ProtectedItems
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ProtectedItems: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ProtectedItems */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectedItems */
let _cached_decoder_for_ProtectedItems: $.ASN1Decoder<ProtectedItems> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtectedItems */

/* START_OF_SYMBOL_DEFINITION _decode_ProtectedItems */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtectedItems
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectedItems} The decoded data structure.
 */
export function _decode_ProtectedItems(el: _Element) {
    if (!_cached_decoder_for_ProtectedItems) {
        _cached_decoder_for_ProtectedItems = function (
            el: _Element
        ): ProtectedItems {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let entry: OPTIONAL<NULL>;
            let allUserAttributeTypes: OPTIONAL<NULL>;
            let attributeType: OPTIONAL<AttributeType[]>;
            let allAttributeValues: OPTIONAL<AttributeType[]>;
            let allUserAttributeTypesAndValues: OPTIONAL<NULL>;
            let attributeValue: OPTIONAL<AttributeTypeAndValue[]>;
            let selfValue: OPTIONAL<AttributeType[]>;
            let rangeOfValues: OPTIONAL<Filter>;
            let maxValueCount: OPTIONAL<MaxValueCount[]>;
            let maxImmSub: OPTIONAL<INTEGER>;
            let restrictedBy: OPTIONAL<RestrictedValue[]>;
            let contexts: OPTIONAL<ContextAssertion[]>;
            let classes: OPTIONAL<Refinement>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                entry: (_el: _Element): void => {
                    entry = $._decode_explicit<NULL>(() => $._decodeNull)(_el);
                },
                allUserAttributeTypes: (_el: _Element): void => {
                    allUserAttributeTypes = $._decode_explicit<NULL>(
                        () => $._decodeNull
                    )(_el);
                },
                attributeType: (_el: _Element): void => {
                    attributeType = $._decode_explicit<AttributeType[]>(() =>
                        $._decodeSetOf<AttributeType>(
                            () => _decode_AttributeType
                        )
                    )(_el);
                },
                allAttributeValues: (_el: _Element): void => {
                    allAttributeValues = $._decode_explicit<AttributeType[]>(
                        () =>
                            $._decodeSetOf<AttributeType>(
                                () => _decode_AttributeType
                            )
                    )(_el);
                },
                allUserAttributeTypesAndValues: (_el: _Element): void => {
                    allUserAttributeTypesAndValues = $._decode_explicit<NULL>(
                        () => $._decodeNull
                    )(_el);
                },
                attributeValue: (_el: _Element): void => {
                    attributeValue = $._decode_explicit<
                        AttributeTypeAndValue[]
                    >(() =>
                        $._decodeSetOf<AttributeTypeAndValue>(
                            () => _decode_AttributeTypeAndValue
                        )
                    )(_el);
                },
                selfValue: (_el: _Element): void => {
                    selfValue = $._decode_explicit<AttributeType[]>(() =>
                        $._decodeSetOf<AttributeType>(
                            () => _decode_AttributeType
                        )
                    )(_el);
                },
                rangeOfValues: (_el: _Element): void => {
                    rangeOfValues = $._decode_explicit<Filter>(
                        () => _decode_Filter
                    )(_el);
                },
                maxValueCount: (_el: _Element): void => {
                    maxValueCount = $._decode_explicit<MaxValueCount[]>(() =>
                        $._decodeSetOf<MaxValueCount>(
                            () => _decode_MaxValueCount
                        )
                    )(_el);
                },
                maxImmSub: (_el: _Element): void => {
                    maxImmSub = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                restrictedBy: (_el: _Element): void => {
                    restrictedBy = $._decode_explicit<RestrictedValue[]>(() =>
                        $._decodeSetOf<RestrictedValue>(
                            () => _decode_RestrictedValue
                        )
                    )(_el);
                },
                contexts: (_el: _Element): void => {
                    contexts = $._decode_explicit<ContextAssertion[]>(() =>
                        $._decodeSetOf<ContextAssertion>(
                            () => _decode_ContextAssertion
                        )
                    )(_el);
                },
                classes: (_el: _Element): void => {
                    classes = $._decode_explicit<Refinement>(
                        () => _decode_Refinement
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ProtectedItems,
                _extension_additions_list_spec_for_ProtectedItems,
                _root_component_type_list_2_spec_for_ProtectedItems,
                (ext: _Element): void => {
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
/* END_OF_SYMBOL_DEFINITION _decode_ProtectedItems */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectedItems */
let _cached_encoder_for_ProtectedItems: $.ASN1Encoder<ProtectedItems> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtectedItems */

/* START_OF_SYMBOL_DEFINITION _encode_ProtectedItems */
/**
 * @summary Encodes a(n) ProtectedItems into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectedItems, encoded as an ASN.1 Element.
 */
export function _encode_ProtectedItems(
    value: ProtectedItems,
    elGetter: $.ASN1Encoder<ProtectedItems>
) {
    if (!_cached_encoder_for_ProtectedItems) {
        _cached_encoder_for_ProtectedItems = function (
            value: ProtectedItems,
            elGetter: $.ASN1Encoder<ProtectedItems>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.entry === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeNull,
                                      $.BER
                                  )(value.entry, $.BER),
                            /* IF_ABSENT  */ value.allUserAttributeTypes ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeNull,
                                      $.BER
                                  )(value.allUserAttributeTypes, $.BER),
                            /* IF_ABSENT  */ value.attributeType === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<AttributeType>(
                                              () => _encode_AttributeType,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.attributeType, $.BER),
                            /* IF_ABSENT  */ value.allAttributeValues ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSetOf<AttributeType>(
                                              () => _encode_AttributeType,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.allAttributeValues, $.BER),
                            /* IF_ABSENT  */ value.allUserAttributeTypesAndValues ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeNull,
                                      $.BER
                                  )(
                                      value.allUserAttributeTypesAndValues,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.attributeValue === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () =>
                                          $._encodeSetOf<AttributeTypeAndValue>(
                                              () =>
                                                  _encode_AttributeTypeAndValue,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.attributeValue, $.BER),
                            /* IF_ABSENT  */ value.selfValue === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
                                      () =>
                                          $._encodeSetOf<AttributeType>(
                                              () => _encode_AttributeType,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.selfValue, $.BER),
                            /* IF_ABSENT  */ value.rangeOfValues === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_Filter,
                                      $.BER
                                  )(value.rangeOfValues, $.BER),
                            /* IF_ABSENT  */ value.maxValueCount === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () =>
                                          $._encodeSetOf<MaxValueCount>(
                                              () => _encode_MaxValueCount,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.maxValueCount, $.BER),
                            /* IF_ABSENT  */ value.maxImmSub === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      9,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.maxImmSub, $.BER),
                            /* IF_ABSENT  */ value.restrictedBy === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      10,
                                      () =>
                                          $._encodeSetOf<RestrictedValue>(
                                              () => _encode_RestrictedValue,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.restrictedBy, $.BER),
                            /* IF_ABSENT  */ value.contexts === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      11,
                                      () =>
                                          $._encodeSetOf<ContextAssertion>(
                                              () => _encode_ContextAssertion,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.contexts, $.BER),
                            /* IF_ABSENT  */ value.classes === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      12,
                                      () => _encode_Refinement,
                                      $.BER
                                  )(value.classes, $.BER),
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
    return _cached_encoder_for_ProtectedItems(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtectedItems */

/* eslint-enable */
