/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta";
import {
    TbsReleaseRsp,
    _decode_TbsReleaseRsp,
    _encode_TbsReleaseRsp,
} from "../Wrapper/TbsReleaseRsp.ta";
export {
    Signed,
    _get_decoder_for_Signed,
    _get_encoder_for_Signed,
} from "../CryptoTools/Signed.ta";
export {
    TbsReleaseRsp,
    _decode_TbsReleaseRsp,
    _encode_TbsReleaseRsp,
} from "../Wrapper/TbsReleaseRsp.ta";

/* START_OF_SYMBOL_DEFINITION ReleaseRsp */
/**
 * @summary ReleaseRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReleaseRsp  ::=  Signed{TbsReleaseRsp}
 * ```
 */
export type ReleaseRsp = Signed<TbsReleaseRsp>; // DefinedType
/* END_OF_SYMBOL_DEFINITION ReleaseRsp */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReleaseRsp */
let _cached_decoder_for_ReleaseRsp: $.ASN1Decoder<ReleaseRsp> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReleaseRsp */

/* START_OF_SYMBOL_DEFINITION _decode_ReleaseRsp */
/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseRsp
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReleaseRsp} The decoded data structure.
 */
export function _decode_ReleaseRsp(el: _Element) {
    if (!_cached_decoder_for_ReleaseRsp) {
        _cached_decoder_for_ReleaseRsp = _get_decoder_for_Signed<TbsReleaseRsp>(
            _decode_TbsReleaseRsp
        );
    }
    return _cached_decoder_for_ReleaseRsp(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReleaseRsp */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReleaseRsp */
let _cached_encoder_for_ReleaseRsp: $.ASN1Encoder<ReleaseRsp> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReleaseRsp */

/* START_OF_SYMBOL_DEFINITION _encode_ReleaseRsp */
/**
 * @summary Encodes a(n) ReleaseRsp into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseRsp, encoded as an ASN.1 Element.
 */
export function _encode_ReleaseRsp(
    value: ReleaseRsp,
    elGetter: $.ASN1Encoder<ReleaseRsp>
) {
    if (!_cached_encoder_for_ReleaseRsp) {
        _cached_encoder_for_ReleaseRsp = _get_encoder_for_Signed<TbsReleaseRsp>(
            _encode_TbsReleaseRsp
        );
    }
    return _cached_encoder_for_ReleaseRsp(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReleaseRsp */

/* eslint-enable */
