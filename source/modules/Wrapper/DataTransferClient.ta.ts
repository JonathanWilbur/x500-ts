/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DataTransferClientAE,
    _decode_DataTransferClientAE,
    _encode_DataTransferClientAE,
} from "../Wrapper/DataTransferClientAE.ta";
import {
    DataTransferClientNEA,
    _decode_DataTransferClientNEA,
    _encode_DataTransferClientNEA,
} from "../Wrapper/DataTransferClientNEA.ta";
export {
    DataTransferClientAE,
    _decode_DataTransferClientAE,
    _encode_DataTransferClientAE,
} from "../Wrapper/DataTransferClientAE.ta";
export {
    DataTransferClientNEA,
    _decode_DataTransferClientNEA,
    _encode_DataTransferClientNEA,
} from "../Wrapper/DataTransferClientNEA.ta";

/* START_OF_SYMBOL_DEFINITION DataTransferClient */
/**
 * @summary DataTransferClient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataTransferClient  ::=  CHOICE {
 *   aead     [0] DataTransferClientAE,
 *   non-aead [1] DataTransferClientNEA,
 *   ... }
 * ```
 */
export type DataTransferClient =
    | { aead: DataTransferClientAE } /* CHOICE_ALT_ROOT */
    | { non_aead: DataTransferClientNEA } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION DataTransferClient */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataTransferClient */
let _cached_decoder_for_DataTransferClient: $.ASN1Decoder<
    DataTransferClient
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataTransferClient */

/* START_OF_SYMBOL_DEFINITION _decode_DataTransferClient */
/**
 * @summary Decodes an ASN.1 element into a(n) DataTransferClient
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataTransferClient} The decoded data structure.
 */
export function _decode_DataTransferClient(el: _Element) {
    if (!_cached_decoder_for_DataTransferClient) {
        _cached_decoder_for_DataTransferClient = $._decode_extensible_choice<
            DataTransferClient
        >({
            "CONTEXT 0": [
                "aead",
                $._decode_implicit<DataTransferClientAE>(
                    () => _decode_DataTransferClientAE
                ),
            ],
            "CONTEXT 1": [
                "non_aead",
                $._decode_implicit<DataTransferClientNEA>(
                    () => _decode_DataTransferClientNEA
                ),
            ],
        });
    }
    return _cached_decoder_for_DataTransferClient(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DataTransferClient */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataTransferClient */
let _cached_encoder_for_DataTransferClient: $.ASN1Encoder<
    DataTransferClient
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataTransferClient */

/* START_OF_SYMBOL_DEFINITION _encode_DataTransferClient */
/**
 * @summary Encodes a(n) DataTransferClient into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataTransferClient, encoded as an ASN.1 Element.
 */
export function _encode_DataTransferClient(
    value: DataTransferClient,
    elGetter: $.ASN1Encoder<DataTransferClient>
) {
    if (!_cached_encoder_for_DataTransferClient) {
        _cached_encoder_for_DataTransferClient = $._encode_choice<
            DataTransferClient
        >(
            {
                aead: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_DataTransferClientAE,
                    $.BER
                ),
                non_aead: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_DataTransferClientNEA,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DataTransferClient(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DataTransferClient */

/* eslint-enable */
