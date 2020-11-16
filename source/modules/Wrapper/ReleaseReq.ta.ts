/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta";
import {
    TbsReleaseReq,
    _decode_TbsReleaseReq,
    _encode_TbsReleaseReq,
} from "../Wrapper/TbsReleaseReq.ta";
export {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta";
export {
    TbsReleaseReq,
    _decode_TbsReleaseReq,
    _encode_TbsReleaseReq,
} from "../Wrapper/TbsReleaseReq.ta";

/* START_OF_SYMBOL_DEFINITION ReleaseReq */
/**
 * @summary ReleaseReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReleaseReq  ::=  Signed{TbsReleaseReq}
 * ```
 */
export type ReleaseReq = Signed<TbsReleaseReq>; // DefinedType
/* END_OF_SYMBOL_DEFINITION ReleaseReq */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReleaseReq */
let _cached_decoder_for_ReleaseReq: $.ASN1Decoder<ReleaseReq> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReleaseReq */

/* START_OF_SYMBOL_DEFINITION _decode_ReleaseReq */
/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReleaseReq} The decoded data structure.
 */
export function _decode_ReleaseReq(el: _Element) {
    if (!_cached_decoder_for_ReleaseReq) {
        _cached_decoder_for_ReleaseReq = _get_decoder_for_Signed<TbsReleaseReq>(
            _decode_TbsReleaseReq
        );
    }
    return _cached_decoder_for_ReleaseReq(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReleaseReq */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReleaseReq */
let _cached_encoder_for_ReleaseReq: $.ASN1Encoder<ReleaseReq> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReleaseReq */

/* START_OF_SYMBOL_DEFINITION _encode_ReleaseReq */
/**
 * @summary Encodes a(n) ReleaseReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseReq, encoded as an ASN.1 Element.
 */
export function _encode_ReleaseReq(
    value: ReleaseReq,
    elGetter: $.ASN1Encoder<ReleaseReq>
) {
    if (!_cached_encoder_for_ReleaseReq) {
        _cached_encoder_for_ReleaseReq = _get_encoder_for_Signed<TbsReleaseReq>(
            _encode_TbsReleaseReq
        );
    }
    return _cached_encoder_for_ReleaseReq(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReleaseReq */

/* eslint-enable */
