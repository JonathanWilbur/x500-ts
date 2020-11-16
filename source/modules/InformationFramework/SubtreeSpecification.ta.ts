/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    BaseDistance,
    _decode_BaseDistance,
    _encode_BaseDistance,
} from "../InformationFramework/BaseDistance.ta";
import {
    ChopSpecification_specificExclusions_Item,
    _decode_ChopSpecification_specificExclusions_Item,
    _encode_ChopSpecification_specificExclusions_Item,
} from "../InformationFramework/ChopSpecification-specificExclusions-Item.ta";
import {
    LocalName,
    _decode_LocalName,
    _encode_LocalName,
} from "../InformationFramework/LocalName.ta";
import {
    Refinement,
    _decode_Refinement,
    _encode_Refinement,
} from "../InformationFramework/Refinement.ta";
export {
    BaseDistance,
    _decode_BaseDistance,
    _encode_BaseDistance,
} from "../InformationFramework/BaseDistance.ta";
export {
    ChopSpecification_specificExclusions_Item,
    _decode_ChopSpecification_specificExclusions_Item,
    _encode_ChopSpecification_specificExclusions_Item,
} from "../InformationFramework/ChopSpecification-specificExclusions-Item.ta";
export {
    ChopSpecification,
    _decode_ChopSpecification,
    _encode_ChopSpecification,
} from "../InformationFramework/ChopSpecification.ta";
export {
    LocalName,
    _decode_LocalName,
    _encode_LocalName,
} from "../InformationFramework/LocalName.ta";
export {
    Refinement,
    _decode_Refinement,
    _encode_Refinement,
} from "../InformationFramework/Refinement.ta";

