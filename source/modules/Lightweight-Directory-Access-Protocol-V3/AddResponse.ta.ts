/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    LDAPResult,
    _decode_LDAPResult,
    _encode_LDAPResult,
} from "../Lightweight_Directory_Access_Protocol_V3/LDAPResult.ta";
export {
    LDAPResult,
    _decode_LDAPResult,
    _encode_LDAPResult,
} from "../Lightweight_Directory_Access_Protocol_V3/LDAPResult.ta";

/* START_OF_SYMBOL_DEFINITION AddResponse */
/**
 * @summary AddResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddResponse  ::=  [APPLICATION 9]  LDAPResult
 * ```
 */
export type AddResponse = LDAPResult; // DefinedType
/* END_OF_SYMBOL_DEFINITION AddResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddResponse */
let _cached_decoder_for_AddResponse: $.ASN1Decoder<AddResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddResponse */

/* START_OF_SYMBOL_DEFINITION _decode_AddResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) AddResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddResponse} The decoded data structure.
 */
export function _decode_AddResponse(el: _Element) {
    if (!_cached_decoder_for_AddResponse) {
        _cached_decoder_for_AddResponse = $._decode_implicit<AddResponse>(
            () => _decode_LDAPResult
        );
    }
    return _cached_decoder_for_AddResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddResponse */
let _cached_encoder_for_AddResponse: $.ASN1Encoder<AddResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddResponse */

/* START_OF_SYMBOL_DEFINITION _encode_AddResponse */
/**
 * @summary Encodes a(n) AddResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddResponse, encoded as an ASN.1 Element.
 */
export function _encode_AddResponse(
    value: AddResponse,
    elGetter: $.ASN1Encoder<AddResponse>
) {
    if (!_cached_encoder_for_AddResponse) {
        _cached_encoder_for_AddResponse = $._encode_implicit(
            _TagClass.application,
            9,
            () => _encode_LDAPResult,
            $.BER
        );
    }
    return _cached_encoder_for_AddResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddResponse */

/* eslint-enable */
