/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    UpdateShadowResultData,
    _decode_UpdateShadowResultData,
    _encode_UpdateShadowResultData,
} from "../DirectoryShadowAbstractService/UpdateShadowResultData.ta";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export {
    UpdateShadowResultData,
    _decode_UpdateShadowResultData,
    _encode_UpdateShadowResultData,
} from "../DirectoryShadowAbstractService/UpdateShadowResultData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION UpdateShadowResult */
/**
 * @summary UpdateShadowResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UpdateShadowResult  ::=  CHOICE {
 *   null         NULL,
 *   information OPTIONALLY-PROTECTED{ UpdateShadowResultData },
 *   ...}
 * ```
 */
export type UpdateShadowResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED<UpdateShadowResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION UpdateShadowResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UpdateShadowResult */
let _cached_decoder_for_UpdateShadowResult: $.ASN1Decoder<
    UpdateShadowResult
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UpdateShadowResult */

/* START_OF_SYMBOL_DEFINITION _decode_UpdateShadowResult */
/**
 * @summary Decodes an ASN.1 element into a(n) UpdateShadowResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UpdateShadowResult} The decoded data structure.
 */
export function _decode_UpdateShadowResult(el: _Element) {
    if (!_cached_decoder_for_UpdateShadowResult) {
        _cached_decoder_for_UpdateShadowResult = $._decode_extensible_choice<
            UpdateShadowResult
        >({
            "UNIVERSAL 5": ["null_", $._decodeNull],
            "UNIVERSAL 16": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED<UpdateShadowResultData>(
                    _decode_UpdateShadowResultData
                ),
            ],
        });
    }
    return _cached_decoder_for_UpdateShadowResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UpdateShadowResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UpdateShadowResult */
let _cached_encoder_for_UpdateShadowResult: $.ASN1Encoder<
    UpdateShadowResult
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UpdateShadowResult */

/* START_OF_SYMBOL_DEFINITION _encode_UpdateShadowResult */
/**
 * @summary Encodes a(n) UpdateShadowResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateShadowResult, encoded as an ASN.1 Element.
 */
export function _encode_UpdateShadowResult(
    value: UpdateShadowResult,
    elGetter: $.ASN1Encoder<UpdateShadowResult>
) {
    if (!_cached_encoder_for_UpdateShadowResult) {
        _cached_encoder_for_UpdateShadowResult = $._encode_choice<
            UpdateShadowResult
        >(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED<
                    UpdateShadowResultData
                >(_encode_UpdateShadowResultData),
            },
            $.BER
        );
    }
    return _cached_encoder_for_UpdateShadowResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UpdateShadowResult */

/* eslint-enable */
