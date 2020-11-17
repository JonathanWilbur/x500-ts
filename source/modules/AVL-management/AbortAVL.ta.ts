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
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../AVL-management/InvokeID.ta";
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
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../AVL-management/InvokeID.ta";

/* START_OF_SYMBOL_DEFINITION AbortAVL */
/**
 * @summary AbortAVL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbortAVL ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   reason       AVMP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class AbortAVL {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: AVMP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AbortAVL
     * @description
     *
     * This takes an `object` and converts it to a `AbortAVL`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AbortAVL`.
     * @returns {AbortAVL}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof AbortAVL]: AbortAVL[_K] }>
    ): AbortAVL {
        return new AbortAVL(
            _o.invokeID,
            _o.reason,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `reason`
     * @public
     * @static
     */

    public static _enum_for_reason = _enum_for_AVMP_error;
}
/* END_OF_SYMBOL_DEFINITION AbortAVL */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AbortAVL */
/**
 * @summary The Leading Root Component Types of AbortAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AbortAVL: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "reason",
        false,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AbortAVL */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AbortAVL */
/**
 * @summary The Trailing Root Component Types of AbortAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AbortAVL: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AbortAVL */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AbortAVL */
/**
 * @summary The Extension Addition Component Types of AbortAVL
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AbortAVL: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AbortAVL */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AbortAVL */
let _cached_decoder_for_AbortAVL: $.ASN1Decoder<AbortAVL> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AbortAVL */

/* START_OF_SYMBOL_DEFINITION _decode_AbortAVL */
/**
 * @summary Decodes an ASN.1 element into a(n) AbortAVL
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AbortAVL} The decoded data structure.
 */
export function _decode_AbortAVL(el: _Element) {
    if (!_cached_decoder_for_AbortAVL) {
        _cached_decoder_for_AbortAVL = function (el: _Element): AbortAVL {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AbortAVL contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "reason";
            let invokeID!: InvokeID;
            let reason!: AVMP_error;
            invokeID = _decode_InvokeID(sequence[0]);
            reason = _decode_AVMP_error(sequence[1]);
            return new AbortAVL(invokeID, reason, sequence.slice(2));
        };
    }
    return _cached_decoder_for_AbortAVL(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AbortAVL */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AbortAVL */
let _cached_encoder_for_AbortAVL: $.ASN1Encoder<AbortAVL> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AbortAVL */

/* START_OF_SYMBOL_DEFINITION _encode_AbortAVL */
/**
 * @summary Encodes a(n) AbortAVL into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbortAVL, encoded as an ASN.1 Element.
 */
export function _encode_AbortAVL(
    value: AbortAVL,
    elGetter: $.ASN1Encoder<AbortAVL>
) {
    if (!_cached_encoder_for_AbortAVL) {
        _cached_encoder_for_AbortAVL = function (
            value: AbortAVL,
            elGetter: $.ASN1Encoder<AbortAVL>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AVMP_error(
                                value.reason,
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
    return _cached_encoder_for_AbortAVL(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AbortAVL */

/* eslint-enable */
