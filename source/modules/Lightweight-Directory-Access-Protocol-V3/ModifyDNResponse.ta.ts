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

/* START_OF_SYMBOL_DEFINITION ModifyDNResponse */
/**
 * @summary ModifyDNResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyDNResponse  ::=  [APPLICATION 13]  LDAPResult
 * ```
 */
export type ModifyDNResponse = LDAPResult; // DefinedType
/* END_OF_SYMBOL_DEFINITION ModifyDNResponse */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyDNResponse */
let _cached_decoder_for_ModifyDNResponse: $.ASN1Decoder<
    ModifyDNResponse
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyDNResponse */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyDNResponse */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyDNResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyDNResponse} The decoded data structure.
 */
export function _decode_ModifyDNResponse(el: _Element) {
    if (!_cached_decoder_for_ModifyDNResponse) {
        _cached_decoder_for_ModifyDNResponse = $._decode_implicit<
            ModifyDNResponse
        >(() => _decode_LDAPResult);
    }
    return _cached_decoder_for_ModifyDNResponse(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyDNResponse */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyDNResponse */
let _cached_encoder_for_ModifyDNResponse: $.ASN1Encoder<
    ModifyDNResponse
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyDNResponse */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyDNResponse */
/**
 * @summary Encodes a(n) ModifyDNResponse into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyDNResponse, encoded as an ASN.1 Element.
 */
export function _encode_ModifyDNResponse(
    value: ModifyDNResponse,
    elGetter: $.ASN1Encoder<ModifyDNResponse>
) {
    if (!_cached_encoder_for_ModifyDNResponse) {
        _cached_encoder_for_ModifyDNResponse = $._encode_implicit(
            _TagClass.application,
            13,
            () => _encode_LDAPResult,
            $.BER
        );
    }
    return _cached_encoder_for_ModifyDNResponse(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyDNResponse */

/* eslint-enable */
