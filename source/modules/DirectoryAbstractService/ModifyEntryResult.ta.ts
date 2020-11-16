/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ModifyEntryResultData,
    _decode_ModifyEntryResultData,
    _encode_ModifyEntryResultData,
} from "../DirectoryAbstractService/ModifyEntryResultData.ta";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";
export {
    ModifyEntryResultData,
    _decode_ModifyEntryResultData,
    _encode_ModifyEntryResultData,
} from "../DirectoryAbstractService/ModifyEntryResultData.ta";
export {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";

/* START_OF_SYMBOL_DEFINITION ModifyEntryResult */
/**
 * @summary ModifyEntryResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyEntryResult  ::=  CHOICE {
 *   null         NULL,
 *   information  OPTIONALLY-PROTECTED-SEQ { ModifyEntryResultData },
 *   ... }
 * ```
 */
export type ModifyEntryResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<ModifyEntryResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ModifyEntryResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyEntryResult */
let _cached_decoder_for_ModifyEntryResult: $.ASN1Decoder<
    ModifyEntryResult
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyEntryResult */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyEntryResult */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyEntryResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyEntryResult} The decoded data structure.
 */
export function _decode_ModifyEntryResult(el: _Element) {
    if (!_cached_decoder_for_ModifyEntryResult) {
        _cached_decoder_for_ModifyEntryResult = $._decode_extensible_choice<
            ModifyEntryResult
        >({
            "UNIVERSAL 5": ["null_", $._decodeNull],
            "CONTEXT 0": [
                "information",
                _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
                    ModifyEntryResultData
                >(_decode_ModifyEntryResultData),
            ],
        });
    }
    return _cached_decoder_for_ModifyEntryResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyEntryResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyEntryResult */
let _cached_encoder_for_ModifyEntryResult: $.ASN1Encoder<
    ModifyEntryResult
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyEntryResult */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyEntryResult */
/**
 * @summary Encodes a(n) ModifyEntryResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyEntryResult, encoded as an ASN.1 Element.
 */
export function _encode_ModifyEntryResult(
    value: ModifyEntryResult,
    elGetter: $.ASN1Encoder<ModifyEntryResult>
) {
    if (!_cached_encoder_for_ModifyEntryResult) {
        _cached_encoder_for_ModifyEntryResult = $._encode_choice<
            ModifyEntryResult
        >(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
                    ModifyEntryResultData
                >(_encode_ModifyEntryResultData),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ModifyEntryResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyEntryResult */

/* eslint-enable */
