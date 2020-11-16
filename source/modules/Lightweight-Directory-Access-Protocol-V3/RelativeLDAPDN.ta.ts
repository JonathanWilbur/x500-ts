/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    LDAPString,
    _decode_LDAPString,
    _encode_LDAPString,
} from "../Lightweight_Directory_Access_Protocol_V3/LDAPString.ta";
export {
    LDAPString,
    _decode_LDAPString,
    _encode_LDAPString,
} from "../Lightweight_Directory_Access_Protocol_V3/LDAPString.ta";

/* START_OF_SYMBOL_DEFINITION RelativeLDAPDN */
/**
 * @summary RelativeLDAPDN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelativeLDAPDN  ::=
 *   LDAPString
 * ```
 */
export type RelativeLDAPDN = LDAPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION RelativeLDAPDN */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RelativeLDAPDN */
let _cached_decoder_for_RelativeLDAPDN: $.ASN1Decoder<
    RelativeLDAPDN
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RelativeLDAPDN */

/* START_OF_SYMBOL_DEFINITION _decode_RelativeLDAPDN */
/**
 * @summary Decodes an ASN.1 element into a(n) RelativeLDAPDN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelativeLDAPDN} The decoded data structure.
 */
export function _decode_RelativeLDAPDN(el: _Element) {
    if (!_cached_decoder_for_RelativeLDAPDN) {
        _cached_decoder_for_RelativeLDAPDN = _decode_LDAPString;
    }
    return _cached_decoder_for_RelativeLDAPDN(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RelativeLDAPDN */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RelativeLDAPDN */
let _cached_encoder_for_RelativeLDAPDN: $.ASN1Encoder<
    RelativeLDAPDN
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RelativeLDAPDN */

/* START_OF_SYMBOL_DEFINITION _encode_RelativeLDAPDN */
/**
 * @summary Encodes a(n) RelativeLDAPDN into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelativeLDAPDN, encoded as an ASN.1 Element.
 */
export function _encode_RelativeLDAPDN(
    value: RelativeLDAPDN,
    elGetter: $.ASN1Encoder<RelativeLDAPDN>
) {
    if (!_cached_encoder_for_RelativeLDAPDN) {
        _cached_encoder_for_RelativeLDAPDN = _encode_LDAPString;
    }
    return _cached_encoder_for_RelativeLDAPDN(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RelativeLDAPDN */

/* eslint-enable */
