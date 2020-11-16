/* eslint-disable */
import { id_opcode_list } from "../CommonProtocolSpecification/id-opcode-list.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { abandoned } from "../DirectoryAbstractService/abandoned.oa";
import { nameError } from "../DirectoryAbstractService/nameError.oa";
import { referral } from "../DirectoryAbstractService/referral.oa";
import { securityError } from "../DirectoryAbstractService/securityError.oa";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa";
export { id_opcode_list } from "../CommonProtocolSpecification/id-opcode-list.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { abandoned } from "../DirectoryAbstractService/abandoned.oa";
export {
    ListArgument,
    _get_decoder_for_ListArgument,
    _get_encoder_for_ListArgument,
} from "../DirectoryAbstractService/ListArgument.ta";
export {
    ListResult,
    _get_decoder_for_ListResult,
    _get_encoder_for_ListResult,
} from "../DirectoryAbstractService/ListResult.ta";
export { nameError } from "../DirectoryAbstractService/nameError.oa";
export { referral } from "../DirectoryAbstractService/referral.oa";
export { securityError } from "../DirectoryAbstractService/securityError.oa";
export { serviceError } from "../DirectoryAbstractService/serviceError.oa";

/* START_OF_SYMBOL_DEFINITION list */
/**
 * @summary list
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * list OPERATION ::= {
 *   ARGUMENT  ListArgument
 *   RESULT    ListResult
 *   ERRORS    {nameError |
 *              serviceError |
 *              referral |
 *              abandoned |
 *              securityError}
 *   CODE      id-opcode-list }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const list: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ListArgument,
        "&ResultType": _decode_ListResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ListArgument,
        "&ResultType": _encode_ListResult,
    },
    "&Errors": [
        nameError,
        serviceError,
        referral,
        abandoned,
        securityError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_list /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION list */

/* eslint-enable */
