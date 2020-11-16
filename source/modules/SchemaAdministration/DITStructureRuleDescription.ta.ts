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
    RuleIdentifier,
    _decode_RuleIdentifier,
    _encode_RuleIdentifier,
} from "../InformationFramework/RuleIdentifier.ta";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export {
    DITStructureRule,
    _decode_DITStructureRule,
    _encode_DITStructureRule,
} from "../InformationFramework/DITStructureRule.ta";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export {
    RuleIdentifier,
    _decode_RuleIdentifier,
    _encode_RuleIdentifier,
} from "../InformationFramework/RuleIdentifier.ta";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION DITStructureRuleDescription */
/**
 * @summary DITStructureRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DITStructureRuleDescription ::= SEQUENCE {
 *   COMPONENTS OF DITStructureRule,
 *   name         [1]  SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString OPTIONAL,
 *   obsolete          BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class DITStructureRuleDescription {
    constructor(
        /**
         * @summary `ruleIdentifier`.
         * @public
         * @readonly
         */
        readonly ruleIdentifier: RuleIdentifier /* REPLICATED_COMPONENT */,
        /**
         * @summary `nameForm`.
         * @public
         * @readonly
         */
        readonly nameForm: OBJECT_IDENTIFIER /* REPLICATED_COMPONENT */,
        /**
         * @summary `superiorStructureRules`.
         * @public
         * @readonly
         */
        readonly superiorStructureRules: OPTIONAL<
            RuleIdentifier[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<UnboundedDirectoryString[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `obsolete`.
         * @public
         * @readonly
         */
        readonly obsolete: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DITStructureRuleDescription
     * @description
     *
     * This takes an `object` and converts it to a `DITStructureRuleDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITStructureRuleDescription`.
     * @returns {DITStructureRuleDescription}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof DITStructureRuleDescription]: DITStructureRuleDescription[_K];
            }
        >
    ): DITStructureRuleDescription {
        return new DITStructureRuleDescription(
            _o.ruleIdentifier,
            _o.nameForm,
            _o.superiorStructureRules,
            _o.name,
            _o.description,
            _o.obsolete,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `obsolete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_obsolete() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION DITStructureRuleDescription */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DITStructureRuleDescription */
/**
 * @summary The Leading Root Component Types of DITStructureRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DITStructureRuleDescription: $.ComponentSpec[] = [
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
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec("description", true, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "obsolete",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DITStructureRuleDescription */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DITStructureRuleDescription */
/**
 * @summary The Trailing Root Component Types of DITStructureRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DITStructureRuleDescription: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DITStructureRuleDescription */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DITStructureRuleDescription */
/**
 * @summary The Extension Addition Component Types of DITStructureRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DITStructureRuleDescription: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DITStructureRuleDescription */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DITStructureRuleDescription */
let _cached_decoder_for_DITStructureRuleDescription: $.ASN1Decoder<
    DITStructureRuleDescription
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DITStructureRuleDescription */

/* START_OF_SYMBOL_DEFINITION _decode_DITStructureRuleDescription */
/**
 * @summary Decodes an ASN.1 element into a(n) DITStructureRuleDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITStructureRuleDescription} The decoded data structure.
 */
export function _decode_DITStructureRuleDescription(el: _Element) {
    if (!_cached_decoder_for_DITStructureRuleDescription) {
        _cached_decoder_for_DITStructureRuleDescription = function (
            el: _Element
        ): DITStructureRuleDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let ruleIdentifier!: RuleIdentifier;
            let nameForm!: OBJECT_IDENTIFIER;
            let superiorStructureRules: OPTIONAL<RuleIdentifier[]>;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                DITStructureRuleDescription._default_value_for_obsolete;
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
                name: (_el: _Element): void => {
                    name = $._decode_explicit<UnboundedDirectoryString[]>(() =>
                        $._decodeSetOf<UnboundedDirectoryString>(
                            () => _decode_UnboundedDirectoryString
                        )
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = _decode_UnboundedDirectoryString(_el);
                },
                obsolete: (_el: _Element): void => {
                    obsolete = $._decodeBoolean(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DITStructureRuleDescription,
                _extension_additions_list_spec_for_DITStructureRuleDescription,
                _root_component_type_list_2_spec_for_DITStructureRuleDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITStructureRuleDescription /* SEQUENCE_CONSTRUCTOR_CALL */(
                ruleIdentifier,
                nameForm,
                superiorStructureRules,
                name,
                description,
                obsolete,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITStructureRuleDescription(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DITStructureRuleDescription */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DITStructureRuleDescription */
let _cached_encoder_for_DITStructureRuleDescription: $.ASN1Encoder<
    DITStructureRuleDescription
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DITStructureRuleDescription */

/* START_OF_SYMBOL_DEFINITION _encode_DITStructureRuleDescription */
/**
 * @summary Encodes a(n) DITStructureRuleDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITStructureRuleDescription, encoded as an ASN.1 Element.
 */
export function _encode_DITStructureRuleDescription(
    value: DITStructureRuleDescription,
    elGetter: $.ASN1Encoder<DITStructureRuleDescription>
) {
    if (!_cached_encoder_for_DITStructureRuleDescription) {
        _cached_encoder_for_DITStructureRuleDescription = function (
            value: DITStructureRuleDescription,
            elGetter: $.ASN1Encoder<DITStructureRuleDescription>
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
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<
                                              UnboundedDirectoryString
                                          >(
                                              () =>
                                                  _encode_UnboundedDirectoryString,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.name, $.BER),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.description,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.obsolete === undefined ||
                            $.deepEq(
                                value.obsolete,
                                DITStructureRuleDescription._default_value_for_obsolete
                            )
                                ? undefined
                                : $._encodeBoolean(value.obsolete, $.BER),
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
    return _cached_encoder_for_DITStructureRuleDescription(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DITStructureRuleDescription */

/* eslint-enable */
