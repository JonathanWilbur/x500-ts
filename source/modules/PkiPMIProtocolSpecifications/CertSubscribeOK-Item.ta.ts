/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertSubscribeOK_Item_not_ok,
    _decode_CertSubscribeOK_Item_not_ok,
    _encode_CertSubscribeOK_Item_not_ok,
} from "../PkiPMIProtocolSpecifications/CertSubscribeOK-Item-not-ok.ta";
import {
    CertSubscribeOK_Item_ok,
    _decode_CertSubscribeOK_Item_ok,
    _encode_CertSubscribeOK_Item_ok,
} from "../PkiPMIProtocolSpecifications/CertSubscribeOK-Item-ok.ta";
export {
    CertSubscribeOK_Item_not_ok,
    _decode_CertSubscribeOK_Item_not_ok,
    _encode_CertSubscribeOK_Item_not_ok,
} from "../PkiPMIProtocolSpecifications/CertSubscribeOK-Item-not-ok.ta";
export {
    CertSubscribeOK_Item_ok,
    _decode_CertSubscribeOK_Item_ok,
    _encode_CertSubscribeOK_Item_ok,
} from "../PkiPMIProtocolSpecifications/CertSubscribeOK-Item-ok.ta";

/* START_OF_SYMBOL_DEFINITION CertSubscribeOK_Item */
/**
 * @summary CertSubscribeOK_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertSubscribeOK-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertSubscribeOK_Item =
    | { ok: CertSubscribeOK_Item_ok } /* CHOICE_ALT_ROOT */
    | { not_ok: CertSubscribeOK_Item_not_ok } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CertSubscribeOK_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertSubscribeOK_Item */
let _cached_decoder_for_CertSubscribeOK_Item: $.ASN1Decoder<CertSubscribeOK_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertSubscribeOK_Item */

/* START_OF_SYMBOL_DEFINITION _decode_CertSubscribeOK_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) CertSubscribeOK_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertSubscribeOK_Item} The decoded data structure.
 */
export function _decode_CertSubscribeOK_Item(el: _Element) {
    if (!_cached_decoder_for_CertSubscribeOK_Item) {
        _cached_decoder_for_CertSubscribeOK_Item = $._decode_extensible_choice<CertSubscribeOK_Item>(
            {
                "CONTEXT 0": [
                    "ok",
                    $._decode_explicit<CertSubscribeOK_Item_ok>(
                        () => _decode_CertSubscribeOK_Item_ok
                    ),
                ],
                "CONTEXT 1": [
                    "not_ok",
                    $._decode_explicit<CertSubscribeOK_Item_not_ok>(
                        () => _decode_CertSubscribeOK_Item_not_ok
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_CertSubscribeOK_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertSubscribeOK_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertSubscribeOK_Item */
let _cached_encoder_for_CertSubscribeOK_Item: $.ASN1Encoder<CertSubscribeOK_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertSubscribeOK_Item */

/* START_OF_SYMBOL_DEFINITION _encode_CertSubscribeOK_Item */
/**
 * @summary Encodes a(n) CertSubscribeOK_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertSubscribeOK_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertSubscribeOK_Item(
    value: CertSubscribeOK_Item,
    elGetter: $.ASN1Encoder<CertSubscribeOK_Item>
) {
    if (!_cached_encoder_for_CertSubscribeOK_Item) {
        _cached_encoder_for_CertSubscribeOK_Item = $._encode_choice<CertSubscribeOK_Item>(
            {
                ok: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertSubscribeOK_Item_ok,
                    $.BER
                ),
                not_ok: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertSubscribeOK_Item_not_ok,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertSubscribeOK_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertSubscribeOK_Item */

/* eslint-enable */
