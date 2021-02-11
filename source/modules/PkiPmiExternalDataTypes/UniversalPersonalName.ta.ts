/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../PkiPmiExternalDataTypes/UniversalOrBMPString.ta";
export { ub_universal_generation_qualifier_length } from "../PkiPmiExternalDataTypes/ub-universal-generation-qualifier-length.va";
export { ub_universal_given_name_length } from "../PkiPmiExternalDataTypes/ub-universal-given-name-length.va";
export { ub_universal_initials_length } from "../PkiPmiExternalDataTypes/ub-universal-initials-length.va";
export { ub_universal_surname_length } from "../PkiPmiExternalDataTypes/ub-universal-surname-length.va";
export {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from "../PkiPmiExternalDataTypes/UniversalOrBMPString.ta";

/* START_OF_SYMBOL_DEFINITION UniversalPersonalName */
/**
 * @summary UniversalPersonalName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPersonalName ::= SET {
 *   surname
 *     [0]  UniversalOrBMPString{ub-universal-surname-length},
 *   -- If a language is specified within surname, then that language applies to each of the
 *   -- following optional components unless the component specifies another language.
 *   given-name
 *     [1]  UniversalOrBMPString{ub-universal-given-name-length} OPTIONAL,
 *   initials
 *     [2]  UniversalOrBMPString{ub-universal-initials-length} OPTIONAL,
 *   generation-qualifier
 *     [3]  UniversalOrBMPString{ub-universal-generation-qualifier-length} OPTIONAL }
 * ```
 *
 * @class
 */
export class UniversalPersonalName {
    constructor(
        /**
         * @summary `surname`.
         * @public
         * @readonly
         */
        readonly surname: UniversalOrBMPString,
        /**
         * @summary `given_name`.
         * @public
         * @readonly
         */
        readonly given_name: OPTIONAL<UniversalOrBMPString>,
        /**
         * @summary `initials`.
         * @public
         * @readonly
         */
        readonly initials: OPTIONAL<UniversalOrBMPString>,
        /**
         * @summary `generation_qualifier`.
         * @public
         * @readonly
         */
        readonly generation_qualifier: OPTIONAL<UniversalOrBMPString>
    ) {}

    /**
     * @summary Restructures an object into a UniversalPersonalName
     * @description
     *
     * This takes an `object` and converts it to a `UniversalPersonalName`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UniversalPersonalName`.
     * @returns {UniversalPersonalName}
     */
    public static _from_object(
        _o: { [_K in keyof UniversalPersonalName]: UniversalPersonalName[_K] }
    ): UniversalPersonalName {
        return new UniversalPersonalName(
            _o.surname,
            _o.given_name,
            _o.initials,
            _o.generation_qualifier
        );
    }
}
/* END_OF_SYMBOL_DEFINITION UniversalPersonalName */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UniversalPersonalName */
/**
 * @summary The Leading Root Component Types of UniversalPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UniversalPersonalName: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UniversalPersonalName */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UniversalPersonalName */
/**
 * @summary The Trailing Root Component Types of UniversalPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UniversalPersonalName: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UniversalPersonalName */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UniversalPersonalName */
/**
 * @summary The Extension Addition Component Types of UniversalPersonalName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UniversalPersonalName: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UniversalPersonalName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPersonalName */
let _cached_decoder_for_UniversalPersonalName: $.ASN1Decoder<UniversalPersonalName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPersonalName */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalPersonalName */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPersonalName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPersonalName} The decoded data structure.
 */
export function _decode_UniversalPersonalName(el: _Element) {
    if (!_cached_decoder_for_UniversalPersonalName) {
        _cached_decoder_for_UniversalPersonalName = function (
            el: _Element
        ): UniversalPersonalName {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let surname!: UniversalOrBMPString;
            let given_name: OPTIONAL<UniversalOrBMPString>;
            let initials: OPTIONAL<UniversalOrBMPString>;
            let generation_qualifier: OPTIONAL<UniversalOrBMPString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                surname: (_el: _Element): void => {
                    surname = $._decode_explicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
                "given-name": (_el: _Element): void => {
                    given_name = $._decode_explicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
                initials: (_el: _Element): void => {
                    initials = $._decode_explicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
                "generation-qualifier": (_el: _Element): void => {
                    generation_qualifier = $._decode_explicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UniversalPersonalName,
                _extension_additions_list_spec_for_UniversalPersonalName,
                _root_component_type_list_2_spec_for_UniversalPersonalName,
                undefined
            );
            return new UniversalPersonalName(
                /* SET_CONSTRUCTOR_CALL */ surname,
                given_name,
                initials,
                generation_qualifier
            );
        };
    }
    return _cached_decoder_for_UniversalPersonalName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalPersonalName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPersonalName */
let _cached_encoder_for_UniversalPersonalName: $.ASN1Encoder<UniversalPersonalName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPersonalName */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalPersonalName */
/**
 * @summary Encodes a(n) UniversalPersonalName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPersonalName, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPersonalName(
    value: UniversalPersonalName,
    elGetter: $.ASN1Encoder<UniversalPersonalName>
) {
    if (!_cached_encoder_for_UniversalPersonalName) {
        _cached_encoder_for_UniversalPersonalName = function (
            value: UniversalPersonalName,
            elGetter: $.ASN1Encoder<UniversalPersonalName>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_UniversalOrBMPString,
                            $.BER
                        )(value.surname, $.BER),
                        /* IF_ABSENT  */ value.given_name === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_UniversalOrBMPString,
                                  $.BER
                              )(value.given_name, $.BER),
                        /* IF_ABSENT  */ value.initials === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_UniversalOrBMPString,
                                  $.BER
                              )(value.initials, $.BER),
                        /* IF_ABSENT  */ value.generation_qualifier ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_UniversalOrBMPString,
                                  $.BER
                              )(value.generation_qualifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UniversalPersonalName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalPersonalName */

/* eslint-enable */
