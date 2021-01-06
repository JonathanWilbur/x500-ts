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

/* START_OF_SYMBOL_DEFINITION UniversalStreetAddress */
/**
 * @summary UniversalStreetAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalStreetAddress  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalStreetAddress = UniversalPDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalStreetAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalStreetAddress */
let _cached_decoder_for_UniversalStreetAddress: $.ASN1Decoder<UniversalStreetAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalStreetAddress */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalStreetAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalStreetAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalStreetAddress} The decoded data structure.
 */
export function _decode_UniversalStreetAddress(el: _Element) {
    if (!_cached_decoder_for_UniversalStreetAddress) {
        _cached_decoder_for_UniversalStreetAddress = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalStreetAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalStreetAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalStreetAddress */
let _cached_encoder_for_UniversalStreetAddress: $.ASN1Encoder<UniversalStreetAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalStreetAddress */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalStreetAddress */
/**
 * @summary Encodes a(n) UniversalStreetAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalStreetAddress, encoded as an ASN.1 Element.
 */
export function _encode_UniversalStreetAddress(
    value: UniversalStreetAddress,
    elGetter: $.ASN1Encoder<UniversalStreetAddress>
) {
    if (!_cached_encoder_for_UniversalStreetAddress) {
        _cached_encoder_for_UniversalStreetAddress = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalStreetAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalStreetAddress */

/* eslint-enable */
