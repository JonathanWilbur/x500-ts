/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ABRT_source,
    _decode_ABRT_source,
    _encode_ABRT_source,
} from "../OSIProtocolSpecification/ABRT-source.ta";
export {
    ABRT_source,
    ABRT_source_acse_service_provider /* IMPORTED_LONG_NAMED_INTEGER */,
    ABRT_source_acse_service_user /* IMPORTED_LONG_NAMED_INTEGER */,
    acse_service_provider /* IMPORTED_SHORT_NAMED_INTEGER */,
    acse_service_user /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_ABRT_source,
    _encode_ABRT_source,
} from "../OSIProtocolSpecification/ABRT-source.ta";

/* START_OF_SYMBOL_DEFINITION ABRT_apdu */
/**
 * @summary ABRT_apdu
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ABRT-apdu ::= [APPLICATION 4] IMPLICIT SEQUENCE {
 *   abort-source  [0] IMPLICIT ABRT-source }
 * ```
 *
 * @class
 */
export class ABRT_apdu {
    constructor(
        /**
         * @summary `abort_source`.
         * @public
         * @readonly
         */
        readonly abort_source: ABRT_source
    ) {}

    /**
     * @summary Restructures an object into a ABRT_apdu
     * @description
     *
     * This takes an `object` and converts it to a `ABRT_apdu`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ABRT_apdu`.
     * @returns {ABRT_apdu}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ABRT_apdu]: ABRT_apdu[_K] }>
    ): ABRT_apdu {
        return new ABRT_apdu(_o.abort_source);
    }
}
/* END_OF_SYMBOL_DEFINITION ABRT_apdu */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ABRT_apdu */
/**
 * @summary The Leading Root Component Types of ABRT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ABRT_apdu: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "abort-source",
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ABRT_apdu */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ABRT_apdu */
/**
 * @summary The Trailing Root Component Types of ABRT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ABRT_apdu: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ABRT_apdu */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ABRT_apdu */
/**
 * @summary The Extension Addition Component Types of ABRT_apdu
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ABRT_apdu: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ABRT_apdu */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ABRT_apdu */
let _cached_decoder_for_ABRT_apdu: $.ASN1Decoder<ABRT_apdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ABRT_apdu */

/* START_OF_SYMBOL_DEFINITION _decode_ABRT_apdu */
/**
 * @summary Decodes an ASN.1 element into a(n) ABRT_apdu
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ABRT_apdu} The decoded data structure.
 */
export function _decode_ABRT_apdu(el: _Element) {
    if (!_cached_decoder_for_ABRT_apdu) {
        _cached_decoder_for_ABRT_apdu = $._decode_explicit<ABRT_apdu>(
            () =>
                function (el: _Element): ABRT_apdu {
                    const sequence: _Element[] = el.sequence;
                    if (sequence.length < 1) {
                        throw new _ConstructionError(
                            "ABRT-apdu contained only " +
                                sequence.length.toString() +
                                " elements."
                        );
                    }
                    sequence[0].name = "abort-source";
                    let abort_source!: ABRT_source;
                    abort_source = $._decode_explicit<ABRT_source>(
                        () => _decode_ABRT_source
                    )(sequence[0]);
                    return new ABRT_apdu(abort_source);
                }
        );
    }
    return _cached_decoder_for_ABRT_apdu(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ABRT_apdu */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ABRT_apdu */
let _cached_encoder_for_ABRT_apdu: $.ASN1Encoder<ABRT_apdu> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ABRT_apdu */

/* START_OF_SYMBOL_DEFINITION _encode_ABRT_apdu */
/**
 * @summary Encodes a(n) ABRT_apdu into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ABRT_apdu, encoded as an ASN.1 Element.
 */
export function _encode_ABRT_apdu(
    value: ABRT_apdu,
    elGetter: $.ASN1Encoder<ABRT_apdu>
) {
    if (!_cached_encoder_for_ABRT_apdu) {
        _cached_encoder_for_ABRT_apdu = $._encode_explicit(
            _TagClass.application,
            4,
            () =>
                function (
                    value: ABRT_apdu,
                    elGetter: $.ASN1Encoder<ABRT_apdu>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* REQUIRED   */ $._encode_explicit(
                                    _TagClass.context,
                                    0,
                                    () => _encode_ABRT_source,
                                    $.BER
                                )(value.abort_source, $.BER),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_ABRT_apdu(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ABRT_apdu */

/* eslint-enable */
