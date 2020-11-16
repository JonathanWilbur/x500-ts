/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";
export { ExtAttributes } from "../AuthenticationFramework/ExtAttributes.osa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta";

/* START_OF_SYMBOL_DEFINITION OidOrAttr */
/**
 * @summary OidOrAttr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OidOrAttr  ::=  CHOICE {
 *   oid       ATTRIBUTE.&id ({ ExtAttributes }),
 *   attribute Attribute {{ ExtAttributes }},
 *   ... }
 * ```
 */
export type OidOrAttr =
    | { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { attribute: Attribute } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION OidOrAttr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OidOrAttr */
let _cached_decoder_for_OidOrAttr: $.ASN1Decoder<OidOrAttr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OidOrAttr */

/* START_OF_SYMBOL_DEFINITION _decode_OidOrAttr */
/**
 * @summary Decodes an ASN.1 element into a(n) OidOrAttr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OidOrAttr} The decoded data structure.
 */
export function _decode_OidOrAttr(el: _Element) {
    if (!_cached_decoder_for_OidOrAttr) {
        _cached_decoder_for_OidOrAttr = $._decode_extensible_choice<OidOrAttr>({
            "UNIVERSAL 6": ["oid", $._decodeObjectIdentifier],
            "UNIVERSAL 16": ["attribute", _decode_Attribute],
        });
    }
    return _cached_decoder_for_OidOrAttr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OidOrAttr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OidOrAttr */
let _cached_encoder_for_OidOrAttr: $.ASN1Encoder<OidOrAttr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OidOrAttr */

/* START_OF_SYMBOL_DEFINITION _encode_OidOrAttr */
/**
 * @summary Encodes a(n) OidOrAttr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OidOrAttr, encoded as an ASN.1 Element.
 */
export function _encode_OidOrAttr(
    value: OidOrAttr,
    elGetter: $.ASN1Encoder<OidOrAttr>
) {
    if (!_cached_encoder_for_OidOrAttr) {
        _cached_encoder_for_OidOrAttr = $._encode_choice<OidOrAttr>(
            {
                oid: $._encodeObjectIdentifier,
                attribute: _encode_Attribute,
            },
            $.BER
        );
    }
    return _cached_encoder_for_OidOrAttr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OidOrAttr */

/* eslint-enable */
