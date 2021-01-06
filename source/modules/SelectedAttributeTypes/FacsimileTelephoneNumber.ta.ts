/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    G3FacsimileNonBasicParameters,
    _decode_G3FacsimileNonBasicParameters,
    _encode_G3FacsimileNonBasicParameters,
} from "../PkiPmiExternalDataTypes/G3FacsimileNonBasicParameters.ta";
import {
    TelephoneNumber,
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from "../SelectedAttributeTypes/TelephoneNumber.ta";
export {
    a3_width /* IMPORTED_SHORT_NAMED_BIT */,
    b4_length /* IMPORTED_SHORT_NAMED_BIT */,
    b4_width /* IMPORTED_SHORT_NAMED_BIT */,
    bft /* IMPORTED_SHORT_NAMED_BIT */,
    character_mode /* IMPORTED_SHORT_NAMED_BIT */,
    dtm /* IMPORTED_SHORT_NAMED_BIT */,
    edi /* IMPORTED_SHORT_NAMED_BIT */,
    fine_resolution /* IMPORTED_SHORT_NAMED_BIT */,
    full_colour /* IMPORTED_SHORT_NAMED_BIT */,
    G3FacsimileNonBasicParameters,
    G3FacsimileNonBasicParameters_a3_width /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_b4_length /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_b4_width /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_bft /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_character_mode /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_dtm /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_edi /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_fine_resolution /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_full_colour /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_jpeg /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_mixed_mode /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_preferred_huffmann /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_processable_mode_26 /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_resolution_300x300 /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_resolution_400x400 /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_resolution_8x15 /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_resolution_type /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_t6_coding /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_twelve_bits /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_two_dimensional /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_uncompressed /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_unlimited_length /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_width_middle_1216_of_1728 /* IMPORTED_LONG_NAMED_BIT */,
    G3FacsimileNonBasicParameters_width_middle_864_of_1728 /* IMPORTED_LONG_NAMED_BIT */,
    jpeg /* IMPORTED_SHORT_NAMED_BIT */,
    mixed_mode /* IMPORTED_SHORT_NAMED_BIT */,
    preferred_huffmann /* IMPORTED_SHORT_NAMED_BIT */,
    processable_mode_26 /* IMPORTED_SHORT_NAMED_BIT */,
    resolution_300x300 /* IMPORTED_SHORT_NAMED_BIT */,
    resolution_400x400 /* IMPORTED_SHORT_NAMED_BIT */,
    resolution_8x15 /* IMPORTED_SHORT_NAMED_BIT */,
    resolution_type /* IMPORTED_SHORT_NAMED_BIT */,
    t6_coding /* IMPORTED_SHORT_NAMED_BIT */,
    twelve_bits /* IMPORTED_SHORT_NAMED_BIT */,
    two_dimensional /* IMPORTED_SHORT_NAMED_BIT */,
    uncompressed /* IMPORTED_SHORT_NAMED_BIT */,
    unlimited_length /* IMPORTED_SHORT_NAMED_BIT */,
    width_middle_1216_of_1728 /* IMPORTED_SHORT_NAMED_BIT */,
    width_middle_864_of_1728 /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_G3FacsimileNonBasicParameters,
    _encode_G3FacsimileNonBasicParameters,
} from "../PkiPmiExternalDataTypes/G3FacsimileNonBasicParameters.ta";
export {
    TelephoneNumber,
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from "../SelectedAttributeTypes/TelephoneNumber.ta";

/* START_OF_SYMBOL_DEFINITION FacsimileTelephoneNumber */
/**
 * @summary FacsimileTelephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FacsimileTelephoneNumber ::= SEQUENCE {
 *   telephoneNumber  TelephoneNumber,
 *   parameters       G3FacsimileNonBasicParameters OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class FacsimileTelephoneNumber {
    constructor(
        /**
         * @summary `telephoneNumber`.
         * @public
         * @readonly
         */
        readonly telephoneNumber: TelephoneNumber,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<G3FacsimileNonBasicParameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a FacsimileTelephoneNumber
     * @description
     *
     * This takes an `object` and converts it to a `FacsimileTelephoneNumber`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FacsimileTelephoneNumber`.
     * @returns {FacsimileTelephoneNumber}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof FacsimileTelephoneNumber]: FacsimileTelephoneNumber[_K];
            }
        >
    ): FacsimileTelephoneNumber {
        return new FacsimileTelephoneNumber(
            _o.telephoneNumber,
            _o.parameters,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION FacsimileTelephoneNumber */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FacsimileTelephoneNumber */
/**
 * @summary The Leading Root Component Types of FacsimileTelephoneNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FacsimileTelephoneNumber: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "telephoneNumber",
        false,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "parameters",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FacsimileTelephoneNumber */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FacsimileTelephoneNumber */
/**
 * @summary The Trailing Root Component Types of FacsimileTelephoneNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FacsimileTelephoneNumber: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FacsimileTelephoneNumber */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FacsimileTelephoneNumber */
/**
 * @summary The Extension Addition Component Types of FacsimileTelephoneNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FacsimileTelephoneNumber: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FacsimileTelephoneNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FacsimileTelephoneNumber */
let _cached_decoder_for_FacsimileTelephoneNumber: $.ASN1Decoder<FacsimileTelephoneNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FacsimileTelephoneNumber */

/* START_OF_SYMBOL_DEFINITION _decode_FacsimileTelephoneNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) FacsimileTelephoneNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FacsimileTelephoneNumber} The decoded data structure.
 */
export function _decode_FacsimileTelephoneNumber(el: _Element) {
    if (!_cached_decoder_for_FacsimileTelephoneNumber) {
        _cached_decoder_for_FacsimileTelephoneNumber = function (
            el: _Element
        ): FacsimileTelephoneNumber {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let telephoneNumber!: TelephoneNumber;
            let parameters: OPTIONAL<G3FacsimileNonBasicParameters>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                telephoneNumber: (_el: _Element): void => {
                    telephoneNumber = _decode_TelephoneNumber(_el);
                },
                parameters: (_el: _Element): void => {
                    parameters = _decode_G3FacsimileNonBasicParameters(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_FacsimileTelephoneNumber,
                _extension_additions_list_spec_for_FacsimileTelephoneNumber,
                _root_component_type_list_2_spec_for_FacsimileTelephoneNumber,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new FacsimileTelephoneNumber(
                /* SEQUENCE_CONSTRUCTOR_CALL */ telephoneNumber,
                parameters,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_FacsimileTelephoneNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FacsimileTelephoneNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FacsimileTelephoneNumber */
let _cached_encoder_for_FacsimileTelephoneNumber: $.ASN1Encoder<FacsimileTelephoneNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FacsimileTelephoneNumber */

/* START_OF_SYMBOL_DEFINITION _encode_FacsimileTelephoneNumber */
/**
 * @summary Encodes a(n) FacsimileTelephoneNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FacsimileTelephoneNumber, encoded as an ASN.1 Element.
 */
export function _encode_FacsimileTelephoneNumber(
    value: FacsimileTelephoneNumber,
    elGetter: $.ASN1Encoder<FacsimileTelephoneNumber>
) {
    if (!_cached_encoder_for_FacsimileTelephoneNumber) {
        _cached_encoder_for_FacsimileTelephoneNumber = function (
            value: FacsimileTelephoneNumber,
            elGetter: $.ASN1Encoder<FacsimileTelephoneNumber>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_TelephoneNumber(
                                value.telephoneNumber,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.parameters === undefined
                                ? undefined
                                : _encode_G3FacsimileNonBasicParameters(
                                      value.parameters,
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
    return _cached_encoder_for_FacsimileTelephoneNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FacsimileTelephoneNumber */

/* eslint-enable */
