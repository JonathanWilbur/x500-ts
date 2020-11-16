/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION LDAPString */
/**
 * @summary LDAPString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPString  ::=  OCTET STRING
 * ```
 */
export type LDAPString = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION LDAPString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LDAPString */
let _cached_decoder_for_LDAPString: $.ASN1Decoder<LDAPString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LDAPString */

/* START_OF_SYMBOL_DEFINITION _decode_LDAPString */
/**
 * @summary Decodes an ASN.1 element into a(n) LDAPString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPString} The decoded data structure.
 */
export function _decode_LDAPString(el: _Element) {
    if (!_cached_decoder_for_LDAPString) {
        _cached_decoder_for_LDAPString = $._decodeOctetString;
    }
    return _cached_decoder_for_LDAPString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LDAPString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LDAPString */
let _cached_encoder_for_LDAPString: $.ASN1Encoder<LDAPString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LDAPString */

/* START_OF_SYMBOL_DEFINITION _encode_LDAPString */
/**
 * @summary Encodes a(n) LDAPString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPString, encoded as an ASN.1 Element.
 */
export function _encode_LDAPString(
    value: LDAPString,
    elGetter: $.ASN1Encoder<LDAPString>
) {
    if (!_cached_encoder_for_LDAPString) {
        _cached_encoder_for_LDAPString = $._encodeOctetString;
    }
    return _cached_encoder_for_LDAPString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LDAPString */

/* eslint-enable */
