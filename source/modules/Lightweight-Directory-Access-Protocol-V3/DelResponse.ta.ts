/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    LDAPResult,
    _decode_LDAPResult,
    _encode_LDAPResult,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPResult.ta";
export {
    LDAPResult,
    _decode_LDAPResult,
    _encode_LDAPResult,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPResult.ta";

/* START_OF_SYMBOL_DEFINITION DelResponse */
/**
 * @summary DelResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DelResponse  ::=  [APPLICATION 11]  LDAPResult
 * ```
 */
export type DelResponse = LDAPResult; // DefinedType
/* END_OF_SYMBOL_DEFINITION DelResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DelResponse */
let _cached_decoder_for_DelResponse: $.ASN1Decoder<DelResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DelResponse */

/* START_OF_SYMBOL_DEFINITION _decode_DelResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) DelResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DelResponse} The decoded data structure.
 */
export function _decode_DelResponse(el: _Element) {
    if (!_cached_decoder_for_DelResponse) {
        _cached_decoder_for_DelResponse = $._decode_implicit<DelResponse>(
            () => _decode_LDAPResult
        );
    }
    return _cached_decoder_for_DelResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DelResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DelResponse */
let _cached_encoder_for_DelResponse: $.ASN1Encoder<DelResponse> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DelResponse */

/* START_OF_SYMBOL_DEFINITION _encode_DelResponse */
/**
 * @summary Encodes a(n) DelResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DelResponse, encoded as an ASN.1 Element.
 */
export function _encode_DelResponse(
    value: DelResponse,
    elGetter: $.ASN1Encoder<DelResponse>
) {
    if (!_cached_encoder_for_DelResponse) {
        _cached_encoder_for_DelResponse = $._encode_implicit(
            _TagClass.application,
            11,
            () => _encode_LDAPResult,
            $.BER
        );
    }
    return _cached_encoder_for_DelResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DelResponse */

/* eslint-enable */
