/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION MgtOID */
/**
 * @summary MgtOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtOID  ::=  OBJECT IDENTIFIER
 * ```
 */
export type MgtOID = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION MgtOID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtOID */
let _cached_decoder_for_MgtOID: $.ASN1Decoder<MgtOID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtOID */

/* START_OF_SYMBOL_DEFINITION _decode_MgtOID */
/**
 * @summary Decodes an ASN.1 element into a(n) MgtOID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtOID} The decoded data structure.
 */
export function _decode_MgtOID(el: _Element) {
    if (!_cached_decoder_for_MgtOID) {
        _cached_decoder_for_MgtOID = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_MgtOID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MgtOID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtOID */
let _cached_encoder_for_MgtOID: $.ASN1Encoder<MgtOID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtOID */

/* START_OF_SYMBOL_DEFINITION _encode_MgtOID */
/**
 * @summary Encodes a(n) MgtOID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtOID, encoded as an ASN.1 Element.
 */
export function _encode_MgtOID(value: MgtOID, elGetter: $.ASN1Encoder<MgtOID>) {
    if (!_cached_encoder_for_MgtOID) {
        _cached_encoder_for_MgtOID = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_MgtOID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MgtOID */

/* eslint-enable */
