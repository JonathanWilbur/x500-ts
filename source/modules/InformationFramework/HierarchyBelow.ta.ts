/* eslint-disable */
import { ASN1Element as _Element, BOOLEAN } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION HierarchyBelow */
/**
 * @summary HierarchyBelow
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HierarchyBelow  ::=  BOOLEAN
 * ```
 */
export type HierarchyBelow = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION HierarchyBelow */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HierarchyBelow */
let _cached_decoder_for_HierarchyBelow: $.ASN1Decoder<HierarchyBelow> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HierarchyBelow */

/* START_OF_SYMBOL_DEFINITION _decode_HierarchyBelow */
/**
 * @summary Decodes an ASN.1 element into a(n) HierarchyBelow
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HierarchyBelow} The decoded data structure.
 */
export function _decode_HierarchyBelow(el: _Element) {
    if (!_cached_decoder_for_HierarchyBelow) {
        _cached_decoder_for_HierarchyBelow = $._decodeBoolean;
    }
    return _cached_decoder_for_HierarchyBelow(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HierarchyBelow */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HierarchyBelow */
let _cached_encoder_for_HierarchyBelow: $.ASN1Encoder<HierarchyBelow> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HierarchyBelow */

/* START_OF_SYMBOL_DEFINITION _encode_HierarchyBelow */
/**
 * @summary Encodes a(n) HierarchyBelow into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HierarchyBelow, encoded as an ASN.1 Element.
 */
export function _encode_HierarchyBelow(
    value: HierarchyBelow,
    elGetter: $.ASN1Encoder<HierarchyBelow>
) {
    if (!_cached_encoder_for_HierarchyBelow) {
        _cached_encoder_for_HierarchyBelow = $._encodeBoolean;
    }
    return _cached_encoder_for_HierarchyBelow(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HierarchyBelow */

/* eslint-enable */
