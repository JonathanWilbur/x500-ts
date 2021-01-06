/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION Refinement */
// TODO: CHECK_RECURSIVE_DEFINITION
/**
 * @summary Refinement
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Refinement  ::=  CHOICE {
 *   item  [0]  OBJECT-CLASS.&id,
 *   and   [1]  SET SIZE (1..MAX) OF Refinement,
 *   or    [2]  SET SIZE (1..MAX) OF Refinement,
 *   not   [3]  Refinement,
 *   ... }
 * ```
 */
export type Refinement =
    | { item: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { and: Refinement[] } /* CHOICE_ALT_ROOT */
    | { or: Refinement[] } /* CHOICE_ALT_ROOT */
    | { not: Refinement } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION Refinement */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Refinement */
let _cached_decoder_for_Refinement: $.ASN1Decoder<Refinement> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Refinement */

/* START_OF_SYMBOL_DEFINITION _decode_Refinement */
/**
 * @summary Decodes an ASN.1 element into a(n) Refinement
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Refinement} The decoded data structure.
 */
export function _decode_Refinement(el: _Element) {
    if (!_cached_decoder_for_Refinement) {
        _cached_decoder_for_Refinement = $._decode_extensible_choice<Refinement>(
            {
                "CONTEXT 0": [
                    "item",
                    $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
                "CONTEXT 1": [
                    "and",
                    $._decode_explicit<Refinement[]>(() =>
                        $._decodeSetOf<Refinement>(() => _decode_Refinement)
                    ),
                ],
                "CONTEXT 2": [
                    "or",
                    $._decode_explicit<Refinement[]>(() =>
                        $._decodeSetOf<Refinement>(() => _decode_Refinement)
                    ),
                ],
                "CONTEXT 3": [
                    "not",
                    $._decode_explicit<Refinement>(() => _decode_Refinement),
                ],
            }
        );
    }
    return _cached_decoder_for_Refinement(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Refinement */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Refinement */
let _cached_encoder_for_Refinement: $.ASN1Encoder<Refinement> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Refinement */

/* START_OF_SYMBOL_DEFINITION _encode_Refinement */
/**
 * @summary Encodes a(n) Refinement into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Refinement, encoded as an ASN.1 Element.
 */
export function _encode_Refinement(
    value: Refinement,
    elGetter: $.ASN1Encoder<Refinement>
) {
    if (!_cached_encoder_for_Refinement) {
        _cached_encoder_for_Refinement = $._encode_choice<Refinement>(
            {
                item: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeObjectIdentifier,
                    $.BER
                ),
                and: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSetOf<Refinement>(
                            () => _encode_Refinement,
                            $.BER
                        ),
                    $.BER
                ),
                or: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSetOf<Refinement>(
                            () => _encode_Refinement,
                            $.BER
                        ),
                    $.BER
                ),
                not: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_Refinement,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Refinement(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Refinement */

/* eslint-enable */
