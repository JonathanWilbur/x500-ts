/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AssertionValue,
    _decode_AssertionValue,
    _encode_AssertionValue,
} from "../Lightweight_Directory_Access_Protocol_V3/AssertionValue.ta";
export {
    AssertionValue,
    _decode_AssertionValue,
    _encode_AssertionValue,
} from "../Lightweight_Directory_Access_Protocol_V3/AssertionValue.ta";

/* START_OF_SYMBOL_DEFINITION SubstringFilter_substrings_substring */
/**
 * @summary SubstringFilter_substrings_substring
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringFilter-substrings-substring ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type SubstringFilter_substrings_substring =
    | { initial: AssertionValue } /* CHOICE_ALT_ROOT */
    | { any_: AssertionValue } /* CHOICE_ALT_ROOT */
    | { final: AssertionValue } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION SubstringFilter_substrings_substring */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringFilter_substrings_substring */
let _cached_decoder_for_SubstringFilter_substrings_substring: $.ASN1Decoder<
    SubstringFilter_substrings_substring
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringFilter_substrings_substring */

/* START_OF_SYMBOL_DEFINITION _decode_SubstringFilter_substrings_substring */
/**
 * @summary Decodes an ASN.1 element into a(n) SubstringFilter_substrings_substring
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubstringFilter_substrings_substring} The decoded data structure.
 */
export function _decode_SubstringFilter_substrings_substring(el: _Element) {
    if (!_cached_decoder_for_SubstringFilter_substrings_substring) {
        _cached_decoder_for_SubstringFilter_substrings_substring = $._decode_extensible_choice<
            SubstringFilter_substrings_substring
        >({
            "CONTEXT 0": [
                "initial",
                $._decode_implicit<AssertionValue>(
                    () => _decode_AssertionValue
                ),
            ],
            "CONTEXT 1": [
                "any_",
                $._decode_implicit<AssertionValue>(
                    () => _decode_AssertionValue
                ),
            ],
            "CONTEXT 2": [
                "final",
                $._decode_implicit<AssertionValue>(
                    () => _decode_AssertionValue
                ),
            ],
        });
    }
    return _cached_decoder_for_SubstringFilter_substrings_substring(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubstringFilter_substrings_substring */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringFilter_substrings_substring */
let _cached_encoder_for_SubstringFilter_substrings_substring: $.ASN1Encoder<
    SubstringFilter_substrings_substring
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringFilter_substrings_substring */

/* START_OF_SYMBOL_DEFINITION _encode_SubstringFilter_substrings_substring */
/**
 * @summary Encodes a(n) SubstringFilter_substrings_substring into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubstringFilter_substrings_substring, encoded as an ASN.1 Element.
 */
export function _encode_SubstringFilter_substrings_substring(
    value: SubstringFilter_substrings_substring,
    elGetter: $.ASN1Encoder<SubstringFilter_substrings_substring>
) {
    if (!_cached_encoder_for_SubstringFilter_substrings_substring) {
        _cached_encoder_for_SubstringFilter_substrings_substring = $._encode_choice<
            SubstringFilter_substrings_substring
        >(
            {
                initial: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AssertionValue,
                    $.BER
                ),
                any_: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AssertionValue,
                    $.BER
                ),
                final: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_AssertionValue,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_SubstringFilter_substrings_substring(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_SubstringFilter_substrings_substring */

/* eslint-enable */
