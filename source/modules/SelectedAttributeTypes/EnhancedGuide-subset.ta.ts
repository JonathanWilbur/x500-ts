/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION EnhancedGuide_subset */
/**
 * @summary EnhancedGuide_subset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EnhancedGuide-subset ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EnhancedGuide_subset = INTEGER;
/* END_OF_SYMBOL_DEFINITION EnhancedGuide_subset */

/* START_OF_SYMBOL_DEFINITION EnhancedGuide_subset_baseObject */
/**
 * @summary EnhancedGuide_subset_baseObject
 * @constant
 * @type {number}
 */
export const EnhancedGuide_subset_baseObject: EnhancedGuide_subset = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EnhancedGuide_subset_baseObject */

/* START_OF_SYMBOL_DEFINITION EnhancedGuide_subset_oneLevel */
/**
 * @summary EnhancedGuide_subset_oneLevel
 * @constant
 * @type {number}
 */
export const EnhancedGuide_subset_oneLevel: EnhancedGuide_subset = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EnhancedGuide_subset_oneLevel */

/* START_OF_SYMBOL_DEFINITION EnhancedGuide_subset_wholeSubtree */
/**
 * @summary EnhancedGuide_subset_wholeSubtree
 * @constant
 * @type {number}
 */
export const EnhancedGuide_subset_wholeSubtree: EnhancedGuide_subset = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION EnhancedGuide_subset_wholeSubtree */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EnhancedGuide_subset */
let _cached_decoder_for_EnhancedGuide_subset: $.ASN1Decoder<
    EnhancedGuide_subset
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EnhancedGuide_subset */

/* START_OF_SYMBOL_DEFINITION _decode_EnhancedGuide_subset */
/**
 * @summary Decodes an ASN.1 element into a(n) EnhancedGuide_subset
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EnhancedGuide_subset} The decoded data structure.
 */
export function _decode_EnhancedGuide_subset(el: _Element) {
    if (!_cached_decoder_for_EnhancedGuide_subset) {
        _cached_decoder_for_EnhancedGuide_subset = $._decodeInteger;
    }
    return _cached_decoder_for_EnhancedGuide_subset(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EnhancedGuide_subset */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EnhancedGuide_subset */
let _cached_encoder_for_EnhancedGuide_subset: $.ASN1Encoder<
    EnhancedGuide_subset
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EnhancedGuide_subset */

/* START_OF_SYMBOL_DEFINITION _encode_EnhancedGuide_subset */
/**
 * @summary Encodes a(n) EnhancedGuide_subset into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnhancedGuide_subset, encoded as an ASN.1 Element.
 */
export function _encode_EnhancedGuide_subset(
    value: EnhancedGuide_subset,
    elGetter: $.ASN1Encoder<EnhancedGuide_subset>
) {
    if (!_cached_encoder_for_EnhancedGuide_subset) {
        _cached_encoder_for_EnhancedGuide_subset = $._encodeInteger;
    }
    return _cached_encoder_for_EnhancedGuide_subset(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EnhancedGuide_subset */

/* eslint-enable */
