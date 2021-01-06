/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
import {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../InformationFramework/RelativeDistinguishedName.ta";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../InformationFramework/RelativeDistinguishedName.ta";

/* START_OF_SYMBOL_DEFINITION ContentChange_rename */
/**
 * @summary ContentChange_rename
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentChange-rename ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ContentChange_rename =
    | { newRDN: RelativeDistinguishedName } /* CHOICE_ALT_ROOT */
    | { newDN: DistinguishedName } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ContentChange_rename */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentChange_rename */
let _cached_decoder_for_ContentChange_rename: $.ASN1Decoder<ContentChange_rename> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentChange_rename */

/* START_OF_SYMBOL_DEFINITION _decode_ContentChange_rename */
/**
 * @summary Decodes an ASN.1 element into a(n) ContentChange_rename
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentChange_rename} The decoded data structure.
 */
export function _decode_ContentChange_rename(el: _Element) {
    if (!_cached_decoder_for_ContentChange_rename) {
        _cached_decoder_for_ContentChange_rename = $._decode_inextensible_choice<ContentChange_rename>(
            {
                "UNIVERSAL 17": ["newRDN", _decode_RelativeDistinguishedName],
                "UNIVERSAL 16": ["newDN", _decode_DistinguishedName],
            }
        );
    }
    return _cached_decoder_for_ContentChange_rename(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContentChange_rename */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentChange_rename */
let _cached_encoder_for_ContentChange_rename: $.ASN1Encoder<ContentChange_rename> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentChange_rename */

/* START_OF_SYMBOL_DEFINITION _encode_ContentChange_rename */
/**
 * @summary Encodes a(n) ContentChange_rename into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentChange_rename, encoded as an ASN.1 Element.
 */
export function _encode_ContentChange_rename(
    value: ContentChange_rename,
    elGetter: $.ASN1Encoder<ContentChange_rename>
) {
    if (!_cached_encoder_for_ContentChange_rename) {
        _cached_encoder_for_ContentChange_rename = $._encode_choice<ContentChange_rename>(
            {
                newRDN: _encode_RelativeDistinguishedName,
                newDN: _encode_DistinguishedName,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ContentChange_rename(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ContentChange_rename */

/* eslint-enable */
