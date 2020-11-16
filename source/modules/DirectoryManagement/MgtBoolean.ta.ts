/* eslint-disable */
import { ASN1Element as _Element, BOOLEAN } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION MgtBoolean */
/**
 * @summary MgtBoolean
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtBoolean  ::=  BOOLEAN
 * ```
 */
export type MgtBoolean = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION MgtBoolean */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtBoolean */
let _cached_decoder_for_MgtBoolean: $.ASN1Decoder<MgtBoolean> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtBoolean */

/* START_OF_SYMBOL_DEFINITION _decode_MgtBoolean */
/**
 * @summary Decodes an ASN.1 element into a(n) MgtBoolean
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtBoolean} The decoded data structure.
 */
export function _decode_MgtBoolean(el: _Element) {
    if (!_cached_decoder_for_MgtBoolean) {
        _cached_decoder_for_MgtBoolean = $._decodeBoolean;
    }
    return _cached_decoder_for_MgtBoolean(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MgtBoolean */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtBoolean */
let _cached_encoder_for_MgtBoolean: $.ASN1Encoder<MgtBoolean> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtBoolean */

/* START_OF_SYMBOL_DEFINITION _encode_MgtBoolean */
/**
 * @summary Encodes a(n) MgtBoolean into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtBoolean, encoded as an ASN.1 Element.
 */
export function _encode_MgtBoolean(
    value: MgtBoolean,
    elGetter: $.ASN1Encoder<MgtBoolean>
) {
    if (!_cached_encoder_for_MgtBoolean) {
        _cached_encoder_for_MgtBoolean = $._encodeBoolean;
    }
    return _cached_encoder_for_MgtBoolean(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MgtBoolean */

/* eslint-enable */
