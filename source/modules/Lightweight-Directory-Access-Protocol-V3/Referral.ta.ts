/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    URI,
    _decode_URI,
    _encode_URI,
} from "../Lightweight-Directory-Access-Protocol-V3/URI.ta";
export {
    URI,
    _decode_URI,
    _encode_URI,
} from "../Lightweight-Directory-Access-Protocol-V3/URI.ta";

/* START_OF_SYMBOL_DEFINITION Referral */
/**
 * @summary Referral
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Referral  ::=  SEQUENCE SIZE (1..MAX) OF uri URI
 * ```
 */
export type Referral = URI[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Referral */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Referral */
let _cached_decoder_for_Referral: $.ASN1Decoder<Referral> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Referral */

/* START_OF_SYMBOL_DEFINITION _decode_Referral */
/**
 * @summary Decodes an ASN.1 element into a(n) Referral
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Referral} The decoded data structure.
 */
export function _decode_Referral(el: _Element) {
    if (!_cached_decoder_for_Referral) {
        _cached_decoder_for_Referral = $._decodeSequenceOf<URI>(
            () => _decode_URI
        );
    }
    return _cached_decoder_for_Referral(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Referral */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Referral */
let _cached_encoder_for_Referral: $.ASN1Encoder<Referral> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Referral */

/* START_OF_SYMBOL_DEFINITION _encode_Referral */
/**
 * @summary Encodes a(n) Referral into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Referral, encoded as an ASN.1 Element.
 */
export function _encode_Referral(
    value: Referral,
    elGetter: $.ASN1Encoder<Referral>
) {
    if (!_cached_encoder_for_Referral) {
        _cached_encoder_for_Referral = $._encodeSequenceOf<URI>(
            () => _encode_URI,
            $.BER
        );
    }
    return _cached_encoder_for_Referral(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Referral */

/* eslint-enable */
