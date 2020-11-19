/* eslint-disable */
import { id_opcode_addEntry } from "../CommonProtocolSpecification/id-opcode-addEntry.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import {
    AddEntryArgument,
    _decode_AddEntryArgument,
    _encode_AddEntryArgument,
} from "../DirectoryAbstractService/AddEntryArgument.ta";
import {
    AddEntryResult,
    _decode_AddEntryResult,
    _encode_AddEntryResult,
} from "../DirectoryAbstractService/AddEntryResult.ta";
import { attributeError } from "../DirectoryAbstractService/attributeError.oa";
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
export { id_opcode_addEntry } from "../CommonProtocolSpecification/id-opcode-addEntry.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export {
    AddEntryArgument,
    _decode_AddEntryArgument,
    _encode_AddEntryArgument,
} from "../DirectoryAbstractService/AddEntryArgument.ta";
export {
    AddEntryResult,
    _decode_AddEntryResult,
    _encode_AddEntryResult,
} from "../DirectoryAbstractService/AddEntryResult.ta";
export { attributeError } from "../DirectoryAbstractService/attributeError.oa";
export { nameError } from "../DirectoryAbstractService/nameError.oa";
export { referral } from "../DirectoryAbstractService/referral.oa";
export { securityError } from "../DirectoryAbstractService/securityError.oa";
export { serviceError } from "../DirectoryAbstractService/serviceError.oa";
export { updateError } from "../DirectoryAbstractService/updateError.oa";

/* START_OF_SYMBOL_DEFINITION addEntry */
/**
 * @summary addEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * addEntry OPERATION ::= {
 *   ARGUMENT  AddEntryArgument
 *   RESULT    AddEntryResult
 *   ERRORS    {attributeError |
 *              nameError |
 *              serviceError |
 *              referral |
 *              securityError |
 *              updateError}
 *   CODE      id-opcode-addEntry }
 * ```
 *
 * @constant
 * @type {OPERATION<AddEntryArgument, AddEntryResult>}
 * @implements {OPERATION<AddEntryArgument, AddEntryResult>}
 */
export const addEntry: OPERATION<AddEntryArgument, AddEntryResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AddEntryArgument,
        "&ResultType": _decode_AddEntryResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_AddEntryArgument,
        "&ResultType": _encode_AddEntryResult,
    },
    "&Errors": [
        attributeError,
        nameError,
        serviceError,
        referral,
        securityError,
        updateError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_addEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION addEntry */

/* eslint-enable */
