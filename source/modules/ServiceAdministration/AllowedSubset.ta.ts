/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AllowedSubset */
/**
 * @summary AllowedSubset
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AllowedSubset  ::=  BIT STRING {baseObject(0), oneLevel(1), wholeSubtree(2)}
 * ```
 */
export type AllowedSubset = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION AllowedSubset */

/* START_OF_SYMBOL_DEFINITION AllowedSubset_baseObject */
/**
 * @summary AllowedSubset_baseObject
 * @constant
 */
export const AllowedSubset_baseObject: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AllowedSubset_baseObject */

/* START_OF_SYMBOL_DEFINITION baseObject */
/**
 * @summary baseObject
 * @constant
 */
export const baseObject: number = AllowedSubset_baseObject; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION baseObject */

/* START_OF_SYMBOL_DEFINITION AllowedSubset_oneLevel */
/**
 * @summary AllowedSubset_oneLevel
 * @constant
 */
export const AllowedSubset_oneLevel: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AllowedSubset_oneLevel */

/* START_OF_SYMBOL_DEFINITION oneLevel */
/**
 * @summary oneLevel
 * @constant
 */
export const oneLevel: number = AllowedSubset_oneLevel; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION oneLevel */

/* START_OF_SYMBOL_DEFINITION AllowedSubset_wholeSubtree */
/**
 * @summary AllowedSubset_wholeSubtree
 * @constant
 */
export const AllowedSubset_wholeSubtree: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AllowedSubset_wholeSubtree */

/* START_OF_SYMBOL_DEFINITION wholeSubtree */
/**
 * @summary wholeSubtree
 * @constant
 */
export const wholeSubtree: number = AllowedSubset_wholeSubtree; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION wholeSubtree */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AllowedSubset */
let _cached_decoder_for_AllowedSubset: $.ASN1Decoder<
    AllowedSubset
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AllowedSubset */

/* START_OF_SYMBOL_DEFINITION _decode_AllowedSubset */
/**
 * @summary Decodes an ASN.1 element into a(n) AllowedSubset
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AllowedSubset} The decoded data structure.
 */
export function _decode_AllowedSubset(el: _Element) {
    if (!_cached_decoder_for_AllowedSubset) {
        _cached_decoder_for_AllowedSubset = $._decodeBitString;
    }
    return _cached_decoder_for_AllowedSubset(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AllowedSubset */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AllowedSubset */
let _cached_encoder_for_AllowedSubset: $.ASN1Encoder<
    AllowedSubset
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AllowedSubset */

/* START_OF_SYMBOL_DEFINITION _encode_AllowedSubset */
/**
 * @summary Encodes a(n) AllowedSubset into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AllowedSubset, encoded as an ASN.1 Element.
 */
export function _encode_AllowedSubset(
    value: AllowedSubset,
    elGetter: $.ASN1Encoder<AllowedSubset>
) {
    if (!_cached_encoder_for_AllowedSubset) {
        _cached_encoder_for_AllowedSubset = $._encodeBitString;
    }
    return _cached_encoder_for_AllowedSubset(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AllowedSubset */

/* eslint-enable */
