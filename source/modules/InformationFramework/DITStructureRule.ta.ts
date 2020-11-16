/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RuleIdentifier,
    _decode_RuleIdentifier,
    _encode_RuleIdentifier,
} from "../InformationFramework/RuleIdentifier.ta";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export {
    RuleIdentifier,
    _decode_RuleIdentifier,
    _encode_RuleIdentifier,
} from "../InformationFramework/RuleIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION DITStructureRule */
/**
 * @summary DITStructureRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DITStructureRule ::= SEQUENCE {
 *   ruleIdentifier          RuleIdentifier,
 *                  -- shall be unique within the scope of the subschema
 *   nameForm                NAME-FORM.&id,
 *   superiorStructureRules  SET SIZE (1..MAX) OF RuleIdentifier OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class DITStructureRule {
    constructor(
        /**
         * @summary `ruleIdentifier`.
         * @public
         * @readonly
         */
        readonly ruleIdentifier: RuleIdentifier,
        /**
         * @summary `nameForm`.
         * @public
         * @readonly
         */
        readonly nameForm: OBJECT_IDENTIFIER,
        /**
         * @summary `superiorStructureRules`.
         * @public
         * @readonly
         */
        readonly superiorStructureRules: OPTIONAL<RuleIdentifier[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DITStructureRule
     * @description
     *
     * This takes an `object` and converts it to a `DITStructureRule`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITStructureRule`.
     * @returns {DITStructureRule}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DITStructureRule]: DITStructureRule[_K] }>
    ): DITStructureRule {
        return new DITStructureRule(
            _o.ruleIdentifier,
            _o.nameForm,
            _o.superiorStructureRules,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION DITStructureRule */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DITStructureRule */
/**
 * @summary The Leading Root Component Types of DITStructureRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DITStructureRule: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ruleIdentifier",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nameForm",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "superiorStructureRules",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DITStructureRule */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DITStructureRule */
/**
 * @summary The Trailing Root Component Types of DITStructureRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DITStructureRule: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DITStructureRule */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DITStructureRule */
/**
 * @summary The Extension Addition Component Types of DITStructureRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DITStructureRule: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DITStructureRule */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DITStructureRule */
let _cached_decoder_for_DITStructureRule: $.ASN1Decoder<
    DITStructureRule
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DITStructureRule */

/* START_OF_SYMBOL_DEFINITION _decode_DITStructureRule */
/**
 * @summary Decodes an ASN.1 element into a(n) DITStructureRule
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITStructureRule} The decoded data structure.
 */
export function _decode_DITStructureRule(el: _Element) {
    if (!_cached_decoder_for_DITStructureRule) {
        _cached_decoder_for_DITStructureRule = function (
            el: _Element
        ): DITStructureRule {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let ruleIdentifier!: RuleIdentifier;
            let nameForm!: OBJECT_IDENTIFIER;
            let superiorStructureRules: OPTIONAL<RuleIdentifier[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                ruleIdentifier: (_el: _Element): void => {
                    ruleIdentifier = _decode_RuleIdentifier(_el);
                },
                nameForm: (_el: _Element): void => {
                    nameForm = $._decodeObjectIdentifier(_el);
                },
                superiorStructureRules: (_el: _Element): void => {
                    superiorStructureRules = $._decodeSetOf<RuleIdentifier>(
                        () => _decode_RuleIdentifier
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DITStructureRule,
                _extension_additions_list_spec_for_DITStructureRule,
                _root_component_type_list_2_spec_for_DITStructureRule,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITStructureRule /* SEQUENCE_CONSTRUCTOR_CALL */(
                ruleIdentifier,
                nameForm,
                superiorStructureRules,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITStructureRule(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DITStructureRule */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DITStructureRule */
let _cached_encoder_for_DITStructureRule: $.ASN1Encoder<
    DITStructureRule
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DITStructureRule */

/* START_OF_SYMBOL_DEFINITION _encode_DITStructureRule */
/**
 * @summary Encodes a(n) DITStructureRule into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITStructureRule, encoded as an ASN.1 Element.
 */
export function _encode_DITStructureRule(
    value: DITStructureRule,
    elGetter: $.ASN1Encoder<DITStructureRule>
) {
    if (!_cached_encoder_for_DITStructureRule) {
        _cached_encoder_for_DITStructureRule = function (
            value: DITStructureRule,
            elGetter: $.ASN1Encoder<DITStructureRule>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RuleIdentifier(
                                value.ruleIdentifier,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.nameForm,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.superiorStructureRules ===
                            undefined
                                ? undefined
                                : $._encodeSetOf<RuleIdentifier>(
                                      () => _encode_RuleIdentifier,
                                      $.BER
                                  )(value.superiorStructureRules, $.BER),
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
    return _cached_encoder_for_DITStructureRule(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DITStructureRule */

/* eslint-enable */
