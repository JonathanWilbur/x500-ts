/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION NameFormInformation */
/**
 * @summary NameFormInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameFormInformation ::= SEQUENCE {
 *   subordinate        OBJECT-CLASS.&id,
 *   namingMandatories  SET OF ATTRIBUTE.&id,
 *   namingOptionals    SET SIZE (1..MAX) OF ATTRIBUTE.&id OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class NameFormInformation {
    constructor(
        /**
         * @summary `subordinate`.
         * @public
         * @readonly
         */
        readonly subordinate: OBJECT_IDENTIFIER,
        /**
         * @summary `namingMandatories`.
         * @public
         * @readonly
         */
        readonly namingMandatories: OBJECT_IDENTIFIER[],
        /**
         * @summary `namingOptionals`.
         * @public
         * @readonly
         */
        readonly namingOptionals: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NameFormInformation
     * @description
     *
     * This takes an `object` and converts it to a `NameFormInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NameFormInformation`.
     * @returns {NameFormInformation}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof NameFormInformation]: NameFormInformation[_K] }
        >
    ): NameFormInformation {
        return new NameFormInformation(
            _o.subordinate,
            _o.namingMandatories,
            _o.namingOptionals,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION NameFormInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NameFormInformation */
/**
 * @summary The Leading Root Component Types of NameFormInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NameFormInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "subordinate",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "namingMandatories",
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "namingOptionals",
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NameFormInformation */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NameFormInformation */
/**
 * @summary The Trailing Root Component Types of NameFormInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NameFormInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NameFormInformation */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NameFormInformation */
/**
 * @summary The Extension Addition Component Types of NameFormInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NameFormInformation: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NameFormInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NameFormInformation */
let _cached_decoder_for_NameFormInformation: $.ASN1Decoder<NameFormInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NameFormInformation */

/* START_OF_SYMBOL_DEFINITION _decode_NameFormInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) NameFormInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameFormInformation} The decoded data structure.
 */
export function _decode_NameFormInformation(el: _Element) {
    if (!_cached_decoder_for_NameFormInformation) {
        _cached_decoder_for_NameFormInformation = function (
            el: _Element
        ): NameFormInformation {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let subordinate!: OBJECT_IDENTIFIER;
            let namingMandatories!: OBJECT_IDENTIFIER[];
            let namingOptionals: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                subordinate: (_el: _Element): void => {
                    subordinate = $._decodeObjectIdentifier(_el);
                },
                namingMandatories: (_el: _Element): void => {
                    namingMandatories = $._decodeSetOf<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                namingOptionals: (_el: _Element): void => {
                    namingOptionals = $._decodeSetOf<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NameFormInformation,
                _extension_additions_list_spec_for_NameFormInformation,
                _root_component_type_list_2_spec_for_NameFormInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NameFormInformation(
                /* SEQUENCE_CONSTRUCTOR_CALL */ subordinate,
                namingMandatories,
                namingOptionals,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_NameFormInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NameFormInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NameFormInformation */
let _cached_encoder_for_NameFormInformation: $.ASN1Encoder<NameFormInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NameFormInformation */

/* START_OF_SYMBOL_DEFINITION _encode_NameFormInformation */
/**
 * @summary Encodes a(n) NameFormInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameFormInformation, encoded as an ASN.1 Element.
 */
export function _encode_NameFormInformation(
    value: NameFormInformation,
    elGetter: $.ASN1Encoder<NameFormInformation>
) {
    if (!_cached_encoder_for_NameFormInformation) {
        _cached_encoder_for_NameFormInformation = function (
            value: NameFormInformation,
            elGetter: $.ASN1Encoder<NameFormInformation>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.subordinate,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<OBJECT_IDENTIFIER>(
                                () => $._encodeObjectIdentifier,
                                $.BER
                            )(value.namingMandatories, $.BER),
                            /* IF_ABSENT  */ value.namingOptionals === undefined
                                ? undefined
                                : $._encodeSetOf<OBJECT_IDENTIFIER>(
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.namingOptionals, $.BER),
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
    return _cached_encoder_for_NameFormInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NameFormInformation */

/* eslint-enable */
