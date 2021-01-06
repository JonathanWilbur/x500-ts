/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { OpBindingSet } from "../OperationalBindingManagement/OpBindingSet.osa";
export { OPERATIONAL_BINDING } from "../OperationalBindingManagement/OPERATIONAL-BINDING.oca";

/* START_OF_SYMBOL_DEFINITION EstablishOperationalBindingResultData_initiator */
/**
 * @summary EstablishOperationalBindingResultData_initiator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EstablishOperationalBindingResultData-initiator ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EstablishOperationalBindingResultData_initiator =
    | { symmetric: _Element } /* CHOICE_ALT_ROOT */
    | { roleA_replies: _Element } /* CHOICE_ALT_ROOT */
    | { roleB_replies: _Element } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EstablishOperationalBindingResultData_initiator */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EstablishOperationalBindingResultData_initiator */
let _cached_decoder_for_EstablishOperationalBindingResultData_initiator: $.ASN1Decoder<EstablishOperationalBindingResultData_initiator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EstablishOperationalBindingResultData_initiator */

/* START_OF_SYMBOL_DEFINITION _decode_EstablishOperationalBindingResultData_initiator */
/**
 * @summary Decodes an ASN.1 element into a(n) EstablishOperationalBindingResultData_initiator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EstablishOperationalBindingResultData_initiator} The decoded data structure.
 */
export function _decode_EstablishOperationalBindingResultData_initiator(
    el: _Element
) {
    if (!_cached_decoder_for_EstablishOperationalBindingResultData_initiator) {
        _cached_decoder_for_EstablishOperationalBindingResultData_initiator = $._decode_inextensible_choice<EstablishOperationalBindingResultData_initiator>(
            {
                "CONTEXT 3": [
                    "symmetric",
                    $._decode_explicit<_Element>(() => $._decodeAny),
                ],
                "CONTEXT 4": [
                    "roleA_replies",
                    $._decode_explicit<_Element>(() => $._decodeAny),
                ],
                "CONTEXT 5": [
                    "roleB_replies",
                    $._decode_explicit<_Element>(() => $._decodeAny),
                ],
            }
        );
    }
    return _cached_decoder_for_EstablishOperationalBindingResultData_initiator(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_EstablishOperationalBindingResultData_initiator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EstablishOperationalBindingResultData_initiator */
let _cached_encoder_for_EstablishOperationalBindingResultData_initiator: $.ASN1Encoder<EstablishOperationalBindingResultData_initiator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EstablishOperationalBindingResultData_initiator */

/* START_OF_SYMBOL_DEFINITION _encode_EstablishOperationalBindingResultData_initiator */
/**
 * @summary Encodes a(n) EstablishOperationalBindingResultData_initiator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishOperationalBindingResultData_initiator, encoded as an ASN.1 Element.
 */
export function _encode_EstablishOperationalBindingResultData_initiator(
    value: EstablishOperationalBindingResultData_initiator,
    elGetter: $.ASN1Encoder<EstablishOperationalBindingResultData_initiator>
) {
    if (!_cached_encoder_for_EstablishOperationalBindingResultData_initiator) {
        _cached_encoder_for_EstablishOperationalBindingResultData_initiator = $._encode_choice<EstablishOperationalBindingResultData_initiator>(
            {
                symmetric: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => $._encodeAny,
                    $.BER
                ),
                roleA_replies: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => $._encodeAny,
                    $.BER
                ),
                roleB_replies: $._encode_explicit(
                    _TagClass.context,
                    5,
                    () => $._encodeAny,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EstablishOperationalBindingResultData_initiator(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_EstablishOperationalBindingResultData_initiator */

/* eslint-enable */
