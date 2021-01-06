/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UiiFilter,
    _decode_UiiFilter,
    _encode_UiiFilter,
} from "../SelectedAttributeTypes/UiiFilter.ta";
export {
    UiiFilter,
    _decode_UiiFilter,
    _encode_UiiFilter,
} from "../SelectedAttributeTypes/UiiFilter.ta";

/* START_OF_SYMBOL_DEFINITION UiiFormat_next */
/**
 * @summary UiiFormat_next
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UiiFormat-next ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type UiiFormat_next =
    | { length: INTEGER } /* CHOICE_ALT_ROOT */
    | { filter: UiiFilter } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION UiiFormat_next */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UiiFormat_next */
let _cached_decoder_for_UiiFormat_next: $.ASN1Decoder<UiiFormat_next> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UiiFormat_next */

/* START_OF_SYMBOL_DEFINITION _decode_UiiFormat_next */
/**
 * @summary Decodes an ASN.1 element into a(n) UiiFormat_next
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UiiFormat_next} The decoded data structure.
 */
export function _decode_UiiFormat_next(el: _Element) {
    if (!_cached_decoder_for_UiiFormat_next) {
        _cached_decoder_for_UiiFormat_next = $._decode_inextensible_choice<UiiFormat_next>(
            {
                "UNIVERSAL 2": ["length", $._decodeInteger],
                "CONTEXT 0": ["filter", _decode_UiiFilter],
                "CONTEXT 1": ["filter", _decode_UiiFilter],
                "CONTEXT 2": ["filter", _decode_UiiFilter],
                "CONTEXT 3": ["filter", _decode_UiiFilter],
            }
        );
    }
    return _cached_decoder_for_UiiFormat_next(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UiiFormat_next */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UiiFormat_next */
let _cached_encoder_for_UiiFormat_next: $.ASN1Encoder<UiiFormat_next> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UiiFormat_next */

/* START_OF_SYMBOL_DEFINITION _encode_UiiFormat_next */
/**
 * @summary Encodes a(n) UiiFormat_next into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UiiFormat_next, encoded as an ASN.1 Element.
 */
export function _encode_UiiFormat_next(
    value: UiiFormat_next,
    elGetter: $.ASN1Encoder<UiiFormat_next>
) {
    if (!_cached_encoder_for_UiiFormat_next) {
        _cached_encoder_for_UiiFormat_next = $._encode_choice<UiiFormat_next>(
            {
                length: $._encodeInteger,
                filter: _encode_UiiFilter,
            },
            $.BER
        );
    }
    return _cached_encoder_for_UiiFormat_next(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UiiFormat_next */

/* eslint-enable */
