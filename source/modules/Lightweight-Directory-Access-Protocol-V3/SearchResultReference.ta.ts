/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    URI,
    _decode_URI,
    _encode_URI,
} from "../Lightweight_Directory_Access_Protocol_V3/URI.ta";
export {
    URI,
    _decode_URI,
    _encode_URI,
} from "../Lightweight_Directory_Access_Protocol_V3/URI.ta";

/* START_OF_SYMBOL_DEFINITION SearchResultReference */
/**
 * @summary SearchResultReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResultReference  ::=  [APPLICATION 19]  SEQUENCE SIZE (1..MAX) OF uri URI
 * ```
 */
export type SearchResultReference = URI[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SearchResultReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResultReference */
let _cached_decoder_for_SearchResultReference: $.ASN1Decoder<
    SearchResultReference
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResultReference */

/* START_OF_SYMBOL_DEFINITION _decode_SearchResultReference */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchResultReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResultReference} The decoded data structure.
 */
export function _decode_SearchResultReference(el: _Element) {
    if (!_cached_decoder_for_SearchResultReference) {
        _cached_decoder_for_SearchResultReference = $._decode_implicit<
            SearchResultReference
        >(() => $._decodeSequenceOf<URI>(() => _decode_URI));
    }
    return _cached_decoder_for_SearchResultReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchResultReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResultReference */
let _cached_encoder_for_SearchResultReference: $.ASN1Encoder<
    SearchResultReference
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResultReference */

/* START_OF_SYMBOL_DEFINITION _encode_SearchResultReference */
/**
 * @summary Encodes a(n) SearchResultReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResultReference, encoded as an ASN.1 Element.
 */
export function _encode_SearchResultReference(
    value: SearchResultReference,
    elGetter: $.ASN1Encoder<SearchResultReference>
) {
    if (!_cached_encoder_for_SearchResultReference) {
        _cached_encoder_for_SearchResultReference = $._encode_implicit(
            _TagClass.application,
            19,
            () => $._encodeSequenceOf<URI>(() => _encode_URI, $.BER),
            $.BER
        );
    }
    return _cached_encoder_for_SearchResultReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchResultReference */

/* eslint-enable */
