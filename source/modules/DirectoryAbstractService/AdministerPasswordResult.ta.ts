/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AdministerPasswordResultData,
    _decode_AdministerPasswordResultData,
    _encode_AdministerPasswordResultData,
} from "../DirectoryAbstractService/AdministerPasswordResultData.ta";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";
export {
    AdministerPasswordResultData,
    _decode_AdministerPasswordResultData,
    _encode_AdministerPasswordResultData,
} from "../DirectoryAbstractService/AdministerPasswordResultData.ta";
export {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";

/* START_OF_SYMBOL_DEFINITION AdministerPasswordResult */
/**
 * @summary AdministerPasswordResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdministerPasswordResult  ::=  CHOICE {
 *   null NULL,
 *   information OPTIONALLY-PROTECTED-SEQ { AdministerPasswordResultData },
 *   ...}
 * ```
 */
export type AdministerPasswordResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<AdministerPasswordResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION AdministerPasswordResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministerPasswordResult */
let _cached_decoder_for_AdministerPasswordResult: $.ASN1Decoder<AdministerPasswordResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministerPasswordResult */

/* START_OF_SYMBOL_DEFINITION _decode_AdministerPasswordResult */
/**
 * @summary Decodes an ASN.1 element into a(n) AdministerPasswordResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdministerPasswordResult} The decoded data structure.
 */
export function _decode_AdministerPasswordResult(el: _Element) {
    if (!_cached_decoder_for_AdministerPasswordResult) {
        _cached_decoder_for_AdministerPasswordResult = $._decode_extensible_choice<AdministerPasswordResult>(
            {
                "UNIVERSAL 5": ["null_", $._decodeNull],
                "CONTEXT 0": [
                    "information",
                    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<AdministerPasswordResultData>(
                        _decode_AdministerPasswordResultData
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_AdministerPasswordResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AdministerPasswordResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministerPasswordResult */
let _cached_encoder_for_AdministerPasswordResult: $.ASN1Encoder<AdministerPasswordResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministerPasswordResult */

/* START_OF_SYMBOL_DEFINITION _encode_AdministerPasswordResult */
/**
 * @summary Encodes a(n) AdministerPasswordResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdministerPasswordResult, encoded as an ASN.1 Element.
 */
export function _encode_AdministerPasswordResult(
    value: AdministerPasswordResult,
    elGetter: $.ASN1Encoder<AdministerPasswordResult>
) {
    if (!_cached_encoder_for_AdministerPasswordResult) {
        _cached_encoder_for_AdministerPasswordResult = $._encode_choice<AdministerPasswordResult>(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<AdministerPasswordResultData>(
                    _encode_AdministerPasswordResultData
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AdministerPasswordResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AdministerPasswordResult */

/* eslint-enable */
