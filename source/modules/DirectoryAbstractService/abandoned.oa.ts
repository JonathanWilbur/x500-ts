/* eslint-disable */
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
import { id_errcode_abandoned } from "../CommonProtocolSpecification/id-errcode-abandoned.va";
import {
    AbandonedData,
    _decode_AbandonedData,
    _encode_AbandonedData,
} from "../DirectoryAbstractService/AbandonedData.ta";
import {
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { id_errcode_abandoned } from "../CommonProtocolSpecification/id-errcode-abandoned.va";
export {
    AbandonedData,
    _decode_AbandonedData,
    _encode_AbandonedData,
} from "../DirectoryAbstractService/AbandonedData.ta";
export {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";

/* START_OF_SYMBOL_DEFINITION abandoned */
/**
 * @summary abandoned
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * abandoned ERROR ::= {-- not literally an "error"
 *   PARAMETER     OPTIONALLY-PROTECTED { AbandonedData }
 *   CODE          id-errcode-abandoned }
 * ```
 *
 * @constant
 * @type {ERROR}
 * @implements {ERROR}
 */
export const abandoned: ERROR = {
    class: "ERROR",
    decoderFor: {
        "&ParameterType": _get_decoder_for_OPTIONALLY_PROTECTED<AbandonedData>(
            _decode_AbandonedData
        ),
    },
    encoderFor: {
        "&ParameterType": _get_encoder_for_OPTIONALLY_PROTECTED<AbandonedData>(
            _encode_AbandonedData
        ),
    },
    "&errorCode": id_errcode_abandoned /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ParameterType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION abandoned */

/* eslint-enable */
