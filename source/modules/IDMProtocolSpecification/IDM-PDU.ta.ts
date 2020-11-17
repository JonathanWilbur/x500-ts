/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Abort,
    _decode_Abort,
    _encode_Abort,
} from "../IDMProtocolSpecification/Abort.ta";
import {
    Error,
    _decode_Error,
    _encode_Error,
} from "../IDMProtocolSpecification/Error.ta";
import {
    IdmBind,
    _decode_IdmBind,
    _encode_IdmBind,
} from "../IDMProtocolSpecification/IdmBind.ta";
import {
    IdmBindError,
    _decode_IdmBindError,
    _encode_IdmBindError,
} from "../IDMProtocolSpecification/IdmBindError.ta";
import {
    IdmBindResult,
    _decode_IdmBindResult,
    _encode_IdmBindResult,
} from "../IDMProtocolSpecification/IdmBindResult.ta";
import {
    IdmReject,
    _decode_IdmReject,
    _encode_IdmReject,
} from "../IDMProtocolSpecification/IdmReject.ta";
import {
    IdmResult,
    _decode_IdmResult,
    _encode_IdmResult,
} from "../IDMProtocolSpecification/IdmResult.ta";
import {
    Request,
    _decode_Request,
    _encode_Request,
} from "../IDMProtocolSpecification/Request.ta";
import {
    StartTLS,
    _decode_StartTLS,
    _encode_StartTLS,
} from "../IDMProtocolSpecification/StartTLS.ta";
import {
    TLSResponse,
    _decode_TLSResponse,
    _encode_TLSResponse,
} from "../IDMProtocolSpecification/TLSResponse.ta";
import {
    Unbind,
    _decode_Unbind,
    _encode_Unbind,
} from "../IDMProtocolSpecification/Unbind.ta";
export {
    Abort,
    Abort_connectionFailed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    Abort_invalidPDU /* IMPORTED_LONG_ENUMERATION_ITEM */,
    Abort_invalidProtocol /* IMPORTED_LONG_ENUMERATION_ITEM */,
    Abort_mistypedPDU /* IMPORTED_LONG_ENUMERATION_ITEM */,
    Abort_reasonNotSpecified /* IMPORTED_LONG_ENUMERATION_ITEM */,
    Abort_resourceLimitation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    Abort_unboundRequest /* IMPORTED_LONG_ENUMERATION_ITEM */,
    connectionFailed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalidPDU /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    invalidProtocol /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    mistypedPDU /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    reasonNotSpecified /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    resourceLimitation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    unboundRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_Abort,
    _encode_Abort,
    _enum_for_Abort,
} from "../IDMProtocolSpecification/Abort.ta";
export {
    Error,
    _decode_Error,
    _encode_Error,
} from "../IDMProtocolSpecification/Error.ta";
export {
    IdmBind,
    _decode_IdmBind,
    _encode_IdmBind,
} from "../IDMProtocolSpecification/IdmBind.ta";
export {
    IdmBindError,
    _decode_IdmBindError,
    _encode_IdmBindError,
} from "../IDMProtocolSpecification/IdmBindError.ta";
export {
    IdmBindResult,
    _decode_IdmBindResult,
    _encode_IdmBindResult,
} from "../IDMProtocolSpecification/IdmBindResult.ta";
export {
    IdmReject,
    _decode_IdmReject,
    _encode_IdmReject,
} from "../IDMProtocolSpecification/IdmReject.ta";
export {
    IdmResult,
    _decode_IdmResult,
    _encode_IdmResult,
} from "../IDMProtocolSpecification/IdmResult.ta";
export {
    Request,
    _decode_Request,
    _encode_Request,
} from "../IDMProtocolSpecification/Request.ta";
export {
    StartTLS,
    _decode_StartTLS,
    _encode_StartTLS,
} from "../IDMProtocolSpecification/StartTLS.ta";
export {
    operationsError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    protocolError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    success /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    TLSResponse,
    TLSResponse_operationsError /* IMPORTED_LONG_ENUMERATION_ITEM */,
    TLSResponse_protocolError /* IMPORTED_LONG_ENUMERATION_ITEM */,
    TLSResponse_success /* IMPORTED_LONG_ENUMERATION_ITEM */,
    TLSResponse_unavailable /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unavailable /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_TLSResponse,
    _encode_TLSResponse,
    _enum_for_TLSResponse,
} from "../IDMProtocolSpecification/TLSResponse.ta";
export {
    Unbind,
    _decode_Unbind,
    _encode_Unbind,
} from "../IDMProtocolSpecification/Unbind.ta";

/* START_OF_SYMBOL_DEFINITION IDM_PDU */
/**
 * @summary IDM_PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IDM-PDU{IDM-PROTOCOL:protocol}  ::=  CHOICE {
 *   bind         [0]  IdmBind{{protocol}},
 *   bindResult   [1]  IdmBindResult{{protocol}},
 *   bindError    [2]  IdmBindError{{protocol}},
 *   request      [3]  Request{{protocol.&Operations}},
 *   result       [4]  IdmResult{{protocol.&Operations}},
 *   error        [5]  Error{{protocol.&Operations}},
 *   reject       [6]  IdmReject,
 *   unbind       [7]  Unbind,
 *   abort        [8]  Abort,
 *   startTLS     [9]  StartTLS,
 *   tLSResponse  [10] TLSResponse,
 *   ... }
 * ```
 */
