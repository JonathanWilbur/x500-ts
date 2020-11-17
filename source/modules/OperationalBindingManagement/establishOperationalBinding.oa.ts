/* eslint-disable */
import { id_op_establishOperationalBinding } from "../CommonProtocolSpecification/id-op-establishOperationalBinding.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { securityError } from "../DirectoryAbstractService/securityError.oa";
import {
    _decode_EstablishOperationalBindingArgument,
    _encode_EstablishOperationalBindingArgument,
} from "../OperationalBindingManagement/EstablishOperationalBindingArgument.ta";
import {
    _decode_EstablishOperationalBindingResult,
    _encode_EstablishOperationalBindingResult,
} from "../OperationalBindingManagement/EstablishOperationalBindingResult.ta";
import { operationalBindingError } from "../OperationalBindingManagement/operationalBindingError.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { id_op_establishOperationalBinding } from "../CommonProtocolSpecification/id-op-establishOperationalBinding.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { securityError } from "../DirectoryAbstractService/securityError.oa";
export {
    EstablishOperationalBindingArgument,
    _decode_EstablishOperationalBindingArgument,
    _encode_EstablishOperationalBindingArgument,
} from "../OperationalBindingManagement/EstablishOperationalBindingArgument.ta";
export {
    EstablishOperationalBindingResult,
    _decode_EstablishOperationalBindingResult,
    _encode_EstablishOperationalBindingResult,
} from "../OperationalBindingManagement/EstablishOperationalBindingResult.ta";
export { operationalBindingError } from "../OperationalBindingManagement/operationalBindingError.oa";

/* START_OF_SYMBOL_DEFINITION establishOperationalBinding */
/**
 * @summary establishOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * establishOperationalBinding OPERATION ::= {
 *   ARGUMENT   EstablishOperationalBindingArgument
 *   RESULT     EstablishOperationalBindingResult
 *   ERRORS     {operationalBindingError | securityError}
 *   CODE       id-op-establishOperationalBinding }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const establishOperationalBinding: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_EstablishOperationalBindingArgument,
        "&ResultType": _decode_EstablishOperationalBindingResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_EstablishOperationalBindingArgument,
        "&ResultType": _encode_EstablishOperationalBindingResult,
    },
    "&Errors": [
        operationalBindingError,
        securityError,
    ] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_op_establishOperationalBinding /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION establishOperationalBinding */

/* eslint-enable */
