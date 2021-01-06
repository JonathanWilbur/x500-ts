/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Release_request_reason,
    _decode_Release_request_reason,
    _encode_Release_request_reason,
} from "../OSIProtocolSpecification/Release-request-reason.ta";
export {
    normal /* IMPORTED_SHORT_NAMED_INTEGER */,
    Release_request_reason,
    Release_request_reason_normal /* IMPORTED_LONG_NAMED_INTEGER */,
    _decode_Release_request_reason,
    _encode_Release_request_reason,
} from "../OSIProtocolSpecification/Release-request-reason.ta";

/* START_OF_SYMBOL_DEFINITION TheOsiUnbind */
/**
 * @summary TheOsiUnbind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TheOsiUnbind ::= [APPLICATION 2] IMPLICIT SEQUENCE {
 *   reason  [0] IMPLICIT Release-request-reason OPTIONAL}
 * ```
 *
 * @class
 */
export class TheOsiUnbind {
    constructor(
        /**
         * @summary `reason`.
         * @public
         * @readonly
         */
        readonly reason: OPTIONAL<Release_request_reason>
    ) {}

    /**
     * @summary Restructures an object into a TheOsiUnbind
     * @description
     *
     * This takes an `object` and converts it to a `TheOsiUnbind`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TheOsiUnbind`.
     * @returns {TheOsiUnbind}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof TheOsiUnbind]: TheOsiUnbind[_K] }>
    ): TheOsiUnbind {
        return new TheOsiUnbind(_o.reason);
    }
}
/* END_OF_SYMBOL_DEFINITION TheOsiUnbind */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TheOsiUnbind */
/**
 * @summary The Leading Root Component Types of TheOsiUnbind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TheOsiUnbind: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "reason",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TheOsiUnbind */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TheOsiUnbind */
/**
 * @summary The Trailing Root Component Types of TheOsiUnbind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TheOsiUnbind: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TheOsiUnbind */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TheOsiUnbind */
/**
 * @summary The Extension Addition Component Types of TheOsiUnbind
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TheOsiUnbind: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TheOsiUnbind */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TheOsiUnbind */
let _cached_decoder_for_TheOsiUnbind: $.ASN1Decoder<TheOsiUnbind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TheOsiUnbind */

/* START_OF_SYMBOL_DEFINITION _decode_TheOsiUnbind */
/**
 * @summary Decodes an ASN.1 element into a(n) TheOsiUnbind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TheOsiUnbind} The decoded data structure.
 */
export function _decode_TheOsiUnbind(el: _Element) {
    if (!_cached_decoder_for_TheOsiUnbind) {
        _cached_decoder_for_TheOsiUnbind = $._decode_explicit<TheOsiUnbind>(
            () =>
                function (el: _Element): TheOsiUnbind {
                    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    let reason: OPTIONAL<Release_request_reason>;
                    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        reason: (_el: _Element): void => {
                            reason = $._decode_explicit<Release_request_reason>(
                                () => _decode_Release_request_reason
                            )(_el);
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_sequence(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_TheOsiUnbind,
                        _extension_additions_list_spec_for_TheOsiUnbind,
                        _root_component_type_list_2_spec_for_TheOsiUnbind,
                        undefined
                    );
                    return new TheOsiUnbind(
                        /* SEQUENCE_CONSTRUCTOR_CALL */ reason
                    );
                }
        );
    }
    return _cached_decoder_for_TheOsiUnbind(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TheOsiUnbind */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TheOsiUnbind */
let _cached_encoder_for_TheOsiUnbind: $.ASN1Encoder<TheOsiUnbind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TheOsiUnbind */

/* START_OF_SYMBOL_DEFINITION _encode_TheOsiUnbind */
/**
 * @summary Encodes a(n) TheOsiUnbind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TheOsiUnbind, encoded as an ASN.1 Element.
 */
export function _encode_TheOsiUnbind(
    value: TheOsiUnbind,
    elGetter: $.ASN1Encoder<TheOsiUnbind>
) {
    if (!_cached_encoder_for_TheOsiUnbind) {
        _cached_encoder_for_TheOsiUnbind = $._encode_explicit(
            _TagClass.application,
            2,
            () =>
                function (
                    value: TheOsiUnbind,
                    elGetter: $.ASN1Encoder<TheOsiUnbind>
                ): _Element {
                    return $._encodeSequence(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* IF_ABSENT  */ value.reason === undefined
                                    ? undefined
                                    : $._encode_explicit(
                                          _TagClass.context,
                                          0,
                                          () => _encode_Release_request_reason,
                                          $.BER
                                      )(value.reason, $.BER),
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
    return _cached_encoder_for_TheOsiUnbind(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TheOsiUnbind */

/* eslint-enable */
