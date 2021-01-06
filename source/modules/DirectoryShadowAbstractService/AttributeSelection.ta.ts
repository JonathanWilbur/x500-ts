/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ClassAttributeSelection,
    _decode_ClassAttributeSelection,
    _encode_ClassAttributeSelection,
} from "../DirectoryShadowAbstractService/ClassAttributeSelection.ta";
export {
    ClassAttributeSelection,
    _decode_ClassAttributeSelection,
    _encode_ClassAttributeSelection,
} from "../DirectoryShadowAbstractService/ClassAttributeSelection.ta";

/* START_OF_SYMBOL_DEFINITION AttributeSelection */
/**
 * @summary AttributeSelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeSelection  ::=  SET OF ClassAttributeSelection
 * ```
 */
export type AttributeSelection = ClassAttributeSelection[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AttributeSelection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeSelection */
let _cached_decoder_for_AttributeSelection: $.ASN1Decoder<AttributeSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeSelection */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeSelection */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeSelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeSelection} The decoded data structure.
 */
export function _decode_AttributeSelection(el: _Element) {
    if (!_cached_decoder_for_AttributeSelection) {
        _cached_decoder_for_AttributeSelection = $._decodeSetOf<ClassAttributeSelection>(
            () => _decode_ClassAttributeSelection
        );
    }
    return _cached_decoder_for_AttributeSelection(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeSelection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeSelection */
let _cached_encoder_for_AttributeSelection: $.ASN1Encoder<AttributeSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeSelection */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeSelection */
/**
 * @summary Encodes a(n) AttributeSelection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeSelection, encoded as an ASN.1 Element.
 */
export function _encode_AttributeSelection(
    value: AttributeSelection,
    elGetter: $.ASN1Encoder<AttributeSelection>
) {
    if (!_cached_encoder_for_AttributeSelection) {
        _cached_encoder_for_AttributeSelection = $._encodeSetOf<ClassAttributeSelection>(
            () => _encode_ClassAttributeSelection,
            $.BER
        );
    }
    return _cached_encoder_for_AttributeSelection(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeSelection */

/* eslint-enable */
