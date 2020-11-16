/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AbandonResultData,
    _decode_AbandonResultData,
    _encode_AbandonResultData,
} from "../DirectoryAbstractService/AbandonResultData.ta";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";
export {
    AbandonResultData,
    _decode_AbandonResultData,
    _encode_AbandonResultData,
} from "../DirectoryAbstractService/AbandonResultData.ta";
export {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";

/* START_OF_SYMBOL_DEFINITION AbandonResult */
/**
 * @summary AbandonResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AbandonResult  ::=  CHOICE {
 *   null          NULL,
 *   information   OPTIONALLY-PROTECTED-SEQ { AbandonResultData },
 *   ... }
 * ```
 */
export type AbandonResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<AbandonResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION AbandonResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AbandonResult */
let _cached_decoder_for_AbandonResult: $.ASN1Decoder<
    AbandonResult
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AbandonResult */

/* START_OF_SYMBOL_DEFINITION _decode_AbandonResult */
/**
 * @summary Decodes an ASN.1 element into a(n) AbandonResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AbandonResult} The decoded data structure.
 */
export function _decode_AbandonResult(el: _Element) {
    if (!_cached_decoder_for_AbandonResult) {
        _cached_decoder_for_AbandonResult = $._decode_extensible_choice<
            AbandonResult
        >({
            "UNIVERSAL 5": ["null_", $._decodeNull],
            "CONTEXT 0": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<AbandonResultData>(
                    _decode_AbandonResultData
                ),
            ],
        });
    }
    return _cached_decoder_for_AbandonResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AbandonResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AbandonResult */
let _cached_encoder_for_AbandonResult: $.ASN1Encoder<
    AbandonResult
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AbandonResult */

/* START_OF_SYMBOL_DEFINITION _encode_AbandonResult */
/**
 * @summary Encodes a(n) AbandonResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbandonResult, encoded as an ASN.1 Element.
 */
export function _encode_AbandonResult(
    value: AbandonResult,
    elGetter: $.ASN1Encoder<AbandonResult>
) {
    if (!_cached_encoder_for_AbandonResult) {
        _cached_encoder_for_AbandonResult = $._encode_choice<AbandonResult>(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
                    AbandonResultData
                >(_encode_AbandonResultData),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AbandonResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AbandonResult */

/* eslint-enable */
