/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CRLNumber */
/**
 * @summary CRLNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLNumber  ::=  INTEGER(0..MAX)
 * ```
 */
export type CRLNumber = INTEGER;
/* END_OF_SYMBOL_DEFINITION CRLNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLNumber */
let _cached_decoder_for_CRLNumber: $.ASN1Decoder<CRLNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLNumber */

/* START_OF_SYMBOL_DEFINITION _decode_CRLNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) CRLNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLNumber} The decoded data structure.
 */
export function _decode_CRLNumber(el: _Element) {
    if (!_cached_decoder_for_CRLNumber) {
        _cached_decoder_for_CRLNumber = $._decodeInteger;
    }
    return _cached_decoder_for_CRLNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CRLNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLNumber */
let _cached_encoder_for_CRLNumber: $.ASN1Encoder<CRLNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLNumber */

/* START_OF_SYMBOL_DEFINITION _encode_CRLNumber */
/**
 * @summary Encodes a(n) CRLNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLNumber, encoded as an ASN.1 Element.
 */
export function _encode_CRLNumber(
    value: CRLNumber,
    elGetter: $.ASN1Encoder<CRLNumber>
) {
    if (!_cached_encoder_for_CRLNumber) {
        _cached_encoder_for_CRLNumber = $._encodeInteger;
    }
    return _cached_encoder_for_CRLNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CRLNumber */

/* eslint-enable */
