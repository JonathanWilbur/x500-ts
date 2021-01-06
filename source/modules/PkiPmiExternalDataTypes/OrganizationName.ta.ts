/* eslint-disable */
import { ASN1Element as _Element, PrintableString } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION OrganizationName */
/**
 * @summary OrganizationName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrganizationName  ::=  PrintableString(SIZE (1..ub-organization-name-length))
 * ```
 */
export type OrganizationName = PrintableString; // PrintableString
/* END_OF_SYMBOL_DEFINITION OrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OrganizationName */
let _cached_decoder_for_OrganizationName: $.ASN1Decoder<OrganizationName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OrganizationName */

/* START_OF_SYMBOL_DEFINITION _decode_OrganizationName */
/**
 * @summary Decodes an ASN.1 element into a(n) OrganizationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrganizationName} The decoded data structure.
 */
export function _decode_OrganizationName(el: _Element) {
    if (!_cached_decoder_for_OrganizationName) {
        _cached_decoder_for_OrganizationName = $._decodePrintableString;
    }
    return _cached_decoder_for_OrganizationName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OrganizationName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OrganizationName */
let _cached_encoder_for_OrganizationName: $.ASN1Encoder<OrganizationName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OrganizationName */

/* START_OF_SYMBOL_DEFINITION _encode_OrganizationName */
/**
 * @summary Encodes a(n) OrganizationName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrganizationName, encoded as an ASN.1 Element.
 */
export function _encode_OrganizationName(
    value: OrganizationName,
    elGetter: $.ASN1Encoder<OrganizationName>
) {
    if (!_cached_encoder_for_OrganizationName) {
        _cached_encoder_for_OrganizationName = $._encodePrintableString;
    }
    return _cached_encoder_for_OrganizationName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OrganizationName */

/* eslint-enable */
