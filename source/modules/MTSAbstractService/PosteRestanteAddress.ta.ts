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

/* START_OF_SYMBOL_DEFINITION PosteRestanteAddress */
/**
 * @summary PosteRestanteAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PosteRestanteAddress  ::=  PDSParameter
 * ```
 */
export type PosteRestanteAddress = PDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION PosteRestanteAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PosteRestanteAddress */
let _cached_decoder_for_PosteRestanteAddress: $.ASN1Decoder<PosteRestanteAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PosteRestanteAddress */

/* START_OF_SYMBOL_DEFINITION _decode_PosteRestanteAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) PosteRestanteAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PosteRestanteAddress} The decoded data structure.
 */
export function _decode_PosteRestanteAddress(el: _Element) {
    if (!_cached_decoder_for_PosteRestanteAddress) {
        _cached_decoder_for_PosteRestanteAddress = _decode_PDSParameter;
    }
    return _cached_decoder_for_PosteRestanteAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PosteRestanteAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PosteRestanteAddress */
let _cached_encoder_for_PosteRestanteAddress: $.ASN1Encoder<PosteRestanteAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PosteRestanteAddress */

/* START_OF_SYMBOL_DEFINITION _encode_PosteRestanteAddress */
/**
 * @summary Encodes a(n) PosteRestanteAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PosteRestanteAddress, encoded as an ASN.1 Element.
 */
export function _encode_PosteRestanteAddress(
    value: PosteRestanteAddress,
    elGetter: $.ASN1Encoder<PosteRestanteAddress>
) {
    if (!_cached_encoder_for_PosteRestanteAddress) {
        _cached_encoder_for_PosteRestanteAddress = _encode_PDSParameter;
    }
    return _cached_encoder_for_PosteRestanteAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PosteRestanteAddress */

/* eslint-enable */
