/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ContextAssertion,
    _decode_ContextAssertion,
    _encode_ContextAssertion,
} from "../InformationFramework/ContextAssertion.ta";
export {
    ContextAssertion,
    _decode_ContextAssertion,
    _encode_ContextAssertion,
} from "../InformationFramework/ContextAssertion.ta";

/* START_OF_SYMBOL_DEFINITION AttributeValueAssertion_assertedContexts */
/**
 * @summary AttributeValueAssertion_assertedContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeValueAssertion-assertedContexts ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type AttributeValueAssertion_assertedContexts =
    | { allContexts: NULL } /* CHOICE_ALT_ROOT */
    | { selectedContexts: ContextAssertion[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION AttributeValueAssertion_assertedContexts */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValueAssertion_assertedContexts */
let _cached_decoder_for_AttributeValueAssertion_assertedContexts: $.ASN1Decoder<AttributeValueAssertion_assertedContexts> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeValueAssertion_assertedContexts */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeValueAssertion_assertedContexts */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValueAssertion_assertedContexts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeValueAssertion_assertedContexts} The decoded data structure.
 */
export function _decode_AttributeValueAssertion_assertedContexts(el: _Element) {
    if (!_cached_decoder_for_AttributeValueAssertion_assertedContexts) {
        _cached_decoder_for_AttributeValueAssertion_assertedContexts = $._decode_inextensible_choice<AttributeValueAssertion_assertedContexts>(
            {
                "CONTEXT 0": [
                    "allContexts",
                    $._decode_explicit<NULL>(() => $._decodeNull),
                ],
                "CONTEXT 1": [
                    "selectedContexts",
                    $._decode_explicit<ContextAssertion[]>(() =>
                        $._decodeSetOf<ContextAssertion>(
                            () => _decode_ContextAssertion
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_AttributeValueAssertion_assertedContexts(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeValueAssertion_assertedContexts */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValueAssertion_assertedContexts */
let _cached_encoder_for_AttributeValueAssertion_assertedContexts: $.ASN1Encoder<AttributeValueAssertion_assertedContexts> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeValueAssertion_assertedContexts */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeValueAssertion_assertedContexts */
/**
 * @summary Encodes a(n) AttributeValueAssertion_assertedContexts into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValueAssertion_assertedContexts, encoded as an ASN.1 Element.
 */
export function _encode_AttributeValueAssertion_assertedContexts(
    value: AttributeValueAssertion_assertedContexts,
    elGetter: $.ASN1Encoder<AttributeValueAssertion_assertedContexts>
) {
    if (!_cached_encoder_for_AttributeValueAssertion_assertedContexts) {
        _cached_encoder_for_AttributeValueAssertion_assertedContexts = $._encode_choice<AttributeValueAssertion_assertedContexts>(
            {
                allContexts: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => $._encodeNull,
                    $.BER
                ),
                selectedContexts: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        $._encodeSetOf<ContextAssertion>(
                            () => _encode_ContextAssertion,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AttributeValueAssertion_assertedContexts(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeValueAssertion_assertedContexts */

/* eslint-enable */
