/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertReplaceErr_code,
    _decode_CertReplaceErr_code,
    _encode_CertReplaceErr_code,
} from "../PkiPMIProtocolSpecifications/CertReplaceErr-code.ta";
export {
    CertReplaceErr_code,
    _decode_CertReplaceErr_code,
    _encode_CertReplaceErr_code,
} from "../PkiPMIProtocolSpecifications/CertReplaceErr-code.ta";

/* START_OF_SYMBOL_DEFINITION CertReplaceErr */
/**
 * @summary CertReplaceErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceErr ::= SEQUENCE {
 *   code        CHOICE {
 *     signedData     [0]  SignedData-error,
 *     envelopedData  [1]  EnvelopedData-error,
 *     casp           [2]  CASP-error,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertReplaceErr {
    constructor(
        /**
         * @summary `code`.
         * @public
         * @readonly
         */
        readonly code: CertReplaceErr_code,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertReplaceErr
     * @description
     *
     * This takes an `object` and converts it to a `CertReplaceErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertReplaceErr`.
     * @returns {CertReplaceErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertReplaceErr]: CertReplaceErr[_K] }>
    ): CertReplaceErr {
        return new CertReplaceErr(_o.code, _o._unrecognizedExtensionsList);
    }
}
/* END_OF_SYMBOL_DEFINITION CertReplaceErr */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertReplaceErr */
/**
 * @summary The Leading Root Component Types of CertReplaceErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertReplaceErr: $.ComponentSpec[] = [
    new $.ComponentSpec("code", false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertReplaceErr */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertReplaceErr */
/**
 * @summary The Trailing Root Component Types of CertReplaceErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertReplaceErr: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertReplaceErr */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertReplaceErr */
/**
 * @summary The Extension Addition Component Types of CertReplaceErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertReplaceErr: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertReplaceErr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReplaceErr */
let _cached_decoder_for_CertReplaceErr: $.ASN1Decoder<CertReplaceErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReplaceErr */

/* START_OF_SYMBOL_DEFINITION _decode_CertReplaceErr */
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceErr} The decoded data structure.
 */
export function _decode_CertReplaceErr(el: _Element) {
    if (!_cached_decoder_for_CertReplaceErr) {
        _cached_decoder_for_CertReplaceErr = function (
            el: _Element
        ): CertReplaceErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertReplaceErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "code";
            let code!: CertReplaceErr_code;
            code = _decode_CertReplaceErr_code(sequence[0]);
            return new CertReplaceErr(code, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertReplaceErr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertReplaceErr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReplaceErr */
let _cached_encoder_for_CertReplaceErr: $.ASN1Encoder<CertReplaceErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReplaceErr */

/* START_OF_SYMBOL_DEFINITION _encode_CertReplaceErr */
/**
 * @summary Encodes a(n) CertReplaceErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceErr, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceErr(
    value: CertReplaceErr,
    elGetter: $.ASN1Encoder<CertReplaceErr>
) {
    if (!_cached_encoder_for_CertReplaceErr) {
        _cached_encoder_for_CertReplaceErr = function (
            value: CertReplaceErr,
            elGetter: $.ASN1Encoder<CertReplaceErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertReplaceErr_code(
                                value.code,
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
    return _cached_encoder_for_CertReplaceErr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertReplaceErr */

/* eslint-enable */
