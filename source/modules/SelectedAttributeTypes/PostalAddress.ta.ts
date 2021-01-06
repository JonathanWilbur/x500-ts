/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION PostalAddress */
/**
 * @summary PostalAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PostalAddress  ::=  SEQUENCE SIZE (1..MAX) OF UnboundedDirectoryString
 * ```
 */
export type PostalAddress = UnboundedDirectoryString[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION PostalAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PostalAddress */
let _cached_decoder_for_PostalAddress: $.ASN1Decoder<PostalAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PostalAddress */

/* START_OF_SYMBOL_DEFINITION _decode_PostalAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) PostalAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PostalAddress} The decoded data structure.
 */
export function _decode_PostalAddress(el: _Element) {
    if (!_cached_decoder_for_PostalAddress) {
        _cached_decoder_for_PostalAddress = $._decodeSequenceOf<UnboundedDirectoryString>(
            () => _decode_UnboundedDirectoryString
        );
    }
    return _cached_decoder_for_PostalAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PostalAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PostalAddress */
let _cached_encoder_for_PostalAddress: $.ASN1Encoder<PostalAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PostalAddress */

/* START_OF_SYMBOL_DEFINITION _encode_PostalAddress */
/**
 * @summary Encodes a(n) PostalAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PostalAddress, encoded as an ASN.1 Element.
 */
export function _encode_PostalAddress(
    value: PostalAddress,
    elGetter: $.ASN1Encoder<PostalAddress>
) {
    if (!_cached_encoder_for_PostalAddress) {
        _cached_encoder_for_PostalAddress = $._encodeSequenceOf<UnboundedDirectoryString>(
            () => _encode_UnboundedDirectoryString,
            $.BER
        );
    }
    return _cached_encoder_for_PostalAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PostalAddress */

/* eslint-enable */
