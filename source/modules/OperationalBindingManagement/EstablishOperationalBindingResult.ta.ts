/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";
import {
    EstablishOperationalBindingResultData,
    _decode_EstablishOperationalBindingResultData,
    _encode_EstablishOperationalBindingResultData,
} from "../OperationalBindingManagement/EstablishOperationalBindingResultData.ta";
export {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta";
export {
    EstablishOperationalBindingResultData,
    _decode_EstablishOperationalBindingResultData,
    _encode_EstablishOperationalBindingResultData,
} from "../OperationalBindingManagement/EstablishOperationalBindingResultData.ta";

/* START_OF_SYMBOL_DEFINITION EstablishOperationalBindingResult */
/**
 * @summary EstablishOperationalBindingResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EstablishOperationalBindingResult  ::=  OPTIONALLY-PROTECTED-SEQ { EstablishOperationalBindingResultData }
 * ```
 */
export type EstablishOperationalBindingResult = OPTIONALLY_PROTECTED_SEQ<EstablishOperationalBindingResultData>; // DefinedType
/* END_OF_SYMBOL_DEFINITION EstablishOperationalBindingResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EstablishOperationalBindingResult */
let _cached_decoder_for_EstablishOperationalBindingResult: $.ASN1Decoder<EstablishOperationalBindingResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EstablishOperationalBindingResult */

/* START_OF_SYMBOL_DEFINITION _decode_EstablishOperationalBindingResult */
/**
 * @summary Decodes an ASN.1 element into a(n) EstablishOperationalBindingResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EstablishOperationalBindingResult} The decoded data structure.
 */
export function _decode_EstablishOperationalBindingResult(el: _Element) {
    if (!_cached_decoder_for_EstablishOperationalBindingResult) {
        _cached_decoder_for_EstablishOperationalBindingResult = _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<EstablishOperationalBindingResultData>(
            _decode_EstablishOperationalBindingResultData
        );
    }
    return _cached_decoder_for_EstablishOperationalBindingResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EstablishOperationalBindingResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EstablishOperationalBindingResult */
let _cached_encoder_for_EstablishOperationalBindingResult: $.ASN1Encoder<EstablishOperationalBindingResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EstablishOperationalBindingResult */

/* START_OF_SYMBOL_DEFINITION _encode_EstablishOperationalBindingResult */
/**
 * @summary Encodes a(n) EstablishOperationalBindingResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishOperationalBindingResult, encoded as an ASN.1 Element.
 */
export function _encode_EstablishOperationalBindingResult(
    value: EstablishOperationalBindingResult,
    elGetter: $.ASN1Encoder<EstablishOperationalBindingResult>
) {
    if (!_cached_encoder_for_EstablishOperationalBindingResult) {
        _cached_encoder_for_EstablishOperationalBindingResult = _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<EstablishOperationalBindingResultData>(
            _encode_EstablishOperationalBindingResultData
        );
    }
    return _cached_encoder_for_EstablishOperationalBindingResult(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_EstablishOperationalBindingResult */

/* eslint-enable */
