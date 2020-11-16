/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION LdapSyntaxDescription */
/**
 * @summary LdapSyntaxDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LdapSyntaxDescription ::= SEQUENCE {
 *   identifier               SYNTAX-NAME.&id,
 *   description              UnboundedDirectoryString OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class LdapSyntaxDescription {
    constructor(
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LdapSyntaxDescription
     * @description
     *
     * This takes an `object` and converts it to a `LdapSyntaxDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LdapSyntaxDescription`.
     * @returns {LdapSyntaxDescription}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof LdapSyntaxDescription]: LdapSyntaxDescription[_K] }
        >
    ): LdapSyntaxDescription {
        return new LdapSyntaxDescription(
            _o.identifier,
            _o.description,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION LdapSyntaxDescription */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LdapSyntaxDescription */
/**
 * @summary The Leading Root Component Types of LdapSyntaxDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LdapSyntaxDescription: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "identifier",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec("description", true, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LdapSyntaxDescription */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LdapSyntaxDescription */
/**
 * @summary The Trailing Root Component Types of LdapSyntaxDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LdapSyntaxDescription: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LdapSyntaxDescription */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LdapSyntaxDescription */
/**
 * @summary The Extension Addition Component Types of LdapSyntaxDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LdapSyntaxDescription: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LdapSyntaxDescription */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LdapSyntaxDescription */
let _cached_decoder_for_LdapSyntaxDescription: $.ASN1Decoder<
    LdapSyntaxDescription
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LdapSyntaxDescription */

/* START_OF_SYMBOL_DEFINITION _decode_LdapSyntaxDescription */
/**
 * @summary Decodes an ASN.1 element into a(n) LdapSyntaxDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LdapSyntaxDescription} The decoded data structure.
 */
export function _decode_LdapSyntaxDescription(el: _Element) {
    if (!_cached_decoder_for_LdapSyntaxDescription) {
        _cached_decoder_for_LdapSyntaxDescription = function (
            el: _Element
        ): LdapSyntaxDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let identifier!: OBJECT_IDENTIFIER;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                identifier: (_el: _Element): void => {
                    identifier = $._decodeObjectIdentifier(_el);
                },
                description: (_el: _Element): void => {
                    description = _decode_UnboundedDirectoryString(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_LdapSyntaxDescription,
                _extension_additions_list_spec_for_LdapSyntaxDescription,
                _root_component_type_list_2_spec_for_LdapSyntaxDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new LdapSyntaxDescription /* SEQUENCE_CONSTRUCTOR_CALL */(
                identifier,
                description,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_LdapSyntaxDescription(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LdapSyntaxDescription */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LdapSyntaxDescription */
let _cached_encoder_for_LdapSyntaxDescription: $.ASN1Encoder<
    LdapSyntaxDescription
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LdapSyntaxDescription */

/* START_OF_SYMBOL_DEFINITION _encode_LdapSyntaxDescription */
/**
 * @summary Encodes a(n) LdapSyntaxDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LdapSyntaxDescription, encoded as an ASN.1 Element.
 */
export function _encode_LdapSyntaxDescription(
    value: LdapSyntaxDescription,
    elGetter: $.ASN1Encoder<LdapSyntaxDescription>
) {
    if (!_cached_encoder_for_LdapSyntaxDescription) {
        _cached_encoder_for_LdapSyntaxDescription = function (
            value: LdapSyntaxDescription,
            elGetter: $.ASN1Encoder<LdapSyntaxDescription>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.identifier,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.description,
                                      $.BER
                                  ),
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
    return _cached_encoder_for_LdapSyntaxDescription(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LdapSyntaxDescription */

/* eslint-enable */
