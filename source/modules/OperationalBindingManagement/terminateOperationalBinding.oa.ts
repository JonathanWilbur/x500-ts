/* eslint-disable */
import { id_op_terminateOperationalBinding } from "../CommonProtocolSpecification/id-op-terminateOperationalBinding.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { securityError } from "../DirectoryAbstractService/securityError.oa";
import { operationalBindingError } from "../OperationalBindingManagement/operationalBindingError.oa";
import {
    _decode_TerminateOperationalBindingArgument,
    _encode_TerminateOperationalBindingArgument,
} from "../OperationalBindingManagement/TerminateOperationalBindingArgument.ta";
import {
    _decode_TerminateOperationalBindingResult,
    _encode_TerminateOperationalBindingResult,
} from "../OperationalBindingManagement/TerminateOperationalBindingResult.ta";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { id_op_terminateOperationalBinding } from "../CommonProtocolSpecification/id-op-terminateOperationalBinding.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { securityError } from "../DirectoryAbstractService/securityError.oa";
export { operationalBindingError } from "../OperationalBindingManagement/operationalBindingError.oa";
export {
    TerminateOperationalBindingArgument,
    _decode_TerminateOperationalBindingArgument,
    _encode_TerminateOperationalBindingArgument,
} from "../OperationalBindingManagement/TerminateOperationalBindingArgument.ta";
export {
    TerminateOperationalBindingResult,
    _decode_TerminateOperationalBindingResult,
    _encode_TerminateOperationalBindingResult,
} from "../OperationalBindingManagement/TerminateOperationalBindingResult.ta";

/* START_OF_SYMBOL_DEFINITION terminateOperationalBinding */
/**
 * @summary terminateOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * terminateOperationalBinding OPERATION ::= {
 *   ARGUMENT  TerminateOperationalBindingArgument
 *   RESULT    TerminateOperationalBindingResult
 *   ERRORS    {operationalBindingError | securityError}
 *   CODE      id-op-terminateOperationalBinding }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const terminateOperationalBinding: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_TerminateOperationalBindingArgument,
        "&ResultType": _decode_TerminateOperationalBindingResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_TerminateOperationalBindingArgument,
        "&ResultType": _encode_TerminateOperationalBindingResult,
    },
    "&Errors": [
        operationalBindingError,
        securityError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_op_terminateOperationalBinding /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION terminateOperationalBinding */

/* eslint-enable */
