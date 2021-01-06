/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OsiUnbindResult_fully_encoded_data_Item,
    _decode_OsiUnbindResult_fully_encoded_data_Item,
    _encode_OsiUnbindResult_fully_encoded_data_Item,
} from "../OSIProtocolSpecification/OsiUnbindResult-fully-encoded-data-Item.ta";
export {
    OsiUnbindResult_fully_encoded_data_Item,
    _decode_OsiUnbindResult_fully_encoded_data_Item,
    _encode_OsiUnbindResult_fully_encoded_data_Item,
} from "../OSIProtocolSpecification/OsiUnbindResult-fully-encoded-data-Item.ta";

/* START_OF_SYMBOL_DEFINITION OsiUnbindResult */
/**
 * @summary OsiUnbindResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiUnbindResult  ::=  CHOICE {
 *   fully-encoded-data  [APPLICATION 1] IMPLICIT SEQUENCE SIZE (1) OF SEQUENCE {
 *     presentation-context-identifier     Presentation-context-identifier,
 *     presentation-data-values            CHOICE {
 *       single-ASN1-type               [0]  ABSTRACT-SYNTAX.&Type(TheOsiUnbindRes)}}}
 * ```
 */
export type OsiUnbindResult = {
    fully_encoded_data: OsiUnbindResult_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION OsiUnbindResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiUnbindResult */
let _cached_decoder_for_OsiUnbindResult: $.ASN1Decoder<OsiUnbindResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiUnbindResult */

/* START_OF_SYMBOL_DEFINITION _decode_OsiUnbindResult */
/**
 * @summary Decodes an ASN.1 element into a(n) OsiUnbindResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiUnbindResult} The decoded data structure.
 */
export function _decode_OsiUnbindResult(el: _Element) {
    if (!_cached_decoder_for_OsiUnbindResult) {
        _cached_decoder_for_OsiUnbindResult = $._decode_inextensible_choice<OsiUnbindResult>(
            {
                "APPLICATION 1": [
                    "fully_encoded_data",
                    $._decode_explicit<
                        OsiUnbindResult_fully_encoded_data_Item[]
                    >(() =>
                        $._decodeSequenceOf<OsiUnbindResult_fully_encoded_data_Item>(
                            () =>
                                _decode_OsiUnbindResult_fully_encoded_data_Item
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_OsiUnbindResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OsiUnbindResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiUnbindResult */
let _cached_encoder_for_OsiUnbindResult: $.ASN1Encoder<OsiUnbindResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiUnbindResult */

/* START_OF_SYMBOL_DEFINITION _encode_OsiUnbindResult */
/**
 * @summary Encodes a(n) OsiUnbindResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiUnbindResult, encoded as an ASN.1 Element.
 */
export function _encode_OsiUnbindResult(
    value: OsiUnbindResult,
    elGetter: $.ASN1Encoder<OsiUnbindResult>
) {
    if (!_cached_encoder_for_OsiUnbindResult) {
        _cached_encoder_for_OsiUnbindResult = $._encode_choice<OsiUnbindResult>(
            {
                fully_encoded_data: $._encode_explicit(
                    _TagClass.application,
                    1,
                    () =>
                        $._encodeSequenceOf<OsiUnbindResult_fully_encoded_data_Item>(
                            () =>
                                _encode_OsiUnbindResult_fully_encoded_data_Item,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiUnbindResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OsiUnbindResult */

/* eslint-enable */
