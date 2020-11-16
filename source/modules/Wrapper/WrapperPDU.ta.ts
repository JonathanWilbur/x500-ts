/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ApplAbort } from "../Wrapper/ApplAbort.ta";
import {
    DataTransferClient,
    _decode_DataTransferClient,
    _encode_DataTransferClient,
} from "../Wrapper/DataTransferClient.ta";
import {
    DataTransferServer,
    _decode_DataTransferServer,
    _encode_DataTransferServer,
} from "../Wrapper/DataTransferServer.ta";
import { DtSecAbort } from "../Wrapper/DtSecAbort.ta";
import { HandshakeAcc } from "../Wrapper/HandshakeAcc.ta";
import { HandshakeProAbort } from "../Wrapper/HandshakeProAbort.ta";
import { HandshakeProRej } from "../Wrapper/HandshakeProRej.ta";
import { HandshakeReq } from "../Wrapper/HandshakeReq.ta";
import { HandshakeSecAbort } from "../Wrapper/HandshakeSecAbort.ta";
import { HandshakeWrpRej } from "../Wrapper/HandshakeWrpRej.ta";
import { ReleaseReq } from "../Wrapper/ReleaseReq.ta";
import { ReleaseRsp } from "../Wrapper/ReleaseRsp.ta";
export {
    ApplAbort,
    _get_decoder_for_ApplAbort,
    _get_encoder_for_ApplAbort,
} from "../Wrapper/ApplAbort.ta";
export {
    DataTransferClient,
    _decode_DataTransferClient,
    _encode_DataTransferClient,
} from "../Wrapper/DataTransferClient.ta";
export {
    DataTransferServer,
    _decode_DataTransferServer,
    _encode_DataTransferServer,
} from "../Wrapper/DataTransferServer.ta";
export {
    DtSecAbort,
    _get_decoder_for_DtSecAbort,
    _get_encoder_for_DtSecAbort,
} from "../Wrapper/DtSecAbort.ta";
export {
    HandshakeAcc,
    _get_decoder_for_HandshakeAcc,
    _get_encoder_for_HandshakeAcc,
} from "../Wrapper/HandshakeAcc.ta";
export {
    HandshakeProAbort,
    _get_decoder_for_HandshakeProAbort,
    _get_encoder_for_HandshakeProAbort,
} from "../Wrapper/HandshakeProAbort.ta";
export {
    HandshakeProRej,
    _get_decoder_for_HandshakeProRej,
    _get_encoder_for_HandshakeProRej,
} from "../Wrapper/HandshakeProRej.ta";
export {
    HandshakeReq,
    _get_decoder_for_HandshakeReq,
    _get_encoder_for_HandshakeReq,
} from "../Wrapper/HandshakeReq.ta";
export {
    HandshakeSecAbort,
    _get_decoder_for_HandshakeSecAbort,
    _get_encoder_for_HandshakeSecAbort,
} from "../Wrapper/HandshakeSecAbort.ta";
export {
    HandshakeWrpRej,
    _get_decoder_for_HandshakeWrpRej,
    _get_encoder_for_HandshakeWrpRej,
} from "../Wrapper/HandshakeWrpRej.ta";
export {
    ReleaseReq,
    _get_decoder_for_ReleaseReq,
    _get_encoder_for_ReleaseReq,
} from "../Wrapper/ReleaseReq.ta";
export {
    ReleaseRsp,
    _get_decoder_for_ReleaseRsp,
    _get_encoder_for_ReleaseRsp,
} from "../Wrapper/ReleaseRsp.ta";

/* START_OF_SYMBOL_DEFINITION WrapperPDU */
/**
 * @summary WrapperPDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WrapperPDU  ::=  CHOICE {
 *   handshakeReq       [0]  HandshakeReq,
 *   handshakeAcc       [1]  HandshakeAcc,
 *   handshakeWrpRej    [2]  HandshakeWrpRej,
 *   handshakeProRej    [3]  HandshakeProRej,
 *   handshakeSecAbort  [4]  HandshakeSecAbort,
 *   handshakeProAbort  [5]  HandshakeProAbort,
 *   dtSecAbort         [6]  DtSecAbort,
 *   applAbort          [7]  ApplAbort,
 *   releaseReq         [8]  ReleaseReq,
 *   releaseRsp         [9]  ReleaseRsp,
 *   dataTransferClient [10] DataTransferClient,
 *   dataTransferServer [11] DataTransferServer,
 *   ... }
 * ```
 */
export type WrapperPDU =
    | { handshakeReq: HandshakeReq } /* CHOICE_ALT_ROOT */
    | { handshakeAcc: HandshakeAcc } /* CHOICE_ALT_ROOT */
    | { handshakeWrpRej: HandshakeWrpRej } /* CHOICE_ALT_ROOT */
    | { handshakeProRej: HandshakeProRej } /* CHOICE_ALT_ROOT */
    | { handshakeSecAbort: HandshakeSecAbort } /* CHOICE_ALT_ROOT */
    | { handshakeProAbort: HandshakeProAbort } /* CHOICE_ALT_ROOT */
    | { dtSecAbort: DtSecAbort } /* CHOICE_ALT_ROOT */
    | { applAbort: ApplAbort } /* CHOICE_ALT_ROOT */
    | { releaseReq: ReleaseReq } /* CHOICE_ALT_ROOT */
    | { releaseRsp: ReleaseRsp } /* CHOICE_ALT_ROOT */
    | { dataTransferClient: DataTransferClient } /* CHOICE_ALT_ROOT */
    | { dataTransferServer: DataTransferServer } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION WrapperPDU */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_WrapperPDU */
