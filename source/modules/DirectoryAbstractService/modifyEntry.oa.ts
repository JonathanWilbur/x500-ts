/* eslint-disable */
import { id_opcode_modifyEntry } from "../CommonProtocolSpecification/id-opcode-modifyEntry.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa";
import {
    _decode_ModifyEntryArgument,
    _encode_ModifyEntryArgument,
} from "../DirectoryAbstractService/ModifyEntryArgument.ta";
import {
    _decode_ModifyEntryResult,
    _encode_ModifyEntryResult,
} from "../DirectoryAbstractService/ModifyEntryResult.ta";
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
export { id_opcode_modifyEntry } from "../CommonProtocolSpecification/id-opcode-modifyEntry.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { attributeError } from "../DirectoryAbstractService/attributeError.oa";
export {
    ModifyEntryArgument,
    _decode_ModifyEntryArgument,
    _encode_ModifyEntryArgument,
} from "../DirectoryAbstractService/ModifyEntryArgument.ta";
export {
    ModifyEntryResult,
    _decode_ModifyEntryResult,
    _encode_ModifyEntryResult,
} from "../DirectoryAbstractService/ModifyEntryResult.ta";
export { nameError } from "../DirectoryAbstractService/nameError.oa";
export { referral } from "../DirectoryAbstractService/referral.oa";
export { securityError } from "../DirectoryAbstractService/securityError.oa";
export { serviceError } from "../DirectoryAbstractService/serviceError.oa";
export { updateError } from "../DirectoryAbstractService/updateError.oa";

/* START_OF_SYMBOL_DEFINITION modifyEntry */
/**
 * @summary modifyEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * modifyEntry OPERATION ::= {
 *   ARGUMENT  ModifyEntryArgument
 *   RESULT    ModifyEntryResult
 *   ERRORS    {attributeError |
 *              nameError |
 *              serviceError |
 *              referral |
 *              securityError |
 *              updateError}
 *   CODE      id-opcode-modifyEntry }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const modifyEntry: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_ModifyEntryArgument,
        "&ResultType": _decode_ModifyEntryResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_ModifyEntryArgument,
        "&ResultType": _encode_ModifyEntryResult,
    },
    "&Errors": [
        attributeError,
        nameError,
        serviceError,
        referral,
        securityError,
        updateError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_modifyEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION modifyEntry */

/* eslint-enable */
