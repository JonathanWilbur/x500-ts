/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../PkiPmiExternalDataTypes/UniversalPDSParameter.ta";
export {
    UniversalPDSParameter,
    _decode_UniversalPDSParameter,
    _encode_UniversalPDSParameter,
} from "../PkiPmiExternalDataTypes/UniversalPDSParameter.ta";

/* START_OF_SYMBOL_DEFINITION UniversalPostOfficeBoxAddress */
/**
 * @summary UniversalPostOfficeBoxAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UniversalPostOfficeBoxAddress  ::=  UniversalPDSParameter
 * ```
 */
export type UniversalPostOfficeBoxAddress = UniversalPDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION UniversalPostOfficeBoxAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPostOfficeBoxAddress */
let _cached_decoder_for_UniversalPostOfficeBoxAddress: $.ASN1Decoder<
    UniversalPostOfficeBoxAddress
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UniversalPostOfficeBoxAddress */

/* START_OF_SYMBOL_DEFINITION _decode_UniversalPostOfficeBoxAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) UniversalPostOfficeBoxAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UniversalPostOfficeBoxAddress} The decoded data structure.
 */
export function _decode_UniversalPostOfficeBoxAddress(el: _Element) {
    if (!_cached_decoder_for_UniversalPostOfficeBoxAddress) {
        _cached_decoder_for_UniversalPostOfficeBoxAddress = _decode_UniversalPDSParameter;
    }
    return _cached_decoder_for_UniversalPostOfficeBoxAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UniversalPostOfficeBoxAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPostOfficeBoxAddress */
let _cached_encoder_for_UniversalPostOfficeBoxAddress: $.ASN1Encoder<
    UniversalPostOfficeBoxAddress
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UniversalPostOfficeBoxAddress */

/* START_OF_SYMBOL_DEFINITION _encode_UniversalPostOfficeBoxAddress */
/**
 * @summary Encodes a(n) UniversalPostOfficeBoxAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UniversalPostOfficeBoxAddress, encoded as an ASN.1 Element.
 */
export function _encode_UniversalPostOfficeBoxAddress(
    value: UniversalPostOfficeBoxAddress,
    elGetter: $.ASN1Encoder<UniversalPostOfficeBoxAddress>
) {
    if (!_cached_encoder_for_UniversalPostOfficeBoxAddress) {
        _cached_encoder_for_UniversalPostOfficeBoxAddress = _encode_UniversalPDSParameter;
    }
    return _cached_encoder_for_UniversalPostOfficeBoxAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UniversalPostOfficeBoxAddress */

/* eslint-enable */
