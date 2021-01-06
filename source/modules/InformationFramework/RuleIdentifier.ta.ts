/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION RuleIdentifier */
/**
 * @summary RuleIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RuleIdentifier  ::=  INTEGER
 * ```
 */
export type RuleIdentifier = INTEGER;
/* END_OF_SYMBOL_DEFINITION RuleIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RuleIdentifier */
let _cached_decoder_for_RuleIdentifier: $.ASN1Decoder<RuleIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RuleIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_RuleIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) RuleIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RuleIdentifier} The decoded data structure.
 */
export function _decode_RuleIdentifier(el: _Element) {
    if (!_cached_decoder_for_RuleIdentifier) {
        _cached_decoder_for_RuleIdentifier = $._decodeInteger;
    }
    return _cached_decoder_for_RuleIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RuleIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RuleIdentifier */
let _cached_encoder_for_RuleIdentifier: $.ASN1Encoder<RuleIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RuleIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_RuleIdentifier */
/**
 * @summary Encodes a(n) RuleIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RuleIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_RuleIdentifier(
    value: RuleIdentifier,
    elGetter: $.ASN1Encoder<RuleIdentifier>
) {
    if (!_cached_encoder_for_RuleIdentifier) {
        _cached_encoder_for_RuleIdentifier = $._encodeInteger;
    }
    return _cached_encoder_for_RuleIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RuleIdentifier */

/* eslint-enable */
