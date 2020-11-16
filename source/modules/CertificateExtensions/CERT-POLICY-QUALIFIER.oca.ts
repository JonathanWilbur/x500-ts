/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION CERT_POLICY_QUALIFIER */
/**
 * @summary CERT_POLICY_QUALIFIER
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CERT-POLICY-QUALIFIER ::= CLASS {
 *   &id                  OBJECT IDENTIFIER UNIQUE,
 *   &Qualifier           OPTIONAL }
 * WITH SYNTAX {
 *   POLICY-QUALIFIER-ID &id
 *   [QUALIFIER-TYPE     &Qualifier] }
 * ```
 *
 * @interface
 */
export interface CERT_POLICY_QUALIFIER<
    Qualifier = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "CERT-POLICY-QUALIFIER";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof CERT_POLICY_QUALIFIER<Qualifier>]: $.ASN1Decoder<
                CERT_POLICY_QUALIFIER<Qualifier>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof CERT_POLICY_QUALIFIER<Qualifier>]: $.ASN1Encoder<
                CERT_POLICY_QUALIFIER<Qualifier>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Qualifier
     */
    readonly "&Qualifier": Qualifier;
}
/* END_OF_SYMBOL_DEFINITION CERT_POLICY_QUALIFIER */

/* eslint-enable */
