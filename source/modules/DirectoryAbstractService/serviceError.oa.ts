/* eslint-disable */
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
import { id_errcode_serviceError } from "../CommonProtocolSpecification/id-errcode-serviceError.va";
import {
    ServiceErrorData,
    _decode_ServiceErrorData,
    _encode_ServiceErrorData,
} from "../DirectoryAbstractService/ServiceErrorData.ta";
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
export { id_errcode_serviceError } from "../CommonProtocolSpecification/id-errcode-serviceError.va";
export {
    ServiceErrorData,
    _decode_ServiceErrorData,
    _encode_ServiceErrorData,
} from "../DirectoryAbstractService/ServiceErrorData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION serviceError */
/**
 * @summary serviceError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceError ERROR ::= {
 *   PARAMETER   OPTIONALLY-PROTECTED { ServiceErrorData }
 *   CODE        id-errcode-serviceError }
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export const serviceError: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<
            ServiceErrorData
        >(_decode_ServiceErrorData),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<
            ServiceErrorData
        >(_encode_ServiceErrorData),
    },
    "&errorCode": id_errcode_serviceError /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION serviceError */

/* eslint-enable */
