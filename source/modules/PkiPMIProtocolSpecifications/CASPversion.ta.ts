/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_CASPversion */
export enum _enum_for_CASPversion {
    v1 = 1,
    v2 = 2,
    v3 = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CASPversion */

/* START_OF_SYMBOL_DEFINITION CASPversion */
/**
 * @summary CASPversion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CASPversion  ::=  ENUMERATED { v1(1), v2(2), v3(3), ... }
 * ```@enum {number}
 */
export type CASPversion = _enum_for_CASPversion | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION CASPversion */

/* START_OF_SYMBOL_DEFINITION CASPversion_v1 */
/**
 * @summary CASPversion_v1
 * @constant
 * @type {number}
 */
export const CASPversion_v1: CASPversion = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASPversion_v1 */

/* START_OF_SYMBOL_DEFINITION CASPversion_v2 */
/**
 * @summary CASPversion_v2
 * @constant
 * @type {number}
 */
export const CASPversion_v2: CASPversion = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASPversion_v2 */

/* START_OF_SYMBOL_DEFINITION CASPversion_v3 */
/**
 * @summary CASPversion_v3
 * @constant
 * @type {number}
 */
export const CASPversion_v3: CASPversion = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CASPversion_v3 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CASPversion */
let _cached_decoder_for_CASPversion: $.ASN1Decoder<CASPversion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CASPversion */

/* START_OF_SYMBOL_DEFINITION _decode_CASPversion */
/**
 * @summary Decodes an ASN.1 element into a(n) CASPversion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CASPversion} The decoded data structure.
 */
export function _decode_CASPversion(el: _Element) {
    if (!_cached_decoder_for_CASPversion) {
        _cached_decoder_for_CASPversion = $._decodeEnumerated;
    }
    return _cached_decoder_for_CASPversion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CASPversion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CASPversion */
let _cached_encoder_for_CASPversion: $.ASN1Encoder<CASPversion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CASPversion */

/* START_OF_SYMBOL_DEFINITION _encode_CASPversion */
/**
 * @summary Encodes a(n) CASPversion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CASPversion, encoded as an ASN.1 Element.
 */
export function _encode_CASPversion(
    value: CASPversion,
    elGetter: $.ASN1Encoder<CASPversion>
) {
    if (!_cached_encoder_for_CASPversion) {
        _cached_encoder_for_CASPversion = $._encodeEnumerated;
    }
    return _cached_encoder_for_CASPversion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CASPversion */

/* eslint-enable */
