/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    LDAPDN,
    _decode_LDAPDN,
    _encode_LDAPDN,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPDN.ta";
export {
    LDAPDN,
    _decode_LDAPDN,
    _encode_LDAPDN,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPDN.ta";

/* START_OF_SYMBOL_DEFINITION DelRequest */
/**
 * @summary DelRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DelRequest  ::=  [APPLICATION 10]  LDAPDN
 * ```
 */
export type DelRequest = LDAPDN; // DefinedType
/* END_OF_SYMBOL_DEFINITION DelRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DelRequest */
let _cached_decoder_for_DelRequest: $.ASN1Decoder<DelRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DelRequest */

/* START_OF_SYMBOL_DEFINITION _decode_DelRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) DelRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DelRequest} The decoded data structure.
 */
export function _decode_DelRequest(el: _Element) {
    if (!_cached_decoder_for_DelRequest) {
        _cached_decoder_for_DelRequest = $._decode_implicit<DelRequest>(
            () => _decode_LDAPDN
        );
    }
    return _cached_decoder_for_DelRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DelRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DelRequest */
let _cached_encoder_for_DelRequest: $.ASN1Encoder<DelRequest> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DelRequest */

/* START_OF_SYMBOL_DEFINITION _encode_DelRequest */
/**
 * @summary Encodes a(n) DelRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DelRequest, encoded as an ASN.1 Element.
 */
export function _encode_DelRequest(
    value: DelRequest,
    elGetter: $.ASN1Encoder<DelRequest>
) {
    if (!_cached_encoder_for_DelRequest) {
        _cached_encoder_for_DelRequest = $._encode_implicit(
            _TagClass.application,
            10,
            () => _encode_LDAPDN,
            $.BER
        );
    }
    return _cached_encoder_for_DelRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DelRequest */

/* eslint-enable */
