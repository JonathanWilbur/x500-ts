/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";

/* START_OF_SYMBOL_DEFINITION APPLICATION_CONTEXT */
/**
 * @summary APPLICATION_CONTEXT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * APPLICATION-CONTEXT ::= CLASS {
 *   &bind-operation          OPERATION,
 *   &Operations              OPERATION,
 *   &applicationContextName  OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   BIND-OPERATION &bind-operation
 *   OPERATIONS &Operations
 *   APPLICATION CONTEXT NAME &applicationContextName }
 * ```
 *
 * @interface
 */
export interface APPLICATION_CONTEXT {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "APPLICATION-CONTEXT";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof APPLICATION_CONTEXT]: $.ASN1Decoder<
                APPLICATION_CONTEXT[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof APPLICATION_CONTEXT]: $.ASN1Encoder<
                APPLICATION_CONTEXT[_K]
            >;
        }
    >;
    /**
     * @summary &bind-operation
     */
    readonly "&bind-operation"?: OPERATION;
    /**
     * @summary &Operations
     */
    readonly "&Operations"?: OPERATION[];
    /**
     * @summary &applicationContextName
     */
    readonly "&applicationContextName"?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION APPLICATION_CONTEXT */

/* eslint-enable */
