/* eslint-disable */
import { id_opcode_abandon } from "../CommonProtocolSpecification/id-opcode-abandon.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import {
    AbandonArgument,
    _decode_AbandonArgument,
    _encode_AbandonArgument,
} from "../DirectoryAbstractService/AbandonArgument.ta";
import { abandonFailed } from "../DirectoryAbstractService/abandonFailed.oa";
import {
    AbandonResult,
    _decode_AbandonResult,
    _encode_AbandonResult,
} from "../DirectoryAbstractService/AbandonResult.ta";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { id_opcode_abandon } from "../CommonProtocolSpecification/id-opcode-abandon.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export {
    AbandonArgument,
    _decode_AbandonArgument,
    _encode_AbandonArgument,
} from "../DirectoryAbstractService/AbandonArgument.ta";
export { abandonFailed } from "../DirectoryAbstractService/abandonFailed.oa";
export {
    AbandonResult,
    _decode_AbandonResult,
    _encode_AbandonResult,
} from "../DirectoryAbstractService/AbandonResult.ta";

/* START_OF_SYMBOL_DEFINITION abandon */
/**
 * @summary abandon
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * abandon OPERATION ::= {
 *   ARGUMENT  AbandonArgument
 *   RESULT    AbandonResult
 *   ERRORS    {abandonFailed}
 *   CODE      id-opcode-abandon }
 * ```
 *
 * @constant
 * @type {OPERATION<AbandonArgument, AbandonResult>}
 * @implements {OPERATION<AbandonArgument, AbandonResult>}
 */
export const abandon: OPERATION<AbandonArgument, AbandonResult> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AbandonArgument,
        "&ResultType": _decode_AbandonResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_AbandonArgument,
        "&ResultType": _encode_AbandonResult,
    },
    "&Errors": [abandonFailed] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_abandon /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION abandon */

/* eslint-enable */
