/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION InvokeID */
/**
 * @summary InvokeID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeID  ::=  OCTET STRING (SIZE (6))
 * ```
 */
export type InvokeID = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION InvokeID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeID */
let _cached_decoder_for_InvokeID: $.ASN1Decoder<InvokeID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvokeID */

/* START_OF_SYMBOL_DEFINITION _decode_InvokeID */
/**
 * @summary Decodes an ASN.1 element into a(n) InvokeID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvokeID} The decoded data structure.
 */
export function _decode_InvokeID(el: _Element) {
    if (!_cached_decoder_for_InvokeID) {
        _cached_decoder_for_InvokeID = $._decodeOctetString;
    }
    return _cached_decoder_for_InvokeID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InvokeID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeID */
let _cached_encoder_for_InvokeID: $.ASN1Encoder<InvokeID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvokeID */

/* START_OF_SYMBOL_DEFINITION _encode_InvokeID */
/**
 * @summary Encodes a(n) InvokeID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeID, encoded as an ASN.1 Element.
 */
export function _encode_InvokeID(
    value: InvokeID,
    elGetter: $.ASN1Encoder<InvokeID>
) {
    if (!_cached_encoder_for_InvokeID) {
        _cached_encoder_for_InvokeID = $._encodeOctetString;
    }
    return _cached_encoder_for_InvokeID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InvokeID */

/* eslint-enable */
