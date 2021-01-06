/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
import {
    AttributeTypeAndValue,
    _decode_AttributeTypeAndValue,
    _encode_AttributeTypeAndValue,
} from "../InformationFramework/AttributeTypeAndValue.ta";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
export {
    AttributeTypeAndValue,
    _decode_AttributeTypeAndValue,
    _encode_AttributeTypeAndValue,
} from "../InformationFramework/AttributeTypeAndValue.ta";

/* START_OF_SYMBOL_DEFINITION EntryModification */
/**
 * @summary EntryModification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryModification  ::=  CHOICE {
 *   addAttribute     [0]  Attribute{{SupportedAttributes}},
 *   removeAttribute  [1]  AttributeType,
 *   addValues        [2]  Attribute{{SupportedAttributes}},
 *   removeValues     [3]  Attribute{{SupportedAttributes}},
 *   alterValues      [4]  AttributeTypeAndValue,
 *   resetValue       [5]  AttributeType,
 *   replaceValues    [6]  Attribute{{SupportedAttributes}},
 *   ... }
 * ```
 */
export type EntryModification =
    | { addAttribute: Attribute } /* CHOICE_ALT_ROOT */
    | { removeAttribute: AttributeType } /* CHOICE_ALT_ROOT */
    | { addValues: Attribute } /* CHOICE_ALT_ROOT */
    | { removeValues: Attribute } /* CHOICE_ALT_ROOT */
    | { alterValues: AttributeTypeAndValue } /* CHOICE_ALT_ROOT */
    | { resetValue: AttributeType } /* CHOICE_ALT_ROOT */
    | { replaceValues: Attribute } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION EntryModification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryModification */
let _cached_decoder_for_EntryModification: $.ASN1Decoder<EntryModification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryModification */

/* START_OF_SYMBOL_DEFINITION _decode_EntryModification */
/**
 * @summary Decodes an ASN.1 element into a(n) EntryModification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryModification} The decoded data structure.
 */
export function _decode_EntryModification(el: _Element) {
    if (!_cached_decoder_for_EntryModification) {
        _cached_decoder_for_EntryModification = $._decode_extensible_choice<EntryModification>(
            {
                "CONTEXT 0": [
                    "addAttribute",
                    $._decode_explicit<Attribute>(() => _decode_Attribute),
                ],
                "CONTEXT 1": [
                    "removeAttribute",
                    $._decode_explicit<AttributeType>(
                        () => _decode_AttributeType
                    ),
                ],
                "CONTEXT 2": [
                    "addValues",
                    $._decode_explicit<Attribute>(() => _decode_Attribute),
                ],
                "CONTEXT 3": [
                    "removeValues",
                    $._decode_explicit<Attribute>(() => _decode_Attribute),
                ],
                "CONTEXT 4": [
                    "alterValues",
                    $._decode_explicit<AttributeTypeAndValue>(
                        () => _decode_AttributeTypeAndValue
                    ),
                ],
                "CONTEXT 5": [
                    "resetValue",
                    $._decode_explicit<AttributeType>(
                        () => _decode_AttributeType
                    ),
                ],
                "CONTEXT 6": [
                    "replaceValues",
                    $._decode_explicit<Attribute>(() => _decode_Attribute),
                ],
            }
        );
    }
    return _cached_decoder_for_EntryModification(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntryModification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryModification */
let _cached_encoder_for_EntryModification: $.ASN1Encoder<EntryModification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryModification */

/* START_OF_SYMBOL_DEFINITION _encode_EntryModification */
/**
 * @summary Encodes a(n) EntryModification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryModification, encoded as an ASN.1 Element.
 */
export function _encode_EntryModification(
    value: EntryModification,
    elGetter: $.ASN1Encoder<EntryModification>
) {
    if (!_cached_encoder_for_EntryModification) {
        _cached_encoder_for_EntryModification = $._encode_choice<EntryModification>(
            {
                addAttribute: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_Attribute,
                    $.BER
                ),
                removeAttribute: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_AttributeType,
                    $.BER
                ),
                addValues: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_Attribute,
                    $.BER
                ),
                removeValues: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_Attribute,
                    $.BER
                ),
                alterValues: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => _encode_AttributeTypeAndValue,
                    $.BER
                ),
                resetValue: $._encode_explicit(
                    _TagClass.context,
                    5,
                    () => _encode_AttributeType,
                    $.BER
                ),
                replaceValues: $._encode_explicit(
                    _TagClass.context,
                    6,
                    () => _encode_Attribute,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EntryModification(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EntryModification */

/* eslint-enable */
