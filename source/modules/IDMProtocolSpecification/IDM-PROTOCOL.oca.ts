/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";

/* START_OF_SYMBOL_DEFINITION IDM_PROTOCOL */
/**
 * @summary IDM_PROTOCOL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IDM-PROTOCOL ::= CLASS {
 *   &bind-operation  OPERATION,
 *   &Operations      OPERATION,
 *   &id              OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   BIND-OPERATION   &bind-operation
 *   OPERATIONS       &Operations
 *   ID               &id }
 * ```
 *
 * @interface
 */
export interface IDM_PROTOCOL {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "IDM-PROTOCOL";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof IDM_PROTOCOL]: $.ASN1Decoder<IDM_PROTOCOL[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof IDM_PROTOCOL]: $.ASN1Encoder<IDM_PROTOCOL[_K]>;
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
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION IDM_PROTOCOL */

/* eslint-enable */
