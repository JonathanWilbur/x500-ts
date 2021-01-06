/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    FamilyEntry,
    _decode_FamilyEntry,
    _encode_FamilyEntry,
} from "../DirectoryAbstractService/FamilyEntry.ta";
export {
    FamilyEntry,
    _decode_FamilyEntry,
    _encode_FamilyEntry,
} from "../DirectoryAbstractService/FamilyEntry.ta";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION FamilyEntries */
/**
 * @summary FamilyEntries
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FamilyEntries ::= SEQUENCE {
 *   family-class   OBJECT-CLASS.&id, -- structural object class value
 *   familyEntries  SEQUENCE OF FamilyEntry,
 *   ... }
 * ```
 *
 * @class
 */
export class FamilyEntries {
    constructor(
        /**
         * @summary `family_class`.
         * @public
         * @readonly
         */
        readonly family_class: OBJECT_IDENTIFIER,
        /**
         * @summary `familyEntries`.
         * @public
         * @readonly
         */
        readonly familyEntries: FamilyEntry[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a FamilyEntries
     * @description
     *
     * This takes an `object` and converts it to a `FamilyEntries`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FamilyEntries`.
     * @returns {FamilyEntries}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof FamilyEntries]: FamilyEntries[_K] }>
    ): FamilyEntries {
        return new FamilyEntries(
            _o.family_class,
            _o.familyEntries,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION FamilyEntries */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FamilyEntries */
/**
 * @summary The Leading Root Component Types of FamilyEntries
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_FamilyEntries: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "family-class",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "familyEntries",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_FamilyEntries */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FamilyEntries */
/**
 * @summary The Trailing Root Component Types of FamilyEntries
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_FamilyEntries: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_FamilyEntries */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FamilyEntries */
/**
 * @summary The Extension Addition Component Types of FamilyEntries
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_FamilyEntries: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_FamilyEntries */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FamilyEntries */
let _cached_decoder_for_FamilyEntries: $.ASN1Decoder<FamilyEntries> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FamilyEntries */

/* START_OF_SYMBOL_DEFINITION _decode_FamilyEntries */
/**
 * @summary Decodes an ASN.1 element into a(n) FamilyEntries
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FamilyEntries} The decoded data structure.
 */
export function _decode_FamilyEntries(el: _Element) {
    if (!_cached_decoder_for_FamilyEntries) {
        _cached_decoder_for_FamilyEntries = function (
            el: _Element
        ): FamilyEntries {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "FamilyEntries contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "family-class";
            sequence[1].name = "familyEntries";
            let family_class!: OBJECT_IDENTIFIER;
            let familyEntries!: FamilyEntry[];
            family_class = $._decodeObjectIdentifier(sequence[0]);
            familyEntries = $._decodeSequenceOf<FamilyEntry>(
                () => _decode_FamilyEntry
            )(sequence[1]);
            return new FamilyEntries(
                family_class,
                familyEntries,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_FamilyEntries(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FamilyEntries */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FamilyEntries */
let _cached_encoder_for_FamilyEntries: $.ASN1Encoder<FamilyEntries> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FamilyEntries */

/* START_OF_SYMBOL_DEFINITION _encode_FamilyEntries */
/**
 * @summary Encodes a(n) FamilyEntries into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FamilyEntries, encoded as an ASN.1 Element.
 */
export function _encode_FamilyEntries(
    value: FamilyEntries,
    elGetter: $.ASN1Encoder<FamilyEntries>
) {
    if (!_cached_encoder_for_FamilyEntries) {
        _cached_encoder_for_FamilyEntries = function (
            value: FamilyEntries,
            elGetter: $.ASN1Encoder<FamilyEntries>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.family_class,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<FamilyEntry>(
                                () => _encode_FamilyEntry,
                                $.BER
                            )(value.familyEntries, $.BER),
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
    return _cached_encoder_for_FamilyEntries(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FamilyEntries */

/* eslint-enable */
