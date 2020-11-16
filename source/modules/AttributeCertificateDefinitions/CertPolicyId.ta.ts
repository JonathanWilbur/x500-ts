/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CertPolicyId */
/**
 * @summary CertPolicyId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertPolicyId  ::=  OBJECT IDENTIFIER
 * ```
 */
export type CertPolicyId = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION CertPolicyId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertPolicyId */
let _cached_decoder_for_CertPolicyId: $.ASN1Decoder<CertPolicyId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertPolicyId */

/* START_OF_SYMBOL_DEFINITION _decode_CertPolicyId */
/**
 * @summary Decodes an ASN.1 element into a(n) CertPolicyId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertPolicyId} The decoded data structure.
 */
export function _decode_CertPolicyId(el: _Element) {
    if (!_cached_decoder_for_CertPolicyId) {
        _cached_decoder_for_CertPolicyId = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_CertPolicyId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertPolicyId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertPolicyId */
let _cached_encoder_for_CertPolicyId: $.ASN1Encoder<CertPolicyId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertPolicyId */

/* START_OF_SYMBOL_DEFINITION _encode_CertPolicyId */
/**
 * @summary Encodes a(n) CertPolicyId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertPolicyId, encoded as an ASN.1 Element.
 */
export function _encode_CertPolicyId(
    value: CertPolicyId,
    elGetter: $.ASN1Encoder<CertPolicyId>
) {
    if (!_cached_encoder_for_CertPolicyId) {
        _cached_encoder_for_CertPolicyId = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_CertPolicyId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertPolicyId */

/* eslint-enable */
