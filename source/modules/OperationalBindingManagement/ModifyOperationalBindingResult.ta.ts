/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";
import {
    ModifyOperationalBindingResultData,
    _decode_ModifyOperationalBindingResultData,
    _encode_ModifyOperationalBindingResultData,
} from "../OperationalBindingManagement/ModifyOperationalBindingResultData.ta";
export {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";
export {
    ModifyOperationalBindingResultData,
    _decode_ModifyOperationalBindingResultData,
    _encode_ModifyOperationalBindingResultData,
} from "../OperationalBindingManagement/ModifyOperationalBindingResultData.ta";

/* START_OF_SYMBOL_DEFINITION ModifyOperationalBindingResult */
/**
 * @summary ModifyOperationalBindingResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyOperationalBindingResult  ::=  CHOICE {
 *   null            NULL,
 *   protected  [1]  OPTIONALLY-PROTECTED-SEQ{ ModifyOperationalBindingResultData },
 *   ... }
 * ```
 */
export type ModifyOperationalBindingResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          protected_: OPTIONALLY_PROTECTED_SEQ<
              ModifyOperationalBindingResultData
          >;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ModifyOperationalBindingResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyOperationalBindingResult */
let _cached_decoder_for_ModifyOperationalBindingResult: $.ASN1Decoder<
    ModifyOperationalBindingResult
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyOperationalBindingResult */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyOperationalBindingResult */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyOperationalBindingResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyOperationalBindingResult} The decoded data structure.
 */
export function _decode_ModifyOperationalBindingResult(el: _Element) {
    if (!_cached_decoder_for_ModifyOperationalBindingResult) {
        _cached_decoder_for_ModifyOperationalBindingResult = $._decode_extensible_choice<
            ModifyOperationalBindingResult
        >({
            "UNIVERSAL 5": ["null_", $._decodeNull],
            "CONTEXT 1": [
                "protected_",
                $._decode_explicit<
                    OPTIONALLY_PROTECTED_SEQ<ModifyOperationalBindingResultData>
                >(() =>
                    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<
                        ModifyOperationalBindingResultData
                    >(_decode_ModifyOperationalBindingResultData)
                ),
            ],
        });
    }
    return _cached_decoder_for_ModifyOperationalBindingResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyOperationalBindingResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyOperationalBindingResult */
let _cached_encoder_for_ModifyOperationalBindingResult: $.ASN1Encoder<
    ModifyOperationalBindingResult
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyOperationalBindingResult */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyOperationalBindingResult */
/**
 * @summary Encodes a(n) ModifyOperationalBindingResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyOperationalBindingResult, encoded as an ASN.1 Element.
 */
export function _encode_ModifyOperationalBindingResult(
    value: ModifyOperationalBindingResult,
    elGetter: $.ASN1Encoder<ModifyOperationalBindingResult>
) {
    if (!_cached_encoder_for_ModifyOperationalBindingResult) {
        _cached_encoder_for_ModifyOperationalBindingResult = $._encode_choice<
            ModifyOperationalBindingResult
        >(
            {
                null_: $._encodeNull,
                protected_: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<
                            ModifyOperationalBindingResultData
                        >(_encode_ModifyOperationalBindingResultData),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ModifyOperationalBindingResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyOperationalBindingResult */

/* eslint-enable */
