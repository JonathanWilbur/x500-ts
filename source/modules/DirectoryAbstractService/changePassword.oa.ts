/* eslint-disable */
import { id_opcode_changePassword } from "../CommonProtocolSpecification/id-opcode-changePassword.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import {
    _decode_ChangePasswordArgument,
    _encode_ChangePasswordArgument,
} from "../DirectoryAbstractService/ChangePasswordArgument.ta";
import {
    _decode_ChangePasswordResult,
    _encode_ChangePasswordResult,
} from "../DirectoryAbstractService/ChangePasswordResult.ta";
import { securityError } from "../DirectoryAbstractService/securityError.oa";
import { updateError } from "../DirectoryAbstractService/updateError.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { id_opcode_changePassword } from "../CommonProtocolSpecification/id-opcode-changePassword.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export {
    ChangePasswordArgument,
    _decode_ChangePasswordArgument,
    _encode_ChangePasswordArgument,
} from "../DirectoryAbstractService/ChangePasswordArgument.ta";
export {
    ChangePasswordResult,
    _decode_ChangePasswordResult,
    _encode_ChangePasswordResult,
} from "../DirectoryAbstractService/ChangePasswordResult.ta";
export { securityError } from "../DirectoryAbstractService/securityError.oa";
export { updateError } from "../DirectoryAbstractService/updateError.oa";

/* START_OF_SYMBOL_DEFINITION changePassword */
/**
 * @summary changePassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * changePassword OPERATION ::= {
 *   ARGUMENT  ChangePasswordArgument
 *   RESULT    ChangePasswordResult
 *   ERRORS    {securityError |
 *              updateError }
 *   CODE      id-opcode-changePassword }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const changePassword: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ChangePasswordArgument,
        "&ResultType": _decode_ChangePasswordResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ChangePasswordArgument,
        "&ResultType": _encode_ChangePasswordResult,
    },
    "&Errors": [securityError, updateError] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_changePassword /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION changePassword */

/* eslint-enable */
