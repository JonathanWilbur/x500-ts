/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { OpBindingSet } from "../OperationalBindingManagement/OpBindingSet.osa";
export { OPERATIONAL_BINDING } from "../OperationalBindingManagement/OPERATIONAL-BINDING.oca";

/* START_OF_SYMBOL_DEFINITION ModifyOperationalBindingArgumentData_initiator */
/**
 * @summary ModifyOperationalBindingArgumentData_initiator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyOperationalBindingArgumentData-initiator ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ModifyOperationalBindingArgumentData_initiator =
    | { symmetric: _Element } /* CHOICE_ALT_ROOT */
    | { roleA_initiates: _Element } /* CHOICE_ALT_ROOT */
    | { roleB_initiates: _Element } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ModifyOperationalBindingArgumentData_initiator */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyOperationalBindingArgumentData_initiator */
let _cached_decoder_for_ModifyOperationalBindingArgumentData_initiator: $.ASN1Decoder<ModifyOperationalBindingArgumentData_initiator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyOperationalBindingArgumentData_initiator */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyOperationalBindingArgumentData_initiator */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyOperationalBindingArgumentData_initiator
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyOperationalBindingArgumentData_initiator} The decoded data structure.
 */
export function _decode_ModifyOperationalBindingArgumentData_initiator(
    el: _Element
) {
    if (!_cached_decoder_for_ModifyOperationalBindingArgumentData_initiator) {
        _cached_decoder_for_ModifyOperationalBindingArgumentData_initiator = $._decode_inextensible_choice<ModifyOperationalBindingArgumentData_initiator>(
            {
                "CONTEXT 3": [
                    "symmetric",
                    $._decode_explicit<_Element>(() => $._decodeAny),
                ],
                "CONTEXT 4": [
                    "roleA_initiates",
                    $._decode_explicit<_Element>(() => $._decodeAny),
                ],
                "CONTEXT 5": [
                    "roleB_initiates",
                    $._decode_explicit<_Element>(() => $._decodeAny),
                ],
            }
        );
    }
    return _cached_decoder_for_ModifyOperationalBindingArgumentData_initiator(
        el
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyOperationalBindingArgumentData_initiator */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyOperationalBindingArgumentData_initiator */
let _cached_encoder_for_ModifyOperationalBindingArgumentData_initiator: $.ASN1Encoder<ModifyOperationalBindingArgumentData_initiator> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyOperationalBindingArgumentData_initiator */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyOperationalBindingArgumentData_initiator */
/**
 * @summary Encodes a(n) ModifyOperationalBindingArgumentData_initiator into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyOperationalBindingArgumentData_initiator, encoded as an ASN.1 Element.
 */
export function _encode_ModifyOperationalBindingArgumentData_initiator(
    value: ModifyOperationalBindingArgumentData_initiator,
    elGetter: $.ASN1Encoder<ModifyOperationalBindingArgumentData_initiator>
) {
    if (!_cached_encoder_for_ModifyOperationalBindingArgumentData_initiator) {
        _cached_encoder_for_ModifyOperationalBindingArgumentData_initiator = $._encode_choice<ModifyOperationalBindingArgumentData_initiator>(
            {
                symmetric: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => $._encodeAny,
                    $.BER
                ),
                roleA_initiates: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => $._encodeAny,
                    $.BER
                ),
                roleB_initiates: $._encode_explicit(
                    _TagClass.context,
                    5,
                    () => $._encodeAny,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ModifyOperationalBindingArgumentData_initiator(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyOperationalBindingArgumentData_initiator */

/* eslint-enable */
