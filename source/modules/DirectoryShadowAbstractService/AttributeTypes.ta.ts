/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";

/* START_OF_SYMBOL_DEFINITION AttributeTypes */
/**
 * @summary AttributeTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeTypes  ::=  SET OF AttributeType
 * ```
 */
export type AttributeTypes = AttributeType[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AttributeTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeTypes */
let _cached_decoder_for_AttributeTypes: $.ASN1Decoder<AttributeTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeTypes */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeTypes} The decoded data structure.
 */
export function _decode_AttributeTypes(el: _Element) {
    if (!_cached_decoder_for_AttributeTypes) {
        _cached_decoder_for_AttributeTypes = $._decodeSetOf<AttributeType>(
            () => _decode_AttributeType
        );
    }
    return _cached_decoder_for_AttributeTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeTypes */
let _cached_encoder_for_AttributeTypes: $.ASN1Encoder<AttributeTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeTypes */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeTypes */
/**
 * @summary Encodes a(n) AttributeTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeTypes, encoded as an ASN.1 Element.
 */
export function _encode_AttributeTypes(
    value: AttributeTypes,
    elGetter: $.ASN1Encoder<AttributeTypes>
) {
    if (!_cached_encoder_for_AttributeTypes) {
        _cached_encoder_for_AttributeTypes = $._encodeSetOf<AttributeType>(
            () => _encode_AttributeType,
            $.BER
        );
    }
    return _cached_encoder_for_AttributeTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeTypes */

/* eslint-enable */
