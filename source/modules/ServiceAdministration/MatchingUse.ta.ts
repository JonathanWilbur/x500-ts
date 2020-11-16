/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { MATCHING_RESTRICTION } from "../ServiceAdministration/MATCHING-RESTRICTION.oca";
export { SupportedMatchingRestrictions } from "../ServiceAdministration/SupportedMatchingRestrictions.osa";

/* START_OF_SYMBOL_DEFINITION MatchingUse */
/**
 * @summary MatchingUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MatchingUse ::= SEQUENCE {
 *   restrictionType    MATCHING-RESTRICTION.&id({SupportedMatchingRestrictions}),
 *   restrictionValue   MATCHING-RESTRICTION.&Restriction
 *                         ({SupportedMatchingRestrictions}{@restrictionType}),
 *   ... }
 * ```
 *
 * @class
 */
export class MatchingUse {
    constructor(
        /**
         * @summary `restrictionType`.
         * @public
         * @readonly
         */
        readonly restrictionType: OBJECT_IDENTIFIER,
        /**
         * @summary `restrictionValue`.
         * @public
         * @readonly
         */
        readonly restrictionValue: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MatchingUse
     * @description
     *
     * This takes an `object` and converts it to a `MatchingUse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MatchingUse`.
     * @returns {MatchingUse}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof MatchingUse]: MatchingUse[_K] }>
    ): MatchingUse {
        return new MatchingUse(
            _o.restrictionType,
            _o.restrictionValue,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION MatchingUse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MatchingUse */
/**
 * @summary The Leading Root Component Types of MatchingUse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MatchingUse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "restrictionType",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "restrictionValue",
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MatchingUse */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MatchingUse */
/**
 * @summary The Trailing Root Component Types of MatchingUse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MatchingUse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MatchingUse */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MatchingUse */
/**
 * @summary The Extension Addition Component Types of MatchingUse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MatchingUse: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MatchingUse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MatchingUse */
let _cached_decoder_for_MatchingUse: $.ASN1Decoder<MatchingUse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MatchingUse */

/* START_OF_SYMBOL_DEFINITION _decode_MatchingUse */
/**
 * @summary Decodes an ASN.1 element into a(n) MatchingUse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MatchingUse} The decoded data structure.
 */
export function _decode_MatchingUse(el: _Element) {
    if (!_cached_decoder_for_MatchingUse) {
        _cached_decoder_for_MatchingUse = function (el: _Element): MatchingUse {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "MatchingUse contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "restrictionType";
            sequence[1].name = "restrictionValue";
            let restrictionType!: OBJECT_IDENTIFIER;
            let restrictionValue!: _Element;
            restrictionType = $._decodeObjectIdentifier(sequence[0]);
            restrictionValue = $._decodeAny(sequence[1]);
            return new MatchingUse(
                restrictionType,
                restrictionValue,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_MatchingUse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MatchingUse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MatchingUse */
let _cached_encoder_for_MatchingUse: $.ASN1Encoder<MatchingUse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MatchingUse */

/* START_OF_SYMBOL_DEFINITION _encode_MatchingUse */
/**
 * @summary Encodes a(n) MatchingUse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MatchingUse, encoded as an ASN.1 Element.
 */
export function _encode_MatchingUse(
    value: MatchingUse,
    elGetter: $.ASN1Encoder<MatchingUse>
) {
    if (!_cached_encoder_for_MatchingUse) {
        _cached_encoder_for_MatchingUse = function (
            value: MatchingUse,
            elGetter: $.ASN1Encoder<MatchingUse>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.restrictionType,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeAny(
                                value.restrictionValue,
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
    return _cached_encoder_for_MatchingUse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MatchingUse */

/* eslint-enable */
