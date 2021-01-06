/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PrivilegePolicy */
/**
 * @summary PrivilegePolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrivilegePolicy  ::=  OBJECT IDENTIFIER
 * ```
 */
export type PrivilegePolicy = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION PrivilegePolicy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivilegePolicy */
let _cached_decoder_for_PrivilegePolicy: $.ASN1Decoder<PrivilegePolicy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrivilegePolicy */

/* START_OF_SYMBOL_DEFINITION _decode_PrivilegePolicy */
/**
 * @summary Decodes an ASN.1 element into a(n) PrivilegePolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrivilegePolicy} The decoded data structure.
 */
export function _decode_PrivilegePolicy(el: _Element) {
    if (!_cached_decoder_for_PrivilegePolicy) {
        _cached_decoder_for_PrivilegePolicy = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_PrivilegePolicy(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrivilegePolicy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivilegePolicy */
let _cached_encoder_for_PrivilegePolicy: $.ASN1Encoder<PrivilegePolicy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrivilegePolicy */

/* START_OF_SYMBOL_DEFINITION _encode_PrivilegePolicy */
/**
 * @summary Encodes a(n) PrivilegePolicy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivilegePolicy, encoded as an ASN.1 Element.
 */
export function _encode_PrivilegePolicy(
    value: PrivilegePolicy,
    elGetter: $.ASN1Encoder<PrivilegePolicy>
) {
    if (!_cached_encoder_for_PrivilegePolicy) {
        _cached_encoder_for_PrivilegePolicy = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_PrivilegePolicy(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrivilegePolicy */

/* eslint-enable */
