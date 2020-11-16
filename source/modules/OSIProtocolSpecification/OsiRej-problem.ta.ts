/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    GeneralProblem,
    _decode_GeneralProblem,
    _encode_GeneralProblem,
} from "../OSIProtocolSpecification/GeneralProblem.ta";
import {
    InvokeProblem,
    _decode_InvokeProblem,
    _encode_InvokeProblem,
} from "../OSIProtocolSpecification/InvokeProblem.ta";
import {
    ReturnErrorProblem,
    _decode_ReturnErrorProblem,
    _encode_ReturnErrorProblem,
} from "../OSIProtocolSpecification/ReturnErrorProblem.ta";
import {
    ReturnResultProblem,
    _decode_ReturnResultProblem,
    _encode_ReturnResultProblem,
} from "../OSIProtocolSpecification/ReturnResultProblem.ta";
export {
    GeneralProblem,
    GeneralProblem_badlyStructuredPDU /* IMPORTED_NAMED_INTEGER */,
    GeneralProblem_mistypedPDU /* IMPORTED_NAMED_INTEGER */,
    GeneralProblem_unrecognizedPDU /* IMPORTED_NAMED_INTEGER */,
    _decode_GeneralProblem,
    _encode_GeneralProblem,
} from "../OSIProtocolSpecification/GeneralProblem.ta";
export {
    InvokeProblem,
    InvokeProblem_duplicateInvocation /* IMPORTED_NAMED_INTEGER */,
    InvokeProblem_mistypedArgument /* IMPORTED_NAMED_INTEGER */,
    InvokeProblem_releaseInProgress /* IMPORTED_NAMED_INTEGER */,
    InvokeProblem_resourceLimitation /* IMPORTED_NAMED_INTEGER */,
    InvokeProblem_unrecognizedOperation /* IMPORTED_NAMED_INTEGER */,
    _decode_InvokeProblem,
    _encode_InvokeProblem,
} from "../OSIProtocolSpecification/InvokeProblem.ta";
export {
    ReturnErrorProblem,
    ReturnErrorProblem_errorResponseUnexpected /* IMPORTED_NAMED_INTEGER */,
    ReturnErrorProblem_mistypedParameter /* IMPORTED_NAMED_INTEGER */,
    ReturnErrorProblem_unexpectedError /* IMPORTED_NAMED_INTEGER */,
    ReturnErrorProblem_unrecognizedError /* IMPORTED_NAMED_INTEGER */,
    ReturnErrorProblem_unrecognizedInvocation /* IMPORTED_NAMED_INTEGER */,
    _decode_ReturnErrorProblem,
    _encode_ReturnErrorProblem,
} from "../OSIProtocolSpecification/ReturnErrorProblem.ta";
export {
    ReturnResultProblem,
    ReturnResultProblem_mistypedResult /* IMPORTED_NAMED_INTEGER */,
    ReturnResultProblem_resultResponseUnexpected /* IMPORTED_NAMED_INTEGER */,
    ReturnResultProblem_unrecognizedInvocation /* IMPORTED_NAMED_INTEGER */,
    _decode_ReturnResultProblem,
    _encode_ReturnResultProblem,
} from "../OSIProtocolSpecification/ReturnResultProblem.ta";

/* START_OF_SYMBOL_DEFINITION OsiRej_problem */
/**
 * @summary OsiRej_problem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OsiRej-problem ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type OsiRej_problem =
    | { general: GeneralProblem } /* CHOICE_ALT_ROOT */
    | { invoke: InvokeProblem } /* CHOICE_ALT_ROOT */
    | { returnResult: ReturnResultProblem } /* CHOICE_ALT_ROOT */
    | { returnError: ReturnErrorProblem } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION OsiRej_problem */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiRej_problem */
let _cached_decoder_for_OsiRej_problem: $.ASN1Decoder<
    OsiRej_problem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OsiRej_problem */

/* START_OF_SYMBOL_DEFINITION _decode_OsiRej_problem */
/**
 * @summary Decodes an ASN.1 element into a(n) OsiRej_problem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OsiRej_problem} The decoded data structure.
 */
export function _decode_OsiRej_problem(el: _Element) {
    if (!_cached_decoder_for_OsiRej_problem) {
        _cached_decoder_for_OsiRej_problem = $._decode_extensible_choice<
            OsiRej_problem
        >({
            "CONTEXT 0": [
                "general",
                $._decode_explicit<GeneralProblem>(
                    () => _decode_GeneralProblem
                ),
            ],
            "CONTEXT 1": [
                "invoke",
                $._decode_explicit<InvokeProblem>(() => _decode_InvokeProblem),
            ],
            "CONTEXT 2": [
                "returnResult",
                $._decode_explicit<ReturnResultProblem>(
                    () => _decode_ReturnResultProblem
                ),
            ],
            "CONTEXT 3": [
                "returnError",
                $._decode_explicit<ReturnErrorProblem>(
                    () => _decode_ReturnErrorProblem
                ),
            ],
        });
    }
    return _cached_decoder_for_OsiRej_problem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OsiRej_problem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiRej_problem */
let _cached_encoder_for_OsiRej_problem: $.ASN1Encoder<
    OsiRej_problem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OsiRej_problem */

/* START_OF_SYMBOL_DEFINITION _encode_OsiRej_problem */
/**
 * @summary Encodes a(n) OsiRej_problem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OsiRej_problem, encoded as an ASN.1 Element.
 */
export function _encode_OsiRej_problem(
    value: OsiRej_problem,
    elGetter: $.ASN1Encoder<OsiRej_problem>
) {
    if (!_cached_encoder_for_OsiRej_problem) {
        _cached_encoder_for_OsiRej_problem = $._encode_choice<OsiRej_problem>(
            {
                general: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_GeneralProblem,
                    $.BER
                ),
                invoke: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_InvokeProblem,
                    $.BER
                ),
                returnResult: $._encode_explicit(
                    _TagClass.context,
                    2,
                    () => _encode_ReturnResultProblem,
                    $.BER
                ),
                returnError: $._encode_explicit(
                    _TagClass.context,
                    3,
                    () => _encode_ReturnErrorProblem,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_OsiRej_problem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OsiRej_problem */

/* eslint-enable */
