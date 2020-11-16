/* eslint-disable */
import { BOOLEAN, OBJECT_IDENTIFIER, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { AttributeUsage } from "../InformationFramework/AttributeUsage.ta";
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION ATTRIBUTE */
/**
 * @summary ATTRIBUTE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ATTRIBUTE ::= CLASS {
 *   &derivation               ATTRIBUTE OPTIONAL,
 *   &Type                     OPTIONAL, -- either &Type or &derivation required
 *   &equality-match           MATCHING-RULE OPTIONAL,
 *   &ordering-match           MATCHING-RULE OPTIONAL,
 *   &substrings-match         MATCHING-RULE OPTIONAL,
 *   &single-valued            BOOLEAN DEFAULT FALSE,
 *   &collective               BOOLEAN DEFAULT FALSE,
 *   &dummy                    BOOLEAN DEFAULT FALSE,
 *   -- operational extensions
 *   &no-user-modification     BOOLEAN DEFAULT FALSE,
 *   &usage                    AttributeUsage DEFAULT userApplications,
 *   &ldapSyntax               SYNTAX-NAME.&id OPTIONAL,
 *   &ldapName                 SEQUENCE SIZE(1..MAX) OF UTF8String OPTIONAL,
 *   &ldapDesc                 UTF8String OPTIONAL,
 *   &obsolete                 BOOLEAN DEFAULT FALSE,
 *   &id                       OBJECT IDENTIFIER UNIQUE }
 * WITH SYNTAX {
 *   [SUBTYPE OF               &derivation]
 *   [WITH SYNTAX              &Type]
 *   [EQUALITY MATCHING RULE   &equality-match]
 *   [ORDERING MATCHING RULE   &ordering-match]
 *   [SUBSTRINGS MATCHING RULE &substrings-match]
 *   [SINGLE VALUE             &single-valued]
 *   [COLLECTIVE               &collective]
 *   [DUMMY                    &dummy]
 *   [NO USER MODIFICATION     &no-user-modification]
 *   [USAGE                    &usage]
 *   [LDAP-SYNTAX              &ldapSyntax]
 *   [LDAP-NAME                &ldapName]
 *   [LDAP-DESC                &ldapDesc]
 *   [OBSOLETE                 &obsolete]
 *   ID                        &id }
 * ```
 *
 * @interface
 */
export interface ATTRIBUTE<Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */> {
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
            [_K in keyof ATTRIBUTE<Type>]: $.ASN1Decoder<ATTRIBUTE<Type>[_K]>;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof ATTRIBUTE<Type>]: $.ASN1Encoder<ATTRIBUTE<Type>[_K]>;
        }
    >;
    /**
     * @summary &derivation
     */
    readonly "&derivation"?: ATTRIBUTE;
    /**
     * @summary &Type
     */
    readonly "&Type": Type;
    /**
     * @summary &equality-match
     */
    readonly "&equality-match"?: MATCHING_RULE;
    /**
     * @summary &ordering-match
     */
    readonly "&ordering-match"?: MATCHING_RULE;
    /**
     * @summary &substrings-match
     */
    readonly "&substrings-match"?: MATCHING_RULE;
    /**
     * @summary &single-valued
     */
    readonly "&single-valued"?: BOOLEAN;
    /**
     * @summary &collective
     */
    readonly "&collective"?: BOOLEAN;
    /**
     * @summary &dummy
     */
    readonly "&dummy"?: BOOLEAN;
    /**
     * @summary &no-user-modification
     */
    readonly "&no-user-modification"?: BOOLEAN;
    /**
     * @summary &usage
     */
    readonly "&usage"?: AttributeUsage;
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
     * @summary &obsolete
     */
    readonly "&obsolete"?: BOOLEAN;
    /**
     * @summary &id
     */
    readonly "&id"?: OBJECT_IDENTIFIER;
}
/* END_OF_SYMBOL_DEFINITION ATTRIBUTE */

/* eslint-enable */
