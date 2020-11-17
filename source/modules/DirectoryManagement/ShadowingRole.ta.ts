/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ShadowingRole */
/**
 * @summary ShadowingRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ShadowingRole  ::=  INTEGER {supplier(0), consumer(1)}
 * ```
 */
export type ShadowingRole = INTEGER;
/* END_OF_SYMBOL_DEFINITION ShadowingRole */

/* START_OF_SYMBOL_DEFINITION ShadowingRole_supplier */
/**
 * @summary ShadowingRole_supplier
 * @constant
 * @type {number}
 */
export const ShadowingRole_supplier: ShadowingRole = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ShadowingRole_supplier */

/* START_OF_SYMBOL_DEFINITION supplier */
/**
 * @summary ShadowingRole_supplier
 * @constant
 * @type {number}
 */
export const supplier: ShadowingRole = ShadowingRole_supplier; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION supplier */

/* START_OF_SYMBOL_DEFINITION ShadowingRole_consumer */
/**
 * @summary ShadowingRole_consumer
 * @constant
 * @type {number}
 */
export const ShadowingRole_consumer: ShadowingRole = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ShadowingRole_consumer */

/* START_OF_SYMBOL_DEFINITION consumer */
/**
 * @summary ShadowingRole_consumer
 * @constant
 * @type {number}
 */
export const consumer: ShadowingRole = ShadowingRole_consumer; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION consumer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ShadowingRole */
let _cached_decoder_for_ShadowingRole: $.ASN1Decoder<
    ShadowingRole
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ShadowingRole */

/* START_OF_SYMBOL_DEFINITION _decode_ShadowingRole */
/**
 * @summary Decodes an ASN.1 element into a(n) ShadowingRole
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ShadowingRole} The decoded data structure.
 */
export function _decode_ShadowingRole(el: _Element) {
    if (!_cached_decoder_for_ShadowingRole) {
        _cached_decoder_for_ShadowingRole = $._decodeInteger;
    }
    return _cached_decoder_for_ShadowingRole(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ShadowingRole */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ShadowingRole */
let _cached_encoder_for_ShadowingRole: $.ASN1Encoder<
    ShadowingRole
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ShadowingRole */

/* START_OF_SYMBOL_DEFINITION _encode_ShadowingRole */
/**
 * @summary Encodes a(n) ShadowingRole into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ShadowingRole, encoded as an ASN.1 Element.
 */
export function _encode_ShadowingRole(
    value: ShadowingRole,
    elGetter: $.ASN1Encoder<ShadowingRole>
) {
    if (!_cached_encoder_for_ShadowingRole) {
        _cached_encoder_for_ShadowingRole = $._encodeInteger;
    }
    return _cached_encoder_for_ShadowingRole(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ShadowingRole */

/* eslint-enable */
