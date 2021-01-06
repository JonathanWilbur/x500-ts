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
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION MatchingRuleUseDescription */
/**
 * @summary MatchingRuleUseDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MatchingRuleUseDescription ::= SEQUENCE {
 *   identifier        MATCHING-RULE.&id,
 *   name              SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString                      OPTIONAL,
 *   obsolete          BOOLEAN                                       DEFAULT FALSE,
 *   information  [0]  SET OF ATTRIBUTE.&id,
 *   ... }
 * ```
 *
 * @class
 */
export class MatchingRuleUseDescription {
    constructor(
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
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
         * @summary `information`.
         * @public
         * @readonly
         */
        readonly information: OBJECT_IDENTIFIER[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MatchingRuleUseDescription
     * @description
     *
     * This takes an `object` and converts it to a `MatchingRuleUseDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MatchingRuleUseDescription`.
     * @returns {MatchingRuleUseDescription}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof MatchingRuleUseDescription]: MatchingRuleUseDescription[_K];
            }
        >
    ): MatchingRuleUseDescription {
        return new MatchingRuleUseDescription(
            _o.identifier,
            _o.name,
            _o.description,
            _o.obsolete,
            _o.information,
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
/* END_OF_SYMBOL_DEFINITION MatchingRuleUseDescription */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MatchingRuleUseDescription */
/**
 * @summary The Leading Root Component Types of MatchingRuleUseDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MatchingRuleUseDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "identifier",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.universal, 17),
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
    new $.ComponentSpec(
        "information",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MatchingRuleUseDescription */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MatchingRuleUseDescription */
/**
 * @summary The Trailing Root Component Types of MatchingRuleUseDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MatchingRuleUseDescription: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MatchingRuleUseDescription */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MatchingRuleUseDescription */
/**
 * @summary The Extension Addition Component Types of MatchingRuleUseDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MatchingRuleUseDescription: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MatchingRuleUseDescription */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MatchingRuleUseDescription */
let _cached_decoder_for_MatchingRuleUseDescription: $.ASN1Decoder<MatchingRuleUseDescription> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MatchingRuleUseDescription */

/* START_OF_SYMBOL_DEFINITION _decode_MatchingRuleUseDescription */
/**
 * @summary Decodes an ASN.1 element into a(n) MatchingRuleUseDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MatchingRuleUseDescription} The decoded data structure.
 */
export function _decode_MatchingRuleUseDescription(el: _Element) {
    if (!_cached_decoder_for_MatchingRuleUseDescription) {
        _cached_decoder_for_MatchingRuleUseDescription = function (
            el: _Element
        ): MatchingRuleUseDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let identifier!: OBJECT_IDENTIFIER;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                MatchingRuleUseDescription._default_value_for_obsolete;
            let information!: OBJECT_IDENTIFIER[];
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                identifier: (_el: _Element): void => {
                    identifier = $._decodeObjectIdentifier(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decodeSetOf<UnboundedDirectoryString>(
                        () => _decode_UnboundedDirectoryString
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = _decode_UnboundedDirectoryString(_el);
                },
                obsolete: (_el: _Element): void => {
                    obsolete = $._decodeBoolean(_el);
                },
                information: (_el: _Element): void => {
                    information = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MatchingRuleUseDescription,
                _extension_additions_list_spec_for_MatchingRuleUseDescription,
                _root_component_type_list_2_spec_for_MatchingRuleUseDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new MatchingRuleUseDescription(
                /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
                name,
                description,
                obsolete,
                information,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_MatchingRuleUseDescription(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MatchingRuleUseDescription */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MatchingRuleUseDescription */
let _cached_encoder_for_MatchingRuleUseDescription: $.ASN1Encoder<MatchingRuleUseDescription> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MatchingRuleUseDescription */

/* START_OF_SYMBOL_DEFINITION _encode_MatchingRuleUseDescription */
/**
 * @summary Encodes a(n) MatchingRuleUseDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MatchingRuleUseDescription, encoded as an ASN.1 Element.
 */
export function _encode_MatchingRuleUseDescription(
    value: MatchingRuleUseDescription,
    elGetter: $.ASN1Encoder<MatchingRuleUseDescription>
) {
    if (!_cached_encoder_for_MatchingRuleUseDescription) {
        _cached_encoder_for_MatchingRuleUseDescription = function (
            value: MatchingRuleUseDescription,
            elGetter: $.ASN1Encoder<MatchingRuleUseDescription>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.identifier,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encodeSetOf<UnboundedDirectoryString>(
                                      () => _encode_UnboundedDirectoryString,
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
                                MatchingRuleUseDescription._default_value_for_obsolete
                            )
                                ? undefined
                                : $._encodeBoolean(value.obsolete, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () =>
                                    $._encodeSetOf<OBJECT_IDENTIFIER>(
                                        () => $._encodeObjectIdentifier,
                                        $.BER
                                    ),
                                $.BER
                            )(value.information, $.BER),
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
    return _cached_encoder_for_MatchingRuleUseDescription(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MatchingRuleUseDescription */

/* eslint-enable */
