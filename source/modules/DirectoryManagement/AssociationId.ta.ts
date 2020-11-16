/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AssociationId */
/**
 * @summary AssociationId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssociationId  ::=  INTEGER
 * ```
 */
export type AssociationId = INTEGER;
/* END_OF_SYMBOL_DEFINITION AssociationId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociationId */
let _cached_decoder_for_AssociationId: $.ASN1Decoder<
    AssociationId
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssociationId */

/* START_OF_SYMBOL_DEFINITION _decode_AssociationId */
/**
 * @summary Decodes an ASN.1 element into a(n) AssociationId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssociationId} The decoded data structure.
 */
export function _decode_AssociationId(el: _Element) {
    if (!_cached_decoder_for_AssociationId) {
        _cached_decoder_for_AssociationId = $._decodeInteger;
    }
    return _cached_decoder_for_AssociationId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AssociationId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociationId */
let _cached_encoder_for_AssociationId: $.ASN1Encoder<
    AssociationId
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssociationId */

/* START_OF_SYMBOL_DEFINITION _encode_AssociationId */
/**
 * @summary Encodes a(n) AssociationId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssociationId, encoded as an ASN.1 Element.
 */
export function _encode_AssociationId(
    value: AssociationId,
    elGetter: $.ASN1Encoder<AssociationId>
) {
    if (!_cached_encoder_for_AssociationId) {
        _cached_encoder_for_AssociationId = $._encodeInteger;
    }
    return _cached_encoder_for_AssociationId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AssociationId */

/* eslint-enable */
