/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION DSAScopeOfChainingValue */
/**
 * @summary DSAScopeOfChainingValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSAScopeOfChainingValue  ::=  INTEGER {dmd(0), country(1), global(2)}
 * ```
 */
export type DSAScopeOfChainingValue = INTEGER;
/* END_OF_SYMBOL_DEFINITION DSAScopeOfChainingValue */

/* START_OF_SYMBOL_DEFINITION DSAScopeOfChainingValue_dmd */
/**
 * @summary DSAScopeOfChainingValue_dmd
 * @constant
 * @type {number}
 */
export const DSAScopeOfChainingValue_dmd: DSAScopeOfChainingValue = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DSAScopeOfChainingValue_dmd */

/* START_OF_SYMBOL_DEFINITION dmd */
/**
 * @summary DSAScopeOfChainingValue_dmd
 * @constant
 * @type {number}
 */
export const dmd: DSAScopeOfChainingValue = DSAScopeOfChainingValue_dmd; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION dmd */

/* START_OF_SYMBOL_DEFINITION DSAScopeOfChainingValue_country */
/**
 * @summary DSAScopeOfChainingValue_country
 * @constant
 * @type {number}
 */
export const DSAScopeOfChainingValue_country: DSAScopeOfChainingValue = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DSAScopeOfChainingValue_country */

/* START_OF_SYMBOL_DEFINITION country */
/**
 * @summary DSAScopeOfChainingValue_country
 * @constant
 * @type {number}
 */
export const country: DSAScopeOfChainingValue = DSAScopeOfChainingValue_country; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION country */

/* START_OF_SYMBOL_DEFINITION DSAScopeOfChainingValue_global */
/**
 * @summary DSAScopeOfChainingValue_global
 * @constant
 * @type {number}
 */
export const DSAScopeOfChainingValue_global: DSAScopeOfChainingValue = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DSAScopeOfChainingValue_global */

/* START_OF_SYMBOL_DEFINITION global */
/**
 * @summary DSAScopeOfChainingValue_global
 * @constant
 * @type {number}
 */
export const global: DSAScopeOfChainingValue = DSAScopeOfChainingValue_global; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION global */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DSAScopeOfChainingValue */
let _cached_decoder_for_DSAScopeOfChainingValue: $.ASN1Decoder<
    DSAScopeOfChainingValue
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DSAScopeOfChainingValue */

/* START_OF_SYMBOL_DEFINITION _decode_DSAScopeOfChainingValue */
/**
 * @summary Decodes an ASN.1 element into a(n) DSAScopeOfChainingValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSAScopeOfChainingValue} The decoded data structure.
 */
export function _decode_DSAScopeOfChainingValue(el: _Element) {
    if (!_cached_decoder_for_DSAScopeOfChainingValue) {
        _cached_decoder_for_DSAScopeOfChainingValue = $._decodeInteger;
    }
    return _cached_decoder_for_DSAScopeOfChainingValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DSAScopeOfChainingValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DSAScopeOfChainingValue */
let _cached_encoder_for_DSAScopeOfChainingValue: $.ASN1Encoder<
    DSAScopeOfChainingValue
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DSAScopeOfChainingValue */

/* START_OF_SYMBOL_DEFINITION _encode_DSAScopeOfChainingValue */
/**
 * @summary Encodes a(n) DSAScopeOfChainingValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSAScopeOfChainingValue, encoded as an ASN.1 Element.
 */
export function _encode_DSAScopeOfChainingValue(
    value: DSAScopeOfChainingValue,
    elGetter: $.ASN1Encoder<DSAScopeOfChainingValue>
) {
    if (!_cached_encoder_for_DSAScopeOfChainingValue) {
        _cached_encoder_for_DSAScopeOfChainingValue = $._encodeInteger;
    }
    return _cached_encoder_for_DSAScopeOfChainingValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DSAScopeOfChainingValue */

/* eslint-enable */
