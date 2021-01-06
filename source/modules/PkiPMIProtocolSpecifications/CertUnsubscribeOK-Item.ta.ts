/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertUnsubscribeOK_Item_not_ok,
    _decode_CertUnsubscribeOK_Item_not_ok,
    _encode_CertUnsubscribeOK_Item_not_ok,
} from "../PkiPMIProtocolSpecifications/CertUnsubscribeOK-Item-not-ok.ta";
import {
    CertUnsubscribeOK_Item_ok,
    _decode_CertUnsubscribeOK_Item_ok,
    _encode_CertUnsubscribeOK_Item_ok,
} from "../PkiPMIProtocolSpecifications/CertUnsubscribeOK-Item-ok.ta";
export {
    CertUnsubscribeOK_Item_not_ok,
    _decode_CertUnsubscribeOK_Item_not_ok,
    _encode_CertUnsubscribeOK_Item_not_ok,
} from "../PkiPMIProtocolSpecifications/CertUnsubscribeOK-Item-not-ok.ta";
export {
    CertUnsubscribeOK_Item_ok,
    _decode_CertUnsubscribeOK_Item_ok,
    _encode_CertUnsubscribeOK_Item_ok,
} from "../PkiPMIProtocolSpecifications/CertUnsubscribeOK-Item-ok.ta";

/* START_OF_SYMBOL_DEFINITION CertUnsubscribeOK_Item */
/**
 * @summary CertUnsubscribeOK_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUnsubscribeOK-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertUnsubscribeOK_Item =
    | { ok: CertUnsubscribeOK_Item_ok } /* CHOICE_ALT_ROOT */
    | { not_ok: CertUnsubscribeOK_Item_not_ok } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CertUnsubscribeOK_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertUnsubscribeOK_Item */
let _cached_decoder_for_CertUnsubscribeOK_Item: $.ASN1Decoder<CertUnsubscribeOK_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertUnsubscribeOK_Item */

/* START_OF_SYMBOL_DEFINITION _decode_CertUnsubscribeOK_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) CertUnsubscribeOK_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUnsubscribeOK_Item} The decoded data structure.
 */
export function _decode_CertUnsubscribeOK_Item(el: _Element) {
    if (!_cached_decoder_for_CertUnsubscribeOK_Item) {
        _cached_decoder_for_CertUnsubscribeOK_Item = $._decode_extensible_choice<CertUnsubscribeOK_Item>(
            {
                "CONTEXT 0": [
                    "ok",
                    $._decode_explicit<CertUnsubscribeOK_Item_ok>(
                        () => _decode_CertUnsubscribeOK_Item_ok
                    ),
                ],
                "CONTEXT 1": [
                    "not_ok",
                    $._decode_explicit<CertUnsubscribeOK_Item_not_ok>(
                        () => _decode_CertUnsubscribeOK_Item_not_ok
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CertUnsubscribeOK_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertUnsubscribeOK_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertUnsubscribeOK_Item */
let _cached_encoder_for_CertUnsubscribeOK_Item: $.ASN1Encoder<CertUnsubscribeOK_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertUnsubscribeOK_Item */

/* START_OF_SYMBOL_DEFINITION _encode_CertUnsubscribeOK_Item */
/**
 * @summary Encodes a(n) CertUnsubscribeOK_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUnsubscribeOK_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertUnsubscribeOK_Item(
    value: CertUnsubscribeOK_Item,
    elGetter: $.ASN1Encoder<CertUnsubscribeOK_Item>
) {
    if (!_cached_encoder_for_CertUnsubscribeOK_Item) {
        _cached_encoder_for_CertUnsubscribeOK_Item = $._encode_choice<CertUnsubscribeOK_Item>(
            {
                ok: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertUnsubscribeOK_Item_ok,
                    $.BER
                ),
                not_ok: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertUnsubscribeOK_Item_not_ok,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertUnsubscribeOK_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertUnsubscribeOK_Item */

/* eslint-enable */
