/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    ReadResultData,
    _decode_ReadResultData,
    _encode_ReadResultData,
} from "../DirectoryAbstractService/ReadResultData.ta";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export {
    ReadResultData,
    _decode_ReadResultData,
    _encode_ReadResultData,
} from "../DirectoryAbstractService/ReadResultData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION ReadResult */
/**
 * @summary ReadResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReadResult  ::=  OPTIONALLY-PROTECTED { ReadResultData }
 * ```
 */
export type ReadResult = OPTIONALLY_PROTECTED<ReadResultData>; // DefinedType
/* END_OF_SYMBOL_DEFINITION ReadResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReadResult */
let _cached_decoder_for_ReadResult: $.ASN1Decoder<ReadResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReadResult */

/* START_OF_SYMBOL_DEFINITION _decode_ReadResult */
/**
 * @summary Decodes an ASN.1 element into a(n) ReadResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReadResult} The decoded data structure.
 */
export function _decode_ReadResult(el: _Element) {
    if (!_cached_decoder_for_ReadResult) {
        _cached_decoder_for_ReadResult = _get_decoder_for_OPTIONALLY_PROTECTED<
            ReadResultData
        >(_decode_ReadResultData);
    }
    return _cached_decoder_for_ReadResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReadResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReadResult */
let _cached_encoder_for_ReadResult: $.ASN1Encoder<ReadResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReadResult */

/* START_OF_SYMBOL_DEFINITION _encode_ReadResult */
/**
 * @summary Encodes a(n) ReadResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReadResult, encoded as an ASN.1 Element.
 */
export function _encode_ReadResult(
    value: ReadResult,
    elGetter: $.ASN1Encoder<ReadResult>
) {
    if (!_cached_encoder_for_ReadResult) {
        _cached_encoder_for_ReadResult = _get_encoder_for_OPTIONALLY_PROTECTED<
            ReadResultData
        >(_encode_ReadResultData);
    }
    return _cached_encoder_for_ReadResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReadResult */

/* eslint-enable */
