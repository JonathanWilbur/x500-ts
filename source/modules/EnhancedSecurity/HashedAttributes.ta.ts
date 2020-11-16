/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";

/* START_OF_SYMBOL_DEFINITION HashedAttributes */
/**
 * @summary HashedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashedAttributes  ::=  SEQUENCE SIZE (1..MAX) OF Attribute{{SupportedAttributes}}
 * ```
 */
export type HashedAttributes = Attribute[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION HashedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HashedAttributes */
let _cached_decoder_for_HashedAttributes: $.ASN1Decoder<
    HashedAttributes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HashedAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_HashedAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) HashedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HashedAttributes} The decoded data structure.
 */
export function _decode_HashedAttributes(el: _Element) {
    if (!_cached_decoder_for_HashedAttributes) {
        _cached_decoder_for_HashedAttributes = $._decodeSequenceOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_HashedAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HashedAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HashedAttributes */
let _cached_encoder_for_HashedAttributes: $.ASN1Encoder<
    HashedAttributes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HashedAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_HashedAttributes */
/**
 * @summary Encodes a(n) HashedAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashedAttributes, encoded as an ASN.1 Element.
 */
export function _encode_HashedAttributes(
    value: HashedAttributes,
    elGetter: $.ASN1Encoder<HashedAttributes>
) {
    if (!_cached_encoder_for_HashedAttributes) {
        _cached_encoder_for_HashedAttributes = $._encodeSequenceOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_HashedAttributes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HashedAttributes */

/* eslint-enable */
