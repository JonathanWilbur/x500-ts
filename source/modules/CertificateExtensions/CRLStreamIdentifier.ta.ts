/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CRLStreamIdentifier */
/**
 * @summary CRLStreamIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLStreamIdentifier  ::=  INTEGER (0..MAX)
 * ```
 */
export type CRLStreamIdentifier = INTEGER;
/* END_OF_SYMBOL_DEFINITION CRLStreamIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLStreamIdentifier */
let _cached_decoder_for_CRLStreamIdentifier: $.ASN1Decoder<
    CRLStreamIdentifier
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLStreamIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_CRLStreamIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) CRLStreamIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CRLStreamIdentifier} The decoded data structure.
 */
export function _decode_CRLStreamIdentifier(el: _Element) {
    if (!_cached_decoder_for_CRLStreamIdentifier) {
        _cached_decoder_for_CRLStreamIdentifier = $._decodeInteger;
    }
    return _cached_decoder_for_CRLStreamIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CRLStreamIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLStreamIdentifier */
let _cached_encoder_for_CRLStreamIdentifier: $.ASN1Encoder<
    CRLStreamIdentifier
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLStreamIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_CRLStreamIdentifier */
/**
 * @summary Encodes a(n) CRLStreamIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CRLStreamIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_CRLStreamIdentifier(
    value: CRLStreamIdentifier,
    elGetter: $.ASN1Encoder<CRLStreamIdentifier>
) {
    if (!_cached_encoder_for_CRLStreamIdentifier) {
        _cached_encoder_for_CRLStreamIdentifier = $._encodeInteger;
    }
    return _cached_encoder_for_CRLStreamIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CRLStreamIdentifier */

/* eslint-enable */
