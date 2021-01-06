/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeTypeAndValue,
    _decode_AttributeTypeAndValue,
    _encode_AttributeTypeAndValue,
} from "../InformationFramework/AttributeTypeAndValue.ta";
export {
    AttributeTypeAndValue,
    _decode_AttributeTypeAndValue,
    _encode_AttributeTypeAndValue,
} from "../InformationFramework/AttributeTypeAndValue.ta";

/* START_OF_SYMBOL_DEFINITION RelativeDistinguishedName */
/**
 * @summary RelativeDistinguishedName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelativeDistinguishedName  ::=  SET SIZE (1..MAX) OF AttributeTypeAndValue
 * ```
 */
export type RelativeDistinguishedName = AttributeTypeAndValue[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION RelativeDistinguishedName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RelativeDistinguishedName */
let _cached_decoder_for_RelativeDistinguishedName: $.ASN1Decoder<RelativeDistinguishedName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RelativeDistinguishedName */

/* START_OF_SYMBOL_DEFINITION _decode_RelativeDistinguishedName */
/**
 * @summary Decodes an ASN.1 element into a(n) RelativeDistinguishedName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelativeDistinguishedName} The decoded data structure.
 */
export function _decode_RelativeDistinguishedName(el: _Element) {
    if (!_cached_decoder_for_RelativeDistinguishedName) {
        _cached_decoder_for_RelativeDistinguishedName = $._decodeSetOf<AttributeTypeAndValue>(
            () => _decode_AttributeTypeAndValue
        );
    }
    return _cached_decoder_for_RelativeDistinguishedName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RelativeDistinguishedName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RelativeDistinguishedName */
let _cached_encoder_for_RelativeDistinguishedName: $.ASN1Encoder<RelativeDistinguishedName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RelativeDistinguishedName */

/* START_OF_SYMBOL_DEFINITION _encode_RelativeDistinguishedName */
/**
 * @summary Encodes a(n) RelativeDistinguishedName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelativeDistinguishedName, encoded as an ASN.1 Element.
 */
export function _encode_RelativeDistinguishedName(
    value: RelativeDistinguishedName,
    elGetter: $.ASN1Encoder<RelativeDistinguishedName>
) {
    if (!_cached_encoder_for_RelativeDistinguishedName) {
        _cached_encoder_for_RelativeDistinguishedName = $._encodeSetOf<AttributeTypeAndValue>(
            () => _encode_AttributeTypeAndValue,
            $.BER
        );
    }
    return _cached_encoder_for_RelativeDistinguishedName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RelativeDistinguishedName */

/* eslint-enable */
