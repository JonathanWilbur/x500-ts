/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SubstringAssertion_Item,
    _decode_SubstringAssertion_Item,
    _encode_SubstringAssertion_Item,
} from "../SelectedAttributeTypes/SubstringAssertion-Item.ta";
export {
    SubstringAssertion_Item,
    _decode_SubstringAssertion_Item,
    _encode_SubstringAssertion_Item,
} from "../SelectedAttributeTypes/SubstringAssertion-Item.ta";

/* START_OF_SYMBOL_DEFINITION SubstringAssertion */
/**
 * @summary SubstringAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringAssertion  ::=  SEQUENCE OF CHOICE {
 *   initial  [0]  UnboundedDirectoryString,
 *   any      [1]  UnboundedDirectoryString,
 *   final    [2]  UnboundedDirectoryString,
 *     -- at most one initial and one final component
 *   control       Attribute{{SupportedAttributes}},
 *     -- Used to specify interpretation of the following items
 *   ... }
 * ```
 */
export type SubstringAssertion = SubstringAssertion_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SubstringAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringAssertion */
let _cached_decoder_for_SubstringAssertion: $.ASN1Decoder<
    SubstringAssertion
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringAssertion */

/* START_OF_SYMBOL_DEFINITION _decode_SubstringAssertion */
/**
 * @summary Decodes an ASN.1 element into a(n) SubstringAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubstringAssertion} The decoded data structure.
 */
export function _decode_SubstringAssertion(el: _Element) {
    if (!_cached_decoder_for_SubstringAssertion) {
        _cached_decoder_for_SubstringAssertion = $._decodeSequenceOf<
            SubstringAssertion_Item
        >(() => _decode_SubstringAssertion_Item);
    }
    return _cached_decoder_for_SubstringAssertion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubstringAssertion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringAssertion */
let _cached_encoder_for_SubstringAssertion: $.ASN1Encoder<
    SubstringAssertion
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringAssertion */

/* START_OF_SYMBOL_DEFINITION _encode_SubstringAssertion */
/**
 * @summary Encodes a(n) SubstringAssertion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubstringAssertion, encoded as an ASN.1 Element.
 */
export function _encode_SubstringAssertion(
    value: SubstringAssertion,
    elGetter: $.ASN1Encoder<SubstringAssertion>
) {
    if (!_cached_encoder_for_SubstringAssertion) {
        _cached_encoder_for_SubstringAssertion = $._encodeSequenceOf<
            SubstringAssertion_Item
        >(() => _encode_SubstringAssertion_Item, $.BER);
    }
    return _cached_encoder_for_SubstringAssertion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubstringAssertion */

/* eslint-enable */
