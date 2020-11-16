/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION UnbindRequest */
/**
 * @summary UnbindRequest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnbindRequest  ::=  [APPLICATION 2]  NULL
 * ```
 */
export type UnbindRequest = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION UnbindRequest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnbindRequest */
let _cached_decoder_for_UnbindRequest: $.ASN1Decoder<
    UnbindRequest
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnbindRequest */

/* START_OF_SYMBOL_DEFINITION _decode_UnbindRequest */
/**
 * @summary Decodes an ASN.1 element into a(n) UnbindRequest
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnbindRequest} The decoded data structure.
 */
export function _decode_UnbindRequest(el: _Element) {
    if (!_cached_decoder_for_UnbindRequest) {
        _cached_decoder_for_UnbindRequest = $._decode_implicit<UnbindRequest>(
            () => $._decodeNull
        );
    }
    return _cached_decoder_for_UnbindRequest(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnbindRequest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnbindRequest */
let _cached_encoder_for_UnbindRequest: $.ASN1Encoder<
    UnbindRequest
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnbindRequest */

/* START_OF_SYMBOL_DEFINITION _encode_UnbindRequest */
/**
 * @summary Encodes a(n) UnbindRequest into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnbindRequest, encoded as an ASN.1 Element.
 */
export function _encode_UnbindRequest(
    value: UnbindRequest,
    elGetter: $.ASN1Encoder<UnbindRequest>
) {
    if (!_cached_encoder_for_UnbindRequest) {
        _cached_encoder_for_UnbindRequest = $._encode_implicit(
            _TagClass.application,
            2,
            () => $._encodeNull,
            $.BER
        );
    }
    return _cached_encoder_for_UnbindRequest(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnbindRequest */

/* eslint-enable */
