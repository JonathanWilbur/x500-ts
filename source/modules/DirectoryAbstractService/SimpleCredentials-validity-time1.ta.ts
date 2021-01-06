/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime, UTCTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION SimpleCredentials_validity_time1 */
/**
 * @summary SimpleCredentials_validity_time1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SimpleCredentials-validity-time1 ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type SimpleCredentials_validity_time1 =
    | { utc: UTCTime } /* CHOICE_ALT_ROOT */
    | { gt: GeneralizedTime } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SimpleCredentials_validity_time1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SimpleCredentials_validity_time1 */
let _cached_decoder_for_SimpleCredentials_validity_time1: $.ASN1Decoder<SimpleCredentials_validity_time1> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SimpleCredentials_validity_time1 */

/* START_OF_SYMBOL_DEFINITION _decode_SimpleCredentials_validity_time1 */
/**
 * @summary Decodes an ASN.1 element into a(n) SimpleCredentials_validity_time1
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SimpleCredentials_validity_time1} The decoded data structure.
 */
export function _decode_SimpleCredentials_validity_time1(el: _Element) {
    if (!_cached_decoder_for_SimpleCredentials_validity_time1) {
        _cached_decoder_for_SimpleCredentials_validity_time1 = $._decode_inextensible_choice<SimpleCredentials_validity_time1>(
            {
                "UNIVERSAL 23": ["utc", $._decodeUTCTime],
                "UNIVERSAL 24": ["gt", $._decodeGeneralizedTime],
            }
        );
    }
    return _cached_decoder_for_SimpleCredentials_validity_time1(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SimpleCredentials_validity_time1 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SimpleCredentials_validity_time1 */
let _cached_encoder_for_SimpleCredentials_validity_time1: $.ASN1Encoder<SimpleCredentials_validity_time1> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SimpleCredentials_validity_time1 */

/* START_OF_SYMBOL_DEFINITION _encode_SimpleCredentials_validity_time1 */
/**
 * @summary Encodes a(n) SimpleCredentials_validity_time1 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SimpleCredentials_validity_time1, encoded as an ASN.1 Element.
 */
export function _encode_SimpleCredentials_validity_time1(
    value: SimpleCredentials_validity_time1,
    elGetter: $.ASN1Encoder<SimpleCredentials_validity_time1>
) {
    if (!_cached_encoder_for_SimpleCredentials_validity_time1) {
        _cached_encoder_for_SimpleCredentials_validity_time1 = $._encode_choice<SimpleCredentials_validity_time1>(
            {
                utc: $._encodeUTCTime,
                gt: $._encodeGeneralizedTime,
            },
            $.BER
        );
    }
    return _cached_encoder_for_SimpleCredentials_validity_time1(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_SimpleCredentials_validity_time1 */

/* eslint-enable */
