/* eslint-disable */
import { ASN1Element as _Element, NumericString } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION InternationalISDNNumber */
/**
 * @summary InternationalISDNNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InternationalISDNNumber  ::=
 *   NumericString(SIZE (1..ub-international-isdn-number))
 * ```
 */
export type InternationalISDNNumber = NumericString; // NumericString
/* END_OF_SYMBOL_DEFINITION InternationalISDNNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InternationalISDNNumber */
let _cached_decoder_for_InternationalISDNNumber: $.ASN1Decoder<InternationalISDNNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InternationalISDNNumber */

/* START_OF_SYMBOL_DEFINITION _decode_InternationalISDNNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) InternationalISDNNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InternationalISDNNumber} The decoded data structure.
 */
export function _decode_InternationalISDNNumber(el: _Element) {
    if (!_cached_decoder_for_InternationalISDNNumber) {
        _cached_decoder_for_InternationalISDNNumber = $._decodeNumericString;
    }
    return _cached_decoder_for_InternationalISDNNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InternationalISDNNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InternationalISDNNumber */
let _cached_encoder_for_InternationalISDNNumber: $.ASN1Encoder<InternationalISDNNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InternationalISDNNumber */

/* START_OF_SYMBOL_DEFINITION _encode_InternationalISDNNumber */
/**
 * @summary Encodes a(n) InternationalISDNNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InternationalISDNNumber, encoded as an ASN.1 Element.
 */
export function _encode_InternationalISDNNumber(
    value: InternationalISDNNumber,
    elGetter: $.ASN1Encoder<InternationalISDNNumber>
) {
    if (!_cached_encoder_for_InternationalISDNNumber) {
        _cached_encoder_for_InternationalISDNNumber = $._encodeNumericString;
    }
    return _cached_encoder_for_InternationalISDNNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InternationalISDNNumber */

/* eslint-enable */
