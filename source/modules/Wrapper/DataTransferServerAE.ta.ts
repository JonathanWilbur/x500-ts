/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AUTHEN_ENCRYPT,
    _get_decoder_for_AUTHEN_ENCRYPT,
    _get_encoder_for_AUTHEN_ENCRYPT,
} from "../CryptoTools/AUTHEN-ENCRYPT.ta";
import {
    AadServerAE,
    _decode_AadServerAE,
    _encode_AadServerAE,
} from "../Wrapper/AadServerAE.ta";
export {
    AUTHEN_ENCRYPT,
    _get_decoder_for_AUTHEN_ENCRYPT,
    _get_encoder_for_AUTHEN_ENCRYPT,
} from "../CryptoTools/AUTHEN-ENCRYPT.ta";
export {
    AadServerAE,
    _decode_AadServerAE,
    _encode_AadServerAE,
} from "../Wrapper/AadServerAE.ta";
export { WRAPPED_PROT } from "../Wrapper/WRAPPED-PROT.oca";

/* START_OF_SYMBOL_DEFINITION DataTransferServerAE */
/**
 * @summary DataTransferServerAE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataTransferServerAE  ::=  AUTHEN-ENCRYPT{AadServerAE, WRAPPED-PROT.&Type}
 * ```
 */
export type DataTransferServerAE = AUTHEN_ENCRYPT<AadServerAE, _Element>; // DefinedType
/* END_OF_SYMBOL_DEFINITION DataTransferServerAE */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataTransferServerAE */
let _cached_decoder_for_DataTransferServerAE: $.ASN1Decoder<
    DataTransferServerAE
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataTransferServerAE */

/* START_OF_SYMBOL_DEFINITION _decode_DataTransferServerAE */
/**
 * @summary Decodes an ASN.1 element into a(n) DataTransferServerAE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataTransferServerAE} The decoded data structure.
 */
export function _decode_DataTransferServerAE(el: _Element) {
    if (!_cached_decoder_for_DataTransferServerAE) {
        _cached_decoder_for_DataTransferServerAE = _get_decoder_for_AUTHEN_ENCRYPT<
            AadServerAE,
            _Element
        >(_decode_AadServerAE, $._decodeAny);
    }
    return _cached_decoder_for_DataTransferServerAE(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DataTransferServerAE */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataTransferServerAE */
let _cached_encoder_for_DataTransferServerAE: $.ASN1Encoder<
    DataTransferServerAE
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataTransferServerAE */

/* START_OF_SYMBOL_DEFINITION _encode_DataTransferServerAE */
/**
 * @summary Encodes a(n) DataTransferServerAE into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataTransferServerAE, encoded as an ASN.1 Element.
 */
export function _encode_DataTransferServerAE(
    value: DataTransferServerAE,
    elGetter: $.ASN1Encoder<DataTransferServerAE>
) {
    if (!_cached_encoder_for_DataTransferServerAE) {
        _cached_encoder_for_DataTransferServerAE = _get_encoder_for_AUTHEN_ENCRYPT<
            AadServerAE,
            _Element
        >(_encode_AadServerAE, $._encodeAny);
    }
    return _cached_encoder_for_DataTransferServerAE(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DataTransferServerAE */

/* eslint-enable */
