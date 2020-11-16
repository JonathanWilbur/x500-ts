/* eslint-disable */
import * as $ from "asn1-ts/dist/node/functional";
import { Code } from "../CommonProtocolSpecification/Code.ta";
import { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";

/* START_OF_SYMBOL_DEFINITION OPERATION */
/**
 * @summary OPERATION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OPERATION ::= CLASS {
 *   &ArgumentType   OPTIONAL,
 *   &ResultType     OPTIONAL,
 *   &Errors         ERROR OPTIONAL,
 *   &operationCode  Code UNIQUE OPTIONAL }
 * WITH SYNTAX {
 *   [ARGUMENT       &ArgumentType]
 *   [RESULT         &ResultType]
 *   [ERRORS         &Errors]
 *   [CODE           &operationCode] }
 * ```
 *
 * @interface
 */
export interface OPERATION<
    ArgumentType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    ResultType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "OPERATION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof OPERATION<ArgumentType, ResultType>]: $.ASN1Decoder<
                OPERATION<ArgumentType, ResultType>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof OPERATION<ArgumentType, ResultType>]: $.ASN1Encoder<
                OPERATION<ArgumentType, ResultType>[_K]
            >;
        }
    >;
    /**
     * @summary &ArgumentType
     */
    readonly "&ArgumentType": ArgumentType;
    /**
     * @summary &ResultType
     */
    readonly "&ResultType": ResultType;
    /**
     * @summary &Errors
     */
    readonly "&Errors"?: ERROR[];
    /**
     * @summary &operationCode
     */
    readonly "&operationCode"?: Code;
}
/* END_OF_SYMBOL_DEFINITION OPERATION */

/* eslint-enable */
