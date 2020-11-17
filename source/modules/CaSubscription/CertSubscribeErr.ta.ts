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

/* START_OF_SYMBOL_DEFINITION CertSubscribeErr */
/**
 * @summary CertSubscribeErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeErr ::= SEQUENCE {
 *   code       CASP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class CertSubscribeErr {
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
     * @summary Restructures an object into a CertSubscribeErr
     * @description
     *
     * This takes an `object` and converts it to a `CertSubscribeErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertSubscribeErr`.
     * @returns {CertSubscribeErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CertSubscribeErr]: CertSubscribeErr[_K] }>
    ): CertSubscribeErr {
        return new CertSubscribeErr(_o.code, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `code`
     * @public
     * @static
     */

    public static _enum_for_code = _enum_for_CASP_error;
}
/* END_OF_SYMBOL_DEFINITION CertSubscribeErr */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertSubscribeErr */
/**
 * @summary The Leading Root Component Types of CertSubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertSubscribeErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "code",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertSubscribeErr */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertSubscribeErr */
/**
 * @summary The Trailing Root Component Types of CertSubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertSubscribeErr: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertSubscribeErr */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertSubscribeErr */
/**
 * @summary The Extension Addition Component Types of CertSubscribeErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertSubscribeErr: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertSubscribeErr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertSubscribeErr */
let _cached_decoder_for_CertSubscribeErr: $.ASN1Decoder<
    CertSubscribeErr
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertSubscribeErr */

/* START_OF_SYMBOL_DEFINITION _decode_CertSubscribeErr */
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeErr} The decoded data structure.
 */
export function _decode_CertSubscribeErr(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeErr) {
        _cached_decoder_for_CertSubscribeErr = function (
            el: _Element
        ): CertSubscribeErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "CertSubscribeErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "code";
            let code!: CASP_error;
            code = _decode_CASP_error(sequence[0]);
            return new CertSubscribeErr(code, sequence.slice(1));
        };
    }
    return _cached_decoder_for_CertSubscribeErr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertSubscribeErr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertSubscribeErr */
let _cached_encoder_for_CertSubscribeErr: $.ASN1Encoder<
    CertSubscribeErr
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertSubscribeErr */

/* START_OF_SYMBOL_DEFINITION _encode_CertSubscribeErr */
/**
 * @summary Encodes a(n) CertSubscribeErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeErr, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeErr(
    value: CertSubscribeErr,
    elGetter: $.ASN1Encoder<CertSubscribeErr>
) {
    if (!_cached_encoder_for_CertSubscribeErr) {
        _cached_encoder_for_CertSubscribeErr = function (
            value: CertSubscribeErr,
            elGetter: $.ASN1Encoder<CertSubscribeErr>
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
    return _cached_encoder_for_CertSubscribeErr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertSubscribeErr */

/* eslint-enable */
