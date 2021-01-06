import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import {
    OPTIONALLY_PROTECTED,
    _get_decoder_for_OPTIONALLY_PROTECTED,
    _get_encoder_for_OPTIONALLY_PROTECTED,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta";
import {
    Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1,
    _decode_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1,
    _encode_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1,
} from "./Chained-ArgumentType-OPTIONALLY-PROTECTED-Parameter1.ta";
import {
    Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1,
    _decode_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1,
    _encode_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1,
} from "./Chained-ResultType-OPTIONALLY-PROTECTED-Parameter1.ta";

// chained{OPERATION:operation} OPERATION ::= {
//     ARGUMENT             OPTIONALLY-PROTECTED {SET {
//       chainedArgument      ChainingArguments,
//       argument        [0]  operation.&ArgumentType } }
//     RESULT OPTIONALLY-PROTECTED {SET {
//       chainedResult        ChainingResults,
//       result          [0]  operation.&ResultType}}
//     ERRORS
//       {operation.&Errors EXCEPT referral | dsaReferral}
//     CODE                 operation.&operationCode }

export const chained = (
    operation: OPERATION
): OPERATION<
    OPTIONALLY_PROTECTED<typeof operation["&ArgumentType"]>,
    OPTIONALLY_PROTECTED<typeof operation["&ResultType"]>
> => {
    return {
        class: "OPERATION",
        decoderFor: {
            "&ArgumentType": _get_decoder_for_OPTIONALLY_PROTECTED<Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1>(
                _decode_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
            ),
            "&ResultType": _get_decoder_for_OPTIONALLY_PROTECTED<Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1>(
                _decode_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
            ),
        },
        encoderFor: {
            "&ArgumentType": _get_encoder_for_OPTIONALLY_PROTECTED<Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1>(
                _encode_Chained_ArgumentType_OPTIONALLY_PROTECTED_Parameter1
            ),
            "&ResultType": _get_encoder_for_OPTIONALLY_PROTECTED<Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1>(
                _encode_Chained_ResultType_OPTIONALLY_PROTECTED_Parameter1
            ),
        },
        "&operationCode": operation["&operationCode"],
        "&ArgumentType": 0 as never,
        "&ResultType": 0 as never,
    };
};

export default chained;
