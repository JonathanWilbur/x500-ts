/* eslint-disable */
import { ASN1Element as _Element, TeletexString } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION TeletexOrganizationalUnitName */
/**
 * @summary TeletexOrganizationalUnitName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexOrganizationalUnitName  ::=
 *   TeletexString(SIZE (1..ub-organizational-unit-name-length))
 * ```
 */
export type TeletexOrganizationalUnitName = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION TeletexOrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TeletexOrganizationalUnitName */
let _cached_decoder_for_TeletexOrganizationalUnitName: $.ASN1Decoder<
    TeletexOrganizationalUnitName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TeletexOrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _decode_TeletexOrganizationalUnitName */
/**
 * @summary Decodes an ASN.1 element into a(n) TeletexOrganizationalUnitName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexOrganizationalUnitName} The decoded data structure.
 */
export function _decode_TeletexOrganizationalUnitName(el: _Element) {
    if (!_cached_decoder_for_TeletexOrganizationalUnitName) {
        _cached_decoder_for_TeletexOrganizationalUnitName =
            $._decodeTeletexString;
    }
    return _cached_decoder_for_TeletexOrganizationalUnitName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TeletexOrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TeletexOrganizationalUnitName */
let _cached_encoder_for_TeletexOrganizationalUnitName: $.ASN1Encoder<
    TeletexOrganizationalUnitName
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TeletexOrganizationalUnitName */

/* START_OF_SYMBOL_DEFINITION _encode_TeletexOrganizationalUnitName */
/**
 * @summary Encodes a(n) TeletexOrganizationalUnitName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexOrganizationalUnitName, encoded as an ASN.1 Element.
 */
export function _encode_TeletexOrganizationalUnitName(
    value: TeletexOrganizationalUnitName,
    elGetter: $.ASN1Encoder<TeletexOrganizationalUnitName>
) {
    if (!_cached_encoder_for_TeletexOrganizationalUnitName) {
        _cached_encoder_for_TeletexOrganizationalUnitName =
            $._encodeTeletexString;
    }
    return _cached_encoder_for_TeletexOrganizationalUnitName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TeletexOrganizationalUnitName */

/* eslint-enable */
