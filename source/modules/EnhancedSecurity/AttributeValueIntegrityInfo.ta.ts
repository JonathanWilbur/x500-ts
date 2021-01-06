/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../AuthenticationFramework/SIGNED.ta";
import {
    AttributeValueIntegrityInfoContent,
    _decode_AttributeValueIntegrityInfoContent,
    _encode_AttributeValueIntegrityInfoContent,
} from "../EnhancedSecurity/AttributeValueIntegrityInfoContent.ta";
export {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../AuthenticationFramework/SIGNED.ta";
export {
    AttributeValueIntegrityInfoContent,
    _decode_AttributeValueIntegrityInfoContent,
    _encode_AttributeValueIntegrityInfoContent,
} from "../EnhancedSecurity/AttributeValueIntegrityInfoContent.ta";

/* START_OF_SYMBOL_DEFINITION AttributeValueIntegrityInfo */
/**
 * @summary AttributeValueIntegrityInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeValueIntegrityInfo  ::=  SIGNED{AttributeValueIntegrityInfoContent}
 * ```
 */
export type AttributeValueIntegrityInfo = SIGNED<AttributeValueIntegrityInfoContent>; // DefinedType
/* END_OF_SYMBOL_DEFINITION AttributeValueIntegrityInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValueIntegrityInfo */
let _cached_decoder_for_AttributeValueIntegrityInfo: $.ASN1Decoder<AttributeValueIntegrityInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValueIntegrityInfo */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeValueIntegrityInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueIntegrityInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValueIntegrityInfo} The decoded data structure.
 */
export function _decode_AttributeValueIntegrityInfo(el: _Element) {
    if (!_cached_decoder_for_AttributeValueIntegrityInfo) {
        _cached_decoder_for_AttributeValueIntegrityInfo = _get_decoder_for_SIGNED<AttributeValueIntegrityInfoContent>(
            _decode_AttributeValueIntegrityInfoContent
        );
    }
    return _cached_decoder_for_AttributeValueIntegrityInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeValueIntegrityInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValueIntegrityInfo */
let _cached_encoder_for_AttributeValueIntegrityInfo: $.ASN1Encoder<AttributeValueIntegrityInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValueIntegrityInfo */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeValueIntegrityInfo */
/**
 * @summary Encodes a(n) AttributeValueIntegrityInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueIntegrityInfo, encoded as an ASN.1 Element.
 */
export function _encode_AttributeValueIntegrityInfo(
    value: AttributeValueIntegrityInfo,
    elGetter: $.ASN1Encoder<AttributeValueIntegrityInfo>
) {
    if (!_cached_encoder_for_AttributeValueIntegrityInfo) {
        _cached_encoder_for_AttributeValueIntegrityInfo = _get_encoder_for_SIGNED<AttributeValueIntegrityInfoContent>(
            _encode_AttributeValueIntegrityInfoContent
        );
    }
    return _cached_encoder_for_AttributeValueIntegrityInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeValueIntegrityInfo */

/* eslint-enable */
