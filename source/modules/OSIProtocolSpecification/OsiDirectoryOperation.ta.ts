/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OsiErr,
    _decode_OsiErr,
    _encode_OsiErr,
} from "../OSIProtocolSpecification/OsiErr.ta";
import {
    OsiRej,
    _decode_OsiRej,
    _encode_OsiRej,
} from "../OSIProtocolSpecification/OsiRej.ta";
import {
    OsiReq,
    _decode_OsiReq,
    _encode_OsiReq,
} from "../OSIProtocolSpecification/OsiReq.ta";
import {
    OsiRes,
    _decode_OsiRes,
    _encode_OsiRes,
} from "../OSIProtocolSpecification/OsiRes.ta";
export {
    OsiErr,
    _decode_OsiErr,
    _encode_OsiErr,
} from "../OSIProtocolSpecification/OsiErr.ta";
export {
    OsiRej,
    _decode_OsiRej,
    _encode_OsiRej,
} from "../OSIProtocolSpecification/OsiRej.ta";
export {
    OsiReq,
    _decode_OsiReq,
    _encode_OsiReq,
} from "../OSIProtocolSpecification/OsiReq.ta";
export {
    OsiRes,
    _decode_OsiRes,
    _encode_OsiRes,
} from "../OSIProtocolSpecification/OsiRes.ta";

/* START_OF_SYMBOL_DEFINITION OsiDirectoryOperation */
/**
 * @summary OsiDirectoryOperation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiDirectoryOperation{OPERATION:Operations}  ::=  CHOICE {
 *   request  OsiReq{{Operations}},
 *   result   OsiRes{{Operations}},
 *   error    OsiErr{{Operations}},
 *   reject   OsiRej}
 * ```
 */
export type OsiDirectoryOperation =
    | { request: OsiReq } /* CHOICE_ALT_ROOT */
    | { result: OsiRes } /* CHOICE_ALT_ROOT */
    | { error: OsiErr } /* CHOICE_ALT_ROOT */
    | { reject: OsiRej } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION OsiDirectoryOperation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiDirectoryOperation */
let _cached_decoder_for_OsiDirectoryOperation: $.ASN1Decoder<
    OsiDirectoryOperation
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiDirectoryOperation */

/* START_OF_SYMBOL_DEFINITION _decode_OsiDirectoryOperation */
/**
 * @summary Decodes an ASN.1 element into a(n) OsiDirectoryOperation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiDirectoryOperation} The decoded data structure.
 */
export function _decode_OsiDirectoryOperation(el: _Element) {
    if (!_cached_decoder_for_OsiDirectoryOperation) {
        _cached_decoder_for_OsiDirectoryOperation = $._decode_inextensible_choice<
            OsiDirectoryOperation
        >({
            "CONTEXT 1": ["request", _decode_OsiReq],
            "CONTEXT 2": ["result", _decode_OsiRes],
            "CONTEXT 3": ["error", _decode_OsiErr],
            "CONTEXT 4": ["reject", _decode_OsiRej],
        });
    }
    return _cached_decoder_for_OsiDirectoryOperation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OsiDirectoryOperation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiDirectoryOperation */
let _cached_encoder_for_OsiDirectoryOperation: $.ASN1Encoder<
    OsiDirectoryOperation
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiDirectoryOperation */

/* START_OF_SYMBOL_DEFINITION _encode_OsiDirectoryOperation */
/**
 * @summary Encodes a(n) OsiDirectoryOperation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiDirectoryOperation, encoded as an ASN.1 Element.
 */
export function _encode_OsiDirectoryOperation(
    value: OsiDirectoryOperation,
    elGetter: $.ASN1Encoder<OsiDirectoryOperation>
) {
    if (!_cached_encoder_for_OsiDirectoryOperation) {
        _cached_encoder_for_OsiDirectoryOperation = $._encode_choice<
            OsiDirectoryOperation
        >(
            {
                request: _encode_OsiReq,
                result: _encode_OsiRes,
                error: _encode_OsiErr,
                reject: _encode_OsiRej,
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiDirectoryOperation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OsiDirectoryOperation */

/* eslint-enable */
