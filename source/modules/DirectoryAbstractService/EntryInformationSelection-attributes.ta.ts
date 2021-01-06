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

/* START_OF_SYMBOL_DEFINITION EntryInformationSelection_attributes */
/**
 * @summary EntryInformationSelection_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryInformationSelection-attributes ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type EntryInformationSelection_attributes =
    | { allUserAttributes: NULL } /* CHOICE_ALT_ROOT */
    | { select: AttributeType[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EntryInformationSelection_attributes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryInformationSelection_attributes */
let _cached_decoder_for_EntryInformationSelection_attributes: $.ASN1Decoder<EntryInformationSelection_attributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryInformationSelection_attributes */

/* START_OF_SYMBOL_DEFINITION _decode_EntryInformationSelection_attributes */
/**
 * @summary Decodes an ASN.1 element into a(n) EntryInformationSelection_attributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryInformationSelection_attributes} The decoded data structure.
 */
export function _decode_EntryInformationSelection_attributes(el: _Element) {
    if (!_cached_decoder_for_EntryInformationSelection_attributes) {
        _cached_decoder_for_EntryInformationSelection_attributes = $._decode_inextensible_choice<EntryInformationSelection_attributes>(
            {
                "CONTEXT 0": [
                    "allUserAttributes",
                    $._decode_explicit<NULL>(() => $._decodeNull),
                ],
                "CONTEXT 1": [
                    "select",
                    $._decode_explicit<AttributeType[]>(() =>
                        $._decodeSetOf<AttributeType>(
                            () => _decode_AttributeType
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_EntryInformationSelection_attributes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntryInformationSelection_attributes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryInformationSelection_attributes */
let _cached_encoder_for_EntryInformationSelection_attributes: $.ASN1Encoder<EntryInformationSelection_attributes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryInformationSelection_attributes */

/* START_OF_SYMBOL_DEFINITION _encode_EntryInformationSelection_attributes */
/**
 * @summary Encodes a(n) EntryInformationSelection_attributes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryInformationSelection_attributes, encoded as an ASN.1 Element.
 */
export function _encode_EntryInformationSelection_attributes(
    value: EntryInformationSelection_attributes,
    elGetter: $.ASN1Encoder<EntryInformationSelection_attributes>
) {
    if (!_cached_encoder_for_EntryInformationSelection_attributes) {
        _cached_encoder_for_EntryInformationSelection_attributes = $._encode_choice<EntryInformationSelection_attributes>(
            {
                allUserAttributes: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                select: $._encode_explicit(
                    _TagClass.context,
                    1,
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
    return _cached_encoder_for_EntryInformationSelection_attributes(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_EntryInformationSelection_attributes */

/* eslint-enable */
