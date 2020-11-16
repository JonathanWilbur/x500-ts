/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta";
import {
    TbsHandshakeProRej,
    _decode_TbsHandshakeProRej,
    _encode_TbsHandshakeProRej,
} from "../Wrapper/TbsHandshakeProRej.ta";
export {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta";
export {
    TbsHandshakeProRej,
    _decode_TbsHandshakeProRej,
    _encode_TbsHandshakeProRej,
} from "../Wrapper/TbsHandshakeProRej.ta";

/* START_OF_SYMBOL_DEFINITION HandshakeProRej */
/**
 * @summary HandshakeProRej
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HandshakeProRej  ::=  Signed{TbsHandshakeProRej}
 * ```
 */
export type HandshakeProRej = Signed<TbsHandshakeProRej>; // DefinedType
/* END_OF_SYMBOL_DEFINITION HandshakeProRej */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HandshakeProRej */
let _cached_decoder_for_HandshakeProRej: $.ASN1Decoder<
    HandshakeProRej
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HandshakeProRej */

/* START_OF_SYMBOL_DEFINITION _decode_HandshakeProRej */
/**
 * @summary Decodes an ASN.1 element into a(n) HandshakeProRej
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandshakeProRej} The decoded data structure.
 */
export function _decode_HandshakeProRej(el: _Element) {
    if (!_cached_decoder_for_HandshakeProRej) {
        _cached_decoder_for_HandshakeProRej = _get_decoder_for_Signed<
            TbsHandshakeProRej
        >(_decode_TbsHandshakeProRej);
    }
    return _cached_decoder_for_HandshakeProRej(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HandshakeProRej */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HandshakeProRej */
let _cached_encoder_for_HandshakeProRej: $.ASN1Encoder<
    HandshakeProRej
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HandshakeProRej */

/* START_OF_SYMBOL_DEFINITION _encode_HandshakeProRej */
/**
 * @summary Encodes a(n) HandshakeProRej into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandshakeProRej, encoded as an ASN.1 Element.
 */
export function _encode_HandshakeProRej(
    value: HandshakeProRej,
    elGetter: $.ASN1Encoder<HandshakeProRej>
) {
    if (!_cached_encoder_for_HandshakeProRej) {
        _cached_encoder_for_HandshakeProRej = _get_encoder_for_Signed<
            TbsHandshakeProRej
        >(_encode_TbsHandshakeProRej);
    }
    return _cached_encoder_for_HandshakeProRej(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HandshakeProRej */

/* eslint-enable */
