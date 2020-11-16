/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    SearchArgumentData,
    _decode_SearchArgumentData,
    _encode_SearchArgumentData,
} from "../DirectoryAbstractService/SearchArgumentData.ta";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export {
    SearchArgumentData,
    _decode_SearchArgumentData,
    _encode_SearchArgumentData,
} from "../DirectoryAbstractService/SearchArgumentData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION SearchArgument */
/**
 * @summary SearchArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SearchArgument  ::=  OPTIONALLY-PROTECTED { SearchArgumentData }
 * ```
 */
export type SearchArgument = OPTIONALLY_PROTECTED<SearchArgumentData>; // DefinedType
/* END_OF_SYMBOL_DEFINITION SearchArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchArgument */
let _cached_decoder_for_SearchArgument: $.ASN1Decoder<
    SearchArgument
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SearchArgument */

/* START_OF_SYMBOL_DEFINITION _decode_SearchArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) SearchArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SearchArgument} The decoded data structure.
 */
export function _decode_SearchArgument(el: _Element) {
    if (!_cached_decoder_for_SearchArgument) {
        _cached_decoder_for_SearchArgument = _get_decoder_for_OPTIONALLY_PROTECTED<
            SearchArgumentData
        >(_decode_SearchArgumentData);
    }
    return _cached_decoder_for_SearchArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SearchArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchArgument */
let _cached_encoder_for_SearchArgument: $.ASN1Encoder<
    SearchArgument
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SearchArgument */

/* START_OF_SYMBOL_DEFINITION _encode_SearchArgument */
/**
 * @summary Encodes a(n) SearchArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchArgument, encoded as an ASN.1 Element.
 */
export function _encode_SearchArgument(
    value: SearchArgument,
    elGetter: $.ASN1Encoder<SearchArgument>
) {
    if (!_cached_encoder_for_SearchArgument) {
        _cached_encoder_for_SearchArgument = _get_encoder_for_OPTIONALLY_PROTECTED<
            SearchArgumentData
        >(_encode_SearchArgumentData);
    }
    return _cached_encoder_for_SearchArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SearchArgument */

/* eslint-enable */
