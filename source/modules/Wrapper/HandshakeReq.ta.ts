/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta";
import {
    TbsHandshakeReq,
    _decode_TbsHandshakeReq,
    _encode_TbsHandshakeReq,
} from "../Wrapper/TbsHandshakeReq.ta";
export {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta";
export {
    TbsHandshakeReq,
    _decode_TbsHandshakeReq,
    _encode_TbsHandshakeReq,
} from "../Wrapper/TbsHandshakeReq.ta";

/* START_OF_SYMBOL_DEFINITION HandshakeReq */
/**
 * @summary HandshakeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HandshakeReq  ::=  Signed{TbsHandshakeReq}
 * ```
 */
export type HandshakeReq = Signed<TbsHandshakeReq>; // DefinedType
/* END_OF_SYMBOL_DEFINITION HandshakeReq */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HandshakeReq */
let _cached_decoder_for_HandshakeReq: $.ASN1Decoder<HandshakeReq> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HandshakeReq */

/* START_OF_SYMBOL_DEFINITION _decode_HandshakeReq */
/**
 * @summary Decodes an ASN.1 element into a(n) HandshakeReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandshakeReq} The decoded data structure.
 */
export function _decode_HandshakeReq(el: _Element) {
    if (!_cached_decoder_for_HandshakeReq) {
        _cached_decoder_for_HandshakeReq = _get_decoder_for_Signed<
            TbsHandshakeReq
        >(_decode_TbsHandshakeReq);
    }
    return _cached_decoder_for_HandshakeReq(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HandshakeReq */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HandshakeReq */
let _cached_encoder_for_HandshakeReq: $.ASN1Encoder<HandshakeReq> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HandshakeReq */

/* START_OF_SYMBOL_DEFINITION _encode_HandshakeReq */
/**
 * @summary Encodes a(n) HandshakeReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandshakeReq, encoded as an ASN.1 Element.
 */
export function _encode_HandshakeReq(
    value: HandshakeReq,
    elGetter: $.ASN1Encoder<HandshakeReq>
) {
    if (!_cached_encoder_for_HandshakeReq) {
        _cached_encoder_for_HandshakeReq = _get_encoder_for_Signed<
            TbsHandshakeReq
        >(_encode_TbsHandshakeReq);
    }
    return _cached_encoder_for_HandshakeReq(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HandshakeReq */

/* eslint-enable */
