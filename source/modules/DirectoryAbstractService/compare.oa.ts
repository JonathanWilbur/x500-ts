/* eslint-disable */
import { id_opcode_compare } from "../CommonProtocolSpecification/id-opcode-compare.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { abandoned } from "../DirectoryAbstractService/abandoned.oa";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa";
import {
    CompareArgument,
    _decode_CompareArgument,
    _encode_CompareArgument,
} from "../DirectoryAbstractService/CompareArgument.ta";
import {
    CompareResult,
    _decode_CompareResult,
    _encode_CompareResult,
} from "../DirectoryAbstractService/CompareResult.ta";
import { nameError } from "../DirectoryAbstractService/nameError.oa";
import { referral } from "../DirectoryAbstractService/referral.oa";
import { securityError } from "../DirectoryAbstractService/securityError.oa";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { id_opcode_compare } from "../CommonProtocolSpecification/id-opcode-compare.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { abandoned } from "../DirectoryAbstractService/abandoned.oa";
export { attributeError } from "../DirectoryAbstractService/attributeError.oa";
export {
    CompareArgument,
    _decode_CompareArgument,
    _encode_CompareArgument,
} from "../DirectoryAbstractService/CompareArgument.ta";
export {
    CompareResult,
    _decode_CompareResult,
    _encode_CompareResult,
} from "../DirectoryAbstractService/CompareResult.ta";
export { nameError } from "../DirectoryAbstractService/nameError.oa";
export { referral } from "../DirectoryAbstractService/referral.oa";
export { securityError } from "../DirectoryAbstractService/securityError.oa";
export { serviceError } from "../DirectoryAbstractService/serviceError.oa";

/* START_OF_SYMBOL_DEFINITION compare */
/**
 * @summary compare
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * compare OPERATION ::= {
 *   ARGUMENT  CompareArgument
 *   RESULT    CompareResult
 *   ERRORS    {attributeError |
 *              nameError |
 *              serviceError |
 *              referral |
 *              abandoned |
 *              securityError}
 *   CODE      id-opcode-compare }
 * ```
 *
 * @constant
 * @type {OPERATION<CompareArgument, CompareResult>}
 * @implements {OPERATION<CompareArgument, CompareResult>}
 */
export const compare: OPERATION<CompareArgument, CompareResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CompareArgument,
        "&ResultType": _decode_CompareResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CompareArgument,
        "&ResultType": _encode_CompareResult,
    },
    "&Errors": [
        attributeError,
        nameError,
        serviceError,
        referral,
        abandoned,
        securityError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_compare /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION compare */

/* eslint-enable */
