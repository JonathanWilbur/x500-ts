/* eslint-disable */
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
import { id_errcode_updateError } from "../CommonProtocolSpecification/id-errcode-updateError.va";
import {
    UpdateErrorData,
    _decode_UpdateErrorData,
    _encode_UpdateErrorData,
} from "../DirectoryAbstractService/UpdateErrorData.ta";
import {
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { id_errcode_updateError } from "../CommonProtocolSpecification/id-errcode-updateError.va";
export {
    UpdateErrorData,
    _decode_UpdateErrorData,
    _encode_UpdateErrorData,
} from "../DirectoryAbstractService/UpdateErrorData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION updateError */
/**
 * @summary updateError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * updateError ERROR ::= {
 *   PARAMETER   OPTIONALLY-PROTECTED { UpdateErrorData }
 *   CODE        id-errcode-updateError }
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export const updateError: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<
            UpdateErrorData
        >(_decode_UpdateErrorData),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<
            UpdateErrorData
        >(_encode_UpdateErrorData),
    },
    "&errorCode": id_errcode_updateError /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION updateError */

/* eslint-enable */
