/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AssertionValue,
    _decode_AssertionValue,
    _encode_AssertionValue,
} from "../Lightweight-Directory-Access-Protocol-V3/AssertionValue.ta";
import {
    AttributeDescription,
    _decode_AttributeDescription,
    _encode_AttributeDescription,
} from "../Lightweight-Directory-Access-Protocol-V3/AttributeDescription.ta";
import {
    MatchingRuleId,
    _decode_MatchingRuleId,
    _encode_MatchingRuleId,
} from "../Lightweight-Directory-Access-Protocol-V3/MatchingRuleId.ta";
export {
    AssertionValue,
    _decode_AssertionValue,
    _encode_AssertionValue,
} from "../Lightweight-Directory-Access-Protocol-V3/AssertionValue.ta";
export {
    AttributeDescription,
    _decode_AttributeDescription,
    _encode_AttributeDescription,
} from "../Lightweight-Directory-Access-Protocol-V3/AttributeDescription.ta";
export {
    MatchingRuleId,
    _decode_MatchingRuleId,
    _encode_MatchingRuleId,
} from "../Lightweight-Directory-Access-Protocol-V3/MatchingRuleId.ta";

/* START_OF_SYMBOL_DEFINITION MatchingRuleAssertion */
/**
 * @summary MatchingRuleAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MatchingRuleAssertion ::= SEQUENCE {
 *   matchingRule  [1]  MatchingRuleId OPTIONAL,
 *   type          [2]  AttributeDescription OPTIONAL,
 *   matchValue    [3]  AssertionValue,
 *   dnAttributes  [4]  BOOLEAN DEFAULT FALSE
 * }
 * ```
 *
 * @class
 */
export class MatchingRuleAssertion {
    constructor(
        /**
         * @summary `matchingRule`.
         * @public
         * @readonly
         */
        readonly matchingRule: OPTIONAL<MatchingRuleId>,
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OPTIONAL<AttributeDescription>,
        /**
         * @summary `matchValue`.
         * @public
         * @readonly
         */
        readonly matchValue: AssertionValue,
        /**
         * @summary `dnAttributes`.
         * @public
         * @readonly
         */
        readonly dnAttributes: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MatchingRuleAssertion
     * @description
     *
     * This takes an `object` and converts it to a `MatchingRuleAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MatchingRuleAssertion`.
     * @returns {MatchingRuleAssertion}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof MatchingRuleAssertion]: MatchingRuleAssertion[_K] }
        >
    ): MatchingRuleAssertion {
        return new MatchingRuleAssertion(
            _o.matchingRule,
            _o.type_,
            _o.matchValue,
            _o.dnAttributes,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `dnAttributes`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_dnAttributes() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION MatchingRuleAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MatchingRuleAssertion */
/**
 * @summary The Leading Root Component Types of MatchingRuleAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MatchingRuleAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "matchingRule",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "type",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "matchValue",
        false,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "dnAttributes",
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MatchingRuleAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MatchingRuleAssertion */
/**
 * @summary The Trailing Root Component Types of MatchingRuleAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MatchingRuleAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MatchingRuleAssertion */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MatchingRuleAssertion */
/**
 * @summary The Extension Addition Component Types of MatchingRuleAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MatchingRuleAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MatchingRuleAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MatchingRuleAssertion */
let _cached_decoder_for_MatchingRuleAssertion: $.ASN1Decoder<
    MatchingRuleAssertion
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MatchingRuleAssertion */

/* START_OF_SYMBOL_DEFINITION _decode_MatchingRuleAssertion */
/**
 * @summary Decodes an ASN.1 element into a(n) MatchingRuleAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MatchingRuleAssertion} The decoded data structure.
 */
export function _decode_MatchingRuleAssertion(el: _Element) {
    if (!_cached_decoder_for_MatchingRuleAssertion) {
        _cached_decoder_for_MatchingRuleAssertion = function (
            el: _Element
        ): MatchingRuleAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let matchingRule: OPTIONAL<MatchingRuleId>;
            let type_: OPTIONAL<AttributeDescription>;
            let matchValue!: AssertionValue;
            let dnAttributes: OPTIONAL<BOOLEAN> =
                MatchingRuleAssertion._default_value_for_dnAttributes;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                matchingRule: (_el: _Element): void => {
                    matchingRule = $._decode_implicit<MatchingRuleId>(
                        () => _decode_MatchingRuleId
                    )(_el);
                },
                type: (_el: _Element): void => {
                    type_ = $._decode_implicit<AttributeDescription>(
                        () => _decode_AttributeDescription
                    )(_el);
                },
                matchValue: (_el: _Element): void => {
                    matchValue = $._decode_implicit<AssertionValue>(
                        () => _decode_AssertionValue
                    )(_el);
                },
                dnAttributes: (_el: _Element): void => {
                    dnAttributes = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MatchingRuleAssertion,
                _extension_additions_list_spec_for_MatchingRuleAssertion,
                _root_component_type_list_2_spec_for_MatchingRuleAssertion,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new MatchingRuleAssertion /* SEQUENCE_CONSTRUCTOR_CALL */(
                matchingRule,
                type_,
                matchValue,
                dnAttributes,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_MatchingRuleAssertion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MatchingRuleAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MatchingRuleAssertion */
let _cached_encoder_for_MatchingRuleAssertion: $.ASN1Encoder<
    MatchingRuleAssertion
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MatchingRuleAssertion */

/* START_OF_SYMBOL_DEFINITION _encode_MatchingRuleAssertion */
/**
 * @summary Encodes a(n) MatchingRuleAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MatchingRuleAssertion, encoded as an ASN.1 Element.
 */
export function _encode_MatchingRuleAssertion(
    value: MatchingRuleAssertion,
    elGetter: $.ASN1Encoder<MatchingRuleAssertion>
) {
    if (!_cached_encoder_for_MatchingRuleAssertion) {
        _cached_encoder_for_MatchingRuleAssertion = function (
            value: MatchingRuleAssertion,
            elGetter: $.ASN1Encoder<MatchingRuleAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.matchingRule === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_MatchingRuleId,
                                      $.BER
                                  )(value.matchingRule, $.BER),
                            /* IF_ABSENT  */ value.type_ === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_AttributeDescription,
                                      $.BER
                                  )(value.type_, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                3,
                                () => _encode_AssertionValue,
                                $.BER
                            )(value.matchValue, $.BER),
                            /* IF_DEFAULT */ value.dnAttributes === undefined ||
                            $.deepEq(
                                value.dnAttributes,
                                MatchingRuleAssertion._default_value_for_dnAttributes
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.dnAttributes, $.BER),
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
    return _cached_encoder_for_MatchingRuleAssertion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MatchingRuleAssertion */

/* eslint-enable */