/* START_OF_SYMBOL_DEFINITION SubtreeSpecification */
/**
 * @summary SubtreeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubtreeSpecification ::= SEQUENCE {
 *   base                 [0]  LocalName DEFAULT {},
 *   COMPONENTS OF             ChopSpecification,
 *   specificationFilter  [4]  Refinement OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class SubtreeSpecification {
    constructor(
        /**
         * @summary `base`.
         * @public
         * @readonly
         */
        readonly base: OPTIONAL<LocalName>,
        /**
         * @summary `specificExclusions`.
         * @public
         * @readonly
         */
        readonly specificExclusions: OPTIONAL<
            ChopSpecification_specificExclusions_Item[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `minimum`.
         * @public
         * @readonly
         */
        readonly minimum: OPTIONAL<BaseDistance> /* REPLICATED_COMPONENT */,
        /**
         * @summary `maximum`.
         * @public
         * @readonly
         */
        readonly maximum: OPTIONAL<BaseDistance> /* REPLICATED_COMPONENT */,
        /**
         * @summary `specificationFilter`.
         * @public
         * @readonly
         */
        readonly specificationFilter: OPTIONAL<Refinement>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SubtreeSpecification
     * @description
     *
     * This takes an `object` and converts it to a `SubtreeSpecification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubtreeSpecification`.
     * @returns {SubtreeSpecification}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof SubtreeSpecification]: SubtreeSpecification[_K] }
        >
    ): SubtreeSpecification {
        return new SubtreeSpecification(
            _o.base,
            _o.specificExclusions,
            _o.minimum,
            _o.maximum,
            _o.specificationFilter,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `base`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_base() {
        return [];
    }
    /**
     * @summary Getter that returns the default value for `minimum`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_minimum() {
        return 0;
    }
}
/* END_OF_SYMBOL_DEFINITION SubtreeSpecification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SubtreeSpecification */
/**
 * @summary The Leading Root Component Types of SubtreeSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubtreeSpecification: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "base",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "specificExclusions",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "minimum",
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
        "specificationFilter",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SubtreeSpecification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SubtreeSpecification */
/**
 * @summary The Trailing Root Component Types of SubtreeSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubtreeSpecification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SubtreeSpecification */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SubtreeSpecification */
/**
 * @summary The Extension Addition Component Types of SubtreeSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubtreeSpecification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SubtreeSpecification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubtreeSpecification */
let _cached_decoder_for_SubtreeSpecification: $.ASN1Decoder<
    SubtreeSpecification
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubtreeSpecification */

/* START_OF_SYMBOL_DEFINITION _decode_SubtreeSpecification */
/**
 * @summary Decodes an ASN.1 element into a(n) SubtreeSpecification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubtreeSpecification} The decoded data structure.
 */
export function _decode_SubtreeSpecification(el: _Element) {
    if (!_cached_decoder_for_SubtreeSpecification) {
        _cached_decoder_for_SubtreeSpecification = function (
            el: _Element
        ): SubtreeSpecification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let base: OPTIONAL<LocalName> =
                SubtreeSpecification._default_value_for_base;
            let specificExclusions: OPTIONAL<
                ChopSpecification_specificExclusions_Item[]
            >;
            let minimum: OPTIONAL<BaseDistance> =
                SubtreeSpecification._default_value_for_minimum;
            let maximum: OPTIONAL<BaseDistance>;
            let specificationFilter: OPTIONAL<Refinement>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                base: (_el: _Element): void => {
                    base = $._decode_explicit<LocalName>(
                        () => _decode_LocalName
                    )(_el);
                },
                specificExclusions: (_el: _Element): void => {
                    specificExclusions = $._decode_explicit<
                        ChopSpecification_specificExclusions_Item[]
                    >(() =>
                        $._decodeSetOf<
                            ChopSpecification_specificExclusions_Item
                        >(
                            () =>
                                _decode_ChopSpecification_specificExclusions_Item
                        )
                    )(_el);
                },
                minimum: (_el: _Element): void => {
                    minimum = $._decode_explicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
                maximum: (_el: _Element): void => {
                    maximum = $._decode_explicit<BaseDistance>(
                        () => _decode_BaseDistance
                    )(_el);
                },
                specificationFilter: (_el: _Element): void => {
                    specificationFilter = $._decode_explicit<Refinement>(
                        () => _decode_Refinement
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SubtreeSpecification,
                _extension_additions_list_spec_for_SubtreeSpecification,
                _root_component_type_list_2_spec_for_SubtreeSpecification,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SubtreeSpecification /* SEQUENCE_CONSTRUCTOR_CALL */(
                base,
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
/* END_OF_SYMBOL_DEFINITION _decode_SubtreeSpecification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubtreeSpecification */
let _cached_encoder_for_SubtreeSpecification: $.ASN1Encoder<
    SubtreeSpecification
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubtreeSpecification */

/* START_OF_SYMBOL_DEFINITION _encode_SubtreeSpecification */
/**
 * @summary Encodes a(n) SubtreeSpecification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubtreeSpecification, encoded as an ASN.1 Element.
 */
export function _encode_SubtreeSpecification(
    value: SubtreeSpecification,
    elGetter: $.ASN1Encoder<SubtreeSpecification>
) {
    if (!_cached_encoder_for_SubtreeSpecification) {
        _cached_encoder_for_SubtreeSpecification = function (
            value: SubtreeSpecification,
            elGetter: $.ASN1Encoder<SubtreeSpecification>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.base === undefined ||
                            $.deepEq(
                                value.base,
                                SubtreeSpecification._default_value_for_base
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_LocalName,
                                      $.BER
                                  )(value.base, $.BER),
                            /* IF_ABSENT  */ value.specificExclusions ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<
                                              ChopSpecification_specificExclusions_Item
                                          >(
                                              () =>
                                                  _encode_ChopSpecification_specificExclusions_Item,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.specificExclusions, $.BER),
                            /* IF_DEFAULT */ value.minimum === undefined ||
                            $.deepEq(
                                value.minimum,
                                SubtreeSpecification._default_value_for_minimum
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_BaseDistance,
                                      $.BER
                                  )(value.minimum, $.BER),
                            /* IF_ABSENT  */ value.maximum === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_BaseDistance,
                                      $.BER
                                  )(value.maximum, $.BER),
                            /* IF_ABSENT  */ value.specificationFilter ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_Refinement,
                                      $.BER
                                  )(value.specificationFilter, $.BER),
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
    return _cached_encoder_for_SubtreeSpecification(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubtreeSpecification */

/* eslint-enable */
