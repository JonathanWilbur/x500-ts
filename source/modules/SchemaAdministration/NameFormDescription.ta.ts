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
    NameFormInformation,
    _decode_NameFormInformation,
    _encode_NameFormInformation,
} from "../SchemaAdministration/NameFormInformation.ta";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export { NAME_FORM } from "../InformationFramework/NAME-FORM.oca";
export {
    NameFormInformation,
    _decode_NameFormInformation,
    _encode_NameFormInformation,
} from "../SchemaAdministration/NameFormInformation.ta";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION NameFormDescription */
/**
 * @summary NameFormDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameFormDescription ::= SEQUENCE {
 *   identifier        NAME-FORM.&id,
 *   name              SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString                      OPTIONAL,
 *   obsolete          BOOLEAN                                       DEFAULT FALSE,
 *   information  [0]  NameFormInformation,
 *   ... }
 * ```
 *
 * @class
 */
export class NameFormDescription {
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
        readonly information: NameFormInformation,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NameFormDescription
     * @description
     *
     * This takes an `object` and converts it to a `NameFormDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NameFormDescription`.
     * @returns {NameFormDescription}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof NameFormDescription]: NameFormDescription[_K] }
        >
    ): NameFormDescription {
        return new NameFormDescription(
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
/* END_OF_SYMBOL_DEFINITION NameFormDescription */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NameFormDescription */
/**
 * @summary The Leading Root Component Types of NameFormDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NameFormDescription: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NameFormDescription */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NameFormDescription */
/**
 * @summary The Trailing Root Component Types of NameFormDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NameFormDescription: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NameFormDescription */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NameFormDescription */
/**
 * @summary The Extension Addition Component Types of NameFormDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NameFormDescription: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NameFormDescription */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NameFormDescription */
let _cached_decoder_for_NameFormDescription: $.ASN1Decoder<
    NameFormDescription
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NameFormDescription */

/* START_OF_SYMBOL_DEFINITION _decode_NameFormDescription */
/**
 * @summary Decodes an ASN.1 element into a(n) NameFormDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameFormDescription} The decoded data structure.
 */
export function _decode_NameFormDescription(el: _Element) {
    if (!_cached_decoder_for_NameFormDescription) {
        _cached_decoder_for_NameFormDescription = function (
            el: _Element
        ): NameFormDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let identifier!: OBJECT_IDENTIFIER;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                NameFormDescription._default_value_for_obsolete;
            let information!: NameFormInformation;
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
                    information = $._decode_explicit<NameFormInformation>(
                        () => _decode_NameFormInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NameFormDescription,
                _extension_additions_list_spec_for_NameFormDescription,
                _root_component_type_list_2_spec_for_NameFormDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NameFormDescription /* SEQUENCE_CONSTRUCTOR_CALL */(
                identifier,
                name,
                description,
                obsolete,
                information,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_NameFormDescription(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NameFormDescription */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NameFormDescription */
let _cached_encoder_for_NameFormDescription: $.ASN1Encoder<
    NameFormDescription
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NameFormDescription */

/* START_OF_SYMBOL_DEFINITION _encode_NameFormDescription */
/**
 * @summary Encodes a(n) NameFormDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameFormDescription, encoded as an ASN.1 Element.
 */
export function _encode_NameFormDescription(
    value: NameFormDescription,
    elGetter: $.ASN1Encoder<NameFormDescription>
) {
    if (!_cached_encoder_for_NameFormDescription) {
        _cached_encoder_for_NameFormDescription = function (
            value: NameFormDescription,
            elGetter: $.ASN1Encoder<NameFormDescription>
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
                                NameFormDescription._default_value_for_obsolete
                            )
                                ? undefined
                                : $._encodeBoolean(value.obsolete, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_NameFormInformation,
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
    return _cached_encoder_for_NameFormDescription(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NameFormDescription */

/* eslint-enable */
