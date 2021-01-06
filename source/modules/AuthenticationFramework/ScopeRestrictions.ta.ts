/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ScopeRestriction,
    _decode_ScopeRestriction,
    _encode_ScopeRestriction,
} from "../AuthenticationFramework/ScopeRestriction.ta";
export {
    ScopeRestriction,
    _decode_ScopeRestriction,
    _encode_ScopeRestriction,
} from "../AuthenticationFramework/ScopeRestriction.ta";

/* START_OF_SYMBOL_DEFINITION ScopeRestrictions */
/**
 * @summary ScopeRestrictions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScopeRestrictions  ::=  SEQUENCE OF ScopeRestriction
 * ```
 */
export type ScopeRestrictions = ScopeRestriction[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ScopeRestrictions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ScopeRestrictions */
let _cached_decoder_for_ScopeRestrictions: $.ASN1Decoder<ScopeRestrictions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ScopeRestrictions */

/* START_OF_SYMBOL_DEFINITION _decode_ScopeRestrictions */
/**
 * @summary Decodes an ASN.1 element into a(n) ScopeRestrictions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScopeRestrictions} The decoded data structure.
 */
export function _decode_ScopeRestrictions(el: _Element) {
    if (!_cached_decoder_for_ScopeRestrictions) {
        _cached_decoder_for_ScopeRestrictions = $._decodeSequenceOf<ScopeRestriction>(
            () => _decode_ScopeRestriction
        );
    }
    return _cached_decoder_for_ScopeRestrictions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ScopeRestrictions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ScopeRestrictions */
let _cached_encoder_for_ScopeRestrictions: $.ASN1Encoder<ScopeRestrictions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ScopeRestrictions */

/* START_OF_SYMBOL_DEFINITION _encode_ScopeRestrictions */
/**
 * @summary Encodes a(n) ScopeRestrictions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScopeRestrictions, encoded as an ASN.1 Element.
 */
export function _encode_ScopeRestrictions(
    value: ScopeRestrictions,
    elGetter: $.ASN1Encoder<ScopeRestrictions>
) {
    if (!_cached_encoder_for_ScopeRestrictions) {
        _cached_encoder_for_ScopeRestrictions = $._encodeSequenceOf<ScopeRestriction>(
            () => _encode_ScopeRestriction,
            $.BER
        );
    }
    return _cached_encoder_for_ScopeRestrictions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ScopeRestrictions */

/* eslint-enable */
