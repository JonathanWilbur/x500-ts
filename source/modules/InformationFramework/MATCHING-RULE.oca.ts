/* eslint-disable */
import { OBJECT_IDENTIFIER, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION MATCHING_RULE */
/**
 * @summary MATCHING_RULE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MATCHING-RULE ::= CLASS {
 *   &ParentMatchingRules    MATCHING-RULE OPTIONAL,
 *   &AssertionType          OPTIONAL,
 *   &uniqueMatchIndicator   ATTRIBUTE OPTIONAL,
 *   &ldapSyntax             SYNTAX-NAME.&id OPTIONAL,
 *   &ldapName               SEQUENCE SIZE(1..MAX) OF UTF8String OPTIONAL,
 *   &ldapDesc               UTF8String OPTIONAL,
 *   &id                     OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   [PARENT                 &ParentMatchingRules]
 *   [SYNTAX                 &AssertionType]
 *   [UNIQUE-MATCH-INDICATOR &uniqueMatchIndicator]
 *   [LDAP-SYNTAX            &ldapSyntax]
 *   [LDAP-NAME              &ldapName]
 *   [LDAP-DESC              &ldapDesc]
 *   ID                      &id }
 * ```
 *
 * @interface
 */
export interface MATCHING_RULE<
    AssertionType = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "MATCHING-RULE";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof MATCHING_RULE<AssertionType>]: $.ASN1Decoder<
                MATCHING_RULE<AssertionType>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof MATCHING_RULE<AssertionType>]: $.ASN1Encoder<
                MATCHING_RULE<AssertionType>[_K]
            >;
        }
    >;
    /**
     * @summary &ParentMatchingRules
     */
    readonly "&ParentMatchingRules"?: MATCHING_RULE[];
    /**
     * @summary &AssertionType
     */
    readonly "&AssertionType": AssertionType;
    /**
     * @summary &uniqueMatchIndicator
     */
    readonly "&uniqueMatchIndicator"?: ATTRIBUTE;
    /**
     * @summary &ldapSyntax
     */
    readonly "&ldapSyntax"?: OBJECT_IDENTIFIER;
    /**
     * @summary &ldapName
     */
    readonly "&ldapName"?: UTF8String[];
    /**
     * @summary &ldapDesc
     */
    readonly "&ldapDesc"?: UTF8String;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION MATCHING_RULE */

/* eslint-enable */
