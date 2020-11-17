/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AVMP_error,
    _decode_AVMP_error,
    _encode_AVMP_error,
    _enum_for_AVMP_error,
} from "../AVL-management/AVMP-error.ta";
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

/* START_OF_SYMBOL_DEFINITION DelAvlErr */
/**
 * @summary DelAvlErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DelAvlErr ::= SEQUENCE {
 *   notOK  AVMP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class DelAvlErr {
    constructor(
        /**
         * @summary `notOK`.
         * @public
         * @readonly
         */
        readonly notOK: AVMP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DelAvlErr
     * @description
     *
     * This takes an `object` and converts it to a `DelAvlErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DelAvlErr`.
     * @returns {DelAvlErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof DelAvlErr]: DelAvlErr[_K] }>
    ): DelAvlErr {
        return new DelAvlErr(_o.notOK, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `notOK`
     * @public
     * @static
     */

    public static _enum_for_notOK = _enum_for_AVMP_error;
}
/* END_OF_SYMBOL_DEFINITION DelAvlErr */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DelAvlErr */
/**
 * @summary The Leading Root Component Types of DelAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DelAvlErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notOK",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DelAvlErr */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DelAvlErr */
/**
 * @summary The Trailing Root Component Types of DelAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DelAvlErr: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DelAvlErr */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DelAvlErr */
/**
 * @summary The Extension Addition Component Types of DelAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DelAvlErr: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DelAvlErr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DelAvlErr */
let _cached_decoder_for_DelAvlErr: $.ASN1Decoder<DelAvlErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DelAvlErr */

/* START_OF_SYMBOL_DEFINITION _decode_DelAvlErr */
/**
 * @summary Decodes an ASN.1 element into a(n) DelAvlErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DelAvlErr} The decoded data structure.
 */
export function _decode_DelAvlErr(el: _Element) {
    if (!_cached_decoder_for_DelAvlErr) {
        _cached_decoder_for_DelAvlErr = function (el: _Element): DelAvlErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "DelAvlErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "notOK";
            let notOK!: AVMP_error;
            notOK = _decode_AVMP_error(sequence[0]);
            return new DelAvlErr(notOK, sequence.slice(1));
        };
    }
    return _cached_decoder_for_DelAvlErr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DelAvlErr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DelAvlErr */
let _cached_encoder_for_DelAvlErr: $.ASN1Encoder<DelAvlErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DelAvlErr */

/* START_OF_SYMBOL_DEFINITION _encode_DelAvlErr */
/**
 * @summary Encodes a(n) DelAvlErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DelAvlErr, encoded as an ASN.1 Element.
 */
export function _encode_DelAvlErr(
    value: DelAvlErr,
    elGetter: $.ASN1Encoder<DelAvlErr>
) {
    if (!_cached_encoder_for_DelAvlErr) {
        _cached_encoder_for_DelAvlErr = function (
            value: DelAvlErr,
            elGetter: $.ASN1Encoder<DelAvlErr>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.notOK,
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
    return _cached_encoder_for_DelAvlErr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DelAvlErr */

/* eslint-enable */
