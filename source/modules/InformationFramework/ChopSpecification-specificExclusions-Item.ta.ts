/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    LocalName,
    _decode_LocalName,
    _encode_LocalName,
} from "../InformationFramework/LocalName.ta";
export {
    LocalName,
    _decode_LocalName,
    _encode_LocalName,
} from "../InformationFramework/LocalName.ta";

/* START_OF_SYMBOL_DEFINITION ChopSpecification_specificExclusions_Item */
/**
 * @summary ChopSpecification_specificExclusions_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChopSpecification-specificExclusions-Item  ::=  CHOICE {
 *     chopBefore  [0]  LocalName,
 *     chopAfter   [1]  LocalName,
 *     ...}
 * ```
 */
export type ChopSpecification_specificExclusions_Item =
    | { chopBefore: LocalName } /* CHOICE_ALT_ROOT */
    | { chopAfter: LocalName } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION ChopSpecification_specificExclusions_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ChopSpecification_specificExclusions_Item */
let _cached_decoder_for_ChopSpecification_specificExclusions_Item: $.ASN1Decoder<ChopSpecification_specificExclusions_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ChopSpecification_specificExclusions_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ChopSpecification_specificExclusions_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ChopSpecification_specificExclusions_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ChopSpecification_specificExclusions_Item} The decoded data structure.
 */
export function _decode_ChopSpecification_specificExclusions_Item(
    el: _Element
) {
    if (!_cached_decoder_for_ChopSpecification_specificExclusions_Item) {
        _cached_decoder_for_ChopSpecification_specificExclusions_Item = $._decode_extensible_choice<ChopSpecification_specificExclusions_Item>(
            {
                "CONTEXT 0": [
                    "chopBefore",
                    $._decode_explicit<LocalName>(() => _decode_LocalName),
                ],
                "CONTEXT 1": [
                    "chopAfter",
                    $._decode_explicit<LocalName>(() => _decode_LocalName),
                ],
            }
        );
    }
    return _cached_decoder_for_ChopSpecification_specificExclusions_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ChopSpecification_specificExclusions_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ChopSpecification_specificExclusions_Item */
let _cached_encoder_for_ChopSpecification_specificExclusions_Item: $.ASN1Encoder<ChopSpecification_specificExclusions_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ChopSpecification_specificExclusions_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ChopSpecification_specificExclusions_Item */
/**
 * @summary Encodes a(n) ChopSpecification_specificExclusions_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChopSpecification_specificExclusions_Item, encoded as an ASN.1 Element.
 */
export function _encode_ChopSpecification_specificExclusions_Item(
    value: ChopSpecification_specificExclusions_Item,
    elGetter: $.ASN1Encoder<ChopSpecification_specificExclusions_Item>
) {
    if (!_cached_encoder_for_ChopSpecification_specificExclusions_Item) {
        _cached_encoder_for_ChopSpecification_specificExclusions_Item = $._encode_choice<ChopSpecification_specificExclusions_Item>(
            {
                chopBefore: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_LocalName,
                    $.BER
                ),
                chopAfter: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_LocalName,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ChopSpecification_specificExclusions_Item(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ChopSpecification_specificExclusions_Item */

/* eslint-enable */
