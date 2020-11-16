/* eslint-disable */
import { OBJECT_IDENTIFIER, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION NAME_FORM */
/**
 * @summary NAME_FORM
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NAME-FORM ::= CLASS {
 *   &namedObjectClass     OBJECT-CLASS,
 *   &MandatoryAttributes  ATTRIBUTE,
 *   &OptionalAttributes   ATTRIBUTE OPTIONAL,
 *   &ldapName             SEQUENCE SIZE(1..MAX) OF UTF8String OPTIONAL,
 *   &ldapDesc             UTF8String OPTIONAL,
 *   &id                   OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   NAMES                 &namedObjectClass
 *   WITH ATTRIBUTES       &MandatoryAttributes
 *   [AND OPTIONALLY       &OptionalAttributes]
 *   [LDAP-NAME            &ldapName]
 *   [LDAP-DESC            &ldapDesc]
 *   ID                    &id }
 * ```
 *
 * @interface
 */
export interface NAME_FORM {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: "NAME-FORM";
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof NAME_FORM]: $.ASN1Decoder<NAME_FORM[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof NAME_FORM]: $.ASN1Encoder<NAME_FORM[_K]>;
        }
    >;
    /**
     * @summary &namedObjectClass
     */
    readonly "&namedObjectClass"?: OBJECT_CLASS;
    /**
     * @summary &MandatoryAttributes
     */
    readonly "&MandatoryAttributes"?: ATTRIBUTE[];
    /**
     * @summary &OptionalAttributes
     */
    readonly "&OptionalAttributes"?: ATTRIBUTE[];
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
/* END_OF_SYMBOL_DEFINITION NAME_FORM */

/* eslint-enable */
