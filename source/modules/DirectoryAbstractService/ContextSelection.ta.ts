/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    TypeAndContextAssertion,
    _decode_TypeAndContextAssertion,
    _encode_TypeAndContextAssertion,
} from "../DirectoryAbstractService/TypeAndContextAssertion.ta";
export {
    TypeAndContextAssertion,
    _decode_TypeAndContextAssertion,
    _encode_TypeAndContextAssertion,
} from "../DirectoryAbstractService/TypeAndContextAssertion.ta";

/* START_OF_SYMBOL_DEFINITION ContextSelection */
/**
 * @summary ContextSelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContextSelection  ::=  CHOICE {
 *   allContexts       NULL,
 *   selectedContexts  SET SIZE (1..MAX) OF TypeAndContextAssertion,
 *   ... }
 * ```
 */
export type ContextSelection =
    | { allContexts: NULL } /* CHOICE_ALT_ROOT */
    | { selectedContexts: TypeAndContextAssertion[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ContextSelection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContextSelection */
let _cached_decoder_for_ContextSelection: $.ASN1Decoder<ContextSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContextSelection */

/* START_OF_SYMBOL_DEFINITION _decode_ContextSelection */
/**
 * @summary Decodes an ASN.1 element into a(n) ContextSelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContextSelection} The decoded data structure.
 */
export function _decode_ContextSelection(el: _Element) {
    if (!_cached_decoder_for_ContextSelection) {
        _cached_decoder_for_ContextSelection = $._decode_extensible_choice<ContextSelection>(
            {
                "UNIVERSAL 5": ["allContexts", $._decodeNull],
                "UNIVERSAL 17": [
                    "selectedContexts",
                    $._decodeSetOf<TypeAndContextAssertion>(
                        () => _decode_TypeAndContextAssertion
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ContextSelection(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContextSelection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContextSelection */
let _cached_encoder_for_ContextSelection: $.ASN1Encoder<ContextSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContextSelection */

/* START_OF_SYMBOL_DEFINITION _encode_ContextSelection */
/**
 * @summary Encodes a(n) ContextSelection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextSelection, encoded as an ASN.1 Element.
 */
export function _encode_ContextSelection(
    value: ContextSelection,
    elGetter: $.ASN1Encoder<ContextSelection>
) {
    if (!_cached_encoder_for_ContextSelection) {
        _cached_encoder_for_ContextSelection = $._encode_choice<ContextSelection>(
            {
                allContexts: $._encodeNull,
                selectedContexts: $._encodeSetOf<TypeAndContextAssertion>(
                    () => _encode_TypeAndContextAssertion,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ContextSelection(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContextSelection */

/* eslint-enable */
