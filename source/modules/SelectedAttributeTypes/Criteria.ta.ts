/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CriteriaItem,
    _decode_CriteriaItem,
    _encode_CriteriaItem,
} from "../SelectedAttributeTypes/CriteriaItem.ta";
export {
    CriteriaItem,
    _decode_CriteriaItem,
    _encode_CriteriaItem,
} from "../SelectedAttributeTypes/CriteriaItem.ta";

/* START_OF_SYMBOL_DEFINITION Criteria */
// TODO: CHECK_RECURSIVE_DEFINITION
/**
 * @summary Criteria
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Criteria  ::=  CHOICE {
 *   type  [0]  CriteriaItem,
 *   and   [1]  SET OF Criteria,
 *   or    [2]  SET OF Criteria,
 *   not   [3]  Criteria,
 *   ... }
 * ```
 */
export type Criteria =
    | { type_: CriteriaItem } /* CHOICE_ALT_ROOT */
    | { and: Criteria[] } /* CHOICE_ALT_ROOT */
    | { or: Criteria[] } /* CHOICE_ALT_ROOT */
    | { not: Criteria } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION Criteria */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Criteria */
let _cached_decoder_for_Criteria: $.ASN1Decoder<Criteria> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Criteria */

/* START_OF_SYMBOL_DEFINITION _decode_Criteria */
/**
 * @summary Decodes an ASN.1 element into a(n) Criteria
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Criteria} The decoded data structure.
 */
export function _decode_Criteria(el: _Element) {
    if (!_cached_decoder_for_Criteria) {
        _cached_decoder_for_Criteria = $._decode_extensible_choice<Criteria>({
            "CONTEXT 0": [
                "type_",
                $._decode_explicit<CriteriaItem>(() => _decode_CriteriaItem),
            ],
            "CONTEXT 1": [
                "and",
                $._decode_explicit<Criteria[]>(() =>
                    $._decodeSetOf<Criteria>(() => _decode_Criteria)
                ),
            ],
            "CONTEXT 2": [
                "or",
                $._decode_explicit<Criteria[]>(() =>
                    $._decodeSetOf<Criteria>(() => _decode_Criteria)
                ),
            ],
            "CONTEXT 3": [
                "not",
                $._decode_explicit<Criteria>(() => _decode_Criteria),
            ],
        });
    }
    return _cached_decoder_for_Criteria(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Criteria */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Criteria */
let _cached_encoder_for_Criteria: $.ASN1Encoder<Criteria> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Criteria */

/* START_OF_SYMBOL_DEFINITION _encode_Criteria */
/**
 * @summary Encodes a(n) Criteria into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Criteria, encoded as an ASN.1 Element.
 */
export function _encode_Criteria(
    value: Criteria,
    elGetter: $.ASN1Encoder<Criteria>
) {
    if (!_cached_encoder_for_Criteria) {
        _cached_encoder_for_Criteria = $._encode_choice<Criteria>(
            {
                type_: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CriteriaItem,
                    $.BER
                ),
                and: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSetOf<Criteria>(() => _encode_Criteria, $.BER),
                    $.BER
                ),
                or: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () =>
                        $._encodeSetOf<Criteria>(() => _encode_Criteria, $.BER),
                    $.BER
                ),
                not: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_Criteria,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_Criteria(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Criteria */

/* eslint-enable */
