/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OsiUnbind_fully_encoded_data_Item,
    _decode_OsiUnbind_fully_encoded_data_Item,
    _encode_OsiUnbind_fully_encoded_data_Item,
} from "../OSIProtocolSpecification/OsiUnbind-fully-encoded-data-Item.ta";
export {
    OsiUnbind_fully_encoded_data_Item,
    _decode_OsiUnbind_fully_encoded_data_Item,
    _encode_OsiUnbind_fully_encoded_data_Item,
} from "../OSIProtocolSpecification/OsiUnbind-fully-encoded-data-Item.ta";

/* START_OF_SYMBOL_DEFINITION OsiUnbind */
/**
 * @summary OsiUnbind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiUnbind  ::=  CHOICE {
 *   fully-encoded-data
 *     [APPLICATION 1] IMPLICIT SEQUENCE SIZE (1) OF SEQUENCE {
 *        presentation-context-identifier  Presentation-context-identifier,
 *        presentation-data-values     CHOICE {
 *          single-ASN1-type        [0]  ABSTRACT-SYNTAX.&Type(TheOsiUnbind)}}}
 * ```
 */
export type OsiUnbind = {
    fully_encoded_data: OsiUnbind_fully_encoded_data_Item[];
} /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION OsiUnbind */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiUnbind */
let _cached_decoder_for_OsiUnbind: $.ASN1Decoder<OsiUnbind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiUnbind */

/* START_OF_SYMBOL_DEFINITION _decode_OsiUnbind */
/**
 * @summary Decodes an ASN.1 element into a(n) OsiUnbind
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiUnbind} The decoded data structure.
 */
export function _decode_OsiUnbind(el: _Element) {
    if (!_cached_decoder_for_OsiUnbind) {
        _cached_decoder_for_OsiUnbind = $._decode_inextensible_choice<
            OsiUnbind
        >({
            "APPLICATION 1": [
                "fully_encoded_data",
                $._decode_explicit<OsiUnbind_fully_encoded_data_Item[]>(() =>
                    $._decodeSequenceOf<OsiUnbind_fully_encoded_data_Item>(
                        () => _decode_OsiUnbind_fully_encoded_data_Item
                    )
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiUnbind(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OsiUnbind */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiUnbind */
let _cached_encoder_for_OsiUnbind: $.ASN1Encoder<OsiUnbind> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiUnbind */

/* START_OF_SYMBOL_DEFINITION _encode_OsiUnbind */
/**
 * @summary Encodes a(n) OsiUnbind into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiUnbind, encoded as an ASN.1 Element.
 */
export function _encode_OsiUnbind(
    value: OsiUnbind,
    elGetter: $.ASN1Encoder<OsiUnbind>
) {
    if (!_cached_encoder_for_OsiUnbind) {
        _cached_encoder_for_OsiUnbind = $._encode_choice<OsiUnbind>(
            {
                fully_encoded_data: $._encode_explicit(
                    _TagClass.application,
                    1,
                    () =>
                        $._encodeSequenceOf<OsiUnbind_fully_encoded_data_Item>(
                            () => _encode_OsiUnbind_fully_encoded_data_Item,
                            $.BER
                        ),
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiUnbind(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OsiUnbind */

/* eslint-enable */
