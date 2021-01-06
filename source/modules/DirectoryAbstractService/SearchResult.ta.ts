/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SearchResultData,
    _decode_SearchResultData,
    _encode_SearchResultData,
} from "../DirectoryAbstractService/SearchResultData.ta";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export {
    SearchResultData,
    _decode_SearchResultData,
    _encode_SearchResultData,
} from "../DirectoryAbstractService/SearchResultData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION SearchResult */
/**
 * @summary SearchResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchResult  ::=  OPTIONALLY-PROTECTED { SearchResultData }
 * ```
 */
export type SearchResult = OPTIONALLY_PROTECTED<SearchResultData>; // DefinedType
/* END_OF_SYMBOL_DEFINITION SearchResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResult */
let _cached_decoder_for_SearchResult: $.ASN1Decoder<SearchResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchResult */

/* START_OF_SYMBOL_DEFINITION _decode_SearchResult */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchResult} The decoded data structure.
 */
export function _decode_SearchResult(el: _Element) {
    if (!_cached_decoder_for_SearchResult) {
        _cached_decoder_for_SearchResult = _get_decoder_for_OPTIONALLY_PROTECTED<SearchResultData>(
            _decode_SearchResultData
        );
    }
    return _cached_decoder_for_SearchResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResult */
let _cached_encoder_for_SearchResult: $.ASN1Encoder<SearchResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchResult */

/* START_OF_SYMBOL_DEFINITION _encode_SearchResult */
/**
 * @summary Encodes a(n) SearchResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResult, encoded as an ASN.1 Element.
 */
export function _encode_SearchResult(
    value: SearchResult,
    elGetter: $.ASN1Encoder<SearchResult>
) {
    if (!_cached_encoder_for_SearchResult) {
        _cached_encoder_for_SearchResult = _get_encoder_for_OPTIONALLY_PROTECTED<SearchResultData>(
            _encode_SearchResultData
        );
    }
    return _cached_encoder_for_SearchResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchResult */

/* eslint-enable */
