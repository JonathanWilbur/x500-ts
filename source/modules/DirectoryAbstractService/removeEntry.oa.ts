/* eslint-disable */
import { id_opcode_removeEntry } from "../CommonProtocolSpecification/id-opcode-removeEntry.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { nameError } from "../DirectoryAbstractService/nameError.oa";
import { referral } from "../DirectoryAbstractService/referral.oa";
import {
    RemoveEntryArgument,
    _decode_RemoveEntryArgument,
    _encode_RemoveEntryArgument,
} from "../DirectoryAbstractService/RemoveEntryArgument.ta";
import {
    RemoveEntryResult,
    _decode_RemoveEntryResult,
    _encode_RemoveEntryResult,
} from "../DirectoryAbstractService/RemoveEntryResult.ta";
import { securityError } from "../DirectoryAbstractService/securityError.oa";
import { serviceError } from "../DirectoryAbstractService/serviceError.oa";
import { updateError } from "../DirectoryAbstractService/updateError.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { id_opcode_removeEntry } from "../CommonProtocolSpecification/id-opcode-removeEntry.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { nameError } from "../DirectoryAbstractService/nameError.oa";
export { referral } from "../DirectoryAbstractService/referral.oa";
export {
    RemoveEntryArgument,
    _decode_RemoveEntryArgument,
    _encode_RemoveEntryArgument,
} from "../DirectoryAbstractService/RemoveEntryArgument.ta";
export {
    RemoveEntryResult,
    _decode_RemoveEntryResult,
    _encode_RemoveEntryResult,
} from "../DirectoryAbstractService/RemoveEntryResult.ta";
export { securityError } from "../DirectoryAbstractService/securityError.oa";
export { serviceError } from "../DirectoryAbstractService/serviceError.oa";
export { updateError } from "../DirectoryAbstractService/updateError.oa";

/* START_OF_SYMBOL_DEFINITION removeEntry */
/**
 * @summary removeEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * removeEntry OPERATION ::= {
 *   ARGUMENT  RemoveEntryArgument
 *   RESULT    RemoveEntryResult
 *   ERRORS    {nameError |
 *              serviceError |
 *              referral |
 *              securityError |
 *              updateError}
 *   CODE      id-opcode-removeEntry }
 * ```
 *
 * @constant
 * @type {OPERATION<RemoveEntryArgument, RemoveEntryResult>}
 * @implements {OPERATION<RemoveEntryArgument, RemoveEntryResult>}
 */
export const removeEntry: OPERATION<RemoveEntryArgument, RemoveEntryResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RemoveEntryArgument,
        "&ResultType": _decode_RemoveEntryResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_RemoveEntryArgument,
        "&ResultType": _encode_RemoveEntryResult,
    },
    "&Errors": [
        nameError,
        serviceError,
        referral,
        securityError,
        updateError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_removeEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION removeEntry */

/* eslint-enable */
