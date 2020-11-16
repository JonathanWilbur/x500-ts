/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    IssuerSerial,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "../AttributeCertificateDefinitions/IssuerSerial.ta";
export {
    IssuerSerial,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "../AttributeCertificateDefinitions/IssuerSerial.ta";

/* START_OF_SYMBOL_DEFINITION AuthAttId */
/**
 * @summary AuthAttId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthAttId  ::=  IssuerSerial
 * ```
 */
export type AuthAttId = IssuerSerial; // DefinedType
/* END_OF_SYMBOL_DEFINITION AuthAttId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthAttId */
let _cached_decoder_for_AuthAttId: $.ASN1Decoder<AuthAttId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthAttId */

/* START_OF_SYMBOL_DEFINITION _decode_AuthAttId */
/**
 * @summary Decodes an ASN.1 element into a(n) AuthAttId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthAttId} The decoded data structure.
 */
export function _decode_AuthAttId(el: _Element) {
    if (!_cached_decoder_for_AuthAttId) {
        _cached_decoder_for_AuthAttId = _decode_IssuerSerial;
    }
    return _cached_decoder_for_AuthAttId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AuthAttId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthAttId */
let _cached_encoder_for_AuthAttId: $.ASN1Encoder<AuthAttId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthAttId */

/* START_OF_SYMBOL_DEFINITION _encode_AuthAttId */
/**
 * @summary Encodes a(n) AuthAttId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthAttId, encoded as an ASN.1 Element.
 */
export function _encode_AuthAttId(
    value: AuthAttId,
    elGetter: $.ASN1Encoder<AuthAttId>
) {
    if (!_cached_encoder_for_AuthAttId) {
        _cached_encoder_for_AuthAttId = _encode_IssuerSerial;
    }
    return _cached_encoder_for_AuthAttId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AuthAttId */

/* eslint-enable */
