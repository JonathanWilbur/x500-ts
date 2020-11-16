/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION MechType */
/**
 * @summary MechType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MechType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type MechType = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION MechType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MechType */
let _cached_decoder_for_MechType: $.ASN1Decoder<MechType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MechType */

/* START_OF_SYMBOL_DEFINITION _decode_MechType */
/**
 * @summary Decodes an ASN.1 element into a(n) MechType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MechType} The decoded data structure.
 */
export function _decode_MechType(el: _Element) {
    if (!_cached_decoder_for_MechType) {
        _cached_decoder_for_MechType = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_MechType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MechType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MechType */
let _cached_encoder_for_MechType: $.ASN1Encoder<MechType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MechType */

/* START_OF_SYMBOL_DEFINITION _encode_MechType */
/**
 * @summary Encodes a(n) MechType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MechType, encoded as an ASN.1 Element.
 */
export function _encode_MechType(
    value: MechType,
    elGetter: $.ASN1Encoder<MechType>
) {
    if (!_cached_encoder_for_MechType) {
        _cached_encoder_for_MechType = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_MechType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MechType */

/* eslint-enable */
