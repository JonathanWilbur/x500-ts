/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RequestShadowUpdateResultData,
    _decode_RequestShadowUpdateResultData,
    _encode_RequestShadowUpdateResultData,
} from "../DirectoryShadowAbstractService/RequestShadowUpdateResultData.ta";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export {
    RequestShadowUpdateResultData,
    _decode_RequestShadowUpdateResultData,
    _encode_RequestShadowUpdateResultData,
} from "../DirectoryShadowAbstractService/RequestShadowUpdateResultData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION RequestShadowUpdateResult */
/**
 * @summary RequestShadowUpdateResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestShadowUpdateResult  ::=  CHOICE {
 *   null         NULL,
 *   information OPTIONALLY-PROTECTED{ RequestShadowUpdateResultData },
 *   ...
 *   }
 * ```
 */
export type RequestShadowUpdateResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED<RequestShadowUpdateResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION RequestShadowUpdateResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestShadowUpdateResult */
let _cached_decoder_for_RequestShadowUpdateResult: $.ASN1Decoder<
    RequestShadowUpdateResult
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestShadowUpdateResult */

/* START_OF_SYMBOL_DEFINITION _decode_RequestShadowUpdateResult */
/**
 * @summary Decodes an ASN.1 element into a(n) RequestShadowUpdateResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestShadowUpdateResult} The decoded data structure.
 */
export function _decode_RequestShadowUpdateResult(el: _Element) {
    if (!_cached_decoder_for_RequestShadowUpdateResult) {
        _cached_decoder_for_RequestShadowUpdateResult = $._decode_extensible_choice<
            RequestShadowUpdateResult
        >({
            "UNIVERSAL 5": ["null_", $._decodeNull],
            "UNIVERSAL 16": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED<
                    RequestShadowUpdateResultData
                >(_decode_RequestShadowUpdateResultData),
            ],
        });
    }
    return _cached_decoder_for_RequestShadowUpdateResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RequestShadowUpdateResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestShadowUpdateResult */
let _cached_encoder_for_RequestShadowUpdateResult: $.ASN1Encoder<
    RequestShadowUpdateResult
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestShadowUpdateResult */

/* START_OF_SYMBOL_DEFINITION _encode_RequestShadowUpdateResult */
/**
 * @summary Encodes a(n) RequestShadowUpdateResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestShadowUpdateResult, encoded as an ASN.1 Element.
 */
export function _encode_RequestShadowUpdateResult(
    value: RequestShadowUpdateResult,
    elGetter: $.ASN1Encoder<RequestShadowUpdateResult>
) {
    if (!_cached_encoder_for_RequestShadowUpdateResult) {
        _cached_encoder_for_RequestShadowUpdateResult = $._encode_choice<
            RequestShadowUpdateResult
        >(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED<
                    RequestShadowUpdateResultData
                >(_encode_RequestShadowUpdateResultData),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RequestShadowUpdateResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RequestShadowUpdateResult */

/* eslint-enable */
