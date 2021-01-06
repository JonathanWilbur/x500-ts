/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    RemoveEntryResultData,
    _decode_RemoveEntryResultData,
    _encode_RemoveEntryResultData,
} from "../DirectoryAbstractService/RemoveEntryResultData.ta";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";
export {
    RemoveEntryResultData,
    _decode_RemoveEntryResultData,
    _encode_RemoveEntryResultData,
} from "../DirectoryAbstractService/RemoveEntryResultData.ta";
export {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";

/* START_OF_SYMBOL_DEFINITION RemoveEntryResult */
/**
 * @summary RemoveEntryResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveEntryResult  ::=  CHOICE {
 *   null          NULL,
 *   information   OPTIONALLY-PROTECTED-SEQ { RemoveEntryResultData },
 *   ... }
 * ```
 */
export type RemoveEntryResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<RemoveEntryResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION RemoveEntryResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveEntryResult */
let _cached_decoder_for_RemoveEntryResult: $.ASN1Decoder<RemoveEntryResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveEntryResult */

/* START_OF_SYMBOL_DEFINITION _decode_RemoveEntryResult */
/**
 * @summary Decodes an ASN.1 element into a(n) RemoveEntryResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveEntryResult} The decoded data structure.
 */
export function _decode_RemoveEntryResult(el: _Element) {
    if (!_cached_decoder_for_RemoveEntryResult) {
        _cached_decoder_for_RemoveEntryResult = $._decode_extensible_choice<RemoveEntryResult>(
            {
                "UNIVERSAL 5": ["null_", $._decodeNull],
                "CONTEXT 0": [
                    "information",
                    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<RemoveEntryResultData>(
                        _decode_RemoveEntryResultData
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_RemoveEntryResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RemoveEntryResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveEntryResult */
let _cached_encoder_for_RemoveEntryResult: $.ASN1Encoder<RemoveEntryResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveEntryResult */

/* START_OF_SYMBOL_DEFINITION _encode_RemoveEntryResult */
/**
 * @summary Encodes a(n) RemoveEntryResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveEntryResult, encoded as an ASN.1 Element.
 */
export function _encode_RemoveEntryResult(
    value: RemoveEntryResult,
    elGetter: $.ASN1Encoder<RemoveEntryResult>
) {
    if (!_cached_encoder_for_RemoveEntryResult) {
        _cached_encoder_for_RemoveEntryResult = $._encode_choice<RemoveEntryResult>(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<RemoveEntryResultData>(
                    _encode_RemoveEntryResultData
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RemoveEntryResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RemoveEntryResult */

/* eslint-enable */
