/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION DomainName */
/**
 * @summary DomainName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DomainName  ::=  UTF8String (CONSTRAINED BY { -- Conforms to the format of a domain name. -- })
 * ```
 */
export type DomainName = UTF8String; // UTF8String
/* END_OF_SYMBOL_DEFINITION DomainName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainName */
let _cached_decoder_for_DomainName: $.ASN1Decoder<DomainName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DomainName */

/* START_OF_SYMBOL_DEFINITION _decode_DomainName */
/**
 * @summary Decodes an ASN.1 element into a(n) DomainName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DomainName} The decoded data structure.
 */
export function _decode_DomainName(el: _Element) {
    if (!_cached_decoder_for_DomainName) {
        _cached_decoder_for_DomainName = $._decodeUTF8String;
    }
    return _cached_decoder_for_DomainName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DomainName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainName */
let _cached_encoder_for_DomainName: $.ASN1Encoder<DomainName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DomainName */

/* START_OF_SYMBOL_DEFINITION _encode_DomainName */
/**
 * @summary Encodes a(n) DomainName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DomainName, encoded as an ASN.1 Element.
 */
export function _encode_DomainName(
    value: DomainName,
    elGetter: $.ASN1Encoder<DomainName>
) {
    if (!_cached_encoder_for_DomainName) {
        _cached_encoder_for_DomainName = $._encodeUTF8String;
    }
    return _cached_encoder_for_DomainName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DomainName */

/* eslint-enable */
