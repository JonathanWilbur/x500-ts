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
} from "../CaSubscription/CASP-error.ta";
export {
    CASP_error,
    CASP_error_invalidContentComponent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASP_error_missingContent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASP_error_missingContentComponent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASP_error_noReason /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASP_error_sequenceError /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASP_error_unknownCert /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASP_error_unknownContentType /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASP_error_unknownSubject /* IMPORTED_LONG_ENUMERATION_ITEM */,
    CASP_error_unsupportedWLMPversion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    invalidContentComponent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    missingContent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    missingContentComponent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    noReason /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    sequenceError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unknownCert /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unknownContentType /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unknownSubject /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unsupportedWLMPversion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_CASP_error,
    _encode_CASP_error,
    _enum_for_CASP_error,
} from "../CaSubscription/CASP-error.ta";

/* START_OF_SYMBOL_DEFINITION CertReplaceErr */
/**
 * @summary CertReplaceErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceErr ::= SEQUENCE {
 *   code          CASP-error,
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
        readonly code: CASP_error,
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
        _o: { [_K in keyof CertReplaceErr]: CertReplaceErr[_K] }
    ): CertReplaceErr {
        return new CertReplaceErr(_o.code, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `code`
     * @public
     * @static
     */

    public static _enum_for_code = _enum_for_CASP_error;
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
    new $.ComponentSpec(
        "code",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
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
            let code!: CASP_error;
            code = _decode_CASP_error(sequence[0]);
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
    return _cached_encoder_for_CertReplaceErr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertReplaceErr */

/* eslint-enable */
