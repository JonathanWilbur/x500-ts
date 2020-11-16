/* eslint-disable */
import { OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";

/* START_OF_SYMBOL_DEFINITION MATCHING_RESTRICTION */
/**
 * @summary MATCHING_RESTRICTION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MATCHING-RESTRICTION ::= CLASS {
 *   &Restriction,
 *   &Rules                MATCHING-RULE.&id,
 *   &id                   OBJECT IDENTIFIER  UNIQUE }
 * WITH SYNTAX {
 *   RESTRICTION           &Restriction
 *   RULES                 &Rules
 *   ID                    &id }
 * ```
 *
 * @interface
 */
export interface MATCHING_RESTRICTION<
    Restriction = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "MATCHING-RESTRICTION";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof MATCHING_RESTRICTION<Restriction>]: $.ASN1Decoder<
                MATCHING_RESTRICTION<Restriction>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof MATCHING_RESTRICTION<Restriction>]: $.ASN1Encoder<
                MATCHING_RESTRICTION<Restriction>[_K]
            >;
        }
    >;
    /**
     * @summary &Restriction
     */
    readonly "&Restriction": Restriction;
    /**
     * @summary &Rules
     */
    readonly "&Rules"?: OBJECT_IDENTIFIER;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION MATCHING_RESTRICTION */

/* eslint-enable */
