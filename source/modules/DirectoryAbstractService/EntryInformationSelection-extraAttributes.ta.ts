/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from "../InformationFramework/AttributeType.ta";

/* START_OF_SYMBOL_DEFINITION EntryInformationSelection_extraAttributes */
/**
 * @summary EntryInformationSelection_extraAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryInformationSelection-extraAttributes ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EntryInformationSelection_extraAttributes =
    | { allOperationalAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { select: AttributeType[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EntryInformationSelection_extraAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryInformationSelection_extraAttributes */
let _cached_decoder_for_EntryInformationSelection_extraAttributes: $.ASN1Decoder<
    EntryInformationSelection_extraAttributes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryInformationSelection_extraAttributes */

/* START_OF_SYMBOL_DEFINITION _decode_EntryInformationSelection_extraAttributes */
/**
 * @summary Decodes an ASN.1 element into a(n) EntryInformationSelection_extraAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryInformationSelection_extraAttributes} The decoded data structure.
 */
export function _decode_EntryInformationSelection_extraAttributes(
    el: _Element
) {
    if (!_cached_decoder_for_EntryInformationSelection_extraAttributes) {
        _cached_decoder_for_EntryInformationSelection_extraAttributes = $._decode_inextensible_choice<
            EntryInformationSelection_extraAttributes
        >({
            "CONTEXT 3": [
                "allOperationalAttributes",
                $._decode_explicit<NULL>(() => $._decodeNull),
            ],
            "CONTEXT 4": [
                "select",
                $._decode_explicit<AttributeType[]>(() =>
                    $._decodeSetOf<AttributeType>(() => _decode_AttributeType)
                ),
            ],
        });
    }
    return _cached_decoder_for_EntryInformationSelection_extraAttributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntryInformationSelection_extraAttributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryInformationSelection_extraAttributes */
let _cached_encoder_for_EntryInformationSelection_extraAttributes: $.ASN1Encoder<
    EntryInformationSelection_extraAttributes
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryInformationSelection_extraAttributes */

/* START_OF_SYMBOL_DEFINITION _encode_EntryInformationSelection_extraAttributes */
/**
 * @summary Encodes a(n) EntryInformationSelection_extraAttributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryInformationSelection_extraAttributes, encoded as an ASN.1 Element.
 */
export function _encode_EntryInformationSelection_extraAttributes(
    value: EntryInformationSelection_extraAttributes,
    elGetter: $.ASN1Encoder<EntryInformationSelection_extraAttributes>
) {
    if (!_cached_encoder_for_EntryInformationSelection_extraAttributes) {
        _cached_encoder_for_EntryInformationSelection_extraAttributes = $._encode_choice<
            EntryInformationSelection_extraAttributes
        >(
            {
                allOperationalAttributes: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => $._encodeNull,
                    $.BER
                ),
                select: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () =>
                        $._encodeSetOf<AttributeType>(
                            () => _encode_AttributeType,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_EntryInformationSelection_extraAttributes(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_EntryInformationSelection_extraAttributes */

/* eslint-enable */
