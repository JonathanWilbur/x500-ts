/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION HOBRole */
/**
 * @summary HOBRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HOBRole  ::=  INTEGER {superior(0), subordinate(1)}
 * ```
 */
export type HOBRole = INTEGER;
/* END_OF_SYMBOL_DEFINITION HOBRole */

/* START_OF_SYMBOL_DEFINITION HOBRole_superior */
/**
 * @summary HOBRole_superior
 * @constant
 * @type {number}
 */
export const HOBRole_superior: HOBRole = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION HOBRole_superior */

/* START_OF_SYMBOL_DEFINITION HOBRole_subordinate */
/**
 * @summary HOBRole_subordinate
 * @constant
 * @type {number}
 */
export const HOBRole_subordinate: HOBRole = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION HOBRole_subordinate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HOBRole */
let _cached_decoder_for_HOBRole: $.ASN1Decoder<HOBRole> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HOBRole */

/* START_OF_SYMBOL_DEFINITION _decode_HOBRole */
/**
 * @summary Decodes an ASN.1 element into a(n) HOBRole
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HOBRole} The decoded data structure.
 */
export function _decode_HOBRole(el: _Element) {
    if (!_cached_decoder_for_HOBRole) {
        _cached_decoder_for_HOBRole = $._decodeInteger;
    }
    return _cached_decoder_for_HOBRole(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HOBRole */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HOBRole */
let _cached_encoder_for_HOBRole: $.ASN1Encoder<HOBRole> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HOBRole */

/* START_OF_SYMBOL_DEFINITION _encode_HOBRole */
/**
 * @summary Encodes a(n) HOBRole into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HOBRole, encoded as an ASN.1 Element.
 */
export function _encode_HOBRole(
    value: HOBRole,
    elGetter: $.ASN1Encoder<HOBRole>
) {
    if (!_cached_encoder_for_HOBRole) {
        _cached_encoder_for_HOBRole = $._encodeInteger;
    }
    return _cached_encoder_for_HOBRole(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HOBRole */

/* eslint-enable */
