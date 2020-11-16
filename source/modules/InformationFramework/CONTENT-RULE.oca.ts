/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION CONTENT_RULE */
/**
 * @summary CONTENT_RULE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CONTENT-RULE ::= CLASS {
 *   &structuralClass          OBJECT-CLASS.&id UNIQUE,
 *   &Auxiliaries              OBJECT-CLASS OPTIONAL,
 *   &Mandatory                ATTRIBUTE OPTIONAL,
 *   &Optional                 ATTRIBUTE OPTIONAL,
 *   &Precluded                ATTRIBUTE OPTIONAL }
 * WITH SYNTAX {
 *   STRUCTURAL OBJECT-CLASS   &structuralClass
 *   [AUXILIARY OBJECT-CLASSES &Auxiliaries]
 *   [MUST CONTAIN             &Mandatory]
 *   [MAY CONTAIN              &Optional]
 *   [MUST-NOT CONTAIN         &Precluded] }
 * ```
 *
 * @interface
 */
export interface CONTENT_RULE {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "CONTENT-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof CONTENT_RULE]: $.ASN1Decoder<CONTENT_RULE[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof CONTENT_RULE]: $.ASN1Encoder<CONTENT_RULE[_K]>;
        }
    >;
    /**
     * @summary &structuralClass
     */
    readonly "&structuralClass"?: OBJECT_IDENTIFIER;
    /**
     * @summary &Auxiliaries
     */
    readonly "&Auxiliaries"?: OBJECT_CLASS[];
    /**
     * @summary &Mandatory
     */
    readonly "&Mandatory"?: ATTRIBUTE[];
    /**
     * @summary &Optional
     */
    readonly "&Optional"?: ATTRIBUTE[];
    /**
     * @summary &Precluded
     */
    readonly "&Precluded"?: ATTRIBUTE[];
}
/* END_OF_SYMBOL_DEFINITION CONTENT_RULE */

/* eslint-enable */
