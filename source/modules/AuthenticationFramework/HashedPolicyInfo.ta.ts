/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { Policies } from "../AuthenticationFramework/Policies.osa";
export { POLICY } from "../AuthenticationFramework/POLICY.oca";

/* START_OF_SYMBOL_DEFINITION HashedPolicyInfo */
/**
 * @summary HashedPolicyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashedPolicyInfo  ::=  POLICY.&Type({Policies})
 * ```
 */
export type HashedPolicyInfo = _Element; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION HashedPolicyInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_HashedPolicyInfo */
let _cached_decoder_for_HashedPolicyInfo: $.ASN1Decoder<
    HashedPolicyInfo
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_HashedPolicyInfo */

/* START_OF_SYMBOL_DEFINITION _decode_HashedPolicyInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) HashedPolicyInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HashedPolicyInfo} The decoded data structure.
 */
export function _decode_HashedPolicyInfo(el: _Element) {
    if (!_cached_decoder_for_HashedPolicyInfo) {
        _cached_decoder_for_HashedPolicyInfo = $._decodeAny;
    }
    return _cached_decoder_for_HashedPolicyInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_HashedPolicyInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_HashedPolicyInfo */
let _cached_encoder_for_HashedPolicyInfo: $.ASN1Encoder<
    HashedPolicyInfo
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_HashedPolicyInfo */

/* START_OF_SYMBOL_DEFINITION _encode_HashedPolicyInfo */
/**
 * @summary Encodes a(n) HashedPolicyInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashedPolicyInfo, encoded as an ASN.1 Element.
 */
export function _encode_HashedPolicyInfo(
    value: HashedPolicyInfo,
    elGetter: $.ASN1Encoder<HashedPolicyInfo>
) {
    if (!_cached_encoder_for_HashedPolicyInfo) {
        _cached_encoder_for_HashedPolicyInfo = $._encodeAny;
    }
    return _cached_encoder_for_HashedPolicyInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_HashedPolicyInfo */

/* eslint-enable */
