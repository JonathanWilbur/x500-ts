/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertificateExactAssertion,
    _decode_CertificateExactAssertion,
    _encode_CertificateExactAssertion,
} from "../CertificateExtensions/CertificateExactAssertion.ta";
export {
    CertificateExactAssertion,
    _decode_CertificateExactAssertion,
    _encode_CertificateExactAssertion,
} from "../CertificateExtensions/CertificateExactAssertion.ta";

/* START_OF_SYMBOL_DEFINITION CertificatePairExactAssertion */
/**
 * @summary CertificatePairExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificatePairExactAssertion ::= SEQUENCE {
 *   issuedToThisCAAssertion  [0]  CertificateExactAssertion OPTIONAL,
 *   issuedByThisCAAssertion  [1]  CertificateExactAssertion OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS { ..., issuedToThisCAAssertion  PRESENT } |
 *    WITH COMPONENTS { ..., issuedByThisCAAssertion  PRESENT } )
 * ```
 *
 * @class
 */
export class CertificatePairExactAssertion {
    constructor(
        /**
         * @summary `issuedToThisCAAssertion`.
         * @public
         * @readonly
         */
        readonly issuedToThisCAAssertion: OPTIONAL<CertificateExactAssertion>,
        /**
         * @summary `issuedByThisCAAssertion`.
         * @public
         * @readonly
         */
        readonly issuedByThisCAAssertion: OPTIONAL<CertificateExactAssertion>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificatePairExactAssertion
     * @description
     *
     * This takes an `object` and converts it to a `CertificatePairExactAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificatePairExactAssertion`.
     * @returns {CertificatePairExactAssertion}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertificatePairExactAssertion]: CertificatePairExactAssertion[_K];
            }
        >
    ): CertificatePairExactAssertion {
        return new CertificatePairExactAssertion(
            _o.issuedToThisCAAssertion,
            _o.issuedByThisCAAssertion,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CertificatePairExactAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificatePairExactAssertion */
/**
 * @summary The Leading Root Component Types of CertificatePairExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificatePairExactAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "issuedToThisCAAssertion",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "issuedByThisCAAssertion",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificatePairExactAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificatePairExactAssertion */
/**
 * @summary The Trailing Root Component Types of CertificatePairExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificatePairExactAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificatePairExactAssertion */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificatePairExactAssertion */
/**
 * @summary The Extension Addition Component Types of CertificatePairExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificatePairExactAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificatePairExactAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificatePairExactAssertion */
let _cached_decoder_for_CertificatePairExactAssertion: $.ASN1Decoder<
    CertificatePairExactAssertion
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificatePairExactAssertion */

/* START_OF_SYMBOL_DEFINITION _decode_CertificatePairExactAssertion */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificatePairExactAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificatePairExactAssertion} The decoded data structure.
 */
export function _decode_CertificatePairExactAssertion(el: _Element) {
    if (!_cached_decoder_for_CertificatePairExactAssertion) {
        _cached_decoder_for_CertificatePairExactAssertion = function (
            el: _Element
        ): CertificatePairExactAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let issuedToThisCAAssertion: OPTIONAL<CertificateExactAssertion>;
            let issuedByThisCAAssertion: OPTIONAL<CertificateExactAssertion>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                issuedToThisCAAssertion: (_el: _Element): void => {
                    issuedToThisCAAssertion = $._decode_implicit<
                        CertificateExactAssertion
                    >(() => _decode_CertificateExactAssertion)(_el);
                },
                issuedByThisCAAssertion: (_el: _Element): void => {
                    issuedByThisCAAssertion = $._decode_implicit<
                        CertificateExactAssertion
                    >(() => _decode_CertificateExactAssertion)(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificatePairExactAssertion,
                _extension_additions_list_spec_for_CertificatePairExactAssertion,
                _root_component_type_list_2_spec_for_CertificatePairExactAssertion,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificatePairExactAssertion /* SEQUENCE_CONSTRUCTOR_CALL */(
                issuedToThisCAAssertion,
                issuedByThisCAAssertion,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificatePairExactAssertion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificatePairExactAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificatePairExactAssertion */
let _cached_encoder_for_CertificatePairExactAssertion: $.ASN1Encoder<
    CertificatePairExactAssertion
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificatePairExactAssertion */

/* START_OF_SYMBOL_DEFINITION _encode_CertificatePairExactAssertion */
/**
 * @summary Encodes a(n) CertificatePairExactAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificatePairExactAssertion, encoded as an ASN.1 Element.
 */
export function _encode_CertificatePairExactAssertion(
    value: CertificatePairExactAssertion,
    elGetter: $.ASN1Encoder<CertificatePairExactAssertion>
) {
    if (!_cached_encoder_for_CertificatePairExactAssertion) {
        _cached_encoder_for_CertificatePairExactAssertion = function (
            value: CertificatePairExactAssertion,
            elGetter: $.ASN1Encoder<CertificatePairExactAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.issuedToThisCAAssertion ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_CertificateExactAssertion,
                                      $.BER
                                  )(value.issuedToThisCAAssertion, $.BER),
                            /* IF_ABSENT  */ value.issuedByThisCAAssertion ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_CertificateExactAssertion,
                                      $.BER
                                  )(value.issuedByThisCAAssertion, $.BER),
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
    return _cached_encoder_for_CertificatePairExactAssertion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificatePairExactAssertion */

/* eslint-enable */
