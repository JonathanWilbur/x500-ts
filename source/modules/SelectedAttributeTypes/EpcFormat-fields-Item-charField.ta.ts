/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION EpcFormat_fields_Item_charField */
/**
 * @summary EpcFormat_fields_Item_charField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EpcFormat-fields-Item-charField ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EpcFormat_fields_Item_charField =
    | { characters: INTEGER } /* CHOICE_ALT_ROOT */
    | { maxValue: INTEGER } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EpcFormat_fields_Item_charField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EpcFormat_fields_Item_charField */
let _cached_decoder_for_EpcFormat_fields_Item_charField: $.ASN1Decoder<EpcFormat_fields_Item_charField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EpcFormat_fields_Item_charField */

/* START_OF_SYMBOL_DEFINITION _decode_EpcFormat_fields_Item_charField */
/**
 * @summary Decodes an ASN.1 element into a(n) EpcFormat_fields_Item_charField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EpcFormat_fields_Item_charField} The decoded data structure.
 */
export function _decode_EpcFormat_fields_Item_charField(el: _Element) {
    if (!_cached_decoder_for_EpcFormat_fields_Item_charField) {
        _cached_decoder_for_EpcFormat_fields_Item_charField = $._decode_inextensible_choice<EpcFormat_fields_Item_charField>(
            {
                "CONTEXT 0": [
                    "characters",
                    $._decode_explicit<INTEGER>(() => $._decodeInteger),
                ],
                "CONTEXT 1": [
                    "maxValue",
                    $._decode_explicit<INTEGER>(() => $._decodeInteger),
                ],
            }
        );
    }
    return _cached_decoder_for_EpcFormat_fields_Item_charField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EpcFormat_fields_Item_charField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EpcFormat_fields_Item_charField */
let _cached_encoder_for_EpcFormat_fields_Item_charField: $.ASN1Encoder<EpcFormat_fields_Item_charField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EpcFormat_fields_Item_charField */

/* START_OF_SYMBOL_DEFINITION _encode_EpcFormat_fields_Item_charField */
/**
 * @summary Encodes a(n) EpcFormat_fields_Item_charField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EpcFormat_fields_Item_charField, encoded as an ASN.1 Element.
 */
export function _encode_EpcFormat_fields_Item_charField(
    value: EpcFormat_fields_Item_charField,
    elGetter: $.ASN1Encoder<EpcFormat_fields_Item_charField>
) {
    if (!_cached_encoder_for_EpcFormat_fields_Item_charField) {
        _cached_encoder_for_EpcFormat_fields_Item_charField = $._encode_choice<EpcFormat_fields_Item_charField>(
            {
                characters: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInteger,
                    $.BER
                ),
                maxValue: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => $._encodeInteger,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EpcFormat_fields_Item_charField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EpcFormat_fields_Item_charField */

/* eslint-enable */
