/* eslint-disable */
import { id_opcode_abandon } from "../CommonProtocolSpecification/id-opcode-abandon.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import {
    _decode_AbandonResult,
    _encode_AbandonResult,
} from "../DirectoryAbstractService/AbandonResult.ta";
export { id_opcode_abandon } from "../CommonProtocolSpecification/id-opcode-abandon.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export {
    AbandonArgument,
    _get_decoder_for_AbandonArgument,
    _get_encoder_for_AbandonArgument,
} from "../DirectoryAbstractService/AbandonArgument.ta";
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
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const abandon: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_AbandonArgument,
        "&ResultType": _decode_AbandonResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_AbandonArgument,
        "&ResultType": _encode_AbandonResult,
    },
    "&Errors": undefined,
    "&operationCode": id_opcode_abandon /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION abandon */

/* eslint-enable */
