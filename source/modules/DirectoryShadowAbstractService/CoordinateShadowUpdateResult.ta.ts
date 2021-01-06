/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CoordinateShadowUpdateResultData,
    _decode_CoordinateShadowUpdateResultData,
    _encode_CoordinateShadowUpdateResultData,
} from "../DirectoryShadowAbstractService/CoordinateShadowUpdateResultData.ta";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export {
    CoordinateShadowUpdateResultData,
    _decode_CoordinateShadowUpdateResultData,
    _encode_CoordinateShadowUpdateResultData,
} from "../DirectoryShadowAbstractService/CoordinateShadowUpdateResultData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION CoordinateShadowUpdateResult */
/**
 * @summary CoordinateShadowUpdateResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CoordinateShadowUpdateResult  ::=  CHOICE {
 *   null         NULL,
 *   information  OPTIONALLY-PROTECTED{ CoordinateShadowUpdateResultData },
 *   ...}
 * ```
 */
export type CoordinateShadowUpdateResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED<CoordinateShadowUpdateResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CoordinateShadowUpdateResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CoordinateShadowUpdateResult */
let _cached_decoder_for_CoordinateShadowUpdateResult: $.ASN1Decoder<CoordinateShadowUpdateResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CoordinateShadowUpdateResult */

/* START_OF_SYMBOL_DEFINITION _decode_CoordinateShadowUpdateResult */
/**
 * @summary Decodes an ASN.1 element into a(n) CoordinateShadowUpdateResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CoordinateShadowUpdateResult} The decoded data structure.
 */
export function _decode_CoordinateShadowUpdateResult(el: _Element) {
    if (!_cached_decoder_for_CoordinateShadowUpdateResult) {
        _cached_decoder_for_CoordinateShadowUpdateResult = $._decode_extensible_choice<CoordinateShadowUpdateResult>(
            {
                "UNIVERSAL 5": ["null_", $._decodeNull],
                "UNIVERSAL 16": [
                    "information",
                    _get_decoder_for_OPTIONALLY_PROTECTED<CoordinateShadowUpdateResultData>(
                        _decode_CoordinateShadowUpdateResultData
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CoordinateShadowUpdateResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CoordinateShadowUpdateResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CoordinateShadowUpdateResult */
let _cached_encoder_for_CoordinateShadowUpdateResult: $.ASN1Encoder<CoordinateShadowUpdateResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CoordinateShadowUpdateResult */

/* START_OF_SYMBOL_DEFINITION _encode_CoordinateShadowUpdateResult */
/**
 * @summary Encodes a(n) CoordinateShadowUpdateResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoordinateShadowUpdateResult, encoded as an ASN.1 Element.
 */
export function _encode_CoordinateShadowUpdateResult(
    value: CoordinateShadowUpdateResult,
    elGetter: $.ASN1Encoder<CoordinateShadowUpdateResult>
) {
    if (!_cached_encoder_for_CoordinateShadowUpdateResult) {
        _cached_encoder_for_CoordinateShadowUpdateResult = $._encode_choice<CoordinateShadowUpdateResult>(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED<CoordinateShadowUpdateResultData>(
                    _encode_CoordinateShadowUpdateResultData
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CoordinateShadowUpdateResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CoordinateShadowUpdateResult */

/* eslint-enable */
