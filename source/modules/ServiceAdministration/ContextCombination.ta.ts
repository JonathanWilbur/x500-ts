/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { CONTEXT } from "../InformationFramework/CONTEXT.oca";
export { SupportedContexts } from "../InformationFramework/SupportedContexts.osa";

/* START_OF_SYMBOL_DEFINITION ContextCombination */
// TODO: CHECK_RECURSIVE_DEFINITION
/**
 * @summary ContextCombination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContextCombination  ::=  CHOICE {
 *   context  [0]  CONTEXT.&id({SupportedContexts}),
 *   and      [1]  SEQUENCE OF ContextCombination,
 *   or       [2]  SEQUENCE OF ContextCombination,
 *   not      [3]  ContextCombination,
 *   ... }
 * ```
 */
export type ContextCombination =
    | { context: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { and: ContextCombination[] } /* CHOICE_ALT_ROOT */
    | { or: ContextCombination[] } /* CHOICE_ALT_ROOT */
    | { not: ContextCombination } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ContextCombination */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContextCombination */
let _cached_decoder_for_ContextCombination: $.ASN1Decoder<ContextCombination> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContextCombination */

/* START_OF_SYMBOL_DEFINITION _decode_ContextCombination */
/**
 * @summary Decodes an ASN.1 element into a(n) ContextCombination
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContextCombination} The decoded data structure.
 */
export function _decode_ContextCombination(el: _Element) {
    if (!_cached_decoder_for_ContextCombination) {
        _cached_decoder_for_ContextCombination = $._decode_extensible_choice<ContextCombination>(
            {
                "CONTEXT 0": [
                    "context",
                    $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
                "CONTEXT 1": [
                    "and",
                    $._decode_explicit<ContextCombination[]>(() =>
                        $._decodeSequenceOf<ContextCombination>(
                            () => _decode_ContextCombination
                        )
                    ),
                ],
                "CONTEXT 2": [
                    "or",
                    $._decode_explicit<ContextCombination[]>(() =>
                        $._decodeSequenceOf<ContextCombination>(
                            () => _decode_ContextCombination
                        )
                    ),
                ],
                "CONTEXT 3": [
                    "not",
                    $._decode_explicit<ContextCombination>(
                        () => _decode_ContextCombination
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ContextCombination(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContextCombination */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContextCombination */
let _cached_encoder_for_ContextCombination: $.ASN1Encoder<ContextCombination> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContextCombination */

/* START_OF_SYMBOL_DEFINITION _encode_ContextCombination */
/**
 * @summary Encodes a(n) ContextCombination into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextCombination, encoded as an ASN.1 Element.
 */
export function _encode_ContextCombination(
    value: ContextCombination,
    elGetter: $.ASN1Encoder<ContextCombination>
) {
    if (!_cached_encoder_for_ContextCombination) {
        _cached_encoder_for_ContextCombination = $._encode_choice<ContextCombination>(
            {
                context: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
                and: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSequenceOf<ContextCombination>(
                            () => _encode_ContextCombination,
                            $.BER
                        ),
                    $.BER
                ),
                or: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSequenceOf<ContextCombination>(
                            () => _encode_ContextCombination,
                            $.BER
                        ),
                    $.BER
                ),
                not: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_ContextCombination,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ContextCombination(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContextCombination */

/* eslint-enable */
