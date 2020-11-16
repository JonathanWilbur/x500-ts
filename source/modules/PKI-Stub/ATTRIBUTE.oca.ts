/* eslint-disable */
import { OBJECT_IDENTIFIER, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION ATTRIBUTE */
/**
 * @summary ATTRIBUTE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ATTRIBUTE ::= CLASS {
 *   &type                     UTF8String,
 *   &id                       OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   WITH SYNTAX               &type
 *   ID                        &id }
 * ```
 *
 * @interface
 */
export interface ATTRIBUTE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "ATTRIBUTE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof ATTRIBUTE]: $.ASN1Decoder<ATTRIBUTE[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ATTRIBUTE]: $.ASN1Encoder<ATTRIBUTE[_K]>;
        }
    >;
    /**
     * @summary &type
     */
    readonly "&type"?: UTF8String;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION ATTRIBUTE */

/* eslint-enable */
