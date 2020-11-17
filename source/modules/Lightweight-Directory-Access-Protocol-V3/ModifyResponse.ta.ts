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

/* START_OF_SYMBOL_DEFINITION ModifyResponse */
/**
 * @summary ModifyResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyResponse  ::=  [APPLICATION 7]  LDAPResult
 * ```
 */
export type ModifyResponse = LDAPResult; // DefinedType
/* END_OF_SYMBOL_DEFINITION ModifyResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyResponse */
let _cached_decoder_for_ModifyResponse: $.ASN1Decoder<
    ModifyResponse
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyResponse */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyResponse} The decoded data structure.
 */
export function _decode_ModifyResponse(el: _Element) {
    if (!_cached_decoder_for_ModifyResponse) {
        _cached_decoder_for_ModifyResponse = $._decode_implicit<ModifyResponse>(
            () => _decode_LDAPResult
        );
    }
    return _cached_decoder_for_ModifyResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyResponse */
let _cached_encoder_for_ModifyResponse: $.ASN1Encoder<
    ModifyResponse
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyResponse */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyResponse */
/**
 * @summary Encodes a(n) ModifyResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyResponse, encoded as an ASN.1 Element.
 */
export function _encode_ModifyResponse(
    value: ModifyResponse,
    elGetter: $.ASN1Encoder<ModifyResponse>
) {
    if (!_cached_encoder_for_ModifyResponse) {
        _cached_encoder_for_ModifyResponse = $._encode_implicit(
            _TagClass.application,
            7,
            () => _encode_LDAPResult,
            $.BER
        );
    }
    return _cached_encoder_for_ModifyResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyResponse */

/* eslint-enable */
