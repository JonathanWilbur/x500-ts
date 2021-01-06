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

/* START_OF_SYMBOL_DEFINITION SelectedTypes */
/**
 * @summary SelectedTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SelectedTypes  ::=  SEQUENCE SIZE (1..MAX) OF AttributeType
 * ```
 */
export type SelectedTypes = AttributeType[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SelectedTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SelectedTypes */
let _cached_decoder_for_SelectedTypes: $.ASN1Decoder<SelectedTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SelectedTypes */

/* START_OF_SYMBOL_DEFINITION _decode_SelectedTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) SelectedTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SelectedTypes} The decoded data structure.
 */
export function _decode_SelectedTypes(el: _Element) {
    if (!_cached_decoder_for_SelectedTypes) {
        _cached_decoder_for_SelectedTypes = $._decodeSequenceOf<AttributeType>(
            () => _decode_AttributeType
        );
    }
    return _cached_decoder_for_SelectedTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SelectedTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SelectedTypes */
let _cached_encoder_for_SelectedTypes: $.ASN1Encoder<SelectedTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SelectedTypes */

/* START_OF_SYMBOL_DEFINITION _encode_SelectedTypes */
/**
 * @summary Encodes a(n) SelectedTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SelectedTypes, encoded as an ASN.1 Element.
 */
export function _encode_SelectedTypes(
    value: SelectedTypes,
    elGetter: $.ASN1Encoder<SelectedTypes>
) {
    if (!_cached_encoder_for_SelectedTypes) {
        _cached_encoder_for_SelectedTypes = $._encodeSequenceOf<AttributeType>(
            () => _encode_AttributeType,
            $.BER
        );
    }
    return _cached_encoder_for_SelectedTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SelectedTypes */

/* eslint-enable */
