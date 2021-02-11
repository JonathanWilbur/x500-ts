/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PKCertIdentifier,
    _decode_PKCertIdentifier,
    _encode_PKCertIdentifier,
} from "../AuthenticationFramework/PKCertIdentifier.ta";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export {
    PKCertIdentifier,
    _decode_PKCertIdentifier,
    _encode_PKCertIdentifier,
} from "../AuthenticationFramework/PKCertIdentifier.ta";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";

/* START_OF_SYMBOL_DEFINITION TBSCertAVL_entries_Item_idType */
/**
 * @summary TBSCertAVL_entries_Item_idType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSCertAVL-entries-Item-idType ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TBSCertAVL_entries_Item_idType =
    | { certIdentifier: PKCertIdentifier } /* CHOICE_ALT_ROOT */
    | { entityGroup: DistinguishedName } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION TBSCertAVL_entries_Item_idType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSCertAVL_entries_Item_idType */
let _cached_decoder_for_TBSCertAVL_entries_Item_idType: $.ASN1Decoder<TBSCertAVL_entries_Item_idType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TBSCertAVL_entries_Item_idType */

/* START_OF_SYMBOL_DEFINITION _decode_TBSCertAVL_entries_Item_idType */
/**
 * @summary Decodes an ASN.1 element into a(n) TBSCertAVL_entries_Item_idType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSCertAVL_entries_Item_idType} The decoded data structure.
 */
export function _decode_TBSCertAVL_entries_Item_idType(el: _Element) {
    if (!_cached_decoder_for_TBSCertAVL_entries_Item_idType) {
        _cached_decoder_for_TBSCertAVL_entries_Item_idType = $._decode_extensible_choice<TBSCertAVL_entries_Item_idType>(
            {
                "CONTEXT 0": [
                    "certIdentifier",
                    $._decode_explicit<PKCertIdentifier>(
                        () => _decode_PKCertIdentifier
                    ),
                ],
                "UNIVERSAL 16": ["entityGroup", _decode_DistinguishedName],
            }
        );
    }
    return _cached_decoder_for_TBSCertAVL_entries_Item_idType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TBSCertAVL_entries_Item_idType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSCertAVL_entries_Item_idType */
let _cached_encoder_for_TBSCertAVL_entries_Item_idType: $.ASN1Encoder<TBSCertAVL_entries_Item_idType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TBSCertAVL_entries_Item_idType */

/* START_OF_SYMBOL_DEFINITION _encode_TBSCertAVL_entries_Item_idType */
/**
 * @summary Encodes a(n) TBSCertAVL_entries_Item_idType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSCertAVL_entries_Item_idType, encoded as an ASN.1 Element.
 */
export function _encode_TBSCertAVL_entries_Item_idType(
    value: TBSCertAVL_entries_Item_idType,
    elGetter: $.ASN1Encoder<TBSCertAVL_entries_Item_idType>
) {
    if (!_cached_encoder_for_TBSCertAVL_entries_Item_idType) {
        _cached_encoder_for_TBSCertAVL_entries_Item_idType = $._encode_choice<TBSCertAVL_entries_Item_idType>(
            {
                certIdentifier: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_PKCertIdentifier,
                    $.DER
                ),
                entityGroup: _encode_DistinguishedName,
            },
            $.DER
        );
    }
    return _cached_encoder_for_TBSCertAVL_entries_Item_idType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TBSCertAVL_entries_Item_idType */

/* eslint-enable */
