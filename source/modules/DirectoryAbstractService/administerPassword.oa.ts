/* eslint-disable */
import { id_opcode_administerPassword } from "../CommonProtocolSpecification/id-opcode-administerPassword.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import {
    _decode_AdministerPasswordResult,
    _encode_AdministerPasswordResult,
} from "../DirectoryAbstractService/AdministerPasswordResult.ta";
import { securityError } from "../DirectoryAbstractService/securityError.oa";
import { updateError } from "../DirectoryAbstractService/updateError.oa";
export { id_opcode_administerPassword } from "../CommonProtocolSpecification/id-opcode-administerPassword.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export {
    AdministerPasswordArgument,
    _get_decoder_for_AdministerPasswordArgument,
    _get_encoder_for_AdministerPasswordArgument,
} from "../DirectoryAbstractService/AdministerPasswordArgument.ta";
export {
    AdministerPasswordResult,
    _decode_AdministerPasswordResult,
    _encode_AdministerPasswordResult,
} from "../DirectoryAbstractService/AdministerPasswordResult.ta";
export { securityError } from "../DirectoryAbstractService/securityError.oa";
export { updateError } from "../DirectoryAbstractService/updateError.oa";

/* START_OF_SYMBOL_DEFINITION administerPassword */
/**
 * @summary administerPassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * administerPassword OPERATION ::= {
 *   ARGUMENT  AdministerPasswordArgument
 *   RESULT    AdministerPasswordResult
 *   ERRORS    {securityError |
 *              updateError}
 *   CODE      id-opcode-administerPassword }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const administerPassword: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AdministerPasswordArgument,
        "&ResultType": _decode_AdministerPasswordResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_AdministerPasswordArgument,
        "&ResultType": _encode_AdministerPasswordResult,
    },
    "&Errors": [securityError, updateError] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_administerPassword /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION administerPassword */

/* eslint-enable */
