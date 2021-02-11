/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AVMP_error,
    _decode_AVMP_error,
    _encode_AVMP_error,
    _enum_for_AVMP_error,
} from "../AVL-management/AVMP-error.ta";
import {
    Notifications,
    _decode_Notifications,
    _encode_Notifications,
} from "../AVL-management/Notifications.ta";
export {
    AVMP_error,
    AVMP_error_constrainedRequired /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_duplicateAVL /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_invalidAvlVersion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_maxAVLsExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_missingAvlComponent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_nonConstrainedRequired /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_noReason /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_notAllowedForConstrainedAVLEntity /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_protocolError /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unknownAVL /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unsupportedCriticalEntryExtenssion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unsupportedCriticalExtenssion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    constrainedRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    duplicateAVL /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalidAvlVersion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    maxAVLsExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    missingAvlComponent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    nonConstrainedRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    noReason /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    notAllowedForConstrainedAVLEntity /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    protocolError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unknownAVL /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unsupportedCriticalEntryExtenssion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unsupportedCriticalExtenssion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AVMP_error,
    _encode_AVMP_error,
    _enum_for_AVMP_error,
} from "../AVL-management/AVMP-error.ta";
export {
    Notifications,
    _decode_Notifications,
    _encode_Notifications,
} from "../AVL-management/Notifications.ta";

/* START_OF_SYMBOL_DEFINITION CertErr */
/**
 * @summary CertErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertErr ::= SEQUENCE {
 *   notOK  AVMP-error,
 *   note   Notifications OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class CertErr {
    constructor(
        /**
         * @summary `notOK`.
         * @public
         * @readonly
         */
        readonly notOK: AVMP_error,
        /**
         * @summary `note`.
         * @public
         * @readonly
         */
        readonly note: OPTIONAL<Notifications>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertErr
     * @description
     *
     * This takes an `object` and converts it to a `CertErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertErr`.
     * @returns {CertErr}
     */
    public static _from_object(
        _o: { [_K in keyof CertErr]: CertErr[_K] }
    ): CertErr {
        return new CertErr(_o.notOK, _o.note, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `notOK`
     * @public
     * @static
     */

    public static _enum_for_notOK = _enum_for_AVMP_error;
}
/* END_OF_SYMBOL_DEFINITION CertErr */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertErr */
/**
 * @summary The Leading Root Component Types of CertErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notOK",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "note",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CertErr */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertErr */
/**
 * @summary The Trailing Root Component Types of CertErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertErr: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CertErr */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertErr */
/**
 * @summary The Extension Addition Component Types of CertErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertErr: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CertErr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertErr */
let _cached_decoder_for_CertErr: $.ASN1Decoder<CertErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertErr */

/* START_OF_SYMBOL_DEFINITION _decode_CertErr */
/**
 * @summary Decodes an ASN.1 element into a(n) CertErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertErr} The decoded data structure.
 */
export function _decode_CertErr(el: _Element) {
    if (!_cached_decoder_for_CertErr) {
        _cached_decoder_for_CertErr = function (el: _Element): CertErr {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let notOK!: AVMP_error;
            let note: OPTIONAL<Notifications>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                notOK: (_el: _Element): void => {
                    notOK = _decode_AVMP_error(_el);
                },
                note: (_el: _Element): void => {
                    note = _decode_Notifications(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertErr,
                _extension_additions_list_spec_for_CertErr,
                _root_component_type_list_2_spec_for_CertErr,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertErr(
                /* SEQUENCE_CONSTRUCTOR_CALL */ notOK,
                note,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertErr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertErr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertErr */
let _cached_encoder_for_CertErr: $.ASN1Encoder<CertErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertErr */

/* START_OF_SYMBOL_DEFINITION _encode_CertErr */
/**
 * @summary Encodes a(n) CertErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertErr, encoded as an ASN.1 Element.
 */
export function _encode_CertErr(
    value: CertErr,
    elGetter: $.ASN1Encoder<CertErr>
) {
    if (!_cached_encoder_for_CertErr) {
        _cached_encoder_for_CertErr = function (
            value: CertErr,
            elGetter: $.ASN1Encoder<CertErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.notOK,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.note === undefined
                                ? undefined
                                : _encode_Notifications(value.note, $.BER),
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
    return _cached_encoder_for_CertErr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertErr */

/* eslint-enable */
