/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
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

/* START_OF_SYMBOL_DEFINITION FamilyEntry_information_Item */
/**
 * @summary FamilyEntry_information_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FamilyEntry-information-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type FamilyEntry_information_Item =
    | { attributeType: AttributeType } /* CHOICE_ALT_ROOT */
    | { attribute: Attribute } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION FamilyEntry_information_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FamilyEntry_information_Item */
let _cached_decoder_for_FamilyEntry_information_Item: $.ASN1Decoder<
    FamilyEntry_information_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FamilyEntry_information_Item */

/* START_OF_SYMBOL_DEFINITION _decode_FamilyEntry_information_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) FamilyEntry_information_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FamilyEntry_information_Item} The decoded data structure.
 */
export function _decode_FamilyEntry_information_Item(el: _Element) {
    if (!_cached_decoder_for_FamilyEntry_information_Item) {
        _cached_decoder_for_FamilyEntry_information_Item = $._decode_extensible_choice<
            FamilyEntry_information_Item
        >({
            "UNIVERSAL 6": ["attributeType", _decode_AttributeType],
            "UNIVERSAL 16": ["attribute", _decode_Attribute],
        });
    }
    return _cached_decoder_for_FamilyEntry_information_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FamilyEntry_information_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FamilyEntry_information_Item */
let _cached_encoder_for_FamilyEntry_information_Item: $.ASN1Encoder<
    FamilyEntry_information_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FamilyEntry_information_Item */

/* START_OF_SYMBOL_DEFINITION _encode_FamilyEntry_information_Item */
/**
 * @summary Encodes a(n) FamilyEntry_information_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FamilyEntry_information_Item, encoded as an ASN.1 Element.
 */
export function _encode_FamilyEntry_information_Item(
    value: FamilyEntry_information_Item,
    elGetter: $.ASN1Encoder<FamilyEntry_information_Item>
) {
    if (!_cached_encoder_for_FamilyEntry_information_Item) {
        _cached_encoder_for_FamilyEntry_information_Item = $._encode_choice<
            FamilyEntry_information_Item
        >(
            {
                attributeType: _encode_AttributeType,
                attribute: _encode_Attribute,
            },
            $.BER
        );
    }
    return _cached_encoder_for_FamilyEntry_information_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FamilyEntry_information_Item */

/* eslint-enable */
