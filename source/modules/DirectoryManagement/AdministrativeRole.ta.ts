/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION AdministrativeRole */
/**
 * @summary AdministrativeRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdministrativeRole  ::=  OBJECT-CLASS.&id
 * ```
 */
export type AdministrativeRole = OBJECT_IDENTIFIER; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION AdministrativeRole */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministrativeRole */
let _cached_decoder_for_AdministrativeRole: $.ASN1Decoder<AdministrativeRole> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministrativeRole */

/* START_OF_SYMBOL_DEFINITION _decode_AdministrativeRole */
/**
 * @summary Decodes an ASN.1 element into a(n) AdministrativeRole
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdministrativeRole} The decoded data structure.
 */
export function _decode_AdministrativeRole(el: _Element) {
    if (!_cached_decoder_for_AdministrativeRole) {
        _cached_decoder_for_AdministrativeRole = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_AdministrativeRole(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AdministrativeRole */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministrativeRole */
let _cached_encoder_for_AdministrativeRole: $.ASN1Encoder<AdministrativeRole> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministrativeRole */

/* START_OF_SYMBOL_DEFINITION _encode_AdministrativeRole */
/**
 * @summary Encodes a(n) AdministrativeRole into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdministrativeRole, encoded as an ASN.1 Element.
 */
export function _encode_AdministrativeRole(
    value: AdministrativeRole,
    elGetter: $.ASN1Encoder<AdministrativeRole>
) {
    if (!_cached_encoder_for_AdministrativeRole) {
        _cached_encoder_for_AdministrativeRole = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_AdministrativeRole(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AdministrativeRole */

/* eslint-enable */
