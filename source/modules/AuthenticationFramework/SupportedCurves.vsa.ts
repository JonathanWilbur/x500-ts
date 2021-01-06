/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION SupportedCurves */
/**
 * @summary SupportedCurves
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedCurves OBJECT IDENTIFIER ::= {dummyCurv, ...}
 * ```
 *
 * @type {OBJECT_IDENTIFIER}
 */
export type SupportedCurves = OBJECT_IDENTIFIER; // VALUE_SET_TYPE
/* END_OF_SYMBOL_DEFINITION SupportedCurves */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedCurves */
let _cached_decoder_for_SupportedCurves: $.ASN1Decoder<SupportedCurves> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SupportedCurves */

/* START_OF_SYMBOL_DEFINITION _decode_SupportedCurves */
export function _decode_SupportedCurves(el: _Element) {
    if (!_cached_decoder_for_SupportedCurves) {
        _cached_decoder_for_SupportedCurves = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_SupportedCurves(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SupportedCurves */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedCurves */
let _cached_encoder_for_SupportedCurves: $.ASN1Encoder<SupportedCurves> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SupportedCurves */

/* START_OF_SYMBOL_DEFINITION _encode_SupportedCurves */
export function _encode_SupportedCurves(
    value: SupportedCurves,
    elGetter: $.ASN1Encoder<SupportedCurves>
) {
    if (!_cached_encoder_for_SupportedCurves) {
        _cached_encoder_for_SupportedCurves = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_SupportedCurves(value, elGetter);
}
/* END_OF_SYMBOL_DEFINITION _encode_SupportedCurves */

/* eslint-enable */
