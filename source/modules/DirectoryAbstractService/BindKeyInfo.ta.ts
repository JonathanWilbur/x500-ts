/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ENCRYPTED,
    _get_decoder_for_ENCRYPTED,
    _get_encoder_for_ENCRYPTED,
} from "../AuthenticationFramework/ENCRYPTED.ta";
export {
    ENCRYPTED,
    _get_decoder_for_ENCRYPTED,
    _get_encoder_for_ENCRYPTED,
} from "../AuthenticationFramework/ENCRYPTED.ta";

/* START_OF_SYMBOL_DEFINITION BindKeyInfo */
/**
 * @summary BindKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BindKeyInfo  ::=  ENCRYPTED{BIT STRING}
 * ```
 */
export type BindKeyInfo = ENCRYPTED<BIT_STRING>; // DefinedType
/* END_OF_SYMBOL_DEFINITION BindKeyInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BindKeyInfo */
let _cached_decoder_for_BindKeyInfo: $.ASN1Decoder<BindKeyInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BindKeyInfo */

/* START_OF_SYMBOL_DEFINITION _decode_BindKeyInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) BindKeyInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BindKeyInfo} The decoded data structure.
 */
export function _decode_BindKeyInfo(el: _Element) {
    if (!_cached_decoder_for_BindKeyInfo) {
        _cached_decoder_for_BindKeyInfo = _get_decoder_for_ENCRYPTED<
            BIT_STRING
        >($._decodeBitString);
    }
    return _cached_decoder_for_BindKeyInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BindKeyInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BindKeyInfo */
let _cached_encoder_for_BindKeyInfo: $.ASN1Encoder<BindKeyInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BindKeyInfo */

/* START_OF_SYMBOL_DEFINITION _encode_BindKeyInfo */
/**
 * @summary Encodes a(n) BindKeyInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BindKeyInfo, encoded as an ASN.1 Element.
 */
export function _encode_BindKeyInfo(
    value: BindKeyInfo,
    elGetter: $.ASN1Encoder<BindKeyInfo>
) {
    if (!_cached_encoder_for_BindKeyInfo) {
        _cached_encoder_for_BindKeyInfo = _get_encoder_for_ENCRYPTED<
            BIT_STRING
        >($._encodeBitString);
    }
    return _cached_encoder_for_BindKeyInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BindKeyInfo */

/* eslint-enable */
