/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION KeyPurposeId */
/**
 * @summary KeyPurposeId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyPurposeId  ::=  OBJECT IDENTIFIER
 * ```
 */
export type KeyPurposeId = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION KeyPurposeId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyPurposeId */
let _cached_decoder_for_KeyPurposeId: $.ASN1Decoder<KeyPurposeId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyPurposeId */

/* START_OF_SYMBOL_DEFINITION _decode_KeyPurposeId */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyPurposeId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyPurposeId} The decoded data structure.
 */
export function _decode_KeyPurposeId(el: _Element) {
    if (!_cached_decoder_for_KeyPurposeId) {
        _cached_decoder_for_KeyPurposeId = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_KeyPurposeId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyPurposeId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyPurposeId */
let _cached_encoder_for_KeyPurposeId: $.ASN1Encoder<KeyPurposeId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyPurposeId */

/* START_OF_SYMBOL_DEFINITION _encode_KeyPurposeId */
/**
 * @summary Encodes a(n) KeyPurposeId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyPurposeId, encoded as an ASN.1 Element.
 */
export function _encode_KeyPurposeId(
    value: KeyPurposeId,
    elGetter: $.ASN1Encoder<KeyPurposeId>
) {
    if (!_cached_encoder_for_KeyPurposeId) {
        _cached_encoder_for_KeyPurposeId = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_KeyPurposeId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyPurposeId */

/* eslint-enable */
