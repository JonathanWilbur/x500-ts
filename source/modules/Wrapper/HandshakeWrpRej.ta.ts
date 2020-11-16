/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta";
import {
    TbsHandshakeWrpRej,
    _decode_TbsHandshakeWrpRej,
    _encode_TbsHandshakeWrpRej,
} from "../Wrapper/TbsHandshakeWrpRej.ta";
export {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta";
export {
    TbsHandshakeWrpRej,
    _decode_TbsHandshakeWrpRej,
    _encode_TbsHandshakeWrpRej,
} from "../Wrapper/TbsHandshakeWrpRej.ta";

/* START_OF_SYMBOL_DEFINITION HandshakeWrpRej */
/**
 * @summary HandshakeWrpRej
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HandshakeWrpRej  ::=  Signed{TbsHandshakeWrpRej}
 * ```
 */
export type HandshakeWrpRej = Signed<TbsHandshakeWrpRej>; // DefinedType
/* END_OF_SYMBOL_DEFINITION HandshakeWrpRej */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HandshakeWrpRej */
let _cached_decoder_for_HandshakeWrpRej: $.ASN1Decoder<
    HandshakeWrpRej
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HandshakeWrpRej */

/* START_OF_SYMBOL_DEFINITION _decode_HandshakeWrpRej */
/**
 * @summary Decodes an ASN.1 element into a(n) HandshakeWrpRej
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandshakeWrpRej} The decoded data structure.
 */
export function _decode_HandshakeWrpRej(el: _Element) {
    if (!_cached_decoder_for_HandshakeWrpRej) {
        _cached_decoder_for_HandshakeWrpRej = _get_decoder_for_Signed<
            TbsHandshakeWrpRej
        >(_decode_TbsHandshakeWrpRej);
    }
    return _cached_decoder_for_HandshakeWrpRej(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HandshakeWrpRej */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HandshakeWrpRej */
let _cached_encoder_for_HandshakeWrpRej: $.ASN1Encoder<
    HandshakeWrpRej
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HandshakeWrpRej */

/* START_OF_SYMBOL_DEFINITION _encode_HandshakeWrpRej */
/**
 * @summary Encodes a(n) HandshakeWrpRej into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandshakeWrpRej, encoded as an ASN.1 Element.
 */
export function _encode_HandshakeWrpRej(
    value: HandshakeWrpRej,
    elGetter: $.ASN1Encoder<HandshakeWrpRej>
) {
    if (!_cached_encoder_for_HandshakeWrpRej) {
        _cached_encoder_for_HandshakeWrpRej = _get_encoder_for_Signed<
            TbsHandshakeWrpRej
        >(_encode_TbsHandshakeWrpRej);
    }
    return _cached_encoder_for_HandshakeWrpRej(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HandshakeWrpRej */

/* eslint-enable */
