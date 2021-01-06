/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeValueAssertion,
    _decode_AttributeValueAssertion,
    _encode_AttributeValueAssertion,
} from "../InformationFramework/AttributeValueAssertion.ta";
export {
    AttributeValueAssertion,
    _decode_AttributeValueAssertion,
    _encode_AttributeValueAssertion,
} from "../InformationFramework/AttributeValueAssertion.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";

/* START_OF_SYMBOL_DEFINITION MultipleMatchingLocalities */
/**
 * @summary MultipleMatchingLocalities
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MultipleMatchingLocalities ::= SEQUENCE {
 *   matchingRuleUsed  MATCHING-RULE.&id OPTIONAL,
 *   attributeList     SEQUENCE OF AttributeValueAssertion,
 *   ... }
 * ```
 *
 * @class
 */
export class MultipleMatchingLocalities {
    constructor(
        /**
         * @summary `matchingRuleUsed`.
         * @public
         * @readonly
         */
        readonly matchingRuleUsed: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `attributeList`.
         * @public
         * @readonly
         */
        readonly attributeList: AttributeValueAssertion[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MultipleMatchingLocalities
     * @description
     *
     * This takes an `object` and converts it to a `MultipleMatchingLocalities`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MultipleMatchingLocalities`.
     * @returns {MultipleMatchingLocalities}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof MultipleMatchingLocalities]: MultipleMatchingLocalities[_K];
            }
        >
    ): MultipleMatchingLocalities {
        return new MultipleMatchingLocalities(
            _o.matchingRuleUsed,
            _o.attributeList,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION MultipleMatchingLocalities */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MultipleMatchingLocalities */
/**
 * @summary The Leading Root Component Types of MultipleMatchingLocalities
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MultipleMatchingLocalities: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "matchingRuleUsed",
        true,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "attributeList",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MultipleMatchingLocalities */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MultipleMatchingLocalities */
/**
 * @summary The Trailing Root Component Types of MultipleMatchingLocalities
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MultipleMatchingLocalities: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MultipleMatchingLocalities */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MultipleMatchingLocalities */
/**
 * @summary The Extension Addition Component Types of MultipleMatchingLocalities
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MultipleMatchingLocalities: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MultipleMatchingLocalities */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MultipleMatchingLocalities */
let _cached_decoder_for_MultipleMatchingLocalities: $.ASN1Decoder<MultipleMatchingLocalities> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MultipleMatchingLocalities */

/* START_OF_SYMBOL_DEFINITION _decode_MultipleMatchingLocalities */
/**
 * @summary Decodes an ASN.1 element into a(n) MultipleMatchingLocalities
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MultipleMatchingLocalities} The decoded data structure.
 */
export function _decode_MultipleMatchingLocalities(el: _Element) {
    if (!_cached_decoder_for_MultipleMatchingLocalities) {
        _cached_decoder_for_MultipleMatchingLocalities = function (
            el: _Element
        ): MultipleMatchingLocalities {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let matchingRuleUsed: OPTIONAL<OBJECT_IDENTIFIER>;
            let attributeList!: AttributeValueAssertion[];
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                matchingRuleUsed: (_el: _Element): void => {
                    matchingRuleUsed = $._decodeObjectIdentifier(_el);
                },
                attributeList: (_el: _Element): void => {
                    attributeList = $._decodeSequenceOf<AttributeValueAssertion>(
                        () => _decode_AttributeValueAssertion
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MultipleMatchingLocalities,
                _extension_additions_list_spec_for_MultipleMatchingLocalities,
                _root_component_type_list_2_spec_for_MultipleMatchingLocalities,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new MultipleMatchingLocalities(
                /* SEQUENCE_CONSTRUCTOR_CALL */ matchingRuleUsed,
                attributeList,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_MultipleMatchingLocalities(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MultipleMatchingLocalities */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MultipleMatchingLocalities */
let _cached_encoder_for_MultipleMatchingLocalities: $.ASN1Encoder<MultipleMatchingLocalities> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MultipleMatchingLocalities */

/* START_OF_SYMBOL_DEFINITION _encode_MultipleMatchingLocalities */
/**
 * @summary Encodes a(n) MultipleMatchingLocalities into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleMatchingLocalities, encoded as an ASN.1 Element.
 */
export function _encode_MultipleMatchingLocalities(
    value: MultipleMatchingLocalities,
    elGetter: $.ASN1Encoder<MultipleMatchingLocalities>
) {
    if (!_cached_encoder_for_MultipleMatchingLocalities) {
        _cached_encoder_for_MultipleMatchingLocalities = function (
            value: MultipleMatchingLocalities,
            elGetter: $.ASN1Encoder<MultipleMatchingLocalities>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.matchingRuleUsed ===
                            undefined
                                ? undefined
                                : $._encodeObjectIdentifier(
                                      value.matchingRuleUsed,
                                      $.BER
                                  ),
                            /* REQUIRED   */ $._encodeSequenceOf<AttributeValueAssertion>(
                                () => _encode_AttributeValueAssertion,
                                $.BER
                            )(value.attributeList, $.BER),
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
    return _cached_encoder_for_MultipleMatchingLocalities(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MultipleMatchingLocalities */

/* eslint-enable */
