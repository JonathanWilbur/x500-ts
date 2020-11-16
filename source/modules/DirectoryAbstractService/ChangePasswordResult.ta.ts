/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ChangePasswordResultData,
    _decode_ChangePasswordResultData,
    _encode_ChangePasswordResultData,
} from "../DirectoryAbstractService/ChangePasswordResultData.ta";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";
export {
    ChangePasswordResultData,
    _decode_ChangePasswordResultData,
    _encode_ChangePasswordResultData,
} from "../DirectoryAbstractService/ChangePasswordResultData.ta";
export {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";

/* START_OF_SYMBOL_DEFINITION ChangePasswordResult */
/**
 * @summary ChangePasswordResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChangePasswordResult  ::=  CHOICE {
 *   null        NULL,
 *   information OPTIONALLY-PROTECTED-SEQ { ChangePasswordResultData },
 *   ...}
 * ```
 */
export type ChangePasswordResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<ChangePasswordResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ChangePasswordResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ChangePasswordResult */
let _cached_decoder_for_ChangePasswordResult: $.ASN1Decoder<
    ChangePasswordResult
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ChangePasswordResult */

/* START_OF_SYMBOL_DEFINITION _decode_ChangePasswordResult */
/**
 * @summary Decodes an ASN.1 element into a(n) ChangePasswordResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChangePasswordResult} The decoded data structure.
 */
export function _decode_ChangePasswordResult(el: _Element) {
    if (!_cached_decoder_for_ChangePasswordResult) {
        _cached_decoder_for_ChangePasswordResult = $._decode_extensible_choice<
            ChangePasswordResult
        >({
            "UNIVERSAL 5": ["null_", $._decodeNull],
            "CONTEXT 0": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
                    ChangePasswordResultData
                >(_decode_ChangePasswordResultData),
            ],
        });
    }
    return _cached_decoder_for_ChangePasswordResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ChangePasswordResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ChangePasswordResult */
let _cached_encoder_for_ChangePasswordResult: $.ASN1Encoder<
    ChangePasswordResult
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ChangePasswordResult */

/* START_OF_SYMBOL_DEFINITION _encode_ChangePasswordResult */
/**
 * @summary Encodes a(n) ChangePasswordResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangePasswordResult, encoded as an ASN.1 Element.
 */
export function _encode_ChangePasswordResult(
    value: ChangePasswordResult,
    elGetter: $.ASN1Encoder<ChangePasswordResult>
) {
    if (!_cached_encoder_for_ChangePasswordResult) {
        _cached_encoder_for_ChangePasswordResult = $._encode_choice<
            ChangePasswordResult
        >(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
                    ChangePasswordResultData
                >(_encode_ChangePasswordResultData),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ChangePasswordResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ChangePasswordResult */

/* eslint-enable */