let _cached_decoder_for_WrapperPDU: $.ASN1Decoder<WrapperPDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_WrapperPDU */

/* START_OF_SYMBOL_DEFINITION _decode_WrapperPDU */
/**
 * @summary Decodes an ASN.1 element into a(n) WrapperPDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {WrapperPDU} The decoded data structure.
 */
export function _decode_WrapperPDU(el: _Element) {
    if (!_cached_decoder_for_WrapperPDU) {
        _cached_decoder_for_WrapperPDU = $._decode_extensible_choice<
            WrapperPDU
        >({
            "CONTEXT 0": [
                "handshakeReq",
                $._decode_implicit<HandshakeReq>(() => _decode_HandshakeReq),
            ],
            "CONTEXT 1": [
                "handshakeAcc",
                $._decode_implicit<HandshakeAcc>(() => _decode_HandshakeAcc),
            ],
            "CONTEXT 2": [
                "handshakeWrpRej",
                $._decode_implicit<HandshakeWrpRej>(
                    () => _decode_HandshakeWrpRej
                ),
            ],
            "CONTEXT 3": [
                "handshakeProRej",
                $._decode_implicit<HandshakeProRej>(
                    () => _decode_HandshakeProRej
                ),
            ],
            "CONTEXT 4": [
                "handshakeSecAbort",
                $._decode_implicit<HandshakeSecAbort>(
                    () => _decode_HandshakeSecAbort
                ),
            ],
            "CONTEXT 5": [
                "handshakeProAbort",
                $._decode_implicit<HandshakeProAbort>(
                    () => _decode_HandshakeProAbort
                ),
            ],
            "CONTEXT 6": [
                "dtSecAbort",
                $._decode_implicit<DtSecAbort>(() => _decode_DtSecAbort),
            ],
            "CONTEXT 7": [
                "applAbort",
                $._decode_implicit<ApplAbort>(() => _decode_ApplAbort),
            ],
            "CONTEXT 8": [
                "releaseReq",
                $._decode_implicit<ReleaseReq>(() => _decode_ReleaseReq),
            ],
            "CONTEXT 9": [
                "releaseRsp",
                $._decode_implicit<ReleaseRsp>(() => _decode_ReleaseRsp),
            ],
            "CONTEXT 10": [
                "dataTransferClient",
                $._decode_implicit<DataTransferClient>(
                    () => _decode_DataTransferClient
                ),
            ],
            "CONTEXT 11": [
                "dataTransferServer",
                $._decode_implicit<DataTransferServer>(
                    () => _decode_DataTransferServer
                ),
            ],
        });
    }
    return _cached_decoder_for_WrapperPDU(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_WrapperPDU */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_WrapperPDU */
let _cached_encoder_for_WrapperPDU: $.ASN1Encoder<WrapperPDU> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_WrapperPDU */

/* START_OF_SYMBOL_DEFINITION _encode_WrapperPDU */
/**
 * @summary Encodes a(n) WrapperPDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WrapperPDU, encoded as an ASN.1 Element.
 */
export function _encode_WrapperPDU(
    value: WrapperPDU,
    elGetter: $.ASN1Encoder<WrapperPDU>
) {
    if (!_cached_encoder_for_WrapperPDU) {
        _cached_encoder_for_WrapperPDU = $._encode_choice<WrapperPDU>(
            {
                handshakeReq: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_HandshakeReq,
                    $.BER
                ),
                handshakeAcc: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_HandshakeAcc,
                    $.BER
                ),
                handshakeWrpRej: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_HandshakeWrpRej,
                    $.BER
                ),
                handshakeProRej: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_HandshakeProRej,
                    $.BER
                ),
                handshakeSecAbort: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_HandshakeSecAbort,
                    $.BER
                ),
                handshakeProAbort: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_HandshakeProAbort,
                    $.BER
                ),
                dtSecAbort: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => _encode_DtSecAbort,
                    $.BER
                ),
                applAbort: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () => _encode_ApplAbort,
                    $.BER
                ),
                releaseReq: $._encode_implicit(
                    _TagClass.context,
                    8,
                    () => _encode_ReleaseReq,
                    $.BER
                ),
                releaseRsp: $._encode_implicit(
                    _TagClass.context,
                    9,
                    () => _encode_ReleaseRsp,
                    $.BER
                ),
                dataTransferClient: $._encode_implicit(
                    _TagClass.context,
                    10,
                    () => _encode_DataTransferClient,
                    $.BER
                ),
                dataTransferServer: $._encode_implicit(
                    _TagClass.context,
                    11,
                    () => _encode_DataTransferServer,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_WrapperPDU(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_WrapperPDU */

/* eslint-enable */
