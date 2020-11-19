/* eslint-disable */
import { id_opcode_modifyDN } from "../CommonProtocolSpecification/id-opcode-modifyDN.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import {
    ModifyDNArgument,
    _decode_ModifyDNArgument,
    _encode_ModifyDNArgument,
} from "../DirectoryAbstractService/ModifyDNArgument.ta";
import {
    ModifyDNResult,
    _decode_ModifyDNResult,
    _encode_ModifyDNResult,
} from "../DirectoryAbstractService/ModifyDNResult.ta";
import { nameError } from "../DirectoryAbstractService/nameError.oa";
import { referral } from "../DirectoryAbstractService/referral.oa";
import { securityError } from "../DirectoryAbstractService/securityError.oa";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa";
import { updateError } from "../DirectoryAbstractService/updateError.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { id_opcode_modifyDN } from "../CommonProtocolSpecification/id-opcode-modifyDN.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export {
    ModifyDNArgument,
    _decode_ModifyDNArgument,
    _encode_ModifyDNArgument,
} from "../DirectoryAbstractService/ModifyDNArgument.ta";
export {
    ModifyDNResult,
    _decode_ModifyDNResult,
    _encode_ModifyDNResult,
} from "../DirectoryAbstractService/ModifyDNResult.ta";
export { nameError } from "../DirectoryAbstractService/nameError.oa";
export { referral } from "../DirectoryAbstractService/referral.oa";
export { securityError } from "../DirectoryAbstractService/securityError.oa";
export { serviceError } from "../DirectoryAbstractService/serviceError.oa";
export { updateError } from "../DirectoryAbstractService/updateError.oa";

/* START_OF_SYMBOL_DEFINITION modifyDN */
/**
 * @summary modifyDN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * modifyDN OPERATION ::= {
 *   ARGUMENT  ModifyDNArgument
 *   RESULT    ModifyDNResult
 *   ERRORS    {nameError |
 *              serviceError |
 *              referral |
 *              securityError |
 *              updateError}
 *   CODE      id-opcode-modifyDN }
 * ```
 *
 * @constant
 * @type {OPERATION<ModifyDNArgument, ModifyDNResult>}
 * @implements {OPERATION<ModifyDNArgument, ModifyDNResult>}
 */
export const modifyDN: OPERATION<ModifyDNArgument, ModifyDNResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ModifyDNArgument,
        "&ResultType": _decode_ModifyDNResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ModifyDNArgument,
        "&ResultType": _encode_ModifyDNResult,
    },
    "&Errors": [
        nameError,
        serviceError,
        referral,
        securityError,
        updateError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_modifyDN /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION modifyDN */

/* eslint-enable */
