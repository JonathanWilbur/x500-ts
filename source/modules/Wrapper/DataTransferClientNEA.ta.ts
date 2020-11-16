/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ICV_Invoke,
    _get_decoder_for_ICV_Invoke,
    _get_encoder_for_ICV_Invoke,
} from "../CryptoTools/ICV-Invoke.ta";
import {
    TbpDataTransferClient,
    _decode_TbpDataTransferClient,
    _encode_TbpDataTransferClient,
} from "../Wrapper/TbpDataTransferClient.ta";
export {
    ICV_Invoke,
    _get_decoder_for_ICV_Invoke,
    _get_encoder_for_ICV_Invoke,
} from "../CryptoTools/ICV-Invoke.ta";
export {
    TbpDataTransferClient,
    _decode_TbpDataTransferClient,
    _encode_TbpDataTransferClient,
} from "../Wrapper/TbpDataTransferClient.ta";

/* START_OF_SYMBOL_DEFINITION DataTransferClientNEA */
/**
 * @summary DataTransferClientNEA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataTransferClientNEA  ::=  ICV-Invoke{TbpDataTransferClient}
 * ```
 */
export type DataTransferClientNEA = ICV_Invoke<TbpDataTransferClient>; // DefinedType
/* END_OF_SYMBOL_DEFINITION DataTransferClientNEA */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataTransferClientNEA */
let _cached_decoder_for_DataTransferClientNEA: $.ASN1Decoder<
    DataTransferClientNEA
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataTransferClientNEA */

/* START_OF_SYMBOL_DEFINITION _decode_DataTransferClientNEA */
/**
 * @summary Decodes an ASN.1 element into a(n) DataTransferClientNEA
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataTransferClientNEA} The decoded data structure.
 */
export function _decode_DataTransferClientNEA(el: _Element) {
    if (!_cached_decoder_for_DataTransferClientNEA) {
        _cached_decoder_for_DataTransferClientNEA = _get_decoder_for_ICV_Invoke<
            TbpDataTransferClient
        >(_decode_TbpDataTransferClient);
    }
    return _cached_decoder_for_DataTransferClientNEA(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DataTransferClientNEA */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataTransferClientNEA */
let _cached_encoder_for_DataTransferClientNEA: $.ASN1Encoder<
    DataTransferClientNEA
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataTransferClientNEA */

/* START_OF_SYMBOL_DEFINITION _encode_DataTransferClientNEA */
/**
 * @summary Encodes a(n) DataTransferClientNEA into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataTransferClientNEA, encoded as an ASN.1 Element.
 */
export function _encode_DataTransferClientNEA(
    value: DataTransferClientNEA,
    elGetter: $.ASN1Encoder<DataTransferClientNEA>
) {
    if (!_cached_encoder_for_DataTransferClientNEA) {
        _cached_encoder_for_DataTransferClientNEA = _get_encoder_for_ICV_Invoke<
            TbpDataTransferClient
        >(_encode_TbpDataTransferClient);
    }
    return _cached_encoder_for_DataTransferClientNEA(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DataTransferClientNEA */

/* eslint-enable */
