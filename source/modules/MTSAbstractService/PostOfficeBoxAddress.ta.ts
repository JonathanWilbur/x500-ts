/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../MTSAbstractService/PDSParameter.ta";
export {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from "../MTSAbstractService/PDSParameter.ta";

/* START_OF_SYMBOL_DEFINITION PostOfficeBoxAddress */
/**
 * @summary PostOfficeBoxAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PostOfficeBoxAddress  ::=  PDSParameter
 * ```
 */
export type PostOfficeBoxAddress = PDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION PostOfficeBoxAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PostOfficeBoxAddress */
let _cached_decoder_for_PostOfficeBoxAddress: $.ASN1Decoder<PostOfficeBoxAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PostOfficeBoxAddress */

/* START_OF_SYMBOL_DEFINITION _decode_PostOfficeBoxAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) PostOfficeBoxAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PostOfficeBoxAddress} The decoded data structure.
 */
export function _decode_PostOfficeBoxAddress(el: _Element) {
    if (!_cached_decoder_for_PostOfficeBoxAddress) {
        _cached_decoder_for_PostOfficeBoxAddress = _decode_PDSParameter;
    }
    return _cached_decoder_for_PostOfficeBoxAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PostOfficeBoxAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PostOfficeBoxAddress */
let _cached_encoder_for_PostOfficeBoxAddress: $.ASN1Encoder<PostOfficeBoxAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PostOfficeBoxAddress */

/* START_OF_SYMBOL_DEFINITION _encode_PostOfficeBoxAddress */
/**
 * @summary Encodes a(n) PostOfficeBoxAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PostOfficeBoxAddress, encoded as an ASN.1 Element.
 */
export function _encode_PostOfficeBoxAddress(
    value: PostOfficeBoxAddress,
    elGetter: $.ASN1Encoder<PostOfficeBoxAddress>
) {
    if (!_cached_encoder_for_PostOfficeBoxAddress) {
        _cached_encoder_for_PostOfficeBoxAddress = _encode_PDSParameter;
    }
    return _cached_encoder_for_PostOfficeBoxAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PostOfficeBoxAddress */

/* eslint-enable */
