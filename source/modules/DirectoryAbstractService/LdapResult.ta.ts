/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    LdapResultData,
    _decode_LdapResultData,
    _encode_LdapResultData,
} from "../DirectoryAbstractService/LdapResultData.ta";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";
export {
    LdapResultData,
    _decode_LdapResultData,
    _encode_LdapResultData,
} from "../DirectoryAbstractService/LdapResultData.ta";
export {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";

/* START_OF_SYMBOL_DEFINITION LdapResult */
/**
 * @summary LdapResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LdapResult  ::=  OPTIONALLY-PROTECTED-SEQ { LdapResultData }
 * ```
 */
export type LdapResult = OPTIONALLY_PROTECTED_SEQ<LdapResultData>; // DefinedType
/* END_OF_SYMBOL_DEFINITION LdapResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LdapResult */
let _cached_decoder_for_LdapResult: $.ASN1Decoder<LdapResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LdapResult */

/* START_OF_SYMBOL_DEFINITION _decode_LdapResult */
/**
 * @summary Decodes an ASN.1 element into a(n) LdapResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LdapResult} The decoded data structure.
 */
export function _decode_LdapResult(el: _Element) {
    if (!_cached_decoder_for_LdapResult) {
        _cached_decoder_for_LdapResult = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<LdapResultData>(
            _decode_LdapResultData
        );
    }
    return _cached_decoder_for_LdapResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LdapResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LdapResult */
let _cached_encoder_for_LdapResult: $.ASN1Encoder<LdapResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LdapResult */

/* START_OF_SYMBOL_DEFINITION _encode_LdapResult */
/**
 * @summary Encodes a(n) LdapResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LdapResult, encoded as an ASN.1 Element.
 */
export function _encode_LdapResult(
    value: LdapResult,
    elGetter: $.ASN1Encoder<LdapResult>
) {
    if (!_cached_encoder_for_LdapResult) {
        _cached_encoder_for_LdapResult = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<LdapResultData>(
            _encode_LdapResultData
        );
    }
    return _cached_encoder_for_LdapResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LdapResult */

/* eslint-enable */
