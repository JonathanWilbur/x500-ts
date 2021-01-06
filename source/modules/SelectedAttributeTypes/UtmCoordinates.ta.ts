/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NumericString,
    PrintableString,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION UtmCoordinates */
/**
 * @summary UtmCoordinates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UtmCoordinates ::= SEQUENCE {
 *   zone      PrintableString,
 *   easting   NumericString,
 *   northing  NumericString }
 * ```
 *
 * @class
 */
export class UtmCoordinates {
    constructor(
        /**
         * @summary `zone`.
         * @public
         * @readonly
         */
        readonly zone: PrintableString,
        /**
         * @summary `easting`.
         * @public
         * @readonly
         */
        readonly easting: NumericString,
        /**
         * @summary `northing`.
         * @public
         * @readonly
         */
        readonly northing: NumericString
    ) {}

    /**
     * @summary Restructures an object into a UtmCoordinates
     * @description
     *
     * This takes an `object` and converts it to a `UtmCoordinates`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UtmCoordinates`.
     * @returns {UtmCoordinates}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof UtmCoordinates]: UtmCoordinates[_K] }>
    ): UtmCoordinates {
        return new UtmCoordinates(_o.zone, _o.easting, _o.northing);
    }
}
/* END_OF_SYMBOL_DEFINITION UtmCoordinates */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UtmCoordinates */
/**
 * @summary The Leading Root Component Types of UtmCoordinates
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UtmCoordinates: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "zone",
        false,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "easting",
        false,
        $.hasTag(_TagClass.universal, 18),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "northing",
        false,
        $.hasTag(_TagClass.universal, 18),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UtmCoordinates */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UtmCoordinates */
/**
 * @summary The Trailing Root Component Types of UtmCoordinates
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UtmCoordinates: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UtmCoordinates */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UtmCoordinates */
/**
 * @summary The Extension Addition Component Types of UtmCoordinates
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UtmCoordinates: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UtmCoordinates */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UtmCoordinates */
let _cached_decoder_for_UtmCoordinates: $.ASN1Decoder<UtmCoordinates> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UtmCoordinates */

/* START_OF_SYMBOL_DEFINITION _decode_UtmCoordinates */
/**
 * @summary Decodes an ASN.1 element into a(n) UtmCoordinates
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UtmCoordinates} The decoded data structure.
 */
export function _decode_UtmCoordinates(el: _Element) {
    if (!_cached_decoder_for_UtmCoordinates) {
        _cached_decoder_for_UtmCoordinates = function (
            el: _Element
        ): UtmCoordinates {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "UtmCoordinates contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "zone";
            sequence[1].name = "easting";
            sequence[2].name = "northing";
            let zone!: PrintableString;
            let easting!: NumericString;
            let northing!: NumericString;
            zone = $._decodePrintableString(sequence[0]);
            easting = $._decodeNumericString(sequence[1]);
            northing = $._decodeNumericString(sequence[2]);
            return new UtmCoordinates(zone, easting, northing);
        };
    }
    return _cached_decoder_for_UtmCoordinates(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UtmCoordinates */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UtmCoordinates */
let _cached_encoder_for_UtmCoordinates: $.ASN1Encoder<UtmCoordinates> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UtmCoordinates */

/* START_OF_SYMBOL_DEFINITION _encode_UtmCoordinates */
/**
 * @summary Encodes a(n) UtmCoordinates into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UtmCoordinates, encoded as an ASN.1 Element.
 */
export function _encode_UtmCoordinates(
    value: UtmCoordinates,
    elGetter: $.ASN1Encoder<UtmCoordinates>
) {
    if (!_cached_encoder_for_UtmCoordinates) {
        _cached_encoder_for_UtmCoordinates = function (
            value: UtmCoordinates,
            elGetter: $.ASN1Encoder<UtmCoordinates>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodePrintableString(
                            value.zone,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeNumericString(
                            value.easting,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeNumericString(
                            value.northing,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_UtmCoordinates(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UtmCoordinates */

/* eslint-enable */
