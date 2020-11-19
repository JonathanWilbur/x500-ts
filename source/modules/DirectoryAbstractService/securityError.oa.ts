/* eslint-disable */
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
import { id_errcode_securityError } from "../CommonProtocolSpecification/id-errcode-securityError.va";
import {
    SecurityErrorData,
    _decode_SecurityErrorData,
    _encode_SecurityErrorData,
} from "../DirectoryAbstractService/SecurityErrorData.ta";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { id_errcode_securityError } from "../CommonProtocolSpecification/id-errcode-securityError.va";
export {
    SecurityErrorData,
    _decode_SecurityErrorData,
    _encode_SecurityErrorData,
} from "../DirectoryAbstractService/SecurityErrorData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION securityError */
/**
 * @summary securityError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * securityError  ERROR ::= {
 *   PARAMETER   OPTIONALLY-PROTECTED { SecurityErrorData }
 *   CODE        id-errcode-securityError }
 * ```
 *
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<SecurityErrorData>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<SecurityErrorData>>}
 */
export const securityError: ERROR<OPTIONALLY_PROTECTED<SecurityErrorData>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<
            SecurityErrorData
        >(_decode_SecurityErrorData),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<
            SecurityErrorData
        >(_encode_SecurityErrorData),
    },
    "&errorCode": id_errcode_securityError /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION securityError */

/* eslint-enable */
