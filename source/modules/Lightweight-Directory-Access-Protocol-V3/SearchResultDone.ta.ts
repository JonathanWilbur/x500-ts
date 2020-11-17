/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    LDAPResult,
    _decode_LDAPResult,
    _encode_LDAPResult,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPResult.ta";
export {
    LDAPResult,
    _decode_LDAPResult,
    _encode_LDAPResult,
} from "../Lightweight-Directory-Access-Protocol-V3/LDAPResult.ta";

/* START_OF_SYMBOL_DEFINITION SearchResultDone */
/**
 * @summary SearchResultDone
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResultDone  ::=  [APPLICATION 5]  LDAPResult
 * ```
 */
export type SearchResultDone = LDAPResult; // DefinedType
/* END_OF_SYMBOL_DEFINITION SearchResultDone */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResultDone */
let _cached_decoder_for_SearchResultDone: $.ASN1Decoder<
    SearchResultDone
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResultDone */

/* START_OF_SYMBOL_DEFINITION _decode_SearchResultDone */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchResultDone
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResultDone} The decoded data structure.
 */
export function _decode_SearchResultDone(el: _Element) {
    if (!_cached_decoder_for_SearchResultDone) {
        _cached_decoder_for_SearchResultDone = $._decode_implicit<
            SearchResultDone
        >(() => _decode_LDAPResult);
    }
    return _cached_decoder_for_SearchResultDone(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchResultDone */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResultDone */
let _cached_encoder_for_SearchResultDone: $.ASN1Encoder<
    SearchResultDone
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResultDone */

/* START_OF_SYMBOL_DEFINITION _encode_SearchResultDone */
/**
 * @summary Encodes a(n) SearchResultDone into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResultDone, encoded as an ASN.1 Element.
 */
export function _encode_SearchResultDone(
    value: SearchResultDone,
    elGetter: $.ASN1Encoder<SearchResultDone>
) {
    if (!_cached_encoder_for_SearchResultDone) {
        _cached_encoder_for_SearchResultDone = $._encode_implicit(
            _TagClass.application,
            5,
            () => _encode_LDAPResult,
            $.BER
        );
    }
    return _cached_encoder_for_SearchResultDone(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchResultDone */

/* eslint-enable */
