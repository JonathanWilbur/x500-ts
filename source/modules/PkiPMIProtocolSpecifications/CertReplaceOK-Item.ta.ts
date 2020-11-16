/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CertReplaceOK_Item_not_ok,
    _decode_CertReplaceOK_Item_not_ok,
    _encode_CertReplaceOK_Item_not_ok,
} from "../PkiPMIProtocolSpecifications/CertReplaceOK-Item-not-ok.ta";
import {
    CertReplaceOK_Item_ok,
    _decode_CertReplaceOK_Item_ok,
    _encode_CertReplaceOK_Item_ok,
} from "../PkiPMIProtocolSpecifications/CertReplaceOK-Item-ok.ta";
export {
    CertReplaceOK_Item_not_ok,
    _decode_CertReplaceOK_Item_not_ok,
    _encode_CertReplaceOK_Item_not_ok,
} from "../PkiPMIProtocolSpecifications/CertReplaceOK-Item-not-ok.ta";
export {
    CertReplaceOK_Item_ok,
    _decode_CertReplaceOK_Item_ok,
    _encode_CertReplaceOK_Item_ok,
} from "../PkiPMIProtocolSpecifications/CertReplaceOK-Item-ok.ta";

/* START_OF_SYMBOL_DEFINITION CertReplaceOK_Item */
/**
 * @summary CertReplaceOK_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertReplaceOK-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CertReplaceOK_Item =
    | { ok: CertReplaceOK_Item_ok } /* CHOICE_ALT_ROOT */
    | { not_ok: CertReplaceOK_Item_not_ok } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CertReplaceOK_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReplaceOK_Item */
let _cached_decoder_for_CertReplaceOK_Item: $.ASN1Decoder<
    CertReplaceOK_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertReplaceOK_Item */

/* START_OF_SYMBOL_DEFINITION _decode_CertReplaceOK_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) CertReplaceOK_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertReplaceOK_Item} The decoded data structure.
 */
export function _decode_CertReplaceOK_Item(el: _Element) {
    if (!_cached_decoder_for_CertReplaceOK_Item) {
        _cached_decoder_for_CertReplaceOK_Item = $._decode_extensible_choice<
            CertReplaceOK_Item
        >({
            "CONTEXT 0": [
                "ok",
                $._decode_explicit<CertReplaceOK_Item_ok>(
                    () => _decode_CertReplaceOK_Item_ok
                ),
            ],
            "CONTEXT 1": [
                "not_ok",
                $._decode_explicit<CertReplaceOK_Item_not_ok>(
                    () => _decode_CertReplaceOK_Item_not_ok
                ),
            ],
        });
    }
    return _cached_decoder_for_CertReplaceOK_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertReplaceOK_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReplaceOK_Item */
let _cached_encoder_for_CertReplaceOK_Item: $.ASN1Encoder<
    CertReplaceOK_Item
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertReplaceOK_Item */

/* START_OF_SYMBOL_DEFINITION _encode_CertReplaceOK_Item */
/**
 * @summary Encodes a(n) CertReplaceOK_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertReplaceOK_Item, encoded as an ASN.1 Element.
 */
export function _encode_CertReplaceOK_Item(
    value: CertReplaceOK_Item,
    elGetter: $.ASN1Encoder<CertReplaceOK_Item>
) {
    if (!_cached_encoder_for_CertReplaceOK_Item) {
        _cached_encoder_for_CertReplaceOK_Item = $._encode_choice<
            CertReplaceOK_Item
        >(
            {
                ok: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_CertReplaceOK_Item_ok,
                    $.BER
                ),
                not_ok: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_CertReplaceOK_Item_not_ok,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_CertReplaceOK_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertReplaceOK_Item */

/* eslint-enable */
