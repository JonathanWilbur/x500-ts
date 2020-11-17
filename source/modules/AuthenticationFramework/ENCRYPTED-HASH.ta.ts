/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ENCRYPTED_HASH */
/**
 * @summary ENCRYPTED_HASH
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ENCRYPTED-HASH{ToBeSigned}  ::=  BIT STRING (CONSTRAINED BY {
 *   -- shall be the result of applying a hashing procedure to the DER-encoded (see 6.2)
 *   -- octets of a value of -- ToBeSigned -- and then applying an encipherment procedure
 *   -- to those octets -- } )
 * ```
 */
export type ENCRYPTED_HASH<ToBeSigned> = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION ENCRYPTED_HASH */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_ENCRYPTED_HASH */
/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ENCRYPTED_HASH
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_ENCRYPTED_HASH<ToBeSigned>(
    _decode_ToBeSigned: $.ASN1Decoder<ToBeSigned>
) {
    return $._decodeBitString;
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_ENCRYPTED_HASH */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_ENCRYPTED_HASH */
/**
 * @summary Returns a function that will encode a(n) ENCRYPTED_HASH into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ENCRYPTED_HASH as an ASN.1 element.
 */
export function _get_encoder_for_ENCRYPTED_HASH<ToBeSigned>(
    _encode_ToBeSigned: $.ASN1Encoder<ToBeSigned>
) {
    return $._encodeBitString;
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_ENCRYPTED_HASH */

/* eslint-enable */
