/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION EXTENSION */
/**
 * @summary EXTENSION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EXTENSION ::= CLASS {
 *   &id           OBJECT IDENTIFIER UNIQUE,
 *   &ExtnType }
 * WITH SYNTAX {
 *   SYNTAX        &ExtnType
 *   IDENTIFIED BY &id }
 * ```
 *
 * @interface
 */
export interface EXTENSION<
    ExtnType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "EXTENSION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof EXTENSION<ExtnType>]: $.ASN1Decoder<
                EXTENSION<ExtnType>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof EXTENSION<ExtnType>]: $.ASN1Encoder<
                EXTENSION<ExtnType>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &ExtnType
     */
    readonly "&ExtnType": ExtnType;
}
/* END_OF_SYMBOL_DEFINITION EXTENSION */

/* eslint-enable */
