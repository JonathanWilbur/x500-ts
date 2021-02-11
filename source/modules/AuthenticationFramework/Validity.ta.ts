/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../AuthenticationFramework/Time.ta";
export {
    Time,
    _decode_Time,
    _encode_Time,
} from "../AuthenticationFramework/Time.ta";

/* START_OF_SYMBOL_DEFINITION Validity */
/**
 * @summary Validity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Validity ::= SEQUENCE {
 *   notBefore  Time,
 *   notAfter   Time,
 *   ... }
 * ```
 *
 * @class
 */
export class Validity {
    constructor(
        /**
         * @summary `notBefore`.
         * @public
         * @readonly
         */
        readonly notBefore: Time,
        /**
         * @summary `notAfter`.
         * @public
         * @readonly
         */
        readonly notAfter: Time,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Validity
     * @description
     *
     * This takes an `object` and converts it to a `Validity`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Validity`.
     * @returns {Validity}
     */
    public static _from_object(
        _o: { [_K in keyof Validity]: Validity[_K] }
    ): Validity {
        return new Validity(
            _o.notBefore,
            _o.notAfter,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION Validity */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Validity */
/**
 * @summary The Leading Root Component Types of Validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Validity: $.ComponentSpec[] = [
    new $.ComponentSpec("notBefore", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("notAfter", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Validity */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Validity */
/**
 * @summary The Trailing Root Component Types of Validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Validity: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Validity */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Validity */
/**
 * @summary The Extension Addition Component Types of Validity
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Validity: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Validity */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Validity */
let _cached_decoder_for_Validity: $.ASN1Decoder<Validity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Validity */

/* START_OF_SYMBOL_DEFINITION _decode_Validity */
/**
 * @summary Decodes an ASN.1 element into a(n) Validity
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Validity} The decoded data structure.
 */
export function _decode_Validity(el: _Element) {
    if (!_cached_decoder_for_Validity) {
        _cached_decoder_for_Validity = function (el: _Element): Validity {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "Validity contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "notBefore";
            sequence[1].name = "notAfter";
            let notBefore!: Time;
            let notAfter!: Time;
            notBefore = _decode_Time(sequence[0]);
            notAfter = _decode_Time(sequence[1]);
            return new Validity(notBefore, notAfter, sequence.slice(2));
        };
    }
    return _cached_decoder_for_Validity(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Validity */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Validity */
let _cached_encoder_for_Validity: $.ASN1Encoder<Validity> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Validity */

/* START_OF_SYMBOL_DEFINITION _encode_Validity */
/**
 * @summary Encodes a(n) Validity into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Validity, encoded as an ASN.1 Element.
 */
export function _encode_Validity(
    value: Validity,
    elGetter: $.ASN1Encoder<Validity>
) {
    if (!_cached_encoder_for_Validity) {
        _cached_encoder_for_Validity = function (
            value: Validity,
            elGetter: $.ASN1Encoder<Validity>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Time(
                                value.notBefore,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_Time(
                                value.notAfter,
                                $.DER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_Validity(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Validity */

/* eslint-enable */
