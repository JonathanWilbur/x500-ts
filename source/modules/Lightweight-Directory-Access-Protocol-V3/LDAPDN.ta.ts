/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    LDAPString,
    _decode_LDAPString,
    _encode_LDAPString,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta";
export {
    LDAPString,
    _decode_LDAPString,
    _encode_LDAPString,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta";

/* START_OF_SYMBOL_DEFINITION LDAPDN */
/**
 * @summary LDAPDN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPDN  ::=  LDAPString
 * ```
 */
export type LDAPDN = LDAPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION LDAPDN */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LDAPDN */
let _cached_decoder_for_LDAPDN: $.ASN1Decoder<LDAPDN> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LDAPDN */

/* START_OF_SYMBOL_DEFINITION _decode_LDAPDN */
/**
 * @summary Decodes an ASN.1 element into a(n) LDAPDN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPDN} The decoded data structure.
 */
export function _decode_LDAPDN(el: _Element) {
    if (!_cached_decoder_for_LDAPDN) {
        _cached_decoder_for_LDAPDN = _decode_LDAPString;
    }
    return _cached_decoder_for_LDAPDN(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LDAPDN */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LDAPDN */
let _cached_encoder_for_LDAPDN: $.ASN1Encoder<LDAPDN> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LDAPDN */

/* START_OF_SYMBOL_DEFINITION _encode_LDAPDN */
/**
 * @summary Encodes a(n) LDAPDN into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPDN, encoded as an ASN.1 Element.
 */
export function _encode_LDAPDN(value: LDAPDN, elGetter: $.ASN1Encoder<LDAPDN>) {
    if (!_cached_encoder_for_LDAPDN) {
        _cached_encoder_for_LDAPDN = _encode_LDAPString;
    }
    return _cached_encoder_for_LDAPDN(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LDAPDN */

/* eslint-enable */
