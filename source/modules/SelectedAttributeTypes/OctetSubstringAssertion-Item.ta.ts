/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION OctetSubstringAssertion_Item */
/**
 * @summary OctetSubstringAssertion_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OctetSubstringAssertion-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OctetSubstringAssertion_Item =
    | { initial: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { any_: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { final: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION OctetSubstringAssertion_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OctetSubstringAssertion_Item */
let _cached_decoder_for_OctetSubstringAssertion_Item: $.ASN1Decoder<
    OctetSubstringAssertion_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OctetSubstringAssertion_Item */

/* START_OF_SYMBOL_DEFINITION _decode_OctetSubstringAssertion_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) OctetSubstringAssertion_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OctetSubstringAssertion_Item} The decoded data structure.
 */
export function _decode_OctetSubstringAssertion_Item(el: _Element) {
    if (!_cached_decoder_for_OctetSubstringAssertion_Item) {
        _cached_decoder_for_OctetSubstringAssertion_Item = $._decode_extensible_choice<
            OctetSubstringAssertion_Item
        >({
            "CONTEXT 0": [
                "initial",
                $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString),
            ],
            "CONTEXT 1": [
                "any_",
                $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString),
            ],
            "CONTEXT 2": [
                "final",
                $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString),
            ],
        });
    }
    return _cached_decoder_for_OctetSubstringAssertion_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OctetSubstringAssertion_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OctetSubstringAssertion_Item */
let _cached_encoder_for_OctetSubstringAssertion_Item: $.ASN1Encoder<
    OctetSubstringAssertion_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OctetSubstringAssertion_Item */

/* START_OF_SYMBOL_DEFINITION _encode_OctetSubstringAssertion_Item */
/**
 * @summary Encodes a(n) OctetSubstringAssertion_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OctetSubstringAssertion_Item, encoded as an ASN.1 Element.
 */
export function _encode_OctetSubstringAssertion_Item(
    value: OctetSubstringAssertion_Item,
    elGetter: $.ASN1Encoder<OctetSubstringAssertion_Item>
) {
    if (!_cached_encoder_for_OctetSubstringAssertion_Item) {
        _cached_encoder_for_OctetSubstringAssertion_Item = $._encode_choice<
            OctetSubstringAssertion_Item
        >(
            {
                initial: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeOctetString,
                    $.BER
                ),
                any_: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => $._encodeOctetString,
                    $.BER
                ),
                final: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => $._encodeOctetString,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OctetSubstringAssertion_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OctetSubstringAssertion_Item */

/* eslint-enable */
