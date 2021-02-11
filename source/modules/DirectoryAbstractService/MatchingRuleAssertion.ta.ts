/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";

/* START_OF_SYMBOL_DEFINITION MatchingRuleAssertion */
/**
 * @summary MatchingRuleAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MatchingRuleAssertion ::= SEQUENCE {
 *   matchingRule  [1]  SET SIZE (1..MAX) OF MATCHING-RULE.&id,
 *   type          [2]  AttributeType OPTIONAL,
 *   matchValue    [3]  MATCHING-RULE.&AssertionType (CONSTRAINED BY {
 *     -- matchValue shall be a value of  type specified by the &AssertionType field of
 *     -- one of the MATCHING-RULE information objects identified by matchingRule -- }),
 *   dnAttributes  [4]  BOOLEAN DEFAULT FALSE,
 *   ... }
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
        readonly matchingRule: OBJECT_IDENTIFIER[],
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OPTIONAL<AttributeType>,
        /**
         * @summary `matchValue`.
         * @public
         * @readonly
         */
        readonly matchValue: _Element,
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
        _o: { [_K in keyof MatchingRuleAssertion]: MatchingRuleAssertion[_K] }
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
        false,
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
let _cached_decoder_for_MatchingRuleAssertion: $.ASN1Decoder<MatchingRuleAssertion> | null = null;
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
            let matchingRule!: OBJECT_IDENTIFIER[];
            let type_: OPTIONAL<AttributeType>;
            let matchValue!: _Element;
            let dnAttributes: OPTIONAL<BOOLEAN> =
                MatchingRuleAssertion._default_value_for_dnAttributes;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                matchingRule: (_el: _Element): void => {
                    matchingRule = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                type: (_el: _Element): void => {
                    type_ = $._decode_explicit<AttributeType>(
                        () => _decode_AttributeType
                    )(_el);
                },
                matchValue: (_el: _Element): void => {
                    matchValue = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
                dnAttributes: (_el: _Element): void => {
                    dnAttributes = $._decode_explicit<BOOLEAN>(
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
            return new MatchingRuleAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ matchingRule,
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
let _cached_encoder_for_MatchingRuleAssertion: $.ASN1Encoder<MatchingRuleAssertion> | null = null;
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
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () =>
                                    $._encodeSetOf<OBJECT_IDENTIFIER>(
                                        () => $._encodeObjectIdentifier,
                                        $.BER
                                    ),
                                $.BER
                            )(value.matchingRule, $.BER),
                            /* IF_ABSENT  */ value.type_ === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_AttributeType,
                                      $.BER
                                  )(value.type_, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                3,
                                () => $._encodeAny,
                                $.BER
                            )(value.matchValue, $.BER),
                            /* IF_DEFAULT */ value.dnAttributes === undefined ||
                            $.deepEq(
                                value.dnAttributes,
                                MatchingRuleAssertion._default_value_for_dnAttributes
                            )
                                ? undefined
                                : $._encode_explicit(
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
