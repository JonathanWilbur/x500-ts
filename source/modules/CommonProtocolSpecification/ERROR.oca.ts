/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { Code } from "../CommonProtocolSpecification/Code.ta";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";

/* START_OF_SYMBOL_DEFINITION ERROR */
/**
 * @summary ERROR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ERROR ::= CLASS {
 *   &ParameterType,
 *   &errorCode      Code UNIQUE OPTIONAL }
 * WITH SYNTAX {
 *   PARAMETER       &ParameterType
 *   [CODE           &errorCode] }
 * ```
 *
 * @interface
 */
export interface ERROR<
    ParameterType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ERROR";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof ERROR<ParameterType>]: $.ASN1Decoder<
                ERROR<ParameterType>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ERROR<ParameterType>]: $.ASN1Encoder<
                ERROR<ParameterType>[_K]
            >;
        }
    >;
    /**
     * @summary &ParameterType
     */
    readonly "&ParameterType": ParameterType;
    /**
     * @summary &errorCode
     */
    readonly "&errorCode"?: Code;
}
/* END_OF_SYMBOL_DEFINITION ERROR */

/* eslint-enable */
