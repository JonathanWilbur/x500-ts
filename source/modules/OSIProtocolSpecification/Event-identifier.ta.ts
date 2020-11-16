/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION Event_identifier */
/**
 * @summary Event_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Event-identifier  ::=  INTEGER {
 *   cp-PPDU              (0),
 *   cpa-PPDU             (1),
 *   cpr-PPDU             (2),
 *   aru-PPDU             (3),
 *   arp-PPDU             (4),
 *   td-PPDU              (7),
 *   s-release-indication (14),
 *   s-release-confirm    (15) }
 * ```
 */
export type Event_identifier = INTEGER;
/* END_OF_SYMBOL_DEFINITION Event_identifier */

/* START_OF_SYMBOL_DEFINITION Event_identifier_cp_PPDU */
/**
 * @summary Event_identifier_cp_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_cp_PPDU: Event_identifier = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Event_identifier_cp_PPDU */

/* START_OF_SYMBOL_DEFINITION Event_identifier_cpa_PPDU */
/**
 * @summary Event_identifier_cpa_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_cpa_PPDU: Event_identifier = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Event_identifier_cpa_PPDU */

/* START_OF_SYMBOL_DEFINITION Event_identifier_cpr_PPDU */
/**
 * @summary Event_identifier_cpr_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_cpr_PPDU: Event_identifier = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Event_identifier_cpr_PPDU */

/* START_OF_SYMBOL_DEFINITION Event_identifier_aru_PPDU */
/**
 * @summary Event_identifier_aru_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_aru_PPDU: Event_identifier = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Event_identifier_aru_PPDU */

/* START_OF_SYMBOL_DEFINITION Event_identifier_arp_PPDU */
/**
 * @summary Event_identifier_arp_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_arp_PPDU: Event_identifier = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Event_identifier_arp_PPDU */

/* START_OF_SYMBOL_DEFINITION Event_identifier_td_PPDU */
/**
 * @summary Event_identifier_td_PPDU
 * @constant
 * @type {number}
 */
export const Event_identifier_td_PPDU: Event_identifier = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Event_identifier_td_PPDU */

/* START_OF_SYMBOL_DEFINITION Event_identifier_s_release_indication */
/**
 * @summary Event_identifier_s_release_indication
 * @constant
 * @type {number}
 */
export const Event_identifier_s_release_indication: Event_identifier = 14; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Event_identifier_s_release_indication */

/* START_OF_SYMBOL_DEFINITION Event_identifier_s_release_confirm */
/**
 * @summary Event_identifier_s_release_confirm
 * @constant
 * @type {number}
 */
export const Event_identifier_s_release_confirm: Event_identifier = 15; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Event_identifier_s_release_confirm */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Event_identifier */
let _cached_decoder_for_Event_identifier: $.ASN1Decoder<
    Event_identifier
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Event_identifier */

/* START_OF_SYMBOL_DEFINITION _decode_Event_identifier */
/**
 * @summary Decodes an ASN.1 element into a(n) Event_identifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Event_identifier} The decoded data structure.
 */
export function _decode_Event_identifier(el: _Element) {
    if (!_cached_decoder_for_Event_identifier) {
        _cached_decoder_for_Event_identifier = $._decodeInteger;
    }
    return _cached_decoder_for_Event_identifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Event_identifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Event_identifier */
let _cached_encoder_for_Event_identifier: $.ASN1Encoder<
    Event_identifier
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Event_identifier */

/* START_OF_SYMBOL_DEFINITION _encode_Event_identifier */
/**
 * @summary Encodes a(n) Event_identifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Event_identifier, encoded as an ASN.1 Element.
 */
export function _encode_Event_identifier(
    value: Event_identifier,
    elGetter: $.ASN1Encoder<Event_identifier>
) {
    if (!_cached_encoder_for_Event_identifier) {
        _cached_encoder_for_Event_identifier = $._encodeInteger;
    }
    return _cached_encoder_for_Event_identifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Event_identifier */

/* eslint-enable */
