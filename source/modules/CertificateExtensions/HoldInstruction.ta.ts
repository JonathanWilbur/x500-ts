/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION HoldInstruction */
/**
 * @summary HoldInstruction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HoldInstruction  ::=  OBJECT IDENTIFIER
 * ```
 */
export type HoldInstruction = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION HoldInstruction */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HoldInstruction */
let _cached_decoder_for_HoldInstruction: $.ASN1Decoder<HoldInstruction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HoldInstruction */

/* START_OF_SYMBOL_DEFINITION _decode_HoldInstruction */
/**
 * @summary Decodes an ASN.1 element into a(n) HoldInstruction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HoldInstruction} The decoded data structure.
 */
export function _decode_HoldInstruction(el: _Element) {
    if (!_cached_decoder_for_HoldInstruction) {
        _cached_decoder_for_HoldInstruction = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_HoldInstruction(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HoldInstruction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HoldInstruction */
let _cached_encoder_for_HoldInstruction: $.ASN1Encoder<HoldInstruction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HoldInstruction */

/* START_OF_SYMBOL_DEFINITION _encode_HoldInstruction */
/**
 * @summary Encodes a(n) HoldInstruction into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HoldInstruction, encoded as an ASN.1 Element.
 */
export function _encode_HoldInstruction(
    value: HoldInstruction,
    elGetter: $.ASN1Encoder<HoldInstruction>
) {
    if (!_cached_encoder_for_HoldInstruction) {
        _cached_encoder_for_HoldInstruction = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_HoldInstruction(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HoldInstruction */

/* eslint-enable */
