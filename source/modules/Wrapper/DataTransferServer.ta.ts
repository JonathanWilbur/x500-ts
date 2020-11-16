/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { DataTransferServerAE } from "../Wrapper/DataTransferServerAE.ta";
import { DataTransferServerNEA } from "../Wrapper/DataTransferServerNEA.ta";
export {
    DataTransferServerAE,
    _get_decoder_for_DataTransferServerAE,
    _get_encoder_for_DataTransferServerAE,
} from "../Wrapper/DataTransferServerAE.ta";
export {
    DataTransferServerNEA,
    _get_decoder_for_DataTransferServerNEA,
    _get_encoder_for_DataTransferServerNEA,
} from "../Wrapper/DataTransferServerNEA.ta";

/* START_OF_SYMBOL_DEFINITION DataTransferServer */
/**
 * @summary DataTransferServer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataTransferServer  ::=  CHOICE {
 *   aead     [0] DataTransferServerAE,
 *   non-aead [1] DataTransferServerNEA,
 *   ... }
 * ```
 */
export type DataTransferServer =
    | { aead: DataTransferServerAE } /* CHOICE_ALT_ROOT */
    | { non_aead: DataTransferServerNEA } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION DataTransferServer */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataTransferServer */
let _cached_decoder_for_DataTransferServer: $.ASN1Decoder<
    DataTransferServer
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataTransferServer */

/* START_OF_SYMBOL_DEFINITION _decode_DataTransferServer */
/**
 * @summary Decodes an ASN.1 element into a(n) DataTransferServer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataTransferServer} The decoded data structure.
 */
export function _decode_DataTransferServer(el: _Element) {
    if (!_cached_decoder_for_DataTransferServer) {
        _cached_decoder_for_DataTransferServer = $._decode_extensible_choice<
            DataTransferServer
        >({
            "CONTEXT 0": [
                "aead",
                $._decode_implicit<DataTransferServerAE>(
                    () => _decode_DataTransferServerAE
                ),
            ],
            "CONTEXT 1": [
                "non_aead",
                $._decode_implicit<DataTransferServerNEA>(
                    () => _decode_DataTransferServerNEA
                ),
            ],
        });
    }
    return _cached_decoder_for_DataTransferServer(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DataTransferServer */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataTransferServer */
let _cached_encoder_for_DataTransferServer: $.ASN1Encoder<
    DataTransferServer
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataTransferServer */

/* START_OF_SYMBOL_DEFINITION _encode_DataTransferServer */
/**
 * @summary Encodes a(n) DataTransferServer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataTransferServer, encoded as an ASN.1 Element.
 */
export function _encode_DataTransferServer(
    value: DataTransferServer,
    elGetter: $.ASN1Encoder<DataTransferServer>
) {
    if (!_cached_encoder_for_DataTransferServer) {
        _cached_encoder_for_DataTransferServer = $._encode_choice<
            DataTransferServer
        >(
            {
                aead: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_DataTransferServerAE,
                    $.BER
                ),
                non_aead: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_DataTransferServerNEA,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_DataTransferServer(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DataTransferServer */

/* eslint-enable */
