/* eslint-disable */
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
import { id_errcode_nameError } from "../CommonProtocolSpecification/id-errcode-nameError.va";
import {
    NameErrorData,
    _decode_NameErrorData,
    _encode_NameErrorData,
} from "../DirectoryAbstractService/NameErrorData.ta";
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
export { id_errcode_nameError } from "../CommonProtocolSpecification/id-errcode-nameError.va";
export {
    NameErrorData,
    _decode_NameErrorData,
    _encode_NameErrorData,
} from "../DirectoryAbstractService/NameErrorData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION nameError */
/**
 * @summary nameError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nameError ERROR ::= {
 *   PARAMETER     OPTIONALLY-PROTECTED { NameErrorData }
 *   CODE          id-errcode-nameError }
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export const nameError: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<NameErrorData>(
            _decode_NameErrorData
        ),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<NameErrorData>(
            _encode_NameErrorData
        ),
    },
    "&errorCode": id_errcode_nameError /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION nameError */

/* eslint-enable */
