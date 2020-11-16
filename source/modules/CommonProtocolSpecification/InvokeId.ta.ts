/* eslint-disable */
import { ASN1Element as _Element, INTEGER, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION InvokeId */
/**
 * @summary InvokeId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeId  ::=  CHOICE {
 *   present  INTEGER,
 *   absent   NULL,
 *   ... }
 * ```
 */
export type InvokeId =
    | { present: INTEGER } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION InvokeId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeId */
let _cached_decoder_for_InvokeId: $.ASN1Decoder<InvokeId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeId */

/* START_OF_SYMBOL_DEFINITION _decode_InvokeId */
/**
 * @summary Decodes an ASN.1 element into a(n) InvokeId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeId} The decoded data structure.
 */
export function _decode_InvokeId(el: _Element) {
    if (!_cached_decoder_for_InvokeId) {
        _cached_decoder_for_InvokeId = $._decode_extensible_choice<InvokeId>({
            "UNIVERSAL 2": ["present", $._decodeInteger],
            "UNIVERSAL 5": ["absent", $._decodeNull],
        });
    }
    return _cached_decoder_for_InvokeId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InvokeId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeId */
let _cached_encoder_for_InvokeId: $.ASN1Encoder<InvokeId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeId */

/* START_OF_SYMBOL_DEFINITION _encode_InvokeId */
/**
 * @summary Encodes a(n) InvokeId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeId, encoded as an ASN.1 Element.
 */
export function _encode_InvokeId(
    value: InvokeId,
    elGetter: $.ASN1Encoder<InvokeId>
) {
    if (!_cached_encoder_for_InvokeId) {
        _cached_encoder_for_InvokeId = $._encode_choice<InvokeId>(
            {
                present: $._encodeInteger,
                absent: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_InvokeId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InvokeId */

/* eslint-enable */
