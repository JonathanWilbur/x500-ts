/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ProtRestriction */
/**
 * @summary ProtRestriction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtRestriction  ::=  SEQUENCE (SIZE (1..MAX)) OF OBJECT IDENTIFIER
 * ```
 */
export type ProtRestriction = OBJECT_IDENTIFIER[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ProtRestriction */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtRestriction */
let _cached_decoder_for_ProtRestriction: $.ASN1Decoder<
    ProtRestriction
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProtRestriction */

/* START_OF_SYMBOL_DEFINITION _decode_ProtRestriction */
/**
 * @summary Decodes an ASN.1 element into a(n) ProtRestriction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtRestriction} The decoded data structure.
 */
export function _decode_ProtRestriction(el: _Element) {
    if (!_cached_decoder_for_ProtRestriction) {
        _cached_decoder_for_ProtRestriction = $._decodeSequenceOf<
            OBJECT_IDENTIFIER
        >(() => $._decodeObjectIdentifier);
    }
    return _cached_decoder_for_ProtRestriction(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProtRestriction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtRestriction */
let _cached_encoder_for_ProtRestriction: $.ASN1Encoder<
    ProtRestriction
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProtRestriction */

/* START_OF_SYMBOL_DEFINITION _encode_ProtRestriction */
/**
 * @summary Encodes a(n) ProtRestriction into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtRestriction, encoded as an ASN.1 Element.
 */
export function _encode_ProtRestriction(
    value: ProtRestriction,
    elGetter: $.ASN1Encoder<ProtRestriction>
) {
    if (!_cached_encoder_for_ProtRestriction) {
        _cached_encoder_for_ProtRestriction = $._encodeSequenceOf<
            OBJECT_IDENTIFIER
        >(() => $._encodeObjectIdentifier, $.BER);
    }
    return _cached_encoder_for_ProtRestriction(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProtRestriction */

/* eslint-enable */
