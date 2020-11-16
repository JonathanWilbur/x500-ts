/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION KeyIdentifier */
/**
 * @summary KeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyIdentifier  ::=  OCTET STRING
 * ```
 */
export type KeyIdentifier = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION KeyIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyIdentifier */
let _cached_decoder_for_KeyIdentifier: $.ASN1Decoder<
    KeyIdentifier
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_KeyIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) KeyIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyIdentifier} The decoded data structure.
 */
export function _decode_KeyIdentifier(el: _Element) {
    if (!_cached_decoder_for_KeyIdentifier) {
        _cached_decoder_for_KeyIdentifier = $._decodeOctetString;
    }
    return _cached_decoder_for_KeyIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_KeyIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyIdentifier */
let _cached_encoder_for_KeyIdentifier: $.ASN1Encoder<
    KeyIdentifier
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_KeyIdentifier */
/**
 * @summary Encodes a(n) KeyIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_KeyIdentifier(
    value: KeyIdentifier,
    elGetter: $.ASN1Encoder<KeyIdentifier>
) {
    if (!_cached_encoder_for_KeyIdentifier) {
        _cached_encoder_for_KeyIdentifier = $._encodeOctetString;
    }
    return _cached_encoder_for_KeyIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_KeyIdentifier */

/* eslint-enable */
