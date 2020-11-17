/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_CertStatus */
export enum _enum_for_CertStatus {
    good = 0,
    revoked = 1,
    on_hold = 2,
    expired = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CertStatus */

/* START_OF_SYMBOL_DEFINITION CertStatus */
/**
 * @summary CertStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertStatus  ::=  ENUMERATED {
 *   good    (0),
 *   revoked (1),
 *   on-hold (2),
 *   expired (3),
 *   ... }
 * ```@enum {number}
 */
export type CertStatus = _enum_for_CertStatus | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION CertStatus */

/* START_OF_SYMBOL_DEFINITION CertStatus_good */
/**
 * @summary CertStatus_good
 * @constant
 * @type {number}
 */
export const CertStatus_good: CertStatus = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CertStatus_good */

/* START_OF_SYMBOL_DEFINITION good */
/**
 * @summary good
 * @constant
 * @type {number}
 */
export const good: CertStatus = CertStatus_good; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION good */

/* START_OF_SYMBOL_DEFINITION CertStatus_revoked */
/**
 * @summary CertStatus_revoked
 * @constant
 * @type {number}
 */
export const CertStatus_revoked: CertStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CertStatus_revoked */

/* START_OF_SYMBOL_DEFINITION revoked */
/**
 * @summary revoked
 * @constant
 * @type {number}
 */
export const revoked: CertStatus = CertStatus_revoked; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION revoked */

/* START_OF_SYMBOL_DEFINITION CertStatus_on_hold */
/**
 * @summary CertStatus_on_hold
 * @constant
 * @type {number}
 */
export const CertStatus_on_hold: CertStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CertStatus_on_hold */

/* START_OF_SYMBOL_DEFINITION on_hold */
/**
 * @summary on_hold
 * @constant
 * @type {number}
 */
export const on_hold: CertStatus = CertStatus_on_hold; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION on_hold */

/* START_OF_SYMBOL_DEFINITION CertStatus_expired */
/**
 * @summary CertStatus_expired
 * @constant
 * @type {number}
 */
export const CertStatus_expired: CertStatus = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CertStatus_expired */

/* START_OF_SYMBOL_DEFINITION expired */
/**
 * @summary expired
 * @constant
 * @type {number}
 */
export const expired: CertStatus = CertStatus_expired; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION expired */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertStatus */
let _cached_decoder_for_CertStatus: $.ASN1Decoder<CertStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertStatus */

/* START_OF_SYMBOL_DEFINITION _decode_CertStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) CertStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertStatus} The decoded data structure.
 */
export function _decode_CertStatus(el: _Element) {
    if (!_cached_decoder_for_CertStatus) {
        _cached_decoder_for_CertStatus = $._decodeEnumerated;
    }
    return _cached_decoder_for_CertStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertStatus */
let _cached_encoder_for_CertStatus: $.ASN1Encoder<CertStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertStatus */

/* START_OF_SYMBOL_DEFINITION _encode_CertStatus */
/**
 * @summary Encodes a(n) CertStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertStatus, encoded as an ASN.1 Element.
 */
export function _encode_CertStatus(
    value: CertStatus,
    elGetter: $.ASN1Encoder<CertStatus>
) {
    if (!_cached_encoder_for_CertStatus) {
        _cached_encoder_for_CertStatus = $._encodeEnumerated;
    }
    return _cached_encoder_for_CertStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertStatus */

/* eslint-enable */
