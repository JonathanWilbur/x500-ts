/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta";
export {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta";

/* START_OF_SYMBOL_DEFINITION CertOK */
/**
 * @summary CertOK
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertOK ::= SEQUENCE {
 *   dhCert  Certificate,
 *   ... }
 * ```
 *
 * @class
 */
export class CertOK {
    constructor(
        /**
         * @summary `dhCert`.
         * @public
         * @readonly
         */
        readonly dhCert: Certificate,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertOK
     * @description
     *
     * This takes an `object` and converts it to a `CertOK`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertOK`.
     * @returns {CertOK}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertOK]: CertOK[_K] }>
    ): CertOK {
        return new CertOK(_o.dhCert, _o._unrecognizedExtensionsList);
    }
}
/* END_OF_SYMBOL_DEFINITION CertOK */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertOK */
/**
 * @summary The Leading Root Component Types of CertOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertOK: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "dhCert",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertOK */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertOK */
/**
 * @summary The Trailing Root Component Types of CertOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertOK: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertOK */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertOK */
/**
 * @summary The Extension Addition Component Types of CertOK
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertOK: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertOK */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertOK */
let _cached_decoder_for_CertOK: $.ASN1Decoder<CertOK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertOK */

/* START_OF_SYMBOL_DEFINITION _decode_CertOK */
/**
 * @summary Decodes an ASN.1 element into a(n) CertOK
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertOK} The decoded data structure.
 */
export function _decode_CertOK(el: _Element) {
    if (!_cached_decoder_for_CertOK) {
        _cached_decoder_for_CertOK = function (el: _Element): CertOK {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertOK contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "dhCert";
            let dhCert!: Certificate;
            dhCert = _decode_Certificate(sequence[0]);
            return new CertOK(dhCert, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertOK(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertOK */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertOK */
let _cached_encoder_for_CertOK: $.ASN1Encoder<CertOK> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertOK */

/* START_OF_SYMBOL_DEFINITION _encode_CertOK */
/**
 * @summary Encodes a(n) CertOK into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertOK, encoded as an ASN.1 Element.
 */
export function _encode_CertOK(value: CertOK, elGetter: $.ASN1Encoder<CertOK>) {
    if (!_cached_encoder_for_CertOK) {
        _cached_encoder_for_CertOK = function (
            value: CertOK,
            elGetter: $.ASN1Encoder<CertOK>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Certificate(
                                value.dhCert,
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
    return _cached_encoder_for_CertOK(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertOK */

/* eslint-enable */
