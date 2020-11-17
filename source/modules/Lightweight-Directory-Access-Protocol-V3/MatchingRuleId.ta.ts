/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    LDAPString,
    _decode_LDAPString,
    _encode_LDAPString,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta";
export {
    LDAPString,
    _decode_LDAPString,
    _encode_LDAPString,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPString.ta";

/* START_OF_SYMBOL_DEFINITION MatchingRuleId */
/**
 * @summary MatchingRuleId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MatchingRuleId  ::=  LDAPString
 * ```
 */
export type MatchingRuleId = LDAPString; // DefinedType
/* END_OF_SYMBOL_DEFINITION MatchingRuleId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MatchingRuleId */
let _cached_decoder_for_MatchingRuleId: $.ASN1Decoder<
    MatchingRuleId
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MatchingRuleId */

/* START_OF_SYMBOL_DEFINITION _decode_MatchingRuleId */
/**
 * @summary Decodes an ASN.1 element into a(n) MatchingRuleId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MatchingRuleId} The decoded data structure.
 */
export function _decode_MatchingRuleId(el: _Element) {
    if (!_cached_decoder_for_MatchingRuleId) {
        _cached_decoder_for_MatchingRuleId = _decode_LDAPString;
    }
    return _cached_decoder_for_MatchingRuleId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MatchingRuleId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MatchingRuleId */
let _cached_encoder_for_MatchingRuleId: $.ASN1Encoder<
    MatchingRuleId
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MatchingRuleId */

/* START_OF_SYMBOL_DEFINITION _encode_MatchingRuleId */
/**
 * @summary Encodes a(n) MatchingRuleId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MatchingRuleId, encoded as an ASN.1 Element.
 */
export function _encode_MatchingRuleId(
    value: MatchingRuleId,
    elGetter: $.ASN1Encoder<MatchingRuleId>
) {
    if (!_cached_encoder_for_MatchingRuleId) {
        _cached_encoder_for_MatchingRuleId = _encode_LDAPString;
    }
    return _cached_encoder_for_MatchingRuleId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MatchingRuleId */

/* eslint-enable */
