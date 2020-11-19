/* eslint-disable */
import { id_opcode_updateShadow } from "../CommonProtocolSpecification/id-opcode-updateShadow.va";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { shadowError } from "../DirectoryShadowAbstractService/shadowError.oa";
import {
    UpdateShadowArgument,
    _decode_UpdateShadowArgument,
    _encode_UpdateShadowArgument,
} from "../DirectoryShadowAbstractService/UpdateShadowArgument.ta";
import {
    UpdateShadowResult,
    _decode_UpdateShadowResult,
    _encode_UpdateShadowResult,
} from "../DirectoryShadowAbstractService/UpdateShadowResult.ta";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { id_opcode_updateShadow } from "../CommonProtocolSpecification/id-opcode-updateShadow.va";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { shadowError } from "../DirectoryShadowAbstractService/shadowError.oa";
export {
    UpdateShadowArgument,
    _decode_UpdateShadowArgument,
    _encode_UpdateShadowArgument,
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
 * @type {OPERATION<UpdateShadowArgument, UpdateShadowResult>}
 * @implements {OPERATION<UpdateShadowArgument, UpdateShadowResult>}
 */
export const updateShadow: OPERATION<
    UpdateShadowArgument,
    UpdateShadowResult
> = {
    class: "OPERATION",
    decoderFor: {
        "&ArgumentType": _decode_UpdateShadowArgument,
        "&ResultType": _decode_UpdateShadowResult,
    },
    encoderFor: {
        "&ArgumentType": _encode_UpdateShadowArgument,
        "&ResultType": _encode_UpdateShadowResult,
    },
    "&Errors": [shadowError] /* OBJECT_FIELD_SETTING */,
    "&operationCode": id_opcode_updateShadow /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ArgumentType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&ResultType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION updateShadow */

/* eslint-enable */
