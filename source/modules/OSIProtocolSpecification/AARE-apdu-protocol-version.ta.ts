/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION AARE_apdu_protocol_version */
/**
 * @summary AARE_apdu_protocol_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AARE-apdu-protocol-version ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AARE_apdu_protocol_version = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION AARE_apdu_protocol_version */

/* START_OF_SYMBOL_DEFINITION AARE_apdu_protocol_version_version1 */
/**
 * @summary AARE_apdu_protocol_version_version1
 * @constant
 */
export const AARE_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION AARE_apdu_protocol_version_version1 */

/* START_OF_SYMBOL_DEFINITION version1 */
/**
 * @summary version1
 * @constant
 */
export const version1: number = AARE_apdu_protocol_version_version1; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION version1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AARE_apdu_protocol_version */
let _cached_decoder_for_AARE_apdu_protocol_version: $.ASN1Decoder<AARE_apdu_protocol_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AARE_apdu_protocol_version */

/* START_OF_SYMBOL_DEFINITION _decode_AARE_apdu_protocol_version */
/**
 * @summary Decodes an ASN.1 element into a(n) AARE_apdu_protocol_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AARE_apdu_protocol_version} The decoded data structure.
 */
export function _decode_AARE_apdu_protocol_version(el: _Element) {
    if (!_cached_decoder_for_AARE_apdu_protocol_version) {
        _cached_decoder_for_AARE_apdu_protocol_version = $._decodeBitString;
    }
    return _cached_decoder_for_AARE_apdu_protocol_version(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AARE_apdu_protocol_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AARE_apdu_protocol_version */
let _cached_encoder_for_AARE_apdu_protocol_version: $.ASN1Encoder<AARE_apdu_protocol_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AARE_apdu_protocol_version */

/* START_OF_SYMBOL_DEFINITION _encode_AARE_apdu_protocol_version */
/**
 * @summary Encodes a(n) AARE_apdu_protocol_version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AARE_apdu_protocol_version, encoded as an ASN.1 Element.
 */
export function _encode_AARE_apdu_protocol_version(
    value: AARE_apdu_protocol_version,
    elGetter: $.ASN1Encoder<AARE_apdu_protocol_version>
) {
    if (!_cached_encoder_for_AARE_apdu_protocol_version) {
        _cached_encoder_for_AARE_apdu_protocol_version = $._encodeBitString;
    }
    return _cached_encoder_for_AARE_apdu_protocol_version(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AARE_apdu_protocol_version */

/* eslint-enable */
