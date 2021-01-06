/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION AttributeType */
/**
 * @summary AttributeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeType  ::=  ATTRIBUTE.&id
 * ```
 */
export type AttributeType = OBJECT_IDENTIFIER; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION AttributeType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeType */
let _cached_decoder_for_AttributeType: $.ASN1Decoder<AttributeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeType */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeType */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeType} The decoded data structure.
 */
export function _decode_AttributeType(el: _Element) {
    if (!_cached_decoder_for_AttributeType) {
        _cached_decoder_for_AttributeType = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_AttributeType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeType */
let _cached_encoder_for_AttributeType: $.ASN1Encoder<AttributeType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeType */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeType */
/**
 * @summary Encodes a(n) AttributeType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeType, encoded as an ASN.1 Element.
 */
export function _encode_AttributeType(
    value: AttributeType,
    elGetter: $.ASN1Encoder<AttributeType>
) {
    if (!_cached_encoder_for_AttributeType) {
        _cached_encoder_for_AttributeType = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_AttributeType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeType */

/* eslint-enable */
