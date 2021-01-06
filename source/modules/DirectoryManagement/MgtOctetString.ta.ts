/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION MgtOctetString */
/**
 * @summary MgtOctetString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtOctetString  ::=  OCTET STRING
 * ```
 */
export type MgtOctetString = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION MgtOctetString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtOctetString */
let _cached_decoder_for_MgtOctetString: $.ASN1Decoder<MgtOctetString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtOctetString */

/* START_OF_SYMBOL_DEFINITION _decode_MgtOctetString */
/**
 * @summary Decodes an ASN.1 element into a(n) MgtOctetString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtOctetString} The decoded data structure.
 */
export function _decode_MgtOctetString(el: _Element) {
    if (!_cached_decoder_for_MgtOctetString) {
        _cached_decoder_for_MgtOctetString = $._decodeOctetString;
    }
    return _cached_decoder_for_MgtOctetString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MgtOctetString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtOctetString */
let _cached_encoder_for_MgtOctetString: $.ASN1Encoder<MgtOctetString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtOctetString */

/* START_OF_SYMBOL_DEFINITION _encode_MgtOctetString */
/**
 * @summary Encodes a(n) MgtOctetString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtOctetString, encoded as an ASN.1 Element.
 */
export function _encode_MgtOctetString(
    value: MgtOctetString,
    elGetter: $.ASN1Encoder<MgtOctetString>
) {
    if (!_cached_encoder_for_MgtOctetString) {
        _cached_encoder_for_MgtOctetString = $._encodeOctetString;
    }
    return _cached_encoder_for_MgtOctetString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MgtOctetString */

/* eslint-enable */
