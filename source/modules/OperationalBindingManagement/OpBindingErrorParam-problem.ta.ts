/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION _enum_for_OpBindingErrorParam_problem */
export enum _enum_for_OpBindingErrorParam_problem {
    invalidID = 0,
    duplicateID = 1,
    unsupportedBindingType = 2,
    notAllowedForRole = 3,
    parametersMissing = 4,
    roleAssignment = 5,
    invalidStartTime = 6,
    invalidEndTime = 7,
    invalidAgreement = 8,
    currentlyNotDecidable = 9,
    modificationNotAllowed = 10,
    invalidBindingType = 11,
    invalidNewID = 12,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_OpBindingErrorParam_problem */

/* START_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem */
/**
 * @summary OpBindingErrorParam_problem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OpBindingErrorParam-problem ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type OpBindingErrorParam_problem =
    | _enum_for_OpBindingErrorParam_problem
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem */

/* START_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_invalidID */
/**
 * @summary OpBindingErrorParam_problem_invalidID
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidID: OpBindingErrorParam_problem = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_invalidID */

/* START_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_duplicateID */
/**
 * @summary OpBindingErrorParam_problem_duplicateID
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_duplicateID: OpBindingErrorParam_problem = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_duplicateID */

/* START_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_unsupportedBindingType */
/**
 * @summary OpBindingErrorParam_problem_unsupportedBindingType
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_unsupportedBindingType: OpBindingErrorParam_problem = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_unsupportedBindingType */

/* START_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_notAllowedForRole */
/**
 * @summary OpBindingErrorParam_problem_notAllowedForRole
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_notAllowedForRole: OpBindingErrorParam_problem = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_notAllowedForRole */

/* START_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_parametersMissing */
/**
 * @summary OpBindingErrorParam_problem_parametersMissing
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_parametersMissing: OpBindingErrorParam_problem = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_parametersMissing */

/* START_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_roleAssignment */
/**
 * @summary OpBindingErrorParam_problem_roleAssignment
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_roleAssignment: OpBindingErrorParam_problem = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_roleAssignment */

/* START_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_invalidStartTime */
/**
 * @summary OpBindingErrorParam_problem_invalidStartTime
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidStartTime: OpBindingErrorParam_problem = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_invalidStartTime */

/* START_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_invalidEndTime */
/**
 * @summary OpBindingErrorParam_problem_invalidEndTime
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidEndTime: OpBindingErrorParam_problem = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_invalidEndTime */

/* START_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_invalidAgreement */
/**
 * @summary OpBindingErrorParam_problem_invalidAgreement
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidAgreement: OpBindingErrorParam_problem = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_invalidAgreement */

/* START_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_currentlyNotDecidable */
/**
 * @summary OpBindingErrorParam_problem_currentlyNotDecidable
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_currentlyNotDecidable: OpBindingErrorParam_problem = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_currentlyNotDecidable */

/* START_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_modificationNotAllowed */
/**
 * @summary OpBindingErrorParam_problem_modificationNotAllowed
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_modificationNotAllowed: OpBindingErrorParam_problem = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_modificationNotAllowed */

/* START_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_invalidBindingType */
/**
 * @summary OpBindingErrorParam_problem_invalidBindingType
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidBindingType: OpBindingErrorParam_problem = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_invalidBindingType */

/* START_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_invalidNewID */
/**
 * @summary OpBindingErrorParam_problem_invalidNewID
 * @constant
 * @type {number}
 */
export const OpBindingErrorParam_problem_invalidNewID: OpBindingErrorParam_problem = 12; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OpBindingErrorParam_problem_invalidNewID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OpBindingErrorParam_problem */
let _cached_decoder_for_OpBindingErrorParam_problem: $.ASN1Decoder<
    OpBindingErrorParam_problem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OpBindingErrorParam_problem */

/* START_OF_SYMBOL_DEFINITION _decode_OpBindingErrorParam_problem */
/**
 * @summary Decodes an ASN.1 element into a(n) OpBindingErrorParam_problem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OpBindingErrorParam_problem} The decoded data structure.
 */
export function _decode_OpBindingErrorParam_problem(el: _Element) {
    if (!_cached_decoder_for_OpBindingErrorParam_problem) {
        _cached_decoder_for_OpBindingErrorParam_problem = $._decodeEnumerated;
    }
    return _cached_decoder_for_OpBindingErrorParam_problem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OpBindingErrorParam_problem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OpBindingErrorParam_problem */
let _cached_encoder_for_OpBindingErrorParam_problem: $.ASN1Encoder<
    OpBindingErrorParam_problem
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OpBindingErrorParam_problem */

/* START_OF_SYMBOL_DEFINITION _encode_OpBindingErrorParam_problem */
/**
 * @summary Encodes a(n) OpBindingErrorParam_problem into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OpBindingErrorParam_problem, encoded as an ASN.1 Element.
 */
export function _encode_OpBindingErrorParam_problem(
    value: OpBindingErrorParam_problem,
    elGetter: $.ASN1Encoder<OpBindingErrorParam_problem>
) {
    if (!_cached_encoder_for_OpBindingErrorParam_problem) {
        _cached_encoder_for_OpBindingErrorParam_problem = $._encodeEnumerated;
    }
    return _cached_encoder_for_OpBindingErrorParam_problem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OpBindingErrorParam_problem */

/* eslint-enable */
