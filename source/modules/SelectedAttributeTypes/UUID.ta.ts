/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION UUID */
/**
 * @summary UUID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UUID  ::=  OCTET STRING(SIZE (16))
 * ```
 */
export type UUID = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION UUID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UUID */
let _cached_decoder_for_UUID: $.ASN1Decoder<UUID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UUID */

/* START_OF_SYMBOL_DEFINITION _decode_UUID */
/**
 * @summary Decodes an ASN.1 element into a(n) UUID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UUID} The decoded data structure.
 */
export function _decode_UUID(el: _Element) {
    if (!_cached_decoder_for_UUID) {
        _cached_decoder_for_UUID = $._decodeOctetString;
    }
    return _cached_decoder_for_UUID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UUID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UUID */
let _cached_encoder_for_UUID: $.ASN1Encoder<UUID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UUID */

/* START_OF_SYMBOL_DEFINITION _encode_UUID */
/**
 * @summary Encodes a(n) UUID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UUID, encoded as an ASN.1 Element.
 */
export function _encode_UUID(value: UUID, elGetter: $.ASN1Encoder<UUID>) {
    if (!_cached_encoder_for_UUID) {
        _cached_encoder_for_UUID = $._encodeOctetString;
    }
    return _cached_encoder_for_UUID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UUID */

/* eslint-enable */
