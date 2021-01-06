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
    ObjectClassInformation,
    _decode_ObjectClassInformation,
    _encode_ObjectClassInformation,
} from "../SchemaAdministration/ObjectClassInformation.ta";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export {
    ObjectClassInformation,
    _decode_ObjectClassInformation,
    _encode_ObjectClassInformation,
} from "../SchemaAdministration/ObjectClassInformation.ta";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION ObjectClassDescription */
/**
 * @summary ObjectClassDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectClassDescription ::= SEQUENCE {
 *   identifier        OBJECT-CLASS.&id,
 *   name              SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString                      OPTIONAL,
 *   obsolete          BOOLEAN                                       DEFAULT FALSE,
 *   information  [0]  ObjectClassInformation,
 *   ... }
 * ```
 *
 * @class
 */
export class ObjectClassDescription {
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
        readonly information: ObjectClassInformation,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ObjectClassDescription
     * @description
     *
     * This takes an `object` and converts it to a `ObjectClassDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObjectClassDescription`.
     * @returns {ObjectClassDescription}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof ObjectClassDescription]: ObjectClassDescription[_K] }
        >
    ): ObjectClassDescription {
        return new ObjectClassDescription(
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
/* END_OF_SYMBOL_DEFINITION ObjectClassDescription */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ObjectClassDescription */
/**
 * @summary The Leading Root Component Types of ObjectClassDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ObjectClassDescription: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ObjectClassDescription */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ObjectClassDescription */
/**
 * @summary The Trailing Root Component Types of ObjectClassDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ObjectClassDescription: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ObjectClassDescription */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ObjectClassDescription */
/**
 * @summary The Extension Addition Component Types of ObjectClassDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ObjectClassDescription: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ObjectClassDescription */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectClassDescription */
let _cached_decoder_for_ObjectClassDescription: $.ASN1Decoder<ObjectClassDescription> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectClassDescription */

/* START_OF_SYMBOL_DEFINITION _decode_ObjectClassDescription */
/**
 * @summary Decodes an ASN.1 element into a(n) ObjectClassDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectClassDescription} The decoded data structure.
 */
export function _decode_ObjectClassDescription(el: _Element) {
    if (!_cached_decoder_for_ObjectClassDescription) {
        _cached_decoder_for_ObjectClassDescription = function (
            el: _Element
        ): ObjectClassDescription {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let identifier!: OBJECT_IDENTIFIER;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                ObjectClassDescription._default_value_for_obsolete;
            let information!: ObjectClassInformation;
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
                    information = $._decode_explicit<ObjectClassInformation>(
                        () => _decode_ObjectClassInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ObjectClassDescription,
                _extension_additions_list_spec_for_ObjectClassDescription,
                _root_component_type_list_2_spec_for_ObjectClassDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ObjectClassDescription(
                /* SEQUENCE_CONSTRUCTOR_CALL */ identifier,
                name,
                description,
                obsolete,
                information,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ObjectClassDescription(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ObjectClassDescription */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectClassDescription */
let _cached_encoder_for_ObjectClassDescription: $.ASN1Encoder<ObjectClassDescription> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectClassDescription */

/* START_OF_SYMBOL_DEFINITION _encode_ObjectClassDescription */
/**
 * @summary Encodes a(n) ObjectClassDescription into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectClassDescription, encoded as an ASN.1 Element.
 */
export function _encode_ObjectClassDescription(
    value: ObjectClassDescription,
    elGetter: $.ASN1Encoder<ObjectClassDescription>
) {
    if (!_cached_encoder_for_ObjectClassDescription) {
        _cached_encoder_for_ObjectClassDescription = function (
            value: ObjectClassDescription,
            elGetter: $.ASN1Encoder<ObjectClassDescription>
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
                                ObjectClassDescription._default_value_for_obsolete
                            )
                                ? undefined
                                : $._encodeBoolean(value.obsolete, $.BER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_ObjectClassInformation,
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
    return _cached_encoder_for_ObjectClassDescription(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ObjectClassDescription */

/* eslint-enable */
