/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    PrintableString,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PersonalName */
/**
 * @summary PersonalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PersonalName ::= SET {
 *   surname               [0]  PrintableString(SIZE (1..ub-surname-length)),
 *   given-name
 *     [1]  PrintableString(SIZE (1..ub-given-name-length)) OPTIONAL,
 *   initials
 *     [2]  PrintableString(SIZE (1..ub-initials-length)) OPTIONAL,
 *   generation-qualifier
 *     [3]  PrintableString(SIZE (1..ub-generation-qualifier-length)) OPTIONAL }
 * ```
 *
 * @class
 */
export class PersonalName {
    constructor(
        /**
         * @summary `surname`.
         * @public
         * @readonly
         */
        readonly surname: PrintableString,
        /**
         * @summary `given_name`.
         * @public
         * @readonly
         */
        readonly given_name: OPTIONAL<PrintableString>,
        /**
         * @summary `initials`.
         * @public
         * @readonly
         */
        readonly initials: OPTIONAL<PrintableString>,
        /**
         * @summary `generation_qualifier`.
         * @public
         * @readonly
         */
        readonly generation_qualifier: OPTIONAL<PrintableString>
    ) {}

    /**
     * @summary Restructures an object into a PersonalName
     * @description
     *
     * This takes an `object` and converts it to a `PersonalName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PersonalName`.
     * @returns {PersonalName}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof PersonalName]: PersonalName[_K] }>
    ): PersonalName {
        return new PersonalName(
            _o.surname,
            _o.given_name,
            _o.initials,
            _o.generation_qualifier
        );
    }
}
/* END_OF_SYMBOL_DEFINITION PersonalName */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PersonalName */
/**
 * @summary The Leading Root Component Types of PersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PersonalName: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "surname",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "given-name",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "initials",
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "generation-qualifier",
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PersonalName */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PersonalName */
/**
 * @summary The Trailing Root Component Types of PersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PersonalName: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PersonalName */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PersonalName */
/**
 * @summary The Extension Addition Component Types of PersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PersonalName: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PersonalName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonalName */
let _cached_decoder_for_PersonalName: $.ASN1Decoder<PersonalName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PersonalName */

/* START_OF_SYMBOL_DEFINITION _decode_PersonalName */
/**
 * @summary Decodes an ASN.1 element into a(n) PersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PersonalName} The decoded data structure.
 */
export function _decode_PersonalName(el: _Element) {
    if (!_cached_decoder_for_PersonalName) {
        _cached_decoder_for_PersonalName = function (
            el: _Element
        ): PersonalName {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let surname!: PrintableString;
            let given_name: OPTIONAL<PrintableString>;
            let initials: OPTIONAL<PrintableString>;
            let generation_qualifier: OPTIONAL<PrintableString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                surname: (_el: _Element): void => {
                    surname = $._decode_explicit<PrintableString>(
                        () => $._decodePrintableString
                    )(_el);
                },
                "given-name": (_el: _Element): void => {
                    given_name = $._decode_explicit<PrintableString>(
                        () => $._decodePrintableString
                    )(_el);
                },
                initials: (_el: _Element): void => {
                    initials = $._decode_explicit<PrintableString>(
                        () => $._decodePrintableString
                    )(_el);
                },
                "generation-qualifier": (_el: _Element): void => {
                    generation_qualifier = $._decode_explicit<PrintableString>(
                        () => $._decodePrintableString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PersonalName,
                _extension_additions_list_spec_for_PersonalName,
                _root_component_type_list_2_spec_for_PersonalName,
                undefined
            );
            return new PersonalName /* SET_CONSTRUCTOR_CALL */(
                surname,
                given_name,
                initials,
                generation_qualifier
            );
        };
    }
    return _cached_decoder_for_PersonalName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PersonalName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonalName */
let _cached_encoder_for_PersonalName: $.ASN1Encoder<PersonalName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PersonalName */

/* START_OF_SYMBOL_DEFINITION _encode_PersonalName */
/**
 * @summary Encodes a(n) PersonalName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PersonalName, encoded as an ASN.1 Element.
 */
export function _encode_PersonalName(
    value: PersonalName,
    elGetter: $.ASN1Encoder<PersonalName>
) {
    if (!_cached_encoder_for_PersonalName) {
        _cached_encoder_for_PersonalName = function (
            value: PersonalName,
            elGetter: $.ASN1Encoder<PersonalName>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => $._encodePrintableString,
                            $.BER
                        )(value.surname, $.BER),
                        /* IF_ABSENT  */ value.given_name === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodePrintableString,
                                  $.BER
                              )(value.given_name, $.BER),
                        /* IF_ABSENT  */ value.initials === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodePrintableString,
                                  $.BER
                              )(value.initials, $.BER),
                        /* IF_ABSENT  */ value.generation_qualifier ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodePrintableString,
                                  $.BER
                              )(value.generation_qualifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PersonalName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PersonalName */

/* eslint-enable */
