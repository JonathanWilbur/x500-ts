/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION LDAPOID */
/**
 * @summary LDAPOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPOID  ::=  OCTET STRING
 * ```
 */
export type LDAPOID = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION LDAPOID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LDAPOID */
let _cached_decoder_for_LDAPOID: $.ASN1Decoder<LDAPOID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LDAPOID */

/* START_OF_SYMBOL_DEFINITION _decode_LDAPOID */
/**
 * @summary Decodes an ASN.1 element into a(n) LDAPOID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPOID} The decoded data structure.
 */
export function _decode_LDAPOID(el: _Element) {
    if (!_cached_decoder_for_LDAPOID) {
        _cached_decoder_for_LDAPOID = $._decodeOctetString;
    }
    return _cached_decoder_for_LDAPOID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LDAPOID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LDAPOID */
let _cached_encoder_for_LDAPOID: $.ASN1Encoder<LDAPOID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LDAPOID */

/* START_OF_SYMBOL_DEFINITION _encode_LDAPOID */
/**
 * @summary Encodes a(n) LDAPOID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPOID, encoded as an ASN.1 Element.
 */
export function _encode_LDAPOID(
    value: LDAPOID,
    elGetter: $.ASN1Encoder<LDAPOID>
) {
    if (!_cached_encoder_for_LDAPOID) {
        _cached_encoder_for_LDAPOID = $._encodeOctetString;
    }
    return _cached_encoder_for_LDAPOID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LDAPOID */

/* eslint-enable */
