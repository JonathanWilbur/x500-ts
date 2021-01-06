/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AttributeOptionList */
/**
 * @summary AttributeOptionList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeOptionList  ::=  SEQUENCE OF UTF8String
 * ```
 */
export type AttributeOptionList = UTF8String[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AttributeOptionList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeOptionList */
let _cached_decoder_for_AttributeOptionList: $.ASN1Decoder<AttributeOptionList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeOptionList */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeOptionList */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeOptionList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeOptionList} The decoded data structure.
 */
export function _decode_AttributeOptionList(el: _Element) {
    if (!_cached_decoder_for_AttributeOptionList) {
        _cached_decoder_for_AttributeOptionList = $._decodeSequenceOf<UTF8String>(
            () => $._decodeUTF8String
        );
    }
    return _cached_decoder_for_AttributeOptionList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeOptionList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeOptionList */
let _cached_encoder_for_AttributeOptionList: $.ASN1Encoder<AttributeOptionList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeOptionList */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeOptionList */
/**
 * @summary Encodes a(n) AttributeOptionList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeOptionList, encoded as an ASN.1 Element.
 */
export function _encode_AttributeOptionList(
    value: AttributeOptionList,
    elGetter: $.ASN1Encoder<AttributeOptionList>
) {
    if (!_cached_encoder_for_AttributeOptionList) {
        _cached_encoder_for_AttributeOptionList = $._encodeSequenceOf<UTF8String>(
            () => $._encodeUTF8String,
            $.BER
        );
    }
    return _cached_encoder_for_AttributeOptionList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeOptionList */

/* eslint-enable */
