/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    CompareResultData,
    _decode_CompareResultData,
    _encode_CompareResultData,
} from "../DirectoryAbstractService/CompareResultData.ta";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export {
    CompareResultData,
    _decode_CompareResultData,
    _encode_CompareResultData,
} from "../DirectoryAbstractService/CompareResultData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION CompareResult */
/**
 * @summary CompareResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompareResult  ::=  OPTIONALLY-PROTECTED { CompareResultData }
 * ```
 */
export type CompareResult = OPTIONALLY_PROTECTED<CompareResultData>; // DefinedType
/* END_OF_SYMBOL_DEFINITION CompareResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CompareResult */
let _cached_decoder_for_CompareResult: $.ASN1Decoder<CompareResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CompareResult */

/* START_OF_SYMBOL_DEFINITION _decode_CompareResult */
/**
 * @summary Decodes an ASN.1 element into a(n) CompareResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CompareResult} The decoded data structure.
 */
export function _decode_CompareResult(el: _Element) {
    if (!_cached_decoder_for_CompareResult) {
        _cached_decoder_for_CompareResult = _get_decoder_for_OPTIONALLY_PROTECTED<CompareResultData>(
            _decode_CompareResultData
        );
    }
    return _cached_decoder_for_CompareResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CompareResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CompareResult */
let _cached_encoder_for_CompareResult: $.ASN1Encoder<CompareResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CompareResult */

/* START_OF_SYMBOL_DEFINITION _encode_CompareResult */
/**
 * @summary Encodes a(n) CompareResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompareResult, encoded as an ASN.1 Element.
 */
export function _encode_CompareResult(
    value: CompareResult,
    elGetter: $.ASN1Encoder<CompareResult>
) {
    if (!_cached_encoder_for_CompareResult) {
        _cached_encoder_for_CompareResult = _get_encoder_for_OPTIONALLY_PROTECTED<CompareResultData>(
            _encode_CompareResultData
        );
    }
    return _cached_encoder_for_CompareResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CompareResult */

/* eslint-enable */
