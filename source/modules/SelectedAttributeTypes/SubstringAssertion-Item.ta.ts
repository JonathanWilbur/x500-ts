/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION SubstringAssertion_Item */
/**
 * @summary SubstringAssertion_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubstringAssertion-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type SubstringAssertion_Item =
    | { initial: UnboundedDirectoryString } /* CHOICE_ALT_ROOT */
    | { any_: UnboundedDirectoryString } /* CHOICE_ALT_ROOT */
    | { final: UnboundedDirectoryString } /* CHOICE_ALT_ROOT */
    | { control: Attribute } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION SubstringAssertion_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringAssertion_Item */
let _cached_decoder_for_SubstringAssertion_Item: $.ASN1Decoder<
    SubstringAssertion_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubstringAssertion_Item */

/* START_OF_SYMBOL_DEFINITION _decode_SubstringAssertion_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) SubstringAssertion_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubstringAssertion_Item} The decoded data structure.
 */
export function _decode_SubstringAssertion_Item(el: _Element) {
    if (!_cached_decoder_for_SubstringAssertion_Item) {
        _cached_decoder_for_SubstringAssertion_Item = $._decode_extensible_choice<
            SubstringAssertion_Item
        >({
            "CONTEXT 0": [
                "initial",
                $._decode_explicit<UnboundedDirectoryString>(
                    () => _decode_UnboundedDirectoryString
                ),
            ],
            "CONTEXT 1": [
                "any_",
                $._decode_explicit<UnboundedDirectoryString>(
                    () => _decode_UnboundedDirectoryString
                ),
            ],
            "CONTEXT 2": [
                "final",
                $._decode_explicit<UnboundedDirectoryString>(
                    () => _decode_UnboundedDirectoryString
                ),
            ],
            "UNIVERSAL 16": ["control", _decode_Attribute],
        });
    }
    return _cached_decoder_for_SubstringAssertion_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubstringAssertion_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringAssertion_Item */
let _cached_encoder_for_SubstringAssertion_Item: $.ASN1Encoder<
    SubstringAssertion_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubstringAssertion_Item */

/* START_OF_SYMBOL_DEFINITION _encode_SubstringAssertion_Item */
/**
 * @summary Encodes a(n) SubstringAssertion_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubstringAssertion_Item, encoded as an ASN.1 Element.
 */
export function _encode_SubstringAssertion_Item(
    value: SubstringAssertion_Item,
    elGetter: $.ASN1Encoder<SubstringAssertion_Item>
) {
    if (!_cached_encoder_for_SubstringAssertion_Item) {
        _cached_encoder_for_SubstringAssertion_Item = $._encode_choice<
            SubstringAssertion_Item
        >(
            {
                initial: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_UnboundedDirectoryString,
                    $.BER
                ),
                any_: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_UnboundedDirectoryString,
                    $.BER
                ),
                final: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_UnboundedDirectoryString,
                    $.BER
                ),
                control: _encode_Attribute,
            },
            $.BER
        );
    }
    return _cached_encoder_for_SubstringAssertion_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubstringAssertion_Item */

/* eslint-enable */
