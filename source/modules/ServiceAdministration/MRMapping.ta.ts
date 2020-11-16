/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Mapping,
    _decode_Mapping,
    _encode_Mapping,
} from "../ServiceAdministration/Mapping.ta";
import {
    MRSubstitution,
    _decode_MRSubstitution,
    _encode_MRSubstitution,
} from "../ServiceAdministration/MRSubstitution.ta";
export {
    Mapping,
    _decode_Mapping,
    _encode_Mapping,
} from "../ServiceAdministration/Mapping.ta";
export {
    MRSubstitution,
    _decode_MRSubstitution,
    _encode_MRSubstitution,
} from "../ServiceAdministration/MRSubstitution.ta";

/* START_OF_SYMBOL_DEFINITION MRMapping */
/**
 * @summary MRMapping
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MRMapping ::= SEQUENCE {
 *   mapping       [0]  SEQUENCE SIZE (1..MAX) OF Mapping OPTIONAL,
 *   substitution  [1]  SEQUENCE SIZE (1..MAX) OF MRSubstitution OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class MRMapping {
    constructor(
        /**
         * @summary `mapping`.
         * @public
         * @readonly
         */
        readonly mapping: OPTIONAL<Mapping[]>,
        /**
         * @summary `substitution`.
         * @public
         * @readonly
         */
        readonly substitution: OPTIONAL<MRSubstitution[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MRMapping
     * @description
     *
     * This takes an `object` and converts it to a `MRMapping`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MRMapping`.
     * @returns {MRMapping}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof MRMapping]: MRMapping[_K] }>
    ): MRMapping {
        return new MRMapping(
            _o.mapping,
            _o.substitution,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION MRMapping */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MRMapping */
/**
 * @summary The Leading Root Component Types of MRMapping
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MRMapping: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mapping",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "substitution",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MRMapping */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MRMapping */
/**
 * @summary The Trailing Root Component Types of MRMapping
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MRMapping: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MRMapping */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MRMapping */
/**
 * @summary The Extension Addition Component Types of MRMapping
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MRMapping: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MRMapping */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MRMapping */
let _cached_decoder_for_MRMapping: $.ASN1Decoder<MRMapping> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MRMapping */

/* START_OF_SYMBOL_DEFINITION _decode_MRMapping */
/**
 * @summary Decodes an ASN.1 element into a(n) MRMapping
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MRMapping} The decoded data structure.
 */
export function _decode_MRMapping(el: _Element) {
    if (!_cached_decoder_for_MRMapping) {
        _cached_decoder_for_MRMapping = function (el: _Element): MRMapping {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let mapping: OPTIONAL<Mapping[]>;
            let substitution: OPTIONAL<MRSubstitution[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                mapping: (_el: _Element): void => {
                    mapping = $._decode_explicit<Mapping[]>(() =>
                        $._decodeSequenceOf<Mapping>(() => _decode_Mapping)
                    )(_el);
                },
                substitution: (_el: _Element): void => {
                    substitution = $._decode_explicit<MRSubstitution[]>(() =>
                        $._decodeSequenceOf<MRSubstitution>(
                            () => _decode_MRSubstitution
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MRMapping,
                _extension_additions_list_spec_for_MRMapping,
                _root_component_type_list_2_spec_for_MRMapping,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new MRMapping /* SEQUENCE_CONSTRUCTOR_CALL */(
                mapping,
                substitution,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_MRMapping(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MRMapping */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MRMapping */
let _cached_encoder_for_MRMapping: $.ASN1Encoder<MRMapping> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MRMapping */

/* START_OF_SYMBOL_DEFINITION _encode_MRMapping */
/**
 * @summary Encodes a(n) MRMapping into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MRMapping, encoded as an ASN.1 Element.
 */
export function _encode_MRMapping(
    value: MRMapping,
    elGetter: $.ASN1Encoder<MRMapping>
) {
    if (!_cached_encoder_for_MRMapping) {
        _cached_encoder_for_MRMapping = function (
            value: MRMapping,
            elGetter: $.ASN1Encoder<MRMapping>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.mapping === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () =>
                                          $._encodeSequenceOf<Mapping>(
                                              () => _encode_Mapping,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.mapping, $.BER),
                            /* IF_ABSENT  */ value.substitution === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSequenceOf<MRSubstitution>(
                                              () => _encode_MRSubstitution,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.substitution, $.BER),
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
    return _cached_encoder_for_MRMapping(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MRMapping */

/* eslint-enable */
