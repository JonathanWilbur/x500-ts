/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ModifyDNResultData,
    _decode_ModifyDNResultData,
    _encode_ModifyDNResultData,
} from "../DirectoryAbstractService/ModifyDNResultData.ta";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";
export {
    ModifyDNResultData,
    _decode_ModifyDNResultData,
    _encode_ModifyDNResultData,
} from "../DirectoryAbstractService/ModifyDNResultData.ta";
export {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";

/* START_OF_SYMBOL_DEFINITION ModifyDNResult */
/**
 * @summary ModifyDNResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyDNResult  ::=  CHOICE {
 *   null         NULL,
 *   information  OPTIONALLY-PROTECTED-SEQ { ModifyDNResultData },
 *   ... }
 * ```
 */
export type ModifyDNResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<ModifyDNResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ModifyDNResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyDNResult */
let _cached_decoder_for_ModifyDNResult: $.ASN1Decoder<ModifyDNResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyDNResult */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyDNResult */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyDNResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyDNResult} The decoded data structure.
 */
export function _decode_ModifyDNResult(el: _Element) {
    if (!_cached_decoder_for_ModifyDNResult) {
        _cached_decoder_for_ModifyDNResult = $._decode_extensible_choice<ModifyDNResult>(
            {
                "UNIVERSAL 5": ["null_", $._decodeNull],
                "CONTEXT 0": [
                    "information",
                    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<ModifyDNResultData>(
                        _decode_ModifyDNResultData
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ModifyDNResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyDNResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyDNResult */
let _cached_encoder_for_ModifyDNResult: $.ASN1Encoder<ModifyDNResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyDNResult */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyDNResult */
/**
 * @summary Encodes a(n) ModifyDNResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyDNResult, encoded as an ASN.1 Element.
 */
export function _encode_ModifyDNResult(
    value: ModifyDNResult,
    elGetter: $.ASN1Encoder<ModifyDNResult>
) {
    if (!_cached_encoder_for_ModifyDNResult) {
        _cached_encoder_for_ModifyDNResult = $._encode_choice<ModifyDNResult>(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<ModifyDNResultData>(
                    _encode_ModifyDNResultData
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ModifyDNResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyDNResult */

/* eslint-enable */
