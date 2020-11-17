/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../Lightweight-Directory-Access-Protocol-V3/Attribute.ta";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../Lightweight-Directory-Access-Protocol-V3/Attribute.ta";

/* START_OF_SYMBOL_DEFINITION AttributeList */
/**
 * @summary AttributeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeList  ::=  SEQUENCE OF attribute Attribute
 * ```
 */
export type AttributeList = Attribute[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AttributeList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeList */
let _cached_decoder_for_AttributeList: $.ASN1Decoder<
    AttributeList
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeList */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeList */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeList} The decoded data structure.
 */
export function _decode_AttributeList(el: _Element) {
    if (!_cached_decoder_for_AttributeList) {
        _cached_decoder_for_AttributeList = $._decodeSequenceOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_AttributeList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeList */
let _cached_encoder_for_AttributeList: $.ASN1Encoder<
    AttributeList
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeList */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeList */
/**
 * @summary Encodes a(n) AttributeList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeList, encoded as an ASN.1 Element.
 */
export function _encode_AttributeList(
    value: AttributeList,
    elGetter: $.ASN1Encoder<AttributeList>
) {
    if (!_cached_encoder_for_AttributeList) {
        _cached_encoder_for_AttributeList = $._encodeSequenceOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_AttributeList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeList */

/* eslint-enable */
