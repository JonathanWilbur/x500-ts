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
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../CaSubscription/InvokeID.ta";
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
} from "../CaSubscription/CASP-error.ta";
export {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../CaSubscription/InvokeID.ta";

/* START_OF_SYMBOL_DEFINITION CAsubscribeAbort */
/**
 * @summary CAsubscribeAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CAsubscribeAbort ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   reason       CASP-error,
 *   ... }
 * ```
 *
 * @class
 */
export class CAsubscribeAbort {
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
        readonly reason: CASP_error,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CAsubscribeAbort
     * @description
     *
     * This takes an `object` and converts it to a `CAsubscribeAbort`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CAsubscribeAbort`.
     * @returns {CAsubscribeAbort}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof CAsubscribeAbort]: CAsubscribeAbort[_K] }>
    ): CAsubscribeAbort {
        return new CAsubscribeAbort(
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

    public static _enum_for_reason = _enum_for_CASP_error;
}
/* END_OF_SYMBOL_DEFINITION CAsubscribeAbort */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CAsubscribeAbort */
/**
 * @summary The Leading Root Component Types of CAsubscribeAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CAsubscribeAbort: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CAsubscribeAbort */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CAsubscribeAbort */
/**
 * @summary The Trailing Root Component Types of CAsubscribeAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CAsubscribeAbort: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CAsubscribeAbort */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CAsubscribeAbort */
/**
 * @summary The Extension Addition Component Types of CAsubscribeAbort
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CAsubscribeAbort: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CAsubscribeAbort */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CAsubscribeAbort */
let _cached_decoder_for_CAsubscribeAbort: $.ASN1Decoder<
    CAsubscribeAbort
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CAsubscribeAbort */

/* START_OF_SYMBOL_DEFINITION _decode_CAsubscribeAbort */
/**
 * @summary Decodes an ASN.1 element into a(n) CAsubscribeAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CAsubscribeAbort} The decoded data structure.
 */
export function _decode_CAsubscribeAbort(el: _Element) {
    if (!_cached_decoder_for_CAsubscribeAbort) {
        _cached_decoder_for_CAsubscribeAbort = function (
            el: _Element
        ): CAsubscribeAbort {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CAsubscribeAbort contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "reason";
            let invokeID!: InvokeID;
            let reason!: CASP_error;
            invokeID = _decode_InvokeID(sequence[0]);
            reason = _decode_CASP_error(sequence[1]);
            return new CAsubscribeAbort(invokeID, reason, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CAsubscribeAbort(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CAsubscribeAbort */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CAsubscribeAbort */
let _cached_encoder_for_CAsubscribeAbort: $.ASN1Encoder<
    CAsubscribeAbort
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CAsubscribeAbort */

/* START_OF_SYMBOL_DEFINITION _encode_CAsubscribeAbort */
/**
 * @summary Encodes a(n) CAsubscribeAbort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CAsubscribeAbort, encoded as an ASN.1 Element.
 */
export function _encode_CAsubscribeAbort(
    value: CAsubscribeAbort,
    elGetter: $.ASN1Encoder<CAsubscribeAbort>
) {
    if (!_cached_encoder_for_CAsubscribeAbort) {
        _cached_encoder_for_CAsubscribeAbort = function (
            value: CAsubscribeAbort,
            elGetter: $.ASN1Encoder<CAsubscribeAbort>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_CASP_error(
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
    return _cached_encoder_for_CAsubscribeAbort(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CAsubscribeAbort */

/* eslint-enable */
