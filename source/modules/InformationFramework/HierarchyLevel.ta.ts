/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION HierarchyLevel */
/**
 * @summary HierarchyLevel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HierarchyLevel  ::=  INTEGER
 * ```
 */
export type HierarchyLevel = INTEGER;
/* END_OF_SYMBOL_DEFINITION HierarchyLevel */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HierarchyLevel */
let _cached_decoder_for_HierarchyLevel: $.ASN1Decoder<
    HierarchyLevel
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HierarchyLevel */

/* START_OF_SYMBOL_DEFINITION _decode_HierarchyLevel */
/**
 * @summary Decodes an ASN.1 element into a(n) HierarchyLevel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HierarchyLevel} The decoded data structure.
 */
export function _decode_HierarchyLevel(el: _Element) {
    if (!_cached_decoder_for_HierarchyLevel) {
        _cached_decoder_for_HierarchyLevel = $._decodeInteger;
    }
    return _cached_decoder_for_HierarchyLevel(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HierarchyLevel */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HierarchyLevel */
let _cached_encoder_for_HierarchyLevel: $.ASN1Encoder<
    HierarchyLevel
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HierarchyLevel */

/* START_OF_SYMBOL_DEFINITION _encode_HierarchyLevel */
/**
 * @summary Encodes a(n) HierarchyLevel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HierarchyLevel, encoded as an ASN.1 Element.
 */
export function _encode_HierarchyLevel(
    value: HierarchyLevel,
    elGetter: $.ASN1Encoder<HierarchyLevel>
) {
    if (!_cached_encoder_for_HierarchyLevel) {
        _cached_encoder_for_HierarchyLevel = $._encodeInteger;
    }
    return _cached_encoder_for_HierarchyLevel(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HierarchyLevel */

/* eslint-enable */
