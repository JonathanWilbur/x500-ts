/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CertificateGroupNumberRange */
/**
 * @summary CertificateGroupNumberRange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateGroupNumberRange ::= SEQUENCE {
 *   startingNumber  [0]  INTEGER,
 *   endingNumber    [1]  INTEGER,
 *   ... }
 * ```
 *
 * @class
 */
export class CertificateGroupNumberRange {
    constructor(
        /**
         * @summary `startingNumber`.
         * @public
         * @readonly
         */
        readonly startingNumber: INTEGER,
        /**
         * @summary `endingNumber`.
         * @public
         * @readonly
         */
        readonly endingNumber: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificateGroupNumberRange
     * @description
     *
     * This takes an `object` and converts it to a `CertificateGroupNumberRange`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateGroupNumberRange`.
     * @returns {CertificateGroupNumberRange}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertificateGroupNumberRange]: CertificateGroupNumberRange[_K];
            }
        >
    ): CertificateGroupNumberRange {
        return new CertificateGroupNumberRange(
            _o.startingNumber,
            _o.endingNumber,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CertificateGroupNumberRange */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificateGroupNumberRange */
/**
 * @summary The Leading Root Component Types of CertificateGroupNumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateGroupNumberRange: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "startingNumber",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "endingNumber",
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificateGroupNumberRange */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificateGroupNumberRange */
/**
 * @summary The Trailing Root Component Types of CertificateGroupNumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateGroupNumberRange: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificateGroupNumberRange */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificateGroupNumberRange */
/**
 * @summary The Extension Addition Component Types of CertificateGroupNumberRange
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateGroupNumberRange: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificateGroupNumberRange */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateGroupNumberRange */
let _cached_decoder_for_CertificateGroupNumberRange: $.ASN1Decoder<CertificateGroupNumberRange> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateGroupNumberRange */

/* START_OF_SYMBOL_DEFINITION _decode_CertificateGroupNumberRange */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateGroupNumberRange
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateGroupNumberRange} The decoded data structure.
 */
export function _decode_CertificateGroupNumberRange(el: _Element) {
    if (!_cached_decoder_for_CertificateGroupNumberRange) {
        _cached_decoder_for_CertificateGroupNumberRange = function (
            el: _Element
        ): CertificateGroupNumberRange {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertificateGroupNumberRange contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "startingNumber";
            sequence[1].name = "endingNumber";
            let startingNumber!: INTEGER;
            let endingNumber!: INTEGER;
            startingNumber = $._decode_implicit<INTEGER>(
                () => $._decodeInteger
            )(sequence[0]);
            endingNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
                sequence[1]
            );
            return new CertificateGroupNumberRange(
                startingNumber,
                endingNumber,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertificateGroupNumberRange(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificateGroupNumberRange */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateGroupNumberRange */
let _cached_encoder_for_CertificateGroupNumberRange: $.ASN1Encoder<CertificateGroupNumberRange> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateGroupNumberRange */

/* START_OF_SYMBOL_DEFINITION _encode_CertificateGroupNumberRange */
/**
 * @summary Encodes a(n) CertificateGroupNumberRange into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateGroupNumberRange, encoded as an ASN.1 Element.
 */
export function _encode_CertificateGroupNumberRange(
    value: CertificateGroupNumberRange,
    elGetter: $.ASN1Encoder<CertificateGroupNumberRange>
) {
    if (!_cached_encoder_for_CertificateGroupNumberRange) {
        _cached_encoder_for_CertificateGroupNumberRange = function (
            value: CertificateGroupNumberRange,
            elGetter: $.ASN1Encoder<CertificateGroupNumberRange>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => $._encodeInteger,
                                $.BER
                            )(value.startingNumber, $.BER),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                1,
                                () => $._encodeInteger,
                                $.BER
                            )(value.endingNumber, $.BER),
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
    return _cached_encoder_for_CertificateGroupNumberRange(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificateGroupNumberRange */

/* eslint-enable */
