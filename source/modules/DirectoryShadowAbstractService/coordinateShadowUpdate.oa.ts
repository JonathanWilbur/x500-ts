/* eslint-disable */
import { id_opcode_coordinateShadowUpdate } from "../CommonProtocolSpecification/id-opcode-coordinateShadowUpdate.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import {
    _decode_CoordinateShadowUpdateResult,
    _encode_CoordinateShadowUpdateResult,
} from "../DirectoryShadowAbstractService/CoordinateShadowUpdateResult.ta";
export { id_opcode_coordinateShadowUpdate } from "../CommonProtocolSpecification/id-opcode-coordinateShadowUpdate.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export {
    CoordinateShadowUpdateArgument,
    _get_decoder_for_CoordinateShadowUpdateArgument,
    _get_encoder_for_CoordinateShadowUpdateArgument,
} from "../DirectoryShadowAbstractService/CoordinateShadowUpdateArgument.ta";
export {
    CoordinateShadowUpdateResult,
    _decode_CoordinateShadowUpdateResult,
    _encode_CoordinateShadowUpdateResult,
} from "../DirectoryShadowAbstractService/CoordinateShadowUpdateResult.ta";

/* START_OF_SYMBOL_DEFINITION coordinateShadowUpdate */
/**
 * @summary coordinateShadowUpdate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * coordinateShadowUpdate OPERATION ::= {
 *   ARGUMENT  CoordinateShadowUpdateArgument
 *   RESULT    CoordinateShadowUpdateResult
 *   ERRORS    {shadowError}
 *   CODE      id-opcode-coordinateShadowUpdate
 * }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const coordinateShadowUpdate: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_CoordinateShadowUpdateArgument,
        "&ResultType": _decode_CoordinateShadowUpdateResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_CoordinateShadowUpdateArgument,
        "&ResultType": _encode_CoordinateShadowUpdateResult,
    },
    "&Errors": undefined,
    "&operationCode": id_opcode_coordinateShadowUpdate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION coordinateShadowUpdate */

/* eslint-enable */
