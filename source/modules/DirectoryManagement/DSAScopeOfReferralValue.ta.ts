/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION DSAScopeOfReferralValue */
/**
 * @summary DSAScopeOfReferralValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DSAScopeOfReferralValue  ::=  INTEGER {dmd(0), country(1), global(2)}
 * ```
 */
export type DSAScopeOfReferralValue = INTEGER;
/* END_OF_SYMBOL_DEFINITION DSAScopeOfReferralValue */

/* START_OF_SYMBOL_DEFINITION DSAScopeOfReferralValue_dmd */
/**
 * @summary DSAScopeOfReferralValue_dmd
 * @constant
 * @type {number}
 */
export const DSAScopeOfReferralValue_dmd: DSAScopeOfReferralValue = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DSAScopeOfReferralValue_dmd */

/* START_OF_SYMBOL_DEFINITION dmd */
/**
 * @summary DSAScopeOfReferralValue_dmd
 * @constant
 * @type {number}
 */
export const dmd: DSAScopeOfReferralValue = DSAScopeOfReferralValue_dmd; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION dmd */

/* START_OF_SYMBOL_DEFINITION DSAScopeOfReferralValue_country */
/**
 * @summary DSAScopeOfReferralValue_country
 * @constant
 * @type {number}
 */
export const DSAScopeOfReferralValue_country: DSAScopeOfReferralValue = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DSAScopeOfReferralValue_country */

/* START_OF_SYMBOL_DEFINITION country */
/**
 * @summary DSAScopeOfReferralValue_country
 * @constant
 * @type {number}
 */
export const country: DSAScopeOfReferralValue = DSAScopeOfReferralValue_country; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION country */

/* START_OF_SYMBOL_DEFINITION DSAScopeOfReferralValue_global */
/**
 * @summary DSAScopeOfReferralValue_global
 * @constant
 * @type {number}
 */
export const DSAScopeOfReferralValue_global: DSAScopeOfReferralValue = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DSAScopeOfReferralValue_global */

/* START_OF_SYMBOL_DEFINITION global */
/**
 * @summary DSAScopeOfReferralValue_global
 * @constant
 * @type {number}
 */
export const global: DSAScopeOfReferralValue = DSAScopeOfReferralValue_global; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION global */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DSAScopeOfReferralValue */
let _cached_decoder_for_DSAScopeOfReferralValue: $.ASN1Decoder<
    DSAScopeOfReferralValue
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DSAScopeOfReferralValue */

/* START_OF_SYMBOL_DEFINITION _decode_DSAScopeOfReferralValue */
/**
 * @summary Decodes an ASN.1 element into a(n) DSAScopeOfReferralValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DSAScopeOfReferralValue} The decoded data structure.
 */
export function _decode_DSAScopeOfReferralValue(el: _Element) {
    if (!_cached_decoder_for_DSAScopeOfReferralValue) {
        _cached_decoder_for_DSAScopeOfReferralValue = $._decodeInteger;
    }
    return _cached_decoder_for_DSAScopeOfReferralValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DSAScopeOfReferralValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DSAScopeOfReferralValue */
let _cached_encoder_for_DSAScopeOfReferralValue: $.ASN1Encoder<
    DSAScopeOfReferralValue
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DSAScopeOfReferralValue */

/* START_OF_SYMBOL_DEFINITION _encode_DSAScopeOfReferralValue */
/**
 * @summary Encodes a(n) DSAScopeOfReferralValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSAScopeOfReferralValue, encoded as an ASN.1 Element.
 */
export function _encode_DSAScopeOfReferralValue(
    value: DSAScopeOfReferralValue,
    elGetter: $.ASN1Encoder<DSAScopeOfReferralValue>
) {
    if (!_cached_encoder_for_DSAScopeOfReferralValue) {
        _cached_encoder_for_DSAScopeOfReferralValue = $._encodeInteger;
    }
    return _cached_encoder_for_DSAScopeOfReferralValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DSAScopeOfReferralValue */

/* eslint-enable */
