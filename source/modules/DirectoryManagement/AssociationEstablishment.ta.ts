/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AssociationEstablishment */
/**
 * @summary AssociationEstablishment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociationEstablishment  ::=  BIT STRING {inward(0), outward(1)}
 * ```
 */
export type AssociationEstablishment = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION AssociationEstablishment */

/* START_OF_SYMBOL_DEFINITION AssociationEstablishment_inward */
/**
 * @summary AssociationEstablishment_inward
 * @constant
 */
export const AssociationEstablishment_inward: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AssociationEstablishment_inward */

/* START_OF_SYMBOL_DEFINITION inward */
/**
 * @summary inward
 * @constant
 */
export const inward: number = AssociationEstablishment_inward; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION inward */

/* START_OF_SYMBOL_DEFINITION AssociationEstablishment_outward */
/**
 * @summary AssociationEstablishment_outward
 * @constant
 */
export const AssociationEstablishment_outward: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AssociationEstablishment_outward */

/* START_OF_SYMBOL_DEFINITION outward */
/**
 * @summary outward
 * @constant
 */
export const outward: number = AssociationEstablishment_outward; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION outward */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociationEstablishment */
let _cached_decoder_for_AssociationEstablishment: $.ASN1Decoder<
    AssociationEstablishment
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociationEstablishment */

/* START_OF_SYMBOL_DEFINITION _decode_AssociationEstablishment */
/**
 * @summary Decodes an ASN.1 element into a(n) AssociationEstablishment
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssociationEstablishment} The decoded data structure.
 */
export function _decode_AssociationEstablishment(el: _Element) {
    if (!_cached_decoder_for_AssociationEstablishment) {
        _cached_decoder_for_AssociationEstablishment = $._decodeBitString;
    }
    return _cached_decoder_for_AssociationEstablishment(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AssociationEstablishment */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociationEstablishment */
let _cached_encoder_for_AssociationEstablishment: $.ASN1Encoder<
    AssociationEstablishment
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociationEstablishment */

/* START_OF_SYMBOL_DEFINITION _encode_AssociationEstablishment */
/**
 * @summary Encodes a(n) AssociationEstablishment into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociationEstablishment, encoded as an ASN.1 Element.
 */
export function _encode_AssociationEstablishment(
    value: AssociationEstablishment,
    elGetter: $.ASN1Encoder<AssociationEstablishment>
) {
    if (!_cached_encoder_for_AssociationEstablishment) {
        _cached_encoder_for_AssociationEstablishment = $._encodeBitString;
    }
    return _cached_encoder_for_AssociationEstablishment(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AssociationEstablishment */

/* eslint-enable */
