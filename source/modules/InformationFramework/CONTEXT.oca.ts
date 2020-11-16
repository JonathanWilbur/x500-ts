/* eslint-disable */
import { BOOLEAN, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CONTEXT */
/**
 * @summary CONTEXT
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CONTEXT ::= CLASS {
 *   &Type,
 *   &defaultValue   &Type OPTIONAL,
 *   &Assertion      OPTIONAL,
 *   &absentMatch    BOOLEAN DEFAULT TRUE,
 *   &id             OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   WITH SYNTAX     &Type
 *   [DEFAULT-VALUE  &defaultValue]
 *   [ASSERTED AS    &Assertion]
 *   [ABSENT-MATCH   &absentMatch]
 *   ID              &id }
 * ```
 *
 * @interface
 */
export interface CONTEXT<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Assertion = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "CONTEXT";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof CONTEXT<Type, Assertion>]: $.ASN1Decoder<
                CONTEXT<Type, Assertion>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof CONTEXT<Type, Assertion>]: $.ASN1Encoder<
                CONTEXT<Type, Assertion>[_K]
            >;
        }
    >;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
    /**
     * @summary &defaultValue
     */
    readonly "&defaultValue"?: CONTEXT["&Type"];
    /**
     * @summary &Assertion
     */
    readonly "&Assertion": Assertion;
    /**
     * @summary &absentMatch
     */
    readonly "&absentMatch"?: BOOLEAN;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION CONTEXT */

/* eslint-enable */
