/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta";
import {
    TbsHandshakeSecAbort,
    _decode_TbsHandshakeSecAbort,
    _encode_TbsHandshakeSecAbort,
} from "../Wrapper/TbsHandshakeSecAbort.ta";
export {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta";
export {
    TbsHandshakeSecAbort,
    _decode_TbsHandshakeSecAbort,
    _encode_TbsHandshakeSecAbort,
} from "../Wrapper/TbsHandshakeSecAbort.ta";

/* START_OF_SYMBOL_DEFINITION HandshakeSecAbort */
/**
 * @summary HandshakeSecAbort
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HandshakeSecAbort  ::=  Signed{TbsHandshakeSecAbort}
 * ```
 */
export type HandshakeSecAbort = Signed<TbsHandshakeSecAbort>; // DefinedType
/* END_OF_SYMBOL_DEFINITION HandshakeSecAbort */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HandshakeSecAbort */
let _cached_decoder_for_HandshakeSecAbort: $.ASN1Decoder<HandshakeSecAbort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HandshakeSecAbort */

/* START_OF_SYMBOL_DEFINITION _decode_HandshakeSecAbort */
/**
 * @summary Decodes an ASN.1 element into a(n) HandshakeSecAbort
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandshakeSecAbort} The decoded data structure.
 */
export function _decode_HandshakeSecAbort(el: _Element) {
    if (!_cached_decoder_for_HandshakeSecAbort) {
        _cached_decoder_for_HandshakeSecAbort = _get_decoder_for_Signed<TbsHandshakeSecAbort>(
            _decode_TbsHandshakeSecAbort
        );
    }
    return _cached_decoder_for_HandshakeSecAbort(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HandshakeSecAbort */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HandshakeSecAbort */
let _cached_encoder_for_HandshakeSecAbort: $.ASN1Encoder<HandshakeSecAbort> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HandshakeSecAbort */

/* START_OF_SYMBOL_DEFINITION _encode_HandshakeSecAbort */
/**
 * @summary Encodes a(n) HandshakeSecAbort into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandshakeSecAbort, encoded as an ASN.1 Element.
 */
export function _encode_HandshakeSecAbort(
    value: HandshakeSecAbort,
    elGetter: $.ASN1Encoder<HandshakeSecAbort>
) {
    if (!_cached_encoder_for_HandshakeSecAbort) {
        _cached_encoder_for_HandshakeSecAbort = _get_encoder_for_Signed<TbsHandshakeSecAbort>(
            _encode_TbsHandshakeSecAbort
        );
    }
    return _cached_encoder_for_HandshakeSecAbort(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HandshakeSecAbort */

/* eslint-enable */
