/* eslint-disable */
import { ASN1Element as _Element, TeletexString } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION TeletexOrganizationName */
/**
 * @summary TeletexOrganizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexOrganizationName  ::=
 *   TeletexString(SIZE (1..ub-organization-name-length))
 * ```
 */
export type TeletexOrganizationName = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION TeletexOrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TeletexOrganizationName */
let _cached_decoder_for_TeletexOrganizationName: $.ASN1Decoder<TeletexOrganizationName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TeletexOrganizationName */

/* START_OF_SYMBOL_DEFINITION _decode_TeletexOrganizationName */
/**
 * @summary Decodes an ASN.1 element into a(n) TeletexOrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexOrganizationName} The decoded data structure.
 */
export function _decode_TeletexOrganizationName(el: _Element) {
    if (!_cached_decoder_for_TeletexOrganizationName) {
        _cached_decoder_for_TeletexOrganizationName = $._decodeTeletexString;
    }
    return _cached_decoder_for_TeletexOrganizationName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TeletexOrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TeletexOrganizationName */
let _cached_encoder_for_TeletexOrganizationName: $.ASN1Encoder<TeletexOrganizationName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TeletexOrganizationName */

/* START_OF_SYMBOL_DEFINITION _encode_TeletexOrganizationName */
/**
 * @summary Encodes a(n) TeletexOrganizationName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexOrganizationName, encoded as an ASN.1 Element.
 */
export function _encode_TeletexOrganizationName(
    value: TeletexOrganizationName,
    elGetter: $.ASN1Encoder<TeletexOrganizationName>
) {
    if (!_cached_encoder_for_TeletexOrganizationName) {
        _cached_encoder_for_TeletexOrganizationName = $._encodeTeletexString;
    }
    return _cached_encoder_for_TeletexOrganizationName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TeletexOrganizationName */

/* eslint-enable */