export type IDM_PDU =
    | { bind: IdmBind } /* CHOICE_ALT_ROOT */
    | { bindResult: IdmBindResult } /* CHOICE_ALT_ROOT */
    | { bindError: IdmBindError } /* CHOICE_ALT_ROOT */
    | { request: Request } /* CHOICE_ALT_ROOT */
    | { result: IdmResult } /* CHOICE_ALT_ROOT */
    | { error: Error } /* CHOICE_ALT_ROOT */
    | { reject: IdmReject } /* CHOICE_ALT_ROOT */
    | { unbind: Unbind } /* CHOICE_ALT_ROOT */
    | { abort: Abort } /* CHOICE_ALT_ROOT */
    | { startTLS: StartTLS } /* CHOICE_ALT_ROOT */
    | { tLSResponse: TLSResponse } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION IDM_PDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IDM_PDU */
let _cached_decoder_for_IDM_PDU: $.ASN1Decoder<IDM_PDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IDM_PDU */

/* START_OF_SYMBOL_DEFINITION _decode_IDM_PDU */
/**
 * @summary Decodes an ASN.1 element into a(n) IDM_PDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IDM_PDU} The decoded data structure.
 */
export function _decode_IDM_PDU(el: _Element) {
    if (!_cached_decoder_for_IDM_PDU) {
        _cached_decoder_for_IDM_PDU = $._decode_extensible_choice<IDM_PDU>({
            "CONTEXT 0": [
                "bind",
                $._decode_explicit<IdmBind>(() => _decode_IdmBind),
            ],
            "CONTEXT 1": [
                "bindResult",
                $._decode_explicit<IdmBindResult>(() => _decode_IdmBindResult),
            ],
            "CONTEXT 2": [
                "bindError",
                $._decode_explicit<IdmBindError>(() => _decode_IdmBindError),
            ],
            "CONTEXT 3": [
                "request",
                $._decode_explicit<Request>(() => _decode_Request),
            ],
            "CONTEXT 4": [
                "result",
                $._decode_explicit<IdmResult>(() => _decode_IdmResult),
            ],
            "CONTEXT 5": [
                "error",
                $._decode_explicit<Error>(() => _decode_Error),
            ],
            "CONTEXT 6": [
                "reject",
                $._decode_explicit<IdmReject>(() => _decode_IdmReject),
            ],
            "CONTEXT 7": [
                "unbind",
                $._decode_explicit<Unbind>(() => _decode_Unbind),
            ],
            "CONTEXT 8": [
                "abort",
                $._decode_explicit<Abort>(() => _decode_Abort),
            ],
            "CONTEXT 9": [
                "startTLS",
                $._decode_explicit<StartTLS>(() => _decode_StartTLS),
            ],
            "CONTEXT 10": [
                "tLSResponse",
                $._decode_explicit<TLSResponse>(() => _decode_TLSResponse),
            ],
        });
    }
    return _cached_decoder_for_IDM_PDU(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IDM_PDU */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IDM_PDU */
let _cached_encoder_for_IDM_PDU: $.ASN1Encoder<IDM_PDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IDM_PDU */

/* START_OF_SYMBOL_DEFINITION _encode_IDM_PDU */
/**
 * @summary Encodes a(n) IDM_PDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IDM_PDU, encoded as an ASN.1 Element.
 */
export function _encode_IDM_PDU(
    value: IDM_PDU,
    elGetter: $.ASN1Encoder<IDM_PDU>
) {
    if (!_cached_encoder_for_IDM_PDU) {
        _cached_encoder_for_IDM_PDU = $._encode_choice<IDM_PDU>(
            {
                bind: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_IdmBind,
                    $.BER
                ),
                bindResult: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_IdmBindResult,
                    $.BER
                ),
                bindError: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_IdmBindError,
                    $.BER
                ),
                request: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_Request,
                    $.BER
                ),
                result: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => _encode_IdmResult,
                    $.BER
                ),
                error: $._encode_explicit(
                    _TagClass.context,
                    5,
                    () => _encode_Error,
                    $.BER
                ),
                reject: $._encode_explicit(
                    _TagClass.context,
                    6,
                    () => _encode_IdmReject,
                    $.BER
                ),
                unbind: $._encode_explicit(
                    _TagClass.context,
                    7,
                    () => _encode_Unbind,
                    $.BER
                ),
                abort: $._encode_explicit(
                    _TagClass.context,
                    8,
                    () => _encode_Abort,
                    $.BER
                ),
                startTLS: $._encode_explicit(
                    _TagClass.context,
                    9,
                    () => _encode_StartTLS,
                    $.BER
                ),
                tLSResponse: $._encode_explicit(
                    _TagClass.context,
                    10,
                    () => _encode_TLSResponse,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_IDM_PDU(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IDM_PDU */

/* eslint-enable */
