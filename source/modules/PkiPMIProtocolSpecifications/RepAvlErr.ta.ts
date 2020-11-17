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
} from "../PkiPMIProtocolSpecifications/AVMP-error.ta";
export {
    AVMP_error,
    AVMP_error_constrainedRequired /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_duplicateAVL /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_invalidAvlSignature /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_invalidAvlVersion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_invalidContentComponent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_maxAVLsExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_missingAvlComponent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_missingContent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_missingContentComponent /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_nonConstrainedRequired /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_noReason /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_notAllowedForConstrainedAVLEntity /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_protocolError /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_sequenceError /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unknownAVL /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unknownAvlEntity /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unknownCert /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unknownContentType /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unsupportedAVMPversion /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unsupportedCriticalEntryExtension /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unsupportedCriticalExtension /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AVMP_error_unsupportedScopeRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */,
    constrainedRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    duplicateAVL /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalidAvlSignature /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalidAvlVersion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalidContentComponent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    maxAVLsExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    missingAvlComponent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    missingContent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    missingContentComponent /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    nonConstrainedRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    noReason /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    notAllowedForConstrainedAVLEntity /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    protocolError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    sequenceError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unknownAVL /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unknownAvlEntity /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unknownCert /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unknownContentType /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unsupportedAVMPversion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unsupportedCriticalEntryExtension /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unsupportedCriticalExtension /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unsupportedScopeRestriction /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AVMP_error,
    _encode_AVMP_error,
    _enum_for_AVMP_error,
} from "../PkiPMIProtocolSpecifications/AVMP-error.ta";

/* START_OF_SYMBOL_DEFINITION RepAvlErr */
/**
 * @summary RepAvlErr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepAvlErr ::= SEQUENCE {
 *   notOK  AVMP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class RepAvlErr {
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
     * @summary Restructures an object into a RepAvlErr
     * @description
     *
     * This takes an `object` and converts it to a `RepAvlErr`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RepAvlErr`.
     * @returns {RepAvlErr}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof RepAvlErr]: RepAvlErr[_K] }>
    ): RepAvlErr {
        return new RepAvlErr(_o.notOK, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `notOK`
     * @public
     * @static
     */

    public static _enum_for_notOK = _enum_for_AVMP_error;
}
/* END_OF_SYMBOL_DEFINITION RepAvlErr */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RepAvlErr */
/**
 * @summary The Leading Root Component Types of RepAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RepAvlErr: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "notOK",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RepAvlErr */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RepAvlErr */
/**
 * @summary The Trailing Root Component Types of RepAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RepAvlErr: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RepAvlErr */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RepAvlErr */
/**
 * @summary The Extension Addition Component Types of RepAvlErr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RepAvlErr: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RepAvlErr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RepAvlErr */
let _cached_decoder_for_RepAvlErr: $.ASN1Decoder<RepAvlErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RepAvlErr */

/* START_OF_SYMBOL_DEFINITION _decode_RepAvlErr */
/**
 * @summary Decodes an ASN.1 element into a(n) RepAvlErr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RepAvlErr} The decoded data structure.
 */
export function _decode_RepAvlErr(el: _Element) {
    if (!_cached_decoder_for_RepAvlErr) {
        _cached_decoder_for_RepAvlErr = function (el: _Element): RepAvlErr {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 1) {
                throw new _ConstructionError(
                    "RepAvlErr contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "notOK";
            let notOK!: AVMP_error;
            notOK = _decode_AVMP_error(sequence[0]);
            return new RepAvlErr(notOK, sequence.slice(1));
        };
    }
    return _cached_decoder_for_RepAvlErr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RepAvlErr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RepAvlErr */
let _cached_encoder_for_RepAvlErr: $.ASN1Encoder<RepAvlErr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RepAvlErr */

/* START_OF_SYMBOL_DEFINITION _encode_RepAvlErr */
/**
 * @summary Encodes a(n) RepAvlErr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepAvlErr, encoded as an ASN.1 Element.
 */
export function _encode_RepAvlErr(
    value: RepAvlErr,
    elGetter: $.ASN1Encoder<RepAvlErr>
) {
    if (!_cached_encoder_for_RepAvlErr) {
        _cached_encoder_for_RepAvlErr = function (
            value: RepAvlErr,
            elGetter: $.ASN1Encoder<RepAvlErr>
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
    return _cached_encoder_for_RepAvlErr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RepAvlErr */

/* eslint-enable */
