/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../MTSAbstractService/UniversalPDSParameter.ta";
export {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../MTSAbstractService/UniversalPDSParameter.ta";

/* START_OF_SYMBOL_DEFINITION UniversalPosteRestanteAddress */
/**
 * @summary UniversalPosteRestanteAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPosteRestanteAddress  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPosteRestanteAddress = UniversalPDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalPosteRestanteAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPosteRestanteAddress */
let _cached_decoder_for_UniversalPosteRestanteAddress: $.ASN1Decoder<UniversalPosteRestanteAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPosteRestanteAddress */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalPosteRestanteAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPosteRestanteAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPosteRestanteAddress} The decoded data structure.
 */
export function _decode_UniversalPosteRestanteAddress(el: _Element) {
    if (!_cached_decoder_for_UniversalPosteRestanteAddress) {
        _cached_decoder_for_UniversalPosteRestanteAddress = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPosteRestanteAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalPosteRestanteAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPosteRestanteAddress */
let _cached_encoder_for_UniversalPosteRestanteAddress: $.ASN1Encoder<UniversalPosteRestanteAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPosteRestanteAddress */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalPosteRestanteAddress */
/**
 * @summary Encodes a(n) UniversalPosteRestanteAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPosteRestanteAddress, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPosteRestanteAddress(
    value: UniversalPosteRestanteAddress,
    elGetter: $.ASN1Encoder<UniversalPosteRestanteAddress>
) {
    if (!_cached_encoder_for_UniversalPosteRestanteAddress) {
        _cached_encoder_for_UniversalPosteRestanteAddress = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPosteRestanteAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalPosteRestanteAddress */

/* eslint-enable */
