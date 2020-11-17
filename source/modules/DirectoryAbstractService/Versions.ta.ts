/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Versions */
/**
 * @summary Versions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Versions  ::=  BIT STRING {v1(0), v2(1)}
 * ```
 */
export type Versions = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Versions */

/* START_OF_SYMBOL_DEFINITION Versions_v1 */
/**
 * @summary Versions_v1
 * @constant
 */
export const Versions_v1: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Versions_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary v1
 * @constant
 */
export const v1: number = Versions_v1; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION Versions_v2 */
/**
 * @summary Versions_v2
 * @constant
 */
export const Versions_v2: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Versions_v2 */

/* START_OF_SYMBOL_DEFINITION v2 */
/**
 * @summary v2
 * @constant
 */
export const v2: number = Versions_v2; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION v2 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Versions */
let _cached_decoder_for_Versions: $.ASN1Decoder<Versions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Versions */

/* START_OF_SYMBOL_DEFINITION _decode_Versions */
/**
 * @summary Decodes an ASN.1 element into a(n) Versions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Versions} The decoded data structure.
 */
export function _decode_Versions(el: _Element) {
    if (!_cached_decoder_for_Versions) {
        _cached_decoder_for_Versions = $._decodeBitString;
    }
    return _cached_decoder_for_Versions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Versions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Versions */
let _cached_encoder_for_Versions: $.ASN1Encoder<Versions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Versions */

/* START_OF_SYMBOL_DEFINITION _encode_Versions */
/**
 * @summary Encodes a(n) Versions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Versions, encoded as an ASN.1 Element.
 */
export function _encode_Versions(
    value: Versions,
    elGetter: $.ASN1Encoder<Versions>
) {
    if (!_cached_encoder_for_Versions) {
        _cached_encoder_for_Versions = $._encodeBitString;
    }
    return _cached_encoder_for_Versions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Versions */

/* eslint-enable */
