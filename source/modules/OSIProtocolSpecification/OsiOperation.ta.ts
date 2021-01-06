/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OsiOperation_fully_encoded_data_Item,
    _decode_OsiOperation_fully_encoded_data_Item,
    _encode_OsiOperation_fully_encoded_data_Item,
} from "../OSIProtocolSpecification/OsiOperation-fully-encoded-data-Item.ta";
export {
    OsiOperation_fully_encoded_data_Item,
    _decode_OsiOperation_fully_encoded_data_Item,
    _encode_OsiOperation_fully_encoded_data_Item,
} from "../OSIProtocolSpecification/OsiOperation-fully-encoded-data-Item.ta";

/* START_OF_SYMBOL_DEFINITION OsiOperation */
/**
 * @summary OsiOperation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiOperation{OPERATION:Operations}  ::=  CHOICE {
 *   fully-encoded-data [APPLICATION 1] IMPLICIT SEQUENCE SIZE (1) OF SEQUENCE {
 *     presentation-context-identifier    Presentation-context-identifier,
 *     presentation-data-values           CHOICE {
 *       single-ASN1-type              [0]
 *                      ABSTRACT-SYNTAX.&Type(OsiDirectoryOperation {{Operations}})}}}
 * ```
 */
export type OsiOperation = {
    fully_encoded_data: OsiOperation_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION OsiOperation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiOperation */
let _cached_decoder_for_OsiOperation: $.ASN1Decoder<OsiOperation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiOperation */

/* START_OF_SYMBOL_DEFINITION _decode_OsiOperation */
/**
 * @summary Decodes an ASN.1 element into a(n) OsiOperation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiOperation} The decoded data structure.
 */
export function _decode_OsiOperation(el: _Element) {
    if (!_cached_decoder_for_OsiOperation) {
        _cached_decoder_for_OsiOperation = $._decode_inextensible_choice<OsiOperation>(
            {
                "APPLICATION 1": [
                    "fully_encoded_data",
                    $._decode_explicit<OsiOperation_fully_encoded_data_Item[]>(
                        () =>
                            $._decodeSequenceOf<OsiOperation_fully_encoded_data_Item>(
                                () =>
                                    _decode_OsiOperation_fully_encoded_data_Item
                            )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_OsiOperation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OsiOperation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiOperation */
let _cached_encoder_for_OsiOperation: $.ASN1Encoder<OsiOperation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiOperation */

/* START_OF_SYMBOL_DEFINITION _encode_OsiOperation */
/**
 * @summary Encodes a(n) OsiOperation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiOperation, encoded as an ASN.1 Element.
 */
export function _encode_OsiOperation(
    value: OsiOperation,
    elGetter: $.ASN1Encoder<OsiOperation>
) {
    if (!_cached_encoder_for_OsiOperation) {
        _cached_encoder_for_OsiOperation = $._encode_choice<OsiOperation>(
            {
                fully_encoded_data: $._encode_explicit(
                    _TagClass.application,
                    1,
                    () =>
                        $._encodeSequenceOf<OsiOperation_fully_encoded_data_Item>(
                            () => _encode_OsiOperation_fully_encoded_data_Item,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiOperation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OsiOperation */

/* eslint-enable */
