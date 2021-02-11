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

/* START_OF_SYMBOL_DEFINITION ChopSpecification */
/**
 * @summary ChopSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChopSpecification ::= SEQUENCE {
 *   specificExclusions    [1]  SET SIZE (1..MAX) OF ChopSpecification-specificExclusions-Item OPTIONAL,
 *   minimum       [2]  BaseDistance DEFAULT 0,
 *   maximum       [3]  BaseDistance OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ChopSpecification {
    constructor(
        /**
         * @summary `specificExclusions`.
         * @public
         * @readonly
         */
        readonly specificExclusions: OPTIONAL<
            ChopSpecification_specificExclusions_Item[]
        >,
        /**
         * @summary `minimum`.
         * @public
         * @readonly
         */
        readonly minimum: OPTIONAL<BaseDistance>,
        /**
         * @summary `maximum`.
         * @public
         * @readonly
         */
        readonly maximum: OPTIONAL<BaseDistance>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ChopSpecification
     * @description
     *
     * This takes an `object` and converts it to a `ChopSpecification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChopSpecification`.
     * @returns {ChopSpecification}
     */
    public static _from_object(
        _o: { [_K in keyof ChopSpecification]: ChopSpecification[_K] }
    ): ChopSpecification {
        return new ChopSpecification(
            _o.specificExclusions,
            _o.minimum,
            _o.maximum,
            _o._unrecognizedExtensionsList
        );
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
/* END_OF_SYMBOL_DEFINITION ChopSpecification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ChopSpecification */
/**
 * @summary The Leading Root Component Types of ChopSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ChopSpecification: $.ComponentSpec[] = [
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
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ChopSpecification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ChopSpecification */
/**
 * @summary The Trailing Root Component Types of ChopSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ChopSpecification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ChopSpecification */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ChopSpecification */
/**
 * @summary The Extension Addition Component Types of ChopSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ChopSpecification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ChopSpecification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ChopSpecification */
let _cached_decoder_for_ChopSpecification: $.ASN1Decoder<ChopSpecification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ChopSpecification */

/* START_OF_SYMBOL_DEFINITION _decode_ChopSpecification */
/**
 * @summary Decodes an ASN.1 element into a(n) ChopSpecification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChopSpecification} The decoded data structure.
 */
export function _decode_ChopSpecification(el: _Element) {
    if (!_cached_decoder_for_ChopSpecification) {
        _cached_decoder_for_ChopSpecification = function (
            el: _Element
        ): ChopSpecification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let specificExclusions: OPTIONAL<
                ChopSpecification_specificExclusions_Item[]
            >;
            let minimum: OPTIONAL<BaseDistance> =
                ChopSpecification._default_value_for_minimum;
            let maximum: OPTIONAL<BaseDistance>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                specificExclusions: (_el: _Element): void => {
                    specificExclusions = $._decode_explicit<
                        ChopSpecification_specificExclusions_Item[]
                    >(() =>
                        $._decodeSetOf<ChopSpecification_specificExclusions_Item>(
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
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ChopSpecification,
                _extension_additions_list_spec_for_ChopSpecification,
                _root_component_type_list_2_spec_for_ChopSpecification,
                (ext: _Element): void => {
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
/* END_OF_SYMBOL_DEFINITION _decode_ChopSpecification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ChopSpecification */
let _cached_encoder_for_ChopSpecification: $.ASN1Encoder<ChopSpecification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ChopSpecification */

/* START_OF_SYMBOL_DEFINITION _encode_ChopSpecification */
/**
 * @summary Encodes a(n) ChopSpecification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChopSpecification, encoded as an ASN.1 Element.
 */
export function _encode_ChopSpecification(
    value: ChopSpecification,
    elGetter: $.ASN1Encoder<ChopSpecification>
) {
    if (!_cached_encoder_for_ChopSpecification) {
        _cached_encoder_for_ChopSpecification = function (
            value: ChopSpecification,
            elGetter: $.ASN1Encoder<ChopSpecification>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.specificExclusions ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<ChopSpecification_specificExclusions_Item>(
                                              () =>
                                                  _encode_ChopSpecification_specificExclusions_Item,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.specificExclusions, $.BER),
                            /* IF_DEFAULT */ value.minimum === undefined ||
                            $.deepEq(
                                value.minimum,
                                ChopSpecification._default_value_for_minimum
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
    return _cached_encoder_for_ChopSpecification(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ChopSpecification */

/* eslint-enable */
