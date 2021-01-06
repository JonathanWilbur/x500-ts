/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../AuthenticationFramework/SIGNED.ta";
import {
    AttributeIntegrityInfoContent,
    _decode_AttributeIntegrityInfoContent,
    _encode_AttributeIntegrityInfoContent,
} from "../EnhancedSecurity/AttributeIntegrityInfoContent.ta";
export {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../AuthenticationFramework/SIGNED.ta";
export {
    AttributeIntegrityInfoContent,
    _decode_AttributeIntegrityInfoContent,
    _encode_AttributeIntegrityInfoContent,
} from "../EnhancedSecurity/AttributeIntegrityInfoContent.ta";

/* START_OF_SYMBOL_DEFINITION AttributeIntegrityInfo */
/**
 * @summary AttributeIntegrityInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeIntegrityInfo  ::=  SIGNED{AttributeIntegrityInfoContent}
 * ```
 */
export type AttributeIntegrityInfo = SIGNED<AttributeIntegrityInfoContent>; // DefinedType
/* END_OF_SYMBOL_DEFINITION AttributeIntegrityInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeIntegrityInfo */
let _cached_decoder_for_AttributeIntegrityInfo: $.ASN1Decoder<AttributeIntegrityInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeIntegrityInfo */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeIntegrityInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeIntegrityInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeIntegrityInfo} The decoded data structure.
 */
export function _decode_AttributeIntegrityInfo(el: _Element) {
    if (!_cached_decoder_for_AttributeIntegrityInfo) {
        _cached_decoder_for_AttributeIntegrityInfo = _get_decoder_for_SIGNED<AttributeIntegrityInfoContent>(
            _decode_AttributeIntegrityInfoContent
        );
    }
    return _cached_decoder_for_AttributeIntegrityInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeIntegrityInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeIntegrityInfo */
let _cached_encoder_for_AttributeIntegrityInfo: $.ASN1Encoder<AttributeIntegrityInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeIntegrityInfo */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeIntegrityInfo */
/**
 * @summary Encodes a(n) AttributeIntegrityInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeIntegrityInfo, encoded as an ASN.1 Element.
 */
export function _encode_AttributeIntegrityInfo(
    value: AttributeIntegrityInfo,
    elGetter: $.ASN1Encoder<AttributeIntegrityInfo>
) {
    if (!_cached_encoder_for_AttributeIntegrityInfo) {
        _cached_encoder_for_AttributeIntegrityInfo = _get_encoder_for_SIGNED<AttributeIntegrityInfoContent>(
            _encode_AttributeIntegrityInfoContent
        );
    }
    return _cached_encoder_for_AttributeIntegrityInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeIntegrityInfo */

/* eslint-enable */
