/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    InitializationAbort,
    _decode_InitializationAbort,
    _encode_InitializationAbort,
} from "../TrustBroker/InitializationAbort.ta";
import {
    InitializationAcc,
    _decode_InitializationAcc,
    _encode_InitializationAcc,
} from "../TrustBroker/InitializationAcc.ta";
import {
    InitializationRej,
    _decode_InitializationRej,
    _encode_InitializationRej,
} from "../TrustBroker/InitializationRej.ta";
import {
    InitializationReq,
    _decode_InitializationReq,
    _encode_InitializationReq,
} from "../TrustBroker/InitializationReq.ta";
import {
    TBrequest,
    _decode_TBrequest,
    _encode_TBrequest,
} from "../TrustBroker/TBrequest.ta";
import {
    TBresponse,
    _decode_TBresponse,
    _encode_TBresponse,
} from "../TrustBroker/TBresponse.ta";
export {
    InitializationAbort,
    _decode_InitializationAbort,
    _encode_InitializationAbort,
} from "../TrustBroker/InitializationAbort.ta";
export {
    InitializationAcc,
    _decode_InitializationAcc,
    _encode_InitializationAcc,
} from "../TrustBroker/InitializationAcc.ta";
export {
    InitializationRej,
    _decode_InitializationRej,
    _encode_InitializationRej,
} from "../TrustBroker/InitializationRej.ta";
export {
    InitializationReq,
    _decode_InitializationReq,
    _encode_InitializationReq,
} from "../TrustBroker/InitializationReq.ta";
export {
    TBrequest,
    _decode_TBrequest,
    _encode_TBrequest,
} from "../TrustBroker/TBrequest.ta";
export {
    TBresponse,
    _decode_TBresponse,
    _encode_TBresponse,
} from "../TrustBroker/TBresponse.ta";

/* START_OF_SYMBOL_DEFINITION TBprot */
/**
 * @summary TBprot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBprot  ::=  CHOICE {
 *   initReq     [0] InitializationReq,
 *   initAcc     [1] InitializationAcc,
 *   initRej     [2] InitializationRej,
 *   initAbt     [3] InitializationAbort,
 *   tBrequest   [4] TBrequest,
 *   tBresponse  [5] TBresponse,
 *   ... }
 * ```
 */
export type TBprot =
    | { initReq: InitializationReq } /* CHOICE_ALT_ROOT */
    | { initAcc: InitializationAcc } /* CHOICE_ALT_ROOT */
    | { initRej: InitializationRej } /* CHOICE_ALT_ROOT */
    | { initAbt: InitializationAbort } /* CHOICE_ALT_ROOT */
    | { tBrequest: TBrequest } /* CHOICE_ALT_ROOT */
    | { tBresponse: TBresponse } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION TBprot */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TBprot */
let _cached_decoder_for_TBprot: $.ASN1Decoder<TBprot> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TBprot */

/* START_OF_SYMBOL_DEFINITION _decode_TBprot */
/**
 * @summary Decodes an ASN.1 element into a(n) TBprot
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBprot} The decoded data structure.
 */
export function _decode_TBprot(el: _Element) {
    if (!_cached_decoder_for_TBprot) {
        _cached_decoder_for_TBprot = $._decode_extensible_choice<TBprot>({
            "CONTEXT 0": [
                "initReq",
                $._decode_implicit<InitializationReq>(
                    () => _decode_InitializationReq
                ),
            ],
            "CONTEXT 1": [
                "initAcc",
                $._decode_implicit<InitializationAcc>(
                    () => _decode_InitializationAcc
                ),
            ],
            "CONTEXT 2": [
                "initRej",
                $._decode_implicit<InitializationRej>(
                    () => _decode_InitializationRej
                ),
            ],
            "CONTEXT 3": [
                "initAbt",
                $._decode_implicit<InitializationAbort>(
                    () => _decode_InitializationAbort
                ),
            ],
            "CONTEXT 4": [
                "tBrequest",
                $._decode_implicit<TBrequest>(() => _decode_TBrequest),
            ],
            "CONTEXT 5": [
                "tBresponse",
                $._decode_implicit<TBresponse>(() => _decode_TBresponse),
            ],
        });
    }
    return _cached_decoder_for_TBprot(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TBprot */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TBprot */
let _cached_encoder_for_TBprot: $.ASN1Encoder<TBprot> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TBprot */

/* START_OF_SYMBOL_DEFINITION _encode_TBprot */
/**
 * @summary Encodes a(n) TBprot into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBprot, encoded as an ASN.1 Element.
 */
export function _encode_TBprot(value: TBprot, elGetter: $.ASN1Encoder<TBprot>) {
    if (!_cached_encoder_for_TBprot) {
        _cached_encoder_for_TBprot = $._encode_choice<TBprot>(
            {
                initReq: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_InitializationReq,
                    $.BER
                ),
                initAcc: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_InitializationAcc,
                    $.BER
                ),
                initRej: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_InitializationRej,
                    $.BER
                ),
                initAbt: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_InitializationAbort,
                    $.BER
                ),
                tBrequest: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_TBrequest,
                    $.BER
                ),
                tBresponse: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_TBresponse,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_TBprot(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TBprot */

/* eslint-enable */
