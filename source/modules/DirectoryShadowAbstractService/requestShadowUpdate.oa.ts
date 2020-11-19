/* eslint-disable */
import { id_opcode_requestShadowUpdate } from "../CommonProtocolSpecification/id-opcode-requestShadowUpdate.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import {
    RequestShadowUpdateArgument,
    _decode_RequestShadowUpdateArgument,
    _encode_RequestShadowUpdateArgument,
} from "../DirectoryShadowAbstractService/RequestShadowUpdateArgument.ta";
import {
    RequestShadowUpdateResult,
    _decode_RequestShadowUpdateResult,
    _encode_RequestShadowUpdateResult,
} from "../DirectoryShadowAbstractService/RequestShadowUpdateResult.ta";
import { shadowError } from "../DirectoryShadowAbstractService/shadowError.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { id_opcode_requestShadowUpdate } from "../CommonProtocolSpecification/id-opcode-requestShadowUpdate.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export {
    RequestShadowUpdateArgument,
    _decode_RequestShadowUpdateArgument,
    _encode_RequestShadowUpdateArgument,
} from "../DirectoryShadowAbstractService/RequestShadowUpdateArgument.ta";
export {
    RequestShadowUpdateResult,
    _decode_RequestShadowUpdateResult,
    _encode_RequestShadowUpdateResult,
} from "../DirectoryShadowAbstractService/RequestShadowUpdateResult.ta";
export { shadowError } from "../DirectoryShadowAbstractService/shadowError.oa";

/* START_OF_SYMBOL_DEFINITION requestShadowUpdate */
/**
 * @summary requestShadowUpdate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * requestShadowUpdate OPERATION ::= {
 *   ARGUMENT  RequestShadowUpdateArgument
 *   RESULT    RequestShadowUpdateResult
 *   ERRORS    {shadowError}
 *   CODE      id-opcode-requestShadowUpdate
 * }
 * ```
 *
 * @constant
 * @type {OPERATION<RequestShadowUpdateArgument, RequestShadowUpdateResult>}
 * @implements {OPERATION<RequestShadowUpdateArgument, RequestShadowUpdateResult>}
 */
export const requestShadowUpdate: OPERATION<
    RequestShadowUpdateArgument,
    RequestShadowUpdateResult
> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_RequestShadowUpdateArgument,
        "&ResultType": _decode_RequestShadowUpdateResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_RequestShadowUpdateArgument,
        "&ResultType": _encode_RequestShadowUpdateResult,
    },
    "&Errors": [shadowError] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_requestShadowUpdate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION requestShadowUpdate */

/* eslint-enable */
