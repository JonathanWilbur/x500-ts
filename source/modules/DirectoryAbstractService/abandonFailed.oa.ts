/* eslint-disable */
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
import { id_errcode_abandonFailed } from "../CommonProtocolSpecification/id-errcode-abandonFailed.va";
import {
    AbandonFailedData,
    _decode_AbandonFailedData,
    _encode_AbandonFailedData,
} from "../DirectoryAbstractService/AbandonFailedData.ta";
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
export { id_errcode_abandonFailed } from "../CommonProtocolSpecification/id-errcode-abandonFailed.va";
export {
    AbandonFailedData,
    _decode_AbandonFailedData,
    _encode_AbandonFailedData,
} from "../DirectoryAbstractService/AbandonFailedData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION abandonFailed */
/**
 * @summary abandonFailed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * abandonFailed ERROR ::= {
 *   PARAMETER OPTIONALLY-PROTECTED { AbandonFailedData }
 *   CODE      id-errcode-abandonFailed }
 * ```
 *
 * @constant
 * @type {ERROR<OPTIONALLY_PROTECTED<AbandonFailedData>>}
 * @implements {ERROR<OPTIONALLY_PROTECTED<AbandonFailedData>>}
 */
export const abandonFailed: ERROR<OPTIONALLY_PROTECTED<AbandonFailedData>> = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<
            AbandonFailedData
        >(_decode_AbandonFailedData),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<
            AbandonFailedData
        >(_encode_AbandonFailedData),
    },
    "&errorCode": id_errcode_abandonFailed /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION abandonFailed */

/* eslint-enable */
