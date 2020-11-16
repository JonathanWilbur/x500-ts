/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_AVMPversion */
export enum _enum_for_AVMPversion {
    v1 = 1,
    v2 = 2,
    v3 = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AVMPversion */

/* START_OF_SYMBOL_DEFINITION AVMPversion */
/**
 * @summary AVMPversion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AVMPversion  ::=  ENUMERATED { v1(1), v2(2), v3(3), ... }
 * ```@enum {number}
 */
export type AVMPversion = _enum_for_AVMPversion | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION AVMPversion */

/* START_OF_SYMBOL_DEFINITION AVMPversion_v1 */
/**
 * @summary AVMPversion_v1
 * @constant
 * @type {number}
 */
export const AVMPversion_v1: AVMPversion = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMPversion_v1 */

/* START_OF_SYMBOL_DEFINITION AVMPversion_v2 */
/**
 * @summary AVMPversion_v2
 * @constant
 * @type {number}
 */
export const AVMPversion_v2: AVMPversion = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMPversion_v2 */

/* START_OF_SYMBOL_DEFINITION AVMPversion_v3 */
/**
 * @summary AVMPversion_v3
 * @constant
 * @type {number}
 */
export const AVMPversion_v3: AVMPversion = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AVMPversion_v3 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AVMPversion */
let _cached_decoder_for_AVMPversion: $.ASN1Decoder<AVMPversion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AVMPversion */

/* START_OF_SYMBOL_DEFINITION _decode_AVMPversion */
/**
 * @summary Decodes an ASN.1 element into a(n) AVMPversion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AVMPversion} The decoded data structure.
 */
export function _decode_AVMPversion(el: _Element) {
    if (!_cached_decoder_for_AVMPversion) {
        _cached_decoder_for_AVMPversion = $._decodeEnumerated;
    }
    return _cached_decoder_for_AVMPversion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AVMPversion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AVMPversion */
let _cached_encoder_for_AVMPversion: $.ASN1Encoder<AVMPversion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AVMPversion */

/* START_OF_SYMBOL_DEFINITION _encode_AVMPversion */
/**
 * @summary Encodes a(n) AVMPversion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AVMPversion, encoded as an ASN.1 Element.
 */
export function _encode_AVMPversion(
    value: AVMPversion,
    elGetter: $.ASN1Encoder<AVMPversion>
) {
    if (!_cached_encoder_for_AVMPversion) {
        _cached_encoder_for_AVMPversion = $._encodeEnumerated;
    }
    return _cached_encoder_for_AVMPversion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AVMPversion */

/* eslint-enable */
