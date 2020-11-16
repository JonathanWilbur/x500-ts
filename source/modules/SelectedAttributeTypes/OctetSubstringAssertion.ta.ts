/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OctetSubstringAssertion_Item,
    _decode_OctetSubstringAssertion_Item,
    _encode_OctetSubstringAssertion_Item,
} from "../SelectedAttributeTypes/OctetSubstringAssertion-Item.ta";
export {
    OctetSubstringAssertion_Item,
    _decode_OctetSubstringAssertion_Item,
    _encode_OctetSubstringAssertion_Item,
} from "../SelectedAttributeTypes/OctetSubstringAssertion-Item.ta";

/* START_OF_SYMBOL_DEFINITION OctetSubstringAssertion */
/**
 * @summary OctetSubstringAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OctetSubstringAssertion  ::=  SEQUENCE OF CHOICE {
 *   initial  [0]  OCTET STRING,
 *   any      [1]  OCTET STRING,
 *   final    [2]  OCTET STRING,
 *   ... }
 * ```
 */
export type OctetSubstringAssertion = OctetSubstringAssertion_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION OctetSubstringAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OctetSubstringAssertion */
let _cached_decoder_for_OctetSubstringAssertion: $.ASN1Decoder<
    OctetSubstringAssertion
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OctetSubstringAssertion */

/* START_OF_SYMBOL_DEFINITION _decode_OctetSubstringAssertion */
/**
 * @summary Decodes an ASN.1 element into a(n) OctetSubstringAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OctetSubstringAssertion} The decoded data structure.
 */
export function _decode_OctetSubstringAssertion(el: _Element) {
    if (!_cached_decoder_for_OctetSubstringAssertion) {
        _cached_decoder_for_OctetSubstringAssertion = $._decodeSequenceOf<
            OctetSubstringAssertion_Item
        >(() => _decode_OctetSubstringAssertion_Item);
    }
    return _cached_decoder_for_OctetSubstringAssertion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OctetSubstringAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OctetSubstringAssertion */
let _cached_encoder_for_OctetSubstringAssertion: $.ASN1Encoder<
    OctetSubstringAssertion
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OctetSubstringAssertion */

/* START_OF_SYMBOL_DEFINITION _encode_OctetSubstringAssertion */
/**
 * @summary Encodes a(n) OctetSubstringAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OctetSubstringAssertion, encoded as an ASN.1 Element.
 */
export function _encode_OctetSubstringAssertion(
    value: OctetSubstringAssertion,
    elGetter: $.ASN1Encoder<OctetSubstringAssertion>
) {
    if (!_cached_encoder_for_OctetSubstringAssertion) {
        _cached_encoder_for_OctetSubstringAssertion = $._encodeSequenceOf<
            OctetSubstringAssertion_Item
        >(() => _encode_OctetSubstringAssertion_Item, $.BER);
    }
    return _cached_encoder_for_OctetSubstringAssertion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OctetSubstringAssertion */

/* eslint-enable */
