/* eslint-disable */
import { id_opcode_updateShadow } from "../CommonProtocolSpecification/id-opcode-updateShadow.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import {
    _decode_UpdateShadowResult,
    _encode_UpdateShadowResult,
} from "../DirectoryShadowAbstractService/UpdateShadowResult.ta";
export { id_opcode_updateShadow } from "../CommonProtocolSpecification/id-opcode-updateShadow.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export {
    UpdateShadowArgument,
    _get_decoder_for_UpdateShadowArgument,
    _get_encoder_for_UpdateShadowArgument,
} from "../DirectoryShadowAbstractService/UpdateShadowArgument.ta";
export {
    UpdateShadowResult,
    _decode_UpdateShadowResult,
    _encode_UpdateShadowResult,
} from "../DirectoryShadowAbstractService/UpdateShadowResult.ta";

/* START_OF_SYMBOL_DEFINITION updateShadow */
/**
 * @summary updateShadow
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * updateShadow OPERATION ::= {
 *   ARGUMENT  UpdateShadowArgument
 *   RESULT    UpdateShadowResult
 *   ERRORS    {shadowError}
 *   CODE      id-opcode-updateShadow }
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const updateShadow: OPERATION = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_UpdateShadowArgument,
        "&ResultType": _decode_UpdateShadowResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_UpdateShadowArgument,
        "&ResultType": _encode_UpdateShadowResult,
    },
    "&Errors": undefined,
    "&operationCode": id_opcode_updateShadow /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION updateShadow */

/* eslint-enable */
