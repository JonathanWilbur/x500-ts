/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeMappings_Item_typeMappings,
    _decode_AttributeMappings_Item_typeMappings,
    _encode_AttributeMappings_Item_typeMappings,
} from "../AttributeCertificateDefinitions/AttributeMappings-Item-typeMappings.ta";
import {
    AttributeMappings_Item_typeValueMappings,
    _decode_AttributeMappings_Item_typeValueMappings,
    _encode_AttributeMappings_Item_typeValueMappings,
} from "../AttributeCertificateDefinitions/AttributeMappings-Item-typeValueMappings.ta";
export {
    AttributeMappings_Item_typeMappings,
    _decode_AttributeMappings_Item_typeMappings,
    _encode_AttributeMappings_Item_typeMappings,
} from "../AttributeCertificateDefinitions/AttributeMappings-Item-typeMappings.ta";
export {
    AttributeMappings_Item_typeValueMappings,
    _decode_AttributeMappings_Item_typeValueMappings,
    _encode_AttributeMappings_Item_typeValueMappings,
} from "../AttributeCertificateDefinitions/AttributeMappings-Item-typeValueMappings.ta";

/* START_OF_SYMBOL_DEFINITION AttributeMappings_Item */
/**
 * @summary AttributeMappings_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeMappings-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AttributeMappings_Item =
    | {
          typeMappings: AttributeMappings_Item_typeMappings;
      } /* CHOICE_ALT_ROOT */
    | {
          typeValueMappings: AttributeMappings_Item_typeValueMappings;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION AttributeMappings_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeMappings_Item */
let _cached_decoder_for_AttributeMappings_Item: $.ASN1Decoder<
    AttributeMappings_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeMappings_Item */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeMappings_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeMappings_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeMappings_Item} The decoded data structure.
 */
export function _decode_AttributeMappings_Item(el: _Element) {
    if (!_cached_decoder_for_AttributeMappings_Item) {
        _cached_decoder_for_AttributeMappings_Item = $._decode_inextensible_choice<
            AttributeMappings_Item
        >({
            "CONTEXT 0": [
                "typeMappings",
                $._decode_implicit<AttributeMappings_Item_typeMappings>(
                    () => _decode_AttributeMappings_Item_typeMappings
                ),
            ],
            "CONTEXT 1": [
                "typeValueMappings",
                $._decode_implicit<AttributeMappings_Item_typeValueMappings>(
                    () => _decode_AttributeMappings_Item_typeValueMappings
                ),
            ],
        });
    }
    return _cached_decoder_for_AttributeMappings_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeMappings_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeMappings_Item */
let _cached_encoder_for_AttributeMappings_Item: $.ASN1Encoder<
    AttributeMappings_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeMappings_Item */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeMappings_Item */
/**
 * @summary Encodes a(n) AttributeMappings_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeMappings_Item, encoded as an ASN.1 Element.
 */
export function _encode_AttributeMappings_Item(
    value: AttributeMappings_Item,
    elGetter: $.ASN1Encoder<AttributeMappings_Item>
) {
    if (!_cached_encoder_for_AttributeMappings_Item) {
        _cached_encoder_for_AttributeMappings_Item = $._encode_choice<
            AttributeMappings_Item
        >(
            {
                typeMappings: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_AttributeMappings_Item_typeMappings,
                    $.BER
                ),
                typeValueMappings: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_AttributeMappings_Item_typeValueMappings,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AttributeMappings_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeMappings_Item */

/* eslint-enable */
