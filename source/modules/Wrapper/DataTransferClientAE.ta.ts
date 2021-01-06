/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AUTHEN_ENCRYPT,
    _get_decoder_for_AUTHEN_ENCRYPT,
    _get_encoder_for_AUTHEN_ENCRYPT,
} from "../CryptoTools/AUTHEN-ENCRYPT.ta";
import {
    AadClientAE,
    _decode_AadClientAE,
    _encode_AadClientAE,
} from "../Wrapper/AadClientAE.ta";
export {
    AUTHEN_ENCRYPT,
    _get_decoder_for_AUTHEN_ENCRYPT,
    _get_encoder_for_AUTHEN_ENCRYPT,
} from "../CryptoTools/AUTHEN-ENCRYPT.ta";
export {
    AadClientAE,
    _decode_AadClientAE,
    _encode_AadClientAE,
} from "../Wrapper/AadClientAE.ta";
export { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca";

/* START_OF_SYMBOL_DEFINITION DataTransferClientAE */
/**
 * @summary DataTransferClientAE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataTransferClientAE  ::=  AUTHEN-ENCRYPT{AadClientAE, WRAPPED-PROT.&Type}
 * ```
 */
export type DataTransferClientAE = AUTHEN_ENCRYPT<AadClientAE, _Element>; // DefinedType
/* END_OF_SYMBOL_DEFINITION DataTransferClientAE */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataTransferClientAE */
let _cached_decoder_for_DataTransferClientAE: $.ASN1Decoder<DataTransferClientAE> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataTransferClientAE */

/* START_OF_SYMBOL_DEFINITION _decode_DataTransferClientAE */
/**
 * @summary Decodes an ASN.1 element into a(n) DataTransferClientAE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataTransferClientAE} The decoded data structure.
 */
export function _decode_DataTransferClientAE(el: _Element) {
    if (!_cached_decoder_for_DataTransferClientAE) {
        _cached_decoder_for_DataTransferClientAE = _get_decoder_for_AUTHEN_ENCRYPT<
            AadClientAE,
            _Element
        >(_decode_AadClientAE, $._decodeAny);
    }
    return _cached_decoder_for_DataTransferClientAE(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DataTransferClientAE */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataTransferClientAE */
let _cached_encoder_for_DataTransferClientAE: $.ASN1Encoder<DataTransferClientAE> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataTransferClientAE */

/* START_OF_SYMBOL_DEFINITION _encode_DataTransferClientAE */
/**
 * @summary Encodes a(n) DataTransferClientAE into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataTransferClientAE, encoded as an ASN.1 Element.
 */
export function _encode_DataTransferClientAE(
    value: DataTransferClientAE,
    elGetter: $.ASN1Encoder<DataTransferClientAE>
) {
    if (!_cached_encoder_for_DataTransferClientAE) {
        _cached_encoder_for_DataTransferClientAE = _get_encoder_for_AUTHEN_ENCRYPT<
            AadClientAE,
            _Element
        >(_encode_AadClientAE, $._encodeAny);
    }
    return _cached_encoder_for_DataTransferClientAE(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DataTransferClientAE */

/* eslint-enable */
