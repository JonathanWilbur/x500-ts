/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeMappings_Item,
    _decode_AttributeMappings_Item,
    _encode_AttributeMappings_Item,
} from "../AttributeCertificateDefinitions/AttributeMappings-Item.ta";
export {
    AttributeMappings_Item,
    _decode_AttributeMappings_Item,
    _encode_AttributeMappings_Item,
} from "../AttributeCertificateDefinitions/AttributeMappings-Item.ta";

/* START_OF_SYMBOL_DEFINITION AttributeMappings */
/**
 * @summary AttributeMappings
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeMappings  ::=  SET OF CHOICE {
 *   typeMappings      [0]  SEQUENCE {
 *     local             [0]  AttributeType,
 *     remote            [1]  AttributeType,
 *     ... },
 *   typeValueMappings [1]  SEQUENCE {
 *     local             [0]  AttributeTypeAndValue,
 *     remote            [1]  AttributeTypeAndValue,
 *     ... } }
 * ```
 */
export type AttributeMappings = AttributeMappings_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AttributeMappings */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeMappings */
let _cached_decoder_for_AttributeMappings: $.ASN1Decoder<
    AttributeMappings
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeMappings */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeMappings */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeMappings
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeMappings} The decoded data structure.
 */
export function _decode_AttributeMappings(el: _Element) {
    if (!_cached_decoder_for_AttributeMappings) {
        _cached_decoder_for_AttributeMappings = $._decodeSetOf<
            AttributeMappings_Item
        >(() => _decode_AttributeMappings_Item);
    }
    return _cached_decoder_for_AttributeMappings(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeMappings */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeMappings */
let _cached_encoder_for_AttributeMappings: $.ASN1Encoder<
    AttributeMappings
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeMappings */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeMappings */
/**
 * @summary Encodes a(n) AttributeMappings into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeMappings, encoded as an ASN.1 Element.
 */
export function _encode_AttributeMappings(
    value: AttributeMappings,
    elGetter: $.ASN1Encoder<AttributeMappings>
) {
    if (!_cached_encoder_for_AttributeMappings) {
        _cached_encoder_for_AttributeMappings = $._encodeSetOf<
            AttributeMappings_Item
        >(() => _encode_AttributeMappings_Item, $.BER);
    }
    return _cached_encoder_for_AttributeMappings(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeMappings */

/* eslint-enable */
