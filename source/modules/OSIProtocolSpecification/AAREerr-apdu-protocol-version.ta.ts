/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AAREerr_apdu_protocol_version */
/**
 * @summary AAREerr_apdu_protocol_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AAREerr-apdu-protocol-version ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AAREerr_apdu_protocol_version = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION AAREerr_apdu_protocol_version */

/* START_OF_SYMBOL_DEFINITION AAREerr_apdu_protocol_version_version1 */
/**
 * @summary AAREerr_apdu_protocol_version_version1
 * @constant
 */
export const AAREerr_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AAREerr_apdu_protocol_version_version1 */

/* START_OF_SYMBOL_DEFINITION version1 */
/**
 * @summary version1
 * @constant
 */
export const version1: number = AAREerr_apdu_protocol_version_version1; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION version1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AAREerr_apdu_protocol_version */
let _cached_decoder_for_AAREerr_apdu_protocol_version: $.ASN1Decoder<AAREerr_apdu_protocol_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AAREerr_apdu_protocol_version */

/* START_OF_SYMBOL_DEFINITION _decode_AAREerr_apdu_protocol_version */
/**
 * @summary Decodes an ASN.1 element into a(n) AAREerr_apdu_protocol_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AAREerr_apdu_protocol_version} The decoded data structure.
 */
export function _decode_AAREerr_apdu_protocol_version(el: _Element) {
    if (!_cached_decoder_for_AAREerr_apdu_protocol_version) {
        _cached_decoder_for_AAREerr_apdu_protocol_version = $._decodeBitString;
    }
    return _cached_decoder_for_AAREerr_apdu_protocol_version(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AAREerr_apdu_protocol_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AAREerr_apdu_protocol_version */
let _cached_encoder_for_AAREerr_apdu_protocol_version: $.ASN1Encoder<AAREerr_apdu_protocol_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AAREerr_apdu_protocol_version */

/* START_OF_SYMBOL_DEFINITION _encode_AAREerr_apdu_protocol_version */
/**
 * @summary Encodes a(n) AAREerr_apdu_protocol_version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AAREerr_apdu_protocol_version, encoded as an ASN.1 Element.
 */
export function _encode_AAREerr_apdu_protocol_version(
    value: AAREerr_apdu_protocol_version,
    elGetter: $.ASN1Encoder<AAREerr_apdu_protocol_version>
) {
    if (!_cached_encoder_for_AAREerr_apdu_protocol_version) {
        _cached_encoder_for_AAREerr_apdu_protocol_version = $._encodeBitString;
    }
    return _cached_encoder_for_AAREerr_apdu_protocol_version(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AAREerr_apdu_protocol_version */

/* eslint-enable */
