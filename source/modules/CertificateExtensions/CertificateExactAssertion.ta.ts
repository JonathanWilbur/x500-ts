/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";
export {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta";
export {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta";

/* START_OF_SYMBOL_DEFINITION CertificateExactAssertion */
/**
 * @summary CertificateExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateExactAssertion ::= SEQUENCE {
 *   serialNumber  CertificateSerialNumber,
 *   issuer        Name,
 *   ... }
 * ```
 *
 * @class
 */
export class CertificateExactAssertion {
    constructor(
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificateExactAssertion
     * @description
     *
     * This takes an `object` and converts it to a `CertificateExactAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateExactAssertion`.
     * @returns {CertificateExactAssertion}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertificateExactAssertion]: CertificateExactAssertion[_K];
            }
        >
    ): CertificateExactAssertion {
        return new CertificateExactAssertion(
            _o.serialNumber,
            _o.issuer,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CertificateExactAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificateExactAssertion */
/**
 * @summary The Leading Root Component Types of CertificateExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateExactAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec("issuer", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertificateExactAssertion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificateExactAssertion */
/**
 * @summary The Trailing Root Component Types of CertificateExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateExactAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertificateExactAssertion */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificateExactAssertion */
/**
 * @summary The Extension Addition Component Types of CertificateExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateExactAssertion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertificateExactAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateExactAssertion */
let _cached_decoder_for_CertificateExactAssertion: $.ASN1Decoder<CertificateExactAssertion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertificateExactAssertion */

/* START_OF_SYMBOL_DEFINITION _decode_CertificateExactAssertion */
/**
 * @summary Decodes an ASN.1 element into a(n) CertificateExactAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateExactAssertion} The decoded data structure.
 */
export function _decode_CertificateExactAssertion(el: _Element) {
    if (!_cached_decoder_for_CertificateExactAssertion) {
        _cached_decoder_for_CertificateExactAssertion = function (
            el: _Element
        ): CertificateExactAssertion {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertificateExactAssertion contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "serialNumber";
            sequence[1].name = "issuer";
            let serialNumber!: CertificateSerialNumber;
            let issuer!: Name;
            serialNumber = _decode_CertificateSerialNumber(sequence[0]);
            issuer = _decode_Name(sequence[1]);
            return new CertificateExactAssertion(
                serialNumber,
                issuer,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertificateExactAssertion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertificateExactAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateExactAssertion */
let _cached_encoder_for_CertificateExactAssertion: $.ASN1Encoder<CertificateExactAssertion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertificateExactAssertion */

/* START_OF_SYMBOL_DEFINITION _encode_CertificateExactAssertion */
/**
 * @summary Encodes a(n) CertificateExactAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateExactAssertion, encoded as an ASN.1 Element.
 */
export function _encode_CertificateExactAssertion(
    value: CertificateExactAssertion,
    elGetter: $.ASN1Encoder<CertificateExactAssertion>
) {
    if (!_cached_encoder_for_CertificateExactAssertion) {
        _cached_encoder_for_CertificateExactAssertion = function (
            value: CertificateExactAssertion,
            elGetter: $.ASN1Encoder<CertificateExactAssertion>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_Name(value.issuer, $.BER),
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
    return _cached_encoder_for_CertificateExactAssertion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertificateExactAssertion */

/* eslint-enable */
