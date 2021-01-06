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
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    DITContentRule,
    _decode_DITContentRule,
    _encode_DITContentRule,
} from "../InformationFramework/DITContentRule.ta";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION DITContentRuleDescription */
/**
 * @summary DITContentRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DITContentRuleDescription ::= SEQUENCE {
 *   COMPONENTS OF DITContentRule,
 *   name         [4]  SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString OPTIONAL,
 *   obsolete          BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class DITContentRuleDescription {
    constructor(
        /**
         * @summary `structuralObjectClass`.
         * @public
         * @readonly
         */
        readonly structuralObjectClass: OBJECT_IDENTIFIER /* REPLICATED_COMPONENT */,
        /**
         * @summary `auxiliaries`.
         * @public
         * @readonly
         */
        readonly auxiliaries: OPTIONAL<
            OBJECT_IDENTIFIER[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `mandatory`.
         * @public
         * @readonly
         */
        readonly mandatory: OPTIONAL<
            OBJECT_IDENTIFIER[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `optional`.
         * @public
         * @readonly
         */
        readonly optional: OPTIONAL<
            OBJECT_IDENTIFIER[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `precluded`.
         * @public
         * @readonly
         */
        readonly precluded: OPTIONAL<
            OBJECT_IDENTIFIER[]
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
     * @summary Restructures an object into a DITContentRuleDescription
     * @description
     *
     * This takes an `object` and converts it to a `DITContentRuleDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITContentRuleDescription`.
     * @returns {DITContentRuleDescription}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof DITContentRuleDescription]: DITContentRuleDescription[_K];
            }
        >
    ): DITContentRuleDescription {
        return new DITContentRuleDescription(
            _o.structuralObjectClass,
            _o.auxiliaries,
            _o.mandatory,
            _o.optional,
            _o.precluded,
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
/* END_OF_SYMBOL_DEFINITION DITContentRuleDescription */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DITContentRuleDescription */
/**
 * @summary The Leading Root Component Types of DITContentRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DITContentRuleDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "structuralObjectClass",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "auxiliaries",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "mandatory",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "optional",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "precluded",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.context, 4),
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DITContentRuleDescription */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DITContentRuleDescription */
/**
 * @summary The Trailing Root Component Types of DITContentRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DITContentRuleDescription: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DITContentRuleDescription */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DITContentRuleDescription */
/**
 * @summary The Extension Addition Component Types of DITContentRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DITContentRuleDescription: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DITContentRuleDescription */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DITContentRuleDescription */
let _cached_decoder_for_DITContentRuleDescription: $.ASN1Decoder<DITContentRuleDescription> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DITContentRuleDescription */

/* START_OF_SYMBOL_DEFINITION _decode_DITContentRuleDescription */
/**
 * @summary Decodes an ASN.1 element into a(n) DITContentRuleDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITContentRuleDescription} The decoded data structure.
 */
export function _decode_DITContentRuleDescription(el: _Element) {
    if (!_cached_decoder_for_DITContentRuleDescription) {
        _cached_decoder_for_DITContentRuleDescription = function (
            el: _Element
        ): DITContentRuleDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let structuralObjectClass!: OBJECT_IDENTIFIER;
            let auxiliaries: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let mandatory: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let optional: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let precluded: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                DITContentRuleDescription._default_value_for_obsolete;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                structuralObjectClass: (_el: _Element): void => {
                    structuralObjectClass = $._decodeObjectIdentifier(_el);
                },
                auxiliaries: (_el: _Element): void => {
                    auxiliaries = $._decodeSetOf<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                mandatory: (_el: _Element): void => {
                    mandatory = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                optional: (_el: _Element): void => {
                    optional = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                precluded: (_el: _Element): void => {
                    precluded = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
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
                _root_component_type_list_1_spec_for_DITContentRuleDescription,
                _extension_additions_list_spec_for_DITContentRuleDescription,
                _root_component_type_list_2_spec_for_DITContentRuleDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITContentRuleDescription(
                /* SEQUENCE_CONSTRUCTOR_CALL */ structuralObjectClass,
                auxiliaries,
                mandatory,
                optional,
                precluded,
                name,
                description,
                obsolete,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITContentRuleDescription(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DITContentRuleDescription */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DITContentRuleDescription */
let _cached_encoder_for_DITContentRuleDescription: $.ASN1Encoder<DITContentRuleDescription> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DITContentRuleDescription */

/* START_OF_SYMBOL_DEFINITION _encode_DITContentRuleDescription */
/**
 * @summary Encodes a(n) DITContentRuleDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITContentRuleDescription, encoded as an ASN.1 Element.
 */
export function _encode_DITContentRuleDescription(
    value: DITContentRuleDescription,
    elGetter: $.ASN1Encoder<DITContentRuleDescription>
) {
    if (!_cached_encoder_for_DITContentRuleDescription) {
        _cached_encoder_for_DITContentRuleDescription = function (
            value: DITContentRuleDescription,
            elGetter: $.ASN1Encoder<DITContentRuleDescription>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.structuralObjectClass,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.auxiliaries === undefined
                                ? undefined
                                : $._encodeSetOf<OBJECT_IDENTIFIER>(
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.auxiliaries, $.BER),
                            /* IF_ABSENT  */ value.mandatory === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.mandatory, $.BER),
                            /* IF_ABSENT  */ value.optional === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.optional, $.BER),
                            /* IF_ABSENT  */ value.precluded === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.precluded, $.BER),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () =>
                                          $._encodeSetOf<UnboundedDirectoryString>(
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
                                DITContentRuleDescription._default_value_for_obsolete
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
    return _cached_encoder_for_DITContentRuleDescription(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DITContentRuleDescription */

/* eslint-enable */
