/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    StatusReferral,
    _decode_StatusReferral,
    _encode_StatusReferral,
} from "../CertificateExtensions/StatusReferral.ta";
export {
    StatusReferral,
    _decode_StatusReferral,
    _encode_StatusReferral,
} from "../CertificateExtensions/StatusReferral.ta";

/* START_OF_SYMBOL_DEFINITION StatusReferrals */
/**
 * @summary StatusReferrals
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StatusReferrals  ::=  SEQUENCE SIZE (1..MAX) OF StatusReferral
 * ```
 */
export type StatusReferrals = StatusReferral[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION StatusReferrals */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StatusReferrals */
let _cached_decoder_for_StatusReferrals: $.ASN1Decoder<StatusReferrals> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StatusReferrals */

/* START_OF_SYMBOL_DEFINITION _decode_StatusReferrals */
/**
 * @summary Decodes an ASN.1 element into a(n) StatusReferrals
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StatusReferrals} The decoded data structure.
 */
export function _decode_StatusReferrals(el: _Element) {
    if (!_cached_decoder_for_StatusReferrals) {
        _cached_decoder_for_StatusReferrals = $._decodeSequenceOf<StatusReferral>(
            () => _decode_StatusReferral
        );
    }
    return _cached_decoder_for_StatusReferrals(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_StatusReferrals */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StatusReferrals */
let _cached_encoder_for_StatusReferrals: $.ASN1Encoder<StatusReferrals> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StatusReferrals */

/* START_OF_SYMBOL_DEFINITION _encode_StatusReferrals */
/**
 * @summary Encodes a(n) StatusReferrals into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatusReferrals, encoded as an ASN.1 Element.
 */
export function _encode_StatusReferrals(
    value: StatusReferrals,
    elGetter: $.ASN1Encoder<StatusReferrals>
) {
    if (!_cached_encoder_for_StatusReferrals) {
        _cached_encoder_for_StatusReferrals = $._encodeSequenceOf<StatusReferral>(
            () => _encode_StatusReferral,
            $.BER
        );
    }
    return _cached_encoder_for_StatusReferrals(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_StatusReferrals */

/* eslint-enable */
