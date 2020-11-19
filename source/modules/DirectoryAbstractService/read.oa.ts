/* eslint-disable */
import { id_opcode_read } from "../CommonProtocolSpecification/id-opcode-read.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { abandoned } from "../DirectoryAbstractService/abandoned.oa";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa";
import { nameError } from "../DirectoryAbstractService/nameError.oa";
import {
    ReadArgument,
    _decode_ReadArgument,
    _encode_ReadArgument,
} from "../DirectoryAbstractService/ReadArgument.ta";
import {
    ReadResult,
    _decode_ReadResult,
    _encode_ReadResult,
} from "../DirectoryAbstractService/ReadResult.ta";
import { referral } from "../DirectoryAbstractService/referral.oa";
import { securityError } from "../DirectoryAbstractService/securityError.oa";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { id_opcode_read } from "../CommonProtocolSpecification/id-opcode-read.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { abandoned } from "../DirectoryAbstractService/abandoned.oa";
export { attributeError } from "../DirectoryAbstractService/attributeError.oa";
export { nameError } from "../DirectoryAbstractService/nameError.oa";
export {
    ReadArgument,
    _decode_ReadArgument,
    _encode_ReadArgument,
} from "../DirectoryAbstractService/ReadArgument.ta";
export {
    ReadResult,
    _decode_ReadResult,
    _encode_ReadResult,
} from "../DirectoryAbstractService/ReadResult.ta";
export { referral } from "../DirectoryAbstractService/referral.oa";
export { securityError } from "../DirectoryAbstractService/securityError.oa";
export { serviceError } from "../DirectoryAbstractService/serviceError.oa";

/* START_OF_SYMBOL_DEFINITION read */
/**
 * @summary read
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * read OPERATION ::= {
 *   ARGUMENT  ReadArgument
 *   RESULT    ReadResult
 *   ERRORS    {attributeError |
 *              nameError |
 *              serviceError |
 *              referral |
 *              abandoned |
 *              securityError}
 *   CODE      id-opcode-read }
 * ```
 *
 * @constant
 * @type {OPERATION<ReadArgument, ReadResult>}
 * @implements {OPERATION<ReadArgument, ReadResult>}
 */
export const read: OPERATION<ReadArgument, ReadResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ReadArgument,
        "&ResultType": _decode_ReadResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ReadArgument,
        "&ResultType": _encode_ReadResult,
    },
    "&Errors": [
        attributeError,
        nameError,
        serviceError,
        referral,
        abandoned,
        securityError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_read /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION read */

/* eslint-enable */
