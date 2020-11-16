/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION OnlyCertificateTypes */
/**
 * @summary OnlyCertificateTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OnlyCertificateTypes  ::=  BIT STRING {
 *   user      (0),
 *   authority (1),
 *   attribute (2)}
 * ```
 */
export type OnlyCertificateTypes = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION OnlyCertificateTypes */

/* START_OF_SYMBOL_DEFINITION OnlyCertificateTypes_user */
/**
 * @summary OnlyCertificateTypes_user
 * @constant
 */
export const OnlyCertificateTypes_user: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION OnlyCertificateTypes_user */

/* START_OF_SYMBOL_DEFINITION OnlyCertificateTypes_authority */
/**
 * @summary OnlyCertificateTypes_authority
 * @constant
 */
export const OnlyCertificateTypes_authority: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION OnlyCertificateTypes_authority */

/* START_OF_SYMBOL_DEFINITION OnlyCertificateTypes_attribute */
/**
 * @summary OnlyCertificateTypes_attribute
 * @constant
 */
export const OnlyCertificateTypes_attribute: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION OnlyCertificateTypes_attribute */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OnlyCertificateTypes */
let _cached_decoder_for_OnlyCertificateTypes: $.ASN1Decoder<
    OnlyCertificateTypes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OnlyCertificateTypes */

/* START_OF_SYMBOL_DEFINITION _decode_OnlyCertificateTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) OnlyCertificateTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OnlyCertificateTypes} The decoded data structure.
 */
export function _decode_OnlyCertificateTypes(el: _Element) {
    if (!_cached_decoder_for_OnlyCertificateTypes) {
        _cached_decoder_for_OnlyCertificateTypes = $._decodeBitString;
    }
    return _cached_decoder_for_OnlyCertificateTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OnlyCertificateTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OnlyCertificateTypes */
let _cached_encoder_for_OnlyCertificateTypes: $.ASN1Encoder<
    OnlyCertificateTypes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OnlyCertificateTypes */

/* START_OF_SYMBOL_DEFINITION _encode_OnlyCertificateTypes */
/**
 * @summary Encodes a(n) OnlyCertificateTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OnlyCertificateTypes, encoded as an ASN.1 Element.
 */
export function _encode_OnlyCertificateTypes(
    value: OnlyCertificateTypes,
    elGetter: $.ASN1Encoder<OnlyCertificateTypes>
) {
    if (!_cached_encoder_for_OnlyCertificateTypes) {
        _cached_encoder_for_OnlyCertificateTypes = $._encodeBitString;
    }
    return _cached_encoder_for_OnlyCertificateTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OnlyCertificateTypes */

/* eslint-enable */
