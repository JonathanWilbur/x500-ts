/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CASP_error,
    _decode_CASP_error,
    _encode_CASP_error,
    _enum_for_CASP_error,
} from "../PkiPMIProtocolSpecifications/CASP-error.ta";
export {
    CASP_error,
    CASP_error_invalidContentComponent /* IMPORTED_ENUMERATION_ITEM */,
    CASP_error_missingContent /* IMPORTED_ENUMERATION_ITEM */,
    CASP_error_missingContentComponent /* IMPORTED_ENUMERATION_ITEM */,
    CASP_error_noReason /* IMPORTED_ENUMERATION_ITEM */,
    CASP_error_sequenceError /* IMPORTED_ENUMERATION_ITEM */,
    CASP_error_unknownCert /* IMPORTED_ENUMERATION_ITEM */,
    CASP_error_unknownContentType /* IMPORTED_ENUMERATION_ITEM */,
    CASP_error_unknownSubject /* IMPORTED_ENUMERATION_ITEM */,
    CASP_error_unsupportedWLMPversion /* IMPORTED_ENUMERATION_ITEM */,
    _decode_CASP_error,
    _encode_CASP_error,
    _enum_for_CASP_error,
} from "../PkiPMIProtocolSpecifications/CASP-error.ta";

/* START_OF_SYMBOL_DEFINITION CertUnsubscribeErr */
/**
 * @summary CertUnsubscribeErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeErr ::= SEQUENCE {
 *   code         CASP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class CertUnsubscribeErr {
    constructor(
        /**
         * @summary `code`.
         * @public
         * @readonly
         */
        readonly code: CASP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUnsubscribeErr
     * @description
     *
     * This takes an `object` and converts it to a `CertUnsubscribeErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUnsubscribeErr`.
     * @returns {CertUnsubscribeErr}
     */
    public static _from_object(
        _o: Partial<
            { [_K in keyof CertUnsubscribeErr]: CertUnsubscribeErr[_K] }
        >
    ): CertUnsubscribeErr {
        return new CertUnsubscribeErr(_o.code, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `code`
     * @public
     * @static
     */

    public static _enum_for_code = _enum_for_CASP_error;
}
/* END_OF_SYMBOL_DEFINITION CertUnsubscribeErr */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertUnsubscribeErr */
/**
 * @summary The Leading Root Component Types of CertUnsubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUnsubscribeErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "code",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertUnsubscribeErr */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertUnsubscribeErr */
/**
 * @summary The Trailing Root Component Types of CertUnsubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUnsubscribeErr: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertUnsubscribeErr */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertUnsubscribeErr */
/**
 * @summary The Extension Addition Component Types of CertUnsubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUnsubscribeErr: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertUnsubscribeErr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertUnsubscribeErr */
let _cached_decoder_for_CertUnsubscribeErr: $.ASN1Decoder<
    CertUnsubscribeErr
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertUnsubscribeErr */

/* START_OF_SYMBOL_DEFINITION _decode_CertUnsubscribeErr */
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeErr} The decoded data structure.
 */
export function _decode_CertUnsubscribeErr(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeErr) {
        _cached_decoder_for_CertUnsubscribeErr = function (
            el: _Element
        ): CertUnsubscribeErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertUnsubscribeErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "code";
            let code!: CASP_error;
            code = _decode_CASP_error(sequence[0]);
            return new CertUnsubscribeErr(code, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertUnsubscribeErr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertUnsubscribeErr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertUnsubscribeErr */
let _cached_encoder_for_CertUnsubscribeErr: $.ASN1Encoder<
    CertUnsubscribeErr
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertUnsubscribeErr */

/* START_OF_SYMBOL_DEFINITION _encode_CertUnsubscribeErr */
/**
 * @summary Encodes a(n) CertUnsubscribeErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeErr, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeErr(
    value: CertUnsubscribeErr,
    elGetter: $.ASN1Encoder<CertUnsubscribeErr>
) {
    if (!_cached_encoder_for_CertUnsubscribeErr) {
        _cached_encoder_for_CertUnsubscribeErr = function (
            value: CertUnsubscribeErr,
            elGetter: $.ASN1Encoder<CertUnsubscribeErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CASP_error(
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
    return _cached_encoder_for_CertUnsubscribeErr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertUnsubscribeErr */

/* eslint-enable */
